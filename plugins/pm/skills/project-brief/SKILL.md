---
name: brief
description: This skill should be used when the user asks to "create a brief", "align stakeholders", "project overview", or needs to create a concise document that aligns stakeholders before work begins.
user-invocable: true
---

# Brief Skill

## Goal

Create a concise project brief that aligns stakeholders on the goal, scope, approach, and success criteria before work begins.

## Steps

1. **State the problem or opportunity** — what are you solving and why does it matter?
2. **Define the goal** — what does success look like? (specific, measurable outcome)
3. **Identify stakeholders** — who needs to be informed, consulted, or approve this?
4. **Describe the approach** — how will you solve this? (high-level strategy, key decisions)
5. **List scope boundaries** — what's in scope and out of scope?
6. **Specify constraints** — what are the time, budget, resource, or technical limits?
7. **Define success metrics** — how will you measure whether this succeeded?
8. **Note key risks and assumptions** — what could go wrong? What are you assuming?

## Reference

### Leading Words

- **Brief**: A concise document that aligns stakeholders before work begins.
- **Stakeholder**: Anyone affected by, influencing, or accountable for the project.

### Rules

- Briefs should be 1 page or less — if it's longer, it's a spec, not a brief.
- Write the brief before any implementation work starts.
- Get explicit stakeholder alignment on the brief before proceeding.

## Common Mistakes

- **Skipping the brief**: Starting work without alignment leads to rework and surprises.
- **Too detailed**: Briefs are high-level. Details go in specs, plans, or tickets.
- **No success metrics**: Without metrics, you can't tell if the project succeeded.
- **Assuming alignment**: Don't assume — get explicit sign-off from stakeholders.

## Examples

**Project Brief: Activity Feed**

**Problem:** Users can't see recent actions from accounts they follow, reducing engagement.

**Goal:** Launch activity feed showing last 7 days of followed accounts' actions. Target: +15% engagement in 30 days.

**Stakeholders:**

- Product: @pm (approve)
- Engineering: @tech-lead (consult)
- Design: @designer (inform)

**Approach:**

- PostgreSQL for storage (team expertise, query flexibility)
- Server-side rendering for initial launch
- Infinite scroll pagination

**Scope:**

- In: Feed display, 7-day history, infinite scroll
- Out: Real-time updates, notifications, filtering

**Constraints:** 3 weeks, 2 engineers, existing infra only

**Success metrics:**

- +15% engagement (measured by time in app)
- <200ms feed load time (p95)
- <1% error rate

**Risks:** Query performance at scale — mitigated by indexes and caching

**Assumptions:** Current infra can handle 10k writes/day without upgrades
