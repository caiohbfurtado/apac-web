# Tarefa 8.0: Criar componentes de navegação institucional

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Construir `HeaderNav` e o menu mobile institucional, garantindo landmarks claros, navegação responsiva e isolamento de client-side apenas onde houver interação real.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `next-best-practices`
- `vercel-react-best-practices`
- `web-design-guidelines`
</skills>

<requirements>
- Criar `HeaderNav` com experiência desktop e mobile coerente.
- Implementar menu mobile com boundary pequena de `use client` apenas se necessário.
- Preservar semântica de navegação, foco visível e usabilidade por teclado.
- Integrar CTAs institucionais primários quando fizer sentido para o cabeçalho.
- Adicionar um playground na home (`app/page.tsx`) para validar a navegação desktop/mobile e estados interativos (menu aberto/fechado, foco por teclado).
- Cobrir navegação desktop/mobile e comportamento interativo com testes.
</requirements>

## Subtarefas

- [ ] 8.1 Implementar estrutura desktop da navegação institucional.
- [ ] 8.2 Implementar a versão mobile com interação acessível.
- [ ] 8.3 Validar landmarks, tab order e estados de foco.
- [ ] 8.4 Adicionar playground na home com `HeaderNav` em contexto real.
- [ ] 8.5 Escrever testes de composição e interação do menu mobile, se houver client-side.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Estrutura de Rotas e Seções`
- `Abordagem de Testes`
- `Considerações Técnicas`

## Critérios de Sucesso

- O site passa a ter uma navegação institucional consistente e preparada para mobile-first.
- O client-side fica restrito ao mínimo necessário.
- O cabeçalho fica pronto para reuso na home e em futuras páginas institucionais.
- A home fornece uma superfície rápida para validar manualmente navegação e interações durante o ciclo, antes da criação da showcase final.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [app/page.tsx](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)
