---
name: angular-developer
description: "Trigger: angular-developer, Generates Angular code and provides architectural guidance. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Copyright 2026 Google LLC
  version: 1.0
  skills_sh_url: "https://skills.sh/angular/skills/angular-developer"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/angular-developer"
---

## Activation Contract

Use this skill when the user request matches `angular-developer` or the preserved source description: Generates Angular code and provides architectural guidance. Trigger when creating projects, components, or services, or for best practices on reactivity (signals, linkedSignal, resource), forms, dependency injection, routing, SSR, accessibility (ARIA), animations, styling (component styles, Tailwind CSS), testing, or CLI tooling.

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
- `references/angular-animations.md` - preserved source companion file.
- `references/angular-aria.md` - preserved source companion file.
- `references/cli.md` - preserved source companion file.
- `references/component-harnesses.md` - preserved source companion file.
- `references/component-styling.md` - preserved source companion file.
- `references/components.md` - preserved source companion file.
- `references/creating-services.md` - preserved source companion file.
- `references/data-resolvers.md` - preserved source companion file.
- `references/define-routes.md` - preserved source companion file.
- `references/defining-providers.md` - preserved source companion file.
- `references/di-fundamentals.md` - preserved source companion file.
- `references/e2e-testing.md` - preserved source companion file.
- `references/effects.md` - preserved source companion file.
- `references/hierarchical-injectors.md` - preserved source companion file.
- `references/host-elements.md` - preserved source companion file.
- `references/injection-context.md` - preserved source companion file.
- `references/inputs.md` - preserved source companion file.
- `references/linked-signal.md` - preserved source companion file.
- `references/loading-strategies.md` - preserved source companion file.
- `references/mcp.md` - preserved source companion file.
- `references/migrations.md` - preserved source companion file.
- `references/navigate-to-routes.md` - preserved source companion file.
- `references/outputs.md` - preserved source companion file.
- `references/reactive-forms.md` - preserved source companion file.
- `references/rendering-strategies.md` - preserved source companion file.
- `references/resource.md` - preserved source companion file.
- `references/route-animations.md` - preserved source companion file.
- `references/route-guards.md` - preserved source companion file.
- `references/router-lifecycle.md` - preserved source companion file.
- `references/router-testing.md` - preserved source companion file.
- `references/show-routes-with-outlets.md` - preserved source companion file.
- `references/signal-forms.md` - preserved source companion file.
- `references/signals-overview.md` - preserved source companion file.
- `references/tailwind-css.md` - preserved source companion file.
- `references/template-driven-forms.md` - preserved source companion file.
- `references/testing-fundamentals.md` - preserved source companion file.
