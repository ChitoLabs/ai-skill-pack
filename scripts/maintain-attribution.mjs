import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const apply = process.argv.includes("--write");
const catalogPath = path.join(root, "manifests", "skills-catalog.json");
const publicationPath = path.join(
  root,
  "manifests",
  "skill-sanitize-upgrade-manifest.json",
);
const ambiguousPublishers = new Set(["site"]);

const stats = {
  mode: apply ? "apply" : "dry-run",
  skills: 0,
  proposedCorrections: [],
  appliedCorrections: 0,
  unresolved: [],
  errors: [],
};
const plannedFiles = new Map();

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    stats.errors.push(`${path.relative(root, filePath)}: invalid JSON: ${error.message}`);
    return null;
  }
}

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function requireString(record, key, context, { nullable = false } = {}) {
  const value = record[key];
  if (nullable && value === null) return;
  if (typeof value !== "string" || value.length === 0) {
    stats.errors.push(`${context}.${key}: expected ${nullable ? "string or null" : "non-empty string"}`);
  }
}

function validateUnique(records, key, context) {
  const seen = new Set();
  for (const record of records) {
    const value = record?.[key];
    if (typeof value !== "string") continue;
    if (seen.has(value)) stats.errors.push(`${context}: duplicate ${key} '${value}'`);
    seen.add(value);
  }
}

function validateCatalog(catalog) {
  if (!isObject(catalog)) return stats.errors.push("skills-catalog.json: expected object");
  if (!Array.isArray(catalog.skills)) return stats.errors.push("skills-catalog.json.skills: expected array");
  if (!isObject(catalog.validation)) stats.errors.push("skills-catalog.json.validation: expected object");
  if (typeof catalog.total_skills !== "number") stats.errors.push("skills-catalog.json.total_skills: expected number");
  validateUnique(catalog.skills, "name", "skills-catalog.json.skills");
  for (const [index, record] of catalog.skills.entries()) {
    const context = `skills-catalog.json.skills[${index}]`;
    if (!isObject(record)) {
      stats.errors.push(`${context}: expected object`);
      continue;
    }
    for (const key of ["name", "path", "source_url", "author"]) requireString(record, key, context);
  }
}

function validatePublication(publication) {
  if (!isObject(publication)) return stats.errors.push("skill-sanitize-upgrade-manifest.json: expected object");
  if (!Array.isArray(publication.included_records)) {
    return stats.errors.push("skill-sanitize-upgrade-manifest.json.included_records: expected array");
  }
  validateUnique(publication.included_records, "skill", "skill-sanitize-upgrade-manifest.json.included_records");
  for (const [index, record] of publication.included_records.entries()) {
    const context = `skill-sanitize-upgrade-manifest.json.included_records[${index}]`;
    if (!isObject(record)) {
      stats.errors.push(`${context}: expected object`);
      continue;
    }
    for (const key of ["skill", "source_skill", "author", "author_action", "status"]) {
      requireString(record, key, context);
    }
    requireString(record, "github_url", context, { nullable: true });
    requireString(record, "skills_sh_url", context, { nullable: true });
    if (record.author_action === "set-to-LCubero") {
      stats.errors.push(`${context}.author_action: obsolete attribution default is forbidden`);
    }
  }
}

function frontmatterValue(content, key) {
  const match = content.match(new RegExp(`^\\s{2}${key}:\\s*(.+?)\\s*$`, "m"));
  if (!match) return null;
  return match[1].trim().replace(/^(?:"([^"]*)"|'([^']*)')$/, "$1$2");
}

function skillsShPublisher(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (!/^(www\.)?skills\.sh$/i.test(parsed.hostname)) return null;
    const publisher = parsed.pathname.split("/").filter(Boolean)[0] ?? null;
    return publisher && !ambiguousPublishers.has(publisher.toLowerCase())
      ? publisher
      : null;
  } catch {
    return null;
  }
}

function addMetadataUrl(content, key, url) {
  const versionLine = /^(\s{2}version:[^\r\n]*)(\r?\n)/m;
  if (!versionLine.test(content)) return content;
  return content.replace(versionLine, `$1$2  ${key}: "${url}"$2`);
}

function replaceAuthor(content, author) {
  return content.replace(
    /^(\s{2}author:)\s*[^\r\n]+$/m,
    `$1 ${author}`,
  );
}

function propose(kind, target, detail) {
  stats.proposedCorrections.push({ kind, target, detail });
}

function planFile(filePath, content, detail) {
  if (fs.readFileSync(filePath, "utf8") === content) return;
  plannedFiles.set(filePath, content);
  propose("file", path.relative(root, filePath).replaceAll(path.sep, "/"), detail);
}

function atomicWrite(filePath, content) {
  const tempPath = `${filePath}.${process.pid}.${Math.random().toString(16).slice(2)}.tmp`;
  const mode = fs.statSync(filePath).mode;
  try {
    fs.writeFileSync(tempPath, content, { mode });
    fs.renameSync(tempPath, filePath);
  } finally {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

function nestedSkillFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return nestedSkillFiles(entryPath);
    if (entry.name !== "SKILL.md") return [];
    const relative = path.relative(path.join(root, "skills"), entryPath);
    return relative.split(path.sep).length > 2 ? [entryPath] : [];
  });
}

const diskCatalog = readJson(catalogPath);
const diskPublication = readJson(publicationPath);
if (diskCatalog) validateCatalog(diskCatalog);
if (diskPublication) validatePublication(diskPublication);

if (stats.errors.length === 0) {
  const nextCatalog = structuredClone(diskCatalog);
  const nextPublication = structuredClone(diskPublication);
  const diskCatalogByName = new Map(diskCatalog.skills.map((record) => [record.name, record]));
  const diskPublicationByName = new Map(
    diskPublication.included_records.map((record) => [record.skill, record]),
  );
  const nextCatalogByName = new Map(nextCatalog.skills.map((record) => [record.name, record]));
  const nextPublicationByName = new Map(
    nextPublication.included_records.map((record) => [record.skill, record]),
  );
  const skillNames = fs
    .readdirSync(path.join(root, "skills"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  stats.skills = skillNames.length;

  if (diskCatalog.total_skills !== skillNames.length) {
    stats.errors.push(`skills-catalog.json.total_skills: expected ${skillNames.length}`);
  }
  if (diskCatalog.skills.length !== skillNames.length) {
    stats.errors.push(`skills-catalog.json.skills: expected ${skillNames.length} records`);
  }
  if (diskPublication.included_records.length !== skillNames.length) {
    stats.errors.push(`skill-sanitize-upgrade-manifest.json.included_records: expected ${skillNames.length} records`);
  }

  for (const name of skillNames) {
    const skillPath = path.join(root, "skills", name, "SKILL.md");
    const diskCatalogEntry = diskCatalogByName.get(name);
    const diskPublicationEntry = diskPublicationByName.get(name);
    const nextCatalogEntry = nextCatalogByName.get(name);
    const nextPublicationEntry = nextPublicationByName.get(name);
    if (!fs.existsSync(skillPath)) {
      stats.errors.push(`${name}: missing SKILL.md`);
      continue;
    }
    if (!diskCatalogEntry || !diskPublicationEntry) {
      stats.errors.push(`${name}: missing central catalog or publication record`);
      continue;
    }

    let skillContent = fs.readFileSync(skillPath, "utf8");
    const sourcePath = path.join(root, "skills", name, "references", "source-skill.md");
    let sourceContent = fs.existsSync(sourcePath) ? fs.readFileSync(sourcePath, "utf8") : null;
    const sourceAuthor = sourceContent ? frontmatterValue(sourceContent, "author") : null;
    const explicitSourceAuthor = sourceAuthor && !["LCubero", "unknown", "site"].includes(sourceAuthor)
      ? sourceAuthor
      : null;
    let skillsShUrl = frontmatterValue(skillContent, "skills_sh_url");
    let githubUrl = frontmatterValue(skillContent, "github_url");
    const candidateUrls = [
      diskPublicationEntry.skills_sh_url,
      diskPublicationEntry.github_url,
      diskCatalogEntry.source_url,
    ].filter(Boolean);

    if (!skillsShUrl) {
      const candidate = candidateUrls.find((url) => skillsShPublisher(url));
      if (candidate) {
        skillContent = addMetadataUrl(skillContent, "skills_sh_url", candidate);
        skillsShUrl = candidate;
        propose("metadata", `skills/${name}/SKILL.md`, "add verified skills.sh URL");
      }
    }
    if (!githubUrl) {
      const candidate = candidateUrls.find((url) => {
        try {
          return new URL(url).hostname.toLowerCase() === "github.com";
        } catch {
          return false;
        }
      });
      if (candidate) {
        skillContent = addMetadataUrl(skillContent, "github_url", candidate);
        githubUrl = candidate;
        propose("metadata", `skills/${name}/SKILL.md`, "add verified GitHub URL");
      }
    }

    const currentAuthor = frontmatterValue(skillContent, "author");
    const publisher = skillsShPublisher(skillsShUrl);
    const ambiguousCurrentAuthor = currentAuthor === "site";
    const author = currentAuthor === "LCubero" || currentAuthor === "unknown" || ambiguousCurrentAuthor
      ? explicitSourceAuthor ?? publisher ?? "unknown"
      : currentAuthor;
    if (!author) {
      stats.errors.push(`${name}: missing author`);
      continue;
    }
    if (currentAuthor !== author) {
      skillContent = replaceAuthor(skillContent, author);
      propose("metadata", `skills/${name}/SKILL.md`, `author ${currentAuthor ?? "missing"} -> ${author}`);
    }
    if (author === "unknown") stats.unresolved.push(`skills/${name}/SKILL.md`);

    if (sourceContent && frontmatterValue(sourceContent, "author") !== author) {
      sourceContent = replaceAuthor(sourceContent, author);
      planFile(sourcePath, sourceContent, `synchronize author to ${author}`);
    }
    planFile(skillPath, skillContent, `synchronize author and source metadata`);

    if (diskCatalogEntry.author !== author) {
      propose("manifest", `manifests/skills-catalog.json#${name}`, `author ${diskCatalogEntry.author} -> ${author}`);
      nextCatalogEntry.author = author;
    }
    if (diskPublicationEntry.author !== author) {
      propose("manifest", `manifests/skill-sanitize-upgrade-manifest.json#${name}`, `author ${diskPublicationEntry.author} -> ${author}`);
      nextPublicationEntry.author = author;
    }
    const expectedAction = author === "unknown"
      ? "corrected-to-unknown"
      : diskPublicationEntry.author_action;
    if (diskPublicationEntry.author_action !== expectedAction) {
      propose("manifest", `manifests/skill-sanitize-upgrade-manifest.json#${name}`, `author_action -> ${expectedAction}`);
      nextPublicationEntry.author_action = expectedAction;
    }
    for (const [key, value] of [["skills_sh_url", skillsShUrl], ["github_url", githubUrl]]) {
      const expected = value ?? null;
      if (diskPublicationEntry[key] !== expected) {
        propose("manifest", `manifests/skill-sanitize-upgrade-manifest.json#${name}`, `${key} -> ${expected}`);
        nextPublicationEntry[key] = expected;
      }
    }
    if (!skillsShUrl && !githubUrl) stats.errors.push(`${name}: missing official source link`);
  }

  for (const companionPath of nestedSkillFiles(path.join(root, "skills"))) {
    const content = fs.readFileSync(companionPath, "utf8");
    if (/^\s{2}author:\s*LCubero\s*$/m.test(content)) {
      const author = skillsShPublisher(frontmatterValue(content, "skills_sh_url")) ?? "unknown";
      planFile(companionPath, replaceAuthor(content, author), `remove false author in companion skill`);
    }
  }

  nextCatalog.validation.entries_with_author = nextCatalog.skills.filter(
    (record) => typeof record.author === "string" && record.author.length > 0,
  ).length;
  nextCatalog.validation.entries_with_unknown_author = nextCatalog.skills.filter(
    (record) => record.author === "unknown",
  ).length;
  nextCatalog.validation.unknown_author_skills = nextCatalog.skills
    .filter((record) => record.author === "unknown")
    .map((record) => record.name);

  const nextCatalogText = `${JSON.stringify(nextCatalog, null, 2)}\n`;
  const nextPublicationText = `${JSON.stringify(nextPublication, null, 2)}\n`;
  if (fs.readFileSync(catalogPath, "utf8") !== nextCatalogText) plannedFiles.set(catalogPath, nextCatalogText);
  if (fs.readFileSync(publicationPath, "utf8") !== nextPublicationText) plannedFiles.set(publicationPath, nextPublicationText);

  if (apply && stats.errors.length === 0) {
    for (const [filePath, content] of plannedFiles) atomicWrite(filePath, content);
    stats.appliedCorrections = stats.proposedCorrections.length;
  }
}

if (!apply && stats.proposedCorrections.length > 0) {
  stats.errors.push(`${stats.proposedCorrections.length} unapplied corrections detected`);
}

console.log(JSON.stringify(stats, null, 2));
if (stats.errors.length > 0) process.exitCode = 1;
