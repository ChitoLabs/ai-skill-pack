# AI Skill Pack

[Español](README.es.md)

**492 generic, portable adaptations of upstream skills.** Generic adaptation means a portable `SKILL.md` structure and neutral runtime instructions; tools and dependencies can still vary by skill.

Compatibility means a runtime can discover and load skills through the listed folder convention, not that every external tool or dependency is installed.

Gentle AI and repo-harness can orchestrate these skills as workflow layers, but they are not skill-loading runtimes.

## Global Installation

Recommended shared path, when supported: `~/.agents/skills/`

| Runtime | Global skill directories | Shared `~/.agents/skills/` support |
| --- | --- | :---: |
| [OpenCode](https://opencode.ai/docs/skills/) | `~/.config/opencode/skills/` | Yes |
| [Claude Code](https://code.claude.com/docs/en/skills) | `~/.claude/skills/` | No documented automatic discovery |
| [Pi](https://pi.dev/docs/latest/skills#locations) | `~/.pi/agent/skills/` | Yes |
| [Antigravity CLI (`agy`)](https://antigravity.google/docs/cli/plugins/) | `~/.gemini/antigravity-cli/skills/` | No documented global support |
| [Codex CLI](https://developers.openai.com/codex/build-skills/) | Personal: `~/.agents/skills/`<br>Installer and compatibility: `~/.codex/skills/` | Yes |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/v0.39.1/docs/cli/skills.md) | `~/.gemini/skills/` | Yes |

Use each runtime's native directory when you want an isolated installation. OpenCode, Pi, Codex CLI, and Gemini CLI discover the recommended shared path automatically. Claude Code currently documents only its native personal directory for global skills.

For Codex CLI 0.95.0+, `~/.agents/skills/` is the current documented personal path. The official `$skill-installer` currently installs to `$CODEX_HOME/skills/`, which defaults to `~/.codex/skills/`; Codex retains that path for backward compatibility.

AGY CLI documents global skills as Markdown command files. Its native directory is therefore not a guaranteed drop-in destination for every `SKILL.md` package in this repository. This path applies only to Antigravity CLI (`agy`), not to the distinct Antigravity app or IDE locations.

> **Pi users: avoid installing all 492 skills globally.** Pi automatically discovers `~/.agents/skills/` and always adds each visible skill's name, description, and `SKILL.md` location to the system prompt. Full instructions still load only on demand, but the metadata catalog creates substantial recurring context overhead. Use `pi --no-skills`, optionally with `--skill <path>` for selected skills. Alternatively, set `disable-model-invocation: true` in selected `SKILL.md` frontmatter to omit them from the model-advertised catalog while keeping them manually callable through `/skill:name` when skill commands are enabled. The value must be the YAML boolean `true`, not the quoted text `"true"`. See Pi's official [skill locations](https://pi.dev/docs/latest/skills#locations) and [frontmatter reference](https://pi.dev/docs/latest/skills#frontmatter).

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
