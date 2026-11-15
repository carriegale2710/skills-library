# Reuse-First Output Templates

## Decision

```yaml
verdict: REUSE | CONFIGURE | BUILD_THIN | BUILD_CUSTOM | DO_NOTHING
confidence: HIGH | MEDIUM | LOW
primary_recommendation: "<tool/approach>"
why: "<2-4 sentences tied to inputs>"
second_best: "<alternative + condition making it better>"
custom_scope: "<irreducible custom work | None>"
recheck_before_commitment: "<pricing/limits/integrations/compliance facts>"
prd_mode: NONE | PRD_PROVIDED | PRD_CREATED
validation_required: SPIKE | PILOT | NONE
validation_duration: "<timebox>"
```

## Shortlist

Max 5, ranked by speed-to-value.

| Option | Replaces | Cost/free tier | Setup | Risk | Evidence |
| ------ | -------- | -------------- | ----- | ---- | -------- |

## Recommended path

- Tool/combination
- Numbered setup steps
- Time estimate and verification per step
- Remaining manual/custom work

## Validation before commitment

Required when the recommendation stores data, handles money, touches customers, or becomes operationally load-bearing.

```yaml
validation_type: SPIKE | PILOT | NONE
duration: "<hours/days/weeks>"
test_with: "<real data, sandbox, or pilot users>"
owner: "<who confirms result>"
success_criteria:
  - "<specific measurable pass/fail test>"
fail_criteria:
  - "<condition that stops adoption>"
exit_plan:
  - "<data export / revert / replacement path>"
```

Test the top 1-3 real workflows: end-to-end user flow, integrations, permissions, failure/recovery, export/migration, cost at MVP scale, and AU privacy/data-residency/GST where relevant.

| Result                     | Action                                      |
| -------------------------- | ------------------------------------------- |
| All success criteria pass  | Proceed                                     |
| Non-critical criteria fail | Proceed with documented workaround or defer |
| Critical criterion fails   | Stop; test second-best or reconsider build  |
| Exit path unproven         | Do not commit customer/business data        |

A vendor demo, docs claim, or free-tier signup is not validation.

## Costs

| Scale               | Monthly cost | Notes |
| ------------------- | -----------: | ----- |
| MVP                 |              |       |
| 100 users/records   |              |       |
| 1,000 users/records |              |       |

Use `UNKNOWN` where unverified.

## Risks / exit

Lock-in, data export, privacy/security/compliance, cost cliffs, replacement trigger.

## Sources

`Name | URL | Date checked | Claim | Evidence label`

## Examples

**Auth** — Input: "Need login." Output: `REUSE`; Supabase Auth/Clerk/Auth0/Firebase; ask stack, SSO, data residency if unknown; custom scope `None`.

**AI contract review** — Input: "AI review of Australian construction contracts." Output: likely `BUILD_THIN`; reuse LLM API, parser, storage, auth; custom: domain rules, evaluation, review workflow, audit trail, human review.

**Lean Canvas** — Input: "Need lean canvas." Output: `REUSE`; template + riskiest assumption + cheapest test; no full business plan unless asked.
