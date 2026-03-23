---
phase: 00-foundation
plan: 06
subsystem: research
tags:
  [
    research-base,
    citations,
    frameworks,
    CAAS,
    ACT,
    SDT,
    SCCT,
    VIA,
    career-theory,
  ]

# Dependency graph
requires:
  - phase: 00-02
    provides: Profile Interchange Format — defines the shared/ DRY architecture this file feeds

provides:
  - shared/research-base.md — 30 frameworks condensed, 8 layers, ~2,700 tokens, citable evidence for all N1 skills

affects:
  - skills/busca-adentro
  - skills/construye-afuera
  - skills/n1-system
  - skills/ghost-check
  - skills/compass
  - tools (any static web tool with embedded citations)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Research base as single authority: skills embed citations from shared/research-base.md, never copy or paraphrase"
    - "Max 2-line entry format: name + year + key finding + N1 use"
    - "Pre-formatted Spanish statistics for direct verbatim citation in responses"

key-files:
  created:
    - shared/research-base.md
  modified: []

key-decisions:
  - "30 entries (25+ required) organized in 8 layers matching FRAMEWORK-ARCHITECTURE.md"
  - "Layer 8 includes 6 prompting techniques (MIND-SAFE, CoE, SELF-DISCOVER, MI, Socratic, CBT) — not in original layer count but required by PLAN.md"
  - "Assessment Tier Reference included (Tier 1/2/3) to guide skill recommendations on tool trust levels"
  - "Key statistics pre-formatted in Spanish for verbatim embedding — do not paraphrase"

patterns-established:
  - "Citation format: (Author, Year) — finding. N1 use: one sentence."
  - "Spanish statistics block: use verbatim, not paraphrased"
  - "File stays under 4K tokens — update only at phase transitions"

requirements-completed:
  - FOUN-07

# Metrics
duration: 5min
completed: 2026-03-23
---

# Phase 00 Plan 06: Research Base Summary

**shared/research-base.md with 30 frameworks in 8 layers (~2,700 tokens) — pre-formatted Spanish citations for CAAS, ACT, SDT, Frankl, Bandura and 25+ more**

## Performance

- **Duration:** 5 min
- **Started:** 2026-03-23T20:28:00Z
- **Completed:** 2026-03-23T20:32:56Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Created `shared/research-base.md` as the single authority for research citations across all N1 skills
- 30 framework entries organized in 8 layers matching FRAMEWORK-ARCHITECTURE.md
- Key statistics pre-formatted in Spanish for direct verbatim embedding in skill responses
- Assessment Tier Reference (Tier 1/2/3) to guide skill recommendations on tool trust

## Task Commits

1. **Task 1: Write shared/research-base.md** - `f59c261` (feat)

## Files Created/Modified

- `shared/research-base.md` — Condensed citations for 30 frameworks, 8 layers, ~2,700 tokens. Single authority for all N1 skills.

## Decisions Made

- Included 30 entries (plan required 25+) to cover all frameworks from FRAMEWORK-ARCHITECTURE.md fully
- Layer 8 covers prompting techniques (MIND-SAFE, CoE, SELF-DISCOVER, MI, Socratic, CBT) — 6 entries that skills need to know about
- Assessment Tier Reference section added: skills need to know which tools to recommend (MBTI = Tier 3, avoid)
- File kept under 4K tokens (1,810 words / ~2,700 tokens) — leaves headroom for future additions without exceeding skill load budget

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `shared/research-base.md` is ready for immediate embedding in any skill's SKILL.md via `@shared/research-base.md`
- Skills in plans 00-03, 00-04, 00-05 can now reference specific layer sections and use verbatim statistics
- No blockers

---

_Phase: 00-foundation_
_Completed: 2026-03-23_
