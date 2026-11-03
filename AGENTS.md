# AGENTS

## How to use this repo

1. Read the request.
2. Match it against skill `description` fields.
3. Use one direct skill for simple work.
4. Use a listed workflow (see `docs/references/WORKFLOWS.md`) for multi-step work.
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
