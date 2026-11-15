# Worked Example — antiscroll-app "breaks instead of cutoffs"

The completed first run of this skill, showing how every step plays out. Use this as the model when running the skill on a new mission.

## Step 1 — Mission

> We are validating "required mid-session breaks (5 min after 20 min of scrolling, movement-tracked, DMs exempt) instead of daily time cutoffs" for ADHD/autopilot doomscrollers who rebel against all-or-nothing blockers.

## Step 2 — Pain expressions (search patterns)

None of these name the feature:

- "I was in a trance for 4 hours" / "I didn't notice time passing"
- "I just tap ignore limit" / "I keep moving the limit forward"
- "I deleted the app after 2 weeks, it's all or nothing" / "I rebelled against it"
- "I can't block this app, I need DMs for work/friends"
- "seeing 'ACCESS DENIED' made me feel like a failure"
- "I wish something would physically stop me / make me get up"

Categories derived: TRANCE, CUTOFF-FAILURE, REBELLION, LEGIT-USE, SHAME, MOVEMENT, ADHD/PDA.

## Step 3 — Subreddits

r/nosurf, r/digitalminimalism, r/productivity, r/getdisciplined, r/ProductivityApps, r/DecidingToBeBetter, r/selfimprovement + domain-specific r/ADHD, r/adhdwomen.

## Step 4 — Filled prompt (abridged)

The exact prompt that validated this mission is the one starting "You are a qualitative researcher mining Reddit for product-validation evidence" with CONTEXT = the break-after-20-minutes mechanic, the pain expressions above, the subreddit list, and the seven categories. Full text lives in the conversation that produced this skill; the parameterized version is `perplexity-prompt.md`.

## Step 5 — What the mining returned

- Strong evidence for TRANCE, CUTOFF-FAILURE, REBELLION, LEGIT-USE, SHAME — verbatim quotes captured in `research/problem/Validated Pain Points.md`, `research/competitors/Market Gaps.md`, and `research/solutions/Current Hackarounds.md`.
- Evidence for MOVEMENT was thinner (adjacent only: phone-shaking tasks like One Sec's "rotate phone", grayscale tedium).
- Contrarian gold: users who habituate to friction within ~2 weeks ("after about 2 weeks it loses its effectiveness"), who "run through the motions / mentally ignore the blocks", and who would "just shift to another app".
- Critical addition found via follow-up pass 2 (objection reverse-engineering): competitors already *claim* re-interventions (One Sec FAQ) and OS-level features are converging (Android "Pause Point", 2026) — so the *mechanic* is commoditized, the differentiator must be the *embodiment* (meaningful break, movement verification, DMs exempt, non-shaming tone).

## Step 6 — Verdict delivered

Mid-session breaks are the strongest differentiator available *because they close the only gap competitors leave open* (no mid-session interruption), but the bare interrupt is not defensible on its own — the break's quality (5 min, movement-verified, kind framing) is the moat.

## Reuse notes

- The pain expressions for a validation mission are reusable across a whole product vertical: the antiscroll set also applies to any "reduced phone use" idea (notification tools, focus timers, whitelist browsers).
- Categories are project-specific; rename freely, keep them ≤ 7.