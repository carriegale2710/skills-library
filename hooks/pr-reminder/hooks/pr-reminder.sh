#!/usr/bin/env bash
# PostToolUse Bash: after gh pr create / git push, re-inject CLAUDE.md PR + CodeRabbit rules.
# Match only as a command (line start or after && ; |), not as text inside strings.
c=$(jq -r '.tool_input.command // empty' 2>/dev/null)
# Collapse quoted strings to Q so ; | && inside quotes don't count and git -C "a b" stays one arg.
c=$(printf '%s' "$c" | sed -E "s/'[^']*'/Q/g; s/\"[^\"]*\"/Q/g")
pre='(^|&&|;|\|)[[:space:]]*'
msg=""
if printf '%s' "$c" | grep -qE "${pre}gh pr create"; then
  msg="PR RULE (global CLAUDE.md): PR just opened. Bind it (mcp__ccd_pr__bind_pr if get_status doesn't show it), then mcp__ccd_pr__set_monitor with auto_fix: true and the PR URL. Don't enable auto-merge. Then apply the CodeRabbit rule."
elif printf '%s' "$c" | grep -qE "${pre}git( -[Cc] [^ ]+| --[a-z-]+)* push([[:space:]]|$)"; then
  msg="CODERABBIT RULE (global CLAUDE.md): if this branch has a PR CodeRabbit reviews, subscribe to the PR, then push-notify when the CodeRabbit check finishes with the finding count. Don't poll. If CodeRabbit skips: small PR -> background Haiku subagent runs /code-review --comment (posts inline PR comments), report count; clearly large PR -> ask first."
fi
[ -n "$msg" ] && jq -n --arg m "$msg" '{hookSpecificOutput:{hookEventName:"PostToolUse",additionalContext:$m}}'
exit 0
