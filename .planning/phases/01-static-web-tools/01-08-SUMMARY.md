---
phase: 01-static-web-tools
plan: 08
subsystem: web-calculator
tags:
  [
    html,
    javascript,
    chartjs,
    financial-calculator,
    COP,
    USD,
    currency-toggle,
    runway,
  ]

dependency_graph:
  requires:
    - phase: 01-static-web-tools
      plan: 01
      provides: "web/styles.css (design system), web/assessment-engine.js (N1 global API, generateScorecard, getSafetyDisclaimer, showToast)"
  provides:
    - web/runway/index.html — Runway Calculator with 3-scenario financial analysis, COP/USD toggle, Chart.js bar chart
  affects:
    - Landing page (01-02) — should link to web/runway/index.html
    - Profile synthesizer — runway not in profile schema (financial data excluded by design)

tech-stack:
  added:
    - Chart.js 4.4.0 via CDN (bar chart, type='bar')
  patterns:
    - Pure calculation functions (calculateRunway) returning immutable result arrays
    - DOM construction via createElement/textContent only — no innerHTML with user data
    - Canonical internal currency (COP) with display conversion for USD
    - Income sources built with appendChild, never innerHTML

key-files:
  created:
    - web/runway/index.html (1170 lines — Runway Calculator)
  modified: []

key-decisions:
  - "COP as canonical internal currency — all calculations in COP, USD display conversion only"
  - "No saveToProfile — financial data not in Profile Interchange Format schema per plan spec"
  - "Income sources DOM uses createElement+textContent throughout — XSS-safe per security guidelines"
  - "Chart Y-axis capped at 36 with '36+' tick label — prevents runaway chart scaling"
  - "Scorecard download via N1.generateScorecard with bar chartType — no separate canvas implementation"

patterns-established:
  - "Pure calculation functions: calculateRunway() returns immutable array, never mutates inputs"
  - "Currency conversion: setCurrency() converts existing input values on toggle, never mutates state objects"
  - "Income row lifecycle: addIncomeSource() builds DOM from scratch with createElement; remove via removeChild"

requirements-completed: [WEB-08, WEB-10]

duration: 190s
completed: 2026-03-23
---

# Phase 01 Plan 08: Runway Calculator Summary

**Static HTML Runway Calculator with 3-scenario financial modeling (conservative/likely/optimistic), COP/USD currency toggle at 4200 rate, Chart.js bar chart, and Colombian cultural context note.**

## Performance

- **Duration:** 190s (~3 min)
- **Started:** 2026-03-23T21:28:53Z
- **Completed:** 2026-03-23T21:31:57Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Runway Calculator at web/runway/index.html: savings + monthly expenses + optional income sources → 3-scenario runway in months
- COP/USD toggle converts all input values on switch at 4200 COP/USD exchange rate with disclaimer note
- Chart.js bar chart (type: 'bar') renders gray/orange/green bars for conservative/likely/optimistic scenarios, Y-axis capped at 36 months
- Scenario cards with contextual interpretation strings (< 3 months / 3-6 / 6-12 / 12+ / indefinite)
- Colombian cultural context note per WEB-10 (Bogota/Medellin market context, 6-12 month framing)
- Financial disclaimer + N1 safety disclaimer appended via getSafetyDisclaimer() DOM node
- No saveToProfile — financial data excluded from Profile Interchange Format schema by design

## Task Commits

1. **Task 1: Runway Calculator (web/runway/index.html)** - `cdfc757` (feat)

## Files Created/Modified

- `web/runway/index.html` — 1170-line self-contained Runway Calculator loading ../styles.css, Chart.js CDN, ../assessment-engine.js

## Decisions Made

- COP as canonical internal currency: all calculateRunway() calls operate in COP. USD display converts on the fly via copToUsd(). This avoids floating-point accumulation errors from repeated currency conversions.
- No saveToProfile: confirmed per plan — financial data is not in the Profile Interchange Format schema. The tool is standalone only.
- Income source DOM built exclusively with createElement/textContent to match the XSS-safe pattern established in Plan 01 (assessment-engine.js).
- Chart Y-axis max set to 36 with callback rendering '36+' at the max tick. The tooltip callback also returns '36+ meses' for scenarios over the cap.

## Deviations from Plan

None — plan executed exactly as written.

## Issues Encountered

None.

## Known Stubs

None. All three scenarios are calculated from real inputs. Chart renders actual data. Currency toggle converts real values.

## Next Phase Readiness

- web/runway/index.html is complete and standalone
- Landing page (01-02) needs to add a link to web/runway/index.html
- No blockers

---

_Phase: 01-static-web-tools_
_Completed: 2026-03-23_
