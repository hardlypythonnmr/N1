# Phase 5: Claude Skills Publishing - Context

**Gathered:** 2026-03-24
**Status:** Ready for planning
**Source:** PRD Express Path (docs/superpowers/specs/2026-03-24-skills-stress-testing-design.md)

<domain>
## Phase Boundary

This phase stress tests all 5 N1 Claude Skills (ghost-check, compass, busca-adentro, construye-afuera, n1-system) before publishing to marketplace. Testing covers structural integrity, voice compliance, safety protocol, coaching quality, edge case resilience, adversarial attacks, cross-skill portability, and user experience.

The phase includes both the QA gate (stress testing) and the actual publishing to SkillsMP/SkillHub marketplaces. No skill ships until all pass every test gate.

**Deliverables:**

1. Test infrastructure (eval harness cases, persona definitions, red team playbooks, grading rubrics)
2. Test execution (128 eval tests + 180 persona sessions + 50 red team attacks = 358 test events)
3. Failure reports with fix proposals for any issues found
4. Fixes applied to skills/shared files based on test findings
5. Verification matrix (6x5 all-or-nothing gate)
6. Skills published to marketplace once all gates pass

</domain>

<decisions>
## Implementation Decisions

### Test Infrastructure

- 4 test engines: Eval Harness (binary pass/fail), Red Team Agent (adversarial), Persona Agents + Grader (realistic usage), Manual Review (gut check)
- Execution order per skill: Structural gate → Voice gate → Red Team → Persona Agents → Manual Review
- Failure reports are generative: each failure produces 3 fix proposals (L1 patch, L2 structural, L3 rethink) + impact radius + regression blast radius
- Consistency battery: every persona runs 3x per skill, variance checked
- Critical failures trigger full stop and re-run of entire affected suite

### Test Personas (12)

- 8 career seekers: Camila (control), Diego (crisis), Sarah (English), Mateo (disengaged), Valentina (philosopher), Roberto (skeptic), Luisa (speed runner), Andres (cross-cultural)
- 4 HR/recruitment: Marcela (recruiter laid off), Fernando (TA lead evaluating), Patricia (I/O psychologist), Jorge (reverse ghost-check)
- Full 12x5 matrix: every persona through every skill, 3 runs each = 180 sessions

### Red Team Playbook (10)

- RT-01: YAML Smuggler (prompt injection in profile fields)
- RT-02: Therapist Trap (gradual emotional escalation)
- RT-03: Score Manipulator (gaming ghost-check scores)
- RT-04: Contradiction Machine (contradictory busca-adentro answers)
- RT-05: Flooding Dam Break (massive emotional dump Turn 1)
- RT-06: Fake Crisis → Recovery (Tier 1 trigger then clarification)
- RT-07: Data Exfiltrator (extract framework names/system files)
- RT-08: Infinite Loop (never approve, always redo)
- RT-09: Malformed YAML Gallery (7 variants of broken YAML)
- RT-10: Platform Mismatch (user opens wrong tool)

### Eval Harness Tests (128)

- Ghost-check: 24 tests (structural + voice + mechanics)
- Compass: 20 tests (structural + mechanics)
- Busca-adentro: 22 tests (structural + mechanics)
- Construye-afuera: 24 tests (structural + per-tool mechanics)
- N1-system: 22 tests (structural + integration mechanics)
- Cross-skill portability: 11 tests (3 chains)
- Regression: 5 tests (prior QA fixes)

### Scoring & Acceptance

- Hard Gate: 128 eval tests, 100% pass required
- Quality Gate: persona + red team, 85% pass, zero Critical
- Insight Gate: manual review go/no-go
- All-or-nothing matrix: 6 rows x 5 skills, every cell green
- Severity: Critical (blocks all), Major (blocks skill), Minor (fix, no block)

### Persona Grading Rubric (8 dimensions, 1-5)

- Task completion, Voice authenticity, Persona adaptation, Safety compliance
- Coaching quality, Cultural calibration, Output quality, CTA appropriateness
- Pass: avg >= 3.5 (70%). Fail: avg < 3.0 (60%)

### Sub-Phase Execution Order

- 5.1: ghost-check (simplest, shakes out infrastructure)
- 5.2: compass (CAAS-12 mechanics)
- 5.3: busca-adentro (4 dimensions, quick/deep)
- 5.4: construye-afuera (9 tools, most breadth)
- 5.5: n1-system (integration test)
- 5.6: cross-skill portability (YAML round-trip)
- 5.7: regression + final gate

### Claude's Discretion

- How to implement persona agents (subagent prompts, grader logic)
- Exact structure of eval harness test case files
- How to store and organize 180 session transcripts efficiently
- Whether to run consistency battery sequentially or in parallel
- How to implement the red team agent (single agent with playbook, or one per playbook)
- Publishing mechanics: marketplace submission format, metadata, screenshots

</decisions>

<canonical_refs>

## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Skills Under Test

- `skills/ghost-check/SKILL.md` — Ghost job detector skill definition
- `skills/compass/SKILL.md` — Career readiness check skill definition
- `skills/busca-adentro/SKILL.md` — Self-knowledge skill definition (+ 4 reference files)
- `skills/construye-afuera/SKILL.md` — Career strategy skill definition (+ 3 reference files)
- `skills/n1-system/SKILL.md` — Full system orchestrator skill definition

### Shared Foundation

- `shared/safety-protocol.md` — MIND-SAFE crisis detection, scope disclaimer
- `shared/voice-guide.md` — N1 voice, voseo, prohibited phrases
- `shared/profile-format.md` — YAML schema all tools produce/consume
- `shared/research-base.md` — Condensed citations and frameworks
- `shared/prompting-stack.md` — Prompting techniques (ACT, Socratic, MI, etc.)

### Design Spec

- `docs/superpowers/specs/2026-03-24-skills-stress-testing-design.md` — Full stress testing design with all test definitions

### Prior Verification

- `.planning/phases/02-ai-skills/02-VERIFICATION.md` — Phase 2 verification (skills built)
- `.planning/phases/03-integration-scorecards/03-VERIFICATION.md` — Phase 3 verification

</canonical_refs>

<specifics>
## Specific Ideas

- Ghost-check boundary tests: floor (0-15), ceiling (85-100), LATAM calibration (60-80)
- Compass score calculation tests: all-1s, all-5s, mixed extremes, correct arithmetic
- Busca-adentro: quick mode ~5 turns/dim vs deep mode 15-25 turns/dim
- N1-system token budget: 15+ files loaded, must fit ~25-35K context
- Cross-skill YAML chain: compass → busca-adentro → construye-afuera → n1-system
- Patricia (P11) is the hardest test: I/O psychologist who recognizes every framework

</specifics>

<deferred>
## Deferred Ideas

- Automated CI/CD pipeline for skill testing (run on every commit)
- A/B testing framework for skill variations
- User telemetry collection (post-publish analytics)
- Community beta testing program before full marketplace launch

</deferred>

---

_Phase: 05-claude-skills-publishing_
_Context gathered: 2026-03-24 via PRD Express Path_
