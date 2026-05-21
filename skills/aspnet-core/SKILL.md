---
name: aspnet-core
description: "Trigger: aspnet-core, Build, review, refactor, or architect ASP.NET Core web applications using current official guidance for .NET web development. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/openai/skills/aspnet-core"
  github_url: "https://github.com/openai/skills/tree/HEAD/skills/.curated/aspnet-core"
---

## Activation Contract

Use this skill when the user request matches `aspnet-core` or the preserved source description: Build, review, refactor, or architect ASP.NET Core web applications using current official guidance for .NET web development. Use when working on Blazor Web Apps, Razor Pages, MVC, Minimal APIs, controller-based Web APIs, SignalR, gRPC, middleware, dependency injection, configuration, authentication, authorization, testing, performance, deployment, or ASP.NET Core upgrades.

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
- `assets/dotnet-logo.png` - preserved source companion file.
- `references/LICENSE.txt` - preserved source companion file.
- `references/_sections.md` - preserved source companion file.
- `references/agents/openai.yaml` - preserved source companion file.
- `references/apis-minimal-and-controllers.md` - preserved source companion file.
- `references/data-state-and-services.md` - preserved source companion file.
- `references/program-and-pipeline.md` - preserved source companion file.
- `references/realtime-grpc-and-background-work.md` - preserved source companion file.
- `references/security-and-identity.md` - preserved source companion file.
- `references/source-map.md` - preserved source companion file.
- `references/stack-selection.md` - preserved source companion file.
- `references/testing-performance-and-operations.md` - preserved source companion file.
- `references/ui-blazor.md` - preserved source companion file.
- `references/ui-mvc.md` - preserved source companion file.
- `references/ui-razor-pages.md` - preserved source companion file.
- `references/versioning-and-upgrades.md` - preserved source companion file.
