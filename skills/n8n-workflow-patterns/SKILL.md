---
name: n8n-workflow-patterns
description: "Trigger: n8n-workflow-patterns, Proven workflow architectural patterns from real n8n workflows. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://www.skills.sh/czlonkowski/n8n-skills/n8n-workflow-patterns"
  github_url: "https://github.com/czlonkowski/n8n-skills/tree/HEAD/skills/n8n-workflow-patterns"
---

## Activation Contract

Use this skill when the user request matches `n8n-workflow-patterns` or the preserved source description: Proven workflow architectural patterns from real n8n workflows. Use when building new workflows, designing workflow structure, choosing workflow patterns, planning workflow architecture, or asking about webhook processing, HTTP API integration, database operations, AI agent workflows, batch processing, or scheduled tasks. Always consult this skill when the user asks to create, build, or design an n8n workflow, automate a process, or connect services — even if they don't explicitly mention 'patterns'. Covers webhook, API, database, AI, batch processing, and scheduled automation architectures.

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
- `references/README.md` - preserved source companion file.
- `references/ai_agent_workflow.md` - preserved source companion file.
- `references/database_operations.md` - preserved source companion file.
- `references/http_api_integration.md` - preserved source companion file.
- `references/scheduled_tasks.md` - preserved source companion file.
- `references/webhook_processing.md` - preserved source companion file.
