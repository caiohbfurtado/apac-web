---
name: task-review
description: Reviews completed frontend task implementations in this Next.js project against task requirements, project conventions, lint/build validation, and any applicable type or test checks. Classifies findings by severity and generates a structured review artifact. Use when a task has been completed and needs quality validation before proceeding. Do not use for full branch review, generic QA execution, or unrelated bug fixing.
---

# Task Review

## Procedures

**Step 1: Identify the Task**
1. Search for task files matching `*_task.md` inside `tasks/`.
2. If a task number is provided, locate the specific `[num]_task.md` file.
3. If no task number is provided, locate the most recent task file in `tasks/`.
4. Read the task file completely before reviewing implementation.
5. Read the sibling `prd.md` and `techspec.md` in the same task directory for context and acceptance criteria.

**Step 2: Identify Review Scope**
1. Use `git diff`, `git status`, and recent history when helpful to identify files changed for the task.
2. Review each changed file carefully.
3. Read the surrounding context of modified files, not only the diff.
4. Prefer reviewing the files most directly connected to the task deliverable, validation, and user-facing behavior.

**Step 3: Load Review Criteria**
1. Read `references/code-standards.md`.
2. Review compliance with `AGENTS.md` and the project guides in `.agents/project/`.
3. Consider the relevant local skills that should have shaped the implementation, especially:
   - `next-best-practices`
   - `vercel-react-best-practices`
   - `vercel-composition-patterns`
   - `ui-craft`
   - `tailwindcss`
   - `web-design-guidelines`
4. Apply these standards in the context of this repository's current frontend architecture instead of using generic enterprise rules blindly.

**Step 4: Conduct the Review**
1. Review the implementation against:
   - Task scope, subtasks, and success criteria.
   - PRD outcomes and Tech Spec decisions.
   - Next.js App Router conventions.
   - React 19 and TypeScript quality.
   - Tailwind and UI consistency when relevant.
   - Accessibility, responsive behavior, SEO, and performance considerations when relevant to the task.
2. Look first for bugs, regressions, missing states, invalid assumptions, and incomplete validation.
3. Treat missing evidence for required checks as a review issue when the task claims validation that was not run.

**Step 5: Classify Findings**
1. For each finding, classify as:
   - **CRITICAL**: Broken behavior, build-breaking issues, severe regressions, security-sensitive mistakes, or task requirements not met.
   - **MAJOR**: Strong risk of defect, important standards violation, missing required validation, accessibility gaps, or incomplete implementation.
   - **MINOR**: Non-blocking clarity, maintainability, style, or polish improvements.
   - **POSITIVE**: Good implementation choices worth preserving.
2. Every blocking finding must include file reference, concise explanation, impact, and a suggested correction.

**Step 6: Validate Project Checks**
1. Run `npm run lint`.
2. Run `npm run build`.
3. If explicit type validation is needed and no official `typecheck` script exists, run `npx tsc --noEmit`.
4. Only run automated test commands that actually exist in the repository or were added by the task itself.
5. If a task requires tests but no tests were created or runnable evidence is missing, record that as a finding.

**Step 7: Generate Review Artifact**
1. Read the template at `assets/review-artifact-template.md`.
2. Create `[num]_task_review.md` in the same directory as `[num]_task.md`.
3. Apply status criteria:
   - **APPROVED**: No critical or major findings.
   - **APPROVED WITH OBSERVATIONS**: No critical findings, with only minor findings or clearly non-blocking observations.
   - **CHANGES REQUESTED**: Any critical finding, or one or more major findings that should be resolved before proceeding.
4. Write the artifact in Brazilian Portuguese. Keep code identifiers and code examples in English.

## Guidelines
- Be thorough but fair: prioritize real product and code risks over stylistic nitpicks.
- Lead with findings that affect correctness, task completeness, accessibility, or project stability.
- Always reference exact files and lines when possible.
- Prefer repository-specific guidance over generic style dogma.
- Do not invent infrastructure, backend concerns, or commands that do not exist in this project.

## Error Handling
- If no task file is found, report that and ask the user for the task number or path.
- If the review scope cannot be inferred from git state alone, fall back to the task file plus changed files mentioned by the implementation.
- If `npm run lint` or `npm run build` fails, include that as a blocking finding in the artifact.
- If an optional validation command is unavailable, state that clearly instead of pretending it ran.
