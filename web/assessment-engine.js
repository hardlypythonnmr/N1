/* ════════════════════════════════════════
   N1 — El Sistema Eres Tu
   Assessment Engine v1.0
   Shared vanilla JS utility loaded by all static web tools.
   No dependencies, no build step, no ES modules.
   Exposes everything on window.N1.
   ════════════════════════════════════════ */

(function () {
  "use strict";

  /* ── INTERNAL UTILITIES ──────────────── */

  /**
   * Deep-merge source into target. Returns a new object (immutable).
   * Arrays in source replace arrays in target (no concat).
   */
  function deepMerge(target, source) {
    if (source === null || typeof source !== "object") return source;
    if (Array.isArray(source)) return source.slice();

    var result = Object.assign({}, target);
    Object.keys(source).forEach(function (key) {
      var srcVal = source[key];
      var tgtVal = target ? target[key] : undefined;
      if (
        srcVal !== null &&
        typeof srcVal === "object" &&
        !Array.isArray(srcVal)
      ) {
        result[key] = deepMerge(tgtVal, srcVal);
      } else {
        result[key] = srcVal;
      }
    });
    return result;
  }

  /**
   * Blank profile structure matching Profile Interchange Format v1.
   * All fields default to null / false / [].
   */
  function blankProfile() {
    return {
      version: "1.0",
      created: null,
      updated: null,
      language: "es",
      triage: {
        situation: null,
        career_path: null,
        specific_move: null,
        urgency: null,
      },
      values: {
        completed: false,
        mode: null,
        core_values: [],
        schwartz_profile: {
          self_direction: null,
          stimulation: null,
          hedonism: null,
          achievement: null,
          power: null,
          security: null,
          conformity: null,
          tradition: null,
          benevolence: null,
          universalism: null,
        },
        value_conflicts: [],
        bulls_eye: {
          work: null,
          relationships: null,
          personal_growth: null,
          leisure: null,
        },
        career_implications: [],
      },
      strengths: {
        completed: false,
        mode: null,
        signature_strengths: [],
        big_five: {
          openness: null,
          conscientiousness: null,
          extraversion: null,
          agreeableness: null,
          neuroticism: null,
        },
        self_efficacy: {
          mastery_experiences: [],
          vicarious_models: [],
          social_persuasion: [],
          physiological: null,
        },
        flow_activities: [],
        career_implications: [],
      },
      identity: {
        completed: false,
        mode: null,
        identity_status: null,
        adaptability: {
          concern: null,
          control: null,
          curiosity: null,
          confidence: null,
        },
        possible_selves: [],
        active_experiments: [],
        narrative_theme: null,
        limiting_beliefs: [],
      },
      purpose: {
        completed: false,
        mode: null,
        mlq: {
          presence: null,
          search: null,
          quadrant: null,
        },
        meaning_sources: {
          creative: null,
          experiential: null,
          attitudinal: null,
        },
        life_theme: null,
        purpose_practice: [],
        career_implications: [],
      },
      enrichment: {
        psychological_flexibility: null,
        career_decision_self_efficacy: null,
        psycap_hero: {
          hope: null,
          efficacy: null,
          resilience: null,
          optimism: null,
        },
        emotional_patterns: null,
        relational_context: null,
        somatic_signals: null,
      },
      synthesis: {
        reinforcements: [],
        conflicts: [],
        career_recommendations: [],
        next_actions: [],
      },
      evolution: {
        assessments: [],
        milestones: [],
        next_reassessment: null,
      },
    };
  }

  /**
   * Sanitize a string for use as plain text content (not HTML attributes).
   * Only used to make user-supplied question text safe.
   */
  function safeText(str) {
    return String(str || "");
  }

  /* ── YAML SERIALIZATION ──────────────── */

  /**
   * Serialize a JS value to YAML string at a given indentation level.
   * Pure string construction — no library.
   */
  function serializeYamlValue(value, indent) {
    var pad = "";
    for (var i = 0; i < indent; i++) pad += "  ";

    if (value === null || value === undefined) {
      return "null";
    }
    if (typeof value === "boolean") {
      return value ? "true" : "false";
    }
    if (typeof value === "number") {
      return String(value);
    }
    if (typeof value === "string") {
      // Quote strings that contain special YAML characters or are empty
      if (
        value === "" ||
        value.indexOf(":") !== -1 ||
        value.indexOf("#") !== -1 ||
        value.indexOf('"') !== -1 ||
        value.charAt(0) === " " ||
        value.charAt(value.length - 1) === " "
      ) {
        return '"' + value.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';
      }
      return value;
    }
    if (Array.isArray(value)) {
      if (value.length === 0) return "[]";
      var lines = [];
      value.forEach(function (item) {
        if (item !== null && typeof item === "object" && !Array.isArray(item)) {
          // Object items in an array
          var keys = Object.keys(item);
          var firstKey = keys[0];
          var firstLine =
            pad +
            "- " +
            firstKey +
            ": " +
            serializeYamlValue(item[firstKey], indent + 1);
          lines.push(firstLine);
          for (var k = 1; k < keys.length; k++) {
            lines.push(
              pad +
                "  " +
                keys[k] +
                ": " +
                serializeYamlValue(item[keys[k]], indent + 1),
            );
          }
        } else {
          lines.push(pad + "- " + serializeYamlValue(item, indent + 1));
        }
      });
      return "\n" + lines.join("\n");
    }
    if (typeof value === "object") {
      var objLines = [];
      Object.keys(value).forEach(function (key) {
        var childVal = value[key];
        var childStr = serializeYamlValue(childVal, indent + 1);
        if (childStr.charAt(0) === "\n") {
          objLines.push(pad + key + ":" + childStr);
        } else {
          objLines.push(pad + key + ": " + childStr);
        }
      });
      return "\n" + objLines.join("\n");
    }
    return String(value);
  }

  /* ── DOM BUILDING HELPERS ────────────── */

  /**
   * Create an element with optional className and textContent.
   * All text set via textContent — safe against XSS.
   */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = safeText(text);
    return node;
  }

  function attr(node, name, value) {
    node.setAttribute(name, value);
    return node;
  }

  /* ── N1 PUBLIC API ───────────────────── */

  var N1 = {};

  /* ── 1. N1.createAssessment(config) ──── */

  /**
   * Renders a one-question-per-screen assessment flow.
   * config: {
   *   containerId: string,
   *   questions: [{ id, text, type: 'likert5'|'likert7'|'choice', options? }],
   *   onComplete: function(answers) {}
   * }
   */
  N1.createAssessment = function (config) {
    var container = document.getElementById(config.containerId);
    if (!container) {
      console.error(
        "[N1] createAssessment: container #" +
          config.containerId +
          " not found",
      );
      return;
    }

    var questions = config.questions || [];
    if (questions.length === 0) {
      console.error("[N1] createAssessment: no questions provided");
      return;
    }

    var state = { current: 0, answers: {} };
    var autoAdvanceTimer = null;

    function getTotal() {
      return questions.length;
    }
    function getCurrent() {
      return state.current;
    }
    function getQuestion() {
      return questions[state.current];
    }

    function buildProgressBar(pct) {
      var wrap = el("div", "progress-bar");
      attr(wrap, "role", "progressbar");
      attr(wrap, "aria-valuenow", String(pct));
      attr(wrap, "aria-valuemin", "0");
      attr(wrap, "aria-valuemax", "100");
      var fill = el("div", "progress-fill");
      fill.style.width = pct + "%";
      wrap.appendChild(fill);
      return wrap;
    }

    function buildLikertInputs(q, index) {
      var scale = q.type === "likert7" ? 7 : 5;
      var endLabels5 = [
        "Totalmente en desacuerdo",
        "",
        "Neutral",
        "",
        "Totalmente de acuerdo",
      ];
      var endLabels7 = [
        "Muy en desacuerdo",
        "",
        "",
        "Neutral",
        "",
        "",
        "Muy de acuerdo",
      ];
      var endLabels = scale === 7 ? endLabels7 : endLabels5;

      var group = el("div", "likert");
      attr(group, "role", "radiogroup");
      attr(group, "aria-labelledby", "q-text-" + index);

      for (var v = 1; v <= scale; v++) {
        var isSelected = state.answers[q.id] === v;
        var optionDiv = el(
          "div",
          "likert-option" + (isSelected ? " selected" : ""),
        );

        var input = document.createElement("input");
        input.type = "radio";
        input.name = "q-" + q.id;
        input.id = "q-" + q.id + "-" + v;
        input.value = String(v);
        if (isSelected) input.checked = true;

        var label = document.createElement("label");
        attr(label, "for", "q-" + q.id + "-" + v);

        var btnSpan = el("span", "likert-btn", String(v));
        var labelSpan = el("span", "likert-label", endLabels[v - 1] || "");

        label.appendChild(btnSpan);
        label.appendChild(labelSpan);
        optionDiv.appendChild(input);
        optionDiv.appendChild(label);
        group.appendChild(optionDiv);
      }

      var endpoints = el("div", "likert-endpoints");
      endpoints.appendChild(el("span", null, "Totalmente en desacuerdo"));
      endpoints.appendChild(el("span", null, "Totalmente de acuerdo"));
      // Return both as a fragment
      var frag = document.createDocumentFragment();
      frag.appendChild(group);
      frag.appendChild(endpoints);
      return frag;
    }

    function buildChoiceInputs(q, index) {
      var group = el("div", "choice-options");
      attr(group, "role", "radiogroup");
      attr(group, "aria-labelledby", "q-text-" + index);

      (q.options || []).forEach(function (opt) {
        var optId = "q-" + q.id + "-opt-" + opt.value;
        var isSelected = state.answers[q.id] === opt.value;

        var label = document.createElement("label");
        label.className = "choice-option" + (isSelected ? " selected" : "");
        attr(label, "for", optId);

        var input = document.createElement("input");
        input.type = "radio";
        input.name = "q-" + q.id;
        input.id = optId;
        input.value = String(opt.value);
        if (isSelected) input.checked = true;

        // Use textContent for option labels (safe)
        var labelText = document.createTextNode(safeText(opt.label));
        label.appendChild(input);
        label.appendChild(labelText);
        group.appendChild(label);
      });

      return group;
    }

    function renderQuestion(q, index) {
      container.innerHTML = "";

      var isFirst = index === 0;
      var questionNum = index + 1;
      var total = getTotal();
      var pct = Math.round((index / total) * 100);

      // Progress bar
      container.appendChild(buildProgressBar(pct));

      // Question screen wrapper
      var screen = el("div", "question-screen");
      attr(screen, "id", "n1-question-screen");

      // Question meta
      var meta = el(
        "p",
        "question-meta",
        "Pregunta " + questionNum + " de " + total,
      );
      attr(meta, "id", "q-text-" + index);
      screen.appendChild(meta);

      // Question text
      var qText = el("p", "question-text", q.text);
      screen.appendChild(qText);

      // Inputs
      if (q.type === "likert5" || q.type === "likert7") {
        screen.appendChild(buildLikertInputs(q, index));
      } else if (q.type === "choice") {
        screen.appendChild(buildChoiceInputs(q, index));
      }

      // Navigation
      var nav = el("div", "question-nav");

      var backBtn = el(
        "button",
        "question-nav-back" + (isFirst ? " hidden" : ""),
        "Anterior",
      );
      backBtn.type = "button";
      attr(backBtn, "id", "n1-back-btn");
      if (isFirst) {
        attr(backBtn, "aria-hidden", "true");
        attr(backBtn, "tabindex", "-1");
      }
      nav.appendChild(backBtn);

      var hasAnswer =
        state.answers[q.id] !== undefined && state.answers[q.id] !== null;
      var isLast = index === getTotal() - 1;
      var nextBtn = el(
        "button",
        "btn btn-primary",
        isLast ? "Ver resultados" : "Siguiente",
      );
      nextBtn.type = "button";
      attr(nextBtn, "id", "n1-next-btn");
      if (!hasAnswer) nextBtn.disabled = true;
      nav.appendChild(nextBtn);

      screen.appendChild(nav);
      container.appendChild(screen);

      bindEvents();
    }

    function advance() {
      if (getCurrent() < getTotal() - 1) {
        state = Object.assign({}, state, { current: state.current + 1 });
        renderQuestion(getQuestion(), getCurrent());
      } else {
        if (typeof config.onComplete === "function") {
          config.onComplete(Object.assign({}, state.answers));
        }
      }
    }

    function goBack() {
      if (getCurrent() > 0) {
        state = Object.assign({}, state, { current: state.current - 1 });
        renderQuestion(getQuestion(), getCurrent());
      }
    }

    function recordAnswer(questionId, value) {
      var newAnswers = Object.assign({}, state.answers);
      newAnswers[questionId] = value;
      state = Object.assign({}, state, { answers: newAnswers });
    }

    function bindEvents() {
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
      }

      var nextBtn = document.getElementById("n1-next-btn");
      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          advance();
        });
      }

      var backBtn = document.getElementById("n1-back-btn");
      if (backBtn && !backBtn.classList.contains("hidden")) {
        backBtn.addEventListener("click", function () {
          goBack();
        });
      }

      var radios = container.querySelectorAll('input[type="radio"]');
      radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
          var q = getQuestion();
          var rawValue = radio.value;
          var value =
            q.type === "likert5" || q.type === "likert7"
              ? parseFloat(rawValue)
              : rawValue;
          recordAnswer(q.id, value);

          // Update selected state
          container
            .querySelectorAll(".likert-option, .choice-option")
            .forEach(function (optEl) {
              optEl.classList.remove("selected");
            });
          var parentOption =
            radio.closest(".likert-option") || radio.closest(".choice-option");
          if (parentOption) parentOption.classList.add("selected");

          var nextBtn2 = document.getElementById("n1-next-btn");
          if (nextBtn2) nextBtn2.disabled = false;

          // Auto-advance on Likert after 400ms (Typeform pattern)
          if (q.type === "likert5" || q.type === "likert7") {
            if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
            autoAdvanceTimer = setTimeout(function () {
              advance();
            }, 400);
          }
        });
      });

      // Keyboard navigation (per D-06)
      document.removeEventListener("keydown", handleKeydown);
      document.addEventListener("keydown", handleKeydown);
    }

    function handleKeydown(e) {
      if (!document.getElementById("n1-question-screen")) {
        document.removeEventListener("keydown", handleKeydown);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "Enter") {
        var nextBtn = document.getElementById("n1-next-btn");
        if (nextBtn && !nextBtn.disabled) advance();
      } else if (e.key === "ArrowLeft") {
        if (getCurrent() > 0) goBack();
      }
    }

    // Initial render
    renderQuestion(getQuestion(), getCurrent());

    return {
      getAnswers: function () {
        return Object.assign({}, state.answers);
      },
      getCurrentIndex: function () {
        return state.current;
      },
      destroy: function () {
        document.removeEventListener("keydown", handleKeydown);
        if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
      },
    };
  };

  /* ── 2. N1.loadProfile() ────────────── */

  /**
   * Reads the n1-profile from localStorage.
   * Returns parsed JSON object or null if missing/invalid.
   */
  N1.loadProfile = function () {
    try {
      var raw = localStorage.getItem("n1-profile");
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : null;
    } catch (e) {
      console.warn("[N1] loadProfile: failed to parse stored profile", e);
      return null;
    }
  };

  /* ── 3. N1.saveToProfile(section, data) ── */

  /**
   * Reads existing profile (or creates blank one), deep-merges data into
   * profile[section], updates timestamps, writes back to localStorage.
   * Returns the updated profile object (immutable — new object each call).
   */
  N1.saveToProfile = function (section, data) {
    var existing = N1.loadProfile() || blankProfile();
    var now = new Date().toISOString();

    var updatedSection = deepMerge(existing[section], data);
    var updatedProfile = Object.assign({}, existing);
    updatedProfile[section] = updatedSection;
    updatedProfile.updated = now;
    if (!updatedProfile.created) {
      updatedProfile.created = now;
    }

    try {
      localStorage.setItem("n1-profile", JSON.stringify(updatedProfile));
    } catch (e) {
      console.error("[N1] saveToProfile: failed to write to localStorage", e);
    }

    return updatedProfile;
  };

  /* ── 4. N1.generateYAML(profile) ──────── */

  /**
   * Converts profile JSON to YAML string.
   * Pure string construction — no library.
   * Includes version: "1.0" header comment block.
   */
  N1.generateYAML = function (profile) {
    if (!profile || typeof profile !== "object") {
      console.error("[N1] generateYAML: invalid profile object");
      return "";
    }

    var lines = [
      "# ════════════════════════════════════════",
      "# N1 Self-Knowledge Profile v" + (profile.version || "1.0"),
      "# El Sistema Eres Tu — Busca Adentro",
      "# ════════════════════════════════════════",
      "",
    ];

    var topLevelFields = ["version", "created", "updated", "language"];
    topLevelFields.forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(profile, key)) {
        lines.push(key + ": " + serializeYamlValue(profile[key], 0));
      }
    });
    lines.push("");

    var sectionFields = [
      "triage",
      "values",
      "strengths",
      "identity",
      "purpose",
      "enrichment",
      "synthesis",
      "evolution",
    ];
    var sectionComments = {
      triage: "# ── TRIAGE ──────────────────────────────",
      values: "# ── VALUES (ACT + Schwartz) ────────────",
      strengths: "# ── STRENGTHS (VIA + Bandura + Flow + Big Five) ──",
      identity: "# ── IDENTITY (Ibarra + Marcia + Savickas) ──",
      purpose: "# ── PURPOSE (Frankl + MLQ + Ryff) ──────",
      enrichment: "# ── ENRICHMENT LAYERS ──────────────────",
      synthesis: "# ── CROSS-DIMENSION SYNTHESIS ──────────",
      evolution: "# ── EVOLUTION ──────────────────────────",
    };

    sectionFields.forEach(function (section) {
      if (!Object.prototype.hasOwnProperty.call(profile, section)) return;
      var value = profile[section];
      lines.push(
        sectionComments[section] || "# ── " + section.toUpperCase() + " ──",
      );
      lines.push(section + ":");

      if (value === null || value === undefined) {
        lines[lines.length - 1] += " null";
      } else if (typeof value === "object" && !Array.isArray(value)) {
        Object.keys(value).forEach(function (key) {
          var childVal = value[key];
          var childStr = serializeYamlValue(childVal, 1);
          if (childStr.charAt(0) === "\n") {
            lines.push("  " + key + ":" + childStr);
          } else {
            lines.push("  " + key + ": " + childStr);
          }
        });
      }
      lines.push("");
    });

    return lines.join("\n");
  };

  /* ── 5. N1.exportYAML(section, data) ──── */

  /**
   * Saves section data to profile, generates full YAML, triggers download,
   * and copies to clipboard.
   */
  N1.exportYAML = function (section, data) {
    var profile = N1.saveToProfile(section, data);
    var yaml = N1.generateYAML(profile);

    try {
      var blob = new Blob([yaml], { type: "text/yaml;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.download = "n1-profile.yaml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
    } catch (e) {
      console.error("[N1] exportYAML: download failed", e);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(yaml).catch(function (e) {
        console.warn("[N1] exportYAML: clipboard write failed", e);
        N1._fallbackCopy(yaml);
      });
    } else {
      N1._fallbackCopy(yaml);
    }

    return yaml;
  };

  /* ── 6. N1.generateScorecard(config) ──── */

  /**
   * Generates a 1200x628px PNG scorecard via HTML Canvas.
   * config: {
   *   title: string,
   *   scores: [{ label, value, max }],
   *   interpretation: string,
   *   chartType: 'bar' | 'radar' | 'quadrant',
   *   accentColor: string (optional, default: "#E85D26") — header + bar fill color,
   *   subtitle: string (optional) — rendered below title in header,
   *   badge: string (optional) — large number rendered right-aligned in header
   * }
   * Returns data URL (PNG). Canvas text content is data, not HTML — safe.
   */

  /**
   * Private drawing function — contains all scorecard drawing logic.
   * Called by both generateScorecard (1200x628) and generateScorecardPreview (via scale).
   */
  function drawScorecardToContext(ctx, config, canvasWidth, canvasHeight) {
    var COLOR_ORANGE = "#E85D26";
    var COLOR_BLACK = "#1A1A1A";
    var COLOR_WHITE = "#FFFFFF";
    var COLOR_SURFACE = "#F8F8F8";
    var COLOR_MUTED = "#6B6B6B";
    var COLOR_BORDER = "#E0E0E0";

    /* ── per-tool customization ── */
    var accentColor = config.accentColor || COLOR_ORANGE;

    var headerHeight = Math.round(canvasHeight * 0.127); // ~80px at 628h
    var footerY = Math.round(canvasHeight * 0.892); // ~560px at 628h
    var footerHeight = canvasHeight - footerY;

    // Background
    ctx.fillStyle = COLOR_WHITE;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Header band
    ctx.fillStyle = accentColor;
    ctx.fillRect(0, 0, canvasWidth, headerHeight);

    // N1 logo in header
    ctx.fillStyle = COLOR_WHITE;
    ctx.font = 'bold 36px "Space Mono", monospace';
    ctx.fillText("N1", 48, 52);

    // Title in header (all text drawn to canvas — not injected as HTML)
    var title = safeText(config.title || "Resultados");
    ctx.fillStyle = COLOR_WHITE;
    ctx.font = 'bold 24px "Space Mono", monospace';
    ctx.fillText(title, 120, 52);

    /* ── per-tool customization ── */
    // Subtitle: rendered below title in header when provided
    if (config.subtitle) {
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = '14px "DM Sans", sans-serif';
      ctx.fillText(safeText(config.subtitle), 120, 70);
    }

    // Badge: large number right-aligned in header when provided
    if (config.badge) {
      ctx.fillStyle = COLOR_WHITE;
      ctx.font = 'bold 32px "Space Mono", monospace';
      ctx.textAlign = "right";
      ctx.fillText(safeText(config.badge), canvasWidth - 48, 52);
      ctx.textAlign = "left";
    }

    // Footer band
    ctx.fillStyle = COLOR_SURFACE;
    ctx.fillRect(0, footerY, canvasWidth, footerHeight);
    ctx.fillStyle = COLOR_MUTED;
    ctx.font = '16px "Space Mono", monospace';
    ctx.fillText("N1 — el sistema eres tú", 48, footerY + 38);
    ctx.fillStyle = COLOR_BORDER;
    ctx.fillRect(0, footerY, canvasWidth, 1);

    var scores = config.scores || [];
    var chartType = config.chartType || "bar";
    var contentTop = 100;
    var contentBottom = 548;
    var contentHeight = contentBottom - contentTop;

    if (chartType === "bar" && scores.length > 0) {
      var barAreaLeft = 48;
      var barAreaRight = 600;
      var barAreaWidth = barAreaRight - barAreaLeft;
      var barCount = scores.length;
      var barHeight = Math.min(
        36,
        Math.floor((contentHeight - 20) / barCount) - 12,
      );
      var barSpacing = Math.floor((contentHeight - 20) / barCount);
      var barStartY = contentTop + 20;

      scores.forEach(function (score, i) {
        var y = barStartY + i * barSpacing;
        var maxVal = score.max || 10;
        var ratio = Math.min(1, Math.max(0, (score.value || 0) / maxVal));
        var fillWidth = Math.round(barAreaWidth * ratio);

        ctx.fillStyle = COLOR_BLACK;
        ctx.font = '500 15px "DM Sans", sans-serif';
        ctx.fillText(safeText(score.label || ""), barAreaLeft, y - 4);

        ctx.fillStyle = COLOR_BORDER;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(barAreaLeft, y, barAreaWidth, barHeight, 4);
        } else {
          ctx.rect(barAreaLeft, y, barAreaWidth, barHeight);
        }
        ctx.fill();

        if (fillWidth > 0) {
          ctx.fillStyle = accentColor;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(barAreaLeft, y, fillWidth, barHeight, 4);
          } else {
            ctx.rect(barAreaLeft, y, fillWidth, barHeight);
          }
          ctx.fill();
        }

        ctx.fillStyle = COLOR_BLACK;
        ctx.font = 'bold 15px "Space Mono", monospace';
        ctx.fillText(
          (typeof score.value === "number"
            ? score.value.toFixed(1)
            : safeText(score.value || "—")) +
            " / " +
            maxVal,
          barAreaRight + 16,
          y + barHeight / 2 + 5,
        );
      });
    } else if (chartType === "quadrant" && scores.length >= 2) {
      var qLeft = 80;
      var qTop = contentTop + 20;
      var qSize = Math.min(contentHeight - 40, 420);
      var qCenterX = qLeft + qSize / 2;
      var qCenterY = qTop + qSize / 2;

      ctx.strokeStyle = COLOR_BORDER;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(qCenterX, qTop);
      ctx.lineTo(qCenterX, qTop + qSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(qLeft, qCenterY);
      ctx.lineTo(qLeft + qSize, qCenterY);
      ctx.stroke();

      ctx.fillStyle = COLOR_MUTED;
      ctx.font = '13px "DM Sans", sans-serif';
      ctx.fillText("FULFILLMENT", qCenterX + 8, qTop + 20);
      ctx.fillText("SEARCHING", qCenterX + 8, qTop + qSize - 8);
      ctx.fillText("SEEKING", qLeft + 4, qTop + 20);
      ctx.fillText("DISENGAGED", qLeft + 4, qTop + qSize - 8);

      var xScore = scores[0];
      var yScore = scores[1];
      var xMax = xScore.max || 7;
      var yMax = yScore.max || 7;
      var dotX = qLeft + (xScore.value / xMax) * qSize;
      var dotY = qTop + qSize - (yScore.value / yMax) * qSize;

      ctx.fillStyle = COLOR_ORANGE;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 10, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Fallback: simple score list
      var listY = contentTop + 40;
      scores.forEach(function (score) {
        ctx.fillStyle = COLOR_BLACK;
        ctx.font = '500 18px "DM Sans", sans-serif';
        ctx.fillText(
          safeText((score.label || "") + ": " + (score.value || "—")),
          48,
          listY,
        );
        listY += 36;
      });
    }

    // Interpretation text (right column) — all canvas text, not HTML
    if (config.interpretation) {
      var interpLeft = 640;
      var interpTop2 = contentTop + 20;
      var interpWidth = 520;
      var interpText = safeText(config.interpretation);

      ctx.fillStyle = COLOR_SURFACE;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(interpLeft, interpTop2, interpWidth, 420, 8);
      } else {
        ctx.rect(interpLeft, interpTop2, interpWidth, 420);
      }
      ctx.fill();

      ctx.fillStyle = COLOR_MUTED;
      ctx.font = '13px "Space Mono", monospace';
      ctx.fillText("INTERPRETACION", interpLeft + 20, interpTop2 + 28);

      ctx.fillStyle = COLOR_BLACK;
      ctx.font = '15px "DM Sans", sans-serif';
      var words = interpText.split(" ");
      var interpLine = "";
      var interpY = interpTop2 + 56;
      var maxWidth = interpWidth - 40;
      var lineHeight = 22;

      for (var wi = 0; wi < words.length; wi++) {
        var testLine = interpLine + (interpLine ? " " : "") + words[wi];
        var metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && interpLine !== "") {
          ctx.fillText(interpLine, interpLeft + 20, interpY);
          interpLine = words[wi];
          interpY += lineHeight;
          if (interpY > interpTop2 + 400) {
            ctx.fillText(interpLine + "...", interpLeft + 20, interpY);
            interpLine = "";
            break;
          }
        } else {
          interpLine = testLine;
        }
      }
      if (interpLine) ctx.fillText(interpLine, interpLeft + 20, interpY);
    }
  }

  N1.generateScorecard = function (config) {
    var canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 628;
    var ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("[N1] generateScorecard: Canvas 2D context not available");
      return null;
    }

    drawScorecardToContext(ctx, config, 1200, 628);
    return canvas.toDataURL("image/png");
  };

  /* ── 6b. N1.generateScorecardPreview(config) ── */
  /**
   * Renders a 600x314px preview thumbnail of a scorecard.
   * Same config as generateScorecard(). Returns PNG data URL.
   * Used for in-tool display before full-size download.
   */
  N1.generateScorecardPreview = function (config) {
    var canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 314;
    var ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("[N1] generateScorecardPreview: Canvas 2D not available");
      return null;
    }

    ctx.scale(0.5, 0.5);
    drawScorecardToContext(ctx, config, 1200, 628);
    return canvas.toDataURL("image/png");
  };

  /* ── 7. N1.downloadScorecard(dataUrl, filename) ── */

  /**
   * Triggers download of a scorecard PNG data URL.
   */
  N1.downloadScorecard = function (dataUrl, filename) {
    if (!dataUrl) {
      console.error("[N1] downloadScorecard: no dataUrl provided");
      return;
    }
    var link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename || "n1-scorecard.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ── 8. N1.copyLinkedInText(text) ──────── */

  /**
   * Copies text to clipboard. Returns Promise.
   */
  N1.copyLinkedInText = function (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function (e) {
        console.warn(
          "[N1] copyLinkedInText: navigator.clipboard failed, trying fallback",
          e,
        );
        return N1._fallbackCopy(text);
      });
    }
    return Promise.resolve(N1._fallbackCopy(text));
  };

  /**
   * Fallback clipboard copy using execCommand.
   * Text is set via .value (textarea) — safe against XSS.
   */
  N1._fallbackCopy = function (text) {
    var ta = document.createElement("textarea");
    ta.value = safeText(text);
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    ta.style.left = "-9999px";
    ta.setAttribute("aria-hidden", "true");
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    var success = false;
    try {
      success = document.execCommand("copy");
    } catch (e) {
      console.warn("[N1] _fallbackCopy: execCommand failed", e);
    }
    document.body.removeChild(ta);
    return success;
  };

  /* ── 9. N1.getSafetyDisclaimer() ──────── */

  /**
   * Returns a DOM node containing the verbatim N1 safety disclaimer.
   * Built via safe DOM methods — no innerHTML used.
   */
  N1.getSafetyDisclaimer = function () {
    var wrapper = el("div", "disclaimer");

    var p1 = el(
      "p",
      null,
      "N1 es una herramienta de orientaci\u00f3n profesional basada en investigaci\u00f3n. " +
        "No es terapia, no es asesor\u00eda psicol\u00f3gica, y no reemplaza la orientaci\u00f3n " +
        "de un profesional de salud mental o coach certificado.",
    );

    var p2 = el(
      "p",
      null,
      "Si est\u00e1s atravesando una crisis emocional severa, busc\u00e1 apoyo profesional.",
    );

    wrapper.appendChild(p1);
    wrapper.appendChild(p2);
    return wrapper;
  };

  /* ── 10. N1.initLocalStorageSafe() ──── */

  /**
   * Checks localStorage availability.
   * Returns true if available, false if not.
   * Shows a user-visible banner (built with safe DOM) if unavailable.
   */
  N1.initLocalStorageSafe = function () {
    var available = false;
    try {
      var testKey = "__n1_ls_test__";
      localStorage.setItem(testKey, "1");
      localStorage.removeItem(testKey);
      available = true;
    } catch (e) {
      available = false;
    }

    if (!available) {
      var banner = el("div", "disclaimer");
      banner.style.margin = "16px";

      var strong = el("strong", null, "Atenci\u00f3n: ");
      var msgText = document.createTextNode(
        "Tu navegador no permite guardar datos localmente. " +
          "Los resultados se mostrar\u00e1n pero no se guardar\u00e1n.",
      );
      var p = document.createElement("p");
      p.appendChild(strong);
      p.appendChild(msgText);
      banner.appendChild(p);

      var target =
        document.querySelector(".container") ||
        document.querySelector("main") ||
        document.body;
      if (target.firstChild) {
        target.insertBefore(banner, target.firstChild);
      } else {
        target.appendChild(banner);
      }
      console.warn("[N1] localStorage not available — data will not persist");
    }

    return available;
  };

  /* ── TOAST UTILITY ──────────────────── */

  /**
   * Shows a brief toast notification.
   * Text set via textContent — safe.
   */
  N1.showToast = function (message, duration) {
    duration = duration || 2500;
    var toast = document.querySelector(".toast");
    if (!toast) {
      toast = el("div", "toast");
      attr(toast, "role", "status");
      attr(toast, "aria-live", "polite");
      document.body.appendChild(toast);
    }
    toast.textContent = safeText(message);
    toast.classList.add("visible");
    setTimeout(function () {
      toast.classList.remove("visible");
    }, duration);
  };

  /* ── EXPOSE ON WINDOW ────────────────── */

  window.N1 = N1;
})();
