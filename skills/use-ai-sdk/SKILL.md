---
name: use-ai-sdk
description: "Trigger: use-ai-sdk, Answer questions about the AI SDK and help build AI-powered features. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: vercel
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/vercel/ai/use-ai-sdk"
  github_url: "https://github.com/vercel/ai/tree/HEAD/skills/use-ai-sdk"
---

## Activation Contract

Use this skill when the user request matches `use-ai-sdk` or the preserved source description: Answer questions about the AI SDK and help build AI-powered features. Use when developers: (1) Ask about AI SDK functions like generateText, streamText, ToolLoopAgent, embed, or tools, (2) Want to build AI agents, chatbots, RAG systems, or text generation features, (3) Have questions about AI providers (OpenAI, Anthropic, Google, etc.), streaming, tool calling, structured output, or embeddings, (4) Use React hooks like useChat or useCompletion. Triggers on: \"AI SDK\", \"Vercel AI SDK\", \"generateText\", \"streamText\", \"add AI to my app\", \"build an agent\", \"tool calling\", \"structured output\", \"useChat\".

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
- `references/ai-gateway.md` - preserved source companion file.
- `references/common-errors.md` - preserved source companion file.
- `references/devtools.md` - preserved source companion file.
- `references/type-safe-agents.md` - preserved source companion file.
