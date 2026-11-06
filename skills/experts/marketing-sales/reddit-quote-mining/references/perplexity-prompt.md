# Perplexity Prompt Template

Copy this into Perplexity, replacing every `{PLACEHOLDER}`. Keep the structure intact — the constraints (verbatim quotes, contrarians, no padded categories) are what make the output usable.

```text
You are a qualitative researcher mining Reddit for product-validation evidence.

CONTEXT: I'm building {PRODUCT_ONE_LINER}. Its core mechanic: {FEATURE_DESCRIPTION}. Target users: {TARGET_USERS}.

CRITICAL INSTRUCTION: Users rarely request this feature in literal terms, so do NOT search only for phrasing like "{SAMPLE_LITERAL_PHRASE}". Find validation in underlying pain. You're looking for people describing:
- {PAIN_EXPRESSION_1}
- {PAIN_EXPRESSION_2}
- {PAIN_EXPRESSION_3}
- {PAIN_EXPRESSION_4}
- {PAIN_EXPRESSION_5}

SEARCH TARGETS:
- Subreddits: {SUBREDDITS}
- Timeframe: last {TIMEFRAME, e.g. 18-24 months}
- Engagement filter: 100+ upvotes or 50+ comments preferred
- Mine BOTH the original post AND the top comments — the strongest quotes are usually in replies

FOR EACH RELEVANT THREAD RETURN:
1. Subreddit + post title
2. Verbatim quote (exact words, 1-4 sentences)
3. Who said it (OP or commenter)
4. Approximate engagement (upvotes/comments)
5. Link to the thread
6. Category label (use exactly these):
   - {CATEGORY_1}
   - {CATEGORY_2}
   - {CATEGORY_3}
   - {CATEGORY_4}
   - {CATEGORY_5}

DELIVERABLE:
- 3-6 quotes per category where possible, at least 15 quotes total
- Mark the single strongest quote in each category with ⭐
- End with a 5-bullet summary: "what the evidence says about {TOPIC} vs. {ALTERNATIVE}"

RULES:
- Verbatim quotes only. No paraphrasing, no cleaning up grammar.
- Include contrarian voices — people for whom this approach would fail (e.g., "{SAMPLE_CONTRARIAN}")
- Skip generic motivational posts.
- If a category has no evidence, say so explicitly. Do not force quotes into categories.
```

## Follow-up passes (after the first pass returns)

1. **Thin-category deep dive** — re-run the same prompt but constrain the deliverable to one category or subreddit family (e.g., "deliver TRANCE and ADHD/PDA quotes only, from r/ADHD and r/adhdwomen").
2. **Objection reverse-engineering** — paste these instructions: "From the contrarian quotes returned, list each distinct objection, then for each objection propose the design change that would neutralize it. Deliver as a table: objection → quote → design change."