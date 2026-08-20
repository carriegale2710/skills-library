---
name: writing-skills
description: Use when creating new skills, editing existing skills, or verifying skills work before deployment
---

# Writing Skills

## Overview

**Writing skills IS Test-Driven Development applied to process documentation.**

You write test cases (pressure scenarios with subagents), watch them fail (baseline behavior), write the skill (documentation), watch tests pass (agents comply), and refactor (close loopholes).

**Core principle:** If you didn't watch an agent fail without the skill, you don't know if the skill teaches the right thing.

## What is a Skill?

A **skill** is a reference guide for proven techniques, patterns, or tools.

**Skills are:** Reusable techniques, patterns, tools, reference guides

**Skills are NOT:** Narratives about how you solved a problem once

## SKILL.md Structure

**Frontmatter (YAML):**
- `name`: letters, numbers, hyphens only
- `description`: third-person, starts with "Use when...", max 1024 chars. Describes ONLY triggering conditions — NEVER summarize the skill's workflow.

```markdown
---
name: skill-name
description: Use when [specific triggering conditions]
---

# Skill Name

## Overview
Core principle in 1-2 sentences.

## When to Use
Bullet list with symptoms and use cases

## Core Pattern
Before/after comparison

## Quick Reference
Table or bullets for scanning

## Common Mistakes
What goes wrong + fixes
```

## RED-GREEN-REFACTOR for Skills

### RED: Baseline
Run pressure scenario WITHOUT the skill. Document exact rationalizations agents use.

### GREEN: Write Minimal Skill
Address those specific rationalizations. Run same scenarios WITH skill — agent should now comply.

### REFACTOR: Close Loopholes
Agent found new rationalization? Add explicit counter. Re-test until bulletproof.

## Match the Form to the Failure

| Baseline failure | Right form |
|---|---|
| Skips a rule under pressure | Prohibition + rationalization table + red flags |
| Output has the wrong shape | Positive recipe or contract |
| Omits a required element | Structural template with REQUIRED field |
| Behavior depends on a condition | Conditional keyed to an observable predicate |

## Skill Creation Checklist

**RED Phase:**
- [ ] Create pressure scenarios (3+ combined pressures for discipline skills)
- [ ] Run WITHOUT skill — document baseline behavior verbatim

**GREEN Phase:**
- [ ] `name` uses only letters, numbers, hyphens
- [ ] Description starts with "Use when..." and includes specific triggers/symptoms
- [ ] Description does NOT summarize workflow
- [ ] Address specific baseline failures
- [ ] Run WITH skill — verify compliance

**REFACTOR Phase:**
- [ ] Add explicit counters for new rationalizations
- [ ] Build rationalization table
- [ ] Create red flags list
- [ ] Re-test until bulletproof

## The Iron Law

```
NO SKILL WITHOUT A FAILING TEST FIRST
```

Write skill before testing? Delete it. Start over. No exceptions.
