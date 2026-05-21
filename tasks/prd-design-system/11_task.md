# Tarefa 11.0: Reescrever a home usando o design system

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Refazer `app/page.tsx` para que a home institucional passe a consumir apenas a camada do design system, validando na prática a cobertura funcional dos componentes criados.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `ui-craft`
- `next-best-practices`
- `vercel-composition-patterns`
</skills>

<requirements>
- Reescrever a home removendo o conteúdo padrão do template do Next.
- Compor hero, blocos institucionais, apoio, campanhas, confiança e fechamento usando apenas components e primitives do sistema.
- Manter conteúdo em estrutura serializável local quando fizer sentido.
- Garantir landmarks, headings, CTAs principais e boa experiência mobile-first.
- Remover os playgrounds temporários da home (ex.: playground de botões e os playgrounds adicionados nas tasks 7–9) e migrar toda a validação detalhada de variantes/estados para a rota `/design-system`.
- Cobrir a composição da home com testes de presença das regiões e CTAs principais.
</requirements>

## Subtarefas

- [ ] 11.1 Estruturar o conteúdo da home em formato reutilizável e local.
- [ ] 11.2 Compor a landing com `HeaderNav`, `Section`, `Card`, `Badge`, botões, campos e `Footer`.
- [ ] 11.3 Validar semântica, hierarquia e experiência mobile-first da página.
- [ ] 11.4 Migrar playgrounds da home para `/design-system` e remover da home.
- [ ] 11.5 Escrever testes cobrindo headings, CTAs e landmarks principais da home.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Design de Implementação`
- `Estrutura de Rotas e Seções`
- `Estratégia de Conteúdo e UX`
- `Abordagem de Testes`

## Critérios de Sucesso

- A home passa a ser a primeira consumidora real e completa do design system.
- O estado inicial do app é substituído por uma landing institucional coerente.
- Os componentes ganham validação prática em cenário de uso real.
- A home deixa de ser vitrine técnica de variantes; `/design-system` passa a ser a superfície central do playground.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [app/page.tsx](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)
- [lib](/Users/caiobarutti/Documents/www/apac-web/lib)
