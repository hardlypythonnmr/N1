# Phase 1: Static Web Tools - Context

**Gathered:** 2026-03-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Build 7 static web assessment tools + landing page with triage quiz. Pure HTML/CSS/JS on GitHub Pages. No build step, no framework, no backend. Each tool is a self-contained `index.html` that loads shared CSS and exports profile data as YAML.

Tools: Landing page + triage, Ghost Check, Compass/CAAS-12, Bull's Eye, MLQ-10, Flow Logger, Runway Calculator.

</domain>

<decisions>
## Implementation Decisions

### Visual Design System

- **D-01:** Single `web/styles.css` file with CSS custom properties for theming. No Tailwind, no CSS framework.
- **D-02:** Light mode only. N1 orange (#E85D26) pops on white backgrounds. Matches LinkedIn sharing context.
- **D-03:** Centered card layout — max-width 640px centered container. Clean, focused, Typeform-like.
- **D-04:** Brand typography: Space Mono for headings, DM Sans for body. Load via Google Fonts CDN.
- **D-05:** Basic accessibility: semantic HTML, ARIA labels on interactive elements, keyboard navigation for assessments, sufficient color contrast (WCAG 2.1 AA basics).

### Assessment UX Flow

- **D-06:** One question per screen, Typeform-style. Progress bar at top. Keyboard navigation (arrow keys, enter to advance).
- **D-07:** Users can go back to change answers. Back button visible. Answers preserved when navigating.
- **D-08:** Results page: visual chart (Chart.js) + 2-3 sentence interpretation per dimension. Scorecard download button. Profile YAML export button.

### Scorecard & Sharing

- **D-09:** Branded scorecard card: N1 orange header, chart visualization, key scores, "Built with N1 — el sistema eres tu" footer. 1200x628px for LinkedIn optimization. Generated via HTML Canvas → PNG.
- **D-10:** Two sharing buttons: "Download scorecard" (PNG download) and "Copy LinkedIn post" (pre-written text with score copied to clipboard). User pastes manually on LinkedIn.

### Landing Page & Triage

- **D-11:** Hero mixes problem-first, brand, and tool approaches — leads with stats/problem ("91% experience purpose anxiety. 3-5% get professional help."), then brand philosophy ("el sistema eres tu"), then CTA to tools.
- **D-12:** 3-question triage flow: Q1 situation (crisis/exploration/growth) → Q2 career path (stay/move/independent/pause) → Q3 what do you need? → Recommended tool sequence displayed.
- **D-13:** Email capture appears on landing page ("Get career insights weekly" — subtle form) AND after completing any assessment tool (CTA at results screen).
- **D-14:** Email provider: Buttondown free tier. Simple form POST integration, no JS SDK needed.

### Ghost Check

- **D-15:** Signal-based scoring: 8-12 binary signals (reposted 3+ times, no salary range, vague role description, unrealistic requirements, etc). Each signal adds points. Total = ghost score 0-100.
- **D-16:** Input: large textarea where user pastes full job posting text. No URL input (not feasible on static site).
- **D-17:** Reference existing n1-companion Ghost Check implementation for signal list and scoring logic.

### Chart Library

- **D-18:** Chart.js via CDN for all visualizations (radar charts for CAAS, bar charts for scores, quadrant plots for MLQ). Simple API, small footprint, covers all N1 chart types.

### localStorage Strategy

- **D-19:** Single `n1-profile` key in localStorage containing one JSON object matching the Profile Interchange Format schema. Each tool reads/writes its section of this object. Profile synthesizer reads the whole thing.

### Language & Accessibility

- **D-20:** Spanish-first UI. Colombian voseo ("vos podés", "tu carrera"). English for technical terms (CAAS, Big Five, Flow, MLQ). Matches voice guide.
- **D-21:** Basic a11y: semantic HTML, ARIA labels, keyboard navigation, color contrast per WCAG 2.1 AA basics.

### Claude's Discretion

- Specific CSS custom property names and color palette values (beyond #E85D26 orange)
- Animation and transition details
- Exact progress bar styling
- Mobile breakpoint values
- Chart.js configuration options and chart color schemes
- Specific Likert scale visual styling (radio buttons vs slider vs custom)
- Error handling for localStorage (full, unavailable, etc.)

</decisions>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Foundation Files

- `shared/profile-format.md` — Profile Interchange Format YAML schema (tools must export this format)
- `shared/profile-template.yaml` — Blank template showing all fields
- `shared/voice-guide.md` — N1 voice, Colombian voseo, anti-corporate tone (for all user-facing copy)
- `shared/safety-protocol.md` — MIND-SAFE crisis detection, scope disclaimers (must appear on relevant tools)
- `shared/research-base.md` — Framework citations and stats for tool copy

### Existing Implementations

- `C:\n1-companion\app\web\src\lib\ghost-check.ts` — Existing Ghost Check scoring logic to port
- `C:\n1-companion\app\web\src\lib\tools\compass-full.ts` — Existing Compass/CAAS implementation to reference

### Plans

- `plans/EXECUTION-PLAN.md` §Phase 1 (lines 159-269) — Detailed task breakdown per tool
- `plans/MASTER-PLAN-v2.md` §Career Path Taxonomy (lines 528-588) — Complete taxonomy for Runway Calculator context
- `plans/FRAMEWORK-ARCHITECTURE.md` §Layer 3 (lines 218-389) — Assessment instrument details per dimension

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- Ghost Check scoring logic exists in n1-companion — can be ported to vanilla JS
- Compass/CAAS scoring exists in n1-companion — reference for instrument administration
- Brand colors defined in n1-companion brand/colors.json

### Established Patterns

- No existing static web patterns — this is greenfield for the static tools
- Profile Interchange Format defined in Phase 0 shared/profile-format.md

### Integration Points

- Each tool writes to localStorage under `n1-profile` key
- Each tool links back to landing page
- Landing page links to all tools
- Email capture embeds Buttondown form

</code_context>

<specifics>
## Specific Ideas

- Typeform-like one-question-per-screen UX for all assessments
- LinkedIn-optimized 1200x628px scorecards with N1 branding
- Pre-written LinkedIn post text copied to clipboard alongside scorecard download
- 3-question triage quiz routing users to recommended tool sequence
- Hero section leads with stats ("91% purpose anxiety") then brand then tools

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

_Phase: 01-static-web-tools_
_Context gathered: 2026-03-23_
