---
phase: 02-ai-skills
plan: 01
subsystem: ai-skills
tags:
  [
    claude-skill,
    self-knowledge,
    career-guidance,
    voseo,
    yaml-profile,
    triage,
    dimensions,
  ]

requires:
  - phase: 00-foundation
    provides: shared/prompting-stack.md, shared/voice-guide.md, shared/safety-protocol.md, shared/research-base.md, shared/profile-format.md

provides:
  - skills/busca-adentro/SKILL.md — entry point with triage, 4 dimensions, quick/deep modes, YAML output
  - skills/busca-adentro/references/values-framework.md — ACT values, Schwartz 10, Bull's Eye, LATAM conflict patterns
  - skills/busca-adentro/references/strengths-framework.md — VIA, Bandura 4 sources, flow mapping, Big Five verbal
  - skills/busca-adentro/references/identity-framework.md — Ibarra, Marcia status, CAAS-12 conversational, narrative theme
  - skills/busca-adentro/references/purpose-framework.md — Frankl 3 sources, MLQ interpretation, 4-quadrant, Ryff, Damon

affects:
  - 02-02 (construye-afuera reads profile YAML produced by this skill)
  - 02-03 (n1-system orchestrates across busca-adentro dimensions)
  - gpts/ (ChatGPT GPTs mirror same dimension logic)

tech-stack:
  added: []
  patterns:
    - "SKILL.md as AI orchestration layer — thin entry point delegating to reference files"
    - "Reference files as deep context — loaded on demand via Read tool, not inline"
    - "XML tag structure for sessions (session_start, triage, context_check, dimension, output)"
    - "Quick mode 5-question sequence building each question on previous answer"
    - "Soft gates between dimensions — suggest order, never block"

key-files:
  created:
    - skills/busca-adentro/SKILL.md
    - skills/busca-adentro/references/values-framework.md
    - skills/busca-adentro/references/strengths-framework.md
    - skills/busca-adentro/references/identity-framework.md
    - skills/busca-adentro/references/purpose-framework.md
  modified: []

key-decisions:
  - "SKILL.md as orchestration layer (200-575 lines), reference files carry framework depth — keeps token budget manageable"
  - "ACT in citation context flagged and converted to non-labeled form ('clarificación de valores') in user-facing text"
  - "LATAM calibration embedded in identity and purpose reference files: CAAS Control lower = collectivist norm, high MLQ-Search = culturally normative"
  - "Marcia status labeled descriptively, never as clinical diagnosis — frame as 'fase de exploración' not 'status diffusion'"

patterns-established:
  - "Reference file pattern: each dimension has a dedicated reference file with question sequences, interpretation guides, career implications, and YAML field mapping"
  - "Dual mode pattern: quick (5 questions per dimension) and deep (15-25 turns Socratic) with SKILL.md routing to reference file for depth"
  - "Caveat pattern: any conversational approximation of validated instrument includes explicit disclaimer and web tool reference"

requirements-completed: [SKILL-01, SKILL-06, SKILL-07, SKILL-08]

duration: 8min
completed: 2026-03-23
---

# Phase 02 Plan 01: N1 Busca Adentro Skill Summary

**n1-busca-adentro Claude Skill: triage-routed, 4-dimension self-knowledge exploration with quick/deep modes, MIND-SAFE safety protocol, and Profile Interchange Format v1 YAML output**

## Performance

- **Duration:** 8 minutes
- **Started:** 2026-03-23T22:15:49Z
- **Completed:** 2026-03-23T22:23:49Z
- **Tasks:** 2/2 completed
- **Files created:** 5

## Accomplishments

- Created SKILL.md entry point (575 lines) implementing full skill architecture: session start with MIND-SAFE + scope disclaimer, 3-question triage with routing table, context check for existing profiles, mode selection, 4 dimension blocks (values/strengths/identity/purpose) each with quick/deep modes and YAML output, evolution section with CTA to Construye Afuera
- Created 4 dimension reference files totaling 842 lines: each covers the dimension's frameworks, question sequences in Colombian voseo, interpretation guides, LATAM cultural calibrations, YAML field mappings, and quick/deep mode scripts
- Verified all acceptance criteria: DRY compliance (all 5 shared/ files in reads list), safety protocol (MIND-SAFE + scope disclaimer), forbidden therapeutic labels absent from user-facing text, voseo markers throughout, profile format compliance (version "1.0", completed: true fields)

## Task Commits

1. **Task 1: Create SKILL.md** - `488da32` (feat)
2. **Task 2: Create 4 dimension reference files** - `3ea079e` (feat)

## Files Created

- `skills/busca-adentro/SKILL.md` — Main skill entry point: YAML frontmatter, triage, session flow, all 4 dimensions, quick/deep modes, profile output, safety rules
- `skills/busca-adentro/references/values-framework.md` — ACT values clarification moves, Schwartz 10 values table with career signals, Bull's Eye 4-domain scoring, 3 LATAM conflict patterns, career implications by value cluster
- `skills/busca-adentro/references/strengths-framework.md` — VIA 24 strengths by virtue, Bandura 4 sources question sequence, flow activity mapping (challenge/skill/state), Big Five verbal approximation with career implications, VIA+Bandura+flow integration diagnostic
- `skills/busca-adentro/references/identity-framework.md` — Ibarra 3 experiment types, Marcia status heuristic table (NEVER clinical diagnosis), CAAS-12 all 4 subscales with LATAM control calibration, possible selves elicitation, Savickas narrative theme, limiting beliefs surfacing
- `skills/busca-adentro/references/purpose-framework.md` — MLQ presence/search conversational + 4-quadrant placement table + career implications per quadrant + LATAM high-search calibration, Frankl 3 sources with elicitation questions each, Ryff PWB purpose subscale, Damon beyond-self test, purpose practice development

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Removed ACT label from user-facing citation**

- **Found during:** Task 1 acceptance verification
- **Issue:** Line 180 in SKILL.md used "El ACT tiene efectos grandes..." in a user-facing quote block, violating the no-therapeutic-labels acceptance criterion
- **Fix:** Replaced with "La clarificación de valores tiene efectos grandes..." — retains the evidence claim without the modality label
- **Files modified:** skills/busca-adentro/SKILL.md
- **Commit:** 488da32 (fix applied before commit)

## Known Stubs

- `[N1 web link]` placeholders appear in SKILL.md and all 4 reference files — these reference web tools (Bulls Eye, MLQ, CAAS/Compass, Flow Logger) that are already built in Phase 01. Exact URLs to be added when GitHub Pages deployment URL is confirmed (Phase 05 or 06). This does not block the skill's function — the skill works standalone.

## Self-Check: PASSED

- FOUND: skills/busca-adentro/SKILL.md
- FOUND: skills/busca-adentro/references/values-framework.md
- FOUND: skills/busca-adentro/references/strengths-framework.md
- FOUND: skills/busca-adentro/references/identity-framework.md
- FOUND: skills/busca-adentro/references/purpose-framework.md
- FOUND commit: 488da32 (SKILL.md)
- FOUND commit: 3ea079e (4 reference files)
