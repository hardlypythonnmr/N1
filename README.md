# N1 — El Sistema Eres Tu

> Career strategy grounded in validated self-knowledge. Free forever.

**700+ studies. 25+ frameworks. Zero cost.**

> **Here to replicate the pattern, not use the tool?** Open [FOR-BUILDERS.md](FOR-BUILDERS.md) — read order, architecture diagram, what to steal, what's not done.

---

## El Sistema Eres Tu

N1 delivers research-backed career guidance through AI skills, static web instruments, and content — free forever. The methodology integrates 25+ validated psychological frameworks (CAAS, ACT, MLQ, VIA, SCCT, Big Five) to help people build self-knowledge and translate it into career action. The system is not a product you subscribe to — it's a methodology that becomes yours.

Target audience: professionals in LATAM navigating career transitions. Beachhead: senior software engineers at outsourcing firms (Globant, EPAM, Perficient) in Colombia.

---

## What Does Not Exist (Until Now)

A tool that:

1. Measures using validated instruments (CAAS-12, MLQ-10, Big Five, VIA, AAQ-II)
2. Intervenes using evidence-based exercises (ACT values, STAR builder, crafting experiments)
3. Tracks longitudinal progress (re-measurement, alignment scores over time)
4. Integrates frameworks into a coherent self-knowledge profile
5. Cites every recommendation to a specific study
6. Does all of the above at zero cost, in Spanish, for LATAM

Key finding: CAAS (career adaptability) has 149 studies and 82,519 participants. No consumer tool exists.

---

## Architecture

```
ENTRY POINTS
├── Claude Skills (skills/) — installed in Claude Projects
├── ChatGPT GPTs (gpts/) — GPT Store
└── Static Web Tools (web/) — GitHub Pages, no login

SHARED FOUNDATION (loaded by all tools)
├── shared/profile-format.md — YAML schema (all tools interoperate)
├── shared/prompting-stack.md — ACT + Socratic + MI + CBT + CoE
├── shared/voice-guide.md — Colombian Spanish, anti-corporate, cited
├── shared/safety-protocol.md — MIND-SAFE, scope disclaimer, crisis resources
└── shared/research-base.md — 25+ frameworks condensed (~4K tokens)

USER JOURNEY
Triage (situation + career path)
→ Busca Adentro (values → strengths → identity → purpose)
→ Profile YAML (portable across all tools)
→ Construye Afuera (CV, interview, negotiate, network, job hunt)
→ Shareable visual scorecard
```

---

## Tool Directory

### Claude Skills

| Skill               | Trigger                                        | What it does                    |
| ------------------- | ---------------------------------------------- | ------------------------------- |
| n1-busca-adentro    | "career direction", "self-knowledge", "values" | All 4 self-knowledge dimensions |
| n1-construye-afuera | "CV", "interview", "negotiate", "job search"   | All career strategy tools       |
| n1-system           | "career system", "N1", "el sistema"            | Full integrated experience      |
| n1-ghost-check      | "ghost job", "is this real", "job posting"     | Ghost job detector              |
| n1-compass          | "career readiness", "CAAS", "adaptability"     | Career readiness snapshot       |

### Static Web Tools (GitHub Pages)

| Tool              | What it does                                           | Output                              |
| ----------------- | ------------------------------------------------------ | ----------------------------------- |
| Ghost Check       | Paste job posting → get ghost score + signal breakdown | Score + profile export              |
| Compass / CAAS-12 | 12-item career adaptability assessment                 | Radar chart + profile export        |
| Bull's Eye        | ACT values alignment exercise                          | Visual + profile export             |
| MLQ-10            | Meaning in life questionnaire                          | Quadrant placement + profile export |
| Flow Logger       | Challenge-skill activity tracking                      | Flow zone chart + profile export    |
| Runway Calculator | Financial runway (COP/USD)                             | 3 scenarios                         |

### ChatGPT GPTs

| GPT                 | Purpose                      |
| ------------------- | ---------------------------- |
| N1 Busca Adentro    | All 4 dimensions, compressed |
| N1 Construye Afuera | Career tools, compressed     |
| N1 Compass          | Quick career readiness       |
| N1 Ghost Check      | Ghost job detection          |

---

## Career Path Taxonomy

N1 adapts all tools to your specific move:

**Stay & Grow** — Promotion, lateral transfer, role expansion, environment optimization

**Move** — Scale up/down, sector pivot, function pivot, complete career change, return to workforce

**Go Independent** — Freelance, startup, portfolio career, creator business

**Pause & Reset** — Strategic sabbatical, recovery, reskilling, exploration phase

Every tool adapts: CV Audit, Interview Prep, Negotiate, Network Map, Job Hunt all change based on which path you're on.

---

## Evidence Base

25+ validated frameworks. Every N1 recommendation cites a specific study.

**Meta-theory:** Protean Career Theory (Hall), Career Chaos Theory (Pryor & Bright), Planned Happenstance (Krumboltz), Self-Determination Theory (Deci & Ryan)

**Integrative spine:** SCCT (Lent, Brown & Hackett), Schlossberg 4S

**Self-knowledge:** ACT Values Clarification (Hayes), Schwartz Basic Values, Bandura Self-Efficacy, VIA Character Strengths (Peterson & Seligman), Big Five (Costa & McCrae), Flow Theory (Csikszentmihalyi), Working Identity (Ibarra), Identity Status (Marcia), CAAS (Savickas), PsyCap HERO (Luthans), MLQ (Steger), Logotherapy (Frankl), Ryff PWB, Life Design (Burnett & Evans)

**Career strategy:** Granovetter Weak Ties, AAQ-II (Hayes), CDMSE-SF (Betz & Taylor)

**Key statistics:**

- 91% of people experience purpose anxiety
- Purpose in life reduces all-cause mortality by 17% (136,265 participants)
- CAAS: 149 studies, 82,519 participants — no consumer tool existed
- ACT effect size: g = 0.57–0.82 (large)
- Only 3–5% of career changers access professional guidance

---

## Profile Interchange Format

All N1 tools produce and consume a standard YAML profile. Copy from one tool, paste into another.

Schema: `shared/profile-format.md`
Blank template: `shared/profile-template.yaml`

```yaml
version: "1.0"
triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
values:
  completed: false
  core_values: []
# ... (full schema in shared/profile-format.md)
```

---

## How to Use

### Via Claude (recommended)

1. Install the Claude Skill: copy `skills/[name]/SKILL.md` into a Claude Project
2. Start a session with a trigger phrase (see Tool Directory)
3. Complete an assessment → get YAML profile output
4. Paste profile into another skill for richer results

### Via ChatGPT

1. Find "N1 [Busca Adentro / Construye Afuera / Ghost Check / Compass]" in the GPT Store
2. Start a conversation in Spanish

### Via Static Web

1. Visit the GitHub Pages URL (coming soon)
2. No login, no install, no cost

### Profile Portability

Static web tools export YAML. Claude Skills read YAML. GPTs output YAML.
Copy-paste your profile between tools for continuity.

---

## Safety and Scope

N1 is a career guidance tool, not therapy. See `shared/safety-protocol.md` for:

- Scope disclaimer (required on every session)
- MIND-SAFE crisis detection and response protocol
- Crisis resources (Colombia: Línea 106, International: findahelpline.com)
- Referral criteria for human professionals

Assessment pacing: validated instruments have minimum retake intervals (4–6 weeks for CAAS and MLQ).

---

## License

MIT License. Free to use, fork, and adapt.

Built by Nicolás — sharing what took years to learn.

---

_El sistema eres tú._
