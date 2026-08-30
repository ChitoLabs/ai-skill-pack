---
name: ask-matt
description: "Trigger: ask matt, choose workflow, skill router. Route work through idea, research, planning, implementation, review, and learning flows."
license: MIT
metadata:
  author: mattpocock
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: "https://www.skills.sh/mattpocock/skills/ask-matt"
  github_url: "https://github.com/mattpocock/skills/tree/main/skills/engineering/ask-matt"
---

## Activation Contract

Use when the user asks which skill, flow, or starting point fits their current situation. This is a router over the Matt Pocock skill ecosystem, adapted to portable skill names and host capabilities.

## Hard Rules

- Route by situation and desired outcome, not by skill popularity.
- Preserve the idea-to-ship flow: idea sharpening, optional prototype detour, PRD or issue split, implementation, TDD, and code review.
- Preserve context hygiene: keep grilling, PRD, and issue splitting in one strong context window when possible. Use `handoff` before context quality drops.
- Reference companion skills by name only. If a named skill is absent, say so and give the closest manual fallback.
- Do not skip the setup precondition when this is the user's first engineering flow.

## Decision Gates

| Situation | Route |
|---|---|
| First time using this engineering flow | Run `setup-matt-pocock-skills` or perform the equivalent setup for issue tracker, triage labels, and doc layout. |
| Idea needs sharpening with a codebase | Use `grill-with-docs` if available, otherwise use a codebase-aware interview workflow and persist context in project docs. |
| Idea needs sharpening without a codebase | Use `grill-me`. |
| A question needs a runnable answer | Use `handoff`, then `prototype`, then `handoff` back to the original idea thread. |
| Multi-session build | Use `to-prd`, then `to-issues`, then fresh implementation sessions per issue. |
| Small build that fits current context | Use `implement` in the current session. |
| Bugs or raw requests are piling up | Use `triage`, but never triage issues already produced by `to-issues`. |
| Hard bug needs investigation | Use `diagnosing-bugs`, then hand off architecture findings to `improve-codebase-architecture` when no good seam exists. |
| Codebase upkeep | Use `improve-codebase-architecture`, then take selected ideas back through the main flow. |
| User wants to learn | Use `teach`. |
| Words or modeling are the problem | Use `domain-modeling` for domain language or `codebase-design` for module shape. |

## Execution Steps

1. Classify the user's starting situation: idea, raw request queue, bug, codebase health, vocabulary, handoff, or learning.
2. Check whether the setup precondition has been satisfied for this repository or issue tracker. If not, route to setup first.
3. Select the route:
   - Main flow: `grill-with-docs` or `grill-me`, optional `handoff` plus `prototype` detour, then `to-prd` and `to-issues` for multi-session work or direct `implement` for small work.
   - Implementation flow: `implement` drives `tdd` internally, then closes with `code-review` before commit.
   - On-ramp flow: `triage` for incoming issues, `diagnosing-bugs` for resistant bugs.
   - Standalone flow: `grill-me`, `prototype`, `research`, `teach`, or `writing-great-skills`.
4. Apply context hygiene: do not compact or clear mid-phase. If the context approaches the runtime's useful reasoning limit, use `handoff` and continue in a fresh session.
5. If a named skill is not available, give a manual equivalent with the same artifact contract.

## Output Contract

Return the chosen route, first skill to load, required inputs, setup status, context hygiene warning, unavailable skill fallbacks, and the next action.

## References

- No local references.
