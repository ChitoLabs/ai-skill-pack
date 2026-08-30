---
name: facebook-research
description: "Trigger: facebook-research, Research public Facebook page, group, and post content using PostPlus Cloud collection service. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: postplusai
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://www.skills.sh/postplusai/postplus-skills/facebook-research"
  github_url: "https://github.com/postplusai/postplus-skills/tree/HEAD/skills/20-research/facebook-research"
---

## Activation Contract

Use this skill when the user request matches `facebook-research` or the preserved source description: Research public Facebook page, group, and post content using PostPlus Cloud collection service. Use this when the user wants Facebook public post research, public content metrics, or source-grounded summaries.

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
- `references/_postplus_shared/00-core/shared-collection/scripts/collection_actor_run.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-collection/scripts/lib/hosted_collection_bridge.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/download_videos_from_manifest_with_ytdlp.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/creative_format.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/execution_approval.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/hosted_billing_summary.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/hosted_execution_protocol.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/hosted_media_generation_bridge.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/local_skill_cli.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/network_runtime.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/postplus_cli_config.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/postplus_cloud_client.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/postplus_workspace_runtime.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/lib/skill_runtime.mjs` - preserved source companion file.
- `references/_postplus_shared/00-core/shared-runtime/scripts/postplus_workspace.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/build_collection_plan.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/collect_public_posts.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/discover_public_urls_with_mcp.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/lib/facebook_urls.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/lib/public_content_common.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/normalize_public_posts.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/parse_collection_brief.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/poll_public_content_collection.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/render_collection_summary.mjs` - preserved source companion file.
- `references/internal/public-content/scripts/run_public_content_collection.mjs` - preserved source companion file.
- `references/normalized-schema.md` - preserved source companion file.
- `scripts/poll_facebook_post_collection.mjs` - preserved source companion file.
- `scripts/run_facebook_post_collection.mjs` - preserved source companion file.
