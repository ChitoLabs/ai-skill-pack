---
name: using-git-worktrees
description: "Trigger: explicitly create or inspect an isolated Git worktree when repository policy permits it. Repository rules own placement, branches, ignore changes, installs, commits, cleanup, and per-worktree CodeGraph indexing."
license: Apache-2.0
metadata:
  author: obra
  adapter: LCubero
  version: 0.2
  skills_sh_url: "https://skills.sh/obra/superpowers/using-git-worktrees"
  github_url: "https://github.com/obra/superpowers/tree/HEAD/skills/using-git-worktrees"
---

# Repository-Local Template: Git Worktrees

## Activation Contract

Use only after the user or repository policy explicitly permits creating or inspecting an isolated worktree. Read `references/source-skill.md` before action.

## Hard Rules

- Repository policy owns placement, branch naming, ignore strategy, setup, cleanup, commits, and approval gates.
- Do not edit ignore files, install dependencies, create commits, or remove worktrees implicitly.
- A CodeGraph-dependent worktree must live under the user's home, preferably under `<repo-parent>/<repo-name>-worktrees/<name>`, never in a temporary directory.
- Every CodeGraph-dependent worktree requires its own local `.codegraph/` index. Never copy, link, or reuse another checkout's index.
- Preserve the current worktree and uncommitted state.

## Decision Gates

| Condition | Action |
|---|---|
| Repository policy does not authorize a worktree | Stop with a proposal only. |
| Current tree is dirty or baseline fails | Report it before creation; do not attribute it to new work. |
| CodeGraph is required | Validate the approved home-based location and create a distinct local index. |
| Branch or cleanup policy is unclear | Ask before mutation. |

## Execution Steps

1. Resolve the repository root, current status, existing worktrees, and local policy.
2. Propose the exact parent, worktree path, and branch without creating them.
3. Obtain required approval.
4. Create only the approved worktree and CodeGraph index.
5. Run the approved baseline checks and report results without installing or committing.

## Output Contract

Return policy evidence, path, branch, baseline, CodeGraph index status, actions performed, and approvals still required.

## References

- `references/source-skill.md`
