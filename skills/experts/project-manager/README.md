# Project Management Skills

Reference for every skill in this repo. Read this once; each individual skill file points back here instead of repeating it.

## How to use this repo

1. Read the request.
2. Match it against skill `description` fields.
3. Use one direct skill for simple work.
4. Use a listed workflow (see `WORKFLOWS.md`) for multi-step work.
5. Ask a clarification question only if a missing answer would materially change the result.
6. Preserve facts, assumptions, uncertainty, and decision status.

Do not force a skill when a normal direct answer is better. Use the smallest skill that solves the request; combine skills only when the work genuinely needs multiple stages.

## Core Rules

Apply these across every skill in the repo.

1. **Use the smallest adequate skill.** Do not invoke a multi-step workflow for a simple request.
2. **Keep roles distinct.** Research finds and represents information; context frames the project; design creates solutions; planning creates work; decision skills judge options; records preserve what happened or was accepted.
3. **Separate claim types.** Label material statements as facts, inferences, assumptions, recommendations, or accepted decisions when ambiguity matters.
4. **Keep evidence attached.** When research matters, connect factual claims to supplied sources, links, files, or clearly named evidence.
5. **Do not silently decide.** A recommendation is not an accepted decision until the user explicitly confirms it.
6. **Do not silently act.** Planning, suggesting, drafting, and reviewing do not authorize sending, publishing, deleting, deploying, modifying external systems, or making purchases.
7. **Prefer simple, reversible work.** Use the simplest adequate option that meets stated requirements, constraints, safety, accessibility, privacy, and security needs.
8. **Make uncertainty useful.** State the smallest important evidence gap or assumption, then suggest the next action that would reduce it.
9. **Keep documentation lightweight.** Log activity when it matters; memo only decisions or insights worth finding later.

## Skill Frontmatter

Every skill file begins with this minimum frontmatter:

```yaml
---
name: skill-name
description: >
  One or two sentences explaining exactly when to use this skill, what it produces,
  and when not to use it.
user-invocable: true
---
```

Use clear, concrete language. The description should contain both positive and negative routing signals — what the skill is for, and which neighboring skill to use instead when it isn't the right fit.

Good:

```yaml
---
name: summarize
description: >
  Condense one or more supplied sources into key claims, facts, caveats, and source-linked notes.
  Use when the sources are already chosen; do not use to find sources, make a project recommendation,
  or create a full project brief.
user-invocable: true
---
```

Avoid vague descriptions such as "helps analyze information" or "useful for projects."

## Skill Selection Cheatsheet

| If you want to...                                      | Use...         | Not...         |
| ------------------------------------------------------ | -------------- | -------------- |
| Find external facts or sources                         | `research`     | `summarize`    |
| Condense supplied material                             | `summarize`    | `brief`        |
| Align a project around problem, goals, and constraints | `brief`        | `decide`       |
| Define what success requires                           | `requirements` | `specify`      |
| Create different approaches                            | `ideate`       | `decide`       |
| Detail a chosen approach                               | `specify`      | `plan`         |
| Make an MVP or first slice                             | `scope`        | `kiss`         |
| Turn a scope into tasks                                | `plan`         | `scope`        |
| Choose among alternatives                              | `decide`       | `ideate`       |
| Check work against requirements                        | `review`       | `requirements` |
| Record activity and progress                           | `log`          | `memo`         |
| Record an accepted rationale or decision               | `memo`         | `decide`       |

## Personal Use Checklist

Before using or adding a skill, ask:

- Can I get this result with an existing skill plus a short prompt?
- Does this skill produce something meaningfully different from another one?
- Would I use it repeatedly across projects?
- Can Claude, Copilot, or Perplexity follow its description without needing a complex router?
- Is it simple enough to invoke directly by name?

If the answer is no, do not add a new skill yet. Keep the repo small until repeated use reveals a real gap.

If the answer is yes, start from [`TEMPLATE.md`](TEMPLATE.md) rather than an existing skill file — it carries the frontmatter shape and a self-check (leading word, one trigger per branch, positive framing, no no-ops, single source of truth) drawn from `writing-great-skills.md` and `writing-for-agents.md`.

## Maintenance Rule

Keep this repo personal and practical. Add complexity only after you have encountered the same failure mode repeatedly in real use.

If you later build a product, evolve the system using `PRODUCT_SPEC.skills-framework.md` rather than adding product-grade contracts, orchestration, and policy machinery to this personal repository.
