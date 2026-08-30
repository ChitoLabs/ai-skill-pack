---
name: social-media-image-sizes
description: "Trigger: social-media-image-sizes, Check and resize images for social media platforms. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Branding5
  version: 1.0.0
  skills_sh_url: "https://www.skills.sh/branding5/social-media-image-sizes/social-media-image-sizes"
  github_url: "https://github.com/branding5/social-media-image-sizes/tree/HEAD/social-media-image-sizes"
---

## Activation Contract

Use this skill when the user request matches `social-media-image-sizes` or the preserved source description: Check and resize images for social media platforms. Run scripts/check.js to validate any image against specs for Instagram, Facebook, X (Twitter), LinkedIn, TikTok, YouTube, Pinterest, Snapchat, and Threads - get a ranked match list with exact resize commands. Run scripts/resize.js to export a correctly-sized copy. Use when a user asks to validate image dimensions, resize an image for a platform, check if an image fits a spec, or prep assets for social media posting or ads.

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
- `scripts/check.js` - preserved upstream image validation CLI.
- `scripts/resize.js` - preserved upstream image resizing CLI.
- `scripts/platform-data.js` - preserved upstream platform specification data.
- `references/instagram.md` - preserved upstream Instagram specifications.
- `references/facebook.md` - preserved upstream Facebook specifications.
- `references/x-twitter.md` - preserved upstream X/Twitter specifications.
- `references/linkedin.md` - preserved upstream LinkedIn specifications.
- `references/tiktok.md` - preserved upstream TikTok specifications.
- `references/youtube.md` - preserved upstream YouTube specifications.
- `references/pinterest.md` - preserved upstream Pinterest specifications.
- `references/snapchat.md` - preserved upstream Snapchat specifications.
- `references/threads.md` - preserved upstream Threads specifications.
- `references/best-practices.md` - preserved upstream format, compression, safe-zone, and accessibility guidance.
