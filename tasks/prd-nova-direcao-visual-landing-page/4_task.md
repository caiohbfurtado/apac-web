# Tarefa 4.0: Refatorar a composição principal das seções da homepage

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Reconstruir a composição central da homepage em `HomeSections.tsx` para refletir a nova narrativa visual: hero institucional, destaques, ajuda, apoio, contribuição, campanhas, confiança, apoiadores e fechamento, com ritmo editorial mais humano e menos repetitivo.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `frontend-design`
- `tailwindcss`
- `ui-craft`
- `vercel-react-best-practices`
</skills>

<requirements>
- Implementar a sequência narrativa definida no tech spec.
- Preservar hierarquia fixa de CTAs: `Preciso de apoio`, `Quero ajudar`, `Falar no WhatsApp`.
- Garantir composição mobile-first, semântica e acessível.
- Tratar campanhas e apoiadores como seções opcionais sem headings órfãos ou espaços vazios.
</requirements>

## Subtarefas

- [x] 4.1 Reestruturar o hero, a faixa de destaques e os blocos centrais para refletirem a nova direção editorial.
- [x] 4.2 Refatorar as seções de apoio, contribuição, transparência, campanhas e apoiadores com composições diferenciadas e reutilizáveis.
- [x] 4.3 Revisar a semântica, a ordem de headings, os landmarks e os estados condicionais das seções.

## Detalhes de Implementação

Referenciar `techspec.md`, especialmente:
- `Design de Implementação > Estrutura de Rotas e Seções`
- `Design de Implementação > Interfaces Principais`
- `Design de Implementação > Estratégia de Conteúdo e UX`
- `Abordagem de Testes > Testes Unidade` e `Testes de Composição`

## Critérios de Sucesso

- A homepage transmite acolhimento, confiança e clareza sem aparência genérica.
- As seções possuem variação editorial suficiente sem perder consistência visual.
- A ordem narrativa e a hierarquia de CTAs ficam claras em desktop e mobile.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Atualização dos testes de `HomeSections` e composição da home, se aplicável
- [x] Testes E2E (não aplicável nesta fase; tech spec prevê Jest/RTL e revisão visual manual)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `src/components/home/HomeSections.tsx`
- `src/components/ui/Container.tsx`
- `src/components/ui/Section.tsx`
- `src/components/ui/Stack.tsx`
- `src/components/ui/Badge.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Heading.tsx`
- `src/components/ui/Text.tsx`
- `src/components/ui/PrimaryButton.tsx`
- `src/components/ui/SecondaryButton.tsx`
- `src/components/ui/WhatsAppButton.tsx`
