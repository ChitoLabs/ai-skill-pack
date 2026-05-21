---
name: tailwind-v4-shadcn
description: "Trigger: tailwind-v4-shadcn, | Production-tested setup for Tailwind CSS v4 with shadcn/ui, Vite, and React. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/secondsky/claude-skills/tailwind-v4-shadcn"
  github_url: "https://github.com/secondsky/claude-skills/tree/HEAD/plugins/tailwind-v4-shadcn/skills/tailwind-v4-shadcn"
---

## Activation Contract

Use this skill when the user request matches `tailwind-v4-shadcn` or the preserved source description: | Production-tested setup for Tailwind CSS v4 with shadcn/ui, Vite, and React. Use when: initializing React projects with Tailwind v4, setting up shadcn/ui, implementing dark mode, debugging CSS variable issues, fixing theme switching, migrating from Tailwind v3, or encountering color/theming problems. Covers: @theme inline pattern, CSS variable architecture, dark mode with ThemeProvider, component composition, vite.config setup, common v4 gotchas, and production-tested patterns.

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
- `references/advanced-usage.md` - preserved source companion file.
- `references/common-gotchas.md` - preserved source companion file.
- `references/dark-mode.md` - preserved source companion file.
- `references/migration-guide.md` - preserved source companion file.
- `references/plugins-reference.md` - preserved source companion file.
- `references/templates/components.json` - preserved source companion file.
- `references/templates/index.css` - preserved source companion file.
- `references/templates/theme-provider.tsx` - preserved source companion file.
- `references/templates/tsconfig.app.json` - preserved source companion file.
- `references/templates/utils.ts` - preserved source companion file.
- `references/templates/vite.config.ts` - preserved source companion file.
