---
name: write-tests
description: Test-driven development for engine, script and macro behavior. Use before the first test or engine change in a coding session. Covers the failing-test-first loop, what a good test is, where tests go, the anti-patterns, and how to report evidence.
user-invocable: true
---

# Write Tests

TDD is the red -> green loop. This skill supplies the loop and its rules; it keeps that loop producing tests worth keeping.

Repo how-to lives in `docs/TESTING.md`: the order of operations, run commands, rule-to-test table, and manual Obsidian checks. The invariants in _Invariants_ below hold whether or not this skill is loaded; they belong here, not in `AGENTS.md`.

## The loop

1. **Write the failing test first**, at a pre-agreed seam, using fixed dates and fixed dice.
2. **Run it.** It must fail on the intended assertion — not a typo, wrong path or missing import.
3. **Make it pass** with only enough code to pass. Never delete, skip or loosen the assertion to get green.
4. **Re-run and read the whole run.**
5. **Prove the test bites:** break the implementation on purpose, confirm the test catches it, then restore it.

Work in **vertical slices** — one test, one implementation, repeat — never all tests then all code.

Read `references/tdd-rules.md` for what a good test is, seams, and the anti-patterns.

## Report

Report in plain prose — compression never applies to test evidence. State what is proven versus assumed, quote the failing-run output, and surface any decision the user must make with context, alternatives, tradeoffs and a recommendation.

## Invariants

- **Never weaken a test** to make it pass.
- **Failing tests for unbuilt features are the to-do list**, not a failure.
- **Regression test first** for a bug.
- A test never seen failing is not evidence.
