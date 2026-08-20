---
name: find-skills
description: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. Use when the user is looking for functionality that might exist as an installable skill.
---

# Find Skills

This skill helps you discover and install skills from the open agent skills ecosystem.

## When to Use This Skill

Use this skill when the user:

- Asks "how do I do X" where X might be a common task with an existing skill
- Says "find a skill for X" or "is there a skill for X"
- Asks "can you do X" where X is a specialized capability
- Expresses interest in extending agent capabilities
- Wants to search for tools, templates, or workflows
- Mentions they wish they had help with a specific domain (design, testing, deployment, etc.)

## How to Help Users Find Skills

### Step 1: Understand What They Need

Identify:
1. The domain (e.g., React, testing, design, deployment)
2. The specific task (e.g., writing tests, creating animations, reviewing PRs)
3. Whether this is common enough that a skill likely exists

### Step 2: Browse skills.sh

Fetch the skills leaderboard first to check for a well-known match:

```
fetch_url: https://skills.sh/
```

The leaderboard surfaces the most popular and battle-tested skills. Check if any top skill covers the user's domain.

### Step 3: Search GitHub for skills

If the leaderboard doesn't cover the need, use `search_repositories` MCP to find skill repos:

- Query: `agent-skills <domain>` or `claude-skills <domain>` or `skill <task-keyword>`
- Filter by `topic:agent-skills` if relevant
- Check popular sources: `vercel-labs`, `anthropics`, `ComposioHQ`

For each candidate found, fetch its `SKILL.md` or `README.md` to verify it's a real skill file.

### Step 4: Verify Quality Before Recommending

Do not recommend a skill based solely on search results. Always verify:

1. **GitHub stars** — prefer repos with meaningful stars; be cautious under 100
2. **Source reputation** — official sources (`vercel-labs`, `anthropics`, `microsoft`) over unknown authors
3. **Skill file exists** — confirm a `SKILL.md` or `.md` skill file is present and readable

### Step 5: Present Options to the User

When you find relevant skills, present them with:

1. The skill name and what it does
2. The source repo and star count
3. How to install it (see Step 6)
4. A link to learn more

Example response:

```
I found a skill that might help: "react-best-practices" from vercel-labs/agent-skills.
It provides React and Next.js performance optimization guidelines.

To install it, say:
"install the skill from gh vercel-labs/agent-skills"
```

### Step 6: Install a Skill

GAIA has no shell — there is no `npx skills` command available. To install a skill, use the **GAIA skill installer**:

> The user says: "install the skill from gh `<owner>/<repo>`"

GAIA will:
1. Fetch the skill file from GitHub MCP
2. Write it to `output/<name>.md`
3. Tell the user to download and upload it to the Space

## When No Skills Are Found

If no relevant skills exist:

1. Acknowledge that no existing skill was found
2. Offer to help with the task directly using general capabilities
3. Suggest the user could write a custom skill using `/write-a-skill`

Example:

```
I searched for skills related to "xyz" but didn't find any matches.
I can still help you with this task directly. Would you like me to proceed?

If this is something you do often, I can help you write a custom skill with /write-a-skill.
```

## Common Skill Categories

| Category        | Example Queries                          |
| --------------- | ---------------------------------------- |
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing         | testing, jest, playwright, e2e           |
| DevOps          | deploy, docker, kubernetes, ci-cd        |
| Documentation   | docs, readme, changelog, api-docs        |
| Code Quality    | review, lint, refactor, best-practices   |
| Design          | ui, ux, design-system, accessibility     |
| Productivity    | workflow, automation, git                |
