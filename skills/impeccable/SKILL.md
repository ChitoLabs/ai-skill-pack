---
name: impeccable
description: "Trigger: impeccable, frontend design, UI audit, critique, polish. Run a portable manual subset of Impeccable without bundled runtime helpers."
license: Apache-2.0
metadata:
  author: pbakaus
  version: "4.0.2-portable-manual-subset"
  github_url: "https://github.com/pbakaus/impeccable"
---

## Activation Contract

Use when the user asks to plan, design, redesign, document, audit, critique, polish, or extract a frontend interface or design system. This candidate is a portable manual subset. It preserves selected design workflows but does not provide full upstream operational parity.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Preserve product truth, working behavior, native affordances, implementation boundaries, and factual copy unless the user approves a replacement scope.
- Use only ordinary repository inspection, file editing, browser, and terminal capabilities that are actually available.
- Do not claim access to bundled scripts, detectors, hooks, live servers, provider integrations, automatic repair, or helper-managed state. None are distributed here.
- Ask before installs, external services, credentials, remote mutations, destructive edits, or overwriting an existing product or design authority.
- Inspect desktop and mobile together, fix material findings in one batch, confirm at most once, then stop polishing.
- Load `references/workflows/craft-floor.md` immediately before any UI edit.

## Decision Gates

| User intent | Required workflow |
|---|---|
| Capture durable product truth | `references/workflows/init.md` |
| Record an existing design system | `references/workflows/document.md` |
| Produce a confirmed brief without code | `references/workflows/shape.md` |
| Build a new surface or approved redesign | `references/workflows/new-work.md`, then `references/workflows/craft-floor.md` |
| Audit web implementation quality | `references/workflows/audit.md` |
| Audit native implementation quality | `references/workflows/audit.native.md` |
| Critique usability and design specificity | `references/workflows/critique.md` |
| Apply a bounded final refinement | `references/workflows/polish.md`, then `references/workflows/craft-floor.md` |
| Extract repeated tokens or components | `references/workflows/extract.md`, then `references/workflows/craft-floor.md` before edits |

If the request does not fit one row, explain that it is outside this manual subset and ask for a supported outcome. Do not recommend a missing operation.

## Workflow Dependency Map

Select one primary workflow, then load every required or triggered dependency in the declared order. Do not load unrelated workflows.

| Primary workflow | Required dependencies | Conditional dependencies |
|---|---|---|
| `init.md` | none | none |
| `document.md` | none | `init.md` first only when seed documentation is requested and `PRODUCT.md` is missing |
| `shape.md` | none for an established world | `new-work.md` direction-selection sections only for a new or replacement world; stop before implementation |
| `new-work.md` | `craft-floor.md` immediately before UI edits | `init.md` first when durable product truth is missing; `document.md` after the build when the user asks to record a durable system |
| `craft-floor.md` | none | none |
| `audit.md` | none | none |
| `audit.native.md` | `audit.md` for shared rating bands and P0-P3 definitions | none |
| `critique.md` | none | none |
| `polish.md` | `craft-floor.md` immediately before UI edits | a user-identified prior critique may be read as evidence |
| `extract.md` | `craft-floor.md` immediately before extraction edits | none |

## Execution Steps

1. Resolve one concrete target and inspect product context, design context, representative code, tokens, assets, and rendered output when available.
2. Choose the surface mode: Persuade, Operate, Read, or Experience.
3. Load the primary workflow and its declared dependencies in map order. Ask one focused question only when material scope or truth is missing.
4. For edits, enforce the craft-floor dependency after direction is settled and before changing UI.
5. Perform the smallest complete manual workflow inside the approved scope.
6. Verify with source evidence and, when available, one batched desktop and mobile inspection plus at most one confirmation pass.

## Output Contract

Return the primary workflow, dependencies loaded, target, mode, evidence inspected, decisions made, files changed or reported, verification evidence, limitations of the manual run, and any approval still required. Never imply that omitted upstream automation ran.

## References

- `references/workflows/init.md` - durable product context.
- `references/workflows/document.md` - manual design-system documentation.
- `references/workflows/shape.md` - no-code design brief.
- `references/workflows/new-work.md` - manual design and redesign flow.
- `references/workflows/craft-floor.md` - pre-edit quality floor.
- `references/workflows/audit.md` - web technical audit.
- `references/workflows/audit.native.md` - native technical audit.
- `references/workflows/critique.md` - manual design critique.
- `references/workflows/polish.md` - bounded refinement.
- `references/workflows/extract.md` - token and component extraction.
- `references/safety-notes.md` - subset boundaries and approval gates.
