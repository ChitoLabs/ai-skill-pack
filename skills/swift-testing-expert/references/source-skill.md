---
name: swift-testing-expert
description: "Expert guidance for Swift Testing: test structure, #expect/#require macros, traits and tags, parameterized tests, test plans, parallel execution, async waiting patterns, and XCTest migration. Use when writing new Swift tests, modernizing XCTest suites, debugging flaky tests, or improving test quality and maintainability in Apple-platform or Swift server projects."
license: Apache-2.0
metadata:
  author: avdlee
  version: 0.1
  skills_sh_url: "https://skills.sh/avdlee/swift-testing-agent-skill/swift-testing-expert"
  github_url: "https://github.com/avdlee/swift-testing-agent-skill/tree/HEAD/swift-testing-expert"
---

# Swift Testing

## Overview

Use this skill to write, review, migrate, and debug Swift tests with modern Swift Testing APIs. Prioritize readable tests, robust parallel execution, clear diagnostics, and incremental migration from XCTest where needed.

## Agent behavior contract (follow these rules)

1. Prefer Swift Testing for Swift unit and integration tests, but keep XCTest for UI automation (`XCUIApplication`), performance metrics (`XCTMetric`), and Objective-C-only test code.
2. Treat `#expect` as the default assertion and use `#require` when subsequent lines depend on a prerequisite value.
3. Default to parallel-safe guidance. If tests are not isolated, first propose fixing shared state before applying `.serialized`.
4. Prefer traits for behavior and metadata (`.enabled`, `.disabled`, `.timeLimit`, `.bug`, tags) over naming conventions or ad-hoc comments.
5. Recommend parameterized tests when multiple tests share logic and differ only in input values.
6. Use `@available` on test functions for OS-gated behavior instead of runtime `#available` checks inside test bodies; never annotate suite types with `@available`.
7. Keep migration advice incremental: convert assertions first, then organize suites, then introduce parameterization/traits.
8. Only import `Testing` in test targets, never in app/library/binary targets.

## First 60 seconds (triage template)

- Clarify the goal: new tests, migration, flaky failures, performance, CI filtering, or async waiting.
- Collect minimal facts:
  - Xcode/Swift version and platform targets
  - Whether tests currently use XCTest, Swift Testing, or both
  - Whether failures are deterministic or flaky
  - Whether tests access shared resources (database, files, network, global state)
- Branch quickly:
  - repetitive tests -> parameterized tests
  - noisy or flaky failures -> known issue handling and test isolation
  - migration questions -> XCTest mapping and coexistence strategy
  - async callback complexity -> continuation/await patterns

## Routing map (read the right reference fast)

- Test building blocks and suite organization -> `fundamentals.md`
- `#expect`, `#require`, and throw expectations -> `expectations.md`
- Traits, tags, and Xcode test-plan filtering -> `traits-and-tags.md`
- Parameterized test design and combinatorics -> `parameterized-testing.md`
- Default parallel execution, `.serialized`, isolation strategy -> `parallelization-and-isolation.md`
- Test speed, determinism, and flakiness prevention -> `performance-and-best-practices.md`
- Async waiting and callback bridging -> `async-testing-and-waiting.md`
- XCTest coexistence and migration workflow -> `migration-from-xctest.md`
- Test navigator/report workflows and diagnostics -> `xcode-workflows.md`
- Index and quick navigation -> `_index.md`

## Common pitfalls -> next best move

- Repetitive `testFooCaseA/testFooCaseB/...` methods -> replace with one parameterized `@Test(arguments:)`.
- Failing optional preconditions hidden in later assertions -> `try #require(...)` then assert on unwrapped value.
- Flaky integration tests on shared database -> isolate dependencies or in-memory repositories; use `.serialized` only as a transition step.
- Disabled tests that silently rot -> prefer `withKnownIssue` for temporary known failures to preserve signal.
- Unclear failure values for complex types -> conform type to `CustomTestStringConvertible` for focused test diagnostics.
- Test-plan include/exclude by names -> use tags and tag-based filters instead.

## Verification checklist

- Confirm each test has a single clear behavior and expressive display name when needed.
- Confirm prerequisites use `#require` where failure should stop the test.
- Confirm repeated logic is parameterized instead of duplicated.
- Confirm tests are parallel-safe or intentionally serialized with rationale.
- Confirm async code is awaited and callback APIs are bridged safely.
- Confirm migration keeps unsupported XCTest-only scenarios on XCTest.

## References

- `_index.md`
- `fundamentals.md`
- `expectations.md`
- `traits-and-tags.md`
- `parameterized-testing.md`
- `parallelization-and-isolation.md`
- `performance-and-best-practices.md`
- `async-testing-and-waiting.md`
- `migration-from-xctest.md`
- `xcode-workflows.md`
