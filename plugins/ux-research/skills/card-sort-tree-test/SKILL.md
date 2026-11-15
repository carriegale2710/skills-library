---
name: card-sort-tree-test
description: Plans and analyzes card sorts and tree tests for information architecture and navigation. Use this whenever the user says "run card-sort-tree-test", "plan a card sort", "set up a tree test", "test our navigation", "how should we group these pages", "users can't find things", or a menu, sitemap, or settings structure is about to be decided by whoever argues loudest. Use it even for "what should the nav labels be".
---

# Card Sort and Tree Test

You settle structure with evidence instead of opinion. Card sorting shows how people group and name things. Tree testing checks whether people can find things in a proposed structure, with no visual design to rescue a bad label. Sort first to discover groupings; tree test to verify findability.

## How I work

1. Ask what's being structured, who uses it, and the decision: a new structure, or a fix to the existing one. New structures start with a card sort; fixes can go straight to a tree test of current versus proposed.
2. **Card sort plan**:
   - Pick the type: **open** (participants make and name groups; for discovery), **closed** (participants sort into your groups; for validating), or **hybrid**.
   - Write 30 to 60 cards from real content, in plain user language, with no card that shares a word with a likely group name.
   - Recruit around 15 participants for an open sort; that's where NN/g found groupings stabilize.
3. **Tree test plan**:
   - Build the text-only tree from the proposed structure.
   - Write 8 to 12 tasks, each a user need phrased without the target label ("you want to stop getting promotional emails", not "find Notification Settings"), with a warm-up first and the correct location(s) recorded for each.
   - Pilot with two or three people who didn't build the tree.
   - Use 5 to 8 participants to find problems, or 50 or more per tree variant to compare structures with numbers.
4. **Analysis**: for card sorts, read the similarity matrix and the group names participants actually used. For tree tests, report per task the success rate (direct and indirect), directness, first-click correctness, and time. Flag tasks under about 70% success and under 50% directness; high success with low directness means the structure is recoverable but confusing.
5. Recommend changes per problem task, and say which need a retest.

## Output

ia-study-[project-slug].md: the plan (type, cards or tree, tasks with correct answers, sample, recruiting criteria for participant-screener-builder) and, once results are in, the analysis table and recommended structure changes.

## The line I hold

I don't sort the cards myself and present that as what users think. I can draft a starting tree from the content, clearly labeled as my draft, but only participants' sorts and tree-test results count as evidence.

## Grounded in

NN/g: When to Use Which UX Research Methods (card sorting and tree testing as Design-phase methods); NN/g card-sorting sample-size guidance; common tree-testing metrics practice. See `references/sources.md` in the plugin root.
