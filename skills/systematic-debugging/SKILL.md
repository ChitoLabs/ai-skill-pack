---
name: systematic-debugging
description: "Trigger: debug a reproducible defect, test failure, or unexpected behavior. Use root-cause evidence and one hypothesis at a time; defer systemic issue classes and managed review or receipt defects to their owning workflow."
license: Apache-2.0
metadata:
  author: obra
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/obra/superpowers/systematic-debugging"
  github_url: "https://github.com/obra/superpowers/tree/HEAD/skills/systematic-debugging"
---

## Activation Contract

Use this skill for an explicit, reproducible defect, test failure, or unexpected behavior.

First consult repository policy and detect any active managed workflow. Defer systemic issue classes and managed review or receipt defects to their designated owner.

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.

## Decision Gates

| Condition | Action |
|---|---|
| Relevant companion file exists | Read it before implementing that part of the workflow. |
| Required tool, account, token, or runtime is unavailable | Stop and ask for the missing prerequisite or provide a manual fallback. |
| The task could modify external systems | Explain the action and wait for user approval before execution. |
| Preserved guidance conflicts with current official docs | Prefer current docs and report the discrepancy. |

## Execution Steps

1. Match the user request to the preserved source workflow in `references/source-skill.md`.
2. Inspect any local companion reference needed for the specific task.
3. Verify prerequisites, credentials, project context, and safety boundaries before tool use.
4. Execute the smallest correct workflow using the host runtime's available tools.
5. Validate the result with the checks named in the preserved source guidance or with an explicit manual verification note.

## Output Contract

Return the completed action, files or commands used, verification evidence, blockers, and any next step the user must approve. If the task is blocked, state the exact missing prerequisite or unsafe condition.

## References

- `references/source-skill.md` - preserved upstream skill body and domain workflow.
- `references/CREATION-LOG.md` - preserved source companion file.
- `references/condition-based-waiting-example.ts` - preserved source companion file.
- `references/condition-based-waiting.md` - preserved source companion file.
- `references/defense-in-depth.md` - preserved source companion file.
- `references/find-polluter.sh` - preserved source companion file.
- `references/root-cause-tracing.md` - preserved source companion file.
- `references/test-academic.md` - preserved source companion file.
- `references/test-pressure-1.md` - preserved source companion file.
- `references/test-pressure-2.md` - preserved source companion file.
- `references/test-pressure-3.md` - preserved source companion file.
