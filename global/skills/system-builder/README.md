# system-builder

Token-lean rewrite (formerly system-builder-v2; replaced v1 after A/B test). Same job: pick and scaffold the smallest Claude Code primitive.

```text
SKILL.md                      # 5-step procedure
references/decision-matrix.md # routing; edit when wrong primitive chosen
references/writing-rules.md   # merged writing/reference/pruning rules
templates/{skill,subagent,workflow,orchestrator,plugin,hook,reference}.md
```

Changes vs v1: dropped glossary, workflows-vs-orchestrators, writing-for-agents, TDD writing-skills (about 34 KB); merged three writing references into one; trimmed templates. Orchestrator-vs-workflow rule now lives in the matrix.

Install: copy to `~/.claude/skills/system-builder/`. Test: `/system-builder audit dependencies whenever I add a package` → expect skill + hook.
