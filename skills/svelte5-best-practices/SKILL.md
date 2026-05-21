---
name: svelte5-best-practices
description: "Trigger: svelte5-best-practices, Svelte 5 runes, snippets, SvelteKit patterns, and modern best practices for TypeScript and component development. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: ejirocodes
  version: 1.0.0
  skills_sh_url: "https://skills.sh/ejirocodes/agent-skills/svelte5-best-practices"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/svelte5-best-practices"
---

## Activation Contract

Use this skill when the user request matches `svelte5-best-practices` or the preserved source description: Svelte 5 runes, snippets, SvelteKit patterns, and modern best practices for TypeScript and component development. Use when writing, reviewing, or refactoring Svelte 5 components and SvelteKit applications. Triggers on: Svelte components, runes ($state, $derived, $effect, $props, $bindable, $inspect), snippets ({#snippet}, {@render}), event handling, SvelteKit data loading, form actions, Svelte 4 to Svelte 5 migration, store to rune migration, slots to snippets migration, TypeScript props typing, generic components, SSR state isolation, performance optimization, or component testing.

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
- `references/events.md` - preserved source companion file.
- `references/migration.md` - preserved source companion file.
- `references/performance.md` - preserved source companion file.
- `references/runes.md` - preserved source companion file.
- `references/snippets.md` - preserved source companion file.
- `references/sveltekit.md` - preserved source companion file.
- `references/typescript.md` - preserved source companion file.
