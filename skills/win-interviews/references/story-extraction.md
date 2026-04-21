# Story Extraction — Building the candidate's STAR bank

> Reference loaded by `skills/win-interviews/SKILL.md`.
> The insight: candidates have strong stories, but don't know which one to tell when. Index 5-6 stories by competency so any behavioral question pattern-matches to one.

---

## Why 5-6 stories is the right number

- **< 3 stories:** repetition becomes obvious across a 5-question behavioral round
- **5-6 stories:** covers every major competency category, with 1-2 that double as fallback for edge cases
- **> 8 stories:** cognitive load in real-time recall; candidates freeze trying to pick
- **Sweet spot: 5-6**, where each covers 2 competencies so the full competency matrix is served

---

## The 6 competency categories

Interviews in tech and adjacent roles consistently probe these six. Different companies weight differently, but a strong story per category covers most interviews.

| Competency | Sample questions | What interviewers want to see |
|------------|------------------|--------------------------------|
| **Leadership / Influence** | "Tell me about a time you led change." "Describe influencing without authority." | Vision clarity, stakeholder alignment, delegation judgment |
| **Conflict / Difficult feedback** | "Tell me about a conflict with a colleague." "How do you give hard feedback?" | Emotional regulation, directness, outcome-orientation |
| **Ambiguity / Ownership** | "Describe a time with unclear direction." "When did you drive a decision that wasn't yours to make?" | Initiative, comfort with uncertainty, bias toward action |
| **Impact / Outcomes** | "Biggest thing you've shipped." "Project you're most proud of." | Scale, ownership of outcomes, metric literacy |
| **Growth / Learning** | "Time you had to learn something fast." "What's the biggest skill jump you've made?" | Meta-learning ability, vulnerability, curiosity |
| **Failure / Recovery** | "Tell me about a failure." "What would you do differently?" | Honesty, analysis quality, recovery behavior |

---

## Extraction method

Given a candidate's CV + LinkedIn + conversation:

### Step 1 — Surface candidate moments

Ask the candidate to list their **most vivid professional memories** — not best, not biggest. Vivid = still remembers details clearly. Good memory = good story material.

If they can't list without prompting, walk through CV role by role:
- "Cuál fue el momento más intenso en este rol?"
- "Qué hiciste que recordás como si fuera ayer?"
- "Cuándo sentiste que cambiaste de cómo trabajabas antes?"

Target: surface 12-18 candidate moments across their career.

### Step 2 — Score and filter

For each moment, quickly rate:
- **Clarity of outcome (0-3):** can they state what happened in terms a stranger would understand?
- **Role ownership (0-3):** did they drive it, or were they peripheral?
- **Stakes/scale (0-3):** was the outcome meaningful? money / users / time / relationships?
- **Arc presence (0-3):** is there a beginning, middle, end — or just a moment?

Keep moments scoring ≥ 8/12. Discard the rest.

### Step 3 — Map to competencies

For the kept moments (usually 8-12), tag each with 1-2 competencies. Some moments naturally serve multiple:
- A migration-led story might cover Leadership + Impact
- A difficult-peer-feedback story might cover Conflict + Growth
- A pivot-under-pressure story might cover Ambiguity + Learning

### Step 4 — Select final 5-6

Goal: every competency category is covered, no redundancy.

- Pick 1 story each for Leadership, Conflict, Ambiguity, Impact
- Pick 1 story for Growth/Learning (vulnerability is key here — if leadership stories all show success, need a story that shows learning)
- Pick 1 story for Failure/Recovery (critical — candidates who can't tell a failure story raise red flags)

If one moment covers 2 competencies well, use it in both slots — but **tell it differently** each time. Same facts, different emphasis.

---

## The YAML format

```yaml
stories:
  - id: lead-migration-1
    title: "Rappi Redshift→Snowflake migration (2023)"
    competencies: [leadership, impact]
    hook: "Había que migrar a 12 analistas a una plataforma nueva en 10 semanas, y el equipo se resistía."
    situation: "Rappi necesitaba bajar costos de analytics. Snowflake era la apuesta. Mi equipo de 12 analistas usaba Redshift hace 3 años."
    task: "Yo era tech lead, responsable del plan de migración Y de la adopción del equipo."
    action: "Tres movidas: (1) piloto con 2 early adopters para validar que la migración era real y no una presentación; (2) documentación paso-a-paso en español y en inglés; (3) sesiones 1-a-1 con los 3 analistas más escépticos, no para convencerlos, para entender qué perdían."
    result: "Migramos en 10 semanas, bajamos costos 38%, adoptaron 10 de 12. Los 2 que no, renunciaron por razones ajenas al cambio."
    learning: "La resistencia casi nunca es técnica. Es sobre pérdida de autoridad o de dominio. Atender eso primero, lo técnico sigue."
    re-tell-as: |
      Misma historia, ángulo conflict:
      - Hook: "Tres analistas senior no querían migrar. Uno de ellos quería reportarme a RRHH."
      - Foco: describir la conversación difícil, qué hice, qué aprendí.

  - id: conflict-feedback-1
    title: "PM junior + decisión de scope (Globant, 2021)"
    competencies: [conflict, growth]
    hook: "Un PM junior quería shippear una feature que iba a romper métricas core. Tenía que decirle no."
    situation: "..."
    # ... (full STAR)

# 4 más historias siguiendo el mismo patrón
```

---

## Story quality checklist

Before finalizing a story into the bank, verify:

- [ ] **Hook under 15 seconds** — one sentence, concrete, specific
- [ ] **STAR complete** — no missing Result, no missing Task
- [ ] **Specific numbers** — if no hard numbers, at least observable outcome ("the team stopped arguing about X")
- [ ] **Role ownership is clear** — listener knows what you did vs what the team did
- [ ] **Learning is non-obvious** — "I learned teamwork matters" is weak; specificity wins
- [ ] **Can be told in 60-90 seconds** — time yourself reading the full story, adjust if longer
- [ ] **Doesn't rely on context** — a stranger in another industry can follow without needing background

---

## Common failure modes

- **Over-rehearsed** — sounds canned, loses authenticity. Fix: tell it 5x in different words each time, not memorize one script.
- **Missing R** — candidate describes situation + action but not what happened. Fix: force a metric or observable outcome.
- **Too long** — 3+ minute story loses the interviewer. Fix: cut S and T in half, emphasize A and R.
- **Wrong competency fit** — answering leadership question with an impact story that doesn't show leadership. Fix: story bank should tag competencies explicitly.
- **Safe stories only** — every story a success. Fix: the Failure story is not optional.

---

## Re-tell patterns (same story, different framing)

A strong story can answer multiple question patterns. Practice re-telling:

### Version A — Leadership frame
- Hook: "I led..."
- Emphasis on: vision, coordination, delegation
- Result: team outcome

### Version B — Conflict frame
- Hook: "There was tension around..."
- Emphasis on: the hard conversation
- Result: how it got resolved

### Version C — Impact frame
- Hook: "The project delivered..."
- Emphasis on: metric, scale, business outcome
- Result: the number

### Version D — Learning frame
- Hook: "Before this, I thought..."
- Emphasis on: what changed in your approach
- Result: how you operate differently now

Same facts. Four distinct answers to four different questions. This is the unlock.

---

## Hook library (anchors)

Strong hooks:
- "Había un momento donde [specific tension]..."
- "El equipo estaba [state], y yo tenía que [action]..."
- "Recibí un email / Me dijeron / Me asignaron que [specific event]..."
- "Cuando entré a [role], lo primero que noté fue..."
- "La decisión tenía dos caminos y yo elegí..."

Weak hooks to avoid:
- "Una vez trabajé en un proyecto que..."
- "He tenido muchos casos de..."
- "Déjame pensar... bueno, un ejemplo sería..."
- "En general, siempre trato de..."

Strong hooks anchor in specifics. Weak hooks wander.

---

_Reference v1.0 — Based on Behavioral Interviewing research (Latham 1980), Amazon Leadership Principles interview data, Google's structured interview guidance._
