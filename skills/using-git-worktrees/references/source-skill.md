# Repository-Local Worktree Utility

Inspect existing worktrees and repository state before proposing isolation. Repository policy owns whether a worktree is created, its parent path, branch, ignore strategy, setup, cleanup, and approval gates.

Do not edit ignore files, install dependencies, commit, or choose a global destination implicitly. When CodeGraph is required, use an approved path under the user's home and initialize a distinct index inside the new checkout. Never copy, link, or reuse another checkout's index.

Report the selected path, branch, baseline results, and every action requiring approval.
