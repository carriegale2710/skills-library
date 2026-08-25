---
name: doctor
description: Use when a problem is ambiguous and needs structured diagnosis before implementation.
---

# Doctor

Run a diagnosis workflow before proposing implementation.

## Workflow

1. **Intake**: Restate the problem and desired outcome.
2. **Evidence**: Gather observable facts from available artifacts and tools.
3. **Hypotheses**: List likely causes with confidence levels.
4. **Checks**: Define the fastest checks to confirm or reject each hypothesis.
5. **Decision**: Recommend next action based on results.

## Rules

- Prefer evidence over assumptions.
- Ask clarifying questions only when the answer cannot be discovered directly.
- Keep recommendations reversible when confidence is low.
- Do not implement changes until diagnosis is confirmed.
