---
phase: 02-ai-skills
plan: 03
subsystem: ai-skills
tags:
  [ghost-check, career-guidance, colombian-voseo, safety-protocol, claude-skill]

# Dependency graph
requires:
  - phase: 02-ai-skills
    provides: shared foundation files (safety-protocol, voice-guide, profile-format) and web/ghost-check reference implementation
provides:
  - skills/ghost-check/SKILL.md — standalone conversational ghost job detector with 6-signal scoring engine
  - Values alignment check when N1 profile is pasted
  - Shareable output (score+verdict only, no posting text)
  - CTA to N1 Compass and web ghost-check tool
affects:
  - 02-ai-skills (02-04 n1-compass, 02-05 n1-system — can reference ghost-check as top-of-funnel CTA)
  - GPTs ghost-check instructions (same scoring logic, different format)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Lean SKILL.md pattern: 3 shared reads only, inline Reflexion checklist (not full prompting-stack)"
    - "Score polarity: higher = more real (0-100 real-signal scale vs web tool's ghost-signal scale)"
    - "Shareable output isolation: score+verdict only, never user-pasted content"
    - "Optional profile enhancement: values_alignment section runs only if profile is pasted"

key-files:
  created:
    - skills/ghost-check/SKILL.md
  modified: []

key-decisions:
  - "Score scale inverted from web tool: SKILL.md uses 0-100 where higher = more real (web tool accumulates ghost signals where higher = more suspicious)"
  - "3 shared files only (safety-protocol, voice-guide, profile-format) — not full prompting-stack, respecting 4-6K token budget per D-03"
  - "Inline Reflexion checklist embedded directly in SKILL.md rather than loading prompting-stack.md"
  - "LATAM salary norm handled explicitly: no salary + LATAM context = 8 pts (not 0) to avoid penalizing normal regional practice"

patterns-established:
  - "Ghost Check scoring: 6 categories summing to 100, plus penalty adjustments for specific red flags"
  - "Standalone + profile-enhanced dual mode: every section of the skill works without profile, profile adds values_alignment section"
  - "MIND-SAFE on every message (not just session start) — critical for job-search emotional context"

requirements-completed: [SKILL-04, SKILL-06, SKILL-07, SKILL-08]

# Metrics
duration: 2min
completed: 2026-03-23
---

# Phase 2 Plan 03: N1 Ghost Check SUMMARY

**Conversational ghost job detector SKILL.md with 6-signal 0-100 scoring, values alignment check, and shareable output in Colombian voseo Spanish**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-23T22:15:46Z
- **Completed:** 2026-03-23T22:18:00Z
- **Tasks:** 1/1
- **Files modified:** 1

## Accomplishments

- Created `skills/ghost-check/SKILL.md` with YAML frontmatter (name, version, triggers ES+EN, reads 3 shared files)
- 6-category scoring engine producing a 0-100 "realness" score with per-signal breakdown and tier verdicts
- Values alignment section (activated when user pastes N1 profile) checking core_values and bulls_eye.work
- Shareable output format: score+verdict only — never includes user-pasted posting text
- Full MIND-SAFE integration (every message, not just session start) with scope disclaimer verbatim
- CTA to N1 Compass and web ghost-check tool after every session

## Task Commits

Each task was committed atomically:

1. **Task 1: Create SKILL.md — n1-ghost-check standalone detector** - `4933c86` (feat)

**Plan metadata:** TBD after this commit

## Files Created/Modified

- `skills/ghost-check/SKILL.md` — Standalone ghost job detector skill with 6-signal scoring engine, values alignment check, shareable output, safety protocol, CTA

## Decisions Made

- Score scale is inverted from the web tool: the SKILL.md uses 0-100 where higher = more likely real (accumulating positive signals). The web tool accumulates ghost signals where higher = more suspicious. This was necessary to match the plan spec's tier descriptions ("80-100: Alta probabilidad de ser real") while remaining consistent internally.
- LATAM salary norm explicitly handled: "sin mención de salario" in LATAM context gets 8 pts (not 0) because salary omission is culturally normative per voice-guide.md §7 and PROJECT.md constraints.
- Only 3 shared files loaded (not full prompting-stack) per D-03 token budget constraint. Reflexion checklist embedded inline as condensed version.

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None — no external service configuration required.

## Known Stubs

None — the SKILL.md is complete and self-contained. No hardcoded empty values or placeholders that would prevent the skill's goal from being achieved.

## Next Phase Readiness

- n1-ghost-check SKILL.md ready for Claude Skills publishing
- Sets the top-of-funnel CTA pattern for n1-compass (plan 04) and n1-system (plan 05)
- GPT instructions version can mirror this SKILL.md structure with ~1,800 token constraint adaptation

---

_Phase: 02-ai-skills_
_Completed: 2026-03-23_
