# Shared Expert Skills

This folder contains the canonical shared skill library for all four GAIA Expert Spaces.

## The 3-Expert Rule

A skill belongs in `shared/` if it is useful to **three or more** Expert Spaces. Skills used by only one or two Experts belong in that Expert's own `skills/` folder.

## Skills in this folder

| Skill | Purpose |
|---|---|
| `brainstorming.md` | Explore user intent and design before implementation |
| `grilling.md` | Stress-test a plan, decision, or idea through structured interrogation |
| `pipeline.md` | Compose existing skills into a user-defined sequence |
| `triage.md` | Move issues through triage states; categorise, verify, and write agent-ready briefs |
| `to-issues.md` | Break a plan or spec into independently-grabbable GitHub Issues |
| `to-tickets.md` | Break a plan into tracer-bullet tickets with blocking edges |
| `writing-plans.md` | Write comprehensive implementation plans before touching code |
| `research-to-issues.md` | Go from a raw topic or product question to prioritised GitHub Issues in one session |
| `find-skills.md` | Discover and install agent skills from the open-agent ecosystem |
| `doctor.md` | Verify a Space's GAIA Code deployment (read-only health check) |

## Usage

Copy this entire `shared/` folder into each Expert Space's uploaded files. Every skill here is callable with its slash command (e.g. `/brainstorming`, `/triage`).

Do not add Expert-specific skills here. If a skill is needed by only one or two Experts, it belongs in that Expert's package.
