# Review: Task 3 - Reestruturar contratos de conteúdo da landing

**Revisor**: AI Code Reviewer  
**Data**: 2026-05-22  
**Arquivo da task**: `3_task.md`  
**Status**: APROVADO

## Resumo

A task 3.0 foi implementada de forma consistente com o PRD e a tech spec: o contrato local da home foi expandido para suportar a nova narrativa editorial, os guards de campanhas e apoiadores passaram a operar sobre a seção completa, e os testes foram atualizados para cobrir o novo formato sem quebrar a compatibilidade com a home atual.

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| [src/lib/home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts) | ✅ OK | 0 |
| [src/lib/home-content.test.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.test.ts) | ✅ OK | 0 |
| [src/lib/home-editorial-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.ts) | ✅ OK | 0 |
| [src/lib/home-editorial-content.json](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.json) | ✅ OK | 0 |
| [src/lib/home-editorial-content.test.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.test.ts) | ✅ OK | 0 |

## Problemas Encontrados

### 🔴 Problemas Críticos

Nenhum problema crítico encontrado.

### 🟡 Problemas Major

Nenhum problema major encontrado.

### 🟢 Problemas Minor

Nenhum problema minor encontrado.

## ✅ Destaques Positivos

- O contrato da home ficou mais expressivo e preparado para a próxima composição, com `hero.highlights`, `support.notice`, `support.channels`, `support.ctas` e `closing.trails` centralizados em [src/lib/home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts#L97).
- Os guards editoriais foram simplificados para receber a seção completa, o que deixa a API mais coerente com a estrutura serializável do JSON e reduz o acoplamento a arrays soltos em [src/lib/home-editorial-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.ts#L27).
- Os testes refletem bem o novo contrato e cobrem tanto listas vazias quanto listas com conteúdo real, inclusive a verificação do novo formato em [src/lib/home-editorial-content.test.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.test.ts#L7) e [src/lib/home-content.test.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.test.ts#L3).
- O conteúdo editorial permaneceu serializável e local, com ajustes leves de copy em [src/lib/home-editorial-content.json](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.json#L2).

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

1. Na próxima task, consumir os novos campos de `homeContent` na composição visual da home e manter testes de integração da página para garantir que os contratos ampliados sejam efetivamente renderizados.

## Veredito

**APROVADO.** A implementação atende ao escopo da task 3.0, preserva a compatibilidade com a home atual e prepara os contratos locais para a próxima etapa da landing sem criar regressões relevantes.  
Validações consideradas: `npm test -- src/lib/home-content.test.ts src/lib/home-editorial-content.test.ts src/components/home/HomeSections.test.tsx src/app/page.test.tsx` reportado como bem-sucedido, além da confirmação local de `npm run lint` e `npm run build`.
