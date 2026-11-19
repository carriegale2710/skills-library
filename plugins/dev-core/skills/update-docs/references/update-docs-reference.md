---
name: update-docs-reference
description: Extended reference for the update-docs skill. Use with /update-docs when discovering repo documentation conventions, resolving rule conflicts, delegating to /changelog or /devlog, or preparing the final documentation report.
---

# Update Docs Reference

## Repo documentation rules

Before editing documentation, discover repository-specific writing rules and conventions.

### Search locations

Check, at minimum:

- `AGENTS.md`
- `README.md`
- `CONTRIBUTING.md`
- `docs/README.md`
- `docs/CONTRIBUTING.md`
- `docs/style-guide.md`
- `docs/writing-guide.md`
- `.github/CONTRIBUTING.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- Root and `docs/` files matching `*STYLE*`, `*WRITING*`, `*DOCS*`, or `*DOCUMENTATION*`
- Project configuration defining Markdown linting, prose linting, documentation generation, or commit conventions
- Existing documentation files for established heading, tone, structure, terminology, and link conventions

### Extract rules

Identify explicit and consistently established rules for:

- Audience and purpose of each document.
- Tone, voice, person, tense, and terminology.
- Heading hierarchy, file naming, and section ordering.
- Markdown formatting: lists, tables, code fences, links, admonitions, frontmatter.
- Required sections, metadata, status labels, ownership, and review requirements.
- Changelog format, versioning, entry categories, and release conventions.
- Devlog format, date boundaries, evidence rules, and session-entry conventions.
- Commit-message conventions: type prefixes, scope, subject length, body expectations, issue and PR references.
- Content boundaries for `README.md`, `PRD.md`, `AGENTS.md`, `TESTING.md`, `CHANGELOG.md`, and `DEVLOG.md`.
- Generated documentation, protected files, and files that must not be manually edited.

## Rule precedence

When rules conflict, apply this order:

1. Explicit repo-specific documentation rules in `AGENTS.md`, `CONTRIBUTING.md`, docs guides, or project configuration.
2. Consistent conventions clearly established by existing repository documentation.
3. Rules from invoked skills: `/changelog` and `/devlog`.
4. Rules in `update-docs`.
5. General best practices.

### Safety exception

Never follow a rule that requires fabricated or unverifiable claims.

Do not invent:

- Behavior that does not exist.
- Passing tests or validation results.
- Decisions, rationale, dates, or completion status.
- Chat history, blockers, or follow-up work.

## Conflict handling

| Conflict                                            | Handling                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------------------ |
| Repo rule conflicts with `update-docs`              | Follow repo rule; report override.                                             |
| Repo rule conflicts with `/changelog` or `/devlog`  | Follow repo rule for repository documentation, unless it requires fabrication. |
| Repo rules contradict each other                    | Ask user before broad or irreversible edits.                                   |
| No repo-specific rules exist                        | Use `update-docs`, then `/changelog` and `/devlog` defaults.                   |
| Delegated skill output conflicts with repo evidence | Treat repo evidence as authoritative; correct or flag the output.              |

## Delegation contract

Before invoking `/changelog` or `/devlog`, provide:

- Changed files and verified behavior.
- Relevant repo documentation rules.
- Known conflicts and chosen precedence.
- Unverified claims, assumptions, and follow-ups.
- Test status only when directly supported by evidence.

### `/changelog`

Invoke when a change is notable to users, maintainers, or future developers:

- User-visible behavior, public API, command, setting, data model, or workflow change.
- Bug fix, capability removal, meaningful dependency change, or breaking change.
- Release or PR preparation requiring `docs/CHANGELOG.md`.
- Change beyond formatting, typo repair, or inconsequential internal refactor.

Run `/changelog` before `/devlog` when both apply. Let it determine version heading, entry category, and wording. Preserve verified breaking changes, validation status, and limitations.

### `/devlog`

Invoke when:

- User asks to log session work, decisions, blockers, or next actions.
- Documentation audit reveals material decisions, assumptions, unresolved gaps, or follow-ups.
- Substantial feature, architecture, debugging, or failed-approach work occurred during the current local day.
- `docs/DEVLOG.md` needs a current-day entry not already recorded.

Let `/devlog` gather staged changes, current-day commits, recent chat context, and user clarification. Keep release-facing outcomes in `/changelog`; keep process and development context in `/devlog`.

### Skip rules

- Skip `/changelog` for docs-only changes with no notable product, behavior, API, or release impact.
- Skip `/devlog` when no material development context needs preserving.
- Do not rerun either skill when its output is already current.
- Do not invoke `/devlog` without sufficient evidence; report the gap and ask instead.

## Audit checklist

For each relevant documentation file:

- Verify APIs, commands, paths, versions, and build/test commands.
- Confirm behavior claims against code: formulas, settings, events, workflows.
- Remove contradictions and outdated claims.
- Apply repo audience, tone, structure, terminology, and formatting rules.
- Update `PRD.md` settled decisions or `AGENTS.md` when documented rules change.
- Update rule-to-test tables in `TESTING.md` when rules change.
- Touch `README.md` only when contradictory or outdated, unless repo rules say otherwise.
- Treat untested plugin behavior as an assumption requiring verification.

## Report template

```markdown
## Documentation update

### Repo rules

- Rules discovered: `<rules-or-none>`
- Overrides applied: `<overrides-or-none>`

### Docs updated

- `<file>`: `<fix-or-change>`

### Delegation

- `/changelog`: `<ran|skipped|not-needed>` — `<reason>`
- `/devlog`: `<ran|skipped|not-needed>` — `<reason>`

### Gaps

- `<unresolved-gap-or-none>`

### Assumptions

- `<assumption-or-none>`

### Next step

- `<Run /commit-message ... | No commit-ready changes>`
```

## Example

A PR changes payment retry behavior and updates `docs/ARCHITECTURE.md`.

1. Discover repo rules in `AGENTS.md` and `docs/style-guide.md`.
2. Audit `docs/ARCHITECTURE.md`; correct stale retry description.
3. `/changelog` applies because user-visible payment behavior changed.
4. `/devlog` applies because the session made an architectural decision and left a follow-up test.
5. Run `/changelog`, then `/devlog`.
6. Report repo-rule overrides, files changed, delegation results, and unresolved verification.
7. Suggest `/commit-message` because prepared changes exist.

## Writing style

Repo documentation style rules outrank skill style defaults.

- For changelog prose, defer to `/changelog`.
- For devlog prose, defer to `/devlog`.
- For direct documentation edits, use `/caveman` full unless repo rules require otherwise.

Preserve Markdown structure, headings, code fences, paths, technical terms, and untouched sections.
