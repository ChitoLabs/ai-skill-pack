---
name: csharp-nunit
description: "Trigger: write or review NUnit unit tests or data-driven tests. Apply current NUnit practices to a defined test task."
license: Apache-2.0
metadata:
  author: github
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/github/awesome-copilot/csharp-nunit"
  github_url: "https://github.com/github/awesome-copilot/tree/HEAD/skills/csharp-nunit"
---

# NUnit Best Practices

Your goal is to help me write effective unit tests with NUnit, covering both standard and data-driven testing approaches.

## Activation Contract

Use this skill when the user request matches `csharp-nunit` or one of its declared triggers: write or review NUnit unit tests or data-driven tests. Apply current NUnit practices to a defined test task.

Read the sections below before acting. This file is the portable runtime contract; the sections that follow carry the source-specific workflow.

## Hard Rules

- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.

## Project Setup

- Use a separate test project with naming convention `[ProjectName].Tests`
- Reference Microsoft.NET.Test.Sdk, NUnit, and NUnit3TestAdapter packages
- Create test classes that match the classes being tested (e.g., `CalculatorTests` for `Calculator`)
- Use .NET SDK test commands: `dotnet test` for running tests

## Test Structure

- Apply `[TestFixture]` attribute to test classes
- Use `[Test]` attribute for test methods
- Follow the Arrange-Act-Assert (AAA) pattern
- Name tests using the pattern `MethodName_Scenario_ExpectedBehavior`
- Use `[SetUp]` and `[TearDown]` for per-test setup and teardown
- Use `[OneTimeSetUp]` and `[OneTimeTearDown]` for per-class setup and teardown
- Use `[SetUpFixture]` for assembly-level setup and teardown

## Standard Tests

- Keep tests focused on a single behavior
- Avoid testing multiple behaviors in one test method
- Use clear assertions that express intent
- Include only the assertions needed to verify the test case
- Make tests independent and idempotent (can run in any order)
- Avoid test interdependencies

## Data-Driven Tests

- Use `[TestCase]` for inline test data
- Use `[TestCaseSource]` for programmatically generated test data
- Use `[Values]` for simple parameter combinations
- Use `[ValueSource]` for property or method-based data sources
- Use `[Random]` for random numeric test values
- Use `[Range]` for sequential numeric test values
- Use `[Combinatorial]` or `[Pairwise]` for combining multiple parameters

## Assertions

- Use `Assert.That` with constraint model (preferred NUnit style)
- Use constraints like `Is.EqualTo`, `Is.SameAs`, `Contains.Item`
- Use `Assert.AreEqual` for simple value equality (classic style)
- Use `CollectionAssert` for collection comparisons
- Use `StringAssert` for string-specific assertions
- Use `Assert.Throws<T>` or `Assert.ThrowsAsync<T>` to test exceptions
- Use descriptive messages in assertions for clarity on failure

## Mocking and Isolation

- Consider using Moq or NSubstitute alongside NUnit
- Mock dependencies to isolate units under test
- Use interfaces to facilitate mocking
- Consider using a DI container for complex test setups

## Test Organization

- Group tests by feature or component
- Use categories with `[Category("CategoryName")]`
- Use `[Order]` to control test execution order when necessary
- Use `[Author("DeveloperName")]` to indicate ownership
- Use `[Description]` to provide additional test information
- Consider `[Explicit]` for tests that shouldn't run automatically
- Use `[Ignore("Reason")]` to temporarily skip tests
