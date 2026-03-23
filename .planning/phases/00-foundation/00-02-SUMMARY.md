---
phase: 00-foundation
plan: "02"
subsystem: shared-schema
tags: [profile-format, yaml-schema, interchange-format, documentation]
dependency_graph:
  requires: []
  provides:
    - shared/profile-format.md (canonical schema documentation)
    - shared/profile-template.yaml (blank user template)
  affects:
    - All AI skills (consume profile YAML)
    - All static web tools (produce profile YAML)
    - All GPT instructions (produce/consume profile YAML)
tech_stack:
  added: []
  patterns:
    - YAML interchange format with version protocol
    - null-safe progressive profile (completed: true/false per dimension)
key_files:
  created:
    - shared/profile-format.md
    - shared/profile-template.yaml
  modified: []
decisions:
  - "Profile uses clipboard portability — no sync, no accounts, no API"
  - "completed: true/false per dimension enables skip-covered-ground logic in all tools"
  - "version: 1.0 with explicit backward compat rules — tools must accept null fields"
  - "language field defaults to es (Spanish) — LATAM-first"
metrics:
  duration: "12 minutes"
  completed_date: "2026-03-23"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 0
---

# Phase 00 Plan 02: Profile Interchange Format v1 Summary

YAML schema and blank template defining the canonical N1 profile format — clipboard-portable, dimension-gated, version-safe interchange contract all tools produce and consume.

## Tasks Completed

| Task | Name                               | Commit  | Files                        |
| ---- | ---------------------------------- | ------- | ---------------------------- |
| 1    | Write shared/profile-format.md     | 60d175c | shared/profile-format.md     |
| 2    | Write shared/profile-template.yaml | 3de6150 | shared/profile-template.yaml |

## What Was Built

**shared/profile-format.md** (421 lines):

- Version protocol with backward compatibility rules
- How to use section covering both producing tools and consuming tools
- Complete YAML schema with inline comments for all 9 sections (version fields, triage, values, strengths, identity, purpose, enrichment, synthesis, evolution)
- Field reference table — 50+ leaf fields with types, allowed values, required status, and source framework citations (Schwartz, Marcia, Savickas/CAAS, Steger/MLQ, Hayes/AAQ-II, Bandura, Csikszentmihalyi, Frankl, Luthans/PsyCap)
- Example populated profile using Colombian SWE context (Andres at Globant, considering solo consulting)
- Career path taxonomy reference: 4 macro-categories, 22 specific moves with psychological dynamics table

**shared/profile-template.yaml** (109 lines):

- All fields set to null/false/[] defaults
- version: "1.0" and language: "es" pre-set (not null — fixed defaults)
- Inline comments on every enum field with allowed values
- Usage instructions in comment block at top

## Decisions Made

1. **Clipboard portability rule** — No file sync, no accounts, no API. User copies YAML, pastes into next tool. Zero infrastructure, zero friction.

2. **completed: true/false per dimension** — Tools can skip dimensions the user has already completed and enrich responses using existing data. "Profile-enhanced, not profile-required."

3. **Backward compatibility explicit** — Tools must accept profiles where optional fields are null or missing. Breaking changes require major version bump (1.x → 2.0). Additive changes require minor bump (1.0 → 1.1).

4. **language: "es" default** — Spanish-first for LATAM audience. Field exists to support "en" for future internationalization.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — this plan creates documentation and configuration files, not UI components. No stubs present.

## Self-Check: PASSED

- [x] shared/profile-format.md exists (421 lines, 150+ requirement met)
- [x] shared/profile-template.yaml exists
- [x] version protocol section present in profile-format.md
- [x] identity_status: null in template
- [x] version: "1.0" in template
- [x] completed: false for all 4 dimensions in template
- [x] Commits 60d175c and 3de6150 exist in git log
