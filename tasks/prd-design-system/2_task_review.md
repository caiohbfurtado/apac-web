# Review: Task 2 - Criar primitives de layout

**Revisor**: AI Code Reviewer
**Data**: 2026-05-21
**Arquivo da task**: 2_task.md
**Status**: APROVADO COM OBSERVAÇÕES

## Resumo

A task entrega as primitives de layout `Container`, `Stack` e `Section`, com APIs pequenas e previsíveis, foco em semântica e mobile-first, e testes unitários/composição cobrindo variações essenciais. A home atual passa a consumir essas primitives, reduzindo repetição de classes estruturais.

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| components/layout/Container.tsx | ✅ OK | 0 |
| components/layout/Stack.tsx | ✅ OK | 0 |
| components/layout/Section.tsx | ⚠️ Problemas | 1 |
| components/layout/index.ts | ✅ OK | 0 |
| lib/cn.ts | ✅ OK | 0 |
| components/layout/Container.test.tsx | ✅ OK | 0 |
| components/layout/Stack.test.tsx | ✅ OK | 0 |
| components/layout/Section.test.tsx | ✅ OK | 0 |
| app/page.tsx | ✅ OK | 0 |
| tasks/prd-design-system/2_task.md | ✅ OK | 0 |

## Problemas Encontrados

### 🔴 Problemas Críticos

Nenhum problema crítico encontrado.

### 🟡 Problemas Major

Nenhum problema major encontrado.

### 🟢 Problemas Minor

1. `components/layout/Section.tsx:57` — Estrutura do header tem wrappers redundantes de largura (`max-w-3xl` em dois níveis).
   - Impacto: apenas manutenção/clareza; não bloqueia uso.
   - Sugestão: consolidar em um único wrapper e/ou mover a regra de largura para um único ponto.

## ✅ Destaques Positivos

- APIs sem boolean-prop inflation (variantes por enums e slots via `ReactNode`).
- Semântica preservada (`as` em `Container`/`Stack`/`Section`, `id` em `Section`).
- Cobertura de testes para defaults + variantes essenciais.
- Primeira adoção em `app/page.tsx` reduz duplicação de layout.

## Conformidade com Padrões

| Padrão | Status |
|--------|--------|
| Requisitos da Task | ✅ |
| Padrões de Código | ✅ |
| Next.js / App Router | ✅ |
| React / TypeScript | ✅ |
| UI / Acessibilidade / Responsividade | ✅ |
| Validação (`lint` / `build` / tipos / testes) | ✅ |

## Recomendações

1. Simplificar a estrutura interna de header do `Section` (melhor legibilidade/manutenção).
2. (Opcional) Introduzir uma convenção de exports na raiz de `components/` quando a base crescer, para facilitar imports em tarefas futuras.

## Veredito

Pode seguir para a task 3. Caso o `Section` comece a ganhar mais variações de layout, vale ajustar agora a estrutura do header para evitar complexidade incidental.

