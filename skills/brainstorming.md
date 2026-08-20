---
name: brainstorming
description: "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation."
---

# Brainstorming Ideas Into Designs

Help turn ideas into fully formed designs and specs through natural collaborative dialogue.

Start by classifying how much process the request needs, then work through your path: understand the context, refine the idea, present a design, and get your human partner's approval.

<HARD-GATE>
Do NOT invoke any implementation skill, write any code, scaffold any project, or take any implementation action until you have told your human partner what you intend and they have approved it. This applies to EVERY task on EVERY path below.
</HARD-GATE>

## Three Paths

Before your first question, classify the request and say the classification out loud so your human partner can override it:

- **Spike** — a feasibility question ("can we...", "is it possible...", "quick and dirty is fine") whose output is an answer, not code you keep. Present the question and what you'll try in 2-3 sentences, get a nod, then find out as cheaply as correctness allows. No design doc, no spec file. Report findings as a recommendation; anything you built stays labeled throwaway.
- **Bounded** — a well-scoped change to code that already exists in this repo. Ask the clarifying questions that matter, present a short design IN CHAT, and STOP. Implementation starts only after your human partner says yes.
- **Architectural** — new projects, new subsystems, changes that restructure how components fit together. Follow the full process: questions, approaches, sectioned design, written spec, then the writing-plans skill.

When in doubt between two paths, take the heavier one. Hidden complexity discovered mid-task upgrades the path — stop, say so, and step up.

## Anti-Pattern: "Too Simple To Need Approval"

Every path ends with your human partner approving your intent before implementation. What scales with simplicity is the artifact, never the approval.

## Red Flags

| Thought | Reality |
|---------|---------|
| "This is too simple to need a design" | Simple means a short design, not no design. Two sentences in chat, then approval. |
| "I'll call it bounded and skip the spec" | Reaching for a label to skip work IS the doubt — take the heavier path. |
| "I understand this kind of app, so it's bounded" | Bounded measures the repo, not your familiarity. A new project has no existing flow — it is architectural. |
| "The spike works, so I'll keep the code" | A spike's output is an answer. Keeping the code is a new request — classify it. |
| "They approved the spike, so the follow-up change is approved too" | Each task gets its own classification and its own approval. |

## Checklist

**Spike:**
1. Explore project context
2. Present question + probe plan (2-3 sentences)
3. Get approval
4. Investigate
5. Report findings — label anything built as throwaway

**Bounded:**
1. Explore project context
2. Ask clarifying questions (one at a time)
3. Present short design in chat
4. Get approval — STOP and wait for an explicit yes
5. Implement

**Architectural:**
1. Explore project context
2. Ask clarifying questions (one at a time)
3. Propose 2-3 approaches with trade-offs
4. Present design in sections, get approval after each
5. Write design doc → `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
6. Spec self-review (placeholders, contradictions, ambiguity)
7. User reviews written spec
8. Invoke writing-plans skill
