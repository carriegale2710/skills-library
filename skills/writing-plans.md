---
name: writing-plans
description: Use after a spec is approved - distills plan.md into context.md and a rolling markdown backlog
---

<skill_overview>
The approved spec says what must be true. `context.md` and `tasks.md` say what to do next and what was learned.
</skill_overview>

<quick_reference>
| Step | Action | Rule |
|------|--------|------|
| 1 | Read `plan.md` | Do not restate it vaguely |
| 2 | Verify codebase reality | Prefer investigator evidence over assumptions |
| 3 | Research the task | Collect 3+ best-practice sources for the specific slice |
| 4 | Write `context.md` | Capture files, decisions, discoveries, resume notes |
| 5 | Write `tasks.md` | Use `Now`, `Next`, `Later`, `Blocked`, `Done` |
| 6 | Keep backlog lean | Only 1-2 active items in `Now` |

**Forbidden:** placeholders like `[details omitted]` or giant speculative task trees.
</quick_reference>

<when_to_use>
- Spec approved, implementation not started
- Existing task docs are vague or stale
- Need a better handoff/resume surface for a large task
</when_to_use>

<the_process>
## 1. Identify the task directory

Work in a local `plans/active/<slug>/`. Read `plan.md` first.

## 2. Verify the codebase

Confirm real file paths, existing modules and constraints, likely implementation seams. Write down mismatches instead of ignoring them.

## 3. Research the specific task

Collect at least 3 current sources about implementation best practices, library guidance, and common pitfalls. Record useful sources in `context.md`.

## 4. Populate `context.md`

Capture: key files, important decisions, discoveries, open questions, explicit resume notes.

## 5. Distill the rolling backlog

Write `tasks.md` with small, concrete items:

- `Now` for immediate work only
- `Next` for near-term follow-ups
- `Later` for deferred work
- `Blocked` with a reason
- `Done` for completed items

## 6. Show the real docs

Present the actual doc contents, not a summary.
</the_process>
