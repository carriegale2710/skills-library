# Skills Library

A personal, modular library of reusable AI skills, specialist bundles, and multi-step patterns. The goal is to keep useful operating knowledge portable across different tools, models, and projects without tying it to any single platform.

## Purpose

This repository holds the skills, workflows, and working patterns that are useful enough to keep and reuse. Instead of relying on a single assistant's built-in prompt library, the idea is to maintain a small set of well-structured resources that can be copied, adapted, and reused elsewhere.

This makes the collection useful for:

- working across different AI tools and environments;
- keeping your own reusable knowledge in one place;
- borrowing only the skills relevant to the current task; and
- evolving the library as real work reveals which patterns are worth keeping.

## Repository structure

| Path                            | Role                                                                                                  |
| ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [plugins/](plugins)             | Skills grouped by role or domain, one subfolder per bundle. Source of truth.                          |
| [skills/](skills)               | Flat copy of every unique skill, as an easy-to-reach index. See [skills/README.md](skills/README.md). |
| [orchestrators/](orchestrators) | Dynamic coordination files that route a task across skills.                                           |
| [docs/](docs)                   | References, research notes, and the skills wishlist.                                                  |
| [.gaia/](.gaia)                 | Plans and templates. See [.gaia/README.md](.gaia/README.md).                                          |
| [AGENTS.md](AGENTS.md)          | Core rules for agents working in this repo.                                                           |
| [ISSUES.md](ISSUES.md)          | Known issues.                                                                                         |

Browse [plugins/](plugins) for the current bundles.

## How to use it

1. Pick the smallest useful unit for the task: a single skill, a plugin bundle, or a workflow.
2. Copy the relevant folder or files into the target agent or workspace, plus any files a skill references.
3. Adapt the prompt or invocation pattern to the platform you are using.
4. Keep the library lean: prefer a focused set over loading everything at once.

## Choosing the right format

- Standalone skill: one reusable capability.
- Plugin bundle: grouped around a role, domain, or function.
- Workflow: known, repeatable sequence. See [docs/references/WORKFLOWS.md](docs/references/WORKFLOWS.md).
- Orchestrator: adaptive process that depends on intermediate findings. See [docs/references/ORCHESTRATORS.md](docs/references/ORCHESTRATORS.md).

Comparison: [docs/references/workflows-vs-orchestrators.md](docs/references/workflows-vs-orchestrators.md).

## Plugins

A plugin is an installable bundle of skills (it can also hold agents, hooks, and MCP servers) that Claude Code loads as one unit. This repo is itself a plugin marketplace: every folder in [plugins/](plugins) is installable on its own, with no separate GitHub repo.

### Install one plugin from this repo

```text
/plugin marketplace add carriegale2710/skills-library
/plugin install idea-hunter@skills-library
```

Only the named plugin is installed, not the whole repo. Plugin names: `designer`, `developer`, `idea-hunter`, `marketing`, `product-manager`, `saas-builder`, `startup`, `superpowers`, `job-hunter`. Skills run namespaced, e.g. `/idea-hunter:reddit-pain-mining`.

### How the setup works

- [.claude-plugin/marketplace.json](.claude-plugin/marketplace.json) at the repo root lists each plugin with a relative `source` such as `"./plugins/idea-hunter"`.
- Each plugin folder has `.claude-plugin/plugin.json` with a `name`, and its skills in a `skills/` subfolder (`plugins/<name>/skills/<skill>/SKILL.md`), the default location Claude Code looks in.
- The `name` in a marketplace entry must match the `name` in that plugin's `plugin.json`, or install fails with "Plugin ... not found in marketplace".

### Add a new plugin

1. Create `plugins/<name>/skills/` with skill folders inside.
2. Add `plugins/<name>/.claude-plugin/plugin.json` with `name` and `description`.
3. Add an entry to the root `marketplace.json`.
4. Run `claude plugin validate .`.

### Plugins in their own GitHub repo

A plugin can live in a separate repo instead (for example the original `job-hunter` repo). List it in a marketplace with `"source": { "source": "github", "repo": "owner/plugin-repo" }`, or add that repo directly as a marketplace if it has its own `.claude-plugin/marketplace.json`.

### Try without installing

```text
claude --plugin-dir ./plugins/idea-hunter
```

Docs: <https://code.claude.com/docs/en/plugins/overview.md> and <https://code.claude.com/docs/en/plugins/create-marketplace.md>.

## Design principles

- keep it portable and agent-agnostic;
- prefer simple, direct skills over heavy abstractions;
- bundle related capabilities only when they genuinely belong together;
- keep the repo readable and easy to adapt; and
- improve by real use rather than by adding complexity prematurely.

## Repository conventions

- keep each skill focused on a single clear purpose;
- keep skill descriptions specific enough to be useful in real prompts;
- maintain the folder structure when adding new content; and
- review supporting references and bundle indexes when restructuring or renaming files.

## What this repo is not

Not a platform-specific plugin package, and not a monolithic all-in-one agent. It is a reusable library of operational patterns to copy into different environments and adapt.
