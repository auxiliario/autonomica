"""
7-pass Gemini analysis module.
Sends raw_content through a single Gemini call with 7 analysis passes.
"""

import json
import os
import re

from google import genai
from dotenv import load_dotenv

from config import GEMINI_MODEL, GEMINI_TEMPERATURE, GEMINI_MAX_OUTPUT_TOKENS

load_dotenv()


def load_parsing_guide():
    """Load the YouTube transcript parsing guide for system instructions."""
    guide_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "youtube-transcript-parsing-guide.md")
    if os.path.exists(guide_path):
        with open(guide_path, "r", encoding="utf-8") as f:
            return f.read()
    return ""


SYSTEM_INSTRUCTIONS = """You are a signal analyst for Autonomica, an intelligence platform tracking the Agent Web ecosystem — where AI agents discover, evaluate, and pay for structured content via HTTP 402 micropayments, llms.txt, and /agent/ endpoints.

You will receive content to analyze. Some content comes from YouTube transcripts with auto-generated speech-to-text, which contains systematic errors. Apply the corrections from the YouTube Transcript Parsing Guide below before interpreting any claims.

--- YOUTUBE TRANSCRIPT PARSING GUIDE ---

{parsing_guide}

--- END PARSING GUIDE ---

IMPORTANT:
- Apply entity corrections BEFORE interpreting claims
- Identify and flag sponsor segments — do not attribute sponsor product claims to the creator
- Extract quotables from substance, not filler — clean up verbal tics
- When a name is garbled and you're unsure, use the transcript version and note uncertainty
- Treat the transcript as a spoken essay — the argument structure is there, it just lacks formatting
"""


ANALYSIS_PROMPT = """Analyze the following content through 7 passes. You MUST start each pass with its exact header line on its own line. This is critical for parsing.

REQUIRED FORMAT — each pass MUST begin with its header exactly as shown:

PASS 1 — SUMMARIZE
(your content here)

PASS 2 — WHAT STOOD OUT
(your content here)

...and so on for all 7 passes.

IMPORTANT FORMATTING RULES:
- Every pass MUST start with its "PASS N — TITLE" header on its own line. Do not skip headers.
- For Passes 1-5, write the content directly after the header line.
- For Passes 6 and 7, write ONLY the raw JSON object after the header. No markdown code fences. Start directly with { and end with }.

PASS 1 — SUMMARIZE
Core signal in 2-3 sentences. What happened and why it matters. Lead with the most important thing — don't bury the lead.

PASS 2 — WHAT STOOD OUT
Novel claims, surprising data points, or non-obvious insights. Cite specific numbers or assertions from the content. If nothing is genuinely novel, say so.

PASS 3 — QUOTABLES
2-3 shareable lines from the content. For each, explain in one sentence why it hits. These should be exact quotes when possible, or close paraphrases. If chapter timestamps are available in the description, reference the nearest chapter for each quotable. Distinguish between the creator's own words and quotes they are citing from other sources.

PASS 4 — CRITICIZE
Weak arguments, unsubstantiated claims, logical gaps, missing context. Be specific: name the exact claim that is weak and explain exactly why. One precise criticism is worth more than three vague ones. If the content is promotional, say so. If claims lack evidence, say so. If the creator has a conflict of interest (sponsor, product creator, investor), name it. This pass is the editorial voice — it's what makes the signal worth reading.

PASS 5 — EXPAND
How does this connect to the Agent Web thesis? Consider: agent discovery, HTTP 402 micropayments, llms.txt adoption, structured content, trust infrastructure, machine-to-machine commerce. What should builders take from this?

CRITICAL: If this content has no meaningful connection to agent commerce, HTTP 402, or structured content monetization, say "No direct connection" and explain briefly what the content IS about instead. Do NOT manufacture connections. Do NOT stretch thin analogies to justify relevance. Honest "not relevant" assessments are more valuable than forced connections.

PASS 6 — SIGNAL JSON
Return ONLY valid JSON, no prefix text:
{
  "headline": "Short, sharp headline (max 80 chars)",
  "slug": "yyyy-mm-dd-kebab-case-slug",
  "summary": "One paragraph, 2-3 sentences",
  "autonomica_context": "Why this matters for agent commerce (1-2 sentences). If no connection, say 'No direct agent commerce relevance.'",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "entities": ["Company", "Person", "Protocol"],
  "seo_description": "Meta description, max 155 chars",
  "route_suggestion": "autonomica|auxiliar|both|neither",
  "route_rationale": "One sentence explaining the routing suggestion"
}

TAG GUIDELINES: Prefer these existing tags when applicable. Add new tags only when no existing tag fits.
Ecosystem: OpenClaw, MCP, Agent Architecture, Agent Commerce, x402, HTTP-402, llms.txt
Content type: Self-Hosted AI, AI Coding, Vibe Coding, AI Tools, Building-with-AI
Market: AI Economics, Market Analysis, Enterprise AI, AI Adoption
Technical: Markdown-First, API Design, Agent Standards, Trust Infrastructure

ROUTE DEFINITIONS:
- "autonomica" = directly about agent commerce, HTTP 402, agent discovery, structured content monetization, MCP as agent infrastructure
- "auxiliar" = about AI tools, coding, building with AI, but not specifically agent commerce
- "both" = has clear relevance to both
- "neither" = off-topic for both properties

PASS 7 — SOURCE METADATA
Return ONLY valid JSON, no prefix text:
{
  "content_type": "tutorial|commentary|announcement|interview|demo|analysis|review",
  "keyword_freq": {"keyword": count},
  "entities": ["entity1", "entity2"],
  "persons": ["person1", "person2"],
  "claims": ["specific claim with numbers if any"],
  "source_links": ["any URLs mentioned in spoken content only"],
  "contains": {
    "code_snippets": true/false,
    "data_tables": true/false,
    "api_references": true/false,
    "demos": true/false,
    "pricing_info": true/false,
    "sponsor_segment": true/false
  },
  "implementation_value": "high|medium|low|none"
}

NOTE: Do NOT include "word_count" — it is calculated separately. For "source_links", extract only URLs mentioned in the spoken transcript. URLs from the video description are captured separately.

--- CONTENT TO ANALYZE ---

"""


def clean_pass_content(content):
    """Remove pass labels Gemini adds to the beginning of content."""
    prefixes_to_strip = [
        "SUMMARIZE\n",
        "SUMMARIZE:\n",
        "SUMMARY\n",
        "SUMMARY:\n",
        "JSON\n",
        "JSON:\n",
        "METADATA\n",
        "METADATA:\n",
        "STOOD OUT\n",
        "STOOD OUT:\n",
        "WHAT STOOD OUT\n",
        "WHAT STOOD OUT:\n",
        "QUOTABLES\n",
        "QUOTABLES:\n",
        "CRITICIZE\n",
        "CRITICIZE:\n",
        "CRITICISM\n",
        "CRITICISM:\n",
        "EXPAND\n",
        "EXPAND:\n",
        "EXPANSION\n",
        "EXPANSION:\n",
        "SIGNAL JSON\n",
        "SIGNAL JSON:\n",
        "SOURCE METADATA\n",
        "SOURCE METADATA:\n",
    ]
    content = content.strip()
    for prefix in prefixes_to_strip:
        if content.upper().startswith(prefix.upper()):
            content = content[len(prefix):].strip()
    return content


def extract_urls(text):
    """Extract all URLs from text."""
    url_pattern = r'https?://[^\s<>")\]\']+'
    urls = re.findall(url_pattern, text)
    return [url.rstrip(".,;:") for url in urls]


def _find_json_blocks(text):
    """Find all top-level JSON objects in text. Returns list of (start, end, parsed) tuples."""
    blocks = []
    i = 0
    while i < len(text):
        if text[i] == '{':
            # Try to find matching closing brace
            depth = 0
            in_string = False
            escape_next = False
            for j in range(i, len(text)):
                if escape_next:
                    escape_next = False
                    continue
                ch = text[j]
                if ch == '\\' and in_string:
                    escape_next = True
                    continue
                if ch == '"' and not escape_next:
                    in_string = not in_string
                    continue
                if not in_string:
                    if ch == '{':
                        depth += 1
                    elif ch == '}':
                        depth -= 1
                        if depth == 0:
                            json_str = text[i:j+1]
                            try:
                                parsed = json.loads(json_str)
                                blocks.append((i, j+1, parsed))
                            except json.JSONDecodeError:
                                pass
                            i = j + 1
                            break
            else:
                i += 1
        else:
            i += 1
    return blocks


def parse_passes(raw_response):
    """Parse Gemini response into 7 separate passes.

    Strategy:
    1. Try header-based parsing (PASS 1 — SUMMARIZE, etc.)
    2. If headers are missing, fall back to structure-based parsing using
       JSON block positions as anchors for passes 6 & 7, and paragraph
       boundaries for passes 1-5.

    Returns a dict with keys: summary, stood_out, quotables, criticism,
    expansion, signal_json, source_metadata, raw_response.
    """
    text = raw_response

    # Define pass boundaries
    pass_headers = [
        ("PASS 1", "summary"),
        ("PASS 2", "stood_out"),
        ("PASS 3", "quotables"),
        ("PASS 4", "criticism"),
        ("PASS 5", "expansion"),
        ("PASS 6", "signal_json"),
        ("PASS 7", "source_metadata"),
    ]

    result = {"raw_response": text}

    # ── Strategy 1: Header-based parsing ──
    pass_positions = []
    for i, (header, key) in enumerate(pass_headers):
        pattern = re.compile(rf"PASS\s+{i+1}\s*[—\-–]+\s*\w+", re.IGNORECASE)
        match = pattern.search(text)
        if match:
            pass_positions.append((i, key, match.start(), match.end()))

    found_with_headers = len(pass_positions)

    if found_with_headers >= 5:
        # Enough headers found — use header-based parsing
        # If PASS 1 is not found but others are, content before first pass is the summary
        if pass_positions and pass_positions[0][0] != 0:
            first_pass_start = pass_positions[0][2]
            content = text[:first_pass_start].strip()
            content = clean_pass_content(content)
            if content:
                result["summary"] = content

        for idx, (i, key, match_start, match_end) in enumerate(pass_positions):
            start = match_end
            if idx + 1 < len(pass_positions):
                end = pass_positions[idx + 1][2]
            else:
                end = len(text)
            content = text[start:end].strip()
            content = clean_pass_content(content)
            result[key] = content
    else:
        # ── Strategy 2: Structure-based fallback ──
        # Gemini sometimes omits headers entirely. Parse by structure:
        # - Find JSON blocks (passes 6 & 7)
        # - Split pre-JSON text into paragraphs (passes 1-5)
        print(f"  [INFO] Only {found_with_headers}/7 pass headers found — using structure-based parser")

        # Strip markdown code fences
        clean_text = re.sub(r"```json\s*", "", text)
        clean_text = re.sub(r"```\s*", "", clean_text)

        # Find JSON blocks
        json_blocks = _find_json_blocks(clean_text)

        if len(json_blocks) >= 2:
            # Last two JSON blocks are signal_json and source_metadata
            signal_block = json_blocks[-2]
            metadata_block = json_blocks[-1]

            result["signal_json"] = clean_text[signal_block[0]:signal_block[1]]
            result["source_metadata"] = clean_text[metadata_block[0]:metadata_block[1]]

            # Everything before the first JSON block is passes 1-5
            pre_json_text = clean_text[:signal_block[0]].strip()
        elif len(json_blocks) == 1:
            # Only one JSON block — assume it's signal_json
            signal_block = json_blocks[0]
            result["signal_json"] = clean_text[signal_block[0]:signal_block[1]]
            pre_json_text = clean_text[:signal_block[0]].strip()
        else:
            pre_json_text = clean_text.strip()

        # Split pre-JSON text into paragraphs (double newline separated)
        paragraphs = [p.strip() for p in re.split(r'\n\s*\n', pre_json_text) if p.strip()]

        # Map paragraphs to passes 1-5
        # Pass 1 (summary): 1 paragraph
        # Pass 2 (stood_out): 1 paragraph
        # Pass 3 (quotables): usually multiple quoted lines — often 1+ paragraphs
        # Pass 4 (criticism): 1 paragraph
        # Pass 5 (expansion): 1 paragraph
        pass_keys_1_5 = ["summary", "stood_out", "quotables", "criticism", "expansion"]

        if len(paragraphs) >= 5:
            # 5+ paragraphs: first is summary, second is stood_out,
            # middle section(s) are quotables, second-to-last is criticism, last is expansion
            result["summary"] = paragraphs[0]
            result["stood_out"] = paragraphs[1]
            result["quotables"] = "\n\n".join(paragraphs[2:-2])
            result["criticism"] = paragraphs[-2]
            result["expansion"] = paragraphs[-1]
        elif len(paragraphs) == 4:
            result["summary"] = paragraphs[0]
            result["stood_out"] = paragraphs[1]
            result["quotables"] = paragraphs[2]
            result["criticism"] = paragraphs[3]
        elif len(paragraphs) == 3:
            result["summary"] = paragraphs[0]
            result["stood_out"] = paragraphs[1]
            result["quotables"] = paragraphs[2]
        elif len(paragraphs) == 2:
            result["summary"] = paragraphs[0]
            result["stood_out"] = paragraphs[1]
        elif len(paragraphs) == 1:
            result["summary"] = paragraphs[0]

    # Fill in any missing passes as None
    for _, key in pass_headers:
        if key not in result:
            result[key] = None

    # Try to parse JSON from passes 6 and 7
    for json_key in ["signal_json", "source_metadata"]:
        if result.get(json_key):
            try:
                json_text = result[json_key]
                json_text = re.sub(r"```json\s*", "", json_text)
                json_text = re.sub(r"```\s*", "", json_text)
                json_match = re.search(r"\{[\s\S]*\}", json_text)
                if json_match:
                    parsed = json.loads(json_match.group())
                    result[json_key + "_parsed"] = parsed
                else:
                    result[json_key + "_parsed"] = None
                    print(f"  [WARN] No JSON object found in {json_key}")
            except json.JSONDecodeError as e:
                result[json_key + "_parsed"] = None
                print(f"  [WARN] Failed to parse JSON in {json_key}: {e}")

    return result


def _call_gemini(client, system_prompt, full_prompt):
    """Single Gemini API call. Returns (result_dict, response) or (None, None) on failure."""
    try:
        response = client.models.generate_content(
            model=GEMINI_MODEL,
            contents=full_prompt,
            config=genai.types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=GEMINI_TEMPERATURE,
                max_output_tokens=GEMINI_MAX_OUTPUT_TOKENS,
            ),
        )

        raw_response = response.text
        if not raw_response:
            print("  [ERROR] Empty response from Gemini")
            return None, None

        # Check for truncation via finish_reason
        truncated = False
        finish_reason = None
        if hasattr(response, "candidates") and response.candidates:
            candidate = response.candidates[0]
            finish_reason = getattr(candidate, "finish_reason", None)
            if finish_reason and str(finish_reason) in ("MAX_TOKENS", "2", "FinishReason.MAX_TOKENS"):
                truncated = True
                print(f"  [FLAG] Response was TRUNCATED (finish_reason={finish_reason})")

        # Parse into 7 passes
        result = parse_passes(raw_response)

        # Check for missing passes
        expected_passes = ["summary", "stood_out", "quotables", "criticism", "expansion", "signal_json", "source_metadata"]
        missing = [p for p in expected_passes if result.get(p) is None]

        result["truncated"] = truncated
        result["finish_reason"] = str(finish_reason) if finish_reason else None
        result["missing_passes"] = missing

        # Extract token usage and estimate cost
        token_usage = {}
        if hasattr(response, "usage_metadata") and response.usage_metadata:
            usage = response.usage_metadata
            prompt_tokens = getattr(usage, "prompt_token_count", 0) or 0
            output_tokens = getattr(usage, "candidates_token_count", 0) or 0
            total_tokens = getattr(usage, "total_token_count", 0) or 0
            cost = (prompt_tokens * 0.10 / 1_000_000) + (output_tokens * 0.40 / 1_000_000)
            token_usage = {
                "prompt_tokens": prompt_tokens,
                "output_tokens": output_tokens,
                "total_tokens": total_tokens,
                "estimated_cost_usd": round(cost, 6),
            }
            print(f"  Tokens: {prompt_tokens:,} in / {output_tokens:,} out = ${cost:.6f}")

        result["token_usage"] = token_usage
        return result, response

    except Exception as e:
        print(f"  [ERROR] Gemini API call failed: {e}")
        return None, None


MAX_RETRIES = 3


def analyze_signal(raw_content, source_type="youtube"):
    """Run 7-pass Gemini analysis on raw_content with automatic retry.

    Retries up to MAX_RETRIES times if any of the 7 passes are missing.
    Each retry accumulates token usage and cost.

    Args:
        raw_content: The assembled raw content string
        source_type: Content source type (affects system prompt)

    Returns:
        Dict with parsed passes + token_usage, or None on failure
    """
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("  [ERROR] GEMINI_API_KEY not set in .env")
        return None

    # Build system instructions with parsing guide
    parsing_guide = load_parsing_guide() if source_type == "youtube" else ""
    system_prompt = SYSTEM_INSTRUCTIONS.format(parsing_guide=parsing_guide)

    # Build the full prompt
    full_prompt = ANALYSIS_PROMPT + raw_content

    client = genai.Client(api_key=api_key)

    total_prompt_tokens = 0
    total_output_tokens = 0
    total_cost = 0.0

    for attempt in range(1, MAX_RETRIES + 1):
        if attempt > 1:
            print(f"  [RETRY] Attempt {attempt}/{MAX_RETRIES} — previous attempt had missing passes")

        result, response = _call_gemini(client, system_prompt, full_prompt)

        if result is None:
            if attempt < MAX_RETRIES:
                continue
            print(f"  [ERROR] All {MAX_RETRIES} attempts failed")
            return None

        # Accumulate token usage across retries
        tu = result.get("token_usage", {})
        total_prompt_tokens += tu.get("prompt_tokens", 0)
        total_output_tokens += tu.get("output_tokens", 0)
        total_cost += tu.get("estimated_cost_usd", 0)

        missing = result.get("missing_passes", [])
        if not missing:
            # All 7 passes present — success
            result["token_usage"] = {
                "prompt_tokens": total_prompt_tokens,
                "output_tokens": total_output_tokens,
                "total_tokens": total_prompt_tokens + total_output_tokens,
                "estimated_cost_usd": round(total_cost, 6),
                "attempts": attempt,
            }
            if attempt > 1:
                print(f"  [OK] All 7 passes present after {attempt} attempts (total cost: ${total_cost:.6f})")
            return result

        # Missing passes — log and retry
        print(f"  [FLAG] Attempt {attempt}: missing passes: {', '.join(missing)}")

    # Exhausted retries — return best result with flags
    print(f"  [ERROR] Still missing passes after {MAX_RETRIES} attempts: {', '.join(result.get('missing_passes', []))}")
    result["token_usage"] = {
        "prompt_tokens": total_prompt_tokens,
        "output_tokens": total_output_tokens,
        "total_tokens": total_prompt_tokens + total_output_tokens,
        "estimated_cost_usd": round(total_cost, 6),
        "attempts": MAX_RETRIES,
    }
    return result
