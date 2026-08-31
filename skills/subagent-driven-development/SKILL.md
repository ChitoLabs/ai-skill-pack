---
name: subagent-driven-development
description: "Trigger: repository-local delegated implementation workflow explicitly selected by the user or repository policy. Do not auto-activate globally; defer to the repository-designated orchestration owner and any managed review or receipt workflow."
license: Apache-2.0
metadata:
  author: obra
  adapter: LCubero
  version: 0.2
  skills_sh_url: "https://skills.sh/obra/superpowers/subagent-driven-development"
  github_url: "https://github.com/obra/superpowers/tree/HEAD/skills/subagent-driven-development"
---

# Repository-Local Template: Delegated Implementation

## Activation Contract

Use only when the user or repository policy explicitly adopts this template and names the orchestration owner. Never auto-activate globally.

Read `references/source-skill.md` and the relevant prompt templates before any authorized delegation.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- The designated orchestration owner controls work units, delegation, checkpoints, phases, review, and delivery.
- Do not create child workers when runtime capability or repository policy does not permit them.
- Do not commit, advance phases, continue across checkpoints, or issue delivery decisions without explicit authorization.
- Keep specification conformance review separate from technical quality review.
- Use canonical task inputs; never create a parallel plan or review authority.

## Decision Gates

| Condition | Action |
|---|---|
| A named companion skill is not installed | Say so, then continue with this skill's own references or the closest manual fallback. |
| Template was not explicitly adopted | Do not run. |
| Delegation capability is unavailable | Return manual work-unit instructions. |
| A checkpoint, phase, or review owner exists | Return evidence to that owner and wait. |
| Scope or canonical inputs conflict | Stop and report the conflict. |

## Execution Steps

1. Confirm the owner, canonical task, scope, permitted capability, and checkpoint.
2. Prepare isolated context for one authorized work unit.
3. Delegate or provide manual instructions using the implementer template.
4. Collect evidence, then run separately authorized specification and quality reviews.
5. Report results and blockers to the owner without advancing automatically.

## Output Contract

Return the work unit, capability used, files changed, verification evidence, separate review results, blockers, and the next checkpoint awaiting authorization.

## References

- `references/source-skill.md`
- `references/implementer-prompt.md`
- `references/spec-reviewer-prompt.md`
- `references/code-quality-reviewer-prompt.md`
