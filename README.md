# N1 — El Sistema Eres Tú

> 5 AI-native skills para conseguir y ganar entrevistas. Spanish-primary. LATAM-focused. Gratis. Open source.

**Una pregunta te lleva a la skill que necesitás. Cinco skills cubren el ciclo completo: desde "no sé a qué apuntar" hasta "tengo oferta y necesito negociar."**

> **¿Buscás el código para forkear / replicar?** Abrí [FOR-BUILDERS.md](FOR-BUILDERS.md) — orden de lectura, arquitectura, qué robar, qué está pendiente.

---

## El Diagnóstico

Una pregunta, cinco caminos:

**¿Qué te tiene bloqueado ahora mismo?**

| Bloqueo | Skill |
|---------|-------|
| Aplico y nadie me contesta | [Get Interviews](skills/get-interviews/SKILL.md) |
| Llego a entrevistas pero no convierto | [Win Interviews](skills/win-interviews/SKILL.md) |
| No sé a qué rol apuntar, o siento que no estoy listo | [Prepare](skills/prepare/SKILL.md) |
| Me estoy quemando / perdí el momentum | [Resilience](skills/resilience/SKILL.md) |
| Tengo oferta, no sé si aceptar o negociar | [Negotiate](skills/negotiate/SKILL.md) |

---

## Las 5 Skills

### 1. Get Interviews · conseguir entrevistas

El moat AI-native: optimización **dual** de CV + LinkedIn para pasar el filtro ATS y al mismo tiempo ganar atención en el escaneo de 6-8 segundos del reclutador humano. Incluye traducción skill-to-role (mapear tus skills reales a familias de roles más allá del título exacto), detección de ghost-jobs con score probabilístico, y reescritura concreta del material.

Reemplaza: CV Audit + LinkedIn + Job Hunt + Network Map + Ghost Check (todas las skills v1).

### 2. Win Interviews · ganar entrevistas

Dos modos integrados: **texto** (análisis de hedging, wandering, verbos débiles, outcomes faltantes) y **voz** (transcripción + análisis de filler words, WPM, prosodia, hedging density). Extrae 5-6 historias STAR desde tu background y las indexa por competencia para que respondas cualquier pregunta por pattern-match. Calibración por rol (startup vs enterprise, técnico vs client-facing).

Reemplaza: Interview Prep + STAR Builder (skills v1).

### 3. Prepare · saber a qué apuntar

El diferenciador proprietario de N1: la única skill que usa instrumentos psicológicos validados (CAAS, MLQ, ACT values, VIA, SCCT) en un paso compacto de 10-30 min. Produce un **role-archetype profile** (YAML portable), un snapshot de adaptabilidad de carrera (CAAS-short), y un mapa de skill-gap con plan 3/6/12 meses.

Consolida la esencia de: busca-adentro + compass + bulls-eye + mlq (como skills Claude; las herramientas web siguen activas en `web/`).

### 4. Resilience · quedarse en el proceso

Resuelve el killer silencioso de toda búsqueda laboral: el abandono por agotamiento antes de llegar a una oferta. Diagnóstico SDT (autonomía / competencia / pertenencia) + tracking de momentum + implementation intentions (Gollwitzer) + micro-goals basados en activación conductual.

Skill nueva en N1 v2.0.

### 5. Negotiate · cerrar el deal

Benchmark de compensación LATAM-aware + cálculo de leverage (competing offers, time pressure, BATNA, runway) + simulación de negociación en 3 estilos (conservadora, asertiva, firme) con scripts completos y respuestas a las 7 objeciones más comunes + análisis walk-away.

Reemplaza: skill de negociación en construye-afuera.

---

## Arquitectura

```
ENTRY POINTS
├── Claude Skills (skills/)         — instalación en Claude Projects
├── ChatGPT GPTs (gpts/)            — GPT Store (versiones compactas)
└── Static Web Tools (web/)         — GitHub Pages, sin login

SHARED FOUNDATION (cargado por todas las skills)
├── shared/profile-format.md        — schema YAML
├── shared/voice-guide.md           — voseo, anti-corporate, sin em-dashes
├── shared/safety-protocol.md       — MIND-SAFE, scope disclaimer, crisis
├── shared/research-base.md         — 25+ frameworks condensados
└── shared/prompting-stack.md       — ACT + Socratic + MI + CBT

USER JOURNEY
Router question (1 Q)
  → Skill (1 de 5)
  → Outputs tangibles + perfil YAML actualizado
  → Siguiente skill si corresponde
```

### Design System

El sistema de diseño v2.0 se documenta en [design-system.md](design-system.md) (raíz del repo). Es copy-paste ready para Claude Design u otros generadores UI. Hibrida estructura editorial (tipografía Playfair / Cormorant / IBM Plex Mono) con el acento N1 orange. Dual-theme (dark / light).

---

## Static Web Tools (GitHub Pages)

Las herramientas web siguen activas, funcionan sin instalación, guardan perfil en localStorage:

| Tool | Qué hace |
|------|----------|
| [Ghost Check](web/ghost-check/index.html) | Score de ghost-job con desglose de señales |
| [Compass · CAAS-12](web/compass/index.html) | Adaptabilidad de carrera (12 ítems validados) |
| [Bull's Eye](web/bulls-eye/index.html) | Alineación con valores (ACT) |
| [MLQ-10](web/mlq/index.html) | Sentido / propósito en el trabajo |
| [Flow Logger](web/flow-logger/index.html) | Tracking de actividades de flow |
| [Runway Calculator](web/runway/index.html) | Runway financiero (COP / USD) |
| [Mi Perfil N1](web/profile/index.html) | Sintetizar todos los resultados |

---

## Base de Investigación

Cada recomendación cita un estudio específico. Ningún claim sin evidencia.

**Meta-theory:** Protean Career Theory (Hall), Career Chaos Theory (Pryor & Bright), Planned Happenstance (Krumboltz), Self-Determination Theory (Deci & Ryan).

**Integrative spine:** SCCT (Lent, Brown & Hackett), Schlossberg 4S.

**Self-knowledge:** ACT Values (Hayes), Schwartz Basic Values, Bandura Self-Efficacy, VIA Character Strengths, Big Five, Flow (Csikszentmihalyi), Working Identity (Ibarra), Identity Status (Marcia), CAAS (Savickas), PsyCap HERO (Luthans), MLQ (Steger), Logotherapy (Frankl), Ryff PWB, Life Design.

**Career strategy:** Granovetter Weak Ties, AAQ-II (Hayes), CDMSE-SF (Betz), Gollwitzer Implementation Intentions.

**Interview science:** Latham Structured Interview, Bucholtz & Hall (identity-in-interaction), Final Round AI / Yoodli aggregate data.

**Stats clave:**
- 91% de las personas experimentan ansiedad de propósito (McKinsey)
- CAAS: 149 estudios, 82,519 participantes
- ACT efecto grande (g = 0.57–0.82)
- 58% de CVs filtrados por ATS (Jobscan 2026)
- 67% éxito con drills estructurados vs 23% con preparación genérica (Final Round AI)
- Gollwitzer implementation intentions: d = 0.65 en 94 estudios

---

## Profile Interchange Format

Todas las skills producen y consumen YAML compatible con `shared/profile-format.md`:

```yaml
version: "1.0"
triage:
  situation: null
  career_path: null
values:
  completed: false
  core_values: []
strengths:
  completed: false
identity:
  completed: false
purpose:
  completed: false
# ...
```

Copiás de una skill, pegás en otra. Sin cuenta, sin API. Portable por clipboard.

---

## Cómo Usar

### Opción A · Claude Skills

1. Cloná el repo
2. Copiá `skills/[nombre]/` dentro de un Claude Project
3. Arrancá sesión con una frase trigger (ver cada SKILL.md)
4. La skill te guía

### Opción B · ChatGPT GPTs

1. Buscá "N1" en el GPT Store
2. Hay versiones compactas de las 4 skills principales

### Opción C · Web

1. `https://n1career.github.io/N1/web/` (o tu fork)
2. Sin instalación, sin cuenta
3. Guarda perfil en localStorage

---

## Safety & Scope

N1 es orientación profesional basada en investigación. **No es terapia.** Ver `shared/safety-protocol.md` para:

- Scope disclaimer (obligatorio en cada sesión)
- MIND-SAFE: detección de crisis en 3 niveles
- Crisis resources: findahelpline.com · Colombia: Línea 106
- Referral criteria para profesionales humanos

Pacing: instrumentos validados (CAAS, MLQ) tienen 4-6 semanas mínimo entre re-mediciones.

---

## Language Strategy

- **Primary:** Spanish (Colombian voseo) — mínimo todas las SKILL.md, todos los refs, toda la web copy
- **Mirror:** English como courtesy mirror
- **No em-dashes** en user-facing text (ver voice-guide.md §4)

---

## License

MIT License. Free to fork and adapt.

Construido por Nicolás — compartiendo lo que tomó años aprender.

---

_El sistema eres tú._

_v2.0 · 2026-04-21 · Redesign: 5 skills JTBD-aligned + 1-Q router + cockpit-hybrid design system._
