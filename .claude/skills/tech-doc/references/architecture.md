# Architecture doc reference

**Reader:** an engineer about to change the system, or a reviewer judging a design. Needs the shape of the system and *why* it's that shape, so they don't undo a deliberate choice.

## Must have

- Summary a reader can absorb in 30 seconds.
- Goals **and non-goals**.
- One diagram of components and connections (Mermaid preferred: lives in the repo, diffs cleanly, renders on GitHub).
- Component table: responsibility and data ownership.
- The key flows walked end to end.
- Decisions with rejected alternatives and the trade-off accepted.

## Quality checklist

- [ ] Diagram matches the code (service names, stores, queues).
- [ ] Every box in the diagram appears in the component table, and vice versa.
- [ ] Each decision names what was given up, not just what was gained.
- [ ] Failure behaviour stated for each external integration.
- [ ] Non-goals present, so scope creep is visible.
- [ ] Status and last-updated date set; superseded docs link to the replacement.
- [ ] Fast-changing detail (configs, field lists) linked, not copied.

## Anti-patterns

| Avoid | Do instead |
|---|---|
| Diagram with no explanation | Component table + flow walkthrough |
| "We chose Postgres because it's good" | "Postgres over DynamoDB: relational reporting queries; accepted manual sharding later" |
| Describing every class/file | Stay at component level; link code |
| Only the happy path | Failure behaviour per integration |
| Image-only diagrams | Mermaid source |

## Good example (excerpt)

```markdown
| Decision | Chosen | Rejected | Why (and cost accepted) |
|---|---|---|---|
| Job queue | Postgres `SKIP LOCKED` | Redis/BullMQ | One less service to run; fine to ~50 jobs/s, revisit above |
```
