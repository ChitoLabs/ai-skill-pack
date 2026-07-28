# Web Technical Audit Workflow

Audit implementation quality without editing. Verify each finding in source and rendered output when available.

## Score five dimensions

Score each dimension from 0 to 4 and cite evidence:

1. **Accessibility:** semantics, labels, keyboard flow, focus, contrast, zoom, reduced motion, forms, alt text, and error recovery.
2. **Performance:** image handling, layout thrashing, rendering waste, asset weight, unnecessary dependencies, and bounded animation cost.
3. **Theming:** token use, color roles, dark mode, theme switching, and hard-coded drift.
4. **Responsive behavior:** overflow, fixed widths, touch targets, text growth, intermediate widths, and content reflow.
5. **Implementation integrity:** product specificity, repeated shortcuts, design-system drift, misleading decoration, broken controls, and false affordances.

Use these rating bands: 18-20 Excellent, 14-17 Good, 10-13 Acceptable, 6-9 Poor, 0-5 Critical.

## Prioritize findings

- **P0:** Blocks task completion or causes data loss.
- **P1:** Major usability problem or accessibility failure.
- **P2:** Material issue with a viable workaround.
- **P3:** Polish with no meaningful task impact.

For every finding include location, category, user impact, applicable standard, evidence, confidence, and a concrete correction. Separate systemic patterns from isolated defects and note positive practices worth preserving.

## Return

Provide the score table, implementation-integrity verdict, executive summary, prioritized findings, systemic patterns, positive findings, and recommended supported workflows. Recommend only `new-work`, `polish`, `extract`, or another workflow actually present in this candidate.
