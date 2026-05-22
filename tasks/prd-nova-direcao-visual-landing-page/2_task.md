# Tarefa 2.0: Refinar navegação e fechamento institucional

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Atualizar a navegação principal, o menu mobile e o footer para refletirem melhor a IA da nova landing, com foco em navegação one-page clara, destaque ao contato e encerramento mais consistente da jornada institucional.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `frontend-design`
- `ui-craft`
- `next-best-practices`
</skills>

<requirements>
- Manter a navegação ancorada na própria landing page.
- Garantir menu mobile simples, acessível e orientado à ação.
- Dar destaque apropriado ao CTA funcional de WhatsApp sem competir com a ação principal de apoio.
- Preservar semântica, foco visível e navegação por teclado.
</requirements>

## Subtarefas

- [x] 2.1 Ajustar `HeaderNav` para refletir a nova hierarquia narrativa e os pontos de navegação da home.
- [x] 2.2 Refinar `HeaderNavMobileMenu` para uma experiência mobile clara, acessível e com CTAs acionáveis.
- [x] 2.3 Ajustar `Footer` para encerrar a jornada com consistência institucional e reforço de confiança/contato.

## Detalhes de Implementação

Referenciar `techspec.md`, especialmente:
- `Arquitetura do Sistema > Visão Geral dos Componentes`
- `Design de Implementação > Estrutura de Rotas e Seções`
- `Design de Implementação > Estratégia de Conteúdo e UX`
- `Abordagem de Testes > Testes Unidade`

## Critérios de Sucesso

- O header orienta a navegação da landing com clareza em desktop e mobile.
- O menu mobile permanece leve e acessível, sem criar fricção desnecessária.
- O footer reforça institucionalidade e fechamento da jornada sem poluir a interface.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Atualização dos testes de `HeaderNav` e `Footer`, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `src/components/layout/HeaderNav.tsx`
- `src/components/layout/HeaderNavMobileMenu.tsx`
- `src/components/layout/Footer.tsx`
