# Writing rules for generated artifacts

Goal: same process every run, minimal context load. Skill bodies stay in context after load.

## Description (model-invoked skills)

- Only text the agent sees when choosing a skill. Max 1024 chars, third person.
- Sentence 1: what it does. Sentence 2: "Use when ..." triggers only; never summarize steps.
- Manual-only skill: `disable-model-invocation: true` (zero context cost).

## Body

- Each step: action verb + completion criterion. Under 150 lines.
- Single source of truth per meaning. Link, don't copy.
- Cut no-ops (lines the model obeys by default) and stale layers.
- Prompt the positive behavior; avoid steering by prohibition.
- Split by invocation (distinct trigger) or by sequence (later steps tempt rushing the current one).
- Match form to failure: skipped rule → prohibition + counter; wrong shape → output contract; missing element → required field; conditional → observable predicate.

## References

- One narrow topic per file; purpose and scope first; stable headings.
- No frontmatter, no full procedure, no second rule for the same concept.
- Mandatory behavior stays in the consumer; consumer links the exact path at the step needing it.
- Source link or "assumption" label for factual claims; date if it can expire.

## Checklist

- [ ] Description rules met
- [ ] Every line changes behavior
- [ ] Links resolve; terms consistent
- [ ] Tested on 2-3 scenarios before shipping
