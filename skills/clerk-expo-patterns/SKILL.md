---
name: clerk-expo-patterns
description: "Trigger: clerk-expo-patterns, 'Expo / React Native patterns with Clerk — SecureStore token cache, OAuth. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: clerk
  version: 1.0.0
  skills_sh_url: "https://skills.sh/clerk/skills/clerk-expo-patterns"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/clerk-expo-patterns"
---

## Activation Contract

Use this skill when the user request matches `clerk-expo-patterns` or the preserved source description: 'Expo / React Native patterns with Clerk — SecureStore token cache, OAuth

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
- `references/evals/evals.json` - preserved source companion file.
- `references/oauth-deep-linking.md` - preserved source companion file.
- `references/protected-routes.md` - preserved source companion file.
- `references/push-notifications.md` - preserved source companion file.
- `references/templates/expo-basic-auth/app/(auth)/_layout.tsx` - preserved source companion file.
- `references/templates/expo-basic-auth/app/(home)/_layout.tsx` - preserved source companion file.
- `references/templates/expo-basic-auth/app/(home)/index.tsx` - preserved source companion file.
- `references/templates/expo-basic-auth/app/_layout.tsx` - preserved source companion file.
- `references/templates/expo-basic-auth/app.json` - preserved source companion file.
- `references/templates/expo-basic-auth/package.json` - preserved source companion file.
- `references/templates/expo-basic-auth/tsconfig.json` - preserved source companion file.
- `references/token-storage.md` - preserved source companion file.
