---
name: devlog
description: Updates docs/DEVLOG.md regularly from staged Git changes and recent agent context, usually recording 1-2 lines per commit. Use when the user says "/devlog", "update devlog", "log this session", "write today's devlog", or asks to record what was done, decided, learned, or left unresolved during development.
user-invocable: true
---

# Devlog

Reconstruct current session from staged Git changes since **local midnight** and agent chat history from the **last 2 days**. Clarify material unknowns, then update `docs/DEVLOG.md`. Devlog runs more often than changelog: normally add or refresh **1-2 concise lines per commit**, while changelog waits for a major feature or update.

One entry per local calendar day by default. At local midnight, start a new dated entry; never append post-midnight work to yesterday. Split into one entry per feature/area only when a day has substantial work on distinct features/areas.

Devlog records development context: work, decisions, failures, blockers, next actions. User-visible release outcomes belong in `CHANGELOG.md`.

## Date boundary

- “Today” = user’s local calendar day: `00:00` local to next local midnight.
- Commits after local midnight belong to the new date.
- At/after midnight, create today’s `YYYY-MM-DD` entry; never append to yesterday.
- Uncommitted changes belong to current local date/time unless user says otherwise.

## Staged changes first

- If staged changes exist, use `git diff --cached` as primary evidence.
- Do not silently mix unrelated unstaged/untracked work; record separately as context, pending work, or assumptions.
- No staged changes but unstaged/untracked work exists: remind user to stage relevant changes first, then stop.
- No staged/unstaged/untracked changes: inspect current-day commits; if none, ask what was worked on or record no-code-change session.
- Never stage, add, commit, stash, restore, or otherwise modify Git state.

## Chat history boundary

- Search chats only from last 2 days, relative to current local date/time.
- Never read, cite, infer from, or use older chats.
- No relevant recent chats: tell user. If staged diff is scarce/ambiguous, ask for missing goal, rationale, test status, or blockers.
- Never fabricate or extrapolate older chat context.

## Evidence priority

1. Commit history and repository files — authoritative for committed changes, timing, current state.
2. Staged diff — authoritative for what is prepared to change now.
3. User confirmation — final authority for intent, rationale, completion, date attribution, conflicts.
4. Chat history from last 2 days — supporting context only.
5. Inference — last resort; label clearly.

For material decision conflicts: prioritise commit history/repo files over chat history, then confirm with user before recording interpretation as fact.

## Evidence safety

Run:

```bash
git status --short
git diff --cached
git diff
git ls-files --others --exclude-standard
git log --since="00:00 today" --pretty=format:"%h %ad %s" --date=iso-local
```

- `git status --short`: staged, unstaged, untracked paths.
- `git diff --cached`: staged changes; primary source when staged work exists.
- `git diff`: unstaged changes; secondary context or user-authorised only.
- Untracked files need separate inspection.
- `git log --since="00:00 today"`: current-day commits.
- Clean staged area ≠ proof no work occurred. Check current-day commits, recent chats, repo state.
- Never infer decisions, test results, completion, or rationale without direct support.
- Match chats to current date, branch, files, and 2-day boundary.
- Explain every staged file or mark it unreviewed/unrelated.
- Never copy secrets, credentials, tokens, large generated output, or binary content.

## Conflict handling

- Staged diff: authoritative for prepared changes.
- Commits/repo files: authoritative for existing changes/state.
- Chats (≤2 days): context for goals, rationale, decisions.
- User confirmation: final authority on conflicts.

| Conflict                                       | Handling                                                                                              |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Chat claims change; Git/repo does not show it  | Do not claim it. Mark `Unverified`.                                                                   |
| Git/repo shows change; chat lacks rationale    | Record observed change; mark intent `Inferred` or ask.                                                |
| Chat and Git/repo disagree on goal             | Prefer repo evidence for what changed; use plausible current chat for intent; otherwise ask.          |
| Chat and Git/repo disagree on completion/tests | Never claim completion/passing tests without evidence; mark `Unverified`; add verification follow-up. |
| Chat refers to other branch/session/period     | Do not attribute unless user confirms.                                                                |
| Chat older than 2 days                         | Do not use. Ask for current context if needed.                                                        |
| Evidence predates local midnight               | Assign to prior date’s entry.                                                                         |
| Chat sources disagree                          | Prefer newer, specific, user-attributed evidence; preserve disagreement.                              |

Resolution:

1. Establish local midnight boundary.
2. Check staging; identify staged changes.
3. Establish facts from staged diff, current-day commits, repo files.
4. Search chats from last 2 days only.
5. Classify chat claims: user-stated, inferred, unverified.
6. Match claims to staged files, branch, timestamps, date boundary.
7. Material conflict: prioritise commits/repo files, ask user.
8. If writing without clarification, preserve conflict explicitly.
9. Never silently resolve, average, or merge conflicting accounts.

## Workflow

1. **Date boundary** — establish today’s local midnight; select only current-day evidence.
2. **Check staging** — staged changes: use `git diff --cached`. No staged but unstaged/untracked: remind user to stage, stop. No changes: inspect current-day commits; if none, ask or record no-code-change session. If `git status` fails because the working directory is not a Git repository, stop. Ask the user for the repository/project directory. Do not create or update `docs/DEVLOG.md`.
3. **Gather recent context** — review current chat; search available agent logs/transcripts/tasks/plans/memory from last 2 days only. Match to staged files, branch, date. No relevant chats: tell user; ask if staged diff scarce.
4. **Draft summary** — identify goal, areas, decisions, constraints, tests, unresolved work. Group edits into outcomes. Decide one entry vs feature/area entries. Label inference.
5. **Clarify** — ask only material, ambiguous, or conflicting facts. Prioritise goal, rationale, test/behaviour verification, date attribution, blockers. Batch questions. If user says “just log it”, proceed with labelled assumptions.
6. **Update `docs/DEVLOG.md`** — create if absent. Use the format below: `Goal`, `Why`, `Did`, `Outcome`, `Decisions`, `Failed / learned`, `Blockers / next`, and `Links`, omitting empty sections. Newest entry under title. Same-day entry: update/append. Normally add **1-2 lines per commit** under `Did` or `Outcome`; do not wait for a feature-sized batch. Multiple distinct features: one entry per feature/area, same date, distinct titles. Never append to prior date. Preserve existing entries.
7. **Report** — state file updated, summarize entries, list assumptions, unverified claims, conflicts, date uncertainty, follow-ups. Do not update `CHANGELOG.md` unless asked.

## Entry template

```markdown
## YYYY-MM-DD — Short session title

### Goal

### Did

- Outcome-level change

### Decisions

- Decision and reason, if known

### Failed / learned

- Failure, constraint, or learning, if any

### Assumptions

- Inferred intent, date attribution, or unverified claim

### Blockers / next

- Unresolved item or next action

### Links

- Branch: `<branch>`
- PR: `<pr-or-issue>`
- Tests: `<test-path>`
- Chat/session: `<source-or-summary>`
```

Omit empty sections.

## Rules

- One entry per local day by default; midnight starts new entry.
- Multiple same-date entries only for substantial distinct features/areas; otherwise append to current-day entry.
- Current-day work only, unless user explicitly amends prior day.
- Uncommitted changes = current local date/time unless user says otherwise.
- Staged changes first; no staged changes + unstaged/untracked work = remind user to stage, stop.
- Chats: last 2 days only. No relevant chats: inform user; ask if staged diff scarce.
- Commit history/repo files outrank chats for decision conflicts; confirm with user.
- Base claims on staged diff, commits, repo files, recent chats, user confirmation.
- Distinguish observed, user-stated, inferred.
- Never claim tests passed, behaviour works, or decision made without evidence.
- Never invent chats, rationale, blockers, completion.
- Link branches, PRs, issues, files, tests, chats when identifiable.
- Compressed factual prose; preserve Markdown, paths, technical terms.
- User-visible release-relevant change: suggest changelog entry; do not write unless asked.
- Changelog cadence differs: update it only after finishing a major feature or update, not for every commit.
- Do no mention specific commit ids or codes in the devlog since they may be squashed during merge and become outdated. Only refer to specific branches, PR numbers or issues.

## Reference

- See `references/devlog-reference.md` for date boundaries, staging priority, chat limits, evidence priority, conflicts, assumptions, examples.
- For why a devlog exists and how it differs from a changelog, refer to `references/devlog-purpose.md`.

## Writing style override (user-requested)

Persisted devlog prose: **caveman prose, full**. Compress body only; preserve Markdown, headings, lists, code fences, links, paths, technical terms.

- Drop articles, filler, pleasantries, hedging. Fragments OK.
- Never drop not/never/no/only/except.
- Numbers, units, technical terms, paths, code, errors exact.
- No decorative tables/emoji. One fact once.
- Pattern: `[thing] [action] [reason]. [next step].`
