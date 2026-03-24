---
phase: 04-chatgpt-gpts
plan: "03"
subsystem: gpts
tags: [compass, caas-12, career-adaptability, chatgpt-gpt, yaml-profile, latam]

requires:
  - phase: 00-foundation
    provides: shared/safety-protocol.md, shared/voice-guide.md, shared/profile-format.md, shared/research-base.md
  - phase: 02-ai-skills
    provides: skills/compass/SKILL.md — source to compress from

provides:
  - gpts/compass/instructions.md — GPT system prompt (1,398 words, all 12 CAAS questions)
  - gpts/compass/knowledge/caas-guide.md — CAAS-12 theoretical background + interpretation tables
  - gpts/compass/knowledge/research-citations.md — pre-formatted citations for Compass responses
  - gpts/compass/knowledge/profile-format.md — Profile Interchange Format v1 schema with Compass annotations
  - gpts/compass/examples.md — 3 example conversations (standard, profile update, English user)

affects:
  - 04-04 (Ghost Check GPT — same pattern)
  - downstream N1 Busca Adentro GPT (CTA target)
  - web/compass (cross-referenced as validated scorecard destination)

tech-stack:
  added: []
  patterns:
    - "GPT instructions: identity block + safety + CAAS caveat + profile import + all questions + output format + CTAs + voice rules"
    - "Knowledge files: theory in caas-guide.md, citations in research-citations.md, schema in profile-format.md"
    - "All 12 CAAS questions inline in instructions (not moved to knowledge) — Compass is lean enough to hold them"
    - "completed:false for all Compass-populated fields — snapshot, not full exploration"

key-files:
  created:
    - gpts/compass/instructions.md
    - gpts/compass/knowledge/caas-guide.md
    - gpts/compass/knowledge/research-citations.md
    - gpts/compass/knowledge/profile-format.md
    - gpts/compass/examples.md
  modified: []

key-decisions:
  - "All 12 CAAS questions kept inline in instructions.md — Compass is lean, questions fit, executor needs them in one file"
  - "LATAM Control calibration inline at subscale level — not just in knowledge file, right where it matters"
  - "completed:false for all Compass outputs — signals to downstream tools these are starting points"
  - "CAAS administration caveat verbatim at top of instructions — honesty before session starts"
  - "3 conditional CTAs: always Busca Adentro, plus conditional for Confidence < 3.0, value misalignment, and scorecard"

patterns-established:
  - "Compass pattern: quick-check GPT with all questions inline, theory in knowledge files"
  - "Snapshot format: CAAS scores + top 3 values + efficacy score + obstacle + 3 actions"
  - "YAML always completed:false from Compass — downstream tools treat as draft"

requirements-completed: [GPT-03, GPT-05, GPT-06]

duration: 8min
completed: 2026-03-24
---

# Phase 04 Plan 03: N1 Compass GPT Summary

**N1 Compass GPT — CAAS-12 conversational quick-check (1,398 words) with LATAM calibration, values check, efficacy pulse, and portable YAML snapshot output.**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-24T00:06:29Z
- **Completed:** 2026-03-24T00:14:05Z
- **Tasks:** 2/2
- **Files modified:** 5

## Accomplishments

- instructions.md: 1,398 words (under 1,400 limit), all 12 CAAS questions verbatim, safety disclaimer, CAAS administration caveat, LATAM Control calibration, values quick-check, self-efficacy pulse, snapshot template, YAML output block, 3 conditional CTAs, voice rules
- 3 knowledge files: caas-guide.md (theoretical background + subscale interpretation tables), research-citations.md (pre-formatted citations), profile-format.md (complete v1 schema with Compass-specific annotations)
- examples.md: 3 example conversations covering standard session (new user), profile update flow, and English-language user bilingual behavior

## Task Commits

1. **Task 1: instructions.md + 3 knowledge files** - `53bd12e` (feat)
2. **Task 2: conversation examples** - `836036d` (feat)

## Files Created/Modified

- `gpts/compass/instructions.md` — GPT system prompt: identity, safety, CAAS caveat, 12 questions, values check, efficacy pulse, snapshot format, YAML block, CTAs, voice rules
- `gpts/compass/knowledge/caas-guide.md` — CAAS-12 theory, subscale interpretations, LATAM calibration detail, integration patterns
- `gpts/compass/knowledge/research-citations.md` — Pre-formatted citations: Savickas & Porfeli (2012), Bandura (1997), Schwartz (1992), LATAM calibration evidence
- `gpts/compass/knowledge/profile-format.md` — Profile Interchange Format v1 full YAML schema, what Compass populates vs leaves null, Career Path Taxonomy
- `gpts/compass/examples.md` — 3 annotated conversations showing full session flow

## Deviations from Plan

None — plan executed exactly as written.

Word count required trimming from 1,598 to 1,398 (inline fix, no behavioral change): condensed snapshot template placeholders, YAML block formatting, Control-low note, CAAS caveat phrasing. All required content preserved.

## Known Stubs

None. All files are complete. No placeholder data flows to user-facing output. YAML block in instructions.md intentionally uses `X` placeholders — these are template markers for the GPT to fill at runtime, not UI stubs.
