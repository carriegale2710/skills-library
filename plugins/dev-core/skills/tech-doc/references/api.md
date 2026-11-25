# API docs reference

**Reader:** a developer integrating right now, usually scanning for one endpoint. Needs exact shapes, not prose. Copy-paste must work.

## Must have

- Auth: how to get credentials and a working authenticated request.
- Every endpoint: method, path, params (type, required, default, constraints), request example, response example, error cases.
- Error format plus a table of codes with the fix for each.
- Pagination and rate-limit behaviour, if they exist.

## Source of truth

Derive from code or schema (OpenAPI, route handlers, validators), not memory. If an OpenAPI spec exists, generate from it or link it; hand-write only what the spec can't say (workflows, gotchas).

## Quality checklist

- [ ] Every endpoint in the code is documented; nothing documented that doesn't exist.
- [ ] Types and required flags match validators.
- [ ] Examples use realistic values (`inv_8f2k`, not `string`/`foo`).
- [ ] Request examples run as written (correct headers, content-type, quoting).
- [ ] Responses show the real shape, including nested objects and nulls.
- [ ] Side effects and idempotency stated for non-GET endpoints.
- [ ] Each error code has a cause and a fix.
- [ ] Secrets shown as `$API_KEY`, never real values.

## Anti-patterns

| Avoid | Do instead |
|---|---|
| "Returns the user object" | Show the JSON |
| `"name": "string"` in examples | `"name": "Ada Lovelace"` |
| Error list with no remedy | Add a "Fix" column |
| Hand-maintained docs drifting from spec | Generate from schema; hand-write the rest |
| Undocumented required headers | Show every header in each curl example |

## Good example (excerpt)

```markdown
### Create invoice

`POST /invoices` — creates a draft invoice. Not idempotent; pass `Idempotency-Key` to retry safely.

| Name | Type | Required | Description |
|---|---|---|---|
| `client_id` | string | yes | Existing client, e.g. `cli_3x9a` |
| `due_days` | integer | no (30) | 1–120 |

Errors: `client_not_found` (404), `invalid_due_days` (400).
```
