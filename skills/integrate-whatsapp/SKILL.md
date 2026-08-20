---
name: integrate-whatsapp
description: "Integrate WhatsApp end-to-end with Kapso: setup links, connection detection, webhooks, messages, templates, media, WhatsApp Flows, data endpoints, encryption, and related Cloud API scripts. Requires explicit approval before API calls or remote mutations."
license: Apache-2.0
metadata:
  author: gokapso
  version: 0.1
  skills_sh_url: "https://www.skills.sh/gokapso/agent-skills/integrate-whatsapp"
  github_url: "https://github.com/gokapso/kapso-agent-skills/tree/HEAD/skills/integrate-whatsapp"
---

## Activation Contract

Use this skill when the user request matches `integrate-whatsapp` or the preserved source description: Connect WhatsApp to your product with Kapso: onboard customers with setup links, detect connections, receive events via webhooks, and send messages/templates/media. Also manage WhatsApp Flows (create/update/publish, data endpoints, encryption). Use when integrating WhatsApp end-to-end.

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
- `assets/dynamic-flow.json` - preserved source companion file.
- `assets/sample-flow.json` - preserved source companion file.
- `assets/send-interactive-buttons.json` - preserved source companion file.
- `assets/send-interactive-catalog-message.json` - preserved source companion file.
- `assets/send-interactive-cta-url.json` - preserved source companion file.
- `assets/send-interactive-list.json` - preserved source companion file.
- `assets/send-interactive-location-request.json` - preserved source companion file.
- `assets/send-template-order-status-update.json` - preserved source companion file.
- `assets/template-authentication-otp.json` - preserved source companion file.
- `assets/template-marketing-media-header.json` - preserved source companion file.
- `assets/template-utility-named.json` - preserved source companion file.
- `assets/template-utility-order-status-update.json` - preserved source companion file.
- `assets/webhooks-example.json` - preserved source companion file.
- `references/detecting-whatsapp-connection.md` - preserved source companion file.
- `references/getting-started.md` - preserved source companion file.
- `references/package.json` - preserved source companion file.
- `references/platform-api-reference.md` - preserved source companion file.
- `references/setup-links.md` - preserved source companion file.
- `references/templates-reference.md` - preserved source companion file.
- `references/webhooks-event-types.md` - preserved source companion file.
- `references/webhooks-overview.md` - preserved source companion file.
- `references/webhooks-reference.md` - preserved source companion file.
- `references/whatsapp-api-reference.md` - preserved source companion file.
- `references/whatsapp-cloud-api-js.md` - preserved source companion file.
- `references/whatsapp-flows-spec.md` - preserved source companion file.
- `scripts/create-flow.js` - preserved source companion file.
- `scripts/create-function.js` - preserved source companion file.
- `scripts/create-template.mjs` - preserved source companion file.
- `scripts/create.js` - preserved source companion file.
- `scripts/delete-flow.js` - preserved source companion file.
- `scripts/delete.js` - preserved source companion file.
- `scripts/deploy-data-endpoint.js` - preserved source companion file.
- `scripts/deploy-function.js` - preserved source companion file.
- `scripts/get-data-endpoint.js` - preserved source companion file.
- `scripts/get-encryption-status.js` - preserved source companion file.
- `scripts/get-flow.js` - preserved source companion file.
- `scripts/get-function.js` - preserved source companion file.
- `scripts/get.js` - preserved source companion file.
- `scripts/lib/args.mjs` - preserved source companion file.
- `scripts/lib/cli.js` - preserved source companion file.
- `scripts/lib/env.js` - preserved source companion file.
- `scripts/lib/env.mjs` - preserved source companion file.
- `scripts/lib/http.js` - preserved source companion file.
- `scripts/lib/output.js` - preserved source companion file.
- `scripts/lib/output.mjs` - preserved source companion file.
- `scripts/lib/request.mjs` - preserved source companion file.
- `scripts/lib/run.js` - preserved source companion file.
- `scripts/lib/webhooks/args.js` - preserved source companion file.
- `scripts/lib/webhooks/kapso-api.js` - preserved source companion file.
- `scripts/lib/webhooks/webhook.js` - preserved source companion file.
- `scripts/lib/whatsapp-flow.js` - preserved source companion file.
- `scripts/list-connected-numbers.mjs` - preserved source companion file.
- `scripts/list-flow-responses.js` - preserved source companion file.
- `scripts/list-flows.js` - preserved source companion file.
- `scripts/list-function-invocations.js` - preserved source companion file.
- `scripts/list-function-logs.js` - preserved source companion file.
- `scripts/list-platform-phone-numbers.mjs` - preserved source companion file.
- `scripts/list-templates.mjs` - preserved source companion file.
- `scripts/list.js` - preserved source companion file.
- `scripts/openapi-explore.mjs` - preserved source companion file.
- `scripts/publish-flow.js` - preserved source companion file.
- `scripts/read-flow-json.js` - preserved source companion file.
- `scripts/register-data-endpoint.js` - preserved source companion file.
- `scripts/send-interactive.mjs` - preserved source companion file.
- `scripts/send-template.mjs` - preserved source companion file.
- `scripts/send-test-flow.js` - preserved source companion file.
- `scripts/set-data-endpoint.js` - preserved source companion file.
- `scripts/setup-encryption.js` - preserved source companion file.
- `scripts/submit-template.mjs` - preserved source companion file.
- `scripts/template-status.mjs` - preserved source companion file.
- `scripts/test.js` - preserved source companion file.
- `scripts/update-flow-json.js` - preserved source companion file.
- `scripts/update-function.js` - preserved source companion file.
- `scripts/update-template.mjs` - preserved source companion file.
- `scripts/update.js` - preserved source companion file.
- `scripts/upload-media.mjs` - preserved source companion file.
- `scripts/upload-template-header-handle.mjs` - preserved source companion file.
