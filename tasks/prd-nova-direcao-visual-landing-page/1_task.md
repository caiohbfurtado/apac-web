# Tarefa 1.0: Evoluir a base visual global da homepage

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Preparar a fundação visual necessária para a nova direção da landing, ajustando tokens, ritmo vertical, largura útil, superfícies, sombras e motion em `src/app/globals.css` para sustentar uma homepage mais editorial, acolhedora e institucional.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `frontend-design`
- `tailwindcss`
- `ui-craft`
</skills>

<requirements>
- Respeitar `DESIGN.md` como fonte de verdade do design.
- Evoluir o design system existente sem criar uma interface isolada.
- Garantir base responsiva, mobile-first e com contraste compatível com WCAG AA.
- Evitar ornamento excessivo, repetição de boxes neutros e aparência genérica.
</requirements>

## Subtarefas

- [x] 1.1 Revisar os tokens e regras globais atuais que impactam cor, espaçamento, largura de conteúdo, superfícies e sombras da homepage.
- [x] 1.2 Ajustar `src/app/globals.css` para suportar a nova direção visual com ritmo editorial mais intencional.
- [x] 1.3 Validar se os novos tokens e regras globais funcionam bem em desktop e mobile sem quebrar a base existente.

## Detalhes de Implementação

Referenciar `techspec.md`, especialmente:
- `Arquitetura do Sistema > Visão Geral dos Componentes`
- `Design de Implementação > Estratégia de Conteúdo e UX`
- `Sequenciamento de Desenvolvimento > Ordem de Construção`
- `SEO, Performance e Qualidade`

## Critérios de Sucesso

- A homepage passa a ter fundação visual coerente com a nova direção aprovada.
- A base global suporta composições mais autorais sem comprometer legibilidade e manutenção.
- O resultado preserva responsividade, contraste e consistência sistêmica.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Verificação visual manual da base em desktop e mobile
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `DESIGN.md`
- `src/app/globals.css`
