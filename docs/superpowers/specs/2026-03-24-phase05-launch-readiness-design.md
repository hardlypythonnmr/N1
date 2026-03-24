# Phase 05 — N1 Launch Readiness: Design Spec

**Date:** 2026-03-24
**Status:** Approved
**Scope:** Web tools only (skills/GPTs excluded — separate milestone)

---

## Context

N1 is a static career strategy web app (8 pages, pure HTML/CSS/JS, GitHub Pages) currently
in pre-launch validation. The owner is testing the app before sharing it publicly. Phase 05
makes the app solid enough to share: fixing all known bugs, clarifying assessment UX, then
adding features that support virality and retention.

---

## Structure

Two sequential plans. Plan 1 must be verified before Plan 2 begins.

---

## Plan 1 — Fixes + Assessment Clarity

### Bug Fixes (7 issues from QA Run 4)

| #   | Issue                                                                                                                                      | File                              | Fix                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | Profile 4th nav item shows "Compass" instead of consistent nav                                                                             | `web/profile/index.html`          | Replace with standard Inicio/Herramientas/Perfil/Compass pattern matching other tool pages      |
| 2   | Profile KPI label "Propósito & Sentido" wraps to two lines                                                                                 | `web/profile/index.html`          | Shorten label to "Propósito" or apply `whitespace-nowrap text-xs`                               |
| 3   | Landing bottom nav "Inicio" → `#inicio` — `#inicio` is a valid same-page anchor but inconsistent with `index.html` used on all other pages | `web/index.html`                  | Change to `index.html` for cross-page consistency; the `#inicio` section ID remains untouched   |
| 4   | Flow Logger sliders range 1–5, schema expects 1–10                                                                                         | `web/flow-logger/index.html`      | Change slider `max` from 5 to 10, update value display labels, re-map stored values accordingly |
| 5   | Bottom nav z-50 intercepts pointer events on content behind it on mobile                                                                   | All tool pages + `web/styles.css` | Add `pb-24` to all `<main>` page content areas via shared `.page-content` utility class         |
| 6   | Flow Logger localStorage writes `activity` key and `state` key; profile schema expects `name` and `zone`                                   | `web/flow-logger/index.html`      | Update all storage writes: `activity` → `name`, `state` → `zone`                                |
| 7   | Profile page has two `<h2>` elements (breaks accessibility heading hierarchy)                                                              | `web/profile/index.html`          | Demote second `<h2>` to `<h3>`                                                                  |

### Assessment Clarity

Add a `¿Cómo usar esta escala?` instruction block **permanently visible** above the first question/slider in each assessment (always shown, not toggled — simplest implementation, no session state needed).

The block must:

- Be visually subtle — small inline info card, not a modal or blocker
- Explain scale endpoints explicitly per tool (see below)
- Include: "No hay respuestas correctas o incorrectas."

**Per-tool copy and placement:**

| Tool                       | Placement                            | Scale explanation                                                                                                                                                   |
| -------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `web/mlq/index.html`       | Above question 1 of the 10-item flow | "1 = Totalmente en desacuerdo · 7 = Totalmente de acuerdo. Respondé según cómo te sentís ahora, no cómo querés sentirte."                                           |
| `web/compass/index.html`   | Above question 1 of the CAAS-12      | "1 = Casi nunca · 5 = Casi siempre. Pensá en cómo te comportás en tu carrera en general."                                                                           |
| `web/bulls-eye/index.html` | Above the sliders section            | "Cada slider refleja qué tan alineada está esa área de tu vida con lo que realmente valorás. 1 = muy lejos de lo que querés · 10 = exactamente donde querés estar." |

### Empty State Copy

Profile page when `n1-profile` is absent from localStorage or all dimensions are `completed: false`:

- Replace bare "—" values with a styled empty state card
- Copy: "Completá al menos una herramienta para ver tu perfil. Cada herramienta agrega una dimensión nueva."
- CTA button → `index.html#herramientas`
- Empty state hides automatically when profile data loads

### Plan 1 Success Criteria (discrete, testable)

| Test               | Pass condition                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Bug fix #1         | Profile bottom nav 4th item label matches pattern on other tool pages                                             |
| Bug fix #2         | Profile KPI label renders on a single line at 1100px viewport                                                     |
| Bug fix #3         | Landing "Inicio" href attribute equals `index.html`                                                               |
| Bug fix #4         | Flow Logger challenge and skill sliders have max=10; stored values in localStorage are in 1–10 range              |
| Bug fix #5         | Tapping a CTA button at bottom of any tool page registers click (not intercepted by nav) at 375px viewport        |
| Bug fix #6         | Flow Logger localStorage object has keys `name` and `zone`, not `activity` and `state`                            |
| Bug fix #7         | Profile page has exactly one `<h2>` element                                                                       |
| Assessment clarity | MLQ-10, Compass, Bull's Eye each show instruction block before first question/slider                              |
| Empty state        | Profile page with empty localStorage shows empty state card and CTA; card disappears when profile data is present |

---

## Plan 2 — New Features

### A — Email Capture Wired to Tools

**Trigger:** Called once when results screen is first rendered in any of the 7 tools.

**Behavior:**

- Check `localStorage.getItem('n1-email-captured')` — if `'true'`, do nothing
- Otherwise render a dismissible banner at the top of the results section:
  - Copy: "¿Querés recibir un correo por semana sobre carrera? Sin spam."
  - Elements: email `<input>` + "Suscribirme" `<button>` + "No, gracias" `<a>` link
- On submit: Buttondown fetch no-cors to `https://api.buttondown.email/v1/subscribers` with `tag=tool-completion`, then `form.submit()` fallback
- On submit button click OR dismiss click: immediately call `localStorage.setItem('n1-email-captured', 'true')` BEFORE the fetch/form.submit() — set on submit attempt, not on confirmed delivery. Buttondown no-cors fetch always resolves opaque; there is no success/failure signal, so setting the flag on response would mean it never gets set. Same rule applies to retrofitted ghost-check and runway forms.

**Existing email sections:** ghost-check and runway already have hardcoded Buttondown email forms in their results sections. For these two tools: retrofit existing form submit handler to call `localStorage.setItem('n1-email-captured', 'true')` on submit — do not add a second banner. For the remaining 5 tools (compass, bulls-eye, mlq, flow-logger, profile): add `N1.showEmailCaptureBanner(containerEl)` call at results render.

**Implementation:** `N1.showEmailCaptureBanner(containerEl)` added to `web/assessment-engine.js`. Each of the 5 tools without existing email forms calls it from the results render function, passing the results container element. Ghost-check and runway retrofit their existing submit handlers only.

### B — Progress Tracking

**Trigger:** Computed on DOMContentLoaded in landing and profile pages only.

**Completion key map (all 7 tools):**

| Tool        | Completion signal                                                                                                                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ghost Check | `localStorage.getItem('n1-ghost-completed') === 'true'` — **ghost-check must call `localStorage.setItem('n1-ghost-completed','true')` inside `renderResults()` when results section is first rendered (currently missing)**                                 |
| Compass     | `calcDimensionScores(profile).identity > 0` — non-zero identity score derived from CAAS-12 data                                                                                                                                                             |
| Bull's Eye  | `calcDimensionScores(profile).values > 0` — non-zero values score derived from bulls_eye data                                                                                                                                                               |
| MLQ-10      | `calcDimensionScores(profile).purpose > 0` — non-zero purpose score derived from MLQ data                                                                                                                                                                   |
| Flow Logger | `JSON.parse(localStorage.getItem('n1-flow-activities') \|\| '[]').length > 0`                                                                                                                                                                               |
| Runway      | `localStorage.getItem('n1-runway-completed') === 'true'` — **runway must call `localStorage.setItem('n1-runway-completed','true')` inside `showResults()` which is called after `renderResults()` to make the results section visible (currently missing)** |
| Profile     | `N1.getCompletionCount().completed >= 1` — profile "completes" when any tool does                                                                                                                                                                           |

Note: Compass/Bull's Eye/MLQ-10/Flow Logger signals use `calcDimensionScores()` output (non-zero) rather than the `completed` boolean flag, because static web tool users may have non-null score data without the `completed` flag being set (that flag is written by AI skills). The `completed` flag gates on skills usage; score data gates on web tool usage.

**Behavior:**

- `N1.getCompletionCount()` returns `{ completed: N, total: 7 }`
- Landing hero section: badge "N/7 herramientas completadas" — hidden if N === 0
- Profile header: same badge

### C — Profile Cross-Dimension Scoring

**Score derivation:** `computeProfileClarity()` calls `calcDimensionScores(profile)` (already defined in `web/profile/index.html`) and receives `{values, strengths, identity, purpose}`. These are already normalized to comparable 0–100 ranges:

| Dimension                | `calcDimensionScores()` key | Output range | Notes                                                                                                                                                                                                                   |
| ------------------------ | --------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Valores (Bull's Eye)     | `.values`                   | 0–100        | avg of bulls_eye sliders (1–10 range) / 10 × 100. Falls back to avg of Schwartz profile values / 9 × 100 if bulls_eye is null. Both denominators are already handled by `calcDimensionScores` — output is always 0–100. |
| Identidad (Compass)      | `.identity`                 | 0–100        | avg of CAAS-12 adaptability subscores / 5 × 100                                                                                                                                                                         |
| Propósito (MLQ-10)       | `.purpose`                  | 0–100        | avg of MLQ presence+search / 7 × 100                                                                                                                                                                                    |
| Fortalezas (Flow Logger) | `.strengths`                | 0–10         | count of activities, capped at 10 — multiply ×10 to normalize to 0–100                                                                                                                                                  |

`calcDimensionScores()` is defined in `web/profile/index.html` and must be extracted to `web/assessment-engine.js` as a shared utility so `computeProfileClarity()` can call it from any page.

**Normalization step (applied inside `computeProfileClarity()` before any averaging or spread calculation):**

```
scores.strengths = scores.strengths * 10  // 0-10 → 0-100
// values, identity, purpose already 0-100, no conversion needed
```

This must happen before averaging and before tension spread comparison. If strengths is not multiplied before the spread check, a strengths value of 8 would compare as 8 vs values of 65, falsely triggering tension.

**Formula:** `claridad = sum(normalizedScore) / count(non-zero scores)` — equal weight, averaged only over non-zero dimensions.
Partial profiles: average only over dimensions with non-zero scores. Label shows "Basado en X/4 dimensiones completadas."

**Zero-dimension case:** If all four `calcDimensionScores()` values are 0, the Claridad card is hidden entirely (not shown as 0%).

**Tension detection:**

- Only runs if ≥ 2 dimensions have non-zero derived scores
- Finds the pair with the largest spread
- If spread > 30 points: renders one insight card with the specific dimension names and their scores
- If spread ≤ 30 or < 2 dimensions: tension card is hidden

**Implementation:** `N1.computeProfileClarity()` added to `web/assessment-engine.js`. Returns `{ score: N, basedOn: N, tension: { high: string, low: string, spread: N } | null }`.

**Schema note:** `computeProfileClarity()` reads existing `n1-profile` fields only. No new keys added to profile-format.md — schema version stays at v1.

### D — Result Sharing (LinkedIn Deep-Link)

**Verdict string per tool (used as pre-filled share text):**

| Tool        | Verdict source              | Share text template                                                                            |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| Ghost Check | `score` + `verdict` text    | "Analicé una oferta con Ghost Check de N1 y obtuve un score de {score}/100. {verdict}. {url}"  |
| Compass     | `dimensions.identity.label` | "Mi adaptabilidad de carrera (CAAS-12) es {label} — {score}/5 en identidad profesional. {url}" |
| Bull's Eye  | `dimensions.values.score`   | "Mi alineación de valores está al {score}%. {url}"                                             |
| MLQ-10      | `dimensions.purpose.label`  | "Mi propósito de vida: {label} — Presencia {p}/7, Búsqueda {b}/7. {url}"                       |
| Flow Logger | Top zone from activities    | "Mi zona de rendimiento predominante es {topZone}. {url}"                                      |
| Runway      | `scenarios.probable.months` | "Tengo {months} meses de runway financiero para una transición. {url}"                         |
| Profile     | `clarityScore`              | "Mi claridad de perfil N1 es del {score}%. {url}"                                              |

`{url}` = `https://hardlypythonnmr.github.io/N1/`

**Behavior:**

- Button label: "Compartir en LinkedIn"
- Opens: `https://www.linkedin.com/sharing/share-offsite/?url=<encoded-N1-url>&summary=<encoded-text>` in new tab
- Falls back to URL-only share if verdict data is not yet available
- Placed in export section alongside existing Scorecard/YAML buttons
- Ghost Check already has a `#copy-linkedin` clipboard-copy button — keep it, add the URL share button as a second button labeled "Compartir en LinkedIn"
- Tools without any LinkedIn button (flow-logger, runway): add URL share button only
- Tools with existing clipboard-copy LinkedIn button (compass, bulls-eye, mlq, profile): add URL share button alongside, do not remove existing button

### Plan 2 Success Criteria (discrete, testable)

| Test                     | Pass condition                                                                 |
| ------------------------ | ------------------------------------------------------------------------------ |
| Email banner shown       | Banner renders on results screen of Ghost Check after analysis                 |
| Email banner suppressed  | Completing a second tool after dismissing banner on first tool shows no banner |
| Email banner submit      | Submitting email sets `n1-email-captured = 'true'` in localStorage             |
| Progress badge — zero    | Landing page shows no badge when localStorage is empty                         |
| Progress badge — partial | After completing Bull's Eye, landing shows "1/7 herramientas completadas"      |
| Progress badge — full    | After completing all 7, badge shows "7/7"                                      |
| Clarity score — partial  | Profile with 2/4 dimensions shows score with "Basado en 2/4 dimensiones" label |
| Clarity score — zero     | Profile with no completed dimensions shows no Claridad card                    |
| Tension card shown       | Profile with Valores=80 and Propósito=30 shows tension insight card            |
| Tension card hidden      | Profile with Valores=80 and Propósito=60 shows no tension card                 |
| LinkedIn button          | All 7 tool export sections contain a "Compartir en LinkedIn" button            |
| LinkedIn URL             | Clicking button opens new tab to linkedin.com/sharing/share-offsite URL        |

---

## Architecture Notes

- **No new CDN dependencies**
- **assessment-engine.js** gains 3 new public methods: `showEmailCaptureBanner(el)`, `getCompletionCount()`, `computeProfileClarity()`
- **`calcDimensionScores(profile)`** extracted from `web/profile/index.html` into `web/assessment-engine.js` as a shared utility — existing profile page call updated to use the shared version (no behavior change)
- **New localStorage keys:** `n1-email-captured` (string 'true'), `n1-ghost-completed` (string 'true'), `n1-runway-completed` (string 'true')
- **profile-format.md schema unchanged** — v1, no new keys required
- **XSS prevention maintained** — all DOM mutations use `textContent`/`createElement`

---

## Out of Scope

- Claude Skills deployment
- ChatGPT GPTs deployment
- Backend/server infrastructure
- User accounts or authentication
- Mobile app
