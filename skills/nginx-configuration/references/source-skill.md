---
name: nginx-configuration
description: Configure Nginx web server for high-performance reverse proxy, load balancing, SSL/TLS, caching, and API gateway functionality.
license: Apache-2.0
metadata:
  author: LCubero
  version: 0.1
  skills_sh_url: "https://www.skills.sh/aj-geddes/useful-ai-prompts/nginx-configuration"
  github_url: "https://github.com/aj-geddes/useful-ai-prompts/tree/HEAD/skills/nginx-configuration"
---

# Nginx Configuration

## Table of Contents

- [Overview](#overview)
- [When to Use](#when-to-use)
- [Quick Start](#quick-start)
- [Reference Guides](#reference-guides)
- [Best Practices](#best-practices)

## Overview

Master Nginx configuration for production-grade web servers, reverse proxies, load balancing, SSL termination, caching, and API gateway patterns with advanced performance tuning.

## When to Use

- Reverse proxy setup
- Load balancing between backend services
- SSL/TLS termination
- HTTP/2 and gRPC support
- Caching and compression
- Rate limiting and DDoS protection
- URL rewriting and routing
- API gateway functionality

## Quick Start

Minimal working example:

```nginx
# /etc/nginx/nginx.conf
user nginx;
worker_processes auto;
worker_rlimit_nofile 65535;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 4096;
    use epoll;
    multi_accept on;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # Logging
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    log_format upstream_time '$remote_addr - $remote_user [$time_local] '
                            '"$request" $status $body_bytes_sent '
                            '"$http_referer" "$http_user_agent" '
// ... (see reference guides for full implementation)
```

## Reference Guides

Detailed implementations in the `references/` directory:

| Guide | Contents |
|---|---|
| [Production Nginx Configuration](production-nginx-configuration.md) | Production Nginx Configuration |
| [HTTPS Server with Load Balancing](https-server-with-load-balancing.md) | HTTPS Server with Load Balancing |
| [Nginx Configuration Script](nginx-configuration-script.md) | Nginx Configuration Script |
| [Nginx Monitoring Configuration](nginx-monitoring-configuration.md) | Nginx Monitoring Configuration |

## Best Practices

### ✅ DO

- Use HTTP/2 for performance
- Enable SSL/TLS with strong ciphers
- Implement proper caching strategies
- Use upstream connection pooling
- Monitor with stub_status or prometheus
- Rate limit to prevent abuse
- Add security headers
- Use least_conn load balancing
- Keep error logs separate from access logs

### ❌ DON'T

- Disable gzip compression
- Use weak SSL ciphers
- Cache authenticated responses
- Allow direct access to backends
- Ignore upstream health checks
- Mix HTTP and HTTPS without redirect
- Use default error pages in production
- Cache sensitive user data
