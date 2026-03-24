---
phase: 04-chatgpt-gpts
plan: "04"
subsystem: gpts/ghost-check
tags: [gpt, ghost-check, scoring-engine, latam, values-alignment]
dependency_graph:
  requires:
    [
      shared/voice-guide.md,
      shared/safety-protocol.md,
      shared/profile-format.md,
      skills/ghost-check/SKILL.md,
    ]
  provides: [gpts/ghost-check/instructions.md, gpts/ghost-check/knowledge/]
  affects: []
tech_stack:
  added: []
  patterns:
    [
      GPT-instructions-compression,
      knowledge-file-RAG,
      Profile-Interchange-Format-v1,
    ]
key_files:
  created:
    - gpts/ghost-check/instructions.md
    - gpts/ghost-check/knowledge/scoring-engine.md
    - gpts/ghost-check/knowledge/research-citations.md
    - gpts/ghost-check/knowledge/profile-format.md
    - gpts/ghost-check/examples.md
  modified: []
decisions:
  - "Scoring table kept verbatim in instructions.md (not offloaded to knowledge file) — deterministic tool needs table in-context"
  - "LATAM salary calibration embedded in scoring table row for Transparencia salarial (8 pts for no-salary in LATAM vs 0 pts for international)"
  - "Shareable output rule stated as NUNCA to match exactly the SKILL.md CRÍTICO language"
metrics:
  duration_minutes: 25
  completed_date: "2026-03-24T00:12:21Z"
  tasks_completed: 2
  tasks_total: 2
  files_created: 5
  files_modified: 0
---

# Phase 04 Plan 04: N1 Ghost Check GPT Summary

**One-liner:** GPT system prompt with deterministic 6-category scoring engine (0-100), LATAM salary calibration, values alignment via Profile Interchange Format v1, and shareable output rule — compressed from SKILL.md to 1,190 words.

---

## Tasks Completed

| Task | Name                                          | Commit    | Files                                                                        |
| ---- | --------------------------------------------- | --------- | ---------------------------------------------------------------------------- |
| 1    | Write instructions.md and all knowledge files | `03e278d` | instructions.md, scoring-engine.md, research-citations.md, profile-format.md |
| 2    | Write conversation examples                   | `ac1e07d` | examples.md                                                                  |

---

## What Was Built

**gpts/ghost-check/instructions.md** (1,190 words / ~1,540 tokens):

- Identity block (3 lines)
- Safety disclaimer verbatim from shared/safety-protocol.md Section 1
- MIND-SAFE check with Tier 1 and Tier 2 handling
- Profile check prompt and input request with LATAM note
- Full 6-category scoring table with LATAM calibrations
- Adjustment factors (unrealistic requirements -5 pts, empty urgency, email-only)
- 4 score tiers with verdicts (80-100, 60-79, 40-59, 0-39)
- Exact output format with ✓/⚠/✗ signal table
- Values alignment section (only if profile provided) with bulls_eye.work < 5 handling
- Shareable output with NUNCA rule
- CTAs to N1 Compass and web tool
- Silent reflexion checklist
- Voice rules (voseo, direct, anti-corporate)

**gpts/ghost-check/knowledge/scoring-engine.md**:

- Per-category extended signal examples (5 categories × 4 sections: what to look for, real signals, ghost signals, LATAM calibration)
- Buzzword red-flag list and specificity signals for language patterns
- Reposting detection technique (Google search for distinctive phrases)
- Adjustment factor rationale and application rules
- Profile alignment reading logic with optional Schwartz fields

**gpts/ghost-check/knowledge/research-citations.md**:

- Greenhouse (2023): 20-40% ghost job estimate — primary citation
- Resume Builder (2022), LinkedIn Talent Insights (2021-2023), SHRM (2022)
- iCIMS ATS research, Jobvite Recruiter Nation Survey
- Computrabajo/OCC LATAM salary transparency data (justifies LATAM calibration)
- ManpowerGroup LATAM talent shortage context
- BambooHR and Indeed statistics for user-facing context
- Forbidden claim rules (no company-specific ghost job claims, no certainty language)

**gpts/ghost-check/knowledge/profile-format.md**:

- Complete Profile Interchange Format v1 YAML schema
- Header explicitly stating Ghost Check reads: values.core_values, values.bulls_eye.work
- Ghost Check does NOT write to profile (read-only, scoring tool only)
- Field-by-field table showing what Ghost Check uses vs. ignores
- Portability rule documentation
- Version compatibility rules
- Example populated profile with values section completed

**gpts/ghost-check/examples.md**:

- Example 1: Text-pasted offer, 45 days old, score 63/100 (mixed), no profile — shows full scoring flow + shareable output offer
- Example 2: Profile + offer, score 75/100 but alignment 4/10 — shows double misalignment when bulls_eye.work < 5 AND role doesn't align
- Example 3: Verbal description, impossible requirements, score 18/100 — demonstrates verbal input path, Greenhouse citation, low-score direct language

---

## Must-Haves Verification

| Check                                                           | Status                           |
| --------------------------------------------------------------- | -------------------------------- |
| instructions.md word count ≤ 1,400 words                        | PASS (1,190 words)               |
| "No es terapia" present in instructions.md                      | PASS                             |
| 6 scoring categories with point values present                  | PASS                             |
| 4 score tiers (0-39, 40-59, 60-79, 80-100) with verdicts        | PASS                             |
| YAML output block compatible with Profile Interchange Format v1 | PASS (version: "1.0" referenced) |
| Colombian voseo throughout instructions.md                      | PASS                             |
| NUNCA incluir rule present                                      | PASS                             |
| All 4 knowledge files exist and non-empty                       | PASS                             |
| examples.md has 2-3 labeled example sections                    | PASS (3 examples)                |
| At least one example shows ✓/⚠/✗ Ghost Score breakdown          | PASS (all 3)                     |
| At least one example shows values alignment analysis            | PASS (Example 2)                 |
| Shareable output offered in at least one example                | PASS (Example 1)                 |
| No job text in shareable output section of examples             | PASS                             |

---

## Deviations from Plan

None — plan executed exactly as written.

All 13 instructions.md content sections specified in the plan are present. Scoring table kept verbatim in instructions (not split to knowledge file) per the plan's explicit directive "KEEP in instructions: full scoring table." LATAM salary calibration embedded inline in the table row as the plan specified.

---

## Known Stubs

None. All links reference placeholder URLs (`[URL del web tool]`, `[referencia a web/ghost-check]`) which is intentional — the web tool URLs are not assigned yet (phase 05 will build web tools). These are placeholders by design, documented in the plan. They do not prevent the GPT from functioning.

---

## Key Decisions Made

1. **Scoring table in instructions.md, not knowledge file**: Ghost Check is deterministic. The scoring table must be in-context for reliable, consistent scoring. Knowledge files hold extended signal examples for GPT RAG retrieval when needed.

2. **LATAM salary calibration embedded in table**: The distinction (8 pts for LATAM context vs. 0 pts for international) is a first-class scoring rule, not an edge case. It lives in the main table, not in a footnote or knowledge file.

3. **"NUNCA" language preserved verbatim from SKILL.md**: The SKILL.md uses "CRÍTICO" and "Nunca incluir" — the GPT instructions use "NUNCA incluir" to match exactly and ensure the rule is unmistakable in the GPT context.
