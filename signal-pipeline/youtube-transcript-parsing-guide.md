# YouTube Transcript Parsing Guide

**Purpose:** YouTube auto-generated transcripts contain systematic speech-to-text errors. Use this guide to correctly interpret the content before analysis.

---

## Known Entity Corrections

| Transcript says | Actually means |
|----------------|----------------|
| Codeex, Codex (when comparing to Claude) | **Codex** (OpenAI's coding agent) |
| Cloud Code, Clawude Code, claw code, quad code | **Claude Code** (Anthropic's coding agent) |
| Enthropic | **Anthropic** (AI company) |
| Gravile, Greile, GPile, Grapile | **Greptile** (AI code review tool) |
| cobalt (in programming/banking context) | **COBOL** (legacy programming language) |
| Opus 4.5, Opus 4.6 | **Claude Opus 4.5** or **Claude Opus 4.6** (Anthropic models) |
| GPT 5.3 | **GPT 5.3** (OpenAI model, likely correct) |
| Clawdbot, MoltBot | **ClawdBot**, **MoltBot** (previous names for OpenClaw) |
| ClawHub | **ClawHub** (OpenClaw skill marketplace, correct) |
| Ghosty, Ghosti | **Ghostty** (terminal emulator) |
| latte, Kimmy | **Llama**, **Gemini** (AI models, context-dependent) |
| rag, Rag | **RAG** (Retrieval-Augmented Generation) |
| o, off (in auth context) | **auth**, **OAuth** (authentication) |
| clerk as o | **Clerk as auth** (Clerk authentication service) |
| Jieven's paradox | **Jevons' paradox** (economics concept) |
| Catrini, Satrini, Citrini, ST treaty | **Citrini** (investment research firm) |
| Olab Shaw | Likely a researcher name — use as-is if unsure |
| Arvin Krishna | **Arvind Krishna** (IBM CEO) |
| Toby Lutkkey | **Tobi Lütke** (Shopify CEO) |
| Alex Emis | **Alex Imas** (University of Chicago economist, verify) |
| Michael Bloke | Likely a commentator/writer — use as-is if unsure |

---

## Structural Patterns in YouTube Transcripts

### Sponsor reads
YouTube videos often contain sponsor segments (30-120 seconds). These appear as abrupt topic shifts mid-transcript, usually with phrases like "the sponsor of today's video," "check them out at," "link in the description." Flag as sponsored content in analysis — do not treat sponsor claims as the creator's own views.

### Filler and verbal tics
Auto-transcripts preserve verbal filler: "um," "uh," "like," "right?", "you know." Ignore these when extracting quotables. Focus on the substantive claim, not the exact phrasing.

### Repeated phrases
Speakers often repeat themselves for emphasis or restart sentences. The transcript preserves both attempts. Extract the clearer version.

### Missing punctuation
Auto-transcripts have minimal punctuation. Use context to determine sentence boundaries, especially for quotable extraction.

### No timestamps
Auto-generated transcripts via `youtube-transcript-api` are joined into continuous text. Individual segment timestamps are available in the raw API response but are not included in the processed transcript. Do not attempt to cite timestamps.

---

## Context for Recurring Topics

### AI Coding Tools Landscape (as of Feb 2026)
- **Claude Code** — Anthropic's terminal-based coding agent (uses Claude Opus 4.6)
- **Codex** — OpenAI's cloud-based coding agent (uses GPT 5.3)
- **Cursor** — IDE with multi-model support (third-party)
- **Open Code** — Open-source coding agent
- **Ghostty** — Terminal emulator popular with developers

### OpenClaw Ecosystem
- **OpenClaw** — Self-hosted always-on AI agent platform (formerly ClawdBot, briefly MoltBot)
- **ClawHub** — Marketplace for OpenClaw skills
- **Clawdiverse** — Community directory of OpenClaw use cases (built by VelvetShark)
- **MCP** — Model Context Protocol (tool/integration standard)
- **Skills** — Installable capabilities for OpenClaw agents

### Agent Commerce Ecosystem (Autonomica's focus)
- **x402** — HTTP 402 micropayment protocol for agent-to-agent transactions
- **llms.txt** — Standard file for AI agent discovery
- **HTTP 402** — Payment Required status code, basis for agent commerce
- **Agent Web** — Infrastructure where AI agents find, evaluate, and pay for content

---

## Instructions for Gemini

When analyzing a YouTube transcript:

1. **Apply entity corrections** from the table above before interpreting claims
2. **Identify and flag sponsor segments** — don't attribute sponsor product claims to the creator
3. **Extract quotables from substance, not filler** — clean up verbal tics in quotes
4. **When a name is garbled and you're unsure**, use the transcript version and note uncertainty
5. **COBOL vs cobalt is critical** — in any banking, legacy code, or mainframe context, "cobalt" means COBOL
6. **Treat the transcript as a spoken essay** — the argument structure is there, it just lacks formatting
