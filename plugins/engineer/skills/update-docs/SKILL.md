---
name: update-docs
description: Audits and syncs project documentation with current code and behavior. Use before a release or PR, when a commit is ready to merge, when asked to "update docs", "keep docs in sync", or "check documentation", or after a behavior, API, or architectural change.
user-invocable: true
---

# Update Docs

## Quick start

1. Discover repo documentation rules and conventions.
2. Inventory docs and changed code areas.
3. Audit each doc against verified code behavior.
4. Fix stale, contradictory, or missing documentation.
5. Invoke `/changelog` and `/devlog` when applicable.
6. Report results and suggest `/commit-message` if changes are ready.

Goal: zero drift between code and docs.

## Repo rules first

Before editing, discover repo-specific documentation rules.

Check `AGENTS.md`, `README.md`, `CONTRIBUTING.md`, `docs/README.md`, `docs/CONTRIBUTING.md`, `.github/CONTRIBUTING.md`, style/writing guides, documentation config, and existing docs.

Extract rules for audience, tone, terminology, headings, Markdown, required sections, changelog format, devlog format, commit-message conventions, generated files, and protected files.

Priority when rules conflict:

1. Explicit repo documentation rules.
2. Established repo conventions.
3. `/changelog` and `/devlog` rules.
4. This skill.
5. General best practice.

Never follow a rule that requires invented behavior, tests, decisions, dates, or completion claims.

See [`update-docs-reference.md`](references/update-docs-reference.md) for the full discovery checklist, conflict matrix, delegation contract, and examples.

## Workflows

### 1. Inventory

- List docs: `README.md`, `PRD.md`, `AGENTS.md`, `TESTING.md`, `BUILD_PROMPT.md`, `CHANGELOG.md`, `DEVLOG.md`, `PLUGINS.md`, `STEP*.md`, and other root/docs Markdown.
- Identify changed areas from git status, recent commits, engine/script files, macros, and settings schema.
- Classify each change as documentation drift, changelog-worthy, devlog-worthy, both, or neither.

### 2. Audit

For each relevant doc:

- Verify factual claims: APIs, commands, paths, versions, build/test commands.
- Confirm documented behavior matches code: formulas, settings, events.
- Remove contradictions and outdated claims.
- Apply repo tone, structure, terminology, and formatting rules.
- Update `PRD.md` settled decisions or `AGENTS.md` when a documented rule changes.
- Update the rule-to-test table in `TESTING.md` when rules change.
- Touch `README.md` only when contradictory or outdated, unless repo rules say otherwise.
- Never claim unbuilt behavior, passing tests, or completed work without evidence.

### 3. Delegate

Invoke `/changelog` when a user-visible behavior, API, command, setting, data model, workflow, dependency, bug fix, removal, or breaking change is notable.

Invoke `/devlog` when the user asks to log the session, or when material work, decisions, failures, assumptions, blockers, or follow-ups need a current-day development record.

Before either invocation, provide:

- Changed files and verified behavior.
- Relevant repo documentation rules.
- Known conflicts and chosen precedence.
- Unverified claims, assumptions, and follow-ups.

Run `/changelog` before `/devlog` when both apply.

Skip `/changelog` for docs-only changes with no notable product, behavior, API, or release impact. Skip `/devlog` when no material development context needs preserving. Do not rerun either skill if its output is already current.

### 4. Report

Summarize:

- Repo rules discovered and applied.
- Repo-rule overrides of this skill, `/changelog`, or `/devlog`.
- Docs touched and claims fixed.
- Whether `/changelog` and `/devlog` ran, were skipped, or were unnecessary—and why.
- Unresolved gaps, assumptions, and manual verification needed.

## Next step

If documentation, changelog, devlog, code, tests, or configuration changes are ready to commit, suggest:

```text
Run /commit-message to create a commit message for the prepared changes.
```

Do not stage, commit, push, or run `/commit-message` automatically. If no changes are ready, state that it is not needed.

## Rules

- Make small, focused edits; preserve formatting.
- Do not invent behavior; ask when ambiguous.
- Treat untested plugin behavior as an assumption to verify.
- Prefer dedicated skills over duplicating their workflows.
- Repo documentation rules outrank skill defaults when they conflict.
- Never let delegated skill output contradict verified repo evidence.

## Writing style

Repo documentation style rules outrank skill style defaults.

- For changelog prose, defer to `/changelog`.
- For devlog prose, defer to `/devlog`.
- For direct documentation edits, use `/caveman` full unless repo rules require otherwise.

Preserve Markdown structure, headings, code fences, paths, technical terms, and untouched sections.
