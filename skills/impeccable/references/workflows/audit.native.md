# Native Technical Audit Workflow

Audit native source without editing. Use platform conventions visible in SwiftUI, UIKit, Compose, React Native, or Flutter code. Do not rely on browser-specific evidence.

## Score five dimensions

Score each from 0 to 4 with file or screen evidence:

1. **Accessibility:** labels, traits or roles, traversal order, text scaling, contrast, touch targets, and reduced motion.
2. **Performance:** startup work, list virtualization, main-thread or gesture-path work, wasted rendering, image decoding, caching, and app weight.
3. **Appearance and theming:** semantic colors, dark appearance, platform materials, typography scaling, and token consistency.
4. **Platform conformance:** navigation, back behavior, gestures, safe areas, keyboard handling, native controls, icon language, and familiar affordances.
5. **Adaptivity:** orientation, tablet or large-window composition, multitasking, window resizing, and foldable posture where relevant.

Use the same 0-20 rating bands and P0-P3 priorities as `audit.md`.

## Return

Provide the score table, native-conformance verdict, prioritized findings, systemic patterns, positive findings, and supported next workflows. State which platform assumptions could not be verified and do not invent guideline citations.
