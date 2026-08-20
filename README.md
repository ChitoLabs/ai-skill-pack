# AI Skill Pack

Portable, reviewed AI skills collected and adapted by ChitoLabs for agents that understand folder-based skills with a `SKILL.md` entry point.

This repository publishes the curated general pack: **466 skills** reviewed, adapted, formatted, and prepared for use across multiple AI coding-agent environments.

## Attribution Notice

This repository is a curated compilation and adaptation of skills from their original authors and upstream sources. ChitoLabs did not author the individual skills unless explicitly stated inside a skill folder.

The work in this repository focuses on packaging and stewardship:

- collecting the skills into a consistent folder-based format;
- adapting wording and structure so the skills are more generic across agent runtimes;
- formatting and organizing references for easier review;
- checking publication boundaries, duplicates, and security-sensitive content;
- preserving links back to the original sources and authors wherever available.

Credit for each individual skill belongs to its original author or upstream project. Source links are preserved in [`docs/source-list.md`](docs/source-list.md), [`docs/skills-catalog.md`](docs/skills-catalog.md), and [`manifests/skills-catalog.json`](manifests/skills-catalog.json). Command routing files are listed in [`docs/commands-catalog.md`](docs/commands-catalog.md) and [`manifests/commands-catalog.json`](manifests/commands-catalog.json).

### Metadata Convention

- Preserve the official upstream author or publisher in `metadata.author`.
- Never identify the adapter or pack maintainer as the original author.
- Use `unknown` when authoritative upstream metadata does not establish an author.
- Include an official upstream source link when one is available and verified.

## What Was Done

- Reviewed the skill pack and kept the final general-purpose skills only.
- Adapted skill structure and wording so the pack is not tied to a single assistant runtime.
- Adjusted references, source notes, and supporting files so each skill is easier to inspect and reuse.
- Normalized formatting and style according to the Gentleman / Gentle AI documentation approach.
- Prepared the skills to work with folder-based systems such as Pi, OpenCode, Claude-style skills, and similar runtimes.
- Preserved compatibility with Engram and Gentle-AI workflows where memory, orchestration, and skill resolution are used together.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `skills/` | Final curated skill folders. Each skill has a `SKILL.md` entry point. |
| `commands/` | Optional command markdown files that route to matching skills. |
| [`docs/skills-catalog.md`](docs/skills-catalog.md) | GitHub-ready catalog of all 466 published skills, grouped by category with intended use and source links. |
| [`docs/commands-catalog.md`](docs/commands-catalog.md) | Catalog of all 3 published command files and the skills they load. |
| `docs/audit-summary.md` | Summary of the verified source state and publication boundaries. |
| `docs/what-was-done.md` | Short operational summary of the packaging work. |
| [`manifests/skills-catalog.json`](manifests/skills-catalog.json) | Structured catalog for automation, including skill name, path, category, intended use, and source URL. |
| [`manifests/commands-catalog.json`](manifests/commands-catalog.json) | Structured catalog for automation, including command name, path, loaded skill, and description. |
| `manifests/` | Generated lists for review, source tracing, and automation. |

## Skills Catalog

Use [`docs/skills-catalog.md`](docs/skills-catalog.md) to browse the pack by practical category before copying skills into your agent runtime. The catalog includes every published skill and answers three review questions:

- **What is this skill for?** Each entry summarizes the intended use from its `SKILL.md`.
- **Where did it come from?** Each entry links back to its source URL.
- **How is it grouped?** Skills are organized into categories such as AI/LLM, Backend & APIs, Cloud & DevOps, Design & Frontend, Mobile, Security & Auth, Testing & QA, and Workflow & Automation.

For tooling, use [`manifests/skills-catalog.json`](manifests/skills-catalog.json), which contains the same reviewed catalog as structured data.

## Commands Catalog

Use [`docs/commands-catalog.md`](docs/commands-catalog.md) to review the 3 optional command files. For tooling, use [`manifests/commands-catalog.json`](manifests/commands-catalog.json).

## How To Use

Copy the individual folders you want from `skills/` into the skills directory used by your agent runtime. Copy matching files from `commands/` only when your runtime supports markdown command files.

These skills are organized for OpenCode, Pi, Claude-style skill systems, and other agents that discover a folder containing `SKILL.md`. This repository does not claim automatic install support across every tool. Check your agent's documentation for the exact destination path and reload behavior.

## Compatibility Notes

- The common contract is a skill folder with a `SKILL.md` entry point.
- Runtime-specific behavior still depends on the agent that loads the skill.
- Engram and Gentle-AI support is workflow-oriented: the pack is prepared to coexist with memory, orchestration, and skill-resolution conventions, but individual skills should still be reviewed before production use.

## Important Scope Notes

The published pack is assembled from the final curated general candidate folders, not from raw downloads. Historical records may mention renamed, mapped, duplicate, dropped, or separated entries. The publication artifacts prefer the final folder state.

The separate Microsoft Fabric candidate root is not included. The general pack is copied as audited, so use `docs/skills-catalog.md` and `manifests/` when reviewing exact contents.

## License

This staging repo uses the MIT license for ChitoLabs packaging metadata, generated documentation, curation work, formatting changes, and repository structure.

Individual skills remain credited to their original authors and may carry their own upstream licenses, notices, or terms. Review the linked upstream sources before redistribution or production use.
