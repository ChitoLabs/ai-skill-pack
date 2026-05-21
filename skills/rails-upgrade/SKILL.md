---
name: rails-upgrade
description: "Analyze Rails applications and produce upgrade reports, breaking-change checks, deprecation guidance, multi-hop migration plans, and version-specific Rails 2.3 through 8.1 upgrade steps."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/ombulabs/claude-code_rails-upgrade-skill/rails-upgrade"
  github_url: "https://github.com/ombulabs/claude-code_rails-upgrade-skill/tree/HEAD/rails-upgrade"
---

## Activation Contract

Use this skill when the user request matches `rails-upgrade` or the preserved source description: Analyzes Rails applications and generates comprehensive upgrade reports with breaking changes, deprecations, and step-by-step migration guides for Rails 2.3 through 8.1. Use when upgrading Rails applications, planning multi-hop upgrades, or querying version-specific changes. Based on FastRuby.io methodology and "The Complete Guide to Upgrade Rails" ebook.

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
- `references/CHANGELOG.md` - preserved source companion file.
- `references/breaking-changes-by-version.md` - preserved source companion file.
- `references/deprecation-warnings.md` - preserved source companion file.
- `references/detection-scripts/patterns/rails-40-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-41-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-42-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-50-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-51-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-52-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-60-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-70-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-71-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-72-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-80-patterns.yml` - preserved source companion file.
- `references/detection-scripts/patterns/rails-81-patterns.yml` - preserved source companion file.
- `references/examples/multi-hop-upgrade.md` - preserved source companion file.
- `references/examples/simple-upgrade.md` - preserved source companion file.
- `references/gem-compatibility.md` - preserved source companion file.
- `references/multi-hop-strategy.md` - preserved source companion file.
- `references/staying-current.md` - preserved source companion file.
- `references/templates/app-update-preview-template.md` - preserved source companion file.
- `references/templates/upgrade-report-template.md` - preserved source companion file.
- `references/testing-checklist.md` - preserved source companion file.
- `references/version-guides/upgrade-3.2-to-4.0.md` - preserved source companion file.
- `references/version-guides/upgrade-4.0-to-4.1.md` - preserved source companion file.
- `references/version-guides/upgrade-4.1-to-4.2.md` - preserved source companion file.
- `references/version-guides/upgrade-4.2-to-5.0.md` - preserved source companion file.
- `references/version-guides/upgrade-5.0-to-5.1.md` - preserved source companion file.
- `references/version-guides/upgrade-5.1-to-5.2.md` - preserved source companion file.
- `references/version-guides/upgrade-5.2-to-6.0.md` - preserved source companion file.
- `references/version-guides/upgrade-6.0-to-6.1.md` - preserved source companion file.
- `references/version-guides/upgrade-6.1-to-7.0.md` - preserved source companion file.
- `references/version-guides/upgrade-7.0-to-7.1.md` - preserved source companion file.
- `references/version-guides/upgrade-7.1-to-7.2.md` - preserved source companion file.
- `references/version-guides/upgrade-7.2-to-8.0.md` - preserved source companion file.
- `references/version-guides/upgrade-8.0-to-8.1.md` - preserved source companion file.
- `references/workflows/app-update-preview-workflow.md` - preserved source companion file.
- `references/workflows/boot-smoke-test-workflow.md` - preserved source companion file.
- `references/workflows/ci-sync-workflow.md` - preserved source companion file.
- `references/workflows/direct-detection-workflow.md` - preserved source companion file.
- `references/workflows/gem-compatibility-workflow.md` - preserved source companion file.
- `references/workflows/test-suite-verification-workflow.md` - preserved source companion file.
- `references/workflows/upgrade-report-workflow.md` - preserved source companion file.
