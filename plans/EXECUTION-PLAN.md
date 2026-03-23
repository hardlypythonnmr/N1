# N1 Execution Plan — GSD Structure

> **For Claude Code sessions:** Opus orchestrates, Sonnet agents execute.
> Each phase follows: RESEARCH → PLAN → EXECUTE → VERIFY.
> Run `/gsd:execute-phase N` to start any phase.

**Prerequisites:**

- Read `plans/MASTER-PLAN-v2.md` (the what)
- Read `plans/FRAMEWORK-ARCHITECTURE.md` (the why)
- Read `plans/REVIEW-SYNTHESIS.md` (the constraints)
- Read this file (the how)

---

## How to Run This

**Session setup:**

```
1. Open Claude Code in C:\N1
2. Model: Opus (orchestrator)
3. Agents: Sonnet (workers) — launched via Agent tool
4. Each phase = one session (clear between phases)
5. Commit after each task within a phase
```

**Per-phase protocol:**

```
RESEARCH  → Agent reads requirements + existing code + references
PLAN      → Opus breaks phase into atomic tasks
EXECUTE   → Sonnet agents build in parallel where possible
VERIFY    → Opus reviews output, runs checks, confirms quality
COMMIT    → Atomic commits per task
```

---

## Phase 0: Foundation

### 0.1 RESEARCH

- [ ] Read `plans/MASTER-PLAN-v2.md` sections: Profile Interchange Format, Updated Build Order Phase 0, Constraints
- [ ] Read `C:\n1-companion\research\state-of-the-art\prompting-strategies.md` for prompting stack design
- [ ] Read `C:\n1-companion\research\state-of-the-art\academic-meta-review.md` for research base
- [ ] Read `C:\n1-post\voice\voice-guide.md` for voice reference
- [ ] Read existing SKILL.md at `C:\n1-companion\products\claude-skill\SKILL.md` for skill format reference

### 0.2 PLAN

- [ ] List all files to create in this phase
- [ ] Identify dependencies (profile format must exist before anything else)
- [ ] Map which tasks can run in parallel

### 0.3 EXECUTE

**Task 0.3.1: CLAUDE.md** (sequential — must be first)

- [ ] Write `C:\N1\CLAUDE.md` with:
  - Project identity (el sistema eres tu)
  - Repo structure
  - Build conventions
  - Profile Interchange Format reference
  - Link to MASTER-PLAN-v2.md
  - Voice guide summary
  - Safety requirements
- [ ] Commit: `chore: add CLAUDE.md — project instructions for N1`

**Task 0.3.2: Profile Interchange Format** (sequential — must be before tools)

- [ ] Write `C:\N1\shared\profile-format.md` with:
  - Complete YAML schema (from MASTER-PLAN-v2.md lines 884-1003)
  - Version protocol
  - How to read/write profiles
  - How to import/export between tools
  - Example populated profile
- [ ] Write `C:\N1\shared\profile-template.yaml` — blank template users can copy
- [ ] Commit: `feat: profile interchange format v1`

**Task 0.3.3: Shared Foundation** (parallel — 4 agents)

Agent 1: Prompting Stack

- [ ] Write `C:\N1\shared\prompting-stack.md` with:
  - ACT values clarification techniques (defusion, willingness, committed action)
  - Socratic questioning moves (definition, elenchus, counterfactual, maieutics)
  - Cognitive restructuring for career beliefs (catch, check, change, connect)
  - MI techniques internally documented (OARS, change talk, rolling with resistance)
  - Chain of Empathy reasoning template
  - SELF-DISCOVER module selection for career contexts
  - Tree of Thoughts for career decision-making
  - Prompt chaining workflow (7-step career conversation)
  - Reflexion self-critique checklist
  - XML tag structure for skill prompts
- [ ] Commit: `feat: shared prompting stack — ACT + Socratic + MI + CBT + CoE`

Agent 2: Voice Guide

- [ ] Write `C:\N1\shared\voice-guide.md` with:
  - N1 voice definition (direct, bilingual, anti-corporate, systems-native)
  - Tone: "Like a brilliant friend who's also an operator"
  - Language rules: Spanish primary, English tech terms, Colombian voseo
  - Citation format: always name + year + finding (conversational)
  - What N1 NEVER does (hustle culture, engagement bait, generic advice)
  - Quick mode vs deep mode voice differences
  - Cultural calibration notes for Colombia/LATAM
- [ ] Commit: `feat: shared voice guide — N1 voice for all tools`

Agent 3: Safety Protocol

- [ ] Write `C:\N1\shared\safety-protocol.md` with:
  - MIND-SAFE crisis detection keywords and patterns
  - Scope disclaimer (required on every tool, every session start)
  - Crisis resources (Spanish + English, LATAM-specific)
  - What N1 IS vs IS NOT
  - Assessment pacing rules (4-6 week minimums)
  - Emotional flooding detection + containment response
  - When to refer to human professional
  - Limitations transparency template
- [ ] Commit: `feat: shared safety protocol — MIND-SAFE + scope boundaries`

Agent 4: Research Base

- [ ] Write `C:\N1\shared\research-base.md` with:
  - Condensed citations for all 25+ frameworks (name, year, key finding, how N1 uses it)
  - Organized by layer: meta-theory, integrative spine, busca adentro, career strategy, prompting
  - Each citation max 2 lines — designed for embedding in skill prompts
  - Total: fits in ~3,000-4,000 tokens when loaded
  - Key stats ready to cite: 91% purpose anxiety, 17% mortality reduction, d = 0.2-0.4, etc.
- [ ] Commit: `feat: shared research base — 25+ frameworks condensed for skills`

**Task 0.3.4: README.md**

- [ ] Write `C:\N1\README.md` with:
  - N1 brand identity
  - "El sistema eres tu" philosophy in 3 sentences
  - Architecture diagram (text-based)
  - Career path taxonomy (complete)
  - Tool directory (what exists, links)
  - Framework list (all 25+)
  - How to use (Claude Projects, GPTs, static web)
  - Contributing guide link
  - Research base summary
  - License (MIT or Apache 2.0)
- [ ] Commit: `feat: README — N1 public-facing description`

### 0.4 VERIFY

- [ ] Confirm all shared files exist and are consistent
- [ ] Confirm profile format is referenced correctly in CLAUDE.md
- [ ] Confirm no therapeutic labels in user-facing text
- [ ] Confirm safety protocol covers crisis detection
- [ ] Confirm research base fits in ~4K tokens
- [ ] Run: `wc -w shared/*.md` — check word counts are reasonable

---

## Phase 1: Busca Adentro — Static Web Assessments

### 1.1 RESEARCH

- [ ] Read profile format (`shared/profile-format.md`)
- [ ] Read existing Compass at `C:\n1-companion\app\web\src\lib\tools\compass-full.ts` and scoring
- [ ] Read existing Ghost Check at `C:\n1-companion\app\web\src\lib\ghost-check.ts`
- [ ] Read bigfive-web npm package documentation (https://github.com/Alheimsins/bigfive-web)
- [ ] Read CAAS-12 items (from academic research)
- [ ] Read MLQ-10 items (from Steger's site)
- [ ] Read Bull's Eye exercise format (ACT workbook)
- [ ] Read brand colors from `C:\n1-companion\brand\colors.json`

### 1.2 PLAN

- [ ] Define consistent HTML/CSS framework for all static tools (single shared stylesheet)
- [ ] Define localStorage strategy for cross-tool data persistence
- [ ] Define profile export/import mechanism (copy YAML button)
- [ ] Define shareable scorecard design (HTML canvas → downloadable image)

### 1.3 EXECUTE (parallel — 7 agents, one per tool)

**Agent 1: Landing Page + Triage**

- [ ] Create `C:\N1\web\index.html` — landing page with:
  - N1 brand (logo, tagline, philosophy)
  - Triage quiz: "What's your situation?" → 3 paths
  - Tool directory with links
  - Email capture (Buttondown embed or simple form)
  - Mobile-responsive, light theme, N1 brand colors
- [ ] Create `C:\N1\web\styles.css` — shared stylesheet for all tools
- [ ] Commit: `feat: landing page with triage quiz`

**Agent 2: Ghost Check**

- [ ] Port `C:\n1-companion\app\web\src\lib\ghost-check.ts` to standalone HTML/JS
- [ ] Create `C:\N1\web\ghost-check\index.html`
  - Input: paste job posting text
  - Scoring: deterministic signal detection
  - Output: score + breakdown + shareable scorecard
  - Profile export: adds ghost check result to profile YAML
  - Shareability: "Share on LinkedIn" button with pre-filled text
- [ ] Commit: `feat: ghost check — static web tool`

**Agent 3: Compass / CAAS-12**

- [ ] Create `C:\N1\web\compass\index.html`
  - 12 items from CAAS-SF (3 per subscale: Concern, Control, Curiosity, Confidence)
  - 5-point Likert scale per item
  - Standardized administration (all items first, then results)
  - Output: radar chart + subscale scores + interpretation
  - Cultural calibration note for Colombian users
  - Profile export: populates adaptability section
  - Scorecard: radar chart image for sharing
- [ ] Commit: `feat: compass CAAS-12 — career adaptability assessment`

**Agent 4: Bull's Eye (ACT Values)**

- [ ] Create `C:\N1\web\bulls-eye\index.html`
  - Interactive visual: 4 life domains (work, relationships, growth, leisure)
  - Each domain: slider 1-10 for values alignment
  - Values selection from Schwartz 10 (with descriptions in Spanish)
  - Output: visual bull's eye diagram + alignment scores
  - Profile export: populates values section
  - Scorecard: bull's eye visual for sharing
- [ ] Commit: `feat: bulls eye — ACT values alignment exercise`

**Agent 5: MLQ-10 (Purpose)**

- [ ] Create `C:\N1\web\mlq\index.html`
  - 10 items (5 Presence, 5 Search)
  - 7-point Likert scale
  - Standardized administration
  - Output: quadrant placement + interpretation
  - Cultural calibration: high Search is normative in LATAM
  - Profile export: populates purpose.mlq section
  - Scorecard: quadrant visual for sharing
- [ ] Commit: `feat: MLQ-10 — meaning in life questionnaire`

**Agent 6: Flow Activity Logger**

- [ ] Create `C:\N1\web\flow-logger\index.html`
  - Add activities with challenge (1-5) and skill (1-5) ratings
  - Visual: challenge-skill grid showing flow/anxiety/boredom zones
  - localStorage persistence (activities accumulate over time)
  - Profile export: populates strengths.flow_activities
  - Insight: "Your flow activities cluster around [X]"
- [ ] Commit: `feat: flow logger — challenge-skill tracking`

**Agent 7: Runway Calculator**

- [ ] Port from `C:\n1-companion\app\web\src\lib\tools\` to standalone HTML/JS
- [ ] Create `C:\N1\web\runway\index.html`
  - Inputs: savings, monthly expenses, income sources
  - 3 scenarios: conservative, likely, optimistic
  - Output: months of runway per scenario + chart
  - COP/USD toggle (LATAM audience)
- [ ] Commit: `feat: runway calculator — financial runway`

### 1.4 VERIFY

- [ ] Open each tool in browser, complete an assessment
- [ ] Verify profile YAML export works on each tool
- [ ] Verify scorecard image generation works
- [ ] Verify localStorage persistence on Flow Logger
- [ ] Verify mobile responsiveness on all tools
- [ ] Verify shared CSS is consistent across tools
- [ ] Verify no therapeutic labels in any user-facing text
- [ ] Verify safety disclaimer present on relevant tools
- [ ] Verify cultural calibration notes appear for CAAS and MLQ
- [ ] Commit: `chore: verify all static web tools`

---

## Phase 2: Busca Adentro — AI Skills (SKILL.md files)

### 2.1 RESEARCH

- [ ] Read `shared/prompting-stack.md` for technique implementations
- [ ] Read `shared/voice-guide.md` for voice
- [ ] Read `shared/safety-protocol.md` for safety
- [ ] Read `shared/research-base.md` for citations
- [ ] Read `shared/profile-format.md` for YAML schema
- [ ] Read existing SKILL.md at `C:\n1-companion\products\claude-skill\SKILL.md` for format
- [ ] Read Anthropic skills guide: YAML frontmatter, progressive disclosure, trigger phrases

### 2.2 PLAN

- [ ] Define SKILL.md template structure (shared across all 5 skills)
- [ ] Define how each skill loads shared/ files (Read references)
- [ ] Define quick mode vs deep mode branching per skill
- [ ] Define profile import/export protocol per skill
- [ ] Define triage integration (how each skill routes based on user situation)

### 2.3 EXECUTE (parallel — 5 agents, one per skill)

**Agent 1: n1-busca-adentro**

- [ ] Create `C:\N1\skills\busca-adentro\SKILL.md`
  - YAML frontmatter: name, description, trigger phrases (career direction, stuck, who am I, self-knowledge, values, strengths, identity, purpose, busca adentro)
  - Triage: classify user (crisis/exploration/growth) + career path
  - Route to recommended dimension sequence
  - VALUES dimension: ACT elicitation, hierarchy, Bull's Eye, alignment check
  - STRENGTHS dimension: VIA results interpretation, self-efficacy mapping, flow analysis, Big Five integration
  - IDENTITY dimension: Marcia status assessment (conversational heuristic, NOT clinical diagnosis), possible selves, crafting experiments, CAAS interpretation
  - PURPOSE dimension: MLQ interpretation, meaning sources, life theme extraction, purpose practice
  - Quick mode: each dimension 5-10 min (surface-level, useful)
  - Deep mode: each dimension 30-45 min (full exploration)
  - Profile output: YAML fenced block with all completed sections
  - Soft gates: "You might get more from this if you've done [X] first"
  - All prompting techniques from shared stack
  - Safety protocol loaded from shared
  - Voice guide loaded from shared
  - Research citations embedded for each dimension
- [ ] Create `C:\N1\skills\busca-adentro\references\` with supporting files:
  - `values-framework.md` — ACT + Schwartz details + exercises
  - `strengths-framework.md` — VIA + Bandura + Flow details + exercises
  - `identity-framework.md` — Ibarra + Marcia + CAAS details + exercises
  - `purpose-framework.md` — Frankl + MLQ + Ryff + Damon details + exercises
- [ ] Commit: `feat: n1-busca-adentro skill — all 4 self-knowledge dimensions`

**Agent 2: n1-construye-afuera**

- [ ] Create `C:\N1\skills\construye-afuera\SKILL.md`
  - YAML frontmatter: triggers (CV, resume, interview, negotiate, job search, career strategy, promotion, freelance, etc.)
  - Profile import: "Paste your N1 profile" or "Start fresh"
  - Career path routing: adapts ALL tools based on path (stay/move/independent/pause)
  - CV AUDIT: 10-dimension scoring + identity narrative + life theme + strengths alignment + path-specific format (internal resume vs external vs portfolio vs gap narrative)
  - INTERVIEW PREP: STAR from mastery experiences + identity framing + path-specific (promotion conversation vs external interview vs pitch vs re-entry)
  - NEGOTIATE: values-driven strategy + LATAM salary context + path-specific (raise vs offer vs rate vs re-entry terms)
  - STAR BUILDER: stories from self-efficacy profile + values alignment
  - PROFILE BUILDER: LinkedIn narrative from self-knowledge
  - NETWORK MAP: Granovetter + identity-based weak ties + path-specific
  - JOB HUNT: channel strategy by values + career path
  - LAYOFF RESPONSE KIT: 72-hour protocol
  - GROW WHERE YOU ARE: internal opportunity scan + promotion case + manager conversation prep
  - Quick mode for each tool
  - Profile-enhanced but works standalone
- [ ] Create `C:\N1\skills\construye-afuera\references\` with supporting files:
  - `career-path-adaptations.md` — how each tool adapts per path
  - `latam-market-context.md` — salary data, ATS systems, employer culture
  - `assessment-scoring.md` — CV audit rubric, ghost check signals
- [ ] Commit: `feat: n1-construye-afuera skill — all career strategy tools`

**Agent 3: n1-system**

- [ ] Create `C:\N1\skills\n1-system\SKILL.md`
  - YAML frontmatter: triggers (career system, N1, el sistema, my career, help me, what should I do)
  - This is the FULL integrated experience
  - Triage → Busca Adentro (recommended sequence) → Integration → Construye Afuera → Evolution
  - Profile Synthesizer: combines dimensions, identifies reinforcements + conflicts
  - Cross-dimension insights
  - Career path recommendations
  - System Template output: downloadable .md for user's Claude Project
  - Evolution prompts: monthly re-assessment suggestions
  - Completion milestone: "Your N1 system is built"
- [ ] Commit: `feat: n1-system skill — full integrated system`

**Agent 4: n1-ghost-check**

- [ ] Create `C:\N1\skills\ghost-check\SKILL.md`
  - YAML frontmatter: triggers (ghost job, is this job real, job posting, ghost check, es real este puesto)
  - Standalone — no profile needed
  - Input: job posting text (paste)
  - Signal detection: posting age, salary transparency, reposting, hiring freezes, language patterns
  - Output: ghost score + signal breakdown + recommendation
  - If profile exists: adds values alignment check
  - Shareable: "Share this result on LinkedIn"
  - CTA: "Want to go deeper? Try N1 Compass"
- [ ] Commit: `feat: n1-ghost-check skill — standalone ghost job detector`

**Agent 5: n1-compass**

- [ ] Create `C:\N1\skills\compass\SKILL.md`
  - YAML frontmatter: triggers (compass, career readiness, how ready am I, adaptability, CAAS, career check)
  - Standalone + profile-enhanced
  - Quick CAAS-12 (conversational, with caveat about standardized administration)
  - Quick values check (top 3 values)
  - Quick self-efficacy pulse
  - Output: career readiness snapshot + recommendations
  - Profile export: YAML block
  - CTA: "Want the full system? Try N1 Busca Adentro"
- [ ] Commit: `feat: n1-compass skill — standalone career readiness check`

### 2.4 VERIFY

- [ ] Test each skill by pasting SKILL.md into Claude and running a sample conversation
- [ ] Verify profile YAML output is valid and consistent with schema
- [ ] Verify quick mode completes in stated time
- [ ] Verify safety protocol triggers on crisis keywords
- [ ] Verify scope disclaimer appears at session start
- [ ] Verify no therapeutic modality labels in user-facing text
- [ ] Verify career path routing works for all 4 macro-categories
- [ ] Verify cultural calibration notes appear for Colombian users
- [ ] Verify each skill works standalone (no profile required)
- [ ] Verify each skill works enhanced (with profile pasted)
- [ ] Cross-check: profile from n1-busca-adentro imports into n1-construye-afuera
- [ ] Commit: `chore: verify all 5 skills`

---

## Phase 3: Integration + Visual Scorecards

### 3.1 RESEARCH

- [ ] Read all 5 skills to understand outputs
- [ ] Read profile format to understand synthesis requirements
- [ ] Research HTML Canvas → PNG for scorecard generation
- [ ] Research Buttondown/similar free email capture options

### 3.2 PLAN

- [ ] Define scorecard visual design (N1 brand, radar charts, alignment visuals)
- [ ] Define "Completed N1 Busca Adentro" certificate design
- [ ] Plan email capture integration on landing page

### 3.3 EXECUTE (parallel)

**Agent 1: Scorecard Generator**

- [ ] Create `C:\N1\web\scorecard\scorecard.js` — shared library for generating visual cards
  - CAAS-12 radar chart
  - Bull's Eye alignment visual
  - MLQ quadrant placement
  - Ghost Check score card
  - Full profile summary card
  - "Completed N1 Busca Adentro" certificate
  - All rendered as HTML Canvas → downloadable PNG
  - N1 brand styling (orange #E85D26, Space Mono headings, DM Sans body)
  - "Built with N1 — el sistema eres tu" watermark
- [ ] Integrate scorecard generation into each static web tool
- [ ] Commit: `feat: shareable visual scorecards for all assessments`

**Agent 2: Profile Synthesizer Page**

- [ ] Create `C:\N1\web\profile\index.html`
  - Import profile sections from localStorage (if available) or paste YAML
  - Visual dashboard showing all dimensions
  - Cross-dimension insights (reinforcements + conflicts)
  - Career path recommendation based on profile
  - Export: full YAML profile + System Template .md download
  - Shareable: profile summary card
- [ ] Commit: `feat: profile synthesizer — cross-dimension integration`

**Agent 3: Email Capture + Landing Page Update**

- [ ] Set up free email capture (Buttondown or similar)
- [ ] Update landing page with email form
- [ ] Add email CTA to each tool's completion screen
- [ ] Commit: `feat: email capture on landing page and tools`

### 3.4 VERIFY

- [ ] Generate scorecard from each tool, verify visual quality
- [ ] Download scorecard PNG, verify it looks good on LinkedIn (1200x628 or similar)
- [ ] Test profile import from localStorage
- [ ] Test profile import from YAML paste
- [ ] Test email capture flow
- [ ] Verify all tools link back to landing page
- [ ] Commit: `chore: verify integration + scorecards`

---

## Phase 4: ChatGPT GPTs

### 4.1 RESEARCH

- [ ] Read OpenAI GPT creation docs
- [ ] Read GPT instruction limits (~8,000 chars / ~2,000 tokens for instructions)
- [ ] Read knowledge file best practices (RAG, not injected)
- [ ] Plan instruction compression strategy

### 4.2 PLAN

- [ ] Define 4 GPTs with compressed instructions
- [ ] Identify which content goes in instructions vs knowledge files
- [ ] Create knowledge files from research base + framework details
- [ ] Write 2-3 example conversations per GPT

### 4.3 EXECUTE (parallel — 4 agents)

**Agent 1: N1 Busca Adentro GPT**

- [ ] Write `C:\N1\gpts\busca-adentro\instructions.md` — compressed to ~1,800 tokens
- [ ] Write `C:\N1\gpts\busca-adentro\knowledge\` files:
  - `methodology.md` — framework summaries
  - `research-citations.md` — condensed research base
  - `exercises.md` — assessment exercises and prompts
  - `profile-format.md` — YAML schema
- [ ] Write `C:\N1\gpts\busca-adentro\examples.md` — 2-3 conversation examples
- [ ] Commit: `feat: N1 Busca Adentro GPT configuration`

**Agent 2: N1 Construye Afuera GPT**

- [ ] Write `C:\N1\gpts\construye-afuera\instructions.md`
- [ ] Write knowledge files for career tools
- [ ] Write conversation examples
- [ ] Commit: `feat: N1 Construye Afuera GPT configuration`

**Agent 3: N1 Compass GPT**

- [ ] Write `C:\N1\gpts\compass\instructions.md`
- [ ] Write knowledge files
- [ ] Commit: `feat: N1 Compass GPT configuration`

**Agent 4: N1 Ghost Check GPT**

- [ ] Write `C:\N1\gpts\ghost-check\instructions.md`
- [ ] Write knowledge files
- [ ] Commit: `feat: N1 Ghost Check GPT configuration`

### 4.4 VERIFY

- [ ] Create each GPT on ChatGPT (manual step — requires browser)
- [ ] Test each GPT with sample conversations
- [ ] Verify profile YAML output is compatible with Claude Skills
- [ ] Verify Spanish + English bilingual behavior
- [ ] Verify safety/scope disclaimer appears
- [ ] Document GPT Store URLs in README

---

## Phase 5: Claude Skills Publishing

### 5.1 RESEARCH

- [ ] Read SkillsMP submission guidelines
- [ ] Read SkillHub submission process
- [ ] Read Claude Marketplace requirements (if available)

### 5.2 EXECUTE

- [ ] Publish n1-busca-adentro to marketplaces
- [ ] Publish n1-construye-afuera to marketplaces
- [ ] Publish n1-system to marketplaces
- [ ] Publish n1-ghost-check to marketplaces
- [ ] Publish n1-compass to marketplaces
- [ ] Commit: `feat: publish 5 skills to marketplaces`

### 5.3 VERIFY

- [ ] Install each skill from marketplace into Claude
- [ ] Test each skill end-to-end
- [ ] Verify profile interchange works across skills

---

## Phase 6: GitHub Pages Deployment

### 6.1 EXECUTE

- [ ] Configure GitHub Pages on N1 repo (Settings → Pages → main branch)
- [ ] Configure custom domain if available
- [ ] Verify all static tools are accessible via GitHub Pages URLs
- [ ] Update README with live URLs
- [ ] Make repo public
- [ ] Commit: `feat: deploy GitHub Pages + make repo public`

### 6.2 VERIFY

- [ ] Visit each tool URL, verify works
- [ ] Test on mobile browser
- [ ] Check page load performance
- [ ] Verify email capture works in production

---

## Phase 7: First Ship (Interview Prep + CV Audit + Ghost Check)

> User specified: "we can ship something first — interview prep + CV audit as skills, ghost check can be there too"

### 7.1 EXECUTE

- [ ] Finalize n1-ghost-check skill + static web tool
- [ ] Extract CV Audit from n1-construye-afuera as standalone quick skill
- [ ] Extract Interview Prep from n1-construye-afuera as standalone quick skill
- [ ] Write 3 LinkedIn posts: problem → solution → results for each
- [ ] Publish to marketplaces

### 7.2 VERIFY

- [ ] Test all 3 tools end-to-end
- [ ] Verify shareable scorecards work
- [ ] Ready for LinkedIn launch

---

## Dependency Graph

```
Phase 0 (Foundation)
    │
    ├──→ Phase 1 (Static Web Tools)     ──→ Phase 3 (Scorecards)
    │                                          │
    └──→ Phase 2 (AI Skills)            ──→ Phase 4 (GPTs)
              │                                │
              └──→ Phase 5 (Marketplace)       │
                         │                     │
                         └──→ Phase 6 (GitHub Pages Deploy)
                                    │
                                    └──→ Phase 7 (First Ship)
```

**Parallelism:**

- Phase 1 and Phase 2 can run in parallel (different output types)
- Within Phase 1: all 7 static tools can be built in parallel
- Within Phase 2: all 5 skills can be built in parallel
- Phase 3 depends on Phase 1 (needs tools to add scorecards to)
- Phase 4 depends on Phase 2 (GPTs mirror skill content)
- Phase 5 depends on Phase 2 (skills must exist to publish)
- Phase 6 depends on Phase 1 + Phase 3 (needs web tools + scorecards)
- Phase 7 depends on Phase 2 + Phase 3 (needs skills + scorecards)

---

## Session Arrangement Guide

**How to run this across multiple Claude Code sessions:**

### Session 1: Phase 0 — Foundation (Opus + 4 Sonnet agents)

```
cd C:\N1
# Opus reads MASTER-PLAN-v2.md and FRAMEWORK-ARCHITECTURE.md
# Opus creates CLAUDE.md and profile format (sequential)
# Opus launches 4 Sonnet agents in parallel:
#   Agent 1: prompting-stack.md
#   Agent 2: voice-guide.md
#   Agent 3: safety-protocol.md
#   Agent 4: research-base.md
# Opus writes README.md
# Opus verifies all files
# Commit and push
```

**Estimated:** 1 session, ~30 min

### Session 2: Phase 1 — Static Web Tools (Opus + 7 Sonnet agents)

```
cd C:\N1
# Opus reads shared/ foundation files
# Opus launches 7 Sonnet agents in parallel:
#   Agent 1: Landing page + triage + shared CSS
#   Agent 2: Ghost Check
#   Agent 3: Compass / CAAS-12
#   Agent 4: Bull's Eye
#   Agent 5: MLQ-10
#   Agent 6: Flow Logger
#   Agent 7: Runway Calculator
# Opus reviews each tool, verifies in browser
# Commit and push
```

**Estimated:** 1-2 sessions, ~45-60 min each

### Session 3: Phase 2 — AI Skills (Opus + 5 Sonnet agents)

```
cd C:\N1
# Opus reads shared/ + profile format
# Opus launches 5 Sonnet agents in parallel:
#   Agent 1: n1-busca-adentro (largest — may need its own session)
#   Agent 2: n1-construye-afuera (largest — may need its own session)
#   Agent 3: n1-system
#   Agent 4: n1-ghost-check
#   Agent 5: n1-compass
# Opus reviews each skill
# Opus tests profile interchange between skills
# Commit and push
```

**Estimated:** 2-3 sessions (busca-adentro and construye-afuera are large)

### Session 4: Phase 3 — Integration + Scorecards (Opus + 3 Sonnet agents)

```
cd C:\N1
# Opus launches 3 agents:
#   Agent 1: Scorecard generator + integration into tools
#   Agent 2: Profile synthesizer page
#   Agent 3: Email capture setup
# Opus verifies scorecards look good
# Commit and push
```

**Estimated:** 1 session, ~30 min

### Session 5: Phase 4 — GPTs (Opus + 4 Sonnet agents)

```
cd C:\N1
# Opus compresses skill content for GPT instruction limits
# Opus launches 4 agents for GPT configs:
#   Agent 1-4: one per GPT
# Manual step: create GPTs in ChatGPT browser
# Commit and push
```

**Estimated:** 1 session for configs, manual browser time for GPT creation

### Session 6: Phase 5+6 — Publish + Deploy (Opus, mostly sequential)

```
cd C:\N1
# Publish skills to marketplaces (may require browser)
# Enable GitHub Pages
# Configure domain
# Update README with live URLs
# Make repo public
# Verify everything works
```

**Estimated:** 1 session, ~20 min

### Session 7: Phase 7 — First Ship (Opus)

```
cd C:\N1
# Finalize Ghost Check + CV Audit + Interview Prep
# Write LinkedIn posts
# Launch
```

**Estimated:** 1 session

---

## Post-Milestone Review Protocol

**After EVERY phase completion, run a 7-role debate analysis before proceeding:**

### Review Session Template (run after each phase)

```
Launch 7 agents in parallel, each reviewing the completed phase:

Agent 1 (PM): "Review Phase N deliverables. Does the user journey work? Where does it break?"
Agent 2 (Architect): "Review Phase N code/skills. Any technical issues? Token budgets? State management gaps?"
Agent 3 (YC): "Review Phase N from distribution perspective. Will anyone find/use this? What's missing?"
Agent 4 (Marketing): "Review Phase N for the beachhead audience. Does messaging work for senior LATAM engineers?"
Agent 5 (Talent VP): "Review Phase N from employer/LATAM perspective. Any cultural blind spots?"
Agent 6 (Coach): "Review Phase N for psychological safety. Pacing ok? Risk of premature closure?"
Agent 7 (PhD): "Review Phase N for academic rigor. Citations correct? Instruments administered properly?"

All 7 produce: KEEP / CHANGE / ADD / REMOVE recommendations.
Opus synthesizes into a FIX LIST.
Fix list becomes tasks in next session BEFORE proceeding to next phase.
```

### Phase 0 → Review 0 → Fixes 0 → Phase 1

### Phase 1 → Review 1 → Fixes 1 → Phase 2

### Phase 2 → Review 2 → Fixes 2 → Phase 3

### Phase 3 → Review 3 → Fixes 3 → Phase 4

### Phase 4 → Review 4 → Fixes 4 → Phase 5+6

### Phase 5+6 → Review 5 → Fixes 5 → Phase 7

### Final Milestone: Integration Review

**After all phases complete, run one FINAL comprehensive review:**

```
7-agent full-system review:
- Test the COMPLETE user journey: LinkedIn → landing page → triage →
  busca adentro → profile → construye afuera → scorecard → share
- Test profile interchange: static web → skill → GPT → back
- Test all 4 career paths through the full system
- Test crisis mode vs exploration mode vs growth mode
- Test quick mode vs deep mode
- Test Colombian cultural calibration
- Test safety protocol edge cases

Output: FINAL FIX LIST
Execute all fixes.
Then: ready to ship.
```

---

## Total: 8-12 sessions over ~2-3 weeks

(Including review sessions after each phase)

Each session starts clean (`/clear`). Opus reads CLAUDE.md + relevant plan section. Sonnet agents do the heavy lifting. Opus verifies quality. 7-role review after each milestone catches issues before they compound.

**Critical path:** Phase 0 → Review → Phase 2 (skills) → Review → Phase 7 (first ship). Everything else can be parallelized or deferred.
