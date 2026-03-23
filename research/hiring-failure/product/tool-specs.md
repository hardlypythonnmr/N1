# N1 Tool Specifications

**Version:** 1.0
**Date:** 2026-03-10
**Status:** Draft for review
**Foundation:** Research synthesis from 8 primary research files, 30+ meta-analyses, 200+ cited sources
**Design principle:** Every tool feature traces to a named study. No feature exists because "it seems useful" -- it exists because the research says it works.

---

## Table of Contents

1. [N1 Diagnostic — Compass Lite (Free)](#1-n1-diagnostic--compass-lite-free)
2. [N1 Diagnostic — Compass Full (Paid)](#2-n1-diagnostic--compass-full-paid)
3. [CV Audit Tool](#3-cv-audit-tool)
4. [Interview Prep System](#4-interview-prep-system)
5. [Negotiation Calculator](#5-negotiation-calculator)
6. [Job Search Tracker (Notion)](#6-job-search-tracker-notion)
7. [Career Change OS (Notion)](#7-career-change-os-notion)
8. [Cross-Tool Integration Map](#8-cross-tool-integration-map)

---

## 1. N1 Diagnostic -- Compass Lite (Free)

### Purpose

A 15-question self-assessment that gives any professional a research-backed reading of their career change readiness. Functions as the top-of-funnel conversion tool: valuable enough to share, specific enough to create urgency, and designed to surface the 3 highest-priority areas for action. Captures email for follow-up sequence.

### Research Foundation

| Construct Measured | Validated Instrument Inspiring It | Key Citation |
|---|---|---|
| Career adaptability | Career Adapt-Abilities Scale (CAAS) -- 4 subscales: Concern, Control, Curiosity, Confidence | Savickas & Porfeli 2012; validated across 13 countries; reliability .65-.96 |
| Job search self-efficacy | Bandura's Self-Efficacy Theory applied to job search | Eden & Aviram 1993 (field experiment, n=88); Kanfer, Wanberg & Kantrowitz 2001 (meta-analysis: self-efficacy predicts all 3 employment outcomes) |
| Identity clarity | Marcia's Identity Status Theory (Achievement / Moratorium / Foreclosure / Diffusion) | Marcia 1966; Ibarra 2003 "Working Identity" |
| Market awareness | Gati's Career Decision-Making Difficulties Questionnaire (CDDQ) -- "Lack of Information" cluster | Gati, Krausz & Osipow 1996; validated across 13 countries (Levin et al. 2023) |

### Design Specifications

- **Format:** Mobile-first web form (Typeform or custom). No app download. No account required.
- **Time to complete:** Under 5 minutes (tested target: 3:30-4:30)
- **Scoring:** 5-point Likert scale per question (1 = Nada / 5 = Totalmente)
- **Language:** Spanish (Latin American neutral, voseo optional)
- **Output:** Instant results page + emailed 1-page PDF report
- **Email capture:** Required before results display. GDPR-compliant opt-in for newsletter.
- **Shareability:** Results page generates a unique URL with a visual summary card (optimized for LinkedIn/WhatsApp sharing). No individual answers are shared -- only aggregate scores.

### The 15 Questions

Organized across 4 dimensions. Each question maps to a specific research construct.

#### Dimension 1: Self-Efficacy (4 questions)
*Grounding: Bandura 1977; Eden & Aviram 1993; Kanfer et al. 2001*

| # | Question (Spanish) | Question (English -- internal reference) | Construct |
|---|---|---|---|
| 1 | Cuando aplico a un trabajo, creo que tengo buenas posibilidades de avanzar en el proceso. | When I apply to a job, I believe I have a good chance of advancing. | Job search self-efficacy -- expectation of outcomes |
| 2 | Me siento capaz de presentar mis logros profesionales de manera convincente en una entrevista. | I feel capable of presenting my professional achievements convincingly in an interview. | Self-efficacy -- performance belief |
| 3 | Despues de un rechazo laboral, puedo recuperar mi motivacion en pocos dias. | After a job rejection, I can recover my motivation within a few days. | Resilience self-efficacy -- recovery speed |
| 4 | Tengo claro que habilidades me diferencian de otros candidatos con experiencia similar. | I am clear about which skills differentiate me from other candidates with similar experience. | Self-efficacy -- differentiation awareness |

#### Dimension 2: Career Adaptability -- Concern & Control (4 questions)
*Grounding: Savickas 1997; Savickas & Porfeli 2012 (CAAS); Luthans et al. 2007 (PsyCap)*

| # | Question (Spanish) | Question (English -- internal reference) | Construct |
|---|---|---|---|
| 5 | Dedico tiempo regularmente a pensar en el siguiente paso de mi carrera. | I regularly spend time thinking about the next step in my career. | Concern -- future orientation |
| 6 | Siento que tengo control sobre la direccion de mi carrera profesional. | I feel I have control over the direction of my professional career. | Control -- agency and self-discipline |
| 7 | He explorado opciones profesionales diferentes a lo que hago actualmente. | I have explored professional options different from what I currently do. | Curiosity -- exploratory behavior |
| 8 | Estoy preparado(a) para manejar la incertidumbre de un cambio laboral. | I am prepared to handle the uncertainty of a career change. | Confidence -- obstacle tolerance |

#### Dimension 3: Identity Clarity (4 questions)
*Grounding: Ibarra 2003; Markus & Nurius 1986 (Possible Selves); Marcia 1966 (Identity Status)*

| # | Question (Spanish) | Question (English -- internal reference) | Construct |
|---|---|---|---|
| 9 | Si perdiera mi puesto actual manana, sabria que tipo de trabajo buscar. | If I lost my current position tomorrow, I would know what type of work to pursue. | Identity clarity -- career direction |
| 10 | Mi identidad profesional va mas alla del titulo de mi puesto actual. | My professional identity goes beyond my current job title. | Identity breadth -- foreclosure vs. achievement |
| 11 | Puedo imaginar claramente al menos dos versiones posibles de mi futuro profesional. | I can clearly imagine at least two possible versions of my professional future. | Possible selves -- ability to envision alternatives |
| 12 | Si alguien me pregunta "a que te dedicas," mi respuesta me satisface. | If someone asks me "what do you do," my answer satisfies me. | Identity congruence -- alignment between self and role |

#### Dimension 4: Market Awareness (3 questions)
*Grounding: Gati et al. 1996 (CDDQ); Schwartz 2004 (Paradox of Choice); Simon 1955 (Bounded Rationality)*

| # | Question (Spanish) | Question (English -- internal reference) | Construct |
|---|---|---|---|
| 13 | Conozco el rango salarial de mercado para el tipo de rol que me interesa. | I know the market salary range for the type of role I am interested in. | Information -- compensation awareness |
| 14 | Se cuales industrias o empresas estan contratando activamente en mi area. | I know which industries or companies are actively hiring in my area. | Information -- market demand awareness |
| 15 | Tengo contactos profesionales que podrian referirme o abrirme puertas. | I have professional contacts who could refer me or open doors. | Network capital -- social capital for search |

### Scoring Rubric

**Total score range:** 15-75 points (15 questions x 1-5 scale)

| Score Range | Level | Label | Interpretation | Recommended Action |
|---|---|---|---|---|
| **60-75** | High Readiness | "Listo para la accion" | Strong foundations across all dimensions. You know who you are, what you want, and how the market works. The risk: overconfidence without execution. | Focus on execution systems -- structured application targeting, interview practice (5+ sessions = 2x pass rate, interviewing.io), negotiation preparation. Consider N1 Pro for accountability and community practice. |
| **45-59** | Moderate Readiness | "Bases solidas, brechas claras" | Good self-awareness in some areas but specific gaps that will slow you down. Most people are here. | Your report identifies 3 priority dimensions. Address these before mass-applying. The data: tailored applications get 40-50% more callbacks (ResumeGo) but only if you know what to tailor toward. |
| **30-44** | Low Readiness | "Fundamentos primero" | Significant gaps in self-knowledge, market awareness, or confidence. Applying now will produce frustration, not results. | Start with identity work (Ibarra's "test and learn" model) and self-efficacy building (Eden & Aviram 1993 showed this accelerates reemployment). Do NOT start mass-applying -- the 97% resume rejection rate will destroy your remaining motivation. |
| **15-29** | Pre-Readiness | "Pausa estrategica" | You are in the early stages of processing a change -- possibly still in denial or grief about a recent loss, or in identity diffusion about your career direction. This is normal and not a failure. | Grief processing and identity exploration come first. Bridges' Transition Model: you are in the "Ending" or "Neutral Zone." Tactical career advice is premature. Consider joining the free N1 community for peer support. |

### Dimension Scoring (Reported per Dimension)

Each dimension gets its own score (sum of its questions) and a visual indicator:

| Dimension | Questions | Max Score | Low (needs work) | Medium (developing) | High (strong) |
|---|---|---|---|---|---|
| Self-Efficacy | 1-4 | 20 | 4-9 | 10-15 | 16-20 |
| Career Adaptability | 5-8 | 20 | 4-9 | 10-15 | 16-20 |
| Identity Clarity | 9-12 | 20 | 4-9 | 10-15 | 16-20 |
| Market Awareness | 13-15 | 15 | 3-7 | 8-11 | 12-15 |

### Output: Personalized Report (1-Page PDF)

**Header:** "Tu Diagnostico N1" + date + overall score

**Section 1: Your Score** (visual bar chart, 4 dimensions)

**Section 2: Your 3 Priorities** (auto-generated based on lowest-scoring dimensions)

For each priority, the report provides:
- What the score means (1 sentence, plain language)
- Why it matters (1 sentence citing research)
- One immediate action (specific, doable this week)

**Example output for someone scoring Low on Self-Efficacy:**

> **Prioridad 1: Autoeficacia (tu puntaje: 8/20)**
>
> Tu confianza en tu capacidad de buscar trabajo esta debilitada -- probablemente por rechazos acumulados o un despido reciente. Esto importa porque la autoeficacia es el predictor #1 de exito en busqueda laboral (Kanfer et al. 2001, meta-analisis). No es motivacion lo que te falta -- es la creencia de que tus acciones produciran resultados.
>
> **Accion inmediata:** Escribe 3 logros profesionales con numeros concretos (ingresos generados, procesos mejorados, personas lideradas). No es un ejercicio de humildad -- es reconstruccion de evidencia. Tu cerebro necesita recordar que sos capaz.

**Section 3: Next Step** -- CTA to free community (Low/Pre-Readiness) or N1 Pro (Moderate/High)

**Footer:** "Diagnostico basado en los frameworks de Savickas (Career Adaptability), Bandura (Self-Efficacy), Ibarra (Working Identity), y Gati (Career Decision-Making). N1 -- psicologia x sistemas x aceleracion"

### What Makes This Different from Generic Career Assessments

1. **Psychometric grounding, not personality typing.** This is not MBTI or StrengthsFinder. Every question maps to a validated construct with demonstrated predictive validity for employment outcomes.
2. **Prescriptive, not descriptive.** The output is not "you are a type X person." It is "here are your 3 gaps and what to do about each this week."
3. **Calibrated to career change, not career satisfaction.** Most career assessments measure "what job fits you." This measures "are you psychologically, strategically, and informationally ready to execute a change."
4. **LATAM-native.** Written in Spanish with cultural context (familism, honor dynamics, financial interdependence) baked into interpretation -- not translated from English.
5. **Lead generation that delivers genuine value.** The user walks away with actionable priorities. The email capture is earned, not extracted.

---

## 2. N1 Diagnostic -- Compass Full (Paid)

### Purpose

The complete 42-question professional diagnostic across 7 axes. Produces a radar chart, benchmarks against peer data, and generates axis-specific recommendations mapped to the 5-phase N1 methodology. This is the centerpiece assessment tool of the N1 Pro subscription.

### Research Foundation by Axis

| Axis | What It Measures | Validated Instruments That Inspired It | Key Citations |
|---|---|---|---|
| **Proposito** (Purpose) | Clarity of professional direction; alignment between work and personal meaning | Career Adapt-Abilities Scale -- Concern subscale; Deci & Ryan Self-Determination Theory (identified/integrated regulation) | Savickas & Porfeli 2012; Ryan & Deci 2000; Super 1980 (self-concept implementation) |
| **Habilidades** (Skills) | Objective skill level + subjective confidence in those skills; skill currency | Self-efficacy measures (Bandura); Dunning-Kruger calibration; STEM depreciation research | Bandura 1977; Kruger & Dunning 1999; Deming & Noray 2020 (QJE: STEM premium declines 50%+ in first decade) |
| **Valores** (Values) | Alignment between personal values and current/target work environment | Person-Organization fit research; Schwartz Values Theory | Kristof-Brown et al. 2005 (meta-analysis: PO fit r=.44 with satisfaction); Schwartz 1992 |
| **Relaciones** (Relationships) | Network strength, quality of professional relationships, social capital for job search | Social support and job search (Slebarska et al. 2009); Referral effectiveness (Zottoli & Wanous 2000) | Strategic networkers: 23% response rate vs. 2.1% for mass-apply; 58% employment vs. 12% (career services study, n=500) |
| **Energia** (Energy) | Burnout level, emotional reserves, capacity for sustained job search effort | Maslach Burnout Inventory dimensions (exhaustion, cynicism, efficacy); PsyCap -- Resilience | Luthans et al. 2007; McKee-Ryan et al. 2005 (meta-analysis: coping resources predict well-being during unemployment) |
| **Entorno** (Environment) | External conditions: family support, cultural context, labor market in their region | Hofstede cultural dimensions (collectivism, uncertainty avoidance); Family influence on career decisions (Fouad et al. 2016) | Krys et al. 2022 (LATAM cultural paradox -- collectivist values + independent selves); Jahoda 1982 (latent deprivation model) |
| **Recursos** (Resources) | Financial runway, time availability, access to tools and information | Mani et al. 2013 (poverty reduces cognitive function by 13 IQ points); Scarcity Theory (Mullainathan & Shafir 2013) | Financial stress creates "bandwidth tax" and "tunneling" -- people under financial pressure focus on immediate survival at the expense of strategic career decisions |

### The 42 Questions

6 questions per axis. Each question uses a 5-point Likert scale (1 = Nada / 5 = Totalmente).

#### Axis 1: Proposito (Purpose)

| # | Question (Spanish) | Construct |
|---|---|---|
| 1 | Se exactamente que tipo de trabajo me haria sentir realizado(a). | Career direction clarity |
| 2 | Puedo explicar en una frase por que hago el trabajo que hago (o quiero hacer). | Purpose articulation |
| 3 | Mi trabajo actual (o mas reciente) esta alineado con lo que realmente me importa. | Values-work alignment |
| 4 | He reflexionado sobre que actividades me generan energia y cuales me la quitan. | Self-knowledge -- energy mapping |
| 5 | Tengo al menos una idea concreta de hacia donde quiero llevar mi carrera en los proximos 2 anos. | Future orientation -- Concern (CAAS) |
| 6 | Si tuviera libertad total, elegiria un camino profesional diferente al actual. | Identity foreclosure detection -- tests whether current career was chosen or inherited |

#### Axis 2: Habilidades (Skills)

| # | Question (Spanish) | Construct |
|---|---|---|
| 7 | Puedo nombrar 5 habilidades especificas en las que soy mejor que la mayoria de mis pares. | Skill differentiation awareness |
| 8 | He actualizado mis habilidades tecnicas en los ultimos 12 meses. | Skill currency (Deming & Noray: STEM premium declines 50%+) |
| 9 | Puedo demostrar mis logros con numeros concretos (ingresos, porcentajes, impacto). | Quantification ability (only 26% of resumes have 5+ metrics -- Cultivated Culture) |
| 10 | Mis habilidades son transferibles a otras industrias o roles. | Transferability assessment |
| 11 | Me siento seguro(a) de que mis habilidades son relevantes para el mercado actual. | Skill self-efficacy |
| 12 | Se cuales de mis habilidades son las mas demandadas en el mercado y cuales estan perdiendo valor. | Market-skill calibration |

#### Axis 3: Valores (Values)

| # | Question (Spanish) | Construct |
|---|---|---|
| 13 | Tengo claridad sobre mis valores profesionales no negociables (flexibilidad, autonomia, impacto, estabilidad, etc.). | Values identification |
| 14 | Mi ultimo (o actual) ambiente de trabajo respeta mis valores fundamentales. | Person-Organization fit (Kristof-Brown et al.: PO fit r=.44 with satisfaction) |
| 15 | Cuando evaluo una oferta laboral, considero mucho mas que el salario. | Total compensation thinking |
| 16 | He tomado decisiones de carrera basadas en mis valores, aun cuando eso significo rechazar opciones mas lucrativas. | Values-based decision history |
| 17 | Se distinguir entre lo que yo quiero y lo que mi familia/entorno espera de mi carrera. | Autonomy vs. familism tension (Fouad et al. 2016; Krys et al. 2022) |
| 18 | Puedo nombrar 3 cosas que nunca aceptaria en un trabajo, sin importar el salario. | Boundary definition |

#### Axis 4: Relaciones (Relationships)

| # | Question (Spanish) | Construct |
|---|---|---|
| 19 | Tengo al menos 5 contactos profesionales a quienes podria pedir consejo o una referencia. | Network capital -- actionable contacts |
| 20 | He construido relaciones profesionales fuera de mi empresa o industria actual. | Network breadth (weak ties are more valuable for job search -- Granovetter 1973) |
| 21 | Alguien en mi red profesional podria recomendarme para un puesto hoy. | Referral readiness (referrals produce best hires: Zottoli & Wanous 2000) |
| 22 | Tengo un mentor o persona de confianza con quien hablo sobre mi carrera regularmente. | Mentorship access |
| 23 | Me siento comodo(a) pidiendo ayuda profesional a mi red. | Social support activation (Slebarska et al. 2009: social support directly associated with job search behavior) |
| 24 | He ayudado a alguien mas en su busqueda laboral o desarrollo profesional en el ultimo ano. | Reciprocity -- network investment |

#### Axis 5: Energia (Energy)

| # | Question (Spanish) | Construct |
|---|---|---|
| 25 | Mi nivel de energia me permite dedicar al menos 1 hora diaria a mi desarrollo profesional. | Available capacity |
| 26 | Duermo lo suficiente y manejo mi estres de manera saludable. | Physical resilience baseline |
| 27 | No me siento emocionalmente agotado(a) por mi situacion laboral actual. | Burnout -- emotional exhaustion (Maslach) |
| 28 | Puedo mantener la motivacion en proyectos que tardan semanas o meses en dar resultados. | Sustained motivation (Locke & Latham: goal persistence) |
| 29 | Me recupero rapidamente de malas noticias o decepciones profesionales. | Resilience (PsyCap -- Luthans et al. 2007) |
| 30 | Tengo actividades fuera del trabajo que me recargan (ejercicio, hobbies, relaciones personales). | Recovery resources (Jahoda 1982: latent functions beyond work) |

#### Axis 6: Entorno (Environment)

| # | Question (Spanish) | Construct |
|---|---|---|
| 31 | Mi familia apoya (o apoyaria) una decision de cambio laboral. | Family support (collectivist cultures: career decisions are family-negotiated) |
| 32 | Mi pareja o personas cercanas entienden lo que implica un proceso de cambio laboral. | Social support quality (Vinokur & van Ryn 1993: social undermining vs. support) |
| 33 | Vivo en una ciudad o region con oportunidades en mi area de interes. | Geographic opportunity |
| 34 | Estoy dispuesto(a) a considerar trabajo remoto o reubicacion para acceder a mejores oportunidades. | Geographic flexibility (LATAM remote work grew 161% in H1 2022; 285% surge in LATAM remote applicants to US platforms) |
| 35 | El mercado laboral en mi industria esta creciendo (no contrayendose). | Market conditions awareness |
| 36 | No tengo obligaciones familiares o legales que me impidan cambiar de trabajo. | Constraint assessment |

#### Axis 7: Recursos (Resources)

| # | Question (Spanish) | Construct |
|---|---|---|
| 37 | Tengo ahorros suficientes para cubrir al menos 3 meses de gastos basicos sin ingresos. | Financial runway (Mani et al. 2013: financial stress reduces cognitive function by 13 IQ points) |
| 38 | Puedo dedicar tiempo a buscar trabajo sin que afecte mis ingresos actuales. | Time-income tradeoff |
| 39 | Tengo acceso a las herramientas que necesito (computador, internet confiable, espacio para entrevistas virtuales). | Tool access |
| 40 | Conozco y uso plataformas de busqueda laboral relevantes para mi industria y region. | Platform literacy |
| 41 | No tengo deudas o presiones financieras que me obliguen a aceptar el primer trabajo disponible. | Financial pressure -- tunneling risk (Mullainathan & Shafir 2013: scarcity causes tunnel vision toward immediate needs) |
| 42 | Tengo un presupuesto asignado para invertir en mi desarrollo profesional (cursos, herramientas, coaching). | Investment capacity |

### Scoring System

**Per-axis score:** Sum of 6 questions = 6-30 points per axis.
**Total score:** Sum of all 42 questions = 42-210 points.

#### Per-Axis Score Bands

| Score Range (per axis) | Level | Meaning |
|---|---|---|
| **24-30** | Strong | This dimension is a strength. Maintain and leverage it. |
| **18-23** | Developing | Solid foundation with specific gaps. Targeted improvement will produce fast results. |
| **12-17** | Weak | This dimension is actively holding back your career change. Requires focused intervention. |
| **6-11** | Critical | This is a blocking constraint. Address it before investing heavily in other areas. |

#### Output: Radar Chart

7-axis radar chart rendered in the Compass Full report. Each axis plotted on a 6-30 scale. Visual format makes strengths and gaps immediately visible.

**Benchmark comparison:** As the N1 community grows, radar charts will display the user's scores against anonymized peer averages segmented by:
- Industry (tech, finance, healthcare, etc.)
- Years of experience (0-5, 5-10, 10-15, 15+)
- Transition type (employed seeking change, recently laid off, re-entering workforce)

*Note: Benchmarks require minimum n=50 per segment to display. Until then, scores are shown without comparison.*

### Actionable Output: Per-Axis Recommendations

Each axis generates specific recommendations mapped to the N1 system's 5 phases:

**Example -- Axis 4: Relaciones (Score: 10/30 -- Weak)**

> **Diagnostico:** Tu red profesional es un recurso poco desarrollado. Esto importa porque las referencias producen los mejores candidatos (Zottoli & Wanous 2000) y los que buscan estrategicamente via red logran 23% de tasa de respuesta vs. 2.1% para aplicaciones masivas.
>
> **Fase 1 -- Identificacion:** Haz una lista de todas las personas con quienes has trabajado en los ultimos 5 anos. Categoriza: aliados activos, contactos dormidos, puentes a otras industrias.
>
> **Fase 2 -- Diagnostico:** Identifica las 3 brechas mas grandes en tu red: ?falta de contactos en la industria objetivo? ?falta de personas senior? ?falta de contactos en otra geografia?
>
> **Fase 3 -- Trabajo:** Activa 1 contacto dormido por semana. No pidas trabajo -- pide perspectiva: "Estoy explorando opciones en [area]. Me encantaria saber tu opinion sobre como esta el mercado."
>
> **Fase 4 -- Retroalimentacion:** Mide: cuantas conversaciones esta semana? Cuantas produjeron nueva informacion o una nueva conexion?
>
> **Fase 5 -- Reinicio:** Despues de 4 semanas, evalua: tu red se esta expandiendo? Ajusta la estrategia. Si las conversaciones no producen traccion, cambia el enfoque (industria, nivel, geografia).

### Free vs. Paid Version Differences

| Feature | Compass Lite (Free) | Compass Full (Paid) |
|---|---|---|
| Questions | 15 | 42 |
| Dimensions measured | 4 (Self-Efficacy, Adaptability, Identity, Market Awareness) | 7 (Proposito, Habilidades, Valores, Relaciones, Energia, Entorno, Recursos) |
| Output | 1-page PDF with 3 priorities | Multi-page report with radar chart, benchmarks, and per-axis action plans |
| Benchmarking | None | Peer comparison by industry/experience/transition type |
| Methodology mapping | General recommendations | Specific recommendations mapped to N1 5-phase cycle |
| Retake capability | Once | Quarterly retake with progress tracking |
| Integration | Standalone | Feeds into Career Change OS dashboard |

### What Makes This Different from Generic Career Assessments

1. **Holistic by design.** Most assessments measure skills OR personality OR interests. Compass Full measures all 7 dimensions that research shows predict career transition outcomes -- including resources and environment, which no competitor assesses.
2. **Financial stress as cognitive impairment.** The Recursos axis directly addresses financial capacity using Mani et al.'s finding that poverty reduces cognitive function by 13 IQ points. A person scoring Critical on Recursos gets specific financial runway advice before career strategy advice.
3. **LATAM cultural context built in.** Questions 17, 31, 32, and 36 address familism, collectivism, and the autonomy-obligation tension unique to Latin American professionals (Krys et al. 2022; Fouad et al. 2016).
4. **Actionable, not typological.** No "you are a type X" labels. Every output is: here is your score, here is what the research says about why this matters, here is specifically what to do about it this week.

---

## 3. CV Audit Tool

### Purpose

A structured evaluation system that scores any resume against the research-backed factors proven to affect callback rates. The free version is a 10-point checklist. The paid version provides detailed scoring, LATAM-specific adjustments, and rewrite recommendations.

### Research Foundation

Every item in the audit traces to a specific study:

| Audit Criterion | What the Research Says | Source | Effect Size |
|---|---|---|---|
| Tailoring to specific role | Tailored resumes get 40-50% more callbacks | ResumeGo | Very strong effect |
| Quantified achievements | Only 26% include 5+ metrics; 2.3x more likely to interview | Cultivated Culture (n=125,000+) | 2.3x callback rate |
| Word count optimization | 475-600 words = 8.2% interview rate (nearly 2x average) | Resume analysis | ~2x average |
| Resume length by experience | 2-page for 10+ years = 2.3x more callbacks; >600 words = 43% drop | ResumeGo (n=7,712) | 2.3x / -43% |
| Tenure format for gaps | +8% callbacks (no gap), +15% (with gap) | Kristal et al. 2023, Nature Human Behaviour (n=9,022) | Strong (preregistered field experiment) |
| ATS parsability | 97.8% of Fortune 500 use ATS; non-standard formatting causes parsing failures | Jobscan 2025; Enhancv 2025 | Functional prerequisite |
| Spelling/grammar | 80% of resumes rejected for typos | Hiring manager surveys | Gating criterion |
| Professional email | 30% rejection rate for unprofessional email addresses | CareerBuilder | Gating criterion |
| Cover letter inclusion | 50% more interviews; 35.8% vs 21.2% offer rate | ResumeGo | Strong |
| Eye-tracking scan path | Recruiter attention: current title > previous title > dates > education; 7.4-second scan | TheLadders 2018 | Moderate (small sample) |
| Keyword match density | 60-80% keyword match range produces highest interview rates | Industry analysis | Moderate |
| LinkedIn completeness | Complete profiles get 40x more opportunities; professional photo = 14x views | LinkedIn data | Strong (platform data) |

### Free Version: 10-Point Checklist

A downloadable PDF and interactive web checklist. Each item is a yes/no assessment with a one-line research justification.

| # | Checklist Item | Pass Criterion | If You Fail This |
|---|---|---|---|
| 1 | **Personalizado para este rol?** | Resume has been modified for the specific job posting -- not a generic version | 36% of generic resumes are excluded (recruiter surveys). Tailored = 40-50% more callbacks. |
| 2 | **5+ logros cuantificados?** | At least 5 bullet points include specific numbers (revenue, percentages, counts, timelines) | Only 26% of resumes pass this bar. You need numbers -- not responsibilities. |
| 3 | **475-600 palabras?** | Word count falls within optimal range | Below 475: too thin. Above 600: 43% callback drop. |
| 4 | **Extension correcta para tu experiencia?** | 0-7 years: 1 page. 8-15: 1-2 pages. 15+/executive: 2 pages | 2-page resumes get 2.3x more callbacks for 10+ years experience. |
| 5 | **Formato parseable por ATS?** | No tables, text boxes, headers/footers, images, creative fonts. Standard section headers. | ATS parses and stores; failures make you functionally invisible. |
| 6 | **Cero errores de ortografia/gramatica?** | No typos, no grammar errors, consistent formatting | 80% of hiring managers reject for this. Non-negotiable. |
| 7 | **Email profesional?** | firstname.lastname@provider or similar professional format | 30% of candidates with unprofessional emails are rejected without reading. |
| 8 | **Los primeros 3 bullets de cada rol son los mas fuertes?** | Most impressive achievements are listed first under each position | Recruiters scan top-to-bottom, left-to-right in 7.4 seconds. If your best work is buried, it is invisible. |
| 9 | **Incluye cover letter personalizada?** | Tailored cover letter accompanies the resume | 50% more interviews. 35.8% vs 21.2% offer rate. The ROI is clear. |
| 10 | **Perfil de LinkedIn completo y actualizado?** | Professional photo, headline optimized, experience matches resume, recommendations present | 72% of recruiters use LinkedIn to find candidates. 57% of employers are less likely to call candidates with no online presence. |

**Scoring (Free):**
- **9-10 items passed:** Your resume meets research-backed standards. Focus on targeting and volume strategy.
- **6-8 items passed:** Strong foundation but critical gaps. Fix the failures before your next application.
- **3-5 items passed:** Your resume is likely being filtered out before a human sees it. Rebuild before applying further.
- **0-2 items passed:** Full resume overhaul needed. Start with items 1, 2, 5, and 6 -- these are the highest-impact fixes.

### Paid Version: Detailed Scoring with Fix Recommendations

The paid version extends each checklist item into a detailed scoring dimension (1-5 scale) with specific rewrite guidance.

#### Scoring Dimensions (1-5 each, total 60 possible)

**1. Tailoring Score (1-5)**

| Score | Criteria |
|---|---|
| 1 | Generic resume -- same version sent to every job |
| 2 | Job title modified; everything else unchanged |
| 3 | Skills section adjusted; some keyword matching |
| 4 | Bullet points rewritten to mirror job description language; relevant achievements prioritized; keywords at 50-60% match |
| 5 | Full tailoring: opening summary, bullet points, skills, and cover letter all reference specific JD requirements; keyword match 60-80%; quantified achievements directly relevant to role |

**Recommendation engine (example for Score = 2):**
> Cambiaste el titulo pero no el contenido. Esto es como cambiar la portada de un libro sin cambiar las paginas. El reclutador busca palabras clave especificas -- si no las encuentra en los primeros 7.4 segundos de escaneo, tu CV desaparece. Accion: toma la descripcion del trabajo, subraya los 10 requisitos principales, y reescribe tus 5 primeros bullets para demostrar exactamente esas capacidades con numeros.

**2. Quantification Score (1-5)**

| Score | Criteria |
|---|---|
| 1 | Zero numbers in resume -- all responsibility-based language |
| 2 | 1-2 numbers, generic ("managed a team") |
| 3 | 3-4 quantified achievements with specific metrics |
| 4 | 5-7 quantified achievements with context (percentages, dollar amounts, timelines) |
| 5 | 8+ quantified achievements; each bullet tells a result story with baseline, action, and outcome |

**3. Format & Structure Score (1-5)** -- ATS parsability, section headers, visual hierarchy
**4. First Impression Score (1-5)** -- Top-of-resume impact in 7.4-second scan window
**5. Length & Density Score (1-5)** -- Word count, page count appropriate to experience
**6. Error Score (1-5)** -- Grammar, spelling, formatting consistency
**7. Cover Letter Score (1-5)** -- Tailoring, value proposition, tone
**8. Digital Presence Score (1-5)** -- LinkedIn completeness, consistency with resume
**9. Bias Vulnerability Score (1-5)** -- Assessment of exposure to documented biases (age, name, gaps, overqualification)
**10. LATAM Compliance Score (1-5)** -- Region-specific norms (photo, personal data, "hoja de vida" conventions)

#### Bias Vulnerability Assessment (Unique to N1)

This is the dimension no other CV audit tool includes. Based on the research, the audit flags:

| Risk Factor | Research Basis | What the Tool Reports |
|---|---|---|
| Employment gaps visible | Kristal et al. 2023: gaps reduce callbacks 8-15% | Recommends tenure format; explains the research |
| Age signals (graduation year, early career dates) | Neumark et al. 2019: callbacks decline from early 40s; women affected more | Recommends removing graduation year if >15 years ago; notes age discrimination is real and not the candidate's fault |
| Name-based bias risk | Quillian et al. 2017; Bertrand & Mullainathan 2004; Oreopoulos 2011 | Does NOT recommend "whitening" names -- instead contextualizes: the 36% callback gap is systemic. Channel energy into referral strategy (23% response rate) rather than fighting a broken resume screen |
| Overqualification signals | Organization Science study: overqualified candidates rejected for "flight risk" | Recommends tailoring down for roles below experience level; explains the gender asymmetry |

### Free vs. Paid Differences

| Feature | Free (10-Point Checklist) | Paid (Detailed Scoring) |
|---|---|---|
| Assessment depth | Yes/No per item | 1-5 scale per dimension |
| Number of criteria | 10 | 10 dimensions, 50+ sub-criteria |
| Fix recommendations | 1-line per item | Paragraph-level rewrite guidance per dimension |
| Bias vulnerability | Not included | Full bias exposure assessment with research context |
| LATAM localization | General | Country-specific norms for Colombia, Mexico, Argentina, Brazil |
| Cover letter scoring | "Do you have one?" | Detailed evaluation of tailoring, value proposition, tone |
| Digital presence audit | "Is LinkedIn complete?" | Section-by-section LinkedIn optimization guide |

---

## 4. Interview Prep System

### Purpose

A complete interview preparation system covering behavioral story development, company research, mock interview practice, and anxiety management. Built on the research finding that 47% of candidates fail due to insufficient preparation (NovoResume; JobScore) and that 5+ practice interviews yield approximately 2x pass rate improvement (interviewing.io).

### Component 1: STAR Story Bank Template

**Research basis:** STAR method improves interview pass rates 30-50% (CareerBuilder case study). Behavioral questions are 55% effective at predicting job performance vs. 10% for traditional questions (DDI research). The key insight from the research: specificity is everything. Vague answers are the #1 failure mode in behavioral interviews.

#### Template Structure (Notion Database)

Each story is a database entry with these fields:

| Field | Type | Purpose |
|---|---|---|
| Story Title | Text | Quick identifier (e.g., "Saved the Q3 launch after vendor failed") |
| Competency Tags | Multi-select | Tags from standard competency list: Conflict, Failure, Leadership, Collaboration, Ambiguity, Prioritization, Influence, Innovation, Data-Driven Decision, Customer Focus |
| Situation | Long text | Context: where, when, what was at stake, who was involved. Must include specific names/roles and concrete details. |
| Task | Long text | Your specific responsibility -- not the team's task. Must start with "I was responsible for..." or "My role was to..." |
| Action | Long text | What YOU did (not "we"). Step-by-step. Must include decision rationale: "I chose X over Y because..." |
| Result | Long text | Quantified outcome. Revenue, time saved, people impacted, percentage improvement. Must include "compared to..." baseline. |
| Lessons | Long text | What you learned or would do differently. Demonstrates self-awareness. |
| Duration | Number | How long to tell (target: 60-90 seconds per story) |
| Last Practiced | Date | Tracks practice recency |
| Confidence Level | Select | High / Medium / Low -- prompts you to practice low-confidence stories more |

#### The 8-10 Story Minimum

Based on behavioral interview research, candidates need a minimum bank of 8-10 stories to cover the standard competency grid:

| Story Slot | Competency Covered | Example Prompt It Answers |
|---|---|---|
| 1 | Conflict Resolution | "Tell me about a time you disagreed with a colleague/manager" |
| 2 | Failure & Recovery | "Tell me about a time you failed" |
| 3 | Leadership / Influence without Authority | "Tell me about a time you led a team" or "...influenced without direct authority" |
| 4 | Collaboration Under Pressure | "Tell me about a time you worked cross-functionally under a tight deadline" |
| 5 | Ambiguity & Decision-Making | "Tell me about a time you had to make a decision with incomplete information" |
| 6 | Prioritization / Resource Constraints | "Tell me about a time you had to prioritize competing demands" |
| 7 | Innovation / Process Improvement | "Tell me about a time you improved a process or introduced a new approach" |
| 8 | Data-Driven Decision | "Tell me about a time you used data to drive a business decision" |
| 9 (optional) | Customer/Stakeholder Management | "Tell me about a time you managed a difficult stakeholder" |
| 10 (optional) | Mistake → System Fix | "Tell me about a time you made a mistake and built a process to prevent it" |

**Pivot training:** Each story should be tagged with 2-3 competencies so it can answer multiple questions. The template includes a "Pivot Variations" field for each story showing how the same event can be reframed.

### Component 2: Company Research Framework

**Research basis:** 47% of candidates fail screens because of insufficient company knowledge (NovoResume; JobScore). 70% of hiring managers say being unprepared is the #1 interview mistake (Apollo Technical).

#### Research Template (Notion Page -- pre-interview completion required)

| Research Area | What to Find | Where to Look | Why It Matters |
|---|---|---|---|
| **Company mission & strategy** | Mission statement, recent strategic announcements, CEO letters/talks | Company website, annual reports, CEO interviews | Demonstrates genuine interest -- recruiters say this is "shockingly rare" |
| **Recent news (last 90 days)** | Product launches, funding rounds, acquisitions, leadership changes, layoffs | Google News, Crunchbase, LinkedIn company page | Shows you're current. Enables informed questions. |
| **Company challenges** | Competitive threats, market shifts, operational problems mentioned in earnings calls or press | Glassdoor, analyst reports, industry publications | Questions about challenges signal strategic thinking |
| **Role-specific context** | Why this role exists now (growth? replacement? new initiative?) | Job posting analysis, LinkedIn (who held this role before?), recruiter conversation | Understanding the "why" behind the hire lets you position yourself as the solution to a specific problem |
| **Interview format** | How many rounds? Who interviews? What format (behavioral, case, technical)? | Glassdoor interview reviews, Blind, the recruiter (ask directly) | Preparation calibrated to actual format |
| **Compensation range** | Market rate for this role in this geography at this company size | Glassdoor, Levels.fyi, PayScale, salary transparency laws | Never go into a negotiation uninformed. Employees with data are 40% more likely to achieve goals (PayScale 2021) |

#### Ghost Job Detection Protocol

Before investing preparation time, assess whether the posting is real:

| Signal | Ghost Job Risk | Source |
|---|---|---|
| Posted >60 days ago with no updates | High | 18-27% of postings are ghost jobs (Greenhouse 2024) |
| No named recruiter or hiring manager findable on LinkedIn | Medium-High | |
| Company recently announced hiring freeze or layoffs | High | |
| Role reposted multiple times in 6 months | High | 40% of tech companies posted fake jobs last year (Clarify Capital 2025) |
| "Easy Apply" with no screening questions | Medium | May indicate low-priority posting |
| You cannot find anyone at the company in this role on LinkedIn | Medium | Role may not actually exist |

### Component 3: Mock Interview Scoring Rubric

**Research basis:** 5+ practice interviews yield approximately 2x pass rate improvement (interviewing.io platform data). Interview coaching improves performance; answer organization mediates the effect (Maurer & Solamon 2006, n=213). More comprehensive coaching produces higher interview ratings (Tross & Maurer 2008, n=144).

#### Scoring Rubric (for peer or self-assessment after mock interviews)

| Dimension | 1 (Needs Work) | 3 (Developing) | 5 (Interview Ready) | Research Basis |
|---|---|---|---|---|
| **Specificity** | Answers are vague -- "We improved the process" | Some specifics but gaps in detail | Names, numbers, timelines, outcomes in every answer | #1 behavioral interview failure mode (BugFree.ai 2024; Final Round AI 2024) |
| **Structure** | Rambling, no clear beginning/middle/end | Follows STAR loosely but transitions are rough | Clean STAR format; each answer is 60-90 seconds with clear arc | STAR improves pass rates 30-50% (CareerBuilder) |
| **Self vs. Team** | Mostly "we" language; unclear personal contribution | Mix of "I" and "we" but personal role mostly clear | Clear "I" statements with context for team role | Evaluators assess individual contribution, not team output |
| **Results** | No outcomes mentioned or outcomes are vague | Some results but not quantified | Every story ends with a measurable outcome + what you learned | 2.3x more likely to interview with quantified achievements (Cultivated Culture) |
| **Authenticity** | Rehearsed/scripted delivery; sounds like reading | Natural but occasionally stiff | Conversational, confident, genuine -- as if telling a friend | Self-promotion positive (r=.20); extensive fabrication negative (r=-.19) (Swider et al. 2011) |
| **Self-Awareness** | No acknowledgment of mistakes or growth areas | Mentions failures but as humble-brags | Discusses genuine failures with genuine lessons; shows growth trajectory | Self-awareness is a strong interview signal at senior levels |
| **Energy/Enthusiasm** | Flat affect, low energy | Moderate engagement | Genuine enthusiasm calibrated to conversation -- not performative | Low energy is the primary phone screen failure reason (Formation.dev; HRNasty) |
| **Question Quality** | No questions or FAQ-level questions ("What's the team size?") | Decent questions but surface-level | Strategic questions that demonstrate research and signal thinking ("I noticed you recently launched X -- how is the team navigating Y?") | Questions signal intelligence and interest. 70% of hiring managers cite "no questions" as a red flag |

**Scoring:** Sum of 8 dimensions = 8-40 points.
- **32-40:** Mock interview ready. Focus on repetition and edge cases.
- **24-31:** Strong in some areas, gaps in others. Target the 1-2 lowest scores.
- **16-23:** Significant preparation needed. Focus on specificity and structure first.
- **8-15:** Go back to STAR Story Bank. Build stories before practicing delivery.

### Component 4: Anxiety Management Protocol

**Research basis:** Observation during technical assessment reduces performance by >50% (Behroozi et al. 2020, RCT, n=48). All women failed public assessment, all passed private (same study). Choking under pressure is mediated by working memory overload -- the most capable candidates are most affected (Beilock & Carr 2005). Stereotype threat produces d=0.26 performance decrement (Steele & Aronson 1995).

#### Pre-Interview Protocol (30 minutes before)

| Step | Time | Action | Research Basis |
|---|---|---|---|
| 1 | 5 min | **Physiological reset:** Box breathing (4-4-4-4). Reduces cortisol and sympathetic nervous system activation. | Anxiety management literature; performance psychology |
| 2 | 5 min | **Reframing:** "This is a conversation, not an evaluation. I am also evaluating them." Write 3 things you are evaluating about the company. | Reframing reduces stereotype threat (Spencer, Steele & Quinn 1999: gender gap eliminated when test described as non-diagnostic) |
| 3 | 5 min | **Evidence review:** Read your top 3 STAR stories. Do not memorize -- remind yourself of the facts. Focus on outcomes and numbers. | Self-efficacy building through "mastery experience recall" (Bandura 1977) |
| 4 | 5 min | **Technical setup:** Camera angle, lighting, background, audio test. Eliminate logistical anxiety. | Off-camera gaze penalized worse than voice-only (Miura et al. 2024, Scientific Reports). Setup matters. |
| 5 | 5 min | **Warm-up:** Speak aloud for 2 minutes on any topic. Activate voice, pace, and verbal fluency. | Phone screen performance is disproportionately affected by verbal quality. 38% of first impressions are voice-driven. |
| 6 | 5 min | **Intention setting:** One sentence: "Today my goal is to be specific, genuine, and curious." Not "Today my goal is to get the job." | Process goals outperform outcome goals under pressure (Locke & Latham goal-setting theory) |

#### During-Interview Grounding Techniques

- **If your mind goes blank:** "That's a great question -- let me take a moment to think about the best example." Pause is not failure. Interviewers interpret thoughtful pauses as competence.
- **If you start rambling:** "Let me summarize the key point..." Forces structure. Return to Result.
- **If you don't know the answer:** "I haven't encountered that specific situation, but here's how I would approach it..." Shift from STAR to a hypothetical approach. Better than fabrication (fabrication r=-.19 with outcomes -- Swider et al. 2011).

### Free vs. Paid Differences

| Feature | Free | Paid |
|---|---|---|
| STAR template | Basic 4-field template (S-T-A-R) | Full database with competency tags, pivot variations, practice tracking, confidence levels |
| Company research framework | 3-item checklist | 6-area research template + ghost job detection protocol |
| Mock interview rubric | Not included | 8-dimension scoring rubric with research justification per dimension |
| Anxiety management | Not included | Full pre-interview protocol + during-interview grounding techniques |
| Story count guidance | "Prepare a few stories" | 8-10 story minimum mapped to competency grid with overlap analysis |
| Practice tracking | Not included | Date-stamped mock log with score trends |

---

## 5. Negotiation Calculator

### Purpose

A structured system for evaluating, preparing for, and executing compensation negotiations. Combines a total compensation calculator, market rate comparison framework, research-backed negotiation scripts, and a counter-offer decision framework. Built on the finding that 55% of candidates never negotiate despite 89% of employers being open to it, leaving an average of 18.83% on the table (Interview Guys 2024-2025 meta-review; XpertHR 2021; Pew Research 2023).

### Component 1: Total Compensation Calculator

**Research basis:** Integrative negotiation (multi-issue, "expanding the pie") produces higher total outcomes than distributive negotiation (salary-only) (Barry & Friedman 1998, JPSP). Signing bonuses are one-time costs and highly negotiable. Equity is often more flexible than base salary. Order of negotiability: signing bonus > equity > base salary (Holloway Guide; recruiter consensus).

#### Calculator Fields (Notion Database or Spreadsheet)

| Component | Current/Offer Value | Market Benchmark | Your Ask | Notes |
|---|---|---|---|---|
| **Base Salary** | [input] | [from market research] | [your precise number] | Hardest to negotiate; use precise number ($87,250 not $85,000 -- Mason et al. 2013) |
| **Annual Bonus (target %)** | [input] | [from market research] | | Often non-negotiable at junior levels; negotiable at senior |
| **Signing Bonus** | [input] | | [your ask] | Most negotiable component -- one-time cost to employer. Two types: "make-whole" (compensating forfeited equity) and "movement" (incentive to leave stable role) |
| **Equity/RSU/Options** | [input -- value at grant; vest schedule] | | [your ask] | Seed-stage: VP/Director 1-2%, senior engineer ~1%, other roles ~0.35% (Secfi 2024) |
| **Retirement Match** | [input] | | | Usually standardized; not negotiable |
| **Health Insurance (annual employer contribution)** | [estimated] | | | Non-negotiable but significant value; factor into total comp |
| **PTO (days/year)** | [input] | | [your ask] | Negotiable at many companies, especially for senior roles |
| **Remote Work / Flexibility** | [describe] | | [your preference] | 84% would reject offers without flexible work (Second Talent 2025). 67% rank remote as #1 factor (Robert Half 2025) |
| **Professional Development Budget** | [input] | | [your ask] | Often overlooked; negotiable in many companies |
| **Relocation Assistance** | [input] | | | If applicable |
| **Start Date** | [date] | | [your preferred date] | Often negotiable; useful lever for rest/transition |
| **Title** | [offered] | | [your preferred] | May affect future career trajectory; sometimes negotiable |
| **TOTAL ANNUAL VALUE** | [auto-calculated] | [market benchmark total] | [target total] | Compare total packages, not just salary |

#### For LATAM Professionals Interviewing with US/EU Companies

| Additional Consideration | Notes |
|---|---|
| Currency denomination | Clarify: paid in USD/EUR or local currency? Exchange rate risk on you or employer? |
| Tax implications | Independent contractor vs. employee status; double taxation treaties; VAT obligations |
| PPP adjustment | $80K USD has very different purchasing power in Bogota vs. San Francisco. Factor into evaluation. |
| Benefits gap | US companies hiring LATAM contractors often don't provide health insurance or retirement matching. Calculate the gap. |
| Equity access | Stock options in US companies may have tax and exercise complications for non-US residents |

### Component 2: Market Rate Comparison Framework

**Research basis:** Employees who come armed with specific salary data are 40% more likely to achieve compensation goals (PayScale 2021). When women receive prefilled median salary data, the gender gap in asks, bids, and final offers is eliminated (Exley & Kessler 2022, QJE, n=4,000+).

#### Data Source Hierarchy (for building your range)

| Source | Reliability | Best For | Notes |
|---|---|---|---|
| **Levels.fyi** | High (verified data) | Tech companies; US market | Real offer data with equity breakdown |
| **Glassdoor** | Moderate (self-reported) | Broad coverage; international | Large sample but self-reported; may lag market |
| **PayScale** | Moderate | US and some international | Good for non-tech roles |
| **LinkedIn Salary** | Moderate | Where available | Not all markets covered |
| **Bureau of Labor Statistics (BLS)** | High (government data) | US market -- broad categories | Reliable but aggregated; not company-specific |
| **Network intelligence** | Variable | Specific companies/roles | Ask directly: "What's the typical range for this role at [company]?" |
| **Salary transparency postings** | High (legally required) | Colorado, NYC, California, Washington, and 15+ US states | Use these as anchors even if applying elsewhere |

#### Building Your Range

1. Collect 5+ data points from 3+ sources for your target role, level, and geography.
2. Calculate the 25th, 50th, and 75th percentile.
3. Your ask should be a precise number between the 60th and 75th percentile.
4. Your "walk-away" number should be at or above the 25th percentile.
5. Use a precise number, not a round one: $87,250 not $85,000 (Mason et al. 2013: precise anchors produce more conciliatory counter-offers. This effect persists even when the recipient knows the tactic -- Thorsteinson 2021).

### Component 3: Negotiation Script Templates

**Research basis:** Simply being told that "negotiation is normal and expected" dramatically increases negotiation attempts and outcomes (NBER/Harvard Business School -- Exley & Kessler). When job postings explicitly state wages are negotiable, the gender gap in negotiation disappears (Leibbrandt & List 2015, Management Science, n=~2,500). Collaborative and competitive strategies both work -- both gain ~$5,000 more on average (Interview Guys meta-review).

#### Script 1: Initial Counter (Email -- Recommended Format)

> Subject: Entusiasmado con la oferta -- una pregunta sobre compensacion
>
> Hola [nombre del reclutador],
>
> Muchas gracias por la oferta. Estoy genuinamente entusiasmado con la oportunidad de trabajar en [empresa] y contribuir a [proyecto/objetivo especifico que mencionaron en la entrevista].
>
> Despues de revisar la oferta completa e investigar el mercado para roles similares en [ciudad/industria], queria conversar sobre la compensacion base. Basado en mi experiencia en [habilidad especifica que valoran -- usar la que mencionaron en la entrevista], y considerando que el rango de mercado para este nivel esta entre $[percentil 50] y $[percentil 75], me gustaria proponer un salario base de $[numero preciso -- entre p60 y p75].
>
> Estoy abierto(a) a conversar sobre esto y encontrar un acuerdo que funcione para ambos. ?Podemos agendar una llamada esta semana?
>
> Saludos,
> [Tu nombre]

**Design notes:**
- Email format creates a paper trail and reduces social penalty, especially important for women and minorities (Bowles et al. 2007; Hernandez et al. 2019)
- "Relational" framing ("entusiasmado," "contribuir," "encontrar un acuerdo") reduces the social penalty for women who negotiate (Bowles & Babcock 2013)
- Precise number signals market knowledge (Mason et al. 2013)
- Value-based framing ("mi experiencia en...") rather than need-based ("necesito...") (Harvard PON)

#### Script 2: Counter-Counter (If They Come Back Below Your Ask)

> Gracias por la respuesta, [nombre]. Entiendo las restricciones presupuestarias y valoro la transparencia.
>
> Si el salario base tiene un tope en $[su contra-oferta], estaria abierto(a) a explorar otras formas de cerrar la brecha -- por ejemplo, un bono de firma de $[monto], revision salarial adelantada a los 6 meses en lugar de 12, o [otro componente: equity, PTO, professional development budget].
>
> Lo importante para mi es que el paquete total refleje el valor que voy a aportar. ?Como lo ves?

**Design notes:**
- Shifts to integrative negotiation (multi-issue) when distributive (salary-only) hits a wall (Barry & Friedman 1998)
- Signing bonuses are one-time costs -- more negotiable than recurring salary increases
- Maintains collaborative tone throughout

#### Script 3: For LATAM Professionals Negotiating with US Companies

> Hi [recruiter name],
>
> Thank you for the offer -- I am excited about the opportunity to join [company] and contribute to [specific project].
>
> I want to make sure we align on total compensation. Given that this role is remote/contractor-based and does not include [health insurance / retirement matching / PTO / other benefits that full-time US employees receive], I'd like to discuss a base rate that reflects the full value, accounting for the benefits gap. Based on market rates for this role and adjusting for total cost of employment, I'd like to propose $[precise number].
>
> I'm also happy to discuss alternative structures -- for example, a quarterly retention bonus or an annual rate review.
>
> Looking forward to your thoughts.

### Component 4: Counter-Offer Decision Framework

**Research basis:** 55% of employees accept counter-offers from their current employer. Of those, approximately 80% leave within 6 months and 90% leave within 12 months. Only 15% stay 2+ years (Gitnux 2024; Eclipse Software 2023; WiFiTalents aggregation). Counter-offers address symptoms (money, title) but rarely resolve the underlying dissatisfaction that triggered the search (Progressive Recruitment 2023).

#### Decision Matrix (Notion Template)

| Factor | Weight (1-5) | Current Employer Counter-Offer (1-5) | New Opportunity (1-5) | Weighted Score (Current) | Weighted Score (New) |
|---|---|---|---|---|---|
| Base compensation | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Total compensation | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Growth trajectory (next 2-3 years) | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Manager/team quality | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Alignment with values | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Learning and development | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Work flexibility (remote, hours) | [user-set] | [rate] | [rate] | [auto] | [auto] |
| Company trajectory | [user-set] | [rate] | [rate] | [auto] | [auto] |
| **TOTAL** | | | | [sum] | [sum] |

**Critical question (displayed prominently in the template):**

> "La razon por la que empece a buscar trabajo fue: ________________. ?La contra-oferta de mi empleador actual resuelve esa razon, o solo el sintoma?"
>
> Si tu razon fue el salario y la contra-oferta lo resuelve: tal vez vale la pena quedarse.
> Si tu razon fue el jefe, la cultura, el crecimiento, o el proposito: la contra-oferta no cambia nada. El 90% que acepta contra-ofertas se va en 12 meses porque el problema original sigue ahi.

### Free vs. Paid Differences

| Feature | Free | Paid |
|---|---|---|
| Core message | "Negotiation works -- 18.83% average gain" (content/newsletter) | Full calculator + scripts + decision framework |
| Total comp calculator | Not included | Multi-component calculator with LATAM adjustments |
| Market rate framework | "Research your market rate" (general advice) | Data source hierarchy + precise-number methodology |
| Negotiation scripts | Not included | 3 research-backed scripts with annotations |
| Counter-offer framework | "90% leave in 12 months" (statistic shared in content) | Decision matrix template + critical-question protocol |
| Gender/race awareness | Mentioned in content | Specific framing adjustments built into scripts |

---

## 6. Job Search Tracker (Notion)

### Purpose

A Notion-based pipeline management system that tracks every application through the hiring funnel, measures conversion rates at each stage, manages follow-ups, and includes an emotional well-being check-in. Built on the research finding that job search self-regulation and quality produce better outcomes than raw search intensity (Van Hooft et al. 2021).

### Research Foundation

| Feature | Why It Exists | Citation |
|---|---|---|
| Pipeline stages | Mirrors the actual hiring funnel from the research | Key findings synthesis: 5-stage funnel with measured pass rates |
| Conversion metrics | Self-regulation (tracking, adjusting) matters more than raw effort | Van Hooft et al. 2021 (quantitative review): "job-search self-regulation more promising than simple search intensity" |
| Follow-up triggers | 61% of candidates are ghosted post-interview; systematic follow-up is a counter-strategy | Greenhouse 2024 (n=2,500) |
| Emotional check-in | Self-efficacy erodes with prolonged search; monitoring well-being prevents the downward spiral | Kanfer et al. 2001; Wanberg et al. 2012 (rejection spiral: applications drop from 2.9/week to 0.1/week after extended unemployment) |
| Ghost job flagging | 18-27% of postings have no intent to hire; tracking which postings never respond reveals patterns | Greenhouse 2024; Clarify Capital 2025 |
| Quality over quantity metrics | Strategic networkers: 23% response rate, 58% employment vs. mass-appliers: 2.1%, 12% | Career services study (n=500, 6 months) |

### Database Structure

#### Main Database: Applications Pipeline

**Views:**
1. **Kanban Board** -- Applications grouped by stage (primary view)
2. **Table View** -- All applications with sortable/filterable columns
3. **Calendar View** -- Applications by date applied + follow-up due dates
4. **Dashboard View** -- Aggregate metrics and conversion rates

**Properties:**

| Property | Type | Description |
|---|---|---|
| Company | Title | Company name |
| Role | Text | Position title |
| Stage | Select | Applied / Screening / Technical / Behavioral / Offer / Negotiation / Accepted / Rejected / Ghosted |
| Date Applied | Date | When you submitted the application |
| Source | Select | Job Board / LinkedIn / Referral / Company Website / Recruiter Outreach / Network Contact |
| Contact Name | Text | Recruiter or hiring manager name |
| Contact Email | Email | For follow-up tracking |
| Referral? | Checkbox | Was this application supported by a referral? |
| Tailored? | Checkbox | Was the resume tailored for this specific role? |
| Cover Letter? | Checkbox | Was a tailored cover letter included? |
| Salary Range (posted) | Text | From job posting or salary transparency data |
| Your Ask | Number | Your target compensation |
| Last Activity Date | Date | Date of most recent interaction (automated or manual) |
| Follow-Up Due | Date | Next follow-up date (calculated: Last Activity + 7 days after applying, + 3 days after interview) |
| Ghost Job Risk | Select | Low / Medium / High (based on ghost job detection signals) |
| Notes | Long text | Free-form notes on conversations, impressions, red flags |
| Stage Transition Dates | Dates (per stage) | When the application moved between stages -- for time-in-stage calculation |
| Outcome | Select | Offer Received / Offer Declined / Rejected (with reason) / Ghosted / Withdrawn |

#### Metrics Dashboard

**Automated calculations (Notion formulas + rollups):**

| Metric | Calculation | What It Tells You | Benchmark (from research) |
|---|---|---|---|
| **Total Applications** | Count of all entries | Volume | Strategic: 5-10 targeted/week. Mass-apply: 20+/week (lower quality) |
| **Response Rate** | (Applications with any response / Total Applications) x 100 | How visible your applications are | Mass-apply: 2-3%. Tailored: 4-8%. Referral: 15-23% |
| **Stage Conversion: Applied → Screen** | (Screened / Applied) x 100 | Resume effectiveness | Research benchmark: 3% (Gem 2025) |
| **Stage Conversion: Screen → Technical** | (Technical / Screened) x 100 | Screen performance | Research benchmark: 25-40% |
| **Stage Conversion: Technical → Behavioral** | (Behavioral / Technical) x 100 | Technical readiness | Research benchmark: 15-25% |
| **Stage Conversion: Behavioral → Offer** | (Offers / Behavioral) x 100 | Interview performance | Research benchmark: 27-42% |
| **Average Time-in-Stage** | Average days between stage transitions | Process speed | Total pipeline average: ~54 days (2025 industry data) |
| **Referral vs. Non-Referral Conversion** | Conversion rates split by Referral? field | Network strategy effectiveness | Referrals should show dramatically higher conversion |
| **Tailored vs. Generic Conversion** | Conversion rates split by Tailored? field | Whether tailoring effort is paying off | Should show 40-50% improvement (ResumeGo) |
| **Ghost Rate** | (Ghosted / Total Applications) x 100 | Systemic vs. personal rejection | Benchmark: ~75% of applications receive zero response (Greenhouse 2024) |

#### Follow-Up Automation Triggers

| Trigger | Timing | Suggested Action |
|---|---|---|
| Applied, no response | 7 days after application | Brief follow-up email: "I wanted to confirm my application was received for [Role]. I'm particularly interested because [one specific reason]. I'd welcome the opportunity to discuss how my experience in [X] aligns with this role." |
| Post-screen, no update | 3 business days after screen | Follow-up email to recruiter: "Thank you for the conversation about [Role]. I wanted to reiterate my interest and ask about next steps and timeline." |
| Post-interview, no update | 5 business days after interview | Follow-up to interviewer(s): specific reference to a topic discussed + restatement of interest |
| Application marked "Ghosted" after 21 days | Automatic stage change | Application moves to Ghosted stage. No further follow-up -- redirect energy to active pipeline. |

#### Emotional Check-In (Weekly)

**Research basis:** Work-role centrality moderates the relationship between unemployment and psychological well-being -- the more central work is to identity, the greater the damage from its loss (McKee-Ryan et al. 2005, meta-analysis). Coping resources and cognitive appraisals predict well-being more strongly than human capital or demographics. Self-efficacy erodes with repeated rejection: confidence typically wavers after the 5th rejection.

**Weekly check-in template (embedded in the tracker as a linked database):**

| Date | Question | Scale / Response |
|---|---|---|
| [auto] | Nivel de energia esta semana (1-5) | 1 = Agotado, 5 = Energizado |
| [auto] | Nivel de confianza en mi busqueda (1-5) | 1 = Sin esperanza, 5 = Seguro de que voy a conseguirlo |
| [auto] | Rechazos esta semana | Number |
| [auto] | ?Como me afectaron los rechazos? | Mucho / Algo / Poco / Nada |
| [auto] | Actividades de recarga que hice (ejercicio, sociales, hobbies) | Checkbox list |
| [auto] | Una cosa que salio bien esta semana | Free text |
| [auto] | Ajustes para la proxima semana | Free text |

**Alert logic:**
- If Energy drops below 2 for two consecutive weeks: display message linking to burnout resources and suggesting a "strategic pause" (1 week of no applications, focused on recovery activities)
- If Confidence drops below 2 for two consecutive weeks: display research context -- "La confianza cae tipicamente despues del 5to rechazo. Esto es normal, no es un reflejo de tu valor. Considera: revisar tu banco de logros, hablar con un aliado, o ajustar tu estrategia de aplicacion."
- If Rejections exceed 10 in a week with zero responses: display message about quality vs. quantity and referral strategy

### Weekly Review Template

**Embedded in tracker, prompted every Sunday:**

| Section | Questions |
|---|---|
| **Numeros** | Applications sent: ___. Responses received: ___. Interviews: ___. Conversion rate: ___%. |
| **Que funciono** | Which application strategy produced the best response? Referral? Tailored? Specific platform? |
| **Que no funciono** | Any patterns in rejections or ghosting? What should change? |
| **Aprendizajes** | What did you learn from interviews this week? What would you do differently? |
| **Proxima semana** | 3 specific actions with deadlines. Not "apply more" but "send 3 tailored applications to [companies] by Wednesday." |
| **Bienestar** | Complete weekly emotional check-in (above). Schedule 1 recovery activity. |

### What Makes This Different from Generic Job Trackers

1. **Conversion metrics match the actual research funnel.** Most trackers count applications. This one measures whether your conversion rates match research benchmarks -- and if they don't, surfaces which stage is the bottleneck.
2. **Ghost job flagging.** No other tracker helps you identify likely ghost jobs before you waste preparation time.
3. **Emotional well-being is integrated, not afterthought.** The weekly check-in is not optional wellness theater -- it is grounded in Kanfer et al.'s finding that self-efficacy predicts all three employment outcomes and McKee-Ryan et al.'s finding that coping resources predict well-being more strongly than demographics.
4. **Quality metrics over vanity metrics.** Tracks whether tailoring and referrals produce better results than mass-applying -- gives data to support the strategic approach.
5. **Source effectiveness comparison.** After 4-6 weeks of data, the tracker reveals which sources (referral vs. job board vs. LinkedIn) produce the best conversion, enabling strategic resource allocation.

---

## 7. Career Change OS (Notion)

### Purpose

The master operating system that integrates all N1 tools into a single coherent workspace. Maps to the 5-phase N1 methodology (Identificacion, Diagnostico, Trabajo, Retroalimentacion, Reinicio) and the 7-stage hiring funnel. This is the home base for any N1 Pro subscriber.

### Design Philosophy

**Problem it solves:** Career change advice exists in fragments -- a resume template here, an interview tip there, a motivational book somewhere else. The median MOOC completion rate is 12.6% because courses lack accountability and integration. The N1 OS integrates everything: identity work, diagnostics, tactical execution, pipeline tracking, emotional well-being, and community accountability into one workspace that the user opens every day.

**Research basis for integration:** The JOBS Program RCT (Caplan et al. 1989; Vinokur et al. 1991, n=1,122) demonstrated that a structured intervention combining emotional support, self-efficacy building, AND skill training produced measurably superior outcomes compared to self-directed job search -- faster reemployment, higher-quality jobs, and fewer depressive episodes 2.5 years later. The OS replicates this integration digitally.

### Master Dashboard

The dashboard is the first page the user sees. It provides a single-screen overview of their career change status.

#### Dashboard Components

| Component | Type | Data Source | Purpose |
|---|---|---|---|
| **Current Phase** | Status indicator | Manual selection | Shows which N1 phase the user is in: Identificacion / Diagnostico / Trabajo / Retroalimentacion / Reinicio |
| **Compass Score** | Radar chart embed | Compass Full results | Visual snapshot of 7-axis diagnostic |
| **Pipeline Summary** | Rollup from Job Search Tracker | Auto-calculated | Active applications, interviews scheduled, offers pending |
| **This Week's Actions** | Task list | Manually set from weekly review | 3-5 specific actions for the week |
| **Streak Counter** | Number | Auto-calculated from daily log | Days of consecutive engagement with the system (habit formation) |
| **Well-Being Indicator** | Color-coded | Weekly emotional check-in | Green/Yellow/Red based on last 2 weeks of energy + confidence scores |
| **Next Live Event** | Calendar embed | N1 community calendar | Next "La Sesion" or "El Taller" date and topic |
| **Quick Links** | Shortcuts | All sub-tools | One-click access to Story Bank, Resume Builder, Negotiation Calculator, Pipeline |

### 5-Phase Methodology Tracker

Each phase has its own page with specific activities, progress indicators, and research context.

#### Phase 1: Identificacion (Who Am I?)

**Core question:** "What identity am I transitioning FROM and what possible selves am I transitioning TOWARD?"

**Activities:**

| Activity | Template Provided | Research Basis | Completion Indicator |
|---|---|---|---|
| **Identity Stack mapping** | 3-section template: Heredada (what was given to me) / Construida (what I built) / Elegida (what I choose going forward) | Ibarra 2003 (Working Identity); Marcia 1966 (Identity Status Theory) | Each section has 3+ entries |
| **Values excavation** | Guided prompt: rank 15 professional values, then eliminate until 5 remain. These are your non-negotiables. | Kristof-Brown et al. 2005 (PO fit r=.44 with satisfaction); Schwartz Values Theory | Top 5 values defined |
| **Possible selves inventory** | "Write 3 versions of your professional life 2 years from now. One safe, one ambitious, one unexpected." | Markus & Nurius 1986 (Possible Selves: the cognitive components of hopes and fears that motivate action) | 3 possible selves written |
| **"Who am I without my title?" prompt** | Guided journal entry: "If your job title disappeared tomorrow, how would you describe yourself to a stranger?" | Super 1980 (career development is self-concept implementation); Jahoda 1982 (status as most important latent function of employment) | Completed |
| **Grief inventory (if applicable)** | Checklist of losses: income, routine, status, colleagues, purpose, identity. "Which of these am I grieving?" | Kubler-Ross applied to career; Jahoda 1982 (5 latent deprivation functions); McKee-Ryan et al. 2005 | Completed if applicable |

#### Phase 2: Diagnostico (Where Am I?)

| Activity | Template | Research Basis |
|---|---|---|
| **Complete Compass Full** | Linked Compass diagnostic | Savickas (4 Cs); Bandura (self-efficacy); Gati (CDDQ) |
| **Market intelligence scan** | Template: target industries, target companies (10-20), growth signals, risk signals | Ghost job awareness (18-27%); industry-specific hiring rates |
| **Skills audit** | List current skills → map to market demand → identify gaps → create learning plan | Deming & Noray 2020: STEM premium declines 50%+ in first decade |
| **Network audit** | Map all contacts: allies, dormant, bridges. Identify gaps. | Strategic networking = 23% response rate vs. 2.1% for mass-apply |
| **Financial runway calculation** | Monthly expenses x months of savings = runway. Runway determines pace and risk tolerance. | Mani et al. 2013: financial stress reduces cognitive function by 13 IQ points. Short runway = tunneling risk. |

#### Phase 3: Trabajo (Execute)

| Activity | Template | Research Basis |
|---|---|---|
| **Resume optimization** | CV Audit Tool (linked) | All Stage 1 research |
| **STAR Story Bank** | Interview Prep System -- Story Bank (linked) | STAR: 30-50% pass rate improvement |
| **Application pipeline** | Job Search Tracker (linked) | Conversion metrics, follow-up automation |
| **Interview practice** | Mock interview rubric + practice log (linked) | 5+ practices = 2x pass rate (interviewing.io) |
| **Negotiation prep** | Negotiation Calculator (linked) | 18.83% average gain; precise numbers |

#### Phase 4: Retroalimentacion (What Happened?)

| Activity | Template | Research Basis |
|---|---|---|
| **Weekly review** | Weekly Review Template from Job Search Tracker | Van Hooft et al. 2021: self-regulation > intensity |
| **Interview debrief** | Post-interview form: What went well? What was surprising? What would I change? What did I learn about them? | Locke & Latham (goal-setting: feedback is one of 5 principles) |
| **Rejection analysis** | Categorize: resume-stage? screen-stage? interview-stage? Identify patterns. | Systemic vs. personal: if resume response rate <3%, the issue is resume/targeting. If screen pass rate <25%, the issue is screen performance. |
| **Emotional check-in** | Weekly well-being survey (linked from tracker) | Self-efficacy erosion prevention |

#### Phase 5: Reinicio (Adjust)

| Activity | Template | Research Basis |
|---|---|---|
| **Strategy adjustment** | Based on Phase 4 data: What is the bottleneck stage? Change one variable at a time and measure. | Scientific method applied to job search |
| **Compass retake** | Quarterly Compass Full retake with trend comparison | Track growth across 7 axes over time |
| **Phase transition decision** | "Am I ready to move to the next phase or do I need to repeat?" Decision criteria provided per phase. | Bridges Transition Model: don't rush through the Neutral Zone |

### Identity Journal Prompts

**Research basis:** Ibarra (2003) -- career transition requires narrative reconstruction. Markus & Nurius (1986) -- possible selves are the cognitive components of motivation. Super (1980) -- career development is self-concept implementation. The journal is not therapy -- it is structured reflection that builds identity clarity over time.

**Monthly prompt rotation (12 prompts, one per month, cycling):**

| Month | Prompt | Construct Addressed |
|---|---|---|
| 1 | "Escribe la historia de como llegaste a tu carrera actual. ?La elegiste o te eligio a vos?" | Identity foreclosure vs. achievement (Marcia 1966) |
| 2 | "Describe tu dia ideal de trabajo en 2 anos. No te limites a lo que parece realista." | Possible selves -- hoped-for self (Markus & Nurius 1986) |
| 3 | "?Que version de vos mismo(a) profesional te da miedo ser? ?Por que?" | Possible selves -- feared self (Markus & Nurius 1986) |
| 4 | "Escribe una carta a tu yo de hace 5 anos. ?Que le dirias sobre su carrera?" | Narrative reconstruction (Ibarra 2003) |
| 5 | "?Cuales son las 3 cosas que tu familia espera de tu carrera? ?Cuales son las 3 que vos queres?" | Autonomy vs. familism (Fouad et al. 2016; Krys et al. 2022) |
| 6 | "Lista 10 momentos en los que sentiste 'flow' en tu trabajo. ?Que tienen en comun?" | Intrinsic motivation (Deci & Ryan 2000) |
| 7 | "?Con que logro profesional no te dan credito ni a vos mismo(a)?" | Impostor phenomenon (Clance & Imes 1978; Bravata et al. 2020) |
| 8 | "Si el dinero no fuera un factor, ?que harias con tu tiempo profesional?" | Values clarification; extrinsic vs. intrinsic motivation |
| 9 | "Describe a la persona que queres ser profesionalmente, no el puesto que queres tener." | Identity vs. role (Super 1980) |
| 10 | "?Que consejo le darias a alguien en tu misma situacion? Ahora darte ese consejo a vos mismo(a)." | Self-compassion + self-efficacy building (Solomon paradox) |
| 11 | "Lista 5 cosas que haces bien que no aparecen en tu CV." | Skill recognition beyond formal credentials |
| 12 | "Escribe tu 'bio profesional' en 3 versiones: actual, en 1 ano, en 3 anos." | Possible selves trajectory (Markus & Nurius 1986) |

### Decision Matrix for Career Options

**Research basis:** Schwartz 2004 (maximizers secure 20% higher salaries but feel less satisfied); Gati 1996 (3 categories of career decision-making difficulties); Simon 1955 (bounded rationality -- career decisions exceed human computational capacity).

**Template structure:**

| Criterion | Weight (1-5) | Option A | Option B | Option C |
|---|---|---|---|---|
| Values alignment | [user-set] | [1-5] | [1-5] | [1-5] |
| Financial impact (immediate) | [user-set] | [1-5] | [1-5] | [1-5] |
| Financial trajectory (3-year) | [user-set] | [1-5] | [1-5] | [1-5] |
| Learning and growth | [user-set] | [1-5] | [1-5] | [1-5] |
| Identity alignment ("Does this feel like me?") | [user-set] | [1-5] | [1-5] | [1-5] |
| Risk level | [user-set] | [1-5] | [1-5] | [1-5] |
| Family/environment support | [user-set] | [1-5] | [1-5] | [1-5] |
| Market demand | [user-set] | [1-5] | [1-5] | [1-5] |
| Energy required vs. energy available | [user-set] | [1-5] | [1-5] | [1-5] |
| **Weighted Total** | | [auto] | [auto] | [auto] |

**Prompt after completing the matrix:**
> "Mira los resultados. ?Tu instinto esta de acuerdo o en desacuerdo con los numeros? Si estan en conflicto, eso es informacion importante -- tu instinto puede estar captando algo que el analisis no mide, o puede estar reflejando miedo al cambio (37.6% de las personas que aceptan contra-ofertas citan el 'miedo al cambio' como razon). Escribe 2 oraciones sobre por que los numeros y tu instinto difieren."

### Financial Runway Calculator

**Research basis:** Mani et al. 2013 (Science): financial stress reduces cognitive function by the equivalent of 13-14 IQ points. Mullainathan & Shafir 2013: scarcity causes "tunneling" (focus on immediate needs at expense of strategic thinking) and a "bandwidth tax" that reduces effective intelligence by one standard deviation.

**Template:**

| Item | Monthly Amount |
|---|---|
| **Essential expenses** | |
| Rent/mortgage | [input] |
| Utilities | [input] |
| Food | [input] |
| Transportation | [input] |
| Insurance (health, mandatory) | [input] |
| Debt payments (minimum) | [input] |
| Dependents | [input] |
| **Total Essential** | [auto-sum] |
| | |
| **Available resources** | |
| Savings | [input] |
| Severance (if applicable) | [input] |
| Unemployment benefits | [input] |
| Partner income (if applicable) | [input] |
| Other income (freelance, rental, etc.) | [input] |
| **Total Available** | [auto-sum] |
| | |
| **Runway** | |
| Months of runway at essential-only spending | [Total Available / Total Essential] |
| Months of runway at current spending | [Total Available / current monthly spending] |

**Runway interpretation:**

| Runway | Risk Level | Strategy Implication |
|---|---|---|
| **6+ months** | Low financial pressure | You can afford to be strategic. Take time for identity work, targeted applications, skill building. Do NOT mass-apply just because you have time. |
| **3-6 months** | Moderate pressure | Be strategic but accelerate. Prioritize high-probability applications (referrals, tailored). Cut non-essential spending to extend runway. |
| **1-3 months** | High pressure | Financial stress is likely impairing your cognitive function (Mani et al. 2013). Prioritize income -- even interim/contract work -- to extend runway. Tunneling risk is high: you may accept a bad fit. Set a minimum threshold and commit to it. |
| **<1 month** | Critical | Stop optimizing for "the right career move" and focus on immediate income. Any employment extends your runway and reduces the cognitive bandwidth tax. You can resume strategic career work once financial pressure is reduced. This is not failure -- it is triage. |

### Network Mapping Tool

**Template structure:**

| Contact | Relationship Strength (1-5) | Industry | Company | Level | Last Contact | Can Refer? | Action Needed |
|---|---|---|---|---|---|---|---|
| [name] | [rate] | [industry] | [company] | [junior/mid/senior/exec] | [date] | [Yes/No/Maybe] | [Reach out / Maintain / Develop] |

**Network health metrics:**
- Total contacts mapped: ___
- Contacts in target industry: ___ (goal: 10+)
- Contacts who can refer: ___ (goal: 5+)
- Contacts reached in last 30 days: ___ (goal: 4+/month)
- Network diversity score: how many industries/companies/levels represented

### Weekly Ritual Template

**Every Sunday, 30-45 minutes. The habit that holds the system together.**

| Section | Time | Activity |
|---|---|---|
| **Review** | 10 min | Complete weekly metrics from Job Search Tracker. Complete emotional check-in. |
| **Reflect** | 10 min | What worked? What didn't? What did I learn? Write 3 sentences. |
| **Plan** | 10 min | Set 3-5 specific actions for next week with deadlines. Update "This Week's Actions" on dashboard. |
| **Recharge** | 5 min | Schedule 1 recovery activity (exercise, social, hobby). Not optional -- Jahoda 1982: latent functions of employment include activity, social contact, and purpose. You must deliberately recreate these during transition. |
| **Community** | 5 min | Post update in `#accountability` channel. Read 2 other members' updates. |

---

## 8. Cross-Tool Integration Map

How all 7 tools connect within the Career Change OS:

```
                    CAREER CHANGE OS (Master Dashboard)
                              |
              +---------------+---------------+
              |                               |
    COMPASS DIAGNOSTIC              JOB SEARCH TRACKER
    (Lite=Free / Full=Paid)         (Pipeline + Metrics)
              |                               |
    Identifies strengths/gaps       Tracks execution +
    across 7 axes                   conversion rates
              |                               |
              +----------- feeds into --------+
                              |
              +---------------+---------------+
              |               |               |
         CV AUDIT        INTERVIEW PREP   NEGOTIATION
          TOOL             SYSTEM         CALCULATOR
              |               |               |
    Optimizes resume    Builds stories    Maximizes offer
    for 7.4-second      for behavioral    value once
    scan window         rounds            offer arrives
              |               |               |
              +----------- all feed ---------+
                              |
                    WEEKLY RITUAL (every Sunday)
                    - Metrics review
                    - Emotional check-in
                    - Strategy adjustment
                    - Action planning
                    - Community accountability
```

**Data flow:**
1. Compass Diagnostic identifies priority axes → informs which tools to use first
2. CV Audit Tool optimizes resume → feeds into Job Search Tracker (higher conversion expected from optimized resume)
3. Interview Prep System builds story bank → used in interviews tracked in pipeline
4. Negotiation Calculator activates when pipeline reaches Offer stage
5. Job Search Tracker generates weekly metrics → fed into Weekly Ritual review
6. Weekly Ritual generates adjustments → update strategy across all tools
7. Emotional check-in (in tracker) → surfaces to Career Change OS dashboard as well-being indicator

---

## Citation Index for Tool Specifications

All research citations referenced in this document, organized by tool:

### Diagnostic (Compass Lite + Full)
- Bandura, A. (1977). Self-efficacy. *Psychological Review*, 84(2).
- Deci, E.L. & Ryan, R.M. (2000). Self-determination theory. *American Psychologist*, 55(1).
- Eden, D. & Aviram, A. (1993). Self-efficacy training to speed reemployment. *JAP*, 78(3).
- Fouad, N.A. et al. (2016). Family influence on career decision making. *Journal of Career Assessment*, 24(1).
- Gati, I., Krausz, M. & Osipow, S.H. (1996). A taxonomy of career decision-making difficulties. *JCP*, 43(4).
- Kanfer, R., Wanberg, C.R. & Kantrowitz, T.M. (2001). Job search and employment. *JAP*, 86(5).
- Kristof-Brown, A.L. et al. (2005). Consequences of fit at work. *Personnel Psychology*, 58.
- Krys, K. et al. (2022). Outside the "cultural binary." *Perspectives on Psychological Science*, 17(4).
- Luthans, F. et al. (2007). *Psychological Capital*. Oxford University Press.
- Mani, A. et al. (2013). Poverty impedes cognitive function. *Science*, 341(6149).
- Marcia, J.E. (1966). Ego-identity status. *JPSP*, 3(5).
- Markus, H. & Nurius, P. (1986). Possible selves. *American Psychologist*, 41(9).
- McKee-Ryan, F.M. et al. (2005). Unemployment and well-being meta-analysis. *JAP*, 90(1).
- Mullainathan, S. & Shafir, E. (2013). *Scarcity*. Times Books.
- Savickas, M.L. & Porfeli, E.J. (2012). Career Adapt-Abilities Scale. *JVB*, 80(3).
- Super, D.E. (1980). Life-span, life-space approach. *JVB*, 16(3).

### CV Audit
- Bertrand, M. & Mullainathan, S. (2004). *AER*, 94(4).
- Cultivated Culture. Resume analysis (n=125,000+).
- Kristal, A. et al. (2023). *Nature Human Behaviour* (n=9,022).
- Quillian, L. et al. (2017). *PNAS*, 114(41).
- ResumeGo. Resume length study (n=7,712).
- TheLadders (2018). Eye-tracking study.

### Interview Prep
- Behroozi, M. et al. (2020). Stress and technical interview performance. *ESEC/FSE* (RCT, n=48).
- Beilock, S.L. & Carr, T.H. (2005). *Psychological Science*, 16(2).
- interviewing.io platform data (2022-2025).
- Maurer, T.J. & Solamon, J.M. (2006). *Personnel Psychology*, 59.
- Spencer, S.J., Steele, C.M. & Quinn, D.M. (1999). *JESP*, 35(1).
- Steele, C.M. & Aronson, J. (1995). *JPSP*, 69(5).
- Swider, B.W. et al. (2011). *JAP*.
- Tross, S.A. & Maurer, T.J. (2008). n=144.

### Negotiation Calculator
- Barry, B. & Friedman, R. (1998). *JPSP*.
- Bowles, H.R., Babcock, L. & Lai, L. (2007). *OBHDP*, 103(1).
- Exley, C.L. & Kessler, J.B. (2022). *QJE*, 137(3).
- Hernandez, M. et al. (2019). *JAP*.
- Leibbrandt, A. & List, J.A. (2015). *Management Science*, 61(9).
- Mason, M. et al. (2013). *JESP*.
- PayScale (2021). Salary survey.
- Thorsteinson, T.J. (2021). *J. Theoretical Social Psychology*.

### Job Search Tracker
- Gem 2025 Recruiting Benchmarks Report.
- Greenhouse 2024 (n=2,500).
- Kanfer, R. et al. (2001). Meta-analysis.
- Van Hooft, E.A.J. et al. (2021). *JAP*, 106(5).
- Wanberg, C.R. et al. (2012). *Personnel Psychology*, 65(4).

### Career Change OS
- Bridges, W. (1991). *Managing Transitions*.
- Caplan, R.D. et al. (1989). JOBS Program. *JAP*, 74(5).
- Ibarra, H. (2003). *Working Identity*. Harvard Business School Press.
- Jahoda, M. (1982). *Employment and Unemployment*. Cambridge University Press.
- Locke, E.A. & Latham, G.P. (1990). *A Theory of Goal Setting*.
- Schwartz, B. (2004). *The Paradox of Choice*.
- Simon, H.A. (1955). *QJE*, 69(1).
- Vinokur, A.D. et al. (1991). JOBS Program follow-up. *JAP*, 76(2).

---

*Tool specifications compiled March 2026. Every feature traces to at least one named study. Where research is weak or contested, confidence levels are noted. These specs are designed for implementation in Notion (tools 4-7) and Typeform/custom web (tools 1-3).*
