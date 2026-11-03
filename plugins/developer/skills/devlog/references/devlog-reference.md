# Reference for Devlog Entries

> Supporting reference for `devlog` skill: local-date boundaries, staged-first Git evidence, 2-day chat limit, evidence conflicts, assumptions, and `docs/DEVLOG.md` quality.

## Scope

In: date boundaries, staging priority, chat recency, evidence priority, conflicts, inference/clarification, daily-entry organisation, entry quality, anti-patterns.  
Out: changelog format, semver, commit conventions, release publishing.

Keywords: devlog, session log, git diff, staged changes, local midnight, date boundary, agent chat history, two-day chat limit, inferred intent, assumptions, evidence conflict, blockers, follow-ups, daily entry.

## Date boundary

- Day = user’s local calendar day: `00:00` local to next midnight.
- Heading date: `YYYY-MM-DD`.
- Post-midnight work: new date’s entry; never append to yesterday.
- Commits: assign by commit date/time.

```bash
git log --since="00:00 today" --pretty=format:"%h %ad %s" --date=iso-local
```

- Uncommitted changes: assume current local date/time unless user says otherwise.
- `git diff` has no reliable change timestamp. For uncommitted work, use: user statement > chat/session timestamp > file mtime > recent commits/branch context.
- Uncertain attribution: mark `Inferred`/`Unverified` or ask. Never silently choose a date.

## Staging priority

1. Staged changes exist: `git diff --cached` = primary evidence.
2. No staged changes; unstaged/untracked exist: remind user to stage relevant changes; stop.
3. No staged/unstaged/untracked changes: inspect current-day commits; if none, ask or record no-code-change session.

Do not silently combine staged work with unrelated unstaged/untracked work. Mention those only as context, pending work, or assumptions.

Never modify Git state: no `git add`, `commit`, `stash`, `restore`, etc.

## Chat-history boundary

- Search chats from last 2 days only, relative to current local date/time.
- Never read, cite, infer from, or use older chats.
- No relevant recent chats: tell user.
- Staged diff scarce/ambiguous: ask for missing goal, rationale, test status, blockers.
- Never fabricate/extrapolate older chats.

Chat history supports context; never overrides commits, repo files, or staged diff.

## Evidence priority

1. Commit history + repository files: committed changes, timing, current state.
2. Staged diff: prepared current-session changes.
3. User confirmation: intent, rationale, completion, date attribution, conflict resolution.
4. Chats from last 2 days: goals, decisions, errors, follow-ups.
5. Inference: only when needed; label clearly.

Material decision conflict: commits/repo files outrank chats; confirm with user before recording interpretation as fact.

## Daily entry rule

- One entry per local day by default.
- Same-day rerun: update/append existing entry.
- Multiple same-date entries only for substantial work on distinct features/areas.
- Same date; distinct feature-specific titles:

```markdown
## 2026-10-24 — Invoice timezone fix

## 2026-10-24 — Billing webhook retry handling
```

- Do not split for multiple commits/files alone. Split only for materially different goals, decisions, blockers, or follow-ups.

## Core principle

Write for future-you resuming work:

- Session goal?
- What changed/learned?
- Which choices constrain future work, and why?
- What remains uncertain, broken, unfinished?
- Where can details be verified?

## Git evidence

```bash
git status --short
git diff --cached
git diff
git ls-files --others --exclude-standard
git log --since="00:00 today" --pretty=format:"%h %ad %s" --date=iso-local
```

- `status --short`: staged/unstaged/untracked paths.
- `diff --cached`: staged vs `HEAD`; primary when staged work exists.
- `diff`: unstaged working-tree changes; secondary/user-authorised only.
- Untracked files: inspect separately.
- `log --since`: current-day commits.
- Clean staged area: incomplete evidence, not proof of no work.

## Chat use

Search last-2-day chats for:

- Stated goal/request
- Constraints, acceptance criteria
- Rejected alternatives
- Errors/debugging
- Decisions/rationale
- Tests/results
- Follow-ups/blockers
- Timestamps for local-date boundary

Prefer newest, most specific relevant exchange. Conflicts with newer history, staged diff, commits, or repo files: prefer Git/repo evidence; flag conflict.

## Conflict handling

Authority:

- Staged diff: prepared changes.
- Commits/repo files: existing changes/current state.
- Chats ≤2 days: contextual why.
- User confirmation: final authority.

| Conflict                              | Handling                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------ |
| Chat claims change; Git/repo does not | Do not claim; mark `Unverified`.                                                     |
| Git/repo shows change; chat lacks why | Record observed change; intent `Inferred` or ask.                                    |
| Goal conflict                         | Repo evidence for what changed; plausible current chat for intent; otherwise ask.    |
| Completion/test conflict              | No completion/passing-test claim without evidence; mark `Unverified`; add follow-up. |
| Chat from other branch/session/period | Do not attribute unless user confirms.                                               |
| Chat >2 days old                      | Do not use; ask for current context if needed.                                       |
| Evidence predates midnight            | Prior date’s entry.                                                                  |
| Chat sources disagree                 | Prefer newer, specific, user-attributed evidence; preserve disagreement.             |

Procedure:

1. Local midnight boundary.
2. Staging state; identify staged changes.
3. Facts from staged diff, current-day commits, repo files.
4. Chats from last 2 days only.
5. Classify chat claims.
6. Match claims to staged files, branch, timestamps, date.
7. Material conflict: commits/repo files first; ask user.
8. No clarification: preserve conflict.
9. Never silently resolve/average/merge accounts.

### Example

Staged: `invoice.ts`, `timezone.test.ts`, `README.md`. Three-day-old chat: “Implemented Stripe webhook retries.” Current chat: invoice timezone goal.

```markdown
### Did

- Updated invoice timezone rendering and added timezone tests. [Observed]

### Assumptions

- Chat mentions Stripe webhook retries; older than 2 days and no webhook-related staged change. [Unverified]
- Possible: other branch/session, unstaged work, reverted.

### Blockers / next

- Confirm whether Stripe retry work belongs to separate session.
```

Do not write:

```markdown
### Did

- Implemented Stripe webhook retries.
```

## Reconstruct session

### Staged diff

- Added/changed/removed/renamed/deleted files.
- Behaviour, tests, config, dependencies, schema changes.
- Group hunks into outcomes: “invoice timezone rendering changed”, not “line 42 edited”.
- Note complete/partial/experimental/tested state.
- Identify follow-up signals: TODOs, skipped tests, unfinished migrations.

### Recent chats

Extract only supported claims:

- Goals/requests
- Constraints/acceptance criteria
- Rejected alternatives
- Errors/debugging
- Decisions/rationale
- Tests/results
- Follow-ups/blockers
- Date-boundary timestamps

### Cross-check

- Every claimed change has staged Git evidence?
- Every inferred goal has chat/task/user support?
- Every staged file explained or marked unreviewed?
- Test/behaviour/completion claims evidenced?
- Same branch, timeframe, feature?
- Every item within current local day?
- Every chat within 2 days?

Material mismatch: clarify first.

## Clarification

Ask only when missing/conflicting context changes entry meaning:

- Session goal?
- Why this approach?
- Tests run/results?
- Complete, partial, experimental, abandoned?
- Blockers/risks?
- Chat matches this session/branch/date/staged diff?
- Separate decision record needed?

Batch into one concise request. No trivia.

“Just log it”: proceed; mark uncertain content under `### Assumptions`.

## Assumption labels

- **Observed:** staged diff, repo, command output, current-day commits.
- **User-stated:** directly said by user.
- **Inferred:** derived but unconfirmed.
- **Unverified:** plausible; lacks evidence.

```markdown
### Assumptions

- Inferred: timezone change intended to fix PDF rendering mismatch.
- Unverified: DST boundary behaviour not tested.
- Inferred: uncommitted changes belong to current local date.
```

## Sensitive/noisy content

- Never copy secrets, keys, tokens, credentials, private URLs, env values.
- Summarize generated files, lockfiles, build artifacts, binaries.
- Large staged diff: state limits and unreviewed files/areas.
- Unreviewed ≠ understood/completed.

## Include

| Content                                           | Why                                          |
| ------------------------------------------------- | -------------------------------------------- |
| Session goal                                      | Purpose/progress interpretable               |
| Outcome-level work                                | Fast resume point                            |
| Decisions + rationale                             | Preserves reasoning                          |
| Rejected alternatives                             | Avoids repeated exploration                  |
| Bugs/failures                                     | Retains diagnostic knowledge                 |
| Blockers/next                                     | Continuation plan                            |
| Links: PRs, issues, tests, files, branches, chats | Verifiable/navigable                         |
| Questions, conflicts, assumptions                 | Separates uncertainty from settled decisions |

## Exclude

- Diary prose without technical consequence
- Commit-by-commit replay
- “Worked on feature”
- Unevidenced test/behaviour/decision claims
- Fabricated chat/rationale
- Chats >2 days old
- Secrets/credentials/large generated output/binaries
- User-facing release notes (`CHANGELOG.md`)

## Quality checklist

- [ ] `YYYY-MM-DD` matches user’s local day.
- [ ] Current-day work only, unless explicitly amending prior day.
- [ ] Post-midnight work not appended to yesterday.
- [ ] Staged changes primary when available.
- [ ] No staged changes + unstaged/untracked work: user reminded to stage; skill stopped.
- [ ] Uncommitted changes = current local date unless user says otherwise.
- [ ] Chats from last 2 days only.
- [ ] No relevant recent chats: user informed; asked if staged diff scarce.
- [ ] Commits/repo files prioritised over chats for material conflicts.
- [ ] User confirmation requested for material conflicting interpretations.
- [ ] One entry per day by default; splits only for distinct features/areas.
- [ ] Specific searchable title.
- [ ] Outcomes, not activity.
- [ ] Every claim sourced: staged diff, commits, repo files, user, recent chats.
- [ ] Inferred/uncertain date attribution labelled.
- [ ] Conflicts preserved or user-resolved.
- [ ] Decisions include reason or need rationale.
- [ ] Failures/blockers/next captured where relevant.
- [ ] Links identify branch/PR/issue/test/file/chat.
- [ ] No secrets/large output/binaries copied.
- [ ] Existing entries intact.
- [ ] Git state unmodified.

## Devlog vs changelog

| Artifact            | Question                                   | Cadence                                        | Audience                         |
| ------------------- | ------------------------------------------ | ---------------------------------------------- | -------------------------------- |
| `docs/DEVLOG.md`    | What happened during development, and why? | Per local day; per feature/area when warranted | Future maintainers/collaborators |
| `docs/CHANGELOG.md` | What changed between releases for users?   | Per notable change/release                     | Users, integrators, maintainers  |

Devlog may inspire changelog entries; investigation, alternatives, blockers, internal refactors usually do not belong in changelog.

## Example

```markdown
## 2026-10-24 — Invoice timezone fix

### Goal

Make invoice PDF timestamps display in workspace timezone.

### Did

- Found UTC rendering in `formatInvoiceDate()`.
- Added explicit timezone parameter.
- Added UTC, AEDT, DST-boundary tests.

### Decisions

- Store timestamps UTC; render workspace timezone. Avoids mixed-timezone storage.
- Deferred per-user timezone preference. Workspace setting sufficient.

### Failed / learned

- Browser locale unreliable. PDF rendering server-side.

### Assumptions

- Inferred: DST boundary behaviour not verified.

### Blockers / next

- Verify DST transition.
- Confirm PDF library preserves timezone metadata.
- Ask two beta users whether workspace timezone sufficient.

### Links

- Branch: `fix/invoice-timezone`
- Tests: `tests/invoice-date.test.ts`
- Chat: current agent session
```

## Provenance

Based on preceding devlog best-practices discussion. Decision logs should preserve decisions, rationale, alternatives, and context. Git distinguishes working-tree, staged, and committed changes; `git diff --cached` shows staged changes versus `HEAD`, supporting staged-first handling. [web:108][web:101]
