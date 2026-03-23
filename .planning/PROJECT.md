# N1 — El Sistema Eres Tu

## What This Is

N1 is a research-backed career strategy methodology delivered through AI tools (Claude Skills, ChatGPT GPTs), static web instruments, and content. It helps people build self-knowledge (busca adentro) and translate it into career action (construye afuera) using 25+ validated psychological frameworks, free forever. Target audience: professionals in LATAM navigating career transitions — beachhead is senior SWEs at outsourcing firms (Globant, EPAM, Perficient).

## Core Value

Every person can build a career strategy grounded in validated self-knowledge — values, strengths, identity, and purpose — without paying for coaching or therapy. The system is the user themselves.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Profile Interchange Format (canonical YAML schema all tools produce/consume)
- [ ] Shared foundation files (prompting stack, voice guide, safety protocol, research base)
- [ ] CLAUDE.md project instructions
- [ ] 7 static web assessment tools (Ghost Check, Compass/CAAS-12, Bull's Eye, MLQ-10, Flow Logger, Runway Calculator, Landing Page)
- [ ] 5 AI skills (busca-adentro, construye-afuera, n1-system, ghost-check, compass)
- [ ] Triage/intake layer (crisis/exploration/growth routing)
- [ ] Quick mode (45-60 min) + Deep mode (4-6 weeks) per dimension
- [ ] Shareable visual scorecards for every assessment
- [ ] Profile synthesizer (cross-dimension integration)
- [ ] 4 ChatGPT GPTs (busca-adentro, construye-afuera, compass, ghost-check)
- [ ] Claude Skills marketplace publishing
- [ ] GitHub Pages deployment with custom domain
- [ ] Email capture via free-tier provider
- [ ] Career path taxonomy (4 macro-categories, 20+ specific paths)
- [ ] Cultural calibration for Colombia/LATAM
- [ ] Safety protocol (MIND-SAFE crisis detection + scope disclaimer)
- [ ] README with architecture, taxonomy, and public-facing description

### Out of Scope

- Vercel web app / subscription model — killed per panel consensus, dead weight post-pivot
- Server-side API integrations (JobSpy, LinkedIn API) — no zero-cost server in v1
- Real-time chat — high complexity, not core
- Mobile app — web-first
- OAuth login — email/password sufficient for v1
- Paid features / freemium gating — free forever, monetization through brand (consulting, workshops, book)
- Market Scanner tool — can't make HTTP requests from zero-cost platform
- Full VIA-120 replication — reference viacharacter.org instead (licensing)

## Context

- **Existing assets:** 550+ studies research base, prompting strategies research, academic meta-review, existing Ghost Check and Compass implementations in n1-companion repo, voice guide, brand colors
- **Architecture:** Static HTML/JS tools on GitHub Pages + AI skills as SKILL.md files + GPT instruction configs. No backend, no auth, no database.
- **Framework architecture:** SCCT as integrative spine, Protean Career Theory as meta-narrative. 4 core dimensions (Values via ACT/Schwartz, Strengths via VIA/Bandura/Flow/Big5, Identity via Ibarra/Marcia/CAAS, Purpose via Frankl/MLQ/Ryff/Damon). Enrichment layers embedded in conversation (emotional patterns, relational context, somatic awareness).
- **Distribution:** LinkedIn (19k followers) primary channel. GPTs for LATAM reach (ChatGPT dominant). Claude Skills for developer niche. Email list as only owned channel.
- **Existing skill directories:** `skills/busca-adentro/` and `skills/construye-afuera/` exist but are empty
- **Reference repos:** n1-companion (existing tools), n1-post (voice guide)

## Constraints

- **Budget:** $0 — everything must be free-tier or static hosting
- **Platform:** GitHub Pages for web, Claude/ChatGPT for AI — no owned infrastructure
- **Token budgets:** ~25-35K per Claude session, ~1,800 tokens for GPT instructions
- **Assessment integrity:** Validated instruments (CAAS-12, MLQ-10, Big Five) must be administered as standardized forms, not through AI conversation
- **Therapeutic scope:** Never claim to do therapy. ACT techniques internally, "evidence-based career guidance" externally. Scope disclaimer on every tool.
- **Cultural:** Spanish primary for content, English for code. Colombian voseo. High MLQ-Search normative in LATAM (not pathological).
- **Assessment pacing:** 4-6 week minimum between retakes of same instrument

## Key Decisions

| Decision                                                                | Rationale                                                                                     | Outcome   |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------- |
| Methodology brand, not product company                                  | No lock-in, no moat beyond brand + methodology. Tools are delivery mechanisms.                | — Pending |
| 5 consolidated AI skills (not 11)                                       | Token budgets, maintenance burden, shared foundation architecture                             | — Pending |
| SCCT integrative spine + Protean Career Theory meta-narrative           | SCCT maps self-efficacy→expectations→interests→goals→actions = busca adentro→construye afuera | — Pending |
| Free forever, monetize through brand                                    | LATAM trust requires free-first. Revenue: consulting, workshops, book sales                   | — Pending |
| GPTs before Claude Skills                                               | LATAM uses ChatGPT, not Claude. GPTs for reach, Skills for developer niche                    | — Pending |
| Sequence: Values→Strengths→Identity→Purpose (recommended, not enforced) | Coach's clinical sequence + triage-based entry point override                                 | — Pending |
| Separate measurement from interpretation                                | Static web forms for instruments, AI for interpretation. Scientific integrity.                | — Pending |
| Profile-enhanced, not profile-required                                  | Every tool works standalone. Profile makes it better, not possible.                           | — Pending |
| Kill Vercel web app                                                     | Subscription model dead. Static GitHub Pages is free forever.                                 | — Pending |
| Therapeutic labels internal only                                        | MI, CBT, Narrative Therapy used as techniques internally. Never labeled externally.           | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):

1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):

1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---

_Last updated: 2026-03-23 after initialization_
