# N1 Research Base

> Condensed citations for embedding in N1 skills and tools.
> 25+ frameworks, max 2 lines each. Total: ~4K tokens.
> Use these directly — do not paraphrase into weaker claims.
> Source: academic-meta-review.md + prompting-strategies.md

---

## Layer 1: Meta-Theory (Always Active)

These theories are the philosophical foundation. Never name them to users — embed them in how you frame every interaction.

1. **Protean Career Theory** (Hall, 2004) — Careers are self-directed and values-driven; psychological success (not salary/title) is the measure of a good career.
   N1 use: The premise "el sistema eres tu" is Protean Career Theory. Values are the primary compass. Success is user-defined.

2. **Career Chaos Theory** (Pryor & Bright, 2011) — Careers are complex nonlinear systems; prediction is limited; building adaptability beats rigid planning.
   N1 use: Normalizes confusion in career transitions. CAAS adaptability matters more than any fixed plan. "Esta confusión es normal y productiva."

3. **Planned Happenstance** (Krumboltz, 2009) — Unplanned events are inevitable and desirable; 5 skills help capitalize on them: curiosity, persistence, flexibility, optimism, risk-taking.
   N1 use: Challenges "find your passion and plan" myth. Encourages crafting experiments over rigid commitment. Maps to CAAS + PsyCap HERO.

4. **Self-Determination Theory (SDT)** (Deci & Ryan, 1985) — Three universal psychological needs: autonomy, competence, relatedness. Their satisfaction predicts intrinsic motivation and career well-being.
   N1 use: Career satisfaction check against three needs. SDT-based career chatbot outperformed generic chatbot (CHI 2025). 144 studies, 79,000+ participants.

---

## Layer 2: Integrative Spine

The routing engine that connects self-knowledge to career action.

5. **SCCT — Social Cognitive Career Theory** (Lent, Brown & Hackett, 1994) — Self-efficacy → outcome expectations → interests → goals → actions. The causal chain connecting busca adentro to construye afuera.
   N1 use: Every recommendation traces this chain. Strengths(efficacy) → Values(expectations) → Identity(interests) → Purpose(goals) → Construye Afuera(actions).

6. **Schlossberg 4S Model** (Schlossberg, 1995) — Transitions require four resources: Situation + Self + Support + Strategies.
   N1 use: Triage layer maps to Situation. Busca adentro = Self. Relational context = Support. Construye afuera = Strategies.

---

## Layer 3: Busca Adentro — Values Dimension

7. **ACT Values Clarification** (Hayes, Strosahl & Wilson, 1999) — Psychological flexibility + committed action toward personal values outperforms goal-setting alone. Effect sizes: g = 0.57–0.82 (large, meta-analysis 2024).
   N1 use: Primary values framework. Use ACT internally — label externally as "clarificación de valores." arXiv:2509.09712 confirms AI delivery.

8. **Schwartz Basic Values Theory** (Schwartz, 1992) — 10 universal values (power, achievement, hedonism, stimulation, self-direction, universalism, benevolence, tradition, conformity, security) in a motivational continuum.
   N1 use: Values profiling backbone in busca adentro. Values hierarchy predicts career choices across cultures. Identifies conflicts between competing values.

9. **SDT Self-Direction** (Deci & Ryan, 1985) — Autonomy + competence + relatedness as universal career needs; 144 studies, 79,000+ participants across cultures.
   N1 use: Sanity check on career recommendations — does this path satisfy all three needs? If not, flag it explicitly.

---

## Layer 4: Busca Adentro — Strengths Dimension

10. **Bandura Self-Efficacy Theory** (Bandura, 1997) — Four sources: mastery experiences (strongest), vicarious learning, social persuasion, physiological states. Strongest predictor of career performance.
    N1 use: Map user's mastery experiences to identify domain-specific self-efficacy. "El self-efficacy predice el desempeño de carrera mejor que la personalidad."

11. **VIA Character Strengths** (Peterson & Seligman, 2004) — 24 universal strengths in 6 virtues. Gold Standard strengths baseline (alongside Big Five). Free validated tool: viacharacter.org.
    N1 use: Signature strengths identification in strengths dimension. Always refer users to viacharacter.org — no licensing issues, validated, free.

12. **Flow Theory** (Csikszentmihalyi, 1990) — Optimal experience occurs when challenge matches skill. Flow activities are direct signals of career fit. Strong evidence base.
    N1 use: Flow Activity Logger tool. Activities that reliably produce flow are the highest-signal input for career direction in strengths dimension.

13. **Big Five Personality** (Costa & McCrae, 1992) — Gold Standard personality model. IPIP-NEO is free and validated. Openness predicts creative career success; Conscientiousness predicts performance across domains.
    N1 use: bigfive-web embed (MIT license). Used as strengths baseline — not for typing, for understanding patterns. Pair with VIA for complete picture.

---

## Layer 5: Busca Adentro — Identity Dimension

14. **Working Identity** (Ibarra, 2003) — Career transitions require experimenting with possible identities before committing. "Act your way into a new way of thinking" outperforms introspection alone. Moderate evidence.
    N1 use: Crafting experiments framework. Three types: peripheral participation, temporary projects, identity-relevant side projects. Especially for Promotion/Independence paths.

15. **Identity Status Theory** (Marcia, 1966) — 4 statuses: achieved (committed + explored), moratorium (exploring, not committed), foreclosed (committed without exploring), diffused (neither).
    N1 use: Heuristic assessment in identity dimension. Entry-level moratorium is PRODUCTIVE — not a problem to fix. Foreclosed users need gentle exploration prompts.

16. **CAAS — Career Adapt-Abilities Scale** (Savickas & Porfeli, 2012) — 4 subscales: Concern, Control, Curiosity, Confidence. 149 studies, 82,519 participants. Strongest career-specific adaptability predictor. No consumer tool exists.
    N1 use: CAAS-12 static web tool (12 items, 3 per subscale). Core of the Compass tool. Identify lowest subscale as priority intervention target.

17. **PsyCap HERO** (Luthans, Youssef & Avolio, 2007) — Hope + Efficacy + Resilience + Optimism as a composite psychological capital. Predicts performance and well-being across career stages.
    N1 use: Enrichment layer embedded in identity + purpose dimensions. Particularly important for "Go Independent" path (requires high PsyCap).

---

## Layer 6: Busca Adentro — Purpose Dimension

18. **MLQ — Meaning in Life Questionnaire** (Steger, Frazier, Oishi & Kaler, 2006) — 10 items measuring Presence (having meaning) and Search (seeking meaning). Most validated meaning instrument. High Search is normative in LATAM.
    N1 use: MLQ-10 static web tool. Score separately for Presence and Search — do not combine. High Search in LATAM is normal, not pathological.

19. **Logotherapy** (Frankl, 1946/1984) — Meaning through three sources: creative work (what you give), experiential values (what you receive), attitudinal values (suffering with dignity). Purpose reduces mortality 17% (Hill et al., 2014; 136,265 participants).
    N1 use: Meaning sources framework in purpose dimension. "El propósito en la vida reduce la mortalidad en un 17%." Reframe hardship as attitudinal value source.

20. **Ryff Psychological Well-Being** (Ryff, 1989) — 6 dimensions: autonomy, environmental mastery, personal growth, positive relations, purpose in life, self-acceptance. Strong evidence base.
    N1 use: Well-being lens for career recommendations. Use as integration check: does the proposed career path score well across all 6 Ryff dimensions?

21. **Life Design** (Burnett & Evans, 2016) — Odyssey Plans (3 parallel 5-year paths), activity log (engagement + energy), reframing dysfunctional beliefs. Most engaging purpose exercises. Moderate evidence.
    N1 use: Odyssey Plans exercise in purpose dimension. Three simultaneous paths prevent false either/or thinking. Activity log surfaces flow + meaning intersections.

---

## Layer 7: Career Strategy Frameworks

22. **Granovetter Weak Ties** (Granovetter, 1973) — Weak ties (acquaintances) provide novel information strong ties cannot. Most job opportunities are found through weak ties, not close contacts.
    N1 use: Network Map tool. Helps users identify and activate weak ties. Counter-intuitive insight: most valuable network contacts are people you barely know.

23. **AAQ-II — Acceptance and Action Questionnaire** (Hayes, Strosahl & Wilson, 2004) — 7-item psychological flexibility measure (score 7–49; lower = more flexible). Predicts career decision quality and reduces avoidance.
    N1 use: Enrichment layer. When user shows avoidance patterns ("no sé," "todo está mal"), administer AAQ-II conceptually to surface experiential avoidance.

24. **CDMSE-SF — Career Decision-Making Self-Efficacy** (Betz & Taylor, 1994) — 25-item self-efficacy for 5 career decision tasks: self-appraisal, occupational information, goal selection, planning, problem solving.
    N1 use: Enrichment layer. When user is stuck on career decisions, identify which CDMSE-SF domain is lowest and target interventions there.

---

## Layer 8: Prompting Techniques

25. **MIND-SAFE** (JMIR, 2025) — Crisis detection and safety protocol for AI mental health tools. Tier-based escalation (assessment → response → referral) reduces harm from misapplication of AI counseling tools.
    N1 use: safety-protocol.md. Every skill loads safety boundaries first. Three tiers: orientation concern (educate), active distress (contain + refer), safety risk (immediate referral).

26. **Chain of Empathy (CoE)** (arXiv:2311.04915) — Model reasons about user's emotional state before generating a response. Improves response quality and reduces harm in emotionally charged interactions.
    N1 use: Core technique in prompting-stack.md. Before responding to any user message, internally model: "What is this person feeling right now? What do they need?"

27. **SELF-DISCOVER** (Zhou et al., DeepMind/HuggingFace, NeurIPS 2024) — Dynamic selection and composition of reasoning modules outperforms fixed prompting chains. 32% improvement over Chain-of-Thought on complex tasks.
    N1 use: Technique selection logic in prompting-stack.md. Match reasoning strategy to question type: Socratic for values, ToT for decisions, MI for resistance.

28. **Motivational Interviewing for AI** (arXiv:2505.17380, JMIR 2025) — OARS techniques (Open questions, Affirmations, Reflective listening, Summaries) reduce resistance and improve engagement in AI counseling contexts.
    N1 use: Core technique in prompting-stack.md. When user shows resistance ("no puedo," "no tiene sentido"), apply OARS — never confront, always roll with resistance.

29. **Socratic Questioning** (Princeton NLP, ACL 2025) — Progressive questions that guide users to self-discovery outperform advice-giving. Produces insights the user owns and remembers.
    N1 use: Primary technique for busca adentro. Replace "you should" with "what do you notice when..." and "what matters most to you about..."

30. **CBT Cognitive Restructuring** (Therabot, NEJM AI, March 2025) — Combined CBT + MI + Socratic: 51% depression reduction, 31% anxiety reduction, therapist-level therapeutic alliance. 106 participants, RCT.
    N1 use: Use internally for career-limiting beliefs ("no sirvo para esto," "ya es muy tarde"). Label externally as "explorar esa creencia" — never as CBT.

---

## Key Statistics (Pre-Formatted for Citation)

Use these verbatim in Spanish responses when evidence is needed:

```
"91% de las personas reportan ansiedad de propósito" [academic-meta-review]
"El propósito en la vida reduce la mortalidad en un 17% (Hill et al., 2014; 136,265 participantes)"
"Solo el 3-5% de las personas en transición de carrera acceden a orientación profesional"
"El ACT tiene efectos grandes: g = 0.57-0.82 (meta-análisis 2024)"
"La adaptabilidad de carrera (CAAS): 149 estudios, 82,519 participantes — ninguna herramienta para consumidor existe"
"El self-efficacy predice el desempeño de carrera mejor que la personalidad (Bandura, 1997)"
"d = 0.2-0.4 — efectos pequeños pero reales, a costo cero"
"Un chatbot basado en SDT superó al chatbot genérico en satisfacción de carrera (CHI 2025)"
"La reducción de síntomas depresivos del 51% con CBT + MI + Socratic (Therabot, NEJM AI 2025)"
"CAAS: 4 subscalas (Concern, Control, Curiosity, Confidence) — la herramienta más validada específicamente para carreras"
```

---

## Assessment Tier Reference

Use this to guide recommendations on what tools to trust:

**Tier 1 (Strong — recommended):** CAAS-12, Big Five (IPIP-NEO), VIA Character Strengths, MLQ-10, Hogan, CliftonStrengths
**Tier 2 (Moderate — usable with caveats):** 16PF, Schwartz Values Survey, Career Anchors (Schein)
**Tier 3 (Weak — avoid or explicitly caveat):** MBTI (50% different type on retest), Enneagram, DISC

---

_Total frameworks: 30 entries (25+ as required). Organized by N1 layer. Max 2 lines each._
_File size target: ~3,000-4,000 tokens. Update only at phase transitions._
