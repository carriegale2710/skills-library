# Agentic AI Workflow

This repo houses resources for building a custom agentic AI workflow.

It provides customisable skills, references and orchestrator files to build your own custom workflow on top of existing AI agent platforms like Claude Code, Github Copilot or Perplexity Computer MCP (or GAIA for Perplexity Spaces - see the Github repo at carriegale2710/gaia for how it works).

Why?

- I have free access to Pro tiers in Perplexity and Github Pilot via Education student discounts, but not for Claude Code.
- By creating a personal but agent-agnostic repo to save all my personally customised skills, I can plug and play between different agentic platforms quickly and achieve consistent outputs across different agents.
- Also good for eventually using local open source models once I can afford a better PC setup lol

> `.agents/gaia` is for GAIA usage only -> stores temporal sandbox files to load between Perplexity chat sessions: `MEMORY.md`, `PLAN.md` and `TASKS.md` for working on this specific repo. This is to account for context compacting of long session threads - prevents the AI agent 'forgetting' important context from previous earlier chats.
