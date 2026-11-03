# Workflow Skill Template

Fill in the body below. Frontmatter follows the Description Requirements in [SKILL.md](../SKILL.md#description-requirements).
Wrong type? Compare in [workflows-vs-orchestrators.md](../references/workflows-vs-orchestrators.md).

````md
---
name: <workflow-name>
description: <What the workflow produces>. Use when <trigger that starts this sequence>.
---

# <Workflow Name>

## Goal

[One or two sentences: the input it takes and the output it produces.]

## Stages

Run in this order. Do not reorder. Skip a stage only through its Condition.
Stages that push, publish, or send wait for user confirmation. If confirmation is declined or unavailable, stop and leave the work local.

### 1. <Stage name>

- **Input:** [what this stage receives]
- **Action:** [existing skill, tool, or step to run]
- **Output:** [what it produces and where it is saved]
- **Condition:** [optional. Run only if X; otherwise write "skipped" and go to the next stage]
- **Gate:** [pass condition] — on fail, including tool errors: [stop and report | loop back to stage N | continue and record]
- **Retry cap:** [required if the Gate loops back. Max N passes through the loop, then stop and report]

### 2. <Stage name>

[Same fields. Repeat per stage. For parallel work: "Run 3a and 3b together, wait for both."]

## Working files

[Where intermediate results live, e.g. `<workflow-name>/work/`.]

## Done when

[Required outputs exist and the last stage's Gate passes.]
````

Check: every stage has a Gate, every loop-back has a Retry cap, outward actions wait for confirmation.
