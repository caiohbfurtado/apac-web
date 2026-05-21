# Tarefa 1.0: Modelar a camada de conteúdo da home

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Preparar a base editorial da home separando o conteúdo institucional fixo das listas opcionais de campanhas e patrocinadores, de modo que a página possa crescer sem voltar a um objeto monolítico difícil de manter.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `next-best-practices`
- `vercel-react-best-practices`
</skills>

<requirements>
- Refinar `src/lib/home-content.ts` para concentrar textos institucionais, CTAs globais e conteúdo sempre presente da home.
- Criar um arquivo serializável local para campanhas e patrocinadores, em JSON ou módulo equivalente, com arrays independentes e opcionais.
- Garantir que a estrutura dos dados permita renderização condicional simples para seções opcionais.
- Evitar fetch, CMS, automação ou qualquer dependência externa nesta camada.
- Manter a solução clara para edição manual por pessoas não técnicas ou com pouca familiaridade com o código.
</requirements>

## Subtarefas

- [x] 1.1 Revisar o conteúdo atual da home e separar o que é fixo do que é editorial e opcional.
- [x] 1.2 Definir a estrutura local de `campaigns` e `sponsors` com tipagem e campos coerentes com a tech spec.
- [x] 1.3 Ajustar `home-content.ts` e o novo arquivo de dados para reduzir acoplamento com `page.tsx`.
- [x] 1.4 Validar que arrays vazios podem ser consumidos sem gerar fallback visual artificial.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Resumo Executivo`
- `Arquitetura do Sistema`
- `Design de Implementação`
- `Considerações Técnicas`

## Critérios de Sucesso

- O conteúdo da home fica organizado em estruturas locais simples, separando base institucional de blocos editoriais opcionais.
- A futura renderização condicional de campanhas e patrocinadores passa a depender apenas da presença de itens nas listas.
- A camada de conteúdo fica mais clara para manutenção manual sem introduzir complexidade desnecessária.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/techspec.md)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
- [home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts)
