# Reference for Changelog Purpose

> Supporting reference for the `changelog` skill. Explains why `docs/CHANGELOG.md` exists and what belongs in it. Entry format, categories, and version numbering live in [keep-a-changelog.md](keep-a-changelog.md) and [semantic-versioning.md](semantic-versioning.md).

## Purpose and scope

A changelog exists to answer, for humans, three questions about a release: **What changed? Why does it matter? What might break?**

In scope: the purpose, audience, content boundary, and common misuse of a repository changelog. Out of scope: how to write entries, how to choose a semantic version, git tagging, and release tooling.

Keywords: changelog purpose, release notes, upgrade decision, breaking change, git log, commit history, repository documentation.

## Core job

A changelog is a **curated, human-readable history of notable differences between released states**. It is not a complete record of every code change.

Its core value is enabling an upgrade decision:

- A user can see whether a release adds value, fixes a problem, changes behavior, or removes something they use.
- A contributor can understand the project’s evolution without reconstructing it from commits.
- A maintainer can communicate deprecations, removals, and breaking changes before they cause surprise.
- Future maintainers have a durable record of important behavior changes, even if issues, discussions, or external tools disappear.

## What belongs in it

Include changes that affect what a user, integrator, or maintainer can observe or depend on:

- New user-visible capability
- Changed behavior or defaults
- Bug fixes with user-visible impact
- Deprecations
- Removals
- Breaking changes
- Security fixes
- Notable limitations, migration steps, or validation caveats

**Status: guidance.** Internal refactors, formatting, routine dependency churn, and WIP implementation detail usually do not belong unless they change observable behavior, security posture, or upgrade requirements.

## Changelog versus git log

| Artifact       | Primary audience                              | Records                                     | Best used for                       |
| -------------- | --------------------------------------------- | ------------------------------------------- | ----------------------------------- |
| Git log        | Developers and tooling                        | Individual commits and implementation steps | Tracing exactly how code evolved    |
| `CHANGELOG.md` | Users, integrators, contributors, maintainers | Notable differences between versions        | Deciding whether and how to upgrade |

A commit documents one step in the evolution of source code. A changelog entry documents the meaningful result of one or more commits in language a consumer can act on.

## Why it lives in the repo

Keeping `CHANGELOG.md` in the repository makes the release history part of the project:

- It is version-controlled and reviewable through normal pull requests.
- It travels with forks, clones, and offline checkouts.
- It is not dependent on GitHub Releases, an issue tracker, or a third-party release tool.
- It can be the durable source from which GitHub Releases and user-facing announcements are generated.

**Status: guidance.** GitHub Releases remain useful for publishing and distributing release notes; the in-repo changelog is the durable historical record.

## Common misuse

Avoid treating the changelog as:

- **A commit dump.** Merge commits, commit prefixes, and implementation narration create noise rather than upgrade guidance.
- **A task log.** “Worked on auth” is not useful; “Changed session expiry from 7 days to 24 hours” is.
- **A substitute for migration guidance.** Breaking changes should state the old behavior, new behavior, and required action where relevant.
- **An optional afterthought.** Inconsistent coverage makes users unable to trust it as the source of truth for notable changes.

## Practical test

Before adding an entry, ask:

1. Would a user or integrator need to know this to use, upgrade, debug, or trust the software?
2. Does it change observable behavior, compatibility, security, or maintenance expectations?
3. Can it be stated as an outcome rather than an implementation step?

If the answer to all three is no, leave it out of the changelog.

## Provenance

Based on the prior discussion and [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), which defines a changelog as a curated, chronologically ordered list of notable changes for each version and states its purpose as making notable changes easy for users and contributors to see.
