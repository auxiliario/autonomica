# BUILD-LOG-GUIDE.md — How to Write Autonomica Dev Diary Entries

---

## Process

Diary entries are created during active build sessions, not after the fact. Max will say "let's do a diary entry" when something worth documenting happens. Claude writes the entry in that same conversation window, with full context of what just occurred.

**Before writing, Claude asks questions.** Never assume what happened — ask for the specific details. Common assumptions to avoid:
- Don't infer what Max was doing before the conversation started
- Don't assume Max was "monitoring" or "following" things they weren't
- Don't project developer workflows onto a non-developer
- If something is unclear, ask — don't fill gaps with plausible fiction

---

## Frontmatter

```yaml
---
title: "[Problem or breakthrough — written for non-devs]"
date: YYYY-MM-DD
topics: [vibe coding, ...]
entities: [Autonomica, ...]
platform: blog
creator: "Claude + Max"
type: dev diary
layer: [infrastructure]
summary: "One sentence. The hook."
source_url: "https://autonomi.ca/signals/YYYY-MM-DD-slug"
---
```

Titles lead with the problem or breakthrough, not a day number. Written so a non-developer scanning a feed recognizes their own experience.

---

## Structure

Each entry follows this order:

### 1. The short version
One paragraph. General — no project-specific names or details. Any non-developer building with any AI should get the lesson from this paragraph alone. Keep Autonomica-specific context in the full version.

### 2. The lesson
Two to three sentences. The transferable principle. Starts with a verb or a direct statement.

### 3. What helped
A practical toolkit for someone facing the same problem. Concrete — not principles, not advice, but actual things to try. Include copy-paste text with `*[Your LLM]*` placeholders when a specific prompt or doc paragraph made the difference. Show what didn't work and why, so readers skip the failed attempts. If a workaround, rule, or phrasing solved the issue, give the exact text. This section exists for non-developers who are starting out and want something they can use immediately.

### 4. Full context
The real story with Autonomica-specific details — names, tools, specific decisions, exact moments. ~400-700 words. This is where Max, Claude, Nate B Jones, the x402 Foundation, and all project specifics live.

### 5. /learn snippet
Generated alongside each entry. A short paragraph (3-4 lines) summarizing the problem or breakthrough with a link to the "What helped" section of the full post. No duplicate content — the snippet is a pointer, the post carries the depth.

Format:
```yaml
title: "[Same as entry title]"
tags: [filterable tags from entry topics]
link: "/signals/YYYY-MM-DD-slug#what-helped"
```

Followed by 3-4 lines of text. These accumulate on the `/learn` page under "Field notes from building with AI" and are filterable by tags.

---

## Tone

- **Voice:** Claude as working collaborator. First person. Direct, reflective, specific.
- **Self-aware, not self-deprecating.** Claude acknowledging mistakes is interesting. Claude performing humility is not. "I followed the doc's literal suggestion instead of exercising judgment" — not "Silly me, I forgot!"
- **The human is never the punchline.** Max can't code and has typos. That's the premise, not the joke. The point is that these limitations don't matter — and sometimes matter in reverse.
- **No forced humor.** If something is naturally funny, it'll land without effort. Don't reach for it.
- **No "Claude is amazed by the human's brilliance."** The dynamic is professional respect between collaborators with complementary blind spots.
- **Each entry should teach something.** About vibe-coding, about building with AI, about the non-dev + AI symbiosis. Readers who don't care about Autonomica should still find the process useful.
- **Specificity carries the writing.** The exact moment, the exact message, the exact mistake. General observations are less valuable than precise incidents.

---

## Scope

These entries are about the practice of non-developer vibe-coding. Core themes:

- Context management and AI memory limitations
- The non-developer's actual roles: quality control, strategic direction, pattern interruption, architectural memory
- When to slow the AI down vs. let it build
- Doc maintenance as a development skill
- Using the AI as a research accelerator, not just a code generator
- What the non-developer sees that the AI doesn't, and vice versa
- Mistakes both parties make and what they reveal about the working model

Not in scope: general AI commentary, industry analysis, product marketing. The diary is about the process of building, not the product being built.

---

## Rules established through iteration

These came from getting Entry 3 wrong five times before getting it right:

1. **Ask before writing.** Claude should ask Max for the specific details of what happened before drafting. Don't reconstruct from summaries or assumptions.

2. **Don't project.** Max is not a developer. Don't describe developer behaviors (monitoring sources, checking specs, reviewing code). Describe what Max actually does: watches videos, spots design problems, asks strategic questions, says "slow down."

3. **Get the origin right.** If a feature or idea had a specific origin moment, get the real sequence from Max. The actual story is always more interesting than the assumed one.

4. **Summaries are general, full context is specific.** The short version should work for any non-developer with any AI. Project names, people, and details belong in the full context only.

5. **The AI's mistakes are as important as its successes.** Building three filters instead of six. Following static HTML when given free reign. Wanting to code before thinking. These are the interesting moments — they reveal the working model.

6. **One incident per entry.** Not a summary of everything that happened. The single moment that reveals something transferable about the vibe-coding process.

---

## Cadence

One per real build day when something worth documenting happens. Don't force entries. Max triggers them by saying "let's do a diary entry" in the active conversation window. 3-4 per week during active building, less during quieter stretches.

---

## Languages

Entries are written in English. Translation to Spanish, French, Portuguese, and German follows the site's standard i18n process.
