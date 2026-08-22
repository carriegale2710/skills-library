# Peritia

This is an agent-agnostic repo to save skills for installing onto AI agent workspaces. It provides customisable skills, references and orchestrator files to plug-and-play into your own custom workflow on top of existing AI agent platforms.

## Why "Peritia"

*(Latin: skill or expertise gained through practice and experience)*

It's capabilities are built up slowly over time. Every skill here gets refined, corrected, or replaced the more it's actually used across different agent platforms. The repo grows the way real expertise does — iteratively, through practice.

## Personal Benefits

- **Free access, unevenly split** — Pro tiers in Perplexity and Github Copilot via Education student discounts, but not Claude Code. Being agent-agnostic means I'm not stuck picking one platform.
- **Ready for local models later** — once I can afford a better PC setup, I can plug in local open source models the same way lol

## Key Features

- **Living library** — skills are updated, corrected, and expanded as they're actually used in practice, not written once and left static.
- **Agent-agnostic** — the same skillset works across Claude Code, Github Copilot, Perplexity/GAIA, and future local models.
- **Modular & composable** — each skill is a self-contained folder you can copy in isolation, with any dependent reference files clearly linked.
- **Consistent outputs** — the same standards and behaviour no matter which agent is executing the skill.

## Setup

1. **Copy in** the skill files you want, into your workspace.
2. **Copy dependencies too** — any files referenced inside those skills.

> Skills in this repo are being updated, and new skills added regularly. Check for updates for any old installations.

## Usage

### Types of skills

| Type | What it does |
|---|---|
| **Standalone skill** | Self-contained, does one job on its own (e.g. a report generator, a formatting task) |
| **Reference file** | Supporting doc, template, or data a skill depends on — not a skill by itself |
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
