---
type: quick
task: 260324-jia
title: Fix all 10 priority issues from QA report
date: 2026-03-24
duration: ~25m
files_modified:
  - web/compass/index.html
  - web/ghost-check/index.html
  - web/profile/index.html
  - web/runway/index.html
  - web/index.html
  - web/bulls-eye/index.html
  - web/mlq/index.html
  - web/flow-logger/index.html
commits:
  - 72d8069
  - 25e02e4
  - 2e3af7a
tags: [bug-fix, nav, i18n, scoring, export]
---

# Quick Task 260324-jia: Fix All 10 Priority Issues from QA Report

**One-liner:** Fixed all HIGH/MEDIUM/LOW QA bugs across 8 pages — screen transitions, scoring logic, radar labels, i18n, navigation consistency, and YAML export.

## What Was Done

### Task 1: HIGH severity — Compass + Ghost Check (commit 72d8069)

**Compass intro screen not hiding (Issue #1):**
Changed `.screen.active { display: block }` to `display: flex` in `web/compass/index.html` line 151. The Tailwind `flex` utility classes on `<main>` elements were being overridden — switching active state to `flex` matches the flex layout used by all screens.

**Compass duplicate radar labels (Issue #8):**
Added `display: false` to `pointLabels` in the Chart.js radar config. The HTML overlay labels (top/right/bottom/left absolute positioned) are the branded design — Chart.js built-in labels were rendering on top of them causing duplication.

**Compass identical dimension insights (Issue #7):**
Changed hardcoded `insightText.textContent = "Segun Savickas..."` to `DIMENSION_INSIGHTS[dim.key]` in the dimension cards rendering loop. The `DIMENSION_INSIGHTS` object already had per-dimension text — it just wasn't being used in results.

**Compass nav Reportes link (Issue #4):**
Replaced the dead `../ghost-check/index.html` "Reportes" link with the standard Herramientas + Perfil nav items. Also normalized nav structure to match other pages (outer `<nav>` + inner `<div>`).

**Ghost Check scoring bug (Issue #2):**
Three signal detect functions fixed:

- `no_company_name`: Now fires when no company name pattern found OR confidential language used (was only matching explicit confidentiality phrases, missing absent company names)
- `unrealistic_requirements`: Regex updated to `/(\d+)\+?\s*(?:a[nñ]os|years?|yrs?)/gi` — now matches English year patterns
- `urgent_language`: Added `24\/7|disponibilidad total|immediately` to the urgency regex

**Ghost Check accent marks (LOW):**
Fixed "orientacion" → "orientación", "investigacion" → "investigación", "guia" → "guía", "garantia" → "garantía" in disclaimer. Also "Verifica" → "Verificá" (voseo).

**Header person icons:**
Compass and Ghost Check header `account_circle` icons now link to `../profile/index.html`.

---

### Task 2: MEDIUM severity — Profile KPI, heading, landing text, Runway YAML (commit 25e02e4)

**Profile Valores KPI showing 0% (Issue #3):**
Added fallback in `calcDimensionScores()` after the schwartz_profile check. When schwartz data is empty, it now reads `profile.values.bulls_eye` (work/relationships/personal_growth/leisure each on 0-10 scale) and normalizes to 0-10 to produce a non-zero score. This covers users who completed Bull's Eye but not the Busca Adentro AI skill.

**Profile English heading (Issue #9):**
`"N1 Integrated Profile<br/>Dashboard"` → `"Panel de Perfil Integrado<br/>N1"`

**Landing tool count (Issue #6):**
`"Las 6 herramientas"` → `"Las 7 herramientas"` (the profile page is the 7th tool)

**Landing typo (LOW):**
`"obteé"` → `"obtené"` (correct voseo conjugation)

**Runway missing YAML export (Issue #10):**
Added "YAML" button alongside existing "Resumen" download button (2-column grid layout). Added `exportRunwayYAML()` function that generates a standalone `n1-runway.yaml` file with:

- currency, monthly_expenses, savings
- scenarios: conservador/probable/optimista (months or "indefinido")
- date

Tracked `lastSavings`, `lastExpenses`, `lastCurrency` alongside existing `lastResults`. File downloads via `URL.createObjectURL` + dynamic `<a>` click.

---

### Task 3: Bottom nav standardization across all 8 pages (commit 2e3af7a)

Standard 4-item pattern for tool pages: **Inicio** → **Herramientas** → **[Current Tool active]** → **Perfil**

| Page        | Before                               | After                                     |
| ----------- | ------------------------------------ | ----------------------------------------- |
| Bulls-eye   | Inicio+Ghost+Bulls-eye+Compass       | Inicio+Herramientas+Bulls-eye+Perfil      |
| MLQ         | Inicio+MLQ+Compass+Herramientas      | Inicio+Herramientas+MLQ+Perfil            |
| Flow Logger | Inicio+Flow+Compass+Herramientas     | Inicio+Herramientas+Flow+Perfil           |
| Runway      | Inicio+Runway+Perfil+Compass         | Inicio+Herramientas+Runway+Perfil         |
| Profile     | Inicio+Compass+Runway+Perfil         | Inicio+Herramientas+Perfil+Compass        |
| Compass     | Inicio+Compass+Reportes+Perfil(dead) | Inicio+Herramientas+Compass+Perfil ✓      |
| Ghost Check | Inicio+Ghost+Bull's-Eye+Compass      | Inicio+Herramientas+Ghost+Perfil ✓        |
| Landing     | Inicio+Herramientas+Perfil+Triage    | unchanged (already correct per plan spec) |

Header right icons on all tool pages now link to `../profile/index.html`.

## Deviations from Plan

None — plan executed exactly as written. The MLQ and Flow Logger header right icons used tool-specific icons (psychology, scatter_plot) rather than account_circle — these were replaced with account_circle linking to profile, consistent with plan intent ("Make the header right-side person icon clickable").

## Known Stubs

None. All changes wire real data.

## Self-Check: PASSED

- Commit 72d8069 verified: `git log` shows it exists
- Commit 25e02e4 verified: `git log` shows it exists
- Commit 2e3af7a verified: `git log` shows it exists
- `.screen.active { display: flex }` confirmed at line 151 compass/index.html
- `DIMENSION_INSIGHTS[dim.key]` confirmed at line 939 compass/index.html
- `display: false` in pointLabels confirmed at line 831 compass/index.html
- `orientación/investigación/guía/garantía` confirmed at lines 189-190 ghost-check/index.html
- `Las 7 herramientas` confirmed at line 417 index.html
- `obtené` confirmed at line 537 index.html
- `Panel de Perfil Integrado N1` confirmed at line 302 profile/index.html
- `exportRunwayYAML` and `n1-runway.yaml` confirmed in runway/index.html
- All 8 pages have Inicio + Herramientas/Triage + [tool or Perfil active] + Perfil/Compass in nav
