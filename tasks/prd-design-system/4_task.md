# Tarefa 4.0: Criar componente de ação

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Implementar a família de botões do design system com variantes explícitas, priorizando clareza de uso, semântica correta e aderência à estratégia de CTAs do site.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `tailwindcss`
- `vercel-composition-patterns`
- `vercel-react-best-practices`
</skills>

<requirements>
- Criar `Button` base e expor variantes por componentes explícitos.
- Implementar pelo menos `PrimaryButton`, `SecondaryButton` e `WhatsAppButton`.
- Suportar uso como link ou ação sem proliferar booleans e condicionais frágeis.
- Garantir estados de hover, foco e disabled coerentes com os tokens do tema.
- Cobrir semântica, variantes e interações principais com testes.
</requirements>

## Subtarefas

- [x] 4.1 Implementar a camada base da família de botões.
- [x] 4.2 Expor variantes explícitas alinhadas aos CTAs do PRD e da home.
- [x] 4.3 Validar estados interativos, foco visível e legibilidade em mobile.
- [x] 4.4 Escrever testes para semântica, variantes e comportamento principal.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Interfaces Principais`
- `Estratégia de Conteúdo e UX`
- `Abordagem de Testes`

## Critérios de Sucesso

- O design system passa a ter CTAs reutilizáveis e previsíveis para campanhas e páginas institucionais.
- O uso de variantes fica explícito e fácil para desenvolvedores e agentes.
- Os botões já podem ser usados na showcase e na home sem customização local.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system-do-site-apac/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system-do-site-apac/techspec.md)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)
