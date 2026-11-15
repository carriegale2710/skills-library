# Glossary

**Core distinction: agent decides and acts; orchestrator coordinates; workflow fixes the path; skill packages expertise; plugin packages integration.** Vocabulary overlaps because vendors reuse words, but these are different layers. [anthropic](https://www.anthropic.com/research/building-effective-agents?lang=en-US)

| Term                   | What it is                                                                                                 | Who decides next step?                                    | Typical implementation                            | Use when                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------- |
| **Agent**              | Autonomous worker that pursues a goal through a feedback loop: reason, call tools, inspect result, repeat  | The LLM/agent, within allowed tools and policy            | LLM + tool loop + memory/state                    | Task path unpredictable; needs judgment      |
| **Orchestrator**       | Control plane that assigns, sequences, routes, and combines work                                           | Orchestrator—code, rules, or LLM                          | Graph engine, supervisor agent, workflow engine   | Multiple steps/workers need coordination     |
| **Workflow**           | Predefined execution path: nodes, branches, retries, state transitions                                     | Usually deterministic code/rules; LLM may occupy one node | DAG, state machine, BPMN, LangGraph graph         | Process is known and must be repeatable      |
| **Skill**              | Reusable domain expertise: instructions, conventions, templates, optional scripts/resources                | Agent loads/applies it when relevant                      | `SKILL.md` + files, prompt bundle, playbook       | Same specialist behavior needed across tasks |
| **Tool**               | Single callable capability: search, DB query, HTTP API, code execution                                     | Agent chooses whether/when to call it                     | Function/API/MCP tool                             | Agent needs to act on external system        |
| **Plugin**             | Distribution/installation unit that bundles capabilities—often tools, commands, skills, connectors, config | Depends on contents                                       | Marketplace package, extension, MCP server bundle | Install a capability set into an environment |
| **Command**            | Explicit user-triggered action, usually slash command                                                      | User                                                      | `/deploy`, `/summarize`                           | Deterministic user entry point               |
| **Connector**          | Integration layer to external data/service                                                                 | Agent/tool calls it                                       | MCP server, OAuth integration, API adapter        | Need authenticated access to SaaS/data       |
| **Memory**             | Persistent or session state: conversation, facts, task state                                               | System reads/writes it                                    | Vector store, DB, checkpoint store                | Need continuity beyond one prompt            |
| **Policy / guardrail** | Rules constraining behavior: permissions, approval gates, budgets, validation                              | Enforced by orchestrator/runtime                          | RBAC, allowlists, approvals, schema checks        | Actions are consequential                    |

Agent vs workflow is the sharpest split: **workflows use predetermined code paths; agents dynamically direct their own process and tool use.** [anthropic](https://www.anthropic.com/research/building-effective-agents?lang=en-US)

## How they compose

```text
User request
  → Command (optional explicit entry point)
  → Orchestrator / Workflow
      → Agent(s)
          → Skills (expertise)
          → Tools (actions)
          → Connectors (external systems)
          → Memory (state)
      → Guardrails / approvals
  → Result
```

- **Workflow** = skeleton.
- **Orchestrator** = dispatcher within or around that skeleton.
- **Agent** = flexible worker.
- **Skill** = worker’s playbook.
- **Tool** = worker’s hand.
- **Plugin** = box containing some combination of the above.
- **Connector** = door to outside world.

## Clear examples

### “Refund this customer”

| Layer        | Example                                                                        |
| ------------ | ------------------------------------------------------------------------------ |
| Command      | `/refund` starts request                                                       |
| Workflow     | Validate order → fetch order → check policy → create refund → notify customer  |
| Orchestrator | Decides branch: standard refund, manager approval, fraud escalation            |
| Agent        | Investigates ambiguous case, reads policy, gathers evidence, drafts resolution |
| Skill        | “Refund policy specialist”: decision rubric, tone, escalation rules            |
| Tool         | `get_order`, `issue_refund`, `send_email`                                      |
| Connector    | Stripe, Zendesk, internal CRM                                                  |
| Guardrail    | Refunds over $500 require human approval                                       |

Here, use a **workflow** for the fixed path. Put an **agent** only at the ambiguous investigation step. Don’t let an LLM autonomously issue refunds. [anthropic](https://www.anthropic.com/research/building-effective-agents?lang=en-US)

### “Update docs after API change”

| Layer        | Example                                                               |
| ------------ | --------------------------------------------------------------------- |
| Orchestrator | Identifies affected docs, creates subtasks, merges results            |
| Workflow     | Parse diff → find docs → draft updates → run checks → open PR         |
| Agent        | Decides which docs need rewriting and how to explain changed behavior |
| Skill        | “API documentation style guide”                                       |
| Tool         | Read repo, search code, edit file, run tests                          |
| Plugin       | Installs repo tools + docs skills + CI connector                      |

This is classic **orchestrator-worker**: orchestrator breaks task into subtasks, delegates them, then synthesizes outputs. Subtasks may be dynamic rather than known upfront. [anthropic](https://www.anthropic.com/research/building-effective-agents?lang=en-US)

## Decision rules

| Need                                 | Choose                                          |
| ------------------------------------ | ----------------------------------------------- |
| Fixed business process               | Workflow                                        |
| Dynamic planning/tool choice         | Agent                                           |
| Multiple workers / routing / retries | Orchestrator                                    |
| Reusable domain know-how             | Skill                                           |
| External action                      | Tool + connector                                |
| Installable capability bundle        | Plugin                                          |
| User-triggered deterministic action  | Command                                         |
| Durable, resumable execution         | Workflow/orchestration runtime with checkpoints |

## Common confusion

- **Agent vs orchestrator:** agent performs; orchestrator coordinates. An orchestrating LLM is an agent playing the coordinator role. [anthropic](https://www.anthropic.com/research/building-effective-agents?lang=en-US)
- **Workflow vs orchestrator:** workflow is the declared process; orchestrator is the component enforcing/driving it. A workflow can have a deterministic orchestrator or an LLM orchestrator. [docs.langchain](https://docs.langchain.com/oss/javascript/langgraph/overview)
- **Skill vs tool:** skill tells agent _how_ to do domain work; tool lets agent _do_ something. Skill = knowledge/procedure; tool = executable capability. [platform.claude](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview.md)
- **Plugin vs skill:** plugin is packaging/distribution; skill is one reusable capability inside it. A plugin may contain skills, commands, connectors, and configuration. [github](https://github.com/anthropics/financial-services)
- **Tool vs connector:** tool is callable action; connector is integration/auth plumbing to a system. An MCP server is commonly the connector layer exposing tools. [github](https://github.com/anthropics/financial-services)

## Best default

For a solo founder: **deterministic workflow first; add one agent only where branching needs judgment; add skills for reusable expertise; keep destructive tools behind guardrails.** Workflows give predictability; agents buy flexibility at the cost of cost, latency, and failure modes. [anthropic](https://www.anthropic.com/research/building-effective-agents?lang=en-US)
