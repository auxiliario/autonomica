# Autonomica — Architecture

---

## Core Principle

The agent-facing layer is the source of truth. Everything else is derived.

```
SOURCE OF TRUTH          DERIVED
─────────────────        ─────────────────
/agent/docs/*.md    →    Human-readable pages
/agent/index.json   →    Site navigation
/agent/pricing.json →    Pricing display
/agent/changelog.json →  Version history UI
/llms.txt           →    (consumed directly by agents)
```

If the human-facing page and the agent-facing document disagree, the agent-facing document is correct.

---

## Platform Architecture

```
autonomi.ca/
│
├── One repo. One deploy. Next.js on Vercel.
│
├── Three concerns:
│   ├── CONTENT    — Markdown files → rendered pages
│   ├── SIGNAL     — Cron functions → fetch, process, publish
│   └── DIRECTORY  — API routes → probe, query, score
```

### Content Layer

All content is markdown. The framework renders it. No page is hand-written HTML.

```
content/
├── signals/
│   ├── 2026-02-23-stripe-x402-base-usdc.md
│   ├── 2026-02-22-coinbase-agent-wallets.md
│   └── ...
└── i18n/         (future)
    ├── es/
    ├── fr/
    ├── pt/
    └── de/
```

### Signal Taxonomy

Every signal is a markdown file with structured frontmatter. Currently using flat `tags[]`. Six-dimension taxonomy planned:

```yaml
---
title: ""
date: YYYY-MM-DD
source: ""
source_type: ""
source_link: ""
tags: []
creator: ""
lang: en
seo_description: ""
---
```

### Signal Layer

Vercel cron functions run daily (Hobby plan). Upgrade to 6-hourly with Pro when volume justifies it.

```
Signal Source (API/RSS/scrape)
        │
        ▼
  Cron Function (Vercel)
        │
        ├── Fetch raw signal
        ├── Classify / summarize (Kimi or Claude API)
        ├── Generate markdown with frontmatter
        │
        ▼
  content/signals/YYYY-MM-DD-slug.md
        │
        ▼
  Next.js renders → new page, sitemap entry
```

Signal sources are tiered by check frequency:

| Tier | Frequency | Sources |
|------|-----------|---------|
| 1 | Daily | GitHub repos, HN, key X accounts, key Substacks |
| 2 | 2-3x/week | Reddit, Discord, podcasts |
| 3 | Weekly | LinkedIn, research papers, broader RSS |

### Directory Layer

The directory API lives as Next.js API routes (stubs for now).

```
app/api/
├── probe/route.ts        POST — probe a domain
├── site/[domain]/route.ts GET — site intelligence
├── directory/route.ts     GET — browse directory
├── search/route.ts        GET — topic search
└── compare/route.ts       GET — compare sites
```

Storage starts as Vercel KV (free tier). Upgrades when volume demands it.

---

## Agent-Facing Layer

Static files served at known paths from `/public`:

```
public/
├── llms.txt
├── agent/
│   ├── index.json
│   ├── pricing.json
│   ├── changelog.json
│   └── docs/
│       ├── manifesto.md
│       ├── spec.md
│       ├── pricing-guide.md
│       ├── security.md
│       └── trust.md
```

CORS `*` on all agent endpoints via `next.config.ts`. Correct MIME types.

---

## Site Structure

```
app/
├── layout.tsx                  Root layout — Nav + Footer (global)
├── page.tsx                    Landing — hero + signals + tools + manifesto
├── sitemap.ts                  Dynamic sitemap generation
├── signals/
│   ├── page.tsx                Signal feed with filtering + pagination
│   ├── SignalsFeed.tsx         Client component for filters
│   └── [slug]/page.tsx         Individual signal page
├── generate/page.tsx           Generator tool
├── validate/page.tsx           Validator tool
├── estimate/page.tsx           Token estimator tool
├── inspect/page.tsx            Inspector tool
├── learn/page.tsx              Learn page (stub, content pending)
├── directory/page.tsx          Directory browser (stub, Phase 2)
└── api/
    └── cron/
        ├── signals/route.ts    Signal fetcher (scheduled)
        └── reprobe/route.ts    Directory re-probe (scheduled)
```

---

## Hosting Configuration

### Vercel (Hobby plan)

CORS headers configured in `next.config.ts`:
- `/llms.txt` → `text/plain`, CORS `*`
- `/agent/*.json` → `application/json`, CORS `*`
- `/agent/docs/*.md` → `text/markdown`, CORS `*`

Crons in `vercel.json`:
- `/api/cron/signals` — daily at 06:00 UTC
- `/api/cron/reprobe` — weekly Sunday at 03:00 UTC

---

## Cost Estimate

| Component | Cost/mo | Notes |
|-----------|---------|-------|
| Vercel Hobby | $0 | Daily crons, sufficient for launch |
| Vercel KV | $0 | Free tier sufficient at launch |
| Kimi K2.5 (NVIDIA NIM) | $0 | Bulk signal + quality processing |
| Claude API | ~$2-4 | Higher-quality signal classification/summarization |
| Domain | Owned | autonomi.ca |
| **Total** | **~$2-4** | |

Upgrade to Vercel Pro ($20/mo) when signal integrations need 6-hourly frequency or API volume exceeds hobby limits.

---

## What We Intentionally Do Not Build (Yet)

| Temptation | Why Not Yet |
|-----------|---------|
| Separate backend service | One repo, one deploy. Until there's a measured reason to split. |
| Database | Vercel KV until data proves we need more. |
| User accounts | Not needed yet. |
| 402 payment enforcement | Structure documented. Enforcement comes in Phase 2. |
| Trading intelligence feed | Designed and parked. Becomes a skill in Phase 2. |
| OpenClaw as separate service | Quality assessment runs as cron for now. |
| CI/CD beyond Vercel | Deploy on push. That's it. |
| 6-dimension signal taxonomy | Flat tags[] works for now. Migrate when pipeline updates. |
