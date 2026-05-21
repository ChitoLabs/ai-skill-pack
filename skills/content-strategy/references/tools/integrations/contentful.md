# Contentful

Enterprise headless CMS with multi-locale support, two-API architecture, and composable content.

## Capabilities

| Integration | Available | Notes |
|-------------|-----------|-------|
| API | yes | Content Delivery API for reads, Content Management API for writes |
| MCP | no | No official MCP server |
| CLI | yes | `contentful-cli` for spaces, content types, migrations |
| SDK | yes | `contentful`, `contentful-management` |

## Authentication

- Delivery API: `Authorization: Bearer {delivery_token}` against `https://cdn.contentful.com`
- Preview API: `Authorization: Bearer {preview_token}` against `https://preview.contentful.com`
- Management API: `Authorization: Bearer {management_token}` against `https://api.contentful.com`
- Tokens: Create in Settings -> API keys or Settings -> CMA tokens

## Common Agent Operations

### Get Entries

```bash
GET https://cdn.contentful.com/spaces/{space_id}/environments/{environment}/entries?content_type=blogPost&limit=10

Authorization: Bearer {delivery_token}
```

### Create Entry

```bash
PUT https://api.contentful.com/spaces/{space_id}/environments/{environment}/entries/{entry_id}
Content-Type: application/vnd.contentful.management.v1+json
X-Contentful-Content-Type: blogPost
Authorization: Bearer {management_token}

{
  "fields": {
    "title": {"en-US": "New Post"},
    "slug": {"en-US": "new-post"}
  }
}
```

### Publish Entry

```bash
PUT https://api.contentful.com/spaces/{space_id}/environments/{environment}/entries/{entry_id}/published
X-Contentful-Version: {current_version}
Authorization: Bearer {management_token}
```

## CLI Commands

```bash
contentful login
contentful space list
contentful space export --space-id {space_id}
contentful space import --space-id {space_id} --content-file export.json
contentful space migration --space-id {space_id} migration.js
contentful content-type list --space-id {space_id}
```

## Key Objects

- Space: top-level container for content
- Environment: isolated content branch
- Content Type: schema definition with fields and validations
- Entry: content item of a specific content type
- Asset: media file
- Locale: language or region variant

## When To Use

- Multi-locale marketing content
- Enterprise content operations with approval workflows
- Composable content architecture
- Established vendor support and SLAs
- Content reuse across multiple channels

## Relevant Skills

- content-strategy
- programmatic-seo
- site-architecture
