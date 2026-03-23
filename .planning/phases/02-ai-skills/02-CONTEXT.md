# Phase 2: AI Skills - Context

**Gathered:** 2026-03-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Build 5 Claude Skill SKILL.md files that deliver AI-guided career sessions. Each skill is a folder with SKILL.md entry point + supporting reference files. All skills load from shared/ foundation (DRY). All work standalone and produce richer output with a profile.

Skills: n1-busca-adentro, n1-construye-afuera, n1-system, n1-ghost-check, n1-compass.

</domain>

<decisions>
## Implementation Decisions

### Skill File Architecture

- **D-01:** Folder-based structure: each skill gets its own directory (e.g., `skills/busca-adentro/`) with SKILL.md as entry point + supporting files (references/, examples, framework details) in the same folder. Follows Anthropic skills architecture with YAML frontmatter.
- **D-02:** Shared foundation loaded via Read tool instructions: each SKILL.md includes explicit "Read shared/prompting-stack.md" directives. Claude loads on demand. No inline duplication.
- **D-03:** Tiered token budgets: standalone skills (ghost-check, compass) ~4-6K tokens main file. Core skills (busca-adentro, construye-afuera) ~8-12K main + references/ for dimension/tool details. System skill (n1-system) ~6K orchestrator.
- **D-04:** YAML frontmatter includes: name, description, trigger phrases (Spanish + English), version, and references to shared/ files.

### Busca Adentro (Self-Knowledge)

- **D-05:** Quick mode: guided 5-question flow per dimension, each building on the last. Results + profile YAML at end. ~5-10 min. Suggests relevant web assessment if available (e.g., "Take the CAAS-12 at [link] for a standardized score").
- **D-06:** Deep mode: multi-turn Socratic exploration, 15-25 turns per dimension. Uses full prompting stack (ACT values clarification, Socratic questioning, Chain of Empathy, MI techniques). Exercises, reflections, homework suggestions. ~30-45 min.
- **D-07:** Dimension sequencing: after triage, suggest sequence based on user situation (exploration: Values→Strengths→Identity→Purpose; growth: Strengths→Values→Identity→Purpose; crisis: quick self-knowledge then Construye Afuera). User can override. Soft gates between dimensions ("You might get more from Identity if you've explored Values first").
- **D-08:** Each dimension has a references/ file with framework details, exercises, and interpretation guides (values-framework.md, strengths-framework.md, identity-framework.md, purpose-framework.md).

### Construye Afuera (Career Action)

- **D-09:** All tools adaptive to the person's profile and situation — depth adjusts based on what the user shares, their career path, and their urgency. No fixed shallow/deep tiers.
- **D-10:** Career path adaptation via conditional sections: each tool has path-specific blocks ("If career_path is Stay & Grow, focus on internal resume/promotion case. If Move, focus on external resume. If Independent, focus on portfolio/case studies. If Pause, focus on gap narrative.")
- **D-11:** 9 career tools: CV Audit, Interview Prep, Negotiate, STAR Builder, Profile Builder (LinkedIn), Network Map, Job Hunt, Layoff Response Kit (72-hour protocol), Grow Where You Are.
- **D-12:** References/ directory with: career-path-adaptations.md, latam-market-context.md, assessment-scoring.md (CV audit rubric, etc).

### Cross-Skill Integration (n1-system)

- **D-13:** n1-system orchestrates the full journey: triage → guide through busca-adentro dimensions (inline, referencing the skill's logic) → profile integration/synthesis → construye-afuera tools. One continuous conversation, not routing to separate skills.
- **D-14:** Completion milestone: profile completeness check. When all 4 busca-adentro dimensions have data + at least one construye-afuera tool used, system generates completion summary with "Your N1 System" YAML block.
- **D-15:** Evolution: profile tracks `last_updated` per dimension. After 3-6 months OR a life event (new job, layoff, promotion, move), skill suggests re-assessment. Respects 4-6 week cooling period per instrument.

### Standalone Skills (ghost-check, compass)

- **D-16:** n1-ghost-check: same signal-based scoring as web tool but in conversational format. User describes or pastes posting. If profile exists, adds values alignment check. CTA: "Want to go deeper? Try N1 Compass."
- **D-17:** n1-compass: quick CAAS-12 (conversational, with caveat about standardized web version), quick values check (top 3), quick self-efficacy pulse. Career readiness snapshot + recommendations. Profile export. CTA: "Want the full system? Try N1 Busca Adentro."

### Claude's Discretion

- Exact YAML frontmatter trigger phrases beyond the core ones
- Progressive disclosure strategy within each skill
- Specific conversation flow transitions between dimensions
- How to handle partial profiles (some dimensions complete, others not)
- Exact wording of soft gates between dimensions
- How deep the Socratic questioning goes before offering a synthesis

</decisions>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Foundation Files (ALL skills load these)

- `shared/prompting-stack.md` — Technique library (ACT, Socratic, MI, CBT, CoE, SELF-DISCOVER, Reflexion)
- `shared/voice-guide.md` — N1 voice, Colombian voseo, anti-corporate tone
- `shared/safety-protocol.md` — MIND-SAFE crisis detection, scope disclaimers, crisis resources
- `shared/research-base.md` — 30 frameworks condensed, citation-ready
- `shared/profile-format.md` — Profile Interchange Format YAML schema
- `shared/profile-template.yaml` — Blank template

### Plans (detailed task breakdowns)

- `plans/EXECUTION-PLAN.md` §Phase 2 (lines 272-396) — Per-skill task breakdown with content requirements
- `plans/MASTER-PLAN-v2.md` §Unified Decisions (lines 492-516) — 25 locked decisions
- `plans/FRAMEWORK-ARCHITECTURE.md` — Full framework connection architecture

### Existing Skill Directories

- `skills/busca-adentro/` — exists but empty (create SKILL.md + references/ here)
- `skills/construye-afuera/` — exists but empty (create SKILL.md + references/ here)

### Existing Web Tools (skills should reference these)

- `web/ghost-check/index.html` — Ghost Check web tool (skills can suggest "Try the web version for a visual scorecard")
- `web/compass/index.html` — CAAS-12 web assessment
- `web/bulls-eye/index.html` — Bull's Eye values exercise
- `web/mlq/index.html` — MLQ-10 questionnaire
- `web/flow-logger/index.html` — Flow Activity Logger

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- `shared/` directory has all foundation files ready to reference
- `skills/busca-adentro/` and `skills/construye-afuera/` directories exist (empty)
- Web tools in `web/` provide visual counterparts that skills can reference

### Established Patterns

- Profile Interchange Format v1 schema (shared/profile-format.md) — skills must produce compatible YAML
- Voice guide conventions (shared/voice-guide.md) — all user-facing text follows these
- Safety protocol (shared/safety-protocol.md) — loaded at start of every skill session

### Integration Points

- Skills produce YAML that web tools can import via paste
- Skills reference web tools for standardized assessments
- n1-system orchestrates across all dimensions and tools
- Profile `last_updated` timestamps enable evolution tracking

</code_context>

<specifics>
## Specific Ideas

- Busca Adentro references/ files mirror the 4 dimensions: values-framework.md, strengths-framework.md, identity-framework.md, purpose-framework.md
- Construye Afuera references/ include: career-path-adaptations.md, latam-market-context.md, assessment-scoring.md
- Ghost Check skill conversational format: user can describe posting in their own words OR paste full text
- Compass skill explicitly mentions the web version for standardized scoring
- n1-system completion generates a celebration message + "Your N1 System" YAML block

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

_Phase: 02-ai-skills_
_Context gathered: 2026-03-23_
