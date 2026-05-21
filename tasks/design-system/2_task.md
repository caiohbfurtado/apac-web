# Tarefa 2.0: Criar primitives de layout

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Construir as primitives de layout que sustentam a composição do design system: `Container`, `Stack` e `Section`, com foco em semântica, responsividade e redução de repetição de classes no app.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `tailwindcss`
- `vercel-composition-patterns`
- `next-best-practices`
</skills>

<requirements>
- Criar `Container` com controle de largura, gutter e elemento semântico configurável.
- Criar `Stack` para organizar espaçamento vertical e horizontal de forma previsível.
- Criar `Section` com suporte a `id`, variações de superfície, densidade e heading opcional.
- Garantir que essas primitives funcionem primeiro em mobile e escalen para breakpoints maiores.
- Cobrir renderização semântica e variantes principais com testes unitários e de composição.
</requirements>

## Subtarefas

- [ ] 2.1 Implementar `Container` com API simples e previsível.
- [ ] 2.2 Implementar `Stack` para fluxos verticais e horizontais recorrentes.
- [ ] 2.3 Implementar `Section` como wrapper semântico reutilizável para blocos da landing.
- [ ] 2.4 Escrever testes cobrindo semântica, variantes e composição básica dessas primitives.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Design de Implementação`
- `Interfaces Principais`
- `Abordagem de Testes`

## Critérios de Sucesso

- As páginas do projeto passam a ter uma base de layout reutilizável e coerente.
- O uso de classes estruturais repetidas é reduzido.
- As primitives já podem sustentar showcase e home nas tasks seguintes.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system-do-site-apac/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system-do-site-apac/techspec.md)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)
- [lib](/Users/caiobarutti/Documents/www/apac-web/lib)
