---
name: nestjs-best-practices
description: "Trigger: nestjs-best-practices, NestJS best practices and architecture patterns for building production-ready applications. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Kadajett
  version: 1.1.0
  skills_sh_url: "https://skills.sh/kadajett/agent-nestjs-skills/nestjs-best-practices"
  github_url: "https://github.com/kadajett/agent-nestjs-skills/tree/HEAD/"
---

## Activation Contract

Use this skill when the user request matches `nestjs-best-practices` or the preserved source description: NestJS best practices and architecture patterns for building production-ready applications. This skill should be used when writing, reviewing, or refactoring NestJS code to ensure proper patterns for modules, dependency injection, security, and performance.

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
- `references/.github/workflows/branch-protection.yml` - preserved source companion file.
- `references/.github/workflows/deploy.yml` - preserved source companion file.
- `references/.gitignore` - preserved source companion file.
- `references/AGENTS.md` - preserved source companion file.
- `references/README.md` - preserved source companion file.
- `references/metadata.json` - preserved source companion file.
- `references/rules/_sections.md` - preserved source companion file.
- `references/rules/_template.md` - preserved source companion file.
- `references/rules/api-use-dto-serialization.md` - preserved source companion file.
- `references/rules/api-use-interceptors.md` - preserved source companion file.
- `references/rules/api-use-pipes.md` - preserved source companion file.
- `references/rules/api-versioning.md` - preserved source companion file.
- `references/rules/arch-avoid-circular-deps.md` - preserved source companion file.
- `references/rules/arch-feature-modules.md` - preserved source companion file.
- `references/rules/arch-module-sharing.md` - preserved source companion file.
- `references/rules/arch-single-responsibility.md` - preserved source companion file.
- `references/rules/arch-use-events.md` - preserved source companion file.
- `references/rules/arch-use-repository-pattern.md` - preserved source companion file.
- `references/rules/db-avoid-n-plus-one.md` - preserved source companion file.
- `references/rules/db-use-migrations.md` - preserved source companion file.
- `references/rules/db-use-transactions.md` - preserved source companion file.
- `references/rules/devops-graceful-shutdown.md` - preserved source companion file.
- `references/rules/devops-use-config-module.md` - preserved source companion file.
- `references/rules/devops-use-logging.md` - preserved source companion file.
- `references/rules/di-avoid-service-locator.md` - preserved source companion file.
- `references/rules/di-interface-segregation.md` - preserved source companion file.
- `references/rules/di-liskov-substitution.md` - preserved source companion file.
- `references/rules/di-prefer-constructor-injection.md` - preserved source companion file.
- `references/rules/di-scope-awareness.md` - preserved source companion file.
- `references/rules/di-use-interfaces-tokens.md` - preserved source companion file.
- `references/rules/error-handle-async-errors.md` - preserved source companion file.
- `references/rules/error-throw-http-exceptions.md` - preserved source companion file.
- `references/rules/error-use-exception-filters.md` - preserved source companion file.
- `references/rules/micro-use-health-checks.md` - preserved source companion file.
- `references/rules/micro-use-patterns.md` - preserved source companion file.
- `references/rules/micro-use-queues.md` - preserved source companion file.
- `references/rules/perf-async-hooks.md` - preserved source companion file.
- `references/rules/perf-lazy-loading.md` - preserved source companion file.
- `references/rules/perf-optimize-database.md` - preserved source companion file.
- `references/rules/perf-use-caching.md` - preserved source companion file.
- `references/rules/security-auth-jwt.md` - preserved source companion file.
- `references/rules/security-rate-limiting.md` - preserved source companion file.
- `references/rules/security-sanitize-output.md` - preserved source companion file.
- `references/rules/security-use-guards.md` - preserved source companion file.
- `references/rules/security-validate-all-input.md` - preserved source companion file.
- `references/rules/test-e2e-supertest.md` - preserved source companion file.
- `references/rules/test-mock-external-services.md` - preserved source companion file.
- `references/rules/test-use-testing-module.md` - preserved source companion file.
- `scripts/build-agents.ts` - preserved source companion file.
- `scripts/build.sh` - preserved source companion file.
- `scripts/package-lock.json` - preserved source companion file.
- `scripts/package.json` - preserved source companion file.
