# Roadmap: N1 — El Sistema Eres Tu

## Overview

N1 delivers a research-backed career strategy methodology through AI skills, static web tools, and content — free forever. The journey starts by laying a shared foundation (identity, shared files, Profile schema), then builds static web instruments and AI skills in parallel, integrates them with scorecards and email capture, publishes GPTs and Claude Skills, deploys to GitHub Pages, and culminates in a polished first ship with LinkedIn content.

## Phases

**Phase Numbering:**

- Integer phases (0-7): Planned milestone work
- Decimal phases (e.g., 1.1): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 0: Foundation** - Shared files, Profile schema, CLAUDE.md, README — everything all tools depend on (completed 2026-03-23)
- [x] **Phase 1: Static Web Tools** - 7 assessment tools + landing page on GitHub Pages stack (completed 2026-03-23)
- [x] **Phase 2: AI Skills** - 5 SKILL.md files (busca-adentro, construye-afuera, n1-system, ghost-check, compass) (completed 2026-03-23)
- [ ] **Phase 3: Integration + Scorecards** - Scorecard library, profile synthesizer, email capture wired in
- [ ] **Phase 4: ChatGPT GPTs** - 4 GPT configurations with compressed instructions + knowledge files
- [ ] **Phase 5: Claude Skills Publishing** - 5 skills published and installable from marketplace
- [ ] **Phase 6: GitHub Pages Deployment** - Repo public, Pages configured, all URLs live
- [ ] **Phase 7: First Ship** - Ghost Check + CV Audit + Interview Prep polished, 3 LinkedIn posts per tool

## Phase Details

### Phase 0: Foundation

**Goal**: Every subsequent tool and skill has a single, stable foundation to build on — shared files, schema, voice, safety, and identity are complete and committed
**Depends on**: Nothing (first phase)
**Requirements**: FOUN-01, FOUN-02, FOUN-03, FOUN-04, FOUN-05, FOUN-06, FOUN-07, FOUN-08
**Success Criteria** (what must be TRUE):

1. CLAUDE.md exists and correctly describes project identity, conventions, and safety rules
2. Profile Interchange Format YAML schema is defined with version protocol and a blank template users can copy
3. Shared foundation files (prompting stack, voice guide, safety protocol, research base) exist in shared/ and fit within token budget
4. README.md describes the brand, architecture, tool directory, and career path taxonomy accurately
   **Plans**: 7 plans

Plans:

- [x] 00-01-PLAN.md — CLAUDE.md project instructions
- [x] 00-02-PLAN.md — Profile Interchange Format v1 (schema + template)
- [x] 00-03-PLAN.md — Shared prompting stack
- [x] 00-04-PLAN.md — Shared voice guide
- [x] 00-05-PLAN.md — Shared safety protocol
- [x] 00-06-PLAN.md — Shared research base
- [x] 00-07-PLAN.md — README.md

### Phase 1: Static Web Tools

**Goal**: Any person can open a browser, run a validated career assessment, get a visual result, and export their profile — no login, no install, no cost
**Depends on**: Phase 0
**Requirements**: WEB-01, WEB-02, WEB-03, WEB-04, WEB-05, WEB-06, WEB-07, WEB-08, WEB-09, WEB-10
**Success Criteria** (what must be TRUE):

1. Landing page loads with N1 branding, triage quiz, and links to all tools
2. Each of the 7 tools (Ghost Check, Compass/CAAS-12, Bull's Eye, MLQ-10, Flow Logger, Runway Calculator) is functional and returns a result
3. Every tool that produces assessment data exports a YAML file compatible with the Profile Interchange Format
4. Every tool displays a safety disclaimer and cultural calibration notes where relevant
5. All tools are mobile-responsive using the shared CSS stylesheet
   **Plans**: 8 plans
   **UI hint**: yes

Plans:

- [x] 01-01-PLAN.md — Shared CSS design system + assessment engine JS (Wave 1)
- [x] 01-02-PLAN.md — Landing page + triage quiz + email capture (Wave 2)
- [x] 01-03-PLAN.md — Ghost Check tool (Wave 2)
- [x] 01-04-PLAN.md — Compass / CAAS-12 assessment (Wave 2)
- [x] 01-05-PLAN.md — Bull's Eye values alignment tool (Wave 2)
- [x] 01-06-PLAN.md — MLQ-10 meaning in life questionnaire (Wave 2)
- [x] 01-07-PLAN.md — Flow Activity Logger (Wave 2)
- [x] 01-08-PLAN.md — Runway Calculator (Wave 2)

### Phase 2: AI Skills

**Goal**: Any person can install a Claude Skill and get a structured, safe, culturally-calibrated AI career guidance session that works standalone or with a profile
**Depends on**: Phase 0
**Requirements**: SKILL-01, SKILL-02, SKILL-03, SKILL-04, SKILL-05, SKILL-06, SKILL-07, SKILL-08
**Success Criteria** (what must be TRUE):

1. All 5 skills (busca-adentro, construye-afuera, n1-system, ghost-check, compass) load and run a coherent session without errors
2. Each skill loads shared/ foundation files (DRY — no duplicated prompting stack or voice guide)
3. Each skill works standalone (no profile) and produces richer output when a profile YAML is provided
4. Every skill applies the MIND-SAFE safety protocol, scope disclaimer, and Colombian Spanish voice consistently
   **Plans**: 5 plans

Plans:

- [x] 02-01-PLAN.md — n1-busca-adentro (SKILL.md + 4 dimension reference files) (Wave 1)
- [x] 02-02-PLAN.md — n1-construye-afuera (SKILL.md + 3 career reference files) (Wave 1)
- [x] 02-03-PLAN.md — n1-ghost-check (SKILL.md, standalone) (Wave 1)
- [x] 02-04-PLAN.md — n1-compass (SKILL.md, standalone) (Wave 1)
- [x] 02-05-PLAN.md — n1-system (SKILL.md, full integrated orchestrator) (Wave 2)

### Phase 3: Integration + Scorecards

**Goal**: Assessment results are visually shareable, cross-dimension insights are surfaced, and email capture is live — tools become a system
**Depends on**: Phase 1
**Requirements**: INTG-01, INTG-02, INTG-03, INTG-04
**Success Criteria** (what must be TRUE):

1. Every static web tool's results screen displays an N1-branded shareable scorecard (PNG via HTML Canvas)
2. The profile synthesizer page accepts YAML import or localStorage data and produces cross-dimension career path recommendations
3. Email capture is functional on the landing page and on tool completion screens (free-tier provider)
   **Plans**: 3 plans
   **UI hint**: yes

Plans:

- [x] 03-01-PLAN.md — Enhanced scorecard library in assessment-engine.js (Wave 1)
- [ ] 03-02-PLAN.md — Profile synthesizer page web/profile/index.html (Wave 2)
- [x] 03-03-PLAN.md — Email capture + scorecard integration into all 6 tools (Wave 2)

### Phase 4: ChatGPT GPTs

**Goal**: LATAM users on ChatGPT can access N1's four core experiences with the same quality, voice, and safety as the Claude Skills
**Depends on**: Phase 2
**Requirements**: GPT-01, GPT-02, GPT-03, GPT-04, GPT-05, GPT-06
**Success Criteria** (what must be TRUE):

1. All 4 GPTs (Busca Adentro, Construye Afuera, Compass, Ghost Check) are configured and respond in Colombian Spanish by default
2. Each GPT's instructions fit within the ~1,800 token budget and reference correct knowledge files
3. Every GPT produces profile YAML output compatible with Claude Skills format
4. Every GPT includes safety disclaimer and bilingual (Spanish/English) behavior
   **Plans**: TBD

### Phase 5: Claude Skills Publishing

**Goal**: Any Claude user can find and install N1 skills from the marketplace and run a session end-to-end
**Depends on**: Phase 2
**Requirements**: PUB-01, PUB-02
**Success Criteria** (what must be TRUE):

1. All 5 Claude Skills are listed on SkillsMP / SkillHub marketplaces
2. Each skill can be installed and completes a full session end-to-end from the marketplace entry point
   **Plans**: TBD

### Phase 6: GitHub Pages Deployment

**Goal**: Every static web tool is publicly accessible via GitHub Pages URL with no login wall, no cost, and no broken links
**Depends on**: Phase 1, Phase 3
**Requirements**: DEPLOY-01, DEPLOY-02, DEPLOY-03, DEPLOY-04
**Success Criteria** (what must be TRUE):

1. GitHub Pages is configured and serving from the N1 repo
2. All static tools are accessible via their GitHub Pages URLs with no 404s
3. The repository is public and README lists all live URLs
   **Plans**: TBD

### Phase 7: First Ship

**Goal**: Ghost Check, CV Audit, and Interview Prep are polished flagship experiences — and 9 LinkedIn posts are ready to launch them to 19K followers
**Depends on**: Phase 2, Phase 3
**Requirements**: SHIP-01, SHIP-02, SHIP-03, SHIP-04
**Success Criteria** (what must be TRUE):

1. Ghost Check (static tool + Claude Skill) is end-to-end polished with final UX, copy, and scorecard
2. CV Audit is extracted as a standalone quick skill with its own entry point from construye-afuera
3. Interview Prep is extracted as a standalone quick skill with its own entry point from construye-afuera
4. 9 LinkedIn posts exist (3 per tool: problem, solution, results) ready to publish
   **Plans**: TBD

## Progress

**Execution Order:**
Phases execute in dependency order. Phase 1 and Phase 2 can run in parallel after Phase 0.

| Phase                       | Plans Complete | Status      | Completed  |
| --------------------------- | -------------- | ----------- | ---------- |
| 0. Foundation               | 7/7            | Complete    | 2026-03-23 |
| 1. Static Web Tools         | 8/8            | Complete    | 2026-03-23 |
| 2. AI Skills                | 5/5            | Complete    | 2026-03-23 |
| 3. Integration + Scorecards | 2/3 | In Progress|  |
| 4. ChatGPT GPTs             | 0/TBD          | Not started | -          |
| 5. Claude Skills Publishing | 0/TBD          | Not started | -          |
| 6. GitHub Pages Deployment  | 0/TBD          | Not started | -          |
| 7. First Ship               | 0/TBD          | Not started | -          |
