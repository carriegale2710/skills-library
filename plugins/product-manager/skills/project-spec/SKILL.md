---
name: specify
description: This skill should be used when the user asks to "write a spec", "define requirements", "how should this work", or needs to translate requirements into precise, implementable specifications.
user-invocable: true
---

# Specify Skill

## Goal

Translate requirements into precise, unambiguous specifications that developers can implement without guesswork.

## Steps

1. **Review requirements** — what problem are you solving? What are the user needs?
2. **Define the scope** — what is in scope and out of scope for this spec?
3. **Describe the user experience** — how will users interact with this? (flows, screens, states)
4. **Specify functional requirements** — what must the system do? (inputs, outputs, behaviors)
5. **Define data models** — what data structures are needed? (fields, types, relationships)
6. **Document APIs and interfaces** — what are the contracts between components?
7. **List edge cases** — what are the boundary conditions and error scenarios?
8. **Define acceptance criteria** — how will you verify the spec was implemented correctly?

## Reference

### Leading Words

- **Specification**: A precise, unambiguous description of what to build.
- **Acceptance criteria**: Conditions that must be met for the implementation to be considered complete.

### Rules

- Specs should be implementable without requiring clarification — if a developer needs to ask, the spec is incomplete.
- Use precise language: avoid "should", "might", "probably". Use "must", "will", "always", "never".
- Include examples and edge cases — they clarify intent better than prose alone.

## Common Mistakes

- **Vague requirements**: "Make it fast" is vague. "Load in under 200ms" is specific.
- **Missing edge cases**: Specs that only cover the happy path fail in production.
- **Over-specifying implementation**: Specify what, not how — let developers choose the best implementation.
- **No acceptance criteria**: Without clear criteria, you can't verify completion.

## Examples

**Vague:** "The system should handle errors gracefully."

**Specific:**

- On API timeout (>5s), display: "Service temporarily unavailable. Please try again."
- On invalid input, highlight the field in red and show: "Invalid format. Expected: YYYY-MM-DD"
- On server error (5xx), log the error and display: "Something went wrong. Error code: [code]"
