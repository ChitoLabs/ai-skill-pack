---
name: rails-guides
description: "Trigger: rails-guides, Official Rails documentation. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/lucianghinda/superpowers-ruby/rails-guides"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/rails-guides"
---

## Activation Contract

Use this skill when the user request matches `rails-guides` or the preserved source description: Official Rails documentation. Use when asked about any Rails-specific topic including ActiveRecord, routing, controllers, views, mailers, jobs, Action Cable, Action Text, Active Storage, migrations, validations, callbacks, associations, caching, security, or internals.

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
- `references/action_cable_overview.md` - preserved source companion file.
- `references/action_controller_advanced_topics.md` - preserved source companion file.
- `references/action_controller_overview.md` - preserved source companion file.
- `references/action_mailbox_basics.md` - preserved source companion file.
- `references/action_mailer_basics.md` - preserved source companion file.
- `references/action_text_overview.md` - preserved source companion file.
- `references/action_view_helpers.md` - preserved source companion file.
- `references/action_view_overview.md` - preserved source companion file.
- `references/active_job_basics.md` - preserved source companion file.
- `references/active_model_basics.md` - preserved source companion file.
- `references/active_record_basics.md` - preserved source companion file.
- `references/active_record_callbacks.md` - preserved source companion file.
- `references/active_record_composite_primary_keys.md` - preserved source companion file.
- `references/active_record_encryption.md` - preserved source companion file.
- `references/active_record_migrations.md` - preserved source companion file.
- `references/active_record_multiple_databases.md` - preserved source companion file.
- `references/active_record_postgresql.md` - preserved source companion file.
- `references/active_record_querying.md` - preserved source companion file.
- `references/active_record_validations.md` - preserved source companion file.
- `references/active_storage_overview.md` - preserved source companion file.
- `references/active_support_core_extensions.md` - preserved source companion file.
- `references/active_support_instrumentation.md` - preserved source companion file.
- `references/api_app.md` - preserved source companion file.
- `references/asset_pipeline.md` - preserved source companion file.
- `references/association_basics.md` - preserved source companion file.
- `references/autoloading_and_reloading_constants.md` - preserved source companion file.
- `references/caching_with_rails.md` - preserved source companion file.
- `references/command_line.md` - preserved source companion file.
- `references/configuring.md` - preserved source companion file.
- `references/debugging_rails_applications.md` - preserved source companion file.
- `references/error_reporting.md` - preserved source companion file.
- `references/form_helpers.md` - preserved source companion file.
- `references/getting_started.md` - preserved source companion file.
- `references/i18n.md` - preserved source companion file.
- `references/initialization.md` - preserved source companion file.
- `references/layouts_and_rendering.md` - preserved source companion file.
- `references/rails_on_rack.md` - preserved source companion file.
- `references/routing.md` - preserved source companion file.
- `references/security.md` - preserved source companion file.
- `references/testing.md` - preserved source companion file.
- `references/threading_and_code_execution.md` - preserved source companion file.
- `references/tuning_performance_for_deployment.md` - preserved source companion file.
- `references/upgrading_ruby_on_rails.md` - preserved source companion file.
- `references/working_with_javascript_in_rails.md` - preserved source companion file.
