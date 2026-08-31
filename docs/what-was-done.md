# What Was Done

The publication layer was rebuilt from three versioned inputs: 492 top-level `skills/*/SKILL.md` entry points, `skill-categories.json`, and `catalog-overrides.json`.

- Added a category-based human discovery catalog with concise capability summaries, separate triggers, and licenses.
- Added deterministic taxonomy, override, and freshness validation.
- Preserved supplied source, author, adapter, version, and license data.
- Kept generation read-only by default and limited writes to derived publication artifacts.

Skill contents were not rewritten.
