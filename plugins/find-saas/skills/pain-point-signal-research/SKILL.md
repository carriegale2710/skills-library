---
name: pain-point-signal-research
description: Rank most common, costly and painful problems in a niche using Reddit thread volume and trends, search demand data (Ahrefs/Semrush or free fallbacks), and cost evidence.
---

# Pain-point signal research

Find and rank the top problems a target niche has, backed by three kinds of evidence: what people complain about (Reddit and forums), what they search for (keyword data), and what they already pay to fix (cost evidence).

## Inputs (confirm before starting)

- Niche and job-to-be-done (e.g. "email agencies turning Figma designs into Klaviyo emails")
- Target segments (e.g. agencies, in-house ecommerce teams, freelancers)
- Seed keywords (5-15) and subreddits (3-8)
- Time window (default: last 24 months, split into two 12-month halves for trend)
- Competitors to check (optional)

## Step 1: Check data access

- If an Ahrefs or Semrush connector is available, use it for keyword volume, keyword difficulty, CPC, 12-month trend, parent topic and SERP.
- If not, fall back to WebSearch plus Google Trends pages via WebFetch, and ask the user for a Google Keyword Planner or free Ahrefs keyword tool export. Label all fallback figures as directional.
- There is no Reddit connector by default. Use WebSearch with site:reddit.com queries. Do not mass-scrape or bypass blocked sites; thread counts are approximate and must be labelled that way.

## Step 2: Build problem hypotheses

- Collect candidate problems from: competitor troubleshooting docs and FAQs, Figma/vendor community forums, Product Hunt comments, G2/Capterra reviews, and freelancer gig listings (what people outsource).
- Write each as a short problem statement in the user's terms, not a solution.
- Merge duplicates. Aim for 10-20 candidates.

## Step 3: Reddit signal per problem

- For each problem, run 3-5 differently phrased site:reddit.com searches across the chosen subreddits.
- Record for each unique thread: URL, subreddit, date, upvotes and comment count if visible, and a one-line paraphrase.
  Count unique threads per problem in each 12-month half to show trend (rising, flat, falling).
- Note intensity signals: emotional language, workarounds described, money or hours mentioned, tools abandoned or switched.

## Step 4: Search demand per problem

- Map each problem to a keyword cluster (2-6 keywords).
- Record volume, difficulty, CPC and 12-month trend per cluster.
- Treat CPC as a willingness-to-pay proxy. Flag niche clusters with very low volume as directional rather than discarding them.

## Step 5: Cost evidence

- Collect what the problem costs: freelancer or agency prices per unit, tool subscriptions people pay for, hours lost per task, and error consequences (broken sends, client rework).
- Separate stated figures (from users) from listed prices (from vendors).

## Step 6: Score and rank

### Score each problem 1-5 on:

- Frequency (Reddit thread count and spread across sources)
- Trend (rising scores higher)
- Cost (money or time per occurrence x how often it happens)
- Pain intensity (language, workaround effort, switching)
- Willingness to pay (existing spend, CPC)
- Search demand (volume relative to niche size)

Total the scores. Break ties by cost.

## Step 7: Report

Deliver:

1. Ranked table of the top 5-10 problems with scores per dimension.
2. Detailed analysis for each of the top 5 problems, including the problem statement, who has it, current workarounds and their cost, which competitors fail to solve it, and at least 3 evidence links from at least 2 source types.
3. Keyword table per cluster.
4. Weak signals and contradicting evidence.
5. Gaps in the data and confidence level per finding.
6. 6-8 interview questions to validate the top 3 problems.

### Quality rules

- Vendor marketing, comparison pages written by competitors, and sponsored posts are not user evidence. Label them and exclude them from frequency counts.
- Paraphrase; never paste long quotes. Link every claim.
- Mark every number as measured, estimated or directional.
- Do not inflate a single loud thread into a pattern; a problem needs evidence from at least 2 source types to rank in the top 5.
- State what was not checked.
