# Sampling Strategy for AI Agent Spans

> `@sentry/node` >=9.x (`inheritOrSampleWith`), `sentry-sdk` >=2.x (`traces_sampler`)

Agent runs are span trees. Sampling decides at the root; children inherit. Drop the root, lose every child span. At any rate below 1.0, you lose entire agent executions.

`tracesSampler` / `traces_sampler` only fires on root spans. Non-root spans, including `gen_ai.*` children, inherit unconditionally.

Sample standalone `gen_ai.*` root spans and HTTP routes that trigger AI calls at `1.0`; use the application's normal fallback rate for unrelated traffic. If AI is the core product, skip route-specific sampling and use `tracesSampleRate: 1.0`.

If 100% tracing is not feasible, emit metrics and logs on every LLM call independent of trace sampling.
