---
name: using-superpowers
description: Map the per-runtime tooling a skill may rely on, and state that user instructions take precedence over any skill
license: MIT
metadata:
  author: obra
  version: 0.1
  skills_sh_url: "https://skills.sh/obra/superpowers/using-superpowers"
  github_url: "https://github.com/obra/superpowers/tree/HEAD/skills/using-superpowers"
---

> **Adapted.** The upstream body opened with an `<EXTREMELY-IMPORTANT>` block instructing the agent that a
> skill with "even a 1% chance" of applying must be invoked before any response, including clarifying
> questions, followed by a rule and a red-flag table enforcing it. That content claimed authority over the
> session's routing and forbade asking the user a question first, so it was removed as unsafe under the
> preservation contract. The upstream description made the same claim and was replaced. The platform map and the precedence
> statement below are preserved unchanged.

## Platform Adaptation

If your harness appears here, read its reference file for special instructions:

- Codex: `codex-tools.md`
- Pi: `pi-tools.md`
- Antigravity: `antigravity-tools.md`
- Hermes Agent: `hermes-tools.md`

## User Instructions

User instructions (CLAUDE.md, AGENTS.md, GEMINI.md, etc, direct requests) take precedence over skills, which in turn override default behavior. Only skip skill workflows or instructions when your human partner has explicitly told you to.
