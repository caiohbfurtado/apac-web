# Checks de Qualidade

## Checks Atuais do Projeto

Rode estes checks antes de concluir uma tarefa que altere código:

- `npm run lint`
- `npm run build`

Observação operacional:

- Neste ambiente, `npm run build` pode exigir execução com permissão ampliada quando rodado por agentes, porque o build padrão do Next.js 16 com Turbopack pode falhar no sandbox por limitação do ambiente
- Se isso acontecer, rerode o mesmo comando com escalonamento antes de concluir que há um bug real no app

## TypeScript

Hoje o projeto não expõe um script `typecheck` no `package.json`.

- Quando precisar validar tipos explicitamente, use `npx tsc --noEmit`
- Se um script `typecheck` for adicionado no futuro, prefira o script oficial

## Testes

- O projeto agora expõe `npm test` para rodar a suíte com `Jest` e `React Testing Library`

- Não invente comandos de teste inexistentes
- Se a tarefa incluir criar infraestrutura de testes, documente os comandos adicionados no `AGENTS.md` e neste arquivo
- Quando não houver teste aplicável, diga isso explicitamente no fechamento da tarefa

## Critérios de Entrega

- A solução deve respeitar lint e build
- O código deve seguir as convenções do Next.js e da stack atual
- Evite “consertos” locais que mascaram a causa do problema
