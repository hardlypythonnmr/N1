# Perfil N1 — Formato de Intercambio v1

> Compass populates: identity.adaptability (partial, completed:false), values.core_values (partial, completed:false), strengths.self_efficacy.physiological.
> All fields marked completed:false — Compass is a snapshot, not a full exploration.
> Full schema: shared/profile-format.md. Version: 1.0.

---

## What Compass fills

| Section                                 | Fields populated                                     | completed flag                                |
| --------------------------------------- | ---------------------------------------------------- | --------------------------------------------- |
| `identity.adaptability`                 | concern, control, curiosity, confidence (scores 1-5) | `false` — conversational approximation        |
| `values.core_values`                    | top 3 values (free text, from quick-check)           | `false` — quick-check, not full exploration   |
| `strengths.self_efficacy.physiological` | confidence score + obstacle (free text)              | `false` — pulse, not full strengths dimension |

All other fields are left as `null`. Tools that consume this profile read only `completed: true` sections. Since Compass sets `completed: false`, downstream tools (N1 Busca Adentro) will treat these as starting points, not final values.

---

## Schema (Compass output subset)

```yaml
version: "1.0"
created: null # ISO 8601 — set on first creation
updated: null # ISO 8601 — update on every change
language: "es" # es | en

triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
  specific_move: null
  urgency: null # immediate | 3_months | 6_months | exploratory

values:
  completed: false # quick-check only
  mode: "quick"
  core_values: [] # top 3 values — free text strings
  schwartz_profile:
    self_direction: null
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
    work: null
    relationships: null
    personal_growth: null
    leisure: null
  career_implications: []

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
    physiological: null # Compass fills: "confianza X/10, obstáculo: [texto]"
  flow_activities: []
  career_implications: []

identity:
  completed: false # conversational approximation, not standardized
  mode: "quick"
  identity_status: null
  adaptability: # Compass fills these 4 fields
    concern: null # 1-5
    control: null # 1-5
    curiosity: null # 1-5
    confidence: null # 1-5
  possible_selves: []
  active_experiments: []
  narrative_theme: null
  limiting_beliefs: []

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
  relational_context: null
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

---

## Version protocol

- Current version: `1.0`
- Required field: `version: "1.0"` in every profile
- Backward compatibility: tools must accept profiles with null/missing optional fields
- Breaking changes require major version bump (1.0 → 2.0)
- Compass always outputs `version: "1.0"`

---

## Portability rule

Profile YAML is portable by clipboard. No file sync, no accounts, no API. User copies YAML from Compass output and pastes into N1 Busca Adentro (or any other N1 tool) to continue from where they left off.

---

## Career Path Taxonomy (triage.specific_move valid values)

```
STAY & GROW: Promotion | Lateral transfer | Role expansion | Geographic transfer | Skill development | Environment optimization
MOVE: Scale up | Scale down | Sector pivot | Function pivot | Complete career change | Return to workforce | International relocation
GO INDEPENDENT: Freelance / solo consulting | Found a company | Join early-stage startup | Portfolio career | Creator / content business | Artistic / creative pursuit | Non-profit / social impact
PAUSE & RESET: Strategic sabbatical | Recovery period | Education / reskilling | Retirement transition | Exploration phase
```
