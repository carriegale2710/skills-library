# Primitive decision matrix

Pick the smallest row that satisfies every requirement.

| Need | Build |
| --- | --- |
| Reusable procedure or checklist | Skill |
| Manual-only trigger | Skill + `disable-model-invocation: true` |
| Isolated context or restricted tools; read-only research | Subagent |
| Must run regardless of model judgment (format, validate, block) | Hook |
| Fixed steps fanned out over many items, rerunnable | Workflow |
| Runtime-chosen path across multiple workers, with state | Orchestrator (a skill) |
| Install/share as one unit | Plugin (only after parts work) |
| Applies to nearly every session | `~/.claude/CLAUDE.md` |
| Learned correction | Auto memory |

## Workflow vs orchestrator

- Fixed A→B→C, known if/else: workflow or plain skill.
- Next step depends on intermediate results, merging, or goal check: orchestrator.
- One classification decision: router skill, not orchestrator.

## Anti-patterns

- Subagent for a short checklist → skill.
- Workflow for one linear task → skill.
- Orchestrator without multiple independent workers → skill.
- Safety enforced only by prompt → hook + permissions.
- Combos are fine when each part has a distinct job (e.g. skill + hook).
