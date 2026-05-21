# Tarefa 7.0: Ajustar navegação e rodapé para a nova arquitetura

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Ajustar os componentes institucionais de navegação e rodapé para refletirem a nova arquitetura de seções da home, reforçando orientação, consistência de links e confiança.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `frontend-design`
- `ui-craft`
- `web-design-guidelines`
- `next-best-practices`
</skills>

<requirements>
- Atualizar `HeaderNav` e `HeaderNavMobileMenu` com as novas âncoras e o CTA principal da home.
- Ajustar o `Footer` para reforçar caminhos institucionais e consistência com a nova narrativa.
- Garantir que links internos apontem para IDs existentes na página.
- Preservar navegação por teclado, foco visível e clareza em mobile e desktop.
- Evitar duplicação confusa de ações prioritárias entre topo, conteúdo e rodapé.
</requirements>

## Subtarefas

- [x] 7.1 Revisar e atualizar a arquitetura de links do header desktop e do menu mobile.
- [x] 7.2 Garantir que a CTA principal do topo reflita a prioridade editorial da nova home.
- [x] 7.3 Ajustar o rodapé para espelhar os caminhos institucionais e reforçar confiança.
- [x] 7.4 Validar consistência entre âncoras, foco, ordem de tabulação e leitura.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Visão Geral dos Componentes`
- `Estrutura de Rotas e Seções`
- `Abordagem de Testes`

## Critérios de Sucesso

- A navegação da home passa a refletir fielmente a nova estrutura de seções.
- O header e o rodapé reforçam os caminhos prioritários sem adicionar ruído.
- A experiência de navegação continua clara e acessível em todos os breakpoints.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Testes de componente ou composição, se aplicável
- [x] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/techspec.md)
- [HeaderNav.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNav.tsx)
- [HeaderNavMobileMenu.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNavMobileMenu.tsx)
- [Footer.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/Footer.tsx)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
