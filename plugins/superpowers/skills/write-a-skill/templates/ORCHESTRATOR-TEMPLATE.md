# Orchestrator Skill Template

Fill in the body below. Frontmatter follows the Description Requirements in [SKILL.md](../SKILL.md#description-requirements).
Wrong type? Compare in [workflows-vs-orchestrators.md](../references/workflows-vs-orchestrators.md).

````md
---
name: <orchestrator-name>
description: <What goal it coordinates>. Use when <open-ended goal or request type>.
---

# <Orchestrator Name>

## Goal

[The objective it drives to completion, in one or two sentences.]

## Workers

| Worker | Use when | Returns |
| --- | --- | --- |
| `<skill, tool, or agent>` | [condition] | [result shape] |

Mark a worker that does not exist yet as "to be created".
Delegate each task with a brief: Task, Out of Scope, Done When. Workers start with fresh context, so the brief must stand alone.

## Loop

1. Read the request and current state.
2. Pick the one worker that best fits the next need.
3. Delegate with the brief.
4. Read the result. Update state.
5. Decide: done, next worker, or ask the user.

Outward actions (push, publish, send) wait for user confirmation.

## Stop when

[Testable completion condition.] Hard cap: [N delegations; start at about twice the number of workers].

## State

[Where progress is kept (file or notes), so a wait on a user or external party can resume.]

## On failure or missing input

Retry once, then switch worker or ask the user. If you cannot ask, record assumptions and open questions in State and stop.
````

Check: every worker exists or is marked "to be created", the stop condition is testable, the cap is set.
