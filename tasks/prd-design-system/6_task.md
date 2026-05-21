# Tarefa 6.0: Criar componentes de apoio visual

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Criar `Badge` e `Card` como componentes de apoio visual e composição de conteúdo, atendendo categorias, blocos institucionais, destaques editoriais e agrupamentos recorrentes da interface.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `tailwindcss`
- `ui-craft`
- `vercel-composition-patterns`
</skills>

<requirements>
- Criar `Badge` para selos curtos, categorias e estados editoriais.
- Criar `Card` com slots simples para ícone, título, descrição e ação.
- Garantir variações de superfície, padding e modo interativo quando aplicável.
- Fazer os componentes consumirem tokens e funcionarem bem em grids mobile-first.
- Cobrir variantes e composição com testes unitários.
</requirements>

## Subtarefas

- [ ] 6.1 Implementar `Badge` com tons adequados ao sistema institucional.
- [ ] 6.2 Implementar `Card` como base de superfície reutilizável para blocos de conteúdo.
- [ ] 6.3 Validar composição com tipografia, botões e seções.
- [ ] 6.4 Escrever testes de variantes, estrutura e estados interativos.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Interfaces Principais`
- `Estrutura de Rotas e Seções`
- `Abordagem de Testes`

## Critérios de Sucesso

- O sistema passa a suportar blocos de conteúdo reutilizáveis sem layout ad hoc.
- `Badge` e `Card` funcionam juntos e com as primitives já implementadas.
- A base fica pronta para uso em showcase, home e futuras seções de campanha.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)