# Strapi

Open-source headless CMS with self-hosted option, REST and GraphQL APIs, and customizable admin panel. Targets Strapi 5.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | yes | REST by default, GraphQL via plugin |
| MCP | no | No official MCP server |
| CLI | yes | `strapi` CLI for project setup, content types, plugins |
| SDK | yes | `@strapi/sdk-js`, `@strapi/blocks-react-renderer` |

## Authentication

- Type: API Token or Users & Permissions JWT
- Header: `Authorization: Bearer {api_token}`
- Tokens: Create in Settings -> API Tokens
- JWT: `POST /api/auth/local` with identifier and password returns JWT

## Common Agent Operations

### List Documents

```bash
GET http://localhost:1337/api/articles?populate=*

Authorization: Bearer {api_token}
```

### Filter And Sort

```bash
GET http://localhost:1337/api/articles?filters[slug][$eq]=my-post
GET http://localhost:1337/api/articles?sort=publishedAt:desc
GET http://localhost:1337/api/articles?pagination[page]=1&pagination[pageSize]=10
```

### Create Document

```bash
POST http://localhost:1337/api/articles
Content-Type: application/json
Authorization: Bearer {api_token}

{
  "data": {
    "title": "New Article",
    "slug": "new-article"
  }
}
```

### Get Draft Content

```bash
GET http://localhost:1337/api/articles?status=draft

Authorization: Bearer {api_token}
```

## CLI Commands

```bash
npx create-strapi@latest my-project
strapi develop
strapi build
strapi generate content-type
strapi generate controller
npm install @strapi/plugin-graphql
```

## Key Objects

- Content Type: collection type or single type schema definition
- Document: content item identified by `documentId`
- Component: reusable field group
- Dynamic Zone: flexible content area accepting multiple component types
- Media: files managed through the Media Library
- Locale: i18n locale for content translation

## When To Use

- Self-hosted CMS with full data ownership
- Budget-conscious projects
- Custom admin panel or plugin requirements
- Teams with DevOps capability
- Projects needing both REST and GraphQL access

## Relevant Skills

- content-strategy
- programmatic-seo
- site-architecture
