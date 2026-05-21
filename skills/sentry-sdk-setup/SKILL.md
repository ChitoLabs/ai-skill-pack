---
name: sentry-sdk-setup
description: "Trigger: sentry-sdk-setup, Set up Sentry in any language or framework. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/getsentry/sentry-for-ai/sentry-sdk-setup"
  github_url: "https://github.com/getsentry/sentry-for-claude/tree/HEAD/skills/sentry-sdk-setup"
---

## Activation Contract

Use this skill when the user request matches `sentry-sdk-setup` or the preserved source description: Set up Sentry in any language or framework. Detects the user's platform and loads the right SDK skill. Use when asked to add Sentry, install an SDK, or set up error monitoring in a project.

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
- `references/SKILL_TREE.md` - preserved Sentry companion-skill routing tree.
- `references/related-skills/sentry-sdk-setup/SKILL.md` - preserved upstream setup router companion.
- `references/related-skills/sentry-node-sdk/SKILL.md` - preserved Node.js/Bun/Deno Sentry SDK companion.
- `references/related-skills/sentry-node-sdk/references/ai-monitoring.md` - preserved Node SDK AI monitoring reference.
- `references/related-skills/sentry-node-sdk/references/crons.md` - preserved Node SDK crons reference.
- `references/related-skills/sentry-node-sdk/references/error-monitoring.md` - preserved Node SDK error monitoring reference.
- `references/related-skills/sentry-node-sdk/references/logging.md` - preserved Node SDK logging reference.
- `references/related-skills/sentry-node-sdk/references/metrics.md` - preserved Node SDK metrics reference.
- `references/related-skills/sentry-node-sdk/references/profiling.md` - preserved Node SDK profiling reference.
- `references/related-skills/sentry-node-sdk/references/sampling.md` - preserved Node SDK sampling reference.
- `references/related-skills/sentry-node-sdk/references/tracing.md` - preserved Node SDK tracing reference.
- `references/related-skills/sentry-react-sdk/SKILL.md` - preserved React Sentry SDK companion.
- `references/related-skills/sentry-react-sdk/references/error-monitoring.md` - preserved React SDK error monitoring reference.
- `references/related-skills/sentry-react-sdk/references/logging.md` - preserved React SDK logging reference.
- `references/related-skills/sentry-react-sdk/references/profiling.md` - preserved React SDK profiling reference.
- `references/related-skills/sentry-react-sdk/references/react-features.md` - preserved React SDK features reference.
- `references/related-skills/sentry-react-sdk/references/session-replay.md` - preserved React SDK session replay reference.
- `references/related-skills/sentry-react-sdk/references/tracing.md` - preserved React SDK tracing reference.
