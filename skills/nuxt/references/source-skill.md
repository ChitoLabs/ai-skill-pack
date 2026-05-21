---
name: nuxt
description: Nuxt full-stack Vue framework with SSR, auto-imports, and file-based routing. Use when working with Nuxt apps, server routes, useFetch, middleware, or hybrid rendering.
license: Apache-2.0
metadata:
  author: Anthony Fu
  version: 2026.1.28
  source: "Generated from https://github.com/nuxt/nuxt, scripts located at https://github.com/antfu/skills"
  skills_sh_url: "https://www.skills.sh/antfu/skills/nuxt"
  github_url: "https://github.com/midudev/autoskills/tree/HEAD/packages/autoskills/skills-registry/nuxt"
---

Nuxt is a full-stack Vue framework that provides server-side rendering, file-based routing, auto-imports, and a powerful module system. It uses Nitro as its server engine for universal deployment across Node.js, serverless, and edge platforms.

> The skill is based on Nuxt 3.x, generated at 2026-01-28.

## Core

| Topic | Description | Reference |
|-------|-------------|-----------|
| Directory Structure | Project folder structure, conventions, file organization | [core-directory-structure](core-directory-structure.md) |
| Configuration | nuxt.config.ts, app.config.ts, runtime config, environment variables | [core-config](core-config.md) |
| CLI Commands | Dev server, build, generate, preview, and utility commands | [core-cli](core-cli.md) |
| Routing | File-based routing, dynamic routes, navigation, middleware, layouts | [core-routing](core-routing.md) |
| Data Fetching | useFetch, useAsyncData, $fetch, caching, refresh | [core-data-fetching](core-data-fetching.md) |
| Modules | Creating and using Nuxt modules, Nuxt Kit utilities | [core-modules](core-modules.md) |
| Deployment | Platform-agnostic deployment with Nitro, Vercel, Netlify, Cloudflare | [core-deployment](core-deployment.md) |

## Features

| Topic | Description | Reference |
|-------|-------------|-----------|
| Composables Auto-imports | Vue APIs, Nuxt composables, custom composables, utilities | [features-composables](features-composables.md) |
| Components Auto-imports | Component naming, lazy loading, hydration strategies | [features-components-autoimport](features-components-autoimport.md) |
| Built-in Components | NuxtLink, NuxtPage, NuxtLayout, ClientOnly, and more | [features-components](features-components.md) |
| State Management | useState composable, SSR-friendly state, Pinia integration | [features-state](features-state.md) |
| Server Routes | API routes, server middleware, Nitro server engine | [features-server](features-server.md) |

## Rendering

| Topic | Description | Reference |
|-------|-------------|-----------|
| Rendering Modes | Universal (SSR), client-side (SPA), hybrid rendering, route rules | [rendering-modes](rendering-modes.md) |

## Best Practices

| Topic | Description | Reference |
|-------|-------------|-----------|
| Data Fetching Patterns | Efficient fetching, caching, parallel requests, error handling | [best-practices-data-fetching](best-practices-data-fetching.md) |
| SSR & Hydration | Avoiding context leaks, hydration mismatches, composable patterns | [best-practices-ssr](best-practices-ssr.md) |

## Advanced

| Topic | Description | Reference |
|-------|-------------|-----------|
| Layers | Extending applications with reusable layers | [advanced-layers](advanced-layers.md) |
| Lifecycle Hooks | Build-time, runtime, and server hooks | [advanced-hooks](advanced-hooks.md) |
| Module Authoring | Creating publishable Nuxt modules with Nuxt Kit | [advanced-module-authoring](advanced-module-authoring.md) |
