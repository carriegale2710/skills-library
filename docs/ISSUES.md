# Issues

## 3. Structure

- [ ] **Fuzzy category boundaries.** `superpowers/pipeline` is a workflow; `superpowers/wayfinder` is close to an orchestrator; `developer/caveman` is general-purpose, not role-specific. Rule: if a skill calls other skills, it belongs in workflows or orchestrators.
- [x] **Workflows and orchestrators are mostly theory.** About 5–6 KB of README each, two skills between them. Either shrink each README to a paragraph, or merge both into one `flows/` folder until there are five or more real examples.
- [ ] no skills for curating sets of skills into plugins.
