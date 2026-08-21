---
name: pipeline-reference
description: Extended reference for the /pipeline skill — retry behaviour, failure handling, and invocation examples. Loaded on demand; do not invoke directly.
disable-model-invocation: true
---

# Pipeline Reference

## Failure handling

If a stage fails to produce its required artifact:

1. Explain what was missing or invalid.
2. Retry the same stage up to two times, including failure notes in the retry context.
3. Do not advance while the artifact is incomplete.
4. Escalate to the user after the second failed retry.
5. If the user declines a retry, stop the pipeline.

## Examples

### Valid

```text
/pipeline to-prd > to-spec > to-tickets
/pipeline /research > brainstorming > to-issues
```

### Missing `>` separator

```text
/pipeline to-prd to-spec to-tickets
```

Response:

```text
Please separate stages with `>`.

Example:
/pipeline to-prd > to-spec > to-tickets
```

### Unknown skill

```text
/pipeline to-prd > magical-review
```

Response:

```text
I found `/to-prd`, but `/magical-review` is unavailable.
No stages have run.

Choose an available skill or correct the name before continuing.
```
