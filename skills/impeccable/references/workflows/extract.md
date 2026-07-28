# Design-System Extraction Workflow

Extract reusable patterns, components, and tokens from implemented evidence. Do not create a new system silently.

## Discover

Locate the existing component library, shared UI directory, tokens, theme, exports, naming conventions, and representative consumers. If no design-system boundary exists, ask where shared UI should live before creating one.

## Identify candidates

Extract only patterns used at least three times with the same intent:

- repeated components and variants;
- semantic color, spacing, type, radius, shadow, and motion values;
- repeated composition or interaction patterns;
- inconsistent implementations of one concept.

Do not combine items that look similar but serve different jobs.

## Plan and approve

List components, tokens, APIs, variants, migration targets, files to create or modify, and files that would become dead. Get approval before broad migration or deletion.

## Implement

Load `craft-floor.md`. Build accessible shared primitives with clear types, defaults, states, examples, and naming that matches the project. Migrate consumers systematically and verify visual plus functional parity.

## Return

Report extracted items, evidence of reuse, migration coverage, verification, deliberate non-extractions, documentation updated, and any deletions still awaiting approval.
