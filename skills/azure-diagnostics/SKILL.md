---
name: azure-diagnostics
description: "Trigger: azure-diagnostics, Debug Azure production issues on Azure using AppLens, Azure Monitor, resource health, and safe triage. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Microsoft
  version: 1.1.5
  skills_sh_url: "https://skills.sh/microsoft/azure-skills/azure-diagnostics"
  github_url: "https://github.com/microsoft/azure-skills/tree/HEAD/skills/azure-diagnostics"
---

## Activation Contract

Use this skill when the user request matches `azure-diagnostics` or the preserved source description: Debug Azure production issues on Azure using AppLens, Azure Monitor, resource health, and safe triage. WHEN: debug production issues, troubleshoot app service, app service high CPU, app service deployment failure, troubleshoot container apps, troubleshoot functions, troubleshoot AKS, kubectl cannot connect, kube-system/CoreDNS failures, pod pending, crashloop, node not ready, upgrade failures, analyze logs, KQL, insights, image pull failures, cold start issues, health probe failures, resource health, root cause of errors, troubleshoot event hubs, troubleshoot service bus, messaging SDK error, AMQP connection failure, message lock lost, service bus dead letter.

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
- `references/app-service/README.md` - preserved source companion file.
- `references/azure-resource-graph.md` - preserved source companion file.
- `references/container-apps/README.md` - preserved source companion file.
- `references/functions/README.md` - preserved source companion file.
- `references/kql-queries.md` - preserved source companion file.
- `references/troubleshooting/aks/aks-troubleshooting.md` - preserved source companion file.
- `references/troubleshooting/aks/general-diagnostics.md` - preserved source companion file.
- `references/troubleshooting/aks/load-balancer-and-ingress.md` - preserved source companion file.
- `references/troubleshooting/aks/network-policy.md` - preserved source companion file.
- `references/troubleshooting/aks/networking.md` - preserved source companion file.
- `references/troubleshooting/aks/node-issues.md` - preserved source companion file.
- `references/troubleshooting/aks/pod-failures.md` - preserved source companion file.
- `references/troubleshooting/aks/references/aks-mcp.md` - preserved source companion file.
- `references/troubleshooting/aks/references/command-flows.md` - preserved source companion file.
- `references/troubleshooting/aks/references/inspektor-gadget.md` - preserved source companion file.
- `references/troubleshooting/aks/references/structured-input-modes.md` - preserved source companion file.
- `references/troubleshooting/aks/spot-and-zone-issues.md` - preserved source companion file.
- `references/troubleshooting/aks/upgrade-operations.md` - preserved source companion file.
- `references/troubleshooting/messaging/README.md` - preserved source companion file.
- `references/troubleshooting/messaging/auth-best-practices.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-eventhubs-dotnet.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-eventhubs-java.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-eventhubs-js.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-eventhubs-py.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-servicebus-dotnet.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-servicebus-java.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-servicebus-js.md` - preserved source companion file.
- `references/troubleshooting/messaging/azure-servicebus-py.md` - preserved source companion file.
- `references/troubleshooting/messaging/service-troubleshooting.md` - preserved source companion file.
