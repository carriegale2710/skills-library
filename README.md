# Skills Library

A personal, modular library of reusable AI skills, specialist bundles, and multi-step patterns. The goal is to keep useful operating knowledge portable across different tools, models, and projects without tying it to any single platform.

## Purpose

This repository holds the skills, workflows, and working patterns that are useful enough to keep and reuse. Instead of relying on a single assistant's built-in prompt library, the idea is to maintain a small set of well-structured resources that can be copied, adapted, and reused elsewhere.

This makes the collection useful for:

- working across different AI tools and environments;
- keeping your own reusable knowledge in one place;
- borrowing only the skills relevant to the current task; and
- evolving the library as real work reveals which patterns are worth keeping.

## What is in here

This repo is organized into a few clear layers:

- standalone skills for a single capability;
- expert bundles for a role or domain;
- general-purpose superpowers for everyday work;
- workflows for repeatable multi-step sequences; and
- orchestrators for dynamic coordination when the next step depends on changing context.

## Library structure

| Path | Role |
| --- | --- |
| [skills/experts](skills/experts) | Specialist bundles grouped by role or domain, such as developer, designer, marketing, product, and SaaS work. |
| [skills/superpowers](skills/superpowers) | Broad, reusable utility skills for planning, research, handoff, iteration, and general operational work. |
| [WORKFLOWS](WORKFLOWS.md) | Fixed multi-step patterns for repeatable processes that benefit from a known sequence. |
| [skills/orchestrators](skills/orchestrators) | Guidance for dynamic coordination patterns, where the next step depends on context and intermediate results. |
| [docs](docs) | Supporting references, comparisons, and research notes. |

## How to use it

1. Pick the smallest useful unit for the task: a single skill, an expert bundle, or a workflow.
2. Copy the relevant folder or files into the target agent or workspace.
3. Adapt the prompt or invocation pattern to the platform you are using.
4. Keep the library lean: prefer a focused set over loading everything at once.

A narrow, task-specific selection is usually easier to reason about and less likely to conflict with other instructions.

## Choosing the right format

- Standalone skill: useful for one reusable capability.
- Expert bundle: grouped around a role, domain, or function.
- Superpower: general-purpose utility for day-to-day work.
- Workflow: best when the sequence is known and repeatable.
- Orchestrator: best when the process is adaptive and depends on intermediate findings.

See [docs/references/workflows-vs-orchestrators.md](workflows-vs-orchestrators.md) for a more detailed comparison between fixed workflows and dynamic orchestration.

## Design principles

This library favors practical, maintainable patterns over large, over-engineered collections. The main principles are:

- keep it portable and agent-agnostic;
- prefer simple, direct skills over heavy abstractions;
- bundle related capabilities only when they genuinely belong together;
- keep the repo readable and easy to adapt; and
- improve by real use rather than by adding complexity prematurely.

## Repository conventions

A few conventions help keep the library usable:

- keep each skill focused on a single clear purpose;
- keep skill descriptions specific enough to be useful in real prompts;
- maintain the folder structure when adding new content; and
- review supporting references and bundle indexes when restructuring or renaming files.

## What this repo is not

This is not a platform-specific plugin package, and it is not designed to be a monolithic all-in-one agent. It is a reusable library of operational patterns that can be copied into different environments and adapted as needed.

## Current folders

The active top-level structure of the repository is:

- [AGENTS.md](Projects/skills-library/AGENTS.md)
- [CLAUDE.md](Projects/skills-library/CLAUDE.md)
- [README.md](Projects/skills-library/README.md)
- [docs](docs)
- [skills](skills.md)

Within [skills](skills.md), the main groupings are:

- [skills/experts](skills/experts)
- [skills/orchestrators](skills/orchestrators)
- [skills/superpowers](skills/superpowers)
- [WORKFLOWS](WORKFLOWS.md)

This layout is intentionally simple: the library is meant to stay discoverable, modular, and easy to maintain.
