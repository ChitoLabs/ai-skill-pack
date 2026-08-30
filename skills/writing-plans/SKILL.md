---
name: writing-plans
description: "Trigger: write an implementation plan when repository policy explicitly requests this template and no managed SDD task plan owns the work. Consume existing canonical inputs; never create a parallel source of truth."
license: Apache-2.0
metadata:
  author: obra
  adapter: LCubero
  version: 0.2
  skills_sh_url: "https://skills.sh/obra/superpowers/writing-plans"
  github_url: "https://github.com/obra/superpowers/tree/HEAD/skills/writing-plans"
---

# Repository-Local Template: Implementation Plan

## Activation Contract

Use only when the user or repository policy explicitly selects this template and no managed SDD task plan owns the work. In managed SDD, consume or summarize canonical artifacts only when requested.

Read `references/source-skill.md` before drafting. Use `references/plan-document-reviewer-prompt.md` only when independent review is authorized.

## Hard Rules

- Never create a second source of truth beside canonical proposal, specification, design, or task artifacts.
- Repository policy owns the output path, format, approval, implementation phases, and delivery workflow.
- Do not impose task duration, commit strategy, delegation, or automatic handoffs.
- Do not write a plan until its canonical inputs and destination are confirmed.

## Decision Gates

| Condition | Action |
|---|---|
| Managed task plan owns the work | Do not create another plan; provide the requested summary or gap analysis. |
| Canonical inputs conflict | Report the conflict and stop. |
| Output location is not approved | Return a preview only. |

## Execution Steps

1. Identify repository policy and the canonical requirements owner.
2. Extract affected paths, observable acceptance criteria, verification, risks, dependencies, and rollback boundaries.
3. Draft the smallest plan that preserves those inputs without adding authority.
4. Request review or approval according to repository policy.

## Output Contract

Return canonical inputs used, proposed plan or summary, evidence gaps, destination approval status, and next actions requiring authorization.

## References

- `references/source-skill.md`
- `references/plan-document-reviewer-prompt.md`
