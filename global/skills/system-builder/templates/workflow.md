# Workflow template

Only for repeatable, scripted fan-out over many independent items. State lives in script variables.

Save: `.claude/workflows/<name>.js`

```javascript
export const meta = { name: '<kebab-name>', description: '<what it does>' }

const { items } = await agent('List items to process from $ARGUMENTS.', {
  schema: { type: 'object', required: ['items'],
    properties: { items: { type: 'array', items: { type: 'string' } } } },
})

const results = await pipeline(items, item =>
  agent(`Process ${item}. Return findings as JSON.`, { label: item }),
)
return results.filter(Boolean)
```

Independent fixed set: `parallel([agent(...), agent(...)])`.

Rules: trial a small sample first; use schemas; one narrow job per worker; check cost before scaling.
