# GAIA Expert Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a reusable four-Expert GAIA package system with curated skills, operational personalities, shared coordination skills, and project-level `.gaia/` coordination files.

**Architecture:** Four Perplexity Spaces each map to one Expert package (`EXPERT.md`, `PERSONALITY.md`, `README.md`, `skills/`). Shared coordination skills are copied into every Space. Project repositories store AI-agent context in `.gaia/` and track all work in GitHub Issues.

**Tech Stack:** Markdown, Perplexity Spaces, GitHub MCP, GAIA Code v3.4+

**Spec:** `skills/experts/PRD.md`

> **Tickets:** All tasks below are tracked as GitHub Issues in `carriegale2710/gaia-setup`.
> [#5 Task 1](https://github.com/carriegale2710/gaia-setup/issues/5) · [#6 Task 2](https://github.com/carriegale2710/gaia-setup/issues/6) · [#7 Task 3](https://github.com/carriegale2710/gaia-setup/issues/7) · [#8 Task 4](https://github.com/carriegale2710/gaia-setup/issues/8) · [#9 Task 5](https://github.com/carriegale2710/gaia-setup/issues/9) · [#10 Task 6](https://github.com/carriegale2710/gaia-setup/issues/10) · [#11 Task 7](https://github.com/carriegale2710/gaia-setup/issues/11) · [#12 Task 8](https://github.com/carriegale2710/gaia-setup/issues/12)

## Global Constraints

- Expert packages must be permission- and connector-agnostic.
- `PERSONALITY.md` must not override GAIA core rules, safety, or permissions.
- Skills in `shared/` must be generic enough to work in any Expert Space.
- Skill rule: if needed by 3+ Experts, move to `shared/`.
- `.gaia/` is for AI-agent coordination only — not documentation.
- No handoff folder or handoff feature.
- Evaluations are deferred; add a placeholder note only.
- All tasks tracked as GitHub Issues.

---

### Task 1: Create the shared skill group

**GitHub Issue:** [#5](https://github.com/carriegale2710/gaia-setup/issues/5)

**Files:**

- Create: `skills/experts/shared/README.md`
- Create: `skills/experts/shared/brainstorming.md` (copy from `skills/brainstorming.md`)
- Create: `skills/experts/shared/grill.md`
- Create: `skills/experts/shared/pipeline.md`
- Create: `skills/experts/shared/triage.md`
- Create: `skills/experts/shared/to-issues.md`
- Create: `skills/experts/shared/to-tickets.md`
- Create: `skills/experts/shared/write-a-plan.md`
- Create: `skills/experts/shared/research-to-issues.md`
- Create: `skills/experts/shared/find-skills.md`
- Create: `skills/experts/shared/doctor.md`

**Interfaces:**

- Consumes: existing skill files from `skills/`
- Produces: canonical shared skill library for all Expert Spaces

- [ ] **Step 1:** Create `skills/experts/shared/README.md` listing all shared skills, their purpose, and the 3-Expert rule.
- [ ] **Step 2:** Copy existing skills from `skills/` into `skills/experts/shared/`, verifying each is genuinely generic.
- [ ] **Step 3:** Review each copied skill for Expert-specific language; generalise where needed.
- [ ] **Step 4:** Commit — `feat: add shared Expert skill group`

---

### Task 2: Create Expert package templates

**GitHub Issue:** [#6](https://github.com/carriegale2710/gaia-setup/issues/6)

**Files:**

- Create: `skills/experts/templates/EXPERT.md`
- Create: `skills/experts/templates/PERSONALITY.md`
- Create: `skills/experts/templates/README.md`

**Interfaces:**

- Consumes: PRD decisions on package structure and personality model
- Produces: canonical templates used by all four Expert packages

- [ ] **Step 1:** Write `EXPERT.md` template with sections: Mission, Core responsibilities, Out of scope, Inputs, Outputs, Escalation.
- [ ] **Step 2:** Write `PERSONALITY.md` template with sections: Presence, Workstyle, Communication, Default rhythm, Avoid. Include a note that this file cannot override GAIA core rules.
- [ ] **Step 3:** Write `README.md` template with sections: Expert overview, Required Space files, Skills included, Example prompts, GitHub connector setup, Permissions note.
- [ ] **Step 4:** Commit — `feat: add Expert package templates`

---

### Task 3: Create the Product Research Expert package

**GitHub Issue:** [#7](https://github.com/carriegale2710/gaia-setup/issues/7)

**Files:**

- Create: `skills/experts/product-research/EXPERT.md`
- Create: `skills/experts/product-research/PERSONALITY.md`
- Create: `skills/experts/product-research/README.md`
- Create: `skills/experts/product-research/skills/research.md`
- Create: `skills/experts/product-research/skills/to-prd.md`
- Create: `skills/experts/product-research/skills/to-spec.md`

**Interfaces:**

- Consumes: templates from Task 2, shared skills from Task 1
- Produces: installable Product Research Expert package

- [ ] **Step 1:** Fill `EXPERT.md` — Mission: turn uncertain product questions into evidence-backed decisions. Responsibilities: market research, competitor analysis, validation, PRDs. Out of scope: production code, final design decisions, merging.
- [ ] **Step 2:** Fill `PERSONALITY.md` — Presence: thoughtful, investigative, commercially aware, constructively sceptical. Rhythm: clarify decision → identify evidence → investigate → compare → recommend.
- [ ] **Step 3:** Fill `README.md` — list shared and expert skills, example prompts, required Space files.
- [ ] **Step 4:** Copy and verify `research.md`, `to-prd.md`, `to-spec.md` into `skills/`.
- [ ] **Step 5:** Commit — `feat: add Product Research Expert package`

---

### Task 4: Create the Design + Frontend Expert package

**GitHub Issue:** [#8](https://github.com/carriegale2710/gaia-setup/issues/8)

**Files:**

- Create: `skills/experts/design-frontend/EXPERT.md`
- Create: `skills/experts/design-frontend/PERSONALITY.md`
- Create: `skills/experts/design-frontend/README.md`
- Create: `skills/experts/design-frontend/skills/frontend-design.md`
- Create: `skills/experts/design-frontend/skills/frontend-build.md`
- Create: `skills/experts/design-frontend/skills/frontend-design-reference.md`

**Interfaces:**

- Consumes: templates from Task 2, shared skills from Task 1
- Produces: installable Design + Frontend Expert package

- [ ] **Step 1:** Fill `EXPERT.md` — Mission: create interfaces that are usable, visually strong, and correctly implemented. Responsibilities: UX flows, visual design, design systems, React/Next.js implementation, visual QA. Out of scope: backend schema authority, product-market decisions, database migrations.
- [ ] **Step 2:** Fill `PERSONALITY.md` — Presence: visually opinionated, detail-oriented, user-focused, direct about quality. Rhythm: review design brief → identify user flows → design → implement → visual QA.
- [ ] **Step 3:** Fill `README.md`.
- [ ] **Step 4:** Copy and verify `frontend-design.md`, `frontend-build.md`, `frontend-design-reference.md` into `skills/`.
- [ ] **Step 5:** Commit — `feat: add Design and Frontend Expert package`

---

### Task 5: Create the Backend + QA Expert package

**GitHub Issue:** [#9](https://github.com/carriegale2710/gaia-setup/issues/9)

**Files:**

- Create: `skills/experts/backend-qa/EXPERT.md`
- Create: `skills/experts/backend-qa/PERSONALITY.md`
- Create: `skills/experts/backend-qa/README.md`
- Create: `skills/experts/backend-qa/skills/tdd.md`
- Create: `skills/experts/backend-qa/skills/diagnosing-bugs.md`
- Create: `skills/experts/backend-qa/skills/bug-fix.md`
- Create: `skills/experts/backend-qa/skills/improve-codebase-architecture.md`
- Create: `skills/experts/backend-qa/skills/caveman.md`
- Create: `skills/experts/backend-qa/skills/feature-ship.md`
- Create: `skills/experts/backend-qa/skills/pr-review.md`

**Interfaces:**

- Consumes: templates from Task 2, shared skills from Task 1
- Produces: installable Backend + QA Expert package

- [ ] **Step 1:** Fill `EXPERT.md` — Mission: build reliable, secure, and maintainable backend systems. Responsibilities: APIs, databases, authentication, integrations, testing, security review. Out of scope: product requirements, final visual design, documentation structure.
- [ ] **Step 2:** Fill `PERSONALITY.md` — Presence: rigorous, security-conscious, test-first, methodical. Rhythm: read existing code → map blast radius → write failing test → implement → verify → commit.
- [ ] **Step 3:** Fill `README.md`.
- [ ] **Step 4:** Copy and verify all skills into `skills/`.
- [ ] **Step 5:** Commit — `feat: add Backend and QA Expert package`

---

### Task 6: Create the Documentation + Writing Expert package

**GitHub Issue:** [#10](https://github.com/carriegale2710/gaia-setup/issues/10)

**Files:**

- Create: `skills/experts/documentation-writing/EXPERT.md`
- Create: `skills/experts/documentation-writing/PERSONALITY.md`
- Create: `skills/experts/documentation-writing/README.md`
- Create: `skills/experts/documentation-writing/skills/writing-for-agents.md`
- Create: `skills/experts/documentation-writing/skills/writing-great-skills.md`
- Create: `skills/experts/documentation-writing/skills/write-a-skill.md`
- Create: `skills/experts/documentation-writing/skills/writing-skills.md`

**Interfaces:**

- Consumes: templates from Task 2, shared skills from Task 1
- Produces: installable Documentation + Writing Expert package

- [ ] **Step 1:** Fill `EXPERT.md` — Mission: make projects understandable, maintainable, and well-documented. Responsibilities: READMEs, API docs, ADRs, agent instructions, skill writing, `.gaia/` maintenance, `docs/` structure. Out of scope: production code decisions, visual design, database architecture.
- [ ] **Step 2:** Fill `PERSONALITY.md` — Presence: clear, structured, precise, reader-focused. Rhythm: understand the audience → identify gaps → organise → write → review for clarity.
- [ ] **Step 3:** Fill `README.md`.
- [ ] **Step 4:** Copy and verify all skills into `skills/`.
- [ ] **Step 5:** Commit — `feat: add Documentation and Writing Expert package`

---

### Task 7: Create the `.gaia/` project template

**GitHub Issue:** [#11](https://github.com/carriegale2710/gaia-setup/issues/11)

**Files:**

- Create: `skills/experts/project-template/.gaia/README.md`
- Create: `skills/experts/project-template/.gaia/PROJECT.md`
- Create: `skills/experts/project-template/.gaia/MEMORY.md`
- Create: `skills/experts/project-template/.gaia/DECISIONS.md`
- Create: `skills/experts/project-template/.gaia/EXPERTS.md`

**Interfaces:**

- Consumes: all Expert definitions from Tasks 3–6
- Produces: reusable `.gaia/` folder template for any new project

- [ ] **Step 1:** Write `.gaia/README.md` — coordination protocol: which Expert handles which domain, how to read shared state, how to create GitHub Issues, how to update memory and decisions.
- [ ] **Step 2:** Write `.gaia/PROJECT.md` — template with sections: Product, Target users, Current stage, Stack, Repository conventions, Deployment environment, Constraints, Non-goals.
- [ ] **Step 3:** Write `.gaia/MEMORY.md` — template with Expert-owned sections: `## Product Research Expert`, `## Design + Frontend Expert`, `## Backend + QA Expert`, `## Documentation + Writing Expert`.
- [ ] **Step 4:** Write `.gaia/DECISIONS.md` — template with Expert-owned sections and a decision record format: Decision, Date, Expert, Reason, Alternatives considered, Consequences.
- [ ] **Step 5:** Write `.gaia/EXPERTS.md` — table of active Experts, their Space name, domain, and status.
- [ ] **Step 6:** Commit — `feat: add .gaia project coordination template`

---

### Task 8: Write the Expert system README

**GitHub Issue:** [#12](https://github.com/carriegale2710/gaia-setup/issues/12)

**Files:**

- Create: `skills/experts/README.md`

**Interfaces:**

- Consumes: all tasks above
- Produces: top-level guide for the Expert system

- [ ] **Step 1:** Write overview: what the Expert system is, why it exists, and how it fits into GAIA Code.
- [ ] **Step 2:** List the four Expert packages with one-line descriptions.
- [ ] **Step 3:** Explain shared skills and the 3-Expert rule.
- [ ] **Step 4:** Explain the `.gaia/` project folder and GitHub Issues coordination.
- [ ] **Step 5:** Write setup instructions: how to install an Expert into a Perplexity Space.
- [ ] **Step 6:** Add a deferred work section noting evaluations, automated distribution, and additional Experts.
- [ ] **Step 7:** Commit — `docs: add Expert system top-level README`

---

## Deferred Work

- Evaluation prompts and regression suites for each Expert.
- Quality thresholds and release gates.
- Automated skill versioning and distribution.
- Automatic cross-Space orchestration.
- Additional specialist Experts: QA standalone, DevOps, Security.
- Multi-user or team Space configurations.
