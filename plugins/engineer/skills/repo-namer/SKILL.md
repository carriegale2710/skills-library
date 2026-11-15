---
name: repo-namer
description: Generate and select clear, unique GitHub repo names for indie open-source projects. Use for new repos, OSS libraries/CLIs/apps, or project-family naming.
---

# Repo Naming

Produce 5–10 candidates, then recommend one.

Priority: clarity > availability > spelling/pronunciation > brevity > brandability > extensibility.

For indie OSS, default to one standalone memorable name + clear one-line description. Create a family only with 2+ real related artifacts.

## Inputs

Ask once for missing items:

- What it does, audience, project type
- Registry: GitHub only / npm / PyPI / crates.io / other
- Tone and words/domains to avoid
- Existing family/brand, if any

State assumptions and proceed if inputs are partial.

## Rules

- Lowercase kebab-case: `promptforge`, `env-loader`.
- 1–3 words; ideally <20 chars.
- Repo chars: ASCII letters, digits, `.`, `-`, `_`; prefer hyphens.
- No leading number/hyphen, spaces, `v2`, `-official`, `-js`, `-py`.
- Avoid generic names: `test`, `utils`, `helper`, `app`, `project`, `new`, `final`.
- Avoid near-copies of popular tools and common shell commands (`run`, `check`, `build`, `make`).
- Don’t lock in a framework unless central to identity.
- If taken: modify root, add one meaningful qualifier, or use `@scope/name`. Never use `-2`/`-official`.

## Good vs bad

| Bad                            | Good                 | Why                                 |
| ------------------------------ | -------------------- | ----------------------------------- |
| `my-app`                       | `invoice-tracker`    | Says what it does                   |
| `test-project`                 | `csv-to-json-cli`    | Clear utility + type                |
| `utils`                        | `env-loader`         | Specific job, not a category        |
| `ai-helper`                    | `promptforge`        | Memorable, conceptually relevant    |
| `react-prompt-forge`           | `@promptforge/react` | Avoids tech lock-in; scoped package |
| `prompt-forge-v2`              | `promptforge`        | No version suffix                   |
| `janes-ai-tools`               | `agentkit`           | Project value, not owner            |
| `super-awesome-ai-prompt-tool` | `promptloom`         | Short, pronounceable, brandable     |
| `cli-promptforge`              | `promptforge-cli`    | Family first, role second           |
| `claymate-clay-api`            | `claymate-api`       | No repeated concept                 |
| `run`                          | `flowrun`            | Avoids shell-command collision      |
| `fast-router-2`                | `swift-router`       | Unique without junk suffix          |

## Styles

| Style       | Use for                    | Examples                    |
| ----------- | -------------------------- | --------------------------- |
| Descriptive | Narrow utility             | `env-loader`, `csv-to-json` |
| Brandable   | Library/product/ecosystem  | `promptforge`, `claymate`   |
| Minimal     | Dev tool + strong subtitle | `forge`, `relay`            |
| Playful     | Side/community project     | `rubber-duck`               |
| Technical   | Performance/precision tool | `hyperparse`                |

## Process

1. Build word clusters: function, outcome, metaphor, materials, tone.
2. Generate 30+ internally via compound, blend, modify, repurpose, qualify, constrain.
3. Present top 5–10 only.
4. Score each 1–5: clarity, spelling, pronunciation, uniqueness, brevity, longevity, brandability.
5. Reject <3 on clarity, spelling, pronunciation, or uniqueness.
6. Check GitHub, relevant registry, and web for exact/close names. Check domains/socials only if branding; trademark only if commercialising.

## Families

Use only for 2+ related artifacts.

```text
<family>-<role>
@<family>/<role>
```

Suffixes: `-core`, `-cli`, `-web`, `-api`, `-docs`, `-ui`, `-sdk`, `-extension`.

Family first; don’t repeat concepts. Monorepo + scopes for tightly coupled tools; separate repos only for distinct release/ownership boundaries.

## Output

```markdown
## Assumptions

- ...

## Shortlist

| Name | Style | Description | Why | Risk |
| ---- | ----- | ----------- | --- | ---- |

## Recommendation

**Name:** `name`
**Why:** ...
**Repo:** `name`
**Description:** ...
**Package:** `name` or `@scope/name`
**README:** `# Name` + one-line subtitle

## Runner-ups

- `name` — when to choose instead

## Checks

- [ ] GitHub / registry / web collision search
- [ ] Domain/socials, if branding
- [ ] Trademark, if commercialising
```

## Final test

- “I built `name`” sounds natural.
- Install command sounds natural.
- Name + subtitle conveys purpose.
- Name survives adding CLI/docs/SDK.
- User can explain it in one sentence.
