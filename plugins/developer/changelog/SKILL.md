---
name: changelog
description: Updates docs/CHANGELOG.md on every commit. Use when the user makes a commit, asks to log a change, or needs to record what changed in a release.
user-invocable: true
---

# Update Changelog

## Style rule: caveman ultra, always

Every changelog entry this skill writes uses **caveman prose, ultra**. Not a default to switch off, not conditional on user request. Applies to `docs/CHANGELOG.md` body text and any changelog draft the skill produces.

- Load `caveman` skill and use `ultra` intensity for all changelog prose.
- Keep structure intact: headings, list markers, code fences, version numbers, file paths, error strings, and technical terms unchanged.
- Compression applies to prose only. Never drop facts, breaking changes, validation status, or limitations to save tokens.
- Where this conflicts with a repo rule that persisted docs stay normal prose, this rule wins for changelogs.

## Density rule: one line, irreducible

Each change description is exactly one line. If it needs a second line or a sub-bullet, the entry is doing too much: split it into separate entries or cut the parts that do not change what a future developer or agent must know.

- One entry = one fact the reader cannot get from the diff, the code, or the commit subject.
- Keep only what future developers or agents need: what changed, why, breaking impact, validation status, remaining limitation.
- Cut filler and fluff: restating the commit subject, adjectives, "various improvements", setup narration, praise, hedging ("somewhat", "basically"), and anything already obvious from a file path.
- Cut trivial content: formatting nits, typo fixes with no behavior change, dependency bumps with no effect, and internal refactors the reader would never need to know. If it truly must be recorded, fold it into an adjacent entry instead of adding a new one.
- When in doubt, drop it. A lean changelog that stays readable beats a complete one that is never read.
- This rule never licenses dropping facts listed under "Style rule": breaking changes, validation status, and limitations stay.

## Brevity rule: one sentence per bullet, max 10 words

Every documented change is one bullet point holding one brief sentence of ten words or fewer.

- Count the words in the bullet text only.
- Ten words is a ceiling, not a target. If the fact survives shorter, shorten it.
- Over the limit: cut filler first, then split into a second bullet with its own fact.
- Never drop a breaking change, validation status, or limitation to fit. Reword tighter instead, and if it still cannot fit, keep the fact over the limit rather than delete it.
- Version numbers, file paths, and identifiers stay exact even when they use up words.

Example (`6` words):

```markdown
- `engine.js` undo test covers replay mismatch.
```

## Quick start

Before finalizing any commit, update `docs/CHANGELOG.md` to record:

- What changed
- Why
- Files affected
- Any behavioral or breaking changes

## Workflows

1. Follow Keep a Changelog format. Refer to `references/keep-a-changelog.md` for writing principles and detailed examples of a changelog.
2. Use Semantic versioning for headings. Group changes under the current version heading. Refer to `references/semantic-versioning.md` for what semantic versioning is and how to follow it.
3. Add entries for each notable change: Added, Changed, Fixed, Removed, Deprecated.
4. A commit that only adds tests for unbuilt behavior says so explicitly; do not claim behavior that does not exist.
5. Note limitations, validation status, and follow-ups where relevant.

## Example template

```markdown
## [Unreleased] - YYYY-MM-DD

### Added

- New feature or capability

### Changed

- Behavior or implementation updated

### Fixed

- Bug fix

### Removed

- Removed capability

## [0.1.0] - YYYY-MM-DD

### Added

### Changed

### Fixed

### Removed
```

## Advanced features

- If a PRD/behaviour changes, record decision via `/log-decision` first.
- Coordinate with `/update-docs` before release/PR.

## Writing style override

This skill always uses **caveman prose, ultra** for changelog content, as stated in "Style rule: caveman ultra, always" above. Do not wait for the user to ask for caveman mode. Do not revert to normal prose for persisted `docs/CHANGELOG.md` entries; this overrides the default repo rule that persisted docs stay normal prose.
