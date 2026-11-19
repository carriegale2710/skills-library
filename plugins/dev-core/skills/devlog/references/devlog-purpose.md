# Reference for Devlog Purpose

> Supporting reference for the `devlog` skill. Explains why `docs/DEVLOG.md` exists, what belongs in it, and how it differs from `docs/CHANGELOG.md`.

## Purpose and scope

A devlog is a dated working journal for development. Its core purpose is to preserve session context—goals, work, decisions, failures, blockers, and next actions—so future maintainers can resume efficiently.

In scope: devlog purpose, audience, content boundary, and distinction from changelogs. Out of scope: entry format, Git commands, staging rules, chat-history limits, versioning, and release publishing.

Keywords: devlog purpose, development journal, session log, engineering log, changelog difference, release notes, working session, decisions, blockers.

## Core job

A devlog answers: **“What happened during development, why, and what remains unresolved?”**

It helps future-you or another maintainer:

- Resume a feature without reconstructing intent from commits.
- Understand why a non-obvious approach was chosen.
- Avoid repeating failed experiments.
- Find open blockers, risks, and next actions.
- Preserve context that code, commit messages, and issue trackers lose.

## What belongs in a devlog

Include development context with lasting value:

- Session goal
- Outcome-level work performed
- Decisions and rationale
- Rejected alternatives
- Bugs, errors, failed approaches
- Useful learnings and constraints
- Blockers and next actions
- Links to branches, PRs, issues, tests, files, and relevant chats
- Open questions, assumptions, and evidence conflicts

## What does not belong

Exclude:

- Diary commentary without technical consequence
- A commit-by-commit replay
- Empty activity statements such as “worked on feature”
- Unevidenced claims about tests, behaviour, or completion
- Fabricated chat history or invented rationale
- Secrets, credentials, large generated output, or binary dumps
- User-facing release notes

## Devlog versus changelog

| Artifact | Core question | Primary audience | Cadence | Content |
|---|---|---|---|---|
| `docs/DEVLOG.md` | “What happened during development, and why?” | Future maintainers and collaborators | Per local day, or per distinct feature/area when warranted | Goals, work, decisions, failures, blockers, next actions |
| `docs/CHANGELOG.md` | “What changed between releases for users?” | Users, integrators, maintainers | Per notable change or release | User-visible additions, changes, fixes, deprecations, removals, security fixes |

A devlog records the **process and context** behind development. A changelog records the **user-visible outcome** of releases.

## Same work, two records

Example: invoice PDFs showed UTC instead of the workspace timezone.

### Devlog entry

```markdown
### Did

- Found UTC rendering in `formatInvoiceDate()`.
- Added explicit timezone parameter.
- Added UTC, AEDT, DST-boundary tests.

### Decisions

- Store timestamps UTC; render workspace timezone. Avoids mixed-timezone storage.

### Blockers / next

- Verify DST transition.
```

### Changelog entry

```markdown
### Fixed

- Invoice PDFs now display dates in the workspace timezone instead of UTC.
```

The devlog preserves investigation and decisions. The changelog tells users what changed and why it matters.

## Promotion rule

Promote a devlog item to the changelog only when it changes something a user, integrator, or maintainer can observe or depend on:

- New capability
- Changed behaviour or default
- User-visible fix
- Deprecation
- Removal
- Breaking change
- Security fix

Internal investigation, refactors, test moves, and unresolved blockers normally stay in the devlog.

## Practical test

Before adding an item, ask:

1. Does this explain development context or help someone resume work?
2. Would losing this context cause repeated investigation or a poor future decision?
3. Is it an outcome, decision, failure, blocker, or verifiable link—not mere activity?

If yes, it belongs in the devlog. If it also changes observable behaviour or compatibility, consider a changelog entry too.

## Provenance

Based on the preceding devlog/changelog discussion. Keep a Changelog defines a changelog as a curated, chronologically ordered list of notable changes for each version, intended to make notable changes easy for users and contributors to see. [web:61]
