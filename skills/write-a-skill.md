---
name: write-a-skill
description: Creates a new agent skill file right now. Use when the user says "create a skill", "write a skill", or "make a skill for X". For skill-writing methodology and TDD philosophy, see /writing-skills instead.
---

# Write a Skill

## Process

1. **Gather requirements** - ask the user about:
   - What task/domain does the skill cover?
   - What specific use cases should it handle?
   - Does it need executable scripts or just instructions?
   - Any reference materials to include?

2. **Draft the skill** - create:
   - `SKILL.md` with concise instructions
   - Additional reference files if content exceeds 500 lines

3. **Review with user** - present draft and ask:
   - Does this cover your use cases?
   - Anything missing or unclear?

## Skill Structure

```
skill-name/
├── SKILL.md           # Main instructions (required)
├── REFERENCE.md       # Detailed docs (if needed)
└── EXAMPLES.md        # Usage examples (if needed)
```

## SKILL.md Template

```md
---
name: skill-name
description: Brief description. Use when [specific triggers].
---

# Skill Name

## Quick start
[Minimal working example]

## Workflows
[Step-by-step processes]

## Advanced features
[Link to separate files]
```

## Description Requirements

The description is **the only thing your agent sees** when deciding which skill to load.

- Max 1024 chars
- Write in third person
- First sentence: what it does
- Second sentence: "Use when [specific triggers]"
- Describes ONLY triggering conditions — never summarizes the skill's workflow

## Review Checklist

- [ ] Description includes triggers ("Use when...")
- [ ] SKILL.md under 100 lines
- [ ] No time-sensitive info
- [ ] Consistent terminology
- [ ] Concrete examples included
