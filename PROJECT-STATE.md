# PROJECT-STATE.md — Autonomica Ground Truth

**Last updated**: 2026-02-26
**Read this first in every new window.**

Re-evaluate this document when the project's direction shifts. It describes current state — it does not constrain future decisions.

---

## What Autonomica Is

Autonomica (autonomi.ca) is the directory and discovery layer for the Agent Web. Three products:

1. **Directory** — live, scored registry of agent-ready sites with HTTP 402 micropayments
2. **Signal** — auto-processed intelligence feed tracking agent commerce ecosystem, with 7-pass critical analysis (SEO engine + research database)
3. **Specification** — canonical docs for llms.txt, /agent/ endpoints, HTTP 402

Built by Auxiliar.io (Max). One repo, one deploy, Next.js on Vercel.

---

## Current State: Next.js — Deployed

The site has been migrated from static HTML to Next.js. Deployed at autonomi.ca via GitHub repo `auxiliario/autonomica`, branch `main`.

### What's built and deployed

**Architecture:**
- `layout.tsx` renders Nav and Footer globally — no page imports them
- Nav auto-detects active page from URL via `usePathname()` — no props
- All page files contain only their own content
- Unified design system in `app/globals.css`
- Default theme: light. Toggle persists via `localStorage('autonomica-theme')`

**Pages:**
- `/` — Homepage: hero, bold learn callout with dividers, signals with 6 filter pills, tools grid, manifesto with hero-style header, email capture
- `/signals` — Feed with filters + pagination
- `/signals/[slug]` — Individual signal with markdown rendering, tags, related signals
- `/generate` — Generator tool (form, live preview, tabbed output, download)
- `/validate` — Validator tool (paste llms.txt or index.json, pass/fail/warn checks)
- `/estimate` — Token estimator (revenue projections, stat cards)
- `/inspect` — Inspector (domain probe for agent-readiness, links to generator)
- `/directory` — Stub page
- `/learn` — Stub page (content approved in shell phase, not yet wired)

**Nav order (3 rows, sticky):**
```
Row 1: [AUTONOMICA v0.1]              [EN v] [☀]
Row 2: for humans  Home  Learn  Signals  Tools  Manifesto
Row 3: for agents  llms.txt  agent/  pricing  changelog
```
- Tools → scrolls to `/#tools`
- Manifesto → scrolls to `/#manifesto`
- Learn, Signals → page links

**SEO:**
- JSON-LD structured data (WebSite + Organization)
- Dynamic sitemap.ts generates sitemap.xml from all pages + signals
- robots.txt, OG image, Twitter card, canonical URL
- Favicons: .ico, 16px, 32px, 512px

**Signals:**
- 5 seed signals in `content/signals/` (markdown with frontmatter)
- Read at build time by `lib/signals.ts` (gray-matter + remark)

**Agent layer (static in `/public`):**
- `llms.txt` — agent routing manifest
- `agent/index.json` — document registry
- `agent/pricing.json` — pricing tiers
- `agent/changelog.json` — version history
- `agent/docs/` — manifesto.md, spec.md, pricing-guide.md, security.md, trust.md

**Components:**
- `Nav.tsx` — client component, auto-active detection from URL
- `Footer.tsx` — 4-line layout, Max links to /learn
- `ThemeToggle.tsx` — sun/moon toggle
- `LangSwitcher.tsx` — dropdown (EN/FR/ES/PT/DE), UI only
- `SignalCard.tsx` — signal card for feeds
- `ToolCard.tsx` — terminal-style card for homepage grid
- `FilterPills.tsx` — custom dropdown pill filters
- `HomeSignals.tsx` — client component wrapping signals + filters on homepage

**Config:**
- `vercel.json` — cleanUrls
- `next.config.ts` — CORS headers for agent endpoints
- `sitemap.ts` — auto-generated from pages + signals
- `robots.txt` — allows all, points to sitemap

### What's NOT built yet

- `/learn` content (shell approved, glossary as accordion cards)
- Signal pipeline (architecture decided, implementation pending)
- Supabase integration (schema designed, not created)
- GitHub Actions workflow for pipeline
- Signal page redesign to show full intelligence brief (all passes)
- Directory API routes (stubs only)
- i18n routing (lang switcher is UI-only)
- Email capture backend
- 6-dimension signal taxonomy (using flat `tags[]` for now)
- Derivative products (weekly brief, trend tracking, etc.)

---

## Pipeline Decisions (Feb 2026)

Decided through analysis and comparative testing. See ARCHITECTURE.md for technical detail.

| Decision | Rationale | Date |
|----------|-----------|------|
| Gemini 3.0 Flash Preview for pipeline | Tested against 5 models on metamarkets WEB 4.0 article. Best signal identification + criticism quality at lowest cost ($0.00093/signal). | 2026-02-26 |
| 7-pass analysis prompt | Summarize → Stood Out → Quotables → Criticize → Expand → Signal JSON → Source Metadata. Produces intelligence briefs, not just summaries. Tested and validated. | 2026-02-26 |
| Supabase for storage | Content funnel: store all signals (raw, scored, processed, published). Column-per-pass schema enables derivative products. Replaces Vercel KV plan. | 2026-02-26 |
| GitHub Actions for scheduling | Runs every 6 hours, commits published signals to repo, Vercel auto-deploys. Avoids Vercel ephemeral filesystem. | 2026-02-26 |
| Manual publish review | Pipeline processes everything. Founder reviews and publishes. No auto-publish, no predetermined cadence. Volume emerges from use. | 2026-02-26 |
| Column-per-pass storage | Each analysis pass stored as separate column in Supabase. Enables SQL queries for derivative products. | 2026-02-26 |
| Source metadata extraction (Pass 7) | Keyword frequency, entities, persons, claims with numbers, source links, content flags (code, data tables, API refs). Enables deep research queries. | 2026-02-26 |
| Paid Substack subscriptions as inputs | ~$80 CAD/mo for 3 paid sources. ROI measured by pipeline data (hit rate, relevance per source). Content used as input to analysis, not repackaged. | 2026-02-26 |
| YouTube transcripts via youtube-transcript-api | Free, transforms Tier 1 YouTube sources from title-only to full-content signals. | 2026-02-26 |
| Title similarity for dedup | Simple, zero cost. Embedding similarity later if volume warrants. | 2026-02-26 |

### Model Comparison Results (Feb 2026)

Tested on: "WEB 4.0: The Day the Machine Became the Customer" by Jose Rodriguez / metamarkets (Feb 25, 2026).

| Model | Cost/signal | Quality Assessment |
|-------|-------------|-------------------|
| Gemini 3.0 Flash Preview | $0.00093 | **Best overall value.** Sharpest signal identification, original criticism ("vanity metric" reframe), consistent across 2 runs. |
| Gemini 2.5 Flash | $0.0013 | Solid floor. Unique principal-agent liability insight. Good for volume. |
| Gemini 3.1 Pro | $0.024 | Polished, correct. "Wallet is useless without a map." Not 26x better than Flash 3.0. |
| Claude Haiku 4.5 | ~$0.025 | Surprise performer. 80% of Sonnet depth at 1/3 cost. Sharp logical criticism. |
| Claude Sonnet 4.5 | ~$0.068 | Deepest thinker. 7 distinct criticisms, original "llms.txt + x402 = Agent Web stack" synthesis. 73x more expensive than Flash 3.0. |

**Decision:** Gemini 3.0 Flash Preview for pipeline. Best summary quality (went straight to x402, didn't bury lead). Claude models buried the lead in Crustafarian anecdote.

---

## Decisions Log (Site/Architecture)

Current decisions with rationale. Not permanent — but changing them requires explicit discussion, not silent drift.

| Decision | Rationale | Date |
|----------|-----------|------|
| Nav + Footer in layout.tsx | Every page inherits them. No forgotten imports. One place to edit. | 2026-02-24 |
| Nav detects active from URL | No props needed. Adding pages doesn't require Nav changes. | 2026-02-24 |
| Light theme default | User preference. Dark available via toggle. | 2026-02-23 |
| Custom pill dropdowns, never native `<select>` | Native selects render differently per device. Custom pills match the design system. | 2026-02-23 |
| Inter + JetBrains Mono | Inter for readability, JetBrains Mono for terminal/chrome elements. | 2026-02-23 |
| Max width 720px | Clean reading measure. Matches terminal aesthetic. | 2026-02-23 |
| One repo, one deploy | No operational overhead. Split only if a measured reason appears. | 2026-02-23 |
| Supabase for all storage | Signals + directory in one database. Replaces Vercel KV plan. | 2026-02-26 |
| Flat tags instead of 6-dimension taxonomy | Simpler. Works at current signal volume. Filter UI already supports 6 dimensions. | 2026-02-23 |
| Tools and Manifesto nav links scroll to homepage sections | They're homepage content, not separate pages. | 2026-02-24 |
| Footer: Max links to /learn | /learn is the non-dev entry point. Personal manifesto merges there later. | 2026-02-24 |
| Shell → Wire workflow | Design feedback happens on layout, not logic. Prevents throwaway code. | 2026-02-23 |

### Deferred decisions (no action yet, revisit when relevant)

- Merge `/learn` and Max's personal manifesto into one page
- Glossary as accordion/dropdown cards on `/learn`
- Signal tag taxonomy migration to 6-dimension
- Directory scoring model weights
- 402 payment protocol implementation
- Email capture backend
- Signal page format (how much of 7-pass analysis to show publicly)
- Derivative product priority beyond weekly brief

---

## Design System Reference

**Source of truth: `app/globals.css`**

### CSS Variables (dark theme)
```css
--bg: #141419; --bg-card: #0b0b0f; --bg-raised: #12121a; --bg-code: #161620;
--border: #1e1e2a; --border-bright: #2a2a3a;
--text: #d4d4dc; --text-dim: #8a8a98; --text-bright: #ededf2;
--accent: #5af0b1; --accent-dim: #2a7a55;
--mono: 'JetBrains Mono', 'Fira Code', monospace;
--sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### CSS Variables (light theme)
```css
--bg: #ffffff; --bg-card: #f5f5f0; --bg-raised: #eaeae5; --bg-code: #e2e2dc;
--border: #d0d0c8; --border-bright: #b8b8b0;
--text: #3a3a40; --text-dim: #8a8a95; --text-bright: #1a1a20;
--accent: #0d8050;
```

### Visual patterns
- Signal cards: bg-card background, border, accent on hover
- Tool cards: Terminal style with red/yellow/green dots, `> run` prompt
- Manifesto heading: hero-title style with accent color
- Trust levels: Colored left border (green/yellow/red)
- Highlight boxes: Accent left border, raised background
- Learn callout: Bold, divider lines above and below
- Scroll anchors: 130px scroll-margin-top to clear sticky nav

---

## Brand Voice

**Dev diary signals:** Written in Claude's voice, first person, during active build sessions. Max triggers by saying "let's do a diary entry." Full guide in BUILD-LOG-GUIDE.md.

**Signal intelligence briefs:** Written by Gemini via 7-pass pipeline. Sharp, specific, critical. No hype, no filler. The criticism pass is the editorial voice that differentiates Autonomica from aggregators.

**Learn page (`/learn`):** Non-dev entry point. Four sections approved in shell:
1. What are AI agents? — Plain language
2. Glossary — Accordion cards, 12 terms
3. Use cases — 6 scenarios in card grid
4. Starting out? — Field notes from build logs

**Tone:** Honest over polished.

---

## Operating Contract

**Claude is the technical lead.** Owns stack, architecture, implementation. Checks before coding.

**User is the founder.** Strategic direction, business decisions, quality control.

See CLAUDE.md for full operating rules, including the pushback principle and re-evaluation triggers.

---

## Shell → Wire Workflow

**Pass 1 — Shell:** Static layout, real CSS, placeholder content. User approves.
**Pass 2 — Wire:** Add logic. Layout doesn't change.

### Shell status
- [x] Homepage — approved, wired, deployed
- [x] `/signals` feed — approved, wired, deployed
- [x] `/signals/[slug]` — approved, wired, deployed
- [x] Tool pages (all 4) — approved, wired, deployed
- [x] `/learn` — approved, stub deployed, content wiring next

---

## Next Steps (Priority Order)

1. **Build signal pipeline** — Python script with 7-pass Gemini prompt, Supabase storage, GitHub Actions
2. **Create Supabase schema** — signals table with column-per-pass, sources table
3. **Test pipeline on live sources** — run against real RSS feeds, validate output quality
4. **Wire Supabase → Next.js** — update `lib/signals.ts` to read published signals from Supabase
5. **Redesign signal pages** — show full intelligence brief (all readable passes)
6. **Wire `/learn` page** — content approved in shell, glossary as accordion cards
7. **Weekly intelligence brief** — first derivative product
8. **i18n subpath routing** — all human-facing pages in EN/FR/ES/PT/DE
9. **Signal translation pipeline** — Gemini translates published signals
10. **Directory API routes** — probe function, Supabase storage

---

## Repo & Deploy

| Item | Value |
|------|-------|
| GitHub | `auxiliario/autonomica` |
| Branch | `main` |
| Host | Vercel |
| Domain | `autonomi.ca` |
| Database | Supabase (TBD: project URL) |

---

## Project Documents

| Document | Purpose |
|----------|---------|
| CLAUDE.md | Identity, roles, operating rules, pushback principle |
| ARCHITECTURE.md | Technical architecture with rationale |
| PRD.md | Product requirements, audiences, success criteria |
| ROADMAP.md | Phased delivery plan |
| BUILD-LOG-GUIDE.md | Dev diary entry format, tone, rules |
| PROJECT-STATE.md | **This file.** Ground truth for window continuity. |
