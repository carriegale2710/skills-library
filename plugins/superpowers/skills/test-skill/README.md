# test-skill

Standalone skill bundle. No plugin manifest or custom agent definitions required.

Install the test-skill folder under your project's .claude/skills/ or your user
~/.claude/skills/ directory. Invoke /test-skill with the target skill location.

The workflow uses fresh general-purpose subagents with supplied prompts. It
requires a host with subagent spawning for blind trials. Execution testing also
requires suitable tool permissions and a disposable fixture environment.
Read-only runs must be labelled as such; prompts do not enforce filesystem isolation.

Contents: SKILL.md, references/case-schema.md, references/tester-prompt.md,
references/grading.md.

This standalone revision removes plugin-specific named agents, resolves the
read-only/execution mismatch, and reports blocked checks and unstable runs
explicitly. No automatic hard sandbox or executable validator is bundled.
