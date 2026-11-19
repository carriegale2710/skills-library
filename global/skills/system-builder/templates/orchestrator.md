# Orchestrator template (a skill)

Save as a skill (see `skill.md` paths).

````markdown
---
name: <name>
description: <Goal it coordinates>. Use when <open-ended request type>.
---

# <Name>

## Goal
<Objective in 1-2 sentences.>

## Workers
| Worker | Use when | Returns |
| --- | --- | --- |
| `<skill/agent/tool>` | <condition> | <shape> |

Mark missing workers "to be created". Brief each worker standalone: Task, Out of Scope, Done When.

## Loop
1. Read request + state. 2. Pick one worker. 3. Delegate. 4. Read result, update state. 5. Done, next worker, or ask user.
Outward actions (push, publish, send) wait for user confirmation.

## Stop when
<Testable condition>. Cap: <N delegations, ~2x worker count>.

## State
<File or notes for resuming.>

## On failure
Retry once, then switch worker or ask. If unable to ask, record assumptions in State and stop.
````

Check: workers exist or marked, stop condition testable, cap set.
