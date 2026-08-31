---
name: dart-best-practices
description: "Trigger: write or review idiomatic Dart code and analyzer-friendly formatting. Apply focused modern Dart best practices."
license: Apache-2.0
metadata:
  author: kevmoo
  adapter: LCubero
  version: 0.1
  skills_sh_url: "https://skills.sh/kevmoo/dash_skills/dart-best-practices"
  github_url: "https://github.com/kevmoo/dash_skills/tree/HEAD/skills/dart-best-practices"
---

## Activation Contract

Use this skill when:
-   Writing or reviewing Dart code.
-   Looking for guidance on idiomatic Dart usage.

## Hard Rules

- Defer to the user, to repository policy, and to any managed workflow that owns the current phase, gate, artifact, review, or verdict. Never claim workflow authority or create a parallel plan, review, or verdict.
- Every path is relative to this skill: never absolute, never a runtime install directory, never another skill. Name a companion skill, never depend on one; if it is not installed, say so and continue with this skill's own references or the closest manual fallback.
- Do not install, deploy, authenticate, mutate remote services, or run destructive commands unless the preserved workflow requires it and the user has approved the action.
- Keep all generated artifacts inside the user-requested workspace unless the user explicitly names another destination.
- Preserve idiomatic Dart guidance from this skill; do not replace it with generic formatting advice.
- Keep examples analyzer-friendly and avoid suggesting patterns that trigger common Dart lints without explaining the tradeoff.
- Do not install packages, change analyzer configuration, or run project commands unless the user asks or approves.

## Execution Steps

1. Identify whether the task is code authoring, review, or explanation.
2. Apply the relevant Dart guidance below to the smallest code area needed.
3. When reviewing, call out lint or readability issues with concrete before/after examples.
4. If modern Dart language features are central to the request and a companion skill is available, recommend using it rather than expanding this skill beyond its scope.

## Best Practices

### Multi-line Strings
Prefer using multi-line strings (`'''`) over concatenating strings with `+` and
`\n`, especially for large blocks of text like SQL queries, HTML, or
PEM-encoded keys. This improves readability and avoids
`lines_longer_than_80_chars` lint errors by allowing natural line breaks.

**Avoid:**
```dart
final pem = '-----BEGIN RSA PRIVATE KEY-----\n' +
    base64Encode(fullBytes) +
    '\n-----END RSA PRIVATE KEY-----';
```

**Prefer:**
```dart
final pem = '''
-----BEGIN RSA PRIVATE KEY-----
${base64Encode(fullBytes)}
-----END RSA PRIVATE KEY-----''';
```

### Line Length
Avoid lines longer than 80 characters, even in Markdown files and comments.
This ensures code is readable in split-screen views and on smaller screens
without horizontal scrolling.

**Prefer:**
Target 80 characters for wrapping text. Exceptions are allowed for long URLs
or identifiers that cannot be broken.

## Discovery

### Multi-line Strings
To find candidates for multi-line strings, search for string concatenation
with `+` involving newlines:
- **Regex**: `['"]\s*\+\s*['"]`
- **Regex**: `\+\s*['"].*\\n`

### Line Length
- Rely on the `lines_longer_than_80_chars` lint from the analyzer.

## Related Skills

- **dart-modern-features**: For idiomatic usage of modern Dart features like Pattern Matching, Records, and Switch Expressions, when that skill is available.

## Output Contract

Return the specific Dart guidance applied, any code changes or examples, and any lint/analyzer checks the user should run.
