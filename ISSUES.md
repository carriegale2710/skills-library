# Issues

Audit of how the skills library is organised. Recorded 2026-11-02.

Overall: the layering (experts / superpowers / workflows / orchestrators) is sound and `AGENTS.md` is tight. The main problem is drift — the READMEs no longer match what is on disk, and the library has grown faster than it has been pruned.

## 1. Broken or out of sync (fix first)

### Broken links
- [ ] Root `README.md` links to `WORKFLOWS.md` and `skills.md` — neither exists. Workflows live in `skills/workflows/`.
- [ ] Root `README.md` and `CLAUDE.md` use vault-relative paths (`Projects/skills-library/AGENTS.md` etc.) that break on GitHub. Use repo-relative paths.
- [ ] `docs/references/workflows-vs-orchestrators.md` is linked at three different wrong paths:
  - root `README.md` → `workflows-vs-orchestrators.md`
  - `skills/orchestrators/README.md` → `../workflows-vs-orchestrators.md`
  - `skills/workflows/README.md` → `../../docs/workflows-vs-orchestrators.md`
- [ ] `skills/workflows/README.md` references `SKILL-GUIDE.md`, which does not exist.

### Indexes don't match folders
- [ ] `skills/experts/README.md` names bundles `founder-strategist` and `marketing-sales`; the folders are `founder/` and `marketing/`.
- [ ] `skills/experts/README.md` developer row is missing `caveman`, `changelog`, `commit-message`, `devlog`, `triage`, `update-docs`.
- [ ] `skills/superpowers/README.md` lists `teach` (does not exist) and omits `simplify` and `summarize` (do exist).
- [ ] Root `README.md` describes a "standalone skills" layer with no matching folder.

### Empty or stub content
- [ ] `skills/experts/designer/frontend-design/SKILL.md` is 0 bytes. Fill or delete.
- [ ] `skills/superpowers/loop/workflows/` is an empty folder.
- [ ] `skills/orchestrators/` contains only a README — no skills.

### Stale text
- [ ] `.gaia/README.md` describes itself as the `.agents/gaia` folder; the folder is `.gaia/`.

## 2. Duplication

- [ ] `triage` exists in both `experts/developer/` and `experts/product-manager/` — byte-identical. Keep one.
- [ ] `caveman` exists in both `superpowers/` and `experts/developer/` — differ only by one Copilot metadata line. Keep one (superpowers fits better).
- [ ] `writing-for-agents.md` is copied into four skills' `references/` (`handoff`, `write-a-plan`, `write-a-reference`, `write-a-skill`). One copy has already drifted (11037 vs 11017 bytes). Keep one copy in `docs/references/` and link to it.
- [ ] `product-manager` has six overlapping spec/ticket skills: `to-issues`, `to-tickets`, `to-prd`, `to-spec`, `product-spec`, `project-spec`. `to-issues` and `to-tickets` both break a plan into tracer-bullet issues. Consolidate to about two: one spec skill, one tickets skill.
- [ ] `resume-writer` has 19 skills, 8 of them `resume-*`. `resume-bullet-writer`, `resume-quantifier`, `resume-section-builder`, `resume-formatter` and `resume-ats-optimizer` could become one `resume` skill with a `references/` folder.

## 3. Structure

- [ ] **Fuzzy category boundaries.** `superpowers/pipeline` is a workflow; `superpowers/wayfinder` is close to an orchestrator; `developer/caveman` is general-purpose, not role-specific. Rule: if a skill calls other skills, it belongs in workflows or orchestrators.
- [ ] **Workflows and orchestrators are mostly theory.** About 5–6 KB of README each, two skills between them. Either shrink each README to a paragraph, or merge both into one `flows/` folder until there are five or more real examples.
- [ ] **Two folder layouts.** Book-based skills (`lean-startup`, `traction`, `storybrand`, etc.) keep `cases.md`, `examples.md`, `frameworks.md` and `integration.md` at the skill root. Everything else uses `references/`. Pick one — `references/` matches the usual SKILL.md convention.
- [ ] **Naming.** `plg-skill` and `script-writer-skill` repeat "skill". Rename to `plg` and `video-script`.
- [ ] **Scale hurts routing.** About 140 skills, and `AGENTS.md` routes by matching `description` fields. Overlapping descriptions (two `triage`s, six spec skills) will cause wrong picks. Fewer skills with sharper descriptions beat any folder reshuffle.

## Quick wins (in order)

1. Fix links and regenerate the README indexes from disk. A small script that builds the tables from SKILL.md frontmatter would stop future drift.
2. Delete the duplicate `triage` and `caveman`; keep one shared `writing-for-agents.md`.
3. Fill or delete `frontend-design`; remove the empty `loop/workflows/` folder.
4. Merge the spec/ticket skills and the resume skills.
