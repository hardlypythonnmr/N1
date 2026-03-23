---
phase: 03-integration-scorecards
plan: 01
subsystem: assessment-engine
tags: [scorecard, canvas, per-tool-customization, preview-thumbnail]
dependency_graph:
  requires: []
  provides: [N1.generateScorecard enhanced API, N1.generateScorecardPreview]
  affects:
    [
      web/ghost-check/index.html,
      web/compass/index.html,
      web/bulls-eye/index.html,
      web/mlq/index.html,
    ]
tech_stack:
  added: []
  patterns:
    [extract-shared-drawing-function, canvas-scale-transform-for-preview]
key_files:
  created: []
  modified:
    - web/assessment-engine.js
decisions:
  - drawScorecardToContext private function eliminates drawing duplication — single source for 1200x628 and 600x314 renders
  - ctx.scale(0.5, 0.5) approach for preview — no pixel math needed, all coordinates stay at 1200x628 scale
  - accentColor defaults to COLOR_ORANGE — full backward compat, no change needed in existing callers
  - badge uses ctx.textAlign=right then resets to left — safe, no state leak between draws
metrics:
  duration: "~5 minutes"
  completed: "2026-03-23T23:18:03Z"
  tasks_completed: 2
  files_modified: 1
---

# Phase 3 Plan 1: Enhanced Scorecard Library Summary

Single-source scorecard engine extension — per-tool color/subtitle/badge customization and half-size preview thumbnail via shared private drawing function.

## What Was Built

Extended `N1.generateScorecard()` in `web/assessment-engine.js` with three new optional config fields and added `N1.generateScorecardPreview()` as a 600x314 thumbnail variant. Both functions now delegate to a private `drawScorecardToContext(ctx, config, canvasWidth, canvasHeight)` function — no drawing code is duplicated.

### New API Surface

**config.accentColor** (string, optional, default `"#E85D26"`): Replaces the header band fill and bar chart fill color. Does not mutate the module-level constant.

**config.subtitle** (string, optional): Rendered at x=120, y=70 in the header band in `rgba(255,255,255,0.85)` DM Sans 14px.

**config.badge** (string, optional): Rendered right-aligned at x=canvasWidth-48, y=52 in bold Space Mono 32px white. `textAlign` is reset to `"left"` after draw.

**N1.generateScorecardPreview(config)**: Creates a 600x314 canvas, applies `ctx.scale(0.5, 0.5)`, then calls `drawScorecardToContext` at 1200x628 virtual dimensions. Returns PNG data URL.

## Tasks Completed

| Task | Name                                                              | Commit  | Files                    |
| ---- | ----------------------------------------------------------------- | ------- | ------------------------ |
| 1    | Add per-tool customization options (accentColor, subtitle, badge) | de28e2f | web/assessment-engine.js |
| 2    | Add N1.generateScorecardPreview + extract drawScorecardToContext  | de28e2f | web/assessment-engine.js |

Both tasks were implemented in a single commit (no intermediate state needed since they are tightly coupled — Task 2 restructures the same function modified in Task 1).

## Verification Results

All 9 checks passed:

```
OK — accentColor option
OK — subtitle option
OK — badge option
OK — generateScorecardPreview exported
OK — drawScorecardToContext private
OK — per-tool comment
OK — 6b JSDoc
OK — 600x314 canvas
OK — ctx.scale(0.5,0.5)
```

## Line Budget

File grew from 1134 to 1191 lines (+57 lines). Within the 30-80 line success criterion.

## Deviations from Plan

None — plan executed exactly as written. The two tasks were committed together since the refactor (Task 2) is prerequisite to cleanly inserting the customization code (Task 1) — committing Task 1 separately would have left drawing code in an intermediate duplicated state.

## Known Stubs

None. `drawScorecardToContext` is fully wired. Both functions return real PNG data URLs from Canvas draws. No placeholder values.

## Self-Check: PASSED

- web/assessment-engine.js: FOUND
- Commit de28e2f: verified via `git log --oneline -1`
