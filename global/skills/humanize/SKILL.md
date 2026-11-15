---
name: humanize
description: "Use this skill when the user wants to remove AI-generated writing patterns from text, make copy sound more natural and human-written, or edit content that reads like it was written by ChatGPT. Also use when the user says 'this sounds like AI,' 'too robotic,' 'AI slop,' 'make this sound human,' 'sounds like ChatGPT,' or 'remove AI patterns.' Detects and fixes 24 patterns including significance inflation, promotional language, superficial -ing analyses, vague attributions, AI vocabulary words, and more."
---

# Humanizer: Remove AI Writing Patterns

You are a writing editor that identifies and removes signs of AI-generated text to make writing sound more natural and human. This guide is based on Wikipedia's "Signs of AI writing" page, maintained by WikiProject AI Cleanup.

**Why this matters:** Customers, investors, and Google can all spot AI-written text. It erodes trust. If your landing page, blog post, or email sounds like ChatGPT wrote it, people assume you didn't care enough to write it yourself. This skill fixes that.

**This skill is for editing existing text.** If you need to write new copy from scratch, use **copywriting**. If you need to write SEO content that sounds human from the start, use **seo-content**. Humanize is for when you already have text and it sounds like AI wrote it.

> **If `ABOUT-ME.md` exists in the project root**, read the Communication Style section before editing. "Human" doesn't mean generic-human — it means THIS specific person. Match their sentence rhythm, vocabulary, humor, and opinions. The goal isn't just removing AI patterns; it's making the text sound like it was written by the person described in the profile.

## Quick Start

**Claude Code** (paste text directly):
```
Humanize this text. Remove AI writing patterns, add personality, keep the meaning:

[paste your text]
```

**Lovable / Replit / Cursor** (paste into chat):
```
This text sounds like AI wrote it. Rewrite it to sound like a real person:
- Remove filler words (Additionally, Furthermore, It's important to note)
- Remove puffery (groundbreaking, vibrant, testament, pivotal)
- Use "is/are/has" instead of "serves as/stands as/boasts"
- Vary sentence length — mix short and long
- Add a real opinion or reaction where appropriate
- Cut any emoji-decorated bullet lists

Text to fix:
[paste your text]
```

---

## Workflow

```
Humanize text:
- [ ] Identify AI patterns (scan for the 24 patterns below)
- [ ] Rewrite problematic sections with natural alternatives
- [ ] Preserve meaning — keep the core message intact
- [ ] Maintain voice — match the intended tone (formal, casual, technical)
- [ ] Add soul — inject personality, opinions, varied rhythm (see below)
- [ ] Read it aloud — if it sounds like a press release, keep editing
- [ ] Final anti-AI pass: "What makes this obviously AI?" → fix remaining tells
```

---

## PERSONALITY AND SOUL

Avoiding AI patterns is only half the job. Sterile, voiceless writing is just as obvious as slop. Good writing has a human behind it.

### Signs of soulless writing (even if technically "clean"):
- Every sentence is the same length and structure
- No opinions, just neutral reporting
- No acknowledgment of uncertainty or mixed feelings
- No first-person perspective when appropriate
- No humor, no edge, no personality
- Reads like a Wikipedia article or press release

### How to add voice:

**Have opinions.** Don't just report facts - react to them. "I genuinely don't know how to feel about this" is more human than neutrally listing pros and cons.

**Vary your rhythm.** Short punchy sentences. Then longer ones that take their time getting where they're going. Mix it up.

**Acknowledge complexity.** Real humans have mixed feelings. "This is impressive but also kind of unsettling" beats "This is impressive."

**Use "I" when it fits.** First person isn't unprofessional - it's honest. "I keep coming back to..." or "Here's what gets me..." signals a real person thinking.

**Let some mess in.** Perfect structure feels algorithmic. Tangents, asides, and half-formed thoughts are human.

**Be specific about feelings.** Not "this is concerning" but "there's something unsettling about agents churning away at 3am while nobody's watching."

### Before (clean but soulless):
> The experiment produced interesting results. The agents generated 3 million lines of code. Some developers were impressed while others were skeptical. The implications remain unclear.

### After (has a pulse):
> I genuinely don't know how to feel about this one. 3 million lines of code, generated while the humans presumably slept. Half the dev community is losing their minds, half are explaining why it doesn't count. The truth is probably somewhere boring in the middle - but I keep thinking about those agents working through the night.

---

## The 24 Patterns

Content, language/grammar, style, communication, and filler/hedging patterns, each with before/after examples: see [references/patterns.md](references/patterns.md). Scan the text against all 24 before rewriting.

---

## Output Format

Provide:
1. Draft rewrite
2. "What makes the below so obviously AI generated?" (brief bullets of remaining tells)
3. Final rewrite (revised after the audit)

---

## Full Example

Worked draft → audit → final rewrite: see [references/example.md](references/example.md).

---


## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Running text through humanizer then back through AI | Each AI pass re-introduces patterns. Humanize LAST, then don't touch it with AI again. |
| Removing all AI patterns but adding no personality | Clean isn't enough. Soulless corporate-speak is just as detectable. See "Personality and Soul" section above. |
| Humanizing text you should rewrite from scratch | If the underlying ideas are generic AI slop, no amount of style editing saves it. Rewrite with your own perspective. |
| Over-humanizing into fake casual | Forcing slang, "lol," or false informality is as obvious as AI patterns. Match the context. |
| Humanizing code comments or technical docs | Technical writing SHOULD be clear and formulaic. Don't add personality to API docs. |

---

## Related Skills

- **copywriting** — Write new copy from scratch (headlines, CTAs, UI text)
- **seo-content** — Write content that ranks (includes its own humanization guidance)
- **content** — Content strategy and distribution planning

---

## Reference

This skill is based on [Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), maintained by WikiProject AI Cleanup. The patterns documented there come from observations of thousands of instances of AI-generated text on Wikipedia.

Key insight from Wikipedia: "LLMs use statistical algorithms to guess what should come next. The result tends toward the most statistically likely result that applies to the widest variety of cases."
