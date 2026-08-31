---
name: agents-sdk
description: "Trigger: agents-sdk, Build AI agents on Cloudflare Workers using the Agents SDK. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: cloudflare
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/cloudflare/skills/agents-sdk"
  github_url: "https://github.com/cloudflare/skills/tree/HEAD/skills/agents-sdk"
---

## Activation Contract

Use this skill when the user request matches `agents-sdk` or the preserved source description: Build AI agents on Cloudflare Workers using the Agents SDK. Load when creating stateful agents, durable workflows, real-time WebSocket apps, scheduled tasks, MCP servers, chat applications, voice agents, or browser automation. Covers Agent class, state management, callable RPC, Workflows, durable execution, queues, retries, observability, and React hooks. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.

## Decision Gates

| Condition | Action |
|---|---|
| A named companion skill is not installed | Say so, then continue with this skill's own references or the closest manual fallback. |
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

- `references/source-skill.md` — preserved upstream skill body and domain workflow.
- `references/browse-the-web.md` — preserved source companion file.
- `references/callable.md` — preserved source companion file.
- `references/client-sdk.md` — preserved source companion file.
- `references/codemode.md` — preserved source companion file.
- `references/configuration.md` — preserved source companion file.
- `references/durable-execution.md` — preserved source companion file.
- `references/email.md` — preserved source companion file.
- `references/human-in-the-loop.md` — preserved source companion file.
- `references/mcp.md` — preserved source companion file.
- `references/observability.md` — preserved source companion file.
- `references/queue-retries.md` — preserved source companion file.
- `references/routing.md` — preserved source companion file.
- `references/server-driven-messages.md` — preserved source companion file.
- `references/state-scheduling.md` — preserved source companion file.
- `references/streaming-chat.md` — preserved source companion file.
- `references/think.md` — preserved source companion file.
- `references/voice.md` — preserved source companion file.
- `references/webhooks-push.md` — preserved source companion file.
- `references/workflows.md` — preserved source companion file.
