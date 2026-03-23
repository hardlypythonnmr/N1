# Strengths Framework — N1 Busca Adentro

> Reference file for the Strengths dimension. Loaded by SKILL.md before starting strengths work.
> Contains: VIA guide, Bandura 4 sources, Flow mapping, Big Five verbal, integration.
> Do not show to users directly — this is AI context.

---

## Framework Overview

Four frameworks used in combination:

1. **VIA Character Strengths** (Peterson & Seligman, 2004) — 24 strengths in 6 virtues. Gold standard strengths baseline. Free validated tool: viacharacter.org. No licensing issues.
2. **Bandura Self-Efficacy Theory** (Bandura, 1997) — Four sources: mastery experiences (strongest predictor), vicarious learning, social persuasion, physiological states. Predicts career performance better than personality.
3. **Flow Theory** (Csikszentmihalyi, 1990) — Optimal experience when challenge matches skill. Flow activities = high-signal input for career direction.
4. **Big Five Personality** (Costa & McCrae, 1992) — Five-factor model. Verbal approximation only in conversational context — always refer to free tools (bigfive-web.com) for validated scores.

**Integration principle:** Signature strengths (VIA) usually appear in flow activities AND in high-mastery-experience stories. When all three point to the same activity, that's the clearest signal.

---

## VIA Character Strengths — Conversational Guide

24 strengths grouped by virtue. Use for conversational identification without administering the full 120-question survey.

**6 virtues and their strengths:**

**Wisdom:** Creativity, Curiosity, Judgment, Love of Learning, Perspective
**Courage:** Bravery, Perseverance, Honesty, Zest
**Humanity:** Love, Kindness, Social Intelligence
**Justice:** Teamwork, Fairness, Leadership
**Temperance:** Forgiveness, Humility, Prudence, Self-Regulation
**Transcendence:** Appreciation of Beauty, Gratitude, Hope, Humor, Spirituality

**Elicitation approach — without administering the survey:**

> "Pensá en el trabajo que hacés mejor y que más te energiza. De estos grupos de características — ¿cuáles tres describen mejor cómo operás en tu mejor versión?"

> "¿Cuándo fue la última vez que terminaste un día de trabajo y te sentiste genuinamente satisfecho? ¿Qué fortalezas estabas usando?"

> "¿Hay alguna característica tuya que la gente nota más que vos? ¿Algo que para vos es obvio pero otros destacan como especial?"

**Reference:** Always mention viacharacter.org for the validated free survey:

> "Si querés saber tus top 5 con mayor precisión, el VIA Character Survey en viacharacter.org es gratuito, toma 20 minutos, y tiene evidencia sólida. Podés traer esos resultados."

---

## Bandura 4 Sources — Question Sequence

Work through each source systematically. Each source = a block of questions.

### Source 1: Mastery Experiences (strongest predictor)

> "Pensá en 2 o 3 situaciones en tu carrera donde realmente te fue bien — proyectos, problemas que resolviste, resultados que te sorprendieron. Contame uno."

Follow-up: "¿Qué habilidades o características tuyas fueron determinantes ahí?"

> "¿Hay áreas donde sabés que podés entregar resultados consistentes, sin importar la presión?"

YAML field: `strengths.self_efficacy.mastery_experiences` — list of specific situations

### Source 2: Vicarious Models

> "¿Hay alguien que admires en tu campo — un colega, jefe anterior, alguien que conocés o seguís? ¿Qué hacen ellos que vos sentís que también podés hacer?"

> "¿Alguna vez viste a alguien similar a vos lograr algo que vos también querés lograr? ¿Cómo cambió eso tu percepción de lo que es posible para vos?"

YAML field: `strengths.self_efficacy.vicarious_models` — list of models and what they demonstrate

### Source 3: Social Persuasion

> "¿Qué te dicen las personas en las que confiás — colegas, jefes, mentores — que hacés excepcionalmente bien?"

> "¿Hay algún feedback que hayas recibido sobre tus capacidades que te sorprendió — positivamente?"

YAML field: `strengths.self_efficacy.social_persuasion` — list of credible feedback received

### Source 4: Physiological State

> "¿Cómo estás emocionalmente hoy, en relación a tu carrera? ¿Eso está afectando cómo te sentís sobre tus capacidades?"

> "¿Hay contextos de trabajo donde tu energía y confianza son altas naturalmente? ¿Y contextos donde bajan?"

YAML field: `strengths.self_efficacy.physiological` — current state affecting efficacy

**After all 4 sources:** Synthesize self-efficacy level overall and by domain.

> "Basado en lo que me contás, tu autoeficacia parece alta en [dominio X] y más baja en [dominio Y]. ¿Eso resuena con cómo te sentís?"

---

## Flow Mapping

Challenge-skill balance theory: flow = challenge slightly above skill level. Anxiety = challenge too far above skill. Boredom = skill too far above challenge.

**Identification questions:**

> "¿Hay alguna actividad en el trabajo donde el tiempo desaparece, donde estás completamente absorto?"

> "¿Cuándo fue la última vez que terminaste algo y querías seguir trabajando aunque el horario decía que habías terminado?"

> "¿Hay algún tipo de problema que encontrás genuinamente fascinante de resolver?"

**For each flow activity, capture:**

- Activity description
- Challenge level (1-10)
- Skill level (1-10)
- State description (absorbed, energized, creative, etc.)

YAML field: `strengths.flow_activities` — list of `{activity, challenge, skill, state}`

**Reference web tool:**

> "Si querés datos longitudinales, el Flow Logger en [N1 web link] registra actividades con el tiempo. Podés ver patrones que no son obvios en una sola sesión."

---

## Big Five — Verbal Approximation

Only use this for conversational approximation. Always caveat: this is not a validated instrument.
Reference bigfive-web.com for validated free scores.

| Factor            | YAML field                 | High signals                             | Low signals                          |
| ----------------- | -------------------------- | ---------------------------------------- | ------------------------------------ |
| Openness          | big_five.openness          | Creativity, new ideas, abstract thinking | Concrete, structured, proven methods |
| Conscientiousness | big_five.conscientiousness | Organized, reliable, follows through     | Flexible, adapts, hates rigid rules  |
| Extraversion      | big_five.extraversion      | Energized by social, assertive           | Energized by solitude, reflective    |
| Agreeableness     | big_five.agreeableness     | Cooperative, trusting, empathic          | Competitive, skeptical, direct       |
| Neuroticism       | big_five.neuroticism       | High emotional reactivity, worry         | Emotionally stable, calm under fire  |

**Conversational estimation questions:**

Openness: "¿Preferís trabajar con ideas nuevas y problemas sin respuestas claras, o preferís tener procesos probados y saber qué funciona?"

Conscientiousness: "¿Cómo describís tu relación con los plazos, la organización, y seguir hasta completar las cosas?"

Extraversion: "¿Te energizás más en conversaciones y reuniones, o necesitás tiempo solo para pensar y recuperarte?"

Agreeableness: "¿Tendés a priorizar la armonía del equipo, o decís lo que pensás incluso si genera tensión?"

Neuroticism: "¿Qué tan seguido te preocupás por cosas que están fuera de tu control? ¿El trabajo te genera ansiedad frecuente?"

**Career implications by Big Five:**

- High O + Low C: creative, entrepreneurial, research roles; may struggle with execution
- High C + Low O: strong execution roles, reliability-focused; may resist change
- High E: client-facing, leadership, sales, facilitation
- Low E: deep technical work, research, writing, individual contributor excellence
- Low N: leadership, client escalations, high-pressure environments
- High N: needs psychological safety; avoid chronic chaos roles

---

## Integration — VIA + Bandura + Flow

The highest signal for career direction: when all three point to the same activity or domain.

After completing all three:

1. List top VIA strengths
2. List top mastery experience themes
3. List flow activities

Look for overlaps:

> "Mirá — [fortaleza VIA] aparece también en tus mejores experiencias de éxito, y en la actividad de flow que describís. Eso es una señal fuerte."

When only one or two align: the missing one is diagnostic.

- VIA + Bandura but no flow: strengths used but conditions aren't optimal
- Flow + Bandura but no VIA match: skills are high but may not be character strengths per se
- VIA + Flow but low Bandura: strengths present but self-efficacy hasn't caught up — worth exploring what's blocking the belief

---

## Profile YAML Mapping

```
strengths.signature_strengths        ← VIA top 3-5 identified conversationally
strengths.big_five.*                 ← Verbal approximation (1-10), caveat noted
strengths.self_efficacy.mastery_experiences ← Bandura Source 1 stories
strengths.self_efficacy.vicarious_models    ← Bandura Source 2 models
strengths.self_efficacy.social_persuasion   ← Bandura Source 3 feedback
strengths.self_efficacy.physiological       ← Bandura Source 4 state
strengths.flow_activities            ← {activity, challenge, skill, state}
strengths.career_implications        ← Derived from integration analysis
strengths.mode                       ← quick | deep
strengths.completed                  ← true when key fields populated
strengths.updated                    ← ISO 8601 timestamp
```

---

## Quick Mode Script — 5 Questions

1. "¿Cuáles son las 3 cosas que hacés en el trabajo que sentís que hacés mejor que la mayoría?"
2. "Pensá en una situación donde te fue muy bien. ¿Qué habilidades fueron claves?"
3. "¿Hay alguna actividad donde el tiempo parece pasar rápido, donde estás completamente absorto?"
4. "¿Qué te dicen las personas en las que confiás que hacés excepcionalmente bien?"
5. "En una escala del 1 al 10, ¿qué tan seguro estás de que podés tener éxito en el tipo de rol que querés? ¿Qué te haría sentir más seguro?"

After Q5: synthesize top 3 strengths, estimate Big Five verbally (2-3 traits), name self-efficacy level, identify primary flow domain. Output YAML.

---

## Deep Mode Script — Sequence

1. VIA elicitation (3-4 questions, identify top 5 strengths conversationally)
2. Bandura Source 1: mastery experiences (3+ stories)
3. Bandura Source 2: vicarious models
4. Bandura Source 3: social persuasion
5. Bandura Source 4: current physiological state
6. Flow activity analysis (2-3 activities)
7. Big Five verbal approximation (5 questions)
8. Integration synthesis: where VIA + Bandura + Flow overlap
9. Career implications: specific role types that leverage the full strengths profile
10. Homework: "Llevá un registro durante una semana de las actividades que te energizan vs. las que te drenan. Traé eso a la próxima sesión."
