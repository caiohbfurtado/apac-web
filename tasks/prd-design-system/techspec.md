# Template de Especificação Técnica

## Resumo Executivo

O design system será introduzido dentro do próprio app Next.js atual, partindo de uma base ainda mínima e reorganizando a home institucional como primeira consumidora do sistema. A abordagem propõe um eixo central de tokens em `app/globals.css`, componentes base reutilizáveis em `components/`, primitives semânticas para layout e tipografia, e uma página dedicada de vitrine para validação visual e comportamental. O objetivo técnico é substituir o estado inicial gerado pelo template do Next por uma fundação coerente, acessível e fácil de evoluir em tarefas futuras. A referência visual oficial para os tokens e componentes passa a ser `tasks/design-system-reference.png`, que define uma linguagem mais próxima de um board de sistema visual do que de uma landing institucional genérica.

O sistema será mobile-first, orientado por tokens, sem dark mode e sem dependência de bibliotecas externas de UI. A referência visual partirá do mockup fornecido, adaptada ao contexto do repositório com foco em identidade institucional, hierarquia clara, uma cor de destaque principal, variações suaves de superfície e animações discretas. A implementação priorizará Server Components por padrão, Client Components apenas para interações reais, e testes com `Jest` + `React Testing Library` tanto para componentes quanto para a página de showcase.

# Template de Especificação Técnica

## Resumo Executivo

O design system será introduzido dentro do próprio app Next.js atual, partindo de uma base ainda mínima e reorganizando a home institucional como primeira consumidora do sistema. A abordagem propõe um eixo central de tokens em `app/globals.css`, componentes base reutilizáveis em `components/`, primitives semânticas para layout e tipografia, e uma página dedicada de vitrine para validação visual e comportamental. O objetivo técnico é substituir o estado inicial gerado pelo template do Next por uma fundação coerente, acessível e fácil de evoluir em tarefas futuras. A referência visual oficial para os tokens e componentes passa a ser `tasks/design-system-reference.png`, que define uma linguagem mais próxima de um board de sistema visual do que de uma landing institucional genérica.

O sistema será mobile-first, orientado por tokens, sem dark mode e sem dependência de bibliotecas externas de UI. A referência visual partirá do board fornecido, adaptada ao contexto do repositório com foco em identidade institucional, hierarquia clara, um acento principal em rosa/magenta, variações suaves de superfície e animações discretas. A implementação priorizará Server Components por padrão, Client Components apenas para interações reais, e testes com `Jest` + `React Testing Library` tanto para componentes quanto para a página de showcase.

## Arquitetura do Sistema

### Visão Geral dos Componentes

- `RootLayout`: ajusta `lang`, metadata base, fontes e classes globais do sistema.
- `HomePage`: deixa de ser a página padrão do Next e passa a compor a landing institucional usando apenas componentes do design system.
- `ThemeTokens`: camada declarativa em `app/globals.css` com cores, tipografia, espaçamento, raios, sombras e motion tokens via `@theme`, refletindo a paleta e a escala da referência visual.
- `Container`: primitive de largura, gutter e alinhamento responsivo.
- `Stack`: primitive de espaçamento vertical/horizontal para reduzir repetição de classes.
- `Section`: wrapper semântico para blocos da landing com heading opcional, fundo e variações de densidade.
- `Heading` e `Text`: primitives tipográficas para hierarquia consistente.
- `Button`: componente base com variantes explícitas `PrimaryButton`, `SecondaryButton` e `WhatsAppButton`, evitando booleans.
- `Badge`: selo curto para categorias e estados editoriais, com tons derivados da paleta da referência.
- `Card`: base visual para blocos de conteúdo, com slots simples para ícone, título, descrição e ação.
- `Input`, `Textarea` e `Field`: primitives de formulário com estados de foco, erro e ajuda.
- `HeaderNav`: navegação institucional com versão desktop e menu mobile desacoplado.
- `Footer`: rodapé com contato, redes e mensagem institucional.
- `ComponentShowcasePage`: rota interna de validação visual com todos os componentes, estados e combinações aprovadas.

As relações serão lineares: tokens alimentam primitives, primitives alimentam componentes base, e a home consome apenas essa camada. O fluxo de renderização permanece majoritariamente server-side; somente elementos como menu mobile poderão migrar para Client Component isolado. O showcase interno precisa espelhar o board visual de referência: paleta, tipografia, estados de botão, badges, ícones lineares, cards, formulários, alertas, sombras, espaçamento e cantos arredondados.

## Design de Implementação

### Estrutura de Rotas e Seções

- `app/layout.tsx`: atualização de metadata institucional, idioma `pt-BR`, fontes via `next/font` e aplicação das variáveis globais.
- `app/page.tsx`: composição da landing institucional usando `HeaderNav`, `Section`, `Card`, `Badge`, `Button`, `Field` e `Footer`.
- `app/design-system/page.tsx`: vitrine interna do sistema, semelhante a um Storybook leve, para validar aparência, responsividade, foco, hover e estados.
- `components/ui/*`: primitives e componentes base do design system.
- `components/layout/*`: estruturas como `HeaderNav`, `Footer`, `Container` e `Section`.
- `components/icons/*`: ícones SVG locais ou wrappers centralizados.
- `lib/design-system/*`: contratos, listas de variantes e possíveis helpers puros de composição de classes.

Server Components serão o padrão para página, seções e componentes estáticos. Componentes com estado de interface, como menu mobile expansível, ficarão em boundaries pequenos com `use client`. A landing inicial cobrirá hero, blocos institucionais, apoio, formas de ajudar, campanhas, transparência, parceiros e rodapé, mas esses blocos serão montados com componentes base, não com um catálogo de componentes compostos específicos.

### Interfaces Principais

- `Container`: `children`, `size` (`content`, `wide`), `as`.
- `Section`: `children`, `id`, `surface`, `spacing`, `heading`, `description`, `actions`.
- `Heading`: `as`, `size`, `tone`.
- `Text`: `as`, `size`, `tone`.
- `Card`: `children`, `surface`, `padding`, `interactive`.
- `Badge`: `children`, `tone`.
- `Button`: `children`, `href` ou `onClick`, `size`; variantes expostas por componentes explícitos.
- `Field`: `label`, `hint`, `error`, `required`, `children`.
- `Input` e `Textarea`: props nativas tipadas, com classes derivadas somente de tokens.

A estrutura de conteúdo da home ficará em um objeto serializável local, permitindo futura extração para CMS sem refatorar os componentes. CTAs permanecerão simples nesta fase: links internos, `tel:` e link para WhatsApp. O conteúdo de showcase deve ser composto por blocos curtos e comparáveis, exatamente como no board de referência, para facilitar revisão visual rápida.

### Estratégia de Conteúdo e UX

A landing seguirá hierarquia editorial clara: acolhimento institucional no topo, prova de atuação no miolo, caminhos de apoio e contribuição no centro da página, e confiança institucional no fechamento. Os CTAs principais serão “Preciso de apoio”, “Quero ajudar” e “Falar no WhatsApp”, com destaque visual controlado para evitar competição excessiva. A direção cromática deve privilegiar o rosa/magenta institucional como acento principal e o verde apenas como apoio funcional para CTAs e mensagens relacionadas a contato/acolhimento.

A responsividade será mobile-first, começando por pilhas verticais, grids de uma coluna e CTAs full-width, evoluindo para composições em duas e três colunas apenas em breakpoints maiores. Acessibilidade será requisito estrutural: contraste AA, foco visível, semântica de headings, labels associados, estados não dependentes só de cor, `prefers-reduced-motion` respeitado e navegação por teclado preservada.

## Pontos de Integração

Não há integrações externas obrigatórias nesta fase. Links para WhatsApp, telefone e localização serão tratados como URLs simples. O formulário da landing será apenas estrutural, sem submissão real; se necessário, o tech spec já preserva espaço para futura integração com serviço externo sem alterar a API dos campos.

## Abordagem de Testes

### Testes Unidade

Será criada infraestrutura de `Jest` + `React Testing Library` com ambiente `jsdom`, setup central e utilitário de renderização. Os testes principais devem cobrir:

- renderização semântica de `Heading`, `Text`, `Section` e `Container`;
- variantes explícitas de `Button`, `Badge` e `Card`;
- associação correta entre `Field`, `Input`, `Textarea`, `hint` e `error`;
- estados interativos do menu mobile, se ele for client-side;
- proteção contra regressão de classes críticas baseadas em tokens.

Mocks devem ser mínimos, limitados a `next/link`, `next/image` e APIs de ambiente que o Jest não forneça por padrão.

### Testes de Composição

Devem existir testes para:

- `HeaderNav` em desktop e mobile;
- composição de uma `Section` com cards e CTAs;
- `ComponentShowcasePage` renderizando os grupos esperados de componentes;
- home institucional validando presença dos principais headings, CTAs e regiões landmark.

Fixtures podem viver em `lib/design-system/fixtures.ts` para alimentar a showcase e os testes sem duplicação.

### Testes de E2E

Não é obrigatório adicionar Playwright neste primeiro ciclo. A página `/design-system` funcionará como principal superfície de validação visual e manual. Se o custo permanecer baixo depois da implementação inicial, um segundo momento pode adicionar E2E para navegação mobile e CTAs principais.

## Sequenciamento de Desenvolvimento

### Ordem de Construção

1. Reestruturar `app/layout.tsx` e `app/globals.css` para instalar tokens, tipografia e metadata base.
2. Criar primitives de layout e tipografia (`Container`, `Stack`, `Section`, `Heading`, `Text`) porque sustentam todo o restante.
3. Criar componentes base de ação e superfície (`Button`, `Badge`, `Card`, `Field`, `Input`, `Textarea`).
4. Criar `HeaderNav` e `Footer`, incluindo menu mobile se necessário.
5. Implementar `app/design-system/page.tsx` para validar os componentes em isolamento.
6. Reescrever `app/page.tsx` consumindo apenas o design system.
7. Configurar e escrever testes unitários e de composição.
8. Rodar `npm run lint` e `npm run build` como gates finais.

### Dependências Técnicas

- Dependência nova para testes: `jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom` e suporte complementar que o setup exigir.
- Assets institucionais locais em `public/` para logo, ilustrações e imagens da landing.
- Possível utilitário leve para composição de classes, apenas se necessário; caso contrário, manter classes explícitas.

## SEO, Performance e Qualidade

Metadata da home deve substituir o conteúdo padrão do `create-next-app`, com título e descrição institucionais. Imagens da landing devem usar `next/image` com `sizes` adequados e prioridade apenas para o LCP da hero. Fontes devem continuar em `next/font`, integradas ao sistema de tokens. O bundle deve permanecer enxuto, evitando biblioteca de componentes externa e limitando Client Components ao estritamente interativo.

Em qualidade visual, a implementação seguirá as direções das skills `ui-craft`, `tailwindcss`, `vercel-composition-patterns`, `vercel-react-best-practices` e `next-best-practices`: um único eixo de destaque cromático, superfícies suaves, tipografia consistente, composição sem proliferação de booleans, tokens em `@theme`, motion discreto e layout responsivo com prioridade para mobile. A referência precisa ser mantida fiel ao board novo, não ao padrão inicial mais genérico que o projeto tinha antes.

## Considerações Técnicas

### Decisões Principais

- Criar design system dentro do repositório, sem pacote separado: menor custo e alinhamento ao PRD.
- Usar tokens em `app/globals.css` com Tailwind v4 em vez de valores fixos espalhados.
- Expor variantes de ação por componentes explícitos, não por múltiplos booleans.
- Adicionar página `/design-system` como vitrine viva em vez de Storybook neste momento.
- Manter a home como primeira consumidora do sistema, reduzindo abstração prematura para outras páginas.

Alternativas rejeitadas:

- Adotar biblioteca externa de UI: reduziria esforço inicial, mas enfraqueceria aderência visual e controle de tokens.
- Criar blocos compostos específicos demais para a home logo no começo: aumentaria acoplamento e reduziria reutilização futura.
- Instalar Storybook agora: ganho limitado frente ao custo adicional para um projeto ainda pequeno.

### Riscos Conhecidos

- O mockup traz muitos blocos visuais; há risco de excesso de componentes cedo demais. Mitigação: limitar o escopo a primitives e bases reutilizáveis e usar a showcase para validar repetição e escala sem inflar a arquitetura.
- O projeto hoje não possui infraestrutura de testes nem assets finais. Mitigação: incluir setup mínimo no primeiro ciclo e tratar imagens com placeholders institucionais quando necessário.
- A vitrine `/design-system` pode virar página esquecida se não for usada nas próximas tarefas. Mitigação: referenciá-la explicitamente como critério de validação nas tasks subsequentes.

### Conformidade com Skills Padrões

- `cria-techspec`: estrutura do documento e workflow da especificação.
- `ui-craft`: direção visual, hierarquia, uso controlado de acento, responsividade e motion.
- `tailwindcss`: estratégia de tokens com `@theme` e utilitários mobile-first.
- `vercel-composition-patterns`: variantes explícitas, composição e limites claros entre primitives e componentes.
- `vercel-react-best-practices`: boundaries pequenas de client-side e evitar complexidade desnecessária.
- `next-best-practices`: App Router, Server Components por padrão, metadata e otimizações nativas.
- `web-design-guidelines`: aplicável como critério posterior de revisão da implementação, não como dependência de escrita deste spec.

### Arquivos relevantes e dependentes

- [tasks/prd-design-system/prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [tasks/prd-design-system/techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md)
- [tasks/design-system-reference.png](/Users/caiobarutti/Documents/www/apac-web/tasks/design-system-reference.png)
- [app/layout.tsx](/Users/caiobarutti/Documents/www/apac-web/app/layout.tsx)
- [app/page.tsx](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx)
- [app/globals.css](/Users/caiobarutti/Documents/www/apac-web/app/globals.css)
- [package.json](/Users/caiobarutti/Documents/www/apac-web/package.json)
- [.agents/project/architecture.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/architecture.md)
- [.agents/project/frontend.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/frontend.md)
- [.agents/project/quality.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/quality.md)
## Arquitetura do Sistema

### Visão Geral dos Componentes

- `RootLayout`: ajusta `lang`, metadata base, fontes e classes globais do sistema.
- `HomePage`: deixa de ser a página padrão do Next e passa a compor a landing institucional usando apenas componentes do design system.
- `ThemeTokens`: camada declarativa em `app/globals.css` com cores, tipografia, espaçamento, raios, sombras e motion tokens via `@theme`, refletindo a paleta e a escala da referência visual.
- `Container`: primitive de largura, gutter e alinhamento responsivo.
- `Stack`: primitive de espaçamento vertical/horizontal para reduzir repetição de classes.
- `Section`: wrapper semântico para blocos da landing com heading opcional, fundo e variações de densidade.
- `Heading` e `Text`: primitives tipográficas para hierarquia consistente.
- `Button`: componente base com variantes explícitas `PrimaryButton`, `SecondaryButton` e `WhatsAppButton`, evitando booleans.
- `Badge`: selo curto para categorias e estados editoriais, com tons derivados da paleta da referência.
- `Card`: base visual para blocos de conteúdo, com slots simples para ícone, título, descrição e ação.
- `Input`, `Textarea` e `Field`: primitives de formulário com estados de foco, erro e ajuda.
- `HeaderNav`: navegação institucional com versão desktop e menu mobile desacoplado.
- `Footer`: rodapé com contato, redes e mensagem institucional.
- `ComponentShowcasePage`: rota interna de validação visual com todos os componentes, estados e combinações aprovadas.

As relações serão lineares: tokens alimentam primitives, primitives alimentam componentes base, e a home consome apenas essa camada. O fluxo de renderização permanece majoritariamente server-side; somente elementos como menu mobile poderão migrar para Client Component isolado. O showcase interno precisa espelhar o board visual de referência: paleta, tipografia, estados de botão, badges, ícones lineares, cards, formulários, alertas, sombras, espaçamento e cantos arredondados.

## Design de Implementação

### Estrutura de Rotas e Seções

- `app/layout.tsx`: atualização de metadata institucional, idioma `pt-BR`, fontes via `next/font` e aplicação das variáveis globais.
- `app/page.tsx`: composição da landing institucional usando `HeaderNav`, `Section`, `Card`, `Badge`, `Button`, `Field` e `Footer`.
- `app/design-system/page.tsx`: vitrine interna do sistema, semelhante a um Storybook leve, para validar aparência, responsividade, foco, hover e estados.
- `components/ui/*`: primitives e componentes base do design system.
- `components/layout/*`: estruturas como `HeaderNav`, `Footer`, `Container` e `Section`.
- `components/icons/*`: ícones SVG locais ou wrappers centralizados.
- `lib/design-system/*`: contratos, listas de variantes e possíveis helpers puros de composição de classes.

Server Components serão o padrão para página, seções e componentes estáticos. Componentes com estado de interface, como menu mobile expansível, ficarão em boundaries pequenos com `use client`. A landing inicial cobrirá hero, blocos institucionais, apoio, formas de ajudar, campanhas, transparência, parceiros e rodapé, mas esses blocos serão montados com componentes base, não com um catálogo de componentes compostos específicos.

### Interfaces Principais

- `Container`: `children`, `size` (`content`, `wide`), `as`.
- `Section`: `children`, `id`, `surface`, `spacing`, `heading`, `description`, `actions`.
- `Heading`: `as`, `size`, `tone`.
- `Text`: `as`, `size`, `tone`.
- `Card`: `children`, `surface`, `padding`, `interactive`.
- `Badge`: `children`, `tone`.
- `Button`: `children`, `href` ou `onClick`, `size`; variantes expostas por componentes explícitos.
- `Field`: `label`, `hint`, `error`, `required`, `children`.
- `Input` e `Textarea`: props nativas tipadas, com classes derivadas somente de tokens.

A estrutura de conteúdo da home ficará em um objeto serializável local, permitindo futura extração para CMS sem refatorar os componentes. CTAs permanecerão simples nesta fase: links internos, `tel:` e link para WhatsApp.

### Estratégia de Conteúdo e UX

A landing seguirá hierarquia editorial clara: acolhimento institucional no topo, prova de atuação no miolo, caminhos de apoio e contribuição no centro da página, e confiança institucional no fechamento. Os CTAs principais serão “Preciso de apoio”, “Quero ajudar” e “Falar no WhatsApp”, com destaque visual controlado para evitar competição excessiva.

A responsividade será mobile-first, começando por pilhas verticais, grids de uma coluna e CTAs full-width, evoluindo para composições em duas e três colunas apenas em breakpoints maiores. Acessibilidade será requisito estrutural: contraste AA, foco visível, semântica de headings, labels associados, estados não dependentes só de cor, `prefers-reduced-motion` respeitado e navegação por teclado preservada.

## Pontos de Integração

Não há integrações externas obrigatórias nesta fase. Links para WhatsApp, telefone e localização serão tratados como URLs simples. O formulário da landing será apenas estrutural, sem submissão real; se necessário, o tech spec já preserva espaço para futura integração com serviço externo sem alterar a API dos campos.

## Abordagem de Testes

### Testes Unidade

Será criada infraestrutura de `Jest` + `React Testing Library` com ambiente `jsdom`, setup central e utilitário de renderização. Os testes principais devem cobrir:

- renderização semântica de `Heading`, `Text`, `Section` e `Container`;
- variantes explícitas de `Button`, `Badge` e `Card`;
- associação correta entre `Field`, `Input`, `Textarea`, `hint` e `error`;
- estados interativos do menu mobile, se ele for client-side;
- proteção contra regressão de classes críticas baseadas em tokens.

Mocks devem ser mínimos, limitados a `next/link`, `next/image` e APIs de ambiente que o Jest não forneça por padrão.

### Testes de Composição

Devem existir testes para:

- `HeaderNav` em desktop e mobile;
- composição de uma `Section` com cards e CTAs;
- `ComponentShowcasePage` renderizando os grupos esperados de componentes;
- home institucional validando presença dos principais headings, CTAs e regiões landmark.

Fixtures podem viver em `lib/design-system/fixtures.ts` para alimentar a showcase e os testes sem duplicação.

### Testes de E2E

Não é obrigatório adicionar Playwright neste primeiro ciclo. A página `/design-system` funcionará como principal superfície de validação visual e manual. Se o custo permanecer baixo depois da implementação inicial, um segundo momento pode adicionar E2E para navegação mobile e CTAs principais.

## Sequenciamento de Desenvolvimento

### Ordem de Construção

1. Reestruturar `app/layout.tsx` e `app/globals.css` para instalar tokens, tipografia e metadata base.
2. Criar primitives de layout e tipografia (`Container`, `Stack`, `Section`, `Heading`, `Text`) porque sustentam todo o restante.
3. Criar componentes base de ação e superfície (`Button`, `Badge`, `Card`, `Field`, `Input`, `Textarea`).
4. Criar `HeaderNav` e `Footer`, incluindo menu mobile se necessário.
5. Implementar `app/design-system/page.tsx` para validar os componentes em isolamento.
6. Reescrever `app/page.tsx` consumindo apenas o design system.
7. Configurar e escrever testes unitários e de composição.
8. Rodar `npm run lint` e `npm run build` como gates finais.

### Dependências Técnicas

- Dependência nova para testes: `jest`, `jest-environment-jsdom`, `@testing-library/react`, `@testing-library/jest-dom` e suporte complementar que o setup exigir.
- Assets institucionais locais em `public/` para logo, ilustrações e imagens da landing.
- Possível utilitário leve para composição de classes, apenas se necessário; caso contrário, manter classes explícitas.

## SEO, Performance e Qualidade

Metadata da home deve substituir o conteúdo padrão do `create-next-app`, com título e descrição institucionais. Imagens da landing devem usar `next/image` com `sizes` adequados e prioridade apenas para o LCP da hero. Fontes devem continuar em `next/font`, integradas ao sistema de tokens. O bundle deve permanecer enxuto, evitando biblioteca de componentes externa e limitando Client Components ao estritamente interativo.

Em qualidade visual, a implementação seguirá as direções das skills `ui-craft`, `tailwindcss`, `vercel-composition-patterns`, `vercel-react-best-practices` e `next-best-practices`: um único eixo de destaque cromático, superfícies suaves, tipografia consistente, composição sem proliferação de booleans, tokens em `@theme`, motion discreto e layout responsivo com prioridade para mobile.

## Considerações Técnicas

### Decisões Principais

- Criar design system dentro do repositório, sem pacote separado: menor custo e alinhamento ao PRD.
- Usar tokens em `app/globals.css` com Tailwind v4 em vez de valores fixos espalhados.
- Expor variantes de ação por componentes explícitos, não por múltiplos booleans.
- Adicionar página `/design-system` como vitrine viva em vez de Storybook neste momento.
- Manter a home como primeira consumidora do sistema, reduzindo abstração prematura para outras páginas.

Alternativas rejeitadas:

- Adotar biblioteca externa de UI: reduziria esforço inicial, mas enfraqueceria aderência visual e controle de tokens.
- Criar blocos compostos específicos demais para a home logo no começo: aumentaria acoplamento e reduziria reutilização futura.
- Instalar Storybook agora: ganho limitado frente ao custo adicional para um projeto ainda pequeno.

### Riscos Conhecidos

- O mockup traz muitos blocos visuais; há risco de excesso de componentes cedo demais. Mitigação: limitar o escopo a primitives e bases reutilizáveis.
- O projeto hoje não possui infraestrutura de testes nem assets finais. Mitigação: incluir setup mínimo no primeiro ciclo e tratar imagens com placeholders institucionais quando necessário.
- A vitrine `/design-system` pode virar página esquecida se não for usada nas próximas tarefas. Mitigação: referenciá-la explicitamente como critério de validação nas tasks subsequentes.

### Conformidade com Skills Padrões

- `cria-techspec`: estrutura do documento e workflow da especificação.
- `ui-craft`: direção visual, hierarquia, uso controlado de acento, responsividade e motion.
- `tailwindcss`: estratégia de tokens com `@theme` e utilitários mobile-first.
- `vercel-composition-patterns`: variantes explícitas, composição e limites claros entre primitives e componentes.
- `vercel-react-best-practices`: boundaries pequenas de client-side e evitar complexidade desnecessária.
- `next-best-practices`: App Router, Server Components por padrão, metadata e otimizações nativas.
- `web-design-guidelines`: aplicável como critério posterior de revisão da implementação, não como dependência de escrita deste spec.

### Arquivos relevantes e dependentes

- [tasks/prd-design-system/prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md)
- [docs/design-system/prompt-design-system.md](/Users/caiobarutti/Documents/www/apac-web/docs/design-system/prompt-design-system.md)
- [tasks/design-system-reference.png](/Users/caiobarutti/Documents/www/apac-web/tasks/design-system-reference.png)
- [app/layout.tsx](/Users/caiobarutti/Documents/www/apac-web/app/layout.tsx)
- [app/page.tsx](/Users/caiobarutti/Documents/www/apac-web/app/page.tsx)
- [app/globals.css](/Users/caiobarutti/Documents/www/apac-web/app/globals.css)
- [package.json](/Users/caiobarutti/Documents/www/apac-web/package.json)
- [.agents/project/architecture.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/architecture.md)
- [.agents/project/frontend.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/frontend.md)
- [.agents/project/quality.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/quality.md)
