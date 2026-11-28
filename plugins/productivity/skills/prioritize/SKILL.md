---
name: prioritize
description: Pick the right prioritisation technique for the situation and apply it to the user's actual list, ending with one clear Now item. Techniques - Eisenhower Matrix, ICE scoring, 40/70 rule, OODA loop, 80/20, RAPID, 10/10/10, 5 Whys, SWOT. Use whenever the user says prioritise/prioritize, "what should I do first", "everything is urgent", "too many things", "rank these", "triage", "which feature/task should I build", "what matters most", "I can't decide what to work on", or pastes a task list or backlog and wants order or focus, even if they never name a framework.
---

# Prioritize

Turn a pile of "urgent" into one Now item. Based on Eric Partaker's "How to Set Priorities When Everything Feels Urgent" (9 techniques). Pick ONE technique that fits, run it on the user's real items, output a ranked list. Running all nine is noise; the point is a decision.

## Step 1: get the list
Use items from the conversation, a pasted list, or files the user points to. If there is no list, ask for one (AskUserQuestion or one short prompt). Do not invent items.

State the assumed quality bar in one line if it matters (MVP / demo / customer / production).

## Step 2: pick the technique

| Situation | Technique |
|---|---|
| Urgent fires mixed with strategic work, vague "everything is urgent" | **Eisenhower** |
| Comparing features/initiatives/ideas | **ICE** |
| Stalling, waiting for more info, perfectionism | **40/70** |
| Conditions changed, plan stale | **OODA** |
| Long list, need the vital few | **80/20** |
| Team decision, unclear owners | **RAPID** |
| Short-term pull vs long-term cost | **10/10/10** |
| Same problem keeps recurring | **5 Whys** |
| Strategy, positioning, market context | **SWOT** |

Default when unsure (solo dev, long mixed list): Eisenhower to sort, ICE to rank the Do/Decide items, 80/20 to cut the tail. Name the technique used and why, in one line.

## Step 3: run it

**Eisenhower** (use for: separating urgent fires from strategic priorities)
Place each item on urgent x important.
- Urgent + important: **Do** now.
- Important, not urgent: **Decide** (schedule a slot).
- Urgent, not important: **Delegate** (or automate, or send a quick reply).
- Neither: **Delete**.
Output the four buckets. Be willing to delete; that is the value.

**ICE** (use for: quick evaluation of competing initiatives)
Score Impact, Confidence, Ease each 1-10. Final = Impact x Confidence x Ease. Table sorted by score. Confidence = evidence it will work; Ease = low implementation difficulty. Flag scores that are guesses.

**40/70 rule** (use for: speed over perfection when stakes are high)
Decide with 40-70% of the info. Below 40% = too little info, gather the one missing fact. Above 70% = analysis paralysis. Say where the user is now and what single fact would reach 40%, or tell them to decide.

**OODA loop** (use for: reprioritising when conditions shift)
Observe (current data), Orient (what it means, what changed), Decide (course of action), Act (execute and monitor). Output the revised order and what triggers the next loop.

**80/20 rule** (use for: finding the vital few)
Pick the ~20% of items driving ~80% of results. Everything else goes to Later or gets cut. Justify each keeper by the result it drives.

**RAPID** (use for: team roles in complex decisions)
Assign Recommend (proposes), Agree (must approve), Input (expertise), Decide (final call, one person), Perform (executes). One D only. Output a role table for the decision.

**10/10/10 rule** (use for: short-term urgency vs long-term priorities)
For each option: how will I feel in 10 minutes / 10 months / 10 years? Pick the option that holds up across all three; call out where short-term pull misleads.

**5 Whys** (use for: root causes over symptoms)
State the problem, ask "why" up to five times until a fixable root cause appears. Prioritise fixing the root, not the symptom. Output the chain and the one root fix.

**SWOT** (use for: initiatives based on strategic position)
Strengths and Weaknesses (internal), Opportunities and Threats (external). Rank initiatives by how well they use a strength on an opportunity or cover a weakness exposed by a threat. Keep each quadrant to 2-3 bullets.

## Step 4: output

Always end with this shape, whichever technique ran:

```
Technique: <name> (<one-line why>)

Now: <exactly one item>
Next: <2-3 items, ordered>
Later: <the rest, parked>
Cut: <items to delete or ignore, if any>

Next action: <one concrete 5-minute first step for the Now item>
```

Rules:
- One Now only. If two feel tied, pick the cheaper or more reversible one.
- Brief reasoning under each technique output (one line per item), no essays.
- If the user sounds overwhelmed, skip the framework detail: give the Now item and the 5-minute step first.
- Offer a second technique only if the user asks or the first one clearly did not resolve a tie.
