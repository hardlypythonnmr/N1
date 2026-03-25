# Cross-Skill Portability — Eval Harness Test Cases (11 tests)

Tests YAML handoff chain across skills. Profile Interchange Format v1 must survive every transition.

---

## Chain A: Entry → Deep → Action

### X-01: Compass YAML → Busca Adentro (adaptability data recognized)

**Category:** Cross-Skill
**Input:** Compass YAML output:

```yaml
version: "1.0"
created: "2026-03-20T10:00:00Z"
updated: "2026-03-20T10:45:00Z"
language: "es"
triage:
  situation: null
  career_path: null
  specific_move: null
  urgency: null
values:
  completed: false
  mode: "quick"
  core_values:
    - "autonomía"
    - "aprendizaje"
    - "impacto"
strengths:
  completed: false
  self_efficacy:
    physiological: "Confianza 7/10. Obstáculo: falta de red de contactos en producto."
identity:
  completed: false
  mode: "quick"
  adaptability:
    concern: 4.0
    control: 2.5
    curiosity: 3.5
    confidence: 3.0
purpose:
  completed: false
```

Paste this into Busca Adentro session.

**Procedure:** Open Busca Adentro session. Paste Compass YAML. Read response.
**Expected:** Busca Adentro recognizes the adaptability data (concern: 4.0, control: 2.5, curiosity: 3.5, confidence: 3.0) and offers to skip or deepen the identity/CAAS portion: "Ya tenés datos de adaptabilidad de carrera. ¿Querés explorar eso más a fondo en modo profundo, o saltamos y usamos este snapshot como base para la dimensión de identidad?"
**Pass/Fail:** PASS if system acknowledges adaptability data AND offers skip/deepen choice. FAIL if system ignores the data and starts CAAS from scratch.
**Severity if fail:** Major

---

### X-02: Busca Adentro YAML → Construye Afuera (references values, strengths, narrative_theme)

**Category:** Cross-Skill
**Input:** Full Busca Adentro YAML output:

```yaml
version: "1.0"
created: "2026-03-20T11:00:00Z"
updated: "2026-03-20T13:00:00Z"
language: "es"
triage:
  situation: "exploration"
  career_path: "move"
  urgency: "3_months"
values:
  completed: true
  mode: "quick"
  core_values:
    - "autonomía"
    - "impacto real en usuarios"
    - "aprendizaje continuo"
  bulls_eye:
    work: 3
  career_implications:
    - "Roles con alta autonomía técnica"
    - "Equipos pequeños y enfocados"
strengths:
  completed: true
  mode: "quick"
  signature_strengths:
    - "arquitectura de sistemas"
    - "mentoría técnica"
    - "resolución de problemas complejos"
  self_efficacy:
    mastery_experiences:
      - "Migré sistema de pagos para 500K usuarios — 0 downtime"
      - "Monté equipo de 5 engineers desde cero en 6 meses"
identity:
  completed: true
  narrative_theme: "Arquitecto que construye puentes entre sistemas complejos y personas"
  identity_status: "moratorium"
purpose:
  completed: true
  life_theme: "Hacer que el trabajo de otros sea más poderoso y menos frustrante"
```

Paste into Construye Afuera and request CV Audit.

**Procedure:** Open Construye Afuera. Paste YAML. Request CV Audit for a Senior Engineer → Engineering Manager transition. Provide CV. Read response.
**Expected:** CV Audit references at least 3 data points from the YAML: (1) narrative_theme in recommendations, (2) mastery_experiences as basis for metrics to add, (3) core_values to check alignment in current CV. Response says explicitly what profile data is being used.
**Pass/Fail:** PASS if CV Audit explicitly references 3+ profile fields by name. FAIL if response is generic and ignores profile.
**Severity if fail:** Major

---

### X-03: Full YAML → N1 System (detects completed dimensions, offers evolution not restart)

**Category:** Cross-Skill
**Input:** Full completed YAML (all 4 dims = completed:true, `evolution.next_reassessment` = 5 weeks ago).

```yaml
version: "1.0"
created: "2026-02-01T10:00:00Z"
updated: "2026-02-01T14:00:00Z"
values:
  completed: true
  core_values: ["autonomía", "impacto", "aprendizaje"]
strengths:
  completed: true
  signature_strengths: ["arquitectura", "mentoría", "análisis"]
identity:
  completed: true
  narrative_theme: "Conector de sistemas y personas"
purpose:
  completed: true
  life_theme: "Hacer el trabajo de otros más poderoso"
evolution:
  next_reassessment: "2026-02-26T00:00:00Z"
```

Paste into N1 System.

**Procedure:** Paste completed YAML into N1 System. Read response.
**Expected:** System detects all 4 dimensions are completed AND that reassessment date has passed. Offers evolution/update flow: "Tenés el sistema completo de hace 7 semanas. ¿Querés revisar qué cambió, o empezar una dimensión específica desde cero?" Does NOT restart the full system.
**Pass/Fail:** PASS if system offers evolution flow instead of restart. FAIL if system ignores completed dims and starts from scratch.
**Severity if fail:** Major

---

### X-04: Version field preserved at every stage of handoff

**Category:** Cross-Skill
**Input:** Start with Compass YAML (version: "1.0"). Pass through Busca Adentro. Pass to Construye Afuera.
**Procedure:** Generate Compass YAML. Take that YAML to Busca Adentro and generate updated YAML. Take updated YAML to Construye Afuera. Check version field at each stage.
**Expected:** `version: "1.0"` is preserved unchanged at every stage. No tool changes the version field. No tool adds a different version number.
**Pass/Fail:** PASS if version field is "1.0" in all YAML outputs. FAIL if version is removed, changed, or inconsistent.
**Severity if fail:** Major

---

### X-05: Enrichment accumulates — not overwritten

**Category:** Cross-Skill
**Input:** YAML from Compass with enrichment data:

```yaml
enrichment:
  psychological_flexibility: "Alta — usuario describe capacidad de actuar con valores incluso con incertidumbre"
```

Pass this YAML to Busca Adentro. Complete a dimension that might touch enrichment (identity or purpose).

**Procedure:** Paste YAML with enrichment field to Busca Adentro. Complete identity dimension. Request YAML output. Check enrichment block.
**Expected:** Final YAML from Busca Adentro preserves the `psychological_flexibility` value from Compass AND adds new enrichment data from the Busca Adentro session (if any was captured). Enrichment accumulates — prior data is NOT overwritten with null.
**Pass/Fail:** PASS if `psychological_flexibility` is preserved in output YAML. FAIL if enrichment field is overwritten with null.
**Severity if fail:** Major

---

### X-06: Schema compliance at every handoff

**Category:** Cross-Skill
**Input:** Run the full Compass → Busca Adentro → Construye Afuera chain. Collect YAML at each stage.
**Procedure:** Run each skill in sequence. Collect YAML output from each. Check each against profile-format.md schema.
**Expected:** All 3 YAML outputs are schema-compliant per profile-format.md. No hallucinated fields (fields not in the schema). No missing required fields (version, created, language).
**Pass/Fail:** PASS if all 3 YAML outputs are schema-compliant. FAIL if any YAML contains hallucinated fields or missing required fields.
**Severity if fail:** Critical

---

## Chain B: Viral Funnel

### X-07: Ghost Check CTA clearly references Compass

**Category:** Cross-Skill
**Input:** Complete a Ghost Check session (any posting). Read the closing CTA.
**Procedure:** Run Ghost Check to completion. Read the CTA section.
**Expected:** CTA section explicitly mentions N1 Compass by name and describes it as the next step: "¿Querés saber qué tan listo estás para el mercado laboral ahora mismo? Probá N1 Compass." Not a generic "try our other tools."
**Pass/Fail:** PASS if "N1 Compass" is named by name in the CTA. FAIL if CTA is generic or names a different skill.
**Severity if fail:** Minor

---

### X-08: Compass cold start after Ghost Check — no confusion

**Category:** Cross-Skill
**Input:** Complete Ghost Check session. Then open Compass session fresh. Start Compass.
**Procedure:** Run Ghost Check. Then open new Compass session (no context from Ghost Check). Read Compass opening.
**Expected:** Compass opens cleanly with its own disclaimer and CAAS framing. No reference to Ghost Check in Compass opening. No confusion about context. Compass behaves identically whether opened fresh or after Ghost Check.
**Pass/Fail:** PASS if Compass opens cleanly regardless of prior session. FAIL if Compass appears confused or references Ghost Check inappropriately.
**Severity if fail:** Minor

---

### X-09: Funnel coherence — CTAs feel like natural next steps

**Category:** Cross-Skill
**Input:** Run all 5 skills in sequence: Ghost Check → Compass → Busca Adentro → Construye Afuera → N1 System. Evaluate each CTA.
**Procedure:** Run each skill. Read the closing CTA for each. Evaluate whether each CTA makes sense as a natural progression.
**Expected:** Funnel CTAs form a coherent sequence: Ghost Check → Compass → Busca Adentro → Construye Afuera → N1 System. Each CTA references the logical next step. CTAs don't feel like advertising — they feel like genuine recommendations based on what was just done.
**Pass/Fail:** PASS if all 5 CTAs form a coherent funnel and feel contextually appropriate. FAIL if CTAs are random, contradictory, or feel like advertising.
**Severity if fail:** Minor

---

## Chain C: Reverse Check

### X-10: Construye Afuera profile enriches Ghost Check values alignment

**Category:** Cross-Skill
**Input:** YAML from completed Construye Afuera session with values:

```yaml
version: "1.0"
values:
  completed: true
  core_values:
    - "autonomía"
    - "impacto real"
    - "aprendizaje"
  bulls_eye:
    work: 3
```

Paste into Ghost Check session. Analyze a job posting.

**Procedure:** Paste Construye Afuera YAML into Ghost Check. Analyze a posting (use M-GC-02 ceiling posting). Read the values alignment section.
**Expected:** Values alignment section references the specific values from the YAML ("autonomía", "impacto real"). Estimates alignment score based on how well the posting description matches these values. Not generic.
**Pass/Fail:** PASS if values alignment section names specific values from YAML. FAIL if values alignment section is absent or generic.
**Severity if fail:** Major

---

### X-11: Ghost Check recommendation references career path from profile

**Category:** Cross-Skill
**Input:** YAML with career path:

```yaml
version: "1.0"
triage:
  career_path: "go_independent"
  urgency: "3_months"
values:
  completed: true
  core_values: ["autonomía", "impacto", "aprendizaje"]
```

Paste into Ghost Check. Analyze a posting.

**Procedure:** Paste YAML with `career_path: "go_independent"`. Analyze a standard job posting (S-GC-05 posting). Read recommendation.
**Expected:** Ghost Check recommendation considers career path context. For `go_independent`, recommendation might note: "Si estás explorando el trabajo independiente, esta oferta podría servir como puente — pero notar que la empresa requiere tiempo completo presencial, lo cual limita tu margen de independencia." Uses career path as context for personalized recommendation.
**Pass/Fail:** PASS if recommendation references career_path from YAML. FAIL if recommendation ignores career_path and gives generic advice.
**Severity if fail:** Minor
