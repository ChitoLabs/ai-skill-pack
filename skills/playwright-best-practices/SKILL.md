---
name: playwright-best-practices
description: "Trigger: write, debug, review, or maintain Playwright tests. Apply focused practices for the selected E2E, component, API, visual, accessibility, or CI test scope."
license: MIT
metadata:
  author: currents.dev
  version: 1.1
  skills_sh_url: "https://www.skills.sh/currents-dev/playwright-best-practices-skill/playwright-best-practices"
  github_url: "https://github.com/currents-dev/playwright-best-practices-skill/tree/HEAD/"
---

## Activation Contract

Use this skill when the user request matches `playwright-best-practices` or the preserved source description: Use when writing Playwright tests, fixing flaky tests, debugging failures, implementing Page Object Model, configuring CI/CD, optimizing performance, mocking APIs, handling authentication or OAuth, testing accessibility (axe-core), file uploads/downloads, date/time mocking, WebSockets, geolocation, permissions, multi-tab/popup flows, mobile/responsive layouts, touch gestures, GraphQL, error handling, offline mode, multi-user collaboration, third-party services (payments, email verification), console error monitoring, global setup/teardown, test annotations (skip, fixme, slow), test tags (@smoke, @fast, @critical, filtering with --grep), project dependencies, security testing (XSS, CSRF, auth), performance budgets (Web Vitals, Lighthouse), iframes, component testing, canvas/WebGL, service workers/PWA, test coverage, i18n/localization, Electron apps, or browser extension testing. Covers E2E, component, API, visual, accessibility, security, Electron, and extension testing.

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Treat CI cache paths, container volume paths, and home-directory paths in preserved references as framework documentation examples; adapt them to the user's runner/container layout before execution.

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
- `references/.agnix.toml` - preserved source companion file.
- `references/.github/workflows/validate-skill.yml` - preserved source companion file.
- `references/LICENSE.md` - preserved source companion file.
- `references/README.md` - preserved source companion file.
- `references/advanced/authentication-flows.md` - preserved source companion file.
- `references/advanced/authentication.md` - preserved source companion file.
- `references/advanced/clock-mocking.md` - preserved source companion file.
- `references/advanced/mobile-testing.md` - preserved source companion file.
- `references/advanced/multi-context.md` - preserved source companion file.
- `references/advanced/multi-user.md` - preserved source companion file.
- `references/advanced/network-advanced.md` - preserved source companion file.
- `references/advanced/third-party.md` - preserved source companion file.
- `references/architecture/pom-vs-fixtures.md` - preserved source companion file.
- `references/architecture/test-architecture.md` - preserved source companion file.
- `references/architecture/when-to-mock.md` - preserved source companion file.
- `references/browser-apis/browser-apis.md` - preserved source companion file.
- `references/browser-apis/iframes.md` - preserved source companion file.
- `references/browser-apis/service-workers.md` - preserved source companion file.
- `references/browser-apis/websockets.md` - preserved source companion file.
- `references/core/annotations.md` - preserved source companion file.
- `references/core/assertions-waiting.md` - preserved source companion file.
- `references/core/configuration.md` - preserved source companion file.
- `references/core/fixtures-hooks.md` - preserved source companion file.
- `references/core/global-setup.md` - preserved source companion file.
- `references/core/locators.md` - preserved source companion file.
- `references/core/page-object-model.md` - preserved source companion file.
- `references/core/projects-dependencies.md` - preserved source companion file.
- `references/core/test-data.md` - preserved source companion file.
- `references/core/test-suite-structure.md` - preserved source companion file.
- `references/core/test-tags.md` - preserved source companion file.
- `references/debugging/console-errors.md` - preserved source companion file.
- `references/debugging/debugging.md` - preserved source companion file.
- `references/debugging/error-testing.md` - preserved source companion file.
- `references/debugging/flaky-tests.md` - preserved source companion file.
- `references/frameworks/angular.md` - preserved source companion file.
- `references/frameworks/nextjs.md` - preserved source companion file.
- `references/frameworks/react.md` - preserved source companion file.
- `references/frameworks/vue.md` - preserved source companion file.
- `references/infrastructure-ci-cd/ci-cd.md` - preserved source companion file.
- `references/infrastructure-ci-cd/docker.md` - preserved source companion file.
- `references/infrastructure-ci-cd/github-actions.md` - preserved source companion file.
- `references/infrastructure-ci-cd/gitlab.md` - preserved source companion file.
- `references/infrastructure-ci-cd/other-providers.md` - preserved source companion file.
- `references/infrastructure-ci-cd/parallel-sharding.md` - preserved source companion file.
- `references/infrastructure-ci-cd/performance.md` - preserved source companion file.
- `references/infrastructure-ci-cd/reporting.md` - preserved source companion file.
- `references/infrastructure-ci-cd/test-coverage.md` - preserved source companion file.
- `references/testing-patterns/accessibility.md` - preserved source companion file.
- `references/testing-patterns/api-testing.md` - preserved source companion file.
- `references/testing-patterns/browser-extensions.md` - preserved source companion file.
- `references/testing-patterns/canvas-webgl.md` - preserved source companion file.
- `references/testing-patterns/component-testing.md` - preserved source companion file.
- `references/testing-patterns/drag-drop.md` - preserved source companion file.
- `references/testing-patterns/electron.md` - preserved source companion file.
- `references/testing-patterns/file-operations.md` - preserved source companion file.
- `references/testing-patterns/file-upload-download.md` - preserved source companion file.
- `references/testing-patterns/forms-validation.md` - preserved source companion file.
- `references/testing-patterns/graphql-testing.md` - preserved source companion file.
- `references/testing-patterns/i18n.md` - preserved source companion file.
- `references/testing-patterns/performance-testing.md` - preserved source companion file.
- `references/testing-patterns/security-testing.md` - preserved source companion file.
- `references/testing-patterns/visual-regression.md` - preserved source companion file.
