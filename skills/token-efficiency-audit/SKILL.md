---
name: token-efficiency-audit
description: Audit a Claude setup for token waste — skills, CLAUDE.md/AGENTS.md files, plugins, MCP connectors, scheduled tasks, and session transcripts — and return a ranked list of fixes with estimated savings. Use when the user asks to audit token spend, find why something is expensive, or shrink prompts, context, or tool overhead.
---

# Token Efficiency Audit

Measure first. Never estimate savings you did not count.

## 1. Scope

Confirm or default: what to audit (a skill, a prompt, a repo's skills and instruction files, MCP connectors, or session transcripts), and run frequency for anything recurring. If the user gave a target, audit only that.

## 2. Measure

Count tokens as chars / 4. Record per component: size, how often it loads (always, on trigger, on demand), and runs per day.

Always-loaded cost matters most:
- Skill `description` fields and the names of every installed skill
- CLAUDE.md / AGENTS.md and files they import
- MCP tool definitions (about 50-70 tokens per tool, every conversation)
- Scheduled task prompts × runs per day

Daily burn = sum(component tokens × loads per day). Cost = tokens / 1M × price. Take current prices from the user or the Anthropic pricing page; do not use remembered prices.

## 3. Find waste

Classify each finding as one of: dead (never used), redundant (repeated elsewhere), stale (outdated), vanity (verbose where short works).

Check:
- **Descriptions** over about 100 words, or that restate the body.
- **Skill bodies** over about 400 lines, or inline tables and reference data that should sit in a `references/` file loaded on demand.
- **Duplicates**: the same rule in several skills or instruction files; plugins that overlap each other or a built-in command; skills with near-identical triggers.
- **MCP connectors** unused in the audit window. Servers from `.mcp.json` can be filtered or removed. Built-in `mcp__claude_ai_*` connectors cannot be filtered; report them as informational unless fully unused.
- **Scheduled tasks**: more runs than needed, never run, overlapping purpose, several tasks firing in the same hour (rate-limit collisions), prompt over about 2000 tokens.
- **Model fit**: Opus on extraction, classification, or formatting that Sonnet or Haiku handles.
- **Caching**: large stable prefixes that change between calls and so break prompt caching.
- **Batching**: many small calls that one call could do.

Session transcripts, if the user provides them or they are readable, flag:
- Same tool retried 3+ times with similar arguments
- Same URL fetched repeatedly
- Whole-file reads when a range was enough; whole-file Write when Edit was enough
- Tool output never used afterward
- Five or more searches before finding a file
- Subagent spawned for a task that was small enough to do inline
- Browser navigate/read loops on one domain
- Transcript over about 100 messages

A transcript sample is not the whole picture. Say how many sessions you read.

## 4. Prescribe

For each finding give: what to change, why (waste class), the concrete rewrite or removal, savings per run and per day (show the math), and risk to output quality (low, medium, high). Where a change could lower quality, say how to check it: run 3-5 before/after samples.

Rank by savings × confidence ÷ effort. Group into quick wins and larger changes.

## 5. Report

Fill in `references/report-template.md`. Keep its section order. Drop a section only if it has no content, and say so in one line. Tag each claim as measured, inferred, or assumed.

## Rules

- Read-only. Never edit, disable, or delete skills, tasks, plugins, or connectors. Recommend; the user decides.
- Never read secrets or credentials files.
- Do not report a score or percentage you cannot derive from counted numbers.
