# Checks de Qualidade

## Checks Atuais do Projeto

Rode estes checks antes de concluir uma tarefa que altere código:

- `npm run lint`
- `npm run build`

## TypeScript

Hoje o projeto não expõe um script `typecheck` no `package.json`.

- Quando precisar validar tipos explicitamente, use `npx tsc --noEmit`
- Se um script `typecheck` for adicionado no futuro, prefira o script oficial

## Testes

No estado atual, o repositório não expõe script de testes automatizados.

- Não invente comandos de teste inexistentes
- Se a tarefa incluir criar infraestrutura de testes, documente os comandos adicionados no `AGENTS.md` e neste arquivo
- Quando não houver teste aplicável, diga isso explicitamente no fechamento da tarefa

## Critérios de Entrega

- A solução deve respeitar lint e build
- O código deve seguir as convenções do Next.js e da stack atual
- Evite “consertos” locais que mascaram a causa do problema
