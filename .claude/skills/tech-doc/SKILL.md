---
name: tech-doc
description: Write and maintain technical documentation. Trigger with "write docs for", "document this", "create a README", "write a runbook", "onboarding guide", or when the user needs help with any form of technical writing — API docs, architecture docs, or operational runbooks.
---

# Technical Documentation

Write clear, maintainable technical documentation for different audiences and purposes.

## Workflow

1. Pick create vs update and the type with the decision tree below.
2. Read its reference: `references/<type>.md` (reader, must-haves, checklist, anti-patterns).
3. New doc: start from `templates/<type>.md`. Fill every `<placeholder>`; delete optional sections that don't apply and all `<!-- guidance -->` comments. Update: edit the existing doc in place, keep its structure, fix only what is stale or missing.
4. Pull facts from the code (commands, env vars, endpoints, services), not memory.
5. Run the reference's quality checklist before handing over.

| Type | Reference | Template |
|---|---|---|
| README | [references/readme.md](references/readme.md) | [templates/readme.md](templates/readme.md) |
| API | [references/api.md](references/api.md) | [templates/api.md](templates/api.md) |
| Runbook | [references/runbook.md](references/runbook.md) | [templates/runbook.md](templates/runbook.md) |
| Architecture | [references/architecture.md](references/architecture.md) | [templates/architecture.md](templates/architecture.md) |
| Onboarding | [references/onboarding.md](references/onboarding.md) | [templates/onboarding.md](templates/onboarding.md) |

## Decision Tree

```
Search first: README, docs/, wiki, runbooks/ for a doc with the same reader + job.
├─ Found, accurate        → link to it. Write nothing.
├─ Found, stale/partial   → update it in place. No new sibling doc.
└─ None → who reads it, and when?
   ├─ Anyone landing on the repo/package     → README
   ├─ Developer calling the interface        → API
   ├─ On-call, mid-incident or ops task      → Runbook
   ├─ Engineer changing/reviewing the design → Architecture
   └─ New team member, first weeks           → Onboarding
Fits two? Write the narrower doc; link it from the broader one.
Fits none? Not a type here (e.g. changelog, decision record): use that skill or ask.
```

## Document Types

### README
- What this is and why it exists
- Quick start (< 5 minutes to first success)
- Configuration and usage
- Contributing guide

### API Documentation
- Endpoint reference with request/response examples
- Authentication and error codes
- Rate limits and pagination
- SDK examples

### Runbook
- When to use this runbook
- Prerequisites and access needed
- Step-by-step procedure
- Rollback steps
- Escalation path

### Architecture Doc
- Context and goals
- High-level design with diagrams
- Key decisions and trade-offs
- Data flow and integration points

### Onboarding Guide
- Environment setup
- Key systems and how they connect
- Common tasks with walkthroughs
- Who to ask for what

## Principles

1. **Write for the reader** — Who is reading this and what do they need?
2. **Start with the most useful information** — Don't bury the lede
3. **Show, don't tell** — Code examples, commands, screenshots
4. **Keep it current** — Outdated docs are worse than no docs
5. **Link, don't duplicate** — Reference other docs instead of copying
