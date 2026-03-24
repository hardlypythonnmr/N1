---
type: quick
tasks: 3
files_modified:
  - web/compass/index.html
  - web/ghost-check/index.html
  - web/profile/index.html
  - web/runway/index.html
  - web/index.html
  - web/bulls-eye/index.html
  - web/mlq/index.html
  - web/flow-logger/index.html
autonomous: true
---

<objective>
Fix all 10 priority issues + 3 low-priority issues from QA-REPORT.md across 8 web pages.

Purpose: Eliminate HIGH and MEDIUM bugs before public launch — scoring logic, screen transitions, nav consistency, i18n, and missing features.
Output: All 8 web pages with zero regressions from QA report.
</objective>

<context>
@C:/N1/screenshots/QA-REPORT.md
@C:/N1/web/compass/index.html
@C:/N1/web/ghost-check/index.html
@C:/N1/web/profile/index.html
@C:/N1/web/runway/index.html
@C:/N1/web/index.html
</context>

<tasks>

<task type="auto">
  <name>Task 1: Fix HIGH severity — Compass screen-switch + Ghost Check scoring</name>
  <files>web/compass/index.html, web/ghost-check/index.html</files>
  <action>
**Compass intro not hiding (Issue #1):**
- Line 212: `<main id="screen-start" class="screen active relative z-10 pt-24 pb-32 px-4 flex flex-col items-center">` — the Tailwind `flex` class overrides `.screen { display: none }` because `flex` is an inline utility with higher specificity in Tailwind's generated styles.
- Fix: Change the CSS rule `.screen { display: none; }` to `.screen { display: none !important; }` and `.screen.active { display: flex !important; }` (use flex since all screens use flex layout). This preserves the Tailwind flex layout when active while ensuring non-active screens are hidden.
- Alternatively (simpler): Remove `flex flex-col items-center` from the static class list of `screen-start` (line 212) and `screen-questions` (line 326). Instead, add those classes dynamically in the `showScreen()` JS function, or change `.screen.active` to `display: flex` in the CSS so it inherits the flex classes naturally.
- PREFERRED approach: Change line 151 from `display: block;` to `display: flex;` so `.screen.active` renders as flex (matching all screen elements' flex usage). This is the minimal change.

**Compass duplicate radar labels (Issue #8):**

- Line ~934 in the results rendering JS: The radar chart is created with Chart.js which renders its own axis labels. Additionally, there are HTML overlay labels (orange uppercase) positioned on top.
- Fix: When creating the Chart.js radar config, set `scales.r.pointLabels.display = false` to suppress Chart.js's built-in labels, keeping only the styled HTML overlays. OR remove the HTML overlays and style Chart.js labels. Check which approach preserves the design better — likely suppress Chart.js labels since the HTML overlays are styled with the brand orange.

**Compass identical dimension insights (Issue #7):**

- Line 934: `insightText.textContent = "Segun Savickas & Porfeli (2012), esta dimension predice la capacidad de adaptacion a transiciones laborales no planificadas.";` — hardcoded same text for all 4 cards.
- The `DIMENSION_INSIGHTS` object already exists (line ~601) with per-dimension text for the question screen.
- Fix: In the results rendering loop, use the dimension key to look up `DIMENSION_INSIGHTS[dimensionKey]` instead of the hardcoded string. The loop iterates over dimensions — use the dimension name/key to index into the insights map.

**Compass nav fixes (Issues #4):**

- Line 531-533: "Reportes" links to `../ghost-check/index.html` — replace with Perfil link to `../profile/index.html` (will be fully replaced by consistent nav in Task 3, but fix the href now as a safety net).

**Ghost Check scoring bug (Issue #2):**

- The `renderBreakdownCards()` function (line 669) correctly separates fired vs non-fired signals. The `analyzePosting()` function (line 589) correctly maps signals.
- ROOT CAUSE: The signal `detect` functions have INVERTED logic for several signals:
  - `no_salary_range` (line 487-488): `return !/(salario|sueldo|...)/i.test(t)` — returns TRUE when salary is NOT mentioned. This is CORRECT.
  - `no_company_name` (line 496-498): `return /(empresa confidencial|confidential|cliente de)/i.test(t)` — only fires when those EXACT phrases appear. For a posting that simply OMITS the company name (no mention at all), this does NOT fire. Fix: Change to `!/(en\s+\w+|para\s+\w+|company:|empresa:)/i.test(t) || /(empresa confidencial|confidential|cliente de)/i.test(t)` — but this is too broad. Better: add a check for very short company mentions or absence of typical company indicators.
  - Actually, re-reading the QA report: "No menciona la empresa" appears under GREEN indicators. This means `fired: false` for this signal. The detect function only matches "empresa confidencial" etc., NOT the absence of company name. A posting that simply never mentions a company name would NOT trigger this. Fix the detect: `return !(/(en|para|at|company|empresa)\s+[A-Z][a-z]/i.test(t)) || /(empresa confidencial|confidential|cliente de)/i.test(t);` — fires when no proper company name pattern found OR when confidential language used.
  - `no_team_context` (line 548-549): `return !/(equipo|manager|reporta|team)/i.test(t)` — returns TRUE when no team words. CORRECT logic but may not fire for the test posting. If test posting mentions "team" somewhere, this won't fire. Likely correct.
  - The core issue is that `no_company_name` only matches explicit confidentiality phrases but not actual absence. Fix the detect to also check for absence of company name patterns.
  - `unrealistic_requirements` (line 514-519): Pattern `(\d+)\+?\s*a[no]s` only matches Spanish "anos". If posting uses "years" or "yr" in English, won't match. Add English patterns: `(\d+)\+?\s*(a[nñ]os|years?|yrs?)`.
  - `urgent_language` (line 527-529): Only matches Spanish urgency words. Add "ASAP" as it IS there but check for "24/7" pattern too: add `|24\/7|disponibilidad total` to the regex.
  - `vague_role` (line 505-506): `return t.length < 400` — a very long suspicious posting won't trigger this. This is working as designed (short posts = vague). Correct.

- Summary of Ghost Check fixes:
  1. `no_company_name` detect: Change to fire when NO recognizable company name appears (not just when "confidencial" mentioned). Use: `return !(/((?:en|para|at|@)\s+[A-Z]\w+|empresa:\s*\S)/i.test(t)) || /(empresa confidencial|confidential|cliente de)/i.test(t);`
  2. `unrealistic_requirements` detect: Add English year patterns. Change regex from `/(\d+)\+?\s*a[no]s/gi` to `/(\d+)\+?\s*(?:a[nñ]os|years?|yrs?)/gi`
  3. `urgent_language` detect: Add `|24\/7|disponibilidad total|immediately` to the regex

**Ghost Check accent marks (LOW issue):**

- Line 189-190: Fix "orientacion" -> "orientación", "investigacion" -> "investigación", "garantia" -> "garantía", "senales" -> "señales" (line 340 aria-label).
  </action>
  <verify>
  Open `web/compass/index.html` in browser. Click "Empezar Evaluacion" — intro screen must disappear, only question screen visible. Complete assessment — results should show per-dimension insight text (not identical across 4 cards). Radar chart should show labels once (not duplicated). Open `web/ghost-check/index.html`, paste a suspicious posting with no salary, no company name, urgency words — score should be 40+ and red flags should list the detected issues, not show them as green indicators.
  </verify>
  <done>
- Compass: clicking Empezar hides intro, shows questions only
- Compass: 4 dimension cards show unique insight text per dimension
- Compass: radar labels appear once (no duplicates)
- Ghost Check: suspicious posting scores 40+ with red flags correctly classified
- Ghost Check: accent marks corrected in disclaimer
  </done>
  </task>

<task type="auto">
  <name>Task 2: Fix MEDIUM severity — Profile KPI, Profile heading, Landing text, Runway YAML</name>
  <files>web/profile/index.html, web/index.html, web/runway/index.html</files>
  <action>
**Profile Valores KPI 0% (Issue #3):**
- `calcDimensionScores()` at line 556-562 only checks `profile.values.schwartz_profile` for values score. Bull's Eye saves data under `profile.values.bulls_eye` with keys: work, relationships, personal_growth, leisure (each 1-10 scale).
- Fix: After the schwartz_profile check (line 562), add a fallback:
  ```
  if (valuesScore === 0 && profile.values && profile.values.bulls_eye) {
    var be = profile.values.bulls_eye;
    var beVals = [be.work, be.relationships, be.personal_growth, be.leisure].filter(function(v) { return v !== null && !isNaN(v); });
    if (beVals.length > 0) valuesScore = Math.round((beVals.reduce(function(a,b){return a+b;},0) / beVals.length / 10) * 100) / 10;
  }
  ```
  This calculates alignment from Bull's Eye 4 areas (each /10 scale), averaging and normalizing to 0-10 range to match the other dimension scores.

**Profile English heading (Issue #9):**

- Line 302: Change `N1 Integrated Profile<br/>Dashboard` to `Panel de Perfil Integrado<br/>N1`

**Landing tool count (Issue #6):**

- Line 417: Change `Las 6 herramientas` to `Las 7 herramientas`

**Landing typo (LOW issue):**

- Line 537: Change `obteé` to `obtené`

**Runway missing YAML export (Issue #10):**

- Runway currently only has "Descargar resumen como imagen" button. Add a YAML export button following the same pattern as other tools.
- The Runway Calculator stores financial data NOT in the profile format (per decision: "Runway Calculator has no saveToProfile — financial data not in Profile Interchange Format schema by design").
- Therefore, the YAML export should generate a standalone YAML snippet (not profile-compatible) with: monthly_expenses, monthly_income, savings, currency, runway_months (conservador/probable/optimista), and date.
- Add a "Exportar YAML" button next to the existing download button in the results section. Use the same button styling as other tools (glassmorphism with primary accent). Wire it to generate and download a `n1-runway.yaml` file using `URL.createObjectURL` + `<a>` click pattern (same as other tools use `N1.generateYAML`). Since Runway doesn't use the profile system, build the YAML string manually with template literal or string concatenation.
- Read the existing results variables (the scenario calculations) to populate the YAML values.
  </action>
  <verify>
  Open `web/profile/index.html` after completing Bull's Eye — Valores KPI should show a percentage (not 0%). Heading should read "Panel de Perfil Integrado N1". Open `web/index.html` — should say "Las 7 herramientas" and "obtené insights". Open `web/runway/index.html`, complete a calculation — YAML export button should appear and download a `.yaml` file.
  </verify>
  <done>
- Profile Valores KPI reflects Bull's Eye data (non-zero when completed)
- Profile heading in Spanish
- Landing says "Las 7 herramientas" and "obtené"
- Runway has YAML export button that downloads n1-runway.yaml
  </done>
  </task>

<task type="auto">
  <name>Task 3: Standardize bottom navigation across all 8 pages</name>
  <files>web/index.html, web/ghost-check/index.html, web/compass/index.html, web/bulls-eye/index.html, web/mlq/index.html, web/flow-logger/index.html, web/runway/index.html, web/profile/index.html</files>
  <action>
**Bottom nav inconsistency (Issue #5):**

Implement a consistent 4-item bottom nav across ALL pages. The nav pattern:

**On tool pages (7 tools):** 4 items:

1. **Inicio** (home icon) -> `../index.html`
2. **Herramientas** (apps icon) -> `../index.html#herramientas` (scroll to tools section on landing)
3. **[Current Tool]** (tool-specific icon, highlighted as active with `text-[#ff9068] bg-[#ff9068]/10 rounded-xl px-3 py-1`) -> `#` (stay on page)
4. **Perfil** (person icon) -> `../profile/index.html`

**On landing page:** 4 items:

1. **Inicio** (home icon, active highlight) -> `#inicio`
2. **Herramientas** (apps icon) -> `#herramientas` (add this id to the tools section h2 if not present)
3. **Perfil** (person icon) -> `web/profile/index.html`
4. **Triage** (quiz icon) -> `#triage` (keep existing)

**On profile page:** 4 items:

1. **Inicio** (home icon) -> `../index.html`
2. **Herramientas** (apps icon) -> `../index.html#herramientas`
3. **Perfil** (person icon, active highlight) -> `#` (stay on page)
4. **Compass** (explore icon) -> `../compass/index.html`

Use the existing nav styling from `web/bulls-eye/index.html` as the template (outer `<nav>` with inner `<div class="flex justify-around...">`). The compass page currently uses a different structure (no inner div) — normalize it to match.

Tool icon mapping for "current tool" nav item:

- Ghost Check: `search` icon, label "Ghost"
- Compass: `explore` icon, label "Compass"
- Bull's Eye: `target` icon, label "Bull's Eye"
- MLQ-10: `psychology` icon, label "MLQ-10"
- Flow Logger: `timer` icon, label "Flow"
- Runway: `account_balance` icon, label "Runway"

Also fix: Make the header right-side person icon clickable — wrap it in `<a href="../profile/index.html">` on all tool pages (LOW priority nav issue from QA report).
</action>
<verify>
Open each of the 8 pages and verify: (1) bottom nav has exactly 4 items, (2) Inicio and Perfil are present on every tool page, (3) current tool is highlighted, (4) all links navigate correctly (no dead `#` links except for current-page items), (5) compass no longer has "Reportes" linking to ghost-check.
</verify>
<done>

- All 8 pages have consistent 4-item bottom nav
- Every tool page has Inicio + Herramientas + [Current Tool] + Perfil
- Current tool highlighted with orange accent
- No dead links (Reportes removed, Perfil links to profile page)
- Header person icon links to profile on all tool pages
  </done>
  </task>

</tasks>

<verification>
After all 3 tasks complete:
1. Open each of the 8 pages and confirm no JS console errors
2. Compass: full assessment flow — intro hides, questions work, results show unique insights per dimension, radar has single labels
3. Ghost Check: paste suspicious posting — score 40+, red flags correctly listed, accent marks in disclaimer
4. Profile: shows non-zero Valores KPI with Bull's Eye data, Spanish heading
5. Runway: YAML export downloads file
6. Landing: "Las 7 herramientas", "obtene" typo fixed
7. All pages: consistent bottom nav with 4 items
</verification>

<success_criteria>
All 10 priority issues + 3 low-priority issues from QA-REPORT.md resolved. Zero JS console errors. No visual regressions.
</success_criteria>
