# Plugin template

Only after standalone parts work. Bundles skills, agents, hooks, MCP.

```text
<plugin>/
  .claude-plugin/plugin.json
  skills/<skill>/SKILL.md
  agents/<agent>.md
  hooks/hooks.json
  .mcp.json
```

plugin.json:

```json
{ "name": "<plugin>", "description": "<what>", "version": "0.1.0", "author": { "name": "<you>" } }
```

Components use the skill, subagent, and hook templates. Hook scripts: `${CLAUDE_PLUGIN_ROOT}/scripts/...`.

Validate: `claude plugin validate ./<plugin>`. Test: `claude --plugin-dir ./<plugin>`.
