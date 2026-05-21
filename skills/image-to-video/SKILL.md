---
name: image-to-video
description: "Trigger: image-to-video, Animate any still image on RunComfy \u2014 this skill is a smart router that matches the user's intent to the right i2v model in the RunComfy catalog. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://www.skills.sh/agentspace-so/runcomfy-agent-skills/image-to-video"
  github_url: "https://github.com/agentspace-so/runcomfy-agent-skills/tree/HEAD/image-to-video"
---

## Activation Contract

Use this skill when the user request matches `image-to-video` or the preserved source description: Animate any still image on RunComfy \u2014 this skill is a smart router that matches the user's intent to the right i2v model in the RunComfy catalog. Picks HappyHorse 1.0 I2V (Arena #1, native audio, identity preservation) for general animations, Wan 2.7 with `audio_url` for custom-voiceover lip-sync, or Seedance 2.0 Pro for multi-modal animation from image + reference video + reference audio. Bundles each model's documented prompting patterns so the caller gets sharper output without burning iterations on the wrong model. Calls `runcomfy run <vendor>/<model>/image-to-video` (or endpoint variant) through the local RunComfy CLI. Triggers on \"image to video\", \"image-to-video\", \"i2v\", \"animate image\", \"make this move\", or any explicit ask to turn a still into video.

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
