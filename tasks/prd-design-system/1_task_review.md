# Review: Task 1.0 - Fundar o tema e a infraestrutura base

**Revisor**: AI Code Reviewer
**Data**: 2026-05-21
**Arquivo da task**: 1_task.md
**Status**: MUDANÇAS SOLICITADAS

## Resumo

A implementação instala uma boa base inicial de tokens, limpa o template padrão do Next e adiciona a infraestrutura mínima de testes com `Jest` + `React Testing Library`. Os checks de `npm test`, `npm run lint` e `npx tsc --noEmit` passaram no sandbox, e o `npm run build` falhou apenas pela limitação operacional já conhecida do Turbopack no sandbox ao processar CSS.

Mesmo assim, a task ainda tem lacunas relevantes de aderência ao spec e de preparação para as próximas etapas do design system. Os pontos mais importantes são a ausência de uma solução de fontes alinhada ao requisito da task/tech spec, o escopo atual do scan do Tailwind restrito a `app/`, que impede a evolução planejada em `components/` e `lib/`, e um CTA externo temporário que hoje leva o usuário para a homepage pública do WhatsApp em vez de um canal institucional real.

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| `app/globals.css` | ⚠️ Problemas | 1 |
| `app/layout.tsx` | ⚠️ Problemas | 1 |
| `app/page.tsx` | ⚠️ Problemas | 1 |
| `jest.config.ts` | ✅ OK | 0 |
| `jest.setup.ts` | ✅ OK | 0 |
| `test/test-utils.tsx` | ✅ OK | 0 |
| `app/layout.test.tsx` | ⚠️ Problemas | 1 |
| `app/page.test.tsx` | ⚠️ Problemas | 1 |
| `AGENTS.md` | ✅ OK | 0 |
| `.agents/project/quality.md` | ✅ OK | 0 |
| `package.json` | ✅ OK | 0 |

## Problemas Encontrados

### 🔴 Problemas Críticos

Nenhum problema crítico encontrado.

### 🟡 Problemas Major

1. **`app/globals.css:1` restringe o scan do Tailwind apenas a `app/`, contrariando a arquitetura planejada para o design system**
   - **Impacto**: a task 1.0 afirma preparar a base para evolução incremental, mas o `techspec.md` prevê componentes em `components/ui/*`, `components/layout/*` e helpers em `lib/design-system/*`. Com `@import "tailwindcss" source("../app");`, classes utilitárias usadas fora de `app/` não entram na geração de CSS, o que quebra silenciosamente as próximas tasks quando primitives e componentes forem extraídos para essas pastas.
   - **Correção sugerida**: ampliar explicitamente as fontes do Tailwind para incluir pelo menos `app/`, `components/` e `lib/`, usando a sintaxe suportada pelo Tailwind v4 para múltiplas fontes.

2. **`app/layout.tsx:1-35` e `app/globals.css:4-5` não entregam a parte de fontes exigida pela task e pela tech spec**
   - **Impacto**: a task pede “metadata, idioma, fontes e classes globais do sistema”, e o `techspec.md` define “fontes via `next/font`”. A remoção completa de `next/font` sem substituição local faz a base depender de fontes instaladas no dispositivo, reduz consistência tipográfica institucional e pode introduzir diferenças de métrica/CLS entre ambientes. Isso deixa a fundação incompleta exatamente em um dos pilares do sistema visual.
   - **Correção sugerida**: manter a abordagem offline, mas com fontes locais versionadas e carregadas via `next/font/local`, expondo as variáveis nos tokens CSS.

3. **`app/page.tsx:29-35` expõe um CTA institucional que leva para a homepage genérica do WhatsApp**
   - **Impacto**: o texto “Canal de atendimento” comunica um canal oficial da APAC, mas o destino atual (`https://www.whatsapp.com/`) não atende esse propósito e frustra a ação do usuário. Como a página já substitui a home padrão, isso vira comportamento público enganoso, mesmo que temporário.
   - **Correção sugerida**: remover o CTA até existir um destino institucional real, ou apontar para um link de contato válido (`wa.me`, `tel:`, contato interno) claramente aprovado para o projeto.

### 🟢 Problemas Minor

1. **`app/layout.test.tsx:6-19` valida a função do layout por inspeção de props, mas não protege metadata nem a estrutura renderizada final**
   - **Impacto**: o teste passa mesmo se campos importantes de `metadata` forem alterados ou removidos, e não cobre regressões reais da base institucional definida na task.
   - **Correção sugerida**: complementar a suíte com asserts sobre o export `metadata` e, quando fizer sentido, com testes mais próximos da saída renderizada esperada.

2. **`app/page.test.tsx:5-18` cobre apenas o CTA interno e não protege o risco do CTA externo temporário**
   - **Impacto**: a suíte não detectaria uma regressão no principal link de atendimento nem garante que o placeholder temporário permaneça seguro e coerente enquanto a home institucional definitiva não existe.
   - **Correção sugerida**: adicionar asserts para o segundo CTA, incluindo destino e rótulo, ou removê-lo da página até o destino existir.

## ✅ Destaques Positivos

- A limpeza do template padrão do Next foi objetiva e removeu ruídos visuais relevantes para a fundação do design system.
- Os tokens em `app/globals.css` já cobrem cor, tipografia, raio, sombra e motion, alinhando bem a base com a proposta mobile-first e sem dark mode.
- A infraestrutura de testes foi adicionada de forma enxuta e coerente com a stack atual, sem introduzir dependências excessivas.
- A documentação operacional foi atualizada para refletir `npm test`, o que melhora o fluxo das próximas tasks.

## Conformidade com Padrões

| Padrão | Status |
|--------|--------|
| Requisitos da Task | ⚠️ |
| Padrões de Código | ✅ |
| Next.js / App Router | ⚠️ |
| React / TypeScript | ✅ |
| UI / Acessibilidade / Responsividade | ⚠️ |
| Validação (`lint` / `build` / tipos / testes) | ⚠️ |

## Recomendações

1. Corrigir imediatamente o escopo de source do Tailwind para não bloquear a extração de primitives e componentes nas próximas tasks.
2. Reintroduzir a estratégia de fontes com assets locais e `next/font/local`, preservando o requisito offline sem abrir mão da consistência tipográfica.
3. Remover ou corrigir o CTA de atendimento antes de considerar a home temporária segura como substituta pública do template padrão.
4. Fortalecer os testes da fundação com cobertura explícita para `metadata` e para os links/CTAs exibidos na página temporária.

## Veredito

A task está próxima do objetivo, mas ainda não considero seguro aprová-la como concluída. Há boa direção de base, porém a fundação ainda deixa um requisito incompleto (fontes), um risco funcional visível ao usuário (CTA externo inadequado) e um bloqueio técnico para a evolução prevista do design system (scan do Tailwind limitado a `app/`). Depois desses ajustes, a revisão tende a ficar em condição de aprovação.
