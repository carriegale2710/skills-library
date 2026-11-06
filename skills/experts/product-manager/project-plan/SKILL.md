---
name: plan-project
description: This skill should be used when the user asks to "create a plan", "break this down", "how do I approach this", or needs to translate a goal into concrete, ordered steps before executing.
user-invocable: true
---

# Plan-Project Skill

## Goal

Create a clear, actionable implementation plan that breaks a goal into concrete, ordered steps.

## Steps

1. **State the goal** — what are you trying to accomplish? Be specific and measurable.
2. **List constraints** — what are the time, resource, or technical constraints?
3. **Identify major phases** — what are the high-level stages of work (e.g., research, design, implement, test)?
4. **Break each phase into tasks** — what specific tasks belong in each phase?
5. **Order tasks by dependency** — which tasks must come before others? Sequence accordingly.
6. **Estimate effort** — how much time/effort will each task take? (Use rough ranges: hours, days, weeks)
7. **Identify risks** — what could go wrong? What assumptions are you making?
8. **Define success criteria** — how will you know the plan succeeded?

## Reference

### Leading Words

- **Plan**: An ordered sequence of tasks that, when completed, achieves a stated goal.
- **Phase**: A high-level stage of work that groups related tasks.

### Rules

- Every task should be concrete and actionable, not abstract.
- Dependencies should be explicit: if B requires A, say so.
- Plans are living documents — update as you learn.

## Common Mistakes

- **Vague tasks**: "Do research" is vague. "Read 3 articles on X and summarize key points" is concrete.
- **Missing dependencies**: Starting tasks that require unfinished prerequisites.
- **Over-planning**: Planning in too much detail upfront. Plan the next phase in detail; future phases can be rough.

## Examples

**Bad plan:** "1. Research 2. Build 3. Test"

**Good plan:**

```
1. Research (2 hours)
   - Read docs for library X
   - Find 2 example implementations
2. Design (1 hour)
   - Sketch component diagram
   - Define API interface
3. Implement (1-2 days)
   - Set up project structure
   - Write core functions
   - Add error handling
4. Test (4 hours)
   - Write unit tests
   - Run integration tests
   - Fix bugs
```
