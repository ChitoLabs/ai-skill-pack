---
name: microsoft-foundry
description: "Deploy, evaluate, optimize, monitor, and troubleshoot Microsoft Foundry agents, models, datasets, traces, prompt optimizers, RBAC, quota, and project setup."
license: MIT
metadata:
  author: Microsoft
  version: 1.1.14
  skills_sh_url: "https://www.skills.sh/microsoft/azure-skills/microsoft-foundry"
  github_url: "https://github.com/microsoft/azure-skills/tree/HEAD/skills/microsoft-foundry"
---

## Activation Contract

Use this skill when the user request matches `microsoft-foundry` or the preserved source description: Deploy, evaluate, and manage Foundry agents end-to-end: Docker build, ACR push, hosted/prompt agent create, container start, batch eval, continuous eval, prompt optimizer workflows, agent.yaml, dataset curation from traces. USE FOR: deploy agent to Foundry, hosted agent, create agent, invoke agent, evaluate agent, run batch eval, continuous eval, continuous monitoring, continuous eval status, optimize prompt, improve prompt, prompt optimizer, optimize agent instructions, improve agent instructions, optimize system prompt, deploy model, Foundry project, RBAC, role assignment, permissions, quota, capacity, region, troubleshoot agent, deployment failure, create dataset from traces, dataset versioning, eval trending, create AI Services, Cognitive Services, create Foundry resource, provision resource, knowledge index, agent monitoring, customize deployment, onboard, availability. DO NOT USE FOR: Azure Functions, App Service, general Azure deploy (use azure-deploy), general Azure prep (use azure-prepare).

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
- `references/.gitignore` - preserved source companion file.
- `references/agent-metadata-contract.md` - preserved source companion file.
- `references/auth-best-practices.md` - preserved source companion file.
- `references/foundry-agent/create/create-hosted.md` - preserved source companion file.
- `references/foundry-agent/create/create-prompt.md` - preserved source companion file.
- `references/foundry-agent/create/references/agent-tools.md` - preserved source companion file.
- `references/foundry-agent/create/references/agentframework.md` - preserved source companion file.
- `references/foundry-agent/create/references/sdk-operations.md` - preserved source companion file.
- `references/foundry-agent/create/references/tool-azure-ai-search.md` - preserved source companion file.
- `references/foundry-agent/create/references/tool-bing-grounding.md` - preserved source companion file.
- `references/foundry-agent/create/references/tool-file-search.md` - preserved source companion file.
- `references/foundry-agent/create/references/tool-mcp.md` - preserved source companion file.
- `references/foundry-agent/create/references/tool-memory.md` - preserved source companion file.
- `references/foundry-agent/create/references/tool-web-search.md` - preserved source companion file.
- `references/foundry-agent/create/references/toolbox-reference.md` - preserved source companion file.
- `references/foundry-agent/create/references/use-toolbox-in-hosted-agent.md` - preserved source companion file.
- `references/foundry-agent/deploy/deploy.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/eval-datasets.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/dataset-comparison.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/dataset-curation.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/dataset-organization.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/dataset-versioning.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/eval-lineage.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/eval-regression.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/eval-trending.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/generate-seed-dataset.md` - preserved source companion file.
- `references/foundry-agent/eval-datasets/references/trace-to-dataset.md` - preserved source companion file.
- `references/foundry-agent/faos-optimize/faos-optimize.md` - preserved source companion file.
- `references/foundry-agent/faos-optimize/references/python-patterns.md` - preserved source companion file.
- `references/foundry-agent/invoke/invoke.md` - preserved source companion file.
- `references/foundry-agent/invoke/references/file-operations.md` - preserved source companion file.
- `references/foundry-agent/invoke/references/invocations-protocol.md` - preserved source companion file.
- `references/foundry-agent/invoke/references/session-management.md` - preserved source companion file.
- `references/foundry-agent/observe/observe.md` - preserved source companion file.
- `references/foundry-agent/observe/references/analyze-results.md` - preserved source companion file.
- `references/foundry-agent/observe/references/cicd-monitoring.md` - preserved source companion file.
- `references/foundry-agent/observe/references/compare-iterate.md` - preserved source companion file.
- `references/foundry-agent/observe/references/continuous-eval.md` - preserved source companion file.
- `references/foundry-agent/observe/references/deploy-and-setup.md` - preserved source companion file.
- `references/foundry-agent/observe/references/evaluate-step.md` - preserved source companion file.
- `references/foundry-agent/observe/references/optimize-deploy.md` - preserved source companion file.
- `references/foundry-agent/trace/references/analyze-failures.md` - preserved source companion file.
- `references/foundry-agent/trace/references/analyze-latency.md` - preserved source companion file.
- `references/foundry-agent/trace/references/conversation-detail.md` - preserved source companion file.
- `references/foundry-agent/trace/references/eval-correlation.md` - preserved source companion file.
- `references/foundry-agent/trace/references/kql-templates.md` - preserved source companion file.
- `references/foundry-agent/trace/references/search-traces.md` - preserved source companion file.
- `references/foundry-agent/trace/references/tracing-insights-api.md` - preserved source companion file.
- `references/foundry-agent/trace/trace.md` - preserved source companion file.
- `references/foundry-agent/troubleshoot/troubleshoot.md` - preserved source companion file.
- `references/models/deploy-model/TEST_PROMPTS.md` - preserved source companion file.
- `references/models/deploy-model/capacity/scripts/discover_and_rank.ps1` - preserved source companion file.
- `references/models/deploy-model/capacity/scripts/discover_and_rank.sh` - preserved source companion file.
- `references/models/deploy-model/capacity/scripts/query_capacity.ps1` - preserved source companion file.
- `references/models/deploy-model/capacity/scripts/query_capacity.sh` - preserved source companion file.
- `references/models/deploy-model/customize/EXAMPLES.md` - preserved source companion file.
- `references/models/deploy-model/customize/references/customize-guides.md` - preserved source companion file.
- `references/models/deploy-model/customize/references/customize-workflow.md` - preserved source companion file.
- `references/models/deploy-model/preset/EXAMPLES.md` - preserved source companion file.
- `references/models/deploy-model/preset/references/preset-workflow.md` - preserved source companion file.
- `references/models/deploy-model/preset/references/workflow.md` - preserved source companion file.
- `references/models/deploy-model/scripts/generate_deployment_url.ps1` - preserved source companion file.
- `references/models/deploy-model/scripts/generate_deployment_url.sh` - preserved source companion file.
- `references/project/connections.md` - preserved source companion file.
- `references/project/create/create-foundry-project.md` - preserved source companion file.
- `references/quota/quota.md` - preserved source companion file.
- `references/quota/references/capacity-planning.md` - preserved source companion file.
- `references/quota/references/error-resolution.md` - preserved source companion file.
- `references/quota/references/optimization.md` - preserved source companion file.
- `references/quota/references/ptu-guide.md` - preserved source companion file.
- `references/quota/references/troubleshooting.md` - preserved source companion file.
- `references/quota/references/workflows.md` - preserved source companion file.
- `references/rbac/rbac.md` - preserved source companion file.
- `references/resource/create/create-foundry-resource.md` - preserved source companion file.
- `references/resource/create/references/patterns.md` - preserved source companion file.
- `references/resource/create/references/troubleshooting.md` - preserved source companion file.
- `references/resource/create/references/workflows.md` - preserved source companion file.
- `references/resource/private-network/private-network.md` - preserved source companion file.
- `references/resource/private-network/references/custom-template-adaptation.md` - preserved source companion file.
- `references/resource/private-network/references/deploy.md` - preserved source companion file.
- `references/resource/private-network/references/end-to-end-test.md` - preserved source companion file.
- `references/resource/private-network/references/intake.md` - preserved source companion file.
- `references/resource/private-network/references/post-deployment-validation.md` - preserved source companion file.
- `references/resource/private-network/references/scaffold.md` - preserved source companion file.
- `references/resource/private-network/references/template-index.md` - preserved source companion file.
- `references/resource/private-network/references/vpn-dns-setup.bicep` - preserved source companion file.
- `references/resource/private-network/references/vpn-dns-setup.md` - preserved source companion file.
- `references/sdk/foundry-sdk-py.md` - preserved source companion file.
- `references/standard-agent-setup.md` - preserved source companion file.
