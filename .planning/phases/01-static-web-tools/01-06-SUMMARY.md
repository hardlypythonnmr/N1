---
phase: 01-static-web-tools
plan: 06
subsystem: web-tools
tags:
  [
    mlq,
    purpose,
    meaning-in-life,
    likert7,
    quadrant,
    canvas,
    assessment,
    profile-export,
    LATAM,
    spanish,
  ]
dependency_graph:
  requires:
    - 01-01 (web/styles.css + web/assessment-engine.js)
  provides:
    - web/mlq/index.html (MLQ-10 questionnaire with quadrant placement and profile export)
  affects:
    - purpose.mlq section of the N1 Profile Interchange Format
tech_stack:
  added:
    - HTML Canvas 2D for 2x2 quadrant diagram with user dot
    - Chart.js CDN (loaded but quadrant uses raw Canvas API)
  patterns:
    - N1.createAssessment() for one-per-screen Likert flow
    - N1.saveToProfile() for localStorage profile write
    - N1.exportYAML() for YAML download + clipboard
    - N1.generateScorecard() for PNG scorecard download
    - N1.copyLinkedInText() for pre-written LinkedIn post copy
key_files:
  created:
    - web/mlq/index.html (682 lines — MLQ-10 full tool)
  modified: []
decisions:
  - "All quadrant interpretation text uses textContent (not innerHTML) — safe against XSS"
  - "Quadrant canvas uses 300x300px for tool view (scorecard PNG uses N1.generateScorecard 1200x628)"
  - "Active quadrant highlighted with N1 orange at 0.08 opacity on canvas"
  - "Score bars animate from 0% to calculated value on 100ms delay after results render"
metrics:
  duration: "200s"
  completed: "2026-03-23"
  tasks: 1
  files: 1
---

# Phase 01 Plan 06: MLQ-10 Meaning in Life Questionnaire Summary

**One-liner:** MLQ-10 (Steger 2006) — 10-item, 7-point Likert scale, quadrant placement on 2x2 Canvas diagram, Spanish voseo interpretation, LATAM cultural calibration, profile export to purpose.mlq.

## What Was Built

### Task 1: web/mlq/index.html (682 lines)

Full MLQ-10 static assessment tool. Key components:

**Assessment flow:**

- Intro screen with tool description and "Empezar" CTA
- N1.createAssessment renders 10 questions one-per-screen, 7-point Likert scale
- Question IDs: p1-p5 (Presence subscale), s1-s5 (Search subscale)
- Auto-advance 400ms after selection (inherited from assessment engine)
- Back navigation preserves answers

**Scoring:**

- `calcMean(answers, ids)` — mean of 5 items, 1 decimal, 1-7 range
- `getQuadrant(presence, search)` — midpoint at 4.0, returns fulfilled/growing/seeking/disengaged
- `presence = mean(p1..p5)`, `search = mean(s1..s5)`

**Quadrant visualization (Canvas 300x300px):**

- 2x2 grid with vertical line at x=150, horizontal at y=150
- Four quadrants color-coded: Pleno (orange/bottom-right), Creciendo (green/top-right), Buscando (blue/top-left), Desconectado (gray/bottom-left)
- Active quadrant shaded with N1 orange at 0.08 opacity
- User dot: N1 orange filled circle with white stroke, positioned by score coordinates
- Axis labels: "Presencia →" on X-axis, "Busqueda →" on Y-axis (rotated)
- Midpoint tick labels: "4.0" on both axes

**Results display:**

- Quadrant name badge (Spanish label)
- Scores summary line: "Presencia: X.X / 7 — Busqueda: X.X / 7"
- Animated score bars (0% → computed percentage, 100ms delay)
- Interpretation paragraph — 4 Spanish voseo texts, one per quadrant
- LATAM cultural calibration note (explicit, per WEB-10)

**Profile export:**

- `N1.saveToProfile('purpose', { completed: true, mode: 'quick', mlq: { presence, search, quadrant } })`
- YAML export button triggers `N1.exportYAML` (download + clipboard)
- Scorecard PNG via `N1.generateScorecard` with bar chartType
- LinkedIn text copy: pre-written Spanish post with scores and URL

**Safety:**

- Safety disclaimer via `N1.getSafetyDisclaimer()` (DOM node, not HTML string)
- localStorage guard via `N1.initLocalStorageSafe()`

**Accessibility:**

- `lang="es"` on html element
- `aria-live="polite"` on results section
- Canvas has `role="img"` with aria-label
- Disclaimer has `role="note"` with aria-label
- WCAG 2.1 AA focus styles from shared styles.css

**Citation:**

- Steger, M.F. et al. (2006). MLQ. Journal of Counseling Psychology, 53(1), 80–93.

## Deviations from Plan

None — plan executed exactly as written. The file was committed as part of the `cdfc757` commit alongside the Runway Calculator (parallel agent execution scenario in the N1 repo).

## Known Stubs

None. All four quadrant interpretation texts are fully written. Profile save is wired. All action buttons (scorecard, LinkedIn, YAML) are functional.

## Self-Check: PASSED

- web/mlq/index.html: FOUND (682 lines)
- Commit cdfc757: FOUND (contains web/mlq/index.html)
- createAssessment: FOUND (2 occurrences)
- likert7: FOUND (10 occurrences)
- quadrant: FOUND (37 occurrences)
- saveToProfile: FOUND
- LATAM: FOUND (3 occurrences)
- disclaimer: FOUND (4 occurrences)
- lang="es": FOUND
- fulfilled/growing/seeking/disengaged: FOUND (16 occurrences)

## Commits

| Task | Name                 | Commit  | Files              |
| ---- | -------------------- | ------- | ------------------ |
| 1    | MLQ-10 questionnaire | cdfc757 | web/mlq/index.html |
