---
name: reuse-first
description: Finds existing free or cheap tools, templates, and services before custom work is proposed. Use when scoping an MVP feature, spec, PRD, design component, business or marketing plan, or ops workflow, or when asked "build vs buy", "what tool should I use", or "does this already exist".
---

# Reuse-First Research

Default: **most of this already exists.**

Core question: is this a differentiator or commodity plumbing?

## Quick start

1. Collect inputs (below). Missing ones become `ASSUMPTION`s for quick brainstorms.
2. Walk the search order; stop at the first credible path meeting the definition of done.
3. Pick one verdict, verify claims, and answer using `references/output-templates.md`.

## Inputs

Ask for missing items in one message. Do not repeat questions.

- Job to be done (outcome, not feature name)
- Current workflow
- Definition of done / MVP scope
- Constraints: budget, deadline, stack, no-code, self-hosting, privacy, accessibility, data residency
- Scale at 3 / 12 / 24 months
- Differentiation: core to customer choice?
- Geography, if relevant

## Search order

1. Existing platform feature / integration
2. Free or low-cost SaaS
3. Open source / self-hosted
4. API / managed service
5. Template or asset: Figma, Notion, UI kit, legal, email, landing page
6. No-code / low-code / automation
7. Manual, concierge, spreadsheet, or VA workflow
8. Custom build

## Verdicts

Return exactly one:

| Verdict        | Rule                                                                  |
| -------------- | --------------------------------------------------------------------- |
| `DO_NOTHING`   | Unvalidated, low value, or manual process suffices                    |
| `REUSE`        | Existing tool meets requirement at acceptable cost/risk               |
| `CONFIGURE`    | Existing tool works after setup/integration/templates                 |
| `BUILD_THIN`   | Existing services plus small custom glue                              |
| `BUILD_CUSTOM` | Validated differentiator, hard constraint, or no viable existing path |

Default to reuse for: auth, payments, invoicing, email/SMS, file storage, CRUD admin, search, analytics, scheduling, forms, CRM, support, landing pages, standard onboarding.

Build custom only if >=2:

- Users choose the product for this capability
- Existing tools cannot support a repeated workflow
- Vendor pricing harms unit economics
- Compliance/security/data-residency makes vendor use unacceptable
- Platform constraints dominate user value

## Evidence

- Verify tools against current vendor docs, pricing, changelog, or integration docs.
- Label claims: `VERIFIED_PRIMARY`, `SECONDARY_ONLY`, `INFERENCE`, `UNKNOWN`.
- Include date checked; flag sources older than 12 months as potentially stale.
- Never estimate price, limits, integrations, or availability; use `UNKNOWN`.
- Prefer fewer verified options.
- If none viable: `NO_VIABLE_EXISTING_SOLUTION` + what was searched.

## Output

Use the templates in `references/output-templates.md`: decision block, shortlist (max 5), recommended path, costs, risks/exit, sources.

Load-bearing recommendations (store data, handle money, touch customers, run operations) also need a validation plan with a proven exit path. A vendor demo, docs claim, or free-tier signup is not validation.

## Australia checks

If Australian users, data, or transactions, verify as constraints, not reasons to build:

- Data residency, if required
- Privacy Act / APPs relevance
- GST-compliant invoicing for payments
- AUD pricing/payment support
- Accessibility for public-facing products

## PRD mode

For PRDs/specs/user stories, read `references/use-prd.md`.

## Anti-patterns

- Tool list without verdict
- Enterprise tools for MVP
- "Has API" != "fits workflow"
- Ignoring export/migration
- Custom auth/payments/email/CRUD/storage by default
- Fabricated pricing/integrations/limits
- Generic advice when a named path is possible
- Picking the most popular tool over the cheapest acceptable one

## Invocation

```text
Use reuse-first.

Need: [outcome]
Context: [stack, budget, deadline, constraints]
PRD: [paste/attach, optional]

Find shortest credible path. Challenge premature implementation choices.
Return verdict, shortlist, implementation path, validation plan, costs, risks, sources.
```
