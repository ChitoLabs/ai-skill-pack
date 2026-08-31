---
name: hallmark
description: "Trigger: hallmark, design audit, redesign, study, anti-slop UI. Build or review distinctive frontend interfaces."
license: MIT
metadata:
  author: Nutlope
  version: "1.1.0-portable"
  github_url: "https://github.com/Nutlope/hallmark"
---

## Activation Contract

Use when the user invokes Hallmark, asks for a greenfield page, UI audit, redesign, study of a screenshot or URL, or anti-slop frontend design. Resolve the requested operation inside this skill and load only the relevant local workflow.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Preserve routes, component ownership, copy intent, brand, and information architecture unless the user approves a file-level replacement plan.
- Inspect design signals before edits: `DESIGN.md`, fonts, palette, motion libraries, spacing, framework, and representative components.
- Never invent metrics, testimonials, logos, or factual claims. Use placeholders or ask for missing proof.
- Use design tokens for colors, fonts, spacing, motion, and radii. Avoid one-off values after choosing a theme.
- Do not copy pixels from studied designs. For design extraction from URLs, require user attestation that the source is theirs or a public brand reference.
- Design visual states and local stubs only for auth, payment, authorization, webhook, transaction, credential, or business-logic surfaces. Never implement or mutate those domains through this skill.
- Ask before installs, external fetches, destructive edits, remote mutations, credential use, hooks, or live browser/server behavior.

## Decision Gates

| Condition | Action |
|---|---|
| A named companion skill is not installed | Say so, then continue with this skill's own references or the closest manual fallback. |
| Audit request | Load `references/workflows/audit.md`, `references/anti-patterns.md`, and `references/slop-test.md` only; report findings without editing. |
| Study request | Load `references/study.md` only; load `references/design-md.md` later only if the user approves design-system emission. |
| Redesign request | Load `references/workflows/redesign.md`, then use `references/workflows/build.md` inside the approved redesign boundary. |
| Single UI element | Load `references/workflows/build.md` and use its component state contract. |
| New page or app UI | Load `references/workflows/build.md` and follow its named phases. |

## Operation Routing

Classify before loading domain references. Audit and study do not enter the build procedure, do not choose a genre or macrostructure, and do not load build-only references.

- **Audit:** Use the audit workflow and its required checks. If rendered evidence is unavailable, distinguish source findings from blocked visual checks.
- **Study:** Use the study workflow's provenance, refusal, and fail-closed remote-safety contract. Do not fetch when network safety cannot be proven.
- **Build, component, redesign:** Use the progressive map and state transitions in `references/workflows/build.md`.

## Execution Steps

1. Classify the request as audit, redesign, study, component, or new-surface work.
2. Load only the branch named in the decision gates.
3. For build, component, or redesign work, follow every state transition in `references/workflows/build.md`.
4. For audit or study, return that operation's report without entering build phases.
5. Never claim rendered responsive or slop validation when rendering was blocked.

## Output Contract

Return the operation, files changed or audited, evidence type, validation status, unresolved risks, and approvals still required. For source-only validation, label rendered validation `BLOCKED` and list every unverified viewport and visual risk.

## References

- `references/workflows/build.md` - semantic build phases, progressive loading, state contracts, validation fallback, stamping, export, and persistence.
- `references/workflows/audit.md` and `references/workflows/redesign.md` - operation-specific workflows.
- `references/genres/` - exact genre overlays selected eagerly.
- `references/themes/` - optional local theme specifications.
- `references/macrostructures.md` and `references/macrostructures/` - macrostructure index and selected detail.
- `references/component-cookbook.md` and `references/components/` - component index and selected archetypes.
- `references/typography.md`, `references/color.md`, `references/layout-and-space.md`, `references/motion.md`, `references/copy.md`, `references/anti-patterns.md` - universal build rules.
- `references/source-summary.md` - preserved source scope.
- `references/study.md` - study and design DNA workflow.
- `references/slop-test.md` - audit checks and final build quality gates with scoped recipe exemptions.
- `references/contract.md` - handoff and scope rules.

