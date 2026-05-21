# fabric-cli-core

Core skill for Microsoft Fabric CLI operations. **Load this skill first** for any Fabric CLI task.

## What This Skill Provides

- Fabric hierarchy mental model (Tenant → Workspace → Folder → Item → OneLakeItem)
- Path conventions with dot entity suffixes (e.g., `.Workspace`, `.Notebook`)
- Authentication patterns (interactive, SPN, managed identity)
- Hidden entity discovery (`ls -a`)
- Security and sensitive data handling rules
- Critical operational rules
- Common item types reference

## Entry Point

Load [`SKILL.md`](source-skill.md) to activate this skill.

## References

Detailed documentation in the `references/` folder:

| Reference | Description |
|-----------|-------------|
| [quickstart.md](./quickstart.md) | Copy-paste examples for common tasks |
| [reference.md](./reference.md) | All commands with flags and patterns |
| [semantic-models.md](./semantic-models.md) | TMDL, DAX queries, refresh, storage modes |
| [notebooks.md](./notebooks.md) | Job execution, parameters, scheduling |
| [reports.md](./reports.md) | Export, import, rebind to models |
| [workspaces.md](./workspaces.md) | Create, manage, permissions |
| [querying-data.md](./querying-data.md) | DAX and lakehouse table queries |
| [fab-api.md](./fab-api.md) | Direct REST API access patterns |
| [create-workspaces.md](./create-workspaces.md) | Workspace creation workflows |
