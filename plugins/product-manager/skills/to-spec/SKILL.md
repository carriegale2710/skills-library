---
name: to-spec
description: "Write a technical spec (the how: modules, interfaces, schema and API decisions, test seams) from a feature's PRD, flows, stories and the codebase, as one markdown file. Use when the user asks for a tech spec or design doc for a feature, or when product-manager calls it. Not for documenting existing systems (tech-doc)."
---

This skill writes a technical spec from the feature's documents, the current conversation and what you understand of the codebase. Do NOT interview the user. Synthesize what you already know.

A spec covers **how** the requirements will be built. It does not restate **what** or **why** (PRD), behaviour (flows) or increments (stories). Link to them and reference their numbers (R1, F1, E2, ST3); do not copy them.

Read `docs/specs/<feature-slug>/`: `prd.md` is required; `flows.md`, `stories.md` and `research/` if present. No PRD: ask for its path, or suggest `to-prd` first.

## Stage gate

Before writing, check that the earlier documents answer: who the user is, the outcome and metric, what is in and out of scope, the main flows and edge cases, and what "done" means. If any is fuzzy, list the gaps and stop; a technical spec written on top of them is fiction.

If you find a requirement that is infeasible or much more expensive than it looks, do not quietly change it. Add it to the PRD's Open Questions and tell the user.

## Process

1. Explore the repo to understand the current state of the codebase, if you haven't already. Use the project's domain glossary vocabulary throughout the spec, and respect any ADRs in the area you're touching.

2. Sketch out the seams at which you're going to test the feature. Existing seams should be preferred to new ones. Use the highest seam possible. If new seams are needed, propose them at the highest point you can. The fewer seams across the codebase, the better — the ideal number is one.

   Check with the user that these seams match their expectations.

3. Write the spec using the template below and save it as `docs/specs/<feature-slug>/tech-spec.md`, unless the project already has a docs convention. Do not publish to an issue tracker; `to-tickets` does that.

<spec-template>

# Tech Spec: <Feature name>

## Sources

Links to the PRD, flows and stories this spec implements.

## Approach

A short summary of how the solution will be built, from the builder's perspective.

## Implementation Decisions

A list of implementation decisions that were made, each tagged with the requirement numbers it serves. This can include:

- The modules that will be built/modified
- The interfaces of those modules that will be modified
- Technical clarifications from the developer
- Architectural decisions
- Schema changes
- API contracts
- Specific interactions

Do NOT include specific file paths or code snippets. They may end up being outdated very quickly.

Exception: if a prototype produced a snippet that encodes a decision more precisely than prose can (state machine, reducer, schema, type shape), inline it within the relevant decision and note briefly that it came from a prototype.

## Testing Decisions

A list of testing decisions that were made. Include:

- A description of what makes a good test (only test external behavior, not implementation details)
- Which modules will be tested, and at which seams
- How the acceptance criteria (PRD and stories) map to tests
- Prior art for the tests (i.e. similar types of tests in the codebase)

## Technical Out of Scope

Implementation work deliberately left out (refactors, migrations, optimisations). Product non-goals stay in the PRD.

## Further Notes

Any further technical notes, risks or open questions.

</spec-template>
