# Tarefa 3.0: Criar primitives tipográficas

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Criar `Heading` e `Text` como primitives tipográficas do sistema, consolidando hierarquia visual, tons e tamanhos consistentes para páginas institucionais, campanhas e blocos de conteúdo.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `tailwindcss`
- `ui-craft`
- `vercel-composition-patterns`
</skills>

<requirements>
- Criar `Heading` com `as`, `size` e `tone` coerentes com a hierarquia editorial do site.
- Criar `Text` com API equivalente para corpo, apoio e conteúdo auxiliar.
- Fazer ambos consumirem exclusivamente tokens do tema.
- Garantir acessibilidade semântica com headings reais e contraste adequado.
- Cobrir renderização, variantes e semântica com testes.
</requirements>

## Subtarefas

- [x] 3.1 Implementar `Heading` com níveis e variações necessárias para a landing e showcase.
- [x] 3.2 Implementar `Text` para suportar conteúdo institucional, descrições e microcopy.
- [x] 3.3 Validar coerência visual e semântica entre os componentes tipográficos.
- [x] 3.4 Escrever testes de hierarquia, variantes e acessibilidade básica.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Interfaces Principais`
- `Estratégia de Conteúdo e UX`
- `Abordagem de Testes`

## Critérios de Sucesso

- O sistema passa a ter hierarquia tipográfica previsível e reutilizável.
- Novas telas conseguem expressar títulos, textos de apoio e corpo sem decisões ad hoc.
- Os componentes ficam prontos para composição com `Section`, `Card` e `Footer`.

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
