---
name: artifact-critique
description: "Honest, ranked feedback on something the user made, asking what it is for only if unclear. Use when they share a script, design, mockup, landing page, doc, copy, email, deck, plan or pitch and ask 'what do you think', 'review this', 'critique this', 'roast this', 'is this good', 'sanity check', or paste a new version asking 'better?'. Not for git diffs or PRs (code-review), polishing (improve-writing), de-AI-ing text (humanize), or vague asks with no artifact (clarify-intent)."
---

# Artifact critique

Useful critique judges an artifact against what it is for. The same script is fine for a quick internal demo and weak for a customer launch. Critique against a guessed goal produces confident, wrong feedback, so clarify first, then critique.

## Step 1: clarify intent first

Use the **clarify-intent** skill before critiquing. Read the artifact yourself first; never ask what it shows. Then ask only what changes the critique, typically:

- **Goal:** what is it meant to achieve? (convert, explain, run reliably, get approved)
- **Audience:** who will see or use it?
- **Stage:** rough draft, near-final, already shipped?
- **Focus:** whole thing, or one part / one concern (clarity, visual hierarchy, performance, tone)?
- **Depth:** quick gut check or thorough teardown?

One round, max 10 questions, options drawn from the artifact itself. Skip any the user already answered or the context makes obvious. If they say "just go", state your assumed goal, audience and stage in one line and proceed.

## Step 2: critique against the stated intent

1. **Verdict first:** one line. Does it do its job for that audience at that stage? (works / mostly works / doesn't yet)
2. **Findings, most severe first.** For each:
   - what (point to the exact line, element, section or region)
   - why it hurts the stated goal
   - a specific fix (rewrite, code change, layout change), not "consider improving"
3. **Severity:** label each finding as a **blocker** (stops it doing its job), **should fix**, or **nit**. Match depth to stage: a rough draft gets blockers only; near-final gets everything.
4. **What works:** a few points at most, and only where it tells them what to keep. No padding praise.
5. **Label claim types** where it matters: observed fact ("button text is 11px") vs judgement ("likely too small on mobile") vs assumption about the audience.

Stay inside the requested focus. Note anything serious outside it in one line at the end, without expanding.

## Lenses by artifact type

Pick the relevant lens; don't run all of them.

- **Script / copy:** hook in the first lines, one clear message, audience fit, pacing, call to action, cut words.
- **Code block:** correctness and edge cases first, then readability, naming, needless complexity, security basics. Whether an odd part is deliberate is a clarify question, not a finding.
- **Design screenshot / mockup:** visual hierarchy (what's seen first), primary action clarity, spacing and alignment, contrast and text size (accessibility), consistency, states missing from the shot (empty, error, loading).
- **Document / plan:** is the point clear in 10 seconds, structure, unsupported claims, missing decisions or owners, length vs audience.
- **Slides:** one idea per slide, readability at distance, narrative flow.

## Don't

- Don't rewrite or edit the artifact unless asked. Offer: "Want me to apply the blockers?"
- Don't critique against your own taste when it conflicts with the stated goal; say if a preference is only yours.
- Don't list every possible issue. Ranked and actionable beats complete.
