"""
Signal pipeline configuration.
Source definitions, keyword relevance matrix, and LLM settings.
"""

# YouTube sources with hardcoded channel IDs (resolved Feb 2026)
YOUTUBE_SOURCES = [
    {
        "handle": "@rasmic",
        "channel_id": "UCBX__dPYqDFqAN4QcWbnUbw",
        "creator": "Michael Shimeles",
        "source_name": "Ras Mic",
        "source_type": "youtube",
        "tier": 1,
        "default_tags": ["ai-coding", "vibe-coding", "full-stack"],
    },
    {
        "handle": "@NateBJones",
        "channel_id": "UC0C-17n9iuUQPylguM1d-lQ",
        "creator": "Nate B. Jones",
        "source_name": "Nate B. Jones",
        "source_type": "youtube",
        "tier": 1,
        "default_tags": ["agent-commerce", "x402", "agent-web"],
    },
    {
        "handle": "@velvetshark-com",
        "channel_id": "UCWtiKY_NPl9hGexYd5rk0kg",
        "creator": "Radek Sienkiewicz",
        "source_name": "VelvetShark",
        "source_type": "youtube",
        "tier": 1,
        "default_tags": ["ai-tools", "building-with-ai"],
    },
]

# Keyword relevance scoring matrix
RELEVANCE_KEYWORDS = {
    # High weight (3) — direct agent commerce terms
    "x402": 3,
    "llms.txt": 3,
    "agent commerce": 3,
    "micropayment": 3,
    "http 402": 3,
    "agent web": 3,
    "machine economy": 3,
    "mcp": 3,
    "tool use": 3,
    "agent discovery": 3,
    "agent directory": 3,
    # Medium weight (2) — adjacent concepts
    "ai agent": 2,
    "autonomous agent": 2,
    "structured content": 2,
    "api monetization": 2,
    "content paywall": 2,
    "agent skill": 2,
    "agent adoption": 2,
    "agent integration": 2,
    "trust infrastructure": 2,
    "machine to machine": 2,
    "agentic": 2,
    "agent protocol": 2,
    "ai deployment": 2,
    "ai infrastructure": 2,
    # Low weight (1) — broader AI ecosystem
    "llm": 1,
    "ai coding": 1,
    "vibe coding": 1,
    "prompt engineering": 1,
    "web scraping": 1,
    "automation": 1,
    "claude": 1,
    "gpt": 1,
    "gemini": 1,
    "ai economics": 1,
    "ai disruption": 1,
    "enterprise ai": 1,
    "capability gap": 1,
    "ai adoption": 1,
    "openclaw": 1,
    "self-hosted ai": 1,
}

# RSS feed URL template
YOUTUBE_RSS_URL = "https://www.youtube.com/feeds/videos.xml?channel_id={channel_id}"

# LLM config (Phase 2)
GEMINI_MODEL = "gemini-3-flash-preview"
GEMINI_TEMPERATURE = 0.3
GEMINI_MAX_OUTPUT_TOKENS = 65536

# Tracking file for processed videos (replaced by Supabase in Phase 4)
PROCESSED_VIDEOS_FILE = "processed_videos.json"
