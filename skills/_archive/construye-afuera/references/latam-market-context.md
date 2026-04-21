# LATAM Market Context — Construye Afuera Reference

> Colombia-first market intelligence for all 9 career tools.
> Load this file when providing LATAM-specific context (salary, ATS, employer culture, structural constraints).
> Internal reference — not user-facing. Apply this data to enrich tool outputs.

---

## Section 1: Salary Context

### The opacity problem

Salary data in Colombia and LATAM is structurally opaque. Unlike the US market where job postings include ranges and glassdoor.com has millions of data points, the LATAM market:

- Most companies do not publish salary ranges in job postings (this is slowly changing, especially at international companies)
- Glassdoor Colombia has limited coverage — sample sizes are small, especially outside Bogotá
- LinkedIn Salary in Colombia has improved coverage in 2023-2025 but still limited to large tech employers
- The most reliable sources are peer conversations and recruiter benchmarks

**Acknowledge this explicitly:** When the user asks for salary ranges, say: "Los datos de mercado en Colombia son opacos — te doy los rangos más confiables disponibles, pero la mejor fuente es siempre una conversación con un recruiter o colega que esté en el mercado ahora."

### Approximate salary ranges — tech roles, Bogotá (2024-2025)

Reference source: LinkedIn Salary Colombia + recruiter data + verified community benchmarks. Ranges in USD/month (gross), reflecting salaries at outsourcing firms (Globant, EPAM, Perficient, Endava) and product companies with local presence.

**Software Engineering (outsourcing firms, Bogotá):**

| Level                   | USD/month (gross) | Context                                                     |
| ----------------------- | ----------------- | ----------------------------------------------------------- |
| Junior SWE (0-2 yrs)    | $700–$1,200       | Wide range — varies significantly by tech stack             |
| Mid SWE (2-5 yrs)       | $1,500–$2,800     | Senior individual contributor level at most outsourcers     |
| Senior SWE (5-8 yrs)    | $2,800–$4,500     | Top of individual contributor range                         |
| Staff / Principal SWE   | $4,500–$7,000+    | Rare at outsourcing firms; more common at product companies |
| Engineering Manager     | $3,500–$6,000     | Wide range depending on team size and company               |
| Director of Engineering | $6,000–$10,000+   | Usually at larger Colombian operations                      |

**Product Companies (MercadoLibre, Rappi, local scaleups):**

- Generally pay 20-40% more than outsourcing firms at the same level
- Include equity (rare at outsourcers)
- Variable compensation more structured

**Remote work for US/EU clients (via Deel, Toptal, direct):**

- Senior SWE: $5,000–$10,000/month (USD, as contractor)
- Mid SWE: $3,000–$6,000/month
- These are gross contractor rates — subtract ~25% for taxes + benefits

### Data limitations

- These ranges are approximate — individual cases vary by 30-40%
- Startup equity is highly variable and often illiquid
- Benefits (health, pension, bonus) are typically legally mandated in Colombia (prestaciones sociales) and add ~30% to gross salary for the employer
- Dollar-denominated roles are more common post-2020; many are now USD-indexed to protect against COP devaluation

---

## Section 2: LATAM Job Platforms

### Primary job boards for LATAM candidates

Use these platforms when advising on the Job Hunt tool. Platform selection depends on target market and role type.

| Platform                         | Coverage                              | Best for                                                      | Notes                                                                    |
| -------------------------------- | ------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Getonboard** (getonboard.com)  | Colombia, Chile, Mexico — remote-ok   | Tech roles; strong startup and scaleup presence               | Tech-focused; high signal-to-noise ratio for SWE and product roles       |
| **Torre** (torre.co)             | Colombia-born; growing LATAM presence | AI-matched roles; broad seniority range                       | Uses AI matching; Colombian founders; growing international presence     |
| **LinkedIn**                     | Global; strong in senior LATAM roles  | Senior roles, international visibility, recruiter outreach    | Best for visibility; apply direct or Easy Apply depending on the company |
| **Computrabajo**                 | All LATAM countries                   | High volume, all industries; lower quality signal for tech    | Use for broad coverage, not primary channel for senior tech roles        |
| **Elempleo** (Colombia-specific) | Colombia                              | Traditional industries (banking, retail, government-adjacent) | More traditional employers; credential-heavy filtering common            |

**Recommended channel mix for senior SWEs in Colombia:**

1. Getonboard — primary for tech roles in startups and scaleups
2. Torre — secondary; useful for AI-matched discovery
3. LinkedIn — critical for recruiter visibility and direct applications at multinationals
4. Direct application — highest conversion rate when company is known

**Ghost job signal note:** Getonboard and Torre have lower ghost job rates than LinkedIn Easy Apply for LATAM tech roles — postings tend to be fresher and more specific.

---

## Section 3: ATS Systems in LATAM

### Common ATS in Colombian/LATAM market

| ATS                         | Who uses it                                                       | Key formatting rules                                                   |
| --------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **Workday**                 | MercadoLibre, Rappi, multinationals                               | Plain text preferred; no tables, no graphics; standard section headers |
| **SAP SuccessFactors**      | Bancolombia, large Colombian conglomerates (Grupo Éxito, Bavaria) | Standard headers; minimal formatting; avoid non-standard characters    |
| **Oracle Taleo**            | Government-adjacent organizations, some multinationals            | Paste-friendly plain text; keywords in body, not headers only          |
| **LinkedIn Easy Apply**     | Startups, SMEs, international companies hiring in Colombia        | LinkedIn profile is the primary input; resume as supplemental PDF      |
| **Greenhouse**              | Tech-forward startups, US companies hiring remotely in Colombia   | Clean formatting; keywords prominent; PDF format preferred             |
| **BambooHR**                | Mid-size Colombian companies                                      | Less rigid; formatting tolerated more                                  |
| **Zoho Recruit**            | SMEs, some local companies                                        | Flexible; PDF with basic formatting accepted                           |
| **HireLogic / local tools** | Some Colombian staffing firms                                     | Varies — ask recruiter before applying                                 |

### ATS formatting rules that pass vs. fail

**PASS:**

- Single-column layout (not two-column)
- Standard fonts (Arial, Calibri, Times New Roman)
- Bullet points (•) or dashes (-)
- Dates in standard formats (Jan 2020–Mar 2023 or 01/2020–03/2023)
- Contact info at top in plain text
- Section headers as plain text (not text boxes or graphics)

**FAIL:**

- Two-column formats (common in Canva/Word templates in LATAM — these break ATS)
- Text boxes (common in design-heavy templates)
- Tables for work history
- Graphics, logos, profile photos (legal in Colombia, but break ATS)
- Headers/footers with contact info only (ATS misses them)
- Non-standard Unicode characters in bullet points

### LinkedIn Easy Apply dynamics in LATAM

- Many Colombian companies use LinkedIn Easy Apply as the primary application channel
- Profile completeness matters more than the CV attachment in these flows
- "All Star" LinkedIn profile status (85%+ completeness) improves visibility in recruiter searches
- LinkedIn's algorithm favors profiles with recent activity (posts, comments, profile updates)
- Open to Work badge: visible to recruiters only mode is safe; public green banner is the user's choice
- Recruiter InMail response rates in Colombia are generally higher than US/EU — worth sending

---

## Section 4: English Proficiency and Job Search

### Role-type English requirements (Colombia/LATAM context)

| Role type                                  | English requirement                             | Notes                                                            |
| ------------------------------------------ | ----------------------------------------------- | ---------------------------------------------------------------- |
| Outsourcing firm SWE (client-facing)       | B2-C1 required                                  | Daily standup with US/EU clients; English communication is daily |
| Outsourcing firm SWE (internal team)       | B1-B2 preferred                                 | Reading English docs; some communication internal only           |
| Product company (MercadoLibre, Rappi)      | B1 minimum for most; C1 for international roles | Depends heavily on team and scope                                |
| US/EU remote contractor (via Deel, Toptal) | C1 required                                     | Communication entirely in English; writing clarity matters       |
| Local Colombian company (non-tech)         | Variable; often not required                    | English may be listed but not enforced                           |
| Leadership/Director roles                  | C1-C2 expected                                  | Presentations to US/EU stakeholders                              |

### How to position English level

- **B2:** "Comunicación profesional fluida en inglés — dailies, documentación técnica, emails, presentaciones"
- **C1:** "Inglés avanzado — comunicación ejecutiva, negociación con clientes internacionales, presentaciones a stakeholders"
- **Never say "basic" or "intermediate"** — use CEFR levels or describe specific use cases

### English proficiency tests: employer context

| Test                               | Recognition in LATAM employer context                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------- |
| TOEFL iBT                          | Universally recognized; used for academic admissions, multinational HR                 |
| IELTS                              | Less common in corporate; more in immigration/academic                                 |
| Cambridge (B2 First / C1 Advanced) | Well-regarded; recognized by formal employers                                          |
| Duolingo English Test              | Increasingly accepted; younger tech companies accept it; traditional employers may not |
| EF SET                             | Growing recognition but still less formal than TOEFL/Cambridge                         |

**Practical note:** For tech roles, most employers care about demonstrated use more than certificates. Documenting "3 years of daily client communication in English" is stronger than a certificate for most tech roles.

---

## Section 5: Employer Culture Notes

### Globant

- **Size:** ~30,000+ employees globally; significant Colombian presence (Medellín, Bogotá)
- **Culture:** Engineering-forward; strong tech community; English required; strong remote culture
- **Interview style:** Technical screening + system design + cultural values alignment (Globant WAY values)
- **Compensation:** Competitive for LATAM outsourcing; USD-indexed contracts common; benefits include health, bonus, certification budget
- **Internal mobility:** Strong internal job market; encouraged to move between accounts/studios
- **SWE promotion path:** Associate → Engineer → Senior → Staff → Principal → Distinguished Engineer (each level has clear competency framework)

### EPAM

- **Size:** ~58,000+ globally; Colombian presence in Bogotá, Medellín
- **Culture:** Very engineering-quality focused; strong Eastern European engineering culture; direct feedback
- **Interview style:** Rigorous technical interview (EPAM is known for demanding coding and system design rounds)
- **Compensation:** Solid; USD-denominated for senior roles; competitive with Globant
- **Note for candidates:** EPAM is more selective than most LATAM outsourcers; higher bar = higher comp and project quality

### Perficient

- **Size:** ~7,000 globally; smaller Colombian footprint
- **Culture:** Partnership-model; US client-centric; English proficiency critical
- **Interview style:** Technical + behavioral; shorter process than EPAM
- **Compensation:** Mid-tier LATAM outsourcing; benefits solid

### MercadoLibre (MeLi)

- **Size:** ~14,000+ employees; largest tech company in LATAM
- **Culture:** High-performance, ownership culture; fast-paced; data-driven decisions
- **Interview style:** Case-based; behavioral (STAR format strongly expected); technical depth
- **Compensation:** Best-in-class for LATAM; equity component; performance bonuses
- **Career path:** Strong internal mobility culture; clear levels; competitive with US product companies

### Rappi

- **Size:** ~5,000+ employees; Colombian-born unicorn
- **Culture:** Startup agility + scale; move fast; high tolerance for ambiguity; founder-friendly
- **Interview style:** Speed-focused; functional + culture fit; expects bias toward action
- **Compensation:** Below MeLi but with startup equity; fast compensation growth with performance
- **Note:** High energy, high churn environment — good for accelerated career development but demanding

### Bancolombia

- **Size:** ~25,000+ employees; dominant Colombian bank
- **Culture:** Conservative, formal, hierarchical; digital transformation underway but still traditional in HR
- **Interview style:** Formal; psychometric tests common (Cleaver, Zavic, Terman); behavioral + technical
- **Compensation:** Stable; lower than tech companies for SWE; strong benefits (prestaciones + health + housing loans)
- **Note:** Credential inflation is a real concern here — degree requirements more rigid than in tech companies

### Teleperformance Colombia

- **Profile:** Large BPO/CX operation; significant English-speaking workforce
- **Not a target for senior SWEs** — mentioned because many entry-level users have worked there; provides reference point for transition

---

## Section 6: Credential Context

### When Colombian employers over-require credentials

Some Colombian employers, especially traditional companies (banks, government-adjacent, legacy industries) require:

- University degree for roles that don't need one in international markets
- Professional license (matrícula profesional) for roles like engineering, architecture, accounting
- Specific degree-field match (e.g., "must be systems engineer" for a SWE role)

**How to handle this constraint:**

1. **For traditional employers:** Acknowledge the real constraint; don't advise "just ignore it" — it's a hard screen in many cases
2. **For tech companies and international employers:** Degree requirements are frequently soft; portfolio and demonstrated experience often substitute
3. **The MercadoLibre/Rappi/startup path:** These companies care far less about credentials — skills, portfolio, and problem-solving ability matter more

### Certifications that carry weight in Colombia/LATAM tech market

**Cloud:**

- AWS Certified (Solutions Architect, Developer, DevOps) — strong signal; widely recognized
- Google Cloud Professional Cloud Architect — growing recognition
- Microsoft Azure certifications — recognized especially at Microsoft partners and enterprise

**Product and Analytics:**

- Google Data Analytics Certificate (Coursera) — recognized for entry-to-mid data roles
- Meta Marketing Analytics Certificate — recognized for marketing-adjacent roles

**Engineering:**

- IBM Full Stack Cloud Developer (Coursera/edX) — moderate recognition
- Scrum Master (PSM-I or CSM) — widely recognized for PM/delivery roles

**Language:**

- TOEFL / IELTS / Cambridge — academic standard
- Duolingo English Test — growing acceptance at tech companies

**What doesn't add much:** Generic "leadership" certificates, short online courses without recognized issuer, outdated Microsoft Office certifications

---

## Section 7: Remote Work Market

### US/EU remote hiring for Colombian candidates (2024-2025)

**Market reality:** Post-2020, the market for remote hiring of Colombian talent by US/EU companies has grown significantly. Key dynamics:

- **Price arbitrage:** Senior Colombian SWEs cost 40-60% of equivalent US engineers; strong economic incentive for US companies to hire
- **Time zone advantage:** Colombia (UTC-5) overlaps significantly with US East Coast and Central; no UTC±8 challenge
- **English proficiency:** B2-C1 common in the senior SWE segment; removes the main historical barrier
- **Legal frameworks:** Contractor model (not employee) is standard; Colombian professionals work as independent contractors

**Platforms and channels for remote US/EU roles:**

| Platform                       | Type                      | Best for                                   | Vetting bar                       |
| ------------------------------ | ------------------------- | ------------------------------------------ | --------------------------------- |
| **Toptal**                     | Curated network           | Top 3% claim; US rates ($60-$150/hr)       | Very high — multi-stage screening |
| **Deel**                       | Payroll infrastructure    | Used by employers; not a job board         | N/A — employer-side tool          |
| **Turing**                     | Curated remote talent     | Mid-to-senior SWEs; US companies           | High — technical screening        |
| **Upwork**                     | Marketplace               | Flexible; all levels; competitive          | Market-based                      |
| **Workana**                    | LATAM-focused marketplace | Spanish-language clients; smaller projects | Lower bar                         |
| **LinkedIn**                   | Global job board          | Best for senior roles with strong profile  | Profile + application quality     |
| **Gun.io**                     | Curated for developers    | Senior engineers; US rates                 | High                              |
| **Remote OK / WeWorkRemotely** | Remote-first job boards   | Startups; varied levels                    | Application quality               |

### Tax and contractor implications for Colombian professionals

**Critical note — not legal/tax advice:** Refer users to a tax professional for specifics.

- Colombian professionals working as international contractors are typically responsible for declaring income to DIAN (Colombian tax authority)
- No Colombian employer = no prestaciones sociales; user must provision for pension, health (EPS), severance equivalents independently
- Dollar-denominated income has COP volatility exposure — some professionals maintain dual accounts
- "Plataforma de facturación electrónica" (e.g., Haulmer, Siigo) required for formal invoicing in Colombia
- Many Colombian remote contractors operate as "persona natural" or via a SAS company for tax efficiency

---

## Section 8: Structural Barriers — Name and Validate

These are real structural constraints in the LATAM context. Never dismiss, minimize, or frame as "limiting beliefs" without evidence. Acknowledge as real constraints while exploring the space of action within them.

### Family and financial obligations

- Extended family financial support is normative in Colombia — not unusual for a professional to support parents, siblings, or extended family
- This creates real income floor constraints; "just take the risk" advice is inappropriate without acknowledging this
- Language: "Entiendo que las expectativas familiares son una restricción real — no es una excusa ni un problema tuyo de límites"

### Geographic constraints

- Not all users can relocate; Bogotá-centric opportunities create real disadvantage for users in secondary cities
- International relocation has visa, cost, and family-separation implications that are not trivially overcome
- Language: "La movilidad geográfica no es siempre posible — trabajemos con las opciones reales que tenés desde donde estás"

### Compensation compression vs. international market

- Colombian market salaries are structurally lower than US/EU for equivalent roles
- This creates a "grass is greener" effect — comparing to US salaries can create false expectations
- The remote work path can close this gap but has its own complexity
- Language: "La brecha salarial con el mercado internacional es real. La pregunta es: ¿qué paths concretos la reducen para alguien en tu situación?"

### Informal economy transitions

- Some users are transitioning from informal work (freelance cash work, family business, informal contracts)
- Formal employment history gaps are common; references may not be available in standard format
- Language: Frame work history documentation creatively — focus on demonstrable skills and outcomes

### Credential inflation (repeat from Section 6)

- Real cost in time and money to get degrees/credentials required by traditional employers
- Acknowledge the frustration; don't dismiss the real market reality
- Language: "Es una barrera real en ciertos tipos de empresa. La alternativa es apuntar al segmento donde las credenciales pesan menos — empresas de tecnología, startups, clientes internacionales."

---

_Last updated: 2026-03-23. Update at phase transitions with recruiter data and market movement._
