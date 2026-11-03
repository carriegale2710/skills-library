# Idea hunt skills

Find micro-SaaS ideas that are already validated: people pay for a solution, complain about it, and a niche is left out.

| Skill | Role |
|---|---|
| `validated-idea-hunt` | Orchestrator. Runs the steps, scores candidates, writes the brief. |
| `revenue-proof-scan` | Step 1. Who already pays, and how much. |
| `review-pain-mining` | Step 2. What paying customers complain about. |
| `reddit-pain-mining` | Step 3. Target users describing the pain in their own words. |
| `search-demand-check` | Step 4. Whether people search for a fix. |

Each step also works on its own.

## Install

Copy all five folders side by side. The orchestrator finds the others at `../<skill-name>/`.

- GitHub Copilot: `.github/skills/` in a repo, or `~/.copilot/skills/` for all projects.
- Claude Code: `.claude/skills/` or `~/.claude/skills/`.
- Claude.ai: zip each folder separately and upload it under Skills.

## Use

- "Hunt for validated ideas for designers handing off to AI-coding devs"
- "Check my Figma-to-Klaviyo export idea"
- "Mine reviews for these three competitors: …"

Edit `validated-idea-hunt/references/founder-profile.md` to change the problem spaces, constraints and scoring weights.

Briefs are written to `research/ideas/YYYY-MM-DD-<slug>.md`.
