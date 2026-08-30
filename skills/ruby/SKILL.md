---
name: ruby
description: "Trigger: write, review, or debug pure Ruby 3.x code. Apply idiomatic patterns, modern features, error handling, memoization, result objects, and performance guidance."
license: Apache-2.0
metadata:
  author: midudev
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/lucianghinda/superpowers-ruby/ruby"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/ruby"
---

## Activation Contract

Use this skill when the user request matches `ruby` or the preserved source description: Use when writing, reviewing, or debugging pure Ruby code - idiomatic patterns, modern 3.x+ features (pattern matching, Data.define, endless methods), error handling conventions (raise vs fail, result objects), memoization, and performance idioms. For Rails use rails-guides. For testing use minitest. For code style use sandi-metz-rules.

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
- `references/error_handling.md` - preserved source companion file.
- `references/modern_ruby.md` - preserved source companion file.
- `references/ood-philosophy.md` - preserved source companion file.
- `references/performance.md` - preserved source companion file.
