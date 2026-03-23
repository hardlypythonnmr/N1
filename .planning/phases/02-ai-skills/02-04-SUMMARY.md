---
phase: 02-ai-skills
plan: "04"
subsystem: ai-skills
tags: [caas, career-adaptability, compass, skill, voseo, safety, profile-format]

requires:
  - phase: 00-foundation
    provides: shared foundation files — voice-guide, safety-protocol, profile-format, research-base
  - phase: 01-static-web-tools
    provides: web/compass/index.html — standardized CAAS-12 web tool referenced by skill

provides:
  - skills/compass/SKILL.md — standalone CAAS-12 conversational career readiness skill with values quick-check, self-efficacy pulse, snapshot output, and profile YAML export

affects:
  - 02-05 (n1-system orchestrator — will reference n1-compass as entry point skill)
  - gpts/compass (same content, different platform)

tech-stack:
  added: []
  patterns:
    - "Conversational approximation pattern: use SKILL.md to guide Claude through validated instrument items conversationally, with explicit caveat about standardized vs. conversational administration"
    - "Conditional CTA pattern: different Busca Adentro CTAs based on lowest CAAS subscale and values alignment signals"
    - "LATAM calibration inline: normalization of lower Control scores documented directly at the subscale level, not just in shared files"
    - "Profile-enhanced not profile-required: dual paths — with profile (skip completed sections) and without (full 15-20 min check)"

key-files:
  created:
    - skills/compass/SKILL.md
  modified: []

key-decisions:
  - "Conversational CAAS-12 with explicit caveat: skill uses 12 questions in conversational format with mandatory disclosure that this is not equivalent to standardized administration (Savickas & Porfeli, 2012)"
  - "LATAM Control calibration inline: normalization note placed directly at the subscale question level and at snapshot output level — not left to Claude's inference"
  - "Three-section check: CAAS-12 + values quick-check (3 questions) + self-efficacy pulse (2 questions) — lean enough for single session, rich enough for actionable output"
  - "Profile YAML export with completed:false — approximation sessions export partial profiles with completed:false to be honest about depth vs. full dimension exploration"
  - "Contextual CTA: three CTA variants based on lowest confidence subscale, values misalignment, and web version referral — not a generic pitch"

patterns-established:
  - "Skill token budget: ~4-6K tokens for standalone skills (D-03 validated)"
  - "DRY via reads frontmatter: all shared content referenced via reads list, zero inline duplication"
  - "MIND-SAFE every message: safety check instruction placed in skill instructions, not just at session start"

requirements-completed:
  - SKILL-05
  - SKILL-06
  - SKILL-07
  - SKILL-08

duration: 2m
completed: "2026-03-23"
---

# Phase 02 Plan 04: N1 Compass Skill Summary

**CAAS-12 conversational career readiness check with values quick-check, self-efficacy pulse, and profile YAML export — standalone skill in ~15-20 minutes.**

## Performance

- **Duration:** 2m
- **Started:** 2026-03-23T22:35:49Z
- **Completed:** 2026-03-23T22:38:15Z
- **Tasks:** 1 of 1
- **Files modified:** 1

## Accomplishments

- Created `skills/compass/SKILL.md` (309 lines) — standalone career readiness quick-check skill covering CAAS-12 conversational, values quick-check, and self-efficacy pulse
- All 4 CAAS subscales covered with LATAM calibration embedded directly at the Control subscale — collectivist culture normalization explicit in both question context and snapshot output
- Snapshot output format produces specific 3-action recommendations, profile YAML compatible with Profile Interchange Format v1, and three contextual CTAs to Busca Adentro

## Task Commits

1. **Task 1: Create SKILL.md — n1-compass career readiness quick-check** - `5872906` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `skills/compass/SKILL.md` — Standalone CAAS-12 conversational skill: 12-question career adaptability check, 3-question values quick-check, 2-question self-efficacy pulse, snapshot output with recommendations, YAML export, contextual CTA

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None. All sections produce real output from user responses. YAML export contains placeholder markers (`[valor 1 extraído]`, `[score 1-5]`) which are Claude's fill-in-at-runtime instructions — not stub UI data.

## Self-Check: PASSED

- `skills/compass/SKILL.md` — FOUND
- Commit `5872906` — FOUND
- `grep "shared/safety-protocol"` — 5 matches
- `grep -i "concern\|control\|curiosity\|confidence"` — 12+ matches
- `grep "Busca Adentro"` — 4 matches
- `grep -i "latam\|Colombia\|normativ"` — 4 matches
- `grep "pensás\|querés\|tenés"` — 5+ matches (voseo confirmed)
- `grep -i "conversacional\|estandarizado"` — 4 matches (caveat confirmed)
