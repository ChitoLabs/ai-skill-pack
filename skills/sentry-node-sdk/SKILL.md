---
name: sentry-node-sdk
description: "Trigger: add Sentry to Node.js, Bun, or Deno, or configure server-side monitoring. Set up the selected Sentry JavaScript runtime SDK and approved features."
license: Apache-2.0
metadata:
  author: getsentry
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/getsentry/sentry-for-ai/sentry-node-sdk"
  github_url: "https://github.com/getsentry/sentry-for-claude/tree/HEAD/skills/sentry-node-sdk"
---

## Activation Contract

Use this skill when the user request matches `sentry-node-sdk` or the preserved source description: Full Sentry SDK setup for Node.js, Bun, and Deno. Use when asked to "add Sentry to Node.js", "add Sentry to Bun", "add Sentry to Deno", "install @sentry/node", "@sentry/bun", or "@sentry/deno", or configure error monitoring, tracing, logging, profiling, metrics, crons, or AI monitoring for server-side JavaScript/TypeScript runtimes.

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
- `references/SKILL_TREE.md` - preserved Sentry skill routing index.
- `references/ai-monitoring.md` - preserved source companion file.
- `references/crons.md` - preserved source companion file.
- `references/error-monitoring.md` - preserved source companion file.
- `references/logging.md` - preserved source companion file.
- `references/metrics.md` - preserved source companion file.
- `references/profiling.md` - preserved source companion file.
- `references/tracing.md` - preserved source companion file.
- `references/sampling.md` - preserved source companion file.
- `references/related-skills/sentry-sdk-setup/SKILL.md` - preserved related Sentry SDK setup skill.
- `references/related-skills/sentry-react-sdk/SKILL.md` - preserved related Sentry React SDK skill.
- `references/related-skills/sentry-react-sdk/references/error-monitoring.md` - preserved related Sentry React SDK companion file.
- `references/related-skills/sentry-react-sdk/references/logging.md` - preserved related Sentry React SDK companion file.
- `references/related-skills/sentry-react-sdk/references/profiling.md` - preserved related Sentry React SDK companion file.
- `references/related-skills/sentry-react-sdk/references/react-features.md` - preserved related Sentry React SDK companion file.
- `references/related-skills/sentry-react-sdk/references/session-replay.md` - preserved related Sentry React SDK companion file.
- `references/related-skills/sentry-react-sdk/references/tracing.md` - preserved related Sentry React SDK companion file.
