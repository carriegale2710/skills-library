---
name: suggest-skills
description: Recommends the best installed skills for a user's current task. Use when the user asks which skill to use, requests a skill recommendation, or invokes /suggest-skills before starting work.
---

# Suggest Skill

## Purpose

Identify the one to three installed skills that best match the user's current task. Recommend only skills available in the current Space. Do not perform the underlying task.

## Workflow

1. Identify the task's primary intent, domain, and expected deliverable.
   Completion criterion: State the task in one sentence and identify the output the user needs.

2. Inspect the current Space's installed skill files.
   Completion criterion: Build a candidate set from locally available files under `skills/`, excluding engine files, documentation, and unavailable skills.

3. Read the descriptions or opening instructions for candidate skills.
   Completion criterion: Confirm that each candidate has a purpose relevant to the user's task.

4. Rank candidates using these priorities:
   - Direct match to the primary task.
   - Coverage of the requested deliverable.
   - Specificity over breadth.
   - Practical usefulness as the next step.
     Completion criterion: Select no more than three genuinely suitable skills.

5. Recommend the strongest match first.
   Completion criterion: Give one decisive primary recommendation and include alternatives only when they add meaningful coverage.

## Output format

## Best fit

### `/skill-name`

**What it does:** One sentence.
**Why it fits:** One sentence.

## Other suitable options

### `/another-skill`

**What it does:** One sentence.
**Why it fits:** One sentence.

Omit this section when no additional option is strong.

## Next step

Run `/skill-name` to continue.

## Rules

- Use exact installed skill names and preserve hyphens.
- Derive the slash command from the local skill filename.
- Recommend at most three skills.
- Report only skills and metadata actually found in the Space.
- If the task is ambiguous, make the narrowest reasonable interpretation and state it briefly.
- For a new skill, recommend `/write-a-skill`.
- For reviewing or improving an existing skill, recommend `/writing-skills` or `/writing-great-skills` when installed.
- If no suitable skill exists, recommend `/find-skills` or `/write-a-skill`.
