---
name: write-a-skill
description: Creates a new agent skill, including workflow skills (fixed multi-stage sequences) and orchestrator skills (coordinators that route work to other skills). Use when the user says "create a skill", "write a skill", "make a skill for X", or asks for a workflow or orchestrator skill.
---

# Write a Skill

## Process

1. **Gather requirements** — ask the user about:
   - What task/domain does the skill cover?
   - What specific use cases should it handle?
   - Any reference materials to include?
   - Optional: for complex requirements, use a `gather-requirements` or `define-scope` skill if one is installed; skip if not.
   - If you cannot ask the user, state your assumptions and list the open questions, then continue.

2. **Pick the type** — choose one template:
   - **Plain** — one job, no stages or delegation: [templates/SKILL-TEMPLATE.md](templates/SKILL-TEMPLATE.md).
   - **Workflow** — you can write the stage order in advance: [templates/WORKFLOW-TEMPLATE.md](templates/WORKFLOW-TEMPLATE.md). Allowed: branches on a value from a list you can write now (type is refund, bug, or sales), and loops with a fixed retry cap. Example: release = bump, changelog, tag, build, publish.
   - **Orchestrator** — the agent must read each result to choose the next worker, or may loop with no fixed bound: [templates/ORCHESTRATOR-TEMPLATE.md](templates/ORCHESTRATOR-TEMPLATE.md). Example: triage issues where each finding decides whether to reproduce, dedupe, fix, or ask the reporter.
   - Still unsure: read [references/workflows-vs-orchestrators.md](references/workflows-vs-orchestrators.md). If still unsure, pick workflow (cheaper, easier to debug) and state the assumption.

3. **Draft the skill** — create `<skill-name>/SKILL.md` from the chosen template. `name` matches the folder name. Keep `SKILL.md` under 150 lines; move extended material to `<skill-name>/references/` and link it. For invocation choice and skill mechanics, read [references/writing-skills.md](references/writing-skills.md) and [references/writing-great-skills.md](references/writing-great-skills.md). For wording the description and instructions, read [references/writing-for-agents.md](references/writing-for-agents.md).

4. **Test, then review with user** — test the draft as [references/writing-great-skills.md](references/writing-great-skills.md) describes. Then present it and ask:
   - Does this cover your use cases?
   - Anything missing or unclear?

   If you cannot ask, output the draft and the open questions, then stop. Optionally run a `test-skill` or `pressure-test-skill` skill if one is installed; skip if not.

5. **Deliver** — ask where to save it. Suggest the repo's existing skill folder (e.g. `plugins/<plugin>/skills/<skill-name>/`).

## Description Requirements

The description is **the only thing the agent sees** when deciding which skill to load.

- Max 1024 chars
- Write in third person
- First sentence: what it does
- Second sentence: "Use when [specific triggers]"
- The "Use when" sentence lists only triggers — never summarize the skill's steps

## Review Checklist

- [ ] Description follows the rules above
- [ ] `name` matches the folder; `SKILL.md` under 150 lines
- [ ] The template's own check line passes
- [ ] Every link resolves
- [ ] No time-sensitive info
- [ ] Consistent terminology
- [ ] Concrete examples included
