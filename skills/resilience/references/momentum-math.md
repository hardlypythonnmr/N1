# Momentum Math — Tracking the numbers that actually matter

> Reference loaded by `skills/resilience/SKILL.md`.
> Simple but essential: most job seekers don't track their numbers, so they don't know if the problem is volume, conversion, or psychology. Five numbers tell almost everything.

---

## The five numbers

### 1. Weekly apply rate
Applications submitted in the past 7 days.

**Healthy ranges (active search):**
- **Pre-layoff / casual search:** 3-5/week is fine
- **Active search, employed:** 5-10/week
- **Active search, unemployed with runway:** 10-15/week
- **Active search, urgent runway:** 15-25/week max — beyond this, quality degrades

**Above 25/week: red flag.** No one can tailor 25 applications meaningfully. This is spray-and-pray masked as activity.

### 2. Weekly apply rate — 4 weeks ago
Ask the user to estimate. This baseline matters.

### 3. Delta
Current rate − baseline rate. Expressed as %.

- **Delta +20% or more:** scaling up, check quality is holding
- **Delta ±20%:** stable
- **Delta -50% or more:** momentum drop, candidate intervention needed

**Critical pattern:** if delta is -50% AND the user reports low mood, it's often NOT laziness. It's SDT frustration or early burnout. Address psychology, not volume.

### 4. Response rate
% of applications that received ANY response (human or automated, rejection or positive).

```
response_rate = (responses received / apps submitted) × 100
```

**Typical ranges (2026 market, LATAM and US):**
- **0-5%:** broken feedback loop. CV not passing ATS, or targeting wrong. Fix CV/targeting first.
- **5-15%:** normal-low. Slight improvement in CV/targeting can help.
- **15-30%:** healthy. Continue and focus on conversion at later stages.
- **30%+:** strong. You're a strong candidate for your targeted roles.

### 5. Interview rate
% of applications that led to at least one interview stage (screening counts).

```
interview_rate = (applications with at least one interview / apps submitted) × 100
```

**Typical ranges:**
- **0-2%:** structural problem (ATS filter, misaligned roles, wrong market, title mismatch)
- **2-5%:** baseline functional
- **5-10%:** strong
- **10%+:** exceptional

Note: interview rate depends heavily on seniority. Senior roles have smaller applicant pools but longer cycles.

---

## Computing and presenting

For the user's input (e.g., "I've applied to 8 this week, maybe 15 four weeks ago, 2 of them responded, 1 got to screening"):

```
apply_rate_current = 8
apply_rate_baseline = 15
delta = (8 - 15) / 15 = -47%

response_rate (over last 4-6 weeks, rough):
    apps_total_estimate = 40
    responses = 6
    rate = 15%

interview_rate:
    interviews = 2
    rate = 5%
```

Present:

```markdown
### Momentum snapshot

- Apps esta semana: 8
- Apps hace 4 semanas: ~15
- Delta: -47% (bajó significativamente)
- Response rate: ~15% (dentro de rango saludable-bajo)
- Interview rate: ~5% (funcional)

**Interpretación:** el feedback loop funciona (respondés bien al filtro,
tenés entrevistas). El problema no es calidad — es momentum. Delta -47%
sugiere SDT frustration, no rotura de sistema.
```

---

## Diagnostic via the numbers

| Pattern | Numbers | Root cause | Intervention |
|---------|---------|------------|--------------|
| **Volume high, response low** | 15+/wk, <5% response | CV / targeting broken | Get Interviews audit |
| **Volume high, response normal, interview low** | 15+/wk, 15%, <2% interview | Wrong roles or title mismatch | Prepare (role-archetype) |
| **Volume high, all rates normal, no offers** | 15+/wk, 15%, 5%, no offers in 3 months | Interview performance | Win Interviews |
| **Volume dropping, rates previously normal** | delta -50%, previously healthy | Burnout / SDT frustration | Resilience (this skill) |
| **Volume low, rates low from start** | <5/wk, <5% response | Under-applied, not yet enough data | Apply more first, then re-diagnose |

---

## Red-flag patterns

### Pattern 1 — Volume as avoidance
User applies to 30/week but all are low-effort. Masks the real problem (targeting, positioning, skills). Fix: reduce volume to 8-12/week, each tailored. Quality over quantity.

### Pattern 2 — Apply-less learning
User is "doing research" and "building skills" but never applying. 3 months pass. Fix: stop learning, start shipping. Apply to roles at current level while continuing to build.

### Pattern 3 — Revisit-revisit-revisit
User re-audits the same CV every 2 weeks without sending more applications. Fix: one audit, then 20 applications with it before audit #2.

### Pattern 4 — Ghost hunt
User focuses on tracking ghost jobs instead of applying to real ones. Symptom of avoidance — ghost-check should take <10% of time. Fix: commit 80% of time to applications, 20% to analysis.

### Pattern 5 — The rebound
Post-rejection surge: user applies 20 in one day after a bad rejection. Usually followed by 1-week slump. Fix: rate-limit (no more than 3/day regardless of mood), normalize the dip.

---

## When user can't estimate their numbers

Many users don't track. Ask for rough estimates:
- "Esta semana — 0, 1-3, 4-7, 8-12, 13+?"
- "Hace un mes — más o menos igual, o diferente?"

Rough ranges are enough for diagnosis. Don't demand precision.

---

## Simple tracking template (if user wants to start)

```
| Semana | Apps | Respuestas | Entrevistas | Estado emocional (1-5) |
|--------|------|------------|-------------|-----------------------|
| 2026-04-14 | 8 | 2 | 1 | 3 |
| 2026-04-21 | 6 | 1 | 0 | 2 |
```

Keeping this in a spreadsheet or Notion lets the user see trends. Update weekly, 2 minutes max.

---

## The "stop applying" decision

Sometimes the correct move is: pause applying for 5-7 days deliberately. Indicators:
- Delta -50%+ AND emotional state declining
- User reports physical symptoms (sleep, appetite affected)
- User is in Pattern 5 (rebound cycle)
- User hasn't taken a day off in 30+ days

The pause is not giving up. It's recalibrating. Frame explicitly:

```
No aplicar esta semana. Es parte del plan. Dormí 8 hrs/noche,
3 caminatas, 1 comida fuera, 0 LinkedIn. El lunes próximo
volvemos a revisar.
```

Some users will resist. Explain: the cost of NOT pausing is burnout + worse applications + a longer recovery. The 7-day pause is a tactical investment.

---

_Reference v1.0 — Informed by job-search behavioral data (LinkedIn 2026 Workforce Insights), SDT burnout research (Schaufeli 2017), and behavioral activation literature (Lewinsohn 2001)._
