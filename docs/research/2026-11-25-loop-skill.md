# Research: the `loop` skill (Matt Pocock) and the loop concept

Date: 2026-11-25. Quality bar: MVP notes.

## Sources

- Local copy (primary for what it says): `plugins/productivity/skills/loop/SKILL.md`
- Upstream listing (secondary, third-party mirror): https://skills.sh/mattpocock/skills/loop-me
- Upstream listing (secondary): https://mcpservers.org/agent-skills/mattpocock/loop-me
- Upstream listing (secondary): https://www.claudepluginhub.com/skills/necmttn-mattpocock-skills/loop-me

Not read directly: the GitHub repo `mattpocock/skills` (`skills/in-progress/loop-me`). Mirrors may be stale.

## Facts

- Upstream name is `loop-me`, in `mattpocock/skills`, filed under `in-progress` (experimental), MIT. Upstream sets `disable-model-invocation: true`, so it only runs when the user calls it. (skills.sh, mcpservers.org listings)
- Local copy is renamed `loop`, description: "Grill me about specs for the workflows I want to build, within this workspace." Argument hint: a workflow to design, or nothing to go find one. (local SKILL.md)
- Purpose: run a stateful `/grill` session whose only output is workflow specs in `workflows/*.md`. Also keeps `NOTES.md` (user's world, tools, channels, terminology). (local SKILL.md)
- Definition of done: an implementer agent could build the workflow without asking a question. (local SKILL.md)

## The loop concept (as the skill defines it)

- **Loop**: a recurring pattern in a life (career, week, morning, one repeated activity). Loops nest. Predictability is what makes a loop worth delegating.
- **Workflow**: the spec of one loop. The loop is its running instance.
- **Trigger**: event (new email, new issue) or schedule (every morning). Event usually more efficient.
- **Checkpoint**: human-in-the-loop point to verify or decide. Optional; some workflows run fully autonomously or use no AI.
- **Push right**: delay the checkpoint as late as possible; do maximal work first, ask the human once.
- **Brief**: what a checkpoint shows. Decision-ready summary plus link to the asset, not raw output. Review speed matters.
- Nothing structural is mandated: no AI, checkpoint, or schedule unless the grill shows it needs one.

## Inferences (mine, not from sources)

- Local copy contains "push right" and "brief"; search snippets of upstream did not mention them. Local may be newer or edited. Unverified.
- Skill produces specs, not automation. Building the workflow is a separate step (hook, scheduled task, subagent, Zapier).

## Application scenarios for a Claude user

| Loop | Trigger | Checkpoint (pushed right) | Brief |
|---|---|---|---|
| Morning triage (email, calendar, Trello) | Schedule, weekday AM | Once, after sorting and drafting | Top 5 decisions, drafts linked |
| PR review | Event: PR opened | Before merge | Findings ranked, fixes applied, link to diff |
| Inbound bug/issue | Event: new issue | Before labelling or closing | Repro status, suspected cause, proposed label |
| Weekly review / planning | Schedule, Friday | Once, before next week locks | Done / slipped / Now-Next-Later proposal |
| Content (video/post) cycle | Event: idea captured | Before publish | Script/draft, title options, thumbnail link |
| Invoicing / admin | Schedule, month end | Before send | Totals, anomalies, drafts |
| Micro-SaaS support | Event: new ticket | Only for refunds or unclear cases | Suggested reply, account context |

Implementation primitives in Claude Code: `/loop` or scheduled routines (schedule triggers), hooks (event triggers), subagents (do work before the checkpoint), Zapier workflows (cross-app events).

## Open questions

- Confirm upstream `loop-me` text matches local (read repo directly).
- Local rename `loop` collides conceptually with the built-in `/loop` (run a prompt on an interval). Different jobs: built-in runs, this skill specifies.
