# PLAN — Top-Down Communication Framework for N1

**Date:** 2026-03-31
**Depends on:** DISCOVERY.md

---

## The Schema

Top-down communication has 3 phases:

| Phase | Consulting name | N1 adaptation | Function                                                                               |
| ----- | --------------- | ------------- | -------------------------------------------------------------------------------------- |
| **A** | Announce        | **FRAME**     | Drop the thesis, the tension, or the lens. The reader knows what territory they're in. |
| **B** | Say it          | **BUILD**     | The argument, evidence, story, reframe, or observation that earns the frame.           |
| **C** | Synthesize      | **LAND**      | Compress + reframe for takeaway. NOT a summary. A new angle on what was just said.     |

### Why rename the phases

"Announce / Say it / Synthesize" carries McKinsey DNA. Using **FRAME / BUILD / LAND** preserves the logic while matching the N1 voice:

- **FRAME** — not "I'm about to tell you X." It's dropping the reader into a territory with zero preamble. A quote, a number, a contradiction. The frame speaks for itself.
- **BUILD** — not a structured argument with headers. It's the observation, the reframe, the story, the data. The part where the author processes in real time.
- **LAND** — not "in conclusion." It's where the post hits ground. Could be a punchline, a reframe, an open question, deliberate silence, or a parenthetical that changes everything. Landing ≠ closing. Sometimes landing is leaving the reader mid-air on purpose.

---

## Design Decisions

### Decision 1: Hook vs. Frame

**Question:** Is the hook the Frame, or does the hook lead into the Frame?

**Decision: The hook IS the Frame.**

Rationale: N1 posts already drop the reader in with zero preamble (voice rule: "Quote o dato como primer bloque — sin introduccion, sin contexto"). The hook's job is to establish territory. That IS framing. Adding a separate "frame" before the hook would create preamble — exactly what the system prohibits.

**Implementation:**

- The first 1-3 lines of any N1 post = FRAME phase
- No new structural element needed — this formalizes what already works
- The hook checklist in PASO 2 now doubles as a Frame quality check

### Decision 2: Closer vs. Land

**Question:** Does synthesis happen before the reframe closer, or IS synthesis the closer?

**Decision: LAND encompasses the closer. They are the same thing.**

Rationale: The current closer options (silence, open question, image/analogy, reaction) are all forms of landing. "Reframe closers > question closers" is already a synthesis preference — a reframe IS a compression + new angle.

**Implementation:**

- LAND = the final element of the post (last 1-3 lines, or silence)
- All existing closer types are valid LAND implementations
- The hierarchy "reframe closers > question closers" becomes "reframe LANDs > question LANDs"
- New quality check: does the LAND add something the BUILD didn't say explicitly? If it just restates, it fails.

### Decision 3: Short Posts (enne.3, <70 words)

**Question:** How does FRAME/BUILD/LAND compress for 40-70 word posts?

**Decision: The 3 phases MERGE into the existing enne.3 canonical structure.**

The enne.3 structure already IS top-down:

| enne.3 element            | Top-down phase |
| ------------------------- | -------------- |
| Quote/dato as first block | FRAME          |
| Observation that reframes | BUILD          |
| Parenthetical punchline   | LAND           |

At enne.3 length, the framework is a **quality check, not a visible structure**. When reviewing a short post, ask:

1. Does the first element establish territory? (FRAME check)
2. Does the middle earn the frame? (BUILD check)
3. Does the ending compress or recontextualize? (LAND check)

If all 3 pass, the post has top-down logic even at 50 words.

### Decision 4: Carousel Slides

**Question:** Does each slide follow FRAME/BUILD/LAND, or does the full carousel follow it once?

**Decision: The FULL CAROUSEL follows it once. Individual slides do NOT.**

Rationale: A carousel is one argument across 6-8 slides. Forcing each slide to have its own FRAME/BUILD/LAND would create repetitive micro-structures and kill the flow. The carousel is the unit, not the slide.

**Implementation:**

- Slide 1 (hook slide) = FRAME
- Slides 2-6 (content slides) = BUILD
- Slide 7-8 (closing slide) = LAND
- This maps cleanly to the existing carousel JSON schema: `hook → stat/content/quote/list → closing`

### Decision 5: Comment Replies

**Question:** Do comment replies follow FRAME/BUILD/LAND or are they exempt?

**Decision: Exempt. Comments are conversational, not structured.**

Rationale: Comments are dialogue. Imposing a 3-phase structure on a reply would make it feel like a mini-essay instead of a conversation. The voice rules still apply (laidback, no corporate speak), but structural framing does not.

**Exception:** If a comment reply is long enough to be a standalone micro-post (>100 words), the author MAY choose to apply FRAME/BUILD/LAND for coherence. This is optional, never enforced.

---

## Mode × Top-Down Mapping

How each mode implements FRAME/BUILD/LAND:

| Mode                                     | FRAME (first element)                  | BUILD (middle)                    | LAND (ending)                        |
| ---------------------------------------- | -------------------------------------- | --------------------------------- | ------------------------------------ |
| 1. "Estoy leyendo esto"                  | The finding/quote dropped cold         | Author processing in real time    | What it means (or "no se todavia")   |
| 2. "Un amigo me pregunto"                | The friend's question or reaction      | The dialogue/exchange             | The silence, the realization         |
| 3. "Hay algo que no cuadra"              | The familiar thing, stated straight    | The reframe that makes it strange | The new name for what it actually is |
| 4. "Dato suelto"                         | The number(s), no editorial            | Minimal framing (1-2 lines)       | The gap the number reveals           |
| 5. "Dos cosas que no parecen conectadas" | The two things, juxtaposed             | The hidden connection             | Why it matters (or leave it hanging) |
| 6. "No tengo cierre para esto"           | The thing that won't resolve           | The attempt to make sense         | The honest admission: "no puedo"     |
| 7. "El mundo se metio en tu carrera"     | The world event, fresh                 | The career angle no one's naming  | The implication for the reader       |
| 8. "Esto necesita un nombre"             | The pattern everyone feels             | The evidence it's real            | THE NAME (the act of naming = LAND)  |
| 9. "Diario"                              | The moment, the morning, the sensation | The contradiction or observation  | The quiet ending — image, not moral  |
| 10. "Lo que conecta todo"                | The natural/physics observation        | The parallel to work/life/meaning | The meta-awareness (or a cat)        |

**Key insight:** Every mode already has an implicit FRAME/BUILD/LAND. The framework makes it explicit as a quality check, not as a new constraint.

---

## Where It Goes in SKILL.md

Insert a new section `## Top-Down Communication Framework` AFTER the voice section (after line ~233) and BEFORE the invocation section. Rationale:

- It's a structural layer that sits between voice (how you sound) and workflow (how you produce)
- The writer reads it BEFORE generating options or writing — it informs PASO 2 and PASO 3
- It does NOT modify the workflow steps themselves

### Changes to existing sections

| Section           | Change                                                      | Type        |
| ----------------- | ----------------------------------------------------------- | ----------- |
| PASO 2 (options)  | Add FRAME/BUILD/LAND labels to option format                | Enhancement |
| PASO 3 (writing)  | Add rule 19: "Every post passes the FRAME/BUILD/LAND check" | Addition    |
| PASO 3 (closers)  | Rename to "LAND types" with backward-compatible alias       | Rename      |
| PASO 5 (learning) | Add top-down adherence to post-log entry                    | Enhancement |
| Anti-patrones     | Add "Top-down as visible template" to the table             | Addition    |

### What does NOT change

- Voice rules 1-18: untouched
- Mode definitions: untouched (the mapping table is reference, not modification)
- Timing system: untouched
- Weekly planning: untouched
- Format-specific rules: untouched (carousel mapping is clarification, not change)
- Anti-patterns: preserved, one addition
- Learning system architecture: preserved, one field addition

---

## Annotated Post Outlines (3 examples)

### Example 1: Mode 4 "Dato suelto" (short, enne.3)

```
[FRAME]
55% no negocia su salario. 89% de empleadores dice que esta dispuesto a negociar.

[BUILD]
La brecha mas cara del mercado laboral no es un secreto.

[LAND]
Es un silencio.
```

~30 words. FRAME/BUILD/LAND is invisible — the reader sees a punchy observation, not a framework.

### Example 2: Mode 5 "Dos cosas que no parecen conectadas" (medium)

```
[FRAME]
Mexico duplico su uso del USMCA en un ano. Sackett et al. publicaron que los anos de experiencia casi no predicen rendimiento.

[BUILD]
Un pais aprendio a usar las reglas que ya existian. Renegocio cero tratados. Solo leyo la letra chica del que ya tenia.

La mayoria de los candidatos ponen "10+ anos de experiencia" como si fuera evidencia. Sackett midio 81 anos de datos. El numero predice casi nada.

[LAND]
Las reglas ya existen. El problema no es acceso. Es que nadie las lee.
(Aplica para tratados comerciales y para tu propio CV.)
```

~90 words. Three phases visible in logic, invisible in structure. The parenthetical LAND adds the cross-domain compression.

### Example 3: Mode 6 "No tengo cierre para esto" (open ending)

```
[FRAME]
Behroozi et al. (2020) midieron el rendimiento de desarrolladores senior con y sin entrevista tecnica estilo whiteboard.

[BUILD]
Los que no pasaron la entrevista rindieron igual que los que si. En algunos casos, mejor.

O sea: el filtro que usamos para decidir quien entra no correlaciona con lo que pasa despues de que entran.

[LAND]
No se que hacer con eso todavia. Pero no puedo dejar de pensarlo.
```

~70 words. The LAND is an open admission — synthesis by honest compression. "No se que hacer con eso" IS the takeaway: the system is broken and I'm sitting with that.

---

## Anti-Patterns for Top-Down

| Never                                            | Why                                                                                    |
| ------------------------------------------------ | -------------------------------------------------------------------------------------- |
| "Voy a hablar de X"                              | That's announcing the announce. The frame drops cold.                                  |
| "En resumen..." / "Para cerrar..."               | Signaling the LAND kills it. LAND happens, it's not announced.                         |
| Same FRAME/BUILD/LAND shape in consecutive posts | Anti-pattern #15 still rules: "Si dos posts seguidos tienen la misma forma, fallaste." |
| FRAME longer than BUILD                          | If the setup outweighs the argument, the frame failed.                                 |
| LAND that just restates FRAME                    | A LAND must add, compress, or recontextualize — not echo.                              |
| Treating FRAME/BUILD/LAND as visible headers     | This is an internal scaffold, never reader-facing.                                     |
| Forcing all 3 phases on <30 word posts           | At micro-length, the phases merge. Don't force separation.                             |

---

## Implementation Checklist

- [ ] Add `## Top-Down Communication Framework` section after voice, before invocation
- [ ] Include: schema table, N1 adaptation, mode mapping, length rules, anti-patterns
- [ ] Update PASO 2 option format to include F/B/L annotations
- [ ] Add voice rule 19 to PASO 3
- [ ] Enhance "Cierres" section with LAND vocabulary
- [ ] Add top-down tracking field to PASO 5 post-log template
- [ ] Add anti-pattern to static anti-patterns table
- [ ] Create 3 annotated examples (inline in the new section)
- [ ] Write DECISIONS.md if any conflict requires external documentation
