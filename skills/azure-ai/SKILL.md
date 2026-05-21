---
name: azure-ai
description: "Trigger: azure-ai, Use for Azure AI: Search, Speech, OpenAI, Document Intelligence. Preserve source workflow with portable agent instructions."
license: MIT
metadata:
  author: Microsoft
  version: 1.1.1
  skills_sh_url: "https://skills.sh/microsoft/azure-skills/azure-ai"
  github_url: "https://github.com/microsoft/azure-skills/tree/HEAD/.github/plugins/azure-skills/skills/azure-ai"
---

## Activation Contract

Use this skill when the user request matches `azure-ai` or the preserved source description: Use for Azure AI: Search, Speech, OpenAI, Document Intelligence. Helps with search, vector/hybrid search, speech-to-text, text-to-speech, transcription, OCR. WHEN: AI Search, query search, vector search, hybrid search, semantic search, speech-to-text, text-to-speech, transcribe, OCR, convert text to speech.

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
- `references/sdk/azure-ai-contentsafety-java.md` - preserved source companion file.
- `references/sdk/azure-ai-contentsafety-py.md` - preserved source companion file.
- `references/sdk/azure-ai-contentsafety-ts.md` - preserved source companion file.
- `references/sdk/azure-ai-document-intelligence-dotnet.md` - preserved source companion file.
- `references/sdk/azure-ai-document-intelligence-ts.md` - preserved source companion file.
- `references/sdk/azure-ai-openai-dotnet.md` - preserved source companion file.
- `references/sdk/azure-ai-transcription-py.md` - preserved source companion file.
- `references/sdk/azure-ai-translation-text-py.md` - preserved source companion file.
- `references/sdk/azure-ai-translation-ts.md` - preserved source companion file.
- `references/sdk/azure-ai-vision-imageanalysis-java.md` - preserved source companion file.
- `references/sdk/azure-ai-vision-imageanalysis-py.md` - preserved source companion file.
- `references/sdk/azure-search-documents-dotnet.md` - preserved source companion file.
- `references/sdk/azure-search-documents-py.md` - preserved source companion file.
- `references/sdk/azure-search-documents-ts.md` - preserved source companion file.
