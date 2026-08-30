# Systematic Debugging Workflow

1. Reproduce the defect or collect direct execution evidence.
2. Trace the failing path and identify the earliest incorrect state.
3. Form one falsifiable root-cause hypothesis.
4. Run the smallest experiment that can disprove it.
5. Repeat with a new hypothesis only when evidence rejects the current one.
6. Implement the smallest authorized correction and verify the original symptom plus relevant regressions.

Use repository-selected inspection and testing capabilities. Defer systemic issue classes and managed review defects to their owners. Do not force another methodology, create commits, or transition workflows automatically.
