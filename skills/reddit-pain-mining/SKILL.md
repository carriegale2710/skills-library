---
name: reddit-pain-mining
description: Finds and filters Reddit and community threads where the target users themselves describe a painful workflow, their workaround, or a tool they want to replace, recorded as PAIN and GAP evidence. Works from targeted web searches or from Reddit URLs the user saved by hand, with no paid Reddit tool or scraping. Use when the user wants pain points, complaints or "is there a tool" requests from Reddit or online communities, wants a GummySearch replacement, hands over saved Reddit links to analyse, or as step 3 of validated-idea-hunt.
---

# Reddit pain mining

Find threads where real target users describe a real, recent problem in their own words. Ten strong threads beat two hundred scraped posts, because every weak post costs time to check and dilutes the signal.

GummySearch, the usual tool for this, shut down in November 2025 after losing Reddit API access. This skill depends on no Reddit tool: it uses web search plus links the user saves by hand.

## Inputs

- The problem space, and product names from earlier steps if any.
- Optional: Reddit or forum URLs the user saved. When these are given, analyse them first and search only to fill gaps.

## Steps

1. **Find where the audience talks.** Search "[audience] subreddit" and "[audience] forum". Niche communities beat r/SaaS and r/Entrepreneur, where most posters are founders pitching, not buyers.
2. **Run the query bank** below with web search, replacing the brackets.
3. **Filter every thread** with the quality check. Keep only threads that pass.
4. **Record** each kept thread as one Evidence log row.
5. **Suggest 3–5 keywords for F5Bot** (free Reddit and Hacker News keyword alerts) so the user can keep collecting signals without scraping.

## Query bank

- `site:reddit.com "[product] alternative"`
- `site:reddit.com "is there a tool" [job]`
- `site:reddit.com "I'd pay for" [job]`
- `site:reddit.com [job] "manually" OR "takes forever" OR "hate doing"`
- `site:reddit.com "[product]" "too expensive" OR "overkill"`
- `site:reddit.com "how do you handle" [job]`

Run the same queries without `site:reddit.com` against niche forums (Figma forum, Indie Hackers, Hacker News) when they fit the audience.

## Quality check

Keep a thread only when all of these hold:

- The author is the target user, not a founder promoting something or polling "would you use this?".
- It describes a real workflow they did recently.
- It's less than 2 years old.

Then rate it:

- **Strong**: names the current workaround or paid tool AND the cost in time or money, AND others in the thread agree or share the same pain.
- **Medium**: clear, specific pain, but no workaround, cost or agreement.
- **Weak**: vague, one-word replies, or borderline on the checks above. Log it only if nothing better exists.

## Ground rules

- Read public pages only. No logging in, no Reddit API, no bulk scraping.
- Paraphrase. At most one short quote (under 15 words) per thread.
- Never record usernames. Link the thread instead.

## Output

Evidence log rows with Type = PAIN, or GAP when the thread names a niche current tools ignore (for example, "none of these work for agencies sending to Klaviyo"). Add the F5Bot keyword list under Next 3 steps or Backlog in the brief.
