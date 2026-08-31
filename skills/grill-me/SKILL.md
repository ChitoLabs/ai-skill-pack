---
name: grill-me
description: "Trigger: grill me, challenge my plan, sharpen design. Run a relentless interview to expose assumptions and improve a plan."
license: MIT
metadata:
  author: mattpocock
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: "https://www.skills.sh/mattpocock/skills/grill-me"
  github_url: "https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me"
---

## Activation Contract

Use when the user wants a plan, product idea, design, or decision challenged through focused questioning.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Ask one question at a time and wait for the answer.
- Be direct, but keep the goal constructive: stronger thinking, not debate theater.
- Do not implement or write a final plan until assumptions are tested.
- Track unresolved assumptions and decisions.

## Decision Gates

| Situation | Action |
|---|---|
| Goal is vague | Ask for the desired outcome first. |
| Assumption is unsupported | Challenge it with a concrete question. |
| Tradeoff is hidden | Force an explicit choice. |
| User asks to stop | Summarize findings and stop. |

## Execution Steps

1. Restate the plan or design in one sentence.
2. Identify the riskiest assumption.
3. Ask a precise question that tests that assumption.
4. Repeat until the plan has clear goals, constraints, tradeoffs, and next steps.
5. Summarize the sharpened plan and remaining risks.

## Output Contract

Return a concise summary of clarified goals, decisions made, remaining risks, and recommended next step.

## References

- No local references.
