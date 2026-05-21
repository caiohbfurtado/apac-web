# Tarefa 11.0: Reescrever a home usando o design system

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se voce nao ler esses arquivos sua tarefa sera invalidada</critical>

## Visao Geral

Refazer `app/page.tsx` para que a home institucional passe a consumir apenas a camada do design system, validando na pratica a cobertura funcional dos componentes criados.

<skills>
### Conformidade com Skills Padroes

- `brainstorming`
- `ui-craft`
- `next-best-practices`
- `vercel-composition-patterns`
</skills>

<requirements>
- Reescrever a home removendo o conteudo padrao do template do Next.
- Compor hero, blocos institucionais, apoio, campanhas, confianca e fechamento usando apenas components e primitives do sistema.
- Manter conteudo em estrutura serializavel local quando fizer sentido.
- Garantir landmarks, headings, CTAs principais e boa experiencia mobile-first.
- Remover os playgrounds temporarios da home (ex.: playground de botoes e os playgrounds adicionados nas tasks 7–9) e migrar toda a validacao detalhada de variantes/estados para a rota `/design-system`.
- Cobrir a composicao da home com testes de presenca das regioes e CTAs principais.
</requirements>

## Subtarefas

- [x] 11.1 Estruturar o conteudo da home em formato reutilizavel e local.
- [x] 11.2 Compor a landing com `HeaderNav`, `Section`, `Card`, `Badge`, botoes, campos e `Footer`.
- [x] 11.3 Validar semantica, hierarquia e experiencia mobile-first da pagina.
- [x] 11.4 Migrar playgrounds da home para `/design-system` e remover da home.
- [x] 11.5 Escrever testes cobrindo headings, CTAs e landmarks principais da home.

## Detalhes de Implementacao

Referenciar no `techspec.md` as secoes:
- `Design de Implementacao`
- `Estrutura de Rotas e Secoes`
- `Estrategia de Conteudo e UX`
- `Abordagem de Testes`

## Criterios de Sucesso

- A home passa a ser a primeira consumidora real e completa do design system.
- O estado inicial do app e substituido por uma landing institucional coerente.
- Os componentes ganham validacao pratica em cenario de uso real.
- A home deixa de ser vitrine tecnica de variantes; `/design-system` passa a ser a superficie central do playground.

## Testes da Tarefa

- [x] Validacao com `npm run lint`
- [x] Validacao com `npm run build`
- [x] Testes de componente ou composicao, se aplicavel
- [ ] Testes E2E (se aplicavel)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERA-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [app/page.tsx](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)
- [lib](/Users/caiobarutti/Documents/www/apac-web/lib)
