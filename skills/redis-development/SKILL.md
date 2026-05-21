---
name: redis-development
description: "Trigger: redis-development, Redis performance optimization and best practices. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: redis
  version: 1.0.0
  skills_sh_url: "https://skills.sh/redis/agent-skills/redis-development"
  github_url: "https://github.com/redis/agent-skills/tree/HEAD/skills/redis-development"
---

## Activation Contract

Use this skill when the user request matches `redis-development` or the preserved source description: Redis performance optimization and best practices. Use this skill when working with Redis data structures, Redis Query Engine (RQE), vector search with RedisVL, semantic caching with LangCache, or optimizing Redis performance.

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
- `assets/logo.png` - preserved source companion file.
- `references/.cursor-plugin/plugin.json` - preserved source companion file.
- `references/AGENTS.md` - preserved source companion file.
- `references/README.md` - preserved source companion file.
- `references/metadata.json` - preserved source companion file.
- `references/rules/_contributing.md` - preserved source companion file.
- `references/rules/_sections.md` - preserved source companion file.
- `references/rules/_template.md` - preserved source companion file.
- `references/rules/cluster-hash-tags.md` - preserved source companion file.
- `references/rules/cluster-read-replicas.md` - preserved source companion file.
- `references/rules/conn-blocking.md` - preserved source companion file.
- `references/rules/conn-client-cache.md` - preserved source companion file.
- `references/rules/conn-pipelining.md` - preserved source companion file.
- `references/rules/conn-pooling.md` - preserved source companion file.
- `references/rules/conn-timeouts.md` - preserved source companion file.
- `references/rules/data-choose-structure.md` - preserved source companion file.
- `references/rules/data-hash-field-expiry.md` - preserved source companion file.
- `references/rules/data-incr.md` - preserved source companion file.
- `references/rules/data-key-naming.md` - preserved source companion file.
- `references/rules/data-transactions.md` - preserved source companion file.
- `references/rules/json-partial-updates.md` - preserved source companion file.
- `references/rules/json-vs-hash.md` - preserved source companion file.
- `references/rules/observe-commands.md` - preserved source companion file.
- `references/rules/observe-metrics.md` - preserved source companion file.
- `references/rules/ram-limits.md` - preserved source companion file.
- `references/rules/ram-ttl.md` - preserved source companion file.
- `references/rules/rqe-dialect.md` - preserved source companion file.
- `references/rules/rqe-field-types.md` - preserved source companion file.
- `references/rules/rqe-index-creation.md` - preserved source companion file.
- `references/rules/rqe-index-management.md` - preserved source companion file.
- `references/rules/rqe-query-optimization.md` - preserved source companion file.
- `references/rules/rqe-skip-initial-scan.md` - preserved source companion file.
- `references/rules/security-acls.md` - preserved source companion file.
- `references/rules/security-auth.md` - preserved source companion file.
- `references/rules/security-network.md` - preserved source companion file.
- `references/rules/semantic-cache-best-practices.md` - preserved source companion file.
- `references/rules/semantic-cache-langcache-usage.md` - preserved source companion file.
- `references/rules/stream-choosing-pattern.md` - preserved source companion file.
- `references/rules/vector-algorithm-choice.md` - preserved source companion file.
- `references/rules/vector-hybrid-search.md` - preserved source companion file.
- `references/rules/vector-index-creation.md` - preserved source companion file.
- `references/rules/vector-rag-pattern.md` - preserved source companion file.
