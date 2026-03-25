# Construye Afuera — Eval Harness Test Cases (24 tests)

Skill: `skills/construye-afuera/SKILL.md`
Reads: 5 shared files + 3 reference files
Tools: CV Audit, Interview Prep, Negotiate, STAR Builder, Profile Builder, Network Map, Job Hunt, Layoff Kit, Grow Where You Are

---

## Structural Tests (S-CA)

### S-CA-01: All 8 files load on session start

**Category:** Structural
**Input:** "Hola, quiero trabajar mi búsqueda de empleo."
**Procedure:** Open fresh session. Send input. Read first response.
**Expected:** First response is coherent, includes scope disclaimer verbatim, uses voseo. No errors about missing files. Files referenced: 5 shared + 3 reference files (career-path-adaptations, latam-market-context, assessment-scoring) accessible.
**Pass/Fail:** PASS if first response is coherent with disclaimer. FAIL if errors about missing files appear or disclaimer is absent.
**Severity if fail:** Critical

---

### S-CA-02: Career path routing matches SKILL.md table

**Category:** Structural
**Input:** Complete triage with: Q1 = "Acabo de ser despedida, necesito trabajo urgente", Q2 = "No sé, supongo buscar algo nuevo", Q3 = "Inmediato, severance por 2 meses".
**Procedure:** Complete triage. Read tool recommendations.
**Expected:** System classifies `situation: crisis`, `career_path: pause_reset`, `urgency: immediate`. Tool suggestions should follow SKILL.md table for pause_reset + immediate: "Layoff Response Kit → Negociación". System says "pause_reset" context when explaining.
**Pass/Fail:** PASS if crisis/pause_reset/immediate routing is correct AND tool suggestions match SKILL.md table for that combination. FAIL if routing mismatch.
**Severity if fail:** Major

---

### S-CA-03: All 9 tools individually accessible

**Category:** Structural
**Input:** After triage, ask: "¿Cuáles son todas las herramientas disponibles?"
**Procedure:** Run session, complete triage. Then ask for full tool list.
**Expected:** Response lists all 9 tools by name:

1. CV Audit
2. Interview Prep
3. Negociación
4. STAR Builder
5. Profile Builder
6. Network Map
7. Job Hunt
8. Layoff Response Kit
9. Grow Where You Are

Each listed as individually accessible.
**Pass/Fail:** PASS if all 9 tools are listed. FAIL if any of the 9 is absent from the list.
**Severity if fail:** Major

---

### S-CA-04: Profile-enhanced mode references user data

**Category:** Structural
**Input:** Paste profile YAML with completed values:

```yaml
version: "1.0"
values:
  completed: true
  core_values:
    - "autonomía"
    - "impacto real"
    - "aprendizaje"
  career_implications:
    - "Roles con alta autonomía técnica"
    - "Proyectos con impacto visible en usuarios"
identity:
  completed: true
  narrative_theme: "Arquitecto de sistemas que conectan personas con decisiones"
```

Then ask for CV Audit.
**Procedure:** Paste profile. Request CV Audit. Provide a sample CV text. Read response.
**Expected:** CV Audit response references at least one value from `core_values` ("autonomía", "impacto real", or "aprendizaje") and aligns recommendations with `narrative_theme`. Not generic advice.
**Pass/Fail:** PASS if response explicitly references at least 1 profile field (value or narrative theme). FAIL if response is identical to what would appear without a profile.
**Severity if fail:** Major

---

### S-CA-05: Standalone mode delivers full value

**Category:** Structural
**Input:** No profile. Answer triage as: "Quiero cambiar de trabajo", "Tengo 3 meses", "Buscar algo en product management".
**Procedure:** Run session without profile. Request CV Audit. Provide sample CV. Read response.
**Expected:** CV Audit provides substantive feedback with specific improvements, score by dimension, and 3 prioritized actions. Not inferior to profile-enhanced mode in actionability.
**Pass/Fail:** PASS if CV Audit delivers specific, actionable feedback without a profile. FAIL if response is too generic to be useful ("update your CV to be more specific").
**Severity if fail:** Major

---

### S-CA-06: LATAM market context referenced in relevant tools

**Category:** Structural
**Input:** Request the Negociación tool. When asked for context, say: "Estoy negociando una oferta en una empresa colombiana mediana, no publicaron salario."
**Procedure:** Complete Negociación tool with this context. Read response.
**Expected:** Response acknowledges LATAM salary opacity explicitly. Uses language from latam-market-context.md about the structural gap in salary data. Does NOT present salary ranges as precise when they are unavailable.
**Pass/Fail:** PASS if LATAM salary opacity is acknowledged and framed as a structural challenge (not user failure). FAIL if response ignores LATAM context or presents non-existent salary data as fact.
**Severity if fail:** Major

---

### S-CA-07: Assessment scoring rubrics applied in CV Audit

**Category:** Structural
**Input:** Request CV Audit with this CV text:

```
Juan García - juan@email.com
Software Engineer | 5 años experiencia

EXPERIENCIA:
Globant (2021-presente): Desarrollé features
TCS (2019-2021): Trabajé en proyectos

HABILIDADES: Java, Python, SQL, comunicación, trabajo en equipo
```

**Procedure:** Request CV Audit. Provide this intentionally weak CV. Read the scoring response.
**Expected:** Response applies the 10-dimension scoring rubric from assessment-scoring.md. Each dimension is scored 0-10. Total score calculated. At least "Impacto métrico" (should be 1-2/10 given vague descriptions), "Densidad ATS" (low), and "Coherencia narrativa" (low) are scored. 3 prioritized actions given.
**Pass/Fail:** PASS if 10-dimension scoring appears with numeric scores per dimension. FAIL if response lacks structured scoring.
**Severity if fail:** Major

---

## Per-Tool Mechanics Tests (M-CA)

### M-CA-01: CV Audit — structured score with specific improvements

**Category:** Mechanics
**Input:** Request CV Audit with this CV:

```
María Rodríguez | mrodriguez@gmail.com | LinkedIn: /in/mariarodriguez

EXPERIENCIA:
Perficient Colombia — Senior Java Developer (2022-presente)
- Lideré migración de sistema de facturación para cliente bancario: reduje tiempo de procesamiento de facturas de 48h a 4h (91% mejora) y eliminé 15% de errores manuales
- Construí pipeline de integración que conecta 3 sistemas legacy con la nueva plataforma cloud

EPAM — Java Developer (2019-2022)
- Desarrollé módulos de autenticación para aplicación con 200k usuarios activos
- Mantuve documentación técnica y lideré onboarding de 3 developers nuevos

HABILIDADES: Java 17, Spring Boot, AWS (EC2, RDS, Lambda), PostgreSQL, Docker, Git

EDUCACIÓN: Ingeniería de Sistemas, Universidad Nacional de Colombia (2018)
```

Target role: "Quiero aplicar a Senior Engineer roles en startups de producto en LATAM."

**Procedure:** Request CV Audit. Provide the above CV and target. Read the response.
**Expected:** Response includes: 10-dimension score (most dimensions 6-8/10, impacto métrico 8-9/10 due to specific metrics), 3 prioritized improvements, and specific suggested rewrites (not just "add metrics" but showing what metrics to add/rewrite).
**Pass/Fail:** PASS if response includes structured score, 3 specific improvements with concrete examples. FAIL if response is generic.
**Severity if fail:** Major

---

### M-CA-02: CV Audit — profile-enhanced references actual values/strengths

**Category:** Mechanics
**Input:** Profile YAML (from S-CA-04) + María's CV. Request CV Audit.
**Procedure:** Paste profile with completed values. Request CV Audit. Provide CV. Read response.
**Expected:** CV Audit explicitly connects CV improvements to the user's values and narrative theme. Example: "Tu CV actual no communica bien tu valor de impacto real — la descripción del pipeline integration puede reescribirse para mostrar el impacto en usuarios."
**Pass/Fail:** PASS if at least 2 CV improvement suggestions reference profile data (values or narrative theme). FAIL if generic advice indistinguishable from standalone mode.
**Severity if fail:** Minor

---

### M-CA-03: CV Audit — LATAM norms (photo acceptable, format differences)

**Category:** Mechanics
**Input:** CV audit context. Ask: "¿Debería incluir foto en mi hoja de vida para el mercado colombiano?" and "¿Debería incluir mi cédula?"
**Procedure:** Ask this specific question during or after CV audit. Read the response.
**Expected:** Response acknowledges that in Colombia/LATAM, including a photo and national ID (cédula) on a CV is common and generally acceptable (unlike US/UK norms). Does NOT advise against it for LATAM applications.
**Pass/Fail:** PASS if LATAM norms are correctly identified as accepting photos/ID. FAIL if response applies US-centric norms incorrectly.
**Severity if fail:** Minor

---

### M-CA-04: Interview Prep — 3+ STAR stories from user experience

**Category:** Mechanics
**Input:** Request Interview Prep. Target role: "Senior PM at MercadoLibre". Provide 3 rough stories: (1) "managed a product launch that grew users 30%", (2) "resolved a team conflict between engineering and design", (3) "led prioritization when we had conflicting stakeholder demands".
**Procedure:** Complete Interview Prep tool. Read response.
**Expected:** Response produces 3 fully structured STAR stories (Situación, Tarea, Acción, Resultado). Each story uses the exact S/T/A/R labels. Each has specific details from user's raw input. "Resultado" has at least one metric or concrete impact.
**Pass/Fail:** PASS if 3 complete STAR stories are produced with explicit S/T/A/R labels and concrete results. FAIL if fewer than 3 or if structure is missing.
**Severity if fail:** Major

---

### M-CA-05: Interview Prep — uses mastery_experiences as STAR seeds

**Category:** Mechanics
**Input:** Profile YAML with strengths:

```yaml
version: "1.0"
strengths:
  completed: true
  self_efficacy:
    mastery_experiences:
      - "Migré sistema de facturación bancaria: 91% reducción de tiempo de procesamiento"
      - "Lideré onboarding de 3 developers y reduje tiempo de rampa de 3 meses a 6 semanas"
```

Request Interview Prep. Target: "Engineering Manager at Rappi."

**Procedure:** Paste profile with mastery experiences. Request Interview Prep. Read response.
**Expected:** Response builds STAR stories using the mastery experiences from the profile. "Migré sistema de facturación" becomes the basis for a STAR story about technical leadership or problem-solving.
**Pass/Fail:** PASS if at least 1 STAR story is built directly from a `mastery_experiences` entry. FAIL if STAR stories are generic and don't use profile data.
**Severity if fail:** Major

---

### M-CA-06: Negotiate — LATAM salary opacity acknowledged

**Category:** Mechanics
**Input:** Request Negociación. Context: "Quiero negociar un aumento en Bancolombia. No sé cuál es el rango de mercado porque no hay datos públicos confiables."
**Procedure:** Run Negociación tool. Read response.
**Expected:** Response explicitly acknowledges that salary opacity in LATAM is a structural challenge: "La opacidad salarial en LATAM hace que construir el caso de mercado sea más difícil que en el mercado norteamericano — no es una falla tuya en la investigación." Provides alternative strategy (peer conversations, recruiter data, company size benchmarks) rather than pretending data exists.
**Pass/Fail:** PASS if LATAM salary opacity is named as structural AND alternative data strategies are given. FAIL if response ignores the opacity or suggests Glassdoor/Levels.fyi as if they're reliable for Colombian market.
**Severity if fail:** Major

---

### M-CA-07: Negotiate — specific numeric anchors/tactics, not generics

**Category:** Mechanics
**Input:** Negociación tool. Context: "Tengo una oferta de $12M COP mensual para Senior Engineer en startup de Serie B en Bogotá. He investigado y creo que el mercado está más en $15-17M para este perfil."
**Procedure:** Run Negociación tool. Provide context. Read response.
**Expected:** Response provides a specific negotiation script with: (1) a specific anchor number to start with ($17M), (2) specific language to use in the conversation, (3) a walkaway point recommendation, (4) how to handle counter-offer. NOT "negotiate respectfully" or "research the market".
**Pass/Fail:** PASS if response includes specific anchor number, script language, and walkaway strategy. FAIL if advice is generic.
**Severity if fail:** Major

---

### M-CA-08: STAR Builder — explicit S/T/A/R structure, all 4 components specific

**Category:** Mechanics
**Input:** Request STAR Builder. Provide raw story: "Fui tech lead en un proyecto de migración a cloud que se estaba yendo muy mal. Lo rescaté y entregué a tiempo."
**Procedure:** Run STAR Builder. Provide raw story. Read response.
**Expected:** STAR Builder generates a structured story with all 4 components clearly labeled and specific:

- Situación: context (company/team size, why migrating, why "going badly")
- Tarea: specific responsibility (what was your mandate as tech lead)
- Acción: specific steps YOU (not the team) took
- Resultado: specific metric (delivered on time = saved X weeks, avoided Y cost, kept Z client)

Probes for specifics if raw story is vague.
**Pass/Fail:** PASS if all 4 STAR components are explicitly labeled and specific. FAIL if any component is generic or absent.
**Severity if fail:** Major

---

### M-CA-09: Profile Builder — LinkedIn About uses narrative_theme

**Category:** Mechanics
**Input:** Profile with `identity.narrative_theme: "Arquitecto de sistemas que conectan personas con decisiones"` + `values.core_values: ["autonomía", "impacto real", "aprendizaje"]`. Request Profile Builder, About section.
**Procedure:** Paste profile. Request Profile Builder. Specifically ask for About section. Read response.
**Expected:** Proposed LinkedIn About section incorporates the narrative_theme as the opening hook or core statement. Not a generic "experienced software engineer with X years" opener. First 2-3 sentences should reflect the narrative theme.
**Pass/Fail:** PASS if About section incorporates narrative_theme in first 3 sentences. FAIL if About is generic and ignores narrative_theme.
**Severity if fail:** Major

---

### M-CA-10: Profile Builder — 3+ headline variations, no cliches

**Category:** Mechanics
**Input:** Profile (same as M-CA-09). Request Profile Builder, Headline section.
**Procedure:** Request headline options for LinkedIn. Read response.
**Expected:** Response provides 3+ distinct headline options with different angles (technical, aspirational, value-specific). None of the headlines contain phrases like "Passionate about technology", "Results-driven", "Experienced professional", "Dynamic leader".
**Pass/Fail:** PASS if 3+ headlines are provided AND none contain generic corporate cliches. FAIL if fewer than 3 headlines or cliche phrases appear.
**Severity if fail:** Minor

---

### M-CA-11: Network Map — specific outreach targets, not "build your network"

**Category:** Mechanics
**Input:** Request Network Map. Provide: "He trabajado en Globant, EPAM, y Perficient. Conozco a 20 personas de estas empresas. Quiero moverme a startups de producto."
**Procedure:** Run Network Map tool. Provide contact context. Read response.
**Expected:** Response asks for specific names/contacts to classify. Classifies them as strong/weak/dormant ties. Identifies 3-5 SPECIFIC people to reconnect with based on their likely network access to product startups. Provides specific outreach message template for at least one contact. NEVER says "build your professional network" or "expand your network".
**Pass/Fail:** PASS if tool asks for specific contacts, classifies them, and gives specific outreach templates. FAIL if advice is generic ("reach out to people in your network").
**Severity if fail:** Major

---

### M-CA-12: Job Hunt — LATAM platforms named (Getonboard, Torre, LinkedIn LATAM)

**Category:** Mechanics
**Input:** Request Job Hunt. Context: "Busco trabajo como senior backend engineer en LATAM, preferiblemente remoto o en Bogotá."
**Procedure:** Run Job Hunt tool. Provide this context. Read response.
**Expected:** Response explicitly names LATAM-specific job platforms: Getonboard, Torre (torre.co), and LinkedIn LATAM strategy. Does NOT only recommend generic US platforms (Indeed, Glassdoor, Dice).
**Pass/Fail:** PASS if Getonboard AND Torre are both named. FAIL if only US platforms are recommended.
**Severity if fail:** Major

---

### M-CA-13: Job Hunt — ghost filter integration recommended

**Category:** Mechanics
**Input:** Request Job Hunt. After getting job hunt strategy, ask: "¿Cómo evito perder tiempo en ofertas fantasma?"
**Procedure:** Run Job Hunt. Ask the ghost filter question. Read response.
**Expected:** Response integrates Ghost Check as part of the job hunt strategy. Specifically recommends using N1 Ghost Check to vet postings before applying. References the ghost job data ("20-40% of active postings").
**Pass/Fail:** PASS if Ghost Check is recommended as ghost filter for job hunt. FAIL if response gives generic advice without mentioning Ghost Check.
**Severity if fail:** Minor

---

### M-CA-14: Layoff Kit — emotional first, tactical second

**Category:** Mechanics
**Input:** "Me acaban de despedir. No sé qué hacer. Estoy en shock."
**Procedure:** Open fresh session with this message. Read first response.
**Expected:** First response acknowledges the emotional reality BEFORE moving to tactical advice. Examples: "Tiene sentido estar en shock — lo que estás sintiendo es normal." Does NOT immediately launch into the 72-hour protocol without first acknowledging the emotional state.
**Pass/Fail:** PASS if first response addresses emotional reality before tactical next steps. FAIL if response immediately goes to "Step 1: Review your severance documents."
**Severity if fail:** Major

---

### M-CA-15: Layoff Kit — phased timeline present (Week 1, Month 1, Month 3)

**Category:** Mechanics
**Input:** Request Layoff Response Kit. Context: "Me despidieron de Perficient hace 2 días. Tengo 8 semanas de severance."
**Procedure:** Run Layoff Kit. Provide context. Read full response.
**Expected:** Response organizes advice in at least 3 time phases: immediate/72 hours (stabilization), first weeks (activation), and medium-term (strategy). Or equivalent named phases from SKILL.md: "Horas 0-24", "Horas 24-48", "Horas 48-72".
**Pass/Fail:** PASS if at least 2 distinct time phases are present in the plan. FAIL if advice is presented as an undifferentiated list without time structure.
**Severity if fail:** Major

---

### M-CA-16: Grow Where You Are — internal politics acknowledged

**Category:** Mechanics
**Input:** Request Grow Where You Are. Context: "Llevo 3 años en Globant, quiero una promoción a Senior Engineer. Mi manager me dice que 'no hay presupuesto'."
**Procedure:** Run Grow Where You Are. Provide context. Read response.
**Expected:** Response acknowledges internal politics explicitly. Addresses: who speaks well of you when you're not in the room, how to navigate the "no budget" response, timing relative to budget cycles. Not just "do good work and ask for feedback."
**Pass/Fail:** PASS if response addresses internal politics, sponsorship, and budget timing specifically. FAIL if advice is naive ("show your manager your contributions").
**Severity if fail:** Major

---

### M-CA-17: Grow Where You Are — specific tactics beyond "talk to your manager"

**Category:** Mechanics
**Input:** Same as M-CA-16. Continue asking for specific tactics after initial response.
**Procedure:** After initial response on Grow Where You Are, ask: "¿Cómo construyo el caso concreto para la promoción?"
**Expected:** Response provides at least 3 specific tactics from SKILL.md Módulo B:

- Documenting 12-month track record with metrics
- Building a sponsorship map (who speaks well of you)
- Identifying gaps in the case and how to close them in 3-6 months

Not generic advice.
**Pass/Fail:** PASS if 3+ specific tactics from Módulo B appear. FAIL if response is generic ("be proactive in your role").
**Severity if fail:** Minor
