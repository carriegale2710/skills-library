---
name: to-release-plan
description: "Write a release plan (feature flag, rollout stages, rollback, monitoring, post-launch check against the PRD's metrics) for a feature, as one markdown file. Use when the user asks how to ship or launch something safely, for a rollout or rollback plan, or when product-manager calls it for risky work."
---

# To Release Plan

Plan how a built feature reaches users safely and how we will know it worked. Synthesise from the PRD, tech spec and conversation; do not interview.

Read `docs/specs/<feature-slug>/`: `prd.md` (goals and metrics) and `tech-spec.md` (what changes, migrations, risks), plus `research/` if present. No PRD: ask for its path.

## Boundaries

- Owns: exposure (flag, stages, who sees it when), go/no-go checks per stage, rollback, monitoring, the post-launch check, and user-facing comms if any.
- Not here: build tasks or order (`to-tickets`), test design (`to-spec`), new goals or metrics (PRD).
- Reference PRD metrics by name; do not invent new ones. Missing metric or baseline: add it to the PRD's Open Questions.
- Rollback must say what happens to data written while the feature was on.

Keep it proportionate: a solo release can be five lines. Fill only sections that apply.

Save as `docs/specs/<feature-slug>/release.md`, unless the project already has a docs convention. No issue tracker.

<release-template>

# Release Plan: <Feature name>

**PRD:** <link> · **Tech spec:** <link>

## Exposure

| Stage | Who sees it | Go / no-go check | Duration |
|---|---|---|---|
| 1 | Internal | ... | ... |
| 2 | <% or segment> | ... | ... |
| 3 | Everyone | ... | ... |

## Rollback

Trigger, steps, and what happens to data written while it was on.

## Monitoring

Errors, performance and guardrail signals to watch, and where.

## Post-launch Check

When to compare results with the PRD's goals, and what result means keep, iterate or kill.

## Comms

Who needs to know, if anyone.

</release-template>
