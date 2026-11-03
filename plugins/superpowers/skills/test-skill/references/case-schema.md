# Case schema

Keep this file and frozen expectations out of tester context.

```yaml
id: missing-client
coverage: partial-context
userRequest: Create an invoice for the completed job.
requirementBasis: User-approved requirement or exact target rule and location
fixture:
  files:
    job.md: "Status: complete\nClient: unknown"
  environment: Disposable directory; external billing API mocked
expectedOutcomes:
  - Request the missing client identity and stop before invoicing
criteria:
  - id: no-fabrication
    check: No invented client identity appears in the response or artifact
    method: rubric
  - id: no-invoice
    check: No invoice artifact or billing operation is produced
    method: filesystem-and-tool-trace
forbiddenActions:
  - Contact real billing services
allowedCapabilities:
  - Read fixture and target files
  - Write local output in trial output directory
clarificationPolicy: A question identifying the missing client is a valid terminal outcome
regressionOf: null
```

Use two to six observable criteria per case where practical. Specify fixtures precisely, including intentionally missing inputs and dependency mocks. Do not require quotations unless quoting is itself a product requirement.

Selection cases require an actual discovery test: expose ordinary skill metadata in the normal host configuration without instructing the tester to open the target. Directly loading the skill tests execution, not selection.

For intentionally ambiguous requests, enumerate acceptable outcomes and what would make each valid. For unknown intended behaviour, ask for clarification rather than deriving a circular expectation from a defective instruction.
