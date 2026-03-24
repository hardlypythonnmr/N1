# N1 Ghost Check — Scoring Engine (Extended Reference)

> Extended scoring guidance for GPT retrieval. The 6-category table and tiers live in instructions.md.
> This file provides per-category signal examples, LATAM calibration, and adjustment factor rationale.

---

## Category 1: Antigüedad del posting (Max 20 pts)

**What to look for:**

- Explicit posting date on the job board
- "Posted X days ago" indicator
- Last activity date on the company's LinkedIn page
- Whether the posting has been refreshed (same content, new timestamp)

**Real job signals:**

- Posted within the last 2-3 weeks with a clear date
- Company LinkedIn shows hiring manager activity in the same period
- Job board shows "applications being reviewed" status
- Posting was updated with new information (not just re-dated)

**Ghost job signals:**

- Posting date is 3+ months ago with no update
- Job has been reposted multiple times over several months
- Company has no other open roles but keeps this one "active"
- "Always open" language: "We're always looking for talented engineers"

**LATAM calibration:**

- Many LATAM companies don't update posting dates even when actively hiring — score 30-60 day postings at 10 pts (not automatically ghost)
- Multinational firms in LATAM tend to have better ATS discipline — apply stricter aging criteria

---

## Category 2: Transparencia salarial (Max 20 pts)

**What to look for:**

- Specific salary range with currency and period (ej: "$4,000-5,500 USD/mes")
- Equity or benefits details (stock, bonuses, remote stipend)
- "Salario a convenir" with no range at all
- "Competitive salary" with no numbers

**Real job signals:**

- Explicit range: "$80,000–100,000 COP/mes" or "USD 2,500–3,500/month"
- Mentions currency, whether gross or net, payment frequency
- Benefits listed specifically: "Seguro médico, 20 días de vacaciones, viernes flexible"

**Ghost job signals:**

- "Salario competitivo" with no range
- "Based on experience" with no floor or ceiling
- No compensation mention at all (applies primarily to international companies — see LATAM calibration below)
- Benefits section is vague or absent

**LATAM calibration:**
Salary opacity is structurally embedded in LATAM hiring culture — especially in Colombia, Mexico, and Argentina. Many legitimate employers do not publish salaries. Scoring already accounts for this:

- Sin mención + contexto LATAM = 8 pts (not 0) — partial credit because omission is normative
- Sin mención + empresa internacional (US/EU company, bilingual posting) = 0 pts — they should know better

Never tell a user "this is suspicious" just because there's no salary in a Colombian or Mexican posting.

---

## Category 3: Especificidad del rol (Max 15 pts)

**What to look for:**

- Named team or department
- Reporting structure (manager's role mentioned, even if not name)
- Day-to-day responsibilities with concrete tasks
- Specific tools, stack, or methods used
- Deliverables in the first 30/60/90 days

**Real job signals:**

- "Trabajarás con el equipo de producto en features de la app móvil — stack: React Native, TypeScript, GraphQL"
- "Reportás al VP of Engineering. En los primeros 90 días: migrar X módulo, liderar Y sprint"
- "Equipo actual: 4 engineers + 1 PM + 1 designer"

**Ghost job signals:**

- "Join our dynamic team!" with no team description
- "Responsibilities include [5 vague bullet points that apply to any software role]"
- No mention of stack, tools, or methods
- Job description identical or nearly identical to another open role

**LATAM calibration:**

- Smaller LATAM companies often have less structured JDs — a generic description is less suspicious for a 20-person startup than for a large firm
- Outsourcing firms (Globant, EPAM) tend to post generic "bench" roles — these often are real but for future staffing, not immediate hire. Score specificity low but note this interpretation.

---

## Category 4: Presencia de la empresa (Max 15 pts)

**What to look for:**

- Company name (not "confidential" or unnamed)
- Active LinkedIn company page with recent posts (last 30-60 days)
- Company website that matches the industry claimed
- Glassdoor or similar review presence
- Evidence of recent growth or announcements

**Real job signals:**

- Named company with >200 LinkedIn followers and recent activity
- Company page shows other employees (not just the posting)
- Website has team page, client logos, case studies
- News mentions or press releases from the last year

**Ghost job signals:**

- "Company name: Confidential" or "Empresa líder del sector" with no name
- Company LinkedIn page with 0-10 followers and no posts
- Website looks like a template with placeholder content
- No Glassdoor presence for a company claiming to be 100+ employees
- Company profile says 1 employee but posting claims it's a "100+ person team"

**LATAM calibration:**

- Smaller Colombian/LATAM companies may have minimal digital presence without being ghost jobs — weight team size context
- Many legitimate LATAM companies don't maintain active LinkedIn pages — don't over-penalize for low engagement, but do penalize for no page at all

---

## Category 5: Patrones de lenguaje (Max 15 pts)

**What to look for:**

- Balance of buzzwords vs. concrete requirements
- Whether responsibilities have measurable outcomes
- Generic "culture" language vs. specific team norms
- Requirements that match the actual role level

**Real job signals:**

- "Liderar migraciones de microservicios a Kubernetes con un equipo de 3 devops"
- "Responsable de reducir el tiempo de respuesta de la API de 800ms a <200ms en el Q2"
- Clear seniority signals: specific years + specific context (not just "5 years experience")
- Soft skills with concrete context: "Necesitás comunicar trade-offs técnicos a stakeholders no-técnicos"

**Ghost job signals:**

- Buzzword saturation: "innovative", "dynamic", "passionate", "results-driven", "synergy", "disruptive"
- Vague outcome language: "will help drive business results" — what results?
- Copy-paste requirements: lists of 15+ skills with no prioritization
- Personality requirements for technical roles: "must be a team player who loves to innovate"

**Buzzword red-flag list:**

- "Passionate about [industry]" / "Enthusiastic about [anything]"
- "Self-starter", "go-getter", "rockstar", "ninja", "guru"
- "Fast-paced environment" / "rapidly growing startup"
- "Wear many hats" / "roll up your sleeves"
- "Make an impact" / "change the world" / "world-class team"

**Specificity signals (positive):**

- Named methodology: "Trabajamos con Shape Up (Basecamp) para ciclos de 6 semanas"
- Actual tools: "Stack: Django, PostgreSQL, Redis, deployed on AWS ECS"
- Real constraints: "La API tiene 40M requests/día — vas a trabajar con eso desde el día 1"

---

## Category 6: Señales de reposteo (Max 15 pts)

**What to look for:**

- Is this the first time this role appears, or a repeated posting?
- Cross-posting across multiple job boards with different dates
- Identical or near-identical postings under different titles
- Stale LinkedIn Easy Apply counters ("500+ applications")

**Real job signals:**

- Single posting, first time visible, recent date
- Application counter is low (0-50 applicants) indicating freshness
- Unique job URL with consistent metadata across platforms

**Ghost job signals:**

- Same posting on 5+ job boards with different posting dates
- Job has been "closed" and "reopened" multiple times
- Title variation with identical body: "Senior Developer" / "Sr. Developer" / "Senior Software Engineer" posted same week
- "500+ applicants" on a posting that is supposedly urgent to fill
- Job board shows posting was "re-listed" or "refreshed"

**Detection technique:**
Search for 3 distinctive phrases from the job description in quotes on Google. If the same posting appears on 5+ sites with different dates, it's a reposting signal.

---

## Adjustment Factors (Applied After Scoring)

### Requisitos irreales para el nivel (-5 pts)

**What qualifies:**

- "Junior position (0-2 years)" combined with "5+ years required"
- "Entry level" role requiring 3+ programming languages + cloud certifications + management experience
- Salary range for junior level but responsibilities for senior level

**Rationale:** This pattern often indicates a posting created to justify an internal hire (posting requirements no external candidate can meet), or a position written by someone with no hiring authority.

**How to score:** Subtract 5 from the final total after summing all 6 categories.

### Urgencia vacía (mention only, no point deduction)

**What qualifies:**

- "Looking to fill ASAP" with no start date
- "Immediate start required" with no deadline
- "Urgent hire" with a posting date from 60 days ago

**How to handle:** Mention as an alert signal in the output but do not subtract points. Instead, note the contradiction (urgent + old posting date = additional suspicious signal when combined with low scores elsewhere).

### Solo email, sin portal de aplicación (mention only, no point deduction)

**What qualifies:**

- Only contact method is a generic email address (hr@company.com, talent@...)
- No ATS link, no LinkedIn Easy Apply, no application form
- Instructions to email CV "to be considered"

**Rationale:** Legitimate companies at scale use ATS systems (Greenhouse, Lever, Workday). Email-only applications can indicate: (a) very small company with no ATS — normal for 5-person startups; (b) data harvesting operation collecting CVs with no intent to hire. Context matters.

**How to handle:** Mention as a signal. Treat as strong ghost indicator if combined with vague company presence AND old posting. Treat as neutral if company is verifiably small and local.

---

## Reading a Profile for Values Alignment

When the user provides a Profile N1 YAML, Ghost Check reads:

**Required fields:**

- `values.core_values` — list of top values (free text array)
- `values.bulls_eye.work` — current work alignment score (1-10)

**Optional fields (enrich alignment analysis if present):**

- `values.schwartz_profile` — 10 Schwartz basic values (1-9 each)
- `values.value_conflicts` — known conflicts between values
- `values.career_implications` — how values translate to career considerations

**Ghost Check does NOT write to the profile.** It is a scoring tool only, not an assessment. The profile is consumed read-only for values alignment context.

**Alignment estimation logic:**

1. Map the job description's environment, role type, and culture signals to the user's top 3 values
2. Estimate fit 1-10: 8+ = strong alignment, 5-7 = partial, <5 = misalignment
3. If `bulls_eye.work` < 5 AND estimated alignment < 5: name the double misalignment explicitly — the user's current job isn't aligned AND this opportunity isn't either
4. If `schwartz_profile.self_direction` > 7 but role shows heavy micromanagement signals: flag explicitly
