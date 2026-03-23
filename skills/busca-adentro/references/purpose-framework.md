# Purpose Framework — N1 Busca Adentro

> Reference file for the Purpose dimension. Loaded by SKILL.md before starting purpose work.
> Contains: Frankl 3 meaning sources, MLQ interpretation, Ryff PWB, Damon purpose development.
> Do not show to users directly — this is AI context.

---

## Framework Overview

Four frameworks used in the purpose dimension:

1. **Logotherapy** (Frankl, 1946/1984) — Meaning through three sources: creative (what you give), experiential (what you receive), attitudinal (your stance toward unavoidable suffering). "El propósito en la vida reduce la mortalidad en un 17% (Hill et al., 2014; 136,265 participantes)."
2. **MLQ — Meaning in Life Questionnaire** (Steger, Frazier, Oishi & Kaler, 2006) — 10 items measuring Presence and Search. Most validated meaning instrument. Conversational approximation only; always refer to web tool for standardized scores.
3. **Ryff Psychological Well-Being** (Ryff, 1989) — 6 dimensions including Purpose in Life as a distinct dimension of well-being.
4. **Damon Purpose Development** (Damon, 2008) — Purpose as a stable intention to accomplish something meaningful BEYOND the self. The "beyond the self" component is the key differentiator.

**Core principle (Frankl):** Meaning is not found — it is discovered in specific circumstances through specific actions. The question is not "what is the meaning of life?" but "what is the meaning of MY life in THIS moment?"

---

## MLQ Interpretation — Presence and Search

**MANDATORY CAVEAT before using:**

> "Para el MLQ-10 estandarizado — el instrumento más validado para medir significado en la vida — podés usar la herramienta en [N1 web link]. Te da puntajes de Presencia y Búsqueda de significado comparados con normas poblacionales."

Score both subscales separately. Do NOT combine into a single score.

**Conversational questions for approximation:**

**Presence subscale (1-7 scale):**

> "En una escala del 1 al 7, ¿qué tanto sentís que tu vida tiene significado en este momento? 1 = no tiene ningún significado, 7 = tiene mucho significado."

> "¿Sentís que encontraste lo que le da sentido a tu vida, o todavía estás buscando?"

**Search subscale (1-7 scale):**

> "¿Estás buscando activamente entender qué es lo que le da significado a tu vida?"

> "¿Con qué intensidad buscás propósito y significado en tu vida?"

YAML fields: `purpose.mlq.presence`, `purpose.mlq.search`

### 4-Quadrant Placement

| Quadrant   | YAML value | Presence | Search | Interpretation                                           |
| ---------- | ---------- | -------- | ------ | -------------------------------------------------------- |
| Fulfilled  | fulfilled  | High     | Low    | Has meaning, not actively searching — stable foundation  |
| Growing    | growing    | High     | High   | Has meaning AND actively expanding it — productive state |
| Seeking    | seeking    | Low      | High   | Searching actively but hasn't found anchor yet           |
| Disengaged | disengaged | Low      | Low    | Neither has nor seeks meaning — most concerning state    |

YAML field: `purpose.mlq.quadrant`

**Career implications by quadrant:**

| Quadrant   | Primary intervention                                      |
| ---------- | --------------------------------------------------------- |
| Fulfilled  | Optimization — deepen or expand what already works        |
| Growing    | Support the ongoing search — provide frameworks/questions |
| Seeking    | Purpose exploration — use Frankl + Life Design exercises  |
| Disengaged | Values work first — meaning usually built on values base  |

**LATAM calibration:** HIGH MLQ-Search is NORMATIVE in Colombia and LATAM populations. Do NOT interpret high Search as pathological, existentially distressed, or immature. Actively seeking meaning is culturally embedded and healthy. Frame it: "Buscar activamente sentido es una característica cultural fuerte en LATAM — no es un problema, es una fortaleza."

---

## Frankl 3 Meaning Sources

Three distinct pathways. Most people have a primary source, though all three can contribute.

### Source 1: Creative Values (Lo que dás al mundo)

Meaning through what you create, contribute, or give — work, art, mentorship, projects, ideas.

**Elicitation questions:**

> "¿Hay algo que creás, construís, o enseñás que sentís que tiene valor más allá de vos mismo?"
> "¿Qué contribución querés que recuerde la gente de tu trabajo?"
> "Si tu mejor trabajo desapareciera mañana, ¿qué se perdería?"

YAML field: `purpose.meaning_sources.creative`

### Source 2: Experiential Values (Lo que recibís del mundo)

Meaning through what you receive — love, connection, beauty, nature, art, human encounters.

**Elicitation questions:**

> "¿Hay momentos en tu trabajo o tu vida donde sentís algo que va más allá de la satisfacción ordinaria — algo que te parece genuinamente valioso?"
> "¿Las personas, el lugar, o las experiencias de tu trabajo le dan significado a lo que hacés?"
> "¿Hay algo en tu entorno — conexiones, cultura, comunidad — que hace que el trabajo valga la pena más allá de lo que producís?"

YAML field: `purpose.meaning_sources.experiential`

### Source 3: Attitudinal Values (Tu postura ante el sufrimiento)

Meaning through the stance you take toward unavoidable difficulties — constraints you can't change, losses, adversity.

**Elicitation questions:**

> "¿Hay alguna dificultad en tu carrera o vida que no podés cambiar, pero que le diste algún sentido?"
> "¿Cómo describís tu postura ante los obstáculos que no podés controlar?"
> "¿Hay algo que hayas atravesado que terminó dándole forma a quién sos profesionalmente, aunque fue difícil?"

YAML field: `purpose.meaning_sources.attitudinal`

---

## Life Theme Extraction

Based on Savickas's life theme approach applied to purpose.

The goal: surface a working hypothesis for the overarching purpose narrative — not a fixed identity, but a useful lens.

**Three extraction questions:**

> "¿Cuál es el problema más importante que querés resolver en el mundo? Puede ser grande o pequeño, en tu industria o en tu familia."

> "Si tuvieras recursos ilimitados y no necesitaras dinero — ¿en qué trabajarías?"

> "Cuando describís el trabajo que más te importa, ¿qué palabras aparecen consistentemente?"

**Holding it lightly:** The life theme is a working hypothesis, not a permanent truth.

Tell the user: "Esto es una hipótesis de trabajo — una forma de ver el hilo conductor de lo que te importa. No es definitivo. Va a cambiar."

YAML field: `purpose.life_theme`

---

## Ryff PWB — Purpose Subscale

Purpose in Life is one of Ryff's 6 dimensions of psychological well-being.

Key feature: having goals, a sense of direction, meaning in past and present life.

**Conversational items** (adapted from Ryff, 1989):

> "¿Sentís que tu vida tiene dirección y propósito?"
> "¿Hay metas en tu vida que te dan sentido de dirección?"
> "¿Cómo describirías el significado de tu vida pasada — tuvo sentido lo que viviste?"

These inform the overall purpose picture. Use to supplement MLQ if user scores low on both — Ryff purpose probes a slightly different dimension (direction vs. meaning).

---

## Damon Purpose Development

Purpose = a stable, long-term intention to accomplish something meaningful AND beyond the self.

**The "beyond the self" test:** Is the goal primarily about personal gain (achievement, security, recognition) or does it include genuine benefit to others or the world?

This is NOT a judgment — it's a diagnostic. Self-focused intentions are valid. But Damon's research shows that beyond-self purpose is the one that sustains across life stages.

**Assessment question:**

> "¿La dirección que más te llama es principalmente para vos — tu crecimiento, tu éxito — o tiene un componente de algo más grande que vos mismo?"

If yes: explore what that beyond-self component is. If not yet: that's fine — purpose often develops from self to beyond-self over time.

---

## Purpose Practice

Connecting daily/weekly work to identified purpose.

**Elicitation:**

> "¿Hay alguna práctica pequeña — diaria o semanal — que te conecte con lo que más te importa? No tiene que ser grande."

**Suggested practices** (offer only if user doesn't identify one naturally):

- 5-minute weekly review: "¿Qué hice esta semana que estuvo alineado con lo que más me importa?"
- Contribution log: anotar cada semana una instancia donde el trabajo tuvo impacto en alguien
- Purpose reminder: una frase o imagen que resume lo que más importa, visible en el workspace

YAML field: `purpose.purpose_practice` — list of practices

---

## Profile YAML Mapping

```
purpose.mlq.presence           ← MLQ Presence subscale (1-7 conversational estimate)
purpose.mlq.search             ← MLQ Search subscale (1-7 conversational estimate)
purpose.mlq.quadrant           ← fulfilled | growing | seeking | disengaged (derived)
purpose.meaning_sources.creative    ← What the user gives to the world
purpose.meaning_sources.experiential ← What the user receives from the world
purpose.meaning_sources.attitudinal  ← Stance toward unavoidable suffering
purpose.life_theme             ← Overarching purpose narrative (working hypothesis)
purpose.purpose_practice       ← List of daily/weekly anchoring practices
purpose.career_implications    ← Quadrant-based intervention recommendations
purpose.mode                   ← quick | deep
purpose.completed              ← true when key fields populated
purpose.updated                ← ISO 8601 timestamp
```

---

## Quick Mode Script — 5 Questions

1. "En una escala del 1 al 7, ¿qué tanto sentís que tu vida tiene significado en este momento?" (MLQ Presence)
2. "¿Estás buscando activamente entender qué le da significado a tu vida, o ya tenés eso bastante claro?" (MLQ Search)
3. "De estas tres fuentes de significado — lo que creás y dás al mundo, lo que recibís (conexión, belleza, experiencias), y la postura que tomás ante las dificultades — ¿cuál resuena más con vos?"
4. "Si tuvieras que describir el problema que naciste para resolver — o la contribución única que querés hacer — ¿cómo lo describirías?"
5. "¿Hay alguna práctica cotidiana o semanal que te conecte con lo que más te importa?"

After Q5: place in MLQ quadrant, identify primary meaning source, capture life theme as working hypothesis. Output YAML. Reference MLQ web tool.

---

## Deep Mode Script — Sequence

1. MLQ-10 conversational approximation: both subscales (3-4 questions each)
2. Quadrant placement and interpretation (with LATAM calibration)
3. Frankl Source 1 (creative): 2-3 questions
4. Frankl Source 2 (experiential): 2-3 questions
5. Frankl Source 3 (attitudinal): 1-2 questions (this is personal — don't push)
6. Identify primary meaning source + secondary
7. Life theme extraction: 3 Savickas questions
8. Damon beyond-self check
9. Ryff purpose subscale (conversational items)
10. Purpose practice development
11. Career implications by quadrant
12. MLQ caveat + reference to web tool
13. CTA: "Con este perfil de propósito, ¿querés ver cómo esto se traduce en estrategia de carrera concreta? Usá N1 Construye Afuera."
