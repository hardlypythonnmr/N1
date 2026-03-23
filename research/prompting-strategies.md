# Prompting Strategies for N1 Career & Self-Knowledge Tools

**Date:** 2026-03-23 | **17 techniques researched**

## Recommended Prompting Stack

| Layer      | Technique                 | Purpose                                 | Evidence                                   |
| ---------- | ------------------------- | --------------------------------------- | ------------------------------------------ |
| Foundation | RISEN + XML tags          | Structure system prompts                | Industry standard                          |
| Safety     | MIND-SAFE guardrails      | Crisis detection, scope boundaries      | JMIR 2025                                  |
| Primary    | Socratic questioning      | Self-discovery, not advice              | Princeton NLP, ACL 2025                    |
| Emotional  | Chain of Empathy (CoE)    | Reason about emotions before responding | arXiv:2311.04915                           |
| Resistance | Motivational Interviewing | Evoke change talk, roll with resistance | arXiv:2505.17380, JMIR 2025                |
| Cognitive  | CBT restructuring         | Challenge career-limiting beliefs       | Therabot NEJM AI: 51% depression reduction |
| Values     | ACT values clarification  | Align career with identity              | arXiv:2509.09712                           |
| Identity   | Narrative therapy         | Re-author career stories                | Taylor & Francis 2025                      |
| Decisions  | Tree of Thoughts          | Explore/evaluate career options         | NeurIPS-adjacent                           |
| Reasoning  | SELF-DISCOVER (DeepMind)  | Dynamic reasoning module selection      | NeurIPS 2024                               |
| Flow       | Prompt chaining           | Multi-step guided journey               | Anthropic guidance                         |
| Quality    | Reflexion                 | Self-critique before output             | Validated technique                        |
| Scale      | Context engineering       | Attention budget management             | Anthropic Sept 2025                        |

## Key Finding: Therabot Trial (NEJM AI, March 2025)

- 51% depression symptom reduction
- 31% anxiety reduction
- Therapist-level therapeutic alliance
- Used CBT + MI + Socratic methods combined
- 106 participants, RCT design

## Anthropic Skills Architecture (Jan 2026)

- Description field determines skill loading (~50-100 tokens)
- Progressive disclosure: load detail on demand
- Split large skills into multiple files
- YAML frontmatter with trigger phrases

## OpenAI GPT Best Practices

- Instructions for rules/workflow, knowledge files for reference
- Task flows > persona descriptions
- CTCO pattern: Context, Task, Constraints, Output
- Static instructions at start, variable content at end
