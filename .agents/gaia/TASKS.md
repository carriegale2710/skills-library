# Tasks: Backlog for improving Skills for README doc writing

> Read `PLAN.md` first before this file.

---

## Task 1: Download `readme-craft` skill

**Files:**

- Create: `output/readme-craft.md`

**Interfaces:**

- Produces: skill file consumed by Tasks 3, 4, 5

- [ ] **Step 1:** Use `get_file_contents` on `okht/readme-craft` → `skills/readme-craft/SKILL.md`
- [ ] **Step 2:** Write raw content to `output/readme-craft.md` via `execute_code`
- [ ] **Step 3:** Confirm file appears in `output/` listing
- [ ] **Step 4:** Tell user to download and upload to this Space, then call with `/readme-craft`

---

## Task 2: Download `github-readme-skill` (save as `readme`)

**Files:**

- Create: `output/readme.md`

**Interfaces:**

- Produces: skill file consumed by Tasks 3, 4, 5

- [ ] **Step 1:** Use `get_file_contents` on `Windrunner20/github-readme-skill` → `skills/github-readme/SKILL.md`
- [ ] **Step 2:** Write raw content to `output/readme.md` via `execute_code`
- [ ] **Step 3:** Confirm file appears in `output/` listing
- [ ] **Step 4:** Tell user to download and upload to this Space, then call with `/readme`

---

## Task 3: Audit all four skill files with `/writing-for-agents`

**Files:**

- Read: `output/readme.md`, `output/readme-craft.md`, `output/human-writing.md`, `output/progressive-disclosure.md`
- Produces: audit report in chat (no separate file needed unless findings are extensive)

**Interfaces:**

- Consumes: all four skill files from Tasks 1, 2 and prior downloads
- Produces: per-skill audit findings consumed by Task 5

Audit criteria (from `writing-for-agents.md`):

- Description pointer: front-loaded, branches enumerated, no identity the body already carries
- Steps vs reference separation: in-file steps clearly ordered, reference disclosed where possible
- Completion criteria: checkable and exhaustive per step
- Leading words: identify consolidation opportunities
- Negation: replace prohibitions with positive targets
- Pruning: no-ops, duplication, sediment, cache lines identified

- [ ] **Step 1:** Load each skill file into context
- [ ] **Step 2:** Run `/writing-for-agents` audit against `readme.md` — report findings
- [ ] **Step 3:** Run `/writing-for-agents` audit against `readme-craft.md` — report findings
- [ ] **Step 4:** Run `/writing-for-agents` audit against `human-writing.md` — report findings
- [ ] **Step 5:** Run `/writing-for-agents` audit against `progressive-disclosure.md` — report findings
- [ ] **Step 6:** Summarise cross-skill patterns (shared weaknesses, standout strengths)

---

## Task 4: Produce example READMEs — one per README skill

**Files:**

- Create: `output/example-readme-from-readme-skill.md`
- Create: `output/example-readme-from-readme-craft-skill.md`

**Interfaces:**

- Consumes: `output/readme.md`, `output/readme-craft.md` (the two skills)
- Produces: two side-by-side README examples for user comparison

Target project for the demo: a fictional but plausible micro-SaaS Next.js + Supabase tool (fits the user's stack).

- [ ] **Step 1:** Define shared fictional project spec (name, stack, one-liner, quick start command, success signal)
- [ ] **Step 2:** Apply `/readme` skill workflow to generate `output/example-readme-from-readme-skill.md`
- [ ] **Step 3:** Apply `/readme-craft` skill workflow to generate `output/example-readme-from-readme-craft-skill.md`
- [ ] **Step 4:** Present both to user in chat side-by-side with a brief diff commentary (tone, structure, visual approach)

---

## Task 5: Write personalised GAIA-context descriptions for all four skills

**Files:**

- Produces: updated frontmatter `description:` strings shown in chat for user to copy-paste into each uploaded skill file

**Interfaces:**

- Consumes: audit findings from Task 3; skill body content from Tasks 1–2 and prior downloads

Personalisation axes:

- GAIA Code + Perplexity Space invocation context (slash-command routing)
- Solo dev / micro-SaaS portfolio projects (Next.js, Supabase, Flask, Tailwind)
- Recruiter-facing and open-source README use cases
- GAIA workflow triggers (when would the user reach for this vs another skill)

- [ ] **Step 1:** Draft new `description:` for `readme` — tighten trigger branches, add GAIA/portfolio context
- [ ] **Step 2:** Draft new `description:` for `readme-craft` — distinguish from `readme`, add localization/visual-audit trigger
- [ ] **Step 3:** Draft new `description:` for `human-writing` — add AI-prose-removal and PR description use cases relevant to solo dev
- [ ] **Step 4:** Draft new `description:` for `progressive-disclosure` — add README layering + onboarding doc use case
- [ ] **Step 5:** Present all four as a copyable block; note which line to replace in each skill file

---

## Execution Handoff

Run tasks in order — each task's output is a hard dependency for the next.

**Recommended:** Say `execute task 1` (or `run all tasks`) and GAIA will work through the backlog sequentially, pausing for your review between tasks.
