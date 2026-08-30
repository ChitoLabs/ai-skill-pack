# Plan Review Prompt

Review the supplied plan against repository policy and its canonical inputs.

Check:

- every requirement maps to an observable step or acceptance criterion;
- affected paths, verification, expected results, risks, and rollback are explicit;
- no parallel source of truth, automatic phase, commit policy, or unauthorized handoff was introduced;
- unresolved conflicts and missing evidence are visible.

Return evidence-backed issues and advisory recommendations. Do not approve delivery, modify files, or advance implementation.
