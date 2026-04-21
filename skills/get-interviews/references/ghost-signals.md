# Ghost Job Signals — Detecting postings without intent to hire

> Reference loaded by `skills/get-interviews/SKILL.md`.
> Ghost jobs (posted but with no real intent to hire within 90 days) are 18-43% of public listings depending on source (Visier 2024, ResumeBuilder 2024).
> Detection is probabilistic, never certain. Present scores as guides, not verdicts.

---

## What counts as a ghost job

- **Pipeline-building:** company collects CVs for a future hire, not a current one
- **Budget frozen:** role was approved, then frozen; posting left up
- **Retention signal:** posting exists to remind current employees they're replaceable
- **Compliance posting:** the company hired internally but posted externally to satisfy internal policy
- **Market research:** company tests what candidates/salaries are available, with no intent
- **Agency fishing:** recruitment agency collects CVs on spec, not for a specific client

Key differentiator from a real job: **no hiring manager will meet the candidate within 45-60 days of the posting going live**.

---

## 8 signal categories (weighted)

Weights are approximate — each is a probabilistic nudge, not deterministic.

### Signal 1 — Posting age (weight: 0.18)
- 0-14 days: neutral
- 15-30 days: minor concern (-5)
- 31-60 days: moderate concern (-10 to -15)
- 61+ days: strong concern (-20 to -25)
- **Exception:** executive roles and niche specialist roles legitimately take 90+ days — discount accordingly.

### Signal 2 — Repost frequency (weight: 0.15)
- Same job posted 3+ times in 6 months → "always open" role (pipeline or retention)
- Check via LinkedIn job search → same company + same title, sort by date
- **Exception:** high-volume roles (call center, frontline sales) repost normally.

### Signal 3 — Requirement density (weight: 0.13)
- "Unicorn" roles asking for 10+ years + 7+ niche tools + PhD + bilingual = likely ghost or will remain unfilled
- Weighted by role seniority (senior engineering roles legitimately have more reqs than entry-level)
- 10+ must-have technical skills in one role → strong signal

### Signal 4 — Hiring manager / team visibility (weight: 0.12)
- Specific hiring manager named in posting → positive (real)
- "Sebastián Rodríguez, Head of Engineering, is hiring for his team" — strong real signal
- Generic "our team" language, no names, no team link → negative
- LinkedIn page shows active hiring manager posts → positive

### Signal 5 — Company layoff/hiring signals (weight: 0.12)
- Recent layoffs (last 90 days) → strong ghost concern (-15 to -20)
- Check: layoffs.fyi, news search, LinkedIn company page "we're hiring" posts vs layoff announcements
- Acquired or acquiring company: hiring often pauses during M&A → concern

### Signal 6 — Budget/salary transparency (weight: 0.08 — LIGHT)
- In LATAM, salary opacity is **structural, not a ghost signal**. Do not heavily penalize missing salary.
- In US/EU: no salary range where legally required (NYC, CO, CA) → strong concern
- Vague range ("competitive compensation") → mild concern
- **Critical cultural calibration:** in Colombia, México, Argentina, most real postings also don't publish salary. Weight this signal low for LATAM context.

### Signal 7 — Application process signals (weight: 0.10)
- "Apply via Workday/Greenhouse/Lever" with clear stages → positive (real pipeline)
- "Easy Apply only" with no follow-up screening → concern
- Auto-reject or silent after application → detected after-the-fact; not usable at application time
- Application form asks for extensive custom questions → more effort = more intent = positive

### Signal 8 — Employee activity on the role (weight: 0.12)
- Current employees share/comment on the posting on LinkedIn → strong positive
- LinkedIn "Employees recently joined" in the hiring department → positive
- No recent hires in the department in 6+ months + role has been open 60+ days → concern
- Team page empty or outdated → concern

---

## Signal composition → score

```
ghost_score = 100
             - Σ (signal_penalty × signal_weight)
             + positive_adjustments
```

Range interpretation:

| Score | Label | Action |
|-------|-------|--------|
| 80-100 | Probable real | Apply with optimized CV |
| 60-79 | Likely real, some risk | Apply; don't over-invest |
| 40-59 | Mixed / unclear | Priority-deprioritize; apply only with low effort |
| 20-39 | Probable ghost | Skip unless internal referral |
| 0-19 | Strong ghost signals | Skip |

**Rule:** Never report certainty. Always include "this is a probabilistic signal, not a verdict."

---

## Output structure (for the user)

For each offer analyzed, produce:

```markdown
## Score: 52/100 — mixta

**Señales en contra (peso dominante):**
- Publicación con 47 días de antigüedad (señal moderada)
- Empresa con layoffs en Q1 2026 (fuente: layoffs.fyi, 120 empleados)
- Requisitos: 12+ años + 6 herramientas específicas + bilingüe (perfil unicornio)

**Señales a favor:**
- Hiring manager identificable (Laura Pérez, VP Eng, publicó hace 2 semanas sobre su equipo)
- Proceso via Greenhouse con 4 etapas definidas

**Veredicto:** mixta. Si tenés referido interno, vale la pena. Sin referido,
prioriza otras ofertas con score >70 primero. No quemes energía adaptando
CV especialmente para esta sin una señal adicional (mención en comunidad,
post del hiring manager esta semana, nueva ronda de inversión).

**Nota:** el score es una guía probabilística, no una sentencia.
```

---

## Reducing false positives (offers that LOOK ghost but are real)

- Executive roles (VP+, C-suite) legitimately open 90+ days
- Highly specialized technical roles (e.g., principal ML engineer with specific stack) take 6+ months
- Government / public sector roles have longer cycles by design
- Consulting firm roles often hire "pipeline" cohorts with flexible start dates — not ghost, just delayed

When the user flags a role as high-value despite low score, ask: "¿Hay alguna señal específica que te hace pensar que sí van a contratar?" and if they have one (referral, recent conversation, company just raised), raise the score.

---

## What to tell users who got ghosted

If a user says "I applied 3 weeks ago and heard nothing":

1. **Normal:** 63% of applicants are ghosted (Visier 2024). Not personal.
2. **Timeframe:** typical response time is 7-21 days for initial screen. After 3 weeks with no response and no automated rejection, treat as dead unless you have a referral following up.
3. **One follow-up is OK, one only:** day 10-14 after application, polite message to recruiter or hiring manager if identifiable. More than one = harassment-adjacent, counterproductive.
4. **Don't fix the symptom (apply more), fix the cause:** if consistently ghosted, the problem is upstream — CV/LinkedIn not matching, targeting wrong roles, wrong market. Go back to the dual-audit.

---

_Reference v1.0 — Based on Visier 2024 ghost job study, ResumeBuilder 2024 survey, LinkedIn Workforce Insights 2026._
