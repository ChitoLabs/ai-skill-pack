---
name: n8n-expression-syntax
description: "Trigger: n8n-expression-syntax, Validate n8n expression syntax and fix common errors. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: czlonkowski
  version: 0.1
  skills_sh_url: "https://www.skills.sh/czlonkowski/n8n-skills/n8n-expression-syntax"
  github_url: "https://github.com/czlonkowski/n8n-skills/tree/HEAD/skills/n8n-expression-syntax"
---

## Activation Contract

Use this skill when the user request matches `n8n-expression-syntax` or the preserved source description: Validate n8n expression syntax and fix common errors. Use when writing n8n expressions, using {{}} syntax, accessing $json/$node variables, troubleshooting expression errors, mapping data between nodes, or referencing webhook data in workflows. Use this skill whenever configuring node fields that reference data from previous nodes \u2014 expressions are how n8n passes data between nodes, and getting the syntax wrong is the most common source of workflow errors.

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
- `references/COMMON_MISTAKES.md` - preserved source companion file.
- `references/EXAMPLES.md` - preserved source companion file.
- `references/README.md` - preserved source companion file.
