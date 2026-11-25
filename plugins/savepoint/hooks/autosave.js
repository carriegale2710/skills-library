#!/usr/bin/env node
// Autosave for savepoint. Off by default; state is one file per session.
//   node autosave.js [on|off|toggle|--N]  -> /autosave command (uses $CLAUDE_CODE_SESSION_ID)
//   node autosave.js hook                 -> UserPromptSubmit hook (session_id from stdin)
// State file holds "<turns> <every>".
const fs = require('fs');
const os = require('os');
const path = require('path');

const DEFAULT_EVERY = 10; // user turns between autosaves
const dir = path.join(os.tmpdir(), 'claude-autosave');
const stateFile = (id) => path.join(dir, String(id).replace(/[^\w-]/g, '_'));

const mode = process.argv[2] || 'toggle';

if (mode === 'hook') {
  let input = '';
  process.stdin.on('data', (c) => (input += c));
  process.stdin.on('end', () => {
    try {
      const file = stateFile(JSON.parse(input).session_id);
      if (!fs.existsSync(file)) return; // autosave off
      const [t, e] = fs.readFileSync(file, 'utf8').trim().split(/\s+/);
      const turns = (parseInt(t, 10) || 0) + 1;
      const every = parseInt(e, 10) || DEFAULT_EVERY;
      fs.writeFileSync(file, `${turns} ${every}`);
      if (turns % every !== 0) return;
      process.stdout.write(JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'UserPromptSubmit',
          additionalContext:
            `Autosave due (${turns} turns since autosave was enabled). After handling this request, ` +
            'run the savepoint Save action with label "autosave" and mention it in one line. ' +
            'Skip if nothing meaningful changed since the last save.',
        },
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
  const every = n ? parseInt(n[1], 10) : DEFAULT_EVERY;
  if (n && every < 1) {
    console.log('Autosave interval must be 1 or more turns.');
    process.exit(0);
  }
  const on = n || mode === 'on' || (mode === 'toggle' && !fs.existsSync(file));
  if (on) {
    fs.mkdirSync(dir, { recursive: true });
    if (n || !fs.existsSync(file)) fs.writeFileSync(file, `0 ${every}`);
    const cur = parseInt(fs.readFileSync(file, 'utf8').trim().split(/\s+/)[1], 10) || DEFAULT_EVERY;
    console.log(`Autosave ON: saving every ${cur} turns this session.`);
  } else {
    fs.rmSync(file, { force: true });
    console.log('Autosave OFF.');
  }
}
