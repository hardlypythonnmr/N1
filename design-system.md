# N1 Design System

> Drop-in design specification. Paste into Claude Design, Figma, or any UI generator.
> Hybrid of cockpit.html's editorial structure + N1's orange accent identity.
> Version: 2.0 | 2026-04-21

---

## 1. Named vibe

**Editorial rigor + warm confidence + Spanish literary.**

Reads like a personal advisor's workbook, not a SaaS dashboard. Typography-first, data-whispered. Generous whitespace. Serif for narrative, monospace for metrics, display serif for the moments that matter.

Not: dense quant dashboard, corporate HR tool, playful consumer app.
Is: measured, readable, confident. Reads like the New Yorker or FT Weekend, not LinkedIn.

---

## 2. Typography

Google Fonts imports:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>
```

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Display | Playfair Display | 700, 900, italic 700 | Big verbs, regime/estado headlines, page hero |
| Body / narrative | Cormorant Garamond | 400, 500, 600, italic 400 | Paragraphs, ledes, narrative copy, captions |
| UI / metrics / labels | IBM Plex Mono | 300, 400, 500, 600 | Buttons, meta, metrics, timestamps, taxonomic labels |

**Font feature settings:** `font-feature-settings: "liga" 1, "kern" 1;` on body.
**Antialiasing:** `-webkit-font-smoothing: antialiased;` on html.

### Type scale

| Size (px) | Family | Weight | Use |
|-----------|--------|--------|-----|
| 10 | IBM Plex Mono | 400 | Section labels, taxonomic tags (uppercase, 0.32em letter-spacing) |
| 11 | IBM Plex Mono | 300-500 | Body mono, grid cells, metrics |
| 13 | Cormorant | 400 | Glossary entries, small body |
| 14 | Cormorant | 400 | Captions, notes |
| 15 | Cormorant | 400-500 | Dek (secondary headline), italic verbs |
| 17 | Cormorant | 400 | **Default body** |
| 18 | Playfair / Cormorant | 500-700 | Masthead title, big-verb label |
| 20 | Cormorant | 400 | Lede (opening paragraph) |
| 28 | Playfair | 700 | Key metrics (e.g., match score, runway months) |
| 42 | Playfair | 700 | Headline band (page H1 display) |
| 56 | Playfair | 700 italic | Drawer big-verb |

### Letter spacing

- Monospace labels (uppercase): `0.20em – 0.35em`
- Serif display: `-0.015em to 0.15em`
- Serif italics: used for verbs, emphasis, narrative tone

---

## 3. Color tokens

Dual-theme. Default: dark. Toggle persists in `localStorage["n1-theme"]`. Applied via `data-theme="dark"` or `"light"` on `<html>`.

### Dark theme (default)

```css
:root[data-theme="dark"] {
  --bg:          #1B1820;
  --bg-lift:     #23202A;
  --bg-card:     #23202A;
  --ink:         #F5F1E8;
  --ink-dim:     #8A829A;
  --ink-hush:    #4C4656;
  --accent:      #FF9068;  /* N1 orange — primary action, emphasis, verbs */
  --accent-deep: #FF7947;  /* N1 orange-deep — hover, press, gradients */
  --danger:      #C44536;  /* distinct warning color, not overloaded with accent */
  --lilac:       #E5DCEF;  /* secondary accent — used for HOLD / PREPARAR states */
  --line:        #2E2A38;  /* dividers, subtle borders */
  --rule:        #3A3544;  /* stronger borders, structural rules */
  --positive:    #8FBF9F;  /* success, uptrend, good-match */
  --negative:    #E76F51;  /* loss, downtrend, bad-match */
}
```

### Light theme

```css
:root[data-theme="light"] {
  --bg:          #F5F1E8;
  --bg-lift:     #FFFCF5;
  --bg-card:     #FFFCF5;
  --ink:         #1B1820;
  --ink-dim:     #4C4656;
  --ink-hush:    #8A829A;
  --accent:      #E8843A;  /* N1 orange darkened for light-bg contrast */
  --accent-deep: #D36826;
  --danger:      #B22D1E;
  --lilac:       #7D5AA3;
  --line:        #E4DFD1;
  --rule:        #C7BFAB;
  --positive:    #4A8F5A;
  --negative:    #C44536;
}
```

### Token roles

| Token | Semantic role | Typical usage |
|-------|---------------|---------------|
| `--bg` | Page background | body |
| `--bg-lift` | Elevated surfaces | panels, drawers |
| `--bg-card` | Card backgrounds | skill tiles, content cards |
| `--ink` | Primary text | headings, body default |
| `--ink-dim` | Secondary text | dek, meta, muted content |
| `--ink-hush` | Tertiary text | labels, timestamps |
| `--accent` | Primary action | CTAs, verb "APLICAR", match-bar fills |
| `--accent-deep` | Hover/press | button hover, gradient end |
| `--danger` | Warning/alert | ghost-job flag, drop-off alert |
| `--lilac` | Secondary state | verb "PREPARAR", reflective sections |
| `--line` | Subtle dividers | 1px borders, row separators |
| `--rule` | Structural borders | masthead top rule, section dividers |
| `--positive` | Good outcomes | match>70, response-rate up |
| `--negative` | Bad outcomes | match<40, response-rate down |

### Contrast

- Dark mode: `--ink` on `--bg` = 15:1 (WCAG AAA)
- Light mode: `--ink` on `--bg` = 15:1 (WCAG AAA)
- `--ink-dim` on bg: ~7:1 (WCAG AA)
- `--accent` on bg: ~4.5:1 (WCAG AA for UI, borderline for body text)

---

## 4. Spacing scale

```
2 / 4 / 6 / 8 / 10 / 14 / 20 / 28 / 36 / 48 / 56  (px)
```

Use:
- 2px: micro-gaps inside compact elements
- 4-6px: fine gaps in monospace grids
- 8-10px: label-to-content spacing
- 14-20px: section/panel padding
- 28-36px: heading/body vertical rhythm
- 48-56px: page-level padding

---

## 5. Radii

- `2px` — micro elements (tags, trust badge)
- `3px` — hover cards, small chips
- `8px` — soft cards (use sparingly; most N1 UI stays angular)
- `50%` — circular badges (match-score circles, rank dots)

Default feel: angular/geometric. Radii exist for focus readability, not decoration.

---

## 6. Shadows

```css
/* Hover-card */
box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);          /* light */
box-shadow: 0 6px 28px rgba(0, 0, 0, 0.42);          /* dark */

/* Drawer */
box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);         /* dark */
box-shadow: -8px 0 24px rgba(27, 24, 32, 0.12);      /* light */
```

Soft, distant shadows. No hard drop-shadows. Emphasize card hover, drawer slide; surface elevation is minimal otherwise.

---

## 7. Layout

### Container

```css
.body {
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 36px;
}
```

### Main content grid

2-column at ≥820px, single column below.

```css
.main {
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 48px;
}

@media (max-width: 820px) {
  .main {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
```

Left column: narrative, decision lists, skill tiles.
Right column: profile summary, next actions, momentum sidebar.

### Ledger grid (role/job tables)

4 columns: ticker/role (1.3fr), conviction/match (3fr), verb/acción (1fr), data (90px).
`gap: 4px 20px` — tight rows, breathable columns.

---

## 8. Motion

| Duration | Easing | Use |
|----------|--------|-----|
| 150ms | ease | Hover, border/color transitions |
| 250ms | ease | Theme switch, drawer slide, card state |
| 300ms | linear | Progress bar fill |
| 400ms | ease-out | Headline band transform, hero reveal |

No complex choreography. Keep motion functional.

---

## 9. Component patterns

### 9a. Masthead

Top rule: 3px double `--rule`. Bottom rule: 1px solid `--rule`. Padding 14px 0.
Flex row, space-between.
Contains: logo (Playfair 18px 700 uppercase, `letter-spacing: 0.15em`) · right group with estado-badge + date + theme toggle.

### 9b. Estado badge (semantic status)

Replaces cockpit's "trust badge" (data-freshness). For N1: last-activity + blocker state.

- `data-state="desbloqueado"` — border + color `--positive`
- `data-state="en-marcha"` — border + color `--accent`
- `data-state="estancado"` — border `--danger`, bg `rgba(196,69,54,0.08)`, color `--danger`
- Glyph options: ✓ healthy · ◐ attention · ✗ stuck
- 16px IBM Plex Mono, padding 3px 8px, border 1px, radius 2px, `cursor: help`

### 9c. Headline band

```html
<section class="headline-band">
  <p class="regime-pre">Estado · 21 Abril 2026</p>
  <h1 class="regime-head">
    Tu búsqueda está
    <span class="regime-word" data-regime="en-marcha">EN MARCHA</span>
  </h1>
  <p class="regime-mech">Última actividad hace 2 días · 4 aplicaciones esta semana</p>
</section>
```

`.regime-pre`: 10px mono, `0.32em` spacing, uppercase, `--ink-hush`.
`.regime-head`: 42px Playfair 700, `line-height: 1.08`.
`.regime-word`: italic Playfair, colored by `data-regime`:
- `desbloqueado` → `--positive`
- `en-marcha` → `--accent`
- `estancado` → `--danger`
- `preparando` → `--lilac`
- `negociando` → `--accent-deep`
`.regime-mech`: 11px mono 300, lowercase, `--ink-dim`.

### 9d. Story section (narrative + lists)

```css
.story h2 {
  font: 400 10px IBM Plex Mono;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ink-hush);
  border-bottom: 1px solid var(--line);
  padding-bottom: 8px;
  margin-bottom: 20px;
}
.story .lede { font: 400 20px/1.5 "Cormorant Garamond"; color: var(--ink); }
.story .dek  { font: 400 15px/1.6 "Cormorant Garamond"; color: var(--ink-dim); }
```

### 9e. Skill tile (NEW — replaces old choice-option)

Renders a skill in the router grid.

```html
<a class="skill-tile" data-skill="get-interviews" href="...">
  <span class="st-label">Skill 01</span>
  <h3 class="st-name">Get Interviews</h3>
  <p class="st-tagline">Aplicás y nadie te contesta. Arreglamos eso.</p>
  <div class="st-footer">
    <span class="st-verb" data-verb="aplicar">APLICAR</span>
    <span class="st-arrow">→</span>
  </div>
</a>
```

```css
.skill-tile {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--line);
  padding: 28px 24px;
  text-decoration: none;
  transition: border-color 150ms ease, transform 150ms ease, background-color 150ms ease;
  position: relative;
}
.skill-tile:hover {
  border-color: var(--accent);
  background: color-mix(in oklab, var(--bg-card), var(--accent) 4%);
}
.st-label {
  font: 500 10px/1 "IBM Plex Mono";
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--ink-hush);
}
.st-name {
  font: 700 28px/1.1 "Playfair Display";
  color: var(--ink);
  margin: 12px 0 8px;
}
.st-tagline {
  font: 400 italic 15px/1.5 "Cormorant Garamond";
  color: var(--ink-dim);
  margin-bottom: 20px;
}
.st-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--line);
  padding-top: 14px;
}
.st-verb {
  font: 500 italic 15px "Cormorant Garamond";
  color: var(--accent);
}
.st-verb[data-verb="preparar"] { color: var(--lilac); }
.st-verb[data-verb="iterar"]   { color: var(--ink-dim); }
.st-verb[data-verb="resistir"] { color: var(--positive); }
.st-verb[data-verb="negociar"] { color: var(--accent-deep); }
.st-arrow {
  font: 400 18px "IBM Plex Mono";
  color: var(--ink-hush);
}
.skill-tile:hover .st-arrow { color: var(--accent); }
```

### 9f. Hover-card (glossary disclosure)

For psych terms (CAAS, MLQ, STAR, WPM, prosodia) — hover to reveal definition.

```css
.hover-card {
  position: absolute;
  max-width: 300px;
  min-width: 220px;
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: 3px;
  padding: 12px 14px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
  font: 400 13px/1.5 "Cormorant Garamond";
  color: var(--ink);
  pointer-events: none;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 150ms ease, transform 150ms ease;
}
.hover-card[data-visible="true"] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.hc-title {
  font: 500 10px/1 "IBM Plex Mono";
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}
```

### 9g. Drawer (off-canvas deep explanations)

```css
.drawer {
  position: fixed;
  top: 0;
  right: -540px;
  width: 520px;
  height: 100vh;
  background: var(--bg-lift);
  border-left: 1px solid var(--rule);
  padding: 44px 32px;
  transition: right 250ms linear;
  overflow-y: auto;
  z-index: 100;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.35);
}
.drawer.open { right: 0; }
.drawer-close {
  position: absolute;
  top: 24px;
  right: 24px;
  font: 400 18px "IBM Plex Mono";
  background: none;
  border: none;
  color: var(--ink-dim);
  cursor: pointer;
}
.big-verb {
  font: 700 italic 56px/1 "Playfair Display";
  color: var(--accent);
  margin-bottom: 32px;
}
```

### 9h. Glossary (details/summary)

```html
<details class="glossary">
  <summary>Términos del sistema</summary>
  <dl>
    <dt>CAAS-12 <span class="g-range">1-5</span></dt>
    <dd>Career Adapt-Abilities Scale. Mide adaptabilidad de carrera en 4 dimensiones.</dd>
  </dl>
</details>
```

```css
.glossary summary {
  font: 400 10px "IBM Plex Mono";
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--ink-hush);
  cursor: pointer;
  list-style: none;
}
.glossary summary::before { content: "+ "; }
.glossary[open] summary::before { content: "− "; }
.glossary dl {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 14px 28px;
  margin-top: 20px;
}
.glossary dt { font: 500 11px "IBM Plex Mono"; color: var(--ink); }
.glossary dd { font: 400 13px "Cormorant Garamond"; color: var(--ink-dim); }
.g-range { font-weight: 400; color: var(--ink-hush); margin-left: 6px; }
@media (max-width: 820px) {
  .glossary dl { grid-template-columns: 1fr; gap: 6px; }
}
```

### 9i. Match bar / conviction bar

For role recommendations in Get Interviews; for readiness scores in Prepare.

```css
.match-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px dotted var(--line);
}
.match-ticker {
  font: 500 11px "IBM Plex Mono";
  color: var(--ink);
  min-width: 140px;
}
.match-bar {
  flex: 1;
  height: 1px;
  background: var(--line);
  position: relative;
}
.match-bar-fill {
  position: absolute;
  inset: 0 auto 0 0;
  background: var(--accent);
  transition: width 300ms linear;
}
.match-verb {
  font: 500 italic 15px "Cormorant Garamond";
  color: var(--accent);
  min-width: 90px;
  text-align: right;
}
.match-data {
  font: 400 11px "IBM Plex Mono";
  color: var(--ink-dim);
  min-width: 60px;
  text-align: right;
}
```

### 9j. Momentum sparkline

Tiny SVG line chart for response-rate / app-count over time.

```html
<svg class="momentum-spark" viewBox="0 0 240 44" preserveAspectRatio="none">
  <polyline
    points="0,30 20,28 40,32 60,22 80,18 100,20 120,15 140,12 160,14 180,10 200,8 220,12 240,6"
    fill="none" stroke="var(--accent)" stroke-width="1.5"
  />
</svg>
```

### 9k. Footer

Margin-top 56px. Border-top: 3px double `--rule`. Padding-top 24px.
Grid 1.5fr/1fr, collapses single-column at 820px.
`.epigraph`: 16px italic Cormorant, `--ink-dim`.
`.counter`: 10px mono, right-aligned, rows flex gap 14px.

---

## 10. Verbs (semantic status system)

Replaces cockpit's ACT/HOLD/WAIT/OBSERVE trading verbs. For career context:

| Verb (ES) | Verb (EN) | Color | Meaning |
|-----------|-----------|-------|---------|
| APLICAR | APPLY | `--accent` | Take action — apply, send, submit |
| PREPARAR | PREPARE | `--lilac` | Build readiness — upskill, research, reflect |
| ITERAR | ITERATE | `--ink-dim` | Refine — rewrite CV, re-record answer, adjust angle |
| RESISTIR | PERSIST | `--positive` | Maintain momentum — behavioral activation |
| NEGOCIAR | NEGOTIATE | `--accent-deep` | Close — offer handling, counter, terms |

Verbs render in italic Cormorant 500 (display) or italic Cormorant italic 15px (inline).

---

## 11. Estados (user state headline system)

Replaces cockpit's COHERENT/STRESSED/DISLOCATED regime classification.

| Estado (ES) | State (EN) | Color | Headline meaning |
|-------------|------------|-------|------------------|
| DESBLOQUEADO | UNBLOCKED | `--positive` | Flow is good. Keep going. |
| EN MARCHA | IN MOTION | `--accent` | Active, generating responses. |
| ESTANCADO | STUCK | `--danger` | Drop-off detected. Intervention needed. |
| PREPARANDO | PREPARING | `--lilac` | Pre-search; building readiness. |
| NEGOCIANDO | NEGOTIATING | `--accent-deep` | Offer in hand. |

Mapped from the 1-question router + recent momentum data.

---

## 12. Accessibility

- Focus: `2px solid var(--accent)`, `outline-offset: 2px`. Visible on all interactive.
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<aside>`, `<details>`, proper heading order.
- ARIA: `aria-label` on icon-only buttons, `aria-live="polite"` on router results, `role="progressbar"` with aria-valuenow/min/max.
- Keyboard: all interactive reachable with Tab; Enter/Space activate; Escape closes drawer.
- Contrast: all text ≥ WCAG AA. Validate with tooling before shipping.
- Reduced motion: honor `prefers-reduced-motion: reduce` — disable drawer slide, progress animation, hover transforms.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 13. Icon philosophy

No external icon library. Unicode glyphs where possible (✓ ◐ ✗ × + − · →).
For custom iconography (skill tile illustrations, spark icons), inline SVG with `stroke: currentColor`, 1.5 weight, 24x24 viewBox.

If more iconography is needed later: Lucide (outlined, geometric — matches editorial calm) is the default pick. Never Material Icons (too saas) or emojis (too casual).

---

## 14. Copy voice (tied to visual)

Visual system requires supporting copy style:

- **Headlines in Spanish, never ALL CAPS except verbs/estados.** Use case-preserved italics for warmth.
- **Monospace labels in UPPERCASE** with 0.32em letter-spacing — they carry the "system" feel.
- **No em-dashes (—)** in user-facing copy. Use hyphens `-` or restructure. (Enforced by voice-guide.md)
- **Citations inline, sparing.** "Savickas (2013) lo nombra como..." fits. Don't flood.
- **Spanish voseo:** "vos", "podés", "querés" — never "tú".

---

## 15. Breakpoints

- `820px` — layout collapses 2-col → 1-col; sidebar falls below main
- `640px` — compresses spacing scale, reduces heading sizes
- `420px` — skill tiles full-width, drawer becomes fullscreen

---

## 16. What this system is NOT

- Not Tailwind utility-first. This is token-driven component CSS.
- Not glassmorphism (that was v1.0). Flat, editorial surfaces with typography doing the work.
- Not dark-only. Dual-theme is a first-class feature.
- Not emoji-rich. Restraint is the point.
- Not cramped. Generous whitespace is non-negotiable.

---

## 17. Implementation checklist

- [ ] Google Fonts import for Cormorant Garamond, Playfair Display, IBM Plex Mono
- [ ] Dual-theme CSS variables (`:root[data-theme="dark|light"]`)
- [ ] Theme toggle with localStorage persistence (`n1-theme` key)
- [ ] Body max-width 1120px, padding 48px 36px
- [ ] 2-col main grid at ≥820px
- [ ] Masthead + estado-badge + theme toggle
- [ ] Headline band with regime-word color-by-data
- [ ] Skill tile component with verb color-by-data
- [ ] Hover-card with opacity+translateY transition
- [ ] Drawer off-canvas with transition: right 250ms linear
- [ ] Glossary details/summary with + / − indicator
- [ ] Match bar component for role recommendations
- [ ] Momentum SVG sparkline
- [ ] Footer with double-rule top border
- [ ] Focus styles (outline 2px accent, offset 2px)
- [ ] Prefers-reduced-motion honored
- [ ] Semantic HTML throughout
- [ ] No em-dashes in any user-facing strings

---

## 18. Paste-to-Claude-Design quickstart

If pasting this into Claude Design (or similar generator), use this one-paragraph brief:

> Build a dark-default web UI for N1 — a Spanish-primary career tool. The visual language is editorial literary, not SaaS dashboard. Use Playfair Display for big display headlines (42-56px, italic), Cormorant Garamond for body (17px default) and verb italics, IBM Plex Mono for ALL CAPS labels (10-11px with 0.32em letter-spacing). Primary accent is orange `#FF9068` (light-mode variant `#E8843A`). Backgrounds are deep charcoal `#1B1820` (dark) or warm cream `#F5F1E8` (light). Text primary is cream `#F5F1E8` (dark) or charcoal (light). Layout is centered 1120px max-width with 48px page padding. Main content is a 2-column grid (1.7fr / 1fr) collapsing to 1-column below 820px. Angular borders (2-3px radii only). Soft shadows. Masthead with 3px double-rule top border. No glassmorphism, no emoji, no Material Icons. Spanish headlines use Colombian voseo; no em-dashes in any user-facing text. Dual theme toggles via `data-theme` attribute with localStorage persistence.

---

_Last updated: 2026-04-21. Version: 2.0. Replaces v1.0 (dark glassmorphism)._
