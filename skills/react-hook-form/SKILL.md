---
name: react-hook-form
description: "Optimize React Hook Form client-side forms with useForm, useWatch, useController, useFieldArray, v7.55+ subscribe(), validation, and render isolation."
license: Apache-2.0
metadata:
  author: pproenca
  version: 0.1
  skills_sh_url: "https://skills.sh/pproenca/dot-skills/react-hook-form"
  github_url: "https://github.com/pproenca/dot-skills/tree/HEAD/skills/.curated/react-hook-form"
---

## Activation Contract

Use this skill when the user request matches `react-hook-form` or the preserved source description: React Hook Form performance optimization for client-side form validation using useForm, useWatch, useController, useFieldArray, and the v7.55+ subscribe() API. This skill should be used when building client-side controlled forms with React Hook Form library. This skill does NOT cover React 19 Server Actions, useActionState, or server-side form handling (use react-19 skill for those).

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
- `assets/templates/_template.md` - preserved source companion file.
- `references/AGENTS.md` - preserved source companion file.
- `references/README.md` - preserved source companion file.
- `references/_sections.md` - preserved source companion file.
- `references/adv-devtools-performance.md` - preserved source companion file.
- `references/adv-formprovider-memo.md` - preserved source companion file.
- `references/adv-testing-wrapper.md` - preserved source companion file.
- `references/array-complete-default-objects.md` - preserved source companion file.
- `references/array-separate-crud-operations.md` - preserved source companion file.
- `references/array-unique-fieldarray-per-name.md` - preserved source companion file.
- `references/array-use-field-id-as-key.md` - preserved source companion file.
- `references/array-virtualization-formprovider.md` - preserved source companion file.
- `references/ctrl-avoid-double-registration.md` - preserved source companion file.
- `references/ctrl-controller-field-props.md` - preserved source companion file.
- `references/ctrl-local-state-combination.md` - preserved source companion file.
- `references/ctrl-single-usecontroller-per-component.md` - preserved source companion file.
- `references/ctrl-usecontroller-isolation.md` - preserved source companion file.
- `references/formcfg-async-default-values.md` - preserved source companion file.
- `references/formcfg-default-values.md` - preserved source companion file.
- `references/formcfg-disabled-prop.md` - preserved source companion file.
- `references/formcfg-revalidate-mode.md` - preserved source companion file.
- `references/formcfg-should-unregister.md` - preserved source companion file.
- `references/formcfg-useeffect-dependency.md` - preserved source companion file.
- `references/formcfg-validation-mode.md` - preserved source companion file.
- `references/formstate-async-submit-lifecycle.md` - preserved source companion file.
- `references/formstate-avoid-isvalid-with-onsubmit.md` - preserved source companion file.
- `references/formstate-destructure-formstate.md` - preserved source companion file.
- `references/formstate-getfieldstate-for-single-field.md` - preserved source companion file.
- `references/formstate-subscribe-to-specific-fields.md` - preserved source companion file.
- `references/formstate-useformstate-isolation.md` - preserved source companion file.
- `references/integ-mui-controller-pattern.md` - preserved source companion file.
- `references/integ-shadcn-form-import.md` - preserved source companion file.
- `references/integ-shadcn-select-wiring.md` - preserved source companion file.
- `references/integ-value-transform.md` - preserved source companion file.
- `references/metadata.json` - preserved source companion file.
- `references/sub-avoid-watch-in-render.md` - preserved source companion file.
- `references/sub-deep-subscription.md` - preserved source companion file.
- `references/sub-subscribe-outside-react.md` - preserved source companion file.
- `references/sub-useformcontext-sparingly.md` - preserved source companion file.
- `references/sub-usewatch-default-value.md` - preserved source companion file.
- `references/sub-usewatch-over-watch.md` - preserved source companion file.
- `references/sub-usewatch-with-getvalues.md` - preserved source companion file.
- `references/sub-watch-specific-fields.md` - preserved source companion file.
- `references/valid-delay-error.md` - preserved source companion file.
- `references/valid-dynamic-schema-factory.md` - preserved source companion file.
- `references/valid-error-message-strategy.md` - preserved source companion file.
- `references/valid-inline-vs-resolver.md` - preserved source companion file.
- `references/valid-native-validation.md` - preserved source companion file.
- `references/valid-resolver-caching.md` - preserved source companion file.
- `references/valid-server-errors.md` - preserved source companion file.
