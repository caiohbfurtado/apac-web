# Code Standards Reference

Use this reference as a review aid, not as a rigid rulebook. Prefer the repository's existing patterns and the guidance in `AGENTS.md` and `.agents/project/` when there is tension between rules.

## Naming Conventions
- **camelCase**: functions, variables, helpers, props
- **PascalCase**: React components, types, interfaces
- **kebab-case**: route segments, filenames, directories when that matches project conventions

## Core Review Rules
- Keep code identifiers and code comments in English
- Prefer clear, specific names over abbreviations
- Avoid magic numbers when a named constant improves readability
- Prefer small, focused functions and components with one clear responsibility
- Prefer early returns over deeply nested conditionals
- Avoid boolean-prop proliferation when composition or clearer APIs would scale better
- Keep Server/Client Component boundaries intentional and minimal
- Do not introduce `use client` without a real interactive need
- Preserve Next.js App Router conventions instead of creating parallel structure
- Keep Tailwind usage readable and consistent with the existing UI patterns
- Add comments only when they clarify non-obvious intent
- Place declarations close to usage when it improves readability
- Prefer maintainability and task correctness over rigid line-count thresholds
