# AI Skill Pack

[English](README.md)

**492 adaptaciones genéricas y portátiles de skills de fuentes externas.** Una adaptación genérica consiste en una estructura `SKILL.md` portátil e instrucciones neutrales para runtimes. Las herramientas y dependencias pueden variar según el skill.

La compatibilidad significa que un runtime puede descubrir y cargar skills mediante la convención de carpetas indicada. No significa que todas las herramientas o dependencias externas estén instaladas.

Gentle AI y repo-harness pueden orquestar estos skills como capas de flujo de trabajo, pero no son runtimes que carguen skills.

## Instalación global

Ruta compartida recomendada cuando sea compatible: `~/.agents/skills/`

| Runtime | Directorios globales de skills | Compatibilidad con `~/.agents/skills/` compartido |
| --- | --- | :---: |
| [OpenCode](https://opencode.ai/docs/skills/) | `~/.config/opencode/skills/` | Sí |
| [Claude Code](https://code.claude.com/docs/en/skills) | `~/.claude/skills/` | Sin descubrimiento automático documentado |
| [Pi](https://pi.dev/docs/latest/skills#locations) | `~/.pi/agent/skills/` | Sí |
| [Antigravity CLI (`agy`)](https://antigravity.google/docs/cli/plugins/) | `~/.gemini/antigravity-cli/skills/` | Sin compatibilidad global documentada |
| [Codex CLI](https://developers.openai.com/codex/build-skills/) | `~/.codex/skills/` | No |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/v0.39.1/docs/cli/skills.md) | `~/.gemini/skills/` | Sí |


> **Usuarios de Pi: eviten instalar globalmente los 492 skills.** Pi descubre automáticamente `~/.agents/skills/` y siempre agrega al prompt del sistema el nombre, la descripción y la ubicación de `SKILL.md` de cada skill visible. Las instrucciones completas se cargan solo cuando se necesitan, pero el catálogo de metadatos genera una sobrecarga de contexto recurrente considerable. Usen `pi --no-skills`, de forma opcional con `--skill <path>` para skills seleccionados. Como alternativa, configuren `disable-model-invocation: true` en el frontmatter de los `SKILL.md` seleccionados para omitirlos del catálogo anunciado al modelo y mantener su invocación manual mediante `/skill:name` cuando los comandos de skills estén habilitados. El valor debe ser el booleano YAML `true`, no el texto entre comillas `"true"`. Consulten la documentación oficial de Pi sobre [ubicaciones de skills](https://pi.dev/docs/latest/skills#locations) y [frontmatter](https://pi.dev/docs/latest/skills#frontmatter).

## Instalación en el proyecto

Ruta compartida recomendada: `.agents/skills/`

| Runtime | Directorio de skills del proyecto | Compatibilidad con `.agents/skills/` compartido |
| --- | --- | :---: |
| [OpenCode](https://opencode.ai/docs/skills/) | `.opencode/skills/` | Sí |
| [Claude Code](https://code.claude.com/docs/en/skills) | `.claude/skills/` | No |
| [Pi](https://pi.dev/docs/latest/skills#locations) | `.pi/skills/` | Sí |
| [Antigravity CLI (`agy`)](https://antigravity.google/docs/cli/plugins/) | `.agents/skills/` | Sí |
| [Codex CLI](https://developers.openai.com/codex/build-skills/) | `.codex/skills/` | Sí |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli/blob/v0.39.1/docs/cli/skills.md) | `.gemini/skills/` | Sí |

## Explorar

| Recurso | Propósito |
| --- | --- |
| [Catálogo de skills](docs/skills-catalog.md) | Explorar por categoría, resumen, activador y licencia. |
| [Lista de fuentes](docs/source-list.md) | Consultar autor original, adaptador y fuente. |
| [Taxonomía](skill-categories.json) | Revisar la asignación versionada de categorías. |
| [Ajustes del catálogo](catalog-overrides.json) | Revisar las correcciones mantenidas de resúmenes y activadores. |

## Datos para mantenimiento

- `skill-categories.json` mantiene la asignación revisada de categorías para cada skill publicado.
- `catalog-overrides.json` mantiene las correcciones revisadas de resúmenes y activadores.
- El catálogo y la lista de fuentes son artefactos públicos estáticos y completos.
- Los metadatos de autor, adaptador, fuente y licencia se mantienen separados.

## Licencia

Revisa las dependencias, los permisos y la licencia de cada skill antes de usarlo. La licencia MIT cubre el empaquetado del repositorio, la documentación, la curación y el trabajo de adaptación. Cada skill conserva sus licencias, avisos y condiciones originales.
