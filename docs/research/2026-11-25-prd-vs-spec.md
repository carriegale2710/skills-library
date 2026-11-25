# PRD vs spec: where product managers draw the line

**Date:** 2026-11-25
**Question:** How do product managers distinguish a PRD from a spec, and how should `to-prd` differ from `to-spec`?

## Verdict

PRD = **what and why**, from the user's side. Spec = **how**, from the builder's side. The PRD comes first and feeds the spec. Every source below that separates the two puts implementation detail in the spec and keeps it out of the PRD.

## Findings

| Source | PRD / requirements side | Spec / design side |
| --- | --- | --- |
| Productboard | PRD "defines *what* you're building and *why* it matters" and "describes features and functionality without prescribing technical implementation". Over-specifying the PRD is listed as a common mistake. | Product spec "defines *how* to build the solution described in the PRD". Also called a technical specification. Covers architecture, API specs, data schemas, error handling and edge cases. |
| Joel Spolsky | Functional spec: "how a product will work entirely from the user's perspective". It "doesn't care how the thing is implemented". Sections: overview, scenarios, nongoals, details, open issues. | Technical spec: "describes the internal implementation of the program". |
| Malte Ubl (Design Docs at Google) | Not covered. The design doc explicitly says "This isn't a requirements doc". | Design doc sections: context and scope, goals and non-goals, the design, alternatives considered, cross-cutting concerns. Rarely includes code. |
| Marty Cagan (SVPG) | "PRD's are *not* inherently bad", but the failure mode is writing one "*instead* *of* the product discovery work, rather than after". | Not covered. |
| mattpocock/skills `to-spec` | Starts with Problem Statement, Solution and User Stories. | Then Implementation Decisions (modules, interfaces, schema, API contracts) and Testing Decisions (seams, prior art). It forbids file paths and code snippets. |

Sources:
- [Productboard: PRD vs product spec](https://www.productboard.com/glossary/prd-vs-product-spec/)
- [Joel Spolsky: Painless Functional Specifications, Part 2](https://www.joelonsoftware.com/2000/10/03/painless-functional-specifications-part-2-whats-a-spec/)
- [Malte Ubl: Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/)
- [SVPG: Discovery vs. Documentation](https://www.svpg.com/discovery-vs-documentation/)
- [mattpocock/skills: to-spec SKILL.md](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md)

## Consensus PRD contents

**Fact (Productboard, Spolsky):**

- Problem and user context
- Goals and success metrics
- User stories or scenarios
- Functional requirements, written as behaviour the user can observe
- Acceptance criteria
- Non-goals and out of scope
- Assumptions, dependencies and open questions

**Fact (Productboard, Spolsky, Ubl):** a PRD leaves out architecture, modules, schemas, API contracts and test strategy. Those belong in the spec.

## Implication for this repo

**Inference:** the local `to-spec` is a copy of Pocock's template, which is a hybrid. It starts with PRD material (problem, solution, stories) and then adds the spec. Upstream mirrors still list the same template under the old name `to-prd` (see [skills.sh mirror](https://www.skills.sh/mattpocock/skills/to-prd)). A clean `to-prd` therefore takes the user-side half and adds what `to-spec` lacks: success metrics, acceptance criteria, assumptions and open questions. It drops the implementation and testing half.

| | `to-prd` | `to-spec` |
| --- | --- | --- |
| Answers | What and why | How |
| Reader | Stakeholders and the builder | The builder or an agent |
| Codebase exploration | No | Yes (modules, seams, ADRs) |
| Unique sections | Goals and success metrics, requirements, acceptance criteria, assumptions, open questions | Implementation Decisions, Testing Decisions |
| Order in pipeline | First | Second, reads the PRD |

## Open questions

- Atlassian's PRD guide could not be read: the fetch returned only site navigation, so it is not cited.
- ~~Should `to-spec` drop its Problem, Solution and User Stories sections and link the PRD instead?~~ Done 2026-11-25: `to-spec` now links the PRD and keeps only the how.
