# PRD Mode

If a PRD/spec/user stories are supplied, use them as primary input. Do not ask for information already present.

## Extract

```yaml
job_to_be_done:
problem:
target_users:
current_workflow:
proposed_workflow:
mvp_scope:
non_goals:
success_metrics:
constraints:
assumptions:
open_questions:
dependencies:
differentiation:
```

Missing field = `NOT_SPECIFIED`. Do not invent requirements.

## Classify requirements

| Type                    | Rule                                                   |
| ----------------------- | ------------------------------------------------------ |
| `OUTCOME`               | User/business result; preserve                         |
| `WORKFLOW`              | Steps to outcome; seek existing tools                  |
| `CAPABILITY`            | Functional need; seek SaaS/API/library                 |
| `IMPLEMENTATION_CHOICE` | Named tech/vendor; challenge unless justified          |
| `CONSTRAINT`            | Hard requirement; preserve unless evidence contradicts |
| `ASSUMPTION`            | Unvalidated belief; flag                               |

A PRD saying "build React dashboard with Supabase" states an implementation choice. The requirement may be "staff securely view/edit customer records."

## Group requirements

- Fully reusable
- Configurable
- Thin custom glue
- Custom differentiator
- Deferred

## Additional output

### PRD reconciliation

| Requirement | Classification | Recommended path | Change | Rationale |
| ----------- | -------------- | ---------------- | ------ | --------- |

Change: `Keep | Replace | Defer | Clarify`.

```yaml
prd_gaps:
prd_risks:
recommended_prd_edits:
mvp_cut:
```

## Challenge only material issues

- Vague/unmeasurable requirements
- False must-haves
- Premature technology choices
- Duplicated mature solutions
- Unmeasurable success
- Missing privacy/accessibility/data-residency
- Missing edge cases, permissions, failure states, migration

Do not rewrite the PRD unless asked.

## Minimal PRD template

```markdown
# PRD: [Feature]

## Problem

Who has the problem, what is painful, why now?

## Outcome

What must be true after shipping?

## Users

Primary and secondary users.

## Current workflow

What happens today?

## MVP scope

- Must-have capability

## Non-goals

- Explicitly out of scope

## Success metric

Metric, baseline, target, measurement.

## Constraints

Budget, deadline, stack, privacy, accessibility, data residency.

## Assumptions

Unvalidated beliefs.

## Open questions

Questions to answer before build.
```
