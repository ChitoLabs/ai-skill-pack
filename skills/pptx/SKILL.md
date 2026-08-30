---
name: pptx
description: "Trigger: create, read, edit, or inspect a PowerPoint .pptx file. Handle presentation content only when a .pptx artifact is explicitly involved."
license: Proprietary. LICENSE.txt has complete terms
metadata:
  author: anthropics
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/anthropics/skills/pptx"
  github_url: "https://github.com/anthropics/skills/tree/HEAD/skills/pptx"
---

## Activation Contract

Use this skill when the user request matches `pptx` or the preserved source description: Use this skill any time a .pptx file is involved in any way - as input, output, or both. This includes: creating slide decks, pitch decks, or presentations; reading, parsing, or extracting text from any .pptx file (even if the extracted content will be used elsewhere, like in an email or summary); editing, modifying, or updating existing presentations; combining or splitting slide files; working with templates, layouts, speaker notes, or comments. Trigger whenever the user mentions \\\"deck,\\\" \\\"slides,\\\" \\\"presentation,\\\" or references a .pptx filename, regardless of what they plan to do with the content afterward. If a .pptx file needs to be opened, created, or touched, use this skill.

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
- `references/LICENSE.txt` - preserved source companion file.
- `references/editing.md` - preserved source companion file.
- `references/pptxgenjs.md` - preserved source companion file.
- `scripts/__init__.py` - preserved source companion file.
- `scripts/add_slide.py` - preserved source companion file.
- `scripts/clean.py` - preserved source companion file.
- `scripts/office/helpers/__init__.py` - preserved source companion file.
- `scripts/office/helpers/merge_runs.py` - preserved source companion file.
- `scripts/office/helpers/simplify_redlines.py` - preserved source companion file.
- `scripts/office/pack.py` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-chart.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-chartDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-diagram.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-lockedCanvas.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-main.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-picture.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-spreadsheetDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/dml-wordprocessingDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/pml.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-additionalCharacteristics.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-bibliography.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-commonSimpleTypes.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlDataProperties.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-customXmlSchemaProperties.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesCustom.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesExtended.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-documentPropertiesVariantTypes.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-math.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/shared-relationshipReference.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/sml.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/vml-main.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/vml-officeDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/vml-presentationDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/vml-spreadsheetDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/vml-wordprocessingDrawing.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/wml.xsd` - preserved source companion file.
- `scripts/office/schemas/ISO-IEC29500-4_2016/xml.xsd` - preserved source companion file.
- `scripts/office/schemas/ecma/fouth-edition/opc-contentTypes.xsd` - preserved source companion file.
- `scripts/office/schemas/ecma/fouth-edition/opc-coreProperties.xsd` - preserved source companion file.
- `scripts/office/schemas/ecma/fouth-edition/opc-digSig.xsd` - preserved source companion file.
- `scripts/office/schemas/ecma/fouth-edition/opc-relationships.xsd` - preserved source companion file.
- `scripts/office/schemas/mce/mc.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-2010.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-2012.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-2018.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-cex-2018.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-cid-2016.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-sdtdatahash-2020.xsd` - preserved source companion file.
- `scripts/office/schemas/microsoft/wml-symex-2015.xsd` - preserved source companion file.
- `scripts/office/soffice.py` - preserved source companion file.
- `scripts/office/unpack.py` - preserved source companion file.
- `scripts/office/validate.py` - preserved source companion file.
- `scripts/office/validators/__init__.py` - preserved source companion file.
- `scripts/office/validators/base.py` - preserved source companion file.
- `scripts/office/validators/docx.py` - preserved source companion file.
- `scripts/office/validators/pptx.py` - preserved source companion file.
- `scripts/office/validators/redlining.py` - preserved source companion file.
- `scripts/thumbnail.py` - preserved source companion file.
