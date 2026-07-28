# Design Documentation Workflow

Record the visual system that the project actually ships. Do not invent a replacement identity.

## Choose the path

- **Scan path:** Existing code, tokens, components, or rendered output establish a coherent system.
- **Seed path:** The project has no implemented system, but `PRODUCT.md` exists and the user explicitly asks for a provisional direction. Label every unresolved value as provisional.

If `DESIGN.md` already exists, show the proposed refresh, merge, or replacement scope and get approval before overwriting it.

## Scan

Inspect, in order:

1. CSS custom properties and global styles.
2. Framework theme or utility configuration.
3. Token files and CSS-in-JS theme objects.
4. Representative button, input, card, navigation, and dialog components.
5. Rendered output, when a browser capability is available.

Extract only repeated, normative values. Record source paths for each material decision. Do not turn one-off values into system rules.

## Write DESIGN.md

Use optional YAML frontmatter for observed `colors`, `typography`, `rounded`, `spacing`, and `components`. Keep token names and value formats aligned with the existing source of truth.

Use these Markdown sections in this order, omitting irrelevant sections:

1. `## Overview`
2. `## Colors`
3. `## Typography`
4. `## Layout`
5. `## Elevation & Depth`
6. `## Shapes`
7. `## Components`
8. `## Do's and Don'ts`

Explain where and why each rule applies. Include exact values only when observed or explicitly approved. Do not create sidecars or automation-specific artifacts in this subset.

## Verify

Compare the draft against representative screens and components. Report omissions, uncertain inferences, the file written, and any section that still needs user confirmation.
