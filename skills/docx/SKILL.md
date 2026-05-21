---
name: docx
description: "Trigger: docx, Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Preserve source workflow with portable agent instructions."
license: Proprietary. LICENSE.txt has complete terms
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/anthropics/skills/docx"
  github_url: "https://github.com/anthropics/skills/tree/HEAD/skills/docx"
---

## Activation Contract

Use this skill when the user request matches `docx` or the preserved source description: Use this skill whenever the user wants to create, read, edit, or manipulate Word documents (.docx files). Triggers include: any mention of 'Word doc', 'word document', '.docx', or requests to produce professional documents with formatting like tables of contents, headings, page numbers, or letterheads. Also use when extracting or reorganizing content from .docx files, inserting or replacing images in documents, performing find-and-replace in Word files, working with tracked changes or comments, or converting content into a polished Word document. If the user asks for a 'report', 'memo', 'letter', 'template', or similar deliverable as a Word or .docx file, use this skill. Do NOT use for PDFs, spreadsheets, Google Docs, or general coding tasks unrelated to document generation.

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
- `scripts/__init__.py` - preserved source companion file.
- `scripts/accept_changes.py` - preserved source companion file.
- `scripts/comment.py` - preserved source companion file.
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
- `scripts/templates/comments.xml` - preserved source companion file.
- `scripts/templates/commentsExtended.xml` - preserved source companion file.
- `scripts/templates/commentsExtensible.xml` - preserved source companion file.
- `scripts/templates/commentsIds.xml` - preserved source companion file.
- `scripts/templates/people.xml` - preserved source companion file.
