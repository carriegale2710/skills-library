# Onboarding guide reference

**Reader:** a capable newcomer with zero local context. Goal: productive (first PR merged) fast, without interrupting people for things a doc could answer.

## Must have

- Day 1 checklist: access requests have lead time, so they go first.
- Setup that works on a clean machine, with expected output and known failures.
- A map of the systems and how they connect (short; link architecture docs).
- Walkthrough of the first real task (usually shipping a small change end to end).
- Who to ask for what.
- Glossary of internal jargon and acronyms.

## Quality checklist

- [ ] Setup steps tested from scratch recently (note the date).
- [ ] Every access request says *how* to request it and who approves.
- [ ] No secrets in the doc; says where to get them.
- [ ] Every acronym used appears in the glossary.
- [ ] Contacts are roles/channels where possible (people leave).
- [ ] Deeper docs linked, not duplicated.
- [ ] Ends with concrete first tasks.

## Anti-patterns

| Avoid | Do instead |
|---|---|
| Company history and values up front | What you'll do + Day 1 checklist first |
| "Ask around for access" | Named request process per system |
| Setup that assumes tools already installed | List tools + versions up front |
| Wall of links with no order | Ordered path: read this, then this |
| Written once, never updated | Last newcomer task: fix what tripped you up |

## Good example (excerpt)

```markdown
| Symptom | Fix |
|---|---|
| `ECONNREFUSED 5432` on `npm run dev` | Postgres not running: `docker compose up -d db` |
```

Why it works: the exact error a newcomer will search for, with a one-line fix.
