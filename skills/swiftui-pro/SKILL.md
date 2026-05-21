---
name: swiftui-pro
description: "Trigger: swiftui-pro, Comprehensively reviews SwiftUI code for best practices on modern APIs, maintainability, and performance. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Paul Hudson
  version: 1.1
  skills_sh_url: "https://www.skills.sh/twostraws/swiftui-agent-skill/swiftui-pro"
  github_url: "https://github.com/twostraws/swiftui-agent-skill/tree/HEAD/swiftui-pro"
---

## Activation Contract

Use this skill when the user request matches `swiftui-pro` or the preserved source description: Comprehensively reviews SwiftUI code for best practices on modern APIs, maintainability, and performance. Use when reading, writing, or reviewing SwiftUI projects.

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
- `assets/swiftui-pro-icon.png` - preserved source companion file.
- `assets/swiftui-pro-icon.svg` - preserved source companion file.
- `references/.claude-plugin/plugin.json` - preserved source companion file.
- `references/accessibility.md` - preserved source companion file.
- `references/agents/openai.yaml` - preserved source companion file.
- `references/api.md` - preserved source companion file.
- `references/data.md` - preserved source companion file.
- `references/design.md` - preserved source companion file.
- `references/hygiene.md` - preserved source companion file.
- `references/navigation.md` - preserved source companion file.
- `references/performance.md` - preserved source companion file.
- `references/swift.md` - preserved source companion file.
- `references/views.md` - preserved source companion file.
