# N1 Ghost Check — Research Citations

> Ghost job research context for GPT retrieval. Use these citations when providing context to users,
> especially when delivering low scores (0-59) or explaining why the tool exists.

---

## Primary Ghost Job Research

**Greenhouse (2023):** 20-40% of active job postings are estimated to be ghost jobs — positions that remain visible but have no active hiring intent.
How to use: Cite when user gets a low score and asks why this is a problem worth solving. "Esta no es una situación rara — Greenhouse (2023) estima que entre el 20 y el 40% de las ofertas activas son ghost jobs."

**Resume Builder Survey (2022):** 1 in 5 companies post fake job listings to maintain an impression of company growth or build a talent pipeline for future, unconfirmed roles.
How to use: When user asks why companies post ghost jobs. Explains that it's a structural issue, not malice in most cases.

**LinkedIn Talent Insights (2021-2023):** Average time-to-fill for tech roles is 42 days; postings that stay active beyond 90 days without update have a significantly higher probability of being requisitions with no active headcount.
How to use: Justifies the scoring penalty for postings older than 60-90 days.

**SHRM (Society for Human Resource Management, 2022):** Approximately 40% of posted roles are "evergreen" — companies keep them open perpetually to build candidate pipelines, regardless of immediate hiring need.
How to use: Explains "always open" type postings; useful context when the posting has no age indicator.

---

## ATS and Hiring Pipeline Research

**Applicant Tracking System research (iCIMS, 2022):** Only 2% of job applicants are contacted after applying through ATS systems on average; at companies without structured hiring, the rate is even lower.
How to use: Context for why email-only applications are a signal — no ATS often means no structured hiring process.

**Jobvite Recruiter Nation Survey (2022):** 66% of recruiters say their company posts roles before headcount is officially approved; 22% say they've posted roles that were later cancelled without a single interview.
How to use: Explains why "requisition approved but not funded" ghost jobs exist; validates that this is a widespread industry pattern.

---

## LATAM-Specific Job Market Context

**Computrabajo / OCC (2023, Mexico/Colombia):** Salary transparency rates in Colombia and Mexico are among the lowest in the region — fewer than 30% of postings include a salary range. This is structural, not necessarily indicative of a ghost job.
How to use: Justifies the LATAM-specific scoring adjustment for salary transparency (8 pts for no salary in LATAM context vs. 0 pts for international companies). Never cite this as "Colombian companies hide salaries" — it's a market norm, not a red flag.

**ManpowerGroup Talent Shortage Survey (2023, LATAM):** 75% of LATAM employers report difficulty filling roles, with the largest talent gaps in IT/tech. Many postings are genuine but poorly written because HR teams are understaffed.
How to use: Counter-narrative when a posting looks low-quality but company presence is legitimate — poor JD writing ≠ ghost job.

---

## General Job Search Statistics (N1 context)

**BambooHR (2023):** 43% of job seekers report applying to jobs that never responded or disappeared. Of those, the majority attributed it to ghost postings.
How to use: Validates the user's frustration if they've experienced this; frames Ghost Check as a time-saving tool.

**Indeed Hiring Lab (2022):** The average job seeker applies to 20-30 positions before receiving a single offer. Time wasted on ghost jobs is a significant tax on this process.
How to use: Motivates using Ghost Check before investing time in an application. "Cada hora que invertís en una aplicación fantasma es una hora que no vas a recuperar."

---

## How to Cite in Responses

**Preferred format (Spanish):**
"Los ghost jobs representan entre el 20-40% de las publicaciones activas según estudios de Greenhouse (2023) — esta herramienta detecta los patrones más comunes."

**For evergreen roles:**
"Según ManpowerGroup (2023), muchas empresas mantienen ofertas abiertas para pipeline, no para contratación inmediata — esta es una de las formas más comunes de ghost job."

**For LATAM salary context:**
"En Colombia y México, menos del 30% de las ofertas incluyen salario (datos de Computrabajo, 2023) — esta herramienta ya lo tiene en cuenta."

---

## What NOT to Claim

- Do NOT claim that specific companies post ghost jobs — only cite industry-level statistics
- Do NOT guarantee a job is real or fake — always use probabilistic language ("alta probabilidad", "señales de", "evidencia de")
- Do NOT cite Psychology Today, Forbes opinion pieces, or self-help books — these are not in the approved source list
- Do NOT use "always" or "never" about any single signal — the score is a composite, no one signal is definitive
