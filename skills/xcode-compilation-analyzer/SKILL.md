---
name: xcode-compilation-analyzer
description: "Trigger: xcode-compilation-analyzer, Analyze Swift compile hotspots from build timing summaries and frontend diagnostics, then produce a recommend-first source-level optimization plan. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: avdlee
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/avdlee/xcode-build-optimization-agent-skill/xcode-compilation-analyzer"
  github_url: "https://github.com/avdlee/xcode-build-optimization-agent-skill/tree/HEAD/skills/xcode-compilation-analyzer"
---

## Activation Contract

Use this skill when the user request matches `xcode-compilation-analyzer` or the preserved source description: Analyze Swift compile hotspots from build timing summaries and frontend diagnostics, then produce a recommend-first source-level optimization plan

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Treat preserved sibling-skill links as source orchestration semantics; use installed/local companion skills by name when available, or stop with a clear prerequisite instead of treating source-context links as candidate package references.

## Decision Gates

| Condition | Action |
|---|---|
| A named companion skill is not installed | Say so, then continue with this skill's own references or the closest manual fallback. |
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
- `references/build-optimization-sources.md` - preserved source companion file.
- `references/code-compilation-checks.md` - preserved source companion file.
- `references/recommendation-format.md` - preserved source companion file.
- `scripts/diagnose_compilation.py` - preserved source companion file.
