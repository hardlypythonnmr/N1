# Skill-to-Title Translation — Making invisible candidates visible

> Reference loaded by `skills/get-interviews/SKILL.md`.
> The 2026 problem: skill churn is 66% faster in AI-exposed roles (Wharton/Accenture); job titles are obsolete faster than CVs update. Candidates have the skills; their title filters them out.

---

## The core move

Given a candidate's actual skills (from CV + LinkedIn + conversation), map to **adjacent job families** they're qualified for even if the title doesn't match exactly. Rank by match score. Surface the gap + time-to-close.

---

## Skill families taxonomy (starter map — expand by domain)

Each family contains 3-6 adjacent titles. Skill overlap between titles inside a family is typically 60-90%. Between families, 20-50%.

### Data & Analytics family
- Data Analyst · Product Analyst · Marketing Analytics · Growth Analyst · Business Intelligence Analyst · Revenue Operations Analyst
- Core skills: SQL, Python/R, dashboarding (Tableau/Looker/Metabase), A/B testing, experimentation design, stakeholder communication
- Adjacent: Data Engineer (heavier on pipelines) · ML Engineer (heavier on modeling) · Analytics Engineer (dbt + SQL-focused)

### Product family
- Product Manager · Product Owner · Technical Product Manager · Growth PM · Product Operations
- Core skills: user research, roadmapping, writing specs, working with engineering, metric definition, prioritization frameworks (RICE, ICE)
- Adjacent: UX Researcher (deeper research) · Business Analyst (heavier on processes)

### Engineering family
- Software Engineer (Frontend / Backend / Fullstack) · Mobile Engineer · DevOps · SRE · Platform Engineer
- Core skills: programming language, testing, CI/CD, code review, system design (variable depth by seniority)
- Adjacent: Solutions Architect (client-facing) · Engineering Manager (people-facing) · Data Engineer (data-focused)

### Design family
- Product Designer · UX Designer · UI Designer · Design Systems · Researcher + Designer hybrid · Brand Designer
- Core skills: Figma, user research methods, prototyping, design systems, stakeholder communication
- Adjacent: UX Writer (content) · Design Engineer (engineering bridge)

### Marketing family
- Performance Marketing · Content Marketing · SEO · Growth Marketing · Lifecycle / CRM
- Core skills: channel platforms (GA/Meta/Google Ads), copywriting, A/B testing, content strategy, attribution
- Adjacent: Marketing Analytics (see Data family) · Growth PM (see Product family)

### Sales & CS family
- Sales Development (SDR/BDR) · Account Executive · Account Manager · Customer Success · Solutions Consultant
- Core skills: CRM (HubSpot/Salesforce), outreach, negotiation, domain expertise, client communication
- Adjacent: Revenue Operations (see Data family) · Solutions Architect (see Engineering family)

### People & Ops family
- People Ops · Recruiter · L&D · HR Business Partner · Org Design
- Core skills: candidate sourcing, interview design, compensation knowledge, employment law basics, org psychology
- Adjacent: HR Transformation Consultant (strategic) · Executive Coach (certified)

---

## Matching algorithm

For a candidate with skill set S and a target family F with required skills F_req:

```
match_score = 0.6 × |S ∩ F_req| / |F_req|             # direct skill overlap
            + 0.2 × adjacency_bonus                   # for transferable experience
            + 0.1 × seniority_fit                     # years match the title tier
            + 0.1 × domain_bonus                      # industry fit
```

- **match_score ≥ 75**: apply now, you're qualified; CV needs re-titling/keyword work
- **60-74**: apply with honest framing; CV must acknowledge the pivot (parenthetical title, summary paragraph)
- **45-59**: 3-6 month skill plan first; not viable without evidence
- **<45**: wrong family; widen search or reconsider

---

## Pivot heuristics (mid-career to new family)

| Current → Target | Typical gap | Months to close |
|------------------|-------------|-----------------|
| Marketing Manager → Marketing Analytics | SQL, experimentation framework | 3-6 |
| Marketing Manager → Product Manager | spec writing, roadmapping, PM frameworks | 6-12 |
| Software Engineer → Engineering Manager | people frameworks, delegation, performance conversations | 6-12 |
| Software Engineer → Solutions Architect | client-facing comm, pre-sales, domain knowledge | 3-6 |
| Business Analyst → Data Analyst | Python/SQL depth, statistics, causal inference | 3-9 |
| Project Manager → Product Manager | user research, prioritization, domain depth | 6-12 |
| Designer → Design Engineer | React/CSS fluency, design tokens, code review | 6-12 |
| Generalist → specialized role | specialist tools, deep projects | 3-12 |

Times assume dedicated ~5-10 hrs/week of learning + portfolio building, not passive.

---

## Evidence requirements per pivot

To be competitive in the target family (not just technically qualified), the candidate needs:

1. **One portfolio project** that looks like work in the target family (4-6 weeks)
2. **Re-titled CV** using target family's vocabulary
3. **LinkedIn headline** stating the target role, not the current one
4. **2-3 conversations** with people in that family (informational, not pitching)

Without 1 and 2, the skill mapping is invisible to anyone filtering.

---

## Anti-patterns (avoid suggesting)

- **"Try everything"** — spray applications across 6 families dilutes signal. Recommend one, maybe two.
- **"Just get certifications"** — a Coursera ML cert doesn't substitute for a portfolio project. Prefer project-based evidence.
- **"Wait until you have the gap closed"** — apply while building. Rejection is data. Some roles only need 70% match; recruiters fill in the rest.
- **"Follow your passion"** — ignore skill/market fit. Passion alone doesn't pay rent. Consider: do you have meaningful overlap? Is there demand? Can you live with the pay?

---

## Output format for the skill

For each candidate family identified, produce:

```markdown
## Familia: [Nombre]
**Match score:** 72/100
**Roles típicos:** Product Analyst, Growth Analyst, Marketing Analytics
**Empresas LATAM con vacantes activas:** Mercado Libre, Rappi, Nubank, Platzi (check LinkedIn/Bumeran)

### Cómo encajás
- Tus 8 años en marketing digital cuentan como experimentación aplicada
- SQL intermedio + dashboards en Looker ya lo tenés
- Stakeholder management con gerencia es transferible directo

### Gap (3 meses)
- Causal inference / A/B testing formal (Hernán & Robins chapters 1-3; Khan Academy stats)
- Un portafolio: un análisis end-to-end con datos públicos (Kaggle + GitHub público)

### Plan de evidencia
- Proyecto: análisis de cohort de algún dataset público (retention, LTV)
- CV re-titulado: "Marketing Manager (analytics focus)"
- LinkedIn headline: "Marketing Analyst · SQL + experimentation · LATAM tech"
```

Repeat for 2-5 families. Ask the user which one has more energy — not just higher match.

---

_Reference v1.0 — Informed by Wharton/Accenture 2026 skills research, LinkedIn 2026 Talent Trends, Platzi LATAM market data._
