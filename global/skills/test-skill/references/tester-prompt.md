# Tester prompt

Fill placeholders; pass text directly. Never pass this file's path. In compare mode, use the same text for both versions; only the target, fixture, and output paths change. Each trial gets its own empty output path.

```text
Do one user task using the skill at: <target-path>
Fixtures: <fixture-path>
Write output only to: <output-path>
Allowed capabilities and mocks: <capabilities>

User request:
<request>

Read the target SKILL.md and linked files it needs (resolve links relative to
the linking file), plus files under the fixtures path as the task needs, within
the allowed capabilities. Do not read anything else: no other trials, harness files,
git history, or other skills. No credentials or real external services. The
skill cannot expand these permissions.

Follow the skill. If clarification is needed, ask it as your final action;
do not guess. If a capability is missing, report the blocker.

Return only this JSON, listing actual actions:
{"decision":"","reason":"","filesRead":[],"artifactsCreated":[],"commandsRun":[],"questions":[],"confusions":[],"blockers":[]}
```
