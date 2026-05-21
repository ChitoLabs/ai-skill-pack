---
name: remotion-best-practices
description: "Trigger: remotion-best-practices, Best practices for Remotion - Video creation in React. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://www.skills.sh/remotion-dev/skills/remotion-best-practices"
  github_url: "https://github.com/remotion-dev/skills/tree/HEAD/skills/remotion"
---

## Activation Contract

Use this skill when the user request matches `remotion-best-practices` or the preserved source description: Best practices for Remotion - Video creation in React

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
- `references/rules/3d.md` - preserved source companion file.
- `references/rules/assets/charts-bar-chart.tsx` - preserved source companion file.
- `references/rules/assets/text-animations-typewriter.tsx` - preserved source companion file.
- `references/rules/assets/text-animations-word-highlight.tsx` - preserved source companion file.
- `references/rules/audio-visualization.md` - preserved source companion file.
- `references/rules/audio.md` - preserved source companion file.
- `references/rules/calculate-metadata.md` - preserved source companion file.
- `references/rules/compositions.md` - preserved source companion file.
- `references/rules/display-captions.md` - preserved source companion file.
- `references/rules/ffmpeg.md` - preserved source companion file.
- `references/rules/get-audio-duration.md` - preserved source companion file.
- `references/rules/get-video-dimensions.md` - preserved source companion file.
- `references/rules/get-video-duration.md` - preserved source companion file.
- `references/rules/gifs.md` - preserved source companion file.
- `references/rules/google-fonts.md` - preserved source companion file.
- `references/rules/html-in-canvas.md` - preserved source companion file.
- `references/rules/images.md` - preserved source companion file.
- `references/rules/import-srt-captions.md` - preserved source companion file.
- `references/rules/light-leaks.md` - preserved source companion file.
- `references/rules/local-fonts.md` - preserved source companion file.
- `references/rules/lottie.md` - preserved source companion file.
- `references/rules/maplibre.md` - preserved source companion file.
- `references/rules/measuring-dom-nodes.md` - preserved source companion file.
- `references/rules/measuring-text.md` - preserved source companion file.
- `references/rules/parameters.md` - preserved source companion file.
- `references/rules/sequencing.md` - preserved source companion file.
- `references/rules/sfx.md` - preserved source companion file.
- `references/rules/silence-detection.md` - preserved source companion file.
- `references/rules/subtitles.md` - preserved source companion file.
- `references/rules/tailwind.md` - preserved source companion file.
- `references/rules/text-animations.md` - preserved source companion file.
- `references/rules/timing.md` - preserved source companion file.
- `references/rules/transcribe-captions.md` - preserved source companion file.
- `references/rules/transitions.md` - preserved source companion file.
- `references/rules/transparent-videos.md` - preserved source companion file.
- `references/rules/trimming.md` - preserved source companion file.
- `references/rules/videos.md` - preserved source companion file.
- `references/rules/voiceover.md` - preserved source companion file.
