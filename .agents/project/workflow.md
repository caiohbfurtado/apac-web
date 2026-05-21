# Workflow Operacional

## Dependências

- Use `npm install <pacote>` para adicionar dependências
- Não altere versões manualmente sem necessidade clara
- Mantenha `package-lock.json` consistente com mudanças de dependência

## Atualização de Instruções

- Se a stack, scripts ou estrutura do projeto mudarem, atualize `AGENTS.md` e os arquivos em `.agents/project/`
- Se padrões visuais, tokens, direções de interface ou regras reutilizáveis de UI mudarem, atualize `DESIGN.md` na mesma tarefa
- Não mantenha referências herdadas de outras bases, cursos ou templates se elas não refletirem o repositório atual

## Documentação de Domínio

- Use `grill-with-docs` quando o trabalho exigir stress test de um plano contra a linguagem do produto e as decisões já tomadas
- Se não existir `CONTEXT.md`, crie-o apenas quando houver termos de domínio reais para registrar
- Crie ADRs de forma criteriosa: apenas para decisões difíceis de reverter, não óbvias e fruto de trade-offs reais
- Não transforme `CONTEXT.md` em spec de implementação; ele deve funcionar como glossário vivo

## Git e Segurança Operacional

- Não execute comandos destrutivos de git sem permissão explícita do usuário
- Não reverta mudanças que você não fez
- Se encontrar alterações inesperadas, trabalhe em volta delas quando possível e só escale se houver conflito real com a tarefa

## Postura Esperada

- Faça o mínimo de abstração necessária para o estágio atual do projeto
- Prefira clareza e manutenção simples a estruturas “enterprise” prematuras
- Registre limitações reais no fechamento em vez de fingir cobertura que não existe
