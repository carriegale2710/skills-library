---
name: to-brief
description: "Write a one-page problem brief (is this worth solving? evidence, bet, metric, kill criteria) as one markdown file, synthesised from the conversation. Use when the user asks for a brief, an opportunity doc, or whether an idea is worth building, or when product-manager calls it. Not for requirements (to-prd)."
---

# To Brief

Write a brief from the current conversation. Do NOT interview the user; synthesise. If the conversation is too thin, say what is missing and suggest `grill` or `brainstorming`.

Read `docs/specs/<feature-slug>/research/` if present; cite it as evidence, don't copy it.

A brief answers one question: **is this worth solving now?** It exists to kill weak ideas cheaply. It does not cover requirements or scope detail (`to-prd`) or any approach or technology (`to-spec`).

## Rules

- One page or less. Longer means it has drifted into a PRD.
- Label each material statement as fact, assumption or open question. Evidence beats opinion; say when there is none.
- Kill criteria must be observable: what result would make you stop?
- Save as `docs/specs/<feature-slug>/brief.md`, unless the project already has a docs convention. No issue tracker.

<brief-template>

# Brief: <Feature name>

## Problem

Who has it, what it costs them, why now.

## Evidence

What we actually know: data, user quotes, support tickets, competitor moves. Mark gaps.

## Bet

The outcome we expect if we solve it, in one or two sentences. No solution design.

## Metric

The one signal that shows the bet paid off, with a target if known.

## Kill Criteria

What we would see that means stop or shelve this.

## Risks and Assumptions

What could make the bet wrong.

## Decision Needed

Go, no-go, or what must be learned first.

</brief-template>
