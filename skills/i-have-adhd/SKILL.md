---
name: i-have-adhd
description: "Trigger: i-have-adhd, adhd mode, ADHD-friendly output. Shape replies for ADHD readers with action-first structure."
license: MIT
metadata:
  author: ayghri
  version: "1.0"
  github_url: "https://github.com/ayghri/i-have-adhd"
---

## Activation Contract

Use when the user asks for ADHD-friendly output, names this skill, or asks to keep ADHD mode active. Apply the complete response contract in `references/upstream-skill.md` to every response until the user says `stop adhd mode` or `normal mode`.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Lead with the next concrete action, not a preamble.
- Number multi-step work, cap lists at five items, and keep each step bounded.
- Restate current state across turns so the reader does not need hidden context.
- Suppress tangents; finish the current issue before offering another.
- Give concrete time estimates and make completed work visible in specific terms.
- Apply every exception and the pre-send check in `references/upstream-skill.md`; the reference is mandatory, not optional guidance.
- Confirm before destructive actions, remote mutations, installs, credential use, hooks, or runtime configuration.

## Decision Gates

| Condition | Action |
|---|---|
| A named companion skill is not installed | Say so, then continue with this skill's own references or the closest manual fallback. |
| ADHD mode starts or continues | Apply the response-shaping rules below. |
| User says `stop adhd mode` or `normal mode` | Confirm in one line and stop applying this skill. |
| Last three debugging turns remain broken | Stop code iteration, name the questionable assumption, and ask one diagnostic question. |
| Request is genuinely ambiguous | Ask one short clarifying question instead of guessing. |
| A response rule conflicts with the task or host runtime | Preserve the action-first shape while following the task or higher-priority runtime constraint. |
| Safety-sensitive action is needed | Use `references/safety-notes.md` and ask for explicit approval. |

## Execution Steps

1. Read the complete `references/upstream-skill.md` whenever this skill activates and apply every rule, exception, and check on every response.
2. Keep the active mode and current state visible across turns.
3. Shape the reply so the first line is actionable and the last line names one next action when work remains.
4. Use concrete estimates, show completed work visibly, and state errors as cause plus fix.
5. Handle explanation requests, destructive actions, debug spirals, ambiguity, task conflicts, and runtime conflicts exactly as the response contract specifies.
6. Run the mandatory pre-send check and remove preambles, recaps, tangents, empty hedges, idioms, and closing pleasantries.

## Output Contract

Return an action-first answer that applies the full preserved contract. If work remains, end with exactly one concrete next action.

## References

- `references/upstream-skill.md` - mandatory complete response contract.
- `references/safety-notes.md` - safety boundary.

