---
description: Toggle autosave (savepoint after every ~150 KB of new session context, or every N KB with --N) for this session
argument-hint: [on|off|--N]
allowed-tools: Bash(node:*)
---

!`node "${CLAUDE_PLUGIN_ROOT}/hooks/autosave.js" $ARGUMENTS`

Report the line above to the user in one line. Do nothing else.
