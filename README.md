# AI Skill Pack

**492 generic, portable adaptations of upstream skills.** Generic adaptation means a portable `SKILL.md` structure and neutral runtime instructions; tools and dependencies can still vary by skill.

Compatibility means a runtime can discover and load skills through the listed folder convention, not that every external tool or dependency is installed.

Gentle AI and repo-harness can orchestrate these skills as workflow layers, but they are not skill-loading runtimes.

## Install One Skill

```sh
# From the root of a cloned repository:
mkdir -p ~/.agents/skills
cp -R skills/systematic-debugging ~/.agents/skills/
```

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
| [Machine catalog](manifests/skills-catalog.json) | Consume structured skill metadata. |

## Publication Contract

- Publication uses three inputs: `skills/*/SKILL.md` for skill metadata and content, `skill-categories.json` for category assignments, and `catalog-overrides.json` for reviewed summary and trigger corrections.
- Generated documentation and manifests are deterministic views.
- Author, adapter, source, and license metadata remain separate.

## License

Review each skill's dependencies, permissions, and license before use. The MIT license covers repository packaging, generated documentation, curation, and adaptation work; individual skills retain their supplied licenses, notices, and terms.
