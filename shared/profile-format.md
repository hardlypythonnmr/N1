# N1 Profile Interchange Format v1

> Canonical YAML schema for the N1 Self-Knowledge Profile.
> Every tool that produces assessment data MUST output YAML compatible with this schema.
> Every tool that consumes assessment data reads this schema.
> Version: 1.0 | Defined: 2026-03-23

---

## Version Protocol

- Current version: `1.0`
- Field: `version: "1.0"` — required in every profile YAML
- Backward compatibility: tools MUST accept profiles where optional fields are null or missing
- Breaking changes require major version bump (1.0 → 2.0)
- Additive changes require minor version bump (1.0 → 1.1)
- Versioned profiles: tools check `version` field and warn if incompatible

---

## How to Use

### Producing a profile (tools → profile)

1. Start from `shared/profile-template.yaml`
2. Fill in completed sections only — leave others as null
3. Set `completed: true` for each dimension you've finished
4. Set `updated` to current ISO 8601 timestamp

### Consuming a profile (skills/GPTs reading a profile)

1. User pastes their YAML profile into the conversation
2. Tool reads completed sections (where `completed: true`)
3. Tool uses completed data to skip covered ground and enrich responses
4. Tool treats null fields as "not yet explored"

### Portability rule

Profile YAML is portable by clipboard. No file sync, no accounts, no API.
User copies YAML from one tool, pastes into another.

---

## Complete Schema

```yaml
# ════════════════════════════════════════
# N1 Self-Knowledge Profile v1
# El Sistema Eres Tu — Busca Adentro
# ════════════════════════════════════════

version: "1.0"
created: null # ISO 8601 timestamp — set when profile is first created
updated: null # ISO 8601 timestamp — update every time any section changes
language: "es" # es | en — primary language of the user's profile content

# ── TRIAGE ──────────────────────────────
# Situational snapshot: where is the user right now?
triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
  specific_move: null # see Career Path Taxonomy for valid values
  urgency: null # immediate | 3_months | 6_months | exploratory

# ── VALUES (ACT + Schwartz) ────────────
# What the user cares about most — grounded in acceptance & commitment therapy
# and Schwartz Basic Human Values theory
values:
  completed: false
  mode: null # quick | deep
  core_values: [] # ranked list of top 5 personal values (free text)
  schwartz_profile: # 10 basic values scored 1-9 (Schwartz scale)
    self_direction: null # freedom to think independently and create
    stimulation: null # excitement, novelty, and challenge in life
    hedonism: null # pleasure and gratification of the senses
    achievement: null # personal success through demonstrating competence
    power: null # social status, prestige, control over people and resources
    security: null # safety, harmony, and stability of society and self
    conformity: null # restraint of actions likely to violate social norms
    tradition: null # respect for, commitment to, and acceptance of cultural customs
    benevolence: null # preserving and enhancing the welfare of close others
    universalism: null # understanding, appreciation, tolerance for all people
  value_conflicts: [] # list of tensions identified between competing values
  bulls_eye:
    work: null # 1-10 alignment score — how well current work aligns with core values
    relationships: null # 1-10 alignment score
    personal_growth: null # 1-10 alignment score
    leisure: null # 1-10 alignment score
  career_implications: [] # how values profile translates to career considerations

# ── STRENGTHS (VIA + Bandura + Flow + Big Five) ──
# Character strengths, cognitive profile, and conditions for peak performance
strengths:
  completed: false
  mode: null # quick | deep
  signature_strengths: [] # top 5 from VIA Character Survey (free text, ordered)
  big_five:
    openness: null # 1-10 score — intellectual curiosity, creativity, openness to experience
    conscientiousness: null # 1-10 score — self-discipline, organization, dependability
    extraversion: null # 1-10 score — sociability, assertiveness, positive affect
    agreeableness: null # 1-10 score — cooperation, trust, empathy
    neuroticism: null # 1-10 score — emotional instability, anxiety, moodiness
  self_efficacy: # Bandura's four sources of self-efficacy beliefs
    mastery_experiences: [] # past successes that built confidence (list of descriptions)
    vicarious_models: [] # role models observed succeeding at similar tasks
    social_persuasion: [] # encouragement received from credible others
    physiological: null # current physiological/emotional state affecting efficacy (free text)
  flow_activities: [] # activities that produce flow state — format: {activity, challenge, skill, state}
  career_implications: [] # how strengths profile translates to career considerations

# ── IDENTITY (Ibarra + Marcia + Savickas) ──
# Who the user is professionally and how that identity is evolving
identity:
  completed: false
  mode: null # quick | deep
  identity_status: null # achieved | moratorium | foreclosed | diffused (Marcia 1966)
  adaptability: # CAAS-12 scores (Career Adapt-Abilities Scale, Savickas)
    concern: null # 1-5 — planning orientation, thinking about the future
    control: null # 1-5 — sense of responsibility for one's career
    curiosity: null # 1-5 — exploring potential selves and future scenarios
    confidence: null # 1-5 — self-efficacy to pursue career aspirations
  possible_selves: [] # list of explored professional identities (Ibarra)
  active_experiments: [] # current small-scale career identity experiments (Ibarra)
  narrative_theme: null # core theme of career story so far (Savickas narrative)
  limiting_beliefs: [] # internalized beliefs limiting career action

# ── PURPOSE (Frankl + MLQ + Ryff) ──────
# What gives the user's work meaning — grounded in logotherapy and positive psychology
purpose:
  completed: false
  mode: null # quick | deep
  mlq: # Meaning in Life Questionnaire (Steger 2006)
    presence: null # 1-7 — current sense that life is meaningful
    search: null # 1-7 — active search for meaning in life
    quadrant: null # fulfilled | growing | seeking | disengaged (derived from presence+search)
  meaning_sources: # Frankl's three pathways to meaning
    creative: null # meaning through what one gives to the world (work, creation)
    experiential: null # meaning through what one receives (beauty, love, nature)
    attitudinal: null # meaning through one's stance toward unavoidable suffering
  life_theme: null # overarching purpose narrative (free text)
  purpose_practice: [] # daily/weekly practices that connect to purpose
  career_implications: [] # how purpose profile translates to career considerations

# ── ENRICHMENT LAYERS ──────────────────
# Supplementary psychological dimensions captured through conversation
enrichment:
  psychological_flexibility: null # AAQ-II score (7-49) — acceptance & values-based action (Hayes)
  career_decision_self_efficacy: null # CDMSE-SF score — confidence in career decision tasks
  psycap_hero: # Psychological Capital (Luthans) — all scored 1-6
    hope: null # goal-directed agency and pathways thinking
    efficacy: null # task-specific confidence to succeed
    resilience: null # capacity to bounce back from adversity
    optimism: null # positive attributions about current and future success
  emotional_patterns: null # recurring emotional patterns relevant to career (free text from conversation)
  relational_context: null # family, cultural, or relational constraints affecting career choices
  somatic_signals: null # body-based data: energy, tension, gut reactions (from conversation)

# ── CROSS-DIMENSION SYNTHESIS ──────────
# Integration of all completed dimensions into actionable insights
synthesis:
  reinforcements: [] # where multiple dimensions align and reinforce each other
  conflicts: [] # where dimensions point in different directions
  career_recommendations: [] # specific career directions supported by the full profile
  next_actions: [] # concrete next steps the user has committed to

# ── EVOLUTION ──────────────────────────
# Longitudinal tracking across multiple sessions over time
evolution:
  assessments: [] # {date, instrument, scores} — track scores over time
  milestones: [] # {date, event, impact} — significant career events
  next_reassessment: null # ISO 8601 — minimum 4-6 weeks from last full assessment
```

---

## Field Reference

| Field                                         | Type    | Allowed Values                                     | Required            | Source Framework      |
| --------------------------------------------- | ------- | -------------------------------------------------- | ------------------- | --------------------- |
| `version`                                     | string  | "1.0"                                              | yes                 | —                     |
| `created`                                     | string  | ISO 8601 timestamp                                 | no                  | —                     |
| `updated`                                     | string  | ISO 8601 timestamp                                 | no                  | —                     |
| `language`                                    | string  | "es" \| "en"                                       | yes                 | —                     |
| `triage.situation`                            | enum    | crisis \| exploration \| growth                    | yes (on completion) | Schlossberg 4S        |
| `triage.career_path`                          | enum    | stay_grow \| move \| go_independent \| pause_reset | yes (on completion) | N1 taxonomy           |
| `triage.specific_move`                        | string  | see Career Path Taxonomy                           | no                  | N1 taxonomy           |
| `triage.urgency`                              | enum    | immediate \| 3_months \| 6_months \| exploratory   | no                  | N1 taxonomy           |
| `values.completed`                            | boolean | true \| false                                      | yes                 | —                     |
| `values.mode`                                 | enum    | quick \| deep                                      | no                  | —                     |
| `values.core_values`                          | array   | free text strings                                  | no                  | ACT                   |
| `values.schwartz_profile.*`                   | float   | 1-9                                                | no                  | Schwartz (1992)       |
| `values.bulls_eye.*`                          | float   | 1-10                                               | no                  | ACT Bulls-Eye         |
| `values.value_conflicts`                      | array   | free text strings                                  | no                  | ACT                   |
| `values.career_implications`                  | array   | free text strings                                  | no                  | —                     |
| `strengths.completed`                         | boolean | true \| false                                      | yes                 | —                     |
| `strengths.mode`                              | enum    | quick \| deep                                      | no                  | —                     |
| `strengths.signature_strengths`               | array   | free text strings                                  | no                  | VIA Institute         |
| `strengths.big_five.openness`                 | float   | 1-10                                               | no                  | Big Five (IPIP-NEO)   |
| `strengths.big_five.conscientiousness`        | float   | 1-10                                               | no                  | Big Five (IPIP-NEO)   |
| `strengths.big_five.extraversion`             | float   | 1-10                                               | no                  | Big Five (IPIP-NEO)   |
| `strengths.big_five.agreeableness`            | float   | 1-10                                               | no                  | Big Five (IPIP-NEO)   |
| `strengths.big_five.neuroticism`              | float   | 1-10                                               | no                  | Big Five (IPIP-NEO)   |
| `strengths.self_efficacy.mastery_experiences` | array   | free text strings                                  | no                  | Bandura (1977)        |
| `strengths.self_efficacy.vicarious_models`    | array   | free text strings                                  | no                  | Bandura (1977)        |
| `strengths.self_efficacy.social_persuasion`   | array   | free text strings                                  | no                  | Bandura (1977)        |
| `strengths.self_efficacy.physiological`       | string  | free text                                          | no                  | Bandura (1977)        |
| `strengths.flow_activities`                   | array   | {activity, challenge, skill, state}                | no                  | Csikszentmihalyi      |
| `identity.completed`                          | boolean | true \| false                                      | yes                 | —                     |
| `identity.identity_status`                    | enum    | achieved \| moratorium \| foreclosed \| diffused   | no                  | Marcia (1966)         |
| `identity.adaptability.concern`               | float   | 1-5                                                | no                  | CAAS (Savickas 2012)  |
| `identity.adaptability.control`               | float   | 1-5                                                | no                  | CAAS (Savickas 2012)  |
| `identity.adaptability.curiosity`             | float   | 1-5                                                | no                  | CAAS (Savickas 2012)  |
| `identity.adaptability.confidence`            | float   | 1-5                                                | no                  | CAAS (Savickas 2012)  |
| `identity.possible_selves`                    | array   | free text strings                                  | no                  | Ibarra (2003)         |
| `identity.active_experiments`                 | array   | free text strings                                  | no                  | Ibarra (2003)         |
| `identity.narrative_theme`                    | string  | free text                                          | no                  | Savickas (2011)       |
| `identity.limiting_beliefs`                   | array   | free text strings                                  | no                  | CBT / ACT             |
| `purpose.completed`                           | boolean | true \| false                                      | yes                 | —                     |
| `purpose.mlq.presence`                        | float   | 1-7                                                | no                  | MLQ (Steger 2006)     |
| `purpose.mlq.search`                          | float   | 1-7                                                | no                  | MLQ (Steger 2006)     |
| `purpose.mlq.quadrant`                        | enum    | fulfilled \| growing \| seeking \| disengaged      | no                  | N1 derived            |
| `purpose.meaning_sources.creative`            | string  | free text                                          | no                  | Frankl (1946)         |
| `purpose.meaning_sources.experiential`        | string  | free text                                          | no                  | Frankl (1946)         |
| `purpose.meaning_sources.attitudinal`         | string  | free text                                          | no                  | Frankl (1946)         |
| `purpose.life_theme`                          | string  | free text                                          | no                  | Ryff (1989)           |
| `enrichment.psychological_flexibility`        | float   | 7-49                                               | no                  | AAQ-II (Hayes 2004)   |
| `enrichment.career_decision_self_efficacy`    | float   | 0-100                                              | no                  | CDMSE-SF (Betz 1996)  |
| `enrichment.psycap_hero.hope`                 | float   | 1-6                                                | no                  | PsyCap (Luthans 2007) |
| `enrichment.psycap_hero.efficacy`             | float   | 1-6                                                | no                  | PsyCap (Luthans 2007) |
| `enrichment.psycap_hero.resilience`           | float   | 1-6                                                | no                  | PsyCap (Luthans 2007) |
| `enrichment.psycap_hero.optimism`             | float   | 1-6                                                | no                  | PsyCap (Luthans 2007) |
| `enrichment.emotional_patterns`               | string  | free text                                          | no                  | —                     |
| `enrichment.relational_context`               | string  | free text                                          | no                  | —                     |
| `enrichment.somatic_signals`                  | string  | free text                                          | no                  | —                     |
| `synthesis.reinforcements`                    | array   | free text strings                                  | no                  | —                     |
| `synthesis.conflicts`                         | array   | free text strings                                  | no                  | —                     |
| `synthesis.career_recommendations`            | array   | free text strings                                  | no                  | —                     |
| `synthesis.next_actions`                      | array   | free text strings                                  | no                  | —                     |
| `evolution.assessments`                       | array   | {date, instrument, scores}                         | no                  | —                     |
| `evolution.milestones`                        | array   | {date, event, impact}                              | no                  | —                     |
| `evolution.next_reassessment`                 | string  | ISO 8601 timestamp                                 | no                  | —                     |

---

## Example Populated Profile

Partial profile: triage + values completed. Context: Andres, senior software engineer at Globant (Medellin), 8 years of experience, considering going independent as a technical consultant.

```yaml
version: "1.0"
created: "2026-03-15T10:00:00Z"
updated: "2026-03-22T14:30:00Z"
language: "es"

triage:
  situation: "exploration"
  career_path: "go_independent"
  specific_move: "Freelance / solo consulting"
  urgency: "6_months"

values:
  completed: true
  mode: "deep"
  core_values:
    - "Autonomia y libertad de decision"
    - "Aprendizaje continuo y maestria tecnica"
    - "Impacto real en los proyectos que trabajo"
    - "Integridad y trabajo bien hecho"
    - "Tiempo de calidad con familia"
  schwartz_profile:
    self_direction: 8.5
    stimulation: 7.0
    hedonism: 5.0
    achievement: 8.0
    power: 3.5
    security: 6.0
    conformity: 4.0
    tradition: 4.5
    benevolence: 7.5
    universalism: 6.5
  value_conflicts:
    - "Autonomia vs. Seguridad: quiero independencia pero tengo obligaciones financieras reales"
    - "Maestria tecnica vs. Impacto: proyectos de alto impacto a veces requieren work mas amplio que tecnico"
  bulls_eye:
    work: 4
    relationships: 7
    personal_growth: 6
    leisure: 5
  career_implications:
    - "Alta self_direction confirma fit con rol independiente — no tolera micromanagement"
    - "Power bajo sugiere que liderazgo de equipo no es motivador intrinseco"
    - "Benevolence alto indica que necesita ver impacto en clientes, no solo deliverables"
    - "Brecha work=4 es la palanca: alignment actual bajo explica urgencia de cambio"

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

identity:
  completed: false
  mode: null
  identity_status: null
  adaptability:
    concern: null
    control: null
    curiosity: null
    confidence: null
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

## Career Path Taxonomy Reference

These are the valid values for `triage.specific_move`. Every value maps to one of the four `triage.career_path` macro-categories.

```
N1 CAREER MOVES — COMPLETE TAXONOMY
════════════════════════════════════

STAY & GROW (career_path: stay_grow)
├── Promotion (vertical move up)
├── Lateral transfer (same level, different function/team)
├── Role expansion (grow scope of current role)
├── Geographic transfer (same company, different location)
├── Skill development (upskill/reskill for future move)
└── Environment optimization (negotiate better conditions — remote, team, manager)

MOVE (career_path: move)
├── Scale up (same function, bigger company)
├── Scale down (same function, smaller company — more ownership)
├── Sector pivot (same function, different industry)
├── Function pivot (different function, same industry)
├── Complete career change (new function + new industry)
├── Return to workforce (after gap, parental leave, health)
└── International relocation (different country/market)

GO INDEPENDENT (career_path: go_independent)
├── Freelance / solo consulting
├── Found a company (startup)
├── Join early-stage startup (#1-20 employee)
├── Portfolio career (multiple part-time roles)
├── Creator / content business
├── Artistic / creative pursuit
└── Non-profit / social impact

PAUSE & RESET (career_path: pause_reset)
├── Strategic sabbatical (intentional break with plan)
├── Recovery period (burnout, health, caregiving)
├── Education / reskilling (degree, bootcamp, certification)
├── Retirement transition (wind-down, advisory, portfolio)
└── Exploration phase (deliberate moratorium — no decision yet)
```

**Path-Specific Psychological Dynamics:**

| Path Category  | Primary Psychological Process                                   | Key Framework                                            |
| -------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| Stay & Grow    | Achievement motivation, impostor syndrome, political navigation | Bandura self-efficacy, PsyCap HERO                       |
| Move           | Loss processing, identity reconstruction, comparison anxiety    | Schlossberg 4S, Ibarra Working Identity                  |
| Go Independent | Risk cognition, ambiguity tolerance, self-regulation, isolation | Protean Career Theory, Career Chaos Theory, PsyCap HERO  |
| Pause & Reset  | Permission-giving, identity-work separation, grief processing   | ACT acceptance, Planned Happenstance, Frankl logotherapy |

---

_See also: [shared/profile-template.yaml](./profile-template.yaml) — blank template to copy and fill in._
