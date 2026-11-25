# Runbook reference

**Reader:** a tired on-call engineer, possibly new to the system, under pressure. Must be followable without thinking or context-switching.

## Must have

- Trigger: exactly when to use it (alert name or symptom), and when not to.
- Prerequisites checked *before* starting, so the reader doesn't stall mid-procedure.
- Numbered steps: one action each, exact commands, expected result after each risky step.
- Rollback for every step that changes state.
- Escalation: who, when, how.
- Last-verified date.

## Quality checklist

- [ ] Someone new to the system could follow it end to end.
- [ ] Commands copy-paste with only documented variables (`$ENV`, `<service>`) to fill.
- [ ] Destructive or customer-impacting steps flagged *before* the command.
- [ ] Every branch in Diagnose leads somewhere (procedure, other runbook, escalate).
- [ ] Rollback steps exist and run in reverse order.
- [ ] Links point to the real dashboards, queries, and channels.
- [ ] No "investigate further" or "use judgement" without saying how.

## Anti-patterns

| Avoid | Do instead |
|---|---|
| "Restart the service" | `kubectl rollout restart deploy/api -n prod` |
| Background essay before step 1 | Trigger + prerequisites, then steps; link background |
| Steps with no verification | "Verify: error rate < 1% on <dashboard>" |
| Missing rollback | Undo command for each state-changing step |
| "Contact the team" | Named rotation + paging method + time threshold |

## Good example (excerpt)

````markdown
3. Drain the bad node. **Warning:** moves traffic; check capacity first.
   ```bash
   kubectl drain node-7 --ignore-daemonsets
   ```
   Verify: `kubectl get nodes` shows node-7 `SchedulingDisabled`.
   Rollback: `kubectl uncordon node-7`
````
