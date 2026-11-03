---
name: review-pain-mining
description: Mines 2–3 star reviews of paid tools (G2, Capterra, Shopify App Store, Chrome Web Store, Figma Community and other marketplaces) to find repeated complaints and the specific niches current tools ignore, recorded as PAIN and GAP evidence. Use when the user wants to know what customers hate about a competitor, where an existing product falls short, which niche to target, or as step 2 of validated-idea-hunt. Trigger on "what do people complain about in X", "competitor weaknesses", "review mining", "gaps in X".
---

# Review pain mining

Paying customers who complain are the best evidence of a gap: they've proven they'll pay, and they've told you what's missing.

## Inputs

3–5 paid products (names and URLs), usually from revenue-proof-scan.

## Why 2–3 stars

One-star reviews are often billing or support rage. Five-star reviews carry little information. Two- and three-star reviewers still use the product but want something specific, which is the gap. Also read four-star reviews for the sentence after "but".

## Steps

1. **Find each product's reviews** on the sources below. Filter to 2–3 stars and sort by newest.
2. **Read 20–30 reviews per product from the last 18 months.** Older complaints may already be fixed.
3. **Tag each complaint** with one tag:
   - **PRICE**: too expensive for how I use it.
   - **BLOAT**: overkill, too many features, hard to learn.
   - **MISSING**: doesn't support my workflow, platform or niche.
   - **QUALITY**: bugs, slow, unreliable.
   - **SUPPORT**: slow or unhelpful help.
4. **Count tags per product.** Note who is complaining whenever the reviewer says it ("as a freelancer", "for our agency", "small team").
5. **Find the gap.** PRICE, BLOAT or MISSING complaints that cluster around one user type point at a niche. "Switched from X to Y because..." lines are especially strong.

QUALITY and SUPPORT complaints are weaker gaps. You'd be competing on execution, not on fit.

## Sources

| Source | Notes |
|---|---|
| G2, Capterra | Star filters available. Often block automated fetching. Add them to Manual checks with the URL and "filter 2–3 stars, sort newest". |
| Shopify App Store, Chrome Web Store, Atlassian Marketplace | Reviews on each listing, usually filterable by rating. |
| Figma Community | Comments on plugin and widget pages. Also check the Figma forum for feature requests. |
| WordPress.org | Support forum threads per plugin. Unresolved threads are useful. |
| Product Hunt | Launch comments, mostly early-adopter feature asks. Weak on their own. |

## Strength rules

- **Strong**: the same complaint from 5+ separate reviewers in the last 18 months.
- **Medium**: 2–4 reviewers, or one detailed review that describes a workaround and what it costs them.
- **Weak**: a single short mention, or older than 18 months.

## Output

For each product, a tally line: `<product>: PRICE 4, BLOAT 7, MISSING 9 (agencies x5), QUALITY 2, SUPPORT 1`.

Add one Evidence log row per distinct complaint pattern, not per review. Type = PAIN, or GAP when the complaint names an ignored niche. Paraphrase. Use at most one short quote (under 15 words) per source, and never copy reviewer names.
