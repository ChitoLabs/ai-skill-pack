---
name: zod
description: "Trigger: zod, Zod schema validation best practices for type safety, parsing, and error handling. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/pproenca/dot-skills/zod"
  github_url: "https://github.com/thongdn-it/react-agent-skills/tree/HEAD/skills/zod"
---

## Activation Contract

Use this skill when the user request matches `zod` or the preserved source description: Zod schema validation best practices for type safety, parsing, and error handling. This skill should be used when defining z.object schemas, using z.string validations, safeParse, or z.infer. This skill does NOT cover React Hook Form integration patterns (use react-hook-form skill) or OpenAPI client generation (use orval skill).

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
- `references/compose-intersection.md` - preserved source companion file.
- `references/compose-lazy-recursive.md` - preserved source companion file.
- `references/compose-pipe.md` - preserved source companion file.
- `references/compose-preprocess.md` - preserved source companion file.
- `references/compose-shared-schemas.md` - preserved source companion file.
- `references/error-avoid-throwing-in-refine.md` - preserved source companion file.
- `references/error-custom-messages.md` - preserved source companion file.
- `references/error-i18n.md` - preserved source companion file.
- `references/error-path-for-nested.md` - preserved source companion file.
- `references/error-use-flatten.md` - preserved source companion file.
- `references/metadata.json` - preserved source companion file.
- `references/object-discriminated-unions.md` - preserved source companion file.
- `references/object-extend-for-composition.md` - preserved source companion file.
- `references/object-optional-vs-nullable.md` - preserved source companion file.
- `references/object-partial-for-updates.md` - preserved source companion file.
- `references/object-pick-omit.md` - preserved source companion file.
- `references/object-strict-vs-strip.md` - preserved source companion file.
- `references/parse-async-for-async-refinements.md` - preserved source companion file.
- `references/parse-avoid-double-validation.md` - preserved source companion file.
- `references/parse-handle-all-issues.md` - preserved source companion file.
- `references/parse-never-trust-json.md` - preserved source companion file.
- `references/parse-use-safeparse.md` - preserved source companion file.
- `references/parse-validate-early.md` - preserved source companion file.
- `references/perf-arrays.md` - preserved source companion file.
- `references/perf-avoid-dynamic-creation.md` - preserved source companion file.
- `references/perf-cache-schemas.md` - preserved source companion file.
- `references/perf-lazy-loading.md` - preserved source companion file.
- `references/perf-zod-mini.md` - preserved source companion file.
- `references/refine-add-path.md` - preserved source companion file.
- `references/refine-catch.md` - preserved source companion file.
- `references/refine-defaults.md` - preserved source companion file.
- `references/refine-transform-coerce.md` - preserved source companion file.
- `references/refine-vs-superrefine.md` - preserved source companion file.
- `references/schema-avoid-optional-abuse.md` - preserved source companion file.
- `references/schema-coercion-for-form-data.md` - preserved source companion file.
- `references/schema-string-validations.md` - preserved source companion file.
- `references/schema-use-enums.md` - preserved source companion file.
- `references/schema-use-primitives-correctly.md` - preserved source companion file.
- `references/schema-use-unknown-not-any.md` - preserved source companion file.
- `references/type-branded-types.md` - preserved source companion file.
- `references/type-enable-strict-mode.md` - preserved source companion file.
- `references/type-export-schemas-and-types.md` - preserved source companion file.
- `references/type-input-vs-output.md` - preserved source companion file.
- `references/type-use-z-infer.md` - preserved source companion file.
