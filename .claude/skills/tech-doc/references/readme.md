# README reference

**Reader:** someone deciding whether to use the project, then trying to get it running. Answer "what is this?" in 10 seconds and "does it work?" in 5 minutes.

## Must have

- One-line description at the top: what + for whom. No marketing.
- Quick start that works copy-pasted on a clean machine, with expected output.
- Requirements stated before the reader hits an error.
- Every config option the user must set, in a table.

## Optional — include only if true for this project

- Project structure (multi-package or non-obvious layout).
- Contributing (open-source or team repo). Link out if > 10 lines.
- Badges (max 3–4, only ones that carry signal).
- Screenshots/GIF (UI projects).

## Quality checklist

- [ ] First paragraph says what it is without jargon.
- [ ] Quick start commands verified against current code (scripts, package names, ports).
- [ ] Expected output shown for the first run.
- [ ] No step depends on knowledge not in the README or linked docs.
- [ ] Config table matches actual env vars / options in code.
- [ ] Deep content (API, architecture) linked, not inlined.
- [ ] No placeholder text or TODOs left.

## Anti-patterns

| Avoid | Do instead |
|---|---|
| "X is a blazing-fast, modern, powerful…" | State what it does and the concrete benefit |
| History/motivation essay before install | Quick start first; background later or linked |
| `npm install` then silence | Show the next command and what success looks like |
| Full API reference in README | Link to API docs |
| Stale commands from an old version | Verify every command against the repo |

## Good example (excerpt)

````markdown
# invoicer

CLI that turns a CSV of hours into PDF invoices. For freelancers billing by the hour.

## Quick start

```bash
npx invoicer hours.csv --client acme
```

Writes `invoices/acme-2026-11.pdf`.
````

Why it works: what, who, one command, concrete result.
