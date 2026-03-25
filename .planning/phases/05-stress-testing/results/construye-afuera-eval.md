# Construye Afuera — Eval Harness Results (24 tests)

**Skill:** `skills/construye-afuera/SKILL.md`
**Eval date:** 2026-03-25
**Tester:** Automated static analysis against skill source files
**Files examined:**

- `skills/construye-afuera/SKILL.md`
- `skills/construye-afuera/references/assessment-scoring.md`
- `skills/construye-afuera/references/career-path-adaptations.md`
- `skills/construye-afuera/references/latam-market-context.md`
- `shared/voice-guide.md`
- `shared/safety-protocol.md`
- `shared/profile-format.md`

---

## Summary

**Structural tests:** 7/7 PASS
**Mechanics tests:** 16/17 PASS | 1/17 FAIL

**Total: 23/24 PASS**

**Gate verdict:** MARGINAL — 1 Major failure (M-CA-12) requires fix before publishing.

---

## Structural Tests (S-CA)

### S-CA-01

**Test:** All 8 files load on session start
**Evidence:** SKILL.md `reads:` block contains exactly 8 files:

1. `shared/prompting-stack.md`
2. `shared/voice-guide.md`
3. `shared/safety-protocol.md`
4. `shared/research-base.md`
5. `shared/profile-format.md`
6. `skills/construye-afuera/references/career-path-adaptations.md`
7. `skills/construye-afuera/references/latam-market-context.md`
8. `skills/construye-afuera/references/assessment-scoring.md`

The Instruction de carga section explicitly lists all 8 files with numbered instructions to load each using the Read tool. Session start includes scope disclaimer verbatim (Paso 2). Voseo throughout.
**Result:** PASS
**Severity if fail:** Critical

---

### S-CA-02

**Test:** Career path routing matches SKILL.md table
**Evidence:** SKILL.md contains explicit triage routing table in `<tool_menu>`:

| career_path | urgency: immediate                | urgency: 3-6 months                                      |
| ----------- | --------------------------------- | -------------------------------------------------------- |
| pause_reset | Layoff Response Kit → Negociación | CV Audit (gap narrative) → Profile Builder → Network Map |

For the test input (crisis + pause_reset + immediate), the table routes to "Layoff Response Kit → Negociación" — exactly matching expected output. Triage questions at Paso 3 capture situation, career_path, urgency.
**Result:** PASS
**Severity if fail:** Major

---

### S-CA-03

**Test:** All 9 tools individually accessible
**Evidence:** SKILL.md tool_menu section lists all 9 tools verbatim:

1. CV Audit — Revisión de hoja de vida en 10 dimensiones con puntaje y acciones
2. Interview Prep — Preparación para entrevistas con historias STAR y role-play
3. Negociación — Estrategia de negociación salarial o de contrato adaptada a tu situación
4. STAR Builder — Construcción de historias de logros listas para CV y entrevistas
5. Profile Builder — Optimización de perfil LinkedIn sección por sección
6. Network Map — Mapeo de contactos clave y templates de reconexión
7. Job Hunt — Estrategia de búsqueda: canales, empresas objetivo, plan semanal
8. Layoff Response Kit — Protocolo de 72 horas post-despido
9. Grow Where You Are — Mapa de oportunidades internas, caso de promoción, conversación con el manager

Each listed as individually accessible with "¿Con cuál querés empezar?"
**Result:** PASS
**Severity if fail:** Major

---

### S-CA-04

**Test:** Profile-enhanced mode references user data
**Evidence:** SKILL.md `<context_check>` section explicitly instructs:

- Extract `values.core_values` and `values.career_implications` → use to anchor career recommendations
- Extract `identity.narrative_theme` → use for LinkedIn narrative and CV
- "Con perfil: Alineá la narrativa del CV con values.career_implications, identity.narrative_theme, strengths.signature_strengths"

For CV Audit specifically: "Con perfil: Alineá la narrativa del CV con `values.career_implications`, `identity.narrative_theme`, `strengths.signature_strengths`."
**Result:** PASS
**Severity if fail:** Major

---

### S-CA-05

**Test:** Standalone mode delivers full value without profile
**Evidence:** SKILL.md explicitly handles both cases. Without profile: triage 3 questions captured as local context. CV Audit process steps don't require a profile — step 1 asks for CV text, step 2 for target role, step 3 applies 10 dimensions from assessment-scoring.md regardless of profile. Step 5 delivers "3 acciones concretas." The rubric in assessment-scoring.md is complete and self-contained.
**Result:** PASS
**Severity if fail:** Major

---

### S-CA-06

**Test:** LATAM market context reference instruction
**Evidence:** SKILL.md Job Hunt tool: "Contexto LATAM (ver `references/latam-market-context.md`): ATS comunes, dinámica de LinkedIn Easy Apply, mercado remoto para candidatos colombianos."
Negociación tool: "Contexto LATAM (ver `references/latam-market-context.md`): opacidad salarial, referencias de rango cuando estén disponibles, dinámicas del lado del empleador."
Profile Builder tool: "Contexto LATAM (ver `references/latam-market-context.md`): Estrategia de perfil en inglés vs español: depende del mercado objetivo."

latam-market-context.md is in the reads list. Multiple tools reference it explicitly.
**Result:** PASS
**Severity if fail:** Major

---

### S-CA-07

**Test:** Assessment scoring rubrics from assessment-scoring.md applied
**Evidence:** SKILL.md CV Audit process step 3: "Evaluá las 10 dimensiones de `references/assessment-scoring.md`: Impacto métrico, densidad ATS, coherencia narrativa, longitud/formato, headline/resumen, match de habilidades, alineación de valores, evidencia de fortalezas, calibración LATAM/cultural, contacto/CTA." Step 4: "Dá un puntaje por dimensión (0-10) y el total." assessment-scoring.md contains the full 10-dimension scoring guide with 0-10 scale per dimension.
**Result:** PASS
**Severity if fail:** Major

---

## Per-Tool Mechanics Tests (M-CA)

### M-CA-01

**Test:** CV Audit — structured score output with specific improvement categories
**Evidence:** SKILL.md CV Audit tool: "Evaluá las 10 dimensiones de references/assessment-scoring.md: Impacto métrico, densidad ATS, coherencia narrativa, longitud/formato, headline/resumen, match de habilidades, alineación de valores, evidencia de fortalezas, calibración LATAM/cultural, contacto/CTA. Dá un puntaje por dimensión (0-10) y el total. Priorizá 3 acciones concretas."

assessment-scoring.md includes a scoring summary template with table format showing all 10 dimensions with per-dimension scores and "Las 3 acciones de mayor impacto" section. Specific improvement actions are embedded per dimension (e.g., "Reescribí cada bullet con este formato: [Verbo de acción] + [Qué hiciste] + [Resultado medible]").
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-02

**Test:** CV Audit — profile-enhanced mode references actual values/strengths
**Evidence:** SKILL.md CV Audit: "Con perfil: Alineá la narrativa del CV con `values.career_implications`, `identity.narrative_theme`, `strengths.signature_strengths`." The context_check section details extraction of `values.core_values`, `values.career_implications`, `identity.narrative_theme` for use in all tools.
**Result:** PASS
**Severity if fail:** Minor

---

### M-CA-03

**Test:** CV Audit — LATAM norms (photo acceptable, format differences acknowledged)
**Evidence:** assessment-scoring.md Dimension 9 (Cultural Calibration) LATAM-specific note: "Photo: standard in Colombian CVs; omit for US/EU applications. Marital status, age, ID number: common in Colombian CVs; omit for US/EU (legal and cultural issue)." Dimension 4 (Length and Format) includes "LATAM-specific note: Two-column Canva/Word templates are extremely common in Colombia — these typically fail ATS. Flag this explicitly."

For a user asking if photo/cédula is acceptable in Colombia: the skill has instructions to calibrate per target market. For LATAM applications, photo and ID number are noted as standard (score 9-10 under cultural calibration). US/EU applications: omit.
**Result:** PASS
**Severity if fail:** Minor

---

### M-CA-04

**Test:** Interview Prep — 3+ STAR stories from user experience
**Evidence:** SKILL.md Interview Prep process: "Pedí descripción del rol o contexto de la entrevista → Identificá 3-5 preguntas más probables para ese rol/contexto → Construí respuestas STAR para cada una → Ofrecé role-play." STAR Builder section specifies: "Para cada historia, estructurá: Situación (1-2 oraciones), Tarea (qué te correspondía resolver), Acción (qué hiciste específicamente vos — no el equipo), Resultado (impacto medible)." "Entregá 3 historias pulidas, listas para pegar en CV o usar en entrevistas."
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-05

**Test:** Interview Prep — uses mastery_experiences as STAR seeds when profile available
**Evidence:** SKILL.md Interview Prep: "Con perfil: Generá historias STAR desde `strengths.self_efficacy.mastery_experiences`. Alineá con `values.core_values`." context_check also explicitly: "strengths.signature_strengths y strengths.self_efficacy.mastery_experiences → usá para construir historias STAR."
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-06

**Test:** Negotiate — LATAM salary opacity acknowledged
**Evidence:** SKILL.md Negociación tool: "Contexto LATAM (ver `references/latam-market-context.md`): opacidad salarial, referencias de rango cuando estén disponibles, dinámicas del lado del empleador."

latam-market-context.md Section 1: "Salary data in Colombia and LATAM is structurally opaque." Explicit instruction: "Acknowledge this explicitly: When the user asks for salary ranges, say: 'Los datos de mercado en Colombia son opacos — te doy los rangos más confiables disponibles, pero la mejor fuente es siempre una conversación con un recruiter o colega que esté en el mercado ahora.'"

SKILL.md also includes citation: "Babcock & Laschever (2003): negociar el primer salario tiene un impacto acumulado de $500K-$1M+ en ingresos de vida. La opacidad salarial en LATAM hace que este impacto sea aún mayor para quienes sí negocian."
**Result:** PASS (LATAM opacity acknowledged explicitly as structural in latam-market-context.md; Negociación tool instructs to reference this file)
**Severity if fail:** Major

---

### M-CA-07

**Test:** Negotiate — specific numeric anchors, not generics
**Evidence:** SKILL.md Negociación "Regla crítica: Nunca dés un número sin que el usuario primero aporte sus datos de mercado." Process step 4: "Dá el script o los mensajes concretos que puede usar." career-path-adaptations.md Tool 3 (move path): "Counter-offer message (email template); total comp comparison table; walkaway point calculation." For the test scenario (user provides $12M offer, believes market is $15-17M), the skill rule is to never give numbers without user data — user provides data — so skill would then anchor at user's upper range ($17M), provide conversation script, and calculate walkaway.
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-08

**Test:** STAR Builder — explicit S/T/A/R structure, all 4 components specific
**Evidence:** SKILL.md STAR Builder process: "Para cada historia, estructurá:

- Situación: contexto en 1-2 oraciones
- Tarea: qué te correspondía resolver
- Acción: qué hiciste específicamente vos (no 'el equipo')
- Resultado: impacto medible (números, %, tiempo, dinero, personas impactadas)"

"Check de calidad: cada historia debe tener un resultado cuantificado o impacto claro." The explicit instruction to probe for specifics aligns with the test expectation that vague input ("lo rescaté y entregué a tiempo") will be probed before being structured.
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-09

**Test:** Profile Builder — LinkedIn About uses narrative_theme
**Evidence:** SKILL.md Profile Builder: "Con perfil: Alineá la sección About con `identity.narrative_theme` + `purpose.life_theme`." context_check section: "identity.narrative_theme y identity.possible_selves → usá para narrativa de LinkedIn y CV." career-path-adaptations.md Tool 5: "LinkedIn sections: Headline (internal positioning), About (value to the org), Experience (internal impact bullets)."
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-10

**Test:** Profile Builder — 3+ headline variations, no cliches
**Evidence:** SKILL.md Profile Builder process step 3: "Para Headline: dá 3 opciones con diferentes ángulos (técnico, aspiracional, valor específico)." voice_rules section prohibits "agregar valor", "maximizar tu potencial" — the same anti-cliche discipline applies to generated output. assessment-scoring.md Dimension 5 (Headline/Professional Summary) explicitly lists "Generic phrases to avoid: 'Profesional con amplia experiencia', 'Busco una empresa donde pueda desarrollarme', 'Trabajo en equipo', 'Orientado a resultados'."
**Result:** PASS
**Severity if fail:** Minor

---

### M-CA-11

**Test:** Network Map — specific outreach targets, not generic "build your network". Anti-networking prohibition confirmed.
**Evidence 1 (anti-networking prohibition):** Searched SKILL.md for the word "networking" — result: 0 occurrences. Word is completely absent. voice_rules section: "NUNCA decir la palabra prohibida para contactos → usá 'construir relaciones profesionales' o dá táctica específica." Network Map tool framing: "Framing anti-corporativo obligatorio: 'No estamos armando una lista de contactos para explotar — estamos identificando conversaciones valiosas con personas que te conocen y cuyo criterio respetás.' Nunca usés la palabra prohibida con el usuario."

**Evidence 2 (specific outreach targets):** Network Map process: "Pedí al usuario que liste 10-15 personas con quienes ha trabajado o estudiado (nombre + relación). Clasificalos: vínculo fuerte, vínculo débil, vínculo dormido. Identificá 3-5 personas específicas para reconectar según el career_path. Para cada persona: dá un template de mensaje adaptado a la relación y el objetivo."

**Confirmed:** "networking" is absent from SKILL.md. Specific outreach targets and templates are required per instructions.
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-12

**Test:** Job Hunt — LATAM platforms named (Getonboard, Torre, LinkedIn LATAM)
**Evidence searched:** SKILL.md Job Hunt tool, latam-market-context.md Section 6 (Remote Work platforms), career-path-adaptations.md Tool 7.

**Findings:**

- SKILL.md Job Hunt: "LinkedIn Easy Apply, postulación directa, referidos internos, recruiters, comunidades técnicas" — no Getonboard, no Torre
- latam-market-context.md Section 6: Lists Toptal, Deel, Turing, Upwork, Workana, LinkedIn, Gun.io, Remote OK/WeWorkRemotely — these are US/EU remote platforms, not LATAM-specific job boards
- Getonboard is NOT mentioned anywhere in SKILL.md or any reference file
- Torre (torre.co) is NOT mentioned anywhere in SKILL.md or any reference file
- career-path-adaptations.md Tool 7: References "niche job boards for the sector" without naming Getonboard or Torre

**Gap:** The skill instructs to reference latam-market-context.md for LATAM context, but that file does not name Getonboard or Torre as LATAM-specific job platforms. The Job Hunt tool would only name LinkedIn Easy Apply and generic channel types, missing the two LATAM-specific platforms the test requires.
**Result:** FAIL
**Severity if fail:** Major

### FAILURE REPORT: M-CA-12

**Test ID:** M-CA-12
**Test name:** Job Hunt — LATAM platforms named (Getonboard, Torre, LinkedIn)
**Skill:** construye-afuera
**Severity:** Major
**Date:** 2026-03-25

**What happened:** Neither "Getonboard" nor "Torre" (torre.co) appear in SKILL.md or any of the 3 reference files (assessment-scoring.md, career-path-adaptations.md, latam-market-context.md). The Job Hunt tool's channel list in SKILL.md only mentions "LinkedIn Easy Apply, postulación directa, referidos internos, recruiters, comunidades técnicas." The LATAM-specific job platforms that candidates actually use are absent.

**What was expected:** Response explicitly names LATAM-specific job platforms: Getonboard, Torre (torre.co), and LinkedIn LATAM strategy. Pass requires BOTH Getonboard AND Torre to be named.

**Pass/Fail criteria triggered:** Major fail — only US-adjacent platforms and generic channel types present; Getonboard and Torre both absent.

**Root cause hypothesis:** The latam-market-context.md Section 6 (Remote Work Market) lists platforms for US/EU remote roles (Toptal, Turing, Upwork, Workana), but does not have a dedicated LATAM local job board section naming Getonboard and Torre as primary LATAM job search platforms. The Job Hunt tool in SKILL.md references latam-market-context.md for LATAM context, but that context is focused on remote US/EU work, not local LATAM job boards.

**Recommended fix:**

**L1 (minimal):** Add to latam-market-context.md a new subsection under Section 2 (or new Section):

```
### LATAM job platforms (local market)
- **Getonboard** (getonboard.com) — tech-focused LATAM platform; strong in Colombia, Chile, Mexico; remote-friendly
- **Torre** (torre.co) — Colombian-born platform with AI-matching; growing LATAM presence
- **LinkedIn** — primary platform for senior roles and international visibility
- **Computrabajo** — general-purpose; larger volume but lower quality signal for tech roles
```

**L2 (recommended):** Also update SKILL.md Job Hunt process step 2 to explicitly name platforms: "LinkedIn Easy Apply, Getonboard, Torre, postulación directa, referidos internos, recruiters, comunidades técnicas"

**L3 (comprehensive):** Add a LATAM job board signal quality guide to assessment-scoring.md (which platforms tend to have more ghost postings vs. quality postings in the LATAM tech context).

**Status:** Open — fix required before publishing

---

### M-CA-13

**Test:** Job Hunt — ghost filter integration (CTA to Ghost Check)
**Evidence:** SKILL.md Job Hunt process step 4: "Verificá señales ghost check de cada posting (ver `references/assessment-scoring.md`)." assessment-scoring.md Part 2 (Ghost Check Signal Library) is the integrated ghost check guide. After tool section includes CTA: implied ghost check usage. The ghost check integration is embedded in the Job Hunt process, not as an external CTA to the ghost-check skill explicitly, but references the ghost check signal library.

Note: The test asks if "Ghost Check is recommended as ghost filter for job hunt." SKILL.md step 4 says to verify ghost check signals per assessment-scoring.md. However, the after_tool CTAs do not explicitly CTA to N1 Ghost Check as a separate tool after Job Hunt. The integration is implicit (uses the ghost check signal library internally). The test criterion is: "Pass if Ghost Check is recommended as ghost filter." The ghost check signals ARE integrated as step 4 of the job hunt process itself.
**Result:** PASS (ghost filter signals integrated in Job Hunt process step 4 via assessment-scoring.md)
**Severity if fail:** Minor

---

### M-CA-14

**Test:** Layoff Kit — emotional first, tactical second ordering
**Evidence:** SKILL.md Layoff Response Kit: "Check de seguridad especial: Si el usuario muestra señales Tier 2 de MIND-SAFE (colapso de burnout, abrumamiento severo, desesperanza), entregá respuesta Tier 2 ANTES de entrar al protocolo. No empujés el protocolo si el usuario no está en condiciones de ejecutarlo."

Protocol ordering: "Horas 0-24: Estabilización → Procesamiento emocional: validá que es normal sentirse así. No hay decisiones importantes todavía." Emotional processing is explicitly listed FIRST within the 0-24 hours phase. "Qué NO hacer en las primeras 24 horas: publicar en LinkedIn impulsivamente, quemar puentes, tomar decisiones financieras grandes" — protective emotional framing precedes all tactical steps.

For a user opening with "Me acaban de despedir. No sé qué hacer. Estoy en shock": MIND-SAFE Tier 2 check runs first (session check on each message), emotional validation precedes protocol, consistent with test expectation.
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-15

**Test:** Layoff Kit — phased timeline (Week 1, Month 1, Month 3 or equivalent)
**Evidence:** SKILL.md Layoff Kit structure:

- **Horas 0-24: Estabilización** (immediate stabilization phase)
- **Horas 24-48: Activación de red** (network activation phase)
- **Horas 48-72: Estrategia** (strategy phase)

Three distinct time phases present. The test requires "at least 2 distinct time phases" — all 3 are present. Labeled with clear time-based headers.
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-16

**Test:** Grow Where You Are — internal politics acknowledged
**Evidence:** SKILL.md Grow Where You Are Módulo A: "Mapa de la organización: ¿dónde están los proyectos con visibilidad y recursos? Ciclos de presupuesto: ¿cuándo se toman decisiones de promoción y aumento?"

Módulo B: "Mapa de patrocinio: ¿quién en la organización habla bien de vos cuando no estás en la sala?"

Módulo C: "Timing: cuándo tener la conversación (no en medio de una crisis, sí cerca de un éxito)."

career-path-adaptations.md Interview Prep stay_grow: "navegación política, cómo pedir patrocinio, manejo del panel." Network Map stay_grow: "La pregunta no es '¿quién te cae bien?' sino '¿quién tiene visibilidad en las decisiones que te importan?'"

Internal politics (sponsorship map, budget cycles, timing) are directly addressed in Módulos A, B, and C. The "no budget" response is addressed in Módulo C: "Respuestas a 'no' o 'todavía no': cómo mantener la relación y tener un plan alternativo."
**Result:** PASS
**Severity if fail:** Major

---

### M-CA-17

**Test:** Grow Where You Are — specific tactics beyond "talk to your manager"
**Evidence:** SKILL.md Módulo B (Caso de promoción) lists:

1. "Documentación de track record: logros concretos de los últimos 12 meses con métricas" ✓
2. "Narrativa estratégica: ¿por qué vos, por qué ahora, por qué es bueno para el negocio?" ✓
3. "Mapa de patrocinio: ¿quién en la organización habla bien de vos cuando no estás en la sala?" ✓ (building sponsorship map)
4. "Brechas a cerrar: ¿qué le falta a tu caso? ¿Cómo cerrás esas brechas en los próximos 3-6 meses?" ✓

All 3 specific tactics from Módulo B required by the test are present: 12-month track record documentation with metrics, sponsorship map, and gap identification with 3-6 month closure plan.
**Result:** PASS
**Severity if fail:** Minor

---

## Final Summary

| Test    | Name                                                    | Result   | Severity  |
| ------- | ------------------------------------------------------- | -------- | --------- |
| S-CA-01 | All 8 files load on session start                       | PASS     | Critical  |
| S-CA-02 | Career path routing matches SKILL.md table              | PASS     | Major     |
| S-CA-03 | All 9 tools individually accessible                     | PASS     | Major     |
| S-CA-04 | Profile-enhanced mode references user data              | PASS     | Major     |
| S-CA-05 | Standalone mode delivers full value                     | PASS     | Major     |
| S-CA-06 | LATAM market context referenced                         | PASS     | Major     |
| S-CA-07 | Assessment scoring rubrics applied                      | PASS     | Major     |
| M-CA-01 | CV Audit — structured score output                      | PASS     | Major     |
| M-CA-02 | CV Audit — profile-enhanced references values/strengths | PASS     | Minor     |
| M-CA-03 | CV Audit — LATAM norms (photo, cédula)                  | PASS     | Minor     |
| M-CA-04 | Interview Prep — 3+ STAR stories                        | PASS     | Major     |
| M-CA-05 | Interview Prep — uses mastery_experiences as seeds      | PASS     | Major     |
| M-CA-06 | Negotiate — LATAM salary opacity acknowledged           | PASS     | Major     |
| M-CA-07 | Negotiate — specific numeric anchors                    | PASS     | Major     |
| M-CA-08 | STAR Builder — explicit S/T/A/R structure               | PASS     | Major     |
| M-CA-09 | Profile Builder — About uses narrative_theme            | PASS     | Major     |
| M-CA-10 | Profile Builder — 3+ headline variations, no cliches    | PASS     | Minor     |
| M-CA-11 | Network Map — specific targets; "networking" absent     | PASS     | Major     |
| M-CA-12 | Job Hunt — LATAM platforms named (Getonboard, Torre)    | **FAIL** | **Major** |
| M-CA-13 | Job Hunt — ghost filter integration                     | PASS     | Minor     |
| M-CA-14 | Layoff Kit — emotional first, tactical second           | PASS     | Major     |
| M-CA-15 | Layoff Kit — phased timeline                            | PASS     | Major     |
| M-CA-16 | Grow Where You Are — internal politics acknowledged     | PASS     | Major     |
| M-CA-17 | Grow Where You Are — 3+ specific tactics                | PASS     | Minor     |

**Score: 23/24 PASS (96%)**

**Hard Gate:** No Critical failures. 1 Major failure (M-CA-12) — blocks publishing until fixed.

**Key confirmations:**

- M-CA-11: Word "networking" confirmed ABSENT from SKILL.md (anti-networking prohibition enforced)
- M-CA-06: LATAM salary opacity acknowledged as structural in latam-market-context.md; Negociación tool references it
- M-CA-12: FAIL — Getonboard and Torre NOT present in SKILL.md or any reference file
