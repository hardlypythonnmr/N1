# N1 Product Specification v2

**Version:** 2.0
**Date:** 2026-03-10
**Status:** Updated with operator input + research synthesis
**Foundation:** 13,614 lines of research, 250+ cited sources, 19 agents across 3 waves

---

## 1. Product Vision (Updated)

N1 is the first Spanish-language career strategy system that treats career change as what the science says it is: an identity transition that requires psychology, structured systems, and execution velocity to navigate successfully.

**What changed in v2:** The product ecosystem now has 5 revenue pillars instead of 2. Psychology (neuropsychology + behavioral science) is elevated from "differentiator" to "core engine." The audience focus sharpens on senior tech professionals in LATAM. AI tools (Claude skills) become a product line. Interview practice sessions become the most immediate revenue source.

---

## 2. Revenue Pillars (5)

### Pillar 1: Interview Practice Sessions (Immediate Revenue)
**What:** Live interview practice and coaching sessions via Discord voice channels.
- **Format:** Weekly group sessions (4-6 participants), role-specific
- **Types:**
  - Behavioral interview practice (STAR method, structured feedback)
  - Technical mock interviews (system design, coding walkthroughs)
  - Negotiation simulations (salary, equity, counter-offer scenarios)
  - "Hot seat" CV/resume reviews
- **Pricing:** $15-25 per group session, $50-75 per 1-on-1 session
- **Why it works:** 5+ mock interviews = ~2x pass rate (interviewing.io). STAR method = 30-50% improvement. But there's no Spanish-language mock interview service at scale.
- **Discord structure:**
  - Free: `#preguntas-entrevista` (Q&A text channel, community answers)
  - Paid: Voice sessions, scheduled weekly, recorded for replay
  - Premium: 1-on-1 sessions with founder or trained coaches

### Pillar 2: Subscription ("N1 Pro") (Recurring Revenue)
**What:** Full methodology access + community + tools + live sessions.
- **Pricing:** $29/mo or $249/yr ($20.75/mo effective)
- **Includes:**
  - All methodology content (7 stages, science-backed)
  - Full Compass Calibration diagnostic (42 questions, 7 axes)
  - 15 Notion tools
  - Weekly "La Sesión" live call
  - Monthly "El Taller" workshop
  - Pro community channels
  - Access to recorded interview practice sessions
  - Discounted 1-on-1 sessions
- **LATAM pricing:** PPP tiers by country (Colombia $19/mo, Argentina $14/mo, Brazil $24/mo)

### Pillar 3: AI Skills for Claude (Product Line)
**What:** Claude Code skills and AI tools that automate career tasks.
- **Skill 1: CV Personalizer** (`/n1-cv`)
  - Input: job description + user's base CV
  - Output: tailored CV with keyword optimization, quantification suggestions, ATS formatting
  - Uses: research on 40-50% callback improvement from tailoring, keyword matching data
  - **Free version:** Basic tailoring with 3 suggestions
  - **Premium version ($9.99 one-time or included in subscription):** Full rewrite, multiple format exports, cover letter generation, LinkedIn headline optimization

- **Skill 2: Interview Prep by Role** (`/n1-interview`)
  - Input: role title + industry + company name
  - Output: structured interview prep package
    - 15-20 likely questions (behavioral + technical) based on role/industry patterns
    - STAR story prompts for each question
    - Company research summary
    - Red flags to watch for
    - Salary benchmarks for this role/market
  - **Free version:** 5 generic questions + basic company info
  - **Premium version ($14.99 or subscription):** Full package, industry-specific (tech, finance, consulting, healthcare), company-specific intel, negotiation scripts

- **Skill 3: Structured Interview Examples** (`/n1-structured`)
  - Input: industry + role level
  - Output: Example structured interview questions + evaluation rubrics
  - For BOTH candidates (practice) AND hiring managers (improve their process)
  - Based on: Schmidt & Hunter validity data, Sackett 2022 corrections, structured interview meta-analyses
  - **Free version:** 5 questions with rubric for 1 industry
  - **Premium version ($9.99 or subscription):** Full library across 7 industries, 4 seniority levels

- **Distribution:** Claude Code skill marketplace, direct download, GitHub
- **Why this works:** AI commoditizes tactics. But AI skills BUILT ON RESEARCH are defensible. No one else has skills grounded in 250+ studies.

### Pillar 4: Book ("El Sistema N1") (Authority + Top-of-Funnel)
**What:** 12-chapter, 300-340 page book. Science-backed career change methodology.
- **Structure:** 4 parts (El Terreno, El Interior, El Sistema, La Aceleración)
- **48 "Cajas de Ciencia"** (science boxes citing specific studies)
- **36 exercises** producing concrete deliverables
- **7 embedded diagnostics**
- **Pricing:** $19.99 digital, $29.99 physical
- **Role in ecosystem:** Authority piece. Drives newsletter signups and subscription conversions. Not the primary revenue engine.
- **Name:** TBD. "El Sistema N1" is working title. Consider: "La Transición" / "Estrategia de Carrera" / "El Método N1" / test with audience.
- **Self-published:** Amazon KDP + direct sales (Gumroad/Whop)

### Pillar 5: Free Content Engine (Acquisition)
**What:** Research-backed content across platforms driving newsletter signups and community growth.

#### LinkedIn (3x/week: research-backed career tips)
- **Mon/Wed/Fri:** Career tips grounded in specific studies
- Format: 90-200 words, cite study by name, end with question or action
- Content pillars: "Lo Que Dice La Ciencia", "El Sistema Está Roto", "Psicología Del Cambio", "Tácticas Con Respaldo"
- Target: senior tech professionals (language calibrated per research)

#### LinkedIn (2x/week: industry + market news)
- **Tue/Thu:** Industry analysis, AI impact, LATAM market intelligence, geopolitical effects on careers
- Format: nonchalant wise analysis, not engagement-seeking
- Connects macro trends to individual career strategy

#### Newsletter: "El Sistema" (Weekly)
- **Focus options (test and iterate):**
  - Option A: "One study, one insight, one action" — single deep-dive per week
  - Option B: "3 things this week" — curated research + market news + one tool
  - Option C: "The psychology nobody talks about" — heavy neuropsych/behavioral focus (aligns with founder expertise)
  - **Recommendation:** Start with Option C (differentiator), mix in A/B elements
- 800-1,200 words, always 3+ cited studies, always one actionable takeaway
- Neuropsychology angle: how the brain processes career change, decision-making under uncertainty, cognitive biases in job search, stress response during interviews, dopamine loops in application behavior

#### Short Video Content (Python + ffmpeg)
- **Format:** 30-60 second vertical videos with:
  - One surprising stat (text overlay)
  - Brief explanation (voiceover or text)
  - Source citation on screen
  - N1 branding (orange accent, dark background)
- **Production:** Python script using ffmpeg to generate from templates
  - Input: stat + source + brief explanation
  - Output: branded vertical video (9:16) ready for Reels/TikTok/Shorts
- **Examples:**
  - "1 de cada 1,700 aplicaciones termina en empleo" (key-findings.md)
  - "El estrés financiero te quita 13 puntos de IQ" (Mani et al. 2013)
  - "El 55% nunca negocia, pero el 89% de empresas están abiertas a hacerlo"
- **Frequency:** 3-5/week (batch produced, low marginal cost once script exists)

#### Free Discord Community
- Open to anyone
- Channels: `#preguntas-entrevista`, `#noticias-laborales`, `#lo-que-dice-la-ciencia`, `#recursos-gratis`, `#busqueda-activa`
- Weekly free Q&A thread in `#preguntas-entrevista`
- This is the top of funnel for paid interview sessions

---

## 3. Compass Lite (Refocused)

**Original:** 15 generic readiness questions across 4 dimensions.
**Refocused:** Based on what the research says is ACTUALLY MISSING and ACTUALLY WORKS.

### New Focus: The 5 Things Science Says Matter Most

**Dimension 1: Autoeficacia en búsqueda laboral (Self-Efficacy)**
- THE #1 predictor of job search success (Kanfer, Wanberg & Kantrowitz 2001, meta-analysis)
- 3 questions measuring confidence in ability to execute each stage
- Grounded in Bandura's self-efficacy theory + Eden & Aviram 1993 field experiment

**Dimension 2: Preparación estructurada (Structured Preparation)**
- Structured approaches improve outcomes 2x (structured interview validity meta-analyses)
- 3 questions measuring whether the person has a SYSTEM vs winging it
- Grounded in: 47% fail screens from zero company research, STAR method 30-50% improvement

**Dimension 3: Resiliencia al rechazo (Rejection Resilience)**
- Applications drop from 2.9/week to 0.1/week after sustained rejection (learned helplessness spiral)
- 3 questions measuring emotional response to rejection, recovery speed, attribution style
- Grounded in: Seligman's learned helplessness, 2016 neuroscience revision (passivity is default)

**Dimension 4: Claridad de identidad profesional (Professional Identity Clarity)**
- Career change is an identity transition (Ibarra's Working Identity, Annual Reviews of Org Psych 2024)
- 3 questions measuring clarity of who they are professionally, not just what they do
- Grounded in: Markus & Nurius possible selves, Marcia's identity statuses

**Dimension 5: Conciencia de sesgos del sistema (System Bias Awareness)**
- The system is broken in measurable ways. Knowing this prevents self-blame.
- 3 questions measuring awareness of structural barriers (ghost jobs, AI bias, process inflation)
- Grounded in: Quillian et al. 2017 (no improvement since 1989), UW 2024 (AI bias)

**Total: 15 questions. Takes 3 minutes. Output: radar chart + 3 priorities + one recommended action.**

**What makes this different from generic assessments:**
- It measures what SCIENCE says predicts success, not what feels intuitive
- It addresses psychology (self-efficacy, identity, resilience) not just tactics
- It surfaces system awareness (most people blame themselves for systemic failures)

---

## 4. Psychology as Core Engine (Neuropsychology + Behavioral)

**This is the moat.** No career product on the market integrates neuropsychology and behavioral science. N1 does.

### Neuropsychological Foundations

| Brain Process | Career Application | Study |
|--------------|-------------------|-------|
| **Prefrontal cortex under stress** | Financial stress = -13 IQ points. Interview anxiety shuts down working memory. | Mani et al. 2013 (Science, n=464) |
| **Amygdala hijack** | Rejection triggers fight-or-flight. Learned helplessness makes passivity the DEFAULT (not learned). | Seligman & Maier 2016 revision |
| **Dopamine loops** | Easy Apply creates dopamine hit without outcome. Mass applying feels productive but isn't. | Behavioral addiction literature |
| **Default mode network** | Identity processing happens in DMN. Career change requires active identity reconstruction. | Ibarra 2003, neuroscience of self |
| **Mirror neurons + social comparison** | LinkedIn triggers comparison. Seeing peers' promotions activates pain circuits. | Festinger 1954, social media research |
| **Cognitive bandwidth** | Poverty/financial stress literally reduces available cognitive resources for complex tasks. | Mullainathan & Shafir "Scarcity" |
| **Stereotype threat** | Awareness of negative stereotypes about your group consumes working memory during performance. | Steele & Aronson 1995 (d=0.26) |
| **Choking under pressure** | High-WMC individuals are MOST vulnerable to choking. Being observed = >50% performance drop. | Beilock & Carr 2005, Behroozi 2020 |

### Behavioral Science Applications

| Principle | Career Application | Implementation |
|-----------|-------------------|----------------|
| **Loss aversion** | Fear of losing current job/salary prevents career change even when change is rational | Frame change as investment, not loss |
| **Status quo bias** | People overvalue current state. Counter-offers feel safe (90% leave within 12 months). | Decision framework showing true cost of staying |
| **Anchoring** | First salary number anchors entire negotiation. Precise numbers ($87,250 vs $85,000) signal preparation. | Negotiation scripts with anchoring strategy |
| **Paradox of choice** | Too many job options = decision paralysis. Maximizers earn 20% more but are less satisfied. | Structured decision matrix, satisficing strategy |
| **Implementation intentions** | "I will do X at Y time in Z place" doubles follow-through rate. | Weekly action planning with specific commitments |
| **Social proof** | Community of people making similar transitions reduces perceived risk. | Discord community, success story sharing |
| **Commitment devices** | Public commitments increase completion. | Accountability partnerships, community check-ins |

### Content Integration
Every piece of N1 content (post, newsletter, tool, session) should include at least one neuropsych/behavioral insight. This is the VOICE LAYER that makes N1 unmistakable.

Example: Instead of "prepare for your interview," say:
> "Tu corteza prefrontal, la parte del cerebro que maneja pensamiento complejo, se apaga bajo estrés (Mani et al., 2013). Por eso ensayar no es opcional. Es neurociencia."

---

## 5. Newsletter Focus: "El Sistema"

### Core Identity
The newsletter is about the PSYCHOLOGY AND NEUROSCIENCE of career change. Not tips. Not hacks. The brain science behind why career transitions are hard and what works.

### Weekly Structure
1. **Opening:** One observation about career behavior explained through neuroscience/behavioral science
2. **"La Ciencia":** One study deep-dive (author, year, sample size, methodology, finding, what it means for you)
3. **"El Sesgo De La Semana":** One cognitive bias that affects career decisions, with recognition exercise
4. **"La Herramienta":** One actionable tool/framework/exercise (from methodology)
5. **"Dato":** One market stat with source
6. **CTA:** Free diagnostic / community / paid sessions

### First 10 Edition Themes
1. "El Embudo" — 1:1,700 success rate. Your brain on rejection (learned helplessness neuroscience).
2. "Tu CV No Es El Problema" — ATS myths. The real bottleneck is human + ghost jobs.
3. "La Psicología Que Nadie Habla" — Self-efficacy as #1 predictor. Financial stress = -13 IQ.
4. "Por Qué Te Congelas En Entrevistas" — Choking under pressure neuroscience. Behroozi 2020.
5. "El Sesgo Del Acento" — d=0.47. What LATAM professionals face. Accent bias meta-analysis.
6. "Negociar No Es Opcional" — 55% never negotiate. Loss aversion explains why. 18.83% average gain.
7. "La Trampa De La Contraoferta" — 90% leave within 12 months. Status quo bias in action.
8. "Tu Identidad No Es Tu Trabajo" — Ibarra's Working Identity. Identity ≠ role.
9. "La Paradoja Del Experto" — High-WMC individuals choke MORE. The curse of competence.
10. "El Mercado En 2026" — LATAM market intelligence. What's actually happening vs what LinkedIn shows.

---

## 6. Language for Senior Tech (Audience Calibration)

**Target:** 46.4% senior, 10.5% software engineers, top companies (Globant, MeLi, Salesforce, EPAM), Bogota/Medellin/CDMX.

### What Works for This Audience
- **Systems thinking language:** Architecture, patterns, tradeoffs, optimization, feedback loops
- **Data-first:** Lead with the number, then explain. "r=.42" means something to this audience.
- **Anti-corporate:** They've been in corporate long enough to see through it. Zero buzzwords.
- **Technical precision with casual delivery:** Know exactly what you're talking about, deliver it like a Slack message
- **Bilingual code-switching:** Natural English terms for technical concepts, Spanish for emotional/strategic content
- **Respect their intelligence:** Never explain what they already know. Go deeper, not wider.
- **The "senior engineer who reads papers" vibe:** Not motivational. Analytical. Evidence-based. Curious.

### What Kills Engagement for This Audience
- Motivational fluff ("believe in yourself!")
- Generic advice they've heard 100 times
- Hustle culture ("grind harder")
- Fake authority (claiming expertise without evidence)
- Oversimplification of complex topics
- LinkedIn cringe (engagement bait, humble brags, "I'm humbled to announce")

### Language Examples (Spanish, N1 voice)
**Good:**
> "Schmidt & Hunter midieron la validez predictiva de 19 métodos de selección. Los años de experiencia correlacionan r=.18 con rendimiento laboral. Eso es estadísticamente... casi nada. Tu CV de 15 años le dice poco al reclutador sobre cómo vas a rendir."

**Bad:**
> "La experiencia no es todo. Lo que importa es tu actitud y ganas de aprender."

**Good:**
> "Behroozi et al. (2020) corrió un RCT con 48 desarrolladores. La mitad hizo una entrevista técnica observada. La otra mitad, privada. Resultado: ser observado reduce rendimiento >50%. Todas las mujeres fallaron observadas. Todas pasaron en privado. El sistema mide ansiedad, no competencia."

**Bad:**
> "Las entrevistas técnicas son estresantes, pero con práctica podés mejorar."

---

## 7. Monetization Architecture

```
FREE (Acquisition)                    PAID (Revenue)
─────────────────                    ──────────────
LinkedIn posts (5x/week)     →      Interview Practice Sessions ($15-75/session)
Newsletter "El Sistema"      →      N1 Pro Subscription ($29/mo)
Free Discord community       →      AI Skills for Claude ($9.99-14.99 each)
Compass Lite diagnostic      →      Book "El Sistema N1" ($19.99-29.99)
CV Audit checklist           →      Cohort Intensives ($199-499)
Short videos (Reels/TikTok)  →      Corporate workshops (future)

Conversion funnel:
Post → Newsletter → Free Discord → Free Q&A → Paid session → Subscription
                                            → AI skill purchase
                                            → Book purchase
```

### Revenue Projections (Month 6)
| Pillar | Conservative | Moderate | Optimistic |
|--------|-------------|----------|------------|
| Interview sessions (8/mo) | $120 | $400 | $800 |
| Subscriptions (15 members) | $435 | $870 | $1,450 |
| AI skills (one-time sales) | $100 | $300 | $600 |
| Book sales (digital) | $200 | $500 | $1,000 |
| **Total MRR** | **$855** | **$2,070** | **$3,850** |

### Revenue Projections (Month 12)
| Pillar | Conservative | Moderate | Optimistic |
|--------|-------------|----------|------------|
| Interview sessions (20/mo) | $300 | $1,000 | $2,000 |
| Subscriptions (50 members) | $1,450 | $2,500 | $4,000 |
| AI skills (monthly sales) | $300 | $700 | $1,500 |
| Book sales | $400 | $1,000 | $2,000 |
| Cohort intensive (1/quarter) | $500 | $2,000 | $5,000 |
| **Total MRR** | **$2,950** | **$7,200** | **$14,500** |

---

## 8. Citation & Sourcing Protocol

**Rule: ALWAYS cite and hyperlink sources. Everywhere.**

### In Content (LinkedIn, Newsletter, Carousels)
- Format: "Autor et al. (año, n=tamaño)" inline
- Example: "Quillian et al. (2017, n=55,842) encontraron que la discriminación racial en contratación no ha mejorado desde 1989."
- Newsletter: hyperlink to paper/abstract when available
- Carousels: source name + year on every data slide

### In Tools (Diagnostics, Checklists)
- Each question/item cites its research basis
- "Based on:" footnote on every tool section

### In Book
- "Cajas de Ciencia" sidebar boxes with full citation
- Endnotes with complete references
- Bibliography organized by chapter

### In AI Skills
- Every recommendation includes source citation in output
- User sees WHY this recommendation works, not just WHAT to do

### Why This Matters
- **Credibility:** No other career product cites studies by name
- **Trust:** Senior tech professionals verify claims. Citations survive verification.
- **Differentiation:** "Studies show" is noise. "Sackett et al. (2022, n=corrected meta-analysis)" is signal.

---

## 9. MVP Launch Sequence

### Phase 1: Foundation (Weeks 1-4)
- [ ] Launch newsletter "El Sistema" on Substack
- [ ] Start LinkedIn posting (5x/week)
- [ ] Set up free Discord community
- [ ] Deploy Compass Lite diagnostic (web tool)
- [ ] Build short video generation script (Python + ffmpeg)
- [ ] Publish 3-5 short videos
- **Target:** 200 newsletter subscribers, 50 Discord members

### Phase 2: First Revenue (Weeks 5-8)
- [ ] Launch first paid interview practice session on Discord
- [ ] Build and release CV Personalizer skill (free version)
- [ ] Build and release Interview Prep skill (free version)
- [ ] Continue content cadence
- **Target:** 10 paid session participants, 400 newsletter subscribers

### Phase 3: Subscription Launch (Weeks 9-16)
- [ ] Launch N1 Pro subscription on Whop
- [ ] Release premium AI skills (paid versions)
- [ ] Start weekly "La Sesión" live calls
- [ ] Begin book manuscript (Chapter 1-3)
- [ ] First cohort test (5-10 founding members, discounted)
- **Target:** 15 paying subscribers, 5 AI skill sales/month

### Phase 4: Scale (Months 5-12)
- [ ] Monthly "El Taller" workshops
- [ ] Complete book manuscript
- [ ] Train community members as interview practice facilitators
- [ ] Quarterly cohort intensives
- [ ] Corporate workshop pilot
- **Target:** 50+ subscribers, book published, 20+ sessions/month
