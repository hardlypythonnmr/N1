# Busca Adentro — Eval Harness Test Cases (22 tests)

Skill: `skills/busca-adentro/SKILL.md`
Reads: 5 shared files + 4 dimension reference files (lazy-loaded)
Modes: quick (~5 turns per dimension) | deep (15-25 Socratic turns per dimension)

---

## Structural Tests (S-BA)

### S-BA-01: All 9 files accessible at session start

**Category:** Structural
**Input:** "Hola, quiero explorar mis valores y fortalezas."
**Procedure:** Open fresh session with busca-adentro skill. Send input. Read first response.
**Expected:** First response is coherent, includes scope disclaimer verbatim, uses voseo. No error messages about missing files. 5 shared files (safety-protocol, prompting-stack, voice-guide, research-base, profile-format) are referenced or their effects visible (disclaimer present, voseo active, evidence-based framing).
**Pass/Fail:** PASS if first response is coherent with disclaimer and voseo. FAIL if error messages about missing files appear or disclaimer is absent.
**Severity if fail:** Critical

---

### S-BA-02: Reference files lazy-loaded per dimension

**Category:** Structural
**Input:** Start fresh session. Complete triage. Choose quick mode. Begin values dimension.
**Procedure:** Watch what files are loaded. Reference files for strengths, identity, and purpose should NOT be loaded at session start — only values-framework.md loads when values dimension begins.
**Expected:** Skill announces loading `skills/busca-adentro/references/values-framework.md` before values dimension (or references its content). Does NOT load all 4 reference files at start.
**Pass/Fail:** PASS if lazy-loading behavior is evident (one reference file per dimension, in sequence). FAIL if all 4 reference files are loaded simultaneously at session start.
**Severity if fail:** Major

---

### S-BA-03: Quick mode completes a dimension in ~5 turns

**Category:** Structural
**Input:** "Quiero una exploración rápida" (choose quick mode). Focus on values dimension.
**Procedure:** Select quick mode. Count the number of turns for the values dimension (from first question to YAML output for that dimension).
**Expected:** Values dimension completes in approximately 5 turns (5 questions asked and answered, then YAML generated). Not more than 8 turns for a simple quick mode run.
**Pass/Fail:** PASS if values dimension completes in 5-8 turns in quick mode. FAIL if quick mode takes 15+ turns.
**Severity if fail:** Major

---

### S-BA-04: Deep mode uses 15-25 Socratic turns per dimension

**Category:** Structural
**Input:** "Quiero la exploración profunda" (choose deep mode). Focus on values dimension.
**Procedure:** Select deep mode. Count the number of turns for the values dimension. Observe whether questions build on previous answers (Socratic).
**Expected:** Values dimension takes 15-25 turns in deep mode. Questions are Socratic — each builds on the previous answer rather than asking a new topic. ACT values elicitation, Schwartz mapping, Bull's Eye scoring all present.
**Pass/Fail:** PASS if dimension takes 15+ turns AND questions are demonstrably Socratic (building on prior answers). FAIL if deep mode is indistinguishable from quick mode in turn count.
**Severity if fail:** Major

---

### S-BA-05: YAML output per dimension with `completed: true`

**Category:** Structural
**Input:** Complete values dimension in quick mode.
**Procedure:** After values dimension completes, read the YAML block offered.
**Expected:** YAML block for values dimension contains `completed: true`, `mode: "quick"`, `updated` timestamp, `core_values` list (at least 3), and `career_implications` list. All required fields present per busca-adentro SKILL.md.
**Pass/Fail:** PASS if YAML block has `completed: true` and all required fields. FAIL if `completed: false` or required fields missing.
**Severity if fail:** Critical

---

### S-BA-06: Soft gate transitions reference prior dimension insights

**Category:** Structural
**Input:** Complete values dimension. Read the transition to strengths.
**Procedure:** Complete values dimension (quick mode). Read the soft gate message transitioning to strengths.
**Expected:** Soft gate message references specific values identified in the prior dimension. For example: "Con tus valores de [valor específico] identificados, la dimensión de Fortalezas va a ser especialmente reveladora — vemos dónde tus capacidades naturales refuerzan lo que más te importa."
**Pass/Fail:** PASS if soft gate message names at least one specific value from the prior dimension. FAIL if soft gate is generic ("¿seguimos con fortalezas?") without referencing prior data.
**Severity if fail:** Minor

---

### S-BA-07: Pause/resume produces partial YAML + resume instructions

**Category:** Structural
**Input:** "Prefiero pausar aquí y continuar otro día." (After completing 2 dimensions)
**Procedure:** Complete values dimension and strengths dimension. Then say you want to pause. Read the response.
**Expected:** System generates a partial YAML block with `completed: true` for values and strengths, `completed: false` for identity and purpose. Includes instructions to resume: "Guardá este YAML — cuando retomemos, pegalo al inicio de la sesión y continuamos desde identidad."
**Pass/Fail:** PASS if partial YAML with resume instructions is generated. FAIL if system ignores pause request or generates incomplete YAML without instructions.
**Severity if fail:** Major

---

### S-BA-08: Profile check at session start

**Category:** Structural
**Input:** "Quiero empezar busca adentro."
**Procedure:** Open fresh session. Send input. Read first response.
**Expected:** After disclaimer, first response asks: "¿Tenés un perfil N1 en YAML? Si es así, pegalo y empiezo desde donde dejaste. Si no, empecemos desde cero."
**Pass/Fail:** PASS if profile check question appears in first 2 turns. FAIL if session jumps directly to triage without offering profile import.
**Severity if fail:** Minor

---

### S-BA-09: Dimension skip logic for completed dimensions

**Category:** Structural
**Input:** Paste YAML with values dimension completed:

```yaml
version: "1.0"
values:
  completed: true
  mode: "quick"
  core_values:
    - "autonomía"
    - "aprendizaje"
    - "impacto"
strengths:
  completed: false
identity:
  completed: false
purpose:
  completed: false
```

**Procedure:** Paste the YAML. Read the response.
**Expected:** System announces that values is already completed and offers to skip to strengths: "Ya tenés valores completada — saltamos a fortalezas." Does NOT re-ask values questions.
**Pass/Fail:** PASS if system skips completed dimension and moves to next. FAIL if system re-runs completed dimension.
**Severity if fail:** Major

---

### S-BA-10: Scope disclaimer verbatim at session start

**Category:** Structural
**Input:** "Hola."
**Procedure:** Send greeting. Read first response.
**Expected:** First response contains exact text from busca-adentro SKILL.md `<disclaimer>` block: "N1 es una herramienta de orientación profesional basada en investigación. No es terapia, no es asesoría psicológica, y no reemplaza la orientación de un profesional de salud mental o coach certificado."
**Pass/Fail:** PASS if disclaimer appears verbatim. FAIL if disclaimer is paraphrased or absent.
**Severity if fail:** Critical

---

## Mechanics Tests (M-BA)

### M-BA-01: Values — top 3 named and confirmed with user

**Category:** Mechanics
**Input:** Quick mode values. Answer questions indicating: "freedom to decide how I work", "I love teaching others", "building things that last". For Q5 resonance: autonomía, aprendizaje, impacto, conexión.
**Procedure:** Run quick mode values dimension. Read the values extraction at the end.
**Expected:** Skill names top 3 values explicitly: e.g., "autonomía", "aprendizaje continuo", "impacto real". Then confirms: "¿Eso suena correcto?" or equivalent confirmation question.
**Pass/Fail:** PASS if 3 specific values are named AND user is asked to confirm. FAIL if values are vague or no confirmation sought.
**Severity if fail:** Major

---

### M-BA-02: Values — Bull's Eye work alignment score mapped

**Category:** Mechanics
**Input:** During values quick mode, when asked about Bull's Eye or values in current work, answer: "Mi trabajo actual me da poca autonomía — diría que un 3 sobre 10 de alineación."
**Procedure:** Complete values dimension. Read YAML output.
**Expected:** YAML contains `bulls_eye.work: 3` or similar numeric score. The score reflects user's stated alignment.
**Pass/Fail:** PASS if `bulls_eye.work` field has a numeric value between 1-10 matching user's stated alignment. FAIL if field is null or doesn't match.
**Severity if fail:** Major

---

### M-BA-03: Strengths — 2+ mastery experiences extracted

**Category:** Mechanics
**Input:** Quick mode strengths. Answer Q2 (mastery situation): "Lideré la migración de un monolito a microservicios para 2M de usuarios, terminamos 3 semanas antes y con cero downtime." Answer Q3 (flow): "Cuando resuelvo bugs difíciles de arquitectura, el tiempo desaparece."
**Procedure:** Complete strengths dimension. Read YAML output.
**Expected:** YAML `strengths.self_efficacy.mastery_experiences` contains at least 2 entries. At least one references the specific migration story.
**Pass/Fail:** PASS if `mastery_experiences` contains 2+ specific entries. FAIL if list is empty or contains only 1 entry.
**Severity if fail:** Major

---

### M-BA-04: Strengths — self-efficacy fields populated

**Category:** Mechanics
**Input:** Quick mode strengths. Provide concrete answers to all 5 strengths questions.
**Procedure:** Complete strengths dimension. Read YAML output.
**Expected:** YAML `strengths.self_efficacy` block is populated. `mastery_experiences` (1+ entry), `vicarious_models` (1+ entry from Q4 "what do others say you do well"), `social_persuasion` (1+ entry), `physiological` (state description). Not all null.
**Pass/Fail:** PASS if at least 3 of 4 self-efficacy subfields are populated. FAIL if all fields remain null.
**Severity if fail:** Major

---

### M-BA-05: Identity — Marcia status classified WITHOUT naming Marcia

**Category:** Mechanics
**Input:** Quick mode identity. For Q3 (commitment certainty): "Estoy explorando varias opciones — product management, liderazgo técnico, o quizás algo independiente. No tengo claro cuál." For Q2 (professional identities): "Me llama la atención ser Engineering Manager, pero también he pensado en ser CTO de startup."
**Procedure:** Complete identity dimension quick mode. Read the identity status assessment in the response.
**Expected:** System classifies identity status as "moratorium" or "exploratorio" (exploring without commitment) WITHOUT ever saying the word "Marcia" or "estatus de Marcia". Description should be: "estás en un momento de exploración activa" or similar descriptive language.
**Pass/Fail:** PASS if identity status is classified descriptively WITHOUT using "Marcia". FAIL if "Marcia" appears in user-facing text.
**Severity if fail:** Major

---

### M-BA-06: Identity — narrative_theme produced (specific, not generic)

**Category:** Mechanics
**Input:** Quick mode identity. For Q5 (career thread): "Siempre he conectado sistemas complejos — en mi primer trabajo conecté equipos de negocio y tecnología, luego lideré integraciones de APIs, ahora architecto soluciones que conectan datos con decisiones."
**Procedure:** Complete identity dimension. Read YAML output.
**Expected:** `identity.narrative_theme` contains a specific thread reflecting the user's actual answer. Example: "Conector de sistemas complejos — desde equipos hasta APIs hasta decisiones basadas en datos." NOT generic like "profesional en transición" or null.
**Pass/Fail:** PASS if `narrative_theme` is specific to the user's stated career thread. FAIL if generic or null.
**Severity if fail:** Major

---

### M-BA-07: Purpose — MLQ framing WITHOUT naming MLQ

**Category:** Mechanics
**Input:** Quick mode purpose. For Q1 (meaning scale 1-7): "Diría un 5 — tengo sentido de propósito pero no muy claro." For Q2 (searching): "Sí, estoy buscando entender mejor qué le da significado a mi vida."
**Procedure:** Complete purpose dimension quick mode. Read response.
**Expected:** System uses MLQ-10 framing (Presencia and Búsqueda subscales) for interpretation BUT does NOT say "MLQ", "MLQ-10", or "Meaning in Life Questionnaire" in user-facing text. Uses descriptive language: "Tu nivel de propósito actual" and "tu búsqueda de significado es activa".
**Pass/Fail:** PASS if MLQ framing is used without naming "MLQ" in user-facing text. FAIL if "MLQ" appears in user-facing response.
**Severity if fail:** Major

---

### M-BA-08: Purpose — life_theme specific to user

**Category:** Mechanics
**Input:** Quick mode purpose. For Q4 (problem born to solve): "Creo que nací para hacer que las organizaciones funcionen mejor — eliminar el desperdicio de talento que pasa cuando los sistemas mal diseñados frustran a personas brillantes."
**Procedure:** Complete purpose dimension. Read YAML.
**Expected:** `purpose.life_theme` reflects the user's specific statement. Not generic. Example: "Optimizar organizaciones para liberar el potencial de personas brillantes atrapadas por sistemas mal diseñados."
**Pass/Fail:** PASS if `life_theme` is specific and derived from user's answer. FAIL if `life_theme` is generic or null.
**Severity if fail:** Major

---

### M-BA-09: Deep mode produces measurably richer YAML than quick mode

**Category:** Mechanics
**Input:** Run two parallel sessions: one quick mode, one deep mode. Use the same values dimension. Compare YAML outputs.
**Procedure:** Session A: quick mode values. Session B: deep mode values. Same general persona (SWE exploring career transition). Compare the YAML outputs.
**Expected:** Deep mode YAML contains more populated fields than quick mode. Specifically: `schwartz_profile` should have more populated subfields in deep mode (not all null), `value_conflicts` list should be longer, `career_implications` more specific.
**Pass/Fail:** PASS if deep mode YAML has visibly richer content in at least 2 more fields than quick mode. FAIL if YAML outputs are indistinguishable.
**Severity if fail:** Major

---

### M-BA-10: ACT techniques used but never labeled as "ACT" or "defusion"

**Category:** Mechanics
**Input:** Quick mode values. When asked about values: "A veces me siento muy atrapado en pensamientos como 'no soy suficientemente bueno para ese rol'. ¿Cómo hago con eso?"
**Procedure:** Read the response to this message carefully.
**Expected:** System may use defusion-like techniques (externalizing the thought, creating distance from it) but NEVER uses the words "ACT", "defusion", "terapia de aceptación y compromiso", "CBT", "cognitive restructuring". Uses descriptive language: "Ese pensamiento — ¿qué tan seguido aparece?", or "Miremos ese pensamiento como información".
**Pass/Fail:** PASS if ACT-like technique is used without naming "ACT" or "defusion". FAIL if modality label appears in user-facing text.
**Severity if fail:** Major

---

### M-BA-11: At least 1 citation per dimension from research-base.md

**Category:** Mechanics
**Input:** Complete values dimension in quick mode.
**Procedure:** Read all responses during the values dimension. Look for citations.
**Expected:** At least 1 citation from research-base.md appears in the values dimension. Examples: "Schwartz (1992) identificó 10 valores humanos universales presentes en más de 70 culturas." or "La clarificación de valores tiene efectos grandes en bienestar y orientación de carrera: g = 0.57–0.82 en meta-análisis de 2024."
**Pass/Fail:** PASS if at least 1 research citation appears per dimension. FAIL if no citations appear in a completed dimension.
**Severity if fail:** Minor

---

### M-BA-12: Enrichment capture — Big Five or VIA mentions mapped to enrichment block

**Category:** Mechanics
**Input:** During strengths dimension, say: "Hice el test de personalidad hace un año — resultó que soy muy alto en Apertura y Concienzudo, pero bajo en Extroversión. ¿Eso es relevante?"
**Procedure:** Complete strengths dimension. Read the YAML output for `enrichment` block.
**Expected:** YAML `enrichment` block reflects the mentioned Big Five data. At least one field populated: `enrichment.psychological_flexibility` or similar. Big Five mention captured in `strengths.big_five` block with user-reported values.
**Pass/Fail:** PASS if user-mentioned Big Five data appears in the YAML output (not left as null). FAIL if the data is ignored and all enrichment fields remain null.
**Severity if fail:** Minor
