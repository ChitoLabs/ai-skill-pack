# Manual Design Critique Workflow

Critique one stable target without editing. Use two independent lenses in sequence and keep their notes separate until synthesis.

## Lens A: Design judgment

Inspect source and rendered output when available. Evaluate product specificity, hierarchy, information architecture, emotional fit, composition, typography, color, copy, accessibility, states, and edge cases.

Score Nielsen's ten heuristics from 0 to 4, using `n/a` only when a heuristic genuinely cannot apply. Recalculate the maximum when using `n/a`. Also check cognitive load: visible choices, grouping, working-memory demands, progressive disclosure, and clarity of the primary action.

## Lens B: Manual quality evidence

Independently inspect source, screenshots, and available browser diagnostics for broken images, clipping, overflow, contrast, illegible type, decorative effects without purpose, arbitrary spacing, motion failures, inconsistent components, and design-system drift. Record exact files, selectors, screens, or screenshot regions. Mark likely false positives.

If the target cannot be rendered with available capabilities, state that limitation and continue with source evidence. Do not claim overlays, generated findings, or machine certainty.

## Synthesize

Return one report containing:

1. Method and evidence inspected.
2. Heuristic score table and applicable maximum.
3. Product-specificity verdict.
4. Overall impression and two or three strengths.
5. Three to five P0-P3 priority issues with impact and concrete fixes.
6. Cognitive-load and accessibility risks.
7. Two or three relevant user perspectives, grounded in known audience facts.
8. Minor observations, uncertainties, and likely false positives.
9. Recommended supported workflows.

Ask targeted follow-up questions only when the answers change priority, intent, or scope. Do not persist notes unless the user asks for a local critique artifact.
