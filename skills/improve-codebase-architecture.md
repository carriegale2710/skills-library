---
name: improve-codebase-architecture
description: Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.
disable-model-invocation: true
---

# Improve Codebase Architecture

Surface architectural friction and propose **deepening opportunities**: refactors that turn shallow modules into deep ones. The aim is testability and AI-navigability.

## Design Vocabulary

Use these terms exactly throughout every suggestion. Do not drift to "component," "service," "API," or "boundary."

- **module** — a unit with an interface and an implementation
- **interface** — the surface through which a module is used; the test surface
- **depth** — ratio of implementation complexity to interface complexity; a deep module hides a lot behind a simple interface
- **seam** — a point where the implementation can be substituted without changing callers
- **adapter** — a module that bridges two interfaces; one adapter = hypothetical seam, two = real
- **leverage** — how much behavior change you get per unit of interface change
- **locality** — keeping related logic close together so bugs and their causes are in the same module

**Deletion test:** would deleting a module concentrate complexity (into its callers or a deeper module), or just move it? "Concentrates" = the signal the module is shallow and worth deepening.

**"The interface is the test surface"** — the seam at which you write tests should be the module's public interface, not its internals.

## Process

### 1. Explore

**Scope before you scan: YAGNI.** Deepening a module pays off by making future changes to it easier, so put extra weight on the parts of the codebase that have recently changed. Decide *where* to look before you look:

- If the user named a direction (a module, a subsystem, a pain point), take it, and skip the inference below.
- Otherwise, use GitHub MCP `list_commits` to walk back a stretch of the commit history and find hot spots — files and areas that keep changing. Let those paths pull your attention first. If changes are scattered with no clear hot spot, widen the net.

Read the project's domain glossary (`CONTEXT.md`) and any ADRs in the area you're touching first, using `get_file_contents`.

Then read the codebase using GitHub MCP read tools (`get_file_contents`, `list_commits`). Don't follow rigid heuristics; explore organically and note where you experience friction:

- Where does understanding one concept require bouncing between many small modules?
- Where are modules **shallow**, with an interface nearly as complex as the implementation?
- Where have pure functions been extracted just for testability, but the real bugs hide in how they're called (no **locality**)?
- Where do tightly-coupled modules leak across their seams?
- Which parts of the codebase are untested, or hard to test through their current interface?

Apply the **deletion test** to anything you suspect is shallow.

### 2. Present candidates as an HTML report

Write a self-contained HTML file to the OS temp directory so nothing lands in the repo. Resolve the temp dir from `$TMPDIR`, falling back to `/tmp` (or `%TEMP%` on Windows), and write to `<tmpdir>/architecture-review-<timestamp>.html` so each run gets a fresh file. Tell the user the absolute path.

The report uses **Tailwind via CDN** for layout and styling, and **Mermaid via CDN** for diagrams. Each candidate gets a **before/after visualisation**.

For each candidate, render a card with:

- **Files**: which files/modules are involved
- **Problem**: why the current architecture is causing friction
- **Solution**: plain English description of what would change
- **Benefits**: explained in terms of locality and leverage, and how tests would improve
- **Before / After diagram**: side-by-side, illustrating the shallowness and the deepening
- **Recommendation strength**: one of `Strong`, `Worth exploring`, `Speculative`

End the report with a **Top recommendation** section.

Do NOT propose interfaces yet. Ask the user: "Which of these would you like to explore?"

### 3. Grilling loop

Once the user picks a candidate, invoke the `/grilling` skill to walk the decision tree with them.
