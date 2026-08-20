---
name: ruby-on-rails-best-practices
description: "Trigger: ruby-on-rails-best-practices, Ruby on Rails architecture and coding patterns from Basecamp. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: sergiodxa
  version: 0.1
  skills_sh_url: "https://skills.sh/sergiodxa/agent-skills/ruby-on-rails-best-practices"
  github_url: "https://github.com/sergiodxa/agent-skills/tree/HEAD/skills/ruby-on-rails-best-practices"
---

## Activation Contract

Use this skill when the user request matches `ruby-on-rails-best-practices` or the preserved source description: Ruby on Rails architecture and coding patterns from Basecamp. Use when writing, reviewing, or refactoring Rails code to follow proven conventions for models, controllers, jobs, and concerns. Triggers on tasks involving Rails models, concerns, controllers, background jobs, or Turbo/Hotwire.

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
- `references/rules/association-extensions.md` - preserved source companion file.
- `references/rules/callbacks-patterns.md` - preserved source companion file.
- `references/rules/code-style.md` - preserved source companion file.
- `references/rules/concern-naming.md` - preserved source companion file.
- `references/rules/current-attributes.md` - preserved source companion file.
- `references/rules/current-in-other-contexts.md` - preserved source companion file.
- `references/rules/fixtures-testing.md` - preserved source companion file.
- `references/rules/model-scoped-concerns.md` - preserved source companion file.
- `references/rules/nested-service-objects.md` - preserved source companion file.
- `references/rules/paired-async-methods.md` - preserved source companion file.
- `references/rules/resource-controllers.md` - preserved source companion file.
- `references/rules/scoping-concerns.md` - preserved source companion file.
- `references/rules/template-method-concerns.md` - preserved source companion file.
- `references/rules/thin-controllers.md` - preserved source companion file.
- `references/rules/thin-jobs.md` - preserved source companion file.
- `references/rules/turbo-broadcasts.md` - preserved source companion file.
