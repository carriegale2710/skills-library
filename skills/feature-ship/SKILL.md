---
name: feature-ship
description: Use when the user says "ship feature X", "take this idea to a PR", wants to go from a rough concept to a merged pull request, or needs to move end-to-end from idea through spec, tickets, tests, and review in one guided session.
---

# Feature Ship Pipeline

## Overview

Orchestrates five sub-skills in sequence to take a feature from idea to merged PR. Each stage produces a concrete artifact. Do not advance without explicit user confirmation.

## Stages

### Stage 1 — PRD
Load and run `/to-prd`.
Artifact: Product Requirements Document.
Gate: user confirms PRD is complete (`yes` / `continue` / `next`).

### Stage 2 — Spec
Load and run `/to-spec`.
Artifact: Technical specification document.
Gate: user confirms spec is complete.

### Stage 3 — Tickets
Load and run `/to-tickets`.
Artifact: GitHub issues created in the repo.
Gate: user confirms tickets are correct.

### Stage 4 — TDD
Load and run `/tdd`.
Artifact: Failing tests committed before implementation.
Gate: user confirms tests capture requirements.

### Stage 5 — PR Review
Load and run `/pr-review`.
Artifact: Reviewed diff; PR opened.
Gate: user approves PR.

## Gate rule

Do NOT advance to the next stage without explicit user confirmation (`yes`, `continue`, or `next`). If a stage output fails to meet its artifact criteria, retry it up to **2 times** with the failure notes before escalating to the user.

## Progress tracking

After each stage completes, report:
```
✅ Stage N complete — [artifact name]
Next: Stage N+1 — [stage name]. Confirm to continue.
```
