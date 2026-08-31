# AI Skill Pack

[English](README.md)

**492 adaptaciones genéricas y portátiles de skills de fuentes externas.** Una adaptación genérica consiste en una estructura `SKILL.md` portátil e instrucciones neutrales para runtimes. Las herramientas y dependencias pueden variar según el skill.

La compatibilidad significa que un runtime puede descubrir y cargar skills mediante la convención de carpetas indicada. No significa que todas las herramientas o dependencias externas estén instaladas.

Gentle AI y repo-harness pueden orquestar estos skills como capas de flujo de trabajo, pero no son runtimes que carguen skills.

## Instalación global

Ruta compartida recomendada: `~/.agents/skills/`

| Runtime | Compatibilidad con la ruta compartida | Ruta específica del runtime |
| --- | :---: | --- |
| OpenCode | Sí | No es necesaria |
| Pi | Sí | No es necesaria |
| Codex CLI | Sí | No es necesaria |
| Gemini CLI | Sí | No es necesaria |
| Claude Code | No | `~/.claude/skills/` |
| AGY CLI | No | `~/.gemini/antigravity-cli/skills/` |

## Instalación en el proyecto

Ruta compartida recomendada: `.agents/skills/`

| Runtime | Compatibilidad con la ruta compartida | Ruta específica del runtime |
| --- | :---: | --- |
| OpenCode | Sí | No es necesaria |
| Pi | Sí | No es necesaria |
| Codex CLI | Sí | No es necesaria |
| Gemini CLI | Sí | No es necesaria |
| AGY CLI | Sí | No es necesaria |
| Claude Code | No | `.claude/skills/` |

AGY usa una ruta global específica del runtime y admite la ruta local del proyecto `.agents/skills/`.

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
