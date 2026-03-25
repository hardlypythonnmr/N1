# Regression — Eval Harness Test Cases (5 tests)

These tests verify that prior QA fixes and phase verification criteria remain intact. Run after any code/skill change.

---

### R-01: 260324-jia QA fixes still holding (10 priority issues)

**Category:** Regression
**Input:** Quick task 260324-jia fixed 10 priority issues across the N1 web app. Reference: `.planning/quick/260324-jia-fix-all-10-priority-issues-from-qa-repor/`.
**Procedure:** Check the QA report from 260324-jia. Identify the 10 priority issues that were fixed. For each fix, run a quick verification:

1. Ghost score displays as integer (not decimal) in web tool
2. Scope disclaimer appears on every tool load
3. Voseo conjugations present throughout web tool copy
4. YAML export button works and produces valid YAML
5. Canvas scorecard renders without blank areas
6. Email capture form submits without visible error
7. Navigation between tools works without 404
8. Profile import reads correctly from pasted YAML
9. Mobile viewport at 375px doesn't break layout
10. No console errors on initial page load

**Expected:** All 10 originally-fixed issues remain fixed. No regression.
**Pass/Fail:** PASS if all 10 fixes are still working. FAIL if any fix has regressed.
**Severity if fail:** Major

---

### R-02: 260324-kd3 visual/responsive fixes still holding (13 issues)

**Category:** Regression
**Input:** Quick task 260324-kd3 fixed 13 visual issues + desktop-first responsive overhaul (1100px). Reference: `.planning/quick/260324-kd3-fix-all-13-visual-issues-and-make-all-pa/`.
**Procedure:** Check the 260324-kd3 fixes list. For each visual/responsive fix:

1. Desktop layout at 1100px+ renders correctly for all 8 pages
2. Landing page hero section renders on desktop without overflow
3. Score display cards have correct padding/margins on desktop
4. Form inputs don't overflow their containers on desktop
5. Navigation bar renders correctly at 1100px
6. Ghost Check web tool result card renders on desktop
7. Compass radar chart renders at correct size on desktop
8. Scorecard share image generates at correct 1200x628 dimensions
9. Responsive breakpoints at 768px and 375px still correct
10. No horizontal scroll on any page at 375px
11. Typography scale consistent across tool pages
12. Color contrast passes for primary text on white background
13. CTA buttons have correct hover states

**Expected:** All 13 visual/responsive fixes remain in place. No regression.
**Pass/Fail:** PASS if all 13 fixes are working. FAIL if any visual fix has regressed.
**Severity if fail:** Minor

---

### R-03: Phase 02 AI Skills verification criteria intact

**Category:** Regression
**Input:** Phase 02 verification criteria from `02-VERIFICATION.md` (if exists) or Phase 02 plans. Core Phase 02 deliverables: 5 SKILL.md files created and functional.
**Procedure:** Verify that the 5 skill files created in Phase 02 are still present and structurally correct:

1. `skills/ghost-check/SKILL.md` exists and contains `<scoring>` section
2. `skills/compass/SKILL.md` exists and contains `<caas_conversacional>` section
3. `skills/busca-adentro/SKILL.md` exists and contains all 4 dimension sections
4. `skills/construye-afuera/SKILL.md` exists and contains all 9 tool sections
5. `skills/n1-system/SKILL.md` exists and contains `<integration_synthesis>` section

For each skill: check that the `reads:` frontmatter lists the correct shared files. Check that voseo is present in the user-facing text.

**Expected:** All 5 SKILL.md files exist, have correct structure, and load without errors.
**Pass/Fail:** PASS if all 5 skill files are present and structurally intact. FAIL if any file is missing or key sections are absent.
**Severity if fail:** Critical

---

### R-04: Phase 03 integration/scorecard verification criteria intact

**Category:** Regression
**Input:** Phase 03 built cross-dimension scoring cards and profile synthesizer. Core deliverables: scorecard generation, radar chart, profile synthesis page.
**Procedure:** Verify Phase 03 deliverables are still functional:

1. `web/compass/index.html` — radar chart renders after answering all 12 CAAS questions
2. Scorecard canvas generates 1200x628px PNG for Ghost Check result
3. Scorecard canvas generates 1200x628px PNG for Compass result
4. Profile synthesis page reads YAML from clipboard and renders cross-dimension view
5. `accentColor` config field in scorecard generation defaults to COLOR_ORANGE
6. `drawScorecardToContext` handles both 1200x628 and 600x314 preview sizes
7. `calcDimensionScores` function used consistently between radar chart and scorecard

**Expected:** All Phase 03 deliverables are functional. No regression in scorecard generation or chart rendering.
**Pass/Fail:** PASS if all 7 checks pass. FAIL if any scorecard/chart function is broken.
**Severity if fail:** Major

---

### R-05: Phase 04 ChatGPT GPT verification criteria intact

**Category:** Regression
**Input:** Phase 04 built 4 ChatGPT GPTs. Core deliverables: instructions.md + knowledge files for each GPT.
**Procedure:** Verify Phase 04 deliverables exist and are structurally intact:

1. `gpts/ghost-check/instructions.md` exists, contains scoring table inline (not in knowledge file)
2. `gpts/compass/instructions.md` exists, contains all 12 CAAS questions inline
3. `gpts/busca-adentro/instructions.md` exists with routing logic
4. `gpts/construye-afuera/instructions.md` exists with tools routing
5. At least 1 knowledge file exists per GPT
6. All instructions.md files contain the MIND-SAFE tiers inline
7. LATAM salary calibration (8 pts for no-salary in LATAM) present in ghost-check instructions
8. Profile Interchange Format v1 YAML referenced in each instructions.md

**Expected:** All 4 GPT directories have instructions.md + knowledge files. Key inline content (scoring tables, CAAS questions, MIND-SAFE) is present.
**Pass/Fail:** PASS if all 4 GPT directories are intact with correct structure. FAIL if any directory is missing or key content is absent.
**Severity if fail:** Major
