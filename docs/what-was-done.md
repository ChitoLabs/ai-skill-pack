# What Was Done

The publication layer was rebuilt from the user-owned replacement under `skills/`.

## Changes

- Treated the 492 top-level `skills/*/SKILL.md` files as the sole publication source.
- Removed obsolete command-era publication artifacts.
- Regenerated concise catalogs and manifests in deterministic name order.
- Replaced attribution mutation with a read-only validator that preserves supplied authors, including `unknown`.
- Kept adapter attribution separate from original authorship.

## Boundary

Skill contents were not normalized or rewritten by publication generation. No dependencies were installed, and no files were staged, committed, or pushed.
