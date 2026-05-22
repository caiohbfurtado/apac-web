# Review: Task 4 - Refatorar a composição principal das seções da homepage

**Revisor**: AI Code Reviewer
**Data**: 2026-05-22
**Arquivo da task**: 4_task.md
**Status**: APROVADO

## Resumo

A implementação entrega a nova sequência narrativa principal da homepage, adiciona a faixa institucional de destaques, separa `Como ajudar` do fechamento, preserva renderização condicional de campanhas/apoiadores e atualiza testes de composição relevantes. Os findings anteriores foram corrigidos: `Como a APAC ajuda` agora segue fluxo vertical único, `Preciso de apoio` usa composição aberta em rail/lista e o aviso informativo do contato do hero é renderizado.

Após rechecagem focada e validação automatizada, não restam blockers para a task.

## Arquivos Revisados

| Arquivo | Status | Problemas |
|---------|--------|-----------|
| `src/app/page.tsx` | OK | 0 |
| `src/components/home/HomeSections.tsx` | OK | 0 |
| `src/components/home/index.ts` | OK | 0 |
| `src/lib/home-content.ts` | OK | 0 |
| `src/app/page.test.tsx` | OK | 0 |
| `src/components/home/HomeSections.test.tsx` | OK | 0 |
| `src/lib/home-content.test.ts` | OK | 0 |
| `src/components/layout/HeaderNav.tsx` | OK | 0 |
| `src/components/layout/Footer.tsx` | OK | 0 |
| `src/components/layout/HeaderNav.test.tsx` | OK | 0 |
| `src/components/layout/Footer.test.tsx` | OK | 0 |
| `DESIGN.md` | OK | 0 |

## Problemas Encontrados

### Problemas Críticos

Nenhum problema crítico encontrado.

### Problemas Major

Nenhum problema major encontrado.

### Problemas Minor

Nenhum problema minor encontrado.

## Destaques Positivos

- A ordem macro da homepage em `src/app/page.tsx` segue a sequência definida para a task: hero, destaques, atuação, apoio, contribuição, campanhas, transparência, apoiadores e fechamento.
- Campanhas e apoiadores continuam opcionais, com guards retornando `null` quando não há itens.
- A hierarquia principal de CTAs no hero está preservada: `Preciso de apoio`, `Quero ajudar`, `Falar no WhatsApp`.
- `HomeInstitutionSection` está alinhada ao fluxo vertical único documentado no `DESIGN.md`.
- `HomeSupportSection` removeu a moldura geral e usa rail/lista aberta, evitando boxes dentro de boxes.
- O aviso informativo do contato do hero agora é exibido no próprio bloco.
- Os testes cobrem renderização condicional de campanhas/apoiadores, âncoras, CTAs principais e ordem narrativa.
- A implementação manteve Server Components na home e não introduziu dependências ou integrações novas.

## Conformidade com Padrões

| Padrão | Status |
|--------|--------|
| Requisitos da Task | OK |
| Padrões de Código | OK |
| Next.js / App Router | OK |
| React / TypeScript | OK |
| UI / Acessibilidade / Responsividade | OK |
| Validação (`lint` / `build` / tipos / testes) | OK |

## Validações Executadas

- `npm test`: passou, 17 suites e 55 testes.
- `npm run lint`: passou.
- `npm run build`: passou, incluindo TypeScript e geração estática.

## Recomendações

Nenhuma recomendação bloqueante. Manter a atenção em revisão visual manual responsiva quando o Browser in-app estiver disponível, já que a task é fortemente visual.

## Veredito

Aprovado. Os findings críticos para a direção visual foram resolvidos, os checks automatizados passaram e a task está aderente ao PRD, ao tech spec e ao `DESIGN.md`.
