---
phase: 02-ai-skills
plan: 05
subsystem: ai-skills
tags:
  [
    skill,
    n1-system,
    orchestrator,
    career-guidance,
    scct,
    protean-career-theory,
    schlossberg-4s,
    voseo,
    yaml,
  ]

# Dependency graph
requires:
  - phase: 02-ai-skills/02-01
    provides: skills/busca-adentro/SKILL.md — 4-dimension self-knowledge session logic
  - phase: 02-ai-skills/02-02
    provides: skills/construye-afuera/SKILL.md — 9-tool career action skill

provides:
  - skills/n1-system/SKILL.md — full integrated session orchestrator: triage → 4 dimensions → synthesis → construye-afuera → completion milestone → evolution

affects:
  - 03-gpts (n1-system logic mirrors into GPT instructions)
  - all future phases that build on the complete N1 skill set

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Inline orchestration: n1-system references Wave 1 skills via Read tool instructions, does not duplicate logic"
    - "SCCT chain as session spine: values (outcome expectations) → strengths (self-efficacy) → identity (interests + possible selves) → purpose (goals + meaning)"
    - "Completion milestone pattern: all 4 dimensions completed: true AND 1 construye-afuera tool used = full YAML generated"
    - "Evolution layer: next_reassessment timestamp tracked, instrument pacing rules enforced"
    - "Deep mode voice: more Socratic, more patient with ambiguity than standalone skills"

key-files:
  created:
    - skills/n1-system/SKILL.md
  modified: []

key-decisions:
  - "n1-system executes all 4 dimensions inline using busca-adentro reference files — it is not a redirect to busca-adentro, it is the full orchestrator loading that skill's logic as context"
  - "Completion milestone requires all 4 dimensions AND at least 1 construye-afuera tool — partial completion does not trigger the milestone"
  - "Evolution re-assessment checks profile next_reassessment date and shows deltas from previous session, not a full re-run"
  - "Crisis routing: handle with Construye Afuera tool first, then return to system — crisis users get tactical help before self-knowledge exploration"
  - "Profile imported at session start enables skip-what-is-done continuity across multiple sessions"

patterns-established:
  - "Meta-skill pattern: orchestrator skill that loads Wave 1 skills as context via reads: list and Read tool"
  - "YAML completion gate: milestone fires only when boolean conditions on profile fields are met"
  - "Instrument pacing table: embedded in evolution section to prevent premature retakes"

requirements-completed: [SKILL-03, SKILL-06, SKILL-07, SKILL-08]

# Metrics
duration: 12min
completed: 2026-03-23
---

# Phase 02 Plan 05: N1 System Summary

**n1-system orchestrator that runs full 4-dimension career journey inline with SCCT chain, cross-dimension synthesis, path-adaptive Construye Afuera tooling, and completion milestone YAML generation**

## Performance

- **Duration:** 12 min
- **Started:** 2026-03-23T22:40:28Z
- **Completed:** 2026-03-23T22:52:00Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Full integrated session orchestrator in one SKILL.md file (493 lines, within token budget)
- Complete session flow: MIND-SAFE check → disclaimer → framing → profile import → mode selection → triage → 4 dimensions inline → cross-dimension synthesis → Construye Afuera bridge → completion milestone → evolution
- Completion milestone fires when all 4 dimensions `completed: true` AND at least 1 Construye Afuera tool was used — generates full "Your N1 System" YAML block
- Evolution layer with re-assessment prompts, delta tracking, and instrument pacing rules (CAAS-12 4-6 weeks, Big Five 3-6 months)
- Both standalone (no profile) and profile-enhanced paths handled
- Colombian voseo throughout all user-facing prompt text

## Task Commits

Each task was committed atomically:

1. **Task 1: Create SKILL.md — n1-system full integrated orchestrator** - `871af31` (feat)

**Plan metadata:** (to be added after final metadata commit)

## Files Created/Modified

- `skills/n1-system/SKILL.md` — Full integrated session orchestrator. Loads busca-adentro and construye-afuera inline. Contains triage, dimension sequence, integration synthesis, Construye Afuera bridge, completion milestone, and evolution sections.

## Decisions Made

- Inline orchestration: n1-system loads Wave 1 skill files via `reads:` and executes their logic directly — it does not redirect users to busca-adentro or construye-afuera as separate sessions
- SCCT chain made explicit in the integration synthesis as user-facing language ("tu cadena") without labeling the framework
- Crisis routing: handle urgent situation with a Construye Afuera tool first (e.g., Layoff Response Kit), then return to the system — this respects user urgency without abandoning the deeper work
- Completion milestone kept to one non-negotiable condition: all 4 dimensions AND 1 tool completed — partial completions produce partial YAMLs only

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- All 5 Claude Skills are now complete: busca-adentro, construye-afuera, n1-system, ghost-check, compass
- Phase 02 (ai-skills) is complete and ready for transition
- Next: Phase 03 (GPTs) — convert skill logic into ChatGPT GPT instruction configs (~1,800 token budget per GPT)
- n1-system's inline orchestration pattern will need to be condensed significantly for GPT format

## Known Stubs

None — n1-system correctly references Wave 1 skill files (busca-adentro, construye-afuera) via the `reads:` list and Read tool instructions. The actual dimension logic and tool logic lives in those files, not in n1-system. This is the intentional architecture (D-13).

---

## Self-Check: PASSED

- skills/n1-system/SKILL.md: FOUND
- Commit 871af31: FOUND

---

_Phase: 02-ai-skills_
_Completed: 2026-03-23_
