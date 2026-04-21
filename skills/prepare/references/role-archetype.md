# Role Archetype — Compressing 4-dimension self-knowledge into a targeting tool

> Reference loaded by `skills/prepare/SKILL.md`.
> Collapses N1's original 4-dimension busca-adentro flow (values, strengths, identity, purpose) into one integrated pass that outputs a role-targeting profile in 10-15 minutes. Not a replacement for the full flow — a pragmatic compression for job search context.

---

## Why role-archetype as the unit

Traditional career guidance asks: "Who are you?" → produces introspection without direction.
Role-archetype asks: "What pattern of work matches how you naturally operate?" → produces a targeting vector.

It's a pragmatic compression: fewer ego questions, more behavioral inference.

The archetype is not a "type" in the MBTI sense (which has weak validity). It's a named pattern that captures:
- How the person adds value (strengths in action)
- What the person cares about (values in practice)
- How the person is seen professionally (identity signal)
- Where the person gravitates next (direction vector)

---

## The 6-8 question protocol

All questions designed to extract data from lived behavior, not self-report abstractions.

### Q1 — Peak-moment (extracts values)

```
Pensá en tu mejor momento de trabajo — no el más exitoso externamente,
el que más te salió natural. Contame qué estaba pasando.
Follow-up: ¿Qué era lo que más te importaba ahí?
```

**What to listen for:**
- What the person did with care (not just tasks completed)
- What they name as "mattered" — autonomy, impact, craft, connection, mastery
- What's present in the story that they don't explicitly label (they might not say "I care about craft" but the story is about craft)

**Values to extract (Schwartz-anchored, but surfaced from behavior):**
- self-direction (autonomy, freedom to decide)
- stimulation (novelty, challenge, learning)
- achievement (mastery, recognition)
- hedonism (pleasure in work)
- power (influence, control)
- security (stability, predictability)
- conformity (following norms, fitting in)
- tradition (continuity, craft lineage)
- benevolence (helping close others)
- universalism (broader impact, fairness)

Extract 2-3 values — not 5-10. More than 3 dilutes focus.

### Q2 — Strength-in-use (extracts signature strengths)

```
¿Qué es lo que hacés mejor que la mayoría de las personas a tu alrededor?
Follow-up: Dame un ejemplo de una vez que eso se notó.
```

**What to listen for:**
- The specific ability, not the vague category ("I can see what a team needs before they articulate it" > "I'm a good listener")
- Evidence (example from concrete situation)
- VIA-alignment cues:
  - Wisdom: creativity, curiosity, judgment, love of learning, perspective
  - Courage: bravery, perseverance, honesty, zest
  - Humanity: love, kindness, social intelligence
  - Justice: teamwork, fairness, leadership
  - Temperance: forgiveness, humility, prudence, self-regulation
  - Transcendence: appreciation of beauty, gratitude, hope, humor, spirituality

Extract 2-3 strengths. Prioritize the ones with evidence, not the ones that sound good.

### Q3 — Professional-reputation (extracts identity)

```
Si alguien que trabajó contigo en los últimos 2 años te describiera a
una persona que nunca te conoció, ¿qué diría?
Follow-up: ¿Y qué NO diría?
```

**What to listen for:**
- The current professional identity (how others see them)
- The gap between current identity and aspired identity ("they'd say I'm reliable, but I want to be seen as strategic")
- Ibarra's Working Identity signal: are they "foreclosed" (identity locked), "moratorium" (exploring), "achieved" (clear + chosen), or "diffused" (unclear without exploration)?

The gap is often the most useful data — it tells you what the person is transitioning toward.

### Q4 — Future-day (extracts direction)

```
Saltá 3 años adelante. Imaginá tu día típico. No la empresa, no el título.
El ritmo. Con quién trabajás. Qué problemas resolvés. Contame qué ves.
```

**What to listen for:**
- The texture of the day (solo vs team, deep work vs meetings, creative vs operational)
- The type of problems (technical / strategic / interpersonal / creative)
- The scale (startup / enterprise / independent / nonprofit)
- Autonomy level (employee / lead / founder / consultant)
- What's explicitly absent (what they're moving AWAY from)

This is the direction vector. Not "what's the job title?" but "what's the shape of the work?"

### Q5 — Real constraints (grounds the plan)

```
¿Qué restricciones reales tenés hoy? Familia, geografía, ingresos mínimos,
industria que no podés dejar, nivel educativo, salud, timing.
```

**What to listen for:**
- Financial runway (months they could live without income; addressed by runway web tool)
- Family responsibilities (spouse, kids, aging parents, extended family)
- Geographic anchors (can't relocate, must stay in X country)
- Education / credential constraints (regulated professions, visa requirements)
- Health / time / energy constraints

**Rule:** Name these explicitly as real. Never minimize them as "limiting beliefs." They are facts to plan around, not obstacles to overcome with willpower.

### Q6 — Energy / avoidance (optional, useful for nuance)

```
Pensá en lo que hacés ahora que te DRENA energía, aunque lo hagas bien.
¿Qué es?
```

**What to listen for:**
- Activities that produce competence but not vitality
- Patterns to avoid in the next role (these become anti-requirements)
- Often: too much meetings, too much context-switching, too little craft, too much political navigation, too much solo work (for extraverts), too much teamwork (for introverts)

---

## Synthesis — producing the archetype

From answers Q1-Q6, generate:

```yaml
role_archetype:
  valores_centrales:
    - "autonomía en decisión técnica"
    - "impacto real en clientes"
    - "aprendizaje continuo"
  
  fortalezas_signature:
    - "traducción técnico-negocio"
    - "resolución de ambiguidad"
    - "mentoring informal"
  
  identidad_profesional:
    current: "visto como 'el confiable que resuelve'"
    aspired: "visto como arquitecto/a de sistemas"
    gap: "falta visibilidad estratégica, no skill"
  
  direccion_gravitante:
    texture: "deep work con ventanas de colaboración"
    problems: "sistemas complejos con stakeholders diversos"
    scale: "Series B-C tech"
    autonomy: "tech lead o staff engineer, no manager"
  
  restricciones_activas:
    - "Medellín basado, remoto OK"
    - "ingresos mínimos $3.5K USD/mes"
    - "cuidador activo (padre enfermo)"
  
  anti_patron:
    - "no puede estar en entornos con >40% del tiempo en reuniones"
    - "no quiere rol puro de gestión"
  
  arquetipo_sugerido: "El arquitecto pragmático"
  descripcion: >
    Persona que ve sistemas donde otros ven tareas. Influye sin necesitar
    reportes directos. Prefiere profundidad a amplitud. Busca roles con
    autonomía técnica y visibilidad estratégica, en empresas que valoran
    craft sobre velocidad.
```

### Translating archetype → role families

Given the archetype, propose 3 role families consistent with it:

- **Familia 1:** Staff/Principal Engineer en Series B-C tech → roles: Staff SWE, Principal Engineer, Tech Lead
- **Familia 2:** Solutions Architect → roles: Solutions Architect, Enterprise Architect, Principal Solutions Consultant
- **Familia 3:** Independent Technical Consultant → roles: Freelance consultant, fractional CTO para startups early-stage

For each family, brief note on:
- Why it matches the archetype
- Typical day-to-day
- Compensation range (LATAM realistic)
- Companies / contexts where it exists
- What would have to change about the person's profile to be competitive

---

## Anti-patterns in role-archetype work

- **Generic archetypes.** "The connector" / "The innovator" without specifics. Always ground in the person's actual language from their answers.
- **Confirmation bias toward user's self-narrative.** If the user says "I'm a manager" but all stories show IC craft, note the discrepancy. The archetype should reflect behavior, not self-description.
- **Prescribing a "calling."** Don't tell the user what they should want. Surface the patterns you see; let them decide.
- **Ignoring constraints.** The archetype must live in the user's real life, not a hypothetical one.
- **Forcing positive spin.** If the person's pattern is "burned out individual contributor who doesn't want to manage but has no other career ladder" — that's the data. Name it. Then plan around it honestly.

---

## Archetype refresh interval

Role-archetype is not fixed. Update when:
- Significant career event (layoff, promotion, role change)
- Identity shift (had a kid, moved countries, started therapy)
- Strong new evidence (took a course that changed the picture, worked with someone who shifted view)
- Minimum 6 months between full re-runs unless above applies

The profile YAML tracks `evolution.milestones` — use that to detect when refresh is warranted.

---

_Reference v1.0 — Informed by Savickas Career Construction Theory, Ibarra Working Identity, VIA Character Strengths, Schwartz Basic Human Values, integrated per N1 pragmatic methodology._
