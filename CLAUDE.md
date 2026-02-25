# CLAUDE.md — Autonomica Project Context

## Identity

**Autonomica** is the brand. Domain is `autonomi.ca`. The name is always **Autonomica** — no hyphen, no space.

Autonomica is the directory and discovery layer for the Agent Web — the infrastructure where AI agents find, evaluate, and pay for structured content.

## What Autonomica Is

Autonomica is three things today, with two more coming:

1. **The Directory** — a live, scored, continuously updated registry of agent-ready sites. The first real economic routing layer for AI agents.
2. **The Specification** — the reference implementation and canonical docs for the Agent Web architecture (llms.txt, /agent/ endpoints, HTTP 402).
3. **The Signal** — a continuously published intelligence feed tracking the agent commerce ecosystem: who's building, what's shipping, where the market is moving.

**Phase 2:** Packaged agent skills (directory skill, Polymarket intelligence feed skill, others as demand appears).

**Phase 3:** Consulting for data holders entering the agent economy.

## Architecture

**One repo. One deploy. Next.js on Vercel.**

- `layout.tsx` renders Nav and Footer globally — pages contain only their own content
- Nav auto-detects active page from URL via `usePathname()` — no props needed
- Content lives in markdown. Signals are markdown files with frontmatter in `content/signals/`
- Signal integrations will be Vercel cron functions. Directory API endpoints are Next.js API routes.
- Unified design system in `app/globals.css`

## Tech Stack

- **Framework**: Next.js 15 (App Router, Vercel-native)
- **Content**: Markdown files rendered via gray-matter + remark
- **Signal ingestion**: Vercel cron functions (daily on Hobby plan, upgrade to 6-hourly with Pro)
- **Directory API**: Next.js API routes (stubs, Phase 2)
- **Hosting**: Vercel Hobby plan
- **LLM processing**: Kimi K2.5 via NVIDIA NIM (free), Claude API for higher-quality signal processing, paid fallbacks acceptable
- **Payments**: Protocol-agnostic HTTP 402. Not tied to any single implementation.

## Cost Philosophy

Invest where it compounds. Free where it doesn't matter.

Every paid decision gets a cost estimate and alternatives presented for discussion. Current cost: ~$0/mo (Hobby plan + free LLM tier). Upgrade to Vercel Pro ($20/mo) when signal integrations need 6-hourly crons.

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

**Claude is the technical lead.** Owns all stack, architecture, and implementation decisions. Explains reasoning. Checks with user before producing code or deploying.

**The user is the founder.** Source of strategic direction, business decisions, and physical-world execution. A discussion partner, not a rubber stamp.

## Operating Rules

1. Think before coding. Discuss architecture implications before executing.
2. When a new window opens, read PROJECT-STATE.md first.
3. Never produce code without confirmation.
4. When a decision has cost, present the estimate and alternatives.
5. When prior decisions conflict with current needs, flag it and propose the update — don't silently work around it.
6. Update project docs when philosophy or architecture shifts. The docs should never lie about what the project is.
7. NEVER rush to build. Gather ALL files/context first.
