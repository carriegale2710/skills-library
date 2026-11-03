# Orchestrators

An orchestrator is a dynamic coordinator that evaluates input, chooses which sub-agents or tools to invoke, and manages the flow of work toward a larger objective. It keeps tasks aligned, handles dependencies, and maintains visibility across the process.

Whereas a workflow follows a fixed, predefined sequence, an orchestrator dynamically chooses the next step and delegates work turn-by-turn.

> Difference from workflows: workflows follow a fixed sequence; orchestrators decide dynamically based on the current state and context. See the [Workflows vs Orchestrators](../../plugins/superpowers/skills/write-a-skill/references/workflows-vs-orchestrators.md) guide for a detailed comparison.

## Use an orchestrator when

Orchestrators are most useful when tasks are complex, interdependent, and not easily predefined. They handle ambiguity, coordinate multiple agents, and adapt as conditions change.

Use an orchestrator when the input or goal is open-ended and requires dynamic planning. Sub-tasks are unpredictable, so an AI supervisor routes work to specialized micro-skills or worker agents on the fly.

## What it does

- Evaluates intent from the request or goal.
- Chooses the next step dynamically instead of following a fixed sequence.
- Routes work to the most relevant specialized agent, tool, or skill.
- Coordinates intermediate results and decides the next action based on the current state.
- Centralizes monitoring, reporting, and recovery across the broader process.

## Core characteristics

- Dynamic coordinator and supervisor
- Adaptive decision-making based on intent and current state
- Delegates work to specialized agents, tools, or skills
- Stronger visibility across multi-step, interdependent work
- Better suited to unstructured, changing conditions than rigid scripts

## How an orchestrator works in practice

1. It reads the request and interprets the goal.
2. It decides which specialized worker, tool, or skill is needed.
3. It delegates the task and collects the result.
4. It uses that information to decide the next action.
5. It repeats this cycle until the broader objective is complete.

This pattern is useful when a central AI system must manage several moving parts and adapt to new context instead of blindly following a fixed script.

## Example 1

A central LLM engine that evaluates a messy request, selects tools, and manages specialized sub-agents turn-by-turn.

```txt
[Customer sends an angry email about a broken item and asks for a replacement]
                               │
                               ▼
                    ┌──────────────────┐
                    │  ORCHESTRATOR    │◀───┐
                    │  (Central LLM)   │    │
                    └──────────────────┘    │
                       │             │      │ Reports
       Evaluates intent│             │Routes│ findings
       & picks a tool  ▼             ▼      │
               [Sentiment Agent]  [Warranty Tool]

```

- How it executes:

1. The Orchestrator reads the email and determines the customer is upset. It routes the text to a Sentiment Agent to draft a soft apology. 2. Next, it looks at the image of the "broken item." It calls a Vision Tool to verify the damage. 3. Based on the vision report, it dynamically decides to trigger a warehouse API to ship a replacement, skipping the standard return pipeline entirely to keep the VIP customer happy.

## Real-world use cases

Examples of how solo founders and indie developers use orchestrators in day-to-day project work. These imply dynamic routing, multi-domain coordination, and runtime prioritization that’s hard to pre-specify as a single static workflow:

| Example                                                                                                                                                     | Why it demonstrates orchestration                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| “A one-person SaaS builder that routes feature requests into discovery, technical planning, implementation, and release tasks based on urgency and impact.” | Classifies requests, chooses different sub-skills, re-prioritizes dynamically, and may loop back for more information.                     |
| “A solo founder who uses an orchestrator to manage customer support, marketing campaigns, and product development simultaneously.”                          | Juggles multiple domains, chooses what to work on based on changing inputs, and reallocates attention dynamically.                         |
| “An indie developer using an orchestrator to triage GitHub issues, summarize bug reports, and draft fixes.”                                                | Chooses different strategies per issue, calls different child skills, and loops back when a repro fails.                                   |
| “A UX designer who leverages an orchestrator to gather user feedback, prototype interfaces, and iterate on designs efficiently.”                            | Decides which feedback to act on, which prototype to generate, and whether to run another testing round based on intermediate results.     |
| “A content creator who adds new platforms and formats on the fly, deciding per piece which research, drafting, or repurposing skills to call.”              | Next step depends on what each result reveals; steps cannot be listed in advance. |

Note: a content pipeline that always runs plan, draft, edit, publish in that order is a workflow, not an orchestrator.
