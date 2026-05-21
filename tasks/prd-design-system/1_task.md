# Tarefa 1.0: Fundar o tema e a infraestrutura base

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Instalar a fundação do design system dentro do app atual, criando o eixo de tokens globais, ajustando a base institucional do layout e preparando a infraestrutura mínima de testes para sustentar as próximas tasks.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `tailwindcss`
- `next-best-practices`
- `vercel-react-best-practices`
</skills>

<requirements>
- Implementar tokens de tema em `app/globals.css` para cor, tipografia, espaçamento, raio, sombra e motion.
- Atualizar `app/layout.tsx` com `lang`, metadata institucional, fontes e classes globais do sistema.
- Remover traços residuais do template padrão do Next que conflitem com a base visual do design system.
- Configurar infraestrutura de testes com `Jest`, `jest-environment-jsdom`, `@testing-library/react` e `@testing-library/jest-dom`.
- Garantir que a base criada seja compatível com abordagem mobile-first e sem dark mode.
</requirements>

## Subtarefas

- [x] 1.1 Definir os tokens globais e convenções de tema em `app/globals.css`.
- [x] 1.2 Atualizar `app/layout.tsx` com metadata, idioma, fontes e base institucional.
- [x] 1.3 Configurar arquivos e utilitários iniciais da suíte de testes.
- [x] 1.4 Validar se a fundação permite evolução incremental sem dependência de biblioteca externa de UI.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Design de Implementação`
- `Abordagem de Testes`
- `Sequenciamento de Desenvolvimento`
- `SEO, Performance e Qualidade`

## Critérios de Sucesso

- O projeto passa a ter um tema centralizado e institucionalizado como fonte única de decisão visual.
- O layout raiz deixa de refletir o estado inicial do template e passa a servir o design system.
- A suíte de testes fica pronta para receber testes de primitives, componentes e páginas nas próximas tasks.
- O projeto passa a ter `DESIGN.md` como fonte de verdade de design para evolução futura do sistema.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [app/layout.tsx](/Users/caiobarutti/Documents/www/apac-web/app/layout.tsx)
- [app/globals.css](/Users/caiobarutti/Documents/www/apac-web/app/globals.css)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
- [package.json](/Users/caiobarutti/Documents/www/apac-web/package.json)
