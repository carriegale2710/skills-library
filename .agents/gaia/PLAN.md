# Implementation Plan for improving Skills for README doc writing

> **For agentic workers:** Use `/feature-ship` or `/pipeline` to execute tasks sequentially. Each task produces a testable deliverable before moving to the next.

**Goal:** Download, audit, and evaluate four agent skills for README writing; produce personalised descriptions for use in the GAIA Code workflow Space.

**Architecture:** Serial skill pipeline — acquire → audit → demonstrate → personalise. Each phase builds on the last. No code changes to repos; all output is documentation and Space files.

**Tech Stack:** GitHub MCP (file fetching), GAIA skill engine (`/writing-for-agents`, `/readme`, `/readme-craft`), `output/` for downloadable artifacts.

**Spec:** User backlog as stated in chat — 21 Aug 2026.

## Global Constraints

- All skill files saved to `output/<name>.md` for user upload to this Space.
- Commit attribution: `Co-Authored-By: GAIA Code <noreply@gaiacode.pro>` on every commit.
- Permissions mode: Accept Edits (read from `MEMORY.md`).
- Do not modify `carriegale2710/gaia-setup` unless explicitly asked.
- Personalised descriptions must reference GAIA Code, Perplexity Space, and this user's solo dev/micro-SaaS context.

> Refer to list of tickets in `TASKS.md`
