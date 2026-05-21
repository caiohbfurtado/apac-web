# Tarefa 5.0: Realinhar base visual e tokens ao novo padrão

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Revisar o que já foi construído até aqui e alinhar tema, tokens, documentos e componentes base ao novo board de referência visual antes de continuar com novas superfícies e fluxos.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `ui-craft`
- `tailwindcss`
- `next-best-practices`
- `vercel-react-best-practices`
</skills>

<requirements>
- Revisar `app/globals.css` para garantir que cor, tipografia, spacing, radius, shadow e motion sigam a referência nova.
- Atualizar `DESIGN.md` e demais documentos de design para tratar `tasks/design-system-reference.png` como fonte visual oficial.
- Ajustar primitives e componentes base já criados para remover qualquer divergência da nova paleta e escala.
- Validar que a base realinhada continua mobile-first, acessível e coerente com o sistema de tokens.
- Cobrir o alinhamento com testes unitários e de composição relevantes.
</requirements>

## Subtarefas

- [x] 5.1 Auditar tokens, cores, tipografia, raio e sombras contra o board novo.
- [x] 5.2 Atualizar documentação de design e referências do sistema visual.
- [x] 5.3 Revisar componentes e primitives já entregues para remover desvios visuais.
- [x] 5.4 Escrever testes ou checks de composição para confirmar o realinhamento.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Resumo Executivo`
- `Arquitetura do Sistema`
- `Design de Implementação`
- `Estratégia de Conteúdo e UX`
- `Abordagem de Testes`
- `Considerações Técnicas`

## Critérios de Sucesso

- O sistema visual já implementado fica aderente ao novo board de referência.
- Os tokens e a documentação passam a apontar para a mesma fonte visual.
- As tasks seguintes podem continuar a construção sem carregar o padrão antigo.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [tasks/design-system-reference.png](/Users/caiobarutti/Documents/www/apac-web/tasks/design-system-reference.png)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)