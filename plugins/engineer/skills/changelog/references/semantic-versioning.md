# Reference for Semantic Versioning

> Condensed from [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) for the `changelog` skill. Changelog format and entry style live in [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Purpose and scope

Use when the `changelog` skill must pick a version number, decide whether a change is breaking, or order version headings. In scope: meaning of MAJOR.MINOR.PATCH, bump rules, frozen releases, pre-release ordering. Out of scope: changelog entry format ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/)), git tag and commit naming, release tooling.

Keywords: semver, version bump, breaking change, deprecation, pre-release, build metadata, 0.y.z, 1.0.0, unreleased.

## Pick the bump

- Incompatible (breaking) change to the public API: **MAJOR**.
- New, backward compatible functionality: **MINOR**.
- Backward compatible bug fix: **PATCH**.
- Deprecation of public API functionality: **MINOR**, and it ships in a minor release at least one minor release before the removal.
- Bumping a level resets the levels below it to 0.

## Changelog section to bump map

**Status: guidance.** Derived from spec rules 6-8 and the spec FAQ, not verbatim spec text. The actual number is decided by the change, and the changelog skill records the result.

| Section | Usual bump | Notes |
| ------- | ---------- | ----- |
| Added | MINOR | New public capability. Non-public additions MAY stay PATCH (rule 7). |
| Changed | MINOR or PATCH | Change existing public behaviour in a way callers depend on (removed argument, renamed key, changed default) is MAJOR. Internal change is MINOR or PATCH. |
| Deprecated | MINOR | Mark deprecated in docs, release as MINOR, remove later in MAJOR. |
| Removed | MAJOR if public | Removing public API is breaking. Removing private or unreleased code may be MINOR or PATCH. |
| Fixed | PATCH | Internal change that fixes incorrect behaviour. |
| Security | PATCH minimum | Higher if the fix changes behaviour callers rely on. |

## Spec rules that shape an entry

Rules 1-8 quoted verbatim from the spec (RFC 2119 keywords: MUST, SHOULD, MAY).

1. Software using Semantic Versioning MUST declare a public API. This API could be declared in the code itself or exist strictly in documentation. However it is done, it SHOULD be precise and comprehensive.
2. A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers, and MUST NOT contain leading zeroes. X is the major version, Y is the minor version, and Z is the patch version. Each element MUST increase numerically. For instance: 1.9.0 -> 1.10.0 -> 1.11.0.
3. Once a versioned package has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version.
4. Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.
5. Version 1.0.0 defines the public API. The way in which the version number is incremented after this release is dependent on this public API and how it changes.
6. Patch version Z (x.y.Z | x > 0) MUST be incremented if only backward compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior.
7. Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backward compatible functionality is introduced to the public API. It MUST be incremented if any public API functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the private code. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented.
8. Major version X (X.y.z | X > 0) MUST be incremented if any backward incompatible changes are introduced to the public API. It MAY also include minor and patch level changes. Patch and minor versions MUST be reset to 0 when major version is incremented.

Rule 3 applied to a changelog: an entry under an already released version is history. Correction goes in a new version heading, never by editing the released entry.

## Pre-release and build metadata (rules 9-10, paraphrase)

- Pre-release: hyphen plus dot separated identifiers after the patch version, ASCII alphanumerics and hyphens, no empty identifiers, no leading zeroes in numeric identifiers. Examples: `1.0.0-alpha`, `1.0.0-rc.1`.
- Build metadata: plus sign plus dot separated identifiers, ignored for precedence. Examples: `1.0.0+20130313144700`.
- A pre-release has lower precedence than its normal version. A pre-release signals an unstable version that may not satisfy the compatibility its normal version promises.

## Ordering version headings (rule 11, paraphrase)

Precedence compares major, minor, patch numerically, then pre-release identifiers left to right. Build metadata never affects order. A pre-release sorts below its normal version.

```
1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0
```

Newest version heading goes first in the changelog file; `UNRELEASED` sits above all of them.

## Version string form

Version heading text is a bare semantic version (`1.1.2`). `v1.2.3` is a tag name convention, not a semantic version. Use `v` only in tag context.

## Decisions that come up

**Still on 0.y.z.** Start at 0.1.0 and increment MINOR per release. Anything MAY change; do not promise stability. Breakage can ship in a MINOR bump while still in 0.y.z.

**When to release 1.0.0.** Software in production, or a stable API users depend on, or when backward compatibility becomes a real concern.

**Wrong bump already released.** Never edit the released version or its entry. Ship a corrective new version.

**Breaking change landed in a PATCH or MINOR.** Judgement call. If users depend on the old behaviour, release a MAJOR that states the intended behaviour, and document the offending version in the entry for it.

## Project note

Repo state as of 2026-10-17: `docs/CHANGELOG.md` maps versions to build-brief steps (`0.1.0` = Step 1) and nothing is tagged yet, so the project is in the 0.y.z phase. Read that file's header for the current scheme rather than restating it here. Sections that are not releases (`Pending`, `Known issues`, `Decisions`) do not drive a bump.

## Provenance and license

Spec text and rules quoted from [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html), authored by Tom Preston-Werner, licensed [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). Condensed for the `changelog` skill on 2026-10-17: introduction, motivation, grammar, regexes and unrelated FAQ entries dropped. For normative wording, use the spec itself.
