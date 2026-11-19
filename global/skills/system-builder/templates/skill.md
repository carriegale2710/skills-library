# Skill template

Save: `~/.claude/skills/<name>/SKILL.md` (personal) or `.claude/skills/<name>/SKILL.md` (project).

```markdown
---
name: <kebab-name>
description: <What it does>. Use when <triggers>.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob
---

# <Title>

## Goal
<One measurable outcome.>

## Inputs
- `$ARGUMENTS`: <meaning>

## Procedure
1. <Verb ... done when X.>

## Constraints
- Ask before <consequential action>.

## Output
<Exact shape.>
```

Use `disable-model-invocation: true` for manual-only or consequential skills.
