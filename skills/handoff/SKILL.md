---
name: handoff
description: "Trigger: handoff, resume later, transfer context. Write a redacted continuation document for another agent or fresh session."
license: MIT
metadata:
  author: mattpocock
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: "https://www.skills.sh/mattpocock/skills/handoff"
  github_url: "https://github.com/mattpocock/skills/tree/main/skills/productivity/handoff"
---

## Activation Contract

Use when the user wants the current conversation compacted into a handoff for another agent, another session, or a later continuation.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Redact secrets, credentials, tokens, personal data, and private identifiers.
- Do not duplicate full artifacts that already exist. Reference paths, URLs, commits, issues, or plans instead.
- Prefer a temporary or user-approved location outside the workspace unless the user requests a repo artifact.
- Do not claim future work is complete.

## Decision Gates

| Situation | Action |
|---|---|
| User names the next focus | Tailor the handoff around that focus. |
| Existing plan or PRD exists | Link it instead of copying it. |
| Sensitive data appears | Redact and state that redaction occurred. |
| No safe output path exists | Ask for a destination. |

## Execution Steps

1. Identify goal, current status, constraints, decisions, open questions, and next action.
2. List relevant artifacts by path or URL.
3. Add suggested skills by name only when they are useful for continuation.
4. Write the handoff document to the approved location.
5. Return the file path and a short continuation prompt.

## Output Contract

Return the handoff path, redaction status, suggested skills, and next-session focus.

## References

- No local references.
