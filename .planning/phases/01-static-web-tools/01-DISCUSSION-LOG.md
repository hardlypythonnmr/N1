# Phase 1: Static Web Tools - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-03-23
**Phase:** 01-static-web-tools
**Areas discussed:** Visual design system, Assessment UX flow, Scorecard & sharing, Landing page & triage, Ghost Check specifics, Chart library choice, localStorage strategy, Accessibility & i18n

---

## Visual Design System

| Option               | Description                                                        | Selected |
| -------------------- | ------------------------------------------------------------------ | -------- |
| Single styles.css    | One file with CSS custom properties. Simple, no build step.        | Yes      |
| Tailwind via CDN     | Utility-first, adds external dependency.                           |          |
| CSS modules per tool | Scoped CSS per tool. More isolation but harder to stay consistent. |          |

**User's choice:** Single styles.css
**Notes:** Recommended option. No build step aligns with static GitHub Pages deployment.

| Option           | Description                            | Selected |
| ---------------- | -------------------------------------- | -------- |
| Light only       | Professional, N1 orange pops on white. | Yes      |
| Dark only        | Modern developer feel.                 |          |
| Both with toggle | More CSS work but accessible.          |          |

**User's choice:** Light only

| Option              | Description                       | Selected |
| ------------------- | --------------------------------- | -------- |
| Centered card       | Max-width 640px, Typeform-like.   | Yes      |
| Full-width sections | More immersive, harder on mobile. |          |
| Sidebar + content   | More complex.                     |          |

**User's choice:** Centered card

---

## Assessment UX Flow

| Option                    | Description                               | Selected |
| ------------------------- | ----------------------------------------- | -------- |
| One question per screen   | Typeform-style, focused, mobile-friendly. | Yes      |
| All questions on one page | Traditional survey. Simpler to build.     |          |
| Grouped by subscale       | 3-4 questions per page. Middle ground.    |          |

**User's choice:** One question per screen

| Option                        | Description                            | Selected |
| ----------------------------- | -------------------------------------- | -------- |
| Visual chart + interpretation | Chart + sentences + download + export. | Yes      |
| Score only                    | Numbers and brief summary.             |          |
| Detailed report               | Full report with citations.            |          |

**User's choice:** Visual chart + interpretation

| Option           | Description                       | Selected |
| ---------------- | --------------------------------- | -------- |
| Yes, back button | Navigate back, answers preserved. | Yes      |
| No going back    | More valid psychometrically.      |          |

**User's choice:** Yes, back button

---

## Scorecard & Sharing

| Option                       | Description                                          | Selected |
| ---------------------------- | ---------------------------------------------------- | -------- |
| Branded card with chart      | N1 orange header, chart, scores, footer. 1200x628px. | Yes      |
| Minimal score badge          | Small badge, less informative.                       |          |
| Full results page screenshot | Most complete but large file.                        |          |

**User's choice:** Branded card with chart

| Option                            | Description                        | Selected |
| --------------------------------- | ---------------------------------- | -------- |
| Download PNG + copy LinkedIn text | Two buttons for download and copy. | Yes      |
| Direct LinkedIn share             | Share dialog, no image attachment. |          |
| Download only                     | User handles sharing.              |          |

**User's choice:** Download PNG + copy LinkedIn text

---

## Landing Page & Triage

| Option                  | Description                                            | Selected |
| ----------------------- | ------------------------------------------------------ | -------- |
| 3-question flow         | Situation → career path → need → recommended sequence. | Yes      |
| Single question         | Just situation with 3 options.                         |          |
| No quiz, just directory | List all tools.                                        |          |

**User's choice:** 3-question flow

| Option             | Description                      | Selected |
| ------------------ | -------------------------------- | -------- |
| Problem-first hero | Stats → solution → CTA.          | (mixed)  |
| Brand-first hero   | Philosophy → what it does → CTA. | (mixed)  |
| Tool-first hero    | Free tools → grid → pick one.    | (mixed)  |

**User's choice:** Mix of all three, problem focus first
**Notes:** Hero leads with problem stats, then brand philosophy, then tools CTA.

| Option                      | Description               | Selected |
| --------------------------- | ------------------------- | -------- |
| Landing page + tool results | Both locations.           | Yes      |
| Landing page only           | One prominent form.       |          |
| Tool results only           | After experiencing value. |          |

**User's choice:** Landing page + tool results

---

## Ghost Check Specifics

| Option               | Description                        | Selected |
| -------------------- | ---------------------------------- | -------- |
| Signal-based scoring | 8-12 binary signals, score 0-100.  | Yes      |
| Weighted categories  | Categories with different weights. |          |
| ML-style classifier  | Needs training data.               |          |

**User's choice:** Signal-based scoring

| Option       | Description                          | Selected |
| ------------ | ------------------------------------ | -------- |
| Paste text   | Large textarea for job posting text. | Yes      |
| Paste URL    | Needs server-side fetch.             |          |
| Both options | URL needs CORS proxy.                |          |

**User's choice:** Paste text

---

## Chart Library Choice

| Option           | Description                                      | Selected |
| ---------------- | ------------------------------------------------ | -------- |
| Chart.js via CDN | Simple API, great radar charts, small footprint. | Yes      |
| Vanilla Canvas   | No dependency, significant code.                 |          |
| D3.js            | Most powerful, overkill.                         |          |

**User's choice:** Chart.js via CDN

---

## localStorage Strategy

| Option                | Description                                          | Selected |
| --------------------- | ---------------------------------------------------- | -------- |
| Single n1-profile key | One JSON object matching Profile Interchange Format. | Yes      |
| Per-tool keys         | Fragmented but isolated.                             |          |
| Versioned storage     | Migration-ready but complex.                         |          |

**User's choice:** Single n1-profile key

---

## Accessibility & i18n

| Option                       | Description                               | Selected |
| ---------------------------- | ----------------------------------------- | -------- |
| Spanish-first, English terms | Colombian voseo, English technical terms. | Yes      |
| Bilingual toggle             | User switches language. More work.        |          |
| English-first                | Broader reach, misaligned with beachhead. |          |

**User's choice:** Spanish-first, English terms

| Option           | Description                                  | Selected |
| ---------------- | -------------------------------------------- | -------- |
| Basic a11y       | Semantic HTML, ARIA, keyboard nav, contrast. | Yes      |
| Full WCAG 2.1 AA | Complete compliance. More effort.            |          |
| Minimal          | Semantic HTML only.                          |          |

**User's choice:** Basic a11y

---

## Claude's Discretion

- CSS custom property names and extended color palette
- Animation/transition details
- Progress bar styling
- Mobile breakpoints
- Chart.js config options and color schemes
- Likert scale visual styling
- localStorage error handling

## Deferred Ideas

None — discussion stayed within phase scope.
