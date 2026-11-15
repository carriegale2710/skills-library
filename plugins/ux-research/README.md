# ux-researcher

36 skills for UX research and design thinking across the double diamond, checked against IDEO, d.school, NN/g and GV Design Sprint methods (see `references/sources.md`).

Not sure where to start? Say "which research method should I use" and `ux-research-guide` will place your question and hand off to the right skill.

## Skills

| Phase | Skills |
|---|---|
| Start here | ux-research-guide |
| Frame | design-challenge-framer, stakeholder-mapper, assumption-mapper, desk-research-digest |
| Plan and recruit | research-kickoff-brief, participant-screener-builder |
| Discover: collect | interview-guide-designer, observation-plan-builder, diary-study-designer, survey-designer, co-design-session |
| Discover: make sense | interview-debriefer, transcript-synthesizer, survey-analyzer, insight-writer, empathy-map-builder |
| Define | persona-designer, jtbd-writer, journey-builder, problem-statement-writer, hmw-generator |
| Develop | ideation-session, idea-expander, concept-card-writer, value-impact-matrix, dfv-checker, storyboard-writer |
| Deliver: test | riskiest-assumption-finder, prototype-planner, test-script-designer, test-debrief-synthesizer, card-sort-tree-test, heuristic-evaluation |
| Land it | insight-playback-builder, recommendation-writer |

Skills write `<artifact>-<project-slug>.md` files and read each other's by name. Keep one folder and one slug per project.

Every skill holds one line: Claude prepares and synthesizes; real people supply the evidence. No skill simulates users or invents research data.

## Install

**Claude Code**

```
/plugin marketplace add /path/to/ux-researcher
/plugin install ux-researcher@ux-researcher
```

To try it without installing: `claude --plugin-dir /path/to/ux-researcher`.

**claude.ai**

Turn on code execution in Settings, then upload each zip from `claude-ai-zips/` under Settings → Customize → Skills → Upload skill. Skills reference `references/sources.md`; it's optional on claude.ai.

## Credits

31 skills are adapted from 90n's Design Thinking Pack; heuristic wording follows dembrandt-skills (MIT). Five skills are new. Licenses and changes are in `NOTICE.md`. 90n's license allows internal and client use, not resale.
