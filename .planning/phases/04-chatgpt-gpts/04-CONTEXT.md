# Phase 4: ChatGPT GPTs - Context

**Gathered:** 2026-03-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Create 4 ChatGPT GPT configurations with compressed instructions (~1,800 tokens each) + knowledge files. GPTs are the LATAM acquisition funnel — ChatGPT dominates in the region. Each GPT mirrors a Claude Skill but compressed for GPT's constraints.

GPTs: N1 Busca Adentro, N1 Construye Afuera, N1 Compass, N1 Ghost Check.

</domain>

<decisions>
## Implementation Decisions

### Instruction Compression Strategy

- **D-01:** Core flow + knowledge refs pattern: instructions contain identity/voice (3 lines), safety disclaimer, triage logic, and core numbered conversation flow. All framework details, exercises, research citations go to knowledge files. GPT retrieves via RAG on demand.
- **D-02:** Content priority when cutting: Safety (non-negotiable) > Voice (voseo, anti-corporate) > Flow (triage + steps) > Content (frameworks → knowledge files).
- **D-03:** Target ~1,800 tokens per instruction set. Strict. Everything that doesn't fit goes to knowledge files.

### Knowledge File Organization

- **D-04:** 3-4 files per GPT: methodology.md (framework summaries), research-citations.md (condensed from shared/research-base.md), exercises.md (prompts and exercises from skill references/), profile-format.md (YAML schema). Mirrors shared/ but compressed for GPT.
- **D-05:** 2-3 example conversations per GPT in a separate examples.md knowledge file. Short examples showing ideal interaction patterns and expected flow.

### Cross-GPT Consistency

- **D-06:** All GPTs produce profile YAML compatible with Claude Skills and Profile Interchange Format v1.
- **D-07:** All GPTs include safety disclaimer and bilingual (Spanish primary, English fallback) behavior.
- **D-08:** All GPTs reference each other via CTA ("Want to go deeper? Try N1 Busca Adentro GPT").

### Claude's Discretion

- Exact instruction text compression choices per GPT
- Knowledge file content selection and compression ratios
- Example conversation scenarios and length
- How to handle GPT-specific limitations (no tool use, no persistent memory, no file output)

</decisions>

<canonical_refs>

## Canonical References

### Source Skills (compress FROM these)

- `skills/busca-adentro/SKILL.md` + `references/` — Source for Busca Adentro GPT
- `skills/construye-afuera/SKILL.md` + `references/` — Source for Construye Afuera GPT
- `skills/compass/SKILL.md` — Source for Compass GPT
- `skills/ghost-check/SKILL.md` — Source for Ghost Check GPT

### Foundation (knowledge files derive FROM these)

- `shared/research-base.md` — Condensed citations for research-citations.md knowledge file
- `shared/prompting-stack.md` — Technique references for methodology.md
- `shared/voice-guide.md` — Voice rules for instructions
- `shared/safety-protocol.md` — Safety disclaimer for instructions
- `shared/profile-format.md` — YAML schema for profile-format.md knowledge file

### Plans

- `plans/EXECUTION-PLAN.md` §Phase 4 (lines 462-508) — Per-GPT task breakdown
- `plans/MASTER-PLAN-v2.md` — GPT instruction limits discussion, CTCO pattern reference
- `plans/REVIEW-SYNTHESIS.md` — "GPTs before Claude Skills" rationale, Architect's token budget notes

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- 5 complete SKILL.md files with full conversation flows — compression source
- 7 references/ files with framework details — knowledge file source
- shared/ foundation files — all directly usable as knowledge file bases

### Established Patterns

- Profile Interchange Format v1 — GPT YAML output must match this
- Voice guide conventions — GPT instructions must follow these
- Safety protocol — verbatim disclaimer in every GPT

### Integration Points

- GPTs produce YAML that Claude Skills can import
- GPTs reference web tools for visual scorecards ("Try the web version at [URL]")
- GPTs cross-reference each other via CTAs

</code_context>

<specifics>
## Specific Ideas

- Ghost Check GPT is simplest — mostly deterministic scoring, shortest instructions
- Compass GPT is a quick assessment — short flow, lean instructions
- Busca Adentro GPT is most complex — 4 dimensions need to fit in ~1,800 tokens (flow only, details in knowledge)
- Construye Afuera GPT — 9 tools compressed to a routing menu + per-tool summaries in knowledge

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

_Phase: 04-chatgpt-gpts_
_Context gathered: 2026-03-23_
