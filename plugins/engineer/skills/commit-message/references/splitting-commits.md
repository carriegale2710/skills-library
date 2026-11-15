# Splitting Commits

Split a staged diff only when it serves more than one independent feature or domain. Each resulting commit should be independently buildable, testable, reviewable, and revertible.

## Boundary test

Ask: “Does every staged change serve the same feature or domain update, and would reverting this commit undo exactly that update?”

A commit may include:

- Implementation for one behavior or domain.
- Tests that establish or verify that behavior.
- Documentation that describes, configures, or explains that behavior.
- Supporting configuration, migration, or dependency changes required by that behavior.

Split the diff when it contains changes serving separate features or domains, such as an unrelated bug fix beside a feature, changes in unrelated modules, or a reformat buried inside a behavioral fix.

## Documentation pairing

Treat documentation as part of the feature or domain it describes.

| Documentation change                                                                     | Commit placement                                                            |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Documents a new endpoint, option, workflow, schema, UI behavior, error, or configuration | Same commit as its implementation and tests                                 |
| Updates a behavioral contract changed by the code                                        | Same commit as the code change                                              |
| Explains why a design changed                                                            | Same commit as the design change, with a pointer to the ADR when one exists |
| Covers several unrelated features or domains                                             | Divide with the feature or domain each section serves                       |
| Changes independently of staged code                                                     | May form a standalone `docs:` commit                                        |

Reviewer test: opening a commit should show the code change alongside the documentation that explains its resulting behavior.

## Plan format

Propose an ordered, path-based plan before touching the index. Include documentation paths beside the code and test paths they support.

```text
Staged diff serves two features.

1. fix: stop retry loop on declined payment
   src/capture.js, test/capture.test.js, docs/capture-retries.md

2. feat: cap invoice retries at 3
   src/invoice.js, test/invoice.test.js, docs/invoice-retries.md

Stage commit 1?
```

Wait for the user to approve the plan and the first staging set.

## Staging loop

1. Stage the approved paths with `git add -- <paths>`.
2. Inspect `git diff --cached` to confirm it matches the planned commit.
3. Write only that commit’s message.
4. Repeat for the next planned commit after the user confirms its paths.

Use explicit paths. Avoid `git add -A`, `git add .`, and interactive staging, because they can include changes the user has not approved.

If the user declines the split, write one message for the full staged diff and identify the feature or domain concerns it combines.

## Interleaved hunks

When one file contains changes for separate features and they cannot be separated without interactive staging, commit the file once and name both concerns in the body, or identify the relevant lines and ask the user to stage them.

A split that guesses at hunks can produce a commit that does not build or does not match its message.

## Failure modes

| Failure                                                           | Correction                                        |
| ----------------------------------------------------------------- | ------------------------------------------------- |
| One commit per file                                               | Regroup by feature or domain                      |
| Documentation committed separately from the behavior it documents | Stage the docs with the related code and tests    |
| Commit references a symbol introduced later                       | Reorder by dependency                             |
| Behavior change labeled `refactor`                                | Use the type that describes the observable effect |
| Messages drafted before staging                                   | Write each message after its diff is staged       |
| Index changed without approval                                    | Reconfirm paths, then stage explicitly            |
