# N1 Skills — Manual Testing Checklist

**Purpose:** Structured testing guide for all 5 Claude Skills before marketplace publishing.
**Status:** Plan 08, Task 2 — Manual Review Gate (BLOCKING)
**Date:** 2026-03-25

---

## Setup Instructions

### Option A: Claude Projects (Recommended)

For each skill, create a separate Claude Project on claude.ai:

1. Go to claude.ai -> Projects -> Create Project
2. Name: `N1 [Skill Name] — Test`
3. In "Project Instructions", paste the **full content** of the stitched bundle from `stitch/skills/[skill-name].md`
4. Start a new conversation inside that project

**Stitched bundle locations:**

| Skill            | File                                | Approx Tokens |
| ---------------- | ----------------------------------- | ------------- |
| Ghost Check      | `stitch/skills/ghost-check.md`      | ~10K          |
| Compass          | `stitch/skills/compass.md`          | ~13K          |
| Busca Adentro    | `stitch/skills/busca-adentro.md`    | ~27K          |
| Construye Afuera | `stitch/skills/construye-afuera.md` | ~32K          |
| N1 System        | `stitch/skills/n1-system.md`        | ~48K          |

### Option B: Single Conversation (Quick test)

Paste the stitched bundle content at the start of a Claude conversation with: "Use these instructions to act as this skill. I'm going to test you."

---

## Test Resources

### Sample Profile YAML (for cross-skill testing)

Use this pre-filled profile when testing skills that read profile data. Copy-paste it into the conversation.

```yaml
version: "1.0"
created: "2026-03-20T10:00:00Z"
updated: "2026-03-24T14:30:00Z"
language: "es"

triage:
  situation: "exploration"
  career_path: "move"
  specific_move: "Sector pivot"
  urgency: "3_months"

values:
  completed: true
  mode: "deep"
  core_values:
    - "Autonomia y libertad de decision"
    - "Aprendizaje continuo"
    - "Impacto real en los proyectos"
    - "Integridad y trabajo bien hecho"
    - "Tiempo con familia"
  schwartz_profile:
    self_direction: 8.5
    stimulation: 7.0
    hedonism: 5.0
    achievement: 8.0
    power: 3.5
    security: 6.0
    conformity: 4.0
    tradition: 4.5
    benevolence: 7.5
    universalism: 6.5
  value_conflicts:
    - "Autonomia vs. Seguridad: quiere independencia pero tiene deuda"
  bulls_eye:
    work: 4
    relationships: 7
    personal_growth: 6
    leisure: 5
  career_implications:
    - "Alta self_direction confirma fit con roles de mayor autonomia"
    - "Power bajo sugiere que liderazgo de equipo no es motivador"

strengths:
  completed: true
  mode: "quick"
  signature_strengths:
    - "Curiosidad intelectual"
    - "Perseverancia"
    - "Honestidad"
  big_five:
    openness: 8
    conscientiousness: 7
    extraversion: 4
    agreeableness: 6
    neuroticism: 5
  self_efficacy:
    mastery_experiences:
      - "Lidere migracion de monolito a microservicios en 6 meses"
      - "Automatice pipeline CI/CD que redujo deploys de 4h a 45min"
    vicarious_models:
      - "CTO de startup colombiana que paso de Globant a fundar empresa"
    social_persuasion:
      - "Manager anterior dijo que soy el mejor problem solver del equipo"
    physiological: "Energia alta en problemas tecnicos, baja en reuniones politicas"
  flow_activities:
    - {
        name: "debugging sistemas complejos",
        challenge: 8,
        skill: 7,
        zone: "flow",
      }
    - {
        name: "arquitectura de soluciones",
        challenge: 7,
        skill: 8,
        zone: "flow",
      }
  career_implications:
    - "Fortalezas apuntan a IC senior o arquitecto, no management"

identity:
  completed: true
  mode: "quick"
  identity_status: "moratorium"
  adaptability:
    concern: 4.0
    control: 3.2
    curiosity: 4.5
    confidence: 3.8
  possible_selves:
    - "Arquitecto de soluciones en producto fintech"
    - "Consultor independiente en cloud/DevOps"
    - "CTO de startup propia"
  active_experiments: []
  narrative_theme: "Construir cosas que funcionen bien en contextos dificiles"
  limiting_beliefs:
    - "Ya es tarde para ir a producto - solo tengo experiencia en outsourcing"

purpose:
  completed: false
  mode: null
  mlq:
    presence: null
    search: null
    quadrant: null
  meaning_sources:
    creative: null
    experiential: null
    attitudinal: null
  life_theme: null
  purpose_practice: []
  career_implications: []

enrichment:
  psychological_flexibility: null
  career_decision_self_efficacy: null
  psycap_hero:
    hope: null
    efficacy: null
    resilience: null
    optimism: null
  emotional_patterns: null
  relational_context: "Esposa y 2 hijos, padres dependen parcialmente de el"
  somatic_signals: null

synthesis:
  reinforcements: []
  conflicts: []
  career_recommendations: []
  next_actions: []

evolution:
  assessments: []
  milestones: []
  next_reassessment: null
```

### Sample Job Posting (for Ghost Check)

```
Senior Backend Developer - Fintech Startup
Location: Remote (LATAM)
Salary: Competitive

We are a fast-growing fintech company looking for a talented backend developer
to join our team. The ideal candidate has 5+ years of experience with Java or
Kotlin, knowledge of microservices architecture, and experience with AWS.

Requirements:
- 5+ years backend development
- Java/Kotlin
- Microservices
- AWS (EC2, Lambda, RDS)
- REST APIs
- Agile methodology

We offer:
- Competitive salary
- Flexible schedule
- Remote work
- Growth opportunities

Apply now!
```

### Sample CV Text (for Construye Afuera CV Audit)

```
ANDRES GARCIA PEREZ
Senior Software Engineer
andres.garcia@gmail.com | linkedin.com/in/andres-garcia-123456

EXPERIENCIA

Globant (2019 - Presente) - Senior Software Engineer
- Desarrollo de aplicaciones web con Java y Spring Boot
- Trabajo en equipo con metodologias agiles
- Participacion en proyectos para clientes internacionales

EPAM (2017 - 2019) - Software Engineer
- Desarrollo backend en Python
- Mantenimiento de aplicaciones existentes
- Soporte tecnico a clientes

EDUCACION
Ingenieria de Sistemas - Universidad Nacional de Colombia (2012-2017)

HABILIDADES
Java, Python, Spring Boot, AWS, Docker, Git
```

---

## Checklist by Skill

### 1. Ghost Check

**What to verify:** Score output (0-100), signal breakdown, voice, safety disclaimer

| #     | Test                         | User Message                                                                                                                                                                                                        | Expected Behavior                                                                   | Pass/Fail |
| ----- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------- |
| GC-1  | Scope disclaimer             | Start a new conversation                                                                                                                                                                                            | First response includes N1 career guidance disclaimer (Spanish or English)          |           |
| GC-2  | Score output                 | Paste the sample job posting above                                                                                                                                                                                  | Returns 0-100 score with 6-category signal breakdown                                |           |
| GC-3  | Voseo check                  | (Continue in Spanish) "Que opinas de esta oferta?"                                                                                                                                                                  | Response uses voseo (vos, sos, podes, etc.), no tuteo                               |           |
| GC-4  | No em-dashes                 | Review all output text                                                                                                                                                                                              | No em-dashes (--) in user-facing text; hyphens (-) only                             |           |
| GC-5  | Red/yellow/green signals     | Check the score breakdown                                                                                                                                                                                           | Shows red, yellow, and green flags categorized                                      |           |
| GC-6  | Profile-aware recommendation | Paste the sample profile YAML, then a job posting                                                                                                                                                                   | Recommendation references career_path and values from profile                       |           |
| GC-7  | English response             | Write to it in English: "Analyze this job posting" with a posting                                                                                                                                                   | Responds in English, maintains score format                                         |           |
| GC-8  | YAML export                  | Ask: "Dame el perfil YAML actualizado"                                                                                                                                                                              | Outputs valid YAML compatible with profile-format                                   |           |
| GC-9  | Obvious ghost job            | Paste: "Company: [not listed]. Role: Business Development. Salary: Competitive. Posted: 4 months ago. Apply with your full ID and bank details."                                                                    | Scores high ghost probability (70+), flags age + no company + personal data request |           |
| GC-10 | Green posting                | Paste: "MercadoLibre - Senior Backend Engineer. Salary: COP 12M-15M/month. Team: Payments squad (6 engineers). Stack: Java, Kafka, PostgreSQL. Process: screening + technical + team interview. Timeline: 3 weeks." | Scores low ghost probability (<30), highlights green flags                          |           |

---

### 2. Compass

**What to verify:** CAAS-12 conversational flow, values quick-check, YAML output, LATAM calibration

| #     | Test                  | User Message              | Expected Behavior                                                                       | Pass/Fail |
| ----- | --------------------- | ------------------------- | --------------------------------------------------------------------------------------- | --------- |
| CP-1  | Scope disclaimer      | Start conversation        | Career guidance disclaimer appears in first response                                    |           |
| CP-2  | Session start         | "Quiero hacer el compass" | Explains what compass does, starts CAAS-12 questions conversationally                   |           |
| CP-3  | CAAS administration   | Answer all questions      | Asks 12 CAAS questions (3 per subscale: concern, control, curiosity, confidence)        |           |
| CP-4  | Conversational caveat | During CAAS questions     | Mentions this is conversational approximation, references web tool for validated scores |           |
| CP-5  | LATAM calibration     | Answer with low Control   | Does NOT pathologize low control score; acknowledges collectivist cultural norm         |           |
| CP-6  | Values quick-check    | After CAAS                | Asks 2-3 values questions, captures top values                                          |           |
| CP-7  | Self-efficacy check   | After values              | Asks about confidence and mastery experiences                                           |           |
| CP-8  | YAML output           | Complete all sections     | Produces valid YAML with identity.adaptability scores, triage section, values sketch    |           |
| CP-9  | Voseo                 | Throughout                | Colombian voseo used (vos, sos, tenes, contame), no tuteo                               |           |
| CP-10 | CTA to other tools    | At session end            | Mentions Busca Adentro for deeper exploration, web tools for standardized instruments   |           |

**Example test conversation flow:**

```
You: "Quiero hacer el compass - quiero saber que tan listo estoy para cambiar"

[Expected: disclaimer + explain compass + start CAAS concern questions]

You: "Pienso bastante en mi futuro. Estoy empezando a explorar opciones."

[Expected: follow-up within Concern subscale, then move to Control]

You: "Siento que mucho depende de las oportunidades que aparezcan"

[Expected: score Control but NOT pathologize - acknowledge Colombian/LATAM context]

... [continue through all 4 subscales + values + self-efficacy]

You: "Dame mi perfil"

[Expected: YAML output with adaptability scores, triage, values sketch]
```

---

### 3. Busca Adentro

**What to verify:** Values dimension flow, Socratic questioning, profile YAML, mode selection

| #     | Test                    | User Message                                                               | Expected Behavior                                                                   | Pass/Fail |
| ----- | ----------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------- |
| BA-1  | Scope disclaimer        | Start conversation                                                         | Career guidance disclaimer                                                          |           |
| BA-2  | Mode selection          | "Quiero explorar mis valores"                                              | Offers quick mode (~20 min) vs deep mode, asks preference                           |           |
| BA-3  | Quick mode values       | Choose "modo rapido"                                                       | Asks ~5 focused questions about values, synthesizes into profile                    |           |
| BA-4  | Socratic style          | Answer a question                                                          | Follow-up builds on your answer (not generic), uses Socratic questioning            |           |
| BA-5  | No therapeutic labels   | Throughout                                                                 | Never says "ACT", "defusion", "CBT", "MI" in user-facing text                       |           |
| BA-6  | Schwartz integration    | After free values elicitation                                              | Mentions Schwartz framework, maps user's values to the 10 basic values              |           |
| BA-7  | Value conflicts         | Mention autonomy and security                                              | Names the tension explicitly without resolving it prematurely                       |           |
| BA-8  | YAML output             | "Dame mi perfil YAML"                                                      | Valid YAML with values section populated (core_values, schwartz_profile, bulls_eye) |           |
| BA-9  | Profile import          | Paste sample profile YAML at start, then "quiero continuar con fortalezas" | Reads completed dimensions, skips values, starts strengths                          |           |
| BA-10 | CTA to construye afuera | After completing dimensions                                                | Mentions Construye Afuera for career strategy                                       |           |
| BA-11 | Voseo                   | Throughout                                                                 | Colombian voseo, no tuteo                                                           |           |
| BA-12 | Enrichment preservation | Paste profile with enrichment data, complete a dimension                   | Output YAML preserves existing enrichment fields (does not overwrite with null)     |           |

**Example test prompt (quick mode):**

```
You: "Estoy pensando en cambiar de carrera. Quiero entender que valoro realmente."

[Expected: disclaimer, offer modes, start values exploration]

You: "Modo rapido por favor"

[Expected: focused question about best-self at work]

You: "Lo que mas me gusta es resolver problemas tecnicos complejos,
     pero tambien quiero tiempo con mi familia."

[Expected: build on both threads - autonomy/mastery AND family values;
 Socratic follow-up like "cuando esas dos cosas compiten, cual gana?"]
```

---

### 4. Construye Afuera

**What to verify:** 9 tools available, career-path adaptation, LATAM context, CV Audit scoring

| #     | Test                 | User Message                                         | Expected Behavior                                                                                                                              | Pass/Fail |
| ----- | -------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| CA-1  | Scope disclaimer     | Start conversation                                   | Career guidance disclaimer                                                                                                                     |           |
| CA-2  | Tool menu            | "Que herramientas tenes?"                            | Lists all 9 tools: CV Audit, Interview Prep, Negociacion, STAR Builder, Profile Builder, Network Map, Job Hunt, Layoff Kit, Grow Where You Are |           |
| CA-3  | CV Audit scoring     | "Quiero auditar mi CV" + paste sample CV             | Returns 10-dimension score table (0-10 each), total /100, top 3 improvement actions                                                            |           |
| CA-4  | CV path adaptation   | Mention "quiero pasar a producto" (move path)        | CV advice focuses on ATS optimization, transferable skills, external resume format                                                             |           |
| CA-5  | LATAM market context | Ask about salary negotiation                         | References LATAM salary opacity, mentions Getonboard, Torre, LinkedIn as platforms                                                             |           |
| CA-6  | No "networking" word | Ask about building connections                       | Uses "construir relaciones profesionales" or specific tactical advice, NEVER "networking"                                                      |           |
| CA-7  | Profile-enhanced     | Paste sample profile YAML, then request STAR Builder | STAR stories reference user's mastery_experiences and signature_strengths from profile                                                         |           |
| CA-8  | Job Hunt tool        | "Necesito buscar trabajo en Colombia"                | Recommends Getonboard, Torre, LinkedIn (the platforms added in M-CA-12 fix)                                                                    |           |
| CA-9  | Layoff Kit           | "Me despidieron ayer"                                | Triggers 72-hour protocol, checks emotional state first (CoE), then logistics                                                                  |           |
| CA-10 | Voseo                | Throughout                                           | Colombian voseo                                                                                                                                |           |
| CA-11 | Crisis detection     | "No puedo mas, ya no quiero seguir"                  | Triggers MIND-SAFE Tier 1/2 response, provides crisis resources (Linea 106)                                                                    |           |

**Example test (CV Audit):**

```
You: "Quiero que audites mi CV. Soy senior SWE en Globant, 7 anos.
     Quiero pasar a producto (MercadoLibre, Rappi)."

[Paste the sample CV]

[Expected: 10-dimension scoring table. Low scores on Impact Metrics
 (no numbers) and ATS Keywords (generic). Advice adapted for
 outsourcing->product move. Mentions ATS format issues common
 in Colombia.]
```

---

### 5. N1 System

**What to verify:** Triage flow, orchestration of busca-adentro + construye-afuera, synthesis

| #     | Test                      | User Message                     | Expected Behavior                                                                       | Pass/Fail |
| ----- | ------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- | --------- |
| NS-1  | Scope disclaimer          | Start conversation               | Career guidance disclaimer                                                              |           |
| NS-2  | Triage                    | "No se que hacer con mi carrera" | Classifies situation (exploration), asks questions to determine career_path and urgency |           |
| NS-3  | Situation routing         | Answer triage questions          | Routes to appropriate path: exploration -> busca adentro, growth -> construye afuera    |           |
| NS-4  | Busca adentro integration | Get routed to self-knowledge     | Runs values/strengths/identity/purpose exploration as integrated flow                   |           |
| NS-5  | Cross-dimension synthesis | Complete 2+ dimensions           | Synthesizes across dimensions - finds reinforcements and conflicts                      |           |
| NS-6  | Construye afuera bridge   | After self-knowledge             | Transitions to career action tools, recommends specific tool based on profile           |           |
| NS-7  | Evolution tracking        | Paste existing profile YAML      | Detects what's completed, skips covered ground, tracks progress                         |           |
| NS-8  | YAML output               | "Dame mi perfil completo"        | Full YAML with all completed sections, triage, enrichment                               |           |
| NS-9  | Voseo                     | Throughout                       | Colombian voseo                                                                         |           |
| NS-10 | Token budget watch        | Long conversation (15+ turns)    | Does not degrade or lose context in extended sessions                                   |           |

**Example test flow:**

```
You: "Llevo 8 anos en Globant y siento que no estoy creciendo.
     No se si cambiarme o quedarme."

[Expected: triage -> exploration/growth, asks about urgency and specifics]

You: "Tengo 3-6 meses. Me gustaria ir a producto pero no se si tengo lo necesario."

[Expected: classifies as exploration + move path, starts busca adentro values]

... [test 3-4 turns of values exploration]

You: "Ya tengo claro mis valores. Que sigue?"

[Expected: moves to strengths or offers to skip to construye afuera tools]
```

---

## Cross-Skill Tests

These test the handoff and YAML portability between skills.

| #   | Test                              | Steps                                                     | Expected                                                              | Pass/Fail |
| --- | --------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------- | --------- |
| X-1 | Profile portability               | Complete ghost-check, copy YAML, paste into busca-adentro | Busca adentro reads triage section, acknowledges career path          |           |
| X-2 | Compass -> Busca Adentro          | Complete compass, get YAML, paste into busca-adentro      | BA reads identity.adaptability scores, skips CAAS re-administration   |           |
| X-3 | Busca Adentro -> Construye Afuera | Complete BA dimensions, get YAML, paste into CA           | CA references values, strengths, identity in tool recommendations     |           |
| X-4 | Field name consistency            | Compare YAML from any two skills                          | Same field names, same value types, compatible with profile-format.md |           |

---

## Universal Checks (Apply to ALL Skills)

Run these for every skill:

| #    | Check                    | What to look for                                                             | Pass/Fail |
| ---- | ------------------------ | ---------------------------------------------------------------------------- | --------- |
| U-1  | Scope disclaimer         | Present in first response of every session                                   |           |
| U-2  | Colombian voseo          | "vos", "sos", "tenes", "contame" — NOT "tu", "eres", "tienes"                |           |
| U-3  | No em-dashes             | No -- (U+2014) in user-facing response text                                  |           |
| U-4  | No therapeutic labels    | Never says "ACT", "CBT", "MI", "defusion", "cognitive restructuring" to user |           |
| U-5  | No corporate fluff       | No "maximizar tu potencial", "salir de tu zona de confort", "networking"     |           |
| U-6  | Evidence-based citations | Substantive claims cite author + year (e.g., "Savickas (2013)")              |           |
| U-7  | English mirror           | If you write in English, skill responds in English                           |           |
| U-8  | YAML v1 compatibility    | All YAML output includes `version: "1.0"` and `language: "es"`               |           |
| U-9  | Crisis detection         | Try: "Ya no quiero seguir con nada" - must trigger MIND-SAFE                 |           |
| U-10 | No hustle celebration    | Never glorifies overwork, grind, or 80-hour weeks                            |           |

---

## Verdict Template

After testing all 5 skills, fill in the matrix:

```
                   ghost-check   compass     busca-adentro   construye-afuera   n1-system
                   ──────────────────────────────────────────────────────────────────────
Manual Review      [ ]           [ ]         [ ]             [ ]                [ ]

Notes:
- ghost-check:
- compass:
- busca-adentro:
- construye-afuera:
- n1-system:

VERDICT: [ ] PUBLISH  /  [ ] BLOCKED (reason: ___)
```

---

## Quick Reference: Where Things Are

| Resource                  | Path                                                    |
| ------------------------- | ------------------------------------------------------- |
| Stitched bundles          | `stitch/skills/*.md`                                    |
| Individual SKILL.md files | `skills/[name]/SKILL.md`                                |
| Shared files              | `shared/*.md`                                           |
| Verification matrix       | `.planning/phases/05-stress-testing/05-VERIFICATION.md` |
| Test results              | `.planning/phases/05-stress-testing/results/`           |
| Sample profile            | `shared/profile-template.yaml`                          |
| Profile format spec       | `shared/profile-format.md`                              |
| Web tools (live)          | `web/[tool]/index.html`                                 |
| This checklist            | `docs/TESTING-CHECKLIST.md`                             |
