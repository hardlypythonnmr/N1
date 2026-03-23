# Next Session Prompt

## Context
Paste this at the start of your next Claude Code session:

---

## Prompt

Estamos construyendo N1, un sistema de estrategia de carrera basado en ciencia para profesionales LATAM. Acabamos de completar una fase de investigación masiva (20 agentes, 13,614 líneas, 250+ estudios citados). Todo está en `research/hiring-failure/`.

Lee primero:
- `state.md` (source of truth)
- `research/hiring-failure/STATE.md` (research state)
- `research/hiring-failure/product/product-spec-v2.md` (5 pilares de revenue)
- `docs/voice-guide.md` (voz de la marca)
- `research/hiring-failure/market/senior-tech-language.md` (lenguaje para senior tech)

### Lo que necesito decidir contigo:

1. **Waves de contenido:** Tenemos 5 pilares de revenue. El plan sugiere empezar por contenido gratis (LinkedIn + Substack newsletter + Discord). Quiero definir JUNTOS:
   - Cuáles son los primeros 5 posts de LinkedIn (en español, voz N1, citando estudios)
   - Cuál es el tema de la primera edición del newsletter en Substack
   - Qué tono/voz exacta funciona para senior tech LATAM (hacer pruebas de voz: 3 versiones del mismo post con tonos diferentes para comparar)

2. **Voice testing:** Antes de producir en masa, quiero probar 3 versiones de un mismo post:
   - Versión A: Más técnica/datos puros (el ingeniero que lee papers)
   - Versión B: Más narrativa/psicológica (el amigo brillante)
   - Versión C: Más provocativa/contrarian (el que cuestiona el sistema)
   - Evaluamos cuál se siente más N1 y cuál resonaría más con la audiencia

3. **Decisión de plataforma newsletter:** Substack está decidido. Configurar cuenta, nombre, descripción, primer draft.

4. **Primer contenido real:** Después de decidir voz, producir:
   - 5 LinkedIn posts listos para publicar
   - 1 newsletter edition lista para enviar
   - 5 slides de carousel "Lo Que Dice La Ciencia"
   - 1 script de video corto (Python + ffmpeg spec)

### Archivos clave que ya existen:
- `research/hiring-failure/product/content-strategy.md` — 6 pilares, 30-day calendar, 20 post ideas
- `research/hiring-failure/synthesis/key-findings.md` — Top 20 failure reasons, Top 10 interventions
- `research/hiring-failure/synthesis/psychology-deep-dive.md` — 12 dimensiones psicológicas
- `research/hiring-failure/market/senior-tech-language.md` — qué lenguaje funciona para senior tech
- `research/hiring-failure/dashboard.html` — dashboard visual de toda la investigación

### Reglas:
- Todo en español (contenido)
- Siempre citar estudios por nombre: "Sackett et al. (2022)" no "estudios muestran"
- Voz: docs/voice-guide.md (voseo, anti-corporate, casual + preciso)
- NUNCA em dash "—"
- Neuropsicología y ciencia comportamental como motor central
