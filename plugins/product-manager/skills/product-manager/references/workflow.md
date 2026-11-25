# PM Workflow Map

The data the `product-manager` orchestrator decides over: stages, sizes, pause points and helpers. Edit this file to change the workflow; the orchestrator's control loop lives in `../SKILL.md`.

## Stages

| #   | Skill             | Answers                                      | File in `docs/specs/<slug>/` |
| --- | ----------------- | -------------------------------------------- | ---------------------------- |
| 1   | `to-brief`        | Worth solving?                               | `brief.md`                   |
| 2   | `to-prd`          | What outcome, for whom, what counts as done? | `prd.md`                     |
| 3   | `to-flows`        | How does it behave, state by state?          | `flows.md`                   |
| 4   | `to-stories`      | What deliverable increments?                 | `stories.md`                 |
| 5   | `to-spec`         | How is it built?                             | `tech-spec.md`               |
| 6   | `to-tickets`      | In what order do we build it?                | issue tracker                |
| 7   | `to-release-plan` | How do we ship it safely?                    | `release.md`                 |

- Evidence from other plugins goes in `docs/specs/<slug>/research/`.
- `to-tickets` is manual-only and the only stage that writes to the issue tracker: the user runs `/to-tickets docs/specs/<slug>/`.
- If the project keeps docs elsewhere, use that folder instead of `docs/specs/`.

## Sizes

| Size   | Signal                                                                                  | Chain                                                                        |
| ------ | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Tiny   | One obvious change, under a day                                                         | `to-tickets`                                                                 |
| Small  | One developer, simple behaviour                                                         | `to-prd` → `to-spec` → `to-tickets`                                          |
| Medium | Several flows or roles, or the problem is uncertain                                     | `to-brief` → `to-prd` → `to-flows` → `to-stories` → `to-spec` → `to-tickets` |
| Risky  | Payments, auth, permissions, migrations, external APIs, or anything costly to get wrong | Medium + `to-release-plan`                                                   |

## Pause points

Where to switch on another plugin, enrich the evidence, then resume.

```txt
 ┌─ PAUSE A ─ saas-research · ux-research · startup-strategy
 │   Is there real pain? Demand? Do people pay?
 ▼
1 to-brief ──────────── go / no-go
 │
 ├─ PAUSE B ─ ux-research · startup-strategy
 │   Verify the riskiest assumption, interview users, check pricing
 ▼
2 to-prd
 │
 ├─ PAUSE C ─ ux-design
 │   Generate and choose a solution concept
 ▼
3 to-flows
 │
 ├─ PAUSE D ─ ux-design · ux-research
 │   Critique, accessibility, usability test (may flag back to PRD)
 ▼
4 to-stories
 ▼
5 to-spec ◄── PAUSE E ─ saas-builder · dev-backend (patterns for auth, payments, migrations)
 ▼
6 /to-tickets ──► BUILD ─ dev-core · dev-frontend · saas-builder
 ▼
7 to-release-plan ◄── PAUSE F ─ dev-backend · saas-builder · marketing
```

| Pause | Plugin → skills | Feeds |
|---|---|---|
| A | `saas-research`: `find-wedge`, `reddit-pain-mining`, `search-demand-check`, `revenue-proof-scan` · `ux-research`: `desk-research-digest`, `problem-statement-writer` | Brief: Problem, Evidence |
| B | `ux-research`: `riskiest-assumption-finder`, `interview-guide-designer`, `transcript-synthesizer`, `persona-designer`, `jtbd-writer`, `journey-builder` · `startup-strategy`: `mom-test`, `pricing` | PRD: Users and Scenarios, Goals |
| C | `ux-design`: `design-challenge-framer`, `hmw-generator`, `ideate-solutions`, `prototype-planner` | Flows: chosen concept |
| D | `ux-design`: `heuristic-evaluation`, `design-critique`, `accessibility-review` · `ux-research`: `test-script-designer`, `test-debrief-synthesizer` | Gaps flagged back to flows or PRD |
| E | `saas-builder`: `saas-auth`, `saas-payments`, `saas-database` · `dev-backend`: `migration` | Tech spec decisions |
| F | `dev-backend`: `deploy-checklist` · `saas-builder`: `saas-launcher` · `marketing`: `copywriter`, `product-position` · `startup-strategy`: `data-analysis` | Release plan |

Pauses C, D and F usually matter only for medium or risky work.

## Helpers

Skills that own no stage, suggested when their need appears.

| Need                                     | Skill                                |
| ---------------------------------------- | ------------------------------------ |
| Idea is fuzzy or untested                | `grill`, `brainstorming`             |
| Boundaries keep moving                   | `define-scope`                       |
| Hidden assumptions                       | `list-assumptions`                   |
| Facts or market evidence needed          | `research`                           |
| Might already exist as a tool or service | `reuse-first`                        |
| Choosing between options                 | `help-me-decide`                     |
| Recording a product decision             | `log-decision`                       |
| Stack or architecture choice             | `software-architect`, `architecture` |
| Checking any document                    | `spec-review`                        |
