---
name: cria-techspec
description: Creates Technical Specifications from existing PRDs for this NGO website, translating product requirements into frontend architecture, content structure, and implementation guidance. Performs deep project analysis and uses documentation research when needed. Use when the user asks to create a tech spec, define architecture, or plan implementation for a page, section, campaign, flow, or site improvement with an existing PRD. Do not use for PRD creation, task breakdowns, or direct code implementation.
---

# Tech Spec Creation

## Procedures

**Step 1: Validate Prerequisites**
1. Confirm the feature slug has been provided.
2. Verify the PRD exists at `tasks/prd-[feature-slug]/prd.md`. If missing, halt and report.

**Step 2: Analyze PRD (Mandatory)**
1. Read the PRD completely — do NOT skip this step.
2. Identify technical content, constraints, and success metrics.
3. Extract core requirements for architectural consideration.

**Step 3: Deep Project Analysis (Mandatory)**
1. Explore the codebase to discover files, modules, interfaces, and integration points.
2. Map symbols, dependencies, and critical paths.
3. Analyze: routes, layouts, Server/Client Component boundaries, content structure, styling patterns, configs, external widgets, error handling, accessibility, SEO, performance, and tests.
4. Explore solution strategies, patterns, risks, and alternatives.

**Step 4: Research (Mandatory)**
1. Use available documentation sources to resolve technical questions about Next.js, React, Tailwind, accessibility, or SEO when needed.
2. Perform targeted web research only when the feature depends on external rules or third-party tooling.
3. Complete the necessary research BEFORE asking clarification questions.

**Step 5: Technical Clarifications (Mandatory)**
1. Explore the project BEFORE asking questions.
2. Ask focused clarification questions covering:
   - Positioning and messaging.
   - Content structure and key user journeys.
   - External dependencies (if any).
   - Component boundaries and reusable sections.
   - Test scenarios and acceptance criteria.
3. Do NOT proceed until answers are received.

**Step 6: Standards Compliance Mapping (Mandatory)**
1. Identify project skills in `.agents/skills/` that apply to this spec.
2. Highlight deviations with justification and compliant alternatives.

**Step 7: Generate Tech Spec (Mandatory)**
1. Read the template at `assets/techspec-template.md`.
2. Provide: route/page architecture, component design, content structure, rendering strategy, styling approach, optional integration points, impact analysis, and test strategy.
3. Focus on HOW, not WHAT (the PRD owns what/why).
4. Avoid repeating functional requirements from the PRD.
5. The spec is about specification, NOT detailed implementation code.
6. Keep under ~2,000 words.
7. Do NOT deviate from the template structure.
8. Prefer existing libraries over custom development.

**Step 8: Save Tech Spec (Mandatory)**
1. Save to: `tasks/prd-[feature-slug]/techspec.md`.
2. Confirm the write operation and path.

## Core Principles
- Tech Spec focuses on HOW, not WHAT (PRD owns the what/why).
- Prefer simple, evolutionary architecture with clear interfaces.
- Provide testability, accessibility, SEO, and performance considerations upfront.
- Prefer existing libraries over custom solutions.
- Assume a frontend-only Next.js application unless the PRD explicitly introduces an external integration.

## Quality Checklist
- [ ] PRD reviewed.
- [ ] Deep repository analysis completed.
- [ ] Key technical clarifications answered.
- [ ] Tech Spec generated using the template.
- [ ] Project skills verified for compliance.
- [ ] File written to `./tasks/prd-[feature-slug]/techspec.md`.
- [ ] Final output path provided and confirmed.

## Error Handling
- If the PRD does not exist at the expected path, halt and ask the user to create it first via the `cria-prd` skill.
- If Context7 MCP is unavailable, fall back to Web Search for technical documentation.
- If the output file already exists, confirm with the user before overwriting.
