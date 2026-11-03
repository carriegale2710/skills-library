# Commit Message Examples

Use these shapes as templates. Replace every name, path, hash, and fact.

## Feature with paired documentation

```text
feat(billing): add invoice retry cap

- Invoice retries ran indefinitely after provider failure; retries now stop at three attempts and mark the invoice failed.
- invoice.test.js covers the third failure; docs/billing.md documents the retry limit.
```

The documentation belongs here because it documents the new retry behavior.

## Bug fix with paired documentation

```text
fix: stop retry loop on declined payment

- Capture retry re-queued the job without reading the failure reason, so a declined card retried forever; declined captures now mark the invoice failed.
- capture.test.js asserts one attempt on decline; docs/capture-retries.md documents the declined-payment path.
```

## Vague versus specific

Weak:

```text
feat: enhance the user profile page to improve the overall experience

- Made a number of improvements to the profile page in order to improve usability for users, including moving the avatar upload into a modal and adding loading states, which several users asked for, and also fixed some styling issues.
```

Strong:

```text
feat(profile): move avatar upload into a modal

- Avatar upload sat inline and broke layout under 400px; upload now opens a modal with a loading state.
- profile-avatar.test.js covers upload, cancel, and oversized file. See ADR-012.
```

## File subject versus effect

Weak:

```text
fix: update capture.js

- Changed the retry block, renamed a variable, added a comment, ran the tests.
```

Strong:

```text
fix: stop retry loop on declined payment

- Capture retry re-queued the job without reading the failure reason, so a declined card retried forever; declined captures now mark the invoice failed.
- capture.test.js asserts one attempt on decline.
```

## Compression with retained meaning

Weak:

```text
fix: null check

- Guard added; tests pass.
```

Strong:

```text
fix(export): stop crash on empty CSV

- Export read `rows[0].id` assuming one row, so an empty result threw; empty input now returns a header-only file.
- export.test.js asserts empty input yields valid CSV.
```

## Breaking change

```text
feat(api)!: require auth on /reports

- /reports served any caller; it now rejects unauthenticated requests.
- reports.test.js covers 401 and a valid token; docs/api.md documents the authorization requirement.

BREAKING CHANGE: unauthenticated /reports returns 401. Callers must send `Authorization: Bearer`.
```

## Standalone documentation change

Use this shape only when no staged code change relates to the documentation.

```text
docs: correct undo window to 10 events

- Docs claimed unlimited undo; the engine keeps 10 events, so readers built against the wrong limit.
```

## Trivial standalone change

```text
chore: fix typo in README
```

## Revert

```text
revert: stop retry loop on declined payment

- Reverts 4a1c2f0. Retry loop returned under high concurrency.
```
