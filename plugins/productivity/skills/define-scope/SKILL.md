---
name: define-scope
description: Draw the boundaries of any piece of work — a project, feature, task, sprint, piece of writing, research question or errand — so it can finish. Use when the user asks "what's in scope", "what's out of scope", "define scope", "where does this stop", says a task keeps growing, or needs a clear "done" before starting.
---

# Define Scope

## Goal

Make a piece of work finishable: say what it includes, what it excludes, what limits it, and when it is done.

## Steps

1. **Outcome:** one sentence on what this work produces or changes.
2. **In:** the specific deliverables or actions included. Concrete nouns, not themes.
3. **Out:** what is explicitly excluded, especially the tempting next steps. Anything not listed as In is Out by default.
4. **Limits:** time, money, energy, tools or people available.
5. **Done when:** an observable condition that ends the work.
6. **Assumptions:** what must be true for this scope to hold.

Keep it short: a few lines per section. Infer from context; ask only when a missing answer would change the boundary.

## Rules

- Out matters as much as In; it is what stops creep.
- A scope change is a decision: say what is added, what is dropped or what limit moves. Never grow scope silently.
- Vague is not a scope. "Improve onboarding" is a theme; "3-screen onboarding flow with skip" is a scope.
- Writing a PRD? Scope lives in its Requirements and Non-Goals (`to-prd`); don't make a separate document.

## Example

**Outcome:** Users can log in with email and password.

**In:** login form, password reset by email link, 7-day sessions.

**Out:** social login, 2FA, SSO.

**Limits:** 2 weeks, 1 developer.

**Done when:** a new user can sign up, log out, reset their password and log back in on production.

**Assumptions:** the existing email provider can send reset links.
