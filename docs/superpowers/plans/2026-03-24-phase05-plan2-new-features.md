# Phase 05 Plan 2 — New Features

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add email capture wiring, completion progress badge, profile cross-dimension clarity score, and LinkedIn URL sharing across all 7 tools.

**Architecture:** Three new methods added to `web/assessment-engine.js` (the shared N1 global): `showEmailCaptureBanner()`, `getCompletionCount()`, `computeProfileClarity()`. The existing `calcDimensionScores()` function is extracted from `web/profile/index.html` into `assessment-engine.js` so it can be called from any page. Each tool wires these methods at results-render time. No new CDN dependencies. All state in localStorage.

**Tech Stack:** Vanilla JS, localStorage, existing N1 global, Tailwind CDN. No build step.

**Spec:** `docs/superpowers/specs/2026-03-24-phase05-launch-readiness-design.md`

**Prerequisite:** Plan 1 must be complete before executing Plan 2.

---

## File Map

| File                         | Changes                                                                                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `web/assessment-engine.js`   | Extract `calcDimensionScores()` from profile; add `getCompletionCount()`, `computeProfileClarity()`, `showEmailCaptureBanner()`            |
| `web/profile/index.html`     | Update `calcDimensionScores` call to use `N1.calcDimensionScores()`; add clarity score card; add progress badge; add LinkedIn share button |
| `web/index.html`             | Add progress badge to hero section                                                                                                         |
| `web/ghost-check/index.html` | Write `n1-ghost-completed` flag in `renderResults()`; retrofit email flag on submit; add LinkedIn share button                             |
| `web/runway/index.html`      | Write `n1-runway-completed` flag in `showResults()`; retrofit email flag on submit; add LinkedIn share button                              |
| `web/compass/index.html`     | Add email banner call at results render; add LinkedIn share button                                                                         |
| `web/bulls-eye/index.html`   | Add email banner call at results render; add LinkedIn share button                                                                         |
| `web/mlq/index.html`         | Add email banner call at results render; add LinkedIn share button                                                                         |
| `web/flow-logger/index.html` | Add email banner call at results render; add LinkedIn share button                                                                         |

---

## Task 1: Extract `calcDimensionScores` to assessment-engine.js

**Files:**

- Modify: `web/assessment-engine.js`
- Modify: `web/profile/index.html`

`calcDimensionScores` currently lives as a private function inside `web/profile/index.html`. It must be a public `N1.calcDimensionScores(profile)` method so other pages can call it.

- [ ] **Step 1: Copy the function body from `web/profile/index.html`**

Open `web/profile/index.html` and find `function calcDimensionScores(profile)` (around line 556). Copy its entire body (lines 556–586 approximately). The function:

- Takes a profile object (from `N1.loadProfile()`)
- Returns `{ values: 0-100, strengths: 0-10, identity: 0-100, purpose: 0-100 }`

- [ ] **Step 2: Add as `N1.calcDimensionScores` in `web/assessment-engine.js`**

Open `web/assessment-engine.js`. Find the last public method assignment before `window.N1 = N1;` (around line 1172–1191). Insert the new method before the closing of the IIFE:

```js
/**
 * Derive dimension scores from a loaded profile object.
 * Returns { values: 0-100, strengths: 0-10, identity: 0-100, purpose: 0-100 }.
 * strengths is 0-10 (raw count cap); callers that need 0-100 must multiply ×10.
 */
N1.calcDimensionScores = function (profile) {
  var valuesScore = 0;
  if (profile.values && profile.values.schwartz_profile) {
    var sp = profile.values.schwartz_profile;
    var vals = Object.keys(sp)
      .map(function (k) {
        return sp[k];
      })
      .filter(function (v) {
        return v !== null && !isNaN(v);
      });
    if (vals.length > 0)
      valuesScore =
        Math.round(
          (vals.reduce(function (a, b) {
            return a + b;
          }, 0) /
            vals.length /
            9) *
            100,
        ) / 10;
  }
  if (valuesScore === 0 && profile.values && profile.values.bulls_eye) {
    var be = profile.values.bulls_eye;
    var beVals = [
      be.work,
      be.relationships,
      be.personal_growth,
      be.leisure,
    ].filter(function (v) {
      return v !== null && !isNaN(v);
    });
    if (beVals.length > 0)
      valuesScore =
        Math.round(
          (beVals.reduce(function (a, b) {
            return a + b;
          }, 0) /
            beVals.length /
            10) *
            100,
        ) / 10;
  }
  var strengthsScore = 0;
  if (profile.strengths) {
    var sig = (profile.strengths.signature_strengths || []).length;
    var fl = (profile.strengths.flow_activities || []).length;
    strengthsScore = Math.min(sig > 0 ? sig : fl, 10);
  }
  var identityScore = 0;
  if (profile.identity && profile.identity.adaptability) {
    var ad = profile.identity.adaptability;
    var adv = [ad.concern, ad.control, ad.curiosity, ad.confidence].filter(
      function (v) {
        return v !== null && !isNaN(v);
      },
    );
    if (adv.length > 0)
      identityScore =
        Math.round(
          (adv.reduce(function (a, b) {
            return a + b;
          }, 0) /
            adv.length /
            5) *
            100,
        ) / 10;
  }
  var purposeScore = 0;
  if (profile.purpose && profile.purpose.mlq) {
    var mlq = profile.purpose.mlq;
    var mlqv = [mlq.presence, mlq.search].filter(function (v) {
      return v !== null && !isNaN(v);
    });
    if (mlqv.length > 0)
      purposeScore =
        Math.round(
          (mlqv.reduce(function (a, b) {
            return a + b;
          }, 0) /
            mlqv.length /
            7) *
            100,
        ) / 10;
  }
  return {
    values: valuesScore,
    strengths: strengthsScore,
    identity: identityScore,
    purpose: purposeScore,
  };
};
```

- [ ] **Step 3: Update `web/profile/index.html` to use `N1.calcDimensionScores`**

In `web/profile/index.html`, find the private `function calcDimensionScores(profile)` definition and delete it. Then find all 3 call sites of `calcDimensionScores(profile)` in the file and replace each with `N1.calcDimensionScores(profile)`.

The 3 call sites are around lines 594, 653, 699 (look for `var scores = calcDimensionScores`).

- [ ] **Step 4: Verify**

Open `http://localhost:8765/profile/index.html` with localStorage data populated. The profile radar chart and KPI gauges should render exactly as before. Open browser console — no errors.

- [ ] **Step 5: Commit**

```bash
git add web/assessment-engine.js web/profile/index.html
git commit -m "refactor: extract calcDimensionScores to N1 shared engine"
```

---

## Task 2: Add `N1.computeProfileClarity` to assessment-engine.js

**Files:**

- Modify: `web/assessment-engine.js`

- [ ] **Step 1: Add the method**

In `web/assessment-engine.js`, after `N1.calcDimensionScores`, add:

```js
/**
 * Compute a unified "Claridad de perfil" percentage from available dimension scores.
 * Returns { score: N (0-100), basedOn: N (1-4), tension: { high, low, spread } | null }
 * Returns null if no dimension data is present.
 * NOTE: strengths is multiplied ×10 inside this function to normalize to 0-100.
 */
N1.computeProfileClarity = function (profile) {
  if (!profile) return null;
  var raw = N1.calcDimensionScores(profile);

  // Normalize strengths from 0-10 to 0-100 BEFORE any averaging or spread checks
  var normalized = {
    values: raw.values,
    strengths: raw.strengths * 10,
    identity: raw.identity,
    purpose: raw.purpose,
  };

  var labels = {
    values: "Valores",
    strengths: "Fortalezas",
    identity: "Identidad",
    purpose: "Propósito",
  };

  var nonZero = Object.keys(normalized).filter(function (k) {
    return normalized[k] > 0;
  });
  if (nonZero.length === 0) return null;

  var sum = nonZero.reduce(function (acc, k) {
    return acc + normalized[k];
  }, 0);
  var score = Math.round(sum / nonZero.length);

  // Tension detection: only if ≥2 non-zero dimensions
  var tension = null;
  if (nonZero.length >= 2) {
    var sorted = nonZero.slice().sort(function (a, b) {
      return normalized[b] - normalized[a];
    });
    var highKey = sorted[0];
    var lowKey = sorted[sorted.length - 1];
    var spread = normalized[highKey] - normalized[lowKey];
    if (spread > 30) {
      tension = {
        high: labels[highKey],
        low: labels[lowKey],
        spread: Math.round(spread),
      };
    }
  }

  return { score: score, basedOn: nonZero.length, tension: tension };
};
```

- [ ] **Step 2: Verify in browser console**

Open browser devtools console on any page with N1 loaded. Run:

```js
var p = N1.loadProfile();
console.log(N1.computeProfileClarity(p));
```

With a populated profile, should return `{ score: N, basedOn: N, tension: ... }`.
With empty localStorage, should return `null`.

- [ ] **Step 3: Commit**

```bash
git add web/assessment-engine.js
git commit -m "feat: add N1.computeProfileClarity to assessment engine"
```

---

## Task 3: Add `N1.getCompletionCount` to assessment-engine.js

**Files:**

- Modify: `web/assessment-engine.js`

- [ ] **Step 1: Add the method**

In `web/assessment-engine.js`, after `N1.computeProfileClarity`, add:

```js
/**
 * Count how many of the 7 N1 tools have been completed.
 * Returns { completed: N, total: 7 }.
 * Completion signals:
 *   Ghost Check:  n1-ghost-completed flag
 *   Compass:      calcDimensionScores().identity > 0
 *   Bull's Eye:   calcDimensionScores().values > 0
 *   MLQ-10:       calcDimensionScores().purpose > 0
 *   Flow Logger:  n1-flow-activities array length > 0
 *   Runway:       n1-runway-completed flag
 *   Profile:      any of the above is true
 */
N1.getCompletionCount = function () {
  var profile = N1.loadProfile();
  var scores = profile
    ? N1.calcDimensionScores(profile)
    : { values: 0, strengths: 0, identity: 0, purpose: 0 };

  var signals = {
    ghostCheck: localStorage.getItem("n1-ghost-completed") === "true",
    compass: scores.identity > 0,
    bullsEye: scores.values > 0,
    mlq: scores.purpose > 0,
    flowLogger: (function () {
      try {
        return (
          JSON.parse(localStorage.getItem("n1-flow-activities") || "[]")
            .length > 0
        );
      } catch (e) {
        return false;
      }
    })(),
    runway: localStorage.getItem("n1-runway-completed") === "true",
  };

  var completedTools = Object.values
    ? Object.values(signals).filter(Boolean).length
    : Object.keys(signals)
        .map(function (k) {
          return signals[k];
        })
        .filter(Boolean).length;

  // Profile page counts as completed if any other tool is done
  var profileDone = completedTools > 0;
  var total = completedTools + (profileDone ? 1 : 0);

  return { completed: Math.min(total, 7), total: 7 };
};
```

- [ ] **Step 2: Verify in console**

```js
N1.getCompletionCount(); // should return { completed: 0, total: 7 } with empty storage
```

After completing Bull's Eye:

```js
N1.getCompletionCount(); // should return { completed: 2, total: 7 } (bulls-eye + profile)
```

- [ ] **Step 3: Commit**

```bash
git add web/assessment-engine.js
git commit -m "feat: add N1.getCompletionCount to assessment engine"
```

---

## Task 4: Add `N1.showEmailCaptureBanner` to assessment-engine.js

**Files:**

- Modify: `web/assessment-engine.js`

- [ ] **Step 1: Add the method**

In `web/assessment-engine.js`, after `N1.getCompletionCount`, add:

```js
/**
 * Show a dismissible email capture banner at the top of `containerEl`.
 * Does nothing if n1-email-captured flag is already set.
 * Sets the flag on submit OR dismiss (before fetch, not on response).
 * Uses same Buttondown no-cors + form.submit() fallback as landing page.
 */
N1.showEmailCaptureBanner = function (containerEl) {
  if (!containerEl) return;
  if (localStorage.getItem("n1-email-captured") === "true") return;

  var banner = document.createElement("div");
  banner.id = "n1-email-banner";
  banner.className =
    "w-full glass-panel rounded-xl p-4 border border-outline-variant/20 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3";
  banner.setAttribute("role", "complementary");
  banner.setAttribute("aria-label", "Suscripción al newsletter");

  var inner = document.createElement("div");
  inner.className = "flex-1";

  var title = document.createElement("p");
  title.className = "text-sm font-bold text-on-surface mb-1";
  title.textContent =
    "¿Querés recibir un correo por semana sobre carrera? Sin spam.";

  var form = document.createElement("form");
  form.id = "n1-banner-email-form";
  form.action =
    "https://buttondown.email/api/emails/embed-subscribe/n1-sistema";
  form.method = "post";
  form.target = "popupwindow";
  form.className = "flex gap-2 mt-2 flex-wrap";

  var emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "tu@email.com";
  emailInput.required = true;
  emailInput.className =
    "flex-1 min-w-0 rounded-lg px-3 py-2 text-sm bg-surface-container border border-outline-variant text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary";

  var tagInput = document.createElement("input");
  tagInput.type = "hidden";
  tagInput.name = "tag";
  tagInput.value = "tool-completion";

  var submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className =
    "px-4 py-2 bg-primary text-on-primary text-sm font-bold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap";
  submitBtn.textContent = "Suscribirme";

  form.appendChild(emailInput);
  form.appendChild(tagInput);
  form.appendChild(submitBtn);
  inner.appendChild(title);
  inner.appendChild(form);

  var dismiss = document.createElement("button");
  dismiss.type = "button";
  dismiss.className =
    "text-xs text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap self-start mt-1 sm:mt-0";
  dismiss.textContent = "No, gracias";

  banner.appendChild(inner);
  banner.appendChild(dismiss);

  // Insert as first child of container
  containerEl.insertBefore(banner, containerEl.firstChild);

  // Set flag and hide on dismiss
  dismiss.addEventListener("click", function () {
    localStorage.setItem("n1-email-captured", "true");
    banner.remove();
  });

  // Set flag on submit (BEFORE fetch — no-cors has no success signal)
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    localStorage.setItem("n1-email-captured", "true");
    // Attempt fetch (fire-and-forget)
    try {
      fetch("https://api.buttondown.email/v1/subscribers", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.value,
          tags: ["tool-completion"],
        }),
      });
    } catch (err) {
      /* ignore */
    }
    // Fallback: also try form submission
    try {
      form.submit();
    } catch (err) {
      /* ignore */
    }
    banner.remove();
  });
};
```

- [ ] **Step 2: Verify in console**

```js
// On a results page, call it with the main container:
N1.showEmailCaptureBanner(document.querySelector("main"));
// Banner should appear at top of main.
// Dismissing should set n1-email-captured = 'true' in localStorage.
// Calling again after dismiss should do nothing.
```

- [ ] **Step 3: Commit**

```bash
git add web/assessment-engine.js
git commit -m "feat: add N1.showEmailCaptureBanner to assessment engine"
```

---

## Task 5: Wire Ghost Check — completion flag + email retrofit + LinkedIn share

**Files:**

- Modify: `web/ghost-check/index.html`

- [ ] **Step 1: Write `n1-ghost-completed` flag in `renderResults()`**

Find `function renderResults(result)` (around line 767). At the very beginning of the function body, add:

```js
// Mark Ghost Check as completed for progress tracking
localStorage.setItem("n1-ghost-completed", "true");
```

- [ ] **Step 2: Retrofit existing email form to set `n1-email-captured` flag**

Find the email form submit handler in ghost-check (it handles `n1-tool-email-form`). The handler is around lines 956–981. Find the `addEventListener('submit', ...)` call on the form.

Before the fetch/form.submit() calls, add:

```js
localStorage.setItem("n1-email-captured", "true");
```

This must be the FIRST line inside the submit handler, before any fetch or form.submit() calls.

- [ ] **Step 3: Add LinkedIn URL share button**

Find the export section in ghost-check results (where `#copy-linkedin` button lives, around line 379). Add a new button immediately after the existing `#copy-linkedin` button:

```html
<button
  id="share-linkedin-url"
  class="py-3 border border-outline-variant/40 rounded-xl font-headline font-bold uppercase tracking-wider text-[0.65rem] text-outline hover:text-tertiary hover:border-tertiary transition-all duration-300 active:scale-95 flex flex-col items-center gap-1"
  aria-label="Compartir en LinkedIn"
>
  <span class="material-symbols-outlined text-xl">share</span>
  <span>Compartir<br />LinkedIn</span>
</button>
```

Then in the JS section (near the other button handlers), add the click handler. Find where the existing copy-linkedin button is wired (search for `copy-linkedin`). Add after it:

```js
var shareLinkedInBtn = document.getElementById("share-linkedin-url");
if (shareLinkedInBtn) {
  shareLinkedInBtn.addEventListener("click", function () {
    var score = lastResult ? lastResult.score : null;
    var verdict = lastResult ? lastResult.verdict : null;
    var n1Url = "https://hardlypythonnmr.github.io/N1/";
    var text =
      score !== null && verdict
        ? "Analicé una oferta con Ghost Check de N1 y obtuve un score de " +
          score +
          "/100. " +
          verdict +
          ". " +
          n1Url
        : n1Url;
    var shareUrl =
      "https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent(n1Url) +
      "&summary=" +
      encodeURIComponent(text);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  });
}
```

Note: `lastResult` is the variable that holds the most recent analysis result. Verify its name by searching for where results are stored after analysis (look for the variable assigned in the analyze button handler).

- [ ] **Step 4: Verify**

Open `http://localhost:8765/ghost-check/index.html`. Run an analysis. Check:

1. `localStorage.getItem('n1-ghost-completed')` === `'true'` after results render
2. Email form submit sets `n1-email-captured` flag
3. "Compartir LinkedIn" button opens new tab to linkedin.com/sharing URL

- [ ] **Step 5: Commit**

```bash
git add web/ghost-check/index.html
git commit -m "feat(ghost-check): add completion flag, email capture flag, LinkedIn share button"
```

---

## Task 6: Wire Runway — completion flag + email retrofit + LinkedIn share

**Files:**

- Modify: `web/runway/index.html`

- [ ] **Step 1: Write `n1-runway-completed` flag in `showResults()`**

Find `function showResults()` (around line 987). At the very beginning of the function body, add:

```js
// Mark Runway as completed for progress tracking
localStorage.setItem("n1-runway-completed", "true");
```

- [ ] **Step 2: Retrofit email form to set `n1-email-captured` flag**

Find the email form submit handler for `n1-tool-email-form` in runway (around line 1130). Add as the FIRST line of the submit handler:

```js
localStorage.setItem("n1-email-captured", "true");
```

- [ ] **Step 3: Add LinkedIn URL share button**

Find the export section in runway results (where YAML export and Resumen export buttons are). Add a LinkedIn share button:

```html
<button id="share-linkedin-url" class="..." aria-label="Compartir en LinkedIn">
  <span class="material-symbols-outlined">share</span>
  Compartir en LinkedIn
</button>
```

Use the same styling class pattern as the existing export buttons in runway. Then wire the click handler:

```js
var shareLinkedInBtn = document.getElementById("share-linkedin-url");
if (shareLinkedInBtn) {
  shareLinkedInBtn.addEventListener("click", function () {
    var n1Url = "https://hardlypythonnmr.github.io/N1/";
    // Get the probable scenario months from the results
    var probableEl = document.getElementById("scenario-probable-months");
    var months = probableEl ? probableEl.textContent : null;
    var text = months
      ? "Tengo " +
        months +
        " de runway financiero para una transición de carrera. " +
        n1Url
      : n1Url;
    var shareUrl =
      "https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent(n1Url) +
      "&summary=" +
      encodeURIComponent(text);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  });
}
```

Note: verify the element ID for the "probable months" display by searching the runway results HTML. The exact ID may differ — find the element that shows the "Probable" scenario duration and use its ID.

- [ ] **Step 4: Verify**

Open `http://localhost:8765/runway/index.html`. Calculate runway. Check:

1. `localStorage.getItem('n1-runway-completed')` === `'true'`
2. LinkedIn button opens correct share URL
3. Email form sets flag

- [ ] **Step 5: Commit**

```bash
git add web/runway/index.html
git commit -m "feat(runway): add completion flag, email capture flag, LinkedIn share button"
```

---

## Task 7: Wire remaining 5 tools — email banner + LinkedIn share

**Files:**

- Modify: `web/compass/index.html`
- Modify: `web/bulls-eye/index.html`
- Modify: `web/mlq/index.html`
- Modify: `web/flow-logger/index.html`
- Modify: `web/profile/index.html`

For each tool, do two things:

1. Call `N1.showEmailCaptureBanner(resultsContainer)` at the point where results are first rendered
2. Add a LinkedIn share button

Do each tool as a separate commit.

### Compass

- [ ] **Step 1: Add email banner call**

Find the function that shows the results screen in compass (look for where `screen-results` is activated or where the radar chart is drawn). At the end of that function, after results are rendered, add:

```js
N1.showEmailCaptureBanner(document.getElementById("screen-results"));
```

- [ ] **Step 2: Add LinkedIn share button**

Find the export section in compass results. Add a button with the same pattern used in ghost-check (Task 5, Step 3). Wire the full click handler (including getElementById and addEventListener wrapper):

```js
var compassShareBtn = document.getElementById("share-linkedin-url");
if (compassShareBtn) {
  compassShareBtn.addEventListener("click", function () {
    var n1Url = "https://hardlypythonnmr.github.io/N1/";
    var compassResult = /* the result object with identity scores — verify variable name in compass results rendering code */;
    var score = compassResult ? Math.round(compassResult.overall * 10) / 10 : null;
    var label = compassResult ? compassResult.label : null; // e.g., "SOBRESALIENTE"
    var text =
      score && label
        ? "Mi adaptabilidad de carrera (CAAS-12) es " +
          label +
          " — " +
          score +
          "/5 en identidad profesional. " +
          n1Url
        : n1Url;
    var shareUrl =
      "https://www.linkedin.com/sharing/share-offsite/?url=" +
      encodeURIComponent(n1Url) +
      "&summary=" +
      encodeURIComponent(text);
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  });
}
```

Verify the exact variable name for the compass result object by reading the compass results rendering code.

- [ ] **Step 3: Commit**

```bash
git add web/compass/index.html
git commit -m "feat(compass): add email capture banner and LinkedIn share button"
```

### Bull's Eye

- [ ] **Step 4: Add email banner + LinkedIn share to Bull's Eye**

Find where Bull's Eye shows its results section (where the per-area interpretation cards appear). Add:

```js
N1.showEmailCaptureBanner(
  document.querySelector("#results-section") /* or correct ID */,
);
```

LinkedIn share text:

```js
var alignmentScore = /* the overall alignment percentage shown in the output */;
var text = 'Mi alineación de valores está al ' + alignmentScore + '%. ' + n1Url;
```

- [ ] **Step 5: Commit**

```bash
git add web/bulls-eye/index.html
git commit -m "feat(bulls-eye): add email capture banner and LinkedIn share button"
```

### MLQ-10

- [ ] **Step 6: Add email banner + LinkedIn share to MLQ-10**

Find where MLQ-10 renders its results (quadrant label, Presencia/Búsqueda scores). Add banner call. LinkedIn share text:

```js
var quadrant = /* quadrant label e.g. "Creciendo" */;
var presence = /* presence score */;
var search = /* search score */;
var text = 'Mi propósito de vida: ' + quadrant + ' — Presencia ' + presence + '/7, Búsqueda ' + search + '/7. ' + n1Url;
```

- [ ] **Step 7: Commit**

```bash
git add web/mlq/index.html
git commit -m "feat(mlq): add email capture banner and LinkedIn share button"
```

### Flow Logger

- [ ] **Step 8: Add email banner + LinkedIn share to Flow Logger**

Flow Logger renders results progressively (chart updates as activities are added). Call the banner after the first activity is logged (inside the add-activity handler, only when `activities.length === 1`):

```js
if (activities.length === 1) {
  N1.showEmailCaptureBanner(
    document.querySelector("#flow-map-section") /* or main */,
  );
}
```

LinkedIn share text — find the top zone from the activities array:

```js
var zoneCounts = {};
activities.forEach(function (a) {
  zoneCounts[a.zone] = (zoneCounts[a.zone] || 0) + 1;
});
var topZone = Object.keys(zoneCounts).sort(function (a, b) {
  return zoneCounts[b] - zoneCounts[a];
})[0];
var zoneLabels = {
  flow: "Flow",
  anxiety: "Ansiedad",
  boredom: "Aburrimiento",
  learning: "Aprendizaje",
};
var text =
  "Mi zona de rendimiento predominante es " +
  (zoneLabels[topZone] || topZone) +
  ". " +
  n1Url;
```

- [ ] **Step 9: Commit**

```bash
git add web/flow-logger/index.html
git commit -m "feat(flow-logger): add email capture banner and LinkedIn share button"
```

### Profile

- [ ] **Step 10: Add LinkedIn share button to Profile**

Profile already has a LinkedIn share button. Add a URL-share button alongside it. The share text uses the clarity score:

```js
var clarity = N1.computeProfileClarity(N1.loadProfile());
var text = clarity
  ? "Mi claridad de perfil N1 es del " + clarity.score + "%. " + n1Url
  : n1Url;
```

- [ ] **Step 11: Commit**

```bash
git add web/profile/index.html
git commit -m "feat(profile): add LinkedIn URL share button with clarity score"
```

---

## Task 8: Add progress badge to landing page and profile

**Files:**

- Modify: `web/index.html`
- Modify: `web/profile/index.html`

- [ ] **Step 1: Add progress badge HTML to `web/index.html`**

Find the hero section in the landing page (the section with "El sistema eres tú." heading). Inside it, after the hero heading and before the CTA buttons, add a badge container:

```html
<div
  id="progress-badge"
  class="hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-mono mb-4"
>
  <span class="material-symbols-outlined text-base">check_circle</span>
  <span id="progress-badge-text">0/7 herramientas completadas</span>
</div>
```

Then in the landing page `<script>` section (or DOMContentLoaded handler), add:

```js
document.addEventListener("DOMContentLoaded", function () {
  var badge = document.getElementById("progress-badge");
  var badgeText = document.getElementById("progress-badge-text");
  if (badge && badgeText && window.N1) {
    var count = N1.getCompletionCount();
    if (count.completed > 0) {
      badgeText.textContent =
        count.completed + "/" + count.total + " herramientas completadas";
      badge.classList.remove("hidden");
    }
  }
});
```

- [ ] **Step 2: Add progress badge to Profile page**

Find the profile page header section (where "Panel de Perfil Integrado N1" heading is). Add the same badge pattern with the same wiring logic. The badge should appear below the heading.

- [ ] **Step 3: Verify**

Open landing page with empty localStorage — badge hidden. Complete Bull's Eye. Open landing page — badge shows "2/7 herramientas completadas" (Bull's Eye + Profile both count).

- [ ] **Step 4: Commit**

```bash
git add web/index.html web/profile/index.html
git commit -m "feat: add completion progress badge to landing and profile pages"
```

---

## Task 9: Add Claridad de perfil card to Profile page

**Files:**

- Modify: `web/profile/index.html`

- [ ] **Step 1: Add clarity card HTML**

Find the profile page's KPI gauges section. After the existing KPI cards row, add:

```html
<div
  id="profile-clarity-section"
  class="hidden w-full glass-panel rounded-xl p-6 border border-outline-variant/20 mb-6"
>
  <div class="flex items-center justify-between mb-4">
    <div>
      <p
        class="font-mono text-[10px] uppercase tracking-widest text-tertiary mb-1"
      >
        Sistema N1
      </p>
      <h3 class="font-headline text-xl font-bold text-on-surface">
        Claridad de perfil N1
      </h3>
      <p id="clarity-based-on" class="text-xs text-on-surface-variant mt-1">
        Basado en 0/4 dimensiones completadas
      </p>
    </div>
    <div class="text-right">
      <span
        id="clarity-score"
        class="font-headline text-5xl font-black text-primary"
        >—</span
      >
      <span class="font-mono text-lg text-on-surface-variant">%</span>
    </div>
  </div>
  <div
    id="clarity-tension"
    class="hidden rounded-lg border border-warning/30 bg-warning/5 px-4 py-3 flex items-start gap-3"
  >
    <span
      class="material-symbols-outlined text-warning text-base mt-0.5 flex-shrink-0"
      >warning</span
    >
    <p id="clarity-tension-text" class="text-sm text-on-surface-variant"></p>
  </div>
</div>
```

- [ ] **Step 2: Wire the clarity card in JS**

In the profile page's data load function (after `N1.calcDimensionScores` is called), add:

```js
var clarityData = N1.computeProfileClarity(profile);
var claritySection = document.getElementById("profile-clarity-section");
if (clarityData && claritySection) {
  document.getElementById("clarity-score").textContent = clarityData.score;
  document.getElementById("clarity-based-on").textContent =
    "Basado en " + clarityData.basedOn + "/4 dimensiones completadas";
  claritySection.classList.remove("hidden");

  if (clarityData.tension) {
    var tensionEl = document.getElementById("clarity-tension");
    var tensionText = document.getElementById("clarity-tension-text");
    tensionText.textContent =
      "Tu " +
      clarityData.tension.low +
      " (" +
      Math.round(100 - clarityData.tension.spread / 2) +
      "%) " +
      "y tu " +
      clarityData.tension.high +
      " (" +
      Math.round(100 + clarityData.tension.spread / 2) +
      "%) " +
      "están desalineados. Eso puede generar fricción.";
    tensionEl.classList.remove("hidden");
  }
}
```

- [ ] **Step 3: Verify**

Open profile with data from Compass + Bull's Eye completed. Clarity card should appear with score and "Basado en 2/4 dimensiones." Test with a profile where values=80 and purpose=30 — tension card should show. With empty profile — section stays hidden.

- [ ] **Step 4: Commit**

```bash
git add web/profile/index.html
git commit -m "feat(profile): add Claridad de perfil N1 cross-dimension scoring card"
```

---

## Task 10: Final Plan 2 verification + deploy

- [ ] **Step 1: Manual browser verification**

Open each tool in the browser at `http://localhost:8765` and verify all 12 Plan 2 success criteria:

| Test                     | What to check                                                                     |
| ------------------------ | --------------------------------------------------------------------------------- |
| Email banner shown       | Ghost Check results → banner appears at top                                       |
| Email banner suppressed  | Complete second tool after dismissing banner → no banner                          |
| Email banner submit      | Submit email → `n1-email-captured = 'true'` in localStorage                       |
| Progress badge — zero    | Landing with empty localStorage → no badge                                        |
| Progress badge — partial | After Bull's Eye → badge shows "2/7"                                              |
| Progress badge — full    | Mock 7 completions in localStorage → badge shows "7/7"                            |
| Clarity score — partial  | Profile with 2 dimensions → "Basado en 2/4" label                                 |
| Clarity score — zero     | Profile with no data → clarity section hidden                                     |
| Tension shown            | Manually set profile with high values + low purpose spread → tension card visible |
| Tension hidden           | Profile with spread ≤30 → tension card hidden                                     |
| LinkedIn button          | All 7 tool export sections have share button                                      |
| LinkedIn URL             | Clicking opens linkedin.com/sharing/share-offsite URL in new tab                  |

- [ ] **Step 2: Push to production**

```bash
git push origin main
```

Check `gh run list --limit 1` for successful deploy. Verify live site at `https://hardlypythonnmr.github.io/N1/`.

---

## Notes for executor

- `web/assessment-engine.js` is loaded before all tool scripts. The new N1 methods are available on `window.N1` when any tool page loads.
- The Buttondown API key is embedded in the existing landing page form — use the same endpoint `https://buttondown.email/api/emails/embed-subscribe/n1-sistema` for the banner form action.
- For each tool's LinkedIn share handler: read the tool's existing results rendering code to find the exact variable names for score/label/verdict before wiring the handler.
- Ghost Check stores the last result in a `lastResult` variable (or similar) — search for where `displayResults` / `renderResults` stores its input parameter.
- The `Object.values` polyfill check in `getCompletionCount` is important — this app targets LATAM users who may use older browsers.
