# Autonomica — Roadmap

---

## Phase 1: The Platform (Current)

Migrate from static HTML to Next.js. Build the signal pipeline. Seed the directory. All human-facing content published in 6 languages from the start.

### Deliverables
- [x] Next.js project on Vercel with existing design/content migrated
- [x] Homepage, signal feed, individual signal pages — wired and deployed
- [x] Publisher tools: generator, validator, token estimator, inspector
- [x] Agent-facing layer preserved (/llms.txt, /agent/*)
- [x] SEO: JSON-LD, dynamic sitemap, OG images, favicons
- [x] PROJECT-STATE.md established as ground truth across conversation windows
- [x] Signal pipeline LLM selected (Gemini 3.0 Flash Preview, tested Feb 2026)
- [x] 7-pass analysis prompt designed and validated
- [x] Pipeline architecture decided (Supabase + GitHub Actions + Gemini)
- [ ] Signal pipeline built and running
- [ ] Supabase schema created and connected
- [ ] Pipeline tested on live sources
- [ ] Next.js reads published signals from Supabase
- [ ] Signal pages redesigned as full intelligence briefs
- [ ] /learn page content (shell approved)
- [ ] Weekly intelligence brief (first derivative product)
- [ ] i18n subpath routing — all human-facing pages in EN/FR/ES/PT/DE
- [ ] Signal translation pipeline
- [ ] Directory: probe function, API routes, Supabase storage
- [ ] Directory seed: scrape existing lists, probe, populate Supabase
- [ ] Human-facing directory browser
- [ ] Email capture backend

### Build Order
1. ~~Next.js scaffold with existing design system~~ ✓
2. ~~Homepage, signals, tool pages wired~~ ✓
3. ~~Agent-facing static files in /public~~ ✓
4. ~~SEO infrastructure~~ ✓
5. ~~Pipeline LLM selection and prompt design~~ ✓
6. Signal pipeline — Python script, Gemini integration, 7-pass prompt
7. Supabase schema — signals table (column-per-pass), sources table
8. GitHub Actions workflow — every 6 hours, auto-commit published signals
9. Wire Supabase → Next.js — update lib/signals.ts to read from database
10. Redesign signal pages — show full intelligence brief
11. Test pipeline on live sources — validate quality, tune prompts
12. Weekly intelligence brief — first derivative product
13. Wire /learn page content
14. i18n subpath routing
15. Signal translation pipeline (Gemini)
16. Directory API routes + Supabase storage
17. Directory seed + human-facing directory page
18. Remaining derivative products as warranted

---

## Phase 2: Skills + 402

Package Autonomica's capabilities as installable agent skills. Bring HTTP 402 payments online across all supported protocols.

### Deliverables
- [ ] Autonomica Directory skill (MCP server — probe, query, compare)
- [ ] Polymarket intelligence feed skill (revived from existing design)
- [ ] Future skills as demand signals appear
- [ ] HTTP 402 payment integration — protocol-agnostic (Lightning, x402, Stripe, others as they emerge)
- [ ] 402 enforcement on directory endpoints replacing demo mode
- [ ] OpenClaw quality agent running as scheduled assessment

### 402 Philosophy
Autonomica is the directory, not a payment provider. It speaks every 402 dialect. Implementation supports whichever protocols agents and publishers are actually using. No single-protocol lock-in.

### Success gate to enter Phase 2
- Signal pipeline running consistently with quality output
- Derivative products proving the research database value
- Directory has 1,000+ probed sites
- Organic traffic measurable
- At least one external agent consuming /agent/ endpoints

---

## Phase 3: Consulting + Ecosystem

Monetize the expertise. Help data holders enter the agent economy.

### Deliverables
- [ ] Consulting offering: agent-readiness assessment + implementation for publishers
- [ ] Marketing infrastructure (lead capture, case studies, materials)
- [ ] Expanded skill marketplace if demand supports it
- [ ] Possible paid directory tiers for publishers (verified listings, analytics)

### Consulting positioning
"We don't care which 402 implementation you use. We help you get agent-ready." The protocol-agnostic stance makes consulting accessible to any publisher regardless of their payment infrastructure. The multilingual site serves as a portfolio piece in Quebec and Latin American markets.

### Success gate to enter Phase 3
- Inbound interest from publishers or data holders
- 402 transactions proving the economic model
- Autonomica recognized as authority in agent commerce space
- Signal data and derivative products demonstrating deep ecosystem knowledge

---

## Phase 4: Do Not Plan

Let signal from Phases 1-3 determine what's next. Possible directions:

- Registry/certification for agent-ready sites
- Agent commerce analytics product
- Acquisition target if a major player wants the directory + brand
- Expand into adjacent agent infrastructure
- Spin-off broader AI intelligence feed from stored signal data

---

## Principles

1. **Invest where it compounds.** Trust tiers, probe history, signal archive, SEO surface, multilingual indexing, research database — these grow with time.
2. **One repo until there's a reason to split.** Complexity is earned, not assumed.
3. **Signal drives decisions.** Every phase gate is based on observed data, not speculation.
4. **Cost-aware, not cost-constrained.** Good decisions ship. Costs are discussed when they arise.
5. **The docs don't lie.** When the project evolves, the docs evolve first.
6. **Quality over volume.** The criticism pass and manual review exist because publishing under the Autonomica name means the analysis is worth reading.
7. **Store everything, publish selectively.** The database is a research desk. Published signals are the curated surface.
