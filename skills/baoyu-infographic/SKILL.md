---
name: baoyu-infographic
description: "Trigger: baoyu-infographic, infographic, visual summary, 信息图, 可视化. Generate structured prompts for raster infographic creation."
license: MIT
metadata:
  author: LCubero
  version: "1.117.4"
  skills_sh_url: https://www.skills.sh/jimliu/baoyu-skills/baoyu-infographic
  github_url: https://github.com/JimLiu/baoyu-skills/tree/HEAD/skills/baoyu-infographic
  openclaw:
    homepage: https://github.com/JimLiu/baoyu-skills#baoyu-infographic
---

## Activation Contract

Use when the user asks to create a publication-ready infographic image, visual summary, 信息图, 可视化, or high-density information graphic.

## Hard Rules

- Preserve source facts exactly. Strip credentials, API keys, tokens, and secrets before writing outputs.
- Confirm layout, style, aspect ratio, language, and backend before image generation unless the user explicitly opts out.
- Write the final image prompt under `prompts/` before invoking any image backend.
- Use raster image generation. Do not substitute SVG, HTML, canvas, or code-rendered art for the requested bitmap.
- Do not repair text by painting over a bitmap. Regenerate with a corrected prompt or ask the user.
- Use local references for layout, style, prompt, analysis, and configuration details.

## Decision Gates

| Situation | Action |
|---|---|
| User gives a known keyword | Apply the matching layout and style priority from the source shortcut rules. |
| User gives reference images | Copy them to `refs/`, classify direct, style, or palette usage, and record them in prompt frontmatter. |
| No image backend is available | Ask how to proceed. |
| Multiple non-native backends exist | Ask once which backend to use. |
| Existing output file exists | Back it up with a timestamp before writing a replacement. |

## Execution Steps

1. Load optional preferences from the documented EXTEND.md locations, if available.
2. Analyze the source into `analysis.md`: topic, data type, complexity, tone, audience, language, and design instructions.
3. Build `structured-content.md` with learning objectives, sections, verbatim data points, visuals, and text labels.
4. Recommend 3 to 5 layout and style combinations using `references/layouts/` and `references/styles/`.
5. Confirm choices using the available user-input mechanism, unless explicitly skipped.
6. Write `prompts/infographic.md` from the base prompt, confirmed layout, confirmed style, structured content, references, and aspect ratio.
7. Invoke the selected raster backend only after the prompt file exists, then report files created.

## Output Contract

Create an `infographic/{topic-slug}/` folder containing source, analysis, structured content, prompt, references when present, and `infographic.png`. Return topic, layout, style, aspect, language, backend, and output path.

## Image Generation Tools

Resolve a raster image backend after the prompt file exists. Prefer a runtime-native image tool when one is available. If no native tool exists, use the only installed non-native backend. If multiple non-native backends exist, ask once which backend to use. If `codex-imagegen` is selected, follow `references/codex-imagegen.md`.

## Confirmation Policy

Saved preferences shape recommendations and defaults only. Confirm layout, style, aspect ratio, language, and backend before generation unless the user explicitly opts out or already provided the choice in the request.

## Layout Gallery

Use `references/layouts/` as the canonical layout gallery. Common defaults include `bento-grid`, `linear-progression`, `dense-modules`, `hub-spoke`, and `dashboard`.

## Style Gallery

Use `references/styles/` as the canonical style gallery. Common defaults include `craft-handmade`, `corporate-memphis`, `morandi-journal`, `pop-laboratory`, and `retro-pop-grid`.

## Changing Preferences

Preferences live in `EXTEND.md` under `.baoyu-skills/baoyu-infographic/`, `~/.baoyu-skills/baoyu-infographic/`, or `${XDG_CONFIG_HOME:-$HOME/.config}/baoyu-skills/baoyu-infographic/`. Common edits are pinning `preferred_image_backend`, changing layout or style defaults, changing aspect or language defaults, and deleting the file to rerun first-time setup.

## References

- `references/analysis-framework.md` - analysis format.
- `references/structured-content-template.md` - structured content format.
- `references/base-prompt.md` - raster prompt template.
- `references/layouts/` - layout definitions.
- `references/styles/` - style definitions.
- `references/config/preferences-schema.md` - preferences schema.
- `references/config/first-time-setup.md` - setup flow and EXTEND.md locations.
- `references/codex-imagegen.md` - Codex backend contract when selected.
