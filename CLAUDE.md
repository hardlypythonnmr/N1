<!-- GSD:project-start source:PROJECT.md -->

## Project

**N1 — El Sistema Eres Tu**

N1 is a research-backed career strategy methodology delivered through AI tools (Claude Skills, ChatGPT GPTs), static web instruments, and content. It helps people build self-knowledge (busca adentro) and translate it into career action (construye afuera) using 25+ validated psychological frameworks, free forever. Target audience: professionals in LATAM navigating career transitions — beachhead is senior SWEs at outsourcing firms (Globant, EPAM, Perficient).

**Core Value:** Every person can build a career strategy grounded in validated self-knowledge — values, strengths, identity, and purpose — without paying for coaching or therapy. The system is the user themselves.

### Constraints

- **Budget:** $0 — everything must be free-tier or static hosting
- **Platform:** GitHub Pages for web, Claude/ChatGPT for AI — no owned infrastructure
- **Token budgets:** ~25-35K per Claude session, ~1,800 tokens for GPT instructions
- **Assessment integrity:** Validated instruments (CAAS-12, MLQ-10, Big Five) must be administered as standardized forms, not through AI conversation
- **Therapeutic scope:** Never claim to do therapy. ACT techniques internally, "evidence-based career guidance" externally. Scope disclaimer on every tool.
- **Cultural:** Spanish primary for content, English for code. Colombian voseo. High MLQ-Search normative in LATAM (not pathological).
- **Assessment pacing:** 4-6 week minimum between retakes of same instrument

### Key File References

- **Profile Interchange Format:** `shared/profile-format.md` (YAML schema all tools produce/consume)
- **Blank profile template:** `shared/profile-template.yaml`
- **Safety protocol (MIND-SAFE):** `shared/safety-protocol.md`
- **Shared foundation directory:** `shared/` — loaded by all skills and tools
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->

## Technology Stack

- Language: Markdown (SKILL.md files), YAML (profiles, frontmatter), HTML/CSS/JS (static web tools)
- AI platform: Claude Skills (SKILL.md format), ChatGPT GPTs (instructions.md + knowledge files)
- Hosting: GitHub Pages (zero cost, static only)
- No build pipeline — pure static files, no npm, no bundler
- No backend, no server, no database — localStorage only for web tools
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

### Language

- Code, filenames, YAML keys: English
- User-facing content (SKILL.md prompts, web copy): Spanish (Colombian voseo)
- Comments and documentation: English

### File organization

- `shared/` — files loaded by all skills and tools (DRY)
- `skills/` — one subdirectory per Claude Skill
- `gpts/` — one subdirectory per ChatGPT GPT
- `web/` — static HTML/CSS/JS tools
- `.planning/` — GSD planning artifacts

### Profile Interchange Format

Every tool that produces assessment data must output YAML compatible with `shared/profile-format.md`.
Profile format version: v1. Schema defined at `shared/profile-format.md`.
Blank template at `shared/profile-template.yaml`.

### Skill architecture (DRY rule)

Every SKILL.md MUST reference shared/ files rather than duplicating content:

- `shared/prompting-stack.md` — all prompting techniques
- `shared/voice-guide.md` — voice and tone rules
- `shared/safety-protocol.md` — MIND-SAFE, scope disclaimer, crisis resources
- `shared/research-base.md` — condensed citations (~4K tokens)
  Never copy content from shared/ into a skill. Reference it.

### Safety (non-negotiable)

1. Scope disclaimer required: every tool, every session start
2. MIND-SAFE crisis detection: defined in `shared/safety-protocol.md`
3. Never use therapeutic labels with users (say "career guidance" not "therapy")
4. Assessment pacing: 4-6 week minimum between retakes of same instrument
5. Cultural calibration: high MLQ-Search is normative in Colombia, CAAS Control runs lower
6. Refer to human professional when: active crisis, clinical symptoms, legal/financial decisions

### Commit format

Conventional commits. Types: feat | fix | chore | docs | refactor | test
Example: `feat: n1-busca-adentro skill — values dimension`

### No therapeutic modality labels in user-facing text

WRONG: "This uses ACT defusion techniques"
RIGHT: "Let's look at what matters most to you and what might be getting in the way"

<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

### System layers

1. Meta-theory: Protean Career Theory + Career Chaos Theory + Planned Happenstance + SDT
2. Integrative spine: SCCT (Lent, Brown & Hackett) + Schlossberg 4S
3. Self-knowledge: Busca Adentro — 4 dimensions (Values → Strengths → Identity → Purpose)
4. Career action: Construye Afuera — tools adapted per career path (Stay & Grow | Move | Go Independent | Pause & Reset)

### Entry points

- Claude Skills: skills/[name]/SKILL.md — loaded by user into Claude Projects
- ChatGPT GPTs: gpts/[name]/instructions.md + knowledge/ files
- Static web: web/[tool]/index.html — pure HTML/JS, hosted on GitHub Pages

### Data flow

User session → 1-question router ("What's blocking you now?") → 1 of 5 skills
→ Skill produces tangible artifacts (CV/LinkedIn rewrite, interview drills, role-archetype, momentum plan, negotiation script)
→ YAML profile updated and portable across skills (clipboard copy/paste)
→ Next skill in sequence if applicable (Prepare → Get Interviews → Win Interviews → Negotiate)

### Shared foundation (loaded by all skills)

shared/prompting-stack.md → shared/voice-guide.md → shared/safety-protocol.md → shared/research-base.md

### Tool inventory (v2.0 — 2026-04-21)

**AI Skills (5 total — JTBD-aligned):**

1. `n1-get-interviews` — dual optimization (ATS + recruiter scan) + skill-to-role translation + ghost-check. Replaces CV Audit + LinkedIn + Job Hunt + Network Map + Ghost Check (v1).
2. `n1-win-interviews` — text + voice interview coaching with speech analysis. Replaces Interview Prep + STAR Builder (v1).
3. `n1-prepare` — compressed self-knowledge (CAAS-short + MLQ-short + role-archetype) + skill-gap map 3/6/12. Consolidates busca-adentro + compass + bulls-eye + mlq (v1 skills).
4. `n1-resilience` — SDT diagnostic + momentum tracking + implementation intentions. NEW in v2.0.
5. `n1-negotiate` — LATAM comp benchmark + 3-script simulation + walk-away analysis. Replaces construye-afuera's negotiation (v1).

**Static web tools (7 total — preserved):**
Ghost Check, Compass/CAAS-12, Bull's Eye, MLQ-10, Flow Logger, Runway Calculator, Mi Perfil N1.
Landing page rewritten with 1-Q router + cockpit-hybrid design (see `design-system.md`).

**Archived skills (moved to `skills/_archive/`):**
busca-adentro, construye-afuera, compass, ghost-check, n1-system, n1-post.

**ChatGPT GPTs (4 total — unchanged for now):**
Busca Adentro, Construye Afuera, Compass, Ghost Check. Will migrate to match v2.0 skill slate in a later phase.

<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:

- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.

<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.

<!-- GSD:profile-end -->
