---
name: ai-video-generation
description: "Trigger: ai-video-generation, Generate AI videos with Google Veo, Seedance 2.0, HappyHorse, Wan, Grok and 40+ models via inference.sh CLI. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/inference-sh-skills/skills/ai-video-generation"
  github_url: "https://github.com/inference-sh/skills/tree/HEAD/tools/video/ai-video-generation"
---

## Activation Contract

Use this skill when the user request matches `ai-video-generation` or the preserved source description: Generate AI videos with Google Veo, Seedance 2.0, HappyHorse, Wan, Grok and 40+ models via inference.sh CLI. Models: Veo 3.1, Veo 3, Seedance 2.0, HappyHorse 1.0, Wan 2.5, Grok Imagine Video, OmniHuman, Fabric, HunyuanVideo. Capabilities: text-to-video, image-to-video, reference-to-video, video editing, lipsync, avatar animation, video upscaling, foley sound. Use for: social media videos, marketing content, explainer videos, product demos, AI avatars. Triggers: video generation, ai video, text to video, image to video, veo, animate image, video from image, ai animation, video generator, generate video, t2v, i2v, ai video maker, create video with ai, runway alternative, pika alternative, sora alternative, kling alternative, seedance, happyhorse

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

- `references/source-skill.md` — preserved upstream skill body and domain workflow.
