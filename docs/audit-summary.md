# Publication Audit Summary

## Result

- Published entry points: 492
- Taxonomy assignments: 492
- Taxonomy categories: 15
- Entry points with valid source URLs: 482
- Entries with `author: unknown`: 10
- Publication inputs: `skills/*/SKILL.md` metadata and content, `skill-categories.json` categories, and `catalog-overrides.json` reviewed summary and trigger corrections

## Validation

Run `node scripts/maintain-attribution.mjs` for a deterministic, read-only consistency and freshness check. URL syntax is validated offline; network reachability is not checked. Use `--generate` only to rebuild root publication artifacts, never skill content.
