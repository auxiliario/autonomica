# Agent-Facing Content Specification

Version: 0.1.0

## Required Files

### /llms.txt

The agent routing manifest. Placed at the root of a domain. Declares what agent-facing content exists and where to find it.

Format: Plain text. Lines beginning with `>` are key-value metadata. Lines beginning with `#` are comments.

```
# example.com
> site_name: Example Knowledge Base
> description: Structured documentation for AI agents.
> doc: /agent/docs/overview.md
> pricing: /agent/pricing.json
```

### /agent/index.json

Machine-readable document registry. JSON format. Lists all available documents with metadata.

Required fields: `name`, `url`, `version`, `documents[]`.

Each document requires: `id`, `title`, `path`, `format`.

### /agent/docs/*.md

Content documents in Markdown format. Each document is self-contained and addressable by its path.

Markdown is preferred over JSON for content because it supports hierarchical structure, is token-efficient, and maps directly to LLM consumption patterns.

## Optional Files

### /agent/pricing.json

Pricing metadata for 402-enabled endpoints. Declares tiers, rate limits, and supported payment protocols.

### /agent/changelog.json

Version history. Allows agents to detect content updates without re-fetching everything.

## CORS Requirements

All `/agent/*` endpoints must serve `Access-Control-Allow-Origin: *` headers.

## MIME Types

- `.json` endpoints: `application/json`
- `.md` endpoints: `text/markdown`
- `llms.txt`: `text/plain`
