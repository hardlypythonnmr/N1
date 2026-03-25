# Ghost Check — Eval Harness Test Cases (24 tests)

Skill: `skills/ghost-check/SKILL.md`
Reads: `shared/safety-protocol.md`, `shared/voice-guide.md`, `shared/profile-format.md`
Token budget: ~4-6K (D-03 lean)

---

## Structural Tests (S-GC)

### S-GC-01: Shared files load on session start

**Category:** Structural
**Input:** "Hola, quiero analizar una oferta de trabajo."
**Procedure:** Open a fresh Claude session with ghost-check skill loaded. Send the input message. Inspect the first response.
**Expected:** Response references the scope disclaimer verbatim (text matching safety-protocol.md Section 1 Spanish version). Response includes voseo Colombian phrasing. No error about missing files.
**Pass/Fail:** PASS if scope disclaimer appears verbatim in first response AND response is coherent. FAIL if disclaimer is absent, paraphrased, or if Claude reports inability to load shared files.
**Severity if fail:** Critical

---

### S-GC-02: Token budget under 6K

**Category:** Structural
**Input:** "Hola, quiero analizar esta oferta."
**Procedure:** Open fresh session with ghost-check skill. Send input. Check skill file size using `wc -c skills/ghost-check/SKILL.md` + the 3 shared files it loads. Total token estimate must be under 6K.
**Expected:** `skills/ghost-check/SKILL.md` + 3 shared files total < ~24KB (roughly 6K tokens). Skill is standalone lean per D-03.
**Pass/Fail:** PASS if combined size of SKILL.md + safety-protocol.md + voice-guide.md + profile-format.md is under 6K tokens estimated. FAIL if any file combo bloats past 6K.
**Severity if fail:** Major

---

### S-GC-03: Scope disclaimer verbatim in first response

**Category:** Structural
**Input:** "Quiero ver si esta oferta es real."
**Procedure:** Open fresh session. Send input message. Copy the first response. Check if it contains the exact text: "N1 es una herramienta de orientación profesional basada en investigación."
**Expected:** First response contains exact phrase: "N1 es una herramienta de orientación profesional basada en investigación. No es terapia, no es asesoría psicológica, y no reemplaza la orientación de un profesional de salud mental o coach certificado."
**Pass/Fail:** PASS if the disclaimer appears verbatim (not paraphrased). FAIL if disclaimer is absent or significantly altered.
**Severity if fail:** Critical

---

### S-GC-04: Profile check offered in first response

**Category:** Structural
**Input:** "Quiero analizar una oferta."
**Procedure:** Open fresh session. Send input. Read first response.
**Expected:** First response contains a question offering profile check — approximately: "¿Tenés un perfil N1? Si lo tenés, pegalo y agrego un análisis de alineación con tus valores."
**Pass/Fail:** PASS if profile check question appears in first response (exact wording not required, but intent clear). FAIL if profile check is absent.
**Severity if fail:** Minor

---

### S-GC-05: YAML output validates against profile-format.md

**Category:** Structural
**Input:** Full ghost-check session with posting. After analysis, ask: "¿Podés generar el YAML de mi perfil con este análisis?"
**Procedure:** Run a complete session providing the posting text below. After the score is delivered, request YAML output. Validate the output against profile-format.md schema fields.

Test posting:

```
Empresa: Globant Bogotá
Rol: Senior Software Engineer
Publicado: hace 15 días
Salario: $8,000,000 - $12,000,000 COP mensual
Responsabilidades: Desarrollar microservicios en Java/Spring Boot. Trabajar con equipo de 6 devs. Reportar a Engineering Manager Carlos M.
Requisitos: 4+ años Java, conocimiento de AWS, español e inglés.
```

**Expected:** YAML output contains valid fields from profile-format.md. No hallucinated fields. `version: "1.0"` present.
**Pass/Fail:** PASS if YAML is syntactically valid and fields match profile-format.md schema. FAIL if YAML is malformed or contains fields not in schema.
**Severity if fail:** Major

---

### S-GC-06: Ghost Score is integer 0-100

**Category:** Structural
**Input:** Provide posting text (use S-GC-05 posting). Ask for analysis.
**Procedure:** Run full session. Read the Ghost Score from the response.
**Expected:** Ghost Score appears as an integer between 0 and 100 inclusive. Format: "**Ghost Score: [X]/100**". X is a whole number.
**Pass/Fail:** PASS if score is an integer 0-100. FAIL if score is a decimal (e.g., 87.5), out of range, or absent.
**Severity if fail:** Critical

---

### S-GC-07: All 6 scoring categories present with pts/max

**Category:** Structural
**Input:** Use S-GC-05 posting.
**Procedure:** Run full session. Check response for all 6 category lines.
**Expected:** Response contains all 6 categories:

- Antigüedad del posting (max 20 pts)
- Transparencia salarial (max 20 pts)
- Especificidad del rol (max 15 pts)
- Presencia de la empresa (max 15 pts)
- Patrones de lenguaje (max 15 pts)
- Señales de reposteo (max 15 pts)

Each category shows pts_earned/pts_max.
**Pass/Fail:** PASS if all 6 categories appear with pts/max notation. FAIL if any category is missing or max points differ from schema.
**Severity if fail:** Major

---

### S-GC-08: Tier verdict matches score range

**Category:** Structural
**Input:** Use S-GC-05 posting (expect score around 75-85).
**Procedure:** Run session. Note the Ghost Score and the tier verdict.
**Expected:** Tier verdict matches the score table:

- 80-100 → "Alta probabilidad de ser real"
- 60-79 → "Señales mixtas"
- 40-59 → "Señales preocupantes"
- 0-39 → "Alta probabilidad de ghost job"
  **Pass/Fail:** PASS if tier verdict matches the score range. FAIL if score is 82 but verdict says "Señales mixtas" (should be "Alta probabilidad de ser real").
  **Severity if fail:** Major

---

### S-GC-09: Shareable output contains zero posting text

**Category:** Structural
**Input:** Use M-GC-01 floor posting (see mechanics section). After analysis, ask: "¿Podés generar el texto para compartir en LinkedIn?"
**Procedure:** Run full session. Request shareable output. Inspect the shareable text for any copied posting text.
**Expected:** Shareable output contains ONLY score and verdict. Example: "Analicé esta oferta con N1 Ghost Check. Score: 12/100. Alta probabilidad de ghost job. Probá Ghost Check gratis en [URL]." No job title, no company name, no responsibilities text from the original posting.
**Pass/Fail:** PASS if shareable output contains zero text copied from the original posting. FAIL if any fragment of posting text appears in shareable output.
**Severity if fail:** Critical

---

### S-GC-10: CTA to compass/web tool present

**Category:** Structural
**Input:** Use S-GC-05 posting. Run full session to completion.
**Procedure:** After score is delivered, check final response for CTA.
**Expected:** Final response includes CTA referencing N1 Compass or the Ghost Check web tool. Example: "¿Querés saber qué tan listo estás para el mercado laboral ahora mismo? Probá N1 Compass" or reference to "web/ghost-check".
**Pass/Fail:** PASS if CTA to Compass or web tool appears at close of session. FAIL if session ends without any CTA.
**Severity if fail:** Minor

---

## Voice Tests (V-GC)

### V-GC-01: Colombian voseo present

**Category:** Voice
**Input:** "Hola, quiero que me analices esta oferta de trabajo."
**Procedure:** Open fresh session. Send the input. Read entire first response.
**Expected:** Response uses Colombian voseo conjugations. Look for at least 2 of these: "revisás", "miremos", "fijate", "pegá", "describímela", "tenés", "podés".
**Pass/Fail:** PASS if 2+ voseo conjugations appear in the first response. FAIL if response uses tuteo ("hablas", "tienes", "puedes") or usted exclusively.
**Severity if fail:** Major

---

### V-GC-02: Zero em-dashes (U+2014) in response

**Category:** Voice
**Input:** Use S-GC-05 posting. Run full session. Copy full response text.
**Procedure:** Search the response text for the em-dash character (—, Unicode U+2014). Use text editor find function or paste into a character counter.
**Expected:** Zero em-dash characters (—) in the response. Regular hyphens (-) are allowed.
**Pass/Fail:** PASS if zero em-dashes found. FAIL if 1 or more em-dashes (—) appear.
**Severity if fail:** Minor

---

### V-GC-03: Zero prohibited phrases from voice-guide.md Section 4

**Category:** Voice
**Input:** Use S-GC-05 posting. Run full session.
**Procedure:** Copy full response. Search for each prohibited phrase from voice-guide.md Section 4: "maximizar tu potencial", "salir de tu zona de confort", "el éxito es un viaje", "invertir en vos mismo", "ser auténtico", "hacer networking", "tu marca personal", "agregar valor", "sinergias", "paradigma", "empoderamiento", "ecosistema", "disruptivo", "innovador", "¡Vos podés!", "¡El cielo es el límite!", "todo es posible".
**Expected:** Zero prohibited phrases in the response.
**Pass/Fail:** PASS if no prohibited phrases found. FAIL if any prohibited phrase appears (even once).
**Severity if fail:** Major

---

### V-GC-04: Zero emojis in response

**Category:** Voice
**Input:** Use S-GC-05 posting. Run full session.
**Procedure:** Copy full response text. Search for any emoji characters. (Note: the ✓, ⚠, ✗ symbols in the scoring format are defined in SKILL.md — check if these are acceptable or if they qualify as emoji.)
**Expected:** Zero emoji characters. The ✓, ⚠, ✗ check/warning/cross symbols in the score output format are explicitly defined in SKILL.md and are acceptable. Cartoon/face/object emojis (😊, 🚀, 💡) are forbidden.
**Pass/Fail:** PASS if zero emoji characters (other than ✓ ⚠ ✗ from score format). FAIL if any emoji appears.
**Severity if fail:** Minor

---

### V-GC-05: LATAM salary calibration — no salary = 8 pts + cultural note

**Category:** Voice
**Input:**

```
Empresa: Startup de tecnología en Bogotá (se trabaja presencial)
Rol: Product Manager Junior
Publicado: hace 8 días
Salario: No se especifica
Responsabilidades: Gestión de roadmap de producto. Trabajo con equipo técnico de 4 personas.
Requisitos: 2+ años en product management, inglés intermedio, experiencia con Jira.
```

**Procedure:** Run full session with this posting. Note the score for "Transparencia salarial" category and whether a cultural note about LATAM appears.
**Expected:** "Transparencia salarial" receives 8 pts (not 0 pts) because context is LATAM. Response includes a cultural note such as "en LATAM es común que no incluyan salario" or similar.
**Pass/Fail:** PASS if salary category shows 8 pts AND cultural note about LATAM salary opacity is present. FAIL if salary category shows 0 pts OR cultural note is absent.
**Severity if fail:** Major

---

### V-GC-06: English input → English response, voseo drops

**Category:** Voice
**Input:**

```
Hi, I want to check if this job is real:

Company: Tech Corp (undisclosed)
Role: Senior React Developer
Posted: 3 months ago
Salary: Competitive (no range given)
Requirements: 5+ years React, TypeScript, team player, excellent communication skills, experience with agile methodologies.
```

**Procedure:** Run session starting with this English input. Read full response.
**Expected:** Response is in English. No voseo conjugations appear. Standard English second person ("you", "your") used throughout.
**Pass/Fail:** PASS if response is fully in English with no voseo. FAIL if response is in Spanish or contains voseo conjugations.
**Severity if fail:** Major

---

## Mechanics Tests (M-GC)

### M-GC-01: Floor score — all red flags = 0-15

**Category:** Mechanics
**Input:**

```
Empresa: Confidencial
Rol: Technical Lead / Principal Engineer / Full Stack Developer
Publicado: hace más de 6 meses (reposteo múltiple visible en LinkedIn)
Salario: No especificado
Responsabilidades: Liderar iniciativas innovadoras. Ser el puente entre negocio y tecnología. Impulsar la transformación digital.
Requisitos: 10+ años de experiencia, dominio de más de 15 tecnologías (React, Node, Python, Java, AWS, GCP, Azure, Docker, Kubernetes, y más), MBA deseable, inglés perfecto, disponibilidad inmediata (ASAP), espíritu emprendedor.
Aplicar solo por email: jobs2024@gmail.com (no portal de empresa)
```

**Procedure:** Run full session with this posting. Note the final Ghost Score.
**Expected:** Ghost Score between 0 and 15. All 6 categories should score near minimum (confidential company = 0 empresa, no salary = 0 internacional context, ASAP + gmail + repost all negative signals).
**Pass/Fail:** PASS if score is 0-15. FAIL if score exceeds 15.
**Severity if fail:** Major

---

### M-GC-02: Ceiling score — all green signals = 85-100

**Category:** Mechanics
**Input:**

```
Empresa: Rappi (empresa pública, perfil activo en LinkedIn con 2,000+ empleados)
Rol: Senior Backend Engineer — Payments Platform
Publicado: hace 5 días
Salario: $18,000,000 - $25,000,000 COP mensual + beneficios (seguro médico, días adicionales de vacaciones, opciones de trabajo remoto 3 días/semana)
Responsabilidades: Diseñar e implementar APIs para el sistema de pagos. Trabajar en equipo de 8 engineers. Reportar a Engineering Manager Ana Gómez. Participar en on-call rotation (1 semana/mes).
Requisitos: 5+ años en backend (Java o Go), experiencia con sistemas de alta disponibilidad, inglés conversacional. No se requiere maestría.
Primera publicación: verificado como nuevo posting (no reposteo).
```

**Procedure:** Run full session with this posting. Note the final Ghost Score.
**Expected:** Ghost Score between 85 and 100.
**Pass/Fail:** PASS if score is 85-100. FAIL if score is below 85.
**Severity if fail:** Major

---

### M-GC-03: Midrange ambiguity = 40-65

**Category:** Mechanics
**Input:**

```
Empresa: Empresa del sector financiero (nombre confidencial, sector: banca digital)
Rol: Data Analyst Senior
Publicado: hace 45 días
Salario: Salario competitivo según experiencia
Responsabilidades: Análisis de datos de clientes, reportes para stakeholders, trabajo con equipo de BI.
Requisitos: 3+ años en análisis de datos, SQL avanzado, Python básico, inglés intermedio. Experiencia en sector financiero deseable.
```

**Procedure:** Run full session. Note the Ghost Score.
**Expected:** Ghost Score between 40 and 65. Posting has mixed signals: confidential company (negative), 45 days old (slightly negative), no salary range but says "sector banca digital" (some legitimacy), some specificity but vague.
**Pass/Fail:** PASS if score is 40-65. FAIL if score is outside 40-65 range.
**Severity if fail:** Major

---

### M-GC-04: Unrealistic requirements penalty — flagged and -5 pts

**Category:** Mechanics
**Input:**

```
Empresa: Startups LATAM Ventures (nombre real, LinkedIn: 45 empleados)
Rol: Junior Frontend Developer
Publicado: hace 10 días
Salario: $3,500,000 - $5,000,000 COP mensual
Requisitos: Título universitario en Ingeniería de Sistemas, 8+ años de experiencia en React y TypeScript, conocimiento de 10 frameworks frontend, portfolio de proyectos en producción con 100k+ usuarios, inglés C2.
```

**Procedure:** Run full session. Note whether unrealistic requirements are flagged explicitly AND whether -5 pts penalty is mentioned.
**Expected:** Response explicitly flags the unrealistic requirements (8+ years for "junior" role) and mentions the -5 pts penalty. Score adjusts down from category subtotal.
**Pass/Fail:** PASS if response explicitly mentions "junior" + "8+ años" as unrealistic AND mentions -5 pts adjustment. FAIL if unrealistic requirements are ignored.
**Severity if fail:** Minor

---

### M-GC-05: LATAM calibration — Colombian posting, no salary, otherwise strong = 60-80

**Category:** Mechanics
**Input:**

```
Empresa: Bancolombia (empresa pública, 35,000+ empleados, perfil LinkedIn activo)
Rol: Solutions Architect
Publicado: hace 12 días
Salario: No especificado (empresa colombiana)
Responsabilidades: Diseñar arquitecturas de microservicios para el equipo de banca digital. Liderar revisiones técnicas. Equipo de 12 personas. Reporte a Chief Architect.
Requisitos: 6+ años en arquitectura de software, AWS certificado, experiencia en sector financiero preferible. Inglés intermedio.
```

**Procedure:** Run full session. Note Ghost Score.
**Expected:** Ghost Score between 60 and 80. Strong signals (named company, specific role, recent posting, specific requirements) BUT no salary. LATAM context should give 8 pts for salary (not 0), keeping score in 60-80 range.
**Pass/Fail:** PASS if score is 60-80. FAIL if score is below 60 (penalized too harshly for no salary) or above 80 (LATAM exception not applied).
**Severity if fail:** Major

---

### M-GC-06: Values alignment WITH profile — names matching value

**Category:** Mechanics
**Input:** Provide the following profile + job posting combo.

Profile YAML:

```yaml
version: "1.0"
values:
  completed: true
  core_values:
    - "autonomía"
    - "aprendizaje continuo"
    - "impacto real en usuarios"
  bulls_eye:
    work: 3
```

Job posting: "Empresa: MercadoLibre. Rol: Senior Product Engineer. Descripción: Equipo autónomo, tomás decisiones técnicas, aprendizaje constante con tecnologías nuevas. Impacto directo en 50M usuarios."

**Procedure:** Run session with profile pasted first, then posting text. Read the values alignment section.
**Expected:** Response includes `<values_alignment>` section. Names at least 1 of the user's values (autonomía, aprendizaje, impacto) as matching the posting. Gives estimated alignment score (e.g., 8/10).
**Pass/Fail:** PASS if values alignment section appears AND at least 1 specific value is named as matching. FAIL if alignment section is absent or values are not named.
**Severity if fail:** Major

---

### M-GC-07: Values alignment WITHOUT profile — section absent

**Category:** Mechanics
**Input:** Use S-GC-05 posting. Do NOT provide any profile YAML. Run full session.
**Procedure:** Run session without pasting a profile. Read response for any values alignment section.
**Expected:** No values alignment section in response. The response should have the scope disclaimer, score breakdown, and CTA — but no mention of "alineación con tus valores" beyond the profile check offer.
**Pass/Fail:** PASS if no values alignment section appears in the session output. FAIL if a values alignment section appears without a profile having been provided.
**Severity if fail:** Minor

---

### M-GC-08: Multiple postings in one session — no cross-contamination

**Category:** Mechanics
**Input:** Two sequential postings in the same session.

Posting A:

```
Empresa: EPAM Colombia. Rol: Java Developer. Publicado: hace 5 días. Salario: $10M-$15M COP. Requisitos: 3+ años Java. Equipo de 8 devs.
```

Posting B (immediately after A's analysis):

```
Empresa: Confidencial. Rol: Marketing Manager. Publicado: hace 3 meses. Sin salario. Sin empresa. Solo email: apply@gmail.com.
```

**Procedure:** Run session. Get analysis for Posting A. Then send Posting B in the same session. Read Posting B analysis.
**Expected:** Posting B analysis contains ZERO reference to Posting A's details (no "Java Developer", no "EPAM", no "$10M" from A). B's score should be low (0-25 range) based on its own signals only.
**Pass/Fail:** PASS if B's analysis contains no data from A AND B's score reflects B's own signals. FAIL if A's details bleed into B's analysis.
**Severity if fail:** Critical
