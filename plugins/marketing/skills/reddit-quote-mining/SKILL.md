---
name: reddit-quote-mining
description: Validates a feature idea, user pain point, or proposed solution by mining Reddit for verbatim user quotes and classifying them into evidence categories. Use when the user asks to validate or de-risk a feature idea, wants evidence that a problem is real, asks to "mine Reddit for quotes" or "find user quotes", wants to check a solution against what users actually say, or needs objections reverse-engineered into design changes before building. Delivers a findings note in the vault.
---

# Reddit Quote Mining

Validate any feature idea, pain point, or proposed solution against what real users say on Reddit. This is the define → translate → mine → classify → deliver workflow that produced the antiscroll-app research (see `references/example-antiscroll.md` for the worked example).

## When to use

- "Validate this feature idea", "is this a real problem", "mine reddit for user quotes", "find evidence for this pain point", "does anyone actually want X"
- Any pre-build check that a hypothesis matches lived user language.

## Core principle

Users never ask for your feature in literal terms — they describe the pain, and the pain language is what you mine. The closer a search pattern gets to naming your product mechanic, the weaker the evidence it returns.

## Workflow

### Step 1 — Capture the mission

Confirm (or infer from context):

- REQUIRED: the idea to validate (feature / pain point / solution)
- REQUIRED: the target user
- OPTIONAL: known communities; validation categories

Write the mission as one sentence: "We are validating [idea] for [user]." Done when that sentence is a line you'd publish.

### Step 2 — Translate the idea into pain expressions (do not skip)

For each claimed benefit of the idea, ask: "What does a user say when this benefit is missing?" Write the answer as a short verbatim-style phrase — the user's words, not your product's.

Hard rule: none of the pain expressions may name the feature or its mechanic. If one does, rewrite it until it wouldn't make sense to someone who has never heard of your idea.

Example — idea: "app forces a 5-minute break after 20 minutes of scrolling, instead of daily cutoffs":

- "I was in a trance for 4 hours, I didn't notice time passing"
- "I just tap ignore limit / I keep moving the limit forward"
- "I deleted the blocker app, it's all or nothing at this point"
- "I can't block the app, I need DMs for work and friends"
- "seeing 'ACCESS DENIED' makes me feel like a failure"

Derive 4-7 validation categories from the pain expressions — one family per expression. Example categories: TRANCE, CUTOFF-FAILURE, REBELLION, LEGIT-USE, SHAME, MOVEMENT, ADHD/PDA.

Done when: every pain expression is user-speak; every category maps to a pain expression.

### Step 3 — Pick subreddits

Start from the general pool: r/nosurf, r/digitalminimalism, r/productivity, r/ProductivityApps, r/getdisciplined, r/DecidingToBeBetter, r/selfimprovement. Add domain-specific communities for the mission (e.g., r/ADHD, r/adhdwomen for neurodivergent angles; comparable communities for other domains). Merge any user-provided list, dedupe.

### Step 4 — Run the Perplexity mining

Fill `references/perplexity-prompt.md` with the mission, pain expressions, subreddits, and categories. Hand the filled prompt to the user to paste into Perplexity (their preferred engine), or run the equivalent yourself with your own web-search tools if the user prefers.

Recommended follow-up passes after the first results:

1. Per-category deep dive on thin categories.
2. Objection reverse-engineering: "which quotes suggest the feature would fail, and what design change neutralizes each?"

### Step 5 — Process results

- Classify each quote into exactly one category; unclassifiable quotes go to CONTRARIAN, never forced.
- Mark the strongest quote per category (⭐).
- Categories with no evidence: write "no evidence found" explicitly — absence is signal.
- Preserve every contrarian quote.

Done when: every category resolves to evidence or an explicit "no evidence", and contrarians are reported (or none found).

### Step 6 — Deliver the findings note

Write `research/validation/<idea-slug>.md` in the project folder, in the vault's research-note style (verbatim blockquotes, footnote source links):

- Mission (one line)
- Verdict up front: strong / weak / mixed differentiator + why
- Quote ledger: subreddit, post title, OP or commenter, engagement, link, category per quote
- Contrarian section
- Objection → design-change map (contrarian quote → the design change that would neutralize it)
- "What the evidence says" summary, 5 bullets max
- Sources as links

Done when: the note answers the mission, every quote is verbatim (grammar errors included), and each category appears or declares "no evidence".

## Common mistakes

| Mistake | Fix |
| --- | --- |
| Searching the feature name instead of the pain | Step 2 guardrail; rewrite until no phrase names the product |
| Paraphrasing quotes | Verbatim only — quote what they said, not what they meant |
| Only quoting supporters | Contrarians are required output |
| Padding empty categories | "No evidence found" is a valid result |
| Mining only OP posts | Top comments hold the strongest quotes |