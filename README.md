<<<<<<< HEAD
# Skills Library

A personal, modular library of reusable AI skills, specialist bundles, and multi-step patterns. The goal is to keep useful operating knowledge portable across different tools, models, and projects without tying it to any single platform.

## Purpose
=======
# Peritia

_(Latin: skill or expertise gained through practice and experience)_

This is an **agent-agnostic skill library** to plug, play and customise into your own custom workflow on top of existing AI agent platforms.

Two ways skills are added to this library:

1. Find open-source from skills.sh/ (see `wishlist.md`) or via `/find-skills` command during chats. Download and customise them to fit your personal needs.
2. Created from scratch using `write-a-skill.md`. Audit with `references/writing-great-skills`.

This library is meant to build up slowly over time. Every skill here gets refined, corrected, or replaced the more it's actually used across different agent platforms. The repo grows the way real expertise does — iteratively, through practice.
>>>>>>> origin/main

This repository holds the skills, workflows, and working patterns that are useful enough to keep and reuse. Instead of relying on a single assistant's built-in prompt library, the idea is to maintain a small set of well-structured resources that can be copied, adapted, and reused elsewhere.

<<<<<<< HEAD
This makes the collection useful for:
=======
- **Free access, unevenly split** — Pro tiers in Perplexity and Github Copilot via Education student discounts, but not Claude Code. Being agent-agnostic means I'm not stuck picking one platform.
- **Ready for local models later** — once I can afford a better PC setup, I can plug in local open source models the same way lol

## Key Features

- **Living library** — skills are updated, corrected, and expanded as they're actually used in practice, not written once and left static.
- **Agent-agnostic** — the same skillset works across Claude Code, Github Copilot, Perplexity/GAIA, and future local models.
- **Modular & composable** — each skill is a self-contained folder you can copy in isolation, with any dependent reference files clearly linked.
- **Consistent outputs** — the same standards and behaviour no matter which agent is executing the skill.
>>>>>>> origin/main

- working across different AI tools and environments;
- keeping your own reusable knowledge in one place;
- borrowing only the skills relevant to the current task; and
- evolving the library as real work reveals which patterns are worth keeping.

<<<<<<< HEAD
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
| [skills/workflows](skills/workflows) | Fixed multi-step patterns for repeatable processes that benefit from a known sequence. |
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

See [docs/references/workflows-vs-orchestrators.md](docs/references/workflows-vs-orchestrators.md) for a more detailed comparison between fixed workflows and dynamic orchestration.

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

- [AGENTS.md](AGENTS.md)
- [CLAUDE.md](CLAUDE.md)
- [README.md](README.md)
- [docs](docs)
- [skills](skills)

Within [skills](skills), the main groupings are:

- [skills/experts](skills/experts)
- [skills/orchestrators](skills/orchestrators)
- [skills/superpowers](skills/superpowers)
- [skills/workflows](skills/workflows)

This layout is intentionally simple: the library is meant to stay discoverable, modular, and easy to maintain.
=======
Skills in this repo are being updated, and new skills added regularly. Check for updates for any old installations.

1. **Copy in** the skill files you want, into your /skills folder in your AI agent's workspace memory.

> NOTE: Do NOT load up all skills in the same workspace (or make sure the are user-invoked only) as this will dumbify your AI model FAST.

2. **Copy dependencies too** — any files referenced inside those skills.

Some skills depend on other files , for example:

- `write-a-skill` uses `writing-great-skills` as its reference file.
- `bug-fix.md` (orchestrator skill) calls on `/diagnosing-bugs` > `/tdd` > `/pr-review`.

3. **Invoke with `/<skill>`** in your session chat.

Example prompt:

```bash
/write-a-skill that conducts an accessibility audit for my website.
```

## Skill Iteration

### Types of skills

| Type                  | What it does                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------ |
| **Standalone skill**  | Self-contained, does one job on its own (e.g. a report generator, a formatting task)       |
| **Reference file**    | Supporting doc, template, or data a skill depends on — not a skill by itself               |
| **Orchestrator file** | Routes a task across two or more skills, calling them in sequence or choosing between them |

### Combining skills

- **Check dependencies first** — look for a "Dependencies" or "References" note in the skill's docs; copy in anything it calls, or it'll break.
- **Chain with orchestrators** — for multi-step workflows, use an orchestrator file instead of running skills manually one by one.
- **Compose, don't duplicate** — if two skills overlap, have one call the other rather than copying logic into both.

### Improving a skill

1. **Use it** — run the skill on whatever platform you're on and note where it breaks or underperforms.
2. **Edit the source** — fix it in this repo, not just your local copy, so the fix carries into future installs.
3. **Flag platform quirks** — if a fix is platform-specific, note it inside the skill file rather than forking a new version.
4. **Commit with context** — a clear commit message turns the version history into a log of what you've learned.

## Upcoming Features

- 'experts' subfolders that package speciality skillsets together eg. frontenddev/, uxdesigner/, marketresearcher/
- 'personas' subfolder to hold persona skill files like ways communication styles, user preferences, work approaches etc. to toggle on/off in chat modes eg. caveman, seniordev, mentor, teacher
>>>>>>> origin/main
