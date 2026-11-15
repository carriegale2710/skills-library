# Hook template

Only for behavior that must happen at a lifecycle event. Hooks enforce; skills instruct. Hooks run shell commands on every matching event: do not write hook or settings files until the user confirms the design.

Events: SessionStart, UserPromptSubmit, PreToolUse (can block), PostToolUse, Stop, SubagentStart, SubagentStop.

Location: `~/.claude/settings.json` (all projects), `.claude/settings.json` (project), `.claude/settings.local.json` (local), `<plugin>/hooks/hooks.json` (plugin).

Block command (`.claude/hooks/block-rm.sh`, `chmod +x`):

```bash
#!/bin/bash
CMD=$(jq -r '.tool_input.command')
if echo "$CMD" | grep -q 'rm -rf'; then
  jq -n '{hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"deny",permissionDecisionReason:"Blocked by hook"}}'
fi
```

Settings entry:

```json
{ "hooks": { "PreToolUse": [ { "matcher": "Bash", "hooks": [
  { "type": "command", "if": "Bash(rm *)", "command": "${CLAUDE_PROJECT_DIR}/.claude/hooks/block-rm.sh" } ] } ] } }
```

Post-edit lint: event `PostToolUse`, matcher `Edit|Write`, command `npm run lint:fix`.

Rules: keep fast; combine with permissions for security; task instructions belong in a skill.
