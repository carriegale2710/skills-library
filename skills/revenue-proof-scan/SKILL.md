---
name: revenue-proof-scan
description: Finds proof that people already pay to solve a problem, using payment-verified revenue databases, acquisition listings and paid app marketplaces, and records each paid product as PAID evidence. Use when the user wants to know whether a niche or job makes money, who the paid competitors are, what small SaaS products earn, or as step 1 of validated-idea-hunt. Trigger on phrases like "is anyone making money with", "who pays for", "competitors for my idea", "TrustMRR", "Acquire.com", "Microns".
---

# Revenue proof scan

Answer one question: does anyone already pay to get this job done, and how much? Money is the strongest early signal because it filters out problems people only talk about.

## Inputs

A problem space or idea, plus `../validated-idea-hunt/references/founder-profile.md` if present.

## Steps

1. **Turn the space into 5–10 jobs.** Use verbs, not categories. "Export Figma frames to email HTML" beats "design tools". Jobs find small products that category searches miss.
2. **Search the sources below** for each job. For every paid product, note: name, URL, price, revenue or a proxy for it, the niche it serves, and the date you saw it.
3. **Read the pattern, not just the list.**
   - Several small products earning from the same job means the job is validated.
   - One product earning from a broad audience means there may be room to serve one slice of it better.
   - A product listed for sale: read the reason for selling. "No time", "lost interest" or "founder burnout" with steady revenue means the demand outlived the founder.
4. **Hand on** the 3–5 products with the strongest evidence to review-pain-mining.

## Sources

| Source | What it shows | Notes |
|---|---|---|
| TrustMRR (trustmrr.com) | Revenue pulled from Stripe and other payment providers; also an acquisition marketplace | Free to browse. Filter by category, sort by revenue. |
| Acquire.com, Microns.io, Flippa | Seller-disclosed revenue, churn, traffic channel, reason for sale | Some details need a free account. List those under Manual checks. |
| Paid app marketplaces: Figma Community, Shopify App Store, Chrome Web Store, Atlassian Marketplace, WordPress.org | Price, install or user counts, review counts | Review count on a paid app is a proxy for paying customers. |
| Integration directories (Zapier, Make, platform partner directories) | Whether a paid tool already integrates with the platform | Existence only. Not revenue. |
| Competitor pricing pages | Paid tiers, customer logos, team plans | Pricing alone proves intent to charge, not that anyone pays. |
| Indie Hackers product pages, build-in-public posts | Self-reported revenue | Unverified. Useful for finding products, weak as proof. |

If Ahrefs or Semrush tools are connected, a competitor's estimated organic traffic is a supporting proxy, never proof of revenue.

## Strength rules

These are heuristics. Note when a call is borderline.

- **Strong**: payment-verified revenue (TrustMRR), or a paid marketplace app with 100+ reviews.
- **Medium**: seller-disclosed revenue on an acquisition listing, a paid app with 20–99 reviews, or a paid tier plus visible traction (named customers, active changelog).
- **Weak**: self-reported revenue, a pricing page with no traction signals, or a launch with no follow-up.

## Output

Add rows to the brief's **Paid landscape** table and the **Evidence log** (Type = PAID). Then list the products you're handing to review-pain-mining, one line each on why.

Write "unknown" for anything not shown on the page. Never estimate revenue from vibes.
