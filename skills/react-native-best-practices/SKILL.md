---
name: react-native-best-practices
description: "Trigger: react-native-best-practices, Provides React Native performance optimization guidelines for FPS, TTI, bundle size, memory leaks, re-renders, and animations. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Callstack
  version: 0.1
  skills_sh_url: "https://www.skills.sh/callstackincubator/agent-skills/react-native-best-practices"
  github_url: "https://github.com/callstackincubator/agent-skills/tree/HEAD/skills/react-native-best-practices"
---

## Activation Contract

Use this skill when the user request matches `react-native-best-practices` or the preserved source description: Provides React Native performance optimization guidelines for FPS, TTI, bundle size, memory leaks, re-renders, and animations. Applies to tasks involving Hermes optimization, JS thread blocking, bridge overhead, FlashList, native modules, or debugging jank and frame drops.

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
- `references/POWER.md` - preserved source companion file.
- `references/agents/openai.yaml` - preserved source companion file.
- `references/bundle-analyze-app.md` - preserved source companion file.
- `references/bundle-analyze-js.md` - preserved source companion file.
- `references/bundle-barrel-exports.md` - preserved source companion file.
- `references/bundle-code-splitting.md` - preserved source companion file.
- `references/bundle-hermes-mmap.md` - preserved source companion file.
- `references/bundle-library-size.md` - preserved source companion file.
- `references/bundle-native-assets.md` - preserved source companion file.
- `references/bundle-r8-android.md` - preserved source companion file.
- `references/bundle-tree-shaking.md` - preserved source companion file.
- `references/images/bundle-treemap-source-map-explorer.png` - preserved source companion file.
- `references/images/controlled-textinput-pingpong.png` - preserved source companion file.
- `references/images/devtools-flamegraph.png` - preserved source companion file.
- `references/images/emerge-xray-ios.png` - preserved source companion file.
- `references/images/expo-atlas-treemap.png` - preserved source companion file.
- `references/images/flashlight-flatlist-vs-flashlist.png` - preserved source companion file.
- `references/images/fps-drop-graph.png` - preserved source companion file.
- `references/images/memory-heap-snapshot.png` - preserved source companion file.
- `references/images/tti-warm-start-diagram.png` - preserved source companion file.
- `references/images/view-hierarchy-flattening.png` - preserved source companion file.
- `references/images/xcode-instruments-templates.png` - preserved source companion file.
- `references/images/xcode-thread-view.png` - preserved source companion file.
- `references/js-animations-reanimated.md` - preserved source companion file.
- `references/js-atomic-state.md` - preserved source companion file.
- `references/js-bottomsheet.md` - preserved source companion file.
- `references/js-concurrent-react.md` - preserved source companion file.
- `references/js-lists-flatlist-flashlist.md` - preserved source companion file.
- `references/js-measure-fps.md` - preserved source companion file.
- `references/js-memory-leaks.md` - preserved source companion file.
- `references/js-profile-react.md` - preserved source companion file.
- `references/js-react-compiler.md` - preserved source companion file.
- `references/js-uncontrolled-components.md` - preserved source companion file.
- `references/native-android-16kb-alignment.md` - preserved source companion file.
- `references/native-measure-tti.md` - preserved source companion file.
- `references/native-memory-leaks.md` - preserved source companion file.
- `references/native-memory-patterns.md` - preserved source companion file.
- `references/native-platform-setup.md` - preserved source companion file.
- `references/native-profiling.md` - preserved source companion file.
- `references/native-sdks-over-polyfills.md` - preserved source companion file.
- `references/native-threading-model.md` - preserved source companion file.
- `references/native-turbo-modules.md` - preserved source companion file.
- `references/native-view-flattening.md` - preserved source companion file.
