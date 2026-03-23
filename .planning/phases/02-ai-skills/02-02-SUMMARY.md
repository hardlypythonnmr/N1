---
phase: 02-ai-skills
plan: "02"
subsystem: ai-skills
tags: [career-strategy, construye-afuera, skill, claude-skill, latam, voseo]
dependency_graph:
  requires:
    - Phase 00 foundation (shared/ files: prompting-stack, voice-guide, safety-protocol, research-base, profile-format)
    - 02-01 (busca-adentro skill — cross-skill CTA references)
  provides:
    - skills/construye-afuera/SKILL.md — 9-tool career strategy skill entry point
    - skills/construye-afuera/references/career-path-adaptations.md — 9 tools x 4 paths lookup table
    - skills/construye-afuera/references/latam-market-context.md — Colombia/LATAM market intelligence
    - skills/construye-afuera/references/assessment-scoring.md — CV rubric, ghost check signals, interview quality
  affects:
    - 02-03 (n1-system — references construye-afuera tools in orchestration flow)
    - All GPTs for construye-afuera (same content adapted for 1800-token instruction format)
tech_stack:
  added: []
  patterns:
    - Skill-in-skill reference architecture: SKILL.md references 8 files via Read tool instructions
    - Career path conditional logic: 4-path × 9-tool adaptation matrix
    - Layered assessment scoring: 10-dimension rubric with per-dimension improvement actions
    - Ghost check signal library: Red/Yellow/Green flag taxonomy
key_files:
  created:
    - skills/construye-afuera/SKILL.md
    - skills/construye-afuera/references/career-path-adaptations.md
    - skills/construye-afuera/references/latam-market-context.md
    - skills/construye-afuera/references/assessment-scoring.md
  modified: []
decisions:
  - "Anti-corporate prohibition enforced structurally: 'networking' removed from SKILL.md; replaced with instructional pattern 'construir relaciones profesionales' in voice rules"
  - "Voice rules section at bottom of SKILL.md acts as hard constraints section — same pattern as busca-adentro"
  - "assessment-scoring.md Dimensions 7+8 are optional but high-signal — only scored when profile available; acknowledged explicitly in rubric"
  - "career-path-adaptations.md covers all 20 specific_move taxonomy values in micro-adaptations table — enables fine-grained path adaptation beyond 4 macro-paths"
  - "LATAM market data acknowledged as structurally opaque — explicit instruction to tell users this rather than presenting ranges as authoritative"
metrics:
  duration: "1251s (approximately 21 minutes)"
  completed: "2026-03-23T22:36:42Z"
  tasks_completed: 2
  tasks_total: 2
  files_created: 4
  files_modified: 0
---

# Phase 02 Plan 02: N1 Construye Afuera Skill Summary

**One-liner:** Colombian-voseo career strategy skill with 9 path-adaptive tools (CV Audit through Layoff Response Kit) loaded via 3 reference files covering 9x4 adaptation matrix, LATAM market intelligence, and 10-dimension CV scoring rubric.

---

## What Was Built

### Task 1: SKILL.md — Main entry point (514 lines)

`skills/construye-afuera/SKILL.md` is the Claude Skill entry point for n1-construye-afuera.

**YAML frontmatter** contains: name, version, 20 triggers in Spanish and English, and `reads` list pointing to all 8 dependency files (5 shared/ + 3 references/).

**Session start flow:**

1. Load instruction: explicit Read tool instructions for all 8 files
2. MIND-SAFE check on every message (not just session start)
3. Scope disclaimer verbatim (from shared/safety-protocol.md)
4. Profile import prompt with fallback to 3-question triage

**Context check block:** extracts `triage.career_path`, `triage.situation`, `triage.urgency` and all completed dimension data from pasted profile YAML.

**Tool menu:** numbered list with path-specific suggestions per career_path × urgency matrix.

**9 tool implementations:**

| Tool                | Path-conditional focus                                | Profile integration                                                                 | Required citation                                        |
| ------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------- |
| CV Audit            | internal/external/portfolio/gap                       | values.career_implications, identity.narrative_theme, strengths.signature_strengths | Hiring Lab (2023) 75% ATS elimination                    |
| Interview Prep      | internal/external/pitch/re-entry                      | strengths.self_efficacy.mastery_experiences                                         | Bandura (1977) self-efficacy through mastery             |
| Negociación         | raise/offer/rates/re-entry terms                      | values.core_values                                                                  | Babcock & Laschever (2003) lifetime $500K-$1M+ impact    |
| STAR Builder        | internal/transferable/client/pre-gap                  | strengths.self_efficacy.mastery_experiences                                         | none (references Bandura via STAR framing)               |
| Profile Builder     | internal/searchability/thought-leadership/gap-control | identity.narrative_theme, purpose.life_theme, values.career_implications            | none specific                                            |
| Network Map         | internal/external/client/rebuilding                   | identity.possible_selves                                                            | Granovetter (1973) 83% opportunities from weak ties      |
| Job Hunt            | internal/multi-channel/client-acquisition/re-entry    | values.bulls_eye, identity.possible_selves                                          | none specific                                            |
| Layoff Response Kit | path-conditional 72hr protocol                        | N/A                                                                                 | first-72-hours research                                  |
| Grow Where You Are  | primary for stay_grow; secondary for others           | values.bulls_eye, strengths.signature_strengths                                     | McKinsey (2022) internal development retention predictor |

**Voice rules block** (hard constraints): voseo conjugations, forbidden phrases list (marca personal, maximizar tu potencial, agregar valor), citation requirement, LATAM examples.

**Limitations block:** Honest scope transparency template ready for user queries.

### Task 2: Three reference files

**career-path-adaptations.md** (161 lines):

- 9 tools × 4 paths lookup table: each cell has focus, key questions, output format, and language signals
- Triage-to-tool recommendation map: situation × career_path → recommended tool sequence
- specific_move micro-adaptations: all 20 taxonomy values from profile-format.md mapped to tool adaptations

**latam-market-context.md** (301 lines):

- Salary ranges: tech roles in Bogotá (Junior–Director, outsourcing vs product company vs US remote contractor)
- ATS systems: 8 platforms common in Colombia with formatting pass/fail rules
- LinkedIn Easy Apply dynamics specific to LATAM
- English proficiency requirements by role type with CEFR level guidance
- Employer culture: Globant, EPAM, Perficient, MercadoLibre, Rappi, Bancolombia — interview style, comp structure, career path
- Credential context: when requirements are rigid vs soft; certifications that carry weight (AWS, GCP, Google, Meta)
- Remote work platforms: Toptal, Turing, Upwork, Workana, Gun.io with vetting level notes
- Tax/contractor implications for Colombian independent contractors
- Structural barriers section: family obligations, geographic constraints, compensation compression, informal economy — framed as real constraints, not limiting beliefs

**assessment-scoring.md** (415 lines):

- 10-dimension CV rubric: per-dimension 5-level scoring (0-2/3-4/5-6/7-8/9-10) + improvement action per dimension
- Scoring interpretation: 80-100 ready/60-79 one revision/40-59 significant work/below 40 reconstruct
- LATAM-specific rubric notes: two-column Canva templates, photo on CV, marital status fields
- Ghost check signal library: Red flags (10+), Yellow flags (7), Green flags (12+) for job postings
- Ghost check scoring template with traffic light verdict
- Interview quality signals: Strong/Weak/Red flag categories from interviewer behavior
- Interview self-assessment template

---

## Verification Results

All 6 verification checks passed:

1. File structure: `skills/construye-afuera/` has SKILL.md + references/; references/ has all 3 files
2. DRY compliance: `grep "shared/" SKILL.md` returns all 5 shared/ files in reads list
3. Safety compliance: MIND-SAFE, disclaimer, safety-protocol all present in SKILL.md
4. All 9 tools: all 9 `### Herramienta X:` sections present
5. Path adaptation: 19 occurrences of `stay_grow|go_independent|pause_reset` in SKILL.md
6. Voice compliance: "networking" = 0 occurrences; "marca personal" and "maximizar tu potencial" appear only in prohibitions instruction block

---

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing critical detail] Anti-networking instruction clarification**

- **Found during:** Task 1 acceptance criteria verification
- **Issue:** The SKILL.md initially contained 3 occurrences of "networking" — 2 in the Herramienta 6 framing (correctly explaining the anti-networking framing) and 1 in voice rules. Plan acceptance criteria requires zero occurrences.
- **Fix:** Replaced the quoted framing that contained "networking" with an equivalent that uses "armar una lista de contactos para explotar" as the negative framing; replaced the instruction "Nunca uses la palabra 'networking' con el usuario" with equivalent phrasing that doesn't use the word itself.
- **Files modified:** skills/construye-afuera/SKILL.md
- **Commit:** beac5cd (part of Task 1 commit)

---

## Known Stubs

None — all 9 tools have full implementations. All reference files are complete. No placeholder data or TODO markers present.

---

## Self-Check: PASSED

Files exist:

- FOUND: skills/construye-afuera/SKILL.md
- FOUND: skills/construye-afuera/references/career-path-adaptations.md
- FOUND: skills/construye-afuera/references/latam-market-context.md
- FOUND: skills/construye-afuera/references/assessment-scoring.md

Commits exist:

- FOUND: beac5cd — feat(02-02): n1-construye-afuera SKILL.md
- FOUND: 0720e60 — feat(02-02): construye-afuera reference files
