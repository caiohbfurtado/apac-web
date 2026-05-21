# AGENTS.md

Guia enxuto para agentes de IA trabalhando neste repositório.

## Projeto

- Aplicação frontend em `Next.js 16` com `App Router`
- Stack principal: `React 19`, `TypeScript`, `ESLint` e `Tailwind CSS v4`
- Este repositório não é um monorepo e não possui backend próprio aqui

## Quick Reference

- Package manager: `npm`
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`
- App local: `http://localhost:3000`

## Regras Universais

- Sempre verifique as skills relevantes antes de implementar
- Para trabalho de frontend, comece por `brainstorming` e depois use apenas as skills que realmente se aplicam
- Quando a tarefa envolver regras de negócio, linguagem de domínio ou decisões difíceis de reverter, use `grill-with-docs` para tensionar o plano e registrar termos e decisões
- Prefira correções de causa raiz; não use workarounds
- Para dependências, use `npm install <pacote>` em vez de editar versões manualmente
- Antes de concluir, rode pelo menos `npm run lint` e `npm run build`
- Não execute `git restore`, `git reset`, `git clean` ou comandos destrutivos sem permissão explícita do usuário

## Guias Detalhados

- [Arquitetura do projeto](.agents/project/architecture.md)
- [Convenções de frontend](.agents/project/frontend.md)
- [Checks de qualidade](.agents/project/quality.md)
- [Workflow operacional](.agents/project/workflow.md)
