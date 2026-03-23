---
phase: 00-foundation
plan: "05"
subsystem: shared
tags: [safety, MIND-SAFE, crisis-detection, scope-disclaimer, assessment-pacing]
dependency_graph:
  requires: [00-02]
  provides: [shared/safety-protocol.md]
  affects: [skills/*/SKILL.md, gpts/*/instructions.md]
tech_stack:
  added: []
  patterns: [MIND-SAFE, scope-disclaimer, crisis-triage-tiers]
key_files:
  created: [shared/safety-protocol.md]
  modified: []
decisions:
  - "MIND-SAFE acronym (Monitor, Identify, Navigate, Decide — Safety And Followthrough Extension) defined as the shared crisis detection layer"
  - "Three-tier crisis classification: Tier 1 immediate escalation, Tier 2 warm referral, Tier 3 acknowledge-and-continue"
  - "Therapeutic techniques used internally but never labeled externally — ACT/MI/cognitive restructuring are prompting techniques, not public claims"
  - "Cultural calibration documented: high MLQ-Search and lower CAAS Control are LATAM norms, not pathological signals"
metrics:
  duration: "3m"
  completed_date: "2026-03-23"
  tasks_completed: 1
  files_created: 1
---

# Phase 00 Plan 05: Shared Safety Protocol Summary

## One-liner

Safety protocol file with MIND-SAFE three-tier crisis detection, LATAM-specific crisis resources, verbatim scope disclaimer templates, and assessment pacing rules for all N1 tools.

## What Was Built

`shared/safety-protocol.md` — 249-line shared specification that every N1 skill, GPT, and web tool loads. Provides:

1. **Scope Disclaimer Template** — verbatim copyable text in Spanish (Colombian voseo) and English. Required display at every session start.

2. **MIND-SAFE Protocol** — crisis detection with three tiers:
   - Tier 1: Immediate escalation (suicidal ideation, active harm)
   - Tier 2: Warm referral (severe depression, panic, burnout collapse, trauma indicators)
   - Tier 3: Acknowledge-and-continue (normal career stress, impostor syndrome, situational sadness)

3. **Crisis Response Templates** — verbatim copy text for Tier 1 and Tier 2 responses, with rule to stop career conversation after Tier 1 until user confirms safety.

4. **Crisis Resources** — Colombia (Línea 106, Teléfono Esperanza), LATAM (México, Argentina, Chile, Venezuela), International (findahelpline.com, befrienders.org).

5. **Referral Criteria** — 6 conditions that trigger referral to human professional, plus referral language template.

6. **Assessment Pacing Rules** — minimum intervals table: CAAS-12 (4-6 weeks), MLQ-10 (4-6 weeks), Big Five (3-6 months), VIA (6+ months), AAQ-II (6-8 weeks), Bull's Eye (event-driven).

7. **Emotional Flooding Detection** — 5 signals of overwhelm, containment response template ("empecemos por eso").

8. **Limitations Transparency Template** — "Lo que N1 SÍ/NO hace" list for honest capability disclosure.

9. **Prohibited Claims** — explicit list of forbidden language (cura, trata, diagnostica, garantiza, certifica).

10. **Cultural Calibration Notes** — LATAM normative data for MLQ-Search and CAAS Control interpretation.

## Commits

| Hash    | Message                                                            |
| ------- | ------------------------------------------------------------------ |
| ff09a14 | feat(00-05): shared safety protocol — MIND-SAFE + scope boundaries |

## Deviations from Plan

### Auto-additions (Rule 2 — Missing Critical Functionality)

**1. [Rule 2 - Missing] Added Venezuela crisis line to resources**

- Found during: Task 1 content authoring
- Issue: Plan listed Colombia, Mexico, Argentina, Chile but not Venezuela (major LATAM population)
- Fix: Added ASOVAC Venezuela line to Section 4
- Files modified: shared/safety-protocol.md
- Commit: ff09a14

**2. [Rule 2 - Missing] Added Cultural Calibration as Section 10**

- Found during: Task 1 content authoring
- Issue: PhD Psychologist recommendation (REVIEW-SYNTHESIS.md line 104) specified MLQ-Search and CAAS Control LATAM norms must be documented; this was in the context references but not in the original task action outline
- Fix: Added Section 10 with explicit cultural calibration notes to prevent pathologizing normative LATAM responses
- Files modified: shared/safety-protocol.md
- Commit: ff09a14

**3. [Rule 2 - Missing] Added internal vs external labeling rule to Section 9**

- Found during: Task 1 — MASTER-PLAN-v2.md debate resolution specified therapeutic techniques used internally but never labeled externally
- Fix: Added explicit rule in Section 9 clarifying internal vs external labeling convention
- Files modified: shared/safety-protocol.md
- Commit: ff09a14

## Verification Results

- `grep -c "MIND-SAFE"` → 4 matches
- `grep -c "Línea 106"` → 3 matches
- `grep -c "scope disclaimer"` → 1 match
- `grep -c "Tier 1"` → 5 matches
- `grep "4–6 weeks"` → 2 matches (CAAS-12, MLQ-10)
- `grep -i "Limitations"` → 1 match
- File is 249 lines (exceeds 100-line minimum)

## Known Stubs

None. All sections are fully populated with actionable content.

## Self-Check: PASSED

- shared/safety-protocol.md: FOUND
- Commit ff09a14: FOUND
