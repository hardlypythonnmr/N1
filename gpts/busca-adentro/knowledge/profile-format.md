# Perfil N1 — Formato de Intercambio v1

# Para GPTs: producí este YAML exactamente.

# El usuario lo puede pegar en cualquier herramienta N1.

---

```yaml
# ════════════════════════════════════════
# N1 Self-Knowledge Profile v1
# El Sistema Eres Tu — Busca Adentro
# ════════════════════════════════════════

version: "1.0"
created: null # ISO 8601 timestamp — set when profile is first created
updated: null # ISO 8601 timestamp — update every time any section changes
language: "es" # es | en

# ── TRIAGE ──────────────────────────────
triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
  specific_move: null # see Career Path Taxonomy below
  urgency: null # immediate | 3_months | 6_months | exploratory

# ── VALUES (ACT + Schwartz) ────────────
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
    work: null # 1-10 alignment score
    relationships: null
    personal_growth: null
    leisure: null
  career_implications: []

# ── STRENGTHS (VIA + Bandura + Flow + Big Five) ──
strengths:
  completed: false
  mode: null # quick | deep
  signature_strengths: [] # top 5 from VIA (free text, ordered)
  big_five:
    openness: null # 1-10
    conscientiousness: null
    extraversion: null
    agreeableness: null
    neuroticism: null
  self_efficacy:
    mastery_experiences: []
    vicarious_models: []
    social_persuasion: []
    physiological: null
  flow_activities: [] # {activity, challenge, skill, state}
  career_implications: []

# ── IDENTITY (Ibarra + Marcia + Savickas) ──
identity:
  completed: false
  mode: null # quick | deep
  identity_status: null # achieved | moratorium | foreclosed | diffused
  adaptability: # CAAS-12 conversational approximation (1-5)
    concern: null
    control: null # note: runs lower in collectivist cultures — 2-3 is normative in Colombia
    curiosity: null
    confidence: null
  possible_selves: []
  active_experiments: []
  narrative_theme: null
  limiting_beliefs: []

# ── PURPOSE (Frankl + MLQ + Ryff) ──────
purpose:
  completed: false
  mode: null # quick | deep
  mlq:
    presence: null # 1-7
    search: null # 1-7 — high search is normative in LATAM, not pathological
    quadrant: null # fulfilled | growing | seeking | disengaged
  meaning_sources:
    creative: null # what you give to the world
    experiential: null # what you receive from the world
    attitudinal: null # stance toward unavoidable suffering
  life_theme: null
  purpose_practice: []
  career_implications: []

# ── ENRICHMENT LAYERS ──────────────────
enrichment:
  psychological_flexibility: null # AAQ-II score (7-49)
  career_decision_self_efficacy: null # CDMSE-SF score
  psycap_hero: # PsyCap (Luthans 2007) — scored 1-6
    hope: null
    efficacy: null
    resilience: null
    optimism: null
  emotional_patterns: null
  relational_context: null
  somatic_signals: null

# ── CROSS-DIMENSION SYNTHESIS ──────────
synthesis:
  reinforcements: []
  conflicts: []
  career_recommendations: []
  next_actions: []

# ── EVOLUTION ──────────────────────────
evolution:
  assessments: [] # {date, instrument, scores}
  milestones: [] # {date, event, impact}
  next_reassessment: null # ISO 8601 — minimum 4-6 weeks from last full assessment
```

---

## Career Path Taxonomy — valores válidos para `triage.specific_move`

```
STAY & GROW (career_path: stay_grow)
├── Promotion
├── Lateral transfer
├── Role expansion
├── Geographic transfer
├── Skill development
└── Environment optimization

MOVE (career_path: move)
├── Scale up
├── Scale down
├── Sector pivot
├── Function pivot
├── Complete career change
├── Return to workforce
└── International relocation

GO INDEPENDENT (career_path: go_independent)
├── Freelance / solo consulting
├── Found a company
├── Join early-stage startup
├── Portfolio career
├── Creator / content business
├── Artistic / creative pursuit
└── Non-profit / social impact

PAUSE & RESET (career_path: pause_reset)
├── Strategic sabbatical
├── Recovery period
├── Education / reskilling
├── Retirement transition
└── Exploration phase
```

---

## Reglas de compatibilidad

- **version: "1.0"** requerido en todo perfil generado
- Los campos no completados quedan como `null` o `[]` — no los eliminés
- `completed: false` para dimensiones no exploradas — no las omitás
- Cada herramienta N1 acepta perfiles parciales — no es necesario completar todo
- Portabilidad: el usuario copia el YAML y lo pega en cualquier otra herramienta N1
