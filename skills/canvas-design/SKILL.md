---
name: canvas-design
description: "Trigger: canvas design, poster, static art, visual philosophy. Create design philosophy and pristine PDF or PNG visual artwork."
license: Complete terms in references/LICENSE.txt
metadata:
  author: anthropics
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: https://www.skills.sh/anthropics/skills/canvas-design
  github_url: https://github.com/anthropics/skills/tree/HEAD/skills/canvas-design
---

## Activation Contract

Use when the user asks for a poster, static visual artwork, design artifact, aesthetic movement, design philosophy, PDF artwork, or PNG artwork.

## Hard Rules

- Output only `.md`, `.pdf`, or `.png` artifacts.
- Create original designs only. Do not copy living artists, named artists, or protected works.
- Keep the work 90 percent visual and 10 percent essential text unless the user explicitly requests otherwise.
- Always create a design philosophy `.md` before creating the canvas output.
- Use minimal text as a visual element. Keep all text and graphics inside the canvas with clear margins.
- Use local fonts from `assets/canvas-fonts/` when typography matters.

## Decision Gates

| Situation | Action |
|---|---|
| User asks for one artifact | Create one single-page PDF or PNG plus the philosophy file. |
| User asks for multiple pages | Create distinct pages in the same philosophy and bundle as PDF or multiple PNGs. |
| Work feels generic or decorative | Refine composition, spacing, palette, typography, and conceptual reference before adding more elements. |
| Existing artifact is not pristine | Polish existing choices first instead of adding filters or extra graphics. |

## Execution Steps

1. Interpret the user request as subtle source material, not a rigid template.
2. Write a 4 to 6 paragraph visual philosophy: movement name, space and form, color and material, scale and rhythm, composition, hierarchy, and craftsmanship.
3. Deduce the subtle conceptual thread that should be embedded in the art without announcing itself.
4. Create a single highly visual canvas as PDF or PNG, using the philosophy and conceptual thread.
5. Use limited palette, precise typography, repeating patterns, systematic marks, and careful margins.
6. Take a final refinement pass focused on crispness, cohesion, spacing, typography, and museum-quality craft.

## Output Contract

Return the path to the design philosophy `.md` and the final `.pdf` or `.png`. Include a concise note on the philosophy, conceptual thread, format, page count, fonts used, and any user constraints applied.

## References

- `references/LICENSE.txt` - upstream license terms.
- `assets/canvas-fonts/` - bundled local font files and font licenses.
