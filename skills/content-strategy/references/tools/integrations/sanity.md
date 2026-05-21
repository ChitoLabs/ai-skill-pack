# Sanity

Headless CMS with real-time collaboration, GROQ query language, and schema-as-code.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | yes | GROQ queries, Mutations API, Assets API |
| MCP | no | No official MCP server |
| CLI | yes | `sanity` CLI for studio, datasets, deployment |
| SDK | yes | `@sanity/client`, `next-sanity`, `@sanity/image-url` |

## Authentication

- Type: API Token (Bearer)
- Header: `Authorization: Bearer skXXXXXX`
- Tokens: Create in Sanity Manage -> API -> Tokens
- Permissions: Read-only or Read+Write per token

## Common Agent Operations

### Query Documents (GROQ)

URL-encode the `query` parameter value in practice.

```bash
GET https://{projectId}.api.sanity.io/v2024-01-01/data/query/{dataset}?query=*[_type == "post"]{title, slug, publishedAt}
```

### Create Document (Mutations API)

```bash
POST https://{projectId}.api.sanity.io/v2024-01-01/data/mutate/{dataset}

{
  "mutations": [
    {
      "create": {
        "_type": "post",
        "title": "New Post",
        "slug": {"_type": "slug", "current": "new-post"}
      }
    }
  ]
}
```

Use `createOrReplace` instead for upserts that include `_id`.

## CLI Commands

```bash
sanity init
sanity dev
sanity deploy
sanity dataset export production ./backup.tar.gz
sanity dataset import ./data.ndjson production
sanity dataset list
sanity documents query '*[_type == "post"][0..9]{title, slug}'
```

## Key Objects

- Document: top-level content item with `_id`, `_type`, `_rev`
- Asset: images and files stored in Sanity CDN
- Reference: link between documents (`{_type: "reference", _ref: "doc-id"}`)
- Portable Text: rich text as structured array of blocks
- Dataset: isolated content database, such as `production` or `staging`
- Slug: URL-friendly identifier (`{_type: "slug", current: "my-slug"}`)

## When To Use

- Structured content for marketing sites and blogs
- Multi-channel content delivery
- Real-time collaborative editing workflows
- Content-heavy sites with complex models
- Next.js or React-based frontends

## Relevant Skills

- content-strategy
- programmatic-seo
- site-architecture
