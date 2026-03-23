# N1 Master Plan v2 — El Sistema Eres Tu

> **Produced by:** 7-Agent Expert Panel Debate (2026-03-23)
> **For agentic workers:** This is the master plan. Each phase has its own detailed implementation plan. Use superpowers:subagent-driven-development or superpowers:executing-plans to implement phase plans task-by-task.

---

## PANEL DEBATE RECORD

### DEBATE 1: Is this a product or a content play?

**YC:** This is a content play dressed in product language. The "tools" are prompt files — they have zero switching cost, zero lock-in, and zero proprietary data layer. Nicolas's real asset is his voice, his research synthesis, and his audience. Call it what it is: a content brand that uses AI-delivered methodology as its medium. Trying to build "product" without users, data, or revenue is founder delusion.

**PM:** Disagree. The tools ARE the product — they produce structured output (YAML profiles, scorecards, action plans) that accumulates over time. A content play doesn't have a data schema. The profile interchange format, the assessment instruments, the cross-tool memory — that's product thinking. Content is the distribution layer, not the product.

**ARCH:** I'm with YC on the technical reality. These are prompt files running on platforms we don't own. Claude can change their Skills API tomorrow. OpenAI can delist GPTs. We control nothing except the GitHub repo and the static web tools. The defensible artifact is the methodology + research synthesis, not the runtime.

**MKT:** Content IS the product for brand building at this stage. In LATAM, Platzi built a $600M education company by being content-first for years before the product matured. Nicolas has 19k LinkedIn followers and 700+ cited studies. That's the asset. The tools are content delivery mechanisms — they make the research actionable.

**COACH:** The transformative value comes from the guided experience — the sequencing, the pacing, the integration across dimensions. That's not "content" — it's a structured intervention. But it doesn't need to be a "product" in the VC sense either. It's a methodology delivered through AI.

**PHD:** Clinically, this is a structured psychoeducational intervention with embedded assessment instruments. The CAAS-12, MLQ-10, Bull's Eye, and Big Five are validated instruments. The prompting stack (ACT + Socratic + cognitive restructuring) follows evidence-based therapeutic techniques. It's more structured than content, less controlled than a clinical product.

**TAL:** From the employer side, this looks like a career development resource. Content or product doesn't matter — what matters is whether it helps people make better career decisions and whether employers see it as an ally rather than a threat.

**Back-and-forth:**

- YC challenges PM: "What's your retention metric if there's no account, no login, no data persistence?"
- PM responds: "The YAML profile IS persistence — it lives in the user's Claude Project or local file. Retention is measured by re-engagement with evolution tools."
- ARCH supports YC: "localStorage is not a product. Export/import YAML is not a product. Let's be honest about what we're building."
- MKT mediates: "It's a methodology-as-content brand that uses AI tools as its delivery mechanism. Stop fighting over labels."

**RESOLUTION:** N1 is a **methodology brand** — a research-backed career strategy methodology delivered through AI tools, static web instruments, and content. The brand and methodology are the durable assets. The tools are delivery mechanisms. Content (LinkedIn, newsletter) is the primary distribution channel. This framing avoids both "product without a moat" and "content without substance."

**DISSENT:** YC maintains that without email capture and longitudinal data collection, even the methodology brand has no defensible distribution. Noted and addressed in Debate 4.

---

### DEBATE 2: Sequencing — parallel or sequential busca adentro?

**COACH:** The sequence MUST be Values → Strengths → Identity → Purpose. Rationale: You can't know who you're becoming (identity) without first knowing what you care about (values) and what you're built for (strengths). Purpose is the synthesis — it requires all three inputs. I've seen 1,000+ clients flounder when they try to "find their identity" without grounding in values first. The parallel approach in the original plan is psychologically naive.

**PHD:** SCCT (Social Cognitive Career Theory) provides a different ordering: Self-Efficacy → Outcome Expectations → Interests → Goals → Actions. Bandura's self-efficacy is foundational — if you don't believe you CAN, knowing your values is irrelevant. I'd argue: Strengths (self-efficacy) → Values → Identity → Purpose. But more importantly, the empirical literature doesn't support a single "correct" sequence. Schlossberg's 4S model says the entry point depends on the transition type.

**PM:** Users won't follow a strict sequence. Period. Product data from BetterUp and Duolingo shows: mandated sequences kill completion rates. Users want to start where their pain is. Someone who just got laid off doesn't want to start with values — they want to start with their resume. Someone in a existential crisis doesn't want strengths assessment — they want purpose. Forcing a sequence is a product antipattern.

**ARCH:** Technically, building in sequence vs. parallel doesn't matter for the implementation. Each dimension is a self-contained SKILL.md or GPT. The "sequence" is a UX recommendation, not a technical dependency. We can RECOMMEND a sequence while ALLOWING any entry point.

**MKT:** For content cadence, I need flexibility. Some weeks the LinkedIn algorithm favors "values" content, some weeks "identity" hits. I can't be locked into a psychological sequence for content publishing. The tools should work in any order.

**TAL:** For the "grow where you are" users, the entry point is often strengths — "what am I good at that I'm not using?" For the "I need to leave" users, it's values — "what matters to me that this company violates?" Context determines sequence.

**Back-and-forth:**

- COACH challenges PM: "Completion rates are irrelevant if the incomplete experience gives bad advice. A strengths assessment without values context leads to 'optimize what you're good at' rather than 'use your strengths for what matters.'"
- PM responds: "Then add a soft gate — a 2-minute values check before strengths — instead of a hard sequence. Design for the 80% who won't complete the full journey."
- PHD supports COACH partially: "There IS a clinically preferred sequence, but it depends on the user's presenting situation. The triage layer should determine the recommended sequence."
- COACH concedes: "Fine — triage determines which sequence is recommended, but values should always be the first substantive dimension for non-crisis users."

**RESOLUTION:**

- **RECOMMENDED sequence** (presented to users, suggested by triage):
  - **Crisis users:** Construye Afuera first → minimum viable self-knowledge (quick values + strengths check) → full Busca Adentro later
  - **Exploration users:** Values → Strengths → Identity → Purpose (Coach's sequence)
  - **Growth users:** Strengths → Values → Identity → Purpose (start where energy is)
- **ALLOWED:** Any entry point. Every dimension works standalone. The profile improves with each dimension completed, but nothing blocks.
- **SOFT GATES:** When starting a dimension, the tool suggests "You might get more from this if you've done [prior dimension] first. Want to do a 2-minute quick check?" Never blocks.
- **BUILD ORDER** remains parallel (no technical dependency), but the UX/onboarding presents the recommended sequence.

**DISSENT:** COACH notes that "any entry point" undermines the methodology's integrity, but accepts the pragmatic compromise given the zero-friction distribution model.

---

### DEBATE 3: How many tools/skills?

**ARCH:** 5 skills maximum. Every additional skill means: another SKILL.md to maintain, another GPT to keep in sync, another entry point to support, another set of prompt tokens. With the token budgets we're working with (~25-35K per session for Claude, ~1,800 tokens for GPT instructions), consolidation is a technical necessity, not a preference.

**YC:** I'd go further — 1 integrated experience. "N1" should be one thing. One GPT. One Skill. One landing page. Users don't want to choose between 5 or 11 tools. They want to say "help me with my career" and get the right thing. The triage layer routes them internally.

**MKT:** Standalone entry points matter for distribution. Ghost Check as a standalone tool gets shared because it's concrete, specific, and viral. "N1 Career System" as a monolith doesn't get shared — it's too abstract. I need at least 2-3 standalone viral tools plus the integrated system.

**PM:** The synthesis proposed 5, and I think that's right: 2 standalone viral tools (Ghost Check, Compass) + 1 busca adentro system + 1 construye afuera system + 1 full integration. But the user experience should feel like one system, not 5 disconnected tools.

**TAL:** From the employer/HR distribution angle, I need specific tool names I can recommend. "Use N1's Ghost Check to verify job postings" is actionable. "Use N1" is not. Keep standalone names for distribution.

**PHD:** From a clinical perspective, the assessment instruments (CAAS-12, MLQ-10, Big Five, AAQ-II) should be separate static web forms — they're validated instruments that shouldn't be mixed with AI conversation. The AI interprets results, but measurement is separate.

**Back-and-forth:**

- YC challenges MKT: "Every standalone tool you add is maintenance debt. Ghost Check works standalone because it's deterministic. But n1-compass requires interpretation — it's not truly standalone."
- MKT responds: "Compass gives you a score and a radar chart. That's standalone enough. The interpretation is bonus. Think of it like a BuzzFeed quiz that happens to be psychometrically valid."
- ARCH supports PM's 5-skill structure: "Technically, we can have 5 published entry points that all load from the same shared foundation files. It's the same codebase, different entry points."
- PHD adds: "The static web assessment forms (CAAS-12, MLQ-10, Bull's Eye, Big Five via bigfive-web) are separate tools by nature — they don't need AI."

**RESOLUTION:**

- **5 AI Skills/GPTs** (published entry points):
  1. `n1-busca-adentro` — All 4 self-knowledge dimensions (values, strengths, identity, purpose) with triage-based sequencing
  2. `n1-construye-afuera` — All career strategy tools (CV audit, interview prep, negotiate, STAR builder, profile builder, network map, job hunt)
  3. `n1-system` — Full integrated system (onboarding + triage + busca adentro → construye afuera + evolution tracking)
  4. `n1-ghost-check` — Standalone viral tool (deterministic ghost job detection)
  5. `n1-compass` — Standalone hook (CAAS-12 career adaptability + values quick-check)
- **4-6 Static Web Tools** (separate, no AI needed):
  - Ghost Check (deterministic scoring)
  - Compass / CAAS-12 (validated instrument)
  - Bull's Eye Exercise (ACT values alignment)
  - Flow Activity Logger (challenge-skill tracking)
  - Runway Calculator (financial math)
  - Big Five (via bigfive-web npm integration)
- **Shared foundation:** All 5 AI skills load from the same `shared/` directory (prompting stack, voice guide, safety protocol, research base). One codebase, multiple entry points.

**DISSENT:** YC still prefers a single integrated entry point but accepts the 5-skill structure given the distribution argument. Notes that maintenance discipline is critical — if any skill drifts out of sync with shared foundation, consolidate immediately.

---

### DEBATE 4: Web app — kill it or keep it?

**YC:** You need a landing page with email capture. That's non-negotiable. Without owned distribution (email list), you're entirely dependent on LinkedIn's algorithm and AI platform policies. A simple GitHub Pages site with: (1) what N1 is, (2) triage quiz, (3) links to tools, (4) email signup. Zero cost, 2 hours to build.

**PM:** The existing Vercel web app with 20 tools, Supabase auth, and Lemon Squeezy payments is dead weight post-pivot. Kill it. But a landing page is essential. Every product needs a canonical URL.

**ARCH:** Static site on GitHub Pages is literally free. HTML + CSS + JS. No build step needed. The existing static web tools (Ghost Check, Compass, Bull's Eye, Flow Logger, Runway) already need hosting. GitHub Pages serves double duty: landing page + tool hosting.

**MKT:** I need a URL to put in LinkedIn posts. "Go to n1.dev" or whatever — one canonical place. Without it, I'm linking to individual GPT URLs that change, GitHub repos that look developer-only, or nothing.

**TAL:** From the employer perspective, a professional landing page adds legitimacy. A GitHub repo alone looks like a side project. A clean landing page looks like a real offering.

**COACH:** The landing page should include the triage layer. "What's your situation?" → Crisis / Exploration / Growth → recommended tool sequence. This is the onboarding experience.

**PHD:** The static web assessment forms (CAAS-12, MLQ-10, etc.) need a professional home, not a raw GitHub Pages URL. Wrap them in a consistent branded experience.

**Back-and-forth:**

- PM asks: "What about the existing Vercel deployment? Just redirect the domain?"
- ARCH responds: "Kill Vercel. It costs money when it scales. GitHub Pages is free forever. The 20-tool web app was built for the subscription model — that model is dead."
- YC pushes: "Email capture. I cannot stress this enough. Use a free tier of ConvertKit, Buttondown, or even a Google Form. You need to own the relationship."
- MKT agrees: "Email list is the only distribution channel you fully own. LinkedIn could change their algorithm tomorrow."

**RESOLUTION:**

- **Kill the Vercel web app.** The subscription model is dead. The 20-tool web app with Supabase/Lemon Squeezy is dead weight.
- **Build a static site on GitHub Pages** with:
  1. Landing page: N1 brand, philosophy, triage quiz ("What's your situation?")
  2. Email capture: Free tier (Buttondown or similar) — newsletter + tool updates
  3. Tool directory: links to all static web tools, AI skills, GPTs
  4. Static web tools hosted on the same site: Ghost Check, Compass, Bull's Eye, Flow Logger, Runway, Big Five
  5. About/methodology page: research base summary, frameworks, citations
- **Domain:** Use a custom domain (n1.lat or similar — .lat for LATAM identity). Free with GitHub Pages.
- **Cost:** $0-12/year (domain only). Everything else is free.

**DISSENT:** None. Universal agreement on this resolution.

---

### DEBATE 5: Therapeutic claims scope

**PHD:** The original plan lists "Socratic + Chain of Empathy + MI + CBT + ACT + Narrative Therapy" as the prompting stack. This is overclaiming. MI (Motivational Interviewing) is a clinical protocol requiring trained practitioners — labeling AI prompts as MI is ethically problematic and could attract regulatory scrutiny. Narrative Therapy is a full therapeutic modality with specific training requirements. My recommendation: narrow to ACT (primary framework — values clarification, defusion, committed action), Socratic questioning (a technique, not a therapy), and cognitive restructuring (a technique within CBT, not "CBT" broadly). These are defensible because they're either frameworks (ACT) or techniques (Socratic, cognitive restructuring) rather than full clinical modalities.

**COACH:** I strongly disagree on dropping MI. Motivational Interviewing techniques — specifically the OARS framework (Open questions, Affirmations, Reflections, Summaries) and amplifying "change talk" — are ESSENTIAL when users encounter resistance. When someone says "I know I should leave my job but I can't," you need MI techniques to work with that ambivalence. Without MI, the tool becomes a cheerleader or a lecturer.

**PM:** Users don't care about therapeutic labels. Nobody chooses a career tool because it says "ACT" or "MI" on the box. What they care about is: does it help? Keep the techniques, drop the clinical labels from user-facing materials. Internally, use whatever framework works.

**ARCH:** From a prompt engineering perspective, the techniques we actually use are: ask Socratic questions, reflect emotions before responding, validate ambivalence, challenge cognitive distortions, connect to stated values. Those are implementable regardless of what therapeutic tradition they come from.

**MKT:** Clinical labels are a marketing risk. "AI-powered CBT" attracts regulatory attention in some jurisdictions. "Research-backed career guidance" is safe. Label the outputs, not the techniques.

**PHD:** Coach, I hear you on MI being effective. Here's my compromise: we USE MI techniques (OARS, change talk amplification, rolling with resistance) in the prompt engineering, but we DON'T label them as MI in any public-facing material. Internally, the prompting stack document can reference MI techniques. Externally, we say "evidence-based conversational techniques." Same for Narrative Therapy — we use life theme extraction and re-authoring techniques without claiming to do Narrative Therapy.

**COACH:** That's acceptable. The techniques are what matter, not the labels. But the internal prompting stack documentation must be precise about which techniques come from which tradition, so future developers don't water them down.

**Back-and-forth:**

- PHD adds: "We should also add a clear scope disclaimer: 'N1 is a career development tool, not a mental health service. If you're experiencing clinical depression, anxiety, or crisis, please contact [resources].' This is non-negotiable."
- COACH agrees: "Yes, and the MIND-SAFE protocol handles crisis detection. But we need to be even more explicit about what this is NOT."
- PM: "Add it to onboarding, add it to every tool's first interaction, add it to the landing page. Got it."

**RESOLUTION:**

- **Internal prompting stack** (documented in `shared/prompting-stack.md`): ACT values clarification + defusion + committed action; Socratic questioning; cognitive restructuring; MI techniques (OARS, change talk, rolling with resistance); narrative life theme extraction + re-authoring; Chain of Empathy (emotional reasoning before response); logotherapy meaning sources. Full attribution to source traditions.
- **External/public labeling:** "Evidence-based conversational techniques grounded in career psychology research." Never claim to do therapy. Never use clinical modality names in user-facing materials.
- **Scope disclaimer** (required on every tool, every interaction start):
  - "N1 is a career development tool, not a mental health service."
  - "For clinical support: [crisis resources in Spanish + English]"
  - "What this tool IS: structured self-exploration using research-backed frameworks"
  - "What this tool is NOT: therapy, diagnosis, clinical assessment"
- **MIND-SAFE protocol** remains the safety layer — crisis keyword detection → immediate resource referral + scope reminder.

**DISSENT:** None. The compromise (use techniques internally, don't claim labels externally) satisfied all parties.

---

### DEBATE 6: Monetization — free forever or free-as-wedge?

**YC:** Free-as-wedge. Give everything away NOW to build audience, collect data, and prove methodology. But design the system so monetization is possible at 90 days. Candidates: paid community tier, cohort-based workshops, premium career reports, employer-sponsored access. Don't commit to "free forever" — commit to "free for now with optionality."

**MKT:** Free is correct for NOW. In LATAM, free is the only way to build trust fast. Platzi started free. MercadoLibre started with free listings. The playbook is: free → audience → trust → monetization when the audience ASKS for more. Premature monetization kills LATAM brands.

**TAL:** Free makes employers allies. If N1 is free, HR/TA teams will recommend it to candidates, outplacement firms will embed it, career centers will link to it. The moment you charge, you become a vendor competing with other vendors. Stay free, become infrastructure.

**PM:** The user explicitly said "free, period, build brand." Respect the founder's decision. But technically, build with monetization optionality: email capture, usage metrics, profile data (anonymized). These are the inputs for any future monetization decision.

**COACH:** Free access to self-knowledge tools is ethically correct. Charging for "know thyself" creates perverse incentives — people who can't afford it need it most, and paywalls create pressure to deliver "answers" rather than genuine exploration.

**PHD:** From a research perspective, free distribution maximizes sample size for longitudinal data collection (with consent). If we can track 10K+ career transitions over 12 months, that dataset is more valuable than any subscription revenue.

**Back-and-forth:**

- YC pushes: "Free forever is a luxury for people with other income. Nicolas is a solo operator. If this works, he needs to eat. Design the monetization path even if you don't activate it."
- MKT responds: "The monetization path is: brand → content → consulting/speaking/workshops. Not tool subscriptions. The tools build the brand, the brand generates revenue through other channels."
- TAL adds: "Employers will pay for workshops, not tools. 'N1 Career Strategy Workshop for your engineering team' is a $5K-10K event."
- YC concedes: "Fine — but capture the email list and usage data NOW. That's your monetization option. Without data, you have nothing to monetize later."

**RESOLUTION:**

- **Free. All tools, all content, no paywalls, no freemium gating.**
- **Monetization optionality built in** (not activated, but ready):
  - Email list (newsletter, tool updates — the distribution channel you own)
  - Anonymous usage analytics (which tools used, completion rates, dimensions explored)
  - Longitudinal data collection (with explicit consent — "Help us study career transitions")
  - Profile data (anonymized, aggregated — for research and future products)
- **Revenue model (future, not now):**
  - **Primary:** Content brand → consulting, speaking, workshops, corporate training
  - **Secondary:** Community (WhatsApp/Discord with premium tier when audience demands it)
  - **Tertiary:** Book sales ("El Sistema N1")
  - **NOT:** Tool subscriptions, individual coaching, per-use fees
- **Trigger for monetization:** When organic demand exceeds free delivery capacity (e.g., workshop requests > Nicolas's time, community moderation > solo capacity).

**DISSENT:** YC wants a concrete 90-day monetization experiment. The group counters that the 90-day goal should be email list size (target: 1,000) and tool usage (target: 5,000 sessions), not revenue.

---

### DEBATE 7: The "never ends" concept

**MKT:** "Never ends" is terrible marketing. It sounds like a subscription trap. Users want: "I used N1, I got clarity, I made my move." The positioning should be: finite transformation with ongoing evolution. Like a fitness program — you complete the program, then you maintain.

**COACH:** For crisis users, "never ends" causes paralysis. Someone who just got laid off needs to hear: "In 2 weeks, you'll have a clear strategy. In 6 weeks, you'll be executing." Open-ended exploration is for growth users, not crisis users. The "never ends" framing is appropriate only for the evolution/maintenance phase.

**PHD:** Assessment instruments need cooling-off periods — 4-6 weeks between CAAS-12 retakes for scores to be meaningful. "Never ends" without pacing produces assessment fatigue and score inflation (people learn the "right" answers). Build in temporal structure.

**PM:** Retention in any product requires a reason to come back. But "never ends" is the wrong framing. "Evolves with you" is better. Concrete: the self-knowledge profile has a "last updated" timestamp. After 3-6 months, the tool suggests a re-assessment. Life changes (new job, promotion, crisis) trigger a re-assessment.

**YC:** Framing matters for word-of-mouth. "I did N1 and it changed my career strategy" is shareable. "I'm doing N1 and it never ends" is not. Give people a completion milestone they can celebrate and share.

**TAL:** From an employer perspective, "never ends" sounds like a distraction from work. "Completed N1's career strategy program" sounds like professional development. Give it a finish line.

**Back-and-forth:**

- COACH proposes: "Structured journey (4-6 weeks for core) + evolution check-ins (quarterly). The core experience has a clear end. The evolution is optional maintenance."
- PHD adds: "Each dimension should have a 'completion' state: 'Your Values Profile is complete. Recommended re-assessment in 3 months or after a major life change.'"
- PM: "Add a 'certificate of completion' — shareable visual card saying 'Completed N1 Busca Adentro.' That's the milestone."
- MKT: "Love it. Completion card = shareable = organic distribution."

**RESOLUTION:**

- **Core journey: 4-6 weeks.** Busca Adentro (4 dimensions) + Integration + initial Construye Afuera action plan. Clear completion milestone.
- **Completion milestone:** Shareable visual card — "Completed N1 Self-Knowledge Profile" with radar chart of all dimensions. Designed for LinkedIn sharing.
- **Evolution phase:** Quarterly check-ins (re-assessment) triggered by time OR life events. Optional, not mandatory.
- **Assessment pacing:** 4-6 week minimum between retakes of the same instrument. Enforced in static web tools, recommended in AI tools.
- **Framing:** "Build your system in 4-6 weeks. Evolve it for life." NOT "never ends."
- **Quick mode timing:**
  - Quick Values: 5-10 min
  - Quick Strengths: 5-10 min (assumes VIA already taken)
  - Quick Identity: 10-15 min
  - Quick Purpose: 10-15 min
  - Quick Integration: 5 min
  - **Total Quick path: ~45-60 min** (can be done in one sitting)
  - **Deep path: 4-6 weeks** (with behavioral homework between dimensions)

**DISSENT:** None. Clean resolution.

---

### DEBATE 8: Missing career paths — the user wants ALL paths covered

**TAL:** The original plan is heavily biased toward "leave your job." That covers maybe 30% of career moves. I work at a 30K-employee LATAM tech company. The majority of career moves are INTERNAL: promotion, lateral move, team transfer, role expansion, geographic relocation within the company. N1 must cover: (1) vertical promotion, (2) lateral move (same level, different function), (3) internal team transfer, (4) role expansion/enrichment (grow the current role), (5) geographic/market transfer (Bogota → SF, for example).

**YC:** Entrepreneurship paths are completely missing. Founding a company, joining as early employee, going from corporate to startup, building a side project into a business. These require fundamentally different frameworks — risk tolerance, runway calculation, market validation. The Busca Adentro is relevant but Construye Afuera needs entirely different tools for founders.

**COACH:** The plan misses several critical paths: sabbatical/gap year (intentional pause), non-profit/social impact transition, artistic/creative pursuit, complete career reinvention (engineer → chef), portfolio career (multiple part-time roles), and retirement planning/transition. Each of these has different psychological dynamics. A sabbatical requires permission-giving and identity separation from work. A complete reinvention requires mourning the old identity.

**MKT:** Freelance and independent consulting is the FASTEST growing career path in LATAM. Rappi, Platzi, and remote work have created a massive class of independent professionals. This path needs: client acquisition strategy, pricing psychology, personal brand building, financial runway management, isolation coping. It's a distinct path, not a subset of "get a job."

**PHD:** Each career path activates different psychological processes. A promotion activates achievement motivation and impostor syndrome. A career change activates identity grief and reconstruction. Entrepreneurship activates risk cognition and tolerance for ambiguity. Freelancing activates self-regulation and boundary-setting. The Busca Adentro foundation is universal, but the Construye Afuera tools need path-specific modules.

**PM:** We can't build path-specific tools for 15 different career moves in v1. But we CAN design a taxonomy that the AI tools use to customize guidance. The triage layer asks "what move are you considering?" and the prompts adapt.

**Back-and-forth:**

- TAL: "At minimum, the triage must distinguish between 'internal move' and 'external move.' These are fundamentally different strategies."
- YC: "And 'employment move' vs 'independence move.' Going from corporate to freelance is not a job search — it's a business launch."
- COACH: "Don't forget 'no move' — staying and growing where you are. That's valid and often the best strategy."
- PHD: "And 'pause' — sabbatical, recovery, intentional gap. Not a failure mode, a strategic choice."
- PM: "OK — I see four macro-categories: Stay & Grow, Move (internal or external), Go Independent, and Pause & Reset. Each career path falls into one of these."

**RESOLUTION — Career Path Taxonomy:**

```
CAREER MOVES (complete taxonomy)
│
├── STAY & GROW (current employer)
│   ├── Vertical promotion (up the ladder)
│   ├── Lateral move (same level, different function/team)
│   ├── Role expansion (grow scope of current role)
│   ├── Geographic transfer (same company, different location/market)
│   ├── Skill development (upskill for future move)
│   └── Environment optimization (same role, better conditions — remote, team, manager)
│
├── MOVE (to a different employer)
│   ├── Same function, bigger company (scale up)
│   ├── Same function, smaller company (more ownership)
│   ├── Same function, different industry (sector pivot)
│   ├── Different function, same industry (functional pivot)
│   ├── Complete career change (new function + new industry)
│   ├── Return to workforce (after gap, parental leave, etc.)
│   └── International relocation (country/market change)
│
├── GO INDEPENDENT
│   ├── Freelance/consulting (solo practitioner)
│   ├── Found a company (startup founder)
│   ├── Join early-stage startup (employee #1-20)
│   ├── Portfolio career (multiple part-time roles)
│   ├── Creator/content business (monetize expertise)
│   ├── Artistic/creative pursuit (writing, art, music, etc.)
│   └── Non-profit/social impact (mission-driven work)
│
└── PAUSE & RESET
    ├── Strategic sabbatical (intentional break with plan)
    ├── Recovery period (burnout, health, caregiving)
    ├── Education/reskilling (degree, bootcamp, certification)
    ├── Retirement transition (wind-down, portfolio, advisory)
    └── Exploration phase (no decision yet — deliberate moratorium)
```

**Path-Specific Construye Afuera Adaptations:**

- **Stay & Grow:** Internal networking strategy, visibility tactics, promotion case building, 1:1 negotiation with current manager, skip-level relationships
- **Move:** CV/resume, interview prep, job search strategy, salary negotiation, offer evaluation
- **Go Independent:** Business model canvas, pricing strategy, runway calculation, client acquisition, personal brand, isolation resilience
- **Pause & Reset:** Permission framework (psychological), financial runway, identity-work separation, re-entry planning, gap narrative building

**DISSENT:** None. All experts contributed paths from their domain. Comprehensive taxonomy accepted.

---

### DEBATE 9: Framework integration

**PHD:** The original plan includes excellent frameworks (Ibarra, VIA, ACT, Frankl, Savickas, Bandura, Flow, Big Five, Ryff, MLQ, Schwartz, Marcia) but lacks an integrative spine. I propose SCCT (Social Cognitive Career Theory — Lent, Brown & Hackett, 1994) as the unifying theory because it explicitly models how self-efficacy → outcome expectations → interests → goals → actions, which maps perfectly to the Busca Adentro → Construye Afuera flow. Additionally:

- **Protean Career Theory** (Hall, 2004): the meta-narrative — careers are self-directed, values-driven, and identity-based. This IS N1's philosophy.
- **Schlossberg's 4S Model** (Situation, Self, Support, Strategies): the triage framework — what's your situation, what resources do you have, what support network exists, what strategies are available?
- **Planned Happenstance** (Krumboltz, 2009): challenges the "plan everything" mentality — teaches openness to unexpected opportunities. Critical for the "exploration" users.
- **PsyCap HERO** (Luthans et al., 2007): Hope, Efficacy, Resilience, Optimism — the psychological capital needed to execute career moves. Measurable and trainable.
- **Career Chaos Theory** (Pryor & Bright, 2011): for users overwhelmed by complexity — normalizes uncertainty, reduces the pressure to have a "clear plan."

**COACH:** I want three additional dimensions that the original plan and PHD's frameworks both underserve:

1. **Emotional patterns:** Not just what you value or what you're good at, but HOW you process career stress. Avoidant? Anxious? Analytical-to-the-point-of-paralysis? This determines which tools work for each user.
2. **Relational dimension:** Career decisions happen in a relational context — partner expectations, family pressure, cultural obligations (especially in LATAM), children's needs. N1 treats career as individual. It's not.
3. **Somatic data:** "When you imagine doing X, what happens in your body?" Excitement feels different from anxiety in the body. Most career tools are purely cognitive. The body has data.

**PM:** This is 20+ frameworks and 3 new dimensions on top of the original 4. Users will never encounter most of this. The challenge is: how do we architect this so the METHODOLOGY is comprehensive but the USER EXPERIENCE is simple? The user should never see "SCCT" or "Schlossberg 4S." They should experience a conversation that happens to be informed by all of these.

**ARCH:** Token budget reality check. A Claude Skill or GPT has limited instruction space. We cannot embed 20 frameworks in a single prompt. The architecture needs to be: (1) shared research base document that the AI loads as context, (2) dimension-specific framework selections, (3) triage-determined framework activation. Not everything fires for every user.

**MKT:** From a content perspective, every framework is a content piece. "The 4S Model for career transitions" is a LinkedIn post. "Why your body knows your career answer before your brain does" (somatic) is a post. But the user-facing tool should feel like talking to a brilliant friend, not attending a psychology lecture.

**Back-and-forth:**

- PHD to COACH: "Emotional patterns are captured by AAQ-II (psychological flexibility) and Big Five (neuroticism dimension). Relational dimension is partially covered by Schlossberg's 'Support' pillar. Somatic data is valid but hard to assess via text-based AI."
- COACH to PHD: "AAQ-II measures psychological flexibility, not emotional processing patterns. And Schlossberg's 'Support' is structural (who's in your network), not relational (how do family dynamics constrain your choices). We need both."
- PM mediates: "Can we add these as enrichment layers rather than core dimensions? The 4 core dimensions (Values, Strengths, Identity, Purpose) stay. Emotional patterns, relational context, and somatic awareness are part of the prompting technique — the AI asks about them during each dimension, but they're not separate assessment instruments."
- PHD agrees: "That's clinically sound. Embed them in the conversation flow rather than creating separate instruments."
- ARCH: "Architecturally, the framework integration should be a layered document: Layer 1 (always loaded) = core theory + prompting techniques. Layer 2 (loaded per dimension) = dimension-specific frameworks. Layer 3 (loaded per career path) = path-specific adaptations. This keeps token budgets manageable."

**RESOLUTION — Framework Integration Architecture:**

See `FRAMEWORK-ARCHITECTURE.md` for the full visual architecture. Summary:

**Meta-Theory Layer** (philosophical foundation — informs everything):

- Protean Career Theory (Hall) — careers are self-directed and values-driven
- Career Chaos Theory (Pryor & Bright) — uncertainty is normal, not a problem
- Planned Happenstance (Krumboltz) — openness to unplanned opportunities

**Integrative Spine** (the engine that connects everything):

- SCCT (Lent, Brown & Hackett) — self-efficacy → outcome expectations → interests → goals → actions
- Schlossberg 4S (triage framework) — Situation, Self, Support, Strategies

**Core Dimensions** (Busca Adentro — 4 dimensions):

1. **Values:** ACT values clarification + Schwartz basic values + SDT (autonomy, competence, relatedness)
2. **Strengths:** VIA character strengths + Bandura self-efficacy + Csikszentmihalyi flow + Big Five personality
3. **Identity:** Ibarra working identity + Marcia identity status + Savickas CAAS (career adaptability)
4. **Purpose:** Frankl logotherapy + Steger MLQ + Ryff PWB (purpose subscale) + Damon purpose development

**Enrichment Layers** (embedded in conversation, not separate assessments):

- Emotional patterns: AAQ-II (psychological flexibility) + emotional processing probes
- Relational context: family/partner/cultural constraint mapping (Schlossberg Support + LATAM cultural calibration)
- Somatic awareness: body-based probes ("What does your body say about Option A vs Option B?")

**Psychological Capital** (trainable resilience):

- PsyCap HERO (Luthans): Hope, Efficacy, Resilience, Optimism — measured and developed across the journey

**Assessment Instruments** (validated, separate from AI conversation):

- CAAS-12 (career adaptability — Savickas)
- MLQ-10 (meaning in life — Steger)
- Bull's Eye (values alignment — Lundgren/ACT)
- Big Five (personality — via bigfive-web)
- AAQ-II (psychological flexibility — Bond et al.)
- CDMSE-SF (career decision-making self-efficacy — Betz & Taylor)
- VIA-120 (character strengths — reference to viacharacter.org, not replicated)

**Prompting Technique Stack** (the HOW — internal only, never labeled externally):

- ACT: values clarification, cognitive defusion, committed action
- Socratic questioning: expose contradictions, guided discovery
- Cognitive restructuring: identify and reframe limiting career beliefs
- MI techniques (OARS): open questions, affirmations, reflections, summaries
- Narrative techniques: life theme extraction, career story re-authoring
- Chain of Empathy: emotional reasoning before analytical response
- Logotherapy: meaning through creative/experiential/attitudinal sources

**Cultural Calibration** (LATAM-specific adjustments):

- High MLQ-Search scores are normative in collectivist cultures (not pathological)
- CAAS Control runs lower in collectivist contexts (not a deficit)
- Family/cultural obligation is a valid input, not an obstacle to overcome
- Credential inflation and English proficiency as systemic barriers (not personal deficits)
- Network poverty is structural, not individual failing

**DISSENT:** COACH wants emotional patterns as a 5th core dimension, not just an enrichment layer. PHD counters that there's no validated short-form instrument for career emotional processing patterns. Resolution: if a validated instrument emerges or is identified, promote to core dimension. For now, embed in conversation flow.

---

### DEBATE 10: Leveraging existing free tools

**ARCH:** The principle is clear: integrate, don't rebuild. For each external tool, N1 either (a) references it (sends user there), (b) wraps it (provides N1-branded interface that uses the underlying tool), or (c) ingests its output (user brings data from external tool into N1).

**PM:** Each integration needs to answer: what does N1 add that the external tool doesn't? If N1 adds nothing, just link to it. If N1 adds interpretation, context, or connection to the self-knowledge profile, then the integration has value.

**YC:** Don't build integrations in v1. Just reference. "Take the VIA survey at viacharacter.org, then come back with your top 5 strengths." That's v1. Building API integrations is scope creep.

**MKT:** Every external tool referenced is a co-marketing opportunity. "N1 recommends [tool]" is good for both brands. But the user experience of being sent to 8 different websites is terrible. Minimize the number of external redirects.

**PHD:** The validated instruments (Big Five, VIA, O\*NET Interest Profiler) should be referenced, not replicated. Replicating validated instruments without proper licensing and norming is scientifically and ethically problematic. The bigfive-web npm module is an exception because it's MIT-licensed and properly validated.

**TAL:** Reactive Resume and Resume Matcher are directly relevant to the "Move" career path. For the "Stay & Grow" path, developer-roadmap is useful for skill development planning.

**Back-and-forth:**

- ARCH: "bigfive-web has npm modules we can directly embed in our static site. That's a legitimate integration — user takes Big Five on our site, results flow into the N1 profile."
- PHD: "Confirm that bigfive-web uses the IPIP-NEO items (public domain) rather than the proprietary NEO-PI-R. If yes, it's scientifically and legally clean."
- PM: "For v1, I propose three tiers: Embed (bigfive-web, because we can), Reference (VIA, O\*NET, because we should), and Recommend (Reactive Resume, JobSpy, because they're useful but not essential to the methodology)."
- YC: "Agreed. Don't build anything that's already built well. Your value-add is the interpretation and integration, not the raw assessment."

**RESOLUTION — External Tool Integration Map:**

**Tier 1: EMBED (integrate into N1 static site)**
| Tool | Purpose | Integration |
|------|---------|-------------|
| bigfive-web (npm) | Big Five personality assessment | Embed directly in N1 static site. Results → N1 Strengths Profile. MIT license, IPIP-NEO items (public domain). |

**Tier 2: REFERENCE (send user there, ingest results)**
| Tool | Purpose | Integration |
|------|---------|-------------|
| VIA Character Strengths (viacharacter.org) | 24 character strengths | "Take the free VIA survey. Paste your top 5 here." AI interprets in context of N1 profile. |
| O*NET Interest Profiler (US gov) | Career interest assessment | "Complete the O*NET Interest Profiler. Share your Holland codes." AI maps to career paths. |
| Reactive Resume (35.6k stars, MIT) | Resume building | "Build your resume at rxresu.me. Bring it here for N1's CV Audit." Profile data informs audit recommendations. |
| Resume Matcher (25.8k stars, Apache 2.0) | ATS matching | "Check your resume match at resumematcher.fyi. N1 adds profile-based improvement suggestions." |

**Tier 3: RECOMMEND (link to, no integration needed)**
| Tool | Purpose | Integration |
|------|---------|-------------|
| JobSpy (3k stars) | Job market data | Recommend for market research. N1's value-add: "Based on your profile, here's what to look for in postings." |
| developer-roadmap (347k stars) | Career path visualization | Recommend for "Stay & Grow" tech users. N1's value-add: connects roadmap to strengths/values alignment. |
| tech-interview-handbook (138k stars) | Interview prep content | Recommend as study resource. N1's value-add: STAR stories from self-knowledge profile, not generic prep. |

**Tier 4: FUTURE (v2+ potential integrations)**
| Tool | Purpose | Notes |
|------|---------|-------|
| JobSpy API | Live market data in N1 tools | Requires server-side processing — not feasible at zero cost in v1 |
| LinkedIn API | Profile analysis | Requires OAuth, rate limits, TOS compliance — defer |

**DISSENT:** ARCH wants to embed bigfive-web in v1 Week 0. PM says it's Week 2 at earliest — need to validate the npm module first and ensure it works in a static site context. Compromise: investigate in Week 0, embed in Week 1-2.

---

## UNIFIED DECISIONS

1. **N1 is a methodology brand**, not a product company. AI tools and content are delivery mechanisms for a research-backed career strategy methodology.
2. **Free. Everything. No paywalls.** Monetization optionality built in (email list, usage data, longitudinal research) but not activated.
3. **Future revenue** comes from brand → consulting, speaking, workshops, corporate training, book sales. Not tool subscriptions.
4. **5 AI Skills/GPTs** (n1-busca-adentro, n1-construye-afuera, n1-system, n1-ghost-check, n1-compass) + 4-6 static web tools.
5. **Kill the Vercel web app.** Build a static GitHub Pages site with landing page, email capture, triage quiz, and hosted static tools.
6. **Recommended sequence** depends on user situation: Crisis → Construye Afuera first; Exploration → Values → Strengths → Identity → Purpose; Growth → Strengths → Values → Identity → Purpose. Any entry point allowed.
7. **Therapeutic techniques** used internally but never labeled externally. Scope disclaimer on every tool.
8. **4-6 week core journey** with completion milestone (shareable visual card). Quarterly evolution check-ins. Assessment pacing enforced (4-6 week minimum between retakes).
9. **Complete career path taxonomy:** 4 macro-categories (Stay & Grow, Move, Go Independent, Pause & Reset) with 20+ specific paths.
10. **SCCT as integrative spine, Protean Career Theory as meta-narrative.** All 20+ frameworks organized in a layered architecture.
11. **Enrichment layers** (emotional patterns, relational context, somatic awareness) embedded in conversation, not separate dimensions.
12. **External tools:** Embed bigfive-web, reference VIA/O\*NET/Reactive Resume/Resume Matcher, recommend JobSpy/developer-roadmap/tech-interview-handbook.
13. **Content starts Day 1.** LinkedIn 3-post-per-tool cadence. Research findings = posts. Ship existing tools immediately.
14. **GPTs before Claude Skills** for LATAM reach.
15. **Profile Interchange Format v1** defined in Phase 0 — the canonical YAML schema all tools produce/consume.
16. **Shareable visual scorecards** for every assessment — designed for LinkedIn sharing.
17. **WhatsApp Community** for Bogota beachhead (not Discord).
18. **Layoff Response Kit** as high-shareability crisis tool.
19. **"Grow Where You Are" pathway** to make N1 employer-friendly.
20. **Cultural calibration** for Colombia/LATAM norms baked into all instruments.
21. **Quick Mode (45-60 min total) + Deep Mode (4-6 weeks)** for every dimension.
22. **Email capture** via free-tier provider (Buttondown or similar) — the only owned distribution channel.
23. **HR/TA as distribution allies** — "recommend to your candidates" positioning.
24. **Triage/intake layer** before any tool: Crisis / Exploration / Growth → recommended path.
25. **PsyCap HERO** (Hope, Efficacy, Resilience, Optimism) as measurable psychological capital tracked across the journey.

---

## UPDATED FRAMEWORK ARCHITECTURE

See `FRAMEWORK-ARCHITECTURE.md` for the standalone document with full visual architecture.

---

## CAREER PATH TAXONOMY

```
N1 CAREER MOVES — COMPLETE TAXONOMY
════════════════════════════════════

STAY & GROW (current employer)
├── Promotion (vertical move up)
├── Lateral transfer (same level, different function/team)
├── Role expansion (grow scope of current role)
├── Geographic transfer (same company, different location)
├── Skill development (upskill/reskill for future move)
└── Environment optimization (negotiate better conditions — remote, team, manager)

MOVE (to a different employer)
├── Scale up (same function, bigger company)
├── Scale down (same function, smaller company — more ownership)
├── Sector pivot (same function, different industry)
├── Function pivot (different function, same industry)
├── Complete career change (new function + new industry)
├── Return to workforce (after gap, parental leave, health)
└── International relocation (different country/market)

GO INDEPENDENT
├── Freelance / solo consulting
├── Found a company (startup)
├── Join early-stage startup (#1-20 employee)
├── Portfolio career (multiple part-time roles)
├── Creator / content business
├── Artistic / creative pursuit
└── Non-profit / social impact

PAUSE & RESET
├── Strategic sabbatical (intentional break with plan)
├── Recovery period (burnout, health, caregiving)
├── Education / reskilling (degree, bootcamp, certification)
├── Retirement transition (wind-down, advisory, portfolio)
└── Exploration phase (deliberate moratorium — no decision yet)
```

**Path-Specific Psychological Dynamics:**

| Path Category  | Primary Psychological Process                                   | Key Framework                                            |
| -------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| Stay & Grow    | Achievement motivation, impostor syndrome, political navigation | Bandura self-efficacy, PsyCap HERO                       |
| Move           | Loss processing, identity reconstruction, comparison anxiety    | Schlossberg 4S, Ibarra Working Identity                  |
| Go Independent | Risk cognition, ambiguity tolerance, self-regulation, isolation | Protean Career Theory, Career Chaos Theory, PsyCap HERO  |
| Pause & Reset  | Permission-giving, identity-work separation, grief processing   | ACT acceptance, Planned Happenstance, Frankl logotherapy |

**Path-Specific Construye Afuera Tool Adaptations:**

| Tool            | Stay & Grow                  | Move                         | Go Independent              | Pause & Reset            |
| --------------- | ---------------------------- | ---------------------------- | --------------------------- | ------------------------ |
| CV Audit        | Internal resume/promo case   | External resume optimization | Portfolio/case study audit  | Gap narrative building   |
| Interview Prep  | Promotion conversation       | External interview prep      | Pitch/sales conversation    | Re-entry interview prep  |
| Negotiate       | Raise/conditions negotiation | Offer negotiation            | Rate/scope negotiation      | Re-entry terms           |
| Network Map     | Internal stakeholder map     | Industry weak ties           | Client/partner pipeline     | Mentor/advisor network   |
| Job Hunt        | Internal opportunity scan    | External job search strategy | Client acquisition strategy | Not applicable           |
| Profile Builder | Internal visibility strategy | LinkedIn/external profile    | Personal brand/website      | Maintenance mode         |
| STAR Builder    | Promotion stories            | Interview stories            | Case studies/testimonials   | Career narrative refresh |

---

## EXTERNAL TOOL INTEGRATION MAP

```
N1 SYSTEM
│
├── EMBEDDED IN N1 STATIC SITE
│   └── bigfive-web (npm, MIT, IPIP-NEO)
│       → User takes Big Five on N1 site
│       → Results auto-populate Strengths Profile
│       → Personality dimensions inform all downstream tools
│
├── REFERENCED (user goes there, brings results back)
│   ├── VIA Character Strengths (viacharacter.org)
│   │   → "Take free VIA survey → paste top 5 into N1"
│   │   → AI interprets strengths in context of values + identity
│   │
│   ├── O*NET Interest Profiler (mynextmove.org)
│   │   → "Complete Interest Profiler → share Holland codes"
│   │   → AI maps RIASEC codes to career path taxonomy
│   │
│   ├── Reactive Resume (rxresu.me, MIT, 35.6k★)
│   │   → "Build resume there → bring to N1 for CV Audit"
│   │   → N1 adds: profile-aligned narrative recommendations
│   │
│   └── Resume Matcher (resumematcher.fyi, Apache 2.0, 25.8k★)
│       → "Check ATS match → N1 adds profile-based improvements"
│       → Strengths/values context improves keyword suggestions
│
├── RECOMMENDED (linked, no integration)
│   ├── JobSpy (github, 3k★)
│   │   → Market research for Move/Go Independent paths
│   │
│   ├── developer-roadmap (github, 347k★)
│   │   → Skill development planning for Stay & Grow / tech paths
│   │
│   └── tech-interview-handbook (github, 138k★)
│       → Interview prep supplement for Move path
│
└── FUTURE (v2+)
    ├── JobSpy API integration (requires backend)
    └── LinkedIn API (OAuth complexity, TOS)
```

---

## UPDATED BUILD ORDER

```
═══════════════════════════════════════════════════════════
 PHASE 0: FOUNDATION + SHIP WHAT'S BUILT (Week 0 — NOW)
═══════════════════════════════════════════════════════════

Priority: Ship immediately. Content starts today.

Tasks:
□ Define Profile Interchange Format v1 (YAML schema)
□ Define shared prompting stack (shared/prompting-stack.md)
□ Define shared voice guide (shared/voice-guide.md)
□ Define shared safety protocol incl MIND-SAFE (shared/safety-protocol.md)
□ Define shared research base — condensed citations (shared/research-base.md)
□ Ship Ghost Check as static web tool (already built — port to GitHub Pages)
□ Ship Compass/CAAS-12 as static web tool (already built — port to GitHub Pages)
□ Build landing page (GitHub Pages): N1 brand, triage quiz, tool directory
□ Set up email capture (Buttondown free tier or similar)
□ Start LinkedIn content: first 3 posts from research findings
□ Write CLAUDE.md for N1 repo (instructions for any Claude working on it)
□ Write README.md (public-facing project description)

Deliverables:
- Live static site with 2 tools + landing page + email capture
- Profile Interchange Format v1 spec
- Shared foundation files (4 docs)
- 3+ LinkedIn posts published

═══════════════════════════════════════════════════════════
 PHASE 1: BUSCA ADENTRO — ALL 4 DIMENSIONS (Weeks 1-2)
═══════════════════════════════════════════════════════════

Build all 4 dimensions. Build order within sprint is parallel (no technical
dependency), but recommended user sequence is Values → Strengths → Identity
→ Purpose.

DIMENSION 1: VALUES
Framework: ACT values clarification + Schwartz basic values + SDT
Quick mode (5-10 min): Top 5 values ranking + Bull's Eye quick check
Deep mode (1 week): Full values elicitation + hierarchy + forced trade-offs
  + Bull's Eye exercise + values-career alignment analysis
Assessment: Bull's Eye Exercise (static web, ACT-based)
Output: Values Profile (YAML)

DIMENSION 2: STRENGTHS
Framework: VIA + Bandura self-efficacy + Csikszentmihalyi flow + Big Five
Quick mode (5-10 min): Top 5 VIA strengths + quick flow check
  (assumes user has VIA results from viacharacter.org)
Deep mode (1 week): Full self-efficacy mapping + flow activity log +
  Big Five integration (via bigfive-web)
Assessment: Flow Activity Logger (static web), Big Five (bigfive-web embed)
External reference: VIA at viacharacter.org
Output: Strengths Profile (YAML)

DIMENSION 3: IDENTITY
Framework: Ibarra working identity + Marcia identity status + Savickas CAAS
Quick mode (10-15 min): Identity status check + 3 possible selves
Deep mode (1-2 weeks): Full CAAS-12 + possible selves mapping +
  crafting experiments design + identity narrative
Assessment: CAAS-12 (static web, validated instrument)
Output: Identity Profile (YAML)

DIMENSION 4: PURPOSE
Framework: Frankl logotherapy + Steger MLQ + Ryff PWB + Damon
Quick mode (10-15 min): MLQ-10 + meaning sources quick inventory
Deep mode (1-2 weeks): Full MLQ-10 + meaning sources inventory +
  life theme extraction + purpose practice design
Assessment: MLQ-10 (static web, validated instrument)
Output: Purpose Profile (YAML)

ADDITIONAL STATIC WEB TOOLS (build during this sprint):
□ Bull's Eye Exercise (interactive HTML/JS)
□ Flow Activity Logger (challenge-skill tracking)
□ Big Five (bigfive-web npm embed)
□ CAAS-12 assessment form
□ MLQ-10 assessment form

ADDITIONAL INSTRUMENTS TO ADD:
□ AAQ-II (psychological flexibility, 7 items — static web)
□ CDMSE-SF (career decision-making self-efficacy — static web)

Deliverables:
- 4 dimension SKILL.md files (busca adentro)
- 5-7 static web assessment tools
- LinkedIn content: 2 posts per dimension (8 posts)

═══════════════════════════════════════════════════════════
 PHASE 2: INTEGRATION + TRIAGE + PROFILE (Week 3)
═══════════════════════════════════════════════════════════

TRIAGE LAYER:
□ Build triage/intake (runs before any tool):
  - "What's your situation?" → Crisis / Exploration / Growth
  - "What career move are you considering?" → Stay & Grow / Move /
    Go Independent / Pause & Reset
  - → Routes to recommended sequence + tool set

INTEGRATION LAYER:
□ Build Profile Synthesizer:
  - Combines 4 dimension profiles into unified Self-Knowledge Profile
  - Cross-dimension insights (reinforcements + conflicts)
  - Career path recommendations based on profile
□ Build System Template:
  - Downloadable .md file for user's Claude Project / ChatGPT
  - Contains: full profile + N1 methodology + tool instructions
  - THIS is "el sistema eres tu" — their AI becomes their strategist

SHAREABLE VISUAL SCORECARDS:
□ Design scorecard template (HTML-to-image generation)
□ Ghost Check scorecard (already has data — add visual)
□ CAAS-12 radar chart scorecard
□ Values alignment Bull's Eye visual
□ Self-Knowledge Profile summary card (for completion milestone)
□ "Completed N1 Busca Adentro" certificate card

ChatGPT GPTs (build BEFORE Claude Skills for LATAM reach):
□ N1 Busca Adentro GPT (all 4 dimensions, triage-based sequencing)
□ N1 Construye Afuera GPT (career strategy tools)
□ N1 Compass GPT (quick career readiness — standalone)
□ N1 Ghost Check GPT (standalone viral tool)

Deliverables:
- Triage layer functional in all entry points
- Profile Synthesizer working
- System Template downloadable
- 4 GPTs live in GPT Store
- Visual scorecards for all assessment tools
- LinkedIn: "The system is YOU" integration announcement

═══════════════════════════════════════════════════════════
 PHASE 3: CONSTRUYE AFUERA — CAREER TOOLS (Weeks 4-5)
═══════════════════════════════════════════════════════════

All tools enhanced with Self-Knowledge Profile context.
All tools adapted per career path taxonomy.

MARKET AWARENESS:
□ Ghost Check (enhance with values alignment scoring)
□ AI Exposure (enhance with strengths-based risk/opportunity analysis)
□ [DROPPED: Market Scanner — requires HTTP requests, not feasible at zero cost]

POSITIONING:
□ CV Audit (enhance with identity narrative, life theme, strengths alignment)
□ Profile Builder (LinkedIn profile from self-knowledge, not templates)
□ STAR Builder (stories from mastery experiences + values alignment)

EXECUTION:
□ Interview Prep (identity-status-aware framing)
□ Negotiate (values-driven negotiation strategy)
□ Network Map (Granovetter + identity-based weak tie strategy)
□ Job Hunt (channel strategy informed by values + career path)

CRISIS TOOLS:
□ Layoff Response Kit (first 72 hours protocol — high shareability)
  - Immediate: emotional triage + financial runway check
  - Day 1-3: minimum viable self-knowledge (quick values + strengths)
  - Week 1: resume + network activation + job search launch
  - Framing: "This happened. Here's what to do. In order."

TRACKING & EVOLUTION:
□ Compass (redesigned: CAAS-12 + values alignment + PsyCap HERO)
□ Weekly Review (values alignment check + progress tracking)
□ Journal (narrative therapy prompts — old story vs new story)
□ Runway Calculator (already built — port to static site)
□ Progress (longitudinal: CAAS/MLQ/Bull's Eye scores over time)

"GROW WHERE YOU ARE" PATHWAY:
□ Internal opportunity scanner (prompt-based)
□ Promotion case builder
□ Manager conversation prep
□ Environment optimization strategy

Deliverables:
- All Construye Afuera tools enhanced with profile context
- All tools adapted per 4 career path categories
- Layoff Response Kit live
- "Grow Where You Are" pathway functional
- LinkedIn: 3-post cadence per tool launch

═══════════════════════════════════════════════════════════
 PHASE 4: CLAUDE SKILLS + PACKAGING (Week 5-6)
═══════════════════════════════════════════════════════════

5 CONSOLIDATED CLAUDE SKILLS:
□ n1-busca-adentro — All 4 dimensions with triage-based sequencing
□ n1-construye-afuera — All career tools with profile context
□ n1-system — Full integrated system (onboarding + busca adentro →
  construye afuera + evolution)
□ n1-ghost-check — Standalone viral tool
□ n1-compass — Standalone hook (CAAS-12 + quick values)

Each skill architecture:
- YAML frontmatter (name, description, trigger phrases)
- Loads shared/ foundation (voice, safety, research, prompting stack)
- Quick Mode (5 min) + Deep Mode (30-45 min)
- Profile import/export (YAML interchange format)
- Scope disclaimer + limitations
- Cultural calibration for LATAM

GITHUB REPO (public):
□ Clean repo structure (skills/, gpts/, shared/, web/, research/, docs/)
□ README.md (philosophy, quick start, tool directory)
□ CONTRIBUTING.md (how to contribute)
□ All skills published to marketplaces (SkillsMP, SkillHub)

Deliverables:
- 5 Claude Skills published
- GitHub repo public
- All static web tools live on GitHub Pages
- LinkedIn: full system announcement ("El Sistema Eres Tu")

═══════════════════════════════════════════════════════════
 PHASE 5: COMMUNITY + GROWTH (Week 6+)
═══════════════════════════════════════════════════════════

COMMUNITY:
□ WhatsApp Community (Bogota beachhead — not Discord)
□ Structured channels: introductions, wins, questions, resources
□ Weekly prompts from N1 methodology

CONTENT ENGINE:
□ LinkedIn 5x/week cadence
□ 3-post-per-tool pattern: problem → solution → results
□ Research findings as standalone content (700+ studies = 200+ posts)
□ User stories (anonymized, with consent) as social proof

DATA COLLECTION:
□ Anonymous usage analytics (which tools, completion rates)
□ Longitudinal research (with consent): track career transitions over time
□ Email list growth (target: 1,000 in 90 days)

PARTNERSHIPS:
□ HR/TA outreach ("free tools to share with your candidates")
□ Outplacement firm partnerships
□ University career center partnerships
□ Bogota workshop planning (month 3)

90-DAY TARGETS:
- Email list: 1,000 subscribers
- Tool sessions: 5,000
- LinkedIn audience: 25,000 (from 19,000)
- GPT installs: 500+
- WhatsApp community: 100 members
```

---

## PROFILE INTERCHANGE FORMAT v1

```yaml
# ════════════════════════════════════════
# N1 Self-Knowledge Profile v1
# El Sistema Eres Tu — Busca Adentro
# ════════════════════════════════════════

version: "1.0"
created: null # ISO 8601 timestamp
updated: null # ISO 8601 timestamp
language: "es" # es | en

# ── TRIAGE ──────────────────────────────
triage:
  situation: null # crisis | exploration | growth
  career_path: null # stay_grow | move | go_independent | pause_reset
  specific_move: null # from career path taxonomy
  urgency: null # immediate | 3_months | 6_months | exploratory

# ── VALUES (ACT + Schwartz) ────────────
values:
  completed: false
  mode: null # quick | deep
  core_values: [] # ranked list of top 5
  schwartz_profile: # 10 basic values scored
    self_direction: null
    stimulation: null
    hedonism: null
    achievement: null
    power: null
    security: null
    conformity: null
    tradition: null
    benevolence: null
    universalism: null
  value_conflicts: []
  bulls_eye:
    work: null # 1-10 alignment score
    relationships: null
    personal_growth: null
    leisure: null
  career_implications: []

# ── STRENGTHS (VIA + Bandura + Flow + Big Five) ──
strengths:
  completed: false
  mode: null
  signature_strengths: [] # top 5 from VIA
  big_five:
    openness: null
    conscientiousness: null
    extraversion: null
    agreeableness: null
    neuroticism: null
  self_efficacy:
    mastery_experiences: []
    vicarious_models: []
    social_persuasion: []
    physiological: null
  flow_activities: [] # {activity, challenge, skill, state}
  career_implications: []

# ── IDENTITY (Ibarra + Marcia + Savickas) ──
identity:
  completed: false
  mode: null
  identity_status: null # achieved | moratorium | foreclosed | diffused
  adaptability: # CAAS-12 scores
    concern: null # 1-5
    control: null
    curiosity: null
    confidence: null
  possible_selves: [] # list of explored identities
  active_experiments: [] # Ibarra-style experiments
  narrative_theme: null
  limiting_beliefs: []

# ── PURPOSE (Frankl + MLQ + Ryff) ──────
purpose:
  completed: false
  mode: null
  mlq:
    presence: null # 1-7
    search: null # 1-7
    quadrant: null # fulfilled | growing | seeking | disengaged
  meaning_sources:
    creative: null
    experiential: null
    attitudinal: null
  life_theme: null
  purpose_practice: []
  career_implications: []

# ── ENRICHMENT LAYERS ──────────────────
enrichment:
  psychological_flexibility: null # AAQ-II score
  career_decision_self_efficacy: null # CDMSE-SF score
  psycap_hero:
    hope: null
    efficacy: null
    resilience: null
    optimism: null
  emotional_patterns: null # free text from conversation
  relational_context: null # family/cultural constraints
  somatic_signals: null # body-based data from conversation

# ── CROSS-DIMENSION SYNTHESIS ──────────
synthesis:
  reinforcements: [] # where dimensions align
  conflicts: [] # where dimensions conflict
  career_recommendations: []
  next_actions: []

# ── EVOLUTION ──────────────────────────
evolution:
  assessments: [] # {date, instrument, scores} — longitudinal
  milestones: [] # {date, event, impact}
  next_reassessment: null # ISO 8601 — minimum 4-6 weeks from last
```

---

## CONSTRAINTS

- Zero LLM API costs — user's own AI subscription powers tools
- Everything free, everything open (GitHub public when ready)
- Spanish-first, English-second
- Every recommendation cites a specific study by name
- Scope disclaimer on every tool, every interaction start
- Assessment pacing: 4-6 week minimum between retakes
- Cultural calibration for Colombia/LATAM baked in
- External tools: reference, don't rebuild
- Profile-enhanced, not profile-required (every tool works standalone)
- Quick Mode + Deep Mode for every dimension

---

## SUCCESS CRITERIA (90-Day)

- [ ] Static site live on GitHub Pages with landing page + triage + email capture
- [ ] 6+ static web tools live (Ghost Check, Compass, Bull's Eye, Flow Logger, Runway, Big Five)
- [ ] 4 ChatGPT GPTs live in GPT Store
- [ ] 5 Claude Skills published to marketplaces
- [ ] GitHub repo public with full documentation
- [ ] Profile Interchange Format v1 implemented across all tools
- [ ] Shareable visual scorecards for all assessment tools
- [ ] Layoff Response Kit live
- [ ] "Grow Where You Are" pathway functional
- [ ] Career path taxonomy covers all 20+ moves
- [ ] All 20+ frameworks integrated per architecture
- [ ] LinkedIn: 30+ posts published (research + tool launches + philosophy)
- [ ] Email list: 1,000 subscribers
- [ ] Tool sessions: 5,000
- [ ] WhatsApp Community: 100 members (Bogota)
- [ ] Zero LLM costs incurred by N1
- [ ] Every tool recommendation cites a specific study

---

## KEY RESEARCH REFERENCES

**Meta-Theory:**

- Hall (2004) — Protean Career Theory: self-directed, values-driven careers
- Pryor & Bright (2011) — Career Chaos Theory: complexity, nonlinearity, uncertainty
- Krumboltz (2009) — Planned Happenstance: openness to unplanned opportunities

**Integrative Spine:**

- Lent, Brown & Hackett (1994) — SCCT: self-efficacy → expectations → interests → goals → actions
- Schlossberg (1981, 2011) — 4S Model: Situation, Self, Support, Strategies

**Self-Knowledge:**

- Deci & Ryan (1985) — Self-Determination Theory: autonomy, competence, relatedness
- Savickas (2005) — Career Construction: CAAS 4 C's (Concern, Control, Curiosity, Confidence)
- Hayes et al. (1999) — ACT: values vs goals, psychological flexibility
- Bandura (1977) — Self-efficacy: four sources (mastery, vicarious, social, physiological)
- Ibarra (2003/2023) — Working Identity: experiment first, clarify through action
- Frankl (1946) — Logotherapy: meaning through creative, experiential, attitudinal values
- Csikszentmihalyi (1990) — Flow: challenge-skill balance as career signal
- Peterson & Seligman (2004) — VIA Character Strengths: 24 strengths
- Ryff (1989) — Psychological Well-Being: 6 dimensions including Purpose in Life
- Steger (2006) — MLQ: Presence vs Search for meaning
- Schwartz (1992) — Basic Values: 10 values, conflict structure, 80+ countries
- Marcia (1966) — Identity Status: achieved, moratorium, foreclosed, diffused
- Damon (2008) — Path to Purpose: purpose development in young adults
- Kashdan & McKnight (2009) — Purpose as a compass for healthy living
- Shin & Steger (2014) — Purpose and well-being meta-analysis

**Psychological Capital:**

- Luthans et al. (2007) — PsyCap HERO: Hope, Efficacy, Resilience, Optimism

**Assessment Instruments:**

- CAAS-12 (Savickas, validated 2025, n=3,200)
- MLQ-10 (Steger, 2006)
- AAQ-II (Bond et al., 2011) — psychological flexibility, 7 items
- CDMSE-SF (Betz & Taylor, 2012) — career decision self-efficacy, short form
- Bull's Eye Exercise (Lundgren, ACT-based values alignment)
- Big Five / IPIP-NEO (public domain, via bigfive-web)
- VIA-120 (Peterson & Seligman — reference to viacharacter.org)

**Career Strategy:**

- Sackett et al. (2022) — Structured interviews predict performance
- Granovetter (1973) — Weak ties: 70%+ of jobs through networking
- Burnett & Evans (2016) — Designing Your Life: Odyssey Plans

**Prompting Research:**

- Therabot Trial (NEJM AI, 2025) — CBT + MI + Socratic: 51% depression reduction
- SELF-DISCOVER (NeurIPS 2024) — Dynamic reasoning module selection
- Chain of Empathy (arXiv:2311.04915) — Emotional reasoning before response
- MIND-SAFE (JMIR 2025) — Safety architecture for mental health AI

**Market:**

- 91% purpose anxiety (Rainey, 2014; replicated)
- 58% want career change, 14% take steps (2026 data)
- 17% reduced mortality from purpose (Cohen et al., 2016; n=136,265)
- Zero Spanish-language career strategy tools in any marketplace (2026 audit)

**Effect Size Expectations:**

- d = 0.2-0.4 for self-guided career interventions (honest, meaningful at zero cost)
- Based on meta-analyses of career counseling outcomes (Whiston et al., 2017)
