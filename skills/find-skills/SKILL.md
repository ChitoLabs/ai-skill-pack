---
name: find-skills
description: "Trigger: find skills, skill discovery, installable agent capabilities. Discover and evaluate skills before recommending install commands."
license: MIT
metadata:
  author: vercel-labs
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: "https://www.skills.sh/vercel-labs/skills/find-skills"
  github_url: "https://github.com/vercel-labs/skills/tree/main/skills/find-skills"
---

## Activation Contract

Use when the user asks how to do a specialized task, whether a skill exists, or wants help finding installable agent capabilities.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Do not install skills, change global skill folders, or run package-manager install commands without explicit user approval.
- Verify quality before recommending a skill. Do not trust search results alone.
- Prefer primary sources: skills.sh listing, upstream repository, install count, source reputation, and current skill content.
- Present practical options with exact provenance and clear caveats.

## Decision Gates

| Situation | Action |
|---|---|
| User asks for a capability | Search skills.sh or available skill indexes first. |
| Candidate source is unknown or low quality | Warn and suggest safer alternatives. |
| User asks to install | Ask for approval before any install or global change. |
| No suitable skill exists | Say so and offer to help directly. |

## Execution Steps

1. Clarify the task domain and the concrete capability needed.
2. Search the available skill marketplace or local registry for matching skills.
3. Inspect each candidate for install count, upstream owner, repository health, and instructions.
4. Recommend the strongest match, including skill name, source, why it fits, and install command as text only.
5. If the user approves installation, follow the host runtime's approval and safety model.

## Output Contract

Return the recommended skill, source URL, confidence, install command as text, and any safety or quality caveats.

## References

- No local references.
