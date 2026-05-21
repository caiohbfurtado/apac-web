# Tarefa 2.0: Reestruturar a home em seções compostas

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Reorganizar a home da rota raiz em seções compostas menores e com responsabilidades claras, preservando a página única com âncoras e a abordagem mobile-first definida para o projeto.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `ui-craft`
- `next-best-practices`
- `vercel-composition-patterns`
- `vercel-react-best-practices`
</skills>

<requirements>
- Refatorar `src/app/page.tsx` para compor a narrativa da home com seções específicas, sem criar novas rotas.
- Manter Server Components por padrão e limitar boundaries client-side ao que já é justificado por estado de interface.
- Garantir landmarks, headings e IDs de âncora coerentes com a nova IA da página.
- Preservar escaneabilidade e ritmo visual em mobile e desktop.
- Evitar inflar APIs das primitives base existentes ao montar as novas composições.
</requirements>

## Subtarefas

- [ ] 2.1 Definir a ordem final das seções e sua responsabilidade narrativa na rota raiz.
- [ ] 2.2 Extrair ou compor blocos específicos da home a partir de `page.tsx`, mantendo coesão e baixo acoplamento.
- [ ] 2.3 Garantir IDs de âncora, landmarks e hierarquia de headings sem saltos problemáticos.
- [ ] 2.4 Validar que a página continua funcional mesmo antes da entrada de campanhas e patrocinadores.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Arquitetura do Sistema`
- `Design de Implementação`
- `Estrutura de Rotas e Seções`
- `Sequenciamento de Desenvolvimento`

## Critérios de Sucesso

- A home deixa de depender de uma composição longa e pouco modular em um único arquivo.
- Cada seção passa a ter responsabilidade clara dentro da narrativa one-page.
- A rota raiz permanece simples, sem regressões estruturais nem criação de páginas fora do escopo.

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
- [globals.css](/Users/caiobarutti/Documents/www/apac-web/src/app/globals.css)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
