---
name: frontend-build
description: Spec to built frontend pipeline. Use when the user wants to design and build a new UI feature or page end-to-end — from a written spec through visual design decisions to tested, committed components.
---

# Frontend Build Pipeline

## Overview

Orchestrates three sub-skills in sequence to take a UI feature from specification to tested implementation. Each stage produces a concrete artifact. Do not advance without explicit user confirmation.

## Stages

### Stage 1 — Spec
Load and run `/to-spec`.
Artifact: Technical specification covering component structure, props, states, and acceptance criteria.
Gate: user confirms spec is complete (`yes` / `continue` / `next`).

### Stage 2 — Frontend Design
Load and run `/frontend-design`.
Artifact: Design decisions documented — layout, component hierarchy, styling approach, responsive behaviour.
Gate: user confirms design direction.

### Stage 3 — TDD
Load and run `/tdd`.
Artifact: Failing component/unit tests committed before implementation; implementation written to pass them.
Gate: user confirms tests and implementation are correct.

## Gate rule

Do NOT advance to the next stage without explicit user confirmation (`yes`, `continue`, or `next`). Retry a failing stage up to **2 times** with failure notes before escalating.

## Progress tracking

After each stage completes, report:
```
✅ Stage N complete — [artifact name]
Next: Stage N+1 — [stage name]. Confirm to continue.
```
