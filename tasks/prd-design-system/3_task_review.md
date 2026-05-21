# Review: Task 3 - Primitives tipográficas (`Heading` e `Text`)

**Revisor**: AI Code Reviewer  
**Data**: 2026-05-21  
**Arquivo da task**: `tasks/prd-design-system/3_task.md`  
**Status**: APROVADO COM OBSERVAÇÕES

## Resumo

A task entrega as primitives tipográficas `Heading` e `Text` com API consistente (`as`/`size`/`tone`), adoção inicial na home e testes unitários cobrindo defaults + variantes. A semântica de headings é preservada (somente `h1`…`h6`), e as cores/tons usam tokens expostos via `@theme` (ex.: `text-ink`, `text-brand-strong`).

Validações verificadas nesta review:

- `npm test` ✅
- `npm run lint` ✅
- `npm run build` ✅ (com execução escalada por restrição do Turbopack no sandbox)

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| `components/ui/Heading.tsx` | ✅ OK | 0 |
| `components/ui/Text.tsx` | ✅ OK | 0 |
| `components/ui/index.ts` | ✅ OK | 0 |
| `components/ui/Heading.test.tsx` | ✅ OK | 0 |
| `components/ui/Text.test.tsx` | ✅ OK | 0 |
| `app/page.tsx` | ✅ OK | 0 |
| `package.json` | ⚠️ Observação | 1 |
| `app/global-error.tsx` | ⚠️ Observação | 1 |
| `app/not-found.tsx` | ✅ OK | 0 |
| `app/_global-error/page.tsx` | ✅ OK | 0 |
| `app/_not-found/page.tsx` | ✅ OK | 0 |

## Problemas Encontrados

### 🔴 Problemas Críticos

Nenhum problema crítico encontrado.

### 🟡 Problemas Major

Nenhum problema major encontrado.

### 🟢 Problemas Minor

1. `package.json:7` — Scripts `build`/`start` com `NODE_ENV=production`.
   - Impacto: em ambientes Windows sem camada POSIX, essa atribuição pode falhar; além disso, `next build` já assume build de produção por padrão, então a mudança tende a ser redundante.
   - Sugestão: remover `NODE_ENV=production` dos scripts, ou (se houver um motivo explícito) padronizar com `cross-env` e documentar a razão em `AGENTS.md`/`tasks`.

2. `app/global-error.tsx:33` — Uso pontual de cores fora do vocabulário de tokens (`text-white`, `bg-white/70`).
   - Impacto: não quebra acessibilidade nem o objetivo da task, mas enfraquece a diretriz “tokens como fonte única” quando essas páginas começarem a ser tratadas como parte do sistema.
   - Sugestão: quando for evoluir estados globais (erro/404), migrar cores para tokens (ex.: surface/canvas/ink) e evitar “cores soltas” como padrão.

3. `.agents/skills/task-review/SKILL.md:24` — Referências do processo de review apontam para arquivos inexistentes no repo (`references/code-standards.md` e `assets/review-artifact-template.md`).
   - Impacto: não afeta o produto, mas reduz consistência do workflow (reviews ficam sem padrão de template/critério central).
   - Sugestão: criar esses artefatos ou ajustar a skill para apontar para os guias reais do projeto (ex.: `.agents/project/frontend.md`, `.agents/project/quality.md`, `DESIGN.md`).

## ✅ Destaques Positivos

- API pequena e consistente (`as`/`size`/`tone`) alinhada ao `techspec.md` e sem boolean inflation.
- `Heading` restringe semântica a headings reais (`h1`…`h6`), reduzindo risco de mau uso.
- Tons usam tokens (`text-ink`, `text-ink/60`, `text-brand-strong`) coerentes com `app/globals.css`.
- Testes cobrem defaults + variantes e verificam semântica (tagName) e classes esperadas.
- Adoção imediata em `app/page.tsx` elimina “classes ad hoc” para tipografia base.

## Conformidade com PRD / Tech Spec / Task

| Critério | Status | Notas |
|--------|--------|------|
| Requisitos da Task (API, tokens, semântica, testes) | ✅ | Observações apenas fora do core da primitive |
| PRD (tema por tokens, consistência, testes) | ✅ | Atende direção geral |
| Tech Spec (interfaces `Heading`/`Text`, composição, testes) | ✅ | API e uso estão alinhados |
| Next.js / App Router | ✅ | `global-error.tsx` como Client Component está OK |
| React / TypeScript | ✅ | Tipagem adequada para o escopo |

## Recomendações

1. Padronizar scripts `build`/`start` para máxima portabilidade (ou documentar o motivo do `NODE_ENV=production`).
2. (Opcional) Se o projeto decidir formalizar “tokens tipográficos”, promover uma escala de tamanhos/line-heights para `@theme` e mapear `size` para classes tokenizadas (não obrigatório para a task 3, mas ajuda a cumprir a diretriz “tokens-first” de forma mais literal).

## Veredito

Pode seguir para a próxima task. As primitives tipográficas estão sólidas e testadas; as observações são de processo/consistência e não bloqueiam evolução do design system.
