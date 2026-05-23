# Tarefa 5.0: Integrar a nova narrativa na rota `/`

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Atualizar `src/app/page.tsx` para integrar a nova composição da landing institucional na rota raiz, preservando a arquitetura com App Router, Server Components por padrão e navegação one-page funcional.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `next-best-practices`
- `vercel-react-best-practices`
</skills>

<requirements>
- Manter a implementação restrita à rota `/`.
- Preservar composição baseada em conteúdo local.
- Garantir que âncoras, seções opcionais e ordem narrativa funcionem corretamente.
- Não introduzir Client Components desnecessários.
</requirements>

## Subtarefas

- [x] 5.1 Integrar a composição refatorada da home em `src/app/page.tsx`.
- [x] 5.2 Garantir que a página continue montando corretamente campanhas e apoiadores apenas quando houver conteúdo.
- [x] 5.3 Revisar a experiência final da rota `/` com foco em estabilidade estrutural, landmarks e continuidade narrativa.

## Detalhes de Implementação

Referenciar `techspec.md`, especialmente:
- `Resumo Executivo`
- `Arquitetura do Sistema`
- `Design de Implementação > Estrutura de Rotas e Seções`
- `Sequenciamento de Desenvolvimento > Ordem de Construção`

## Critérios de Sucesso

- A rota `/` entrega a nova landing de forma coesa e sustentável.
- A composição final respeita a arquitetura existente do projeto.
- A navegação one-page funciona com seções e âncoras corretas.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Atualização dos testes de `src/app/page.test.tsx`, se aplicável
- [x] Testes E2E (não aplicável nesta fase, conforme `techspec.md`)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `src/app/page.tsx`
- `src/app/page.test.tsx`
