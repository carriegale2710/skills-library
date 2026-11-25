---
name: spec-review
description: "Audit a product document (brief, PRD, flows, stories, tech spec or release plan) for gaps and anti-patterns, with severity and concrete rewrites. Edits nothing. Use when the user asks to review, audit or critique a PRD or spec, asks 'what's missing?', or when product-manager offers a check between stages."
---

# Spec Review

Review one document against the checklist for its type. Report findings; do not edit the document. The owning skill (`to-brief`, `to-prd`, `to-flows`, `to-stories`, `to-spec`, `to-release-plan`) makes any changes.

## Process

1. Identify the document type. If it mixes types (e.g. a PRD with flows and schemas), that is itself a finding.
2. Read the earlier documents it links to, if any, to check references and duplication.
3. Run the matching checklist plus the "Any document" list.
4. Report each finding as: severity (Critical / Major / Minor), the problem in one line, and a concrete rewrite. Critical first. No findings: say so in one line.

Critical means building on the document would likely produce the wrong thing or an untestable result.

## Any document

- [ ] **Wrong layer:** contains content another document owns (e.g. schemas in a PRD, new requirements in stories)
- [ ] **Copies instead of references:** restates earlier documents rather than citing S#, R#, F#, E#
- [ ] **Guess as fact:** assumptions presented as decided
- [ ] **Imprecise language:** "fast", "large", "usually", "should", "user-friendly"
- [ ] **Patched downstream:** a gap fixed here instead of flagged in the earlier document's Open Questions

## Brief
- [ ] **No evidence:** problem rests on opinion
- [ ] **Solution smuggled in:** names an approach or technology
- [ ] **No kill criteria**, or criteria that can't be observed
- [ ] **Over a page**

## PRD
- [ ] **Solution-prescribing:** jumps to implementation without stating the problem
- [ ] **Vague goals:** no metric or baseline
- [ ] **Missing non-goals**
- [ ] **Missing users:** requirements with no clear "for whom"
- [ ] **Untestable requirements**
- [ ] **Missing quality targets:** no performance, security or accessibility expectations

## Flows
- [ ] **Happy path only:** no error, empty, loading or permission states
- [ ] **No edge cases or limits**
- [ ] **No permission model:** ignores roles, tenancy or access control
- [ ] **Over-designed UI:** pixels instead of behaviour
- [ ] **Behaviour not traceable** to a PRD requirement

## Stories
- [ ] **Task disguised as story:** no user, no value
- [ ] **Epic as story:** too big to deliver and test alone
- [ ] **No or happy-path-only acceptance criteria**
- [ ] **Must requirement uncovered** by any story

## Tech spec
- [ ] **Skipped stage gate:** written on a fuzzy PRD
- [ ] **No test seams**, or acceptance criteria not mapped to tests
- [ ] **File paths or code** that will rot
- [ ] **Silent requirement change:** changes the what without flagging it

## Release plan
- [ ] **No rollback**, or rollback ignores data written while on
- [ ] **No post-launch check** against the PRD's metrics
- [ ] **Out of proportion:** heavy ceremony for a small release

## Reference

To explain why a section matters, calibrate depth, or justify a finding, read `references/spec-writing-guide.md`.
