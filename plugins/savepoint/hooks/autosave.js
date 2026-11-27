#!/usr/bin/env node
// Autosave for savepoint. Off by default; state is one file per session.
//   node autosave.js [on|off|toggle|--N]  -> /autosave command (uses $CLAUDE_CODE_SESSION_ID)
//   node autosave.js hook                 -> UserPromptSubmit hook (session_id, transcript_path from stdin)
// Triggers on context growth, not turn count: nudges once the session transcript has grown
// N KB since the last autosave. State file holds "<baselineBytes> <everyKB>"; baseline -1 = unset.
const fs = require('fs');
const os = require('os');
const path = require('path');

const DEFAULT_KB = 150; // transcript growth between autosaves (~ a solid chunk of work)
const dir = path.join(os.tmpdir(), 'claude-autosave');
const stateFile = (id) => path.join(dir, String(id).replace(/[^\w-]/g, '_'));

// Inline Save instructions so an autosave never loads the full savepoint skill.
const NUDGE = (kb) =>
  `Autosave due (~${kb} KB of new session context since the last autosave). After handling this request, ` +
  'write an autosave WITHOUT loading the savepoint skill. Skip it, saying so in one line, if nothing meaningful changed. Steps: ' +
  '(1) Write `.claude/saves/<YYYY-MM-DD_HHMM>_autosave.md` in the repo (local time from the system clock; create the folder; ' +
  'in a git repo add `.claude/saves/` to .gitignore if missing). ' +
  '(2) Delete older `*_autosave*.md` files there; never touch other labels. ' +
  '(3) Fill only known fields, under ~25 lines, Next = one exact action:\n' +
  '# SAVE: autosave | <project> | <YYYY-MM-DD HH:MM> | <branch>\n' +
  'Session: <$CLAUDE_CODE_SESSION_ID> | claude --resume <id>\n' +
  'Goal:\nDone:\nNext (exact action):\nInventory:\nContext to reload: Skills / Plugins / Files\n' +
  'Decided:\nBlocked:\nUnfinished:\nUntested:\nOpen questions:\nLinks:\n' +
  '(4) Read the file back and check the Next line is there; if not, say so and paste the save in chat. ' +
  '(5) Tell the user in one line: autosaved, path, Next.';

const mode = process.argv[2] || 'toggle';

if (mode === 'hook') {
  let input = '';
  process.stdin.on('data', (c) => (input += c));
  process.stdin.on('end', () => {
    try {
      const { session_id, transcript_path } = JSON.parse(input);
      const file = stateFile(session_id);
      if (!fs.existsSync(file)) return; // autosave off
      const [b, k] = fs.readFileSync(file, 'utf8').trim().split(/\s+/);
      const kb = parseInt(k, 10) || DEFAULT_KB;
      const size = fs.statSync(transcript_path).size;
      const base = parseInt(b, 10);
      if (!(base >= 0) || size < base) { // first run after enabling, or transcript replaced
        fs.writeFileSync(file, `${size} ${kb}`);
        return;
      }
      if (size - base < kb * 1024) return;
      fs.writeFileSync(file, `${size} ${kb}`);
      process.stdout.write(JSON.stringify({
        hookSpecificOutput: { hookEventName: 'UserPromptSubmit', additionalContext: NUDGE(kb) },
      }));
    } catch {
      // Never block the user's prompt over autosave.
    }
  });
} else {
  const id = process.env.CLAUDE_CODE_SESSION_ID;
  if (!id) {
    console.log('Autosave unavailable: CLAUDE_CODE_SESSION_ID not set.');
    process.exit(0);
  }
  const file = stateFile(id);
  const n = /^--?(\d+)$/.exec(mode);
  const kb = n ? parseInt(n[1], 10) : DEFAULT_KB;
  if (n && kb < 1) {
    console.log('Autosave interval must be 1 KB or more.');
    process.exit(0);
  }
  const on = n || mode === 'on' || (mode === 'toggle' && !fs.existsSync(file));
  if (on) {
    fs.mkdirSync(dir, { recursive: true });
    if (n || !fs.existsSync(file)) fs.writeFileSync(file, `-1 ${kb}`);
    const cur = parseInt(fs.readFileSync(file, 'utf8').trim().split(/\s+/)[1], 10) || DEFAULT_KB;
    console.log(`Autosave ON: saving after every ~${cur} KB of new session context.`);
  } else {
    fs.rmSync(file, { force: true });
    console.log('Autosave OFF.');
  }
}
