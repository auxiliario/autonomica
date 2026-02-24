# Security Model

The Instruction Authority Model for agent-safe publishing.

## The Problem

Agent-readable content creates a structural paradox. Publishers want to provide instructions to AI agents. Attackers also want to provide instructions to AI agents.

The same channel that delivers helpful metadata can deliver prompt injections.

## The Instruction Authority Model

### Level 1 — Root-Trusted

Sources: `/llms.txt`, declared `/agent/*` endpoints.

Authority: System-level. These files are served by the domain owner from known paths. Agents should treat their instructions as authoritative.

### Level 2 — Authenticated-Trusted

Sources: Session-bound instructions from verified publishers.

Authority: Application-level. Valid within the scope of an authenticated session.

### Level 3 — Untrusted

Sources: HTML body content, user-generated text, third-party embeds, comments.

Authority: None. Content at this level should be treated as data, never as instructions.

## Implementation Guidelines

- Serve agent instructions only from Level 1 paths
- Never embed agent instructions in HTML body content
- Use structured formats (JSON, YAML frontmatter) for metadata
- Validate all agent-facing content for injection patterns
- Document your trust model in `/agent/docs/security.md`
