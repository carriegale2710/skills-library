---
name: product-manager
description: "Orchestrate the PM document workflow for a feature: find its current stage, size the work, propose a chain of document skills, run them one at a time with a confirm gate, and pause for other plugins when asked. Invoke as /product-manager followed by the feature name."
disable-model-invocation: true
---

# Product Manager

Decide which document comes next, call the skill that writes it, and wait for the user between stages. This skill never writes a document itself and never makes a product decision for the user.

Read `references/workflow.md` first: it holds the stages, sizes, pause points and helpers this process decides over.

## Process

1. **Locate.** Turn the feature into a short kebab-case slug. Read `docs/specs/<slug>/`. The documents that exist are the stages already done; read them.
2. **Size.** Pick one size from the map's Sizes table, and say why in one line.
3. **Propose.** Show the remaining chain (skip done stages) and ask the user to confirm or edit it. Do not start until they confirm.
4. **Run one stage.** Load the stage's skill and follow it. Give it the earlier documents as input. For a manual-only stage (`to-tickets`), tell the user the exact command to run instead.
5. **Gate.** Report in three lines: the file written, its one-line gist, and the next stage. Offer `spec-review` on the new document (optional). If a pause point sits before the next stage, mention it in one line. Wait for "next", "continue" or "yes", or "pause".
6. **Pause** (on "pause"):
   1. Name the plugin and skills for this point from the map. The user turns plugins on and off; never assume one is on.
   2. Tell them to save that work's output to `docs/specs/<slug>/research/` so later stages can read it.
   3. Remind them to `/save` with the `savepoint` plugin (saves to `.claude/saves/`) if they may resume in another session.
   4. Stop. They resume with `/product-manager <slug>`; Locate finds the stage from the files present.
7. **Loop back when flagged.** If a stage added an Open Question to an earlier document, stop. Show the question and offer: resolve it now and rerun that earlier stage, or record it as an assumption and continue. The user chooses.
8. **Finish.** List the files written and any open questions left.

Suggest a helper from the map when its need appears; run it only if the user agrees.

## Rules

- One stage at a time; never chain stages without a confirm.
- Never skip a stage the user put in the chain, and never add one they removed.
- Do not edit documents yourself. Route changes to the skill that owns the document.
- Recommendations are not decisions until the user confirms them.
