# Tarefa 3.0: Reestruturar contratos de conteúdo da landing

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Evoluir os contratos de conteúdo locais da home para suportar a nova narrativa institucional, incluindo hero, destaques, bloco de apoio, trilhas de contribuição e regras de renderização condicional para campanhas e apoiadores.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `next-best-practices`
- `vercel-composition-patterns`
</skills>

<requirements>
- Manter o conteúdo serializável e local, sem introduzir integrações novas.
- Preservar guards explícitos para conteúdos opcionais.
- Evitar APIs infladas por booleans em componentes.
- Incluir aviso informativo claro no bloco de apoio, sem coleta de dados sensíveis.
</requirements>

## Subtarefas

- [x] 3.1 Atualizar `src/lib/home-content.ts` para acomodar os novos blocos e a hierarquia editorial necessária.
- [x] 3.2 Revisar `src/lib/home-editorial-content.ts` e `src/lib/home-editorial-content.json` para garantir compatibilidade com campanhas e apoiadores opcionais.
- [x] 3.3 Validar se os contratos de conteúdo permanecem simples, legíveis e sustentáveis para a composição da home.

## Detalhes de Implementação

Referenciar `techspec.md`, especialmente:
- `Arquitetura do Sistema > Visão Geral dos Componentes`
- `Design de Implementação > Interfaces Principais`
- `Pontos de Integração`
- `Considerações Técnicas > Decisões Principais`

## Critérios de Sucesso

- O conteúdo local suporta a nova landing sem gambiarras estruturais.
- Campanhas e apoiadores continuam opcionais sem deixar lacunas narrativas.
- O contrato fica claro o bastante para ser mantido e expandido futuramente.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Atualização de testes de composição ou renderização condicional, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `src/lib/home-content.ts`
- `src/lib/home-editorial-content.ts`
- `src/lib/home-editorial-content.json`
