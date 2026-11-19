# dev-core

Stack-agnostic engineering habits for Claude Code. Enable in `Engineer/` and every Engineer subfolder. Backend/ops skills live in `dev-backend`; frontend skills in `dev-frontend`.

## Install

```bash
claude plugin marketplace add ./
claude plugin install dev-core@skills-library
```

## Skills

| Area | Skills |
|---|---|
| Decide | `architecture` (ADRs), `software-architect` (stack, system and API design), `improve-codebase-architecture`, `tech-debt` |
| Build and fix | `ponytail`, `surgical-patch`, `safe-refactor`, `dry`, `optimize`, `diagnosing-bugs` |
| Test and verify | `tdd`, `testing-strategy`, `qa-session`, `verification-before-completion` |
| Review | `coderabbit-review` (default, CodeRabbit CLI), `caveman-review` (manual), `autofix`, `coderabbit-config` |
| Ship and record | `commit-message`, `changelog`, `devlog`, `update-docs`, `documentation`, `standup` |
| Context and tokens | `caveman-explore`, `caveman-compress`, `token-efficiency-audit`, `repo-namer` |

Third-party skills and their licences: see [THIRD_PARTY.md](../../THIRD_PARTY.md).
