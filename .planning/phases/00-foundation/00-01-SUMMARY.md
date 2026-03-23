---
phase: 00-foundation
plan: "01"
subsystem: foundation
tags: [claude-md, project-instructions, conventions, architecture]
dependency_graph:
  requires: []
  provides: [CLAUDE.md]
  affects: [all-phases]
tech_stack:
  added: []
  patterns: [GSD-section-markers, DRY-shared-foundation]
key_files:
  created: []
  modified:
    - CLAUDE.md
decisions:
  - "GSD section markers preserved exactly — only content between markers was filled"
  - "Shared/ DRY rule documented as hard constraint for all skills"
  - "Safety rules (MIND-SAFE, scope disclaimer) documented as non-negotiable"
metrics:
  duration: "1 minute"
  completed_date: "2026-03-23T20:25:49Z"
  tasks_completed: 1
  files_modified: 1
---

# Phase 00 Plan 01: CLAUDE.md Project Instructions Summary

**One-liner:** Complete CLAUDE.md with stack (Markdown/YAML/HTML, no build pipeline), conventions (DRY shared/ architecture, Colombian voseo, safety rules), and architecture (4 system layers, 5 skills, 7 web tools, 4 GPTs) — all GSD markers preserved.

## What Was Built

A complete `CLAUDE.md` that any Claude executor can read to immediately understand:

- What N1 is (methodology brand, not product company)
- Where files live (shared/, skills/, gpts/, web/, plans/, research/)
- What safety rules govern all work (MIND-SAFE, scope disclaimer, DRY shared/ rule)
- Where to find the Profile Interchange Format (shared/profile-format.md)
- The system architecture (4 layers: meta-theory → SCCT spine → busca adentro → construye afuera)
- All 7 constraints (budget, platform, token budgets, assessment integrity, therapeutic scope, cultural, assessment pacing)

## Tasks Completed

| Task | Name                     | Commit  | Files     |
| ---- | ------------------------ | ------- | --------- |
| 1    | Write complete CLAUDE.md | a8ccb5e | CLAUDE.md |

## Deviations from Plan

None — plan executed exactly as written. GSD section markers preserved. All required sections filled with content from MASTER-PLAN-v2.md, REVIEW-SYNTHESIS.md, and PROJECT.md.

## Known Stubs

None. CLAUDE.md is a documentation file — no stubs apply.

## Self-Check: PASSED
