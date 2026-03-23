# N1 Master Plan — 7-Agent Review Synthesis

**Date:** 2026-03-23
**Reviewers:** Senior PM, Software Architect, YC CEO, Marketing VP, VP Talent, Executive Coach, PhD Psychologist

---

## Universal Agreement (All Reviewers)

### 1. Ship What's Built NOW

Ghost Check and Compass already exist in n1-companion. Ship them this week as static web tools + LinkedIn posts. Don't wait for busca adentro.

### 2. Content Starts Day 1

Phase 13 (LinkedIn Content) should be Phase 0. The research alone generates 50+ posts. Every week without content is audience decay.

### 3. Profile Interchange Format = Phase 0

The canonical YAML schema is load-bearing infrastructure. Every tool produces/consumes it. Define it before building anything.

```yaml
# --- N1 Self-Knowledge Profile v1 ---
identity_status: null
adaptability:
  { concern: null, control: null, curiosity: null, confidence: null }
signature_strengths: []
core_values: []
mlq: { presence: null, search: null, quadrant: null }
life_theme: null
# --- end N1 profile ---
```

### 4. Landing Page / "Start Here"

Need a one-page canonical URL. Triage: "What's your situation?" → Crisis / Exploration / Growth → curated 3-4 tool sequence. GitHub Pages, 2 hours to build.

### 5. GPTs Before Claude Skills

LATAM uses ChatGPT, not Claude. Build GPTs first for reach. Claude Skills for developer niche.

### 6. Consolidate 11 Skills → 5

1. `n1-busca-adentro` (all 4 dimensions)
2. `n1-system` (integration + onboarding)
3. `n1-career-tools` (CV + interview + negotiate + STAR)
4. `n1-ghost-check` (standalone viral)
5. `n1-compass` (standalone hook)

### 7. Profile-Enhanced, Not Profile-Required

Every tool must work standalone. The profile makes it better, not possible.

### 8. Quick Mode (5 min) + Deep Mode (30-45 min)

80% of users want answers, not a multi-session Socratic journey. Quick mode gives useful-but-shallow results. Deep mode for the 20% ready for real work.

### 9. Triage/Intake Layer

Before any tool: classify the user.

- **Crisis** (laid off, deadline, financial pressure): → Construye Afuera with minimum viable self-knowledge
- **Exploration** (employed, curious, proactive): → Full Busca Adentro journey
- **Growth** (stable, wants optimization): → Selective dimensions

---

## Strong Agreement (4+ Reviewers)

### 10. Shareable Visual Scorecards

THE single highest-ROI feature. Ghost Check score, CAAS profile, values alignment — rendered as visual cards (HTML-to-image) users share on LinkedIn. Without this, tools are useful but invisible.

### 11. HR as Distribution Channel

The 4.6% HR/TA segment should RECOMMEND N1 to candidates, not use it themselves. "Here are free tools you should share with your candidates."

### 12. No Viral Loop → Must Design Shareability

YAML output = no shares. Need: visual profile cards, percentile comparisons, LinkedIn post drafts, shareable experiment challenges.

### 13. WhatsApp Community for Bogota

Not Discord. 39.9% + 11.2% = 51% in two Colombian cities. WhatsApp is LATAM's community platform.

### 14. The Moat is Nicolas, Not the Tools

Prompts are copyable. 700+ studies are public. The moat is: personal brand + integrated methodology + accumulated user stories + community.

### 15. "Grow Where You Are" Pathway

Not everyone needs to leave their job. Add a pathway for people whose profile aligns with their current role but not their environment/team/conditions. Makes the tool employer-friendly.

---

## Specialist Insights

### PhD Psychologist

- **SCCT as integrative spine**, Protean Career Theory as meta-narrative
- **Separate measurement from conversation** — static web forms for CAAS/MLQ, AI for interpretation
- **Narrow therapeutic claims** to ACT (primary) + Socratic (technique) + cognitive restructuring
- **Add:** AAQ-II (psychological flexibility, 7 items), CDMSE-SF (career self-efficacy)
- **Cultural calibration:** High MLQ-Search is normative in Colombia (not symptomatic), CAAS Control runs lower (collectivist norm)
- **Assessment cooling-off:** 4-6 weeks between retakes
- **Replace** Psychology Today citation with Kashdan & McKnight (2009), Damon (2003), Shin & Steger (2014)
- **Add frameworks:** Schlossberg 4S, Planned Happenstance, PsyCap HERO, Career Chaos Theory
- **Effect sizes:** d = 0.2-0.4 (honest, meaningful at zero cost)
- **VIA-ACT tension:** essentialist vs contextualist — needs explicit positioning

### Executive Coach

- **Recommended sequence:** Values → Strengths → Identity → Purpose (not parallel)
- **Premature closure risk:** AI resolves productive tension too fast
- **Add dimensions:** emotional patterns, relational context (family/cultural pressure), somatic/body data
- **Pacing controls:** minimum spacing between dimensions, behavioral homework before advancing
- **Crisis mode vs Growth mode** — separate protocols
- **Limitations transparency:** "What this tool is NOT"

### VP Talent (LATAM)

- **Busca Adentro = potential "exodus engine"** for employers — add "grow where you are"
- **Real LATAM struggles:** compensation opacity, credential inflation, English proficiency as gate, network poverty, informal-to-formal transitions
- **Internal mobility** content for Globant/MeLi employees (moving UP or ACROSS, not just OUT)
- **Layoff Response Kit** — first 72 hours protocol, highly shareable

### Marketing VP

- **Beachhead:** Senior SWEs at LATAM outsourcing firms (Globant/EPAM/Perficient)
- **3-post-per-tool cadence:** problem → solution → results (not 1 post per tool)
- **Week 3 "pivot post"** bridging tactical tools → busca adentro philosophy
- **Entry-level reframe:** moratorium status is PRODUCTIVE, not a problem
- **Ghost Check as interactive campaign** — paste postings in comments, analyze live
- **Don't use "psicologia x sistemas x aceleracion" as public tagline** — internal only
- **One-liners:** "700 estudios dicen que tu plan de carrera esta mal" / "El 58% quiere cambiar. El 14% hace algo. N1 es para el 14%."
- **Time-box busca adentro to 2-week sprint** — these are prompts, not engineering

### YC CEO

- **"This is a content play dressed in product language"** — name it correctly
- **Longitudinal data is the 10x play** — track 10K career transitions over 12-24 months
- **Email capture is critical** — zero owned distribution without it
- **Community should be core**, not deferred
- **Single integrated assessment** (not 20 separate tools) with shareable visual output
- **90-day monetization experiment** — paid cohort, community, or premium tier
- **"Build less. Own more. Measure everything."**

### Software Architect

- **Claude Projects = primary platform** (persistent state), Skills = discovery
- **Token budget:** ~25-35K per session, fits free Claude easily
- **GPT instructions max ~1,800 tokens** — compress ruthlessly, GPTs are acquisition funnel
- **Drop Market Scanner** — can't make HTTP requests from any zero-cost platform
- **localStorage + export/import** for cross-tool browser data flow
- **Static web: all 5 tools confirmed implementable** as pure HTML/JS
- **Safety protocol as shared reference file** loaded by all skills (DRY)

---

## Revised Build Order

```
WEEK 0 (NOW):
├── Define Profile Interchange Format v1
├── Ship Ghost Check as static web + LinkedIn campaign
├── Ship Compass as static web
├── Start LinkedIn content (research findings = posts)
├── Build landing page / "start here" triage
│
WEEKS 1-2 (SPRINT):
├── Build all 4 Busca Adentro dimensions (SKILL.md files)
│   └── Recommended sequence: Values → Strengths → Identity → Purpose
├── Build static web assessment forms (CAAS-12, MLQ-10, Bull's Eye)
├── Define safety protocol (shared)
├── Define voice guide (shared)
│
WEEK 3:
├── Build Integration Layer (Profile Synthesizer)
├── Build ChatGPT GPTs (4 bundled) ← BEFORE Claude Skills
├── Shareable visual scorecards for all assessment tools
│
WEEKS 4-5:
├── Enhance Construye Afuera tools with profile context
├── Build Claude Skills (5 consolidated)
├── Publish to skills marketplaces
│
WEEK 6+:
├── Full system LinkedIn announcement
├── WhatsApp Community (Bogota)
├── Begin collecting longitudinal data
├── Plan first Bogota workshop (month 3)
```

---

## Changes to Master Plan

1. **Add Phase -1: Ship What's Built** (Ghost Check + Compass + content NOW)
2. **Move Phase 13 to Phase 0** (content starts immediately)
3. **Add Triage/Intake Layer** before Phase 1
4. **Enforce sequence:** Values → Strengths → Identity → Purpose
5. **Add Quick Mode to every dimension** (5 min shallow + 30 min deep)
6. **Consolidate 11 skills → 5**
7. **Add Crisis Mode vs Growth Mode protocols**
8. **Add "Grow Where You Are" pathway**
9. **Separate measurement (static forms) from interpretation (AI conversation)**
10. **Add SCCT as integrative spine, Protean Career Theory as meta-narrative**
11. **Narrow therapeutic claims:** ACT primary, Socratic technique, cognitive restructuring
12. **Add missing instruments:** AAQ-II, CDMSE-SF
13. **Add cultural calibration notes** for Colombia
14. **Add shareable visual scorecard generation** to every assessment
15. **Add email capture** to landing page
16. **Drop Market Scanner** from v1
17. **Add Layoff Response Kit** as high-shareability tool
18. **Add pacing controls** (min spacing, behavioral homework gates)
19. **Add limitations/scope disclosure** to every tool
20. **Replace Psychology Today citations** with peer-reviewed sources
