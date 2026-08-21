# Provenance and Ecosystem

## Integrated Source Semantics

Official author: Matt Pocock.

Official skill: [mattpocock/skills, skills/productivity/grill-me/SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md).

This candidate adapts Matt Pocock's `grill-me` entry point and integrates the essential behavior of its `grilling` primitive into one self-contained skill. It is a portable adaptation for Gentle AI, OpenCode, Pi, and Claude Code. Portability work and local extensions do not replace or claim Matt Pocock's authorship. The source relationship was verified against the official repository and skill path above.

The integrated behavior includes:

- explicit user activation
- decision-tree and frontier reasoning
- complete independent-frontier rounds
- numbered, titled questions with recommendations and visual separators
- recomputation after every round
- fact investigation without transferring decision ownership
- branch-local blocking for pending investigations
- empty-frontier and shared-understanding completion gates

The candidate intentionally removes the runtime dependency on a separately installed `grilling` skill. This is an architectural adaptation approved for portability, not a claim that the upstream wrapper is itself self-contained.

## Local Extensions

The installed local variant contributed safe controls for vague goals, unsupported assumptions, hidden tradeoffs, user stop requests, unresolved-assumption tracking, concise final summaries, and sequential questioning by default. Full-frontier rounds remain available through explicit user preference because batching is the upstream default.

The candidate also makes statelessness, no writes, no implementation, no specification creation, and optional post-session persistence explicit.

## Optional Ecosystem Context

The following names are contextual routes only. This skill does not load, invoke, or require them:

- `prototype`
- `to-spec`
- `ask-matt`
- `grill-with-docs`
- `wayfinder`
- `domain-modeling`
- `triage`
- `improve-codebase-architecture`

Mention a route only as an optional next step when it materially fits the completed conversation and the user can decide whether to activate it separately.

## Runtime Boundary

The workflow is portable across OpenCode, Pi, Claude Code, and comparable Agent Skills hosts. It relies on conversation by default. Environmental research is conditional on available capabilities and permissions. It has no mandatory shell, browser, file editing, delegation, memory, MCP, SDD, provider, or companion-skill dependency.

The official skill URL remains visible here as provenance. It is intentionally absent from candidate frontmatter because the upgrade protocol's content-equivalence Jaccard gate does not accept the expanded adaptation as metadata-equivalent to the thin upstream wrapper. Visible provenance and frontmatter content-equivalence metadata are separate concerns.
