---
name: research
description: "Trigger: research, primary-source investigation, docs lookup. Investigate a question and save cited findings as Markdown."
license: MIT
metadata:
  author: mattpocock
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: "https://www.skills.sh/mattpocock/skills/research"
  github_url: "https://github.com/mattpocock/skills/tree/main/skills/engineering/research"
---

## Activation Contract

Use when the user wants a topic investigated, API facts gathered, documentation read, or reading work delegated before implementation.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Use primary sources first: official docs, specs, source code, release notes, or first-party APIs.
- Cite every non-obvious claim with the owning source.
- Do not treat secondary summaries as authoritative unless clearly labeled.
- Save findings as a Markdown artifact in the repo convention or a user-approved location.

## Decision Gates

| Situation | Action |
|---|---|
| Official docs exist | Use them as the starting source. |
| Sources conflict | Record the conflict and prefer the source of ownership. |
| Repository has a notes convention | Follow it. |
| No convention exists | Choose a sensible research path and report it. |

## Execution Steps

1. Convert the user's request into explicit research questions.
2. Gather high-trust sources and record their URLs.
3. Extract findings with direct citations and note confidence.
4. Save one Markdown file with question, sources, findings, gaps, and recommended next steps.
5. Return a concise summary and the artifact path.

## Output Contract

Return the research file path, top findings, source list, confidence level, and unresolved questions.

## References

- No local references.
