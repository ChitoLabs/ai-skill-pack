---
name: markdown-to-html
description: "Convert Markdown files to HTML with marked.js, pandoc, gomarkdown, Jekyll, Hugo, GFM, CommonMark, code blocks, tables, math, and collapsible sections."
license: Apache-2.0
metadata:
  author: github
  version: 0.1
  skills_sh_url: "https://skills.sh/github/awesome-copilot/markdown-to-html"
  github_url: "https://github.com/github/awesome-copilot/tree/HEAD/skills/markdown-to-html"
---

## Activation Contract

Use this skill when the user request matches `markdown-to-html` or the preserved source description: Convert Markdown files to HTML similar to `marked.js`, `pandoc`, `gomarkdown/markdown`, or similar tools; or writing custom script to convert markdown to html and/or working on web template systems like `jekyll/jekyll`, `gohugoio/hugo`, or similar web templating systems that utilize markdown documents, converting them to html. Use when asked to "convert markdown to html", "transform md to html", "render markdown", "generate html from markdown", or when working with .md files and/or web a templating system that converts markdown to HTML output. Supports CLI and Node.js workflows with GFM, CommonMark, and standard Markdown flavors.

Before acting, read `references/source-skill.md` and any relevant companion files listed in References. Treat those files as the source-specific workflow and this file as the portable runtime contract.

## Hard Rules

- Preserve the source skill's domain behavior, prerequisites, warnings, and output expectations.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Use capability wording: available file editing tool, available shell/terminal tool, available browser tool, and if persistent memory is available.
- Prefer current official documentation or source retrieval when the preserved workflow says knowledge may be outdated.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.

## Decision Gates

| Condition | Action |
|---|---|
| Relevant companion file exists | Read it before implementing that part of the workflow. |
| Required tool, account, token, or runtime is unavailable | Stop and ask for the missing prerequisite or provide a manual fallback. |
| The task could modify external systems | Explain the action and wait for user approval before execution. |
| Preserved guidance conflicts with current official docs | Prefer current docs and report the discrepancy. |

## Execution Steps

1. Match the user request to the preserved source workflow in `references/source-skill.md`.
2. Inspect any local companion reference needed for the specific task.
3. Verify prerequisites, credentials, project context, and safety boundaries before tool use.
4. Execute the smallest correct workflow using the host runtime's available tools.
5. Validate the result with the checks named in the preserved source guidance or with an explicit manual verification note.

## Output Contract

Return the completed action, files or commands used, verification evidence, blockers, and any next step the user must approve. If the task is blocked, state the exact missing prerequisite or unsafe condition.

## References

- `references/source-skill.md` - preserved upstream skill body and domain workflow.
- `references/basic-markdown-to-html.md` - preserved source companion file.
- `references/basic-markdown.md` - preserved source companion file.
- `references/code-blocks-to-html.md` - preserved source companion file.
- `references/code-blocks.md` - preserved source companion file.
- `references/collapsed-sections-to-html.md` - preserved source companion file.
- `references/collapsed-sections.md` - preserved source companion file.
- `references/gomarkdown.md` - preserved source companion file.
- `references/hugo.md` - preserved source companion file.
- `references/jekyll.md` - preserved source companion file.
- `references/marked.md` - preserved source companion file.
- `references/pandoc.md` - preserved source companion file.
- `references/tables-to-html.md` - preserved source companion file.
- `references/tables.md` - preserved source companion file.
- `references/writing-mathematical-expressions-to-html.md` - preserved source companion file.
- `references/writing-mathematical-expressions.md` - preserved source companion file.
