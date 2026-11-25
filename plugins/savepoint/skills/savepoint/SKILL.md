---
name: savepoint
description: This skill should be used when the user asks to "save", "save progress", "save game", "load save", "where was I", "continue", "resume", or "list saves", "autosave". Saves a timestamped project snapshot to .claude/saves/, loads one to resume work, or lists all saves. Also parks unrelated work as a Trello inbox card ("park this", "switch task"). Commands - /create, /save, /load, /saves, /park, /autosave. Not for handing work to another agent (use handoff).
user-invocable: true
---

# Savepoint Skill

## Goal

Save game, for work. **Save** snapshots where things stand. **Load** reads a snapshot and resumes. **List** shows all slots. A save with no load is just a log, so all three exist.

## Commands

| Command | Does |
|---|---|
| `/create [label]` | Create a new savepoint in a location you pick (repo, Trello, open file, Claude doc), verify it, and make that location the default. |
| `/save [label]` | Write a save to the location from `/create` and verify it. Default: new file `.claude/saves/<YYYY-MM-DD_HHMM>_<label>.md`, label `quicksave`. Never overwrites (except `autosave`, see Save step 2). |
| `/load [label or timestamp]` | Read a save, summarise, resume. No arg: newest save. Label: newest save with that label. Timestamp: exact match or prefix. |
| `/saves` | List saves, newest first. |
| `/park [label]` | Save, then create a Trello inbox card pointing to it. For switching away to unrelated work. |
| `/autosave [on\|off\|--N]` | Toggle autosave for this session (default off). When on, a hook asks for a Save labelled `autosave` every 10 turns. `--5` turns it on at every 5 turns. |

If invoked as `/savepoint <create\|save\|load\|list\|park\|autosave> [arg]`, route the same way.

## Create

Creates a new savepoint in a location the user picks, and makes that location the default for later saves in this project. Run again to start a savepoint somewhere else.

1. **Ask where to create it** (AskUserQuestion, one question). Leave out any option whose tool is not available.
   - **Project repo (Recommended):** `.claude/saves/` in the project root. Only this location shows up in Load and List.
   - **Trello card:** in the inbox (`trelloWriteInbox`) or on a project board list (`trelloWriteCard`; ask which board and list).
   - **File open in this session:** append each save as a new section at the end of that file. Never overwrite what is already there.
   - **Claude doc:** create a doc with the Claude Docs connector; later saves add a new section to the same doc.
2. Write the choice to `.claude/savepoint.local.md` in the project root, one line: `location: repo`, `location: trello-inbox`, `location: trello <board> / <list>`, `location: file <absolute path>` or `location: doc <url>`. Replace the line if it exists. For a doc, the URL comes from step 3, so write the line after that. In a git repo, make sure the file is gitignored.
3. **Create the savepoint:** run Save to the chosen location with the given label (default `quicksave`), including the read-back check (Save step 4).
4. Tell the user: savepoint created and verified (path or link), now the default location, and the Next line. Or what failed.

## Save

1. **Pick the location.** A location the user named in this request wins. Otherwise use the `location:` line in `.claude/savepoint.local.md`. No file: use the repo, and say once that `/create` can pick another location. Label `autosave` and Save inside Park always use the repo.
2. **Repo location:** write to `.claude/saves/<YYYY-MM-DD_HHMM>_<label>.md`, using the user's local time (get it from the system clock, do not guess). Slugify the label: lowercase, hyphens. Create the folder if missing.
   - First save in a git repo: if `.claude/saves/` is not in `.gitignore`, add it and say so.
   - Every save is a new file, so old saves stay as rewind points. Same-minute collision: append `-2`.
   - Exception: label `autosave` keeps only the latest. After writing it, delete older `*_autosave*.md` files. Never touch other labels.
   **Other locations:** title `SAVE: <label> | <YYYY-MM-DD HH:MM>`, with the template as the body. A Trello card must stay under 2048 characters; trim fields as in Park step 2.
3. Fill the template from the session. Do not invent: leave a field out if unknown. Keep it under ~25 lines; omit empty fields. Next must be one exact action, not a topic.
4. **Verify before confirming:** read the save back from where it was written (the file, the card, the doc) and check that the Next line is there. If the write or the read-back fails, say so and keep the save text in chat so nothing is lost. Do not report it as saved.
5. Tell the user: saved and verified, where (path or link), and the Next line.

```
# SAVE: <label> | <project> | <YYYY-MM-DD HH:MM> | <branch>
Session: <$CLAUDE_CODE_SESSION_ID> | claude --resume <id>
Goal:
Done: finished and verified
Next (exact action):
Inventory: commands to rerun, servers/processes to restart
Context to reload:
  Skills: skills invoked this session (plugin:skill)
  Plugins: plugins those skills or commands came from
  Files: key files/docs to re-read (paths), incl. open files; not every file touched
Decided: choice, why
Blocked:
Unfinished: work started or promised but not done
Untested: finished but not verified (what check is missing)
Open questions: unresolved decisions or unknowns, who/what answers them
Links: PRs, tickets, docs
```

## Load

1. Pick the file from `.claude/saves/` (filenames sort chronologically, so newest = last). Match as per the Commands table. No match: say so and run List.
2. State Goal, Done, and Next in 3 lines, then any Unfinished, Untested and Open questions. Flag the save as possibly stale if the repo changed after it (git log, file mtimes).
3. List the Context to reload entries. Flag any skill or plugin that is not currently available.
4. Ask whether to reload that context (read the files, invoke the skills) and start on Next. Do not act until confirmed.

## List

One row per file, newest first: timestamp, label, Goal, Next. No saves: say so and offer to save.

## Park

Use when the user switches to unrelated work and wants this one remembered. Trello MCP (`trelloWriteInbox`, action `create`) only, no Zapier.

1. **In a git repo:** run Save, then create the card.
   - name: `[<project-name>] <Next action>` when the repo has a GitHub remote (see step 3), else just `<Next action>`.
   - desc: the save file's absolute path, Goal in one line, then the session line (step 4).
2. **No repo (thinking-only session):** write no file. Name is just `<Next action>`, with no tag. Put the snapshot template in the card desc, then the session line. Keep it under 2048 characters (the card limit), trimming Links, Inventory, then Context Files first.
3. **Project tag:** only for work in an existing GitHub repo. Check `git remote get-url origin` contains `github.com`. Tag = the GitHub repo name from that URL. No GitHub remote, or no repo: no tag, leave it blank, do not invent one.
4. **Session line:** `Session: <id> | claude --resume <id>`, where `<id>` is `$CLAUDE_CODE_SESSION_ID`. Local sessions have no web URL, so the resume command is the link. If the session has a claude.ai URL in context, add it. If the variable is unset, omit the line and say so.
5. If Trello is unavailable or the call fails, keep the save file and say the card was not created. Do not retry silently or fall back to INBOX.md.
6. Tell the user: save path (if any), card name, and the Next line.

## Rules

- Checkpoint at natural breaks: feature done, before a risky change, end of session.
- Saved decisions are only those the user accepted. Mark recommendations as such.
- Link, do not copy. The save is a pointer, not the source of truth.
- Never save secrets or tokens. Saves stay out of git (see Save step 1).

## Common Mistakes

- **Vague Next**: "continue auth" is useless. "Add refresh-token test in `auth.test.ts`" is a save.
- **Journalling**: learnings and history do not belong here.
- **Saving to the temp dir**: it gets wiped, so the save is lost.
- **Loading blind**: check staleness before trusting the save.
