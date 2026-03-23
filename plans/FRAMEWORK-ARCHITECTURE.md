# N1 Framework Architecture

> How every psychological framework, assessment instrument, and prompting technique connects in the N1 system.
>
> **Produced by:** 7-Agent Expert Panel (2026-03-23)
> **Companion to:** MASTER-PLAN-v2.md

---

## Architecture Overview

```
╔══════════════════════════════════════════════════════════════════╗
║                    META-THEORY LAYER                            ║
║  (philosophical foundation — informs everything)                ║
║                                                                  ║
║  Protean Career Theory (Hall, 2004)                             ║
║    → Careers are self-directed and values-driven                ║
║                                                                  ║
║  Career Chaos Theory (Pryor & Bright, 2011)                    ║
║    → Uncertainty is normal, not a problem to solve              ║
║                                                                  ║
║  Planned Happenstance (Krumboltz, 2009)                        ║
║    → Stay open to unplanned opportunities                       ║
║                                                                  ║
║  Self-Determination Theory (Deci & Ryan, 1985)                  ║
║    → Autonomy, competence, relatedness as universal needs       ║
╚══════════════════════════════════════════════════════════════════╝
                              │
                              ▼
╔══════════════════════════════════════════════════════════════════╗
║                   INTEGRATIVE SPINE                              ║
║  (the engine that connects inputs to outputs)                    ║
║                                                                  ║
║  SCCT — Social Cognitive Career Theory                          ║
║  (Lent, Brown & Hackett, 1994)                                  ║
║                                                                  ║
║  Self-Efficacy ──► Outcome Expectations ──► Interests           ║
║       │                    │                    │                ║
║       ▼                    ▼                    ▼                ║
║     Goals ─────────► Actions ──────────► Outcomes               ║
║                                                                  ║
║  Maps to N1:                                                     ║
║  Strengths(efficacy) → Values(expectations) → Identity(interests)║
║       → Purpose(goals) → Construye Afuera(actions)              ║
║                                                                  ║
║  ┌──────────────────────────────────────────────────────┐       ║
║  │ Schlossberg 4S Model (triage framework)              │       ║
║  │                                                      │       ║
║  │ SITUATION → What's happening? (triage layer)         │       ║
║  │ SELF → Who are you? (busca adentro)                  │       ║
║  │ SUPPORT → Who/what helps? (relational context)       │       ║
║  │ STRATEGIES → What can you do? (construye afuera)     │       ║
║  └──────────────────────────────────────────────────────┘       ║
╚══════════════════════════════════════════════════════════════════╝
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
         ┌──────────────┐    ┌──────────────────┐
         │ BUSCA ADENTRO│    │ CONSTRUYE AFUERA │
         │ (self-know)  │    │ (career action)  │
         └──────┬───────┘    └────────┬─────────┘
                │                     │
                ▼                     ▼
        4 CORE DIMENSIONS      CAREER TOOLS
        + enrichment layers    (per career path)
```

---

## Layer 1: Meta-Theory (Always Active)

These theories inform the philosophy of every N1 interaction. They are not explicitly named to users but shape how every prompt is written and every recommendation is framed.

### Protean Career Theory (Hall, 2004)

**Core idea:** The "protean career" is managed by the individual (not the organization), driven by personal values, and measured by psychological success (not just salary/title).

**How N1 uses it:**

- N1's entire premise ("el sistema eres tu") is Protean Career Theory in action
- Values are the primary compass (not market demand, not employer needs)
- Success is defined by the user, not externally
- Career is a lifelong process of identity and adaptability

**Applies to:** All dimensions, all tools, all career paths

### Career Chaos Theory (Pryor & Bright, 2011)

**Core idea:** Careers are complex nonlinear systems. Small events have large consequences. Prediction is limited. The appropriate response to complexity is not more planning — it's building adaptability.

**How N1 uses it:**

- Normalizes uncertainty for users in transition ("this confusion is normal and productive")
- CAAS (adaptability) matters more than any fixed plan
- Planned Happenstance (below) operationalizes this
- Used especially with "Exploration" and "Pause & Reset" users

**Applies to:** Triage layer, identity dimension, evolution tracking

### Planned Happenstance (Krumboltz, 2009)

**Core idea:** Unplanned events are not only inevitable — they're desirable. The five skills that help people benefit from unplanned events: curiosity, persistence, flexibility, optimism, and risk-taking.

**How N1 uses it:**

- Challenges the "find your passion and plan" myth
- Encourages crafting experiments (Ibarra) rather than rigid plans
- The 5 happenstance skills map to CAAS dimensions + PsyCap HERO
- Especially important for "Go Independent" and "Pause & Reset" paths

**Applies to:** Identity dimension, purpose dimension, exploration users

### Self-Determination Theory (Deci & Ryan, 1985)

**Core idea:** Three universal psychological needs — autonomy, competence, relatedness — underpin intrinsic motivation. Career satisfaction depends on these needs being met.

**How N1 uses it:**

- Autonomy → mapped to Schwartz self-direction value
- Competence → mapped to Bandura self-efficacy and flow
- Relatedness → mapped to relational context enrichment layer
- SDT needs serve as a "sanity check" on career recommendations

**Applies to:** Values dimension (explicitly), all dimensions (implicitly)

---

## Layer 2: Integrative Spine (Routing Engine)

### SCCT — Social Cognitive Career Theory (Lent, Brown & Hackett, 1994)

**The connection engine.** SCCT provides the causal model that explains HOW self-knowledge leads to career action:

```
┌─────────────────┐     ┌────────────────────┐     ┌───────────┐
│  SELF-EFFICACY   │────►│ OUTCOME EXPECTATIONS│────►│ INTERESTS │
│  (Bandura)       │     │ (Values + Context)  │     │ (Identity)│
│                  │     │                     │     │           │
│ "I believe I CAN"│     │ "If I do X, Y will  │     │ "I'm drawn│
│                  │     │  happen"            │     │  to..."   │
└────────┬─────────┘     └──────────┬──────────┘     └─────┬─────┘
         │                         │                       │
         └─────────────┬───────────┘                       │
                       ▼                                   │
              ┌────────────────┐                           │
              │     GOALS      │◄──────────────────────────┘
              │   (Purpose)    │
              │                │
              │ "I will pursue │
              │  THIS path"    │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │    ACTIONS     │
              │(Construye Afuera)│
              │                │
              │ CV, Interview, │
              │ Network, etc.  │
              └───────┬────────┘
                      │
                      ▼
              ┌────────────────┐
              │   OUTCOMES     │
              │  (Evolution)   │
              │                │
              │ Track, measure,│
              │ re-assess      │
              └────────────────┘
```

**N1 Mapping:**

| SCCT Component       | N1 Dimension     | Framework Used                  |
| -------------------- | ---------------- | ------------------------------- |
| Self-Efficacy        | Strengths        | Bandura 4 sources + VIA + Flow  |
| Outcome Expectations | Values           | ACT + Schwartz + SDT            |
| Interests            | Identity         | Ibarra + Marcia + Savickas CAAS |
| Goals                | Purpose          | Frankl + MLQ + Ryff             |
| Actions              | Construye Afuera | All career tools                |
| Outcomes             | Evolution        | Longitudinal tracking           |

### Schlossberg 4S Model (1981, 2011)

**The triage framework.** Determines where each user starts and what they need:

```
┌─────────────────────────────────────────────────────────────────┐
│                        SCHLOSSBERG 4S                           │
├───────────────┬───────────────┬───────────────┬─────────────────┤
│  SITUATION    │  SELF         │  SUPPORT      │  STRATEGIES     │
│               │               │               │                 │
│ What happened?│ Who are you?  │ Who helps?    │ What can you do?│
│               │               │               │                 │
│ ► Trigger     │ ► Identity    │ ► Family      │ ► Modify sit.   │
│ ► Timing      │ ► Strengths   │ ► Friends     │ ► Manage stress │
│ ► Control     │ ► Values      │ ► Community   │ ► Reframe       │
│ ► Role change │ ► Purpose     │ ► Mentors     │ ► Take action   │
│ ► Duration    │ ► Resilience  │ ► Prof. help  │                 │
│ ► Experience  │               │               │                 │
│               │               │               │                 │
│ → N1 TRIAGE  │ → BUSCA       │ → ENRICHMENT  │ → CONSTRUYE     │
│   LAYER       │   ADENTRO     │   LAYER       │   AFUERA        │
└───────────────┴───────────────┴───────────────┴─────────────────┘
```

**Triage Decision Matrix:**

| Situation Assessment             | Recommended Path                       | Entry Point                                   |
| -------------------------------- | -------------------------------------- | --------------------------------------------- |
| Crisis (layoff, urgent deadline) | Construye Afuera → quick Busca Adentro | Layoff Response Kit or immediate career tools |
| Exploration (employed, curious)  | Full Busca Adentro journey             | Values → Strengths → Identity → Purpose       |
| Growth (stable, optimizing)      | Selective dimensions                   | Strengths → Values → Identity → Purpose       |

---

## Layer 3: Core Dimensions (Busca Adentro)

### Dimension 1: VALUES

```
┌─────────────────────────────────────────────────────────────────┐
│                        VALUES DIMENSION                         │
│                                                                  │
│  Primary Framework: ACT Values Clarification                    │
│  (Hayes et al., 1999)                                           │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │ ACT Components   │  │ Schwartz Model   │                    │
│  │                  │  │                  │                    │
│  │ • Values vs Goals│  │ 10 Basic Values: │                    │
│  │ • Defusion       │  │ Self-Direction   │                    │
│  │ • Willingness    │  │ Stimulation      │                    │
│  │ • Committed      │  │ Hedonism         │                    │
│  │   Action         │  │ Achievement      │                    │
│  │                  │  │ Power            │                    │
│  │ Assessment:      │  │ Security         │                    │
│  │ Bull's Eye       │  │ Conformity       │                    │
│  │ (Lundgren)       │  │ Tradition        │                    │
│  │                  │  │ Benevolence      │                    │
│  │ Instrument:      │  │ Universalism     │                    │
│  │ AAQ-II (7 items) │  │                  │                    │
│  │ (psych flex)     │  │ Conflict map:    │                    │
│  └──────────────────┘  │ Self-Dir ↔ Conf  │                    │
│                        │ Achiev ↔ Benev   │                    │
│  SDT Check:            │ Stimul ↔ Trad    │                    │
│  Autonomy?             └──────────────────┘                    │
│  Competence?                                                    │
│  Relatedness?                                                   │
│                                                                  │
│  Output: Values Profile (YAML)                                  │
│  Feeds into: all other dimensions, all Construye Afuera tools   │
└─────────────────────────────────────────────────────────────────┘
```

**VIA-ACT Tension Note (PHD):** VIA is essentialist (strengths are stable traits). ACT is contextualist (values are chosen directions, not discovered facts). N1 resolves this by using VIA for STRENGTHS and ACT for VALUES — strengths are pattern-recognition ("what energizes you consistently?"), values are choice-based ("what do you choose to move toward?"). Different philosophical foundations, complementary practical applications.

### Dimension 2: STRENGTHS

```
┌─────────────────────────────────────────────────────────────────┐
│                     STRENGTHS DIMENSION                          │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │ VIA Character     │  │ Bandura          │  │ Flow Theory  │ │
│  │ Strengths         │  │ Self-Efficacy    │  │ (Csikszent.) │ │
│  │ (Peterson &       │  │ (1977)           │  │              │ │
│  │  Seligman, 2004)  │  │                  │  │ Challenge vs │ │
│  │                   │  │ 4 Sources:       │  │ Skill matrix │ │
│  │ 24 strengths in   │  │ 1. Mastery exp   │  │              │ │
│  │ 6 virtues         │  │ 2. Vicarious     │  │ High/High =  │ │
│  │                   │  │ 3. Social pers   │  │ FLOW (signal)│ │
│  │ External ref:     │  │ 4. Physiological │  │              │ │
│  │ viacharacter.org  │  │                  │  │ Assessment:  │ │
│  │                   │  │ Strongest single │  │ Flow Logger  │ │
│  │ Top 5 = signature │  │ predictor of     │  │ (static web) │ │
│  │ strengths         │  │ career action    │  │              │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Big Five Personality (IPIP-NEO, via bigfive-web)         │   │
│  │                                                          │   │
│  │ O-Openness  C-Conscientiousness  E-Extraversion         │   │
│  │ A-Agreeableness  N-Neuroticism                          │   │
│  │                                                          │   │
│  │ Career implications:                                     │   │
│  │ High O → exploration, variety, creative roles            │   │
│  │ High C → structured, goal-oriented, management           │   │
│  │ High E → social, leadership, sales                       │   │
│  │ High A → collaborative, service, helping                 │   │
│  │ High N → needs stability, support, structured environ    │   │
│  │                                                          │   │
│  │ Embedded in N1 static site (npm module, MIT license)    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  Output: Strengths Profile (YAML)                               │
│  Feeds into: identity (which self uses these strengths?),       │
│              purpose (strengths applied to meaning),             │
│              all Construye Afuera tools                          │
└─────────────────────────────────────────────────────────────────┘
```

### Dimension 3: IDENTITY

```
┌─────────────────────────────────────────────────────────────────┐
│                      IDENTITY DIMENSION                          │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │ Ibarra Working   │  │ Marcia Identity  │  │ Savickas     │ │
│  │ Identity (2003)  │  │ Status (1966)    │  │ CAAS (2005)  │ │
│  │                  │  │                  │  │              │ │
│  │ Core insight:    │  │ 4 statuses:      │  │ 4 C's of     │ │
│  │ Act first, then  │  │                  │  │ adaptability:│ │
│  │ clarify. Don't   │  │ ACHIEVED         │  │              │ │
│  │ introspect your  │  │ (explored +      │  │ Concern (do  │ │
│  │ way to an answer.│  │  committed)      │  │ I think about│ │
│  │                  │  │                  │  │ my future?)  │ │
│  │ Methods:         │  │ MORATORIUM       │  │              │ │
│  │ • Possible selves│  │ (exploring, not  │  │ Control (do  │ │
│  │ • Crafting       │  │  yet committed)  │  │ I take       │ │
│  │   experiments    │  │                  │  │ responsibility│ │
│  │ • Narrative      │  │ FORECLOSED       │  │ ?)           │ │
│  │   reconstruction │  │ (committed w/o   │  │              │ │
│  │                  │  │  exploration)    │  │ Curiosity (do│ │
│  │ "Test drive      │  │                  │  │ I explore    │ │
│  │  possible selves │  │ DIFFUSED         │  │ options?)    │ │
│  │  before          │  │ (neither         │  │              │ │
│  │  committing"     │  │  exploring nor   │  │ Confidence   │ │
│  │                  │  │  committed)      │  │ (do I believe│ │
│  └──────────────────┘  └──────────────────┘  │ I can do it?)│ │
│                                               │              │ │
│  Assessment: CAAS-12 (static web,            │ Instrument:  │ │
│  validated 2025, n=3,200)                     │ CAAS-12      │ │
│                                               └──────────────┘ │
│                                                                  │
│  Output: Identity Profile (YAML)                                │
│  Feeds into: purpose (which identity serves meaning?),          │
│              all Construye Afuera tools (identity shapes         │
│              CV narrative, interview framing, network strategy)  │
└─────────────────────────────────────────────────────────────────┘
```

### Dimension 4: PURPOSE

```
┌─────────────────────────────────────────────────────────────────┐
│                      PURPOSE DIMENSION                           │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │ Frankl           │  │ Steger MLQ       │  │ Ryff PWB     │ │
│  │ Logotherapy      │  │ (2006)           │  │ (1989)       │ │
│  │ (1946)           │  │                  │  │              │ │
│  │                  │  │ 2 dimensions:    │  │ Purpose in   │ │
│  │ 3 meaning        │  │                  │  │ Life subscale│ │
│  │ sources:         │  │ Presence: "I     │  │              │ │
│  │                  │  │ have meaning"    │  │ 6 dimensions │ │
│  │ CREATIVE: what   │  │                  │  │ of well-being│ │
│  │ you give to the  │  │ Search: "I'm     │  │ incl purpose │ │
│  │ world            │  │ seeking meaning" │  │              │ │
│  │                  │  │                  │  │              │ │
│  │ EXPERIENTIAL:    │  │ 4 quadrants:     │  │              │ │
│  │ what you receive │  │ Hi P + Lo S =    │  │              │ │
│  │ from the world   │  │   Fulfilled      │  │              │ │
│  │                  │  │ Hi P + Hi S =    │  │              │ │
│  │ ATTITUDINAL:     │  │   Growing        │  │              │ │
│  │ stance toward    │  │ Lo P + Hi S =    │  │              │ │
│  │ suffering        │  │   Seeking ◄─ N1  │  │              │ │
│  │ (directly applies│  │   core user      │  │              │ │
│  │ to forced career │  │ Lo P + Lo S =    │  │              │ │
│  │ transitions)     │  │   Disengaged     │  │              │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Damon (2008) — Purpose Development                       │   │
│  │ Purpose is BUILT, not FOUND. Small daily actions.        │   │
│  │ Kashdan & McKnight (2009) — Purpose as compass.          │   │
│  │ Shin & Steger (2014) — Purpose-wellbeing link confirmed. │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  Key insight: "Purpose is built, not found."                    │
│  Assessment: MLQ-10 (static web, validated instrument)          │
│                                                                  │
│  Output: Purpose Profile (YAML)                                 │
│  Feeds into: all Construye Afuera tools (purpose becomes the    │
│  "why" in career narrative — CV, interviews, negotiations)      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Layer 4: Enrichment Layers (Embedded in Conversation)

These are NOT separate dimensions or assessments. They are embedded in the AI conversation flow during each core dimension. The AI asks about them; the user's responses are captured in the profile.

### Emotional Patterns

```
Source: AAQ-II (Bond et al., 2011) — 7-item measure of psychological flexibility
Embedded in: All dimensions, especially Identity and Purpose
Questions: "When you think about this career change, what emotion comes up?"
           "Do you tend to avoid thinking about career decisions or overanalyze them?"
           "How do you typically respond to career uncertainty?"
Purpose: Identify avoidant, anxious, or rigid processing patterns that might
         block career action. AAQ-II scores inform which prompting techniques
         to emphasize (e.g., high avoidance → more ACT defusion work).
```

### Relational Context

```
Source: Schlossberg 4S "Support" pillar + LATAM cultural calibration
Embedded in: Values and Identity dimensions primarily
Questions: "Who in your life has a strong opinion about your career?"
           "What family expectations shape your career choices?"
           "What cultural or financial obligations constrain your options?"
           "Who supports this change? Who resists it?"
Purpose: Career decisions in LATAM (and globally) happen in relational context.
         Ignoring partner expectations, family pressure, and cultural norms
         produces strategies that fail in implementation. This layer captures
         the constraints and support structures.
```

### Somatic Awareness

```
Source: Embodied cognition research, somatic marker hypothesis (Damasio, 1994)
Embedded in: All dimensions, especially when evaluating options
Questions: "When you imagine doing Option A, what happens in your body?"
           "Where do you feel the resistance — head, chest, gut?"
           "Does this possibility feel like excitement or anxiety? They feel
            different in the body even when they look the same in the mind."
Purpose: Body-based signals carry information that cognitive analysis misses.
         Not a validated instrument — a conversational technique that enriches
         the self-knowledge profile with non-cognitive data.
```

---

## Layer 5: Psychological Capital (Trainable Across the Journey)

### PsyCap HERO (Luthans et al., 2007)

```
┌─────────────────────────────────────────────────────────────────┐
│                       PsyCap HERO                                │
│          (measurable, trainable psychological capital)            │
│                                                                  │
│  HOPE ────────── Do I have pathways and willpower toward goals? │
│  │                                                               │
│  │  Trained by: Ibarra crafting experiments (multiple pathways)  │
│  │  Measured by: Hope Scale items embedded in Compass            │
│  │                                                               │
│  EFFICACY ───── Do I believe I can succeed?                     │
│  │                                                               │
│  │  Trained by: Bandura mastery experiences, CDMSE-SF tracking  │
│  │  Measured by: CDMSE-SF + self-efficacy mapping               │
│  │                                                               │
│  RESILIENCE ─── Can I bounce back from setbacks?                │
│  │                                                               │
│  │  Trained by: ACT acceptance, Frankl attitudinal meaning      │
│  │  Measured by: Resilience items embedded in Compass            │
│  │                                                               │
│  OPTIMISM ───── Do I attribute setbacks externally/temporarily? │
│                                                                  │
│     Trained by: Cognitive restructuring, reframing exercises     │
│     Measured by: Optimism items embedded in Compass              │
│                                                                  │
│  PsyCap is tracked longitudinally in the Evolution section.     │
│  Higher PsyCap predicts better career transition outcomes.      │
│  d = 0.2-0.4 improvement expected from structured intervention. │
└─────────────────────────────────────────────────────────────────┘
```

---

## Layer 6: Assessment Instruments

All validated instruments, separate from AI conversation. Administered via static web forms.

| Instrument               | Items  | Measures                            | Dimension  | Source                             | Delivery                    |
| ------------------------ | ------ | ----------------------------------- | ---------- | ---------------------------------- | --------------------------- |
| CAAS-12                  | 12     | Career adaptability (4 C's)         | Identity   | Savickas (validated 2025, n=3,200) | Static web                  |
| MLQ-10                   | 10     | Meaning in life (presence + search) | Purpose    | Steger (2006)                      | Static web                  |
| Bull's Eye               | 4      | Values-life alignment (4 domains)   | Values     | Lundgren (ACT)                     | Static web                  |
| Big Five (IPIP-NEO)      | 50-120 | Personality (5 factors)             | Strengths  | Public domain, bigfive-web (MIT)   | Static web (embedded npm)   |
| AAQ-II                   | 7      | Psychological flexibility           | Enrichment | Bond et al. (2011)                 | Static web                  |
| CDMSE-SF                 | 25     | Career decision self-efficacy       | Enrichment | Betz & Taylor (2012)               | Static web                  |
| VIA-120                  | 120    | Character strengths (24)            | Strengths  | Peterson & Seligman (2004)         | External (viacharacter.org) |
| O\*NET Interest Profiler | 60     | Career interests (RIASEC)           | Identity   | US DOL (free)                      | External (mynextmove.org)   |

**Assessment Pacing Rules:**

- Minimum 4-6 weeks between retakes of the same instrument
- Scores are stored in the Evolution section of the profile
- Life events (layoff, new job, promotion, etc.) reset the pacing timer
- Static web tools enforce pacing via localStorage timestamps

**Cultural Calibration Notes (Colombia/LATAM):**

- MLQ Search scores run higher in collectivist cultures — this is normative, NOT symptomatic of existential crisis
- CAAS Control scores run lower in collectivist contexts — this reflects cultural norms, NOT a personal deficit
- Big Five Agreeableness scores may be elevated due to social desirability — interpret cautiously
- Credential inflation and English proficiency are systemic barriers — normalize these in interpretation

---

## Layer 7: Prompting Technique Stack

**Internal documentation only. Never labeled in user-facing materials.**

External framing: "Evidence-based conversational techniques grounded in career psychology research."

```
┌─────────────────────────────────────────────────────────────────┐
│                   PROMPTING TECHNIQUE STACK                      │
│                                                                  │
│  ┌─── PRIMARY ──────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  ACT (Hayes et al., 1999)                               │   │
│  │  • Values clarification: "What direction do you choose?"│   │
│  │  • Cognitive defusion: separate self from thoughts       │   │
│  │  • Committed action: "What's one step this week?"       │   │
│  │  Used in: Values dimension (primary), all dimensions    │   │
│  │                                                          │   │
│  │  Socratic Questioning (technique, not therapy)           │   │
│  │  • Expose contradictions: "You say X but you do Y"      │   │
│  │  • Guided discovery: lead to insight, don't lecture      │   │
│  │  • Challenge assumptions: "What evidence supports that?" │   │
│  │  Used in: All dimensions, especially Identity            │   │
│  │                                                          │   │
│  │  Cognitive Restructuring (technique within CBT)          │   │
│  │  • Identify career-limiting beliefs                      │   │
│  │  • Examine evidence for/against                          │   │
│  │  • Develop balanced alternative thoughts                 │   │
│  │  • "I'm too old" → "Experience is an asset in X context"│   │
│  │  Used in: Identity (limiting beliefs), Strengths        │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─── SECONDARY (used internally, never labeled) ────────────┐  │
│  │                                                          │   │
│  │  MI Techniques — OARS (Miller & Rollnick, 2012)         │   │
│  │  • Open questions: expand exploration                    │   │
│  │  • Affirmations: validate progress and courage           │   │
│  │  • Reflections: mirror back what user said (deeper)      │   │
│  │  • Summaries: synthesize and check understanding         │   │
│  │  • Change talk amplification: "Tell me more about when   │   │
│  │    you said you WANT to..."                              │   │
│  │  • Rolling with resistance: "It makes sense you feel     │   │
│  │    stuck. What would need to change?"                    │   │
│  │  Used in: When user shows ambivalence or resistance      │   │
│  │                                                          │   │
│  │  Narrative Techniques (White & Epston, 1990)             │   │
│  │  • Life theme extraction: "What connects your pivotal    │   │
│  │    career moments?"                                      │   │
│  │  • Re-authoring: "What's the new story you want to tell?"│   │
│  │  • Externalization: "The imposter feeling is not YOU"    │   │
│  │  Used in: Identity, Purpose dimensions                   │   │
│  │                                                          │   │
│  │  Logotherapy Techniques (Frankl, 1946)                   │   │
│  │  • Creative meaning: "What do you contribute?"           │   │
│  │  • Experiential meaning: "What nourishes you?"           │   │
│  │  • Attitudinal meaning: "What can you choose in the face │   │
│  │    of this difficulty?"                                  │   │
│  │  Used in: Purpose dimension, crisis users                │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─── STRUCTURAL (prompt engineering techniques) ────────────┐  │
│  │                                                          │   │
│  │  Chain of Empathy (arXiv:2311.04915)                    │   │
│  │  • Process emotion BEFORE analysis                       │   │
│  │  • "I can see this is hard" before "Here's what to do"  │   │
│  │                                                          │   │
│  │  SELF-DISCOVER (NeurIPS 2024)                           │   │
│  │  • Dynamic reasoning module selection                    │   │
│  │  • AI chooses which framework to apply based on context  │   │
│  │                                                          │   │
│  │  Progressive Disclosure                                  │   │
│  │  • Quick Mode: surface-level results fast                │   │
│  │  • Deep Mode: full methodology on opt-in                 │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─── SAFETY ────────────────────────────────────────────────┐  │
│  │                                                          │   │
│  │  MIND-SAFE (JMIR 2025)                                  │   │
│  │  • Crisis keyword detection                              │   │
│  │  • Immediate resource referral                           │   │
│  │  • Scope boundary enforcement                            │   │
│  │  • Escalation protocol                                   │   │
│  │                                                          │   │
│  │  Scope Disclaimer (every interaction start):             │   │
│  │  "N1 is a career development tool, not mental health."   │   │
│  │  "For clinical support: [crisis resources]"              │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Cross-Dimension Connection Map

```
                    ┌────────────┐
                    │   VALUES   │
                    │ (ACT +     │
                    │  Schwartz) │
                    └─────┬──────┘
                          │
              "Which strengths serve my values?"
                          │
          ┌───────────────┼───────────────┐
          │               │               │
          ▼               │               ▼
   ┌────────────┐        │        ┌────────────┐
   │ STRENGTHS  │        │        │  IDENTITY  │
   │ (VIA +     │        │        │ (Ibarra +  │
   │  Bandura + │        │        │  Marcia +  │
   │  Flow +    │◄───────┘        │  Savickas) │
   │  Big Five) │                 └─────┬──────┘
   └─────┬──────┘                       │
         │                              │
         │    "Strengths + identity     │
         │     applied to meaning"      │
         │               │              │
         └───────────────┼──────────────┘
                         │
                         ▼
                  ┌────────────┐
                  │  PURPOSE   │
                  │ (Frankl +  │
                  │  MLQ +     │
                  │  Ryff)     │
                  └─────┬──────┘
                        │
                        ▼
              ┌──────────────────┐
              │ INTEGRATION      │
              │ (Profile         │
              │  Synthesizer)    │
              │                  │
              │ Reinforcements + │
              │ Conflicts +      │
              │ Recommendations  │
              └────────┬─────────┘
                       │
           ┌───────────┼───────────┐
           ▼           ▼           ▼
    ┌──────────┐ ┌──────────┐ ┌──────────┐
    │ MARKET   │ │POSITION  │ │EXECUTION │
    │AWARENESS │ │ING       │ │          │
    │          │ │          │ │          │
    │Ghost Chk │ │CV Audit  │ │Interview │
    │AI Expose │ │Profile   │ │Negotiate │
    │          │ │STAR Bldr │ │Network   │
    │          │ │          │ │Job Hunt  │
    └──────────┘ └──────────┘ └──────────┘
```

---

## Framework-to-Career-Path Mapping

Different career paths activate different framework combinations:

| Career Path              | Primary Frameworks                                  | Key Instruments     | Critical Prompting                                |
| ------------------------ | --------------------------------------------------- | ------------------- | ------------------------------------------------- |
| **Stay & Grow**          | Bandura (self-efficacy), PsyCap HERO, SDT           | CDMSE-SF, CAAS-12   | Cognitive restructuring (impostor syndrome)       |
| **Move (same function)** | Ibarra (working identity), Granovetter (weak ties)  | CAAS-12, Big Five   | Socratic (challenge assumptions about "fit")      |
| **Move (career change)** | Schlossberg 4S, Ibarra, Marcia                      | All instruments     | Narrative (re-author career story), ACT (grief)   |
| **Go Independent**       | Protean Career, Chaos Theory, Bandura               | AAQ-II, CDMSE-SF    | MI techniques (ambivalence), ACT (risk tolerance) |
| **Freelance/Consulting** | Protean Career, Bandura, SDT (autonomy)             | AAQ-II, Flow Logger | Cognitive restructuring (pricing beliefs)         |
| **Founder**              | Planned Happenstance, Chaos Theory, PsyCap          | All instruments     | Logotherapy (meaning in uncertainty)              |
| **Pause & Reset**        | ACT (acceptance), Frankl (attitudinal), Schlossberg | MLQ-10, AAQ-II      | Logotherapy, MI (permission-giving)               |
| **Return to Workforce**  | Ibarra (identity), Bandura (rebuild efficacy)       | CAAS-12, CDMSE-SF   | Cognitive restructuring (gap shame)               |
| **International Move**   | Schlossberg 4S, Cultural calibration                | All instruments     | Narrative (bi-cultural identity)                  |

---

## Token Budget Architecture

How frameworks are loaded based on available context window:

```
LAYER 1: Always loaded (~3,000 tokens)
├── Core voice guide + safety protocol
├── Profile Interchange Format spec
├── Triage logic
└── Scope disclaimer

LAYER 2: Loaded per dimension (~5,000 tokens each)
├── Dimension-specific frameworks
├── Assessment instrument instructions
├── Prompting technique selection
└── Cultural calibration notes

LAYER 3: Loaded per career path (~2,000 tokens)
├── Path-specific tool adaptations
├── Path-specific frameworks
└── Path-specific prompting emphasis

LAYER 4: User profile (~2,000-5,000 tokens)
├── Completed dimension profiles
├── Enrichment data
└── Evolution history

TOTAL PER SESSION: ~15,000-25,000 tokens
(fits within free Claude tier and GPT limits)
```

---

## Research Citation Index

Every framework, instrument, and technique in N1 traces to a specific study:

| Framework/Instrument    | Citation                               | Key Finding                                                 | N1 Application           |
| ----------------------- | -------------------------------------- | ----------------------------------------------------------- | ------------------------ |
| ACT                     | Hayes et al. (1999)                    | Psychological flexibility predicts well-being               | Values dimension core    |
| Bandura Self-Efficacy   | Bandura (1977)                         | Mastery experiences strongest efficacy source               | Strengths dimension core |
| Big Five / IPIP-NEO     | Goldberg (1990), public domain         | Personality predicts career satisfaction                    | Strengths enrichment     |
| Bull's Eye Exercise     | Lundgren (ACT tradition)               | Visual values-alignment diagnostic                          | Values assessment        |
| CAAS                    | Savickas et al. (2012), validated 2025 | Career adaptability predicts transition success             | Identity assessment      |
| Career Chaos Theory     | Pryor & Bright (2011)                  | Careers are complex nonlinear systems                       | Meta-theory              |
| CDMSE-SF                | Betz & Taylor (2012)                   | Career decision self-efficacy is trainable                  | Enrichment instrument    |
| Chain of Empathy        | arXiv:2311.04915                       | Emotion-first prompting improves AI empathy                 | Prompting technique      |
| Csikszentmihalyi Flow   | Csikszentmihalyi (1990)                | Challenge-skill balance = career signal                     | Strengths dimension      |
| Damon Purpose           | Damon (2008)                           | Purpose develops through action, not reflection             | Purpose dimension        |
| Frankl Logotherapy      | Frankl (1946)                          | Three meaning sources (creative, experiential, attitudinal) | Purpose dimension core   |
| Granovetter Weak Ties   | Granovetter (1973)                     | 70%+ jobs through weak ties                                 | Network Map tool         |
| Hall Protean Career     | Hall (2004)                            | Self-directed, values-driven careers                        | Meta-theory              |
| Ibarra Working Identity | Ibarra (2003, 2023)                    | Experiment first, clarify through action                    | Identity dimension core  |
| Krumboltz Happenstance  | Krumboltz (2009)                       | Unplanned events are career opportunities                   | Meta-theory              |
| Lent et al. SCCT        | Lent, Brown & Hackett (1994)           | Self-efficacy → expectations → interests → goals            | Integrative spine        |
| Luthans PsyCap          | Luthans et al. (2007)                  | HERO predicts career success                                | Psychological capital    |
| Marcia Identity Status  | Marcia (1966)                          | 4 identity statuses diagnostic                              | Identity dimension       |
| MIND-SAFE               | JMIR 2025                              | Safety architecture for mental health AI                    | Safety protocol          |
| MLQ                     | Steger (2006)                          | Presence vs Search for meaning diagnostic                   | Purpose assessment       |
| Ryff PWB                | Ryff (1989)                            | Purpose in Life as well-being dimension                     | Purpose dimension        |
| Sackett et al.          | Sackett et al. (2022)                  | Structured interviews predict performance                   | Interview Prep tool      |
| Savickas CCT            | Savickas (2005)                        | Career construction through narrative                       | Identity dimension       |
| Schlossberg 4S          | Schlossberg (1981, 2011)               | Situation, Self, Support, Strategies                        | Triage framework         |
| Schwartz Values         | Schwartz (1992)                        | 10 basic values, conflict structure, 80+ countries          | Values dimension         |
| SDT                     | Deci & Ryan (1985)                     | Autonomy, competence, relatedness                           | Meta-theory              |
| SELF-DISCOVER           | NeurIPS 2024                           | Dynamic reasoning module selection                          | Prompting technique      |
| Therabot Trial          | NEJM AI 2025                           | CBT + MI + Socratic: 51% depression reduction               | Prompting validation     |
| VIA Strengths           | Peterson & Seligman (2004)             | 24 character strengths, signature strengths at work         | Strengths dimension      |
| AAQ-II                  | Bond et al. (2011)                     | Psychological flexibility measure, 7 items                  | Enrichment instrument    |

**Effect Size Expectations:** d = 0.2-0.4 for self-guided career interventions. Based on Whiston et al. (2017) meta-analysis of career counseling outcomes. Honest, meaningful at zero cost. Not clinical-grade intervention.

---

## Version History

| Version | Date       | Changes                                                                                                                                                                                                            |
| ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| v1      | 2026-03-23 | Initial architecture (original MASTER-PLAN.md)                                                                                                                                                                     |
| v2      | 2026-03-23 | 7-agent debate: added SCCT spine, Protean Career meta-theory, Schlossberg triage, PsyCap HERO, enrichment layers, cultural calibration, career path taxonomy, external tool integration, token budget architecture |
