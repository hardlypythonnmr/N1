# DISCOVERY — Top-Down Communication Integration

**Date:** 2026-03-31
**Scope:** Integrate top-down communication (announce → say it → synthesize) as structural backbone of N1 LinkedIn content system.

---

## What Exists

### Primary file: `skill.md` (1177 lines)

The N1 post system is a self-learning LinkedIn content engine with:

| Component      | Lines     | What it does                                             |
| -------------- | --------- | -------------------------------------------------------- |
| PASO 0         | 1-93      | Context loading: meta files + LinkedIn scrape            |
| Voice (La voz) | 94-233    | Voice DNA, 5-axis tone, audience data                    |
| Invocacion     | 237-243   | Entry points (/n1-post, scan, pick, review, weekly)      |
| PASO 0.5       | 248-294   | Timing analysis (COT slots, tier days, spacing)          |
| PASO 0.7       | 297-443   | Weekly planning (social media advisor, 5-day roster)     |
| PASO 1         | 445-514   | Trending topic scan (global + ecosystem, 10-15 searches) |
| PASO 2         | 517-603   | Generate 5 options (mode × domain × trending)            |
| Los 9 modos    | 606-669   | 10 mental postures (not templates)                       |
| Dominios       | 671-706   | 8 domains + 12 brand themes                              |
| PASO 3         | 710-798   | Write the post (18 voice rules + format-specific rules)  |
| PASO 3.5       | 830-877   | Publication variants (A/B/C by slot energy)              |
| PASO 4         | 880-886   | Confirm and save                                         |
| PASO 5         | 889-969   | Learning capture (7 meta file updates)                   |
| /review        | 974-1036  | Post-publish analytics + pattern promotion               |
| Anti-patrones  | 1039-1068 | Static anti-patterns (19 rules)                          |
| Timing ref     | 1113-1177 | LinkedIn timing data (16 sources)                        |

### Adjacent files

| File                | Location                       | Relevance                                                                                          |
| ------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------- |
| voice-guide.md      | C:/N1/shared/                  | Canonical voice spec v3 (259 lines). Colombian voseo, anti-corporate prohibitions, citation rules. |
| continuous-learning | C:/Users/nicom/.claude/skills/ | Hook-based instinct system. Captures patterns from sessions.                                       |
| settings.json       | C:/Users/nicom/.claude/        | Hooks: PreToolUse/PostToolUse observation, prompt enhancer, auto-evolve at Stop                    |

### Current structural model

Posts are generated through **mode × domain** intersection. Modes are mental postures, not templates. The current "canonical structure" for the default enne.3 mode is:

1. Quote/dato as first block — no intro, no context
2. One observation that reframes — one line, two max
3. Final parenthetical that IS the punchline — meta, absurdist, or ironic
4. Stop. No closing. No moral.

Other modes have implicit structures but they're described as postures, not phase sequences. There is NO explicit structural framework that spans all modes.

---

## What Top-Down Communication Will Touch

### Direct integration points

1. **PASO 3 voice rules** (lines 710-798) — Top-down adds a structural layer ABOVE the 18 voice rules. The voice rules govern HOW you say things; top-down governs the SEQUENCE of what you say.

2. **Los 9 modos** (lines 606-669) — Each mode currently has an implicit flow. Top-down must map onto each mode without flattening their distinct character.

3. **PASO 2 option format** (lines 536-543) — The 5 options currently show hook + angle. Top-down may want to show the announce/thesis upfront.

4. **Cierres section** (lines 779-786) — Currently allows: stop, open question, image/analogy, reaction. Top-down's "synthesize" phase must coexist with these closer types.

5. **Anti-patrones** (lines 1039-1068) — "Hook + dato + reflexion + CTA" is explicitly banned. Top-down's 3-phase structure must NOT become a new predictable template.

6. **enne.3 default** (lines 153-187) — 40-70 words. The 3-phase structure must compress gracefully at this length.

### Indirect touches

7. **Format-specific rules** (lines 741-767) — Polls, carousels, text+image each have their own structure. Top-down must define how it maps per format.

8. **PASO 3.5 variants** (lines 830-877) — Variants adjust energy by slot. Top-down phases should remain stable across variants (only delivery changes, not structure).

9. **Learning system** (lines 889-969) — PASO 5 captures patterns. Top-down adherence/deviation should be trackable.

---

## Anticipated Conflicts

### CONFLICT 1: Predictability vs. Structure

**The problem:** Anti-pattern #15 says "Si dos posts seguidos tienen la misma forma, fallaste." Top-down is inherently a repeating 3-phase structure. If every post visibly follows announce→say→synthesize, it becomes the new "Hook + dato + reflexion + CTA" — exactly what's banned.

**Resolution direction:** Top-down must be an INVISIBLE scaffold. The phases should be present in the post's logic, not in its visible form. The reader should never think "oh, this is the announce phase." The modes still control the surface texture.

### CONFLICT 2: enne.3 Compression

**The problem:** Default posts are 40-70 words. Three distinct phases in 50 words means ~17 words per phase. That's a tweet, not a framework application.

**Resolution direction:** At enne.3 length, the 3 phases MERGE. The quote IS the announce, the reframe IS the argument, the parenthetical IS the synthesis. Top-down becomes a quality check ("did this post announce, argue, and synthesize?") rather than a visible structure.

### CONFLICT 3: Open Endings vs. Synthesis

**The problem:** Mode 6 ("No tengo cierre para esto") and the closer rule "Quedarse con la pregunta" explicitly avoid closure. Top-down's "synthesize" phase demands compression + reframe.

**Resolution direction:** Synthesis ≠ closure. "No se que hacer con eso todavia" IS a synthesis — it compresses the preceding argument into an honest admission. The synthesis phase can be: a reframe, a compression, an open question that RECONTEXTUALIZES, or deliberate silence that lets the reader synthesize.

### CONFLICT 4: Kubrick Rule vs. Announce

**The problem:** Voice rule #2 says "Nunca expliques lo que el lector puede inferir." A literal announce ("I'm going to tell you about X") violates this.

**Resolution direction:** The announce is NOT a meta-announcement. It's the thesis dropped cold. "55% no negocia. 89% de empleadores estan dispuestos." — that IS the announce. It frames what the post is about without explaining it.

### CONFLICT 5: "Sin estructura predecible"

**The problem:** The anti-patterns explicitly ban predictable structure. A formal 3-phase framework risks becoming exactly that.

**Resolution direction:** The framework must specify that the IMPLEMENTATION varies per mode while the LOGIC (announce → argue → synthesize) is constant. Like how a sonnet always has 14 lines but can feel completely different each time.

---

## What Does NOT Need to Change

- PASO 0 (context loading) — unaffected
- PASO 0.5 (timing) — unaffected
- PASO 0.7 (weekly planning) — unaffected
- PASO 1 (trending scan) — unaffected
- Domains and brand themes — unaffected
- Learning system architecture — unaffected (but may add top-down adherence tracking)
- Timing reference — unaffected
- Voice guide (shared/) — unaffected (top-down is skill-level, not voice-level)
- Continuous learning hooks — unaffected

---

## Conclusion

Top-down communication is a **structural logic layer** that sits between the modes (which define posture) and the voice rules (which define delivery). It should be:

- **Invisible to the reader** — no McKinsey smell
- **Visible to the writer** — a quality check during PASO 3
- **Mode-adaptive** — each mode implements the 3 phases differently
- **Length-adaptive** — merges phases at enne.3 length, separates them at 150+ words
- **Compatible with open endings** — synthesis ≠ closure
