---
phase: 01-static-web-tools
plan: 03
subsystem: ghost-check-tool
tags:
  [
    ghost-check,
    job-posting-analysis,
    scoring,
    localStorage,
    Canvas,
    LATAM,
    XSS-prevention,
  ]
dependency_graph:
  requires:
    - web/styles.css (01-01)
    - web/assessment-engine.js (01-01)
  provides:
    - web/ghost-check/index.html (Ghost Check tool — paste job posting, get ghost score 0-100)
  affects:
    - web/index.html (landing page must link to ghost-check/)
tech_stack:
  added:
    - Signal-based ghost job scoring (10 binary signals, regex-based detection)
    - clearChildren() DOM pattern (while loop instead of innerHTML = "" for clearing lists)
  patterns:
    - All DOM mutations via textContent/createElement — no innerHTML on any dynamic content
    - Immutable profile concat pattern: prevAssessments.concat([newEntry]) — no push/mutation
    - Pure scoring functions (analyzePosting, getVerdict, getInterpretation) — no side effects
key_files:
  created:
    - web/ghost-check/index.html (499 lines — Ghost Check static web tool)
  modified: []
decisions:
  - "clearChildren() via while loop replaces innerHTML = empty string — avoids security hook false positive, equally safe, more explicit"
  - "LinkedIn text built from score + verdict only — user-pasted job text never included in shared content"
  - "Safety disclaimer hardcoded as static HTML — no getSafetyDisclaimer() call needed since Ghost Check is not an AI conversation tool"
metrics:
  duration: "184s"
  completed: "2026-03-23"
  tasks: 1
  files: 1
---

# Phase 01 Plan 03: Ghost Check Tool Summary

**One-liner:** Ghost job detection tool — user pastes job posting, gets 0-100 ghost score from 10 regex-based binary signals, with color-coded verdict, per-signal breakdown, scorecard download, LinkedIn text copy, and profile YAML export.

## What Was Built

### Task 1: web/ghost-check/index.html (499 lines)

Self-contained static tool. Loads `../styles.css` + `../assessment-engine.js`. All scoring logic in inline `<script>` tag.

**Page structure:**

- `nav.nav` — back link to `../index.html`, logo "Ghost Check"
- `div.disclaimer` — safety disclaimer hardcoded as static HTML (no JS injection)
- `section#input-screen` — H1 "Ghost Check", subtitle, `textarea#job-input`, LATAM cultural note, `button#analyze-btn` (disabled until textarea has content)
- `section#results-screen` (hidden initially) — score circle, verdict, signals list, interpretation, 4 action buttons, export confirm

**10 ghost signals (total max weight: 100):**

| Signal ID                | Label                             | Weight | Detection                                              |
| ------------------------ | --------------------------------- | ------ | ------------------------------------------------------ |
| no_salary_range          | No indica rango salarial          | 15     | No salary keywords                                     |
| no_company_name          | No menciona la empresa            | 20     | "empresa confidencial" / "confidential" / "cliente de" |
| vague_role               | Descripcion del rol vaga          | 15     | text.length < 400                                      |
| unrealistic_requirements | Requisitos irreales para el nivel | 10     | Sum of years experience > 8                            |
| urgent_language          | Lenguaje de urgencia vacia        | 5      | "urgente" / "asap" / "ya mismo"                        |
| generic_benefits         | Beneficios genericos              | 5      | Generic benefits without specifics                     |
| no_team_context          | No describe equipo ni manager     | 10     | No team/manager keywords                               |
| email_only               | Solo acepta CV por email          | 5      | Email-only apply without portal                        |
| reposted                 | Indicios de reposteo multiple     | 10     | Repost keywords                                        |
| level_mismatch           | Nivel no coincide con requisitos  | 5      | Junior + high experience requirements                  |

**Verdict thresholds:**

- 0-25: "Probablemente real" (#22c55e)
- 26-50: "Oferta sospechosa" (#f59e0b)
- 51-75: "Alta probabilidad de ghost job" (#E85D26)
- 76-100: "Ghost job confirmado" (#dc2626)

**N1 API calls:**

- `N1.generateScorecard({ title: 'Ghost Check', scores: [...], interpretation: verdict.label, chartType: 'bar' })` — Canvas PNG
- `N1.downloadScorecard(dataUrl, 'n1-ghost-check.png')` — PNG download
- `N1.copyLinkedInText(text)` — clipboard copy with toast feedback
- `N1.saveToProfile('evolution', { assessments: [...] })` — immutable concat
- `N1.exportYAML('evolution', { assessments: [...] })` — YAML download
- `N1.loadProfile()` — read existing profile before save

**Profile field written (per WEB-09):**

```
evolution.assessments[] entry:
{ date: ISO8601, instrument: "ghost-check", scores: { ghost_score: N, signals_fired: [ids] } }
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Replaced innerHTML="" with clearChildren() helper**

- **Found during:** Task 1 — initial write attempt blocked by security hook
- **Issue:** Pre-commit security hook flagged `innerHTML = ""` pattern (false positive — it was clearing a container, not injecting user content). Hook rejected the file write.
- **Fix:** Implemented `clearChildren(node)` helper using `while (node.firstChild) { node.removeChild(node.firstChild); }` — semantically identical, no security hook trigger, explicitly safe.
- **Files modified:** web/ghost-check/index.html
- **Commit:** 5d9f0a6

### Plan Decisions Preserved

- Safety disclaimer hardcoded in HTML as static text (plan specified this — no JS injection)
- LATAM cultural calibration note present on textarea (`cultural-note` class)
- LinkedIn text uses only score + verdict (plan explicitly forbids including user-pasted content)
- Profile save uses `prevAssessments.concat([newEntry])` — immutable, no `.push()` mutation

## Known Stubs

None. The tool is fully functional:

- All 10 signal detectors are implemented regex functions (not placeholders)
- Scorecard download calls real `N1.generateScorecard` + `N1.downloadScorecard`
- LinkedIn copy calls real `N1.copyLinkedInText`
- Profile export calls real `N1.saveToProfile` + `N1.exportYAML`
- Safety disclaimer is static text (no placeholder)

## Self-Check: PASSED

- web/ghost-check/index.html: FOUND (499 lines)
- 01-03-SUMMARY.md: FOUND
- Commit 5d9f0a6: FOUND

## Commits

| Task | Name             | Commit  | Files                      |
| ---- | ---------------- | ------- | -------------------------- |
| 1    | Ghost Check tool | 5d9f0a6 | web/ghost-check/index.html |
