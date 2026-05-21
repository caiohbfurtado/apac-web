# Review: Task 11.0 - Reescrever a home usando o design system

**Revisor**: AI Code Reviewer  
**Data**: 2026-05-21  
**Arquivo da task**: 11_task.md  
**Status**: APROVADO COM OBSERVAÇÕES

## Resumo

A implementação reescreve a home institucional com consumo de componentes do design system, remove os playgrounds da página inicial, centraliza conteúdo em estrutura serializável local e cobre landmarks/CTAs principais com teste de composição. Não encontrei problemas críticos ou major no escopo revisado.

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| app/page.tsx | ✅ OK | 0 |
| app/page.test.tsx | ✅ OK | 0 |
| lib/home-content.ts | ✅ OK | 0 |
| tasks/prd-design-system/11_task.md | ✅ OK | 0 |

## Problemas Encontrados

### 🔴 Problemas Críticos

Nenhum problema crítico encontrado.

### 🟡 Problemas Major

Nenhum problema major encontrado.

### 🟢 Problemas Minor

1. [app/page.test.tsx:23](/Users/caiobarutti/Documents/www/apac-web/app/page.test.tsx:23)  
   O teste valida o WhatsApp usando índice (`[0]`) em uma coleção de links com mesmo nome acessível, o que reduz clareza e pode fragilizar manutenção se a ordem mudar.  
   Impacto: baixo, apenas robustez de teste.  
   Correção sugerida: filtrar por `href` esperado (ou usar matcher por papel + atributo) sem depender de posição.

## ✅ Destaques Positivos

- [app/page.tsx:19](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx:19) composição da home usando primitives/componentes do sistema, alinhada à task e ao tech spec.
- [lib/home-content.ts:1](/Users/caiobarutti/Documents/www/apac-web/lib/home-content.ts:1) conteúdo serializável e organizado por seções, facilitando evolução futura.
- [app/page.tsx:147](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx:147) configuração explícita de links institucionais no `Footer`, mantendo semântica e navegação coerentes.
- [app/page.test.tsx:8](/Users/caiobarutti/Documents/www/apac-web/app/page.test.tsx:8) cobertura de landmarks (`banner` e `contentinfo`) e ausência dos playgrounds antigos.

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

1. Fortalecer a asserção do link de WhatsApp no teste para evitar dependência de ordem de renderização.
2. Considerar adicionar uma verificação simples de responsividade/composição da hero em teste (ex.: presença simultânea dos CTAs principais) para reduzir risco de regressão visual estrutural.

## Veredito

A task 11.0 está apta para seguir. A implementação cumpre os critérios funcionais definidos e as validações obrigatórias foram confirmadas (`npm run lint` e `npm run build` passaram nesta revisão).
