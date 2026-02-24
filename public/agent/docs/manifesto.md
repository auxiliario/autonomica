# The Agent Web Manifesto

The Agent Web is a structural shift in how the internet is consumed.

**Humans browse pages. AI agents execute workflows.**

This shift transforms everything:

| | Human Web | Agent Web |
|---|---|---|
| Representation | HTML | Markdown / JSON |
| Access control | robots.txt | Enforced edge policy |
| Monetization | Ads | Pay-per-crawl / HTTP 402 |
| Execution | Manual browsing | Autonomous action |
| Trust | Implicit | Cryptographic / provenance |

The Agent Web is not a UX evolution. It is an economic and infrastructural realignment.

## Representation: HTML Is No Longer the Substrate

HTML is noisy, token-inefficient, layout-dependent, and injection-prone. An AI agent consuming HTML must: fetch → extract → sanitize → convert → chunk → reason.

Every step adds cost and unreliability. The conversion target is always **Markdown** (hierarchical, compact) or **JSON** (structured, deterministic).

### Why Markdown Wins

- Stable chunking by headings
- ~3-5× fewer tokens than equivalent HTML
- Cleaner RAG ingestion
- Reduced prompt-injection surface
- Versionable as plain-text artifacts

## Monetization: 402 as the Machine Handshake

Traditional web revenue depends on human attention: ads, impressions, affiliate clicks. AI agents eliminate the visit. Every AI-mediated answer that replaces a page load is lost publisher revenue.

### The Agent Web Model

1. AI agent requests resource
2. Server responds `402 Payment Required` with price metadata
3. AI agent evaluates price against task value
4. AI agent pays
5. Server returns content + receipt

### Sample Economics

100,000 indexed pages. 1,000 AI crawls per page per month. 20% monetized. $0.002 per crawl.

**$480,000/year**

## Publisher Implementation Blueprint

```
/llms.txt                    # Agent routing manifest
/agent/index.json            # Machine-readable document registry
/agent/docs/{doc-id}.md      # Structured content (markdown)
/agent/pricing.json          # Pricing boundaries and tiers
/agent/changelog.json        # Version history
```

This site is a live example. Inspect `/llms.txt`, `/agent/index.json`, and the source markdown that generated this page.

## Security: The Instruction Authority Model

Agent-readable publishing creates a structural paradox: publishers want to provide instructions to AI agents. Attackers also want to provide instructions to AI agents.

**Level 1 — Root-Trusted:** `/llms.txt` and declared agent endpoints. System-level authority.

**Level 2 — Authenticated-Trusted:** Session-bound instructions from verified publishers. Application-level authority.

**Level 3 — Untrusted:** HTML body content, user-generated text, third-party embeds. No instruction authority.

## Strategic Insight

- Content → Versioned Knowledge Objects
- Pages → Billable Resources
- Crawling → Negotiated Economic Interaction
- Instructions → Authenticated Policy

Markdown becomes the canonical agent payload. HTTP 402 becomes the canonical agent handshake. Trust signatures become inevitable.

## Conclusion

The Agent Web is a parallel infrastructure emerging inside the existing internet. It is API-like, monetized, structured, adversarial, economically sensitive, and security constrained.

Publishers who treat it as "SEO for bots" will fail.

Publishers who treat it as **a machine-facing knowledge API — with economic negotiation, versioned artifacts, and cryptographic trust** — will define the next layer of the web.
