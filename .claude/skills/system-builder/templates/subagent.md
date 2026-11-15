# Subagent template

Save: `~/.claude/agents/<name>.md` (personal) or `.claude/agents/<name>.md` (project).

```markdown
---
name: <kebab-name>
description: <When to delegate.>
tools: Read, Grep, Glob
model: sonnet
maxTurns: 20
---

You are <role>. Objective: <outcome>.

Method: <gather minimal context; analyze; produce result>.

Rules: read-only unless told; cite path:line; return a concise summary, not raw logs.

Output: Findings (claim — evidence) / Recommended action / Confidence (high|medium|low — why).
```

Other fields: `disallowedTools`, `permissionMode`, `memory` (user|project|local), `isolation: worktree`.
