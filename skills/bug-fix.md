---
name: bug-fix
description: Use when the user reports a bug, an error, or unexpected behaviour and wants a structured end-to-end fix — covering root-cause diagnosis, test coverage, and a reviewed merged PR in one guided session.
---

# Bug Fix

## Overview

Orchestrates three sub-skills in sequence to diagnose and fix a bug with full test coverage and a clean PR. Each stage produces a concrete artifact. Do not advance without explicit user confirmation.

## Stages

### Stage 1 — Diagnose
Load and run `/diagnosing-bugs`.
Artifact: Root-cause analysis with reproduction steps and proposed fix approach.
Gate: user confirms diagnosis is correct (`yes` / `continue` / `next`).

### Stage 2 — TDD
Load and run `/tdd`.
Artifact: Failing test(s) that reproduce the bug, committed before the fix.
Gate: user confirms tests correctly capture the failure.

### Stage 3 — PR Review
Load and run `/pr-review`.
Artifact: Reviewed diff with fix applied; PR opened.
Gate: user approves PR.

## Gate rule

Do NOT advance to the next stage without explicit user confirmation (`yes`, `continue`, or `next`). Retry a failing stage up to **2 times** with failure notes before escalating.

## Progress tracking

After each stage completes, report:
```
✅ Stage N complete — [artifact name]
Next: Stage N+1 — [stage name]. Confirm to continue.
```
