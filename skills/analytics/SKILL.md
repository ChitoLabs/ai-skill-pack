---
name: analytics
description: "Trigger: analytics, When the user wants to set up, improve, or audit analytics tracking and measurement. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: coreyhaines31
  adapter: LCubero
  version: 2.0.0
  skills_sh_url: "https://skills.sh/coreyhaines31/marketingskills/analytics"
  github_url: "https://github.com/coreyhaines31/marketingskills/tree/HEAD/skills/analytics"
---

## Activation Contract

Use this skill when the user request matches `analytics` or the preserved source description: When the user wants to set up, improve, or audit analytics tracking and measurement. Also use when the user mentions "set up tracking," "GA4," "Google Analytics," "conversion tracking," "event tracking," "UTM parameters," "tag manager," "GTM," "analytics implementation," "tracking plan," "how do I measure this," "track conversions," "attribution," "Mixpanel," "Segment," "are my events firing," or "analytics isn't working." Use this whenever someone asks how to know if something is working or wants to measure marketing results. For A/B test measurement, see ab-testing.

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.

## Decision Gates

| Condition | Action |
|---|---|
| A named companion skill is not installed | Say so, then continue with this skill's own references or the closest manual fallback. |
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
- `references/evals/evals.json` - preserved source companion file.
- `references/event-library.md` - preserved source companion file.
- `references/ga4-implementation.md` - preserved source companion file.
- `references/gtm-implementation.md` - preserved source companion file.
- `references/tools/REGISTRY.md` - preserved source companion file.
- `references/tools/integrations/amplitude.md` - preserved source companion file.
- `references/tools/integrations/ga4.md` - preserved source companion file.
- `references/tools/integrations/mixpanel.md` - preserved source companion file.
- `references/tools/integrations/posthog.md` - preserved source companion file.
- `references/tools/integrations/segment.md` - preserved source companion file.
