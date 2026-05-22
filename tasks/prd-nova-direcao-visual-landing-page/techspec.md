# Template de Especificação Técnica

## Resumo Executivo

A nova direção visual da landing institucional será implementada como uma evolução da home existente em `src/app/page.tsx`, preservando a rota `/`, o App Router e o uso predominante de Server Components. A abordagem técnica prioriza refinar fortemente composição, ritmo editorial, densidade visual, narrativa das seções e tokens de design já existentes para que a interface deixe de parecer genérica ou “com cara de IA”, aproximando-se da referência aprovada em `tasks/new-design-v3.png`.

O trabalho não introduz novas integrações nem novos fluxos funcionais. O foco é reorganizar a home atual, ajustar os contratos locais de conteúdo, evoluir o design system em `src/app/globals.css` e refinar os componentes de layout e das seções institucionais para entregar uma experiência mais humana, acolhedora, confiável e memorável em desktop e mobile.

## Arquitetura do Sistema

### Visão Geral dos Componentes

- `src/app/page.tsx`: continuará como entrypoint da home e será reorganizado para compor a narrativa final da landing.
- `src/components/home/HomeSections.tsx`: será o principal ponto de evolução visual e estrutural das seções da home.
- `src/lib/home-content.ts`: manterá o conteúdo institucional fixo e precisará acomodar novas variações editoriais dos blocos de ajuda e contribuição.
- `src/lib/home-editorial-content.ts` e `src/lib/home-editorial-content.json`: continuarão como fonte serializável de campanhas e apoiadores com renderização condicional.
- `src/components/layout/HeaderNav.tsx` e `HeaderNavMobileMenu.tsx`: serão refinados para refletir a nova IA da landing e destacar melhor o CTA de contato.
- `src/components/layout/Footer.tsx`: será ajustado para encerrar a jornada com mais consistência institucional.
- `src/app/globals.css`: evoluirá tokens semânticos de cor, sombra, largura útil, ritmo vertical e motion.
- Componentes base reutilizados ou ajustados:
  - `Container`
  - `Section`
  - `Stack`
  - `Badge`
  - `Card`
  - `Heading`
  - `Text`
  - `PrimaryButton`
  - `SecondaryButton`
  - `WhatsAppButton`

O fluxo de renderização permanece simples: a página lê conteúdo local, decide se exibe campanhas e apoiadores e monta a narrativa one-page com âncoras. Interatividade continua limitada ao menu mobile.

## Design de Implementação

### Estrutura de Rotas e Seções

- A solução vive apenas na rota raiz `src/app/page.tsx`.
- Não haverá criação de novas rotas ou formulários complexos nesta fase.
- A sequência da página seguirá a estrutura definida em `DESIGN.md`, refinada pela referência `new-design-v3.png`:
  - hero institucional
  - faixa curta de destaques
  - `Como a APAC ajuda`
  - `Preciso de apoio`
  - `Como ajudar`
  - `Campanhas e eventos` quando houver conteúdo
  - `Transparência e confiança`
  - `Nossos apoiadores` quando houver conteúdo
  - fechamento com CTA final
- `HeaderNav` e `Footer` continuarão apontando para IDs existentes na própria página.
- Server Components seguem como padrão. Apenas o menu mobile permanece como Client Component por depender de estado de interface.

### Interfaces Principais

- `homeContent` continuará como contrato principal da home, mas deve ser expandido para acomodar:
  - highlights institucionais do hero
  - lista editorial de formas de ajudar
  - bloco de contato resumido com telefone, WhatsApp, endereço e aviso informativo
- `homeEditorialContent.campaigns.items` continuará serializável, com cards editoriais de campanha.
- `homeEditorialContent.sponsors.items` continuará serializável, com tiles simples de reconhecimento.
- Seções opcionais devem continuar com guards explícitos:
  - `hasCampaigns`
  - `hasSponsors`
- Componentes da home devem preferir props simples orientadas a conteúdo, evitando novas APIs infladas por booleans.

### Estratégia de Conteúdo e UX

A principal decisão de UX é substituir a sensação atual de blocos corretos, porém ainda genéricos, por uma narrativa visual mais editorial e humana. A largura útil da home deve ser mais controlada, com melhor uso de respiro, agrupamentos mais intencionais e menos repetição de cards neutros com a mesma hierarquia visual.

O hero deve concentrar mais presença institucional: título forte, destaque mais emocional para “esperança”, imagem principal integrada à composição e card de contato mais confiável. Logo abaixo, uma faixa curta de atributos institucionais deve introduzir a atuação sem parecer uma grade de features de SaaS.

Os CTAs precisam ter hierarquia fixa:

- `Preciso de apoio` como principal para beneficiários e familiares
- `Quero ajudar` como secundário institucional
- `Falar no WhatsApp` como CTA funcional de contato de alta prioridade

As seções centrais devem preferir faixas abertas, divisores leves, poucos agrupamentos por superfície e composição assimétrica quando isso reforçar autoria visual. `Como ajudar` deve apresentar os caminhos `doação`, `doar cabelo`, `voluntariado` e `apoio de empresas` como trilhas curtas, claras e escaneáveis, ainda com destinos locais/placeholders.

Requisitos permanentes:

- mobile-first
- WCAG AA
- foco visível
- headings sem saltos semânticos
- alto contraste
- sem coleta de dados sensíveis
- aviso claro de que o site é informativo e o atendimento deve ser confirmado com a APAC

## Pontos de Integração

Não há integrações externas novas. Permanecem apenas links simples para `https://wa.me/...`, `tel:`, `mailto:` e eventuais links institucionais locais. Como não há API nem submissão real, o principal cuidado técnico é garantir que conteúdos opcionais possam desaparecer sem deixar lacunas ou headings órfãos.

## Abordagem de Testes

### Testes Unidade

- Atualizar os testes de `src/app/page.test.tsx` para refletir a nova ordem narrativa e os CTAs principais.
- Atualizar testes de `HeaderNav`, `Footer` e `HomeSections` para validar:
  - âncoras existentes
  - CTA de WhatsApp em destaque
  - renderização condicional de campanhas e apoiadores
  - presença do aviso informativo no bloco de apoio
- Validar que componentes ajustados continuem respeitando semântica e acessibilidade.

### Testes de Composição

- Cobrir a composição da home em cenários com e sem campanhas.
- Cobrir a composição da home em cenários com e sem apoiadores.
- Verificar a sequência principal de landmarks e headings.
- Verificar que os CTAs do hero e do fechamento mantenham a hierarquia esperada.

### Testes de E2E

Não é necessário introduzir E2E nesta fase. A cobertura continua com `Jest` e `React Testing Library`, complementada por revisão visual manual da home responsiva.

## Sequenciamento de Desenvolvimento

### Ordem de Construção

1. Refinar tokens e regras globais em `src/app/globals.css` para suportar a nova direção visual.
2. Ajustar `HeaderNav`, `Footer` e primitives necessárias para a nova hierarquia editorial.
3. Reestruturar `src/lib/home-content.ts` e, se preciso, o conteúdo editorial local para suportar os novos blocos.
4. Refatorar `src/components/home/HomeSections.tsx` para refletir a nova narrativa visual.
5. Integrar a nova composição em `src/app/page.tsx`.
6. Atualizar testes e validar com `npm run lint` e `npm run build`.

### Dependências Técnicas

- Nenhuma dependência nova é obrigatória.
- A solução deve reutilizar `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS v4` e a suíte atual com `Jest`.
- A referência visual principal é [new-design-v3.png](/Users/caiobarutti/Documents/www/apac-web/tasks/new-design-v3.png).

## SEO, Performance e Qualidade

A home continuará estática e local, então o principal ganho virá de qualidade visual e clareza narrativa, não de mudanças de infraestrutura. A implementação deve preservar metadata institucional em `src/app/layout.tsx`, evitar excesso de ornamento que prejudique LCP e manter dimensões estáveis para mídia e superfícies, reduzindo layout shift.

Em qualidade, a página deve seguir `DESIGN.md` e aproximar-se do `new-design-v3.png` sem copiar literalmente o mock. A interface final precisa parecer institucional e artesanal, não promocional, hospitalar ou genérica. Isso implica maior controle de largura, melhor contraste, menos repetição de boxes e uso mais intencional de cor, ícones, faixas e respiro vertical.

## Considerações Técnicas

### Decisões Principais

- Manter a evolução na rota `/` para reduzir custo arquitetural e concentrar esforço no design.
- Reutilizar a arquitetura atual da home e alterar livremente sua composição interna quando isso melhorar a qualidade visual.
- Manter conteúdo local e serializável porque o objetivo deste ciclo é design, não gestão editorial.
- Priorizar refinamento do design system existente em vez de introduzir uma biblioteca externa de UI.
- Reservar os caminhos de ajuda e contribuição como links locais/placeholders até que haja destinos reais definidos.

### Riscos Conhecidos

- A referência visual pode induzir excesso de detalhe decorativo.
  Mitigação: manter disciplina de hierarchy first, usando ornamento apenas quando reforçar acolhimento e confiança.
- A home atual já possui seções corretas, mas visualmente parecidas entre si.
  Mitigação: diferenciar ritmo, densidade e composição entre faixas sem perder consistência sistêmica.
- O objetivo “menos cara de IA” é qualitativo e subjetivo.
  Mitigação: traduzir isso em critérios técnicos verificáveis: largura mais controlada, menos grids homogêneos, menos cards repetitivos, CTAs claros, mais variação editorial e melhor integração entre conteúdo e imagem.

### Conformidade com Skills Padrões

- `cria-techspec`: estrutura, arquivo de saída e checklist desta especificação.
- `brainstorming`: necessária antes da futura implementação visual relevante.
- `frontend-design`: skill principal prevista para executar a evolução visual da landing.
- `tailwindcss`: necessária para evolução dos tokens e do styling utilitário.
- `ui-craft`: aplicável para evitar interface genérica e orientar composição editorial.
- `next-best-practices`: preservação do App Router e de Server Components por padrão.
- `vercel-react-best-practices`: boundaries client mínimos e composição sustentável.
- `web-design-guidelines`: revisão posterior de acessibilidade, clareza e qualidade visual.

### Arquivos relevantes e dependentes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-nova-direcao-visual-landing-page/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-nova-direcao-visual-landing-page/techspec.md)
- [new-design-v3.png](/Users/caiobarutti/Documents/www/apac-web/tasks/new-design-v3.png)
- [prompt-design-v3.md](/Users/caiobarutti/Documents/www/apac-web/docs/design-v3/prompt-design-v3.md)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
- [HomeSections.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/home/HomeSections.tsx)
- [home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts)
- [home-editorial-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-editorial-content.ts)
- [HeaderNav.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNav.tsx)
- [Footer.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/Footer.tsx)
- [globals.css](/Users/caiobarutti/Documents/www/apac-web/src/app/globals.css)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
