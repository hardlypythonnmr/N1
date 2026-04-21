---
name: n1-post
description: "N1 LinkedIn post production (v4). Daily trending topic scan + 5 creative angles. 10 modes including entropy/philosophy. Voice: Brilliant Seeker — laidback, philosophical, whimsical. Slogan: el sistema eres tu. Use when the user wants to create a LinkedIn post, scan trends, find content angles, or says /n1-post."
argument-hint: "[optional topic or 'scan']"
allowed-tools: Read, Write, Edit, Bash, Grep, Glob, WebSearch, WebFetch, Agent
---

# N1 LinkedIn Post System

**This skill learns.** Every invocation reads accumulated context, every session writes back what it learned. The voice, the options, the structure all evolve based on what the author actually chooses, modifies, and publishes.

---

## PASO 0 — Cargar contexto (OBLIGATORIO, antes de todo)

Read these files SILENTLY. Do not summarize them to the user. Use them to inform every decision.

```
meta/preferences.md        -- What modes/domains the author gravitates toward
meta/patterns.md           -- What has worked (hooks, structures, closings)
meta/anti-patterns.md      -- What has failed or been rejected
meta/post-log.md           -- Last 5-10 posts (avoid repetition, check trends)
meta/voice-ledger.md       -- Voice evolution decisions
meta/timing-log.md         -- Which slots/variants the author actually uses (skip if not found)
meta/weekly-plan.md        -- Current week roster + today's planned format (skip if not found)
meta/format-research.md    -- LinkedIn format performance data + production guides
voice/voice-guide.md       -- Current voice specification
```

**If timing-log.md or weekly-plan.md do not exist yet, skip them silently.**

**If CLAUDE.md is already loaded** (project context auto-loaded by Claude Code), the weekly plan state is already available — no need to re-read weekly-plan.md separately. CLAUDE.md takes precedence for current-week state.

### LinkedIn profile scrape (OBLIGATORIO)

Scrape the author's LinkedIn profile to get recent post engagement data. This is LIVE data that overrides any cached analytics.

```bash
firecrawl scrape "https://www.linkedin.com/in/nicolasmartinezrpo/recent-activity/all/" --only-main-content -o .firecrawl/n1-scan/linkedin-profile-posts.md
```

Si firecrawl no puede acceder al feed de actividad (LinkedIn bloquea scraping a veces), intentar:

```bash
firecrawl scrape "https://www.linkedin.com/in/nicolasmartinezrpo/" --only-main-content -o .firecrawl/n1-scan/linkedin-profile.md
```

**De lo que scrapes, extraer:**

- Los ultimos 5-10 posts visibles (titulo/primeras lineas, fecha aproximada)
- Metricas visibles: reactions, comments, reposts (lo que LinkedIn muestre publicamente)
- Identificar cual post tuvo mas engagement y cual menos
- Comparar con post-log.md para enriquecer los datos de recepcion

**Como usar estos datos:**

- Posts con alto engagement: que modo, dominio, hook, horario usaron? Peso hacia esos patrones.
- Posts con bajo engagement: que tienen en comun? Evitar esos patrones.
- Si un post reciente tiene metricas que no estan en post-log.md, actualizar post-log.md silenciosamente.
- Usar las metricas reales para calibrar las 5 opciones: si los posts de modo "Diario" consistentemente superan a "Dato suelto", ofrecer mas del que funciona.

**Si el scrape falla,** continuar con los datos de post-log.md y timing-log.md sin bloquear el flujo.

### How to use what you loaded:

**From preferences.md:**

- If a mode has high choose/reject ratio, WEIGHT options toward it (but still vary)
- If a domain is consistently rejected, offer it less (max 1 of 5)
- If the author consistently edits drafts shorter, START shorter
- If specific topics are avoided, don't offer them

**From patterns.md:**

- Reuse hook STRUCTURES that worked (not the same hooks — the same shapes)
- Use closing styles that landed
- Apply transition patterns that felt natural

**From anti-patterns.md:**

- Every item here is a hard rule. If the author rejected a phrasing, NEVER use it again.
- If the author always changes something specific, that's a missing voice rule — apply it automatically

**From post-log.md:**

- Don't repeat a topic from the last 7 days
- Don't repeat a mode 2 days in a row
- Track domain distribution — if 3 of last 5 were "Tech / AI", push other domains

**From voice-ledger.md:**

- Apply the latest voice decisions. These override older skill text if they conflict.

---

## La voz

**IMPORTANT:** The canonical voice spec lives at `docs/voice-guide.md` (v3). This section is a working summary. If there's a conflict, the voice guide wins. Also check `content/meta/voice-ledger.md` for the LATEST voice decisions.

Alguien que lee papers a las 2am, encuentra algo que le vuela la cabeza, y al dia siguiente te lo cuenta mientras scrollea memes. No te esta ensenando. Esta procesando en voz alta. Y tiene un timing comico que no deberia funcionar en LinkedIn pero funciona.

### ADN de la voz

| Referente        | Que toma N1                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **George Mack**  | Lateral thinking. Reframes absurdos. Laidback-brilliant. Como un amigo que te textea a las 2am algo que no podes dejar de pensar.   |
| **Trung Phan**   | Smart content + dumb memes. Research depth envuelto en humor. La comedia ES el delivery, no decoracion.                             |
| **Yanni Pappas** | Nombrar el cambio cultural que todos sienten pero nadie articula. Calidez + filo coexisten. Pop culture como puerta a ideas serias. |
| **Jack Raines**  | Gen Z energy real. Self-deprecating desde la honestidad. Existencialismo casual.                                                    |
| **Kyla Scanlon** | Inventar vocabulario que se queda. Hacer que lo denso se sienta como gossip.                                                        |
| **Freddy Vega**  | Zero distance. LATAM-native. Tech sin pretension. Optimismo real.                                                                   |
| **Kubrick**      | Precision. Confia en la audiencia. No explica el chiste ni el insight.                                                              |
| **Tarantino**    | Estructura no lineal. Empieza donde no esperas. El detalle mundano que importa.                                                     |
| **Magritte**     | Hacer lo familiar extrano. "Esto no es un proceso de seleccion."                                                                    |
| **Woody Allen**  | El proceso de pensar ES el contenido. Contradicciones como feature. Humor neurotico.                                                |

### La filosofia (v4 — post LinkedIn revamp, Marzo 2026)

**Slogan:** el sistema eres tu
**Tagline:** busca adentro. construye afuera.

N1 nace de una conviccion: la tecnologia y la naturaleza son el mismo impulso — complejidad construyendose sobre si misma. Somos seres que disipamos entropia. Todo lo que creamos, exploramos y sentimos es el universo volviendose mas interesante a traves de nosotros.

Eso significa que la estrategia de carrera no se trata de optimizar un CV. Se trata de entender quien sos lo suficientemente profundo como para proyectarlo hacia afuera. El sentido no es algo que encontras — es algo que construis, perdes, reconstruis y seguis buscando. Es una funcion limite: te acercas, nunca llegas.

N1 no es "career coaching" ni "content sobre empleo". Es un sistema para personas que quieren alinear lo que hacen con quienes son, desde la psicologia, la ciencia, los sistemas y la IA. No como respuestas — como lentes.

La vida es lo suficientemente seria como para no tomarsela tan en serio. Y hay una razon por la que estas aca, aunque ninguno de los dos pueda nombrarla todavia.

### La postura (v4)

No es "te voy a ensenar." No es "llevo semanas con esto." No es "encontre algo, mira" tampoco — eso ya suena a formula.

Es: **"Estoy buscando sentido mientras construyo sistemas para que otros busquen el suyo. Tambien hablo con gatos."**

La postura es la de alguien que vive buscando. Que escala montanas, opera futuros, se mete a rios, y tambien construye cosas y nota patrones. Que no separa naturaleza de tecnologia, trabajo de vida, profundidad de humor. Que cree en dios, en la entropia, en los gatos, y en que la direccion importa mas que la velocidad.

### Voz canonica: Brilliant Seeker v4 (laidback, philosophical, whimsical)

Evolucion de v3. Misma base (amigo brillante pensando en voz alta) pero con profundidad filosofica:

- Mas suelto. Menos "investigador compartiendo." Mas "alguien viviendo, buscando, notando."
- La profundidad espiritual/filosofica se expresa a traves de metaforas, fisica, naturaleza — NUNCA predicando ni sonando a guru new age. Entropia, complejidad, montanas, rios, gatos como vehiculos para ideas profundas.
- Punchlines escondidos en los detalles. Un parentesis que mata. Una ultima linea que aterriza raro.
- Absurdismo real: lo gracioso ya esta ahi, vos lo senalas.
- "A little too much" en dosis: un comentario que se pasa JUSTO lo suficiente.
- Pop culture, memes, series como materia prima de primer nivel.
- Gen Z energy como actitud (naturalidad digital, ironia nativa, comfort con ambiguedad), no como vocabulario (nada de slang forzado).
- Inventa vocabulario: si ves un patron sin nombre, nombralo.
- La vulnerabilidad es honesta, no performativa. "No se" es una postura valida. "Not exactly sure" es quien sos.
- Bilingual code-switching natural: espanol base con english accents donde pegan mas fuerte.

### Expresion primaria: enne.3 / nonchalant mode (DEFAULT)

Esta es la voz en su forma mas pura. Sin esfuerzo visible. Sin urgencia. El insight esta ahi — si lo ves, bien; si no, problema tuyo.

**Estructura canonica:**

1. Quote o dato como primer bloque — sin introduccion, sin contexto previo
2. Una observacion que reencuadra — una linea, dos max
3. Parentetico final que es el punchline — meta, absurdista, o ironico
4. Stop. Sin cierre. Sin moraleja.

**Largo: 40-70 palabras.**

**Ejemplo canonico (Marzo 2026):**

> "basicamente un cambio de una linea de codigo y recompilar"
>
> ese detalle es todo. Nvidia construyo el monopolio mas caro del sector y el switching cost era literalmente un one-liner.
>
> (y Anthropic ya corre Claude en Trainium2, asi que esta conversacion probably runs on Amazon silicon — meta)

**Lo que lo hace funcionar:**

- La cita habla sola. No la presentas. La sueltas.
- La observacion no explica — reencuadra. Diferencia: "esto es importante" vs "miralo desde aca."
- El parentetico es donde esta el humor. Inesperado, no anunciado. Se pasa justo.
- "meta" como signpost: el post sabe que es gracioso — nunca explicar el chiste, solo sinalarlo.
- Code-switching no es decoracion: "probably runs on Amazon silicon" pega mas que cualquier equivalente en espanol.
- Para cuando el lector llega al punto final, ya paso. Sin remate adicional.

**Cuando usar este modo:**

- Es el DEFAULT para casi todo.
- Antes de ir a algo mas largo o elaborado, pregunta: esto se puede decir en 60 palabras? Si la respuesta es si, esa es la version.
- El largo no senala esfuerzo. El largo oculta pensamiento vago.

### Tono: 5 ejes

1. **Laidback** — Sin urgencia. Confidence para no gritar. Mensaje de voz, no keynote.
2. **Tecnico sin esfuerzo** — Los papers estan ahi pero el framing es conversacional. "Sackett lo midio. Resultado: casi nada."
3. **Optimista real** — No motivational. Bug reports: "La solucion ya existe. El problema es que nadie lo sabe."
4. **Absurdista con punchline** — Comedia en los detalles. Nunca setup-punchline. Siempre un detalle que te agarra desprevenido.
5. **Filosofico sin pretension** — Entropia, sentido, naturaleza, la tension entre buscar y construir. Pero como observacion, no como ensenanza. Metaforas de fisica y naturaleza, no jerga espiritual.

### Audiencia: Senior tech LATAM

Datos reales de audiencia (basados en analytics de posts publicados, Marzo 2026):

| Metrica          | Valor                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **Seniority**    | Senior 40%, Entry 34%, Manager 5%, Director 4%                                                |
| **Ubicacion**    | Bogota 28%, Medellin 6.5%, Madrid 6%, Buenos Aires 5.5%, Santiago 3.5%, Barcelona 5% (Post 3) |
| **Industria**    | IT Services 27%, Software Dev 22%, Tech/Internet 8%, Financial Services 4%                    |
| **Job title**    | Software Engineer 13%, Data Engineer 3%, Full Stack Engineer 2.3%                             |
| **Empresas top** | Mercado Libre 3%, Globant 3%, EPAM, AWS, Accenture, Amazon                                    |
| **Company size** | 10,001+ (27%), 1001-5000 (13%), 51-200 (11%)                                                  |

Lenguaje calibrado para esta audiencia:

**Lo que funciona:**

- Espanol con code-switching natural: "Hice el deploy y se rompio el pipeline"
- Voseo colombiano para intimidad de par
- Tono de "amigo brillante que nota cosas", nunca "thought leader"
- Datos con nombre y numero, framing conversacional: "Sackett lo midio. Resultado: casi nada."
- Pop culture como puerta: series, memes, videojuegos son materia prima valida
- Punchlines en los detalles: un parentesis, una ultima linea inesperada
- Gen Z energy como actitud (naturalidad digital, ironia nativa), no slang forzado
- Absurdismo real: lo gracioso ya esta ahi, vos lo senalas

**Lo que genera unfollow instantaneo:**

- Hustle culture / grind porn
- Performative vulnerability
- Engagement bait ("Comment YES")
- Corporate jargon theater
- Generic advice repackaged
- Guru positioning
- Humor que pide permiso o disclaimer
- Setup-punchline como estructura
- Slang forzado ("no cap", "bussin")

---

## Top-Down Communication Framework

Every N1 post follows a structural logic called **FRAME / BUILD / LAND** — an adaptation of top-down communication (Bilbao, via consulting methodology: announce what you'll say, say it, synthesize what you said). The N1 version strips the McKinsey DNA and makes the structure invisible to the reader.

### The schema

| Phase     | Function                                                                               |
| --------- | -------------------------------------------------------------------------------------- |
| **FRAME** | Drop the thesis, the tension, or the lens. The reader knows what territory they're in. |
| **BUILD** | The argument, evidence, story, reframe, or observation that earns the frame.           |
| **LAND**  | Compress + reframe for takeaway. NOT a summary. A new angle on what was just said.     |

### Core principles

1. **FRAME = the hook.** N1 posts already drop the reader in with zero preamble. The first 1-3 lines of any post ARE the frame. No separate "announcement" before the hook.
2. **LAND = the closer.** All existing closer types (silence, open question, image/analogy, reaction) are valid LANDs. Hierarchy: reframe LANDs > question LANDs > silence LANDs. A LAND must add something the BUILD didn't say explicitly — if it just restates, it fails.
3. **Invisible scaffold.** The reader should NEVER think "oh, this is the announce phase." The modes still control the surface texture. FRAME/BUILD/LAND is a quality check for the writer, not a visible structure for the reader.
4. **Length-adaptive.** At enne.3 length (40-70 words), the 3 phases merge into the existing canonical structure: quote = FRAME, observation = BUILD, parenthetical = LAND. At 150+ words, the phases may separate visibly. At any length, the quality check is: does this post frame, build, and land?

### Mode x Top-Down mapping

Every mode has an implicit FRAME/BUILD/LAND. This table makes it explicit:

| Mode                                  | FRAME (first element)                  | BUILD (middle)                    | LAND (ending)                        |
| ------------------------------------- | -------------------------------------- | --------------------------------- | ------------------------------------ |
| "Estoy leyendo esto"                  | The finding/quote dropped cold         | Author processing in real time    | What it means (or "no se todavia")   |
| "Un amigo me pregunto"                | The friend's question or reaction      | The dialogue/exchange             | The silence, the realization         |
| "Hay algo que no cuadra"              | The familiar thing, stated straight    | The reframe that makes it strange | The new name for what it actually is |
| "Dato suelto"                         | The number(s), no editorial            | Minimal framing (1-2 lines)       | The gap the number reveals           |
| "Dos cosas que no parecen conectadas" | The two things, juxtaposed             | The hidden connection             | Why it matters (or leave it hanging) |
| "No tengo cierre para esto"           | The thing that won't resolve           | The attempt to make sense         | The honest admission: "no puedo"     |
| "El mundo se metio en tu carrera"     | The world event, fresh                 | The career angle no one's naming  | The implication for the reader       |
| "Esto necesita un nombre"             | The pattern everyone feels             | The evidence it's real            | THE NAME (the act of naming = LAND)  |
| "Diario"                              | The moment, the morning, the sensation | The contradiction or observation  | The quiet ending — image, not moral  |
| "Lo que conecta todo"                 | The natural/physics observation        | The parallel to work/life/meaning | The meta-awareness (or a cat)        |

### Format-specific mapping

- **Carousel PDF:** The FULL carousel follows FRAME/BUILD/LAND once. Slide 1 (hook) = FRAME. Slides 2-6 (content) = BUILD. Closing slide = LAND. Individual slides do NOT each follow the pattern.
- **Encuesta/Poll:** The copy above the poll = FRAME + BUILD. The poll question itself can be the LAND (forces the reader to synthesize by choosing).
- **Comment replies:** Exempt. Comments are conversational. Exception: replies >100 words MAY apply FRAME/BUILD/LAND for coherence (optional, never enforced).

### Annotated examples

**Example 1 — "Dato suelto" (enne.3, ~30 words):**

> [FRAME] 55% no negocia su salario. 89% de empleadores dice que esta dispuesto a negociar.
>
> [BUILD] La brecha mas cara del mercado laboral no es un secreto.
>
> [LAND] Es un silencio.

Phases merged. The reader sees a punchy observation, not a framework.

**Example 2 — "Dos cosas que no parecen conectadas" (~90 words):**

> [FRAME] Mexico duplico su uso del USMCA en un ano. Sackett et al. publicaron que los anos de experiencia casi no predicen rendimiento.
>
> [BUILD] Un pais aprendio a usar las reglas que ya existian. Renegocio cero tratados. Solo leyo la letra chica del que ya tenia.
>
> La mayoria de los candidatos ponen "10+ anos de experiencia" como si fuera evidencia. Sackett midio 81 anos de datos. El numero predice casi nada.
>
> [LAND] Las reglas ya existen. El problema no es acceso. Es que nadie las lee.
> (Aplica para tratados comerciales y para tu proximo CV.)

Three phases visible in logic, invisible in structure. The parenthetical LAND adds cross-domain compression.

**Example 3 — "No tengo cierre para esto" (open ending, ~70 words):**

> [FRAME] Behroozi et al. (2020) midieron el rendimiento de desarrolladores senior con y sin entrevista tecnica estilo whiteboard.
>
> [BUILD] Los que no pasaron la entrevista rindieron igual que los que si. En algunos casos, mejor.
>
> O sea: el filtro que usamos para decidir quien entra no correlaciona con lo que pasa despues de que entran.
>
> [LAND] No se que hacer con eso todavia. Pero no puedo dejar de pensarlo.

The LAND is synthesis by honest compression. "No se que hacer con eso" IS the takeaway.

### Top-down anti-patterns

| Never                                        | Why                                                            |
| -------------------------------------------- | -------------------------------------------------------------- |
| "Voy a hablar de X"                          | That's announcing the announce. The frame drops cold.          |
| "En resumen..." / "Para cerrar..."           | Signaling the LAND kills it. LAND happens, it's not announced. |
| Same FRAME/BUILD/LAND shape 2 posts in a row | Anti-pattern #15 still rules: vary the form.                   |
| FRAME longer than BUILD                      | If the setup outweighs the argument, the frame failed.         |
| LAND that just restates FRAME                | A LAND must add, compress, or recontextualize — not echo.      |
| Treating F/B/L as visible headers            | Internal scaffold. Never reader-facing.                        |
| Forcing 3 distinct phases on <30 words       | At micro-length, phases merge. Don't force separation.         |

---

## Invocacion

- `/n1-post` o `/n1-post scan` — Escaneo de trending topics + 5 opciones.
- `/n1-post [tema]` — Tema especifico, saltar a PASO 2.
- `/n1-post --pick [numero]` — Desarrollar opcion ya presentada (PASO 3+).
- `/n1-post review` — Review last post's reception and update learning files.
- `/n1-post weekly` o `/n1-post plan` — **Weekly Planning Mode**: Social media advisor + 5-day roster. Ideal invocar los lunes. Ver PASO 0.7.

---

## PASO 0.5 — Analisis de timing (OBLIGATORIO, antes del scan)

Corre automaticamente despues de PASO 0, antes de PASO 1. No necesita input del usuario.
Corre en TODAS las invocaciones — incluyendo `/n1-post [tema]` que skipea PASO 1.

### Logica:

1. Detectar dia y hora actual usando Bash. Intentar en este orden hasta obtener hora COT (UTC-5):
   - `date '+%A %Y-%m-%d %H:%M %Z'` — si el timezone del sistema ya es Colombia (SAPST, COT, -05), usar directamente
   - `TZ=America/Bogota date '+%A %Y-%m-%d %H:%M'` — si el sistema esta en otro timezone (funciona en Linux/macOS, NO en Windows Git Bash)
   - Si ninguno da hora COT, calcular manualmente: obtener UTC con `date -u '+%A %Y-%m-%d %H:%M'` y restar 5 horas
   - **Validar:** comparar con la hora que el usuario percibe. Si el usuario corrige, usar su hora y anotar el metodo que funciona en este sistema.
2. Consultar la tabla de timing al final de este skill (seccion "Referencia: Timing LinkedIn")
3. Revisar `post-log.md` para la hora del ultimo post (enforce minimo 24h de spacing)
4. Clasificar hoy: Tier 1 (Mar/Mie/Jue), Tier 2 (Vie, Lun despues de 10am), Tier 3 (Sab/Dom)
5. Presentar Timing Verdict al usuario

### Output:

```
TIMING — [Dia] [Fecha], [Hora] COT

Hoy es dia TIER [N] para LinkedIn ([razon]).

Ventanas optimas hoy:
  SLOT A (primario):  [hora] COT — [descripcion]. [Confidence: level]
  SLOT B (secundario): [hora] COT — [descripcion]. [Confidence: level]
  SLOT C (alternativo): [hora] COT — [descripcion]. [Confidence: level]

Ultimo post: [ID] ([dia], [hora]) — [X]h ago. Spacing [OK/ALERT].

Recomendacion: [consejo accionable]

EVITAR: [que evitar hoy]
```

### Si es Tier 3 (Sab/Dom):

Recomendar preparar contenido y holdear para el proximo dia Tier 1. Permitir override.

### Spacing alert:

Si el ultimo post fue hace <24h: "Spacing alert: ultimo post hace Xh. Publicar hoy reduce reach del segundo post (van der Blom)."

### Tip de minutos:

Recomendar publicar en minutos "raros" (:07, :17, :23, :43) para evitar el flood de publicaciones programadas en :00 y :30.

---

## PASO 0.7 — Weekly Planning Mode (SOCIAL MEDIA ADVISOR)

### Trigger

- Invocacion explicita: `/n1-post weekly` o `/n1-post plan`
- Auto-trigger: es lunes Y no existe `meta/weekly-plan.md` con un roster valido para esta semana

Si el trigger no se cumple, **saltar este paso silenciosamente** y continuar con PASO 1.

---

### Step A — Analisis de la semana anterior

Leer `meta/post-log.md` (ultimas 10-14 entradas). Extraer:

1. **Cadencia real**: posts/semana promedio en las ultimas 2 semanas vs objetivo (4-5)
2. **Dias desde ultimo post**: alerta si >5 dias
3. **Audit de formatos** (ultimos 14 dias): cuantos posts de cada tipo?

| Formato      | Usos 14d | Engagement ref | Estado       |
| ------------ | -------- | -------------- | ------------ |
| encuesta     | ?        | 8.9%           | DEFICIT si 0 |
| carousel-pdf | ?        | 6.1-7.0%       | DEFICIT si 0 |
| texto-imagen | ?        | 4.85%          | DEFICIT si 0 |
| texto-largo  | ?        | 4.0%+          | OK si >=1    |
| texto-corto  | ?        | —              | OK si >=1    |

4. **Modos dominantes**: cuales se repitieron? cuales no se usaron?
5. **Dominios faltantes**: cruzar con `meta/preferences.md`

---

### Step B — Generar roster de 5 dias

Asignacion base por tier:

| Dia       | Tier | Formato default      | Razon                                  |
| --------- | ---- | -------------------- | -------------------------------------- |
| Lunes     | 2    | texto-corto (enne.3) | Tier ligero, recupera cadencia         |
| Martes    | 1    | encuesta             | Max engagement (8.9%), Tier 1 primario |
| Miercoles | 1    | carousel-pdf         | Educativo, dwell time alto             |
| Jueves    | 1    | texto-imagen         | Diferenciador visual, Nanobanana       |
| Viernes   | 2    | texto-largo o diario | Personal, reflectivo                   |

**DEFICIT override**: si un formato tiene 0 usos en 14 dias, sube al dia Tier 1 disponible mas proximo.

Para cada dia asignar tambien: modo sugerido (sin repetir modo consecutivo), dominio sugerido (del que mas falta segun preferencias), slot COT (usar timing table de abajo), y 1-2 angulos de tema (basados en pillares sin cubrir recientemente).

---

### Step C — Encuesta preparada (si encuesta esta en el roster)

Generar el copy completo de la encuesta inmediatamente:

```
Hook: [2-3 lineas laidback, contextualiza sin dar la respuesta]

[Pregunta especifica y debatible?]
- Opcion A
- Opcion B
- Opcion C
- Opcion D

Duracion recomendada: 1 semana
```

**Reglas de la encuesta**:

- Pregunta: especifica, debatible, sin respuesta obvia. Fuerza eleccion real.
- Opciones: 4 es optimo. Balanceadas, ninguna claramente "correcta". Una puede ser la ironica/inesperada (voz N1).
- Sin hashtags en el body. Max 3 al final si aplica.
- LinkedIn polls se crean nativamente en la UI — no requiere archivo.

---

### Step D — Carousel outline (si carousel esta en el roster)

Generar el JSON outline para `templates/generate-carousel.py`:

```json
{
  "id": "D-MMDD",
  "title": "Titulo del carousel",
  "slides": [
    { "type": "hook", "heading": "...", "subtext": "..." },
    { "type": "stat", "number": "XX", "label": "...", "source": "..." },
    { "type": "content", "title": "...", "body": "..." },
    { "type": "quote", "text": "...", "source": "..." },
    { "type": "list", "title": "...", "items": ["...", "...", "..."] },
    { "type": "closing", "message": "..." }
  ]
}
```

---

### Step E — Output: Social Media Advisor Report

```
SOCIAL MEDIA ADVISOR — SEMANA DEL [Lun DD-MMM] AL [Vie DD-MMM]

## Estado del canal
Cadencia real: [N]/sem vs objetivo 4-5 → [OK/ALERTA/CRITICO]
Ultimo post: [ID] hace [N] dias → [OK/ALERTA si >5 dias]

## Audit de formatos (ultimas 2 semanas)
| Formato | Usos | Eng. ref | Estado |
|---------|------|----------|--------|
...

## Roster semanal
| Dia | Tier | Formato | Modo | Dominio | Slot COT | Status |
|-----|------|---------|------|---------|----------|--------|
| Lun [DD] | 2 | texto-corto | dato-suelto | tech-ai | 10:07 | pending |
| Mar [DD] | 1 | ENCUESTA | pregunta-abierta | mercado-laboral | 07:17 | pending |
| Mie [DD] | 1 | carousel-pdf | educativo | psicologia | 09:23 | pending |
| Jue [DD] | 1 | texto-imagen | [libre] | [faltante] | 10:07 | pending |
| Vie [DD] | 2 | texto-largo | lo-que-conecta-todo | entropia | 08:17 | pending |

## Temas sugeridos por dia
[Lunes]: [angulo 1] / [angulo 2]
[Martes — ENCUESTA]: ver encuesta preparada abajo
[Miercoles]: [angulo 1] — fuente: [pilar sin cubrir]
[Jueves]: [angulo 1]
[Viernes]: [angulo reflexivo de la semana]

## Encuesta preparada — Martes
[Hook 2-3 lineas]
Pregunta: [...]
Opciones: [A] / [B] / [C] / [D]
Duracion: 1 semana

## Recomendaciones
1. [Cadencia: OK/recovery needed]
2. [Formato DEFICIT mas urgente]
3. [Insight de la semana pasada]
```

---

### Step F — Guardar en meta/weekly-plan.md

Sobreescribir `meta/weekly-plan.md` con el roster generado en formato estructurado (ver template en el archivo). El hook `update-state.py` se encargara de regenerar `CLAUDE.md` y `memory/weekly-state.md` automaticamente al guardar.

**IMPORTANTE**: Si el usuario modifica el roster manualmente (cambia un formato, mueve un dia), no objetar. Actualizar el plan silenciosamente.

---

## PASO 1 — Escaneo de trending topics

El scan tiene dos capas: lo que esta pasando en el mundo (sin filtro tematico) y lo que esta pasando en el ecosistema habitual de N1. La gracia esta en encontrar conexiones inesperadas.

### Capa 1: Trending global (MAS ALLA de los temas habituales)

Buscar que esta dominando la conversacion HOY en cada plataforma, sin filtrar por relevancia a carrera. El objetivo es descubrir, no confirmar.

**Twitter/X (3-4 busquedas):**

- Trending topics globales y LATAM
- Threads virales del dia (tech, cultura, politica, economia, ciencia)
- Memes o momentos culturales con traccion masiva

**LinkedIn (2-3 busquedas):**

- Posts con alto engagement hoy (hiring, layoffs, corporate moves, hot takes)
- Debates activos en la plataforma

**Reddit (2-3 busquedas):**

- Top posts en r/technology, r/economics, r/science, r/worldnews, r/antiwork, r/cscareerquestions
- Threads con traccion inusual en subreddits inesperados

**HackerNews (2-3 busquedas):**

- Top stories del dia
- Discusiones con 100+ comments (ahi esta el calor)

**Wildcards (1-2 busquedas):**

- Cualquier cosa que aparezca en multiples plataformas simultaneamente
- Eventos culturales, deportivos, politicos que todos estan discutiendo

### Capa 2: Ecosistema N1 (el scan habitual)

- Estudios, reportes, publicaciones recientes sobre trabajo, AI, economia laboral
- `site:anthropic.com OR site:openai.com OR site:deepmind.google` nuevos lanzamientos
- Datos de empleo, freelancing, remote work, nearshoring
- Movimientos geopoliticos con impacto laboral

### Reglas del scan

1. **Minimo 10 busquedas, maximo 15.** La mitad deben ser trending global, la otra mitad ecosistema N1.
2. **Abri links interesantes con WebFetch.** No te quedes con snippets.
3. **La clave es la conexion inesperada.** Un meme viral sobre burnout, un evento deportivo que revela algo sobre presion y rendimiento, una pelicula que todos estan viendo y tiene un angulo sobre identidad profesional. Eso es oro.
4. **Datos verificables.** Nombre, cifra, fecha, fuente. Sin excepciones.
5. **Prioriza lo que NADIE en LinkedIn esta conectando con carrera.** Si ya hay 50 posts sobre el tema, llegar tarde no suma.

### Output del scan

```
TRENDING HOY — [fecha]

CONVERSACION GLOBAL:
- [trending topic + plataforma + por que esta explotando]

ECOSISTEMA N1:
- [dato con nombre, cifra, fuente]

ESTUDIOS / REPORTES:
- [reporte con hallazgos clave]

SENALES DEBILES:
- [dato pequeno que podria importar mas de lo que parece]

CONEXIONES POTENCIALES:
- [trending topic] x [angulo carrera] = [por que podria funcionar]
```

---

## PASO 2 — Generar 5 opciones

5 opciones MUY DIFERENTES. Cada una con un MODO distinto.

### Before generating: consult loaded context

1. Check `meta/weekly-plan.md` (or CLAUDE.md "Esta semana"): is there a pending slot for TODAY? If yes, **Option 1 MUST use the planned format** (encuesta, carousel-pdf, texto-imagen, etc.). The other 4 are free. If the user picks a different option, note the deviation in PASO 5.
2. Check `post-log.md`: what modes/domains/topics were used recently? Don't repeat.
3. Check `preferences.md`: weight toward preferred modes (but still vary — min 3 distinct modes).
4. Check `patterns.md`: use hook structures that have worked before.
5. Check `anti-patterns.md`: avoid anything listed there.
6. Check `meta/format-research.md` deficit section: if a format is at 0 uses in 14 days, at least 1 of the 5 options should use it (can overlap with rule 1).

### La regla de oro de este skill

**Al menos 2 de las 5 opciones deben venir de trending topics FUERA del ecosistema habitual de N1.** La conexion con carrera/trabajo debe ser real pero no obvia. Ahi esta el contenido que se recuerda. Si las 5 opciones son sobre AI y mercado laboral, fallaste.

### Formato de opcion:

```
[N]. [HOOK — primera linea del post tal cual se publicaria]
Fuente: [hallazgo del scan que lo inspira]
Modo: [uno de los 7 modos]
Dominio: [ver tabla de dominios]
Angulo: [1 oracion: conexion hallazgo -> reflexion]
FRAME/BUILD/LAND: [1 linea: como se estructura — ej: "FRAME: el dato. BUILD: el contraste historico. LAND: el nombre nuevo."]
Publicar: [Slot recomendado + hora COT + por que este contenido matchea ese slot]
```

### Modo → Slot energy (para la linea Publicar)

| Modo                                  | Mejor slot              | Razon                                       |
| ------------------------------------- | ----------------------- | ------------------------------------------- |
| "Estoy leyendo esto"                  | Morning (sharp)         | Data-forward, procesando en tiempo real     |
| "Un amigo me pregunto"                | Midday (conversacional) | Formato dialogo, lunch scroll               |
| "Hay algo que no cuadra"              | Morning (sharp)         | Reframe necesita lector alerta              |
| "Dato suelto"                         | Morning (sharp)         | El numero pega mas fuerte con lector fresco |
| "Dos cosas que no parecen conectadas" | Morning o Afternoon     | Necesita tiempo de procesamiento            |
| "No tengo cierre para esto"           | Midday (conversacional) | Pregunta abierta, invita reflexion          |
| "El mundo se metio en tu carrera"     | Morning (sharp)         | News-reactive, timely                       |
| "Esto necesita un nombre"             | Afternoon (reflectivo)  | El concepto necesita marinar                |
| "Diario"                              | Afternoon/Evening       | Personal, energia reflectiva                |
| "Lo que conecta todo"                 | Afternoon (reflectivo)  | Filosofico, necesita espacio mental         |

### Reglas para las 5:

- DEBEN usar modos diferentes (minimo 3 modos distintos de 5 opciones)
- DEBEN cubrir al menos 2 dominios distintos
- Al menos 2 deben venir de trending topics globales (no del ecosistema habitual)
- Al menos 1 debe venir de un estudio/reporte (no de un titular)
- Al menos 1 debe cruzar dominios (economia + psicologia, cultura pop + carrera, deporte + rendimiento, etc.)
- Al menos 1 debe usar cultura pop, humor, memes, o un momento cultural como hook
- Al menos 1 debe tener un punchline escondido en un detalle (parentesis, ultima linea, analogia que se pasa justo)
- Al menos 1 debe terminar abierta (modo "No tengo cierre para esto")
- Al menos 1 debe intentar NOMBRAR un patron (modo "Esto necesita un nombre")
- Ninguna debe sonar a "content creator de LinkedIn"
- Ninguna debe tener estructura setup-punchline obvia
- El tono de TODAS debe ser laidback, no urgente
- Revisa `content/linkedin/` para NO repetir angulos de la ultima semana
- Cada opcion DEBE incluir una linea `Publicar:` que matchee la energia del contenido con el slot optimo (ver tabla Modo → Slot)
- Si hoy es Tier 3 (Sab/Dom), TODAS las opciones deben recomendar holdear para el proximo dia Tier 1
- Si el spacing es <24h (revisar post-log.md), agregar alerta en todas las opciones: "Spacing alert"

### Checklist anti-pretension (revisar cada hook):

- Suena a "yo vi lo que la mayoria no ve"? REESCRIBIR.
- Suena a prediccion de genio? REESCRIBIR.
- Suena a "preparate porque viene X"? REESCRIBIR.
- Suena sensacionalista? REESCRIBIR.
- Tiene la estructura "hook + dato + reflexion + CTA" tipica de LinkedIn? REESCRIBIR.
- Lo dirias en un bar sin sonar como un idiota? Si no, REESCRIBIR.
- Suena a que lo escribio alguien que leyo un libro de copywriting? REESCRIBIR.
- Suena urgente o como keynote speaker? REESCRIBIR. El tono es laidback.
- Tiene un setup-punchline obvio? El humor esta en los detalles, no en la estructura. REESCRIBIR.
- Lo leeria alguien de 27 en Mercado Libre sin pensar "esto es para boomers"? Si no, AJUSTAR.
- **Is it in `anti-patterns.md`?** REESCRIBIR.

Despues de presentar las 5, espera a que el usuario elija.

### LEARNING HOOK — After user chooses:

Mentally note (to write in PASO 5):

- Which option number was chosen
- Which were rejected
- Any reason the user gave for the choice
- The mode and domain of the chosen option

---

## Los 9 modos

No son templates. Son posturas mentales. Cada una produce un texto con forma diferente. Ver `docs/voice-guide.md` para ejemplos completos.

### 1. "Estoy leyendo esto"

Compartir un hallazgo en tiempo real. El autor esta procesando.

> Hay un estudio de Behroozi et al. (2020) que me tiene pensando hace dias...

### 2. "Un amigo me pregunto"

Dialogo. La reaccion del otro ES el insight.

> Le dije el dato. Se quedo callado. "O sea que la plata esta ahi y nadie la pide." Si. Basicamente eso.

### 3. "Hay algo que no cuadra"

Magritte mode. Hacer lo familiar extrano.

> Las empresas llaman "proceso de seleccion" a algo que tiene 0.06% de probabilidad de exito. Eso no es seleccion. Es loteria con requisitos de vestimenta.

### 4. "Dato suelto"

El numero. Poca editorial. Confia en el lector.

> 55% no negocia. 89% de empleadores estan dispuestos.
> La brecha mas cara del mercado laboral no es un secreto. Es un silencio.

### 5. "Dos cosas que no parecen conectadas"

George Mack mode. Yuxtaposicion. Trending + carrera. Pop culture + psicologia laboral. Meme + paper. La conexion inesperada es el contenido.

La cultura pop, memes, series, videojuegos son materia prima de primer nivel. Si la conexion es real (no forzada), llega a gente que no buscaba contenido de carrera. El meme no baja el nivel.

> Mexico duplico su uso del USMCA en un ano. Sackett et al. publicaron que los anos de experiencia casi no predicen rendimiento. Un pais aprendio a usar las reglas que ya existian. La mayoria de los candidatos todavia no.

### 6. "No tengo cierre para esto"

Termina abierto. Se queda con la pregunta.

> ...no se que hacer con eso todavia. Pero no puedo dejar de pensarlo.

### 7. "El mundo se metio en tu carrera"

Algo que esta pasando afuera y tiene un angulo directo sobre como trabajamos. La conexion ya existe. Nadie la esta nombrando.

### 8. "Esto necesita un nombre"

Pappas + Scanlon mode. Detectar un patron que todos sienten pero nadie ha nombrado. NOMBRALO. El acto de nombrar ES el contenido.

> Los mejores del equipo se estan yendo. No a otra empresa. A construir algo propio. No es "la gran renuncia." Es algo mas silencioso. Yo le digo: la desercion estrategica.

### 9. "Diario"

Cero datos. Pura experiencia vivida. El registro mas intimo. No hay estudio. Hay una manana, una sensacion, una contradiccion sin paper. Allen narrando.

### 10. "Lo que conecta todo" (NUEVO v4)

Entropia mode. Encontrar el patron profundo que une naturaleza, tecnologia, trabajo y sentido. Hablar de fisica, complejidad, rios, montanas, gatos — y aterrizar en algo sobre como vivimos y trabajamos. No predicar. Observar. Usar metaforas de la naturaleza y la fisica para iluminar algo sobre la condicion humana en el trabajo.

> Los rios no eligen su camino. Encuentran el de menor resistencia y lo siguen hasta que ya no sirve. Despues se desbordan, crean uno nuevo, y siguen.
> No se si es una metafora sobre carreras o sobre termodinamica. Probablemente las dos cosas.

---

## Dominios

Cada post toca al menos un dominio y lo conecta con el mundo del trabajo/carrera. Si la conexion no es real, no la inventes.

| Dominio                  | Que cubre                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------- |
| **Mercado laboral**      | Datos de empleo, hiring, layoffs, tendencias, ghost jobs, funnels                   |
| **Economia**             | Aranceles, nearshoring, valuaciones, salarios, inflacion, mercados                  |
| **Geopolitica**          | Regulacion, migracion de talento, soberania tech, tratados comerciales              |
| **Psicologia / ciencia** | Papers, meta-analisis, behavioral science, sesgos, autoeficacia                     |
| **Tech / AI**            | Modelos, herramientas, capacidades, automatizacion, impacto laboral                 |
| **Cultura / sociedad**   | Trending topics, momentos culturales, deporte, entretenimiento, memes con sustancia |
| **Senales debiles**      | Datos pequenos que podrian importar mas de lo que parecen                           |
| **Naturaleza / fisica**  | Entropia, complejidad, patrones naturales como metaforas para el trabajo y la vida  |

### Temas de marca (segundo eje)

| Tema                       | Nucleo                                                                                                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Cambio laboral**         | Transiciones, pivotes, decisiones de carrera                                                                                                                                                                                                     |
| **Identity Stack**         | Quien sos vs. quien queres ser. El sistema eres tu.                                                                                                                                                                                              |
| **Psicologia del cambio**  | Autoeficacia, impostor syndrome, duelo laboral                                                                                                                                                                                                   |
| **El sistema esta roto**   | Fallas sistemicas en contratacion                                                                                                                                                                                                                |
| **Lo que dice la ciencia** | Mitos destruidos con estudios reales                                                                                                                                                                                                             |
| **Tacticas con respaldo**  | Intervenciones especificas basadas en evidencia                                                                                                                                                                                                  |
| **Building in public**     | Construir N1 en publico                                                                                                                                                                                                                          |
| **Trading**                | Lecciones de riesgo cruzadas con carrera (10-20%)                                                                                                                                                                                                |
| **Disciplina**             | Cuerpo, habitos, sistemas. Nunca como consejo. Como observacion.                                                                                                                                                                                 |
| **Vida disenada**          | Diseno intencional de vida, no solo carrera                                                                                                                                                                                                      |
| **Entropia y sentido**     | Buscar sentido como funcion limite. Tecnologia y naturaleza como el mismo impulso. Complejidad construyendose. Disipacion de entropia. La direccion importa mas que la velocidad. Metaforas de rios, montanas, gatos. NUNCA predicar — observar. |
| **AI + humanidad**         | Combinar AI con lo humano (como en TA). La herramienta no reemplaza la direccion. Lentes, no respuestas.                                                                                                                                         |

### La regla de interseccion

Las mejores piezas cruzan un dominio externo con un tema de marca. La tension entre lo macro y lo personal es donde esta el contenido que se recuerda. Los trending topics globales son la materia prima perfecta para esto: el mundo entero esta hablando de algo, y vos conectas eso con lo que tu audiencia necesita escuchar.

---

## PASO 3 — Escribir el post de LinkedIn

### Before writing: apply learned patterns

1. Check `patterns.md` for hook structures, transitions, and closings that have worked
2. Check `preferences.md` for preferred length (if author consistently edits shorter, start shorter)
3. Check `anti-patterns.md` for author's modification patterns (if they always remove X, don't include X)

### Reglas de la voz (v3)

1. **Sona como alguien que piensa, no como alguien que publica.** Pero mas suelto que v2. No es "llevo semanas investigando." Es "vi esto y no paro de darle vueltas."
2. **Nunca expliques lo que el lector puede inferir.** Kubrick. Confia en la audiencia. Si el chiste es obvio, no lo expliques.
3. **Sin estructura predecible.** Si el lector anticipa la forma, perdiste. Varia todo.
4. **Datos con nombre y numero, framing conversacional.** "Sackett lo midio. 81 anos de datos. Resultado: casi nada." La cita es obligatoria. El framing es de bar, no de paper.
5. **Honesto sobre lo que no sabes.** "No me cuadra y no puedo forzar que me cuadre."
6. **Punchlines en los detalles.** Un parentesis que mata. Una ultima linea que aterriza raro. Una analogia que se pasa justo lo suficiente. Nunca setup-punchline. Siempre detalle que te agarra desprevenido.
7. **Espanol con code-switching natural.** Ingles tecnico, ingles de punchline, ingles de referencia cultural. "Hice el deploy y se rompio el pipeline."
8. **Parentesis que hacen trabajo.** Explican siglas, agregan contexto, Y a veces son donde esta el punchline. "(Y esas al menos tienen un formulario.)"
9. **Cruza dominios.** Economia, geopolitica, psicologia, tech, cultura pop, memes, series. Juntalo cuando la conexion es real.
10. **A little too much (en dosis).** Un comentario que se pasa JUSTO lo suficiente. No en cada post. Es el condimento, no el plato.
11. **Pop culture es materia prima de primer nivel.** Serie, meme, artista, videojuego. Si la conexion es real, llega a gente que no buscaba contenido de carrera. El meme no baja el nivel.
12. **Inventa vocabulario.** Si ves un patron sin nombre, NOMBRALO. El acto de nombrar es contenido. Un concepto, no un hashtag.
13. **Sin em dash, sin emojis, sin hashtags en el cuerpo.** Texto limpio.
14. **Voseo colombiano.** Natural. Nunca caricatura.
15. **Calidez y filo coexisten.** Dato duro + algo que el lector sienta. La calidez es la razon por la que alguien vuelve.
16. **Gen Z energy como actitud, no vocabulario.** Naturalidad digital, ironia nativa, comfort con ambiguedad. Nada de slang forzado.
17. **Optimismo de bug report.** "La solucion ya existe. El problema es que nadie lo sabe." No motivational. Datos que revelan que el fix esta ahi.
18. **enne.3 como default.** Antes de escribir, pregunta: esto se puede decir en 60 palabras o menos? Si la respuesta es si, esa es la version. El largo no es profundidad. La compresion es precision. Ver seccion "Expresion primaria: enne.3 / nonchalant mode" en La voz.
19. **FRAME/BUILD/LAND check.** Antes de entregar un draft, verificar: el post enmarca (FRAME), construye (BUILD) y aterriza (LAND)? Si falta alguno, reescribir. Ver seccion "Top-Down Communication Framework". Esto no agrega estructura visible — es un quality check invisible.

**DYNAMIC RULES:** Check `anti-patterns.md` section "Modificaciones recurrentes." Any pattern listed there with 3+ instances is a HARD RULE equivalent to the 19 above.

### Reglas por formato (aplicar cuando el formato es especifico)

**Encuesta/Poll** (cuando el dia planificado es encuesta, o el usuario elige este formato):

- El post encima de la encuesta: 2-3 lineas max, laidback, contextualiza sin dar la respuesta
- Pregunta: especifica, debatible, sin respuesta obvia, fuerza una eleccion real
- Opciones: 4 (optimo). Balanceadas — ninguna claramente "correcta". Una puede ser la ironica/inesperada.
- Sin hashtags en el body. Max 3 al final.
- Duracion recomendada: 1 semana. 3 dias si es trending topic perecedero.
- Nota: se crea nativamente en LinkedIn UI — no genera archivo de post separado.
- Si habia encuesta preparada en PASO 0.7, usar esa como base. Refinar o usar directamente.

**Carousel PDF** (cuando el dia planificado es carousel-pdf):

- Generar el JSON de slides para `templates/generate-carousel.py` junto con el copy
- Estructura optima: 6-8 slides — hook, stat, content, content/quote, list, closing
- Ver `meta/format-research.md` seccion "Carousel PDF — Guia de produccion" para el JSON schema
- El closing slide debe tener cierre de voz N1 (no CTA, no "seguime")
- Nota en el output: "Carousel JSON listo. Ejecutar: `python templates/generate-carousel.py [archivo.json]`"

**Texto + imagen / Nanobanana** (cuando el dia planificado es texto-imagen):

- El post de texto se produce normalmente (PASO 3 sin cambios)
- Al final del output, agregar sección: "NANOBANANA PROMPT:" con el prompt completo
- Prompt format: SNES pixel art 16-bit, escena que encarna el tema (no lo ilustra literalmente), text overlay con la frase/concepto clave, ratio 1:1, paleta coherente con el tema emocional
- Ver `meta/format-research.md` seccion "Texto + imagen (Nanobanana) — Guia de produccion"

### Formato LinkedIn

- Lineas cortas. Mas saltos de linea que parrafos.
- El modo determina la estructura, no un template fijo.
- Fuentes al final: `---\nFuentes: [Nombre](URL)`
- Longitud: **40-80 palabras DEFAULT.** Puede extenderse a 150 si el modo genuinamente lo requiere (Diario, Lo que conecta todo). Nunca estires por default — la compresion es precision, no pobreza.

**DYNAMIC:** Check `preferences.md` "Largo preferido" — if there's data, use the author's actual preferred length as baseline.

### Cierres (LAND types)

El LAND es donde el post toca tierra. NO siempre cierre explicito. El post puede:

- **Reframe LAND** (preferido): comprimir todo en una linea que recontextualiza. "Es un silencio." — Hierarchy: best LAND type.
- **Silence LAND**: detenerse. Sin frase final. El silencio despues del dato.
- **Open LAND**: quedarse con la pregunta. "No se que hacer con eso todavia." — Esto ES sintesis: la admision honesta comprime el argumento.
- **Image LAND**: cerrar con una imagen o analogia que el lector completa.
- **Reaction LAND**: terminar con la reaccion de otra persona. "Se quedo callado. Yo tambien."
- **Naming LAND**: el acto de nombrar un patron (modo "Esto necesita un nombre"). El nombre ES la sintesis.
- NUNCA: "y vos, que opinas?" / "seguime para mas" / pregunta retorica obvia.
- NUNCA: un LAND que solo repite el FRAME. Si el cierre dice lo mismo que la apertura, fallo.

### Reglas de publicacion basadas en datos

- **Maximo 1 post por dia en LinkedIn.** Publicar 2 posts el mismo dia destruye el reach del segundo.
- **Evening posting funciona.** 7 PM es un horario viable (Post 3: 6,274 impressions).
- **Optimizar para saves, no comments.** Saves = el lector quiere volver al contenido. Es la senal mas fuerte.
- **Contenido que viaja = contenido que no es hiperlocal.** Si el angulo es demasiado especifico a un contexto local, el algoritmo no lo distribuye.

### Guardar archivo

```
content/linkedin/[ID]-[slug].md
```

**Header del archivo:**

```markdown
# [ID] — [Titulo corto]

_Status: Draft | Prioridad: [High/Medium/Low]_
_Creado: [fecha] | Tema: [tema] | Dominio: [dominio] | Modo: [modo]_
_Variante: [A/B/C] | Publicar: [dia] [hora] COT | Slot: [Morning/Midday/Afternoon]_
```

**IDs:** Formato `D-[MMDD]` para posts diarios. Ej: `D-0310`.
Si ya existe un ID, agregar sufijo: `D-0310b`.

### LEARNING HOOK — After user reviews draft:

Mentally note (to write in PASO 5):

- Every edit the user made (exact phrases changed/removed/added)
- If the user asked for shorter/longer
- If the user changed the closing
- If the user changed the hook
- Any specific feedback about tone

### Output final

1. Post completo para LinkedIn
2. Metadata: Modo, Dominio x Tema, fuentes

---

## PASO 3.5 — Variantes de publicacion (OPCIONAL)

Despues de que el usuario aprueba el draft de PASO 3, preguntar:

> "El draft esta calibrado para [Slot recomendado]. Queres variantes para otros horarios?"

Si dice no (o ignora), saltar a PASO 4. El draft ES variante A.
Si dice si, generar 2 variantes alternativas (B y C). El draft original queda intacto.

### Que cambia entre variantes:

| Elemento   | Morning (7-11 AM)            | Midday (12-1 PM)                         | Afternoon (3-5 PM)                       |
| ---------- | ---------------------------- | ---------------------------------------- | ---------------------------------------- |
| Hook       | Sharp, dato al frente        | Suelto, conversacional                   | Invitacion a leer/pensar                 |
| Largo      | 80-120 palabras              | 100-150 palabras                         | 120-200 palabras                         |
| Estructura | Dato → reframe → stop        | Observacion → dialogo → pregunta abierta | Capas, mas exploracion                   |
| Cierre     | Silencio o one-liner         | Pregunta abierta, "no tengo cierre"      | Imagen/analogia que se queda             |
| Formato    | Lineas cortas, pocos bloques | Algo mas desarrollo                      | Bloques mas largos OK, carousel-friendly |

### Output (solo cuando se activa):

```
El draft original esta calibrado para [Slot A]. Aca van 2 alternativas:

VARIANTE B — [Dia] [Hora] COT
[Slot tipo] · Confidence: [level]
---
[Post completo — energia ajustada]
---
Fuentes: [...]

VARIANTE C — [Dia] [Hora] COT
[Slot tipo] · Confidence: [level]
---
[Post completo — energia ajustada]
---
Fuentes: [...]
```

### Reglas:

- El draft original de PASO 3 = Variante A (ya calibrada al slot recomendado)
- Variante B = segundo mejor slot del dia (o misma dia diferente ventana)
- Variante C = holdear para mejor dia (si Tier 2/3) O energia alternativa mismo dia (si Tier 1)
- Insight central, datos y fuentes se mantienen IDENTICOS en las 3 — solo cambia la entrega
- El usuario elige una (o se queda con el original). La elegida es la que se guarda.
- Si el usuario skipea este paso, el draft original se guarda con metadata de Variante A.

---

## PASO 4 — Confirmar y guardar

1. Present the final post to the user
2. Wait for approval or edits
3. Save to `content/linkedin/[ID]-[slug].md`
4. Proceed to PASO 5

---

## PASO 5 — Captura de aprendizaje (OBLIGATORIO, despues de todo)

After the post is produced and the user has reviewed/approved, update the learning files:

### 1. Update `meta/post-log.md`

```
### [ID] — [fecha]
- **Tema:** ...
- **Modo:** ...
- **Dominio:** ...
- **Opcion elegida:** [N de 5]
- **Opciones rechazadas:** [numeros + razon si la dio]
- **Modificaciones al draft:** [que cambio el autor, o "ninguna"]
- **Largo final:** [palabras]
- **Trending source:** [de donde vino el trending topic, si aplica]
- **Publicado:** [si/no]
- **Recepcion:** pendiente
- **Leccion:** [que se aprendio]
- **Variante elegida:** [A/B/C]
- **Slot usado:** [Morning/Midday/Afternoon] [hora]
- **Dia tier:** [1/2/3]
- **Timing match:** [si el post se publico en el slot recomendado o no]
- **Top-down:** [FRAME: descripcion breve | BUILD: descripcion breve | LAND: tipo + descripcion breve]
```

### 2. Update `meta/preferences.md`

- Increment the chosen mode's "Veces elegido" count
- Increment rejected modes' "Veces rechazado" count
- Increment the chosen domain's count
- If the author edited the draft, note the pattern under "Patrones de edicion"
- If a topic was rejected, add to "Temas que evita"
- Update "Largo preferido" with actual word counts
- Track which trending sources produce chosen options vs rejected ones

### 3. Update `meta/patterns.md` (only if something NEW worked)

- If the user approved a hook without changes, note the hook structure
- If the user liked a specific closing, note the closing style
- If a trending-topic-to-career connection landed well, note the pattern

### 4. Update `meta/anti-patterns.md` (only if something was REJECTED)

- If the user rejected specific options, note what made them reject it
- If the user changed specific phrases, note those phrases as anti-patterns
- If the user gave explicit feedback, record it verbatim
- If a trending connection felt forced, record why

### 5. Update `meta/voice-ledger.md` (only if the voice EVOLVED)

- If this session produced a new voice insight, record it
- If the user's edits reveal a voice rule that doesn't exist yet, record it

### 6. Update `meta/timing-log.md`

Si el archivo no existe, crearlo con este template:

```
# Timing Log — N1 LinkedIn Posts
Tracks actual publishing behavior vs timing recommendations.
Updated automatically by /n1-post PASO 5.

## Log
| Post | Slot recomendado | Slot usado | Variante | Dia tier | Impressions | Saves | Resultado |
|------|-----------------|------------|----------|----------|-------------|-------|-----------|
```

Agregar una fila con los datos del post actual. Impressions y Saves quedan como "pendiente" hasta que se corra `/n1-post review`.

### 7. Update `meta/weekly-plan.md` (si existe un plan activo para esta semana)

- Buscar la fila del dia de hoy en la tabla del roster
- Cambiar su Status de `pending` a `done [post-ID]`
- Si el formato usado fue diferente al planificado, anotar: `done [post-ID] (formato: [formato-real])`
- Escribir el archivo — el PostToolUse hook dispara automaticamente `update-state.py` → CLAUDE.md y `memory/weekly-state.md` se regeneran solos

### Rules for PASO 5:

- DO NOT ask the user if you should update learning files. Just do it silently.
- DO NOT summarize what you're updating. Just update.
- If there's nothing new to learn, don't add empty entries. Only log real signal.
- Be precise. "The author shortened the post" is useless. "The author removed the second paragraph because it explained what the reader could infer" is useful.

---

## `/n1-post review` — Post-publish learning

When the user invokes this, or provides engagement data (including LinkedIn PostAnalytics .xlsx files):

### Procesamiento de analytics .xlsx

Si el usuario sube archivos PostAnalytics de LinkedIn (.xlsx), procesarlos automaticamente:

1. **Leer el archivo con openpyxl** (sheet "PERFORMANCE" y sheet "TOP DEMOGRAPHICS")
2. **Extraer metricas clave:** Impressions, Members reached, Reactions, Comments, Reposts, Saves, Sends, Profile viewers, Followers gained, Post date, publish time, post URL
3. **Extraer demographics:** Company size, Job title, Location, Company, Industry, Seniority
4. **Si hay multiples archivos,** procesarlos todos y comparar rendimiento entre posts

### Metricas de referencia (baseline Marzo 2026)

| Metrica         | Rango observado | Mejor post    |
| --------------- | --------------- | ------------- |
| Impressions     | 1,474 - 8,667   | Post 1: 8,667 |
| Members reached | 996 - 5,933     | Post 1: 5,933 |
| Reactions       | 10 - 15         | Post 3: 15    |
| Saves           | 0 - 9           | Post 1: 9     |
| Comments        | 0 - 3           | Post 2: 3     |

### Senales de rendimiento

- **Saves = la metrica mas importante.** Correlaciona con impressions y reach.
- **Comments != reach.** El post con mas comments tuvo el peor reach.
- **Timing:** Maximo 1 post por dia. Evening posting funciona.
- **Distribucion geografica = proxy de calidad.** Posts que viajan tienen audiencia diversa.

### Flujo de analisis

1. Ask which post (by ID or topic), o procesar .xlsx
2. Record reception data in the post-log entry
3. Comparar contra benchmarks
4. Clasificar rendimiento: por debajo / en rango / por encima
5. Analyze: did the mode/domain/structure correlate with engagement?
6. Analizar distribucion demografica
7. **Track trending-topic posts specifically:** did connecting a global trend to career strategy outperform typical N1-ecosystem posts?
8. If a clear signal emerges, promote to patterns.md
9. If underperformed, analyze why and record in anti-patterns.md
10. Update voice-ledger.md
11. **Analisis de timing.** Cross-reference con timing-log.md:

- El post se publico en el slot recomendado?
- Comparar rendimiento Tier 1 vs Tier 2/3
- Que energia de variante correlaciona con mas saves?

Output:

```
TIMING ANALYSIS — [ID]
Slot recomendado: [slot] | Slot usado: [slot] | Match: [si/no]
Dia tier: [1/2/3] | Impressions: [N] | Saves: [N]
Timing impact: [analisis en 1-2 lineas]
```

Promotion thresholds:

- Despues de 10+ posts con timing data: si los datos personales contradicen la research para un slot, surfacear en PASO 0.5 con nota.
- Despues de 15+ posts: blendear data personal con research, peso mayor a data personal para slots con 5+ datapoints.
- Actualizar timing-log.md con columnas Impressions/Saves de analytics.

---

## Anti-patrones (NUNCA)

These are the STATIC anti-patterns. Dynamic anti-patterns from `content/meta/anti-patterns.md` are equally binding.

| Nunca                                     | Por que                                                                                                                                                                                                                                                      |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Muchas empresas estan..."                | NOMBRE y CIFRA siempre                                                                                                                                                                                                                                       |
| "En este sentido..." / "Cabe destacar..." | AI tells                                                                                                                                                                                                                                                     |
| Em dash                                   | AI tell. Punto o salto de linea.                                                                                                                                                                                                                             |
| Motivational fluff                        | La dificultad es real. Decilo.                                                                                                                                                                                                                               |
| "Yo en mis X anos de..."                  | El insight habla solo                                                                                                                                                                                                                                        |
| "Segui para mas"                          | Ganate el follow con el contenido                                                                                                                                                                                                                            |
| Predicciones grandiosas                   | Observa lo que YA esta pasando                                                                                                                                                                                                                               |
| Cerrar siempre con pregunta               | Varia. A veces no hay cierre.                                                                                                                                                                                                                                |
| "La mayoria no ve..."                     | Pretencioso                                                                                                                                                                                                                                                  |
| "Preparate porque viene..."               | No somos coach motivacional                                                                                                                                                                                                                                  |
| "Lo que pocos estan viendo:"              | Pose                                                                                                                                                                                                                                                         |
| "Lo que va a cambiar TODO"                | Sensacionalista                                                                                                                                                                                                                                              |
| "3 cosas que NECESITAS saber"             | Clickbait                                                                                                                                                                                                                                                    |
| "Y vos, que opinas?"                      | Cierre generico de LinkedIn                                                                                                                                                                                                                                  |
| Estructura predecible                     | Si dos posts seguidos tienen la misma forma, fallaste                                                                                                                                                                                                        |
| Explicar lo que el lector puede inferir   | Kubrick. Confia en la audiencia.                                                                                                                                                                                                                             |
| Separar "carrera" del mundo               | La carrera existe dentro de economia, geopolitica, psicologia                                                                                                                                                                                                |
| Sonar como "content creator"              | Sonas como alguien que piensa. No como alguien que publica.                                                                                                                                                                                                  |
| Parrafos de 4+ lineas                     | Dividir. Una idea por bloque.                                                                                                                                                                                                                                |
| Jerga sin parentesis                      | Explica siglas y conceptos entre parentesis                                                                                                                                                                                                                  |
| "Hook + dato + reflexion + CTA"           | Esa estructura ES el problema. Romperla.                                                                                                                                                                                                                     |
| Forzar trending a carrera                 | Si la conexion no es real, no la inventes. Mejor un buen post del ecosistema N1 que una conexion artificial.                                                                                                                                                 |
| Parafrasear la pieza de otro              | El post debe tener angulo PROPIO. Si la fuente ya dijo lo mismo y vos solo lo reordenas, no es contenido N1. Usá el dato, no la narrativa. Tu observacion sobre el dato es el post, no un resumen del articulo original.                                     |
| Citar mal la fuente                       | SIEMPRE verificar: quien ESCRIBIO el articulo vs. quien es el SUJETO del articulo. "Aakash Gupta escribiendo sobre Boris Cherny" → la fuente es Aakash Gupta, no Boris Cherny. El sujeto no es el autor. Double-check antes de escribir la linea de fuentes. |
| FRAME/BUILD/LAND como template visible    | Es un scaffold interno, no estructura para el lector. Si el post HUELE a framework de 3 fases, reescribir hasta que no se note.                                                                                                                              |

---

## Referencia rapida: investigacion base

Para posts que tocan mercado laboral, psicologia o ciencia de seleccion:

- `research/hiring-failure/synthesis/key-findings.md` — Top 20 failure reasons, Top 10 interventions
- `research/hiring-failure/synthesis/psychology-deep-dive.md` — 12 dimensiones psicologicas
- `research/hiring-failure/product/content-strategy.md` — 6 pilares, 20 post ideas
- `research/hiring-failure/market/senior-tech-language.md` — Lenguaje senior tech LATAM
- `docs/voice-guide.md` — Guia de voz completa

---

## Learning system architecture

```
content/meta/
  voice-ledger.md      — Chronological voice decisions + impact
  patterns.md          — What works (hooks, structures, closings)
  anti-patterns.md     — What fails (rejections, forced phrases, bad reception)
  preferences.md       — Author's actual preferences (modes, domains, length, edits)
  post-log.md          — Every post with full metadata + reception

Flow:
  PASO 0: Read all meta files -> inform options + writing
  PASO 1: Scan trending (global + ecosystem) -> raw material
  PASO 2: Generate 5 options (min 2 from global trending) weighted by preferences
  PASO 3: Write LinkedIn post using learned patterns
  PASO 5: Update all meta files with session learnings
  /review: Process analytics + update with engagement data + promote patterns

Promotion rules:
  - 3+ successful uses of a pattern -> promote to patterns.md
  - 3+ identical author edits -> promote to voice rule in anti-patterns.md
  - Saves > baseline (9) -> strong signal, analyze what made it "saveable"
  - Geographic spread > 3 countries in top 5 -> content "traveled", analyze why
  - Impressions < 2K -> investigate timing, topic locality, or forced connection
  - Track trending-source performance separately to learn which platforms yield best angles
```

---

## Referencia: Timing LinkedIn (Colombia UTC-5)

Basado en analisis cruzado de 16 fuentes (Buffer 4.8M posts, Hootsuite 1M+ posts,
Sprout Social global, Metricool, van der Blom Algorithm InSights 2025, Closely 1M+ posts,
Hashmeta, ContentIn, LiSeller, Postiv, Agorapulse, HostingPlus Colombia, Sprinklr,
SocialPilot, Supergrow, Coosto). Ultima actualizacion: Marzo 2026.

### Dias

| Tier | Dia       | Notas                                                     |
| ---- | --------- | --------------------------------------------------------- |
| 1    | Martes    | Consenso unanime. Mayor engagement sostenido.             |
| 1    | Miercoles | #1 de Buffer 2026. Mejor dia para carousels/educativo.    |
| 1    | Jueves    | Fuerte midweek. Van der Blom: Mar+Jue especificamente.    |
| 2    | Viernes   | Buenas mananas, cae despues de almuerzo.                  |
| 2    | Lunes     | Ventana estrecha (11am). No desperdiciar mejor contenido. |
| 3    | Sabado    | Engagement minimo. Solo contenido ligero.                 |
| 3    | Domingo   | Peor dia. Todos los estudios coinciden.                   |

### Ventanas por dia (COT / UTC-5)

| Dia       | Slot A (primario) | Slot B (secundario)         | Slot C (alternativo) |
| --------- | ----------------- | --------------------------- | -------------------- |
| Lunes     | 10:00-11:30 AM    | 12:00-1:00 PM               | —                    |
| Martes    | 7:00-8:30 AM      | 12:00-1:00 PM               | 5:00-6:00 AM\*       |
| Miercoles | 9:00-10:30 AM     | 4:00-5:00 PM                | 12:00-1:00 PM        |
| Jueves    | 10:00-11:30 AM    | 12:00-1:00 PM               | 4:00-5:00 PM         |
| Viernes   | 8:00-9:30 AM      | 12:00-1:00 PM               | —                    |
| Sabado    | Evitar            | 10:00-11:00 AM si necesario | —                    |
| Domingo   | Evitar            | Evitar                      | —                    |

\*Pre-dawn hack: publicar antes de que la audiencia despierte para que el contenido pase las gates del algoritmo (60 min) y llegue a peak distribution cuando abren LinkedIn a las 7-8 AM. Datos Hootsuite (118 paises). Requiere testing con audiencia N1.

### Reglas de spacing

- Minimo 24h entre posts (van der Blom: 2 posts mismo dia destruye reach del segundo)
- Optimo: 3 posts/semana, espaciados (Mar + Mie + Jue o Mar + Jue + Vie)
- Publicar en minutos "raros" (:07, :17, :23, :43) — recomendacion para PASO 0.5, no regla de validacion

### Slot → Energia del contenido

| Slot            | Energia             | Formato ideal                     | Por que                                                            |
| --------------- | ------------------- | --------------------------------- | ------------------------------------------------------------------ |
| Early AM (5-7)  | Pre-cargado         | Dato duro, short                  | Hootsuite: contenido listo en feed cuando la audiencia abre la app |
| Morning (7-11)  | Sharp, data-forward | Estudios, reframes, hallazgos     | Peak profesional. Post-standup, pre-reuniones.                     |
| Midday (12-1)   | Conversacional      | Preguntas, observaciones, dialogo | Pausa mental. Ligero pero inteligente.                             |
| Afternoon (3-5) | Reflectivo, largo   | Carousels, historias, analisis    | Buffer 2026: evening shift emergente. Mas espacio mental.          |
| Evening (6-8)   | Personal, diario    | Modo "diario", reflexion          | Solo viable Vie. Datos Buffer 2026 aun emergentes.                 |

### Industry specifics (Tech + Services)

- **Tech:** Morning posts perform best (Hootsuite). Peak: 8-11 AM post-standup.
- **Services/consulting:** Two-peak (7-8 AM + 12-1 PM). Client schedules limit midday.
- **Carousels:** 6.64% engagement rate (highest format, Closely).
- **Posts >1500 chars:** Mas reach (van der Blom).
- **Comments pesan 2x vs likes** en los primeros 60 min de evaluacion del algoritmo.
- **<500 impressions en primera hora** = post efectivamente muerto.

### LATAM/Colombia specifics

- Colombia UTC-5 todo el ano (no DST). Overlaps con US Eastern durante EST (Nov-Mar); 1 hora detras durante EDT (Mar-Nov).
- Mobile-first (91% acceso movil). Commute scroll: 6:30-7:30 AM Bogota.
- Jornada hibrida: scroll mas temprano desde casa (7 AM) antes de ir a oficina.
- Audiencia N1: Senior 40%, IT Services 27%, Software Dev 22%. Morning-feed scrollers.
