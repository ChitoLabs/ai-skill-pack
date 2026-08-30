---
name: swiftui-expert-skill
description: "Trigger: swiftui-expert-skill. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: midudev
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://www.skills.sh/avdlee/swiftui-agent-skill/swiftui-expert-skill"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/swiftui-expert-skill"
---

## Activation Contract

Use this skill when the user request matches `swiftui-expert-skill` or the preserved source description: Use when writing, reviewing, or refactoring SwiftUI code for iOS or macOS, including state management, view composition, performance, Liquid Glass adoption, or Instruments `.trace` capture/analysis for hangs, hitches, CPU hotspots, or

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
- `references/accessibility-patterns.md` - preserved source companion file.
- `references/animation-advanced.md` - preserved source companion file.
- `references/animation-basics.md` - preserved source companion file.
- `references/animation-transitions.md` - preserved source companion file.
- `references/charts-accessibility.md` - preserved source companion file.
- `references/charts.md` - preserved source companion file.
- `references/focus-patterns.md` - preserved source companion file.
- `references/image-optimization.md` - preserved source companion file.
- `references/latest-apis.md` - preserved source companion file.
- `references/layout-best-practices.md` - preserved source companion file.
- `references/liquid-glass.md` - preserved source companion file.
- `references/list-patterns.md` - preserved source companion file.
- `references/macos-scenes.md` - preserved source companion file.
- `references/macos-views.md` - preserved source companion file.
- `references/macos-window-styling.md` - preserved source companion file.
- `references/performance-patterns.md` - preserved source companion file.
- `references/scroll-patterns.md` - preserved source companion file.
- `references/sheet-navigation-patterns.md` - preserved source companion file.
- `references/state-management.md` - preserved source companion file.
- `references/text-patterns.md` - preserved source companion file.
- `references/trace-analysis.md` - preserved source companion file.
- `references/trace-recording.md` - preserved source companion file.
- `references/view-structure.md` - preserved source companion file.
- `scripts/analyze_trace.py` - preserved source companion file.
- `scripts/instruments_parser/__init__.py` - preserved source companion file.
- `scripts/instruments_parser/causes.py` - preserved source companion file.
- `scripts/instruments_parser/correlate.py` - preserved source companion file.
- `scripts/instruments_parser/events.py` - preserved source companion file.
- `scripts/instruments_parser/hangs.py` - preserved source companion file.
- `scripts/instruments_parser/hitches.py` - preserved source companion file.
- `scripts/instruments_parser/summary.py` - preserved source companion file.
- `scripts/instruments_parser/swiftui.py` - preserved source companion file.
- `scripts/instruments_parser/time_profiler.py` - preserved source companion file.
- `scripts/instruments_parser/xctrace.py` - preserved source companion file.
- `scripts/instruments_parser/xml_utils.py` - preserved source companion file.
- `scripts/record_trace.py` - preserved source companion file.
