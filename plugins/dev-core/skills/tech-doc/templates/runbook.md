# Runbook: <task or incident name>

| | |
|---|---|
| **Use when** | <trigger: alert name, symptom, or scheduled task> |
| **Severity / urgency** | <e.g. SEV2, fix within 1h> |
| **Time to complete** | <estimate> |
| **Owner** | <team/person> |
| **Last verified** | <YYYY-MM-DD> |

## Do NOT use when

- <look-alike situation and which runbook to use instead>

## Prerequisites

- [ ] Access: <system, role, VPN>
- [ ] Tools: <CLI + version>
- [ ] Context: <dashboard link, log query>

## Diagnose

1. <Check> — `<command or link>`
   - Expected (healthy): <output>
   - If <symptom A>: go to [Procedure](#procedure).
   - If <symptom B>: <other runbook / escalate>.

## Procedure

<!-- Numbered. One action per step. Exact commands. Verify after each risky step. -->

1. <Action.>
   ```bash
   <command>
   ```
   Verify: <what you should see>.
2. <Action.> **Warning:** <irreversible / customer-impacting — confirm before running>.
   ```bash
   <command>
   ```
   Verify: <what you should see>.

## Confirm resolved

- [ ] <metric/alert back to normal — link>
- [ ] <user-facing check>

## Rollback

<!-- Undo each state-changing step, in reverse order. -->

1. Undo step <N>: `<command>`
2. Undo step <N-1>: `<command>`

## Escalation

| When | Contact | How |
|---|---|---|
| <not resolved in X min / step fails> | <team/role> | <pager / channel> |

## After

- <post-incident note / ticket / update this runbook if steps changed>
