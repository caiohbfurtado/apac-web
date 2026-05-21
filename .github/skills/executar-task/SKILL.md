---
name: executar-task
description: Implements planned frontend tasks in this Next.js project by reading the task file, PRD, and Tech Spec, selecting the relevant local skills, executing the work, validating it, requesting review from the task-reviewer agent, and updating task progress. Use when the user asks to implement a task, execute a task, or start working on a specific task number. Do not use for creating tasks, writing PRDs or tech specs, broad QA passes, or unrelated bug triage.
---

# Task Execution

## Procedures

**Step 1: Validate Prerequisites**
1. Confirm the task identifier and feature slug.
2. Verify the task file exists at `tasks/prd-[feature-slug]/[num]_task.md`. If missing, halt.
3. Verify the PRD exists at `tasks/prd-[feature-slug]/prd.md`. If missing, halt.
4. Verify the Tech Spec exists at `tasks/prd-[feature-slug]/techspec.md`. If missing, halt.

**Step 2: Read Context Completely (Mandatory)**
1. Read the task file completely. Do NOT skip requirements, subtasks, success criteria, or test expectations.
2. Read the PRD completely for product, content, and user-journey context.
3. Read the Tech Spec completely for architecture, rendering strategy, component boundaries, and validation guidance.
4. Identify dependencies from previous tasks and verify whether they are complete before implementing.

**Step 3: Load Relevant Local Skills**
1. Start from `brainstorming` only when the task changes behavior in a way that has not yet been designed or approved.
2. Load only the skills that apply to the task, based on the actual implementation scope.
3. Prefer project-local skills in `.agents/skills/`, especially:
   - `next-best-practices` for App Router, rendering, metadata, routing, and framework conventions.
   - `vercel-react-best-practices` for React patterns and performance.
   - `vercel-composition-patterns` when component APIs or composition need restructuring.
   - `ui-craft` and `tailwindcss` for visual implementation and styling.
   - `web-design-guidelines` for UX, accessibility, and interface review.
   - `grill-with-docs` when the task introduces important domain terms, business rules, or hard-to-reverse decisions.
4. Do not load irrelevant skills just because they are available.

**Step 4: Task Analysis (Mandatory)**
1. Summarize:
   - Task ID and task name.
   - What the user-facing deliverable is.
   - Which PRD outcomes this task supports.
   - Which Tech Spec decisions constrain the implementation.
   - Dependencies, risks, and open assumptions.
2. Compare the task against the current repository state before editing files.
3. If the task conflicts with the PRD, Tech Spec, or current codebase in a risky way, stop and align with the user before proceeding.

**Step 5: Implementation Plan (Mandatory)**
1. Define a short step-by-step plan for the implementation.
2. Prefer the smallest complete increment that satisfies the task.
3. Favor root-cause fixes over temporary workarounds.
4. Preserve existing project patterns unless the Tech Spec explicitly calls for change.

**Step 6: Implement (Mandatory)**
1. Execute the task immediately after planning.
2. Follow `AGENTS.md` and the project guides in `.agents/project/`.
3. Treat this repository as a frontend-only Next.js application unless the task explicitly integrates an approved external service already documented in the PRD or Tech Spec.
4. Avoid introducing infrastructure assumptions that are not documented for this repository.
5. Keep changes scoped to the task and update/add tests when the task requires them.

**Step 7: Validate (Mandatory)**
1. Run the task-specific checks described in the task file.
2. At minimum, run:
   - `npm run lint`
   - `npm run build`
3. Run additional validation when relevant, such as component tests, accessibility checks, responsive verification, or end-to-end coverage.
4. If validation fails, fix the issues before marking the task complete.

**Step 8: Review with Agent (Mandatory)**
1. After implementation and local validation pass, invoke the `task-reviewer` agent defined in `.agents/agents/task-reviewer.md`.
2. Provide the agent with the task identifier, changed scope, and any relevant implementation notes needed for review.
3. Address review findings before considering the task complete.
4. If the reviewer is blocked or unavailable, report that clearly instead of silently skipping review.

**Step 9: Update Task Progress (Mandatory)**
1. Mark completed subtasks in the individual task file when appropriate.
2. Mark the task as complete in `tasks/prd-[feature-slug]/tasks.md` only after implementation, validation, and review succeed.
3. Report what was implemented, what was validated, what the reviewer flagged, and any remaining limitations or follow-ups.

## Guidelines
- Assume the task was already decomposed during PRD, Tech Spec, and task creation; do not reinvent scope unless a real inconsistency is found.
- Prefer existing components, patterns, and utilities over creating parallel abstractions.
- Keep implementation aligned with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4 conventions used in this repository.
- For UI work, preserve the project's visual language and responsive behavior.
- Do not claim validation you did not actually run.

## Quality Checklist
- [ ] Task file, PRD, and Tech Spec were all read.
- [ ] Dependencies were checked.
- [ ] Relevant local skills were identified and used.
- [ ] Implementation stayed within task scope.
- [ ] Required tests/checks were executed.
- [ ] `npm run lint` passed.
- [ ] `npm run build` passed.
- [ ] `task-reviewer` ran or an explicit blocker was reported.
- [ ] Task progress was updated in the task files.

## Error Handling
- If the task file does not exist, halt and report the missing path to the user.
- If the PRD or Tech Spec is missing, halt and direct the user to create it first with the appropriate skill.
- If dependent tasks are incomplete, warn the user and ask whether to proceed anyway.
- If the task requires a design decision that was not covered by the PRD or Tech Spec, pause and align before implementing.
- If validation fails, fix the problem before finalizing; if blocked, explain exactly what remains unresolved.
- If the `task-reviewer` returns critical issues, address them before finalizing the task.
