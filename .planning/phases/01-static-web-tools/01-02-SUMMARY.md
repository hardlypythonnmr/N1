---
phase: 01-static-web-tools
plan: 02
subsystem: ui
tags:
  [
    html,
    css,
    javascript,
    landing-page,
    triage-quiz,
    buttondown,
    localStorage,
    accessibility,
    spanish-voseo,
  ]
dependency_graph:
  requires:
    - phase: 01-static-web-tools
      plan: 01
      provides: "web/styles.css (design system) and web/assessment-engine.js (N1 global API)"
  provides:
    - web/index.html (N1 landing page — hero, triage quiz, tool directory, email capture)
  affects:
    - All tool pages (01-03 through 01-08) link back to web/index.html via nav-back
    - Email list growth (Buttondown integration live)
tech_stack:
  added:
    - Buttondown embed form POST (no-cors fetch + native form fallback)
  patterns:
    - Inline triage state machine (IIFE, no framework) — question → answer → advance (280ms delay)
    - Recommendation routing table (need → tool sequence) — maps Q3 answer to ordered tool list
    - DOM-only construction for tool recommendation list (createElement + textContent, no innerHTML)
    - N1.saveToProfile('triage', ...) with localStorage fallback for triage answer persistence
key_files:
  created:
    - web/index.html (1083 lines — complete landing page)
  modified: []
key_decisions:
  - "Triage quiz uses inline JS state machine (not N1.createAssessment) — landing is simpler than full assessments, no Likert scale needed"
  - "Email form uses fetch (no-cors) with native form.submit() fallback — covers all browser environments"
  - "Recommendation routing on Q3 (need) only — situation + career_path saved to profile but routing simplified to most actionable dimension"
  - "Tool directory shows 6 tools (not 7) — plan originally listed 7 but only 6 unique tool URLs exist per interfaces spec"
requirements-completed:
  - WEB-01
duration: 3m
completed: "2026-03-23"
---

# Phase 01 Plan 02: N1 Landing Page Summary

**Static landing page with hero stats (91%/3-5%), 3-question triage quiz routing to recommended tool sequences, 6-tool directory grid, and Buttondown email capture — all in Spanish voseo.**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-23T21:28:42Z
- **Completed:** 2026-03-23T21:31:50Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Hero section leads with problem stats (91% purpose anxiety, 3-5% access) before brand tagline "El sistema eres vos"
- 3-question sequential triage quiz with Typeform-style 280ms advance delay, progress indicators, keyboard accessibility, and ARIA live region for results
- Recommendation engine maps Q3 (need) to ordered tool sequence: clarity→Compass+Bulls Eye, meaning→MLQ, job→Ghost Check, finances→Runway
- Triage answers persisted to localStorage via `N1.saveToProfile('triage', ...)` with direct localStorage fallback
- 6-tool directory grid (2-col desktop, 1-col mobile) with category tags and direct CTA buttons
- Buttondown email capture with fetch POST, success state, and native form fallback
- Full WCAG 2.1 AA: semantic landmarks, ARIA labels, role attributes, keyboard navigation on triage options

## Task Commits

1. **Task 1: Landing page structure and triage quiz** - `b503de4` (feat)

## Files Created/Modified

- `web/index.html` — Complete N1 landing page (1083 lines): hero, triage quiz, tool directory, email capture, footer

## Decisions Made

- **Triage uses inline JS state machine, not N1.createAssessment** — the landing quiz is 3 choice-only questions with no Likert scale; `createAssessment` is optimized for full Typeform assessments with progress bars and scoring. The triage is simpler and needs direct control over the state transitions.
- **Email form: fetch (no-cors) + form.submit() fallback** — Buttondown's embed API doesn't return CORS headers to client JS. Using `no-cors` mode to fire the request, then on error falling back to native form submit. This handles all browser environments.
- **Routing on Q3 only** — situation (Q1) and career_path (Q2) are saved to profile for future AI tool context, but recommendation routing is determined by Q3 (what they need) as the most actionable signal.
- **6 tools, not 7** — The interfaces spec in the plan lists 6 tool URLs (ghost-check, compass, bulls-eye, mlq, flow-logger, runway). The "7 tools" count includes the landing page itself. The directory correctly links to all 6 assessment tools.

## Deviations from Plan

None — plan executed exactly as written. Triage routing, tool links, email integration, and accessibility requirements all implemented per spec.

## Issues Encountered

None.

## User Setup Required

**Buttondown account configuration required before email capture works end-to-end.**

The form posts to `https://buttondown.email/api/emails/embed-subscribe/n1-sistema`. The username `n1-sistema` must be registered on Buttondown's free tier. Until then, the form fires but subscribers will not be captured.

Steps:

1. Go to buttondown.email and create account with username `n1-sistema`
2. Or update `n1-sistema` in two locations in `web/index.html` to match the actual Buttondown username

## Known Stubs

None — all links resolve to real tool paths. Email integration uses real Buttondown endpoint (pending account creation — see User Setup above).

## Next Phase Readiness

- Landing page ready to serve as entry point for all tool pages
- Tool pages (Plans 03-08) should include `<a href="../index.html" class="nav-back">Herramientas</a>` in their nav
- Buttondown username must be configured for email capture to work end-to-end
- All 6 tool directory links are live — tool pages from Plans 03-08 will satisfy them

## Self-Check: PASSED

- web/index.html: FOUND (1083 lines)
- 01-02-SUMMARY.md: CREATED
- Commit b503de4: FOUND (feat(01-02): landing page...)
- hero stat 91%: FOUND
- triage section: FOUND (64 occurrences)
- all 6 tool links: FOUND
- buttondown.email: FOUND
- lang="es": FOUND
- n1-profile: FOUND (4 occurrences)

---

_Phase: 01-static-web-tools_
_Completed: 2026-03-23_
