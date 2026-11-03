---
name: search-demand-check
description: Checks whether people actively search for a solution to a shortlisted idea, using free signals (Google autocomplete, Google Trends, marketplace search suggestions) and Ahrefs or Semrush when connected, recorded as DEMAND evidence. Use when the user asks if anyone searches for an idea, wants keyword or "alternative to" volume, wants to compare demand between a few candidates, or as step 4 of validated-idea-hunt. Use only on 1–3 shortlisted ideas, not for open-ended brainstorming.
---

# Search demand check

Confirm that people look for this, and spot underserved searches. Run it only on shortlisted ideas: search data is easy to misread without the money and pain evidence behind it.

## Inputs

1–3 candidate sentences, the related product names, and the founder profile's default markets.

## Steps

1. **Write 5–8 queries per candidate**, in three types:
   - Switching intent: "[product] alternative", "[product] vs", "cheaper [product]".
   - Niche intent: "[job] for [niche]", "[job] [platform]" (for example "figma to klaviyo").
   - Problem intent: "how to [job]", "[job] without [painful step]".
2. **Collect free signals:**
   - Google autocomplete: type the start of each query and record the suggestions.
   - "People also ask" boxes on the results page.
   - Google Trends: 5-year view, rising or flat, compared against a related term for scale.
   - Marketplace search suggestions in the channel from the founder profile (Figma Community, Shopify App Store, Chrome Web Store).
3. **If Ahrefs or Semrush tools are connected**, pull volume and difficulty for the queries and the competitors' top organic keywords. Without them, Ahrefs' free keyword generator or Google Keyword Planner (free with a Google Ads account) give rough ranges. List those under Manual checks when you can't reach them.
4. **Look at who ranks.** Forum threads, Reddit posts or outdated articles ranking for a niche query mean no good product owns it. That's a gap.

## Strength rules

- **Strong**: switching or niche queries with measurable volume, or a niche query where forums and Reddit outrank any product.
- **Medium**: autocomplete or marketplace suggestions exist, but no volume data.
- **Weak**: only broad head terms show demand, or the trend is falling.

Low volume isn't a kill signal for niche B2B. Twenty searches a month from agencies who'd pay can beat thousands from hobbyists. When the founder's channel is a marketplace, marketplace search outweighs Google.

## Output

One Evidence log row per candidate with Type = DEMAND, summarising the best signals and the trend direction. Record numbers only when a tool returned them; otherwise write "no volume data".
