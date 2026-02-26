# Autonomica — Architecture

## Living Architecture

This document describes current state with rationale. Every component, tool, and pattern is subject to re-evaluation when the project's direction shifts. Before building on existing architecture, verify it still serves the current direction. Before proposing changes, state what exists, why, and what changed.

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

**Rationale:** Autonomica's thesis is that the Agent Web is the primary layer. The site architecture proves this by deriving human pages from agent-facing files.

---

## Platform Architecture

```
autonomi.ca/
│
├── One repo. One deploy. Next.js on Vercel.
│
├── Four concerns:
│   ├── CONTENT    — Markdown files → rendered pages
│   ├── SIGNAL     — GitHub Actions + Gemini → fetch, process, store, publish
│   ├── DIRECTORY  — API routes → probe, query, score
│   └── RESEARCH   — Supabase queries → derivative analysis products
```

**Rationale:** Single repo avoids operational overhead. Signal processing runs externally via GitHub Actions (writes to Supabase, commits published signals to repo). Directory and research concerns deploy with the site. Splitting only makes sense if one concern needs independent scaling or a different runtime — that hasn't happened.

### Content Layer

All content is markdown. The framework renders it.

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

**Rationale:** Markdown is editable without code, versionable in git, and maps directly to agent consumption. Adding a signal = adding a .md file.

### Signal Layer

The signal pipeline is a Python script run via GitHub Actions every 6 hours. It fetches from 27+ RSS/JSON sources (growing to 60+), scores for relevance, processes through a 7-pass LLM analysis, stores all results in Supabase, and commits published signals as markdown to the repo.

```
Signal Source (RSS/JSON/transcript)
        │
        ▼
  GitHub Actions (every 6 hours)
        │
        ├── Fetch raw signal (source-type-aware enrichment)
        │   ├── RSS with content → use as-is
        │   ├── YouTube → pull auto-generated transcript
        │   ├── Reddit → include top comments
        │   └── GitHub → fetch diff/release notes
        │
        ├── Store raw in Supabase (status: raw)
        │
        ├── Score against keyword relevance matrix
        ├── Store scored (status: scored)
        │
        ├── 7-pass Gemini analysis:
        │   Pass 1: Summarize (core signal)
        │   Pass 2: What Stood Out (novel claims, data)
        │   Pass 3: Quotables (shareable lines + why)
        │   Pass 4: Criticize (weak arguments, gaps)
        │   Pass 5: Expand (Autonomica thesis connection)
        │   Pass 6: Signal JSON (headline, tags, SEO)
        │   Pass 7: Source Metadata (keywords, entities,
        │           claims, links, content flags)
        │
        ├── Store all passes in Supabase (status: processed)
        │
        ├── Manual review → mark as published
        │
        ├── Generate markdown with frontmatter
        ├── Commit to repo → Vercel deploys
        │
        ▼
  New signal page live on autonomi.ca
```

**LLM:** Gemini 3.0 Flash Preview via Google AI API. Selected through comparative testing against Gemini 2.5 Flash, Gemini 2.5 Pro, Gemini 3.1 Pro, Claude Sonnet 4.5, and Claude Haiku 4.5. Gemini 3.0 Flash produced the best signal identification and criticism quality at the lowest cost ($0.00093/signal).

**Rationale:** GitHub Actions runs externally, commits to repo, triggering Vercel redeploy. This avoids Vercel's ephemeral filesystem limitation. Supabase stores all signals regardless of publish status — the content funnel retains everything for research and derivative products.

Signal sources are tiered by check frequency:

| Tier | Frequency | Sources |
|------|-----------|---------|
| 1 | Daily | GitHub repos, HN, key X accounts, key Substacks (incl. paid) |
| 2 | 2-3x/week | Reddit, Discord, podcasts |
| 3 | Weekly | LinkedIn, research papers, broader RSS |

Each signal source has a fetcher. New sources are added by writing a new fetcher function and registering it in the source config.

### Signal Storage (Supabase)

Every signal is stored with each analysis pass as a separate column, enabling independent querying for derivative products.

```
signals table:
├── id, created_at, updated_at
├── status (raw | scored | processed | published | rejected)
├── source_id, source_name, source_tier, source_url
├── relevance_score
├── raw_title, raw_content, raw_link, raw_published
│
├── summary          (Pass 1)
├── stood_out        (Pass 2)
├── quotables        (Pass 3)
├── criticism         (Pass 4)
├── expansion        (Pass 5)
├── signal_json      (Pass 6: headline, slug, tags, seo_description)
├── source_metadata  (Pass 7: keyword_freq, entities, persons,
│                     claims, source_links, contains, content_type,
│                     implementation_value, word_count)
│
├── raw_response     (full LLM output as backup)
├── cluster_id       (dedup grouping, nullable)
└── published_at     (null until published)
```

**Rationale:** Column-per-pass enables derivative products via SQL queries: weekly briefs query summaries + criticisms, trend tracking queries tags over time, contradiction detection cross-references claims, quotables library filters the quotables column directly. Storing everything in Supabase (not just published signals) creates a research database that grows in value over time.

### Derivative Products

All built from existing stored signal data. No additional processing unless noted.

| Product | Data Source | Additional LLM Cost |
|---------|-------------|-------------------|
| Weekly intelligence brief | All signals from past 7 days → one Gemini batch call | ~$0.01/week |
| Trend tracking (topic velocity) | Tags + dates → SQL aggregation → chart | $0 |
| Source report cards | Source + relevance_score + status → SQL aggregation | $0 |
| Contradiction detection | Claims across signals with same tags → Gemini comparison | Marginal |
| Quotables library | Quotables column + tags + source → filterable page | $0 |
| Entity tracking | source_metadata entities + frequency → dashboard | $0 |
| "What we learned" series | Monthly batch analysis across all signals | ~$0.02/month |

**Rationale:** The 7-pass analysis stores structured data at ingest time. Derivative products are queries against existing data, not re-processing. The database is a research desk first, a publishing pipeline second.

### Directory Layer

The directory API lives as Next.js API routes (stubs currently).

```
app/api/
├── probe/route.ts        POST — probe a domain
├── site/[domain]/route.ts GET — site intelligence
├── directory/route.ts     GET — browse directory
├── search/route.ts        GET — topic search
└── compare/route.ts       GET — compare sites
```

Storage: Supabase (migrated from Vercel KV plan).

**Rationale:** Supabase handles both signal storage and directory data. Single database, single connection, consistent tooling.

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
├── directory/page.tsx          Directory browser (stub)
└── api/
    └── cron/
        ├── signals/route.ts    (deprecated — pipeline runs via GitHub Actions)
        └── reprobe/route.ts    Directory re-probe (scheduled)
```

**Rationale:** Nav and Footer live in layout.tsx so pages are just content. Nav detects active state from URL — no props, no per-page imports. Adding a page means creating one file.

---

## Hosting & Infrastructure

### Vercel
CORS headers configured in `next.config.ts`:
- `/llms.txt` → `text/plain`, CORS `*`
- `/agent/*.json` → `application/json`, CORS `*`
- `/agent/docs/*.md` → `text/markdown`, CORS `*`

### GitHub Actions
Signal pipeline runs every 6 hours via `.github/workflows/signals.yml`. Auto-commits published signals to repo. Manual trigger available for testing.

### Supabase
PostgreSQL database for signal storage and directory data. Stores all signals at every pipeline stage (raw, scored, processed, published). Column-per-pass schema enables derivative product queries.

---

## Current Costs

| Component | Cost/mo |
|-----------|---------|
| Vercel | $0 |
| Supabase | $0 (free tier) |
| Gemini 3.0 Flash Preview | ~$1-3 |
| Paid Substack subscriptions | ~$80 CAD |
| Domain | Owned |

**Rationale:** LLM cost is negligible at $0.00093/signal. The primary content investment is paid source subscriptions, which provide access to high-value analysis that feeds the pipeline.

---

## What We Intentionally Do Not Build (Yet)

| Temptation | Rationale |
|-----------|---------|
| Separate backend service | One repo, one deploy. No measured reason to split. |
| User accounts | No feature requires them. |
| 402 payment enforcement | Structure documented. Enforcement is Phase 2. |
| Trading intelligence feed | Designed and parked. Phase 2 skill. |
| OpenClaw as separate service | Quality assessment runs as cron. |
| 6-dimension signal taxonomy | Flat tags work at current volume. |
| Predetermined publish cadence | Volume emerges from manual review, not preset numbers. |
| Auto-publish without review | Quality control matters more than speed. |
| Claude for pipeline | Tested, Gemini 3.0 Flash is better value for signal work. |

These are current positions, not permanent constraints. Each has a rationale. When the rationale no longer holds, the decision gets revisited.
