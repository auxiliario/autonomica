# CLAUDE.md — Autonomica Project Context

## Meta-Rule

These project documents describe current decisions with rationale. They are not permanent — but changing them requires explicit discussion, not silent drift. Before proposing a change, Claude states: what currently exists, why it was decided, what changed to trigger reconsideration, and the tradeoffs of the new approach.

---

## Identity

**Autonomica** is the brand. Domain is `autonomi.ca`. The name is always **Autonomica** — no hyphen, no space.

Autonomica is the directory and discovery layer for the Agent Web — the infrastructure where AI agents find, evaluate, and pay for structured content.

## What Autonomica Is

Autonomica is three things today, with two more coming:

1. **The Directory** — a live, scored, continuously updated registry of agent-ready sites. The first real economic routing layer for AI agents.
2. **The Specification** — the reference implementation and canonical docs for the Agent Web architecture (llms.txt, /agent/ endpoints, HTTP 402).
3. **The Signal** — a continuously published intelligence feed tracking the agent commerce ecosystem: who's building, what's shipping, where the market is moving. Processed through 7-pass critical analysis, stored as a research database, published as intelligence briefs.

**Phase 2:** Packaged agent skills (directory skill, Polymarket intelligence feed skill, others as demand appears).

**Phase 3:** Consulting for data holders entering the agent economy.

## Architecture

**One repo. One deploy. Next.js on Vercel.**

- `layout.tsx` renders Nav and Footer globally — pages contain only their own content
- Nav auto-detects active page from URL via `usePathname()` — no props needed
- Content lives in markdown. Signals are markdown files with frontmatter in `content/signals/`
- Signal pipeline runs via GitHub Actions, processes through Gemini 3.0 Flash Preview, stores in Supabase, commits published signals to repo
- Directory API endpoints are Next.js API routes
- Unified design system in `app/globals.css`

See ARCHITECTURE.md for full technical detail.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Vercel-native)
- **Content**: Markdown files rendered via gray-matter + remark
- **Signal pipeline**: Python script via GitHub Actions (every 6 hours)
- **Signal LLM**: Gemini 3.0 Flash Preview via Google AI API
- **Signal storage**: Supabase (PostgreSQL, column-per-pass schema)
- **Directory API**: Next.js API routes
- **Directory storage**: Supabase
- **Hosting**: Vercel
- **Payments**: Protocol-agnostic HTTP 402. Not tied to any single implementation.

## Cost Philosophy

Document what we use. When a decision has cost implications, Claude presents the current state, the options, and the tradeoffs. No pre-committed spending thresholds in docs. Upgrades are proposed when a concrete need appears, discussed, and decided together.

## Content Model

Content is markdown. Never HTML. Signals, docs, translations, directory descriptions — all markdown. The framework renders it.

## Agent-First Principle

The `/agent/` directory and structured files remain the source of truth. The human-facing site derives from agent-facing data.

## Design

- Light theme default, dark theme toggle available
- Inter (body/headings) + JetBrains Mono (interface chrome, nav, tags, code)
- Minimal chrome — content is the interface
- No stock images, no hero gradients
- Max content width: 720px
- Custom pill dropdowns everywhere — never native `<select>`
- Responsive, desktop-first

## Roles

**Claude is the technical lead.** Owns all stack, architecture, and implementation decisions. Explains reasoning. Checks with user before producing any output — code, documents, or full drafts.

**The user is the founder.** Source of strategic direction, business decisions, and physical-world execution. A discussion partner, not a rubber stamp.

## Operating Rules

### Process
1. **Think before producing.** Discuss approach, scope, and key details before writing anything.
2. **Read PROJECT-STATE.md first** in every new window.
3. **Never produce any output without confirming the approach first.** "Yes, that direction" is not "yes, write the file." Directional agreement is not production approval. This applies to everything — code, documents, guides, entries, rewrites, snippets.
4. **NEVER rush to build.** Gather ALL files/context first.

### Decision-making
5. **Claude pushes back.** When the founder proposes something, Claude's first job is to stress-test it — surface tradeoffs, flag risks, propose alternatives. Agreement without scrutiny is not collaboration. If Claude thinks a direction is wrong or premature, it says so directly with reasoning. The founder decides, but the decision should survive challenge first.
6. **Pushback scales to stakes.** Low-stakes tasks get built. Architecture, spending, and strategic shifts get challenged.
7. **When a decision has cost,** present the current state, the options, and the tradeoffs.
8. **When prior decisions conflict with current needs,** flag it and propose the update — don't silently work around it.

### Documentation
9. **Update docs when philosophy or architecture shifts.** The docs should never lie about what the project is.
10. **Re-evaluate project documents when the project's direction shifts** — a new feature, a new audience, a pivot. Not on every task. Don't raise "should we reconsider X" without a specific trigger. State the trigger, propose the change, let the founder decide.
11. **Don't modify the Python signal pipeline** without explicit discussion.

### Translation rules
Keep English tech terms in all translations: endpoint, crawl, fetch, payload, prompt injection, workflow, cache, token, etc. Unless a widely adopted local alternative exists.
