# Skills Library

A personal, modular library of reusable AI skills, specialist bundles, and multi-step patterns. The goal is to keep useful operating knowledge portable across different tools, models, and projects without tying it to any single platform.

## Purpose

This repository holds the skills, workflows, and working patterns that are useful enough to keep and reuse. Instead of relying on a single assistant's built-in prompt library, the idea is to maintain a small set of well-structured resources that can be copied, adapted, and reused elsewhere.

This makes the collection useful for:

- working across different AI tools and environments;
- keeping your own reusable knowledge in one place;
- borrowing only the skills relevant to the current task; and
- evolving the library as real work reveals which patterns are worth keeping.

## Repository structure

| Path                            | Role                                                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [plugins/](plugins)             | Skills grouped by role or domain, one subfolder per bundle. Source of truth.                          |
| [skills/](skills)               | Flat copy of every unique skill, as an easy-to-reach index. See [skills/README.md](skills/README.md). |
| [orchestrators/](orchestrators) | Dynamic coordination files that route a task across skills.                                           |
| [docs/](docs)                   | References, research notes, and the skills wishlist.                                                  |
| [.gaia/](.gaia)                 | Plans and templates. See [.gaia/README.md](.gaia/README.md).                                          |
| [AGENTS.md](AGENTS.md)          | Core rules for agents working in this repo.                                                           |
| [ISSUES.md](ISSUES.md)          | Known issues.                                                                                         |

Browse [plugins/](plugins) for the current bundles.

## How to use it

1. Pick the smallest useful unit for the task: a single skill, a plugin bundle, or a workflow.
2. Copy the relevant folder or files into the target agent or workspace, plus any files a skill references.
3. Adapt the prompt or invocation pattern to the platform you are using.
4. Keep the library lean: prefer a focused set over loading everything at once.

## Choosing the right format

- Standalone skill: one reusable capability.
- Plugin bundle: grouped around a role, domain, or function.
- Workflow: known, repeatable sequence. See [docs/references/WORKFLOWS.md](docs/references/WORKFLOWS.md).
- Orchestrator: adaptive process that depends on intermediate findings. See [docs/references/ORCHESTRATORS.md](docs/references/ORCHESTRATORS.md).

Comparison: [docs/references/workflows-vs-orchestrators.md](docs/references/workflows-vs-orchestrators.md).

## Design principles

- keep it portable and agent-agnostic;
- prefer simple, direct skills over heavy abstractions;
- bundle related capabilities only when they genuinely belong together;
- keep the repo readable and easy to adapt; and
- improve by real use rather than by adding complexity prematurely.

## Repository conventions

- keep each skill focused on a single clear purpose;
- keep skill descriptions specific enough to be useful in real prompts;
- maintain the folder structure when adding new content; and
- review supporting references and bundle indexes when restructuring or renaming files.

## What this repo is not

Not a platform-specific plugin package, and not a monolithic all-in-one agent. It is a reusable library of operational patterns to copy into different environments and adapt.
