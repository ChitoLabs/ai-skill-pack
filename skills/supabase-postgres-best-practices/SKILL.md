---
name: supabase-postgres-best-practices
description: "Trigger: supabase-postgres-best-practices, Postgres performance optimization and best practices from Supabase. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: supabase
  version: 1.1.1
  skills_sh_url: "https://skills.sh/supabase/agent-skills/supabase-postgres-best-practices"
  github_url: "https://github.com/supabase/agent-skills/tree/HEAD/skills/supabase-postgres-best-practices"
---

## Activation Contract

Use this skill when the user request matches `supabase-postgres-best-practices` or the preserved source description: Postgres performance optimization and best practices from Supabase. Use this skill when writing, reviewing, or optimizing Postgres queries, schema designs, or database configurations.

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
- `references/_contributing.md` - preserved source companion file.
- `references/_sections.md` - preserved source companion file.
- `references/_template.md` - preserved source companion file.
- `references/advanced-full-text-search.md` - preserved source companion file.
- `references/advanced-jsonb-indexing.md` - preserved source companion file.
- `references/conn-idle-timeout.md` - preserved source companion file.
- `references/conn-limits.md` - preserved source companion file.
- `references/conn-pooling.md` - preserved source companion file.
- `references/conn-prepared-statements.md` - preserved source companion file.
- `references/data-batch-inserts.md` - preserved source companion file.
- `references/data-n-plus-one.md` - preserved source companion file.
- `references/data-pagination.md` - preserved source companion file.
- `references/data-upsert.md` - preserved source companion file.
- `references/lock-advisory.md` - preserved source companion file.
- `references/lock-deadlock-prevention.md` - preserved source companion file.
- `references/lock-short-transactions.md` - preserved source companion file.
- `references/lock-skip-locked.md` - preserved source companion file.
- `references/monitor-explain-analyze.md` - preserved source companion file.
- `references/monitor-pg-stat-statements.md` - preserved source companion file.
- `references/monitor-vacuum-analyze.md` - preserved source companion file.
- `references/query-composite-indexes.md` - preserved source companion file.
- `references/query-covering-indexes.md` - preserved source companion file.
- `references/query-index-types.md` - preserved source companion file.
- `references/query-missing-indexes.md` - preserved source companion file.
- `references/query-partial-indexes.md` - preserved source companion file.
- `references/schema-constraints.md` - preserved source companion file.
- `references/schema-data-types.md` - preserved source companion file.
- `references/schema-foreign-key-indexes.md` - preserved source companion file.
- `references/schema-lowercase-identifiers.md` - preserved source companion file.
- `references/schema-partitioning.md` - preserved source companion file.
- `references/schema-primary-keys.md` - preserved source companion file.
- `references/security-privileges.md` - preserved source companion file.
- `references/security-rls-basics.md` - preserved source companion file.
- `references/security-rls-performance.md` - preserved source companion file.
