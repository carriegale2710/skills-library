# <API name> reference

<One sentence: what this API lets you do.> Base URL: `<https://api.example.com/v1>`

## Authentication

<Scheme: bearer token / API key / OAuth.> <Where to get credentials.>

```bash
curl <base-url>/<endpoint> \
  -H "Authorization: Bearer $API_KEY"
```

## Conventions

- **Format:** <JSON request/response, content-type>
- **Timestamps:** <ISO 8601 UTC>
- **IDs:** <format, e.g. prefixed strings `inv_123`>
- **Pagination:** <cursor/offset; params and response fields>
- **Rate limits:** <limit per window; headers returned; behaviour when exceeded>
- **Versioning:** <how versions work; deprecation policy>

## Errors

```json
{ "error": { "code": "<code>", "message": "<human message>" } }
```

| HTTP | Code | Meaning | Fix |
|---|---|---|---|
| 400 | `<invalid_request>` | <cause> | <what the caller should do> |
| 401 | `<unauthorised>` | <cause> | <fix> |
| 404 | `<not_found>` | <cause> | <fix> |
| 429 | `<rate_limited>` | <cause> | <retry guidance> |

## Endpoints

<!-- Repeat this block per endpoint. Group by resource. -->

### <Verb> <resource>

`<METHOD> /<path>/{<param>}`

<One sentence: what it does. Side effects, idempotency.>

**Path parameters**

| Name | Type | Description |
|---|---|---|
| `<param>` | string | <description> |

**Body / query parameters**

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| `<field>` | <type> | yes/no | `<value>` | <description, constraints> |

**Request**

```bash
curl -X <METHOD> <base-url>/<path> \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '<json body>'
```

**Response** `<status>`

```json
<realistic response>
```

**Errors:** `<code>` (<when>), `<code>` (<when>)

## SDK examples

<!-- Optional. Only for SDKs that exist. -->

```<lang>
<minimal SDK call>
```
