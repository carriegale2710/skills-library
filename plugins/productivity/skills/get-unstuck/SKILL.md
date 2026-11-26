---
name: get-unstuck
description: Get a stuck task moving with a task execution map - diagnose why it's stuck (too big, no energy, unpleasant, unclear, too many tasks, vague goal, no path, too much in progress), apply the one matching method (elephant breakdown, 5-minute start, eat the frog, next action, 1-3 priorities, SMART, WOOP, WIP limit), plan the start (if-then, timebox, pomodoro) and define done. Also plans a day (1 big + 2 small + routine) and runs a weekly review. Works for any work - study, writing, admin, chores, creative projects, job hunting, business, code. Use when the user says "I'm stuck", "procrastinating", "can't start", "don't feel like it", "I keep avoiding", "where do I start", "too much on my plate", "how do I finish this", "when is it done", "plan my day", "weekly review", even if they don't ask for a method.
user-invocable: true
---

# Get Unstuck

Motivation comes after action. Find why the task is stuck, apply the one method that fits, and end with a first step small enough to start now. The user wants to move, not read: keep output short.

## Step 1: Diagnose the block

If the reason is clear from what they said, name it. Otherwise ask one multiple-choice question (question tool if available) with the likely blocks as options.

| Block | Sign | Method |
|---|---|---|
| Too big | "Where do I even start?" | **Elephant:** break it into steps, start the smallest |
| No energy or motivation | Knows what to do, won't | **5 minutes:** timer for 5 minutes and just start; stopping after is allowed |
| Unpleasant | Dread, avoidance | **Eat the frog:** do it first, before anything else today |
| Unclear what to do | Fuzzy, rereads it, stalls | **Next action:** one specific physical action (verb + object + where) |
| Too many tasks | Flitting between things | **1-3 priorities:** one main task plus up to two small ones; park the rest |
| Goal too big or vague | "Get fit", "grow the business" | **SMART:** make it Specific, Measurable, Achievable, Relevant, Time-bound |
| Can't see the path | Wants it, no plan | **WOOP:** Wish → Outcome → Obstacle → Plan ("If [obstacle], then I will...") |
| Too much in progress | Many half-done things | **WIP limit:** finish or pause until 3 or fewer are open; no new starts |
| Doubts it matters | "Should I even do this?" | **Eisenhower:** important + urgent: do now; important: plan it; urgent only: delegate; neither: delete. Deleting is a valid outcome |

Combine at most two (too big + unpleasant → break it down, then do the smallest step first thing tomorrow).

Also classify the thing, because many stuck "tasks" are mislabelled: a **project** (multiple steps; needs a next action), a **single action** (do and close), a **routine** (repeats; see build-habit) or **someday** (an idea or want; park it, it isn't for today).

## Step 2: Plan the start

Pick one:
- **If-then:** "If [situation], then I will [action]." Example: "If I get home at 7pm, I will study for 20 minutes."
- **Timebox:** block a specific slot, e.g. 10:00-11:00 on the report.
- **Pomodoro:** 25 minutes focus, 5 minutes break; a longer break after 4 rounds.

## Step 3: Define done

Before starting, write "I will finish when: ..." with 1-3 observable checks. A clear finish line stops endless polishing and makes the end feel reachable.

## Step 4: Unstick rules for later

- **15-minute rule:** no progress for 15 minutes → stop pushing.
- **Identify the block:** knowledge, time, people, resources or fear.
- **Act on it:** get info, ask for help, delegate, change approach, or switch to another action.

Include this only if they're likely to hit a wall mid-task (long or unfamiliar work).

## Output

```
**Stuck because:** ...
**Method:** ... (one line on why)
**First step (5 min or less):** ...
**Start:** [if-then or timebox]
**Done when:** ...
```

End with "Next action: ..." repeating the first step as one physical action.

## Plan my day

Daily formula: **1 big task** (moves the needle) + **2 small tasks** (important steps) + **routine** (exercise, learning, planning). Plan time, not just tasks: give the big task a slot when their energy is best.

## Weekly review

1. **Review:** list everything open.
2. **Analyse:** what worked, what didn't, why.
3. **Remove:** delete, delegate or postpone.
4. **Adjust:** update plans, goals and the system.
5. **Move forward:** pick next week's one focus.

Output a short keep / cut / change list and next week's one big focus.

## Rules

- Recommend one method. Don't list every method.
- Focus on results, not on being busy. Less, but more regularly. Rest is part of productivity.
- Be kind. No guilt, no lectures about procrastination.
- Don't state deadlines, rules or penalties you aren't sure of (tax dates, legal requirements). Use the user's own dates; if something might be overdue, say "check X" as part of the first step.
- Making it repeat → build-habit. Paralysed by a big choice rather than a task → shrink-decision. A long list that needs ranking → prioritize, if available.
- Don't create tasks, events or reminders in external tools unless asked.
