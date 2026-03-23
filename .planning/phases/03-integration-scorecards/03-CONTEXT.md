# Phase 3: Integration + Scorecards - Context

**Gathered:** 2026-03-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Wire together the Phase 1 web tools with scorecards, a profile synthesizer page, and email capture on tool completion screens. Assessment results become visually shareable, cross-dimension insights are surfaced, and email capture is live everywhere.

Deliverables: Enhanced scorecard generation in assessment-engine.js, profile synthesizer page (web/profile/index.html), email capture integration into all tool completion screens.

</domain>

<decisions>
## Implementation Decisions

### Scorecard Library

- **D-01:** Extend existing `web/assessment-engine.js` — `N1.generateScorecard()` already works. Add per-tool customization options (chart type, color scheme, data layout). No separate file.
- **D-02:** Carrying forward from Phase 1: 1200x628px Canvas PNG, N1 orange header, "Built with N1 — el sistema eres tu" footer. Download + Copy LinkedIn text buttons.

### Profile Synthesizer Page

- **D-03:** Interactive explorer — users click into each dimension to see details, toggle views, compare dimensions. Radar chart overlay of all dimensions as entry point.
- **D-04:** Cross-dimension insight generation: reinforcement detection (values + strengths alignment), conflict detection (values vs current path), career path recommendation based on profile data.
- **D-05:** Import: auto-detect localStorage `n1-profile` key. If data exists, load automatically. Fallback: "Paste your profile YAML" textarea for skill users. Covers both web tool and AI skill users.
- **D-06:** Outputs: full YAML export button, System Template .md download (for Claude Projects), and a full-profile summary scorecard.

### Email Capture Integration

- **D-07:** Subtle inline section below results on every tool completion screen: "Recibe insights de carrera cada semana" with email input + submit. Same Buttondown form POST as landing page. Doesn't interrupt results.
- **D-08:** Same Buttondown free tier (`n1-sistema`). Simple form POST with fetch + fallback. Success state shows brief confirmation.

### Claude's Discretion

- Specific per-tool scorecard customization options (color schemes, layout variants)
- Radar chart configuration for multi-dimension overlay
- Reinforcement/conflict detection algorithm logic
- Career path recommendation rules
- Interactive explorer transitions and navigation
- System Template .md format and content

</decisions>

<canonical_refs>

## Canonical References

### Existing Code (MUST read before modifying)

- `web/assessment-engine.js` — Existing N1.generateScorecard(), N1.saveToProfile(), N1.loadProfile() functions
- `web/styles.css` — Shared CSS design system
- `web/index.html` — Landing page with Buttondown email form (reference pattern)
- `web/ghost-check/index.html` — Example tool with results screen (integration target)
- `web/compass/index.html` — Example tool with Chart.js radar (integration target)
- `web/bulls-eye/index.html` — Example tool with Canvas drawing (integration target)
- `web/mlq/index.html` — Example tool with Canvas quadrant (integration target)
- `web/flow-logger/index.html` — Example tool with scatter chart (integration target)
- `web/runway/index.html` — Example tool with bar chart (integration target)

### Foundation

- `shared/profile-format.md` — Profile schema (synthesizer must understand all fields)
- `shared/voice-guide.md` — Spanish copy for email CTA and synthesizer text
- `shared/research-base.md` — Citations for synthesizer interpretations

### Phase 1 Design Decisions

- `.planning/phases/01-static-web-tools/01-CONTEXT.md` — D-09, D-10, D-13, D-14, D-18, D-19

</canonical_refs>

<code_context>

## Existing Code Insights

### Reusable Assets

- `N1.generateScorecard(config)` in assessment-engine.js — already renders 1200x628 Canvas
- `N1.loadProfile()` — reads localStorage `n1-profile` key
- `N1.generateYAML(profile)` — produces YAML string from profile object
- Chart.js CDN already loaded in all tools
- Buttondown form pattern exists in web/index.html

### Established Patterns

- All tools use `web/styles.css` + `web/assessment-engine.js`
- Results sections use `.card` container with action buttons
- Profile data stored under single `n1-profile` localStorage key

### Integration Points

- Each tool's results section needs email capture form added
- Profile synthesizer reads `n1-profile` from localStorage OR accepts YAML paste
- Scorecard enhancements go into assessment-engine.js (single source)

</code_context>

<specifics>
## Specific Ideas

- Interactive explorer: click a dimension card to expand details, radar chart as hub visualization
- Reinforcement example: "Your values (Self-Direction, Achievement) and your top strengths (creativity, perseverance) both point toward independent work"
- System Template .md: downloadable markdown file user can add to their Claude Project for persistent context

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

_Phase: 03-integration-scorecards_
_Context gathered: 2026-03-23_
