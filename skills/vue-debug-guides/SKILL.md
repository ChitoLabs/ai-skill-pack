---
name: vue-debug-guides
description: "Trigger: vue-debug-guides, Vue 3 debugging and error handling for runtime errors, warnings, async failures, and SSR/hydration issues. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: hyf0
  version: 0.1
  skills_sh_url: "https://www.skills.sh/hyf0/vue-skills/vue-debug-guides"
  github_url: "https://github.com/vuejs-ai/skills/tree/HEAD/skills/vue-debug-guides"
---

## Activation Contract

Use this skill when the user request matches `vue-debug-guides` or the preserved source description: Vue 3 debugging and error handling for runtime errors, warnings, async failures, and SSR/hydration issues. Use when diagnosing or fixing Vue issues.

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
- `references/reference/animation-key-for-rerender.md` - preserved source companion file.
- `references/reference/animation-transitiongroup-performance.md` - preserved source companion file.
- `references/reference/async-component-error-handling.md` - preserved source companion file.
- `references/reference/async-component-keepalive-ref-issue.md` - preserved source companion file.
- `references/reference/async-component-suspense-control.md` - preserved source companion file.
- `references/reference/async-component-vue-router.md` - preserved source companion file.
- `references/reference/attrs-event-listener-merging.md` - preserved source companion file.
- `references/reference/checkbox-true-false-value-form-submission.md` - preserved source companion file.
- `references/reference/cleanup-side-effects.md` - preserved source companion file.
- `references/reference/click-events-on-components.md` - preserved source companion file.
- `references/reference/component-naming-conflicts.md` - preserved source companion file.
- `references/reference/component-ref-requires-defineexpose.md` - preserved source companion file.
- `references/reference/composable-avoid-hidden-side-effects.md` - preserved source companion file.
- `references/reference/composable-call-location-restrictions.md` - preserved source companion file.
- `references/reference/composable-naming-return-pattern.md` - preserved source companion file.
- `references/reference/composable-tovalue-inside-watcheffect.md` - preserved source companion file.
- `references/reference/composition-api-not-functional-programming.md` - preserved source companion file.
- `references/reference/composition-api-script-setup-async-context.md` - preserved source companion file.
- `references/reference/composition-api-vs-react-hooks-differences.md` - preserved source companion file.
- `references/reference/computed-array-mutation.md` - preserved source companion file.
- `references/reference/computed-conditional-dependencies.md` - preserved source companion file.
- `references/reference/computed-no-parameters.md` - preserved source companion file.
- `references/reference/computed-no-side-effects.md` - preserved source companion file.
- `references/reference/computed-return-value-readonly.md` - preserved source companion file.
- `references/reference/configure-app-before-mount.md` - preserved source companion file.
- `references/reference/declare-emits-for-documentation.md` - preserved source companion file.
- `references/reference/define-expose-before-await.md` - preserved source companion file.
- `references/reference/define-model-default-value-sync.md` - preserved source companion file.
- `references/reference/defineEmits-must-be-top-level.md` - preserved source companion file.
- `references/reference/defineEmits-no-runtime-and-type-mixed.md` - preserved source companion file.
- `references/reference/definemodel-object-mutation-no-emit.md` - preserved source companion file.
- `references/reference/dom-update-timing-nexttick.md` - preserved source companion file.
- `references/reference/dynamic-argument-constraints.md` - preserved source companion file.
- `references/reference/dynamic-component-registration-vite.md` - preserved source companion file.
- `references/reference/event-modifier-order-matters.md` - preserved source companion file.
- `references/reference/exact-modifier-for-precise-shortcuts.md` - preserved source companion file.
- `references/reference/fallthrough-attrs-overwrite-vue3.md` - preserved source companion file.
- `references/reference/in-dom-template-parsing-caveats.md` - preserved source companion file.
- `references/reference/inheritattrs-false-for-wrapper-components.md` - preserved source companion file.
- `references/reference/keepalive-router-nested-double-mount.md` - preserved source companion file.
- `references/reference/keepalive-transition-memory-leak.md` - preserved source companion file.
- `references/reference/keyup-modifier-timing.md` - preserved source companion file.
- `references/reference/lifecycle-dom-access-timing.md` - preserved source companion file.
- `references/reference/lifecycle-hooks-synchronous-registration.md` - preserved source companion file.
- `references/reference/lifecycle-ssr-awareness.md` - preserved source companion file.
- `references/reference/local-components-not-in-descendants.md` - preserved source companion file.
- `references/reference/mount-return-value.md` - preserved source companion file.
- `references/reference/multi-root-component-class-attrs.md` - preserved source companion file.
- `references/reference/native-event-collision-with-emits.md` - preserved source companion file.
- `references/reference/no-passive-with-prevent.md` - preserved source companion file.
- `references/reference/no-v-if-with-v-for.md` - preserved source companion file.
- `references/reference/perf-computed-object-stability.md` - preserved source companion file.
- `references/reference/perf-props-stability-update-optimization.md` - preserved source companion file.
- `references/reference/plugin-global-properties-sparingly.md` - preserved source companion file.
- `references/reference/plugin-install-before-mount.md` - preserved source companion file.
- `references/reference/plugin-prefer-provide-inject-over-global-properties.md` - preserved source companion file.
- `references/reference/plugin-typescript-type-augmentation.md` - preserved source companion file.
- `references/reference/prop-defineprops-scope-limitation.md` - preserved source companion file.
- `references/reference/provide-inject-debugging-challenges.md` - preserved source companion file.
- `references/reference/provide-inject-default-value-factory.md` - preserved source companion file.
- `references/reference/provide-inject-reactivity-not-automatic.md` - preserved source companion file.
- `references/reference/provide-inject-synchronous-setup.md` - preserved source companion file.
- `references/reference/reactive-destructuring.md` - preserved source companion file.
- `references/reference/reactivity-debugging-hooks.md` - preserved source companion file.
- `references/reference/reactivity-markraw-for-non-reactive.md` - preserved source companion file.
- `references/reference/reactivity-proxy-identity-hazard.md` - preserved source companion file.
- `references/reference/reactivity-same-tick-batching.md` - preserved source companion file.
- `references/reference/ref-value-access.md` - preserved source companion file.
- `references/reference/refs-in-collections-need-value.md` - preserved source companion file.
- `references/reference/render-function-avoid-internal-vnode-properties.md` - preserved source companion file.
- `references/reference/render-function-vnodes-must-be-unique.md` - preserved source companion file.
- `references/reference/rendering-render-function-h-import-vue3.md` - preserved source companion file.
- `references/reference/rendering-render-function-return-from-setup.md` - preserved source companion file.
- `references/reference/rendering-render-function-slots-as-functions.md` - preserved source companion file.
- `references/reference/rendering-resolve-component-for-string-names.md` - preserved source companion file.
- `references/reference/select-initial-value-ios-bug.md` - preserved source companion file.
- `references/reference/self-referencing-component-name.md` - preserved source companion file.
- `references/reference/sfc-named-exports-forbidden.md` - preserved source companion file.
- `references/reference/sfc-scoped-css-child-component-styling.md` - preserved source companion file.
- `references/reference/sfc-scoped-css-dynamic-content.md` - preserved source companion file.
- `references/reference/sfc-scoped-css-slot-content.md` - preserved source companion file.
- `references/reference/sfc-script-setup-reactivity.md` - preserved source companion file.
- `references/reference/slot-forwarding-to-child-components.md` - preserved source companion file.
- `references/reference/slot-implicit-default-content.md` - preserved source companion file.
- `references/reference/slot-name-reserved-prop.md` - preserved source companion file.
- `references/reference/slot-named-scoped-explicit-default.md` - preserved source companion file.
- `references/reference/slot-render-scope-parent-only.md` - preserved source companion file.
- `references/reference/slot-v-slot-on-components-or-templates-only.md` - preserved source companion file.
- `references/reference/ssr-hydration-mismatch-causes.md` - preserved source companion file.
- `references/reference/ssr-platform-specific-apis.md` - preserved source companion file.
- `references/reference/state-ssr-cross-request-pollution.md` - preserved source companion file.
- `references/reference/suspense-no-builtin-error-handling.md` - preserved source companion file.
- `references/reference/suspense-ssr-hydration-issues.md` - preserved source companion file.
- `references/reference/tailwind-dynamic-class-generation.md` - preserved source companion file.
- `references/reference/teleport-scoped-styles-limitation.md` - preserved source companion file.
- `references/reference/teleport-ssr-hydration.md` - preserved source companion file.
- `references/reference/teleport-target-must-exist.md` - preserved source companion file.
- `references/reference/template-expressions-restrictions.md` - preserved source companion file.
- `references/reference/template-functions-no-side-effects.md` - preserved source companion file.
- `references/reference/template-ref-null-with-v-if.md` - preserved source companion file.
- `references/reference/template-ref-unwrapping-top-level.md` - preserved source companion file.
- `references/reference/template-ref-v-for-order.md` - preserved source companion file.
- `references/reference/textarea-no-interpolation.md` - preserved source companion file.
- `references/reference/transition-group-flip-inline-elements.md` - preserved source companion file.
- `references/reference/transition-group-move-animation-position-absolute.md` - preserved source companion file.
- `references/reference/transition-group-no-default-wrapper-vue3.md` - preserved source companion file.
- `references/reference/transition-js-hooks-done-callback.md` - preserved source companion file.
- `references/reference/transition-nested-duration.md` - preserved source companion file.
- `references/reference/transition-reusable-scoped-style.md` - preserved source companion file.
- `references/reference/transition-router-view-appear.md` - preserved source companion file.
- `references/reference/transition-type-when-mixed.md` - preserved source companion file.
- `references/reference/transition-unmount-hook-timing.md` - preserved source companion file.
- `references/reference/ts-defineprops-boolean-default-false.md` - preserved source companion file.
- `references/reference/ts-defineprops-imported-types-limitations.md` - preserved source companion file.
- `references/reference/ts-event-handler-explicit-typing.md` - preserved source companion file.
- `references/reference/ts-reactive-no-generic-argument.md` - preserved source companion file.
- `references/reference/ts-shallowref-for-dynamic-components.md` - preserved source companion file.
- `references/reference/ts-template-ref-null-handling.md` - preserved source companion file.
- `references/reference/ts-template-type-casting.md` - preserved source companion file.
- `references/reference/ts-withdefaults-mutable-factory-function.md` - preserved source companion file.
- `references/reference/undeclared-emits-double-firing.md` - preserved source companion file.
- `references/reference/use-template-ref-vue35.md` - preserved source companion file.
- `references/reference/v-else-must-follow-v-if.md` - preserved source companion file.
- `references/reference/v-for-component-props.md` - preserved source companion file.
- `references/reference/v-for-computed-reverse-sort.md` - preserved source companion file.
- `references/reference/v-for-key-attribute.md` - preserved source companion file.
- `references/reference/v-for-range-starts-at-one.md` - preserved source companion file.
- `references/reference/v-if-null-check-order.md` - preserved source companion file.
- `references/reference/v-model-ignores-html-attributes.md` - preserved source companion file.
- `references/reference/v-model-ime-composition.md` - preserved source companion file.
- `references/reference/v-model-number-modifier-behavior.md` - preserved source companion file.
- `references/reference/v-show-template-limitation.md` - preserved source companion file.
- `references/reference/watch-async-cleanup.md` - preserved source companion file.
- `references/reference/watch-async-creation-memory-leak.md` - preserved source companion file.
- `references/reference/watch-deep-same-object-reference.md` - preserved source companion file.
- `references/reference/watch-flush-timing.md` - preserved source companion file.
- `references/reference/watch-reactive-property-getter.md` - preserved source companion file.
- `references/reference/watcheffect-async-dependency-tracking.md` - preserved source companion file.
- `references/reference/watcheffect-flush-post-for-refs.md` - preserved source companion file.
