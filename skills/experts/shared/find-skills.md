---
name: find-skills
description: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. Use when the user is looking for functionality that might exist as an installable skill.
---

# Find Skills

Help the user discover skills from the open-agent skills ecosystem and install them into this Space.

If the current runtime has no shell access, do **not** run CLI installers. Use the tools below instead.

## Discovery

### Step 1 — Understand what they need

Identify:
1. The domain (e.g. React, testing, design, deployment)
2. The specific task (e.g. writing tests, reviewing PRs, creating changelogs)

### Step 2 — Search GitHub for skills

Use `search_repositories` MCP tool with queries like:

- `agent-skills react nextjs` — web dev skills
- `agent-skills testing jest playwright` — test skills
- `claude skills pr-review` — PR review skills
- `agent-skills <domain>` — general domain search

Scope to well-known owners first: `vercel-labs`, `anthropics`, `ComposioHQ`.

### Step 3 — Verify quality before recommending

For each candidate:
1. Check GitHub stars — prefer repos with 100+ stars
2. Check source reputation — official sources are more trustworthy
3. Use `fetch_url` to read the skill's README or SKILL.md and confirm it covers the user's need

### Step 4 — Present options

Present each match with:
- Skill name and what it does
- Source repo and star count
- How to install it (see below)

### Step 5 — Install via the available skill installer

To install a skill from GitHub, tell the user:

> "I can install this skill for you. Say: **install the skill from gh `<owner>/<repo>`** and I'll package it for upload."

The built-in skill installer will:
1. Fetch the skill file from the repo
2. Write it to `output/<name>.md`
3. Ask the user to upload it to this Space

## When no skills are found

If no relevant skills exist:
1. Say so clearly
2. Offer to help with the task directly using built-in capabilities
3. Offer to write a new skill with `/write-a-skill`

## Common skill categories

| Category | Search terms |
|---|---|
| Web Development | react, nextjs, typescript, tailwind |
| Testing | testing, jest, playwright, e2e |
| DevOps | deploy, docker, kubernetes, ci-cd |
| Documentation | docs, readme, changelog, api-docs |
| Code Quality | review, lint, refactor, best-practices |
| Design | ui, ux, design-system, accessibility |
