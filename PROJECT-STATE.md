# PROJECT-STATE.md — Autonomica Ground Truth

**Last updated**: 2026-02-24
**Read this first in every new window.**

---

## What Autonomica Is

Autonomica (autonomi.ca) is the directory and discovery layer for the Agent Web. Three products:

1. **Directory** — live, scored registry of agent-ready sites with HTTP 402 micropayments
2. **Signal** — auto-published intelligence feed tracking agent commerce ecosystem (SEO engine)
3. **Specification** — canonical docs for llms.txt, /agent/ endpoints, HTTP 402

Built by Auxiliar.io (Max). One repo, one deploy, Next.js on Vercel.

---

## Current State: Next.js — Live on Vercel

The site has been migrated from static HTML to Next.js. Deployed at autonomi.ca via GitHub repo `auxiliario/autonomica`, branch `main`.

### What's built and deployed

**Architecture:**
- `layout.tsx` renders Nav and Footer globally — no page imports them
- Nav auto-detects active page from URL via `usePathname()` — no props
- All page files contain only their own content
- Unified design system in `app/globals.css` (single CSS file, all pages)
- Default theme: light. Toggle persists via `localStorage('autonomica-theme')`

**Pages:**
- `/` — Homepage: hero, bold learn callout, signals with 6 filter pills, tools grid, manifesto with section header, email capture
- `/signals` — Feed with 6-dimension filters + pagination
- `/signals/[slug]` — Individual signal with markdown rendering, tags, related signals
- `/generate` — Generator tool (form, live preview, tabbed output, download)
- `/validate` — Validator tool (paste llms.txt or index.json, pass/fail/warn checks)
- `/estimate` — Token estimator (revenue projections, stat cards)
- `/inspect` — Inspector (domain probe for agent-readiness, links to generator)
- `/directory` — Stub page (Phase 2)
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

**Signals:**
- 5 seed signals in `content/signals/` (markdown with frontmatter)
- Read at build time by `lib/signals.ts` (gray-matter + remark)
- Date fields converted via `toStr()` helper to avoid Date object rendering errors

**Agent layer (static in `/public`):**
- `llms.txt` — agent routing manifest
- `agent/index.json` — document registry
- `agent/pricing.json` — pricing tiers (free + paid Phase 2)
- `agent/changelog.json` — version history
- `agent/docs/` — manifesto.md, spec.md, pricing-guide.md, security.md, trust.md

**Components:**
- `Nav.tsx` — client component, auto-active detection from URL
- `Footer.tsx` — 4-line layout, Max links to /learn
- `ThemeToggle.tsx` — sun/moon toggle
- `LangSwitcher.tsx` — dropdown (EN/FR/ES/PT/DE), UI only
- `SignalCard.tsx` — signal card for feeds
- `ToolCard.tsx` — terminal-style card for homepage grid
- `FilterPills.tsx` — custom dropdown pill filters (not native select)
- `HomeSignals.tsx` — client component wrapping signals + filters on homepage

**Config:**
- `vercel.json` — daily crons (hobby plan), cleanUrls
- `next.config.ts` — CORS headers for agent endpoints

### What's NOT built yet

- `/learn` content (shell approved, glossary as accordion cards — deferred)
- Signal integrations/fetchers (cron stubs exist, no actual fetchers)
- Directory API routes (stubs only)
- i18n routing (lang switcher is UI-only)
- Email capture backend
- 6-dimension signal taxonomy (using flat `tags[]` for now)
- Python pipeline integration with Next.js

---

## Decisions Locked

- **Nav + Footer in layout.tsx.** Global. No per-page imports.
- **Nav detects active from URL.** No props needed.
- **Light theme default.**
- **Custom pill dropdowns everywhere.** Never native `<select>`.
- **Inter + JetBrains Mono.** Inter for reading, JetBrains Mono for chrome.
- **Max width 720px** for all content.
- **Footer:** © autonomi.ca / vibe-coded with Claude · by Max / — a human who can't code, / what a time to be alive. Max links to `/learn`.
- **Learn callout on homepage:** Bold, 1rem, between hero and signals.
- **Tools and Manifesto nav links** scroll to homepage sections, not separate pages.

## Decisions Deferred

- **Merge `/learn` and Max's personal manifesto into one page.** Both serve non-dev audience.
- **Glossary as accordion/dropdown cards.** Each term is a collapsible card. Implement when building `/learn`.
- Signal tag taxonomy: flat `tags[]` → 6-dimension. Requires pipeline prompt update.
- Directory scoring model: weights and components TBD.
- 402 payment protocol: architecture is protocol-agnostic. Phase 2.
- Email capture backend: wire to a real service later.

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
- Manifesto headings: `## ` and `### ` prefix in dim color
- Trust levels: Colored left border (green/yellow/red)
- Highlight boxes: Accent left border, raised background

---

## Brand Voice

**Dev diary signals:** Written in Claude's voice, first person, during active build sessions. Max triggers by saying "let's do a diary entry." Full guide in BUILD-LOG-GUIDE.md.

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

### Rules
1. **Think before coding.** Discuss implications before executing.
2. **Read PROJECT-STATE.md first** in every new window.
3. **Never produce code without confirmation.**
4. **NEVER rush to build.** Gather ALL files/context first.
5. **Don't modify the Python signal pipeline** without explicit discussion.

### Translation rules
Keep English tech terms in all translations unless widely adopted local alternative exists.

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

1. **Signal integrations** — build fetchers from `autonomica-signal-integrations.md`. These generate SEO.
2. **Wire `/learn` page** — content approved in shell, glossary as accordion cards
3. **Directory API routes** — probe function, Vercel KV storage
4. **i18n routing** — connect lang switcher to actual routes

---

## Repo & Deploy

| Item | Value |
|------|-------|
| GitHub | `auxiliario/autonomica` |
| Branch | `main` |
| Host | Vercel |
| Domain | `autonomi.ca` |
| Plan | Hobby (daily crons) |
| Framework | Next.js (auto-detected) |

---

## What NOT To Do

- Don't add Nav or Footer imports to page files (they're in layout.tsx)
- Don't rewrite the Python signal pipeline
- Don't implement 6-dimension taxonomy yet (flat tags for now)
- Don't build 402 payment enforcement yet
- Don't build the trading intelligence feed yet
- Don't build user accounts
- Don't split into multiple repos/services
- Don't use Tailwind (custom CSS system already built)
