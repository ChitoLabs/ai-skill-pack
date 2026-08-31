---
name: webapp-testing
description: "Trigger: test or debug a local web application with Playwright. Verify specified frontend behavior, UI state, screenshots, browser logs, or local checks."
license: Complete terms in LICENSE.txt
metadata:
  author: anthropics
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/anthropics/skills/webapp-testing"
  github_url: "https://github.com/anthropics/skills/tree/HEAD/skills/webapp-testing"
---

## Activation Contract

Use this skill when the user request matches `webapp-testing` or the preserved source description: Toolkit for interacting with and testing local web applications using Playwright. Supports verifying frontend functionality, debugging UI behavior, capturing browser screenshots, and viewing browser logs.

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Treat preserved `/mnt/user-data/outputs/...` script paths as example output locations; write screenshots, logs, and generated artifacts to the user-requested workspace or an explicitly approved output path.

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
- `references/LICENSE.txt` - preserved source companion file.
- `references/examples/console_logging.py` - preserved source companion file.
- `references/examples/element_discovery.py` - preserved source companion file.
- `references/examples/static_html_automation.py` - preserved source companion file.
- `scripts/with_server.py` - preserved source companion file.
