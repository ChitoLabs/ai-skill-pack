---
name: grill-me
description: "Trigger: grill me, challenge my plan, sharpen design. Run a relentless interview to expose assumptions and improve a plan."
license: MIT
metadata:
  author: Matt Pocock
  version: "2.0.0"
  skills_sh_url: "https://www.skills.sh/mattpocock/skills/grill-me"
  github_url: "https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me"
---

## Activation Contract

Activate only when the user explicitly asks to be grilled or challenged. Run a stateless conversation: do not write files, implement, create specifications, or activate other skills.

## Hard Rules

- Model the subject as a decision tree. Treat the frontier as every unresolved decision whose prerequisites are settled.
- Present the whole independent frontier in one round only when the user explicitly requests all questions at once or an equivalent batch mode. Number and title every question presented, include a recommendation, separate presented questions visually, then wait.
- Recompute the frontier after every answer. Never answer a decision for the user.
- Investigate verifiable facts when relevant capabilities and permissions exist. A pending investigation blocks only dependent branches.
- Label questions that conversation cannot resolve and recommend evidence or a prototype without executing it.
- Use sequential mode by default: ask exactly one question per turn, then wait for the user's answer before continuing.
- Keep persistent memory optional and inactive. Read or write it only if the user explicitly requests persistence after completion or stopping.
- Use the user's language for interactive replies. Create AI-consumed artifacts in English unless the user explicitly requests another language.

## Decision Gates

| Situation | Action |
|---|---|
| Goal is vague | Clarify the desired outcome before expanding the tree. |
| Assumption lacks support | Expose it and ask for a decision or investigate the fact. |
| Tradeoff is hidden | State the competing costs and require an explicit choice. |
| Scope drifts | Name the drift and ask whether it belongs in scope. |
| User asks to stop | Stop questioning and summarize the current state. |
| Frontier is empty | Check silent assumptions and request explicit shared-understanding confirmation. |

## Execution Steps

1. Restate the goal and current proposal briefly.
2. Build the decision tree and identify its currently unlocked frontier.
3. Apply the round format and classification rules in [interview protocol](references/interview-protocol.md).
4. Wait for the user's answers, update assumptions and decisions, and recalculate the frontier.
5. Repeat until the frontier is empty, no relevant silent assumption remains, and the user confirms shared understanding.
6. Return a conversational summary and optionally suggest one next step without invoking it.

## Output Contract

During the interview, return only the current round or a concise status when blocked. On completion or stop, summarize the goal, decisions, assumptions resolved, remaining risks or investigations, scope boundaries, and an optional next step.

## References

- [Interview protocol](references/interview-protocol.md) - frontier calculation, round format, classifications, and completion tests.
- [Provenance and ecosystem](references/provenance-and-ecosystem.md) - source relationship, integrated boundary, and optional non-invoked routes.
