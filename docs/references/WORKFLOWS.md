# Workflows

> A workflow executes a fixed, code-defined sequence of steps (while an orchestrator dynamically decides the path and delegates tasks turn-by-turn).

Multi-skill sequences for work that genuinely needs several stages. Use these only when a single skill (see `SKILL-GUIDE.md`) is not enough — skip steps that do not add value.

## Use a Workflow when

You have crisp evaluation metrics and known, repeatable steps.The process requires strict sequencing, data movement, or parallel fan-outs that don't need mid-flight improvisation.You want to prevent context window bloat by keeping intermediate steps inside a script instead of an LLM's memory

## What it does

- Executes a predefined sequence of steps in a fixed order.
- Enforces dependencies, gating, and handoffs between stages.
- Keeps intermediate work inside a clear script instead of a model's working memory.
- Moves data through repeatable stages with explicit branching or fan-out logic.
- Produces predictable results for work that can be defined in advance.

## Difference from orchestrators

Whereas an orchestrator dynamically chooses the next step and delegates work turn-by-turn, a workflow follows a fixed, code-defined sequence. See the [Workflows vs Orchestrators](../../docs/workflows-vs-orchestrators.md) guide for a detailed comparison.

## Core characteristics

- Fixed, code-defined sequence of steps
- Deterministic paths and predictable execution
- Clear sequencing, dependency handling, and conditional logic
- Better suited to structured, repeatable tasks than ambiguous or open-ended work
- Stronger cost, latency, and observability advantages for routine processes

## How a workflow works in practice

1. It receives a defined trigger or input.
2. It checks conditions or validates required data.
3. It executes the next stage in the fixed sequence.
4. It passes the result onward to the next step or branch.
5. It completes the process once the required outputs are produced.

This pattern is useful when the problem has known steps, clear evaluation criteria, and limited need for improvisation.

## Example 1

A strict, code-defined pipeline where data moves through fixed gates.

```txt
[Customer submits return]
         │
         ▼
[Step 1: Check purchase date via API]
         │
    ┌────┴────┐
 < 30 days?   > 30 days?
    │         │
    ▼         ▼
[Step 2]   [Step 2]
Approve    Flag for
Return     Manual Review
```

- Why it fits: the rules are black-and-white. No AI is needed to decide if 15 days is less than 30 days. It is fast, cheap, and highly predictable.

## Real-world use cases

Examples of how solo founders, operators, and teams use workflows in day-to-day work:

- A one-person SaaS founder who runs a repeatable customer onboarding pipeline across welcome email, setup tasks, and activation check-ins.
- A product team that routes feature requests through intake, prioritization, spec creation, and implementation review.
- A support operator who processes refund or escalation requests through a fixed sequence of checks, approvals, and follow-ups.
- A marketing team that automates campaign planning, content drafting, review, and publication in a known order.
- A developer who uses a workflow to triage GitHub issues, run tests, summarize findings, and create deployment checklists.
- A research lead who collects sources, filters them, summarizes findings, and turns them into a brief or recommendation memo.
- A freelancer managing client work through intake, scope confirmation, delivery, and revision stages.
- A startup operator who standardizes product feedback collection, issue tracking, and release notes generation.

## When to use a workflow

Use a workflow when:

- You have crisp evaluation metrics and known repeatable steps.
- The process requires strict sequencing, data movement, or parallel fan-outs that do not need mid-flight improvisation.
- You want to prevent context window bloat by keeping intermediate steps in code instead of in an LLM's memory.
- You need reliability, debuggability, and faster execution than a more adaptive orchestration pattern would provide.

## What a workflow is not

A workflow is not the right tool when the task is genuinely open-ended, highly ambiguous, or requires dynamic planning from one step to the next. In those cases, an orchestrator is usually a better fit because it can evaluate the current state and route work adaptively.

## Summary

Workflows are the right choice for structured, repeatable, evaluation-driven processes. They are especially valuable when you want deterministic behavior, reduced complexity, and lower cost than a dynamic AI coordinator would require.
