# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This repository has no published version tags yet, so dated sections track meaningful repository milestones from git history.

## [2026-08-30]

### Added

- Added complete static catalog and source-list artifacts for the 492 top-level skill entry points.
- Added a versioned semantic taxonomy that assigns every published skill to one human-oriented discovery category.
- Added a complete Spanish README alongside the English README.

### Changed

- Replaced the published skill inventory with the authorized 466-skill v3 source pack.
- Replaced the command inventory with the 3-command v3 collection.
- Refreshed publication documentation from the final v3 state.
- Expanded the published inventory to 492 top-level skills.
- Redesigned the 492-skill catalog around 15 semantic categories with concise capability summaries, evidence-backed aliases, and licenses.
- Added concise global and project installation tables for OpenCode, Pi, Codex CLI, Gemini CLI, Claude Code, and AGY CLI.
- Rebuilt the current static catalogs from skill metadata, reviewed taxonomy assignments, and reviewed summary and trigger corrections.
- Preserved supplied `metadata.author` values without inferring authorship from publishers, distributors, curators, adapters, source URLs, or repository owners.
- Removed the misleading cloned-repository copy example from the README installation guidance.

### Removed

- Removed the command publication layer and obsolete command-only artifacts.
- Removed temporary replacement handoff documentation and stale process-specific manifests.
- Removed the `grill-me` command while retaining the `grill-me` skill.
- Excluded identified compiled cache and operating-system metadata junk from publication.
- Removed internal generation scripts and machine manifests from the published repository while retaining their history in Git.

## [2026-08-21]

### Added

- Added the `grill-me` command for explicit activation of the matching challenge interview skill.

### Changed

- Upgraded `grill-me` to the self-contained 2.0.0 decision-tree interview workflow, adding local interview protocol and provenance references.
- Refreshed command documentation and manifests to represent 4 published commands.

### Fixed

- Fixed a contradictory published command count in this changelog.

## [2026-08-20]

### Fixed

- Preserved upstream authorship and official source links across the published skill pack. Each skill now records its original author instead of the adapter, and authorship that could not be confirmed from an authoritative source is recorded as `unknown`.

## [2026-07-27]

### Added

- Added the `hallmark`, `i-have-adhd`, and `impeccable` design workflow skills.
- Added matching command files under `commands/` for `hallmark`, `i-have-adhd`, and `impeccable`.
- Added command catalog artifacts: `docs/commands-catalog.md` and `manifests/commands-catalog.json`.

### Changed

- Refreshed public documentation and manifests to represent 466 published skills.
- Updated `manifests/skill-list-downloadURL.md` to use readable `skill-name - URL` rows for source review.

### Fixed

- Fixed raw pipe rendering in the `tailwind-v4-shadcn` entry in `docs/skills-catalog.md`.

## [2026-07-14]

### Added

- Added this root changelog to make release review easier before the first tagged release.

## [2026-07-13]

### Added

- Added 9 missing skill pack entries from the curated source pack:
  - `ask-matt`
  - `baoyu-infographic`
  - `canvas-design`
  - `find-skills`
  - `grill-me`
  - `handoff`
  - `infographic`
  - `research`
  - `teach`
- Added supporting references and assets required by the new skills, including infographic templates and canvas design fonts.

### Changed

- Refreshed the public skill pack count to 463 skills across README, audit notes, catalog documentation, and automation manifests.
- Updated `docs/skills-catalog.md`, `docs/source-list.md`, `manifests/skills-catalog.json`, `manifests/post-sanitize-inventory.json`, and `manifests/skill-sanitize-upgrade-manifest.json` to reflect the 463-skill inventory.

## [2026-05-21]

### Added

- Added a categorized skills catalog for reviewer-friendly browsing of the published skill pack.
- Added upstream attribution documentation so each skill remains traceable to its original source when source information is available.

## [2026-05-20]

### Added

- Published the initial curated AI skill pack repository.
- Added the first public README describing the pack purpose, usage model, repository layout, compatibility notes, and licensing boundaries.

### Infrastructure

- Added Engram project configuration for project-specific memory and workflow context.
