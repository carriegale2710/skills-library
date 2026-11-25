# Writing skill descriptions that get invoked

Date: 2026-11-25. Sources: official Claude docs only.

## Rules (with source)

| Rule | Source |
|---|---|
| `description` is what Claude matches the request against; must say **what** the skill does **and when** to use it | [overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [best-practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) |
| Max 1,024 chars, non-empty, no XML tags (API spec) | overview, best-practices |
| Write in **third person** ("Processes X"), not "I can" / "You can". Description is injected into the system prompt; mixed point of view hurts discovery | best-practices |
| Be specific, include key terms and "Use when..." triggers. Vague ("Helps with documents") loses to specific among 100+ skills | best-practices |
| Claude Code listing truncates `description` + `when_to_use` at **1,536 chars**; "put the key use case first" | [Claude Code skills](https://code.claude.com/docs/en/skills) (summary, not verbatim) |
| `when_to_use` frontmatter field appends trigger phrases/example requests; shares the 1,536 cap | Claude Code skills (summary) |
| Listing budget = 1% of context window. Overflow drops descriptions of least-used skills first, so keywords vanish | Claude Code skills (summary) |
| Not triggering: add keywords users naturally say; ask "What skills are available?"; rephrase to match; test `/skill-name` | Claude Code skills (summary) |
| Triggers too often: make description more specific, or `disable-model-invocation: true` | Claude Code skills (summary) |
| Diagnostics: `/doctor` (listing cost), `/skill-doctor` (never-invoked skills, v2.1.252+), `/reload-skills` | Claude Code skills (summary) |

## Verbatim good examples

- "Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction."
- "Summarizes uncommitted changes and flags anything risky. Use when the user asks what changed, wants a commit message, or asks to review their diff."

## Template

`<Verb-led what, third person>. Use when <situations>, e.g. "<phrases users say>". Not for <neighbour> (use <skill>).`

## Caveats

- Claude Code page was only partly read verbatim; 1,536 cap, front-loading, `when_to_use`, budget rows come from a summary. Verify against the live page before relying on exact wording.
- Docs give no guidance on "pushy" phrasing or negative ("Not for") clauses; those are repo convention, not doc-backed.
- 1,024 (API) vs 1,536 (Claude Code listing): keep under 1,024 to satisfy both.

## Applied

`clarify-intent` and `artifact-critique` descriptions in `plugins/productivity/skills/`: third person, verb-first what, key trigger in first ~150 chars, kept under 1,024.
