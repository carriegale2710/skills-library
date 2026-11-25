---
name: to-flows
description: "Write a behaviour spec (user flows, states, rules, edge cases, permissions) for a feature that has a PRD, as one markdown file. Use when the user asks for flows, states, edge cases, or 'how should this behave', or when product-manager calls it. Not for stories (to-stories) or data and APIs (to-spec)."
---

# To Flows

Turn the PRD into exactly how the feature behaves, state by state and edge case by edge case, precise enough that someone can test from it.

## Input

Find the PRD (conversation, or `docs/specs/<feature-slug>/prd.md`). No PRD: ask for its path, or suggest `to-prd` first. Read `research/` in the same folder if present; cite it, don't copy it.

Synthesise from the PRD and the conversation. Ask only about behaviour the PRD cannot answer, at most 3–5 questions in one round. If the user says "just write it", proceed and mark each guess as an assumption.

## Boundaries

- Owns: flows, states, rules and validation, edge cases, permissions, and copy (labels, error text) when it changes behaviour.
- Not here: why or what (PRD), delivery increments and per-story criteria (`to-stories`), data model, APIs and architecture (`to-spec`), pixel layout.
- Reference PRD numbers (S1, R1); never restate requirements.
- Missing requirement or scope gap: do not patch it here. Add it to the PRD's Open Questions and tell the user.

## Writing rules

- Specific and quantified: "< 2 seconds p95", not "fast"; a number, not "large".
- "Must", "will", "always", "never". Not "should", "might", "probably", "user-friendly".
- Every behaviour testable. If you can't say how to check it, rewrite it.
- Behaviour and states, not pixels.

Save as `docs/specs/<feature-slug>/flows.md`, unless the project already has a docs convention. No issue tracker.

<flows-template>

# Flows: <Feature name>

**PRD:** <link>

## Flows

### F1: <Primary flow> (S1, R1)
Entry point, steps, decision points, outcome.

### F2: <Alternate flow>
...

## States

| State | Trigger | What the user sees | What the system does |
|-------|---------|--------------------|----------------------|
| Empty | No data exists | ... | ... |
| Loading | Request in flight | ... | ... |
| Success | Operation complete | ... | ... |
| Error | Request fails | ... | ... |
| Permission denied | User lacks access | ... | ... |

## Rules and Validation

- RU1 (R2): ...

## Edge Cases

| # | Edge case | Expected behaviour | Req |
|---|-----------|--------------------|-----|
| E1 | Duplicate submit | ... | R1 |

## Permissions

Who can see and do what, per role.

## Open Questions

| Question | Owner | Resolution |
|----------|-------|------------|

</flows-template>
