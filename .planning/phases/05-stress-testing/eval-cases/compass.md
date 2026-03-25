# Compass — Eval Harness Test Cases (20 tests)

Skill: `skills/compass/SKILL.md`
Reads: `shared/safety-protocol.md`, `shared/voice-guide.md`, `shared/profile-format.md`, `shared/research-base.md`
Session length: ~15-20 turns

---

## Structural Tests (S-CO)

### S-CO-01: Shared files load — 4 files accessible

**Category:** Structural
**Input:** "Hola, quiero hacer el compass check."
**Procedure:** Open fresh session with compass skill. Send input. Read first response.
**Expected:** Response is coherent and includes the scope disclaimer verbatim, the CAAS caveat (Savickas & Porfeli, 2012 citation), and uses voseo. No error messages about missing files.
**Pass/Fail:** PASS if first response includes the Savickas citation and is fully coherent. FAIL if response includes error messages or the citation is absent.
**Severity if fail:** Critical

---

### S-CO-02: Conversational CAAS caveat with Savickas & Porfeli (2012) citation

**Category:** Structural
**Input:** "Quiero hacer el check de CAAS."
**Procedure:** Open fresh session. Send input. Read first response.
**Expected:** First response includes the exact text or very close paraphrase: "Savickas & Porfeli (2012)" AND the caveat that this is an "aproximación conversacional" not a standardized administration. The CTA to the web Compass tool (standardized version) must also appear.
**Pass/Fail:** PASS if "Savickas" + "(2012)" + "aproximación conversacional" (or equivalent) all appear. FAIL if any of the three components is absent.
**Severity if fail:** Major

---

### S-CO-03: All 12 CAAS questions delivered

**Category:** Structural
**Input:** Run full CAAS session, answering each question with "3" (neutral).
**Procedure:** Start fresh session. For each question asked, respond with "3". Count the total number of questions asked across the 4 subscales.
**Expected:** Exactly 12 questions asked (Q1-Q3 Concern, Q4-Q6 Control, Q7-Q9 Curiosity, Q10-Q12 Confidence). No questions skipped. No extra questions beyond 12.
**Pass/Fail:** PASS if exactly 12 questions are asked before moving to values/self-efficacy. FAIL if fewer than 12 or more than 12 questions are asked.
**Severity if fail:** Major

---

### S-CO-04: Values quick-check — 3 questions delivered

**Category:** Structural
**Input:** Complete all 12 CAAS questions with answer "3". Then respond to values section.
**Procedure:** After CAAS, respond to each values question. Count how many values questions are asked.
**Expected:** Exactly 3 values questions asked (per `<values_quick_check>` section in SKILL.md): about 3 things that matter in work, a recent positive work moment, and what work you'd do unpaid.
**Pass/Fail:** PASS if exactly 3 values questions appear before values extraction. FAIL if fewer or more than 3.
**Severity if fail:** Major

---

### S-CO-05: Self-efficacy pulse — 2 questions delivered

**Category:** Structural
**Input:** Complete CAAS + values sections. Then respond to self-efficacy questions.
**Procedure:** After values section, count how many self-efficacy questions are asked.
**Expected:** Exactly 2 self-efficacy questions: (1) 1-10 confidence in achieving career goals, and (2) biggest obstacle to achieving them.
**Pass/Fail:** PASS if exactly 2 self-efficacy questions appear. FAIL if fewer or more than 2.
**Severity if fail:** Minor

---

### S-CO-06: Snapshot format matches SKILL.md template

**Category:** Structural
**Input:** Complete full session (all 12 CAAS + 3 values + 2 self-efficacy questions, all answered with "3" for CAAS, generic answers for others).
**Procedure:** Run session to completion. Inspect the snapshot output format.
**Expected:** Snapshot contains exactly these sections in order:

1. "**Tu snapshot de carrera N1**" header
2. "Adaptabilidad profesional (CAAS aproximado — Savickas & Porfeli, 2012):" with all 4 subscales
3. "Score general: [X]/5"
4. "Tus 3 valores principales: [V1], [V2], [V3]"
5. "Estado de autoeficacia: [score]/10"
6. "Principal obstáculo identificado: [texto]"
7. "**Lectura general:**" section
8. "**Las 3 cosas más útiles que podés hacer ahora:**" list
   **Pass/Fail:** PASS if all 8 sections appear in order. FAIL if any section is missing or ordering differs significantly.
   **Severity if fail:** Major

---

### S-CO-07: YAML output validates with correct fields

**Category:** Structural
**Input:** Complete full session. After snapshot, request YAML: "¿Podés generar el YAML?"
**Procedure:** Run full session to completion. Request YAML export. Validate structure.
**Expected:** YAML contains all required fields per compass SKILL.md `<yaml_output>` section: `version`, `created`, `updated`, `language`, `triage` block (all null), `values.completed: false`, `values.core_values` (3 values), `strengths.completed: false`, `identity.completed: false`, `identity.adaptability` (4 subscores), `purpose.completed: false`.
**Pass/Fail:** PASS if YAML is syntactically valid and contains all required fields. FAIL if YAML is malformed or missing required fields.
**Severity if fail:** Major

---

### S-CO-08: All fields `completed: false` in YAML output

**Category:** Structural
**Input:** Complete full compass session. Request YAML.
**Procedure:** Run session to completion. Request and inspect YAML.
**Expected:** YAML shows `completed: false` for values, strengths, identity, and purpose sections. This indicates quick-check mode — not full dimension exploration.
**Pass/Fail:** PASS if all 4 dimension blocks have `completed: false`. FAIL if any dimension shows `completed: true` (compass is not a full busca-adentro session).
**Severity if fail:** Major

---

### S-CO-09: CTA to busca-adentro at session close

**Category:** Structural
**Input:** Complete full session including snapshot and YAML.
**Procedure:** Run session to completion. Check the final CTA.
**Expected:** Session includes CTA to N1 Busca Adentro — approximately: "Para explorar cada una de estas dimensiones en profundidad, N1 Busca Adentro es el siguiente paso natural."
**Pass/Fail:** PASS if CTA to Busca Adentro appears. FAIL if no CTA to Busca Adentro.
**Severity if fail:** Minor

---

### S-CO-10: CTA to web tool (standardized version) present

**Category:** Structural
**Input:** Complete full session.
**Procedure:** Run session to completion. Check if any CTA references the web Compass tool.
**Expected:** At least one reference to the web Compass tool for standardized CAAS-12 results — approximately: "Para una evaluación estandarizada, usá N1 Compass (web/compass)" or "la herramienta estandarizada en [N1 Compass web]".
**Pass/Fail:** PASS if reference to web tool for standardized version appears. FAIL if absent.
**Severity if fail:** Minor

---

## Mechanics Tests (M-CO)

### M-CO-01: Floor scores — all 1s → subscales = 1.0, general = 1.0

**Category:** Mechanics
**Input:** Complete 12 CAAS questions with all answers = "1" (minimum).
**Procedure:** Open fresh session. For all 12 CAAS questions, answer "1". Allow session to compute scores.
**Expected:** All 4 subscale scores = 1.0. General score = 1.0. Snapshot reads: Concern: 1.0/5, Control: 1.0/5, Curiosity: 1.0/5, Confidence: 1.0/5, Score general: 1.0/5.
**Pass/Fail:** PASS if all subscales and general score = 1.0. FAIL if any score differs.
**Severity if fail:** Critical

---

### M-CO-02: Ceiling scores — all 5s → subscales = 5.0, general = 5.0

**Category:** Mechanics
**Input:** Complete 12 CAAS questions with all answers = "5" (maximum).
**Procedure:** Open fresh session. For all 12 CAAS questions, answer "5". Allow session to compute scores.
**Expected:** All 4 subscale scores = 5.0. General score = 5.0. Snapshot reads: Concern: 5.0/5, Control: 5.0/5, Curiosity: 5.0/5, Confidence: 5.0/5, Score general: 5.0/5.
**Pass/Fail:** PASS if all subscales and general score = 5.0. FAIL if any score differs.
**Severity if fail:** Critical

---

### M-CO-03: Mixed extremes → correct per-subscale calculation

**Category:** Mechanics
**Input:** CAAS answers: Q1=5, Q2=5, Q3=5 (Concern), Q4=1, Q5=1, Q6=1 (Control), Q7=3, Q8=3, Q9=3 (Curiosity), Q10=5, Q11=5, Q12=5 (Confidence).
**Procedure:** Open fresh session. Answer each question as specified above. Allow score computation.
**Expected:**

- Concern = (5+5+5)/3 = 5.0
- Control = (1+1+1)/3 = 1.0
- Curiosity = (3+3+3)/3 = 3.0
- Confidence = (5+5+5)/3 = 5.0
- General = (5.0+1.0+3.0+5.0)/4 = 3.5
  **Pass/Fail:** PASS if all subscales match the expected values exactly. FAIL if any calculation error.
  **Severity if fail:** Critical

---

### M-CO-04: Low Control → LATAM normative note present

**Category:** Mechanics
**Input:** CAAS answers: Q1=4, Q2=4, Q3=4 (Concern), Q4=2, Q5=1, Q6=2 (Control = 1.67), Q7=3, Q8=3, Q9=3 (Curiosity), Q10=3, Q11=3, Q12=3 (Confidence).
**Procedure:** Run full session with these answers. Read snapshot.
**Expected:** Snapshot includes the LATAM normative note for Control score: "Un puntaje de Control más bajo es común en contextos donde las decisiones de carrera están influidas por la familia, las circunstancias económicas o la cultura organizacional" or close equivalent.
**Pass/Fail:** PASS if LATAM normative note appears in Control section of snapshot. FAIL if low Control is treated as a problem without cultural context.
**Severity if fail:** Major

---

### M-CO-05: Low Confidence → conditional CTA to strengths module

**Category:** Mechanics
**Input:** CAAS answers: Q1=4, Q2=4, Q3=4 (Concern), Q4=3, Q5=3, Q6=3 (Control), Q7=4, Q8=4, Q9=4 (Curiosity), Q10=2, Q11=1, Q12=2 (Confidence = 1.67 — low).
**Procedure:** Run full session. Read the CTA section at the end.
**Expected:** CTA includes the conditional Confidence CTA: "Tu confianza en carrera es el área con más margen de mejora. N1 Busca Adentro tiene un módulo específico de Fortalezas que trabaja exactamente eso."
**Pass/Fail:** PASS if Confidence-specific CTA appears when Confidence < 3.0. FAIL if generic CTA is used without addressing low Confidence.
**Severity if fail:** Minor

---

### M-CO-06: Existing profile with adaptability — skip or update offer

**Category:** Mechanics
**Input:** Paste profile YAML with existing adaptability data:

```yaml
version: "1.0"
identity:
  completed: false
  adaptability:
    concern: 4.0
    control: 2.5
    curiosity: 3.5
    confidence: 3.0
```

Then say: "Quiero hacer el compass."
**Procedure:** Open session. Paste profile first. Then request compass.
**Expected:** System detects existing adaptability data and offers: "Ya tenés un CAAS completado. ¿Querés actualizarlo con una nueva conversación, o preferís que use los datos existentes y hagamos directamente el análisis y el snapshot?"
**Pass/Fail:** PASS if system offers skip/update choice. FAIL if system ignores existing data and runs all 12 questions anyway.
**Severity if fail:** Major

---

### M-CO-07: Non-numeric answer → graceful probe or qualitative mapping

**Category:** Mechanics
**Input:** When asked Q1 (Concern), respond with: "No lo pienso casi nunca, siempre estoy en piloto automático."
**Procedure:** Open fresh session. Complete scope disclaimer. When Q1 is asked, provide the qualitative answer above instead of a number 1-5.
**Expected:** System does NOT throw an error. It either: (a) asks for a numeric rating based on the qualitative description ("Basado en lo que me contás, ¿eso sería más un 1 o un 2?"), or (b) maps the answer to a numeric value and confirms ("Lo que describís suena a un 1 o 2 en la escala...").
**Pass/Fail:** PASS if system gracefully handles non-numeric answer with a follow-up. FAIL if system produces an error, skips the question, or accepts no answer.
**Severity if fail:** Major

---

### M-CO-08: Values extraction accuracy — maps to Schwartz reference values

**Category:** Mechanics
**Input:** For the 3 values questions, give these specific answers:

- Q1: "Lo más importante para mí es poder decidir cómo y cuándo trabajo, sin que me microgestionen."
- Q2: "Salí muy bien de una reunión donde presenté mi análisis de datos y el equipo lo adoptó como estrategia — me gustó que mi trabajo tuviera impacto real."
- Q3: "Haría análisis de datos de todos modos aunque no me pagaran — me gusta mucho descubrir patrones."
  **Procedure:** Run session. Give these answers for the 3 values questions. Read the extracted values.
  **Expected:** System identifies and names values from the Schwartz reference list: specifically "autonomía" (from Q1), "impacto real" or similar (from Q2), and "aprendizaje" or "maestría técnica" (from Q3). Confirms with user.
  **Pass/Fail:** PASS if at least 2 of the 3 values mapped match Schwartz reference values (autonomía, impacto, aprendizaje/maestría). FAIL if values are generic or don't reference Schwartz.
  **Severity if fail:** Minor

---

### M-CO-09: Interpretation table accuracy — matches SKILL.md table

**Category:** Mechanics
**Input:** CAAS answers: Q1=1, Q2=2, Q3=1 (Concern = 1.33), Q4=4, Q5=4, Q6=4 (Control = 4.0), Q7=2, Q8=2, Q9=2 (Curiosity = 2.0), Q10=5, Q11=5, Q12=5 (Confidence = 5.0).
**Procedure:** Run session with these answers. Read interpretations per subscale.
**Expected:** Interpretations match SKILL.md table:

- Concern (1.33): "Poca orientación al futuro — explorar qué lo bloquea" (range 1-2)
- Control (4.0): "Alta agencia personal" (range 4-5)
- Curiosity (2.0): "Poca exploración activa" (range 1-2)
- Confidence (5.0): "Alta confianza para ejecutar" (range 4-5)
  **Pass/Fail:** PASS if interpretations match the SKILL.md table ranges. FAIL if interpretations contradict the table.
  **Severity if fail:** Major

---

### M-CO-10: Session completes within ~15-20 turns

**Category:** Mechanics
**Input:** Complete the full session responding efficiently (numeric answers for CAAS, 1-2 sentence answers for values/self-efficacy).
**Procedure:** Count the number of conversational turns from opening to YAML output. A "turn" is a pair of user message + AI response.
**Expected:** Session completes in 15-20 turns maximum. Breakdown: ~1 turn intro/disclaimer, 12 turns CAAS questions, ~3 turns values, ~2 turns self-efficacy, 1 turn snapshot, 1 turn YAML = approximately 20 turns total.
**Pass/Fail:** PASS if session completes in 20 turns or fewer. FAIL if session exceeds 25 turns for simple efficient responses.
**Severity if fail:** Minor
