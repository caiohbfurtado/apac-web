# Tarefa 6.0: Implementar patrocinadores e apoiadores com exibição opcional

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Criar o bloco de patrocinadores e apoiadores da home como prova social institucional simples, com suporte a conteúdo inicial reduzido e placeholders de marca enquanto os assets definitivos não existirem.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `ui-craft`
- `tailwindcss`
- `web-design-guidelines`
</skills>

<requirements>
- Implementar `SponsorsSection` ou composição equivalente alimentada por conteúdo local serializável.
- Renderizar a seção apenas quando houver itens em `sponsors`.
- Permitir conteúdo mínimo por item, como nome, descrição curta, link e placeholder de imagem ou marca.
- Garantir tom institucional e prova social sem parecer grade promocional genérica.
- Manter comportamento visual equilibrado mesmo com poucos patrocinadores ou lista vazia.
</requirements>

## Subtarefas

- [ ] 6.1 Construir a seção de patrocinadores com base na estrutura de dados editorial definida.
- [ ] 6.2 Implementar estados com poucos itens, muitos itens e lista vazia.
- [ ] 6.3 Reservar espaço coerente para logos ou placeholders sem prejudicar legibilidade.
- [ ] 6.4 Revisar o papel da seção dentro da narrativa de confiança institucional da home.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Interfaces Principais`
- `Estratégia de Conteúdo e UX`
- `SEO, Performance e Qualidade`
- `Riscos Conhecidos`

## Critérios de Sucesso

- A home ganha uma camada adicional de credibilidade institucional por prova social.
- A seção continua útil mesmo com conteúdo parcial ou provisório.
- A ausência do bloco não quebra a composição geral da página.

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
