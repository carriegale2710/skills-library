# Writing Skills (Reference)

## Overview

**Writing skills IS Test-Driven Development applied to process documentation.**

You write test cases (pressure scenarios), watch them fail (baseline behavior), write the skill (documentation), watch tests pass (agent complies), and refactor (close loopholes).

**Core principle:** If you didn't observe an agent fail without the skill, you don't know if the skill teaches the right thing.

## What is a Skill?

A **skill** is a reference guide for proven techniques, patterns, or tools.

**Skills are:** Reusable techniques, patterns, tools, reference guides

**Skills are NOT:** Narratives about how you solved a problem once

## SKILL.md Structure

**Frontmatter (YAML):**

- `name`: letters, numbers, hyphens only
- `description`: follow the Description Requirements in [SKILL.md](../SKILL.md#description-requirements). The "Use when" sentence describes ONLY triggering conditions — NEVER summarize the skill's steps.

```markdown
---
name: skill-name
description: [What it does]. Use when [specific triggering conditions]
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

Simulate the scenario yourself without the skill active — reason through what a naive agent would do and document the exact rationalizations it would use to skip or shortcut the intended behaviour.

### GREEN: Write Minimal Skill

Address those specific rationalizations. Re-run the scenario mentally WITH the skill — the agent should now comply.

### REFACTOR: Close Loopholes

Found a new rationalization? Add an explicit counter. Repeat until the skill is bulletproof against all identified shortcuts.

## Match the Form to the Failure

| Baseline failure                | Right form                                      |
| ------------------------------- | ----------------------------------------------- |
| Skips a rule under pressure     | Prohibition + rationalization table + red flags |
| Output has the wrong shape      | Positive recipe or contract                     |
| Omits a required element        | Structural template with REQUIRED field         |
| Behavior depends on a condition | Conditional keyed to an observable predicate    |

## Skill Creation Checklist

**RED Phase:**

- [ ] Define pressure scenarios: 3+ for skills with gates, loops, or delegation; 2 mental scenarios for trivial skills
- [ ] Simulate WITHOUT skill — document baseline rationalizations verbatim

**GREEN Phase:**

- [ ] `name` uses only letters, numbers, hyphens
- [ ] Description has a "Use when..." sentence with specific triggers/symptoms
- [ ] Description does NOT summarize workflow
- [ ] Address specific baseline failures
- [ ] Simulate WITH skill — verify compliance

**REFACTOR Phase:**

- [ ] Add explicit counters for new rationalizations
- [ ] Build rationalization table
- [ ] Create red flags list
- [ ] Re-simulate until bulletproof

## The Iron Law

```
NO SKILL SHIPS WITHOUT A TEST
```

Shipped before testing? Test it now and fix what fails. No exceptions.

**Trivial skills** (no gates, loops, or delegation; asking one clarifying question does not count): run 2 mental pressure scenarios against the draft and skip the no-skill baseline. Everything else gets the full RED-GREEN-REFACTOR with 3+ scenarios.
