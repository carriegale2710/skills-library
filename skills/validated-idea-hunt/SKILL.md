---
name: validated-idea-hunt
description: Orchestrates a hunt for already-validated micro-SaaS ideas (problems people already pay to solve, publicly complain about, in a niche the current tools ignore) and writes a scored opportunity brief with linked evidence. Use whenever the user wants to find, shortlist or sanity-check micro-SaaS, plugin or indie product ideas, asks "what should I build", wants to research a problem space or niche for opportunities, or wants proof of demand for an idea they already have, even if they never say "validated".
---

# Validated Idea Hunt

Find ideas where demand is proven by money and behaviour, not opinion. An idea counts as validated when the evidence shows:

1. **PAID**: people already pay for something that does this job.
2. **PAIN**: people complain about the current options, recently and repeatedly.
3. **GAP**: a specific niche is ignored, overcharged, or buried in features it doesn't need.

Two of three earns customer interviews. Three of three makes it a priority. Zero or one: drop it, however exciting it sounds. AI idea generators and "validated idea" newsletters are not evidence. They can seed candidates, nothing more.

## Before starting

Read `references/founder-profile.md`. It holds the problem spaces, constraints and scoring weights. If the user names a different space, use theirs. If the profile is empty and the user names none, ask one question: which audience or problem space to hunt in.

Pick the mode from the request:

- **Hunt**: start from a problem space, end with a shortlist of 3 ideas.
- **Check**: start from one named idea, end with a verdict of go, dig deeper, or drop.

Timebox: Hunt about 60–90 minutes of work, Check about 30. Stop when the evidence is good enough to decide, not when the sources run out.

## Run order

Each step is a sibling skill. Load it by name. If the host can't load skills by name, read `../<skill-name>/SKILL.md`.

| Step | Skill | Proves | Hunt mode | Check mode |
|---|---|---|---|---|
| 1 | revenue-proof-scan | PAID | 5–10 paid products in the space | the 3 closest paid competitors |
| 2 | review-pain-mining | PAIN, GAP | top 3–5 products from step 1 | those competitors |
| 3 | reddit-pain-mining | PAIN, GAP | the space plus product names | the idea's core job |
| 4 | search-demand-check | DEMAND | top 3 candidates only | the idea |

Money comes first because it filters out problems nobody pays to solve before any time goes into reading complaints. Search demand comes last because it is the easiest signal to misread and only matters for ideas that survived the other three.

Skip a step when the user already has that evidence. For example, if they hand you saved Reddit URLs, pass those to step 3 instead of searching.

## Evidence log

Every step appends rows to one table in the brief:

| # | Type | Candidate | Source | URL | Date | Evidence | Strength |
|---|---|---|---|---|---|---|---|

- **Type**: PAID, PAIN, GAP or DEMAND.
- **Evidence**: paraphrase in your own words. At most one short quote (under 15 words) per source.
- **Strength**: strong, medium or weak, using the rules in each step skill.
- No URL, no row. Never invent revenue, review counts or quotes. Write "unknown" instead.

## From signals to candidates

After step 2, cluster the signals into candidates. Write each as one narrow sentence:

> [Tool that does one tedious job] for [specific niche] who currently use [workaround or paid tool] and complain about [pain].

Reject a candidate when it is horizontal ("for small businesses", "for everyone"), needs more than two core flows, or depends on one platform's API with no fallback. GummySearch shut down in November 2025 after losing Reddit API access, so treat single-platform data dependency as a real risk.

## Scoring

Score each surviving candidate 1–5 on each criterion below, with a one-line reason. Multiply by the weights in the founder profile and sum.

- **Paid proof**: how strong the PAID evidence is.
- **Pain intensity**: how often it happens, what it costs in time or money, how emotional the complaints are.
- **Gap clarity**: how specific and underserved the niche is.
- **Solo feasibility**: one or two core flows, buildable and maintainable by one person on the profile's stack.
- **Distribution**: a channel the founder can sustain (see profile).
- **Founder fit**: overlap with the founder's audience knowledge and skills.

Missing evidence scores 1, not 3. Don't average away uncertainty.

## Output

Write the brief to `research/ideas/YYYY-MM-DD-<slug>.md`, or the path the user names, using the template below. Then reply in chat with four things only: the top pick, its score, its riskiest assumption, and the file path.

```markdown
# Idea hunt: <space or idea>, <date>

Mode: Hunt | Check
Verdict: <top pick, or go / dig deeper / drop>

## Shortlist
| Candidate | Paid | Pain | Gap | Feasible | Distribution | Fit | Weighted total |
|---|---|---|---|---|---|---|---|

## Top pick
- Candidate sentence:
- Why it beats the others (2–3 lines):
- Riskiest assumption:
- Kill criteria (what interview results would drop it):

## Validation plan
- Who to interview (5–8): where to find them, taken from where the evidence came from
- 3 questions about past behaviour (what they did last time, what it cost, what they tried), never "would you pay for this?"
- Prototype to show: one clickable flow, nothing more

## Next 3 steps
1.
2.
3.

Backlog:

## Paid landscape
| Product | URL | Price | Revenue or proxy | Niche served |
|---|---|---|---|---|

## Evidence log
| # | Type | Candidate | Source | URL | Date | Evidence | Strength |
|---|---|---|---|---|---|---|---|

## Manual checks
Pages that blocked fetching or need a login: URL plus the exact filter to apply.
```

## Ground rules

- Read public pages only. Don't log in, bypass blocks, or mass-scrape. When a site blocks fetching, add the URL and filter to Manual checks and move on.
- Without web tools, run the steps as a guided checklist: give the human the exact URLs and queries, then score what they paste back.
- Don't record usernames or personal details from reviews or threads. The brief is about problems, not people.
