# Sampling Strategy for AI Agent Spans

> `@sentry/node` >=9.x (`inheritOrSampleWith`), `sentry-sdk` >=2.x (`traces_sampler`)

## The Problem

Agent runs are span trees. Sampling decides at the root; children inherit. Drop the root, lose every child span. At any rate below 1.0, you lose entire agent executions.

## How It Works

`tracesSampler` / `traces_sampler` only fires on **root spans**. Non-root spans, including `gen_ai.*` children, inherit unconditionally.

## JavaScript

```javascript
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampler: ({ name, attributes, inheritOrSampleWith }) => {
    if (attributes?.['sentry.op']?.startsWith('gen_ai.') || attributes?.['gen_ai.system']) {
      return 1.0;
    }
    if (name?.includes('/api/chat') || name?.includes('/api/agent')) {
      return 1.0;
    }
    return inheritOrSampleWith(0.2);
  },
});
```

## Python

```python
def traces_sampler(sampling_context):
    tx = sampling_context.get("transaction_context", {})
    op, name = tx.get("op", ""), tx.get("name", "")

    if op.startswith("gen_ai."):
        return 1.0
    if op == "http.server" and any(p in name for p in ["/api/chat", "/api/agent"]):
        return 1.0

    parent = sampling_context.get("parent_sampled")
    if parent is not None:
        return float(parent)
    return 0.2
```

If AI is the core product, skip `tracesSampler` and use `tracesSampleRate: 1.0`.

## Fallback: Metrics + Logs

If 100% tracing is not feasible, emit metrics and logs on every LLM call independent of trace sampling.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `gen_ai` spans missing despite sampler returning 1.0 | Parent HTTP transaction was sampled at a lower rate. Add the route to your sampler. |
| `tracesSampler` not called for `gen_ai` spans | Expected. It only runs on root spans. Sample the parent HTTP route instead. |
| All traces at 100% | Check the fallback rate in `inheritOrSampleWith()` or default return value. |
