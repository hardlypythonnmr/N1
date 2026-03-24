---
phase: 04-chatgpt-gpts
plan: "02"
subsystem: gpts
tags:
  [chatgpt, gpt, construye-afuera, career-strategy, latam, voseo, yaml-profile]

requires:
  - phase: 00-foundation
    provides: shared/voice-guide.md, shared/safety-protocol.md, shared/profile-format.md, shared/research-base.md
  - phase: 04-chatgpt-gpts plan-01
    provides: Busca Adentro GPT pattern (cross-GPT CTA target, profile format established)

provides:
  - gpts/construye-afuera/instructions.md — GPT system prompt with 9-tool routing menu
  - gpts/construye-afuera/knowledge/tools-menu.md — full per-tool implementation for RAG
  - gpts/construye-afuera/knowledge/research-citations.md — pre-formatted career strategy citations
  - gpts/construye-afuera/knowledge/latam-context.md — LATAM salary, ATS, employer market data
  - gpts/construye-afuera/knowledge/profile-format.md — Profile Interchange Format v1 YAML schema
  - gpts/construye-afuera/examples.md — 3 example conversations showing tool flows

affects: [04-chatgpt-gpts-plan-03, 04-chatgpt-gpts-plan-04, cross-gpt-ctas]

tech-stack:
  added: []
  patterns:
    - "Instructions-as-routing-layer: instructions.md contains identity/safety/triage/menu only; all implementation detail in knowledge files"
    - "RAG-target knowledge files: tools-menu.md designed as the primary retrieval target for per-tool logic"
    - "Cross-GPT CTA pattern: Construye Afuera → Busca Adentro CTAs wired after CV Audit, Interview Prep, Layoff Kit, Network Map"
    - "Anti-networking prohibition: enforced in voice rules section of instructions.md"

key-files:
  created:
    - gpts/construye-afuera/instructions.md
    - gpts/construye-afuera/knowledge/tools-menu.md
    - gpts/construye-afuera/knowledge/research-citations.md
    - gpts/construye-afuera/knowledge/latam-context.md
    - gpts/construye-afuera/knowledge/profile-format.md
    - gpts/construye-afuera/examples.md
  modified: []

key-decisions:
  - "instructions.md kept at 878 words (~1,100 tokens) — well within 1,800 token budget"
  - "tools-menu.md is the RAG target — contains full path-specific logic for all 9 tools"
  - "Routing table uses career_path × urgency matrix (4×2) as specified in plan"
  - "MIND-SAFE Tier 1/2/3 inline in instructions.md; full tier definitions deferred to tools-menu.md"
  - "Networking prohibition enforced as hard voice rule, not just a note"

patterns-established:
  - "Pattern: GPT instructions = routing only (~800-1000 words), per-tool logic in knowledge files"
  - "Pattern: YAML profile block in instructions.md maps to Profile Interchange Format v1"

requirements-completed: [GPT-02, GPT-05, GPT-06]

duration: 8min
completed: 2026-03-24
---

# Phase 4 Plan 02: N1 Construye Afuera GPT Summary

**N1 Construye Afuera GPT — 878-word system prompt with 9-tool routing menu, 4 LATAM-specific knowledge files, and 3 conversation examples demonstrating Tier 2 safety, profile import, and routing logic**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-24T00:06:25Z
- **Completed:** 2026-03-24T00:15:01Z
- **Tasks:** 2
- **Files created:** 6

## Accomplishments

- instructions.md at 878 words (under 1,400-word hard limit) with safety disclaimer, triage, 9-tool menu, routing table, voice rules, and YAML output block
- tools-menu.md with complete per-tool implementation for all 9 tools including path-specific logic for all 4 career paths (stay_grow/move/go_independent/pause_reset)
- latam-context.md with salary reference data, ATS landscape, employer profiles (Globant, EPAM, MeLi, Rappi, Bancolombia), remote work market, and structural barriers section
- research-citations.md with 6 pre-formatted tool-specific citations and 4 cross-tool citations
- profile-format.md with full Profile Interchange Format v1 YAML schema and career path taxonomy
- examples.md with 3 example conversations covering urgent job search, profile import + internal growth, and layoff with Tier 2 safety response

## Task Commits

1. **Task 1: Write instructions.md and all knowledge files** - `9271a88` (feat)
2. **Task 2: Write conversation examples** - `eeb49cb` (feat)

## Files Created

- `gpts/construye-afuera/instructions.md` — GPT system prompt: identity, safety disclaimer, MIND-SAFE, profile import, 9-tool menu, routing table, cross-GPT CTAs, voice rules, YAML output block
- `gpts/construye-afuera/knowledge/tools-menu.md` — Full per-tool implementation for all 9 tools (RAG target)
- `gpts/construye-afuera/knowledge/research-citations.md` — Pre-formatted citations: Hiring Lab, Babcock & Laschever, Bandura, Granovetter, McKinsey, plus cross-tool citations
- `gpts/construye-afuera/knowledge/latam-context.md` — LATAM salary data, ATS systems, English requirements, employer profiles, remote work market, structural barriers
- `gpts/construye-afuera/knowledge/profile-format.md` — Profile Interchange Format v1 YAML schema with career path taxonomy
- `gpts/construye-afuera/examples.md` — 3 examples: no-profile urgent move, profile import stay_grow, layoff Tier 2 safety

## Decisions Made

- instructions.md is a routing layer only — all implementation detail in knowledge files per D-01
- MIND-SAFE tiers are defined inline in instructions.md for GPT access without RAG latency on safety checks
- Routing table uses the exact career_path × urgency format from SKILL.md tool_menu
- "networking" prohibition appears in instructions.md voice rules as a hard constraint

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## Known Stubs

None — all 6 files contain substantive content wired to the plan's goals. No placeholder text, no empty sections, no hardcoded dummy data that reaches the user.

## User Setup Required

GPT configuration in ChatGPT requires manual steps (not automatable):

1. Create a new GPT at chat.openai.com/gpts
2. Copy contents of `gpts/construye-afuera/instructions.md` into the Instructions field
3. Upload all 4 files from `gpts/construye-afuera/knowledge/` as knowledge files
4. Upload `gpts/construye-afuera/examples.md` as a knowledge file (optional, for conversation flow reference)
5. Name: "N1 Construye Afuera"
6. Description: copy from SKILL.md frontmatter description field

## Next Phase Readiness

- Construye Afuera GPT is fully configured and ready for ChatGPT deployment
- Cross-GPT CTAs reference "N1 Busca Adentro GPT" — verify plan 01 completed its naming
- Plans 03 (Compass) and 04 (Ghost Check) can proceed independently

---

_Phase: 04-chatgpt-gpts_
_Completed: 2026-03-24_
