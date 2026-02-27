# Autonomica — Product Requirements Document

**Version**: 0.4
**Status**: Phase 1
**Last Updated**: 2026-02-26

---

## 1. Problem Statement

The internet is undergoing a structural shift. AI agents are becoming primary consumers of web content, but three problems remain unsolved:

1. **No discovery layer.** Agents have no way to find which sites serve structured, priced content. The x402 Foundation's own roadmap calls this "a critical missing piece."
2. **No quality signal.** Even when agent-ready sites exist, there's no independent assessment of their content quality, safety, pricing honesty, or reliability.
3. **No market intelligence.** The agent commerce ecosystem is moving fast across dozens of platforms. Nobody is aggregating the signal into one place — and nobody is subjecting it to critical analysis.

Autonomica solves all three.

---

## 2. Product Definition

Autonomica is a Next.js application on Vercel at `autonomi.ca`.

### Current (Phase 1)

| Role | What it does |
|------|-------------|
| **Directory** | Live, scored registry of agent-ready sites. Probe, query, compare. Free window + 402 depth. |
| **Signal** | Continuously published intelligence feed tracking the agent commerce ecosystem. 7-pass LLM analysis, critical evaluation, cross-source pattern detection. Published in 5 languages. |
| **Research** | Structured signal database enabling derivative analysis products: weekly briefs, trend tracking, source quality reports, contradiction detection, entity tracking. |
| **Specification** | Reference implementation and canonical docs for the Agent Web (llms.txt, /agent/ endpoints, HTTP 402). |

### Phase 2: Agent Skills

Packaged capabilities that agents install and use directly:

| Skill | Description |
|-------|-------------|
| **Directory skill** | MCP server — probe, query, compare agent-ready sites |
| **Polymarket intelligence feed** | Real-time trading signals for prediction market agents |
| **Future skills** | As demand signals appear |

### Phase 3: Consulting

Done-for-you agent-readiness services for data holders. Assessment, implementation, monetization strategy. The expertise accumulated building Autonomica becomes the product.

The signal layer is the growth engine. Every signal published is 6 new indexed pages (one per language), a new keyword surface in each market, a new reason for someone to find Autonomica.

---

## 3. Target Audiences

### Primary: Agent Developers
Engineers building AI agents, LLM tool-use pipelines, and autonomous workflows. They need discovery, structured data sources, and a standard to build against.

### Secondary: Technical Publishers
CTOs, engineering leads, and developer advocates at content-heavy companies. They know AI is consuming their content and want a structured response beyond blocking crawlers.

### Tertiary: Ecosystem Participants
Researchers, indie hackers, and investors tracking agent commerce. They follow the signal feed and amplify the thesis.

### Quaternary: Curious Non-Technical Audience
People trying to understand what AI agents are and where this is heading. The signal feed, /learn page, and manifesto serve them in accessible language. They're tomorrow's advocates and potential clients.

### Multilingual Markets
The site serves as a portfolio piece and entry point for consulting clients in French-speaking (Quebec) and Spanish-speaking (Dominican Republic, Latin America) markets. A prospect who reads the manifesto and /learn page in their own language experiences the founder's commitment to their market — not a translated afterthought. Multilingual support is core infrastructure, not a growth optimization.

---

## 4. Requirements

### 4.1 Signal System

The signal system fetches, processes, analyzes, and publishes intelligence from 27+ sources (growing to 60+) across multiple platforms.

**Pipeline:** Python script run via GitHub Actions every 6 hours.

**LLM:** Gemini 3.0 Flash Preview via Google AI API. Selected through comparative testing (Feb 2026) against 5 models. Best signal identification and criticism quality at lowest cost.

**Storage:** Supabase. All signals stored regardless of publish status. Column-per-pass schema enables derivative products.

**7-pass analysis prompt:**

| Pass | Purpose | Stored as |
|------|---------|-----------|
| 1. Summarize | Core signal in 2-3 sentences | `summary` |
| 2. What Stood Out | Novel claims, surprising data points | `stood_out` |
| 3. Quotables | 2-3 shareable lines with context | `quotables` |
| 4. Criticize | Weak arguments, unsubstantiated claims, gaps | `criticism` |
| 5. Expand | Connection to Agent Web thesis, builder implications | `expansion` |
| 6. Signal JSON | Headline, slug, tags, entities, SEO description | `signal_json` |
| 7. Source Metadata | Keyword frequency, entities, persons, claims with numbers, source links, content flags (code snippets, data tables, API refs, etc.), word count, implementation value | `source_metadata` |

**Signal frontmatter (published signals):**

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

**Signal pages show all readable passes** — not just summary + context. Each published signal is an intelligence brief: summary, what stood out, quotables (linking back to source), criticism, and Autonomica expansion.

**Signal ingestion tiers:**

| Tier | Frequency | Sources |
|------|-----------|---------|
| 1 | Daily | GitHub repos, HN, key X accounts, key Substacks (incl. paid) |
| 2 | 2-3x/week | Reddit, Discord, podcasts |
| 3 | Weekly | LinkedIn, research papers, broader RSS |

**Source enrichment by type:**
- RSS with content: use as-is
- YouTube: pull auto-generated transcript via youtube-transcript-api
- Reddit: include top comments alongside post
- GitHub: fetch diff or release notes, not just commit message
- Podcasts: show notes for scoring (transcription deferred)

**Dedup:** Title similarity matching. Signals about the same event from different sources are clustered via `cluster_id`. Richest version published, others stored with attribution.

**Publish flow:** Manual review. Pipeline processes and stores everything. Founder reviews and decides what gets published. No predetermined cadence — volume emerges from the data.

**Translation pipeline:** Every published signal is translated to French, Spanish, Portuguese, and German. Translation handled by Gemini. English tech terms preserved in all translations unless widely adopted local alternatives exist. Translation quality validated on early outputs and prompt-tuned before volume scales.

### 4.2 Derivative Products

All built from existing stored signal data via Supabase queries. Minimal additional LLM cost.

| Product | Description | Source Data |
|---------|-------------|-------------|
| **Weekly intelligence brief** | Cross-signal analysis of the past 7 days. Pattern detection, theme convergence, contradictions. | Summaries + criticisms + tags |
| **Trend tracking** | Topic velocity over time. Which themes are heating up, cooling down. | Tags + dates |
| **Source report cards** | Per-source quality metrics: hit rate, average relevance, publish rate. | Source + score + status |
| **Contradiction detection** | Conflicting claims across sources on the same topic. | Claims from source_metadata + tags |
| **Quotables library** | Searchable, filterable collection of curated quotes. Ready-made social content. | Quotables + tags + source |
| **Entity tracking** | Company/person activity across signals. Frequency spikes = something happened. | Entities from source_metadata |
| **"What we learned" series** | Monthly/quarterly original analysis grounded in signal data. | Full dataset |

### 4.3 Directory

Key points:

- Probe function assesses agent-readiness (scoring model to be finalized — open design question)
- Free window on all queries, 402 for full intelligence
- Quality assessment via LLM (Gemini)
- Graduated trust tiers (new → established → verified → claimed)
- Storage: Supabase
- MCP server for agent-native access (Phase 2)

### 4.4 Specification / Docs

The manifesto, spec, pricing guide, security model, and trust framework. These are markdown files in `/agent/docs/` (source of truth) rendered as pages on the site.

### 4.5 Agent-Facing Layer

`/llms.txt`, `/agent/index.json`, `/agent/pricing.json`, `/agent/changelog.json`, `/agent/docs/*.md`. CORS enabled. Correct MIME types. Agent-facing files remain in English — agents consume English.

### 4.6 Human-Facing Pages

| Page | Description |
|------|-------------|
| `/` | Landing — hero, learn callout, signal highlights, tools grid, manifesto, email capture |
| `/signals` | Signal feed index with filtering by all 6 dimensions |
| `/signals/[slug]` | Individual signal page — full intelligence brief (all readable passes) |
| `/generate` | Generator tool — create agent-facing files |
| `/validate` | Validator tool — check llms.txt / index.json compliance |
| `/estimate` | Token estimator — revenue projections |
| `/inspect` | Inspector — probe any domain for agent-readiness |
| `/learn` | Non-dev entry point — plain language explainer, glossary, use cases, field notes |
| `/directory` | Human-facing directory browser |
| `/[lang]/...` | i18n subpath routes for all human-facing pages |

### 4.7 Internationalization

**Languages:** English (default), French, Spanish, Portuguese, German.

**Routing:** Subpath pattern. `/fr/signals`, `/es/learn`, etc. English has no prefix (`/signals`). Each language version has its own URL for SEO indexing.

**What gets translated:**
- All human-facing pages (homepage, /learn, /signals, tool pages)
- All published signals (automated via Gemini pipeline)
- Nav chrome, footer, UI labels
- Manifesto and specification docs

**What stays English:**
- Agent-facing files (`/llms.txt`, `/agent/*`)
- Code, technical identifiers, file paths
- English tech terms preserved in all translations per translation rules

**SEO rationale:** Each signal × 5 languages = 5 indexed pages. The signal feed produces new indexed pages daily. Being the first French/Spanish result for emerging agent commerce terms is a land grab in markets with near-zero competition.

### 4.8 Design

Light theme default, dark theme toggle. Inter + JetBrains Mono. Terminal aesthetic, minimal chrome, no stock images. Max content width: 720px. Custom dropdown pills, never native `<select>`. Existing visual assets (favicon, OG images, sun/moon toggle) preserved.

### 4.9 Email Capture

Single input, inline. "Get notified as the spec evolves." No modals.

---

## 5. Technical Constraints

| Constraint | Rationale |
|------------|-----------|
| One repo, one deploy | Simplicity. No operational overhead. |
| Next.js on Vercel | Native integration, API routes, edge functions |
| Content in markdown | Non-developer can update content without touching code |
| No separate backend | Until there's a measured reason to split |
| Supabase for storage | Signals + directory + derivative products in one database |
| GitHub Actions for pipeline | Runs externally, commits to repo, triggers Vercel deploy |
| Gemini 3.0 Flash Preview | Best signal quality at lowest cost. Tested Feb 2026. |

These are current positions with rationale, not permanent constraints. Re-evaluate when the rationale no longer holds.

---

## 6. Cost

| Component | Current cost/mo |
|-----------|----------------|
| Vercel | $0 |
| Supabase | $0 (free tier) |
| Gemini 3.0 Flash Preview | ~$1-3 |
| Paid Substack subscriptions | ~$80 CAD |
| Domain | Owned |

**Rationale:** LLM cost is negligible at $0.00093/signal. The primary content investment is paid source subscriptions providing access to high-value analysis. Subscription ROI is evaluated through pipeline data — hit rate, relevance scores, and publish rate per source.

---

## 7. Out of Scope (Current Phase)

- Agent skills packaging (Phase 2)
- 402 payment enforcement (Phase 2)
- Consulting services (Phase 3)
- Trading intelligence feed as standalone (Phase 2 skill)
- User accounts
- Mobile app
- Auto-publish without manual review
- Predetermined publish cadence

---

## 8. Success Criteria

| Metric | Target |
|--------|--------|
| Signal pages indexed by Google | 50+ within 30 days of launch (across all languages) |
| Signal pipeline running consistently | Daily automated runs with manual publish review |
| Directory sites probed | 1,000+ at seed |
| Agent traffic to /agent/ endpoints | Measurable within 60 days |
| Email signups | Growing week over week |
| Organic search traffic | Growing month over month, tracked per language |
| Non-English organic traffic | Measurable within 90 days |
| Derivative products shipping | Weekly brief within 30 days of pipeline launch |
| Source quality data | Report cards available after 60 days of pipeline data |

---

## 9. Risks

| Risk | Mitigation |
|------|-----------|
| Signal sources break or change APIs | Fetchers are modular. One breaking doesn't stop others. |
| LLM processing quality inconsistent | 7-pass prompt tested against 5 models. Quality monitored via stored criticism pass. |
| Translation quality degrades at volume | Test on first signals, tune prompts, validate before scaling |
| Directory seed scraping blocked | Multiple seed sources, stagger requests, respect rate limits |
| Competing directory launches | Signal feed + trust tiers + time-series data + multilingual coverage + critical analysis are the moat |
| Paid source subscriptions not worth cost | Pipeline data (hit rate, publish rate per source) provides objective ROI measurement |
| Gemini API changes or pricing shifts | Pipeline is model-agnostic at the call layer. Swap model string to switch. |

---

## 10. Open Questions

1. **Directory readiness scoring model.** The 0-100 scoring system needs review. What weights? What components? To be finalized during directory build.
2. **Signal deduplication.** Same story covered by multiple sources. Title similarity v1. Embedding similarity when volume warrants it.
3. **402 protocol support.** Autonomica is protocol-agnostic — Lightning, x402, Stripe, whatever emerges. Implementation details deferred to Phase 2 but architecture should not assume any single payment protocol.
4. **Signal page format.** How much of the 7-pass analysis appears on published signal pages? All readable passes, or curated selection? To be decided when first signals publish.
5. **Derivative product priority.** Weekly brief is first. Others sequenced by what proves useful in practice.
