# Perfil N1 — Formato de Intercambio v1 / Construye Afuera

> Construye Afuera populates: triage fields (situation, career_path, urgency).
> Busca Adentro populates: values, strengths, identity, purpose.
> Schema version: 1.0 | All tools must produce YAML compatible with this schema.

---

## Cómo usar este archivo

**Producir un perfil (herramienta → perfil):**

1. Completá solo las secciones trabajadas — dejá el resto como null
2. Establecé `completed: true` para cada dimensión completada
3. Actualizá `updated` con la fecha ISO 8601 actual

**Consumir un perfil (GPT leyendo un perfil):**

1. El usuario pega su YAML en el chat
2. Lee las secciones completadas (donde `completed: true`)
3. Usá los datos para personalizar respuestas sin repetir lo que ya saben
4. Tratá los campos null como "aún no explorado"

**Portabilidad:** El YAML es portable por clipboard. Sin sincronización de archivos, sin cuentas, sin API.

---

## Schema completo

```yaml
# ════════════════════════════════════════
# N1 Self-Knowledge Profile v1
# El Sistema Eres Tu — Busca Adentro + Construye Afuera
# ════════════════════════════════════════

version: "1.0"
created: null # ISO 8601 timestamp
updated: null # ISO 8601 timestamp — actualizá cada vez que cambie una sección
language: "es" # es | en

# ── TRIAGE ──────────────────────────────
# Snapshot situacional: dónde está el usuario ahora
# Construye Afuera popula estos campos durante el triage
triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
  specific_move: null # ver Career Path Taxonomy
  urgency: null # immediate | 3_months | 6_months | exploratory

# ── VALUES (ACT + Schwartz) ────────────
# Lo que el usuario más valora — basado en ACT y Schwartz Basic Human Values
# Busca Adentro popula esta dimensión
values:
  completed: false
  mode: null # quick | deep
  core_values: [] # lista ordenada de los 5 valores personales más importantes
  schwartz_profile:
    self_direction: null # 1-9
    stimulation: null # 1-9
    hedonism: null # 1-9
    achievement: null # 1-9
    power: null # 1-9
    security: null # 1-9
    conformity: null # 1-9
    tradition: null # 1-9
    benevolence: null # 1-9
    universalism: null # 1-9
  value_conflicts: [] # tensiones identificadas entre valores en competencia
  bulls_eye:
    work: null # 1-10 — qué tan alineado está el trabajo actual con valores core
    relationships: null # 1-10
    personal_growth: null # 1-10
    leisure: null # 1-10
  career_implications: [] # cómo el perfil de valores se traduce en consideraciones de carrera

# ── STRENGTHS (VIA + Bandura + Flow + Big Five) ──
# Fortalezas de carácter, perfil cognitivo y condiciones de desempeño óptimo
# Busca Adentro popula esta dimensión
strengths:
  completed: false
  mode: null # quick | deep
  signature_strengths: [] # top 5 de VIA Character Survey
  big_five:
    openness: null # 1-10
    conscientiousness: null # 1-10
    extraversion: null # 1-10
    agreeableness: null # 1-10
    neuroticism: null # 1-10
  self_efficacy:
    mastery_experiences: [] # éxitos pasados que construyeron confianza
    vicarious_models: [] # modelos a seguir observados teniendo éxito en tareas similares
    social_persuasion: [] # aliento de personas creíbles
    physiological: null # estado físico/emocional actual afectando la eficacia
  flow_activities: [] # actividades que producen flow — formato: {activity, challenge, skill, state}
  career_implications: [] # cómo el perfil de fortalezas se traduce en carrera

# ── IDENTITY (Ibarra + Marcia + Savickas) ──
# Quién es el usuario profesionalmente y cómo está evolucionando esa identidad
# Busca Adentro popula esta dimensión
identity:
  completed: false
  mode: null # quick | deep
  identity_status: null # achieved | moratorium | foreclosed | diffused (Marcia 1966)
  adaptability: # CAAS-12 scores (Career Adapt-Abilities Scale, Savickas)
    concern: null # 1-5
    control: null # 1-5
    curiosity: null # 1-5
    confidence: null # 1-5
  possible_selves: [] # identidades profesionales exploradas (Ibarra)
  active_experiments: [] # experimentos actuales de identidad de carrera (Ibarra)
  narrative_theme: null # tema central de la historia de carrera (Savickas)
  limiting_beliefs: [] # creencias internalizadas que limitan la acción

# ── PURPOSE (Frankl + MLQ + Ryff) ──────
# Lo que da sentido al trabajo del usuario
# Busca Adentro popula esta dimensión
purpose:
  completed: false
  mode: null # quick | deep
  mlq: # Meaning in Life Questionnaire (Steger 2006)
    presence: null # 1-7 — sentido actual de que la vida tiene sentido
    search: null # 1-7 — búsqueda activa de sentido
    quadrant: null # fulfilled | growing | seeking | disengaged
  meaning_sources: # tres fuentes de sentido de Frankl
    creative: null # sentido a través de lo que dás al mundo
    experiential: null # sentido a través de lo que recibís
    attitudinal: null # sentido a través de tu postura ante el sufrimiento inevitable
  life_theme: null # narrativa de propósito general
  purpose_practice: [] # prácticas diarias/semanales conectadas al propósito
  career_implications: []

# ── ENRICHMENT LAYERS ──────────────────
enrichment:
  psychological_flexibility: null # AAQ-II score (7-49)
  career_decision_self_efficacy: null # CDMSE-SF score
  psycap_hero: # Psychological Capital (Luthans) — todos 1-6
    hope: null
    efficacy: null
    resilience: null
    optimism: null
  emotional_patterns: null # texto libre
  relational_context: null # restricciones familiares, culturales, relacionales
  somatic_signals: null # señales corporales: energía, tensión, reacciones viscerales

# ── CROSS-DIMENSION SYNTHESIS ──────────
synthesis:
  reinforcements: [] # dónde múltiples dimensiones se alinean y refuerzan
  conflicts: [] # dónde las dimensiones apuntan en direcciones distintas
  career_recommendations: [] # direcciones de carrera específicas apoyadas por el perfil completo
  next_actions: [] # próximos pasos concretos comprometidos por el usuario

# ── EVOLUTION ──────────────────────────
evolution:
  assessments: [] # {date, instrument, scores}
  milestones: [] # {date, event, impact}
  next_reassessment: null # ISO 8601 — mínimo 4-6 semanas desde la última evaluación completa
```

---

## Career Path Taxonomy — valores válidos para triage.specific_move

```
STAY & GROW (career_path: stay_grow)
├── Promotion (vertical move up)
├── Lateral transfer (same level, different function/team)
├── Role expansion (grow scope of current role)
├── Geographic transfer (same company, different location)
├── Skill development (upskill/reskill for future move)
└── Environment optimization (negotiate better conditions)

MOVE (career_path: move)
├── Scale up (same function, bigger company)
├── Scale down (same function, smaller company)
├── Sector pivot (same function, different industry)
├── Function pivot (different function, same industry)
├── Complete career change (new function + new industry)
├── Return to workforce (after gap, parental leave, health)
└── International relocation

GO INDEPENDENT (career_path: go_independent)
├── Freelance / solo consulting
├── Found a company (startup)
├── Join early-stage startup (#1-20 employee)
├── Portfolio career (multiple part-time roles)
├── Creator / content business
└── Non-profit / social impact

PAUSE & RESET (career_path: pause_reset)
├── Strategic sabbatical (intentional break with plan)
├── Recovery period (burnout, health, caregiving)
├── Education / reskilling (degree, bootcamp, certification)
├── Retirement transition
└── Exploration phase (deliberate moratorium)
```

---

## Ejemplo de perfil parcial (solo triage, listo para Construye Afuera)

```yaml
version: "1.0"
created: "2026-03-23T10:00:00Z"
updated: "2026-03-23T10:00:00Z"
language: "es"

triage:
  situation: "crisis"
  career_path: "move"
  specific_move: "Scale up (same function, bigger company)"
  urgency: "immediate"

values:
  completed: false
strengths:
  completed: false
identity:
  completed: false
purpose:
  completed: false
```
