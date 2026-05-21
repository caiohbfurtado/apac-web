# Tarefa 6.0: Criar componentes de formulário

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Implementar `Field`, `Input` e `Textarea` como primitives de formulário do design system, cobrindo estados de foco, ajuda e erro de forma acessível e consistente.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `tailwindcss`
- `vercel-react-best-practices`
- `web-design-guidelines`
</skills>

<requirements>
- Criar `Field` para encapsular label, hint, error e obrigatoriedade.
- Criar `Input` e `Textarea` com props nativas tipadas e classes derivadas de tokens.
- Garantir associação acessível entre label, campo, hint e erro.
- Implementar estados visuais previsíveis sem depender só de cor.
- Cobrir os fluxos principais com testes de acessibilidade e composição.
</requirements>

## Subtarefas

- [ ] 6.1 Implementar `Field` como primitive de contexto para formulários.
- [ ] 6.2 Implementar `Input` com foco em uso institucional simples.
- [ ] 6.3 Implementar `Textarea` para mensagens e descrições mais longas.
- [ ] 6.4 Escrever testes cobrindo label, hint, error, foco e associação semântica.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Interfaces Principais`
- `Estratégia de Conteúdo e UX`
- `Abordagem de Testes`

## Critérios de Sucesso

- O design system passa a oferecer base acessível para formulários e estados de feedback.
- Os campos funcionam de forma consistente em isolamento e dentro de seções.
- Os componentes ficam prontos para a vitrine e para o formulário estrutural da home.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system-do-site-apac/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system-do-site-apac/techspec.md)
- [components](/Users/caiobarutti/Documents/www/apac-web/components)
