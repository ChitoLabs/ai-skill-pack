# Test-Driven Development Workflow

Use only when the user or repository policy explicitly selects TDD outside managed SDD. Inside managed SDD, follow its TDD owner and policy.

1. Write one focused test for the next observable behavior.
2. Run it and confirm it fails for the expected missing-behavior reason.
3. Make the smallest authorized implementation change that can pass it.
4. Run the focused test and relevant suite until green.
5. Refactor without changing behavior, then rerun verification.

Never delete or overwrite existing work, create commits, install dependencies, or add parallel gates without explicit authorization. Report environment limitations as blockers.
