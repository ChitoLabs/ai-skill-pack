---
name: infographic
description: "Trigger: infographic, visual summary, data story, layout spec. Plan implementable infographic structure, hierarchy, copy, and design specs."
license: MIT
metadata:
  author: claude-office-skills
  version: "1.0.0"
  skills_sh_url: https://www.skills.sh/claude-office-skills/skills/infographic
  github_url: https://github.com/claude-office-skills/skills/tree/HEAD/infographic
---

## Activation Contract

Use when the user asks to plan an infographic, visual summary, data story, marketing graphic, comparison, timeline, process, list, or statistical layout.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Produce design specifications, not final raster, vector, or production files.
- Ask for missing topic, message, audience, platform, data, and brand constraints only when required.
- Preserve supplied data and cite source fields in the spec.
- Keep text hierarchy, layout, visual elements, palette, typography, dimensions, and implementation notes explicit.
- Do not claim that graphics were generated.

## Decision Gates

| Need | Action |
|---|---|
| Data-heavy story | Use a statistical layout with chart and KPI guidance. |
| Chronology | Use a timeline layout. |
| How-to or workflow | Use a process layout. |
| Before-after, A/B, or pros-cons | Use a comparison layout. |
| Ranked tips or resources | Use a list layout. |
| Platform unknown | Recommend likely dimensions and ask for the target channel. |

## Execution Steps

1. Clarify the goal, key message, audience, platform, data, and brand constraints.
2. Select the best infographic type using the decision gates.
3. Draft the content outline with header, sections, footer, call to action, and source notes.
4. Specify layout, flow, visual hierarchy, icons, charts, imagery, color palette, typography, and dimensions.
5. Include an ASCII wireframe when it helps implementation.
6. Return ready-to-use copy and designer implementation notes.

## Output Contract

Return a markdown design specification with: title, type, dimensions, target platform, overview, content outline, wireframe, visual elements, color palette, typography, ready copy, design notes, and recommended implementation tools.

## References

- `references/infographic-design-spec.md` - source-preserved output template, size tables, design principles, and infographic type details.
