---
name: vercel-react-best-practices
description: "Trigger: vercel-react-best-practices, React and Next.js performance optimization guidelines from Vercel Engineering. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: vercel
  version: 1.0.0
  skills_sh_url: "https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices"
  github_url: "https://github.com/vercel-labs/agent-skills/tree/HEAD/skills/react-best-practices"
---

## Activation Contract

Use this skill when the user request matches `vercel-react-best-practices` or the preserved source description: React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.

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
- `references/AGENTS.md` - preserved source companion file.
- `references/README.md` - preserved source companion file.
- `references/metadata.json` - preserved source companion file.
- `references/rules/_sections.md` - preserved source companion file.
- `references/rules/_template.md` - preserved source companion file.
- `references/rules/advanced-effect-event-deps.md` - preserved source companion file.
- `references/rules/advanced-event-handler-refs.md` - preserved source companion file.
- `references/rules/advanced-init-once.md` - preserved source companion file.
- `references/rules/advanced-use-latest.md` - preserved source companion file.
- `references/rules/async-api-routes.md` - preserved source companion file.
- `references/rules/async-cheap-condition-before-await.md` - preserved source companion file.
- `references/rules/async-defer-await.md` - preserved source companion file.
- `references/rules/async-dependencies.md` - preserved source companion file.
- `references/rules/async-parallel.md` - preserved source companion file.
- `references/rules/async-suspense-boundaries.md` - preserved source companion file.
- `references/rules/bundle-analyzable-paths.md` - preserved source companion file.
- `references/rules/bundle-barrel-imports.md` - preserved source companion file.
- `references/rules/bundle-conditional.md` - preserved source companion file.
- `references/rules/bundle-defer-third-party.md` - preserved source companion file.
- `references/rules/bundle-dynamic-imports.md` - preserved source companion file.
- `references/rules/bundle-preload.md` - preserved source companion file.
- `references/rules/client-event-listeners.md` - preserved source companion file.
- `references/rules/client-localstorage-schema.md` - preserved source companion file.
- `references/rules/client-passive-event-listeners.md` - preserved source companion file.
- `references/rules/client-swr-dedup.md` - preserved source companion file.
- `references/rules/js-batch-dom-css.md` - preserved source companion file.
- `references/rules/js-cache-function-results.md` - preserved source companion file.
- `references/rules/js-cache-property-access.md` - preserved source companion file.
- `references/rules/js-cache-storage.md` - preserved source companion file.
- `references/rules/js-combine-iterations.md` - preserved source companion file.
- `references/rules/js-early-exit.md` - preserved source companion file.
- `references/rules/js-flatmap-filter.md` - preserved source companion file.
- `references/rules/js-hoist-regexp.md` - preserved source companion file.
- `references/rules/js-index-maps.md` - preserved source companion file.
- `references/rules/js-length-check-first.md` - preserved source companion file.
- `references/rules/js-min-max-loop.md` - preserved source companion file.
- `references/rules/js-request-idle-callback.md` - preserved source companion file.
- `references/rules/js-set-map-lookups.md` - preserved source companion file.
- `references/rules/js-tosorted-immutable.md` - preserved source companion file.
- `references/rules/rendering-activity.md` - preserved source companion file.
- `references/rules/rendering-animate-svg-wrapper.md` - preserved source companion file.
- `references/rules/rendering-conditional-render.md` - preserved source companion file.
- `references/rules/rendering-content-visibility.md` - preserved source companion file.
- `references/rules/rendering-hoist-jsx.md` - preserved source companion file.
- `references/rules/rendering-hydration-no-flicker.md` - preserved source companion file.
- `references/rules/rendering-hydration-suppress-warning.md` - preserved source companion file.
- `references/rules/rendering-resource-hints.md` - preserved source companion file.
- `references/rules/rendering-script-defer-async.md` - preserved source companion file.
- `references/rules/rendering-svg-precision.md` - preserved source companion file.
- `references/rules/rendering-usetransition-loading.md` - preserved source companion file.
- `references/rules/rerender-defer-reads.md` - preserved source companion file.
- `references/rules/rerender-dependencies.md` - preserved source companion file.
- `references/rules/rerender-derived-state-no-effect.md` - preserved source companion file.
- `references/rules/rerender-derived-state.md` - preserved source companion file.
- `references/rules/rerender-functional-setstate.md` - preserved source companion file.
- `references/rules/rerender-lazy-state-init.md` - preserved source companion file.
- `references/rules/rerender-memo-with-default-value.md` - preserved source companion file.
- `references/rules/rerender-memo.md` - preserved source companion file.
- `references/rules/rerender-move-effect-to-event.md` - preserved source companion file.
- `references/rules/rerender-no-inline-components.md` - preserved source companion file.
- `references/rules/rerender-simple-expression-in-memo.md` - preserved source companion file.
- `references/rules/rerender-split-combined-hooks.md` - preserved source companion file.
- `references/rules/rerender-transitions.md` - preserved source companion file.
- `references/rules/rerender-use-deferred-value.md` - preserved source companion file.
- `references/rules/rerender-use-ref-transient-values.md` - preserved source companion file.
- `references/rules/server-after-nonblocking.md` - preserved source companion file.
- `references/rules/server-auth-actions.md` - preserved source companion file.
- `references/rules/server-cache-lru.md` - preserved source companion file.
- `references/rules/server-cache-react.md` - preserved source companion file.
- `references/rules/server-dedup-props.md` - preserved source companion file.
- `references/rules/server-hoist-static-io.md` - preserved source companion file.
- `references/rules/server-no-shared-module-state.md` - preserved source companion file.
- `references/rules/server-parallel-fetching.md` - preserved source companion file.
- `references/rules/server-parallel-nested-fetching.md` - preserved source companion file.
- `references/rules/server-serialization.md` - preserved source companion file.
