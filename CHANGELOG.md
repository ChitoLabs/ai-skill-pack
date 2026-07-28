# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This repository has no published version tags yet, so dated sections track meaningful repository milestones from git history.

## [Unreleased]

### Added

- Added this root changelog to make release review easier before the first tagged release.
- Added the `hallmark`, `i-have-adhd`, and `impeccable` skills from the 1402787 repository update.
- Added matching command files under `commands/` for `hallmark`, `i-have-adhd`, and `impeccable`.
- Added command catalog artifacts: `docs/commands-catalog.md` and `manifests/commands-catalog.json`.

### Changed

- Refreshed public documentation and manifests to represent 466 published skills and 3 published commands.
- Updated `manifests/skill-list-downloadURL.md` to use readable `skill-name - URL` rows for source review.

### Fixed

- Fixed raw pipe rendering in the `tailwind-v4-shadcn` entry in `docs/skills-catalog.md`.

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
