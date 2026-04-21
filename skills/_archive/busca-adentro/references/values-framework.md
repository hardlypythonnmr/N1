# Values Framework — N1 Busca Adentro

> Reference file for the Values dimension. Loaded by SKILL.md before starting values work.
> Contains: ACT values clarification, Schwartz 10 values, Bull's Eye, interpretation guide.
> Do not show to users directly — this is AI context.

---

## Framework Overview

Three frameworks in sequence:

1. **ACT Values Clarification** (Hayes, Strosahl & Wilson, 1999) — Open space for self-discovery. No prescribed values. Values work precedes goal-setting; it prevents building toward goals that don't actually matter to the person.
2. **Schwartz Basic Values Theory** (Schwartz, 1992) — 10 universal values in a motivational continuum present in 70+ cultures. Use as a structured vocabulary after free elicitation.
3. **SDT Self-Direction** (Deci & Ryan, 1985) — Autonomy as a universal need. Values work should check whether identified values support or undermine autonomy needs.

---

## ACT Values Elicitation — Question Sequence

Use these questions in voseo. Build each question on the previous answer.

**Core elicitation moves:**

> "Cuando imaginás tu mejor versión en el trabajo, ¿qué estás haciendo? ¿Con quién? ¿Para qué?"

> "¿Qué tipo de trabajo te hace perder la noción del tiempo?"

> "Si pudieras diseñar tu semana ideal sin restricciones, ¿cómo se vería?"

> "¿Qué es lo que más extrañarías si no lo tuvieras en tu trabajo cotidiano?"

> "¿Hay algo que hacés en el trabajo que sentís que va en contra de quién sos?"

**Defusion moves** (internal — NEVER say "defusion" or "ACT" to user):

When user is fused with "no sé qué quiero" or "no me importa nada":

- "¿Qué tan seguro estás de eso?"
- "¿Eso es un hecho o es lo que sentís en este momento?"
- Slow down. Do not challenge the thought directly. Create observational distance.

**Willingness moves** (internal):

> "¿Qué pasaría si esa incertidumbre estuviera bien por ahora?"
> "¿Podés tomar el siguiente paso sin tener todas las respuestas?"

---

## Schwartz 10 Values — Table

Present conversationally after free elicitation. Ask user to score each 1-9.

| Value (ES)    | Value (key)    | Definition (for AI context)                        | Career signal                              |
| ------------- | -------------- | -------------------------------------------------- | ------------------------------------------ |
| Autodirección | self_direction | Freedom to think independently and create          | High → independence fit, resists microman. |
| Estimulación  | stimulation    | Excitement, novelty, challenge                     | High → new roles, varied work              |
| Hedonismo     | hedonism       | Pleasure and sensory gratification                 | High → comfort in role matters             |
| Logro         | achievement    | Personal success through demonstrated competence   | High → promotion path, metrics-driven      |
| Poder         | power          | Social status, prestige, control over resources    | Low = not motivated by leadership itself   |
| Seguridad     | security       | Safety, harmony, stability                         | High → risk calibration needed             |
| Conformidad   | conformity     | Restraint of actions that violate social norms     | High → structured environment preferred    |
| Tradición     | tradition      | Respect for cultural customs and commitments       | High → values continuity over disruption   |
| Benevolencia  | benevolence    | Enhancing welfare of close others                  | High → needs visible impact on people      |
| Universalismo | universalism   | Understanding, tolerance for all people and nature | High → mission-driven roles                |

**Conversational approach:** Don't administer as a questionnaire. After free elicitation, say:

> "Schwartz (1992) identificó 10 valores que aparecen en más de 70 culturas. Mirá esta lista — ¿cuáles resuenan con lo que me contaste?"

---

## Value Conflicts — LATAM Patterns

After scoring, check for conflicts on adjacent and opposing axes in the Schwartz continuum.

**Three common conflicts in LATAM professionals:**

1. **Seguridad vs Autodirección** — "Quiero independencia, pero tengo responsabilidades financieras reales."
   - Name it: "Hay una tensión real entre lo que querés y lo que necesitás sentir que es seguro."
   - Don't resolve it prematurely. Validate both sides.

2. **Benevolencia vs Logro** — "Quiero hacer impacto, pero también quiero progresar rápido."
   - This is NOT a contradiction — many high performers navigate it.
   - Name it: "Algunos roles satisfacen ambos. Otros te piden elegir."

3. **Tradición vs Estimulación** — "Quiero estabilidad, pero me aburro fácil."
   - Common in outsourcing professionals considering independence.
   - Name it as a real tension: neither value is wrong.

---

## Bull's Eye Exercise

Four domains — how aligned is each with your identified core values?

| Domain          | YAML field                | Score | Question to ask                                                            |
| --------------- | ------------------------- | ----- | -------------------------------------------------------------------------- |
| Work            | bulls_eye.work            | 1-10  | "¿Qué tan alineado está tu trabajo actual con lo que dijiste que valorás?" |
| Relationships   | bulls_eye.relationships   | 1-10  | "¿Tus relaciones profesionales y personales reflejan lo que valorás?"      |
| Personal growth | bulls_eye.personal_growth | 1-10  | "¿Estás creciendo en las áreas que te importan?"                           |
| Leisure         | bulls_eye.leisure         | 1-10  | "¿Cómo usás tu tiempo libre — alinea con tus valores?"                     |

**Reference web tool:** "Para el ejercicio visual del Bull's Eye, hay una herramienta en [N1 web — Bulls Eye] que lo grafica y podés guardar la imagen."

**Interpretation:**

- Work score 1-4: high urgency — career change or role redesign is the primary intervention
- Work score 5-7: optimization zone — specific aspects to change rather than full pivot
- Work score 8-10: currently aligned — explore other life domains
- Gap between work and relationships: often signals values around connection not met in current role

---

## Career Implications by Value Profile

Use these mappings to generate `values.career_implications` content:

| Value cluster                       | Career implication                                                       |
| ----------------------------------- | ------------------------------------------------------------------------ |
| High self_direction + low power     | Independence path > leadership path. Solo consulting, technical expert.  |
| High security + high stimulation    | Tension = hybrid role (stable employer, varied projects). Internal R&D.  |
| High achievement + low power        | Individual contributor excellence > management. IC track at scale.       |
| High benevolence + high achievement | Impact roles: product, consulting, internal transformation.              |
| High universalism                   | Mission-driven organizations. NGO, B-corp, social impact tech.           |
| High tradition + high conformity    | Large established organizations. Public sector. Multinational stability. |
| Low conformity + high stimulation   | Startups, entrepreneurship, creative industries.                         |

---

## Profile YAML Mapping

Which questions populate which YAML fields:

```
values.core_values        ← Free ACT elicitation (top 5, ranked by user)
values.schwartz_profile.* ← Schwartz 10 values scoring (1-9 per value)
values.bulls_eye.*        ← Bull's Eye 4 domains (1-10 each)
values.value_conflicts    ← Named tensions between Schwartz pairs
values.career_implications← Derived from value cluster analysis
values.mode               ← quick | deep (set by mode selection)
values.completed          ← true when all above fields populated
values.updated            ← current ISO 8601 timestamp
```

---

## Quick Mode Script — 5 Questions

Ask in order. Build each question on previous answer. End with YAML output.

1. "Cuando imaginás tu mejor versión en el trabajo — ¿qué estás haciendo? ¿Con quién? ¿Para qué?"
2. "De todo lo que me contás, ¿qué es lo que más extrañarías si no lo tuvieras en tu trabajo?"
3. "¿Hay algo que hacés en el trabajo que sentís que va en contra de lo que sos?"
4. "Si pudieras diseñar cómo se ve tu semana ideal de trabajo, sin restricciones — ¿cómo se vería?"
5. "De los valores que fueron apareciendo — autonomía, seguridad, impacto, reconocimiento, conexión, aprendizaje — ¿cuáles son los 5 que más resuenan con vos?"

After Q5: synthesize top 5 values, estimate Schwartz scores conversationally, score Bull's Eye for work domain (others if time), identify 1-2 career implications. Output partial YAML.

---

## Deep Mode Script — Sequence (15–25 turns)

1. Full ACT elicitation (4-5 questions, build on each answer)
2. Schwartz scoring conversation: present the 10 values, guide scoring for top 6
3. Identify value conflicts: test for adjacent tensions
4. Bull's Eye all 4 domains
5. Career implications synthesis
6. Homework suggestions:
   - Journaling prompt: "Escribí 5 minutos al día sobre momentos donde sentiste que estabas viviendo de acuerdo a tus valores — y momentos donde no."
   - Values card sort description: "Anotá los 10 valores de Schwartz en papeles separados. Ordenalos de más a menos importante para vos. Luego mirá si el orden cambió después de una semana."
