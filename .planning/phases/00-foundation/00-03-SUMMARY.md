---
phase: 00-foundation
plan: "03"
subsystem: shared-foundation
tags:
  [prompting, ACT, MI, CBT, CoE, SELF-DISCOVER, ToT, Reflexion, career-guidance]
dependency_graph:
  requires: [00-01, 00-02]
  provides: [shared/prompting-stack.md]
  affects:
    [
      skills/busca-adentro,
      skills/construye-afuera,
      skills/n1-system,
      skills/n1-ghost-check,
      skills/n1-compass,
      gpts/*,
    ]
tech_stack:
  added: []
  patterns:
    [
      DRY shared foundation,
      XML tag conventions,
      7-step prompt chain,
      SELF-DISCOVER module routing,
    ]
key_files:
  created:
    - shared/prompting-stack.md
  modified: []
decisions:
  - "ACT techniques documented as internal-only — never use modality labels with users"
  - "SELF-DISCOVER routing table defined for career contexts — maps situation to technique"
  - "Scope disclaimer text standardized in Section 8 (Step 2) as canonical source"
  - "Reflexion checklist includes Colombian voseo and Protean Career Theory autonomy check"
metrics:
  duration: "3m"
  completed_date: "2026-03-23"
  tasks_completed: 1
  files_created: 1
---

# Phase 00 Plan 03: Shared Prompting Stack Summary

Prompting technique library for all N1 skills — ACT + Socratic + MI + CBT + CoE + SELF-DISCOVER + ToT + Reflexion + XML tag conventions in a single 495-line DRY reference file.

## What Was Built

`shared/prompting-stack.md` — the complete prompting technique authority for all N1 skills and tools. Every skill references this file instead of duplicating technique definitions.

### Content sections:

1. **ACT Values Clarification** — defusion (internal), willingness, committed action moves in Colombian Spanish
2. **Socratic Questioning** — 4 move types: definition, elenchus, counterfactual, maieutics
3. **MI (OARS)** — open questions, affirm, reflect, summarize + rolling with resistance + evoking change talk
4. **CBT Cognitive Restructuring** — catch/check/change/connect for career-limiting beliefs with a catalog of 6 common beliefs
5. **Chain of Empathy (CoE)** — 5-step internal reasoning template before any emotionally-loaded response
6. **SELF-DISCOVER (DeepMind NeurIPS 2024)** — routing table: 9 situation types mapped to primary/secondary technique
7. **Tree of Thoughts (ToT)** — 3-branch career decision template with synthesis and explicit recommendation requirement
8. **Prompt Chaining** — 7-step career conversation (triage → warm opening → exploration → synthesis → options → action → close) + Quick Mode (4 steps)
9. **Reflexion Self-Critique** — 9-item checklist run before every substantive response
10. **XML Tag Structure** — required + optional tags with placement conventions for SKILL.md authors

Plus: quick-reference signal-to-technique table and "what this file does NOT cover" section pointing to other shared/ files.

## Task Commits

| Task | Name                            | Commit  | Files                     |
| ---- | ------------------------------- | ------- | ------------------------- |
| 1    | Write shared/prompting-stack.md | 75a2e24 | shared/prompting-stack.md |

## Verification Results

```
grep -c "ACT Values Clarification" shared/prompting-stack.md → 3 matches
grep -c "OARS" shared/prompting-stack.md → 4 matches
grep -c "Reflexion" shared/prompting-stack.md → 4 matches
grep -c "XML" shared/prompting-stack.md → 2 matches
wc -l shared/prompting-stack.md → 495 lines (target: 150+)
```

All done criteria met.

## Decisions Made

| Decision                            | Rationale                                                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ACT techniques internal-only        | CLAUDE.md convention: never use therapeutic labels with users                                                    |
| SELF-DISCOVER routing table         | Maps 9 career situation types to techniques — prevents skill authors from applying all techniques simultaneously |
| Scope disclaimer canonical location | Section 8, Step 2 — single authoritative text, all skills copy from here                                         |
| "NOT for" sections per technique    | Prevents misuse that would break user trust (e.g., labeling defusion, forced acceptance)                         |

## Deviations from Plan

None — plan executed exactly as written. File structure and content followed plan specification verbatim with additional "When to use" sections added per technique for skill author usability (Rule 2: missing critical functionality — skill authors need triggering conditions, not just move descriptions).

## Known Stubs

None. This file is complete documentation, not a stub. All 9 techniques have full content. The file references `shared/safety-protocol.md` and `shared/voice-guide.md` for their respective domains — those are separate deliverables in this same phase.

## Self-Check: PASSED

- [x] `shared/prompting-stack.md` exists (495 lines)
- [x] Commit `75a2e24` exists
- [x] All 5 verification grep patterns match
