---
name: research-to-issues
description: Use when the user wants to go from a raw topic, market idea, or product question all the way to prioritised GitHub issues — covering research, idea generation, and backlog creation in one guided session.
---

# Research to Issues

## Overview

Orchestrates three sub-skills in sequence to convert a research topic into a prioritised GitHub backlog. Each stage produces a concrete artifact. Do not advance without explicit user confirmation.

## Stages

### Stage 1 — Research
Load and run `/research`.
Artifact: Structured research report (findings, sources, gaps).
Gate: user confirms research is sufficient (`yes` / `continue` / `next`).

### Stage 2 — Brainstorming
Load and run `/brainstorming`.
Artifact: Prioritised list of ideas or product directions derived from research.
Gate: user selects ideas to take forward.

### Stage 3 — Issues
Load and run `/to-issues`.
Artifact: GitHub issues created in the repo, labelled and ordered.
Gate: user confirms issue set is complete.

## Gate rule

Do NOT advance to the next stage without explicit user confirmation (`yes`, `continue`, or `next`). Retry a failing stage up to **2 times** with failure notes before escalating.

## Progress tracking

After each stage completes, report:
```
✅ Stage N complete — [artifact name]
Next: Stage N+1 — [stage name]. Confirm to continue.
```
