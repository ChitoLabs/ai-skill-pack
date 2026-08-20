---
name: generating-sorbet-inline
description: "Trigger: generating-sorbet-inline, Generates or updates Sorbet inline type signatures directly in Ruby source files using sig blocks. Preserve source workflow with portable agent instructions."
license: Apache-2.0
metadata:
  author: DmitryPogrebnoy
  version: 0.1
  skills_sh_url: "https://skills.sh/DmitryPogrebnoy/ruby-agent-skills/generating-sorbet-inline"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/generating-sorbet-inline"
---

## Activation Contract

Use this skill when the user request matches `generating-sorbet-inline` or the preserved source description: Generates or updates Sorbet inline type signatures directly in Ruby source files using sig blocks. Triggers when creating, updating, or maintaining inline type signatures for Ruby source files.

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
- `references/reference/sorbet_examples/STRUCTURE.md` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/application_validator.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/association_inspector.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/cache.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/checker.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/cli.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/base_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/check_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/help_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/init_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/lazy_loaded_entry.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/update_todo_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/uses_parse_run.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/validate_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands/version_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/commands.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/configuration.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/const_node_inspector.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/constant_context.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/constant_discovery.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/constant_name_inspector.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/disable_sorbet.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/extension_loader.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/file_processor.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/files_for_processing.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/formatters/default_offenses_formatter.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/formatters/progress_formatter.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/generators/configuration_file.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/generators/root_package.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/graph.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/node.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/node_helpers.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/node_processor.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/node_processor_factory.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/node_visitor.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/offense.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/offense_collection.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/offenses_formatter.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/output_style.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/output_styles/coloured.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/output_styles/plain.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/package.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/package_set.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/package_todo.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parse_run.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parsed_constant_definitions.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parsers/erb.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parsers/factory.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parsers/parser_interface.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parsers/ruby.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/parsers.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/rails_load_paths.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/reference.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/reference_checking/checkers/dependency_checker.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/reference_checking/reference_checker.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/reference_extractor.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/reference_offense.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/run_context.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/spring_command.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/unresolved_reference.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/validator/result.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/validator.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/validators/dependency_validator.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk/version.rb` - preserved source companion file.
- `references/reference/sorbet_examples/packwerk/packwerk.rb` - preserved source companion file.
- `references/reference/syntax.md` - preserved source companion file.
