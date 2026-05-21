---
name: azure-deploy
description: "Trigger: azure-deploy, Execute Azure deployments for ALREADY-PREPARED applications that have existing .azure/deployment-plan.md and infrastructure files. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Microsoft
  version: 1.1.2
  skills_sh_url: "https://skills.sh/microsoft/azure-skills/azure-deploy"
  github_url: "https://github.com/microsoft/azure-skills/tree/HEAD/skills/azure-deploy"
---

## Activation Contract

Use this skill when the user request matches `azure-deploy` or the preserved source description: Execute Azure deployments for ALREADY-PREPARED applications that have existing .azure/deployment-plan.md and infrastructure files. DO NOT use this skill when the user asks to CREATE a new application \u2014 use azure-prepare instead. This skill runs azd up, azd deploy, terraform apply, and az deployment commands with built-in error recovery. Requires .azure/deployment-plan.md from azure-prepare and validated status from azure-validate. WHEN: \\\"run azd up\\\", \\\"run azd deploy\\\", \\\"execute deployment\\\", \\\"push to production\\\", \\\"push to cloud\\\", \\\"go live\\\", \\\"ship it\\\", \\\"bicep deploy\\\", \\\"terraform apply\\\", \\\"publish to Azure\\\", \\\"launch on Azure\\\". DO NOT USE WHEN: \\\"create and deploy\\\", \\\"build and deploy\\\", \\\"create a new app\\\", \\\"set up infrastructure\\\", \\\"create and deploy to Azure using Terraform\\\" \u2014 use azure-prepare for these.

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
- `references/auth-best-practices.md` - preserved source companion file.
- `references/global-rules.md` - preserved source companion file.
- `references/live-role-verification.md` - preserved source companion file.
- `references/pre-deploy-checklist.md` - preserved source companion file.
- `references/recipes/README.md` - preserved source companion file.
- `references/recipes/azcli/README.md` - preserved source companion file.
- `references/recipes/azcli/errors.md` - preserved source companion file.
- `references/recipes/azcli/verify.md` - preserved source companion file.
- `references/recipes/azd/README.md` - preserved source companion file.
- `references/recipes/azd/ef-migrations.md` - preserved source companion file.
- `references/recipes/azd/errors.md` - preserved source companion file.
- `references/recipes/azd/functions-deploy.md` - preserved source companion file.
- `references/recipes/azd/post-deployment.md` - preserved source companion file.
- `references/recipes/azd/scripts/apply-migrations.ps1` - preserved source companion file.
- `references/recipes/azd/scripts/apply-migrations.sh` - preserved source companion file.
- `references/recipes/azd/scripts/grant-and-migrate.ps1` - preserved source companion file.
- `references/recipes/azd/scripts/grant-and-migrate.sh` - preserved source companion file.
- `references/recipes/azd/sql-entra-auth.md` - preserved source companion file.
- `references/recipes/azd/sql-managed-identity.md` - preserved source companion file.
- `references/recipes/azd/verify.md` - preserved source companion file.
- `references/recipes/bicep/README.md` - preserved source companion file.
- `references/recipes/bicep/errors.md` - preserved source companion file.
- `references/recipes/bicep/verify.md` - preserved source companion file.
- `references/recipes/cicd/README.md` - preserved source companion file.
- `references/recipes/cicd/errors.md` - preserved source companion file.
- `references/recipes/cicd/examples/azdo-azd.yml` - preserved source companion file.
- `references/recipes/cicd/examples/azdo-multistage.yml` - preserved source companion file.
- `references/recipes/cicd/examples/github-azd.yml` - preserved source companion file.
- `references/recipes/cicd/examples/github-bicep.yml` - preserved source companion file.
- `references/recipes/cicd/verify.md` - preserved source companion file.
- `references/recipes/terraform/README.md` - preserved source companion file.
- `references/recipes/terraform/errors.md` - preserved source companion file.
- `references/recipes/terraform/verify.md` - preserved source companion file.
- `references/region-availability.md` - preserved source companion file.
- `references/sdk/azd-deployment.md` - preserved source companion file.
- `references/sdk/azure-identity-dotnet.md` - preserved source companion file.
- `references/sdk/azure-identity-java.md` - preserved source companion file.
- `references/sdk/azure-identity-py.md` - preserved source companion file.
- `references/sdk/azure-identity-ts.md` - preserved source companion file.
- `references/troubleshooting.md` - preserved source companion file.
