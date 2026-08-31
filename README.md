# AI Skill Pack

A portable collection of **492 skills** adapted for agents that support folder-based skills with a `SKILL.md` entry point.

## Use

Copy the skill folders you need from `skills/` into your runtime's skill directory. Review each skill's instructions, dependencies, permissions, and license before use.

## Publication Contract

- `skills/*/SKILL.md` is the sole publication source of truth.
- Catalogs and manifests are deterministic views of those 492 entry points.
- `metadata.author` is preserved as supplied. It is never inferred from a publisher, distributor, curator, adapter, source URL, or repository owner.
- `metadata.adapter` remains separate from authorship.
- Unknown authors remain `unknown`.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `skills/` | Published skill folders. |
| [`docs/skills-catalog.md`](docs/skills-catalog.md) | Human-readable skill index. |
| [`docs/source-list.md`](docs/source-list.md) | Source and attribution index. |
| [`manifests/skills-catalog.json`](manifests/skills-catalog.json) | Machine-readable catalog. |
| [`manifests/publication-inventory.json`](manifests/publication-inventory.json) | Deterministic publication inventory. |
| [`scripts/maintain-attribution.mjs`](scripts/maintain-attribution.mjs) | Read-only validation by default, with explicit artifact generation. |

## License

The MIT license covers repository packaging, generated documentation, curation, and adaptation work. Individual skills retain their supplied licenses, notices, and terms.
