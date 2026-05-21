# Tarefa 10.0: Montar a página de showcase do design system

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Criar a rota `/design-system` como vitrine viva do sistema, agregando tema, primitives e componentes em estados representativos para validação visual, manual e automatizada.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `ui-craft`
- `next-best-practices`
- `vercel-react-best-practices`
</skills>

<requirements>
- Criar `app/design-system/page.tsx` como página interna de showcase.
- Agregar todos os componentes já implementados com seus estados e combinações aprovadas.
- Organizar a vitrine por grupos claros para facilitar validação por humanos e agentes.
- Reutilizar fixtures ou dados locais serializáveis para evitar duplicação.
- Cobrir renderização da página e presença dos grupos esperados com testes de composição.
</requirements>

## Subtarefas

- [ ] 10.1 Criar a estrutura da rota `/design-system`.
- [ ] 10.2 Adicionar seções para primitives, ações, superfícies, formulários e navegação.
- [ ] 10.3 Centralizar fixtures de showcase e testes quando necessário.
- [ ] 10.4 Escrever testes que garantam a presença dos grupos e estados principais.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Design de Implementação`
- `Estrutura de Rotas e Seções`
- `Abordagem de Testes`
- `Riscos Conhecidos`

## Critérios de Sucesso

- O projeto passa a ter uma superfície dedicada para validar visual e comportamento do design system.
- Todos os componentes implementados até aqui ficam agregados em uma única página de referência.
- A showcase se torna critério concreto para revisão nas tasks seguintes.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [app/design-system](/Users/caiobarutti/Documents/www/apac-web/app/design-system)
- [lib](/Users/caiobarutti/Documents/www/apac-web/lib)