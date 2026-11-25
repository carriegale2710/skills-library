---
name: to-stories
description: "Slice a feature's PRD and flows into INVEST user stories with Given/When/Then acceptance criteria, as one markdown file. Use when the user asks for user stories, 'break this into stories', acceptance criteria or definition of done, or when product-manager calls it. Not for build order or tickets (to-tickets)."
---

# To Stories

Turn the PRD scenarios and the flows into deliverable increments: each story is something a user can do that is worth shipping on its own, with criteria that prove it works.

## Input

Read the PRD (`prd.md`) and, if present, the flows (`flows.md`) in `docs/specs/<feature-slug>/`. No PRD: ask for its path, or suggest `to-prd` first. Do not interview; synthesise.

## Boundaries

- Owns: the story list, each story's acceptance criteria, and how oversized stories are split.
- Not here: new behaviour (`to-flows`), new requirements (PRD), build order, layers or blocking edges (`to-tickets`).
- Each story cites what it delivers: PRD scenario and requirements (S1, R2), flow and states (F1, Error), edge cases (E3). Cite; never restate.
- Every PRD requirement marked Must is covered by at least one story. List any that aren't.
- A behaviour that the flows don't cover: add it to the flows' or PRD's Open Questions and tell the user. Don't invent it here.

## Stories

Each story must pass INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable. A story that is too big to deliver and test on its own gets split, by one of:

- Workflow step
- Happy path vs. edge cases
- CRUD operation
- Persona or role
- Surface (UI vs. API vs. background job)

Not a story: "Refactor billing module" (no user, no value). That belongs in `to-spec` or `to-tickets`.

## Acceptance criteria

- Given / When / Then, one behaviour per line.
- Cover the happy path, the relevant error and permission states, and the edge cases the story touches.
- Quantify: "within 2 seconds", not "quickly".

Save as `docs/specs/<feature-slug>/stories.md`, unless the project already has a docs convention. No issue tracker.

<stories-template>

# Stories: <Feature name>

**PRD:** <link> · **Flows:** <link>

## ST1: <Short title> (S1, R1 · F1)

**As a** <role>, **I want** <capability>, **so that** <value>.

- [ ] Given <context>, when <action>, then <outcome>
- [ ] Given <error state>, when <action>, then <outcome> (E2)

## ST2: <Short title>
...

## Coverage

| Requirement | Stories |
|---|---|
| R1 (Must) | ST1, ST2 |

## Open Questions

</stories-template>
