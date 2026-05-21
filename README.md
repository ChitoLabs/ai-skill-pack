# AI Skill Pack

Portable, reviewed AI skills by ChitoLabs for agents that understand folder-based skills with a `SKILL.md` entry point.

This repository publishes the curated general pack: **454 skills** reviewed, adapted, formatted, and prepared for use across multiple AI coding-agent environments.

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
| `docs/skills-catalog.md` | Human-readable catalog of the published skills. |
| `docs/audit-summary.md` | Summary of the verified source state and publication boundaries. |
| `docs/what-was-done.md` | Short operational summary of the packaging work. |
| `manifests/` | Generated lists for review, source tracing, and automation. |

## How To Use

Copy the individual folders you want from `skills/` into the skills directory used by your agent runtime.

These skills are organized for OpenCode, Pi, Claude-style skill systems, and other agents that discover a folder containing `SKILL.md`. This repository does not claim automatic install support across every tool. Check your agent's documentation for the exact destination path and reload behavior.

## Compatibility Notes

- The common contract is a skill folder with a `SKILL.md` entry point.
- Runtime-specific behavior still depends on the agent that loads the skill.
- Engram and Gentle-AI support is workflow-oriented: the pack is prepared to coexist with memory, orchestration, and skill-resolution conventions, but individual skills should still be reviewed before production use.

## Important Scope Notes

The published pack is assembled from the final curated general candidate folders, not from raw downloads. Historical records may mention renamed, mapped, duplicate, dropped, or separated entries. The publication artifacts prefer the final folder state.

The separate Microsoft Fabric candidate root is not included. The general pack is copied as audited, so use `docs/skills-catalog.md` and `manifests/` when reviewing exact contents.

## License

This staging repo uses the MIT license for ChitoLabs packaging metadata and generated documentation. Individual skills may originate from upstream sources. Review upstream licenses and terms where applicable before redistribution or production use.
