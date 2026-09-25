---
name: research
description: Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated.
---

# Research

Investigate the question and write findings to a Markdown file in the repo.

## Process

### 1. Clarify scope

If the question is ambiguous, ask one clarifying question before starting. Otherwise proceed directly.

### 2. Investigate against primary sources

Use `search_web` to find candidate sources, then `fetch_url` to read the primary sources directly — official docs, source code, specs, first-party APIs. Do **not** rely on secondary summaries; follow every claim back to the source that owns it.

For repository-specific questions (e.g. "how does module X work?"), use GitHub MCP `get_file_contents` and `list_commits` to read the actual code and history.

### 3. Write findings to the repo

Write a single Markdown file citing each claim's source URL.

- Match the repo's existing notes convention (e.g. `docs/research/`, `docs/notes/`, `notes/`).
- If no convention exists, write to `docs/research/YYYY-MM-DD-<topic>.md` and say where you saved it.
- Use GitHub MCP `create_or_update_file` to commit the file.

### 4. Report

After writing, give the user a short summary: key findings, file path, and any open questions worth following up.
