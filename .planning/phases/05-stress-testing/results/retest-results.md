# Retest Results — Plan 08 Fix Cycle

**Plan:** 05-08
**Retest date:** 2026-03-25
**Tester:** GSD executor static analysis
**Method:** Verify fix applied to target files and re-check original failure criteria

---

## Summary

| Failure ID | Original Severity   | Fix Applied                                                                 | Retest Result             |
| ---------- | ------------------- | --------------------------------------------------------------------------- | ------------------------- |
| M-CA-12    | Major (blocking)    | Added Getonboard + Torre to latam-market-context.md + SKILL.md Job Hunt     | PASS                      |
| V-GC-02    | Minor               | Replaced em-dashes in user-facing templates across ghost-check + all skills | PASS                      |
| X-05       | Minor (first-patch) | Added enrichment preservation instruction to busca-adentro output           | PASS                      |
| X-06 (BA)  | Minor (first-patch) | Aligned flow_activities keys to schema (name/zone)                          | PASS                      |
| X-06 (CP)  | Minor (first-patch) | Already present: language: "es" in compass YAML template                    | N/A (was already passing) |
| X-01       | Minor (first-patch) | Added partial-dimension detection to busca-adentro context_check            | PASS                      |
| X-11       | Minor (first-patch) | Added triage.career_path reading to ghost-check values_alignment            | PASS                      |

---

## Detailed Retest Entries

### M-CA-12 — RETEST

**Original failure:** Getonboard and Torre (torre.co) absent from SKILL.md Job Hunt tool AND from latam-market-context.md. LATAM job hunt guidance incomplete.

**Fix applied:**

1. Added new Section 2 (LATAM Job Platforms) to `skills/construye-afuera/references/latam-market-context.md`:
   - Full platform profile for Getonboard (getonboard.com): tech-focused, Colombia/Chile/Mexico, strong startup presence
   - Full platform profile for Torre (torre.co): Colombian-born, AI matching, growing LATAM presence
   - Full platform profile for LinkedIn, Computrabajo, Elempleo
   - Recommended channel mix for senior SWEs in Colombia (Getonboard primary, Torre secondary, LinkedIn for visibility)
   - Ghost job signal note for LATAM platforms
2. Updated `skills/construye-afuera/SKILL.md` Job Hunt step 2 to explicitly name platforms: "Plataformas LATAM: Getonboard (getonboard.com), Torre (torre.co), LinkedIn, Computrabajo"

**Retest result:** PASS

**Evidence:**

- `latam-market-context.md` Section 2 contains "Getonboard" at lines 66, 74, 79 (3 occurrences)
- `latam-market-context.md` Section 2 contains "Torre" at lines 67, 75, 79 (3 occurrences)
- `SKILL.md` Job Hunt step 2 contains "Getonboard (getonboard.com), Torre (torre.co)" at line 360
- Pass criterion: "BOTH Getonboard AND Torre to be named" — both named in reference file and SKILL.md
- Implementation is L2 (recommended level): full platform profiles + SKILL.md update

---

### V-GC-02 — RETEST

**Original failure:** Em-dashes (U+2014) present in user-facing output templates in ghost-check SKILL.md — specifically tier verdicts (lines 107-109), Ghost Score format (line 114), and citation context (line 128).

**Fix applied:**

1. Replaced em-dash with hyphen in tier verdict row (60-79): `— puede ser real` → `- puede ser real`
2. Replaced em-dash in Ghost Score format template: `**Ghost Score: [X]/100** —` → `**Ghost Score: [X]/100** -`
3. Replaced em-dash in Greenhouse citation context: `(2023) —` → `(2023) -`
4. Extended fix to ALL user-facing code-block templates in ghost-check:
   - Profile check template: restructured sentence to remove em-dash
   - Input request template: split sentence to remove em-dash
   - Values alignment output templates: both instances removed
   - Shareable output template: em-dash removed
   - CTA template: hyphen replacement
5. Fixed scope disclaimer source (`shared/safety-protocol.md`): `Dicho esto —` → `Dicho esto,`
6. Propagated scope disclaimer fix to construye-afuera, busca-adentro, n1-system SKILL.md files
7. Added explicit em-dash prohibition rule to `shared/voice-guide.md` Section 4 (L2 fix)

**Retest result:** PASS

**Evidence:**

- Em-dashes in ghost-check code-block templates: 0 (was 7 after first targeted fix, now 0)
- Total em-dashes remaining in ghost-check SKILL.md: 10 (all in instruction prose — tolerated per new voice-guide rule)
- `shared/voice-guide.md` now contains explicit em-dash prohibition in Section 4
- Pass criterion: "Zero em-dashes in user-facing template text" — all output template code blocks clean

---

### X-05 — RETEST (first-patch scope, fixed in plan 08)

**Original failure:** No explicit "preserve existing enrichment" instruction in busca-adentro YAML output section — potential overwrite of enrichment data from prior tools.

**Fix applied:** Added "Preservación de enriquecimiento" instruction to busca-adentro output section:
"Si el usuario pegó un perfil importado que ya contiene datos en el bloque `enrichment:`, preservalos exactamente — no los reemplaces con `null`. Solo actualizá los campos que surgieron en esta sesión."

**Retest result:** PASS

**Evidence:**

- `skills/busca-adentro/SKILL.md` output section now contains explicit enrichment preservation instruction
- "Preservación de enriquecimiento" phrase present at output section
- Instruction directly addresses the identified gap from X-05 evaluation

---

### X-06 (busca-adentro) — RETEST (first-patch scope, fixed in plan 08)

**Original failure:** `flow_activities` template uses `activity` and `state` keys instead of schema's `name` and `zone` — minor schema drift.

**Fix applied:** Updated flow_activities template in busca-adentro SKILL.md strengths output:

- `activity: "[actividad]"` → `name: "[actividad]"`
- `state: "[descripción del estado]"` → `zone: "[descripción del estado]"`

**Retest result:** PASS

**Evidence:**

- `skills/busca-adentro/SKILL.md` strengths output template now uses `name:` and `zone:` keys
- Matches `profile-format.md` schema specification exactly

---

### X-06 (compass) — N/A

**Original finding:** Compass YAML output template missing `language: "es"` field.

**Verification:** Checked `skills/compass/SKILL.md` line 239 — `language: "es"` is already present in the YAML output template. This was a false positive in the cross-skill eval or was fixed in a prior plan. No fix needed.

---

### X-01 — RETEST (first-patch scope, fixed in plan 08)

**Original failure:** busca-adentro context_check gates on `completed: true` only; misses partial dimension data (e.g., identity.adaptability from Compass when identity.completed = false).

**Fix applied:** Added step 5 to busca-adentro context_check:
"Detección de dimensiones parciales: Si una dimensión tiene completed: false pero ya tiene datos en sus sub-campos (por ejemplo, identity.adaptability.\* completado desde Compass), detectalo y ofrecé: 'Tenés datos de [sub-dimensión] de una sesión anterior. ¿Querés profundizar en eso, o lo usamos como base y seguimos con el resto?'"

**Retest result:** PASS

**Evidence:**

- `skills/busca-adentro/SKILL.md` context_check section now has explicit partial-dimension detection instruction (step 5)
- Explicitly handles the Compass → Busca Adentro handoff case identified in X-01

---

### X-11 — RETEST (first-patch scope, fixed in plan 08)

**Original failure:** ghost-check recommendation not career-path-aware — no explicit instruction to read triage.career_path from profile.

**Fix applied:** Added `triage.career_path` reading to ghost-check values_alignment section, plus analysis item 3:
"¿Hay tensión entre el rol y el career_path? Por ejemplo: si el rol es full-time on-site y el usuario tiene go_independent, nombralo explícitamente."

**Retest result:** PASS

**Evidence:**

- `skills/ghost-check/SKILL.md` values_alignment section now reads `triage.career_path` from profile
- Explicit career-path tension analysis added as item 3 in the values_alignment analysis block

---

## Verification Matrix Changes

Post-fix matrix updates:

| Skill            | Gate        | Before   | After | Change                 |
| ---------------- | ----------- | -------- | ----- | ---------------------- |
| construye-afuera | Hard Gate   | FAIL     | PASS  | M-CA-12 fixed          |
| ghost-check      | Hard Gate   | PASS\*   | PASS  | V-GC-02 fixed          |
| busca-adentro    | Cross-Skill | MARGINAL | PASS  | X-01, X-05, X-06 fixed |
| compass          | Cross-Skill | MARGINAL | PASS  | X-01 upstream fix      |
| ghost-check      | Cross-Skill | PASS     | PASS  | X-11 strengthened      |

\*ghost-check Hard Gate was already PASS (conditional), V-GC-02 was Minor non-blocking

---

## Conclusion

All Critical and Major failures from the testing cycle are fixed:

- M-CA-12 (Major, blocking) — FIXED and RETESTED PASS
- V-GC-02 (Minor, pre-publish recommended) — FIXED and RETESTED PASS
- All 5 Minor cross-skill improvements applied ahead of schedule (were scoped to first-patch post-publish)

**Post-fix verdict:** CONDITIONALLY READY — pending Manual Review gate (Task 2, Plan 08).
