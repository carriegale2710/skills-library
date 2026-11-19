---
name: system-builder
description: Designs and scaffolds the smallest correct Claude Code automation (skill, subagent, hook, workflow, orchestrator, plugin) or a reference file. Use when the user says "create a skill", "automate this", "make an agent", "build a workflow", "make a plugin", "write a reference", or asks which primitive fits a task.
allowed-tools: Read, Write, Glob, Grep
---

# System builder

Turn one automation idea into the smallest correct artifact.

## 1. Extract

Pull from the request; ask only about gaps that change the primitive:

- Trigger: manual, auto-relevance, lifecycle event, batch
- Input / output
- Scope: project, personal, plugin
- Risk: read-only, edits, commands, external effects
- On failure: retry, ask, stop

## 2. Choose

Apply [references/decision-matrix.md](references/decision-matrix.md). Smallest primitive that fits wins.

## 3. Present design

Output the design. If the artifact runs commands or has external effects (any hook, settings change, or workflow calling git/gh), stop here, write no files, and end with a yes/no question, unless the user already approved creating the files. Otherwise continue:

```text
Primitive / why / rejected:
Scope:
Tools + permissions:
Failure behavior:
Files:
Tests (normal, edge, failure):
```

Keep mandatory steps in the main file. Move on-demand detail to `references/<topic>.md`, one topic per file.

## 4. Scaffold

Load only the matching template from `templates/`: `skill`, `subagent`, `workflow`, `orchestrator`, `plugin`, `hook`, `reference`. Apply [references/writing-rules.md](references/writing-rules.md). Save where the template says.

`~/.claude/CLAUDE.md` or auto memory selected: no template. Draft the one line to add and its target file; write only after the user approves.

## 5. Validate

Done when all hold:

- Skill/subagent: frontmatter parses; `name` matches folder or file. Reference files have no frontmatter.
- Every linked path exists.
- Plugin: `claude plugin validate <path>` passes, if available.
- Writing-rules checklist passes.
- 2-3 test prompts written and walked through the artifact (normal, edge, failure); fix any that fail.
- Unverified assumptions listed (paths, hook fields, payload shapes not confirmed). Mark tests "expected", not "pass", unless run.
- Report: invocation syntax + revision path below.

## Revise

| Symptom | Fix |
| --- | --- |
| Wrong primitive | `references/decision-matrix.md` |
| Wrong procedure | artifact's own prompt |
| Wrong output shape | template or output section |
| Repeated personal correction | propose `~/.claude/CLAUDE.md` |
| Hard safety rule | propose hook/permission, not prompt text |
