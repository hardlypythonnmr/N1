# Phase 05 Plan 1 — Bug Fixes + Assessment Clarity

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all 7 QA Run 4 issues, add assessment instruction blocks to MLQ-10/Compass/Bull's Eye, and add an empty state to the Profile page.

**Architecture:** Pure HTML/CSS/JS edits — no build step, no dependencies. All changes are in-place edits to existing files. Assessment instruction blocks are static HTML inserted before the first question in each tool. Empty state is a conditional section shown/hidden via JS based on localStorage.

**Tech Stack:** Vanilla HTML/CSS (Tailwind CDN), vanilla JS, localStorage. No test runner — verification is done by loading the page in a browser and checking DOM/localStorage state via Playwright or browser devtools.

**Spec:** `docs/superpowers/specs/2026-03-24-phase05-launch-readiness-design.md`

---

## File Map

| File                         | Changes                                                                             |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| `web/index.html`             | Fix #3: Inicio nav href → `index.html`                                              |
| `web/profile/index.html`     | Fix #1 (nav), #2 (KPI label), #7 (h2→h3), empty state                               |
| `web/flow-logger/index.html` | Fix #4 (sliders 1→10), Fix #6 (localStorage keys name/zone), update zone thresholds |
| `web/styles.css`             | Fix #5: add `.page-content { padding-bottom: 6rem; }`                               |
| `web/compass/index.html`     | Assessment instruction block (CAAS-12)                                              |
| `web/mlq/index.html`         | Assessment instruction block (MLQ-10)                                               |
| `web/bulls-eye/index.html`   | Assessment instruction block (Bull's Eye sliders)                                   |

Apply `page-content` class to `<main>` on all 8 pages: index.html, ghost-check, compass, bulls-eye, mlq, flow-logger, runway, profile.

---

## Task 1: Fix Landing nav + add page-content padding to all pages

**Files:**

- Modify: `web/index.html`
- Modify: `web/styles.css`
- Modify: `web/ghost-check/index.html`
- Modify: `web/compass/index.html`
- Modify: `web/bulls-eye/index.html`
- Modify: `web/mlq/index.html`
- Modify: `web/flow-logger/index.html`
- Modify: `web/runway/index.html`
- Modify: `web/profile/index.html`

- [ ] **Step 1: Add `.page-content` rule to `web/styles.css`**

Find the bottom nav CSS block (around line 595, the block with `z-index: 1000`). Add immediately after it:

```css
/* Prevent bottom nav from obscuring page content on mobile */
.page-content {
  padding-bottom: 6rem;
}
```

- [ ] **Step 2: Add `page-content` class to `<main>` in each of the 8 pages**

For each file listed below, find the opening `<main` tag and add `page-content` to its class list.

- `web/index.html` — find `<main` tag
- `web/ghost-check/index.html` — find `<main` tag
- `web/compass/index.html` — find each `<main class="screen` tag (there are 3: screen-start, screen-questions, screen-results)
- `web/bulls-eye/index.html` — find `<main` tag
- `web/mlq/index.html` — find the single `<main>` tag (line 126, exactly 1 `<main>` element in this file)
- `web/flow-logger/index.html` — find `<main` tag
- `web/runway/index.html` — find `<main` tag
- `web/profile/index.html` — find `<main` tag

- [ ] **Step 3: Fix Inicio nav href in `web/index.html`**

Find the bottom nav link for "Inicio":

```html
href="#inicio"
```

Change to:

```html
href="index.html"
```

There is exactly one such nav link at the bottom of the page (inside the `<nav>` element). Do not change the `id="inicio"` attribute on the section — that stays.

- [ ] **Step 4: Verify in browser**

Open `http://localhost:8765/index.html`. Scroll to bottom. The CTA buttons at the bottom of any tool section should be clickable without the nav intercepting (test at 375px viewport width). Inspect the landing nav — "Inicio" `<a>` href should be `index.html`.

- [ ] **Step 5: Commit**

```bash
git add web/index.html web/styles.css web/ghost-check/index.html web/compass/index.html web/bulls-eye/index.html web/mlq/index.html web/flow-logger/index.html web/runway/index.html web/profile/index.html
git commit -m "fix: add page-content padding to prevent nav overlap on all pages"
```

---

## Task 2: Fix Profile page — nav, KPI label, h2 hierarchy

**Files:**

- Modify: `web/profile/index.html`

- [ ] **Step 1: Fix the 4th nav item label**

In `web/profile/index.html`, find the bottom nav (`<nav>` element at bottom of file). The 4th nav item is the one that needs to show "Compass" with `href="../compass/index.html"` (path relative from the profile subdirectory). Ensure it reads:

```html
<a href="../compass/index.html" ...>
  <span class="material-symbols-outlined">explore</span>
  <span>Compass</span>
</a>
```

The expected nav item order is: Inicio / Herramientas / Perfil(current, href="#") / Compass.

- [ ] **Step 2: Fix KPI label wrapping**

In `web/profile/index.html`, find this exact string at line 597:

```js
label: 'Propósito & Sentido',
```

Change it to:

```js
label: 'Propósito',
```

That is the only occurrence of this label text in the file.

- [ ] **Step 3: Demote second `<h2>` to `<h3>`**

Search the profile page for all `<h2` tags. There should be exactly two. Keep the first one (the page title). Change the second `<h2` to `<h3` and its closing `</h2>` to `</h3>`.

- [ ] **Step 4: Verify**

Open `http://localhost:8765/profile/index.html`. Check: (1) bottom nav 4th item label and href correct, (2) KPI label fits on one line at 1100px, (3) browser devtools → Elements → search h2 shows only one result.

- [ ] **Step 5: Commit**

```bash
git add web/profile/index.html
git commit -m "fix(profile): correct nav item, shorten KPI label, fix h2 hierarchy"
```

---

## Task 3: Fix Flow Logger — sliders and localStorage keys

**Files:**

- Modify: `web/flow-logger/index.html`

The Flow Logger currently stores activity objects as:

```js
{ activity: name, challenge: challenge, skill: skill, state: state }
```

Must become:

```js
{ name: name, challenge: challenge, skill: skill, zone: zone }
```

Sliders currently have `min="1" max="5"`. Must become `min="1" max="10"`.

Zone thresholds currently calibrated for 1-5 scale. Must scale proportionally for 1-10:

- Old flow condition: `challenge >= 3 && skill >= 3 && diff <= 1`
- New flow condition: `challenge >= 6 && skill >= 6 && diff <= 2`
- Old boredom: `skill > challenge && diff > 1` (keep ratio-based logic)
- Old anxiety: `challenge > skill && diff > 1` (keep ratio-based logic)

- [ ] **Step 1: Update slider HTML attributes**

Find the two range inputs (challenge-rating and skill-rating). Change both from:

```html
min="1" max="5" value="3" step="1" aria-valuemin="1" aria-valuemax="5"
aria-valuenow="3"
```

To:

```html
min="1" max="10" value="5" step="1" aria-valuemin="1" aria-valuemax="10"
aria-valuenow="5"
```

Also update the default display value from `3` to `5` in the `<span id="challenge-display">3</span>` and `<span id="skill-display">3</span>` elements.

- [ ] **Step 2: Update `getFlowZone` thresholds**

Find the `getFlowZone` function (around line 480). Update the zone thresholds for the 1-10 scale:

```js
function getFlowZone(challenge, skill) {
  var diff = Math.abs(challenge - skill);
  if (challenge >= 6 && skill >= 6 && diff <= 2) return "flow";
  if (skill > challenge && diff > 2) return "boredom"; // scaled from diff > 1 (1-5 scale)
  if (challenge > skill && diff > 2) return "anxiety"; // scaled from diff > 1 (1-5 scale)
  return "learning";
}
```

- [ ] **Step 3: Update localStorage write — rename keys**

Find the line that pushes a new activity object (around line 893):

```js
activities = activities.concat([
  { activity: name, challenge: challenge, skill: skill, state: state },
]);
```

Change to:

```js
activities = activities.concat([
  { name: name, challenge: challenge, skill: skill, zone: zone },
]);
```

Note: the variable holding the zone result is currently called `state` at line 891 (`var state = getFlowZone(...)`). Rename that variable to `zone` as well:

```js
var zone = getFlowZone(challenge, skill);
```

- [ ] **Step 4: Update all reads of `act.activity` and `act.state`**

Search for all occurrences of `act.activity` and `act.state` in the file and replace:

- `act.activity` → `act.name`
- `act.state` → `act.zone`

These appear in:

- The activity list render function (nameEl.textContent, zBadge, delBtn aria-label)
- The scatter chart dataset grouping (`datasets[act.state]`)
- The YAML export (`act.activity`, `act.state`)
- The scorecard data builder (`a.activity`, `a.state`)

Also update the YAML export field names if they reference `activity` or `state` as keys.

- [ ] **Step 5: Update the summary counts line**

Find `counts[act.state]` (around line 841) and change to `counts[act.zone]`.

- [ ] **Step 6: Verify**

Open `http://localhost:8765/flow-logger/index.html`. Add an activity with challenge=7 and skill=7 — zone should be "flow". Add another with challenge=8, skill=2 — zone should be "anxiety". Check localStorage in devtools: `n1-flow-activities` array entries should have keys `name`, `challenge`, `skill`, `zone` (not `activity`/`state`).

- [ ] **Step 7: Commit**

```bash
git add web/flow-logger/index.html
git commit -m "fix(flow-logger): update sliders to 1-10 scale, rename activity/state keys to name/zone"
```

---

## Task 4: Add assessment instruction blocks

**Files:**

- Modify: `web/mlq/index.html`
- Modify: `web/compass/index.html`
- Modify: `web/bulls-eye/index.html`

Each instruction block is a small inline card. Use this HTML pattern — insert it immediately before the first question/slider in each assessment:

```html
<div
  class="w-full rounded-lg border border-outline-variant/30 bg-surface-container/50 px-4 py-3 mb-4 flex items-start gap-3"
  role="note"
  aria-label="Instrucciones de escala"
>
  <span
    class="material-symbols-outlined text-tertiary text-base mt-0.5 flex-shrink-0"
    >info</span
  >
  <div>
    <p
      class="font-mono text-[10px] uppercase tracking-widest text-tertiary mb-1"
    >
      ¿Cómo responder?
    </p>
    <p class="text-sm text-on-surface-variant leading-relaxed">SCALE_COPY</p>
    <p class="text-xs text-on-surface-variant/70 mt-1">
      No hay respuestas correctas o incorrectas.
    </p>
  </div>
</div>
```

Replace `SCALE_COPY` with the per-tool text below.

- [ ] **Step 1: Add instruction block to `web/mlq/index.html`**

Find `<div id="assessment-container">` (line 219). Inside it, locate the `<!-- Question Card -->` comment (around line 231). Insert the instruction block as a static sibling immediately before the Question Card div. The assessment-container is shown/hidden by JS but never re-rendered — the static block will remain in place.

`SCALE_COPY`:

```
1 = Totalmente en desacuerdo · 7 = Totalmente de acuerdo. Respondé según cómo te sentís ahora, no cómo querés sentirte.
```

- [ ] **Step 2: Add instruction block to `web/compass/index.html`**

Find `<main id="screen-questions">` (line 330). Inside it, locate the `<!-- Question card -->` comment (around line 344). Insert the instruction block between the end of the progress bar section (ends ~line 342) and the Question card div — immediately before the `<!-- Question card -->` comment. This is a static position; JS navigates between screens but does not re-render the internal layout of screen-questions.

`SCALE_COPY`:

```
1 = Casi nunca · 5 = Casi siempre. Pensá en cómo te comportás en tu carrera en general.
```

- [ ] **Step 3: Add instruction block to `web/bulls-eye/index.html`**

Find the sliders section. Insert the instruction block immediately before the first slider group (`<div role="group"` for the first value dimension).

`SCALE_COPY`:

```
Cada slider refleja qué tan alineada está esa área de tu vida con lo que realmente valorás. 1 = muy lejos de lo que querés · 10 = exactamente donde querés estar.
```

- [ ] **Step 4: Verify**

Open each of the three pages. Confirm:

- MLQ-10: instruction block visible above first question
- Compass: instruction block visible when entering question flow (not on intro screen)
- Bull's Eye: instruction block visible above sliders

- [ ] **Step 5: Commit**

```bash
git add web/mlq/index.html web/compass/index.html web/bulls-eye/index.html
git commit -m "feat: add assessment instruction blocks to MLQ-10, Compass, Bull's Eye"
```

---

## Task 5: Add Profile empty state

**Files:**

- Modify: `web/profile/index.html`

- [ ] **Step 1: Add empty state HTML**

Find the profile page's main content area. Locate where the KPI gauges / radar chart / dimension data is rendered. Add an empty state element that is initially hidden. Insert it as the first child of the main content container, before the KPI section:

```html
<div
  id="profile-empty-state"
  class="hidden w-full glass-panel rounded-xl p-8 border border-outline-variant/20 text-center mb-8"
>
  <span
    class="material-symbols-outlined text-4xl text-on-surface-variant mb-4 block"
    >person_search</span
  >
  <h3 class="font-headline text-lg font-bold text-on-surface mb-2">
    Tu perfil está vacío
  </h3>
  <p class="text-sm text-on-surface-variant mb-6 max-w-sm mx-auto">
    Completá al menos una herramienta para ver tu perfil. Cada herramienta
    agrega una dimensión nueva.
  </p>
  <a
    href="index.html#herramientas"
    class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold text-sm uppercase tracking-widest rounded-lg no-underline hover:opacity-90 transition-opacity"
  >
    <span class="material-symbols-outlined text-sm">grid_view</span>
    Ver herramientas
  </a>
</div>
```

- [ ] **Step 2: Wire show/hide logic in the JS**

Find the profile page's DOMContentLoaded handler or the function that loads profile data (the `loadProfile` / data initialization block). After the profile is loaded (or determined to be empty), add this logic:

```js
// Show empty state if no profile data is present
var emptyState = document.getElementById("profile-empty-state");
var hasData =
  profile &&
  ((profile.values &&
    (profile.values.completed ||
      (profile.values.bulls_eye && profile.values.bulls_eye.work !== null))) ||
    (profile.identity && profile.identity.completed) ||
    (profile.purpose &&
      profile.purpose.mlq &&
      profile.purpose.mlq.presence !== null) ||
    (profile.strengths && profile.strengths.completed));
if (emptyState) {
  if (hasData) {
    emptyState.classList.add("hidden");
  } else {
    emptyState.classList.remove("hidden");
  }
}
```

Place this after the profile object is loaded from `N1.loadProfile()`. In `web/profile/index.html`, search for `N1.loadProfile()` to find the call site and the variable name assigned to the result (it should be `profile` or similar).

- [ ] **Step 3: Verify**

Open `http://localhost:8765/profile/index.html` in a browser with no localStorage data (use devtools → Application → Storage → Clear site data). The empty state card should appear. Then open Bull's Eye, complete an assessment, and go to profile — empty state should be hidden.

- [ ] **Step 4: Commit**

```bash
git add web/profile/index.html
git commit -m "feat(profile): add empty state card when no tool data is present"
```

---

## Task 6: Final Plan 1 verification

- [ ] **Step 1: Run a Playwright regression check**

Start the local server (`python -m http.server 8765 --directory web` or equivalent). Using Playwright (mcp**playwright**\*), verify each success criterion from the spec:

| Test               | What to check                                                             |
| ------------------ | ------------------------------------------------------------------------- |
| Bug fix #1         | `web/profile/index.html` bottom nav 4th item matches other tool pages     |
| Bug fix #2         | Profile KPI label at 1100px viewport is single line                       |
| Bug fix #3         | Landing Inicio nav href === "index.html"                                  |
| Bug fix #4         | Flow Logger sliders have max=10 in DOM; saved entry has 1-10 range values |
| Bug fix #5         | At 375px viewport, bottom content not obscured by nav                     |
| Bug fix #6         | localStorage `n1-flow-activities` has `name` and `zone` keys              |
| Bug fix #7         | Profile page has exactly one `<h2>`                                       |
| Assessment clarity | All 3 tools show instruction block                                        |
| Empty state        | Profile with empty storage shows empty card; disappears when data added   |

- [ ] **Step 2: Push to GitHub Pages**

```bash
git push origin main
```

Verify GitHub Actions deploy completes successfully (check `gh run list --limit 1`). Confirm live URL `https://hardlypythonnmr.github.io/N1/` shows the fixes.

---

## Notes for executor

- This project has no build step, no npm, no bundler. Edit HTML files directly.
- Tailwind utility classes are applied inline in HTML — no separate CSS needed for Tailwind classes.
- `web/styles.css` is for custom CSS rules only.
- The local dev server is already running at `http://localhost:8765`.
- Compass has 3 `<main class="screen ...">` elements (start/questions/results) — all 3 get `page-content` class.
- Flow Logger: the `activity` → `name` rename touches ~8 places in the file. Use find-replace carefully — do not rename the `<input id="activity-name">` element or its label, only the JS object key and the places that read `act.activity`.
