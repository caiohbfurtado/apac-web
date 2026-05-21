# Review: Task 4.0 - Implementar os blocos institucionais centrais

**Revisor**: AI Code Reviewer
**Data**: 2026-05-21
**Arquivo da task**: 4_task.md
**Status**: APROVADO

## Resumo

A task ampliou o miolo institucional da home com uma faixa de destaques, a seção "Como a APAC ajuda" em linguagem mais editorial, vertical e de largura total, um bloco de apoio com baixa fricção, reforço de confiança/transparência e um fechamento com CTA final mais evidente. A implementação ficou consistente com o PRD, o tech spec e o `DESIGN.md`, e a validação local foi executada com sucesso.

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| `src/lib/home-content.ts` | ✅ OK | 0 |
| `src/components/home/HomeSections.tsx` | ✅ OK | 0 |
| `src/components/home/HomeSections.test.tsx` | ✅ OK | 0 |
| `src/app/page.test.tsx` | ✅ OK | 0 |
| `DESIGN.md` | ✅ OK | 0 |

## Problemas Encontrados

### 🔴 Problemas Críticos

Nenhum problema crítico encontrado.

### 🟡 Problemas Major

Nenhum problema major encontrado.

### 🟢 Problemas Minor

Nenhum problema minor encontrado.

## ✅ Destaques Positivos

- A faixa de destaques institucionais virou uma narrativa vertical aberta, ocupando a largura útil da página sem texto lateral solto.
- A seção de apoio ficou mais clara e objetiva, com etapas numeradas, canais diretos e menos carga visual.
- O bloco de confiança ganhou três pilares mais explícitos em layout aberto, com separadores leves em vez de superfícies internas.
- O fechamento final ficou mais forte visualmente e mantém a hierarquia de ação sem competir com o hero.
- A cobertura de testes foi atualizada para refletir os novos headings e a nova composição das seções.

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

1. Reaproveitar o padrão de "destaques + explicação + CTA final" em futuras seções institucionais para manter ritmo editorial consistente.
2. Manter a disciplina de conteúdo com acentuação e nomenclatura institucional para evitar regressões de tom nas próximas tasks.

## Veredito

Task aprovada sem ressalvas. A implementação pode seguir para as próximas etapas da home.
