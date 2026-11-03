# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-11-03

### Added

- Ten plugins under `plugins/`, each installable alone.
- `.claude-plugin/marketplace.json` makes repo a plugin marketplace.
- `idea-hunter` plugin finds validated microsaas ideas.
- `job-hunter` plugin pairs with master-resume repo.
- `ux-researcher` plugin bundles design research methodologies.
- `superpowers` plugin gains `test-skill` with capped trial cost.
- `write-a-skill` gains skill, workflow, orchestrator templates.
- Flat `skills/` index holds copy of every unique skill (128).
- `docs/references/WORKFLOWS.md` and `ORCHESTRATORS.md` guide skill typing.
- `TODO.md` lists plugins still to build.

### Changed

- Breaking: `experts/` renamed `plugins/`; old paths broken.
- Breaking: skills now `skill-name/SKILL.md`, not `skill-name.md`.
- Skill support files moved into per-skill `references/` folders.
- `plg-skill`, `script-writer-skill` renamed.
- `commit-message` now mandates ultracave prose.
- READMEs synced to `plugins/` layout.

### Removed

- `orchestrators/bug-fix.md` and `orchestrators/frontend-build.md`.
- `resume-writer` skill; replaced by `job-hunter` plugin.
- `.gaia/` folder; out of scope.

## [0.1.0] - 2026-08-22

### Added

- Initial skills library split from `gaia-setup` repo.
- Curated skills in `skills/`, 14 sourced from skills.sh.
- Orchestrators: `bug-fix`, `frontend-build`, `frontend-design`, `research-to-issues`.
- Shared `references/` for skill, pipeline, TDD writing guides.
- `pipeline` skill composes skills into user-defined sequence.
- `docs/wishlist.md` tracks open-source skills to download.

### Fixed

- Perplexity and GitHub MCP compatibility patched across 8 files.
- Dead references and missing dependencies removed from skills.
- `write-a-skill` and `writing-skills` descriptions disambiguated.

### Removed

- GAIA research files; moved to separate repo.
- `grill-me` duplicate of `grilling`.

[unreleased]: https://github.com/carriegale2710/gaia-setup/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/carriegale2710/gaia-setup/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/carriegale2710/gaia-setup/releases/tag/v0.1.0
