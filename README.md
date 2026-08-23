# Peritia

_(Latin: skill or expertise gained through practice and experience)_

This is an **agent-agnostic skill library** to plug, play and customise into your own custom workflow on top of existing AI agent platforms.

Two ways skills are added to this library:

1. Find open-source from skills.sh/ (see `wishlist.md`) or via `/find-skills` command during chats. Download and customise them to fit your personal needs.
2. Created from scratch using `skills/write-a-skill/SKILL.md`. Audit with `references/writing-great-skills`.

This library is meant to build up slowly over time. Every skill here gets refined, corrected, or replaced the more it's actually used across different agent platforms. The repo grows the way real expertise does — iteratively, through practice.

## Personal Benefits

- **Free access, unevenly split** — Pro tiers in Perplexity and Github Copilot via Education student discounts, but not Claude Code. Being agent-agnostic means I'm not stuck picking one platform.
- **Ready for local models later** — once I can afford a better PC setup, I can plug in local open source models the same way lol

## Key Features

- **Living library** — skills are updated, corrected, and expanded as they're actually used in practice, not written once and left static.
- **Agent-agnostic** — the same skillset works across Claude Code, Github Copilot, Perplexity/GAIA, and future local models.
- **Modular & composable** — each skill is a self-contained folder you can copy in isolation, with any dependent reference files clearly linked.
- **Consistent outputs** — the same standards and behaviour no matter which agent is executing the skill.

## Setup

Skills in this repo are being updated, and new skills added regularly. Check for updates for any old installations.

1. **Copy in** the skill files you want, into your /skills folder in your AI agent's workspace memory.

> NOTE: Do NOT load up all skills in the same workspace (or make sure the are user-invoked only) as this will dumbify your AI model FAST.

2. **Copy dependencies too** — any files referenced inside those skills.

Some skills depend on other files , for example:

- `write-a-skill` uses `writing-great-skills` as its reference file.
- `orchestrators/bug-fix/SKILL.md` (orchestrator skill) calls on `/diagnosing-bugs` > `/tdd` > `/pr-review`.

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
