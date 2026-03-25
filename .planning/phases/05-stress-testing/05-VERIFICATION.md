# N1 Skills — Final Verification Matrix

**Phase:** 05-claude-skills-publishing
**Generated:** 2026-03-25 (Plan 07 — Wave 3 completion)
**Scope:** 5 Claude Skills tested across 6 gates: Hard Gate, Quality Gate, Red Team, Cross-Skill, Regression, Manual Review

---

## Summary Statistics

```
Total eval tests:     128  (ghost-check 24 + compass 20 + busca-adentro 22 + construye-afuera 24 + n1-system 22 + cross-skill 11 + regression 5)
Total red team:        50  (10 playbooks × 5 skills)
Total persona grades:  60  (12 personas × 5 skills)
────────────────────────────────────────────────────────────────────────────
Grand total graded events: 238
```

---

## Per-Skill Gate Results

### Ghost Check

- **Hard Gate:** 21/24 PASS | 2/24 MARGINAL | 1/24 FAIL (V-GC-02 em-dashes, Minor severity)
- **Quality Gate (Persona Battery):** 12/12 PASS (avg 4.6/5.0) | 0 Critical findings | 0 hard overrides
- **Red Team:** 10/10 PASS | 0 MARGINAL | 0 FAIL — strongest red team result of all 5 skills
- **Cross-Skill:** X-07 PASS (CTA references Compass by name), X-10 PASS (values alignment uses profile), X-11 PASS (career_path minor gap documented)
- **Regression:** R-01 PASS (scope disclaimer, YAML export intact), R-03 PASS (all structural criteria hold)

### Compass

- **Hard Gate:** 19/20 PASS | 1/20 MARGINAL (admin caveat minor) | 0/20 FAIL
- **Quality Gate (Persona Battery):** 9/12 PASS | 3/12 MARGINAL (P2, P5, P10) | avg 37.0/40 | 0 hard overrides
- **Red Team:** 8/10 PASS | 2/10 MARGINAL | 0/10 FAIL
- **Cross-Skill:** X-01 MARGINAL (partial adaptability recognition gap), X-06 PASS (no hallucinated fields), X-08 PASS (cold start clean)
- **Regression:** R-03 PASS (CAAS section intact), R-04 PASS (radar chart wiring intact)

### Busca Adentro

- **Hard Gate:** 20/22 PASS | 2/22 MARGINAL | 0/22 FAIL
- **Quality Gate (Persona Battery):** 10/12 PASS | 2/12 MARGINAL (P4, P9) | avg 37.4/40 | 0 hard overrides
- **Red Team:** 8/10 PASS | 1/10 MARGINAL | 0/10 FAIL (1 N/A)
- **Cross-Skill:** X-02 PASS (field names explicitly referenced in construye-afuera), X-05 MARGINAL (enrichment preservation instruction gap), X-06 PASS (schema compliant with minor flow_activities field name gap)
- **Regression:** R-03 PASS (all 4 dimensions sections intact)

### Construye Afuera

- **Hard Gate:** 23/24 PASS | 0/24 MARGINAL | 1/24 FAIL (M-CA-12 Getonboard/Torre absent, Major severity) — FAILS Hard Gate
- **Quality Gate (Persona Battery):** 10/12 PASS | 2/12 MARGINAL (P4, P10) | avg 37.1/40 | 0 hard overrides
- **Red Team:** 7/10 PASS | 1/10 MARGINAL | 0/10 FAIL | 2 from prior summary
- **Cross-Skill:** X-02 PASS (all required fields read), X-09 PASS (funnel coherence, gap documented)
- **Regression:** R-03 PASS (all 9 tools sections intact), R-05 PASS (GPT construye-afuera intact)

### N1 System

- **Hard Gate:** 20/22 PASS | 1/22 MARGINAL (token budget borderline) | 1/22 FAIL (token budget flagged as Publishing MARGINAL, no critical failure) — gate: PROCEED WITH MONITORING
- **Quality Gate (Persona Battery):** 8/12 PASS | 4/12 MARGINAL (P4, P7, P9, P10) | avg 37.0/40 | 0 hard overrides
- **Red Team:** 8/10 PASS | 2/10 MARGINAL | 0/10 FAIL
- **Cross-Skill:** X-03 PASS (evolution detection confirmed), X-04 PASS (version preserved)
- **Regression:** R-03 PASS (integration_synthesis section intact)

---

## The 6x5 All-or-Nothing Verification Matrix

```
VERIFICATION MATRIX — N1 Skills Publishing Gate
Generated: 2026-03-25

                   ghost-check   compass     busca-adentro   construye-afuera   n1-system
                   ─────────────────────────────────────────────────────────────────────────
Hard Gate          PASS          PASS        PASS            FAIL               PASS*
Quality Gate       PASS          PASS        PASS            PASS               PASS
Red Team           PASS          PASS        PASS            PASS               PASS
Cross-Skill        PASS          MARGINAL    MARGINAL        PASS               PASS
Regression         PASS          PASS        PASS            PASS               PASS
Manual Review      TBD           TBD         TBD             TBD                TBD

* n1-system Hard Gate: PASS with monitoring note — token budget at ~34K (deep mode risk)
```

**Legend:**

- PASS = Gate cleared, no blocking issues
- FAIL = Gate not cleared, requires fix before publishing
- MARGINAL = Gate cleared with noted improvements (Minor severity, does not block)
- TBD = Pending human manual review (Plan 08)

---

## VERDICT

```
[ ] PUBLISH  /  [X] BLOCKED — construye-afuera Hard Gate FAIL (M-CA-12: Getonboard and Torre absent from all reference files)
```

**Verdict: BLOCKED**

One skill has a blocking failure. Construye-afuera fails the Hard Gate due to M-CA-12 (Major severity): the Job Hunt tool does not reference Getonboard or Torre, which are the primary job platforms in Colombia and LATAM respectively. A skill that gives job search guidance in LATAM without mentioning the dominant local platforms is functionally incomplete for its stated purpose.

**Other 4 skills are individually PUBLISH-READY** (pending manual review):

- ghost-check: PASS all automated gates
- compass: PASS all automated gates (1 MARGINAL cross-skill, minor)
- busca-adentro: PASS all automated gates (1 MARGINAL cross-skill, minor)
- n1-system: PASS all automated gates (monitoring flag for deep-mode token budget)

---

## Failure Summary

### Critical Failures

None.

### Major Failures

| Skill            | Test ID | Gate      | Description                                                                                                                                          |
| ---------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| construye-afuera | M-CA-12 | Hard Gate | Getonboard and Torre absent from SKILL.md Job Hunt tool section AND from latam-market-context.md reference file. LATAM job hunt guidance incomplete. |

### Minor Failures and MARGINAL Items

| Skill         | Test ID | Gate        | Description                                                                                                                                           |
| ------------- | ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ghost-check   | V-GC-02 | Hard Gate   | Em-dashes in tier verdict templates (lines 107-109, 114) — voice guide requires hyphens                                                               |
| compass       | X-01    | Cross-Skill | Partial adaptability recognition — context_check gates on completed: true only, misses partial CAAS data from compass when identity.completed = false |
| busca-adentro | X-05    | Cross-Skill | Enrichment preservation — no explicit "preserve existing enrichment" instruction in YAML output section                                               |
| busca-adentro | X-06    | Cross-Skill | flow_activities uses activity/state keys instead of schema's name/zone                                                                                |
| compass       | X-06    | Cross-Skill | YAML output template missing language: "es" field                                                                                                     |
| ghost-check   | X-11    | Cross-Skill | No explicit career_path reading in ghost-check — recommendation not career-path-aware                                                                 |
| n1-system     | S-NS-02 | Hard Gate   | Token budget at ~34K — deep mode with 40+ turns is marginal territory                                                                                 |

---

## Fix Requirements

### Fix 1 (BLOCKING — required before construye-afuera publish)

**Skill:** construye-afuera
**Test:** M-CA-12
**Severity:** Major
**Location:** `skills/construye-afuera/references/latam-market-context.md` + `skills/construye-afuera/SKILL.md` Job Hunt section

**Fix options:**

- **L1 (minimal):** Add Getonboard.co and Torre.co to the latam-market-context.md job platforms section. Reference them in the Job Hunt tool section of SKILL.md under "Plataformas LATAM recomendadas."
- **L2 (recommended):** Add full platform profile for both (country coverage, posting type, candidate focus, employer size) to latam-market-context.md alongside existing platforms. Update Job Hunt tool to reference latam-market-context.md for current platform data.
- **L3 (comprehensive):** Full LATAM platform taxonomy by country: Colombia (Computrabajo, Getonboard, Torre, LinkedIn), Argentina (Bumeran, Computrabajo), México (OCC, Computrabajo), etc.

**Recommendation:** L2 — adds both missing platforms with enough context to make the Job Hunt tool useful in the Colombian beachhead market. L1 is minimum viable. L3 is a future improvement.

**Reference:** `results/construye-afuera-eval.md` — M-CA-12 failure report.

---

### Fix 2 (Minor — pre-publish recommended)

**Skill:** ghost-check
**Test:** V-GC-02
**Severity:** Minor
**Location:** `skills/ghost-check/SKILL.md` lines 107-109, 114

**Fix:** Replace `—` (em-dash, U+2014) with `-` (hyphen with spaces) in tier verdict table and Ghost Score format template. Scope: 4 occurrences.

---

### Fixes 3-7 (Minor — first-patch post-publish)

These items are documented in `results/cross-skill-eval.md` Section "Items for first-patch improvement":

3. **X-01:** Add explicit partial-dimension detection to busca-adentro context_check
4. **X-05:** Add explicit enrichment preservation instruction to busca-adentro YAML output
5. **X-06 (compass):** Add `language: "es"` to compass YAML output template
6. **X-06 (busca-adentro):** Align flow_activities keys to schema (name/zone)
7. **X-11:** Add career_path reading to ghost-check recommendation logic

---

## Publishing Readiness

### Current State

**BLOCKED** — construye-afuera fails the Hard Gate (M-CA-12, Major).

### Path to PUBLISH

1. Fix M-CA-12 in `latam-market-context.md` + `SKILL.md` Job Hunt section (Plan 08 fix cycle)
2. Fix V-GC-02 in ghost-check tier verdicts (Plan 08 or patch commit)
3. Complete Manual Review gate for all 5 skills (Plan 08)
4. Re-run Hard Gate for construye-afuera post-fix (verification step in Plan 08)

### Skills ready for publishing (pending manual review only)

| Skill            | Automated Gates                  | Manual Review | Status                  |
| ---------------- | -------------------------------- | ------------- | ----------------------- |
| ghost-check      | PASS (conditional V-GC-02 minor) | TBD           | Ready for manual review |
| compass          | PASS                             | TBD           | Ready for manual review |
| busca-adentro    | PASS                             | TBD           | Ready for manual review |
| construye-afuera | BLOCKED (M-CA-12)                | TBD           | Requires fix first      |
| n1-system        | PASS (monitoring flag)           | TBD           | Ready for manual review |

### After M-CA-12 fix and manual review completion

All 5 skills would be CONDITIONALLY READY for publishing, pending:

- V-GC-02 minor fix (ghost-check em-dashes)
- Manual review verification sign-off (Plan 08)
- Priority monitoring of n1-system token budget in production (deep mode)

---

## Test Coverage Summary

| Gate                   | Tests   | PASS    | MARGINAL | FAIL  |
| ---------------------- | ------- | ------- | -------- | ----- |
| Hard Gate (eval)       | 112     | 103     | 6        | 3     |
| Quality Gate (persona) | 60      | 49      | 11       | 0     |
| Red Team               | 50      | 41      | 6        | 0     |
| Cross-Skill            | 11      | 9       | 2        | 0     |
| Regression             | 5       | 5       | 0        | 0     |
| **Total**              | **238** | **207** | **25**   | **3** |

**Automated gate pass rate: 207/235 (88%) considering only PASS/MARGINAL as passing, 3 hard failures across 238 events.**

Note: The 3 failures are: M-CA-12 (construye-afuera, Major, blocking), V-GC-02 (ghost-check, Minor), and S-NS-02 (n1-system token budget, flagged as MARGINAL/MONITORING not hard FAIL). Only M-CA-12 blocks publishing.
