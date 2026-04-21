# Compensation Benchmark — How to build a realistic range

> Reference loaded by `skills/negotiate/SKILL.md`.
> Real market data is scarce in LATAM. Methodology for triangulating a defensible range without inventing precision.

---

## Sources (ranked by reliability)

### Tier 1 — Actual listings with posted salaries
- **Bumeran:** posts salary ~30% of time in Colombia
- **Computrabajo:** posts salary ~40% of time; skews entry/mid
- **LinkedIn:** posts when legally required (NYC, CA, CO if applicable); rare for LATAM-local roles
- **Company career pages:** occasionally post ranges (Rappi, Nubank, Bitso often do)

Method: aggregate last 10-15 listings for the exact role + city + seniority. Use them as ground truth.

### Tier 2 — Aggregator data
- **Glassdoor:** anonymous employee reports; LATAM data thinner than US; reliable for bigger companies (Rappi, Globant, MercadoLibre)
- **levels.fyi:** strong for roles at US-based companies with LATAM employees (remote in USD); poor for LATAM-local
- **Salary Expert / PayScale:** rough, algorithmic; treat as floor

### Tier 3 — Community-sourced
- **Platzi / Platzi Talks:** community comp discussions, Colombia focus
- **LateralAnalytics / LateralMovement community:** data roles specifically
- **ConexionesTecnicas, EnglishesMiSuperpoder community:** tech/bilingual roles
- **Reddit r/cscareerquestions (has LATAM threads), r/latamdevs**

Method: note as "community-reported, not verified". Directional only.

### Tier 4 — Employee self-disclosure on LinkedIn
Occasional but declining; some people mention salary in posts.

Method: take with huge salt grain. Survivorship bias.

---

## Building the range

Given 10-20 data points, compute:

- **P25:** the 25th percentile (the bottom of "reasonable")
- **P50 (median):** what typical candidates get
- **P75:** the top of "reasonable without specialist skill"
- **P90:** exceptional offers (top of market, usually requires scarce skill or specific company)

### Sample computation (illustrative)

Role: Senior Data Analyst · Bogotá · remoto · fintech

Data points collected (base monthly, COP):
- Listing A (Bumeran): 8M
- Listing B (Nubank careers): 11M
- Listing C (Bumeran): 7.5M
- Listing D (community report): 9M
- Listing E (Glassdoor avg): 9.5M
- Listing F (LinkedIn): 12M
- Listing G (community): 10.5M
- Listing H (Rappi careers): 11M  (fintech premium)
- Listing I (Bumeran, non-fintech): 7M
- Listing J (levels.fyi remote-USD): $3K USD (~12M COP)

Sort: 7, 7.5, 8, 9, 9.5, 10.5, 11, 11, 12, 12 (M COP)

- P25 = 8M (between 8 and 9)
- P50 = 10M (between 9.5 and 10.5)
- P75 = 11M
- P90 = 12M

Present with context:

```markdown
### Benchmark: Senior Data Analyst · Bogotá · remoto · fintech

Rango (base mensual, COP):
- P25: 8M (~$2,000 USD)
- P50 (mediana): 10M (~$2,500 USD)
- P75: 11M (~$2,800 USD)
- P90: 12M (~$3,000 USD)

Basado en 10 data points de las siguientes fuentes:
- 3 listings Bumeran/Computrabajo con salario publicado
- 2 listings de company career pages (Nubank, Rappi)
- 3 reportes de comunidad
- 1 agregado Glassdoor
- 1 data point levels.fyi (remoto pagado en USD)

**Confianza:** media. 10 puntos es suficiente para tendencia pero no
para precisión. Variación real ±15% de estos números es plausible.
```

---

## Currency conversion

For LATAM roles, pay can be quoted in multiple ways:
- **Local currency (COP, MXN, ARS):** most common for LATAM-local employers
- **USD fixed:** remote roles with US-based employers; exchange-rate-protected
- **USD cotizado / COP pagado:** quoted in USD but paid in local currency at exchange-rate-of-the-moment — worse for employee (they eat FX volatility)

**Rule:** present all benchmarks in both local currency and USD at current exchange rate. Flag the payment mechanism (fixed vs variable FX).

Current approximate rates (update per session):
- COP: ~4,000 per USD (April 2026)
- MXN: ~18 per USD
- ARS: ~1,050 per USD (very volatile — verify)
- BRL: ~5 per USD

---

## Total comp vs base

Some offers look small on base but have significant variable comp. Decompose:

- **Base salary** (monthly/annual)
- **Performance bonus** (% of base, expected vs guaranteed)
- **Equity / options:** vesting schedule, strike price, company valuation stage, expected exit horizon
- **Signing bonus** (one-time or multi-year)
- **Benefits value:** health insurance quality (private vs EPS in Colombia), PTO, parental leave, equipment stipend, learning budget

Build a **total expected comp (TEC)** for year 1:
```
TEC_year1 = base × 12 
         + (bonus_target × probability_of_hitting)
         + (equity_vested_year1 × realistic_value_estimate)
         + signing_bonus
         + benefits_monetary_equivalent
```

### Equity honesty

For early-stage startups, equity often has **zero expected value** within a 3-year horizon. Late-stage (Series B+) or public companies have real value but also risk. Calibrate:

- **Seed/Series A (pre-PMF):** treat equity as near-zero EV for comp comparison; it's lottery
- **Series B-C:** real but uncertain; apply heavy discount (40-70%)
- **Series D+ / public:** closer to par value with some liquidity

For LATAM employees of US-based companies, additional tax complexity around equity — recommend talking to an accountant before accepting.

---

## Red flags in compensation offers

- **Base significantly below P25 of market** → either poor data from employer, test-balloon to see what you accept, or company that underpays systemically
- **No posted band + refuses to share range** → signal they pay below market or highly inconsistent
- **Large equity, small base** → if company is pre-Series B, you're subsidizing the company with salary; rare that equity pays off
- **"We'll revisit in 6 months"** → vague promise; rarely delivers the implied bump; get it in writing
- **Bonus that's a large fraction of total** and not clearly measurable → likely not paid at full target
- **Signing bonus with clawback** → must repay if you leave within X months; common, read terms carefully

---

## LATAM-specific considerations

- **Salario integral (Colombia):** if the offer is "salario integral", it's all-inclusive (includes cesantías, prima, etc.). Compare against standard salary structure to verify. Usually breaks even but some employers use it to simplify and pay less than the real cost of standard structure.
- **Cesantías + prima + vacaciones:** standard Colombian employment adds ~25% to the base for total compensation cost. Offer must account for this; some US-based companies miss this.
- **Intermediaries (outsourcing firms, EOR):** if the offer is through an Employer of Record (Deel, Remote.com, Oyster), the base salary may be slightly lower due to intermediary fees. Not a red flag, just context.
- **Tax residency:** if working remote for US company while living in Colombia, tax is complex. Budget for an accountant.

---

## When benchmark data is insufficient

If you can't get 5+ data points, say so explicitly:

```
Data scarcity: solo encontré 3 data points para este rol específico.
El rango que te doy (X-Y) es directional pero con margen de error alto.

Recomendación: en la negociación, ancla tu número en la P50 de roles
adyacentes más ampliamente reportados ([adjacent role], P50 = Z), y
justifica el premium por [specific skill / context].
```

Never fabricate data to look confident. Honesty here is a feature, not a bug.

---

_Reference v1.0 — Methodology informed by Radford compensation surveys (LATAM scope), Mercer LATAM reports, and community data aggregation patterns._
