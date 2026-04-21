# Skill Gap Map — From target role to 3/6/12-month plan

> Reference loaded by `skills/prepare/SKILL.md`.
> Given a target role family and the user's current skills, produce a specific, time-bounded plan to close the critical gaps.

---

## Process

### Step 1 — Identify the 5-8 required skills

For the target role family (from role-archetype work), list the 5-8 skills that show up repeatedly in job descriptions:

**Example: Product Analyst at LATAM fintech**
- SQL (required in ~95% of JDs)
- Python (or R) for data manipulation (80%)
- A/B testing / experimentation design (75%)
- Dashboarding (Tableau / Looker / Metabase) (70%)
- Statistical inference (basic) (65%)
- Stakeholder communication (100% though rarely explicit)
- Product sense (70%)
- Causal inference / observational methods (35%, but differentiator)

Source: scrape 15-20 real LATAM JDs (Bumeran, LinkedIn, company pages) to ground this, not memory.

### Step 2 — Self-assess current level (1-5 per skill)

```
Del 1 al 5, dónde estás hoy para cada skill?
1 = nunca usado
2 = usado con supervisión
3 = usado independientemente
4 = enseño a otros / uso con juicio
5 = nivel experto, referencia del equipo
```

Have the user rate. Don't let them rate 4-5 generously — push for evidence:

```
Dijiste 4 en SQL. Dame un ejemplo concreto de uso avanzado que hiciste
esta semana o este mes.
```

If the example is weak, re-calibrate to 3.

### Step 3 — Identify critical gaps

Compare user level to target level (typical: 3+ for required, 2+ for nice-to-have).

**Critical gap:** any skill where user < target - 1 level.
**Priority:** rank critical gaps by:
- How often the skill appears in JDs (dominant > niche)
- How much time to close (fast wins first)
- User's energy/interest (higher energy = faster closing)

Typical: pick **2-3 critical gaps** to work on. More dilutes focus.

### Step 4 — Build the 3/6/12-month plan

For each critical gap, specify:

**3-month horizon: learn + start applying**
- Specific resource (book / course / tutorial) with hour estimate
- Specific micro-project that uses the skill

**6-month horizon: produce evidence**
- Portfolio piece published (GitHub / blog / demo) demonstrating the skill
- Language to add to CV ("built X using Y", not "familiar with Y")

**12-month horizon: role-competitive**
- Can discuss the skill in depth in an interview
- Have 2-3 stories that demonstrate it
- Ready to apply with evidence

---

## Plan format (output template)

```markdown
## Rol target: Product Analyst en fintech LATAM

### Skills requeridas y nivel actual

| Skill | Nivel actual | Nivel objetivo | Gap crítico |
|-------|--------------|----------------|-------------|
| SQL | 4 | 4 | no |
| Python (pandas) | 3 | 4 | menor |
| A/B testing framework | 2 | 4 | **sí** |
| Causal inference | 1 | 3 | **sí** |
| Dashboarding (Looker) | 4 | 4 | no |
| Statistical inference | 3 | 3 | no |
| Stakeholder comm | 4 | 4 | no |
| Product sense | 3 | 3 | no |

### Gaps críticos (2)

**1. A/B testing framework (prioridad alta)**

3 meses:
- Curso: "Trustworthy Online Controlled Experiments" (Kohavi, libro + videos)
- Tiempo: 30 horas
- Micro-proyecto: simular experimento con data pública (Kaggle), publicar análisis en GitHub con:
  - Hipótesis
  - Power calculation
  - Resultados (incluyendo multiple testing correction)
  - Conclusión con límites

6 meses:
- Segundo experimento, esta vez con data no sintética (trabajo actual si aplica, o dataset de alto volumen)
- Blog post o repo público comparando 2 metodologías (ej: frequentist vs Bayesian A/B)
- CV: "Diseñé y ejecuté 2 experimentos A/B end-to-end, incluyendo power analysis y multiple testing correction."

12 meses:
- Puede conversar en entrevista sobre diseño de experimento bajo ambigüedad
- Tiene 2-3 historias STAR sobre experimentos (incluyendo al menos uno con resultado null)

**2. Causal inference (prioridad media)**

3 meses:
- Libro: "Causal Inference Mixtape" (Cunningham) - capítulos 1-5
- Tiempo: 40 horas
- Micro-proyecto: análisis observacional con técnica adecuada (DiD / PSM / IV), dataset público

6 meses:
- Re-analizar un dato de trabajo usando causal inference (si aplica legalmente)
- Escrito breve (blog o repo) comparando análisis correlacional vs causal para el mismo dato

12 meses:
- Puede identificar cuándo un problema requiere causal inference vs A/B test
- Tiene al menos una historia STAR sobre momento donde esta diferenciación importó

### Skills que NO trabajar ahora

- Machine Learning: no es requisito del rol target. Enfocarte en ML ahora diluye el foco. Revisar en 12 meses si el objetivo cambia.
- Deep statistics: nivel actual suficiente. Profundizar sería diminishing returns para el rol.

### Métricas de éxito

- **Semana 4:** primer micro-proyecto de A/B testing en GitHub
- **Semana 12:** segundo proyecto, blog post publicado
- **Semana 24:** aplicación a 3-5 roles con este skill explícito en CV
- **Semana 52:** primera oferta o 2+ entrevistas finales

### Si el plan no avanza a las 6 semanas

Volver con N1 Resilience. El problema probablemente no es capacidad, es momentum / estructura / soporte.
```

---

## Skill hierarchy — what's worth prioritizing

In 2026, what wins time ROI:

### Highest ROI per hour invested
- SQL fluency (transferable across all data roles)
- One programming language to intermediate (Python or R)
- A/B testing + experimentation design (applicable beyond data)
- Writing / communication (under-trained, universally rewarded)

### Medium ROI
- Cloud platform basics (AWS or GCP) — useful, but role-specific
- Specific BI tools (Tableau, Looker) — hireable, but not broadly portable
- Domain expertise (fintech, healthtech, etc.) — narrows the field but increases compensation

### Low ROI (unless role-specific)
- Deep ML / AI — unless role demands it; too commodity for generalists
- Certifications without projects — rarely move the needle alone
- Multiple programming languages at surface level — 1 deep > 3 shallow

### Negative ROI (avoid)
- "Follow 10 LinkedIn Learning paths" — passive, no evidence produced
- Collecting certifications as a substitute for doing work
- Attempting to close 5 gaps at once — produces 5 surface-level skills, zero evidence

---

## Evidence requirements

For each skill claimed on CV, require:

1. **A specific project** demonstrating it (GitHub repo, blog, demo)
2. **A 60-second story** (STAR-ready) about using it
3. **A tool-aware explanation** (can discuss tradeoffs and limits)

Without (1), the claim is weak. Without (2), the interview will expose gaps. Without (3), senior interviewers dismiss.

---

## Plan maintenance

- Review every 6 weeks
- If pace is too slow → Resilience intervention (behavioral activation)
- If pace is too fast → user might be avoiding applying (learning as avoidance)
- If learning happens but evidence doesn't → stop learning, start shipping

---

_Reference v1.0 — Informed by Wharton/Accenture 2026 skills research, Kaggle survey data, Bureau of Labor Statistics projections, LATAM-specific job market analysis._
