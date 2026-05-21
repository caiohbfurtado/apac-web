# Tarefa 5.0: Implementar campanhas em destaque com exibição opcional

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Adicionar à home um bloco editorial de campanhas em destaque que possa aparecer ou desaparecer de forma limpa conforme o conteúdo local disponível, sem depender de automação ou sistema de eventos.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `frontend-design`
- `ui-craft`
- `tailwindcss`
- `next-best-practices`
</skills>

<requirements>
- Implementar `CampaignsSection` ou composição equivalente alimentada por conteúdo local serializável.
- Renderizar a seção apenas quando houver itens em `campaigns`.
- Permitir edição manual simples de título, descrição, badge e links de campanha.
- Garantir que a ausência da seção não deixe headings órfãos, vazios visuais ou quebras de ritmo.
- Preservar leveza visual e clareza editorial, sem parecer calendário ou sistema de eventos.
</requirements>

## Subtarefas

- [ ] 5.1 Construir a seção de campanhas usando a estrutura de dados definida na task 1.0.
- [ ] 5.2 Implementar renderização condicional para cenários com e sem campanhas.
- [ ] 5.3 Garantir que os cards ou blocos de campanha tenham CTA e hierarquia de leitura claros.
- [ ] 5.4 Revisar espaçamento e transição visual da página quando a seção estiver ausente.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Interfaces Principais`
- `Estratégia de Conteúdo e UX`
- `Abordagem de Testes`
- `Riscos Conhecidos`

## Critérios de Sucesso

- A home passa a suportar campanhas sazonais de forma manual e leve.
- A seção opcional aparece apenas quando houver conteúdo real disponível.
- O fluxo da página continua sólido tanto com quanto sem campanhas.

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
