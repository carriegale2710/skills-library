---
name: commit-message
description: Use when drafting or reviewing a commit message, deciding whether staged work needs splitting, or making a commit message shorter.
user-invocable: true
---

# Commit Message

Write a terse commit message for the staged diff. Each commit represents one feature or domain update, with its tests and related documentation included.

## Ground rules

- Never run `git commit`, `--amend`, or history rewrite. Stage only after user confirms, by explicit path. Output message; user commits.
- Claims match staged content. Never describe unstaged or unbuilt behavior.
- File and test names come from diff, never memory or request text.
- Separate proven from assumed: "test asserts X" only if test exists; "unverified" when only manual checks remain.
- Never weaken test to make change pass.
- One commit, one concern. Default to staged diff; split mixed changes before writing (see Splitting commits).

## Workflow

1. **Inspect the staged diff.** Run `git status --short` and `git diff --cached`. Use staged content only.  
   Done when every claim in the eventual message traces to a staged change.

2. **Check staging completeness.** If nothing is staged, ask the user to stage the intended paths.  
   Done when the user confirms the staged paths or provides a staged diff.

3. **Identify the feature or domain boundary.** Group changes by the user-visible behavior, subsystem, or domain they serve. Keep implementation, tests, and documentation for that behavior together.  
   Done when every staged path belongs to exactly one proposed commit, or a split plan exists.

4. **Split only across features or domains.** If the diff serves multiple independent features or domains, read `references/splitting-commits.md`, propose an ordered path-based plan, and obtain confirmation before staging.  
   Done when the user approves either one combined commit or each commit in the split plan.

5. **Write the message.** Follow the message contract, then remove every word that adds no fact.  
   Done when the subject states the observable effect and each body bullet adds a distinct reason, test, decision, or documentation fact.

## Shape

```text
<type>(<scope>): <subject>

- <what changed and why>
- <test, decision ID, docs touched>
```

- Type: `feat`, `fix`, `docs`, `test`, `refactor`, `perf`, `ci`, `build`, `chore`, `revert`.
- Scope: optional, one word for subsystem (`auth`, `billing`). Omit when change spans repo.
- Subject: imperative, lowercase after colon, no period, aim under 50 chars, 72 hard cap. Preserve original case for file names, symbols, product names.
- Subject states observable effect, not file. `fix: stop retry loop on declined payment`, not `fix: rewrite capture.js`. Paths go in bullets.
- Body: default two bullets, three cap, zero valid for trivial commit (see Trivial vs commit-worthy).
- Bullet is prose sentence, not fragments: keep verbs, drop padding.
- Bullets stay high level: outcome plus reason. Mechanism, edit sequence, test-by-test results belong in doc, not here.
- One bullet per line. Let editor wrap; never break bullet mid-sentence.
- Breaking change: `!` after type or scope, plus `BREAKING CHANGE: <what breaks>` footer.
- No headings, no "This commit...", no file-by-file walkthrough, no emoji.

## Content rules

- Derive names, paths, test names, and behavior from the staged diff.
- Distinguish evidence from assumption: write “test asserts X” only when the staged test does so; write “unverified” when validation remains manual.
- Keep the reason for the change: bug, drift, decision, or user-visible outcome.
- Keep each fact in one place. Point to an ADR, changelog, or PR body for mechanism, alternatives, migration detail, or before/after analysis.
- Follow repository history when its established subject style conflicts with this contract; state which style was followed.

## Commit boundaries

A commit is one feature or domain update that can be built, tested, reviewed, and reverted independently.

- Include the code, tests, and documentation that describe the same behavior.
- Include documentation in the implementation commit when it documents a new endpoint, option, workflow, schema, UI behavior, error, configuration, or behavioral contract.
- Use a standalone `docs:` commit only when documentation changes independently of code.
- Treat a large mechanical change, such as one rename across many files, as one commit.

## Trivial changes

Fold formatting, whitespace, comment typos, import cleanup, and regenerated lockfiles without dependency changes into the nearest related commit, or batch them into one `style:` or `chore:` commit.

Commit a trivial change alone with a subject and no body only when it has no related staged change.

## References

- Read `references/splitting-commits.md` when the staged diff spans more than one feature or domain, or when staging must be divided.
- Read `references/examples.md` when the message shape, breaking-change footer, docs pairing, or compression level is unclear.

## Ultra prose rules

Drop articles, filler, hedging, connective fluff.

- Keep: verbs, facts, names, numbers, file paths, identifiers, error strings.
- Keep why. Compress what. Keep one connector (`because`, `so`, `after`, `instead of`) when two clauses share cause: link is the fact.
- Keep negation exact: not, never, no, only.
- No invented abbreviations. No arrows (`->`). Standard acronyms only (API, HTTP, OAuth, URL).
- Verb form stays correct. "it shows" and "it show" cost same; use correct one.
- Never add word to sound terse. If short form not shorter, use plain one.
- One fact, one time.
- Floor: reader without diff must parse each line first pass. If cut makes line ambiguous, restore word.
