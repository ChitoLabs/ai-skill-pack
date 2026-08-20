---
name: shadcn
description: "Trigger: shadcn, Manages shadcn components and projects — adding, searching, fixing, debugging, styling, and composing UI. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: shadcn
  version: 0.1
  skills_sh_url: "https://skills.sh/shadcn/ui/shadcn"
  github_url: "https://github.com/shadcn/ui/tree/HEAD/skills/shadcn"
---

## Activation Contract

Use this skill when the user request matches `shadcn` or the preserved source description: Manages shadcn components and projects — adding, searching, fixing, debugging, styling, and composing UI. Provides project context, component docs, and usage examples. Applies when working with shadcn/ui, component registries, presets, --preset codes, or any project with a components.json file. Also triggers for "shadcn init", "create an app with --preset", or "switch to --preset".

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
- `assets/shadcn-small.png` - preserved source companion file.
- `assets/shadcn.png` - preserved source companion file.
- `references/agents/openai.yml` - preserved source companion file.
- `references/cli.md` - preserved source companion file.
- `references/customization.md` - preserved source companion file.
- `references/evals/evals.json` - preserved source companion file.
- `references/mcp.md` - preserved source companion file.
- `references/rules/base-vs-radix.md` - preserved source companion file.
- `references/rules/composition.md` - preserved source companion file.
- `references/rules/forms.md` - preserved source companion file.
- `references/rules/icons.md` - preserved source companion file.
- `references/rules/styling.md` - preserved source companion file.
