# Token Audit — {target} — {YYYY-MM-DD}

Tag every claim: **[M]** measured, **[I]** inferred, **[A]** assumed.

## 1. Scope and method

- **Audited:** {files, skills, connectors, tasks, sessions — with counts}
- **Not audited:** {what was skipped and why}
- **Token estimate method:** chars / 4
- **Prices used:** {model, input/output per 1M, source and date}
- **Assumptions:** {each one, one line}

## 2. Baseline

| Load type                                                  | Tokens | Share |
| ---------------------------------------------------------- | ------ | ----- |
| Always loaded (descriptions, instruction files, MCP tools) | {n}    | {%}   |
| Loaded on trigger (skill bodies)                           | {n}    | {%}   |
| On demand (references)                                     | {n}    | {%}   |
| Recurring tasks, per day                                   | {n}    | {%}   |

**Daily burn:** {n} tokens ≈ ${x}/day ≈ ${y}/month [M|I]

## 3. Findings

Sort by estimated daily savings, highest first. Use one block per finding.

### F{n} — {short title} — {High | Moderate}

- **Where:** `{path}` {line range or size}
- **Waste class:** {dead | redundant | stale | vanity}
- **Evidence:** {measured size, repeat count, or transcript quote} [M|I|A]
- **Fix:** {concrete rewrite, removal, or move}
- **Savings:** {tokens/run} × {runs/day} = {tokens/day} ≈ ${x}/month
- **Quality risk:** {Low | Medium | High} — {why}. Check: {how to verify, e.g. 3-5 before/after samples}
- **Effort:** {minutes or hours}

## 4. Efficient components

| Component | Size     | Why it passes |
| --------- | -------- | ------------- |
| `{path}`  | {tokens} | {reason}      |

## 5. Informational (not fixable)

{Non-filterable overhead such as built-in `mcp__claude_ai_*` connectors, with token cost each.}

## 6. Ranked actions

| #   | Action   | Finding | Saves/day | Effort | Risk    |
| --- | -------- | ------- | --------- | ------ | ------- |
| 1   | {action} | F{n}    | {tokens}  | {time} | {L/M/H} |

**Quick wins:** {numbers}. **Larger changes:** {numbers}.

**Total if all applied:** {tokens/day} ({%} of baseline) [I]

## 7. Unknowns

| Gap   | Effect on conclusions | Smallest step to close it |
| ----- | --------------------- | ------------------------- |
| {gap} | {effect}              | {step}                    |

## 8. Decisions needed

{Changes that need the user's approval. Nothing here has been applied.}
