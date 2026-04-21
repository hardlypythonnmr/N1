# ATS Heuristics — How to pass the machine filter

> Reference loaded by `skills/get-interviews/SKILL.md`.
> Purpose: deterministic rules to simulate what ATS parsers do and don't accept.
> Evidence base: Jobscan/ResumeHog 2026, 58-75% filter-out rate data.

---

## What ATS actually does

Applicant Tracking Systems parse CVs into structured data (name, dates, companies, titles, skills). They then rank applicants by keyword match against the JD, filter below a threshold, and hide the rest from the recruiter.

**Top ATS in LATAM and globally (2026):** Workday, Greenhouse, Lever, iCIMS, Taleo (Oracle), SmartRecruiters, Gupy (Brazil), Bumeran. Most parse similarly; differences are in how they score.

---

## 7 Parser-breaking mistakes (most common)

| Mistake | Why it breaks | Fix |
|---------|---------------|-----|
| **Two-column layout** | Parser reads left-to-right across columns, mixes content | Single-column layout |
| **Tables for formatting** | Cells may be parsed out of order or dropped | Use headings + bullets, not tables |
| **Headers/footers with critical info** | Often ignored by parser | Put name, email, phone in body top |
| **Images of text** | Invisible to parser (no OCR in most ATS) | All text as actual text |
| **Exotic section names** | "My Journey", "What Drives Me" not recognized | Use: EXPERIENCE, EDUCATION, SKILLS |
| **Inconsistent date formats** | "Jan 2022 to present" vs "01/2023-05/2024" | Pick one format, use throughout |
| **Custom fonts not embedded** | Parser substitutes, breaks layout | Use Arial, Calibri, Georgia, or embed |

---

## Keyword density — the real rule

ATS scoring is primarily about **keyword match with the job description**. But more is not better.

- **Target density:** each critical skill from the JD should appear **2-3 times** in the CV, naturally (in experience bullets, skills list, optionally in summary).
- **Exact matches matter:** ATS often don't know "Python" = "PY" or "ML" = "Machine Learning". Match the JD's exact phrasing. If the JD says "Agile", say "Agile" not "iterative methodologies".
- **Avoid keyword stuffing:** 10+ mentions of the same skill trips modern ATS for "keyword spam". Stay natural.
- **Skill groupings:** end of CV skill section as comma-separated or pipe-separated list. Pattern: `Languages: Python, SQL, R · Tools: Tableau, Looker, dbt · Methods: A/B testing, causal inference`.

---

## Title match

ATS rank higher when the **current title** or **most recent title** matches the JD's target title.

- If you were "Product Analyst" and applying to "Senior Product Analyst" — strong match.
- If you were "Growth Hacker" or "Data Ninja" — probably won't match "Product Analyst". **Rename your title on the CV to the closest industry-standard version** — this is not dishonest if the work was equivalent.
- For lateral pivots (Marketing Manager → Data Analyst), add a **parenthetical clarification**: `Marketing Manager (data & analytics focus)` — keeps honesty but signals to the parser.

---

## Date format (consistent)

**Pick one and stick to it.** Valid formats:
- `MM/YYYY – MM/YYYY`  →  `03/2022 – 08/2024`
- `Mon. YYYY – Mon. YYYY`  →  `Mar. 2022 – Aug. 2024`
- `YYYY – YYYY`  →  `2022 – 2024` (acceptable for older roles)

Current role: use `Present` or `Actualidad`, never leave blank or use "—".

**Gaps:** if there's a gap >3 months, decide: explain briefly on the CV (one line in the role below: "Pausa intencional para [reason] — Abr 2023 a Ago 2023") or let it be visible and explain in cover letter. Never fake dates to hide gaps — ATS cross-checks dates for consistency.

---

## File format

- **.docx preferred** for ATS compatibility (Workday, Lever, Greenhouse all parse .docx cleanly).
- **.pdf acceptable if text-based** (not scanned). Check: can you select the text with cursor? If yes, parser can read it.
- **Never .pages / .odt / .jpg / .png** — inconsistent support.
- **Filename:** `FirstName_LastName_Role.docx` — `Maria_Rodriguez_Product_Analyst.docx`.

---

## Score estimation (0-100)

When simulating an ATS score for the user, compute:

```
ATS score ≈
  0.35 × keyword_match_with_JD
+ 0.20 × title_match (current or most recent)
+ 0.15 × years_match (JD requirement vs CV experience)
+ 0.10 × education_match (if JD requires specific)
+ 0.10 × format_parseability (1 if clean, 0.5 if some issues, 0 if broken)
+ 0.10 × skills_section_completeness
```

Ranges to communicate:
- **80-100**: strong — likely to pass filter, continues to recruiter
- **60-79**: medium — may pass depending on competitive field
- **40-59**: weak — likely filtered; big gaps need fixing
- **<40**: won't pass — major rework needed

**Important:** the score is an *estimate*, not a guarantee. Communicate it as such. Real ATS behavior varies by company config and JD.

---

## 3 fast wins to move the score

1. **Copy the JD's skill keywords into your CV's experience bullets** (naturally — e.g., "Built A/B testing framework in Python" if JD mentions Python + A/B testing).
2. **Rename your current title to match the JD's target title** (if the work was equivalent).
3. **Add a skills section at the bottom with comma-separated keywords** from the JD and your background.

These three, together, typically move ATS score +15 to +25 points.

---

## What the ATS does NOT measure (and the recruiter scan does)

ATS doesn't care about:
- Outcomes / impact metrics (it just sees the verbs)
- Narrative coherence (career story)
- Design elegance (beyond being parseable)
- Soft skills written in prose

These matter for the **recruiter scan** — see `references/recruiter-scan.md`.

A CV that passes ATS but has no outcomes **wins the first filter and loses the second**. The audit must cover both.

---

## Cultural note for LATAM

- LATAM ATS penetration is growing fast (Gupy in Brazil leads). Assume ATS by default for medium-to-large companies.
- Some LATAM startups still review manually — in that case recruiter scan rules dominate. Ask the user about company size.
- Spanish CVs parse fine in most ATS if the system is configured for Spanish. Accent marks are handled correctly by modern parsers.
- Mixing ES/EN on a CV: acceptable if the user is applying to a bilingual role. Otherwise, write in the language of the JD.

---

_Reference v1.0 — Based on Jobscan 2026 data, ResumeHog ATS Review 2026, Gupy internal docs._
