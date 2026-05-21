# AI Skill Pack

A curated AI skills pack by ChitoLabs for agents that understand folder-based skills with a `SKILL.md` entry point.

This publication staging folder contains the general pack only: **454 skills** copied from the audited general candidate root. The separate Microsoft Fabric candidate pack is excluded by design.

## What's Included

| Area | Value |
| --- | --- |
| Published folder | `github/` |
| Skills folder | `github/skills/` |
| Skill count | 454 |
| Required entry point | `SKILL.md` in every skill folder |
| Excluded | Separate Microsoft Fabric candidate root, temp files, memory backups, duplicate quarantine, legacy found folders, internal audit scripts, internal reports |

## How To Use

Copy the individual folders you want from `skills/` into the skills directory used by your agent runtime.

These skills are organized for OpenCode/Pi/Claude-style skill systems that discover a folder containing `SKILL.md`. This repository does not claim automatic install support across all agents. Check your agent's documentation for the exact destination path and reload behavior.

## Important Scope Notes

The published pack is assembled from the final curated general candidate folders, not from raw downloads. Historical records may mention renamed, mapped, duplicate, dropped, or separated entries. The publication artifacts prefer the final folder state.

The separate Microsoft Fabric candidate root is not included. The general pack is copied as audited, so use `docs/skills-catalog.md` and `manifests/` when reviewing exact contents.

## License

This staging repo uses the MIT license for ChitoLabs packaging metadata and generated documentation. Individual skills may originate from upstream sources. Review upstream licenses and terms where applicable before redistribution or production use.
