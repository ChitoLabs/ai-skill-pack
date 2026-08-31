# Publication Audit Summary

## Result

- Published entry points: 492
- Entry points with valid source URLs: 482
- Entry points without a supplied source URL: 10
- Entry points with an author value: 492
- Entries with `author: unknown`: 10
- Publication source of truth: `skills/*/SKILL.md`

## Attribution Boundary

The audit preserves `metadata.author` exactly as supplied. It does not infer authorship from skills.sh publishers, distributors, curators, adapters, GitHub repository owners, or URLs. `metadata.adapter` is represented separately. Missing source URLs remain explicitly unsupplied rather than being invented.

Unknown authors: `bun`, `rails-background-jobs`, `rails-bug-triage`, `rails-code-review`, `rails-migration-safety`, `rails-security-review`, `rails-stack-conventions`, `rails-tdd-slices`, `rspec-best-practices`, `rspec-service-testing`.

## Validation

Run `node scripts/maintain-attribution.mjs` for a read-only consistency check. Use `--generate` only to rebuild derived publication artifacts from the current skill entry points.
