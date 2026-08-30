# AI Skill Pack

Portable, reviewed AI skills collected and adapted by ChitoLabs for agents that understand folder-based skills with a `SKILL.md` entry point.

This repository publishes **466 skills** and **3 optional commands** from the authorized v3 source pack.

## Attribution Notice

This repository is a curated compilation and adaptation of skills from their original authors and upstream sources. ChitoLabs did not author individual skills unless a skill explicitly says so.

- Preserve the official upstream author or publisher in `metadata.author`.
- Never identify the adapter or pack maintainer as the original author.
- Use `unknown` when authoritative upstream metadata does not establish an author.
- Preserve official upstream source links and skill-specific notices.

Source and author records are available in [`docs/source-list.md`](docs/source-list.md), [`docs/skills-catalog.md`](docs/skills-catalog.md), and [`manifests/skills-catalog.json`](manifests/skills-catalog.json).

## Repository Layout

| Path | Purpose |
| --- | --- |
| `skills/` | 466 v3 skill folders, each with `SKILL.md`. |
| `commands/` | 3 optional command routers targeting published skills. |
| [`docs/skills-catalog.md`](docs/skills-catalog.md) | Human-readable categorized skills catalog. |
| [`docs/commands-catalog.md`](docs/commands-catalog.md) | Command catalog and skill targets. |
| `docs/audit-summary.md` | Publication boundaries and inventory evidence. |
| `manifests/` | Structured inventories and source records for automation. |

## How To Use

Copy the individual folders you need from `skills/` into your runtime's skills directory. Copy files from `commands/` only when the runtime supports markdown command files.

The common contract is a folder containing `SKILL.md`. Runtime-specific loading, permissions, and behavior still depend on the selected agent. Review individual skills before production use.

## Publication Scope

The current publication is sourced from the authorized v3 source pack and v3 command collection. Unsafe cache and operating-system metadata junk identified during publication are excluded. Functional dotfiles, references, assets, and upstream metadata remain part of the published skill folders.

## License

The MIT license covers ChitoLabs packaging metadata, generated documentation, curation work, formatting changes, and repository structure. Individual skills retain their upstream licenses, notices, and terms.
