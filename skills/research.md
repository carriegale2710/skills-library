---
name: research
description: Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. Use when the user wants a topic researched, docs or API facts gathered, or reading legwork done.
---

# Research

Investigate the question against **primary sources** and write the findings to the repo.

## Process

### 1. Identify primary sources

Primary sources are:
- Official documentation sites
- Source code (on GitHub)
- Specs, RFCs, or standards documents
- First-party API references

Do not rely on secondary write-ups (blog posts, Stack Overflow summaries) unless no primary source exists. When using a secondary source, note it explicitly.

### 2. Research

For each claim or question:

1. Use `search_web` to locate the relevant primary source
2. Use `fetch_url` to read the actual page or document
3. Follow links to the source that **owns** the claim — don't stop at an aggregator
4. Note any version, date, or context dependency on the claim

Repeat until the question is answered or the source trail runs cold.

### 3. Write findings to the repo

1. Check where the repo already keeps research notes (look for `docs/`, `notes/`, `research/` using `get_file_contents` on the root)
2. Match that convention; if there is none, use `docs/research/<topic>.md`
3. Write a single Markdown file with:
   - A clear title and date
   - Each finding as a bullet or section
   - Every claim linked to its primary source inline
   - A "Sources" section at the bottom listing all URLs used
4. Use GitHub MCP `create_or_update_file` to save the file
5. Tell the user the path where it was saved
