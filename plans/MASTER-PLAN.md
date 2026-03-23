# N1 Master Plan — El Sistema Eres Tu

> **For agentic workers:** This is the master plan. Each phase has its own detailed implementation plan. Use superpowers:subagent-driven-development or superpowers:executing-plans to implement phase plans task-by-task.

**Goal:** Build and ship a free, open, psychology-backed self-knowledge + career strategy system distributed as AI skills, GPTs, and open-source tools. Zero LLM costs on our side — user's AI powers everything.

**Philosophy:** El sistema eres tu. Busca adentro. Construye afuera. The system IS you. The tools help you build YOUR system — unique to you, evolving with you, never "done." Agency and accountability. Hyperpersonalization as the ultimate goal.

**Research base:** 700+ cited studies across 15 academic frameworks, 11 psychometric instruments, 17 prompting techniques. See `research/` for full state-of-the-art review.

**Architecture:**

```
BUSCA ADENTRO (self-knowledge — build first)
    │ produces: Self-Knowledge Profile (identity, strengths, values, purpose)
    ▼
EL SISTEMA ERES TU (integration layer)
    │ the profile becomes the context for everything downstream
    ▼
CONSTRUYE AFUERA (career strategy — enhanced by self-knowledge)
    │ produces: Career Strategy, Action Plan, Execution Tools
    ▼
DISTRIBUTION (packaging — skills, GPTs, GitHub, web)
```

**Constraints:**

- Zero LLM API costs — user's own AI subscription powers tools
- Everything free, everything open (GitHub public when ready)
- Spanish-first, English-second
- Every recommendation cites a specific study
- Prompting stack: Socratic + Chain of Empathy + MI + CBT + ACT + Narrative Therapy

---

## Phase 0: Foundation

**What:** Set up the N1 repo, CLAUDE.md, research base, and shared prompting architecture that all tools inherit.

**Files:**

- `CLAUDE.md` — project instructions for any Claude working on N1
- `README.md` — public-facing project description
- `research/` — copy key research from n1-companion state-of-the-art
- `shared/prompting-stack.md` — the core prompting engine all tools use
- `shared/research-base.md` — condensed research citations for embedding in skills
- `shared/safety-protocol.md` — MIND-SAFE crisis detection + scope boundaries
- `shared/voice-guide.md` — N1 voice: direct, bilingual, anti-corporate, cites sources

**Dependencies:** None. This is the foundation everything else builds on.

**Build time estimate:** 1 session

---

## Phase 1: Busca Adentro — Identity

**Framework:** Ibarra Working Identity + Marcia Identity Status + Savickas Career Construction Theory (CAAS 4 C's)

**What this dimension answers:** "Who are you becoming?"

**Deep design:**

Identity is not a fixed trait — it's a process. Ibarra's research shows that people who successfully transition careers do it by _acting first and clarifying through action_, not by introspecting their way to an answer. Marcia's identity statuses (achieved, moratorium, foreclosed, diffused) provide a diagnostic. Savickas's 4 C's (Concern, Control, Curiosity, Confidence) measure career adaptability — the ability to navigate transitions.

**Assessment components:**

1. **Identity Status Assessment** — Based on Marcia (1966): Where are you on the identity spectrum?
   - Achieved: explored and committed (healthy)
   - Moratorium: actively exploring, not yet committed (growth zone)
   - Foreclosed: committed without exploration (risk of misalignment)
   - Diffused: neither exploring nor committed (paralysis)

2. **Career Adaptability (CAAS-12)** — Savickas short form (validated 2025, n=3,200):
   - Concern: Do I think about my future?
   - Control: Do I take responsibility for my career?
   - Curiosity: Do I explore options?
   - Confidence: Do I believe I can execute?

3. **Possible Selves Mapping** — Ibarra: List 3-5 possible professional identities. For each: what would a Tuesday look like? Who are you surrounded by? What energizes you?

4. **Crafting Experiments** — Ibarra: Design small-scale experiments to test each possible self. Not "quit your job and try" but "volunteer for a week, take on a side project, shadow someone."

**Prompting engine for Identity:**

- Primary: Narrative Therapy (externalize identity, re-author career story)
- Secondary: Socratic Method (expose contradictions between stated and revealed identity)
- Support: CBT (catch identity-limiting beliefs like "I'm too old" or "I'm not the type")

**Output:** Identity Profile

```yaml
identity_status: moratorium # or achieved/foreclosed/diffused
adaptability_scores:
  concern: 3.8/5
  control: 4.1/5
  curiosity: 3.2/5 # flagged — low curiosity may indicate foreclosure
  confidence: 3.5/5
possible_selves:
  - "Independent consultant — systems strategy"
  - "Product leader at a mission-driven company"
  - "Founder — career tech for LATAM"
active_experiments:
  - "Shadow a consultant friend for 2 days (scheduled March 28)"
narrative_theme: "builder who needs autonomy"
limiting_beliefs_identified:
  - "I need a big company name on my resume" # CBT flagged
```

**Connection to other dimensions:**

- Identity → Strengths: "Which of my possible selves best uses my signature strengths?"
- Identity → Values: "Which possible self aligns with my core values?"
- Identity → Purpose: "Which identity path serves meaning, not just success?"
- Identity → Construye Afuera: The chosen identity direction shapes CV narrative, interview stories, network strategy

**Distribution format:**

- Claude Skill: `n1-identity` — SKILL.md with CAAS-12 + Marcia assessment + Ibarra experiments
- ChatGPT GPT: "N1 Identidad" — bilingual identity exploration
- GitHub: Open-source skill definition + research citations

---

## Phase 2: Busca Adentro — Strengths

**Framework:** VIA Character Strengths + Bandura Self-Efficacy + Csikszentmihalyi Flow Theory

**What this dimension answers:** "What are you built for?"

**Deep design:**

Strengths are not skills (learnable) or talents (innate). VIA defines 24 character strengths that are identity-level traits — curiosity, perseverance, kindness, leadership, etc. Using signature strengths at work predicts engagement and meaning (Peterson & Seligman, 2004). Bandura's self-efficacy is the belief that you CAN execute — it's the strongest predictor of whether you'll actually try. Flow (Csikszentmihalyi) is the signal that you're in your zone — challenge matches skill.

**Assessment components:**

1. **Signature Strengths Discovery** — VIA-based (free at viacharacter.org, 24 strengths). We don't replicate the full VIA — we reference it and then work with the results:
   - "Take the free VIA survey. Come back with your top 5."
   - Then: "How do these show up in your work? When was the last time you used [strength] and felt energized?"

2. **Self-Efficacy Mapping** — Bandura's four sources:
   - Mastery experiences: "List 3 times you succeeded at something hard."
   - Vicarious experiences: "Who do you know that's done what you want to do?"
   - Social persuasion: "Who believes in your capability? What do they see?"
   - Physiological states: "When you imagine doing X, what do you feel in your body?"

3. **Flow Activity Log** — Track which activities produce flow:
   - "This week, notice when time disappears. What were you doing?"
   - "Rate each work activity: challenge level (1-5) vs. skill level (1-5)"
   - Activities where challenge ≈ skill and both are high = flow zone = career signal

**Prompting engine for Strengths:**

- Primary: Socratic Method (draw out what the user already knows about themselves)
- Secondary: Motivational Interviewing (amplify "change talk" when they recognize strengths)
- Support: ACT defusion (separate "should-strengths" from actual strengths — "I should be good at networking" vs "I'm naturally good at deep analysis")

**Output:** Strengths Profile

```yaml
signature_strengths: # from VIA or discovered through conversation
  - curiosity
  - perseverance
  - love_of_learning
  - honesty
  - judgment
self_efficacy:
  mastery_experiences:
    [
      "led migration project under pressure",
      "built trading system from scratch",
    ]
  vicarious_models: ["colleague who went independent at 35"]
  social_persuasion: ["manager says I see patterns others miss"]
  physiological: "calm under complexity, anxious with ambiguity"
flow_activities:
  - "deep system design (challenge: 4, skill: 4) → FLOW"
  - "networking events (challenge: 3, skill: 2) → ANXIETY"
  - "routine reporting (challenge: 1, skill: 5) → BOREDOM"
career_implications:
  - "Roles requiring deep analysis + system building align with flow"
  - "Avoid roles heavy on social performance without substance"
```

**Connection to other dimensions:**

- Strengths → Identity: "Which possible self uses your signature strengths most?"
- Strengths → Values: "Are you using your strengths in service of your values, or someone else's?"
- Strengths → Purpose: "Strengths applied to meaningful problems = purpose"
- Strengths → Construye Afuera: Strengths data feeds CV Audit (highlight right things), Interview Prep (STAR stories from mastery experiences), Career Strategy (roles that match flow profile)

**Distribution format:**

- Claude Skill: `n1-strengths` — strengths discovery + flow logging + self-efficacy building
- ChatGPT GPT: "N1 Fortalezas" — bilingual strengths exploration
- Static web tool: Flow Activity Logger (HTML/JS, no backend, GitHub Pages)

---

## Phase 3: Busca Adentro — Values

**Framework:** ACT Values Clarification + Schwartz Theory of Basic Values

**What this dimension answers:** "What do you actually care about?"

**Deep design:**

Values are not goals. A goal is "become a director." A value is "growth" or "autonomy" or "impact." You achieve goals and they end. Values are directions — you move toward them forever. ACT's distinction between values and goals is the most important insight in career strategy: most people optimize for goals (title, salary, company name) without checking if those goals serve their actual values.

Schwartz's 10 basic values (self-direction, stimulation, hedonism, achievement, power, security, conformity, tradition, benevolence, universalism) provide a universal framework validated in 80+ countries. The conflict structure is key: self-direction opposes conformity; achievement opposes benevolence.

**Assessment components:**

1. **Values Elicitation** — ACT-based guided exercises:
   - "Imagine you're 80. Complete: 'I'm glad I spent my career...'"
   - "If nobody was watching or judging, what would you do with your professional life?"
   - "What pisses you off about your current work? That anger usually points at a violated value."

2. **Values Hierarchy** — Rank and prioritize:
   - "From this list of 10 values, pick your top 5. Now rank them."
   - "Scenario: Value A conflicts with Value B. Which wins? Why?"
   - Forced trade-offs reveal the real hierarchy (not the aspirational one)

3. **Bull's Eye Exercise** — Lundgren (ACT):
   - Four life domains: work, relationships, personal growth, leisure
   - For each: "How aligned are your current actions with your stated values?" (1-10)
   - The gap = the cost of misalignment = motivation for change

4. **Values-Career Alignment Check:**
   - "Your top value is autonomy. Your current role has 2/10 autonomy. What's the cost?"
   - "Your top 3 values are X, Y, Z. Which career paths serve all three?"

**Prompting engine for Values:**

- Primary: ACT Values Clarification (defusion, willingness, committed action)
- Secondary: Socratic Method (expose values-behavior gaps)
- Support: Motivational Interviewing (when user resists acknowledging misalignment)

**Output:** Values Profile

```yaml
core_values: # ranked
  1: autonomy
  2: growth
  3: impact
  4: honesty
  5: curiosity
value_conflicts:
  - "security vs. autonomy — currently choosing security at the cost of autonomy"
bulls_eye_alignment:
  work: 4/10 # significant misalignment
  relationships: 7/10
  personal_growth: 6/10
  leisure: 5/10
career_implications:
  - "Current role violates #1 value (autonomy). High cost of staying."
  - "Independent work or small team leadership would serve top 3 values"
value_traps_identified:
  - "Optimizing for 'achievement' (title) when core value is 'impact' (contribution)"
```

**Connection to other dimensions:**

- Values → Identity: "Which possible self lives these values?"
- Values → Strengths: "Are you using strengths to serve YOUR values or your employer's?"
- Values → Purpose: "Values + strengths applied to meaningful problems = purpose"
- Values → Construye Afuera: Values profile becomes the filter for opportunities — Ghost Check enriched with "does this role match your values?", Negotiate grounded in "what's your walkaway based on values, not just salary?"

**Distribution format:**

- Claude Skill: `n1-values` — ACT values clarification + Bull's Eye + alignment tracking
- ChatGPT GPT: "N1 Valores" — bilingual values exploration
- Static web tool: Bull's Eye Exercise (interactive HTML/JS, GitHub Pages)

---

## Phase 4: Busca Adentro — Purpose

**Framework:** Frankl Logotherapy + Ryff PWB (Purpose in Life subscale) + Steger MLQ

**What this dimension answers:** "What gives YOUR life meaning?"

**Deep design:**

Purpose is built, not found. The 2025 Psychology Today research confirms: real purpose comes from small daily meaningful actions, not a eureka moment. Frankl's logotherapy adds that meaning can come from three sources: creative (what you give to the world), experiential (what you receive from the world), and attitudinal (the stance you take toward unavoidable suffering — directly applicable to forced career transitions).

The MLQ (Meaning in Life Questionnaire) measures two dimensions: Presence of Meaning (do you currently have it?) and Search for Meaning (are you looking for it?). The four quadrants are diagnostic:

- High Presence + Low Search = fulfilled (rare)
- High Presence + High Search = growing (engaged with life)
- Low Presence + High Search = seeking (common in transitions — N1's core user)
- Low Presence + Low Search = disengaged (needs different intervention)

**Assessment components:**

1. **MLQ-10** — Steger's validated 10-item questionnaire:
   - 5 items: Presence ("I understand my life's meaning")
   - 5 items: Search ("I am looking for something that makes my life feel meaningful")
   - Scoring: 7-point Likert → quadrant placement

2. **Meaning Sources Inventory** — Frankl-inspired:
   - Creative: "What do you create or contribute that matters to someone?"
   - Experiential: "What experiences fill you up — not entertainment, but genuine nourishment?"
   - Attitudinal: "What difficulty in your career right now could become meaningful if you chose to face it?"

3. **Life Theme Extraction** — Savickas narrative approach:
   - "Tell me about 3 pivotal moments in your career. What connects them?"
   - "If your career were a movie, what's the through-line?"
   - "What problem in the world do you keep coming back to?"

4. **Purpose Builder** — NOT "find your purpose" but "build it":
   - "What's one thing you could do this week that would feel meaningful?"
   - "Purpose isn't the destination — it's the practice. What's today's practice?"
   - Track: which actions produced meaning (longitudinal)

**Prompting engine for Purpose:**

- Primary: Logotherapy (meaning through creative/experiential/attitudinal values)
- Secondary: Narrative Therapy (life theme extraction, re-authoring)
- Support: Socratic Method (challenge "I haven't found my purpose" with "what if purpose is built, not found?")

**Output:** Purpose Profile

```yaml
mlq_scores:
  presence: 4.2/7 # moderate — has some meaning but wants more
  search: 5.8/7 # high — actively seeking
  quadrant: seeking # core N1 user
meaning_sources:
  creative: "building systems that help people navigate complexity"
  experiential: "deep conversations about what matters"
  attitudinal: "being laid off forced me to question what I actually want"
life_theme: "making the invisible visible — patterns, systems, connections others miss"
purpose_practice:
  this_week: "write about one insight from the career transition for LinkedIn"
  this_month: "have 3 conversations with people doing work that looks meaningful"
career_implications:
  - "Roles that involve pattern recognition + human impact"
  - "Avoid roles that are purely execution without creation"
  - "The life theme suggests consulting, strategy, or education"
```

**Connection to other dimensions:**

- Purpose → Identity: "Which possible self serves this life theme?"
- Purpose → Strengths: "Strengths + purpose = where you create the most value"
- Purpose → Values: "Purpose without values alignment becomes burnout"
- Purpose → Construye Afuera: Purpose profile becomes the "why" in the career narrative — CV Audit checks if your resume tells the purpose story, Interview Prep grounds STAR stories in meaning

---

## Phase 5: El Sistema Eres Tu — Integration Layer

**What:** The glue that connects all four busca adentro dimensions into a unified Self-Knowledge Profile, and makes it available as context for all construye afuera tools.

**Deep design:**

This is NOT a separate tool — it's the system prompt context that carries the user's self-knowledge forward. When a user goes from busca adentro to construye afuera, their identity/strengths/values/purpose profiles become part of the conversation context.

**Components:**

1. **Profile Synthesizer** — Combines 4 dimension profiles into one coherent document
2. **Cross-Dimension Insights** — Where dimensions reinforce or conflict:
   - "Your identity (builder) + strengths (systems thinking) + values (autonomy) + purpose (making invisible visible) all point toward independent consulting"
   - "Conflict: your value of security contradicts your identity exploration of founding. Let's examine this."
3. **Evolution Tracker** — Re-run assessments over time, show progression
4. **System Template** — A downloadable `.md` file the user installs in their Claude Project / ChatGPT that contains their full profile + N1 methodology instructions. This IS "el sistema eres tu" — their AI becomes their personalized career strategist.

**Output:** The N1 System Kit

- A personalized markdown document containing:
  - The user's Self-Knowledge Profile (all 4 dimensions)
  - N1 methodology instructions (prompting stack, research citations)
  - Career tool instructions (how to use construye afuera tools with this profile)
  - Evolution prompts (monthly re-assessment suggestions)

---

## Phase 6: Construye Afuera — Market Awareness

**Tools:** Ghost Check, AI Exposure, Market Scanner

**Enhancement:** These tools now receive the Self-Knowledge Profile as context.

**Ghost Check** (deterministic, already built):

- Input: job posting text
- Enhancement: "Based on your values profile, even if this job is real, it scores 3/10 on autonomy alignment."
- Distribution: Static web tool (HTML/JS) + Claude Skill + GPT

**AI Exposure** (hybrid, already built):

- Input: role/skills description
- Enhancement: "Your signature strength (systems thinking) is LOW automation risk. But your routine tasks (reporting) are HIGH risk. Strategy: delegate routine, double down on systems."
- Distribution: Claude Skill + GPT

**Market Scanner** (new, leverages JobSpy):

- Input: target role + location
- Output: real market data — postings, salary ranges, company signals
- Integration: reference JobSpy (open source) for data
- Distribution: Claude Skill (needs web access) + GPT

---

## Phase 7: Construye Afuera — Positioning

**Tools:** CV Audit, Profile Builder, STAR Builder

**Enhancement:** Self-knowledge drives positioning strategy.

**CV Audit** (hybrid, already built):

- 10-dimension scoring + bias detection
- Enhancement: "Your CV emphasizes management. But your identity is 'builder' and your flow activities are 'deep system design.' Recommendation: reframe experience around building, not managing."
- Enhancement: "Your life theme is 'making invisible visible.' Your CV doesn't tell this story. Here's how to restructure..."

**Profile Builder** (LLM-dependent):

- LinkedIn/professional profile based on identity + strengths + values
- Enhancement: builds narrative from self-knowledge, not generic templates

**STAR Builder** (LLM-dependent, already built):

- Enhancement: "Your mastery experiences (self-efficacy profile) are your best STAR stories. Let's structure them."
- Enhancement: selects stories that align with identity and values, not just impressiveness

---

## Phase 8: Construye Afuera — Execution

**Tools:** Interview Prep, Negotiate, Network Map, Job Hunt

**Enhancement:** All informed by self-knowledge.

**Interview Prep** — "Your identity status is 'moratorium' (exploring). Frame this as growth: 'I'm deliberately expanding my range' not 'I don't know what I want.'"

**Negotiate** — "Your #1 value is autonomy. Negotiate for remote/flexible arrangements, not just salary. Your walkaway is informed by values, not just market rate."

**Network Map** — Granovetter framework enhanced with identity: "Who in your network represents each possible self? Those are your weak ties to strengthen."

**Job Hunt** — Channel strategy informed by values: "Your values profile says you hate corporate process. Skip mass applications. Focus on warm intros and niche communities."

---

## Phase 9: Construye Afuera — Tracking & Evolution

**Tools:** Compass (enhanced), Progress, Weekly Review, Runway, Journal

**Compass** — Redesigned as CAAS-12 (career adaptability) + values alignment + purpose presence. Not a one-time quiz — a periodic check-in that shows evolution over time.

**Weekly Review** — Enhanced with values alignment check: "This week, how aligned were your actions with your stated values? (Bull's Eye re-check)"

**Journal** — Narrative therapy prompts: "What story are you telling yourself about your career this week? Is it the old story or the new one?"

**Runway** — Deterministic, already built. No changes needed.

**Progress** — Longitudinal tracking of self-knowledge evolution: CAAS scores over time, values alignment over time, MLQ scores over time.

---

## Phase 10: Distribution — Claude Skills

**What:** Package all tools as SKILL.md files for Claude marketplaces (SkillsMP, SkillHub, Claude Marketplace).

**Skills to create:**

1. `n1-identity` — Identity exploration (Ibarra + Marcia + CAAS)
2. `n1-strengths` — Strengths discovery (VIA + self-efficacy + flow)
3. `n1-values` — Values clarification (ACT + Schwartz)
4. `n1-purpose` — Purpose building (Frankl + MLQ)
5. `n1-system` — Full system (busca adentro → construye afuera unified)
6. `n1-ghost-check` — Ghost job detector
7. `n1-cv-audit` — CV/resume audit
8. `n1-interview` — Interview preparation
9. `n1-negotiate` — Negotiation strategy
10. `n1-compass` — Career adaptability assessment
11. `n1-career-strategy` — Full career strategy synthesis

**Architecture per skill:**

- YAML frontmatter (name, description, trigger phrases)
- Voice guide (N1 voice: direct, bilingual, anti-corporate, cites sources)
- Prompting stack (Socratic + CoE + MI + CBT + ACT as appropriate)
- Safety protocol (MIND-SAFE guardrails)
- Research citations (embedded, not linked)
- Progressive disclosure (description → full methodology on trigger)

---

## Phase 11: Distribution — ChatGPT GPTs

**What:** Build GPTs for the LATAM audience (ChatGPT dominates LATAM).

**GPTs to create (bundled, not 26 individual):**

1. **N1 Busca Adentro** — Full self-knowledge journey (identity + strengths + values + purpose)
2. **N1 Construye Afuera** — Career strategy tools (CV, interview, negotiate, job hunt)
3. **N1 Compass** — Quick career readiness assessment
4. **N1 Ghost Check** — Standalone entry point (high viral potential)

**Each GPT needs:** Instructions (workflow, not persona), knowledge files (condensed research), conversation examples.

---

## Phase 12: Distribution — GitHub & Static Web

**What:** Open-source everything. Static tools on GitHub Pages.

**GitHub repo structure:**

```
N1/
├── README.md           — entry point, philosophy, links to everything
├── CLAUDE.md           — instructions for Claude instances working on N1
├── plans/              — this master plan + phase plans
├── skills/
│   ├── busca-adentro/  — identity, strengths, values, purpose SKILL.md files
│   └── construye-afuera/ — career tools SKILL.md files
├── gpts/               — GPT configurations and instructions
├── research/           — state-of-the-art research, citations
├── shared/             — prompting stack, voice guide, safety protocol
├── web/                — static HTML/JS tools (GitHub Pages)
│   ├── compass/        — interactive career adaptability assessment
│   ├── ghost-check/    — ghost job detector
│   ├── bulls-eye/      — ACT values alignment exercise
│   ├── flow-logger/    — flow activity tracking
│   └── runway/         — financial runway calculator
└── docs/               — methodology documentation
```

**Static web tools (zero backend, zero cost):**

- Compass (CAAS-12 scoring — deterministic)
- Ghost Check (signal-based — deterministic)
- Bull's Eye Exercise (ACT values alignment — interactive)
- Flow Activity Logger (challenge-skill tracking — interactive)
- Runway Calculator (financial math — deterministic)

---

## Phase 13: Distribution — LinkedIn Content

**What:** Each tool launch = LinkedIn content. Research findings = content. Batch launch strategy.

**Content per tool:**

1. Research post: "91% of people experience purpose anxiety. Here's what the science says." (→ links to N1 purpose tool)
2. Tool announcement: "I built a free [tool]. Here's why and how to use it." (→ links to skill/GPT/GitHub)
3. Insight post: "You don't find purpose. You build it." (→ uses N1 voice, references research)

**Batch launch sequence:**

- Week 1: Ghost Check (entry point — high viral potential, concrete, immediately useful)
- Week 2: Compass (career adaptability — the hook into deeper self-knowledge)
- Week 3: Identity (busca adentro layer 1 — the philosophy)
- Week 4: Values (busca adentro layer 2 — ACT values clarification)
- Week 5: Strengths + Purpose (complete the busca adentro system)
- Week 6: Full system announcement ("el sistema eres tu — here's how to build yours")

---

## Build Order (Dependencies)

```
Phase 0: Foundation ──────────────────────────────┐
                                                   │
Phase 1: Identity ──┐                              │
Phase 2: Strengths ─┤ (parallel, no cross-deps)    │
Phase 3: Values ────┤                              │
Phase 4: Purpose ───┘                              │
         │                                         │
Phase 5: Integration Layer ◄───────────────────────┘
         │
Phase 6: Market Awareness ──┐
Phase 7: Positioning ───────┤ (parallel, all consume profile)
Phase 8: Execution ─────────┤
Phase 9: Tracking ──────────┘
         │
Phase 10: Claude Skills ──┐
Phase 11: ChatGPT GPTs ───┤ (parallel)
Phase 12: GitHub + Web ────┘
         │
Phase 13: LinkedIn Content (after tools are live)
```

**Phases 1-4 can be built in parallel** — each dimension is independent. They connect through Phase 5 (integration).

**Phases 6-9 can be built in parallel** — each tool cluster is independent. They all consume the profile from Phase 5.

**Phases 10-12 can be built in parallel** — packaging for different channels.

---

## Success Criteria

- [ ] All 4 busca adentro dimensions have SKILL.md files published to at least 1 marketplace
- [ ] At least 4 GPTs live in the GPT Store (busca adentro, construye afuera, compass, ghost check)
- [ ] GitHub repo public with README, all skills, static web tools
- [ ] 5+ static web tools live on GitHub Pages
- [ ] LinkedIn batch launch completed (6 weeks of content)
- [ ] Research base documented and citeable (700+ studies)
- [ ] Zero LLM costs incurred by N1
- [ ] Every tool recommendation cites a specific study

---

## Key Research References (Embedded in Tools)

**Self-Knowledge:**

- Deci & Ryan (1985) — Self-Determination Theory: autonomy, competence, relatedness
- Savickas (2005) — Career Construction: 4 C's (Concern, Control, Curiosity, Confidence)
- Hayes et al. (1999) — ACT: values vs goals, psychological flexibility
- Bandura (1977) — Self-efficacy: mastery experiences as strongest source
- Ibarra (2003/2023) — Working Identity: experiment first, clarify through action
- Frankl (1946) — Logotherapy: meaning through creative, experiential, attitudinal values
- Csikszentmihalyi (1990) — Flow: challenge-skill balance as career fit signal
- Seligman (2004) — VIA Character Strengths: 24 strengths, signature strengths at work
- Ryff (1989) — Psychological Well-Being: 6 dimensions including Purpose in Life
- Steger (2006) — MLQ: Presence vs Search for meaning
- Schwartz (1992) — Basic Values: 10 values, conflict structure, 80+ countries
- Marcia (1966) — Identity Status: achieved, moratorium, foreclosed, diffused

**Career Strategy:**

- Sackett et al. (2022) — Structured interviews predict performance better than unstructured
- Granovetter (1973) — Weak ties: 70%+ of jobs through networking
- Burnett & Evans (2016) — Designing Your Life: Odyssey Plans, dysfunctional beliefs

**Prompting:**

- Therabot Trial (NEJM AI, 2025) — CBT + MI + Socratic: 51% depression reduction
- SELF-DISCOVER (NeurIPS 2024) — Dynamic reasoning module selection
- Chain of Empathy (arXiv:2311.04915) — Emotional reasoning before response
- MIND-SAFE (JMIR 2025) — Safety architecture for mental health AI

**Market:**

- 91% purpose anxiety (Rainey, 2014; replicated)
- 58% want career change, 14% take steps (2026 data)
- 17% reduced mortality from purpose (Cohen et al., 2016; n=136,265)
- Zero Spanish-language career strategy tools in any marketplace (2026 audit)
