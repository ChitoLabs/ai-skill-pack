---
name: teach
description: "Trigger: teach, learn a concept, learning workspace. Build stateful lessons, references, and learning records in the current project."
license: MIT
metadata:
  author: mattpocock
  adapter: LCubero
  version: "1.0.0"
  skills_sh_url: "https://www.skills.sh/mattpocock/skills/teach"
  github_url: "https://github.com/mattpocock/skills/tree/main/skills/productivity/teach"
---

## Activation Contract

Use when the user wants to learn a concept or skill over one or more sessions using the current directory as a stateful teaching workspace.

## Hard Rules

- Ground all teaching in `MISSION.md`. If the mission is unclear or missing, ask why the user wants to learn before designing lessons.
- Never rely only on parametric knowledge. Build `RESOURCES.md` from high-trust resources before advanced teaching.
- Build storage strength, not only short-term fluency. Use retrieval practice, spacing, interleaving when useful, and tight feedback loops.
- Lessons are short, beautiful, self-contained HTML files in `lessons/`, named `0001-<dash-case-name>.html` and incremented each time.
- Reuse assets first. Read `assets/` before authoring a lesson, link shared styles or components, and create reusable assets instead of duplicating future lesson code.
- Confirm before changing the mission, then record the change in `learning-records/`.

## Decision Gates

| Situation | Action |
|---|---|
| `MISSION.md` is missing or vague | Create or update it from `references/MISSION-FORMAT.md` after clarifying the mission. |
| `RESOURCES.md` is weak or missing | Populate it from high-trust sources using `references/RESOURCES-FORMAT.md` before teaching advanced material. |
| Prior learning records exist | Read `learning-records/` to calculate the zone of proximal development. |
| A reusable reference is produced | Save it under `reference/*.html` with printable, quick-reference design. |
| Lesson needs styling, quiz widgets, simulators, or diagrams | Reuse or add components under `assets/`; do not inline reusable code. |
| User asks for wisdom or real-world judgment | Answer carefully, then recommend high-reputation communities or local practice when appropriate. |

## Execution Steps

1. Inspect the teaching workspace: `MISSION.md`, `RESOURCES.md`, `NOTES.md`, `reference/*.html`, `learning-records/*.md`, `lessons/*.html`, and `assets/*`.
2. Determine the next lesson from the mission, resources, previous records, and the user's zone of proximal development.
3. Prefer a single tangible win: teach only the knowledge required to practice one skill.
4. Build one beautiful, short HTML lesson with citations, a primary source recommendation, active practice, immediate feedback where possible, links to related lessons or reference documents, and a reminder that the agent can answer follow-up questions.
5. Add or update `reference/*.html` when the lesson produces compressed reusable knowledge such as syntax, algorithms, poses, sequences, or a glossary.
6. Record non-obvious learning, mission changes, or durable insights in `learning-records/` using `references/LEARNING-RECORD-FORMAT.md`. Save scratch preferences in `NOTES.md`.

## Output Contract

Return the lesson path, reference paths, learning objective, practice activity, resources used, asset reuse or new asset notes, learning record path, and recommended next lesson.

## References

- `references/MISSION-FORMAT.md`
- `references/RESOURCES-FORMAT.md`
- `references/LEARNING-RECORD-FORMAT.md`
- `references/GLOSSARY-FORMAT.md`
