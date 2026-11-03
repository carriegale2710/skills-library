# Skill Template

Frontmatter follows the Description Requirements in [SKILL.md](../SKILL.md#description-requirements):

```yaml
---
name: <skill-name>
description: <What it does>. Use when <triggers>.
---
```

## Goal

[Clear, concise statement of what this skill does. One or two sentences.]

## Steps

[Ordered, numbered steps the agent performs. Each step should:

- Start with an action verb
- End with a clear completion criterion
- Be testable and deterministic
  ]

1. [First step with completion criterion]
2. [Second step with completion criterion]
3. [Continue as needed]

## Reference

[Optional: definitions, rules, facts consulted on demand. Use for:

- Key terms and leading words
- Rules or constraints
- Decision criteria
- Common patterns
  ]

### Leading Words

[Define any compact concepts or terms that anchor agent behavior. These are tokens that recruit priors from pretraining.]

### Rules

[List any hard constraints or invariants the skill enforces.]

## Common Mistakes

[What goes wrong when agents use this skill incorrectly, and how to fix it.]

## Examples

[Optional: concrete examples of the skill in action, showing before/after or correct usage.]
