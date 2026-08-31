import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const generate = process.argv.includes("--generate");
const unsupportedArgs = process.argv.slice(2).filter((argument) => argument !== "--generate");
const skillsRoot = path.join(root, "skills");
const taxonomyFile = "skill-categories.json";
const overridesFile = "catalog-overrides.json";
const errors = [];
if (unsupportedArgs.length) errors.push(`unsupported arguments: ${unsupportedArgs.join(", ")}`);

function findDuplicateJsonKeys(text, label) {
  let index = 0;
  const fail = (message) => errors.push(`${label}: ${message}`);
  const skipWhitespace = () => { while (/\s/.test(text[index] ?? "")) index += 1; };
  function parseString() {
    const start = index++;
    while (index < text.length) {
      if (text[index] === "\\") { index += 2; continue; }
      if (text[index++] === '"') return JSON.parse(text.slice(start, index));
    }
    throw new Error("unterminated string");
  }
  function parseValue() {
    skipWhitespace();
    if (text[index] === "{") return parseObject();
    if (text[index] === "[") return parseArray();
    if (text[index] === '"') { parseString(); return; }
    const match = text.slice(index).match(/^(?:true|false|null|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/);
    if (!match) throw new Error(`unsupported JSON token at offset ${index}`);
    index += match[0].length;
  }
  function parseObject() {
    index += 1;
    const keys = new Set();
    skipWhitespace();
    while (text[index] !== "}") {
      const key = parseString();
      if (keys.has(key)) fail(`duplicate JSON key '${key}'`);
      keys.add(key);
      skipWhitespace();
      if (text[index++] !== ":") throw new Error("missing colon");
      parseValue();
      skipWhitespace();
      if (text[index] === ",") { index += 1; skipWhitespace(); continue; }
      if (text[index] !== "}") throw new Error("missing object delimiter");
    }
    index += 1;
  }
  function parseArray() {
    index += 1;
    skipWhitespace();
    while (text[index] !== "]") {
      parseValue();
      skipWhitespace();
      if (text[index] === ",") { index += 1; skipWhitespace(); continue; }
      if (text[index] !== "]") throw new Error("missing array delimiter");
    }
    index += 1;
  }
  try { parseValue(); skipWhitespace(); if (index !== text.length) throw new Error("trailing JSON content"); }
  catch (error) { fail(`cannot inspect duplicate keys: ${error.message}`); }
}

function isRealDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? "")) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function unquote(value) {
  const trimmed = value.trim();
  return ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) ? trimmed.slice(1, -1) : trimmed;
}

function parseEntry(name) {
  const relativePath = `skills/${name}/SKILL.md`;
  const filePath = path.join(root, ...relativePath.split("/"));
  if (!fs.existsSync(filePath)) { errors.push(`${relativePath}: missing entry point`); return null; }
  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) { errors.push(`${relativePath}: missing YAML-like frontmatter`); return null; }
  const top = {};
  const metadata = {};
  let inMetadata = false;
  const publishedTopScalars = ["name", "description", "license"];
  const publishedMetadataScalars = ["author", "adapter", "version", "github_url", "skills_sh_url", "homepage"];
  for (const key of publishedTopScalars) {
    if (new RegExp(`^${key}:\\s*[>|][+-]?\\d?\\s*$`, "m").test(match[1])) errors.push(`${relativePath}: unsupported multiline ${key}; parser fails closed`);
  }
  for (const key of publishedMetadataScalars) {
    if (new RegExp(`^  ${key}:\\s*[>|][+-]?\\d?\\s*$`, "m").test(match[1])) errors.push(`${relativePath}: unsupported multiline metadata.${key}; parser fails closed`);
  }
  if (errors.some((error) => error.startsWith(`${relativePath}: unsupported multiline `))) return null;
  for (const line of match[1].split(/\r?\n/)) {
    if (/^metadata:\s*$/.test(line)) { inMetadata = true; continue; }
    const field = line.match(inMetadata ? /^  ([A-Za-z0-9_-]+):\s*(.*?)\s*$/ : /^([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
    if (field) (inMetadata ? metadata : top)[field[1]] = unquote(field[2]);
  }
  for (const key of ["name", "description", "license"]) if (!top[key]) errors.push(`${relativePath}: missing ${key}`);
  for (const key of ["author", "version"]) if (!metadata[key]) errors.push(`${relativePath}: missing metadata.${key}`);
  if (top.name !== name) errors.push(`${relativePath}: name '${top.name ?? ""}' does not match folder '${name}'`);
  if (metadata.author === "LCubero") errors.push(`${relativePath}: adapter LCubero must not be represented as author`);
  for (const url of [metadata.github_url, metadata.skills_sh_url, metadata.homepage].filter(Boolean)) {
    try { const parsed = new URL(url); if (!["http:", "https:"].includes(parsed.protocol)) throw new Error(); }
    catch { errors.push(`${relativePath}: invalid source URL '${url}'`); }
  }
  return { name, path: `skills/${name}/`, description: top.description ?? "", license: top.license ?? "", author: metadata.author ?? "", adapter: metadata.adapter || null, version: metadata.version ?? "", github_url: metadata.github_url || null, skills_sh_url: metadata.skills_sh_url || null, homepage: metadata.homepage || null };
}

function markdown(value) {
  return String(value).replace(/[\u2013\u2014]/gu, "-").replaceAll("|", "\\|").replaceAll("\r", " ").replaceAll("\n", " ");
}

function sourceUrl(entry) { return entry.github_url ?? entry.skills_sh_url ?? entry.homepage; }

const summaryOverrides = {
  "adev-writing-guide": "Write clear Angular documentation using the adev style guide.",
  "baoyu-infographic": "Generate structured prompts for raster infographics.",
  "ai-seo": "Optimize content for AI search visibility and LLM citations.",
  "analytics": "Set up, improve, or audit analytics tracking and measurement.",
  "api-designer": "Design REST or GraphQL APIs, OpenAPI specifications, and API architecture.",
  "astro": "Build web applications with the Astro framework.",
  "azure-compute": "Select and operate Azure compute services.",
  "business-analytics-reporter": "Create business analytics reports from supplied metrics and reporting goals.",
  "bun": "Build, test, and deploy JavaScript or TypeScript applications with Bun.",
  "changelog-generator": "Generate changelogs from repository history and release inputs.",
  "clerk-android": "Implement Clerk authentication for native Android apps using Kotlin.",
  "clerk-astro-patterns": "Apply Clerk authentication patterns to Astro middleware, server-rendered pages, and islands.",
  "clerk-chrome-extension-patterns": "Apply Clerk authentication patterns to Chrome extension popups and side panels.",
  "clerk-custom-ui": "Build custom Clerk authentication flows and component appearance with Clerk hooks.",
  "clerk-expo-patterns": "Apply Clerk authentication patterns to Expo and React Native apps.",
  "clerk-nextjs-patterns": "Apply Clerk authentication patterns to Next.js middleware, Server Actions, and caching.",
  "clerk-nuxt-patterns": "Apply Clerk authentication patterns to Nuxt middleware, composables, and server routes.",
  "clerk-orgs": "Build multi-tenant B2B applications with Clerk Organizations.",
  "clerk-react-patterns": "Apply Clerk authentication patterns to React single-page applications.",
  "clerk-react-router-patterns": "Apply Clerk authentication patterns to React Router applications.",
  "clerk-tanstack-patterns": "Apply Clerk authentication patterns to TanStack Start applications.",
  "clerk-vue-patterns": "Apply Clerk authentication patterns to Vue 3 applications.",
  "cloudflare": "Develop and operate applications on the Cloudflare platform.",
  "django-security": "Review Django applications for security risks and safer framework practices.",
  "deno-deploy": "Deploy Deno applications and operate the Deno Deploy CLI.",
  "deno-frontend": "Build Deno web interfaces with Fresh, Preact, and Tailwind CSS.",
  "deno-sandbox": "Run untrusted or generated code in isolated Deno sandboxes.",
  "docker-expert": "Design, debug, and optimize Docker images and container workflows.",
  "email-and-password-best-practices": "Apply secure email and password authentication practices.",
  "error-handling-patterns": "Design consistent application error handling and recovery paths.",
  "excel-automation": "Automate repeatable Microsoft Excel workbook operations.",
  "excel-data-analyzer": "Analyze structured data in Microsoft Excel workbooks.",
  "flutter-expert": "Build cross-platform applications with Flutter and Dart.",
  "executive-dashboard-generator": "Create executive dashboards from supplied business metrics.",
  "gemini-api-dev": "Build applications with the Gemini API using current SDK patterns.",
  "github-actions-docs": "Use current GitHub Actions documentation to answer workflow questions.",
  "golang-error-handling": "Apply idiomatic Go error handling and propagation patterns.",
  "golang-pro": "Write, review, and debug idiomatic Go applications.",
  "google-ads": "Set up, optimize, and manage Google Ads campaigns.",
  "gsap-plugins": "Use official GSAP plugins in animation workflows.",
  "hallmark": "Build or review distinctive frontend interfaces.",
  "hono": "Build Hono applications with routing, middleware, validation, testing, and streaming.",
  "java-coding-standards": "Apply consistent Java coding standards and maintainability practices.",
  "javascript-testing-patterns": "Apply maintainable JavaScript testing patterns.",
  "jupyter-notebook": "Create and edit Jupyter notebooks for reproducible analysis.",
  "impeccable": "Polish frontend interfaces with a portable design review workflow.",
  "infographic": "Plan infographic structure, hierarchy, copy, and design specifications.",
  "kotlin-tooling-cocoapods-spm-migration": "Migrate Kotlin Multiplatform Apple dependencies from CocoaPods to Swift Package Manager.",
  "kubernetes-specialist": "Deploy and manage Kubernetes workloads.",
  "laravel-specialist": "Build, review, and debug Laravel applications.",
  "modern-javascript-patterns": "Apply modern JavaScript language and application patterns.",
  "marketing-ideas": "Generate marketing ideas and strategies for software products.",
  "marketing-psychology": "Apply psychology and behavioral science to marketing decisions.",
  "native-data-fetching": "Implement and debug network requests, API calls, and data fetching.",
  "n8n-conventions": "Apply n8n workflow and node configuration conventions.",
  "next-best-practices": "Apply current Next.js architecture and implementation practices.",
  "nodejs-backend-patterns": "Apply production Node.js backend architecture patterns.",
  "openai-docs": "Use official OpenAI documentation for current API and product guidance.",
  "php-pro": "Build modern PHP applications with PHP, Laravel, or Symfony.",
  "organization-best-practices": "Apply maintainable project and code organization practices.",
  "power-bi-performance-troubleshooting": "Diagnose Power BI model and report performance problems.",
  "power-bi-report-design-consultation": "Review and improve Power BI report design.",
  "power-bi-dax-optimization": "Optimize Power BI DAX calculations for performance and maintainability.",
  "power-bi-model-design-review": "Review Power BI data models, relationships, and architecture.",
  "programmatic-seo": "Create SEO-focused pages at scale from templates and data.",
  "rust-engineer": "Write, review, and debug idiomatic Rust code with memory safety and zero-cost abstractions.",
  "seo-audit": "Audit and diagnose website SEO issues.",
  "sleek-design-mobile-apps": "Design mobile app screens and interfaces in Sleek projects.",
  "social": "Create, schedule, and optimize social media content.",
  "sql-code-review": "Review SQL for correctness, maintainability, safety, and performance.",
  "sql-optimization": "Diagnose and optimize SQL query performance.",
  "stripe-best-practices": "Apply safe Stripe integration and payment workflow practices.",
  "swift-concurrency": "Apply modern Swift concurrency patterns safely.",
  "swift-testing-expert": "Write, review, and debug tests with Swift Testing.",
  "swiftui-expert-skill": "Build, review, and debug SwiftUI applications using current APIs.",
  "terraform-stacks": "Build and manage infrastructure with HashiCorp Terraform Stacks.",
  "tiktok-ads": "Set up, optimize, and manage TikTok Ads campaigns.",
  "tailwind-css-patterns": "Apply maintainable Tailwind CSS component and layout patterns.",
  "two-factor-authentication-best-practices": "Implement secure two-factor authentication flows.",
  "typescript-advanced-types": "Design and debug advanced TypeScript types.",
  "wordpress-router": "Route WordPress tasks to the relevant development or operations workflow.",
  "wp-block-development": "Develop custom blocks for the WordPress block editor.",
  "wp-block-themes": "Develop and maintain WordPress block themes.",
  "wp-performance": "Diagnose and improve WordPress performance.",
  "wp-plugin-development": "Develop and maintain WordPress plugins.",
  "wp-project-triage": "Identify the structure and appropriate workflow for a WordPress project.",
  "wp-rest-api": "Build and debug WordPress REST API integrations.",
  "wp-wpcli-and-ops": "Operate WordPress sites with WP-CLI and production-safe procedures.",
  "wrangler": "Use the Wrangler CLI to develop and deploy Cloudflare applications."
};

function loadOverrides() {
  const filePath = path.join(root, overridesFile);
  if (!fs.existsSync(filePath)) { errors.push(`${overridesFile}: missing manual overrides`); return { overrides: {} }; }
  const text = fs.readFileSync(filePath, "utf8");
  findDuplicateJsonKeys(text, overridesFile);
  let config;
  try { config = JSON.parse(text); }
  catch { errors.push(`${overridesFile}: invalid JSON`); return { overrides: {} }; }
  if (config.schema_version !== 1) errors.push(`${overridesFile}: unsupported schema_version`);
  if (!isRealDate(config.override_version)) errors.push(`${overridesFile}: override_version must be a real YYYY-MM-DD date`);
  if (!config.overrides || Array.isArray(config.overrides) || typeof config.overrides !== "object") errors.push(`${overridesFile}: overrides must be an object`);
  return config;
}

const overrideConfig = loadOverrides();

function cleanDescription(name, description) {
  const hadTrigger = /^Trigger:\s*/i.test(description);
  const value = description.replace(/^Trigger:\s*/i, "").replace(/\s*Preserve source workflow with portable agent instructions\.\s*$/i, "").trim();
  let triggers = [];
  let summary = value;
  const comma = value.indexOf(",");
  if (comma >= 0 && value.slice(0, comma).trim().toLowerCase() === name.toLowerCase()) {
    triggers = [name];
    summary = value.slice(comma + 1).trim();
  } else if (value.replace(/\.$/, "").toLowerCase() === name.toLowerCase()) {
    triggers = [name];
    summary = summaryOverrides[name] ?? "Provides the workflow documented by this skill.";
  } else if (hadTrigger) {
    const sentence = value.match(/^(.+?\.)(?:\s+|$)([A-Z][\s\S]*)$/);
    if (sentence) { triggers = sentence[1].slice(0, -1).split(",").map((item) => item.trim()).filter(Boolean); summary = sentence[2]; }
  }
  const manual = overrideConfig.overrides?.[name] ?? {};
  summary = (manual.summary ?? summaryOverrides[name] ?? summary)
    .replace(/^['"]+|['"]+$/g, "")
    .replace(/^\|\s*/, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\\u201[34]/g, "-")
    .replace(/[\u2013\u2014]/gu, "-")
    .trim();
  if (manual.triggers) triggers = manual.triggers;
  summary = normalizeCapabilitySummary(summary);
  if (summary && !/[.!?`]$/.test(summary)) summary += ".";
  return { summary, triggers };
}

const approvedSummaryVerb = /^(?:Access|Add|Analyze|Answer|Apply|Audit|Automate|Benchmark|Build|Check|Choose|Clarify|Clean|Configure|Consume|Containerize|Convert|Coordinate|Create|Debug|Decide|Define|Deploy|Design|Detect|Develop|Diagnose|Discover|Document|Draft|Ensure|Evaluate|Execute|Explain|Extend|Extract|Find|Fix|Follow|Format|Generate|Get|Guide|Handle|Identify|Implement|Improve|Inspect|Integrate|Interact|Investigate|Maintain|Manage|Map|Migrate|Observe|Operate|Optimize|Orchestrate|Perform|Plan|Polish|Preserve|Produce|Profile|Require|Research|Retrieve|Review|Route|Run|Scan|Scaffold|Scrape|Search|Secure|Set|Shape|Split|Supply|Teach|Transform|Triage|Troubleshoot|Upgrade|Use|Validate|Verify|Wire|Work|Write)\b/;

function normalizeCapabilitySummary(summary) {
  let value = summary
    .replace(/^Official GSAP skill for\s+/i, "Use GSAP ")
    .replace(/^Complete (.+) reference\s*-\s*/i, "Use $1 reference for ")
    .replace(/^Guidelines for creating\s+/i, "Create ")
    .replace(/^Guidelines for developing\s+/i, "Develop ")
    .replace(/^Guidelines for upgrading\s+/i, "Upgrade ")
    .replace(/^Guidelines and tools for reviewing\s+/i, "Review ")
    .replace(/^Best practices for writing\s+/i, "Write ")
    .replace(/^Best practices for Remotion\s*-\s*/i, "Create Remotion ")
    .replace(/^Specialized skill for building\s+/i, "Build ")
    .replace(/^Production-tested setup for\s+/i, "Configure ")
    .replace(/^Quick reference for\s+/i, "Apply ")
    .replace(/^Proven workflow architectural patterns from\s+/i, "Apply workflow patterns from ")
    .replace(/^Building\s+/i, "Build ")
    .replace(/^Deploying\s+/i, "Deploy ")
    .replace(/^Comprehensively reviews\s+/i, "Review ")
    .replace(/^Drafts\s+/i, "Draft ")
    .replace(/^Repository rules own\s+/i, "Follow repository rules for ")
    .replace(/^Expert(?:-level)?\s+(?:in\s+)?/i, "Apply ")
    .replace(/^Master\s+/i, "Apply ")
    .replace(/^Official\s+/i, "Use official ")
    .replace(/^Complete\s+(?:guide|toolkit)\s+(?:for|to)\s+/i, "Use ")
    .replace(/^Ready-to-use\s+prompts?\s+for\s+/i, "Use prompts for ")
    .replace(/^Provides?\s+/i, "Apply ")
    .replace(/^Helps?\s+/i, "Use ")
    .replace(/^Uses?\s+/i, "Use ")
    .replace(/^Performs?\s+/i, "Perform ")
    .replace(/^Explains?\s+/i, "Explain ")
    .replace(/^Reviews?\s+/i, "Review ")
    .replace(/^Generates?\s+/i, "Generate ")
    .replace(/^Migrates?\s+/i, "Migrate ")
    .replace(/^Guides?\s+/i, "Guide ")
    .replace(/^Improves?\s+/i, "Improve ")
    .replace(/^Transforms?\s+/i, "Transform ")
    .replace(/^Converts?\s+/i, "Convert ")
    .replace(/^Writes?\s+/i, "Write ")
    .replace(/^Manages?\s+/i, "Manage ")
    .replace(/^Optimizes?\s+/i, "Optimize ")
    .replace(/^Teaches?\s+/i, "Teach ")
    .replace(/^Analyzes?\s+/i, "Analyze ")
    .replace(/^Formats?\s+/i, "Format ")
    .trim();
  if (value && !approvedSummaryVerb.test(value)) value = `Use ${value}`;
  return value;
}

function validateCatalogEntry(entry) {
  const prefix = `${overridesFile}: override for '${entry.name}'`;
  const manual = overrideConfig.overrides?.[entry.name];
  if (manual) {
    for (const key of Object.keys(manual)) if (!["summary", "triggers", "evidence"].includes(key)) errors.push(`${prefix}: unsupported key '${key}'`);
    if (manual.summary !== undefined && typeof manual.summary !== "string") errors.push(`${prefix}: summary must be a string`);
    if (typeof manual.summary === "string" && /^(?:Expert|Master|Official|Complete toolkit|Specialized|Best practices|Guidance|Guidelines|Provides?)\b/i.test(manual.summary)) errors.push(`${prefix}: summary starts with promotional or weak boilerplate`);
    if (manual.triggers !== undefined && !Array.isArray(manual.triggers)) errors.push(`${prefix}: triggers must be an array`);
    if (!manual.evidence?.trim()) errors.push(`${prefix}: evidence is required`);
    if (Array.isArray(manual.triggers)) {
      const source = entry.description.toLowerCase();
      for (const trigger of manual.triggers) if (typeof trigger === "string" && !source.includes(trigger.toLowerCase())) errors.push(`${prefix}: trigger '${trigger}' is not supported by source frontmatter`);
    }
  }
  const { summary, triggers } = cleanDescription(entry.name, entry.description);
  if (!summary.trim()) errors.push(`${entry.name}: summary must contain explanatory text`);
  if (!approvedSummaryVerb.test(summary)) errors.push(`${entry.name}: summary must start with an approved action verb`);
  if (summary.length < 24 || summary.replace(/[.!?]$/, "").trim().split(/\s+/).length < 4) errors.push(`${entry.name}: summary is a vague short fragment`);
  if (summary.length > 180) errors.push(`${entry.name}: summary exceeds 180 characters`);
  if (/\[[^\]]+\]\([^)]+\)/.test(summary)) errors.push(`${entry.name}: summary contains a Markdown link`);
  if (/[\u2013\u2014]/u.test(summary)) errors.push(`${entry.name}: summary contains a forbidden Unicode dash`);
  if (/(?:\bfrom|\bto|\bwith|\bfor|\band|\bor|\bincluding|\bsuch as|\bthat|\bwhich|\bwho|\bthat run)\.$/i.test(summary)) errors.push(`${entry.name}: summary ends with a dangling clause or preposition`);
  if (/[-,:;]\s*[.!?]$/.test(summary)) errors.push(`${entry.name}: summary has suspicious terminal fragment punctuation`);
  if (/^(?:this skill|use this skill|activate|trigger\b)|\bshould be used when\b|\bworkflow documented by this skill\b/i.test(summary)) errors.push(`${entry.name}: summary contains wrapper or activation boilerplate`);
  if (/^(?:Use\s+)?(?:Expert|Master|Complete(?: toolkit| guide| reference)?|Specialized|Best practices|Guidance|Guidelines|Provides?)\b/i.test(summary)) errors.push(`${entry.name}: summary starts with promotional or weak boilerplate`);
  const normalizedSummary = summary.replace(/[.!?]$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (normalizedSummary === entry.name) errors.push(`${entry.name}: summary only repeats the skill name`);
  if (!Array.isArray(triggers)) errors.push(`${entry.name}: triggers must be an array`);
  else {
    if (triggers.some((trigger) => typeof trigger !== "string" || !trigger.trim())) errors.push(`${entry.name}: triggers contain an empty value`);
    if (triggers.some((trigger) => trigger !== trigger.trim())) errors.push(`${entry.name}: triggers contain surrounding whitespace`);
    const normalized = triggers.map((trigger) => trigger.toLowerCase());
    if (new Set(normalized).size !== normalized.length) errors.push(`${entry.name}: triggers contain duplicates`);
  }
}

function loadTaxonomy(entries) {
  const filePath = path.join(root, taxonomyFile);
  if (!fs.existsSync(filePath)) { errors.push(`${taxonomyFile}: missing taxonomy`); return { schema_version: null, taxonomy_version: null, categories: [], assignments: {} }; }
  let taxonomy;
  const text = fs.readFileSync(filePath, "utf8");
  findDuplicateJsonKeys(text, taxonomyFile);
  try { taxonomy = JSON.parse(text); }
  catch { errors.push(`${taxonomyFile}: invalid JSON`); return { categories: [], assignments: {} }; }
  const ids = taxonomy.categories?.map((category) => category.id) ?? [];
  if (taxonomy.schema_version !== 1) errors.push(`${taxonomyFile}: unsupported schema_version`);
  if (!isRealDate(taxonomy.taxonomy_version)) errors.push(`${taxonomyFile}: taxonomy_version must be a real YYYY-MM-DD date`);
  if (!ids.length) errors.push(`${taxonomyFile}: no allowed categories`);
  if (new Set(ids).size !== ids.length) errors.push(`${taxonomyFile}: duplicate category id`);
  const labels = taxonomy.categories?.map((category) => category.label) ?? [];
  if (new Set(labels).size !== labels.length) errors.push(`${taxonomyFile}: duplicate category label`);
  const allowed = new Set(ids);
  const assignedNames = Object.keys(taxonomy.assignments ?? {});
  if (new Set(assignedNames).size !== assignedNames.length) errors.push(`${taxonomyFile}: duplicate skill assignment`);
  for (const entry of entries) {
    if (!Object.hasOwn(taxonomy.assignments ?? {}, entry.name)) errors.push(`${taxonomyFile}: missing assignment for '${entry.name}'`);
    else if (!allowed.has(taxonomy.assignments[entry.name])) errors.push(`${taxonomyFile}: disallowed category '${taxonomy.assignments[entry.name]}' for '${entry.name}'`);
  }
  for (const name of assignedNames) if (!entries.some((entry) => entry.name === name)) errors.push(`${taxonomyFile}: unknown assigned skill '${name}'`);
  const sorted = [...assignedNames].sort((a, b) => a.localeCompare(b, "en"));
  if (assignedNames.some((name, index) => name !== sorted[index])) errors.push(`${taxonomyFile}: assignments are not in deterministic name order`);
  if (assignedNames.length !== entries.length) errors.push(`${taxonomyFile}: expected ${entries.length} assignments, found ${assignedNames.length}`);
  for (const id of ids) if (!assignedNames.some((name) => taxonomy.assignments[name] === id)) errors.push(`${taxonomyFile}: empty category '${id}'`);
  const categoryTotal = ids.reduce((total, id) => total + assignedNames.filter((name) => taxonomy.assignments[name] === id).length, 0);
  if (categoryTotal !== entries.length) errors.push(`${taxonomyFile}: category totals ${categoryTotal}, expected ${entries.length}`);
  return taxonomy;
}

function renderConciseReadme(total) {
  return `# AI Skill Pack

**${total} generic, portable adaptations of upstream skills.** Generic adaptation means a portable \`SKILL.md\` structure and neutral runtime instructions; tools and dependencies can still vary by skill.

Compatibility means a runtime can discover and load skills through the listed folder convention, not that every external tool or dependency is installed.

Gentle AI and repo-harness can orchestrate these skills as workflow layers, but they are not skill-loading runtimes.

## Install One Skill

\`\`\`sh
# From the root of a cloned repository:
mkdir -p ~/.agents/skills
cp -R skills/systematic-debugging ~/.agents/skills/
\`\`\`

## Global Installation

Recommended shared path: \`~/.agents/skills/\`

| Runtime | Shared path support | Runtime-specific path |
| --- | :---: | --- |
| OpenCode | Yes | Not needed |
| Pi | Yes | Not needed |
| Codex CLI | Yes | Not needed |
| Gemini CLI | Yes | Not needed |
| Claude Code | No | \`~/.claude/skills/\` |
| AGY CLI | No | \`~/.gemini/antigravity-cli/skills/\` |

## Project Installation

Recommended shared path: \`.agents/skills/\`

| Runtime | Shared path support | Runtime-specific path |
| --- | :---: | --- |
| OpenCode | Yes | Not needed |
| Pi | Yes | Not needed |
| Codex CLI | Yes | Not needed |
| Gemini CLI | Yes | Not needed |
| AGY CLI | Yes | Not needed |
| Claude Code | No | \`.claude/skills/\` |

AGY uses a runtime-specific global path, while project-local \`.agents/skills/\` is supported.

## Browse

| Resource | Purpose |
| --- | --- |
| [Skills catalog](docs/skills-catalog.md) | Browse by category, summary, trigger, and license. |
| [Source list](docs/source-list.md) | Check upstream author, adapter, and source. |
| [Taxonomy](${taxonomyFile}) | Review the versioned category mapping. |
| [Machine catalog](manifests/skills-catalog.json) | Consume structured skill metadata. |

## Publication Contract

- Publication uses three inputs: \`skills/*/SKILL.md\` for skill metadata and content, \`${taxonomyFile}\` for category assignments, and \`${overridesFile}\` for reviewed summary and trigger corrections.
- Generated documentation and manifests are deterministic views.
- Author, adapter, source, and license metadata remain separate.

## License

Review each skill's dependencies, permissions, and license before use. The MIT license covers repository packaging, generated documentation, curation, and adaptation work; individual skills retain their supplied licenses, notices, and terms.
`;
}

function render(entries, taxonomy) {
  const enriched = entries.map((entry) => ({ ...entry, category: taxonomy.assignments[entry.name], ...cleanDescription(entry.name, entry.description) }));
  const unknown = entries.filter((entry) => entry.author === "unknown").map((entry) => entry.name);
  const categoryStats = taxonomy.categories.map((category) => ({ ...category, count: enriched.filter((entry) => entry.category === category.id).length }));
  const catalog = { repository: "ChitoLabs/ai-skill-pack", publication_sources: { skills: "skills/*/SKILL.md", taxonomy: taxonomyFile, overrides: overridesFile }, total_skills: entries.length, taxonomy: { schema_version: taxonomy.schema_version, taxonomy_version: taxonomy.taxonomy_version, categories: categoryStats }, attribution_policy: { author: "Preserved from metadata.author without inference", adapter: "Preserved independently from metadata.adapter", unknown_author: "Retained as unknown" }, validation: { entry_points: entries.length, entries_with_source_url: entries.filter(sourceUrl).length, entries_with_author: entries.filter((entry) => entry.author).length, entries_with_unknown_author: unknown.length, unknown_author_skills: unknown }, skills: enriched };
  const inventory = { repository: "ChitoLabs/ai-skill-pack", publication_sources: { skills: "skills/*/SKILL.md", taxonomy: taxonomyFile, overrides: overridesFile }, publication_scope: "Top-level skill entry points", total_skills: entries.length, taxonomy: { schema_version: taxonomy.schema_version, taxonomy_version: taxonomy.taxonomy_version }, published_skills: entries.map((entry) => entry.name) };
  const index = categoryStats.map((category) => `| [${markdown(category.label)}](#${category.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}) | ${category.count} |`).join("\n");
  const sections = categoryStats.map((category) => {
    const rows = enriched.filter((entry) => entry.category === category.id).map((entry) => `| [${markdown(entry.name)}](../${entry.path}) | ${markdown(entry.summary)} | ${entry.triggers.length ? markdown(entry.triggers.join(", ")) : "Not specified"} | ${markdown(entry.license)} |`).join("\n");
    return `## ${category.label}\n\n| Skill | Does | Triggers | License |\n| --- | --- | --- | --- |\n${rows}`;
  }).join("\n\n");
  const sourceRows = entries.map((entry) => { const url = sourceUrl(entry); return `| [${markdown(entry.name)}](../${entry.path}) | ${markdown(entry.author)} | ${markdown(entry.adapter ?? "Not specified")} | ${url ? `[Source](${url})` : "Not supplied"} |`; }).join("\n");
  const readme = `# AI Skill Pack\n\nA curated collection of **${entries.length} generic, portable adaptations** of upstream agent skills. This repository preserves source, author, adapter, and license metadata; publication here is not a claim of original authorship.\n\nThe skills work with Gentle AI and repo-harness workflows while remaining generally usable by runtimes that discover folder-based \`SKILL.md\` skills. Review each selected skill's instructions, dependencies, permissions, and license before use.\n\n## Install One Skill\n\nCopy only the skill you need. OpenCode, Pi, Codex CLI, and Gemini CLI all document the shared global \`~/.agents/skills/\` location:\n\n\`\`\`sh\nmkdir -p ~/.agents/skills\ncp -R skills/systematic-debugging ~/.agents/skills/\n\`\`\`\n\nOn Windows, \`~\` means your user profile directory. Claude Code uses \`~/.claude/skills/\`. AGY CLI uses \`~/.gemini/antigravity-cli/skills/\`, but its official documentation currently describes flat Markdown skills rather than folder-based \`SKILL.md\` packages, so adapt a selected skill before installing it there.\n\n## Compatibility\n\n| Runtime or workflow | Global location | Project location | Evidence status |\n| --- | --- | --- | --- |\n| OpenCode | \`~/.agents/skills/\` | \`.agents/skills/\` | Officially documented |\n| Pi | \`~/.agents/skills/\` | \`.agents/skills/\` | Officially documented |\n| Codex CLI | \`~/.agents/skills/\` | \`.agents/skills/\` | Officially documented |\n| Gemini CLI | \`~/.agents/skills/\` | \`.agents/skills/\` | Officially documented alias |\n| Claude Code | \`~/.claude/skills/\` | \`.claude/skills/\` | Officially documented |\n| AGY CLI | \`~/.gemini/antigravity-cli/skills/\` | \`.agents/skills/\` | Official paths, flat \`.md\` skill format |\n| Gentle AI | Managed for the selected runtime | Workspace scope supported | Official repository documentation |\n| repo-harness | Managed host skill aliases | Repo-local workflow contract | Official repository documentation for Claude and Codex |\n\nEvidence: [OpenCode](https://opencode.ai/docs/skills/), [Pi](https://github.com/badlogic/pi-mono/blob/main/packages/coding-agent/docs/skills.md), [Codex CLI](https://developers.openai.com/codex/skills), [Gemini CLI](https://geminicli.com/docs/cli/skills/), [Claude Code](https://code.claude.com/docs/en/skills), [AGY CLI](https://antigravity.google/docs/cli/plugins/), [Gentle AI](https://github.com/Gentleman-Programming/gentle-ai), and [repo-harness](https://github.com/Ancienttwo/repo-harness).\n\n## Publication Contract\n\n- \`skills/*/SKILL.md\` is the publication source of truth.\n- \`${taxonomyFile}\` is the versioned source of truth for manually reviewed category assignments.\n- Generated catalogs and manifests are deterministic views of those sources.\n- \`metadata.author\` is preserved as supplied and never inferred.\n- \`metadata.adapter\` remains separate from authorship.\n- Unknown authors remain \`unknown\`.\n\n## Repository Layout\n\n| Path | Purpose |\n| --- | --- |\n| \`skills/\` | Published skill folders. |\n| [\`${taxonomyFile}\`](${taxonomyFile}) | Versioned semantic category mapping. |\n| [\`docs/skills-catalog.md\`](docs/skills-catalog.md) | Human discovery catalog. |\n| [\`docs/source-list.md\`](docs/source-list.md) | Source and attribution index. |\n| [\`manifests/skills-catalog.json\`](manifests/skills-catalog.json) | Machine-readable catalog. |\n| [\`scripts/maintain-attribution.mjs\`](scripts/maintain-attribution.mjs) | Read-only validation by default and explicit artifact generation. |\n\n## License\n\nThe MIT license covers repository packaging, generated documentation, curation, and adaptation work. Individual skills retain their supplied licenses, notices, and terms.\n`;
  return new Map([
    ["README.md", renderConciseReadme(entries.length)],
    ["docs/skills-catalog.md", `# Skills Catalog\n\n${entries.length} skills. One row per skill.\n\n## Categories\n\n| Category | Skills |\n| --- | ---: |\n${index}\n\n${sections}\n`],
    ["docs/source-list.md", `# Source and Attribution List\n\nAttribution for all ${entries.length} published skills is reproduced from each skill's frontmatter. Source hosting, publication, distribution, curation, adaptation, or repository ownership is not treated as authorship evidence.\n\n| Skill | Author | Adapter | Source |\n| --- | --- | --- | --- |\n${sourceRows}\n`],
    ["docs/audit-summary.md", `# Publication Audit Summary\n\n## Result\n\n- Published entry points: ${entries.length}\n- Taxonomy assignments: ${Object.keys(taxonomy.assignments).length}\n- Taxonomy categories: ${taxonomy.categories.length}\n- Entry points with valid source URLs: ${entries.filter(sourceUrl).length}\n- Entries with \`author: unknown\`: ${unknown.length}\n- Publication inputs: \`skills/*/SKILL.md\` metadata and content, \`${taxonomyFile}\` categories, and \`${overridesFile}\` reviewed summary and trigger corrections\n\n## Validation\n\nRun \`node scripts/maintain-attribution.mjs\` for a deterministic, read-only consistency and freshness check. URL syntax is validated offline; network reachability is not checked. Use \`--generate\` only to rebuild root publication artifacts, never skill content.\n`],
    ["docs/what-was-done.md", `# What Was Done\n\nThe publication layer was rebuilt from three versioned inputs: ${entries.length} top-level \`skills/*/SKILL.md\` entry points, \`${taxonomyFile}\`, and \`${overridesFile}\`.\n\n- Added a category-based human discovery catalog with concise capability summaries, separate triggers, and licenses.\n- Added deterministic taxonomy, override, and freshness validation.\n- Preserved supplied source, author, adapter, version, and license data.\n- Kept generation read-only by default and limited writes to derived publication artifacts.\n\nSkill contents were not rewritten.\n`],
    ["manifests/skills-catalog.json", `${JSON.stringify(catalog, null, 2).replace(/[\u2013\u2014]/gu, "-")}\n`],
    ["manifests/publication-inventory.json", `${JSON.stringify(inventory, null, 2)}\n`]
  ]);
}

const names = fs.readdirSync(skillsRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort((a, b) => a.localeCompare(b, "en"));
const entries = names.map(parseEntry).filter(Boolean);
if (new Set(entries.map((entry) => entry.name)).size !== entries.length) errors.push("skills: duplicate frontmatter names");
if (entries.length !== 492) errors.push(`skills: expected 492 entry points, found ${entries.length}`);
for (const entry of entries) validateCatalogEntry(entry);
for (const name of Object.keys(overrideConfig.overrides ?? {})) if (!entries.some((entry) => entry.name === name)) errors.push(`${overridesFile}: override references unknown skill '${name}'`);
const taxonomy = loadTaxonomy(entries);
const artifacts = render(entries, taxonomy);

function validateChangelog() {
  const changelog = fs.readFileSync(path.join(root, "CHANGELOG.md"), "utf8");
  const headings = [...changelog.matchAll(/^## \[([^\]]+)\](?:\s+-\s+.*)?$/gm)];
  if (headings[0]?.[1] !== "2026-08-30" || headings[0]?.[0] !== "## [2026-08-30]") errors.push("CHANGELOG.md: first release heading must be exactly '## [2026-08-30]'");
  if (/^## \[?Unreleased\]?/mi.test(changelog)) errors.push("CHANGELOG.md: Unreleased heading is not allowed");
  const current = headings.length ? changelog.slice(headings[0].index, headings[1]?.index ?? changelog.length) : "";
  const requiredFacts = [
    [/466-skill v3 source pack/i, "466-skill replacement"],
    [/3-command v3 collection/i, "3-command replacement sequence"],
    [/expanded[^\n]*492 top-level skills/i, "492-skill expansion sequence"],
    [/three publication inputs/i, "three-input publication model"],
    [/skills\/\*\/SKILL\.md/i, "skill metadata and content input"],
    [/skill-categories\.json/i, "taxonomy input"],
    [/catalog-overrides\.json/i, "reviewed override input"]
  ];
  for (const [pattern, fact] of requiredFacts) if (!pattern.test(current)) errors.push(`CHANGELOG.md: current entry is missing ${fact}`);
}

validateChangelog();
for (const [relativePath, expected] of artifacts) {
  const filePath = path.join(root, ...relativePath.split("/"));
  if (!filePath.startsWith(`${root}${path.sep}`) || filePath.startsWith(`${skillsRoot}${path.sep}`)) errors.push(`${relativePath}: generated path is outside the allowed root artifact boundary`);
  else if (generate && errors.length === 0) { fs.mkdirSync(path.dirname(filePath), { recursive: true }); fs.writeFileSync(filePath, expected, "utf8"); }
  else if (!fs.existsSync(filePath)) errors.push(`${relativePath}: missing generated artifact`);
  else if (fs.readFileSync(filePath, "utf8") !== expected) errors.push(`${relativePath}: stale generated artifact`);
}
for (const [relativePath, content] of artifacts) {
  if (!relativePath.endsWith(".md")) continue;
  for (const match of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|#)/i.test(target)) continue;
    const localPath = decodeURIComponent(target.split("#", 1)[0]);
    const resolved = path.resolve(root, path.dirname(relativePath), localPath);
    if (!fs.existsSync(resolved)) errors.push(`${relativePath}: unresolved local link '${target}'`);
  }
}
for (const relativePath of [taxonomyFile, overridesFile, "CHANGELOG.md", ...artifacts.keys()]) {
  const content = fs.readFileSync(path.join(root, ...relativePath.split("/")), "utf8");
  if (/[\u2013\u2014]/u.test(content)) errors.push(`${relativePath}: forbidden Unicode dash`);
  if (/[ \t]+$/m.test(content)) errors.push(`${relativePath}: trailing whitespace`);
  const privatePath = new RegExp("(?:[A-Z]:" + "\\\\|/" + "Users/|" + "\\\\" + "Users\\\\)");
  if (privatePath.test(content)) errors.push(`${relativePath}: private local path`);
}
console.log(JSON.stringify({ mode: generate ? "generate" : "validate", publication_sources: { skills: "skills/*/SKILL.md", taxonomy: taxonomyFile, overrides: overridesFile }, skills: entries.length, categories: taxonomy.categories.length, unknown_authors: entries.filter((entry) => entry.author === "unknown").length, artifacts: [...artifacts.keys()], errors }, null, 2));
if (errors.length) process.exitCode = 1;
