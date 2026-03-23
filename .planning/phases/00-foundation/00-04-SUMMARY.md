---
phase: 00-foundation
plan: "04"
subsystem: shared-foundation
tags:
  [
    voice,
    tone,
    voseo,
    bilingual,
    anti-corporate,
    citations,
    cultural-calibration,
  ]
dependency_graph:
  requires:
    - 00-02 (profile format established context)
  provides:
    - shared/voice-guide.md consumed by all skills and GPTs
  affects:
    - skills/*/SKILL.md (all future skills reference this file)
    - gpts/*/instructions.md (all future GPTs reference this file)
tech_stack:
  added: []
  patterns:
    - Shared DRY file loaded by all tools (reference, never copy)
key_files:
  created:
    - shared/voice-guide.md
  modified: []
decisions:
  - "Colombian voseo non-negotiable for target audience (Bogota senior SWEs)"
  - "8 sections: voice def, language rules, voseo, anti-corporate, citations, quick/deep modes, cultural calibration, what N1 is NOT"
  - "Pre-approved stats list embedded to prevent informal source drift"
  - "Quick vs deep mode voice differentiation explicit — behavior differs, not just length"
metrics:
  duration: "5m"
  completed_date: "2026-03-23"
  tasks_completed: 1
  files_created: 1
  files_modified: 0
---

# Phase 00 Plan 04: Voice Guide Summary

**One-liner:** N1 voice spec with Colombian voseo conjugation tables, 12 anti-corporate prohibitions, citation format with pre-approved stats, and LATAM cultural calibration.

## What Was Built

`shared/voice-guide.md` — 250-line definitive voice specification for every N1 tool that produces user-facing output. This is the shared DRY file all skills and GPTs reference.

### File structure (8 sections)

1. **Voice Definition** — core character: direct, bilingual, systems-native, anti-hustle, grounded in evidence
2. **Language Rules** — Spanish primary, English for tech terms, when to mirror user's language
3. **Colombian Voseo Rules** — conjugation table (10 verbs), imperative table (6 forms), common openers, hard prohibitions
4. **Anti-Corporate Prohibitions** — 12 forbidden phrases, forbidden motivational fluff, forbidden hustle celebration, what N1 does instead
5. **Citation Format** — standard formats (basic, with effect size, with sample size, conversational), pre-approved N1 stats, forbidden sources
6. **Quick Mode vs Deep Mode** — explicit voice differentiation for 5-10 min vs 30-45 min sessions
7. **Cultural Calibration for Colombia/LATAM** — what is normative (not pathological), real constraints to name, valid transition patterns, tone calibrations
8. **What N1 Is NOT** — internal calibration: not therapy, not motivation coach, not job placement, not omniscient

## Verification Results

All plan verification criteria passed:

| Check                           | Result                      |
| ------------------------------- | --------------------------- |
| `grep "voseo"`                  | 5 matches                   |
| `grep "vos hablás"`             | 2 matches                   |
| `grep "Anti-Corporate"`         | 1 match                     |
| `grep "Citation Format"`        | 1 match                     |
| `grep "Cultural Calibration"`   | 1 match                     |
| `grep "maximizar tu potencial"` | 1 match (in forbidden list) |
| Line count                      | 250 lines (target: 100+)    |

## Deviations from Plan

None — plan executed exactly as written. The file includes all 7 required sections from the plan plus an additional Section 8 ("What N1 Is NOT") added per Rule 2 — missing critical functionality for scope clarity.

**[Rule 2 - Critical] Added Section 8: What N1 Is NOT**

- **Found during:** Task 1 creation
- **Issue:** Plan's `must_haves` and MASTER-PLAN references include therapeutic scope constraints, but no section explicitly listed what the voice prohibits at a meta level (not therapy, not coaching, not job placement). Without this, consuming tools could overpromise.
- **Fix:** Added Section 8 as internal calibration reference.
- **Files modified:** shared/voice-guide.md
- **Commit:** d3baaa7 (included in same task commit)

## Commits

| Hash    | Message                                                         |
| ------- | --------------------------------------------------------------- |
| d3baaa7 | feat(00-04): add shared/voice-guide.md — N1 voice for all tools |

## Known Stubs

None. This file is complete and non-derivative — it does not depend on data from other tools.

## Self-Check: PASSED
