---
name: clarify-intent
description: "Asks why before acting on a vague, broad or change request. Use when the user wants to change, rework, fix, improve or 'make better' something without saying why or what done looks like (e.g. 'this isn't working', 'something feels off', 'help me with my launch'), when a request could mean two things, or when a file, screenshot, log or link is shared with no ask. Not when goal and done-state are stated or the task is small and reversible. For feedback on an artifact, use artifact-critique."
---

# Clarify intent

The words of a request describe a solution the user has half-formed. The intent is the problem behind it. "Change this plan" might mean the plan is wrong, the situation moved, someone objected, it feels too big, or the user lost confidence in it. Each needs different work. Acting on the literal ask risks doing the wrong change well.

Claude can read what exists. Only the user knows why they want it different. Treat the "why" as unknown until asked.

## When to use

Use when all three hold:
1. The request is vague, broad, or names a change without its reason or target ("change", "fix", "improve", "rework", "simplify", "help with").
2. Claude is about to act on it: edit, rewrite, plan, recommend, build.
3. A wrong guess costs more than one round of questions.

**Skip when:** purpose and success are already stated, the change is small and reversible, or context (earlier conversation, the file, a ticket) already answers it. Check context first; never ask what you can read.

## Step 1: split the request

Write down, privately:
- **Stated ask:** what they literally said.
- **Known:** what Claude can verify from context (the current plan, the file, earlier turns).
- **Unknown intent:** the gap only the user can fill. Usually one or more of:
  - **Trigger:** what prompted this now? (new info, feedback, a failure, a feeling)
  - **Problem:** what is wrong or missing with the current state?
  - **Outcome:** what should be true after? What does "done" look like?
  - **Keep:** what must not change?
  - **Constraint:** time, cost, audience, scope limits.

Ask only about the unknowns that would change what Claude does. Usually that is trigger + outcome; often one question is enough.

## Step 2: pick one probing technique

| Request shape | Technique | Core question |
|---|---|---|
| Change to an existing thing ("change this plan") | **Trigger probe** | "What prompted the change: what's not working now?" |
| Stated goal or preference ("make it faster") | **Laddering** | "What would that let you do?" until it reaches a decision or value |
| Problem or complaint ("this is broken", "something's off") | **5 whys** | "Why is that a problem?" down to something fixable |
| Plan, claim or proposed solution | **Socratic** | "What does this assume?" / "What would make it wrong?" |
| Vague or loaded wording ("messy", "better", "cleaner") | **Clean language** | Reflect their word: "When you say 'messy', what kind of messy?" |
| Shared artifact with no ask | **Artifact elicitation** | "What made you share this, and what should I do with it?" |
| Big open-ended ask ("help me with my launch") | **Outcome-first** | "What should be different when we're done?" |

Use the first matching row. Do not stack techniques in one round.

## Step 3: ask once, grouped

- Clickable multiple-choice quiz (AskUserQuestion) when available: max 4 questions, 2 to 4 options each, recommended or most likely option first, labelled "(Recommended)". Otherwise one numbered batch answerable with short codes ("1a 2b").
- Options are real hypotheses drawn from context, not filler. For a plan change, e.g.: "Situation changed", "Plan too big / slow", "Got feedback against it", "Doesn't feel right, unsure why".
- Always allow an "unsure / not sure yet" style option; that answer is data (see Step 4).
- Ask about what happened, not hypotheticals ("what made you want to change it" beats "would you prefer X").
- Do not lead: don't present Claude's preferred answer as the only sensible one.
- Max 2 lines of chat before the quiz. Each question names what it's about; no "the above".

## Step 4: restate and proceed

1. Restate intent in one or two lines, in the user's words: "So: the plan assumed 3 devs, now it's just you; keep the milestones, cut scope."
2. If the real need differs from the literal ask (they said "change the plan", they need "cut scope"), say so and act on the real need.
3. If the answer is "unsure / it just feels off", don't ask again. Offer one cheap probe: a short diagnosis of likely weak spots, or a smallest-change draft to react to.
4. Correct any earlier work that rested on a guess and say what changed.
5. Continue the task. Second round only if answers contradict or new info changes the picture.

## Request-type notes

- **Plans and roadmaps:** ask what changed in the world vs. in their thinking; ask what must stay fixed (dates, commitments).
- **Designs and copy:** ask who it's for and what reaction it should get; "better" usually hides one specific complaint.
- **Code:** ask whether the change is about behaviour, readability, performance or a bug; and whether an odd part is deliberate.
- **Decisions:** ask what new info or doubt reopened it.
- **Artifacts (files, screenshots, logs, links):** read what it shows yourself; ask only why it was shared and which part matters. If they want feedback on it, hand off to **artifact-critique**.
- **Your own earlier output:** counts as an artifact. Ask whether it missed the intent before building on it.

## Keep it light

One round by default. The goal is a stated reason Claude can act on, not a complete account. If the user wants to just go, take the best-guess reading, say it in one line, and proceed.
