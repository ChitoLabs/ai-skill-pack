---
name: cloudflare
description: "Trigger: cloudflare. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: cloudflare
  adapter: LCubero
  version: 0.1
  github_url: "https://github.com/cloudflare/skills/tree/HEAD/skills/cloudflare"
---

## Activation Contract

Use this skill when the user request matches `cloudflare` or the preserved source description: Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags (Flagship), networking (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code (Terraform, Pulumi). Use for any Cloudflare development task. Biases towards retrieval from Cloudflare docs over pre-trained knowledge.

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
- `references/agents-sdk/README.md` - preserved source companion file.
- `references/agents-sdk/api.md` - preserved source companion file.
- `references/agents-sdk/configuration.md` - preserved source companion file.
- `references/agents-sdk/gotchas.md` - preserved source companion file.
- `references/agents-sdk/patterns.md` - preserved source companion file.
- `references/ai-gateway/README.md` - preserved source companion file.
- `references/ai-gateway/configuration.md` - preserved source companion file.
- `references/ai-gateway/dynamic-routing.md` - preserved source companion file.
- `references/ai-gateway/features.md` - preserved source companion file.
- `references/ai-gateway/sdk-integration.md` - preserved source companion file.
- `references/ai-gateway/troubleshooting.md` - preserved source companion file.
- `references/ai-search/README.md` - preserved source companion file.
- `references/ai-search/api.md` - preserved source companion file.
- `references/ai-search/configuration.md` - preserved source companion file.
- `references/ai-search/gotchas.md` - preserved source companion file.
- `references/ai-search/patterns.md` - preserved source companion file.
- `references/analytics-engine/README.md` - preserved source companion file.
- `references/analytics-engine/api.md` - preserved source companion file.
- `references/analytics-engine/configuration.md` - preserved source companion file.
- `references/analytics-engine/gotchas.md` - preserved source companion file.
- `references/analytics-engine/patterns.md` - preserved source companion file.
- `references/api/README.md` - preserved source companion file.
- `references/api/api.md` - preserved source companion file.
- `references/api/configuration.md` - preserved source companion file.
- `references/api/gotchas.md` - preserved source companion file.
- `references/api/patterns.md` - preserved source companion file.
- `references/api-shield/README.md` - preserved source companion file.
- `references/api-shield/api.md` - preserved source companion file.
- `references/api-shield/configuration.md` - preserved source companion file.
- `references/api-shield/gotchas.md` - preserved source companion file.
- `references/api-shield/patterns.md` - preserved source companion file.
- `references/argo-smart-routing/README.md` - preserved source companion file.
- `references/argo-smart-routing/api.md` - preserved source companion file.
- `references/argo-smart-routing/configuration.md` - preserved source companion file.
- `references/argo-smart-routing/gotchas.md` - preserved source companion file.
- `references/argo-smart-routing/patterns.md` - preserved source companion file.
- `references/artifacts/README.md` - preserved source companion file.
- `references/artifacts/api.md` - preserved source companion file.
- `references/artifacts/configuration.md` - preserved source companion file.
- `references/bindings/README.md` - preserved source companion file.
- `references/bindings/api.md` - preserved source companion file.
- `references/bindings/configuration.md` - preserved source companion file.
- `references/bindings/gotchas.md` - preserved source companion file.
- `references/bindings/patterns.md` - preserved source companion file.
- `references/bot-management/README.md` - preserved source companion file.
- `references/bot-management/api.md` - preserved source companion file.
- `references/bot-management/configuration.md` - preserved source companion file.
- `references/bot-management/gotchas.md` - preserved source companion file.
- `references/bot-management/patterns.md` - preserved source companion file.
- `references/browser-rendering/README.md` - preserved source companion file.
- `references/browser-rendering/api.md` - preserved source companion file.
- `references/browser-rendering/configuration.md` - preserved source companion file.
- `references/browser-rendering/gotchas.md` - preserved source companion file.
- `references/browser-rendering/patterns.md` - preserved source companion file.
- `references/c3/README.md` - preserved source companion file.
- `references/c3/api.md` - preserved source companion file.
- `references/c3/configuration.md` - preserved source companion file.
- `references/c3/gotchas.md` - preserved source companion file.
- `references/c3/patterns.md` - preserved source companion file.
- `references/cache-reserve/README.md` - preserved source companion file.
- `references/cache-reserve/api.md` - preserved source companion file.
- `references/cache-reserve/configuration.md` - preserved source companion file.
- `references/cache-reserve/gotchas.md` - preserved source companion file.
- `references/cache-reserve/patterns.md` - preserved source companion file.
- `references/containers/README.md` - preserved source companion file.
- `references/containers/api.md` - preserved source companion file.
- `references/containers/configuration.md` - preserved source companion file.
- `references/containers/gotchas.md` - preserved source companion file.
- `references/containers/patterns.md` - preserved source companion file.
- `references/cron-triggers/README.md` - preserved source companion file.
- `references/cron-triggers/api.md` - preserved source companion file.
- `references/cron-triggers/configuration.md` - preserved source companion file.
- `references/cron-triggers/gotchas.md` - preserved source companion file.
- `references/cron-triggers/patterns.md` - preserved source companion file.
- `references/d1/README.md` - preserved source companion file.
- `references/d1/api.md` - preserved source companion file.
- `references/d1/configuration.md` - preserved source companion file.
- `references/d1/gotchas.md` - preserved source companion file.
- `references/d1/patterns.md` - preserved source companion file.
- `references/ddos/README.md` - preserved source companion file.
- `references/ddos/api.md` - preserved source companion file.
- `references/ddos/configuration.md` - preserved source companion file.
- `references/ddos/gotchas.md` - preserved source companion file.
- `references/ddos/patterns.md` - preserved source companion file.
- `references/do-storage/README.md` - preserved source companion file.
- `references/do-storage/api.md` - preserved source companion file.
- `references/do-storage/configuration.md` - preserved source companion file.
- `references/do-storage/gotchas.md` - preserved source companion file.
- `references/do-storage/patterns.md` - preserved source companion file.
- `references/do-storage/testing.md` - preserved source companion file.
- `references/durable-objects/README.md` - preserved source companion file.
- `references/durable-objects/api.md` - preserved source companion file.
- `references/durable-objects/configuration.md` - preserved source companion file.
- `references/durable-objects/gotchas.md` - preserved source companion file.
- `references/durable-objects/patterns.md` - preserved source companion file.
- `references/email-routing/README.md` - preserved source companion file.
- `references/email-routing/api.md` - preserved source companion file.
- `references/email-routing/configuration.md` - preserved source companion file.
- `references/email-routing/gotchas.md` - preserved source companion file.
- `references/email-routing/patterns.md` - preserved source companion file.
- `references/email-workers/README.md` - preserved source companion file.
- `references/email-workers/api.md` - preserved source companion file.
- `references/email-workers/configuration.md` - preserved source companion file.
- `references/email-workers/gotchas.md` - preserved source companion file.
- `references/email-workers/patterns.md` - preserved source companion file.
- `references/flagship/README.md` - preserved source companion file.
- `references/flagship/api.md` - preserved source companion file.
- `references/flagship/configuration.md` - preserved source companion file.
- `references/flagship/gotchas.md` - preserved source companion file.
- `references/flagship/patterns.md` - preserved source companion file.
- `references/graphql-api/README.md` - preserved source companion file.
- `references/graphql-api/api.md` - preserved source companion file.
- `references/graphql-api/configuration.md` - preserved source companion file.
- `references/graphql-api/gotchas.md` - preserved source companion file.
- `references/graphql-api/patterns.md` - preserved source companion file.
- `references/hyperdrive/README.md` - preserved source companion file.
- `references/hyperdrive/api.md` - preserved source companion file.
- `references/hyperdrive/configuration.md` - preserved source companion file.
- `references/hyperdrive/gotchas.md` - preserved source companion file.
- `references/hyperdrive/patterns.md` - preserved source companion file.
- `references/images/README.md` - preserved source companion file.
- `references/images/api.md` - preserved source companion file.
- `references/images/configuration.md` - preserved source companion file.
- `references/images/gotchas.md` - preserved source companion file.
- `references/images/patterns.md` - preserved source companion file.
- `references/kv/README.md` - preserved source companion file.
- `references/kv/api.md` - preserved source companion file.
- `references/kv/configuration.md` - preserved source companion file.
- `references/kv/gotchas.md` - preserved source companion file.
- `references/kv/patterns.md` - preserved source companion file.
- `references/miniflare/README.md` - preserved source companion file.
- `references/miniflare/api.md` - preserved source companion file.
- `references/miniflare/configuration.md` - preserved source companion file.
- `references/miniflare/gotchas.md` - preserved source companion file.
- `references/miniflare/patterns.md` - preserved source companion file.
- `references/network-interconnect/README.md` - preserved source companion file.
- `references/network-interconnect/api.md` - preserved source companion file.
- `references/network-interconnect/configuration.md` - preserved source companion file.
- `references/network-interconnect/gotchas.md` - preserved source companion file.
- `references/network-interconnect/patterns.md` - preserved source companion file.
- `references/observability/README.md` - preserved source companion file.
- `references/observability/api.md` - preserved source companion file.
- `references/observability/configuration.md` - preserved source companion file.
- `references/observability/gotchas.md` - preserved source companion file.
- `references/observability/patterns.md` - preserved source companion file.
- `references/pages/README.md` - preserved source companion file.
- `references/pages/api.md` - preserved source companion file.
- `references/pages/configuration.md` - preserved source companion file.
- `references/pages/gotchas.md` - preserved source companion file.
- `references/pages/patterns.md` - preserved source companion file.
- `references/pages-functions/README.md` - preserved source companion file.
- `references/pages-functions/api.md` - preserved source companion file.
- `references/pages-functions/configuration.md` - preserved source companion file.
- `references/pages-functions/gotchas.md` - preserved source companion file.
- `references/pages-functions/patterns.md` - preserved source companion file.
- `references/pipelines/README.md` - preserved source companion file.
- `references/pipelines/api.md` - preserved source companion file.
- `references/pipelines/configuration.md` - preserved source companion file.
- `references/pipelines/gotchas.md` - preserved source companion file.
- `references/pipelines/patterns.md` - preserved source companion file.
- `references/pulumi/README.md` - preserved source companion file.
- `references/pulumi/api.md` - preserved source companion file.
- `references/pulumi/configuration.md` - preserved source companion file.
- `references/pulumi/gotchas.md` - preserved source companion file.
- `references/pulumi/patterns.md` - preserved source companion file.
- `references/queues/README.md` - preserved source companion file.
- `references/queues/api.md` - preserved source companion file.
- `references/queues/configuration.md` - preserved source companion file.
- `references/queues/gotchas.md` - preserved source companion file.
- `references/queues/patterns.md` - preserved source companion file.
- `references/r2/README.md` - preserved source companion file.
- `references/r2/api.md` - preserved source companion file.
- `references/r2/configuration.md` - preserved source companion file.
- `references/r2/gotchas.md` - preserved source companion file.
- `references/r2/patterns.md` - preserved source companion file.
- `references/r2-data-catalog/README.md` - preserved source companion file.
- `references/r2-data-catalog/api.md` - preserved source companion file.
- `references/r2-data-catalog/configuration.md` - preserved source companion file.
- `references/r2-data-catalog/gotchas.md` - preserved source companion file.
- `references/r2-data-catalog/patterns.md` - preserved source companion file.
- `references/r2-sql/README.md` - preserved source companion file.
- `references/r2-sql/SKILL.md.backup` - preserved source companion file.
- `references/r2-sql/api.md` - preserved source companion file.
- `references/r2-sql/configuration.md` - preserved source companion file.
- `references/r2-sql/gotchas.md` - preserved source companion file.
- `references/r2-sql/patterns.md` - preserved source companion file.
- `references/realtime-sfu/README.md` - preserved source companion file.
- `references/realtime-sfu/api.md` - preserved source companion file.
- `references/realtime-sfu/configuration.md` - preserved source companion file.
- `references/realtime-sfu/gotchas.md` - preserved source companion file.
- `references/realtime-sfu/patterns.md` - preserved source companion file.
- `references/realtimekit/README.md` - preserved source companion file.
- `references/realtimekit/api.md` - preserved source companion file.
- `references/realtimekit/configuration.md` - preserved source companion file.
- `references/realtimekit/gotchas.md` - preserved source companion file.
- `references/realtimekit/patterns.md` - preserved source companion file.
- `references/sandbox/README.md` - preserved source companion file.
- `references/sandbox/api.md` - preserved source companion file.
- `references/sandbox/configuration.md` - preserved source companion file.
- `references/sandbox/gotchas.md` - preserved source companion file.
- `references/sandbox/patterns.md` - preserved source companion file.
- `references/secrets-store/README.md` - preserved source companion file.
- `references/secrets-store/api.md` - preserved source companion file.
- `references/secrets-store/configuration.md` - preserved source companion file.
- `references/secrets-store/gotchas.md` - preserved source companion file.
- `references/secrets-store/patterns.md` - preserved source companion file.
- `references/smart-placement/README.md` - preserved source companion file.
- `references/smart-placement/api.md` - preserved source companion file.
- `references/smart-placement/configuration.md` - preserved source companion file.
- `references/smart-placement/gotchas.md` - preserved source companion file.
- `references/smart-placement/patterns.md` - preserved source companion file.
- `references/snippets/README.md` - preserved source companion file.
- `references/snippets/api.md` - preserved source companion file.
- `references/snippets/configuration.md` - preserved source companion file.
- `references/snippets/gotchas.md` - preserved source companion file.
- `references/snippets/patterns.md` - preserved source companion file.
- `references/spectrum/README.md` - preserved source companion file.
- `references/spectrum/api.md` - preserved source companion file.
- `references/spectrum/configuration.md` - preserved source companion file.
- `references/spectrum/gotchas.md` - preserved source companion file.
- `references/spectrum/patterns.md` - preserved source companion file.
- `references/static-assets/README.md` - preserved source companion file.
- `references/static-assets/api.md` - preserved source companion file.
- `references/static-assets/configuration.md` - preserved source companion file.
- `references/static-assets/gotchas.md` - preserved source companion file.
- `references/static-assets/patterns.md` - preserved source companion file.
- `references/stream/README.md` - preserved source companion file.
- `references/stream/api-live.md` - preserved source companion file.
- `references/stream/api.md` - preserved source companion file.
- `references/stream/configuration.md` - preserved source companion file.
- `references/stream/gotchas.md` - preserved source companion file.
- `references/stream/patterns.md` - preserved source companion file.
- `references/tail-workers/README.md` - preserved source companion file.
- `references/tail-workers/api.md` - preserved source companion file.
- `references/tail-workers/configuration.md` - preserved source companion file.
- `references/tail-workers/gotchas.md` - preserved source companion file.
- `references/tail-workers/patterns.md` - preserved source companion file.
- `references/terraform/README.md` - preserved source companion file.
- `references/terraform/api.md` - preserved source companion file.
- `references/terraform/configuration.md` - preserved source companion file.
- `references/terraform/gotchas.md` - preserved source companion file.
- `references/terraform/patterns.md` - preserved source companion file.
- `references/tunnel/README.md` - preserved source companion file.
- `references/tunnel/api.md` - preserved source companion file.
- `references/tunnel/configuration.md` - preserved source companion file.
- `references/tunnel/gotchas.md` - preserved source companion file.
- `references/tunnel/networking.md` - preserved source companion file.
- `references/tunnel/patterns.md` - preserved source companion file.
- `references/turn/README.md` - preserved source companion file.
- `references/turn/api.md` - preserved source companion file.
- `references/turn/configuration.md` - preserved source companion file.
- `references/turn/gotchas.md` - preserved source companion file.
- `references/turn/patterns.md` - preserved source companion file.
- `references/turnstile/README.md` - preserved source companion file.
- `references/turnstile/api.md` - preserved source companion file.
- `references/turnstile/configuration.md` - preserved source companion file.
- `references/turnstile/gotchas.md` - preserved source companion file.
- `references/turnstile/patterns.md` - preserved source companion file.
- `references/vectorize/README.md` - preserved source companion file.
- `references/vectorize/api.md` - preserved source companion file.
- `references/vectorize/configuration.md` - preserved source companion file.
- `references/vectorize/gotchas.md` - preserved source companion file.
- `references/vectorize/patterns.md` - preserved source companion file.
- `references/waf/README.md` - preserved source companion file.
- `references/waf/api.md` - preserved source companion file.
- `references/waf/configuration.md` - preserved source companion file.
- `references/waf/gotchas.md` - preserved source companion file.
- `references/waf/patterns.md` - preserved source companion file.
- `references/web-analytics/README.md` - preserved source companion file.
- `references/web-analytics/configuration.md` - preserved source companion file.
- `references/web-analytics/gotchas.md` - preserved source companion file.
- `references/web-analytics/integration.md` - preserved source companion file.
- `references/web-analytics/patterns.md` - preserved source companion file.
- `references/workerd/README.md` - preserved source companion file.
- `references/workerd/api.md` - preserved source companion file.
- `references/workerd/configuration.md` - preserved source companion file.
- `references/workerd/gotchas.md` - preserved source companion file.
- `references/workerd/patterns.md` - preserved source companion file.
- `references/workers/README.md` - preserved source companion file.
- `references/workers/api.md` - preserved source companion file.
- `references/workers/configuration.md` - preserved source companion file.
- `references/workers/frameworks.md` - preserved source companion file.
- `references/workers/gotchas.md` - preserved source companion file.
- `references/workers/patterns.md` - preserved source companion file.
- `references/workers-ai/README.md` - preserved source companion file.
- `references/workers-ai/api.md` - preserved source companion file.
- `references/workers-ai/configuration.md` - preserved source companion file.
- `references/workers-ai/gotchas.md` - preserved source companion file.
- `references/workers-ai/patterns.md` - preserved source companion file.
- `references/workers-for-platforms/README.md` - preserved source companion file.
- `references/workers-for-platforms/api.md` - preserved source companion file.
- `references/workers-for-platforms/configuration.md` - preserved source companion file.
- `references/workers-for-platforms/gotchas.md` - preserved source companion file.
- `references/workers-for-platforms/patterns.md` - preserved source companion file.
- `references/workers-playground/README.md` - preserved source companion file.
- `references/workers-playground/api.md` - preserved source companion file.
- `references/workers-playground/configuration.md` - preserved source companion file.
- `references/workers-playground/gotchas.md` - preserved source companion file.
- `references/workers-playground/patterns.md` - preserved source companion file.
- `references/workers-vpc/README.md` - preserved source companion file.
- `references/workers-vpc/api.md` - preserved source companion file.
- `references/workers-vpc/configuration.md` - preserved source companion file.
- `references/workers-vpc/gotchas.md` - preserved source companion file.
- `references/workers-vpc/patterns.md` - preserved source companion file.
- `references/workflows/README.md` - preserved source companion file.
- `references/workflows/api.md` - preserved source companion file.
- `references/workflows/configuration.md` - preserved source companion file.
- `references/workflows/gotchas.md` - preserved source companion file.
- `references/workflows/patterns.md` - preserved source companion file.
- `references/wrangler/README.md` - preserved source companion file.
- `references/wrangler/api.md` - preserved source companion file.
- `references/wrangler/configuration.md` - preserved source companion file.
- `references/wrangler/gotchas.md` - preserved source companion file.
- `references/wrangler/patterns.md` - preserved source companion file.
- `references/zaraz/IMPLEMENTATION_SUMMARY.md` - preserved source companion file.
- `references/zaraz/README.md` - preserved source companion file.
- `references/zaraz/api.md` - preserved source companion file.
- `references/zaraz/configuration.md` - preserved source companion file.
- `references/zaraz/gotchas.md` - preserved source companion file.
- `references/zaraz/patterns.md` - preserved source companion file.
