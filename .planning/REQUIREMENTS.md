# Requirements: N1 — El Sistema Eres Tu

**Defined:** 2026-03-23
**Core Value:** Every person can build a career strategy grounded in validated self-knowledge — free, forever.

## v1 Requirements

### Foundation

- [x] **FOUN-01**: CLAUDE.md project instructions file with identity, structure, conventions, safety
- [x] **FOUN-02**: Profile Interchange Format v1 — canonical YAML schema with version protocol
- [x] **FOUN-03**: Profile template (blank YAML users can copy)
- [x] **FOUN-04**: Shared prompting stack (ACT + Socratic + MI + CBT + CoE + SELF-DISCOVER + Reflexion)
- [x] **FOUN-05**: Shared voice guide (N1 voice, bilingual rules, Colombian voseo, anti-corporate tone)
- [x] **FOUN-06**: Shared safety protocol (MIND-SAFE crisis detection, scope disclaimer, crisis resources)
- [x] **FOUN-07**: Shared research base (25+ frameworks condensed, fits ~4K tokens)
- [x] **FOUN-08**: README.md with brand identity, architecture, taxonomy, tool directory

### Static Web Tools

- [x] **WEB-01**: Landing page with N1 brand, triage quiz, tool directory, email capture
- [x] **WEB-02**: Shared CSS stylesheet (mobile-responsive, N1 brand colors)
- [x] **WEB-03**: Ghost Check — paste job posting, get ghost score + signal breakdown + shareable scorecard
- [ ] **WEB-04**: Compass / CAAS-12 — 12-item career adaptability assessment with radar chart + profile export
- [ ] **WEB-05**: Bull's Eye — ACT values alignment exercise with interactive visual + profile export
- [ ] **WEB-06**: MLQ-10 — meaning in life questionnaire with quadrant placement + profile export
- [ ] **WEB-07**: Flow Activity Logger — challenge-skill tracking with flow zone visualization + localStorage persistence
- [x] **WEB-08**: Runway Calculator — financial runway with 3 scenarios, COP/USD toggle
- [x] **WEB-09**: All tools export profile data as YAML compatible with Profile Interchange Format
- [x] **WEB-10**: All tools include safety disclaimer and cultural calibration notes where relevant

### AI Skills

- [ ] **SKILL-01**: n1-busca-adentro — 4 self-knowledge dimensions (values, strengths, identity, purpose) with triage, quick/deep modes, profile YAML output
- [ ] **SKILL-02**: n1-construye-afuera — career strategy tools (CV audit, interview prep, negotiate, STAR builder, profile builder, network map, job hunt, layoff kit, grow where you are) adapted per career path
- [ ] **SKILL-03**: n1-system — full integrated experience (triage → busca adentro → integration → construye afuera → evolution)
- [ ] **SKILL-04**: n1-ghost-check — standalone ghost job detector with optional profile enhancement
- [ ] **SKILL-05**: n1-compass — standalone career readiness check (CAAS-12 + values quick-check + self-efficacy pulse)
- [ ] **SKILL-06**: All skills load from shared/ foundation (DRY architecture)
- [ ] **SKILL-07**: All skills work standalone (no profile required) and enhanced (with profile)
- [ ] **SKILL-08**: All skills include scope disclaimer, safety protocol, and cultural calibration

### Integration

- [ ] **INTG-01**: Scorecard generator library (HTML Canvas → PNG) for all assessments with N1 branding
- [ ] **INTG-02**: Profile synthesizer page — import from localStorage or YAML, cross-dimension insights, career path recommendation
- [ ] **INTG-03**: Email capture integration on landing page and tool completion screens
- [ ] **INTG-04**: Scorecards integrated into each static web tool's results screen

### GPTs

- [ ] **GPT-01**: N1 Busca Adentro GPT — compressed instructions (~1,800 tokens) + knowledge files
- [ ] **GPT-02**: N1 Construye Afuera GPT — compressed instructions + career tools knowledge
- [ ] **GPT-03**: N1 Compass GPT — compressed instructions + assessment knowledge
- [ ] **GPT-04**: N1 Ghost Check GPT — compressed instructions + signal detection knowledge
- [ ] **GPT-05**: All GPTs produce profile YAML compatible with Claude Skills
- [ ] **GPT-06**: All GPTs include Spanish + English bilingual behavior and safety disclaimer

### Publishing

- [ ] **PUB-01**: 5 Claude Skills published to SkillsMP / SkillHub marketplaces
- [ ] **PUB-02**: Skills installable and functional end-to-end from marketplace

### Deployment

- [ ] **DEPLOY-01**: GitHub Pages configured on N1 repo
- [ ] **DEPLOY-02**: All static tools accessible via GitHub Pages URLs
- [ ] **DEPLOY-03**: Repository made public
- [ ] **DEPLOY-04**: README updated with live URLs

### First Ship

- [ ] **SHIP-01**: Ghost Check skill + static web tool finalized and polished
- [ ] **SHIP-02**: CV Audit extracted as standalone quick skill from construye-afuera
- [ ] **SHIP-03**: Interview Prep extracted as standalone quick skill from construye-afuera
- [ ] **SHIP-04**: 3 LinkedIn posts per tool (problem → solution → results)

## v2 Requirements

### Community

- **COMM-01**: WhatsApp community for Bogota beachhead
- **COMM-02**: Longitudinal data collection (with consent) for career transition research

### Advanced Integrations

- **ADV-01**: Big Five personality assessment embedded via bigfive-web npm module
- **ADV-02**: O\*NET Interest Profiler integration (reference + ingest Holland codes)
- **ADV-03**: AAQ-II psychological flexibility assessment as static web form
- **ADV-04**: CDMSE-SF career decision-making self-efficacy assessment

### Content

- **CONT-01**: 3-post-per-tool LinkedIn cadence
- **CONT-02**: Newsletter via Buttondown with research highlights

## Out of Scope

| Feature                             | Reason                                                          |
| ----------------------------------- | --------------------------------------------------------------- |
| Vercel web app / subscription model | Dead post-pivot. Static GitHub Pages replaces it at $0 cost     |
| Server-side APIs (JobSpy, LinkedIn) | No zero-cost server infrastructure in v1                        |
| Real-time chat                      | High complexity, not core to career methodology                 |
| Mobile app                          | Web-first, mobile responsive sufficient for v1                  |
| OAuth login                         | No auth needed — tools are anonymous, profile is local YAML     |
| Paid features / freemium            | Free forever per founder decision. Monetize through brand       |
| Market Scanner tool                 | Requires HTTP requests not feasible from static platform        |
| Full VIA-120 replication            | Reference viacharacter.org — licensing and norming requirements |
| Custom domain purchase              | v1 uses github.io — domain is v2 nice-to-have                   |

## Traceability

| Requirement | Phase   | Status  |
| ----------- | ------- | ------- |
| FOUN-01     | Phase 0 | Complete |
| FOUN-02     | Phase 0 | Complete |
| FOUN-03     | Phase 0 | Complete |
| FOUN-04     | Phase 0 | Complete |
| FOUN-05     | Phase 0 | Complete |
| FOUN-06     | Phase 0 | Complete |
| FOUN-07     | Phase 0 | Complete |
| FOUN-08     | Phase 0 | Complete |
| WEB-01      | Phase 1 | Complete |
| WEB-02      | Phase 1 | Complete |
| WEB-03      | Phase 1 | Complete |
| WEB-04      | Phase 1 | Pending |
| WEB-05      | Phase 1 | Pending |
| WEB-06      | Phase 1 | Pending |
| WEB-07      | Phase 1 | Pending |
| WEB-08      | Phase 1 | Complete |
| WEB-09      | Phase 1 | Complete |
| WEB-10      | Phase 1 | Complete |
| SKILL-01    | Phase 2 | Pending |
| SKILL-02    | Phase 2 | Pending |
| SKILL-03    | Phase 2 | Pending |
| SKILL-04    | Phase 2 | Pending |
| SKILL-05    | Phase 2 | Pending |
| SKILL-06    | Phase 2 | Pending |
| SKILL-07    | Phase 2 | Pending |
| SKILL-08    | Phase 2 | Pending |
| INTG-01     | Phase 3 | Pending |
| INTG-02     | Phase 3 | Pending |
| INTG-03     | Phase 3 | Pending |
| INTG-04     | Phase 3 | Pending |
| GPT-01      | Phase 4 | Pending |
| GPT-02      | Phase 4 | Pending |
| GPT-03      | Phase 4 | Pending |
| GPT-04      | Phase 4 | Pending |
| GPT-05      | Phase 4 | Pending |
| GPT-06      | Phase 4 | Pending |
| PUB-01      | Phase 5 | Pending |
| PUB-02      | Phase 5 | Pending |
| DEPLOY-01   | Phase 6 | Pending |
| DEPLOY-02   | Phase 6 | Pending |
| DEPLOY-03   | Phase 6 | Pending |
| DEPLOY-04   | Phase 6 | Pending |
| SHIP-01     | Phase 7 | Pending |
| SHIP-02     | Phase 7 | Pending |
| SHIP-03     | Phase 7 | Pending |
| SHIP-04     | Phase 7 | Pending |

**Coverage:**

- v1 requirements: 40 total
- Mapped to phases: 40
- Unmapped: 0

---

_Requirements defined: 2026-03-23_
_Last updated: 2026-03-23 after initial definition_
