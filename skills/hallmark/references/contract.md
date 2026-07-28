# Output contract & scope

Loaded once per build, at handoff time.

## Output contract

When producing new work:

- Put design tokens in one place at the top of the stylesheet (`:root` custom properties) or in a `tokens.css` / `tokens.ts` file if the project uses one.
- Name tokens by semantic role, not value. `--color-ink`, not `--color-black`.
- If the project uses Tailwind, extend the theme; do not inline arbitrary values across components.
- If the project uses a framework, match the framework's file conventions  -  don't reinvent them.
- **An existing global stylesheet is append-only.** If the project already ships one (`app/globals.css`, `src/index.css`, `src/styles/global.css`), add to it instead of replacing it: keep every `@tailwind` / `@import "tailwindcss"` directive exactly where it is, put Hallmark's `:root` tokens and base rules *below* them, and keep any new `@import` (e.g. `tokens.css`) at the very top of the file, above all other rules. Reuse the project's own token names (`--background`, `--foreground`, a Tailwind `@theme`) where they exist rather than shadowing them with a parallel set. Do a full rewrite only when the user explicitly asks for one: silently dropping a framework's CSS entry directives un-styles the entire app.
- Include a short comment block at the top of the stylesheet naming the genre, the tone the user picked, the palette's anchor hue, and the structural fingerprint. This is the only comment you need.

## Scope and limits

Hallmark is a *taste* skill. It will not:

- Invent product copy. If the user hasn't given you the words, ask.
- Pick a brand identity. It will follow one you give it.
- Enforce a specific style (dark mode, glassmorphism, brutalism). It will execute whichever genre + tone the user committed to.
- Build logic  -  state management, data fetching, business rules. It is a visual / interaction layer only.
- Implement or mutate authentication, authorization, payment processing, Stripe requests, webhooks, credentials, transactions, or other business logic.

For those domains, Hallmark may design visual states and local non-production stubs only. Hand implementation off by domain or skill name, such as an authentication, payments, security, or backend skill, and require separate user approval before that implementation changes code or external systems.
