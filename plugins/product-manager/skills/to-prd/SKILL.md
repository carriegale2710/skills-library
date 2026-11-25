---
name: to-prd
description: "Write a PRD (what outcome, for whom, what counts as done; no implementation) as one markdown file, synthesised from the brief and conversation. Use when the user asks for a PRD or requirements doc, or when product-manager calls it. Not for flows (to-flows), stories (to-stories) or technical design (to-spec)."
---

This skill writes a PRD from the brief (if one exists) and the current conversation. Do NOT interview the user. Synthesize what you already know. If the conversation is too thin to write one, say what is missing and suggest `grill` or `brainstorming` first.

A PRD covers **what** we are building and **why**, written from the user's side. It does not cover detailed behaviour (flows, states, edge cases: `to-flows`), delivery increments (`to-stories`) or **how** it is built (modules, schemas, APIs, test seams: `to-spec`). If you notice that detail, leave it out and add it to Open Questions only when it blocks a requirement.

If a brief exists, link it and do not restate its problem or evidence; summarise in one line.

Read `docs/specs/<feature-slug>/research/` if present; cite it as evidence, don't copy it.

## Process

1. Do not explore the codebase. Use the project's domain glossary terms if you already know them.

2. Label each material statement as fact, assumption or open question. Never present a guess as a decided requirement.

3. Write requirements that are testable and state the need, not the solution. "Fast" and "user-friendly" are not requirements; "search returns results in under 2 seconds" is.

4. Write the PRD using the template below and save it as one markdown file: `docs/specs/<feature-slug>/prd.md`, unless the project already has a docs convention. Do not publish to an issue tracker; `to-tickets` does that.

<prd-template>

# PRD: <Feature name>

**Brief:** <link, if any>

## Problem

Who has the problem, what it is and why it matters now. One line if a brief exists.

## Goals and Success Metrics

The outcomes this work must achieve. For each one, give the measurable signal that shows it worked and a target if one is known.

## Users and Scenarios

The primary users, and the key scenarios, one line each:

S1. As an <actor>, I want <capability>, so that <benefit>

## Requirements (In-scope)

A numbered list (R1, R2…) of what the product must do, written as behaviour the user can observe. Follow MoSCoW prioritization: **Must**, **Should**, **Could**. **Will not** goes into the "Non-Goals" section. Do not name modules, data structures or technologies.

Include user-visible quality targets as requirements too (speed, availability, security, accessibility), each with a number where one is known.

## Acceptance Criteria

Testable, user-observable outcomes that show the requirements are met, tagged with the requirement they prove. Outcome level only; per-state and edge-case criteria belong to `to-flows` and `to-stories`.

## Non-Goals (Out of Scope)

What this work deliberately does not do, and why.

## Assumptions and Dependencies

What must hold true, and what this work depends on (other teams, vendors, data, decisions).

## Open Questions

Unresolved points, each with an owner if one is known.

</prd-template>

Later documents link to this PRD and reference its numbers (S1, R1); they never copy them. If a later stage finds a gap, it is added here as an Open Question rather than patched downstream.
