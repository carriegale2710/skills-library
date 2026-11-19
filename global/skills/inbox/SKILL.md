---
name: inbox
description: Read or add to ~/.claude/INBOX.md on demand. Use for /inbox, "check inbox", "add to inbox", "park this".
argument-hint: "[text to add] — empty to read"
disable-model-invocation: true
---

File: `~/.claude/INBOX.md`. Sections: `## Later`, `## Remember`, `## Context`.

- **No args:** read the file, show items grouped by section. Nothing else.
- **Args:** append one line `- YYYY-MM-DD: <text>` (today's date) under the fitting section; default `## Later`. Confirm in one line.
- **"done <item>":** remove that line, confirm.

Keep file under ~30 lines, core points only. Create file with the three headers if missing.
