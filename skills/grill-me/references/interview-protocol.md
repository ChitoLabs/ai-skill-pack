# Interview Protocol

## Decision Tree

Represent the conversation mentally as a tree:

- A node is a user-owned decision, a verifiable fact, or an evidence question.
- An edge means the child cannot be resolved until its parent is settled.
- The frontier contains every unresolved node whose prerequisites are settled.
- Two nodes are independent when neither answer can change the valid choices or wording of the other.

Do not expose the full internal tree unless useful. Use it to prevent premature questions and silent assumptions.

## Round Construction

Ask one decision from the current frontier, then wait for the answer. When the user explicitly requests all questions at once or equivalent batch mode, ask every independent decision on the current frontier in one round using this plain portable format:

```markdown
**Q1: <Question title>**

<Precise question, context, and bounded choices when useful.>

**Recommendation:** <Recommended answer and short tradeoff rationale.>

---

**Q2: <Question title>**

<Question body.>

**Recommendation:** <Recommended answer and rationale.>
```

Wait after the round. Do not infer omitted answers. When the user answers partially, settle only supported nodes and return the recalculated frontier.

Use one-question-at-a-time mode by default. State when explicit user preference activates batch mode.

## Node Classification

### User Decisions

The user owns goals, priorities, acceptable risk, scope, product behavior, and tradeoffs. Present recommendations, but never choose silently or answer on the user's behalf.

### Verifiable Facts

The agent owns facts that can be checked from the environment, source material, or available tools. Investigate only when capabilities and permissions exist. If investigation is unavailable, identify the missing fact and ask the user for evidence or access, not for a preference disguised as fact.

An active or pending investigation remains an unsettled prerequisite. Continue asking independent frontier questions while dependent branches wait.

### Evidence Questions

Label a node `[EVIDENCE REQUIRED]` when discussion cannot establish the answer, such as usability, demand, performance, or technical feasibility. Recommend the smallest useful evidence, experiment, or prototype. Do not execute it within this skill.

## Control Checks

- Vague goal: establish the outcome and success boundary first.
- Unsupported assumption: state it explicitly and classify it as decision, fact, or evidence question.
- Hidden tradeoff: name both benefits and costs before asking for a choice.
- Scope drift: compare the new branch with the agreed goal and ask whether to include, defer, or discard it.
- Stop request: stop immediately and summarize settled and unsettled branches without pressuring continuation.

## Completion Test

Finish only when all conditions hold:

1. The frontier is empty.
2. Every relevant branch is settled, explicitly deferred, or labeled as pending evidence.
3. No material assumption remains silent.
4. The user explicitly confirms the summary reflects shared understanding.

After confirmation, provide a conversational summary and at most one optional next step. Do not implement, write a specification, create files, activate another skill, or persist memory automatically.

If the user explicitly requests persistence after completion or stopping, use persistent memory only when available and permitted. Persistence is never a prerequisite for the interview.
