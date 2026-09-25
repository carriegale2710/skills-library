# Skills Library

An agent-agnostic living library of reusable skills, specialist bundles, and multi-step workflow patterns. It is organised by purpose so you can copy or load only the pieces relevant to a task.

## Purpose

I made this repository to keep the skills, workflows, and working patterns I develop in one portable place instead of tying them to a single AI platform. Access, pricing, and capabilities vary across tools, while the underlying knowledge and process should remain reusable.

The same approach can benefit anyone who works with multiple AI assistants, relies on education or free-tier access, or wants to move to local models later. A modular library makes it easier to:

- keep your accumulated expertise under your control;
- reuse the same workflows across different agents and projects;
- install only the skills you need instead of loading an entire collection; and
- adapt gradually as better tools, models, or platforms become available.

## Key Features

- **Portable** — keep reusable instructions and workflows independent from any single agent, model, or platform.
- **Modular** — copy individual skills, supporting files, expert bundles, or complete workflow patterns as needed.
- **Layered** — browse the flat `allskills/` mirror index, choose a focused `experts/` or `superpowers/` collection, or use a workflow or orchestrator for multi-step work.
- **Practice-driven** — refine skills as they are used, tested, and adapted to real projects.

## How to use the library

1. Choose a standalone skill, specialist bundle, workflow, or orchestrator pattern.
2. Copy the relevant folder and any files it references into the target agent workspace.
3. Follow the target platform's conventions for loading or invoking the skill. Platforms differ, so `/skill-name` is supported only where that platform exposes folder-based skills as slash commands.
4. Keep the skill's supporting files with it when the skill links to references, templates, or other dependencies.

Avoid loading the entire collection into an agent context by default. A smaller, task-specific set is easier to discover and reduces instruction overlap.

## Choosing a format

- **Standalone skill:** one reusable capability with its own instructions and supporting files.
- **Expert bundle:** a curated group of related skills for a role or domain.
- **Superpower:** a general-purpose utility skill intended for repeated everyday use.
- **Workflow:** a predictable sequence with known steps, dependencies, and outputs.
- **Orchestrator:** a dynamic coordinator that routes work and delegates to skills or tools based on the current state.

Use a workflow when the sequence is repeatable and should be deterministic. Use an orchestrator when the next step depends on intermediate findings or changing context. See [`docs/references/workflows-vs-orchestrators.md`](docs/references/workflows-vs-orchestrators.md) for the distinction.

## Maintaining skills

This is a living library. When a skill is used in practice:

- update the source folder in this repository rather than only an installed copy;
- preserve or update linked dependencies and platform-specific notes;
- keep bundle indexes and READMEs aligned with the folders that actually exist;
- review changes before copying them into an agent workspace.

The library is designed to be adapted across agent platforms, but individual skills may still contain platform-specific assumptions. Check each skill's own `SKILL.md` and supporting files before use.

Two ways skills are added to this library:

1. Find open-source from skills.sh/ (see `wishlist.md`) or via `/find-skills` command during chats. Download and customise them to fit your personal needs.
2. Created from scratch using `write-a-skill.md`. Audit with `references/writing-great-skills`.

## Upcoming Features

- 'experts' subfolders that package speciality skillsets together eg. frontenddev/, uxdesigner/, marketresearcher/
- 'personas' subfolder to hold persona skill files like ways communication styles, user preferences, work approaches etc. to toggle on/off in chat modes eg. caveman, seniordev, mentor, teacher

## Repository layout

| Path                    | Role                                                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `skills/allskills/`     | Flat convenience mirror of the library. It is duplicated for discovery and bulk copying, not a separate skill category.                                                 |
| `skills/experts/`       | Specialist bundles grouped by role or domain, including developer, designer, market-researcher, project-manager, resume-writer, and saas-builder.                       |
| `skills/superpowers/`   | Broad, reusable skills for planning, research, handoffs, teaching, and other day-to-day work.                                                                           |
| `skills/workflows/`     | Fixed, code-defined multi-skill sequences. The repository currently includes `research-to-issues`.                                                                      |
| `skills/orchestrators/` | Documentation for dynamic coordination patterns. Unlike workflows, orchestrators choose the next step at runtime; this directory currently contains the pattern README. |
| `docs/`                 | Supporting references, research notes, and resources.                                                                                                                   |

The individual skill folders are the source units to copy or install. `allskills/` is a convenience index and snapshot of the broader collection; use `experts/` and `superpowers/` when you want a more focused selection.
