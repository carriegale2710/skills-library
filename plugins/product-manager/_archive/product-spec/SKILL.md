---
name: product-spec
description: Use when a PRD exists and the feature's behaviour needs pinning down — user flows, screens' states (empty, loading, error, permission-denied), business rules, edge cases, per-state acceptance criteria, or splitting stories that are too big ("spec the behaviour", "what are the edge cases", "break this into stories", "definition of done"). Also audits an existing PRD, product spec or story set for gaps and anti-patterns. Not for writing a PRD (to-prd) or a technical design (to-spec).
---

# Product Spec

## Purpose

Turn a PRD into a behaviour spec: exactly how the feature behaves, state by state and edge case by edge case, precise enough that someone can test from it. The PRD owns why and what; `to-spec` owns how it is built. This skill owns the behaviour in between.

Optional stage: skip it for small, single-developer features where the PRD's acceptance criteria are enough. Run it when behaviour is complex or several roles are involved.

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| **Write** | "Spec the behaviour", "what are the edge cases", "break this into stories" | One markdown file |
| **Audit** | "Review my PRD", "audit this spec", "what's missing?" | Audit report in chat; changes no document |

## Write mode

1. Find the PRD (conversation, or `docs/specs/<feature-slug>/prd.md`). No PRD: ask for its path, or suggest `to-prd` first.
2. Synthesise from the PRD and the conversation. Ask only about behaviour the PRD cannot answer, at most 3–5 questions in one round. If the user says "just write it", proceed and mark each guess as an assumption.
3. If you find a missing requirement or scope gap, do not patch it here. Add it to the PRD's Open Questions and tell the user.
4. Save one file next to the PRD: `docs/specs/<feature-slug>/product-spec.md`, unless the project already has a docs convention. Do not publish to an issue tracker; `to-tickets` does that.

### Template

```markdown
# Product Spec: [Feature Name]

**PRD:** [link]

## User Flows
### Flow 1: [Primary flow] (S1, R1)
Entry point, steps, decision points, outcome.

### Flow 2: [Alternate flow]
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
- [Rule] (R2): ...

## Edge Cases
| Edge case | Expected behaviour | Req |
|-----------|--------------------|-----|
| Duplicate submit | ... | R1 |

## Permissions
Who can see and do what, per role.

## Stories and Acceptance Criteria
### S1.a: [Short title]
**As a** [role], **I want** [capability], **so that** [value].
- [ ] Given [context], when [action], then [outcome]
- [ ] Given [edge case], when [action], then [outcome]

## Open Questions
| Question | Owner | Resolution |
|----------|-------|------------|
```

Copy-level detail (labels, error text) belongs here when it changes behaviour. Data model, APIs and architecture belong in `to-spec`.

### Stories

Stories come from the PRD (S1, S2…). Refine each with per-state and edge-case acceptance criteria. If a story is too big to deliver and test on its own (fails INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable), split it as S1.a, S1.b by:
- Workflow step
- Happy path vs. edge cases
- CRUD operation
- Persona/role
- Surface (UI vs. API vs. background job)

Build-order slicing is `to-tickets`' job, not this skill's.

### Writing rules

- Be specific and quantified. Replace "fast" with "< 2 seconds p95". Replace "large" with a number.
- Use "must", "will", "always", "never". Avoid "should", "might", "probably", "user-friendly".
- Every behaviour must be testable. If you can't write an acceptance criterion for it, rewrite it.
- Reference PRD numbers (S1, R1); never restate requirements.
- Describe behaviour and states, not pixels.

## Audit mode

Review the given document against the matching checklist. Output a report with severity (Critical / Major / Minor) and a concrete rewrite for each finding. Do not edit the document.

### PRD
- [ ] **Solution-prescribing:** jumps to implementation without stating the problem
- [ ] **Vague goals:** "improve UX" with no metric or baseline
- [ ] **Missing non-goals:** no scope boundary
- [ ] **No evidence:** problem based on opinion, not data or research
- [ ] **Missing users:** requirements with no clear "for whom"
- [ ] **No success metric:** no way to know it worked
- [ ] **Untestable requirements:** "fast", "easy", "should"
- [ ] **Missing quality targets:** no performance, security or accessibility expectations

### Product spec
- [ ] **Happy path only:** no error states, edge cases or limits
- [ ] **Imprecise language:** "fast", "large", "usually", "most"
- [ ] **Mixed responsibilities:** unrelated behaviours that can't ship independently
- [ ] **Over-designed UI:** prescribes pixels instead of behaviours and states
- [ ] **No acceptance criteria:** no testable conditions
- [ ] **No permission model:** ignores roles, tenancy or access control
- [ ] **Restates the PRD:** copies requirements instead of referencing them

### Stories
- [ ] **Task disguised as story:** "Refactor billing module": no user, no value
- [ ] **Epic as story:** too big to deliver and test alone
- [ ] **No acceptance criteria:** behaviour inferred from the title
- [ ] **No parent link:** can't trace back to the PRD
- [ ] **Happy-path-only criteria**

## Output discipline

Deliver only what the user will use. No reference citations the reader can't see, no mode or process narration, no skill-handoff chatter inside the document. State a missing-context assumption in one line and proceed.

## Handoffs

- Discovery is thin or the idea is shaky → `grill` or `brainstorming`
- Hidden assumptions → `list-assumptions`
- Metric design → `data-analysis`
- Technical design → `to-spec`; stack choices → `software-architect`
- Pricing or packaging implications → `pricing`

## Reference

For why a section matters, depth calibration, or justifying an audit finding, read `references/spec-writing-guide.md`.
