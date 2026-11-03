# Issues

## 3. Structure

- [ ] **Fuzzy category boundaries.** `superpowers/pipeline` is a workflow; `superpowers/wayfinder` is close to an orchestrator; `developer/caveman` is general-purpose, not role-specific. Rule: if a skill calls other skills, it belongs in workflows or orchestrators.
- [ ] **Workflows and orchestrators are mostly theory.** About 5–6 KB of README each, two skills between them. Either shrink each README to a paragraph, or merge both into one `flows/` folder until there are five or more real examples.
- [x] **Two folder layouts.** Book-based skills (`lean-startup`, `traction`, `storybrand`, etc.) keep `cases.md`, `examples.md`, `frameworks.md` and `integration.md` at the skill root. Everything else uses `references/`. Pick one — `references/` matches the usual SKILL.md convention.
