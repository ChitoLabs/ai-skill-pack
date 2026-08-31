import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const generate = process.argv.includes("--generate");
const skillsRoot = path.join(root, "skills");
const errors = [];

function unquote(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseEntry(name) {
  const relativePath = `skills/${name}/SKILL.md`;
  const filePath = path.join(root, ...relativePath.split("/"));
  if (!fs.existsSync(filePath)) {
    errors.push(`${relativePath}: missing entry point`);
    return null;
  }

  const content = fs.readFileSync(filePath, "utf8");
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    errors.push(`${relativePath}: missing YAML-like frontmatter`);
    return null;
  }

  const lines = match[1].split(/\r?\n/);
  const top = {};
  const metadata = {};
  let inMetadata = false;
  for (const line of lines) {
    if (/^metadata:\s*$/.test(line)) {
      inMetadata = true;
      continue;
    }
    const field = line.match(inMetadata ? /^  ([A-Za-z0-9_-]+):\s*(.*?)\s*$/ : /^([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
    if (field) (inMetadata ? metadata : top)[field[1]] = unquote(field[2]);
  }

  for (const key of ["name", "description", "license"]) {
    if (!top[key]) errors.push(`${relativePath}: missing ${key}`);
  }
  for (const key of ["author", "version"]) {
    if (!metadata[key]) errors.push(`${relativePath}: missing metadata.${key}`);
  }
  if (top.name !== name) errors.push(`${relativePath}: name '${top.name ?? ""}' does not match folder '${name}'`);
  if (metadata.author === "LCubero") errors.push(`${relativePath}: adapter LCubero must not be represented as author`);

  const sourceUrls = [metadata.github_url, metadata.skills_sh_url, metadata.homepage].filter(Boolean);
  for (const url of sourceUrls) {
    try {
      const parsed = new URL(url);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error("unsupported protocol");
    } catch {
      errors.push(`${relativePath}: invalid source URL '${url}'`);
    }
  }

  return {
    name,
    path: `skills/${name}/`,
    description: top.description ?? "",
    license: top.license ?? "",
    author: metadata.author ?? "",
    adapter: metadata.adapter || null,
    version: metadata.version ?? "",
    github_url: metadata.github_url || null,
    skills_sh_url: metadata.skills_sh_url || null,
    homepage: metadata.homepage || null,
  };
}

function markdown(value) {
  return String(value)
    .replace(/[\u2013\u2014]/gu, "-")
    .replaceAll("|", "\\|")
    .replaceAll("\r", " ")
    .replaceAll("\n", " ");
}

function sourceUrl(entry) {
  return entry.github_url ?? entry.skills_sh_url ?? entry.homepage;
}

function render(entries) {
  const unknown = entries.filter((entry) => entry.author === "unknown").map((entry) => entry.name);
  const catalog = {
    repository: "ChitoLabs/ai-skill-pack",
    source_of_truth: "skills/*/SKILL.md",
    total_skills: entries.length,
    attribution_policy: {
      author: "Preserved from metadata.author without inference",
      adapter: "Preserved independently from metadata.adapter",
      unknown_author: "Retained as unknown",
    },
    validation: {
      entry_points: entries.length,
      entries_with_source_url: entries.filter((entry) => sourceUrl(entry)).length,
      entries_with_author: entries.filter((entry) => entry.author).length,
      entries_with_unknown_author: unknown.length,
      unknown_author_skills: unknown,
    },
    skills: entries,
  };
  const inventory = {
    repository: "ChitoLabs/ai-skill-pack",
    source_of_truth: "skills/*/SKILL.md",
    publication_scope: "Top-level skill entry points",
    total_skills: entries.length,
    published_skills: entries.map((entry) => entry.name),
  };

  const catalogRows = entries.map((entry) => `| [${markdown(entry.name)}](../${entry.path}) | ${markdown(entry.description)} | ${markdown(entry.license)} |`).join("\n");
  const sourceRows = entries.map((entry) => {
    const url = sourceUrl(entry);
    return `| [${markdown(entry.name)}](../${entry.path}) | ${markdown(entry.author)} | ${markdown(entry.adapter ?? "Not specified")} | ${url ? `[Source](${url})` : "Not supplied"} |`;
  }).join("\n");
  const unknownText = unknown.length ? unknown.map((name) => `\`${name}\``).join(", ") : "None";

  return new Map([
    ["README.md", `# AI Skill Pack\n\nA portable collection of **${entries.length} skills** adapted for agents that support folder-based skills with a \`SKILL.md\` entry point.\n\n## Use\n\nCopy the skill folders you need from \`skills/\` into your runtime's skill directory. Review each skill's instructions, dependencies, permissions, and license before use.\n\n## Publication Contract\n\n- \`skills/*/SKILL.md\` is the sole publication source of truth.\n- Catalogs and manifests are deterministic views of those ${entries.length} entry points.\n- \`metadata.author\` is preserved as supplied. It is never inferred from a publisher, distributor, curator, adapter, source URL, or repository owner.\n- \`metadata.adapter\` remains separate from authorship.\n- Unknown authors remain \`unknown\`.\n\n## Repository Layout\n\n| Path | Purpose |\n| --- | --- |\n| \`skills/\` | Published skill folders. |\n| [\`docs/skills-catalog.md\`](docs/skills-catalog.md) | Human-readable skill index. |\n| [\`docs/source-list.md\`](docs/source-list.md) | Source and attribution index. |\n| [\`manifests/skills-catalog.json\`](manifests/skills-catalog.json) | Machine-readable catalog. |\n| [\`manifests/publication-inventory.json\`](manifests/publication-inventory.json) | Deterministic publication inventory. |\n| [\`scripts/maintain-attribution.mjs\`](scripts/maintain-attribution.mjs) | Read-only validation by default, with explicit artifact generation. |\n\n## License\n\nThe MIT license covers repository packaging, generated documentation, curation, and adaptation work. Individual skills retain their supplied licenses, notices, and terms.\n`],
    ["docs/skills-catalog.md", `# Skills Catalog\n\nAlphabetical index of all ${entries.length} published skill entry points. Generated from \`skills/*/SKILL.md\`.\n\n| Skill | Description | License |\n| --- | --- | --- |\n${catalogRows}\n`],
    ["docs/source-list.md", `# Source and Attribution List\n\nAttribution for all ${entries.length} published skills is reproduced from each skill's frontmatter. Source hosting, publication, distribution, curation, adaptation, or repository ownership is not treated as authorship evidence.\n\n| Skill | Author | Adapter | Source |\n| --- | --- | --- | --- |\n${sourceRows}\n`],
    ["docs/audit-summary.md", `# Publication Audit Summary\n\n## Result\n\n- Published entry points: ${entries.length}\n- Entry points with valid source URLs: ${entries.filter((entry) => sourceUrl(entry)).length}\n- Entry points without a supplied source URL: ${entries.filter((entry) => !sourceUrl(entry)).length}\n- Entry points with an author value: ${entries.length}\n- Entries with \`author: unknown\`: ${unknown.length}\n- Publication source of truth: \`skills/*/SKILL.md\`\n\n## Attribution Boundary\n\nThe audit preserves \`metadata.author\` exactly as supplied. It does not infer authorship from skills.sh publishers, distributors, curators, adapters, GitHub repository owners, or URLs. \`metadata.adapter\` is represented separately. Missing source URLs remain explicitly unsupplied rather than being invented.\n\nUnknown authors: ${unknownText}.\n\n## Validation\n\nRun \`node scripts/maintain-attribution.mjs\` for a read-only consistency check. Use \`--generate\` only to rebuild derived publication artifacts from the current skill entry points.\n`],
    ["docs/what-was-done.md", `# What Was Done\n\nThe publication layer was rebuilt from the user-owned replacement under \`skills/\`.\n\n## Changes\n\n- Treated the ${entries.length} top-level \`skills/*/SKILL.md\` files as the sole publication source.\n- Removed obsolete command-era publication artifacts.\n- Regenerated concise catalogs and manifests in deterministic name order.\n- Replaced attribution mutation with a read-only validator that preserves supplied authors, including \`unknown\`.\n- Kept adapter attribution separate from original authorship.\n\n## Boundary\n\nSkill contents were not normalized or rewritten by publication generation. No dependencies were installed, and no files were staged, committed, or pushed.\n`],
    ["manifests/skills-catalog.json", `${JSON.stringify(catalog, null, 2).replace(/[\u2013\u2014]/gu, "-")}\n`],
    ["manifests/publication-inventory.json", `${JSON.stringify(inventory, null, 2)}\n`],
  ]);
}

const names = fs.readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b, "en"));
const entries = names.map(parseEntry).filter(Boolean);
const uniqueNames = new Set(entries.map((entry) => entry.name));
if (uniqueNames.size !== entries.length) errors.push("skills: duplicate frontmatter names");
if (entries.length !== 492) errors.push(`skills: expected 492 entry points, found ${entries.length}`);

const artifacts = render(entries);
for (const [relativePath, expected] of artifacts) {
  const filePath = path.join(root, ...relativePath.split("/"));
  if (generate) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, expected, "utf8");
  } else if (!fs.existsSync(filePath)) {
    errors.push(`${relativePath}: missing generated artifact`);
  } else if (fs.readFileSync(filePath, "utf8") !== expected) {
    errors.push(`${relativePath}: stale generated artifact`);
  }
}

for (const relativePath of artifacts.keys()) {
  const content = fs.readFileSync(path.join(root, ...relativePath.split("/")), "utf8");
  if (/[\u2013\u2014]/u.test(content)) errors.push(`${relativePath}: forbidden Unicode dash`);
  if (/[ \t]+$/m.test(content)) errors.push(`${relativePath}: trailing whitespace`);
  if (/(?:[A-Za-z]:\\|\/Users\/|\\Users\\)/i.test(content)) errors.push(`${relativePath}: private local path`);
}

const result = {
  mode: generate ? "generate" : "validate",
  source_of_truth: "skills/*/SKILL.md",
  skills: entries.length,
  unknown_authors: entries.filter((entry) => entry.author === "unknown").length,
  artifacts: [...artifacts.keys()],
  errors,
};
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
