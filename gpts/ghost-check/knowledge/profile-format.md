# Perfil N1 — Formato de Intercambio v1

> Ghost Check reads: `values.core_values`, `values.bulls_eye.work`.
> Ghost Check does NOT write to the profile (scoring tool only, not an assessment).
> Full schema documented here for reference — Ghost Check uses the values section only.

---

## Schema completo

```yaml
# ════════════════════════════════════════
# N1 Self-Knowledge Profile v1
# El Sistema Eres Tu — Busca Adentro
# ════════════════════════════════════════

version: "1.0"
created: null # ISO 8601 timestamp
updated: null # ISO 8601 timestamp
language: "es" # es | en

# ── TRIAGE ──────────────────────────────
triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
  specific_move: null
  urgency: null # immediate | 3_months | 6_months | exploratory

# ── VALUES (ACT + Schwartz) ────────────
# Ghost Check reads: core_values, bulls_eye.work
values:
  completed: false
  mode: null # quick | deep
  core_values: [] # ranked list of top 5 personal values (free text)
  schwartz_profile:
    self_direction: null # 1-9
    stimulation: null
    hedonism: null
    achievement: null
    power: null
    security: null
    conformity: null
    tradition: null
    benevolence: null
    universalism: null
  value_conflicts: []
  bulls_eye:
    work: null # 1-10 — current work alignment with core values
    relationships: null
    personal_growth: null
    leisure: null
  career_implications: []

# ── STRENGTHS ──────────────────────────
strengths:
  completed: false
  mode: null
  signature_strengths: []
  big_five:
    openness: null
    conscientiousness: null
    extraversion: null
    agreeableness: null
    neuroticism: null
  self_efficacy:
    mastery_experiences: []
    vicarious_models: []
    social_persuasion: []
    physiological: null
  flow_activities: []
  career_implications: []

# ── IDENTITY ───────────────────────────
identity:
  completed: false
  mode: null
  identity_status: null # achieved | moratorium | foreclosed | diffused
  adaptability:
    concern: null # 1-5 (CAAS)
    control: null
    curiosity: null
    confidence: null
  possible_selves: []
  active_experiments: []
  narrative_theme: null
  limiting_beliefs: []

# ── PURPOSE ────────────────────────────
purpose:
  completed: false
  mode: null
  mlq:
    presence: null # 1-7
    search: null # 1-7
    quadrant: null # fulfilled | growing | seeking | disengaged
  meaning_sources:
    creative: null
    experiential: null
    attitudinal: null
  life_theme: null
  purpose_practice: []
  career_implications: []

# ── ENRICHMENT ─────────────────────────
enrichment:
  psychological_flexibility: null # AAQ-II score (7-49)
  career_decision_self_efficacy: null
  psycap_hero:
    hope: null # 1-6
    efficacy: null
    resilience: null
    optimism: null
  emotional_patterns: null
  relational_context: null
  somatic_signals: null

# ── SYNTHESIS ──────────────────────────
synthesis:
  reinforcements: []
  conflicts: []
  career_recommendations: []
  next_actions: []

# ── EVOLUTION ──────────────────────────
evolution:
  assessments: []
  milestones: []
  next_reassessment: null
```

---

## How Ghost Check uses this profile

Ghost Check reads the profile in read-only mode. It does not modify any fields.

**Fields used:**

| Field                                | What Ghost Check does with it                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------------------------- |
| `values.core_values`                 | Matches top 3 values against job description signals                                               |
| `values.bulls_eye.work`              | If < 5: flags current low alignment; if new role also < 5 alignment, names the double misalignment |
| `values.schwartz_profile` (optional) | If self_direction > 7 and role shows micromanagement signals: flags explicitly                     |
| `values.value_conflicts` (optional)  | Considers known conflicts when estimating role alignment                                           |

**Fields Ghost Check ignores:** All strengths, identity, purpose, enrichment, synthesis, and evolution fields — these are out of scope for a job posting scoring tool.

---

## Portability rule

Profile YAML is portable by clipboard — no accounts, no sync, no API. The user copies their profile from one N1 tool and pastes it into Ghost Check. Ghost Check reads it in that session only.

---

## Version compatibility

- Current version: `1.0`
- Ghost Check accepts profiles where optional fields are null or missing
- If `version` field is absent, treat as v1.0 (backward compatible)
- If `values` section is absent or `values.completed` is false: skip values alignment analysis, proceed with ghost scoring only

---

## Example: profile with values section completed

```yaml
version: "1.0"
created: "2026-03-15T10:00:00Z"
updated: "2026-03-22T14:30:00Z"
language: "es"

triage:
  situation: "exploration"
  career_path: "move"
  urgency: "3_months"

values:
  completed: true
  mode: "deep"
  core_values:
    - "Autonomia y libertad de decision"
    - "Aprendizaje continuo y maestria tecnica"
    - "Impacto real en los proyectos que trabajo"
    - "Integridad y trabajo bien hecho"
    - "Tiempo de calidad con familia"
  bulls_eye:
    work: 4
    relationships: 7
    personal_growth: 6
    leisure: 5

strengths:
  completed: false
```

**Ghost Check reads from this profile:**

- Top values: autonomy, learning/mastery, real impact
- `bulls_eye.work`: 4/10 — currently low alignment
- Implication: if the job posting shows heavy bureaucracy, micromanagement, or unclear outcomes → flag misalignment explicitly
