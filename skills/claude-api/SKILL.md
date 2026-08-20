---
name: claude-api
description: "Trigger: claude-api, Build, debug, and optimize Claude API / Anthropic SDK apps. Preserve source workflow with portable agent instructions."
license: Complete terms in LICENSE.txt
metadata:
  author: anthropics
  version: 0.1
  skills_sh_url: "https://skills.sh/anthropics/skills/claude-api"
  github_url: "https://github.com/anthropics/skills/tree/HEAD/skills/claude-api"
---

## Activation Contract

Use this skill when the user request matches `claude-api` or the preserved source description: Build, debug, and optimize Claude API / Anthropic SDK apps. Apps built with this skill should include prompt caching. Also handles migrating existing Claude API code between Claude model versions (4.5 \u2192 4.6, 4.6 \u2192 4.7, retired-model replacements). TRIGGER when: code imports `anthropic`/`@anthropic-ai/sdk`; user asks for the Claude API, Anthropic SDK, or Managed Agents; user adds/modifies/tunes a Claude feature (caching, thinking, compaction, tool use, batch, files, citations, memory) or model (Opus/Sonnet/Haiku) in a file; questions about prompt caching / cache hit rate in an Anthropic SDK project. SKIP: file imports `openai`/other-provider SDK, filename like `*-openai.py`/`*-generic.py`, provider-neutral code, general programming/ML.

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
- `references/LICENSE.txt` - preserved source companion file.
- `references/csharp/claude-api.md` - preserved source companion file.
- `references/curl/examples.md` - preserved source companion file.
- `references/curl/managed-agents.md` - preserved source companion file.
- `references/go/claude-api.md` - preserved source companion file.
- `references/go/managed-agents/README.md` - preserved source companion file.
- `references/java/claude-api.md` - preserved source companion file.
- `references/java/managed-agents/README.md` - preserved source companion file.
- `references/php/claude-api.md` - preserved source companion file.
- `references/php/managed-agents/README.md` - preserved source companion file.
- `references/python/claude-api/README.md` - preserved source companion file.
- `references/python/claude-api/batches.md` - preserved source companion file.
- `references/python/claude-api/files-api.md` - preserved source companion file.
- `references/python/claude-api/streaming.md` - preserved source companion file.
- `references/python/claude-api/tool-use.md` - preserved source companion file.
- `references/python/managed-agents/README.md` - preserved source companion file.
- `references/ruby/claude-api.md` - preserved source companion file.
- `references/ruby/managed-agents/README.md` - preserved source companion file.
- `references/shared/agent-design.md` - preserved source companion file.
- `references/shared/error-codes.md` - preserved source companion file.
- `references/shared/live-sources.md` - preserved source companion file.
- `references/shared/managed-agents-api-reference.md` - preserved source companion file.
- `references/shared/managed-agents-client-patterns.md` - preserved source companion file.
- `references/shared/managed-agents-core.md` - preserved source companion file.
- `references/shared/managed-agents-environments.md` - preserved source companion file.
- `references/shared/managed-agents-events.md` - preserved source companion file.
- `references/shared/managed-agents-memory.md` - preserved source companion file.
- `references/shared/managed-agents-multiagent.md` - preserved source companion file.
- `references/shared/managed-agents-onboarding.md` - preserved source companion file.
- `references/shared/managed-agents-outcomes.md` - preserved source companion file.
- `references/shared/managed-agents-overview.md` - preserved source companion file.
- `references/shared/managed-agents-tools.md` - preserved source companion file.
- `references/shared/managed-agents-webhooks.md` - preserved source companion file.
- `references/shared/model-migration.md` - preserved source companion file.
- `references/shared/models.md` - preserved source companion file.
- `references/shared/prompt-caching.md` - preserved source companion file.
- `references/shared/tool-use-concepts.md` - preserved source companion file.
- `references/typescript/claude-api/README.md` - preserved source companion file.
- `references/typescript/claude-api/batches.md` - preserved source companion file.
- `references/typescript/claude-api/files-api.md` - preserved source companion file.
- `references/typescript/claude-api/streaming.md` - preserved source companion file.
- `references/typescript/claude-api/tool-use.md` - preserved source companion file.
- `references/typescript/managed-agents/README.md` - preserved source companion file.
