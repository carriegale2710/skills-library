# GAIA Expert Architecture PRD

## Problem Statement

A single GAIA Code Space handles all work — product research, interface design, frontend engineering, backend development, and documentation writing — without any domain specialisation. This means every Space carries the same generic instructions, skills, and personality regardless of the task. There is no curated skill set for each domain, no consistent working personality, no shared project memory across sessions, and no structured way to coordinate work across different types of tasks on the same project.

As a result:
- Skills are generic and not optimised for specific expert domains.
- Context and project knowledge are lost between sessions.
- There is no clear protocol for project coordination or knowledge sharing.
- Non-coding tasks have no structured workflow.
- Product, design, engineering, and documentation work are all handled the same way.

## Solution

Create a reusable, modular **GAIA Expert** system: four specialised Perplexity Spaces, each configured as a distinct Expert with curated skills, an operational personality, and shared project coordination files stored in the project repository.

Each Expert Space has its own:
- `EXPERT.md` — role, responsibilities, boundaries, inputs, and outputs.
- `PERSONALITY.md` — workstyle, communication style, and configurable preferences.
- `README.md` — setup instructions and usage guide.
- `skills/` — curated domain-specific skill set.

Project coordination is handled through:
- `.gaia/` folder in each project repository containing `PROJECT.md`, `MEMORY.md`, `DECISIONS.md`, and `EXPERTS.md`.
- GitHub Issues for all coding and non-coding task tracking.
- Shared `MEMORY.md` and `DECISIONS.md` with clearly labelled sections per Expert so every Expert reads what others have done.
- Shared coordination skills available in every Space (`shared/`).

Command-level coordination (brainstorming, triage, planning, issue creation) is handled by shared skills copied into every Expert Space — not a dedicated Command Space.

## User Stories

1. As a builder, I want each Perplexity Space to behave as a specialised Expert with curated skills, so that my AI assistant is optimised for the domain I am currently working in.
2. As a builder, I want each Expert to have a consistent, operational personality, so that interactions feel professional and predictable.
3. As a builder, I want project context and decisions to persist across sessions and Experts, so that work does not have to be repeated when switching between Spaces.
4. As a builder, I want to track coding and non-coding tasks through GitHub Issues, so that all work is visible in one place.
5. As a builder, I want shared coordination skills available in every Expert Space, so that planning and issue creation work regardless of which Space I am using.
6. As a builder, I want the Expert package to be permission- and connector-agnostic, so that the same package can be used across different projects and Space setups.
7. As a builder, I want to create new Expert packages for future domains, so that the system can grow without redesigning the core structure.
8. As a future user, I want to install a curated Expert package into my own Space, so that I can adopt the architecture without building it from scratch.

## Implementation Decisions

### Expert topology

Four Expert packages, each mapping one-to-one to a Perplexity Space:

| Expert | Domain | Primary outputs |
|---|---|---|
| Product Research | Market research, validation, PRDs, opportunity assessments | Research reports, product briefs, GitHub Issues |
| Design + Frontend | UX flows, visual design, React/Next.js implementation | Design decisions, UI code, PRs |
| Backend + QA | APIs, databases, authentication, testing, security | Backend code, migrations, test suites, PRs |
| Documentation + Writing | Technical docs, READMEs, ADRs, agent instructions | Markdown documents, GitHub Issues, `.gaia/` updates |

### Expert package structure

```text
<expert-name>/
├── EXPERT.md
├── PERSONALITY.md
├── README.md
└── skills/

Optional:
├── references/   # Templates and exemplar examples
└── evaluations/  # Deferred: tests and quality thresholds
```

### Skill taxonomy

Two groups:

- `shared/` — generic coordination skills (brainstorming, triage, planning, issue creation, research). Copied into every Expert Space. Rule: if a skill is useful to three or more Experts, it belongs in `shared/`.
- `experts/<name>/skills/` — niche, domain-specific skills for one Expert only.

### Personality model

Operational personality with light character. `PERSONALITY.md` controls workstyle, communication tone, decision-making habits, and configurable preferences. It cannot override GAIA core rules, safety, permissions, or user decisions.

Authority order:
```
GAIA core engines
  > project rules
  > EXPERT.md
  > PERSONALITY.md
  > skills/
  > references/
  > user task context
```

### Project coordination

Each project repository stores a `.gaia/` folder:

```text
.gaia/
├── README.md
├── PROJECT.md
├── MEMORY.md
├── DECISIONS.md
└── EXPERTS.md
```

- `.gaia/` is for AI-agent communication only — not general documentation.
- Documentation belongs in `docs/`.
- Work is tracked in GitHub Issues.
- `MEMORY.md` and `DECISIONS.md` use clearly labelled Expert sections so all Experts read each other's work.

### Permissions and connectors

Expert packages are agnostic. Each Perplexity Space setup decides its GitHub connector, repository scope, model, and permission mode. The `README.md` describes required capabilities only.

### Shared skills (initial set)

All coordination skills go into `shared/` and are copied into every Expert Space:

```text
brainstorming.md
grilling.md
pipeline.md
triage.md
to-issues.md
to-tickets.md
writing-plans.md
research-to-issues.md
find-skills.md
doctor.md
```

### Expert-specific skills (initial classification)

**Product Research Expert:**
```text
research.md
to-prd.md
to-spec.md
```

**Design + Frontend Expert:**
```text
frontend-design.md
frontend-build.md
frontend-design-reference.md
anti-ui-slop.md (future)
```

**Backend + QA Expert:**
```text
tdd.md
diagnosing-bugs.md
bug-fix.md
improve-codebase-architecture.md
caveman.md
feature-ship.md
pr-review.md
```

**Documentation + Writing Expert:**
```text
writing-for-agents.md
writing-great-skills.md
write-a-skill.md
writing-skills.md
writing-plans.md (also shared)
```

## Testing Decisions

Evaluation is deferred until the package structure is confirmed.

Initial smoke-test approach (to be formalised later):
- Each Expert Space should correctly identify its domain and refuse out-of-scope requests.
- Each Expert should use its curated skill set rather than generic responses.
- Project coordination files (`.gaia/`) should be readable and usable by all Expert Spaces.
- Shared skills should work consistently across all four Spaces.

Quality thresholds and regression suites are deferred to a later implementation phase.

## Out of Scope

- Automated cross-Space orchestration.
- A dedicated Command Space.
- Built-in handoff files or handoff workflow.
- Evaluation framework and quality thresholds (deferred).
- Automated skill versioning or distribution.
- Additional specialist Experts (QA standalone, DevOps, Security) beyond the initial four.
- Multi-user or team Space configurations.

## Further Notes

- The future reusable Expert skills repository (`gaia-expert-skills/`) should organise skills by Expert domain under `experts/` with a shared library under `shared/`. Personality presets may be stored under `personalities/`.
- The `.gaia/` README in each project should define the coordination protocol: which Expert handles which domain, how to read shared state, and how to update GitHub Issues.
- The Documentation + Writing Expert is the best candidate to maintain `.gaia/` files and project `docs/` for any given project.
- Evaluations should be introduced once at least two Expert packages have been used in a real project context.
