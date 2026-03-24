---
phase: 04-chatgpt-gpts
plan: "01"
subsystem: gpts
tags:
  [chatgpt, gpt, busca-adentro, autoconocimiento, yaml, voseo, latam, safety]

requires:
  - phase: 02-ai-skills
    provides: SKILL.md source to compress from, shared/ foundation files
  - phase: 03-shared-foundations
    provides: voice-guide, safety-protocol, profile-format, research-base

provides:
  - gpts/busca-adentro/instructions.md — GPT system prompt (1319 words, 4-dimension flow)
  - gpts/busca-adentro/knowledge/methodology.md — framework summaries for 4 dimensions
  - gpts/busca-adentro/knowledge/research-citations.md — pre-formatted citations
  - gpts/busca-adentro/knowledge/exercises.md — quick + deep mode exercises per dimension
  - gpts/busca-adentro/knowledge/profile-format.md — Profile Interchange Format v1 schema
  - gpts/busca-adentro/examples.md — 3 example conversations

affects:
  - 04-02 (Construye Afuera GPT — receives cross-GPT CTA from this one)
  - 04-03 (Compass GPT — receives cross-GPT CTA from this one)
  - future web tools that consume Profile Interchange Format v1 YAML

tech-stack:
  added: []
  patterns:
    - "CTCO pattern: instructions contain flow + references to knowledge files for RAG"
    - "Profile Interchange Format v1 YAML — portable clipboard protocol between N1 tools"
    - "Colombian voseo as primary voice throughout all user-facing content"

key-files:
  created:
    - gpts/busca-adentro/instructions.md
    - gpts/busca-adentro/knowledge/methodology.md
    - gpts/busca-adentro/knowledge/research-citations.md
    - gpts/busca-adentro/knowledge/exercises.md
    - gpts/busca-adentro/knowledge/profile-format.md
    - gpts/busca-adentro/examples.md
  modified: []

key-decisions:
  - "Instructions compressed to 1319 words by moving all YAML blocks to profile-format.md reference instead of inline per-dimension"
  - "Each dimension section in instructions references exercises.md and methodology.md by filename for RAG retrieval"
  - "Examples show all 3 key patterns: crisis routing, profile import, full quick mode completion with YAML output"

patterns-established:
  - "Dimension pattern: opener quote + citation + 5 quick questions + knowledge file reference + soft gate + YAML output reference"
  - "Safety first: disclaimer verbatim at start of every example, MIND-SAFE check before each response in instructions"

requirements-completed: [GPT-01, GPT-05, GPT-06]

duration: 9min
completed: 2026-03-24
---

# Phase 04 Plan 01: N1 Busca Adentro GPT Summary

**GPT system prompt (1319 words) + 4 knowledge files for RAG + 3 example conversations, Colombian voseo throughout, Profile Interchange Format v1 compatible**

## Performance

- **Duration:** 9 min
- **Started:** 2026-03-24T00:06:18Z
- **Completed:** 2026-03-24T00:14:52Z
- **Tasks:** 2
- **Files created:** 6

## Accomplishments

- instructions.md compressed to 1319 words (limit: 1400) using CTCO pattern — flow stays in instructions, framework details move to knowledge files
- All 4 dimensions (values, strengths, identity, purpose) have opener quote, citation, 5 quick mode questions, knowledge file references, soft gate, and YAML output schema reference
- Safety disclaimer verbatim from shared/safety-protocol.md Section 1 present at top of instructions and in all 3 example conversations
- Profile Interchange Format v1 YAML compatibility confirmed — `version: "1.0"` field present, full schema in profile-format.md
- Cross-GPT CTAs reference Construye Afuera GPT and Compass GPT

## Task Commits

1. **Task 1: Write instructions.md and all knowledge files** - `361e867` (feat)
2. **Task 2: Write conversation examples** - `6f369c8` (feat)

## Files Created

- `C:/N1/gpts/busca-adentro/instructions.md` — GPT system prompt: identity, safety, MIND-SAFE, triage, mode selection, 4 dimensions with questions + YAML references
- `C:/N1/gpts/busca-adentro/knowledge/methodology.md` — Schwartz, ACT, Bandura, VIA, Flow, Ibarra, Marcia, CAAS, Frankl, MLQ framework summaries + MIND-SAFE tier definitions
- `C:/N1/gpts/busca-adentro/knowledge/research-citations.md` — Pre-formatted Spanish citations for all 4 dimensions + general statistics
- `C:/N1/gpts/busca-adentro/knowledge/exercises.md` — Quick mode 5 questions + deep mode steps (4-10 steps) per dimension
- `C:/N1/gpts/busca-adentro/knowledge/profile-format.md` — Complete Profile Interchange Format v1 YAML schema with Career Path Taxonomy
- `C:/N1/gpts/busca-adentro/examples.md` — 3 examples: crisis user, profile import, full quick mode with YAML output

## Decisions Made

- Compressed inline YAML output blocks per dimension to single-line references to profile-format.md — saved ~300 words without losing information
- Kept Tier 1 crisis response verbatim in instructions (not delegated to knowledge file) because it must fire without RAG retrieval
- Example 3 shows complete populated YAML output to demonstrate real format compatibility

## Deviations from Plan

None — plan executed exactly as written. Word count required one revision pass (1714 → 1319 words) by replacing inline YAML blocks with references to profile-format.md, which is the correct CTCO pattern anyway.

## Issues Encountered

- First draft was 1714 words (exceeds 1400 limit). Applied compression strategy: moved inline YAML schemas per dimension to references to `profile-format.md`. Final count: 1319 words. No content lost — the schema is still accessible via RAG on the knowledge file.

## Next Phase Readiness

- Busca Adentro GPT fully configured — ready to be pasted into ChatGPT GPT builder
- Cross-GPT CTAs reference Construye Afuera (04-02) and Compass (04-03) — those plans can now reference this one
- Profile Interchange Format v1 pattern established for remaining 3 GPTs to follow

---

_Phase: 04-chatgpt-gpts_
_Completed: 2026-03-24_
