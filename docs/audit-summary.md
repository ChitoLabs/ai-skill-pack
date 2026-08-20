# Audit Summary

This staging folder publishes only the curated general skills pack.

## Current Verified State

| Check | Result |
| --- | --- |
| General candidate root | `0_skill_pack_v2` plus `newSkill` additions |
| General skills copied | 466 |
| Every copied folder has `SKILL.md` | Yes |
| Command files copied | 3 |
| Separate Microsoft Fabric candidate folders copied | 0 |
| Duplicate quarantine copied | No |
| Temp or memory backup paths copied | No |
| Skill entry points with author metadata | 466 |
| Skill entry points with source links | 466 |
| Unresolved upstream authors | 7 |

## Source Audit Notes

The current repository inventory reports 466 published skill folders with `SKILL.md`. This includes the prior curated general pack plus `hallmark`, `i-have-adhd`, and `impeccable` from the `newSkill` source folder.

The repository also includes 3 optional command files from the `newCommand` source folder. These command files route to the matching newly added skills.

Historical download triage still records dropped, mapped, duplicate, or out-of-scope entries. The publication artifacts prefer the final curated folder names under `skills/`.

Attribution metadata preserves an explicit upstream author when present, otherwise it uses the official skills.sh publisher namespace. GitHub repository ownership alone is not treated as personal authorship. When upstream frontmatter and official publisher metadata do not establish an author, the value remains `unknown`.

## Caveats

`ask-matt` is a router skill from a broader ecosystem and references companion skills that are not all present in this repository. Its own contract includes manual fallback guidance when a named companion skill is unavailable.
