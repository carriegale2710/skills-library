---
name: pipeline
description: Use when the user wants to run a custom sequence of existing skills in one guided session — e.g. "/pipeline to-prd > to-spec > tdd" or "chain to-prd then to-tickets".
---

# Pipeline

## Overview

Compose existing skills into a user-defined sequence. Execute one stage at a time, preserve each stage's output as context for the next, and require explicit confirmation before continuing.

## Invocation

Accept either format:

```text
/pipeline to-prd > to-spec > to-tickets
/pipeline /to-prd > /to-spec > /to-tickets
```

The `>` separator is required between stages. If only one skill is named, run it directly without a pipeline wrapper.

## Workflow

### Step 1 — Parse and validate

1. Read the text after `/pipeline`.
2. Split on `>`, trim whitespace, remove any leading `/`.
3. Confirm every skill name exists in the Space before starting.
4. If any skill is unavailable, list every invalid name and stop. Do not start execution.
5. If no skill names are found, ask the user to provide a sequence.

### Step 2 — Preview

Show the confirmed sequence and ask whether to start:

```text
Pipeline:
1. /first-skill
2. /second-skill
3. /third-skill

Gates: confirmation required after every stage
```

Accept `yes`, `continue`, or `next`. If the user declines, stop.

### Step 3 — Execute

For each stage:

1. Load and run the skill.
2. Provide the current task and all outputs from earlier stages as context.
3. Confirm the stage artifact meets that skill's requirements before reporting completion.
4. Report:

```text
✅ Stage N complete — [artifact name]

Output:
[brief artifact summary]

Next: Stage N+1 — /next-skill. Confirm to continue.
```

5. Wait for explicit confirmation before loading the next skill.

At the end of the final stage, report:

```text
✅ Pipeline complete

Stages completed:
- /first-skill
- /second-skill
- /third-skill
```

## Rules

- Run exactly one stage at a time.
- Wait for explicit confirmation before loading the next skill.
- Only load skills confirmed present in the Space.
- Carry all earlier stage outputs into every subsequent stage.
- Treat a stage as complete only when its required artifact exists.
- A pipeline cannot override the active permission mode or attribution rules.

## Failure handling

See `pipeline-reference.md` for retry behaviour and failure examples.
