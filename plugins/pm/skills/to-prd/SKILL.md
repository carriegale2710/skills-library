---
name: to-prd
description: Turn the current conversation into a PRD and publish it to the project issue tracker — no interview, just synthesis of what you've already discussed.
disable-model-invocation: true
---

This skill takes the current conversation context and codebase understanding and produces a PRD. Do NOT interview the user — just synthesize what you already know.

## Process

1. Explore the repo to understand the current state of the codebase, if you haven't already. Use the project's domain glossary vocabulary throughout the PRD.

2. Sketch out the seams at which you're going to test the feature. Existing seams should be preferred to new ones. Check with the user that these seams match their expectations.

3. Write the PRD using the template below, then publish it to the issue tracker. For GitHub Issues (the default for this setup), use GitHub MCP `issue_write` (method `create`).

## PRD Template

## Problem Statement

The problem that the user is facing, from the user's perspective.

## Solution

The solution to the problem, from the user's perspective.

## User Stories

A numbered list of user stories in the format:

1. As an <actor>, I want a <feature>, so that <benefit>

## Implementation Decisions

A list of implementation decisions including modules, interfaces, schema changes, API contracts.

## Testing Decisions

Which modules will be tested and what makes a good test for this feature.

## Out of Scope

A description of the things that are out of scope for this PRD.

## Further Notes

Any further notes about the feature.
