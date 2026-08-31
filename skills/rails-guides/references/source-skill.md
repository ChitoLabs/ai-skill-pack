---
name: rails-guides
description: Official Rails documentation. Use when asked about any Rails-specific topic including ActiveRecord, routing, controllers, views, mailers, jobs, Action Cable, Action Text, Active Storage, migrations, validations, callbacks, associations, caching, security, or internals.
license: Apache-2.0
metadata:
  author: lucianghinda
  version: 0.1
  skills_sh_url: "https://skills.sh/lucianghinda/superpowers-ruby/rails-guides"
  github_url: "https://github.com/lucianghinda/superpowers-ruby/tree/HEAD/skills/rails-guides"
---

# Rails Guides

Official Rails documentation for reference during development.

## Topic Map

### Getting Started
- `getting_started.md` — Rails basics, MVC overview, first app walkthrough
- `command_line.md` — `rails` command, generators, rake tasks
- `configuring.md` — Environments, initializers, credentials, database.yml
- `autoloading_and_reloading_constants.md` — Zeitwerk, module naming, reload behavior
- `initialization.md` — Rails boot sequence, railties, engines

### Active Record
- `active_record_basics.md` — Models, CRUD, conventions, migrations
- `active_record_querying.md` — Finders, scopes, joins, includes, explain
- `active_record_validations.md` — Built-in validators, custom validators, errors
- `active_record_callbacks.md` — Lifecycle hooks, after_commit, skip_callback
- `association_basics.md` — belongs_to, has_many, has_one, HABTM, polymorphic
- `active_record_migrations.md` — Schema changes, reversible migrations, db:migrate
- `active_record_encryption.md` — Encrypting attributes at rest
- `active_record_composite_primary_keys.md` — Multi-column primary keys
- `active_record_multiple_databases.md` — Multi-DB setup, sharding, replicas
- `active_record_postgresql.md` — PostgreSQL-specific features (hstore, jsonb, arrays)
- `active_model_basics.md` — ActiveModel outside ActiveRecord, form objects

### Action Controller
- `action_controller_overview.md` — Controllers, params, filters, sessions, cookies
- `action_controller_advanced_topics.md` — Streaming, live, metal, http auth
- `routing.md` — Resources, namespaces, constraints, named routes, URL helpers

### Action View
- `action_view_overview.md` — Templates, partials, layouts, formats
- `action_view_helpers.md` — form_with, link_to, tag, content_tag, asset helpers
- `form_helpers.md` — form_with, field helpers, nested forms, uploads
- `layouts_and_rendering.md` — render, redirect_to, respond_to, layout inheritance

### Frontend / Hotwire
- `working_with_javascript_in_rails.md` — Import maps, Turbo, Stimulus overview
- `action_text_overview.md` — Rich text with Trix, attachments

### Jobs & Mailers
- `active_job_basics.md` — Job classes, queues, retry, test helpers
- `action_mailer_basics.md` — Mailers, templates, deliveries, previews
- `action_mailbox_basics.md` — Incoming email routing and processing

### Storage
- `active_storage_overview.md` — File uploads, variants, direct uploads, S3/GCS/Azure

### Testing
- `testing.md` — Minitest, fixtures, test types, helpers, assertions

### Real-Time
- `action_cable_overview.md` — WebSockets, channels, broadcasting, connections

### Security & Performance
- `security.md` — SQL injection, XSS, CSRF, mass assignment, secure headers
- `caching_with_rails.md` — Fragment, action, HTTP caching, cache stores
- `asset_pipeline.md` — Sprockets, Propshaft, precompile, digests
- `tuning_performance_for_deployment.md` — Puma, connection pooling, GC

### Internationalization
- `i18n.md` — Translation files, locale, pluralization, date formats

### API & Rack
- `api_app.md` — API-only Rails, slim middleware stack
- `rails_on_rack.md` — Middleware stack, Rack integration

### Advanced
- `active_support_core_extensions.md` — String, Array, Hash, Date extensions
- `active_support_instrumentation.md` — Notifications, log subscribers
- `association_basics.md` — Association options, eager loading strategies
- `debugging_rails_applications.md` — debug gem, logger, web-console, byebug
- `error_reporting.md` — Error::Reporter, Sentry integration
- `threading_and_code_execution.md` — Thread safety, executor, reloader
- `upgrading_ruby_on_rails.md` — Version upgrade paths, deprecation handling
