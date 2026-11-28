#!/usr/bin/env bash
# UserPromptSubmit: inject CLAUDE.md stuck protocol when prompt signals overwhelm.
p=$(jq -r '.prompt // empty' 2>/dev/null)
if printf '%s' "$p" | grep -qiE "stuck|overwhelm|overplann|can'?t start|cannot start"; then
cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"STUCK PROTOCOL (global CLAUDE.md): name the state if inferred (e.g. 'Looks like overplanning, so simplifying'). Simplify task, add no detail. Name one thing to defer, simplify or delete. Give one 5-minute ugly-first-version action."}}
JSON
fi
exit 0
