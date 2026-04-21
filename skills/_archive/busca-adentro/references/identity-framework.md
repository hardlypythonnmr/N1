# Identity Framework — N1 Busca Adentro

> Reference file for the Identity dimension. Loaded by SKILL.md before starting identity work.
> Contains: Ibarra working identity, Marcia status, CAAS-12 conversational, possible selves, narrative theme.
> Do not show to users directly — this is AI context.

---

## Framework Overview

Four frameworks used in the identity dimension:

1. **Working Identity** (Ibarra, 2003) — Identity is built through action, not introspection. Possible selves are tested through small experiments. "Act your way into a new way of thinking."
2. **Identity Status Theory** (Marcia, 1966) — Four statuses based on exploration and commitment. Heuristic assessment only — NOT clinical diagnosis.
3. **CAAS — Career Adapt-Abilities Scale** (Savickas & Porfeli, 2012) — 4 subscales: Concern, Control, Curiosity, Confidence. Conversational approximation only; always refer to web tool for validated scores.
4. **Possible Selves** — Exploratory professional identities the user is testing or imagining (Ibarra; Markus & Nurius).

**Key principle (Ibarra):** Identity experiments are more effective than identity planning. A small project in a new direction tells you more in 30 days than a year of reflection.

---

## Ibarra Working Identity

Three types of experiments to surface with users:

1. **Peripheral participation** — Take on a project adjacent to desired new identity without leaving current role. Teach a class, join a committee, write publicly.
2. **Temporary projects** — Short-term contract, freelance work, sabbatical project. Gives a "taste" before committing.
3. **Identity-relevant side projects** — Build something in the new domain (product, community, content). Creates external evidence of new identity.

**Elicitation questions:**

> "¿Hay algo que hayas querido probar en tu carrera — un tipo de rol, un proyecto, una industria — pero nunca hiciste el primer paso? ¿Qué detuvo ese primer paso?"

> "Si quisieras explorar [identidad X] sin renunciar a lo que tenés ahora, ¿cuál sería el experimento más pequeño posible en los próximos 30 días?"

> "¿Hay alguien que hacés lo que vos querés explorar? ¿Podrías tener una conversación con esa persona en las próximas dos semanas?"

YAML fields: `identity.possible_selves`, `identity.active_experiments`

---

## Marcia Identity Status — Heuristic Assessment

**CRITICAL: This is conversational heuristic ONLY — never a clinical diagnosis.**

Never say: "Tenés identity diffusion" or "Tu estatus es X" as a clinical fact.
Always say: "Tu exploración de identidad parece estar en una fase de [description]" — frame as a working description, not a label.

**4 statuses and their heuristic signals:**

| Status     | YAML value | Exploration | Commitment | Conversational signals                                        |
| ---------- | ---------- | ----------- | ---------- | ------------------------------------------------------------- |
| Achieved   | achieved   | High        | High       | "Sé lo que quiero y sé por qué lo elegí. Hay claridad."       |
| Moratorium | moratorium | High        | Low        | "Estoy explorando activamente pero no me comprometo todavía." |
| Foreclosed | foreclosed | Low         | High       | "Siempre supe que iba a hacer X. No cuestioné esa dirección." |
| Diffused   | diffused   | Low         | Low        | "No sé qué quiero y tampoco he buscado activamente saberlo."  |

**Key assessment questions:**

> "¿Qué tan claro tenés hacia dónde vas profesionalmente?"
> "¿Exploraste activamente opciones antes de llegar a tu situación actual?"
> "¿Sentís que tenés una dirección comprometida, aunque sea provisional?"

**Interpretation guide:**

- Moratorium: PRODUCTIVE state — exploring is healthy, not a problem. "Estar en moratorio es una fase activa de crecimiento, no un problema a resolver."
- Foreclosure: needs gentle exploration prompts — "¿Alguna vez te preguntaste si había otras posibilidades que nunca exploraste?"
- Diffusion: highest need for support — start with values dimension if not done. Don't pathologize.
- Achieved: validate and build on the foundation — "Desde ese lugar de claridad, ¿qué sigue?"

YAML field: `identity.identity_status`

---

## CAAS-12 Conversational Approximation

**MANDATORY CAVEAT before using:** Always tell the user this is conversational, not standardized.

> "Lo que vamos a hacer es una aproximación conversacional — no es el instrumento estandarizado. Para el CAAS-12 completo y validado, usá la herramienta Compass en [N1 web link]."

4 subscales, 3 questions each for conversational approximation. Score 1-5.

### Concern (planificación orientada al futuro)

> "¿Con qué frecuencia pensás en cómo será tu carrera en los próximos años?"
> "¿Preparás activamente tu desarrollo profesional futuro?"
> "¿Tenés una idea de qué tipo de trabajo querés hacer en el futuro?"

Low Concern signal: "Tiendo a vivir el día a día en mi carrera, no pienso mucho en el futuro."

### Control (responsabilidad personal por la carrera)

> "¿Sentís que sos responsable de construir tu carrera, o que eso depende más de oportunidades externas?"
> "¿Tomás decisiones activas sobre tu desarrollo, o esperás a que las cosas pasen?"
> "¿Mantenés tus opciones abiertas eligiendo activamente, o vás siguiendo lo que viene?"

**LATAM calibration:** Lower control scores are NORMATIVE in collectivist cultures (Colombia, most of LATAM). Do NOT pathologize. Acknowledge the cultural context internally:

- "Los puntajes de Control corren más bajos en culturas colectivistas como Colombia. Esto no significa pasividad — significa que las decisiones se toman en un contexto relacional más amplio."

### Curiosity (exploración de posibles yos)

> "¿Buscás activamente información sobre distintos tipos de trabajo y carreras?"
> "¿Te imaginás en diferentes roles o carreras posibles?"
> "¿Explorás cómo encajarías en distintos entornos de trabajo?"

Low Curiosity: user may be in Moratorium but not actively exploring, or needs permission to explore.

### Confidence (autoeficacia para las aspiraciones de carrera)

> "¿Qué tan seguro te sentís de poder resolver los problemas que aparezcan en tu carrera?"
> "¿Podés hacer lo que planeaste para tu carrera?"
> "¿Sabés cómo manejar los desafíos que enfrentás en tu carrera?"

YAML fields: `identity.adaptability.concern`, `.control`, `.curiosity`, `.confidence` (1-5 conversational estimates)

---

## Possible Selves — Exploration

Based on Ibarra's working identity framework. Three types of possible professional identities to surface:

1. **Desired possible selves** — roles and identities the user wants to inhabit
2. **Feared possible selves** — identities the user is trying to avoid
3. **Expected possible selves** — identities others (family, colleagues) expect

**Elicitation questions:**

> "Si pudieras ser cualquier cosa profesionalmente dentro de 5 años — sin restricciones — ¿qué serías?"

> "¿Hay un tipo de trabajo o identidad profesional que querés evitar? ¿De qué te alejarías activamente?"

> "¿Qué esperan las personas más importantes en tu vida que hagas con tu carrera? ¿Eso coincide con lo que vos querés?"

**Evaluation against values:** For each possible self, ask:

> "¿Cómo se alinea esta posibilidad con los valores que identificamos? ¿Con tus fortalezas?"

YAML field: `identity.possible_selves` — list of explored identities

---

## Narrative Theme — Savickas Life Theme

Three questions that surface the underlying theme of the career story:

> "¿Cuál era tu programa de televisión o película favorita de niño/a? ¿Qué te gustaba de esa historia?"

> "¿Cuál es el libro o historia que más te marcó? ¿Qué problema resolv[ía] el protagonista?"

> "Si tu carrera hasta ahora fuera el primer capítulo de una novela — ¿cuál sería el tema central de esa novela?"

**Interpretation:** The narrative theme often reveals what the person has been trying to work out through their career. It's a pattern, not a prescription.

Reflect it back tentatively: "Lo que me contás suena a un tema de [X — por ejemplo: 'demostrar competencia en un entorno que dudó de vos' o 'construir algo duradero en contextos inestables']."

YAML field: `identity.narrative_theme`

---

## Limiting Beliefs — Gentle Surfacing

Common LATAM career-limiting beliefs (for AI identification — never label them to users):

- **Impostor syndrome:** "Mis logros son suerte — en cualquier momento me van a descubrir"
- **Age limits:** "Ya es muy tarde para empezar en [X]"
- **Geographic constraint:** "En Colombia/LATAM no hay oportunidades para esto"
- **Credential inflation:** "Sin [certificación/título] no puedo acceder a ese tipo de rol"
- **Binary trap:** "O me quedo sufriendo o renuncio sin nada"

**Surfacing moves** (internal CBT restructuring — never label as CBT to user):

1. Catch: notice the belief in what the user says
2. Surface gently: "¿Qué evidencia hay a favor de eso? ¿Y en contra?"
3. Shift perspective: "Si un colega tuyo hubiera logrado lo mismo que vos, ¿dirías que 'no es suficiente'?"
4. Connect to possibility: "¿Cómo cambiaría lo que buscás si esa creencia tuviera menos peso?"

YAML field: `identity.limiting_beliefs` — list of surfaced beliefs

---

## Profile YAML Mapping

```
identity.identity_status         ← Marcia status (conversational heuristic)
identity.adaptability.concern    ← CAAS concern subscale (1-5 approx)
identity.adaptability.control    ← CAAS control subscale (1-5 approx, LATAM-calibrated)
identity.adaptability.curiosity  ← CAAS curiosity subscale (1-5 approx)
identity.adaptability.confidence ← CAAS confidence subscale (1-5 approx)
identity.possible_selves         ← List of explored professional identities
identity.active_experiments      ← Current or proposed Ibarra experiments
identity.narrative_theme         ← Career story underlying theme
identity.limiting_beliefs        ← Surfaced career-limiting beliefs
identity.mode                    ← quick | deep
identity.completed               ← true when key fields populated
identity.updated                 ← ISO 8601 timestamp
```

---

## Quick Mode Script — 5 Questions

1. "¿Cómo te presentarías a alguien nuevo en tu campo? No el título — quién sos realmente."
2. "¿Hay identidades profesionales que te llaman la atención, aunque no las hayas perseguido?"
3. "¿Qué tan claro estás de hacia dónde vas? ¿Explorando, comprometido con un camino, o un poco perdido?"
4. "¿Hay algo que creés sobre vos mismo/a profesionalmente que podría estar limitando lo que buscás?"
5. "Si le describieras a alguien el hilo conductor de tu carrera — lo que conecta todo — ¿cuál sería?"

After Q5: name identity status descriptively, list 2-3 possible selves, extract narrative theme. Output YAML.

---

## Deep Mode Script — Sequence

1. Ibarra working identity intro: what experiments have you run or avoided?
2. Marcia assessment: 3-4 key questions, name status descriptively
3. Possible selves: identify 3-5 professional identities
4. CAAS-12 conversational approximation: all 4 subscales (with caveat)
5. Design 1-2 Ibarra experiments for highest-priority possible self
6. Narrative theme extraction: Savickas 3 questions
7. Limiting beliefs: surface and gently test 1-2
8. Integration with values and strengths (if completed): does the possible self align?
9. CAAS caveat + reference to Compass web tool
