# AI Skill Pack

[Español](README.es.md)

**492 generic, portable adaptations of upstream skills.** Generic adaptation means a portable `SKILL.md` structure and neutral runtime instructions; tools and dependencies can still vary by skill.

Compatibility means a runtime can discover and load skills through the listed folder convention, not that every external tool or dependency is installed.

Gentle AI and repo-harness can orchestrate these skills as workflow layers, but they are not skill-loading runtimes.

## Global Installation

Recommended shared path: `~/.agents/skills/`

| Runtime | Shared path support | Runtime-specific path |
| --- | :---: | --- |
| OpenCode | Yes | Not needed |
| Pi | Yes | Not needed |
| Codex CLI | Yes | Not needed |
| Gemini CLI | Yes | Not needed |
| Claude Code | No | `~/.claude/skills/` |
| AGY CLI | No | `~/.gemini/antigravity-cli/skills/` |

## Project Installation

Recommended shared path: `.agents/skills/`

| Runtime | Shared path support | Runtime-specific path |
| --- | :---: | --- |
| OpenCode | Yes | Not needed |
| Pi | Yes | Not needed |
| Codex CLI | Yes | Not needed |
| Gemini CLI | Yes | Not needed |
| AGY CLI | Yes | Not needed |
| Claude Code | No | `.claude/skills/` |

AGY uses a runtime-specific global path, while project-local `.agents/skills/` is supported.

## Browse

| Resource | Purpose |
| --- | --- |
| [Skills catalog](docs/skills-catalog.md) | Browse by category, summary, trigger, and license. |
| [Source list](docs/source-list.md) | Check upstream author, adapter, and source. |
| [Taxonomy](skill-categories.json) | Review the versioned category mapping. |
| [Catalog overrides](catalog-overrides.json) | Review maintained summary and trigger corrections. |

## Maintainer Data

- `skill-categories.json` maintains the reviewed category assignment for every published skill.
- `catalog-overrides.json` maintains reviewed summary and trigger corrections.
- The catalog and source list are complete static public artifacts.
- Author, adapter, source, and license metadata remain separate.

## License

Review each skill's dependencies, permissions, and license before use. The MIT license covers repository packaging, documentation, curation, and adaptation work; individual skills retain their supplied licenses, notices, and terms.
