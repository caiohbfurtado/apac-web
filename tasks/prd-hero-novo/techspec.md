## Resumo Executivo

O novo hero será implementado na rota raiz existente (`src/app/page.tsx`) como evolução da home one-page atual, sem alterar a arquitetura geral de navegação por âncoras. A solução vai substituir a composição atual de abertura por um bloco editorial mais humano e institucional, absorvendo no próprio hero os highlights hoje renderizados em `HomeHighlightsBand`, mantendo o foco em acolhimento imediato, clareza de CTAs e confiança local ligada à APAC Boituva. O alvo explícito é reproduzir o mais fielmente possível a estrutura aprovada em `tasks/prd-hero-novo/somente-hero.png`, usando `public/assets/image-hero.png` como imagem principal do hero.

Tecnicamente, a implementação permanecerá majoritariamente em Server Components e continuará usando `src/lib/home-content.ts` como fonte local de conteúdo institucional. O hero passará a depender de asset visual local versionado e aprovado, renderizado com otimizações nativas do Next.js, enquanto a validação visual das entregas deve fazer parte do fluxo de implementação via Playwright MCP, complementando testes de unidade e composição. Como a referência aprovada já define uma anatomia visual bastante específica, o layout deve ser tratado como target estrutural e não apenas como inspiração estética.

## Arquitetura do Sistema

### Visão Geral dos Componentes

- `src/app/page.tsx`: continuará como entrypoint da home e seguirá compondo header, hero, seções institucionais e footer.
- `src/components/home/HomeSections.tsx`: arquivo principal a ser modificado para substituir a implementação atual de `HomeHeroSection` e remover a necessidade estrutural de `HomeHighlightsBand` como faixa separada.
- `HomeHeroSection`: será o componente principal alterado, passando a concentrar mensagem institucional, CTAs, composição visual, sinais de confiança, card lateral de contato e highlights editoriais em um único bloco.
- `HomeHighlightsBand`: deve ser removido da composição da página ou reduzido a wrapper temporário durante a transição, já que seus highlights serão absorvidos pelo hero final.
- `src/lib/home-content.ts`: continuará armazenando copy, CTAs, dados de contato e estrutura do hero, com expansão pontual para suportar a nova composição.
- `src/app/page.test.tsx` e `src/components/home/HomeSections.test.tsx`: serão atualizados para refletir a nova hierarquia de conteúdo e a retirada da faixa separada de highlights.
- `src/app/globals.css`: pode receber apenas ajustes tokenizados ou classes de apoio já alinhadas ao design system, sem introduzir uma direção visual paralela.

O fluxo de renderização seguirá simples: `page.tsx` consome `homeContent`, monta a home com seções estáticas e renderiza um hero mais completo logo abaixo do `HeaderNav`. O menu mobile permanece como único boundary client-side relevante no topo; o hero continua server-first, com links simples (`#como-ajudar`, `#preciso-de-apoio`, `https://wa.me/...`) e sem formulários, estado local ou integração dinâmica.

## Design de Implementação

### Estrutura de Rotas e Seções

- A solução vive somente em `src/app/page.tsx`.
- Não haverá criação de novas rotas para apoio, contato ou doação nesta iniciativa.
- O header continuará apontando para IDs da mesma página.
- A seção `fundacao` permanecerá sendo a âncora inicial da home.
- O hero passará a reunir, seguindo a mesma estrutura-base da referência aprovada:
  - badge institucional
  - heading principal
  - descrição curta
  - faixa de CTAs `Preciso de apoio`, `Quero ajudar` e `Falar no WhatsApp`
  - imagem principal humana central usando `public/assets/image-hero.png`
  - card lateral institucional de contato
  - highlights editoriais antes exibidos em faixa separada, agora integrados na base do hero

As demais seções (`atuacao`, `preciso-de-apoio`, `como-ajudar`, `transparencia`, patrocinadores e fechamento) permanecem na home atual, com impacto restrito à composição superior e aos eventuais ajustes de ritmo vertical causados pelo novo hero.

Em desktop, a composição-alvo deve permanecer claramente reconhecível como:

- coluna editorial à esquerda
- imagem principal em destaque ocupando a área centro-direita
- card branco de contato ancorado à direita
- faixa inferior de highlights integrada ao hero

Em mobile, a implementação pode empilhar os blocos, mas deve preservar essa hierarquia e a sensação de peça única.

### Interfaces Principais

- `homeContent.hero`: continuará sendo o contrato central do hero.
- A estrutura atual deve ser ampliada para suportar a composição final sem mover o conteúdo para outro arquivo.
- Campos já existentes que permanecem relevantes:
  - `id`
  - `badge`
  - `title`
  - `description`
  - `highlights`
  - `contact`
  - `ctas`
- Campos adicionais recomendados para o novo hero, se necessários:
  - `image`
  - `image.alt`
  - `image.src`
  - `image.priority`
  - `image.objectPosition`
  - `supportingNote` ou equivalente para microcopy editorial curta
  - `contactQuote` ou equivalente para a citação curta do card lateral

O contrato deve permanecer serializável e local. Como o conteúdo já vive em `home-content.ts`, a prioridade é preservar ergonomia editorial sem criar abstrações extras, CMS local ou JSON paralelo só para o hero.

### Estratégia de Conteúdo e UX

O hero precisa concentrar a primeira impressão institucional da home: acolhimento, clareza e confiança. A hierarquia deve ser percebida em poucos segundos tanto em mobile quanto em desktop, evitando aparência de dashboard, grade promocional ou bloco genérico de landing page. A imagem principal não deve competir com a mensagem; ela funciona como prova emocional e institucional de cuidado humano, alinhada à referência `tasks/prd-hero-novo/somente-hero.png` e implementada com o asset aprovado `public/assets/image-hero.png`.

Os CTAs seguem hierarquia fixa:

- `Preciso de apoio` como ação primária
- `Quero ajudar` como ação secundária
- `Falar no WhatsApp` como ação funcional e imediata

Os highlights absorvidos no hero devem continuar curtos, legíveis e úteis para escaneabilidade. Em vez de viverem como uma faixa independente logo abaixo, eles devem reforçar a proposta de valor dentro do próprio bloco, ajudando a equilibrar comunicação para apoio, doação e aproximação com a causa. O resumo de contato continua sem formulário e sem coleta de dados sensíveis, com links simples quando aplicável.

A referência `somente-hero.png` deve ser interpretada como blueprint visual do hero. Isso implica preservar o mais fielmente possível:

- o peso dominante do heading na metade esquerda
- a relação entre texto, CTAs e highlights como uma mesma composição editorial
- a presença de uma imagem humana calorosa ao centro-direita
- a presença de um card lateral branco de contato já visível above the fold em desktop
- a sensação de uma peça contínua, sem blocos visualmente desconectados

São aceitáveis apenas ajustes leves de implementação, como:

- empilhamento e reordenação em mobile
- simplificação de ornamentos decorativos secundários
- pequenos ajustes de espaçamento, proporção e corte da imagem para evitar quebra de layout

Responsividade e acessibilidade:

- mobile-first com CTAs confortáveis ao toque
- heading principal e supporting copy legíveis sem depender da imagem
- contraste compatível com WCAG AA
- foco visível em todos os links e ações
- semântica preservada com `section`, `h1`, `h2` auxiliares apenas quando fizer sentido
- alt text objetivo para a imagem principal, descrevendo contexto humano sem apelo excessivo

## Pontos de Integração

Não há integrações externas novas. Os únicos pontos externos continuam sendo:

- `https://wa.me/...` para contato imediato
- `tel:` para telefone institucional
- âncoras internas da própria home

A imagem principal será o asset local versionado `public/assets/image-hero.png`. A implementação deve usar `next/image` quando a composição final pedir imagem raster, com dimensões estáveis, prioridade adequada e estratégia de enquadramento compatível com a composição aprovada para não prejudicar LCP nem gerar layout shift.

## Abordagem de Testes

### Testes Unidade

- Atualizar `src/app/page.test.tsx` para refletir a nova composição do topo da home.
- Atualizar `src/components/home/HomeSections.test.tsx` para validar o hero consolidado.
- Verificar presença e ordem dos CTAs principais.
- Verificar que os highlights continuam renderizados dentro do hero.
- Verificar que o caminho de doação do hero continua apontando para `#como-ajudar`.
- Verificar que o bloco de contato institucional permanece acessível e sem dependência de formulário.
- Verificar que a imagem principal do hero usa `public/assets/image-hero.png`.

### Testes de Composição

- Validar que `HeaderNav` continua apontando para IDs existentes após a remoção da faixa separada de highlights.
- Validar que a home mantém uma hierarquia semântica consistente no topo da página.
- Verificar que a remoção de `HomeHighlightsBand` como seção separada não quebra o ritmo da sequência `fundacao -> atuacao -> preciso-de-apoio`.

### Testes de E2E

A validação visual e funcional da UI deve usar Playwright MCP como parte explícita do fluxo desta iniciativa. Para cada implementação do hero, a revisão final deve incluir inspeção em `http://localhost:3000` com foco em:

- renderização above the fold em desktop
- leitura e tap targets em mobile
- presença e visibilidade dos três CTAs
- ordem visual e semântica do conteúdo principal
- estabilidade da imagem principal e ausência de sobreposição indevida
- presença visível do card lateral de contato na composição desktop
- aderência geral da estrutura implementada à referência `somente-hero.png`
- comportamento das âncoras e links externos

O Playwright MCP complementa, mas não substitui, os testes de unidade e os checks de lint/build.

## Sequenciamento de Desenvolvimento

### Ordem de Construção

1. Atualizar a modelagem de `homeContent.hero` para acomodar imagem local e composição consolidada.
2. Refatorar `HomeHeroSection` para absorver os highlights e reorganizar a hierarquia visual do topo segundo a estrutura de `somente-hero.png`.
3. Remover `HomeHighlightsBand` da composição de `src/app/page.tsx` e ajustar espaçamentos do fluxo da home.
4. Integrar `public/assets/image-hero.png` com estratégia otimizada de imagem e enquadramento coerente com a referência aprovada.
5. Atualizar testes de página e de composição do hero.
6. Validar com `npm run lint`, `npm run build` e revisão visual via Playwright MCP.

### Dependências Técnicas

- `public/assets/image-hero.png` como asset local final aprovado do hero
- `tasks/prd-hero-novo/somente-hero.png` como referência estrutural principal
- manutenção do conteúdo em `src/lib/home-content.ts`
- infraestrutura atual de `Jest` + `React Testing Library`
- ambiente local com `npm run dev` para validação visual via Playwright MCP

## SEO, Performance e Qualidade

O hero deve reforçar SEO local sem criar uma camada técnica nova: menções claras a `APAC Boituva`, apoio a pessoas em tratamento contra o câncer e contexto regional devem permanecer no conteúdo principal. Como a página segue estática e server-first, o principal cuidado de performance será controlar peso e dimensões da imagem principal, priorizando renderização estável e boa leitura no topo da página.

Em qualidade visual, a implementação deve seguir `DESIGN.md`: superfície clara, uso controlado do magenta institucional, verde reservado para contato/WhatsApp, sombras discretas, cantos suaves e motion opcional sempre leve. A validação final deve cruzar critérios automáticos (`lint`, `build`, testes) com revisão de UI no navegador via Playwright MCP. Como há uma referência estrutural aprovada, a comparação visual com `somente-hero.png` passa a ser critério explícito de qualidade.

## Considerações Técnicas

### Decisões Principais

- Manter a solução na rota raiz atual para preservar a home one-page e evitar expansão de escopo.
- Manter o conteúdo do hero em `src/lib/home-content.ts` porque o restante do conteúdo institucional já vive lá e isso reduz fragmentação editorial.
- Absorver os highlights no próprio hero para alinhar a implementação à direção aprovada e reduzir a sensação de bloco solto logo após a abertura.
- Usar `public/assets/image-hero.png` como asset local versionado da imagem principal porque ele já representa a direção visual aprovada para a peça.
- Tratar `somente-hero.png` como referência estrutural principal, com liberdade apenas para ajustes leves de implementação.
- Tornar Playwright MCP parte explícita do fluxo de validação de UI para garantir revisão real de layout, hierarquia e responsividade após cada implementação.

### Riscos Conhecidos

- `public/assets/image-hero.png` pode exigir corte ou reposicionamento para reproduzir bem a composição aprovada em diferentes larguras.
  Mitigação: projetar o hero com área visual flexível, `object-position` controlado e validação em breakpoints reais.
- A absorção dos highlights no hero pode aumentar demais a densidade do bloco em mobile.
  Mitigação: limitar texto, priorizar pilha vertical e testar visibilidade acima da dobra.
- A remoção da faixa separada pode exigir rebalanceamento do espaçamento entre hero e seção seguinte.
  Mitigação: ajustar ritmo com tokens e validar no navegador, não só por inspeção de código.
- A implementação pode se afastar da referência aprovada se a estrutura for tratada apenas como inspiração.
  Mitigação: registrar `somente-hero.png` como blueprint visual e incluí-lo no checklist de revisão.
- Sem validação visual real, a interface pode parecer correta no código e ainda falhar em hierarquia ou responsividade.
  Mitigação: incluir Playwright MCP como etapa obrigatória de revisão da UI.

### Conformidade com Skills Padrões

- `cria-techspec`: skill base usada para estruturar esta especificação.
- `brainstorming`: aplicável antes da implementação por envolver refinamento de comportamento visual e composição do hero.
- `frontend-design`: principal skill de execução visual para implementar o hero com qualidade institucional e evitar resultado genérico.
- `ui-craft`: aplicável para hierarquia, tipografia, ritmo visual e responsividade.
- `tailwindcss`: aplicável para executar o refinamento dentro do sistema de tokens e utilitários existente.
- `next-best-practices`: aplicável para manter Server Components por padrão, `next/image` e convenções do App Router.
- `vercel-react-best-practices`: aplicável para boundaries mínimos e composição performática.
- `web-design-guidelines`: aplicável como critério de revisão de acessibilidade e qualidade visual.
- `browser:browser` ou Playwright MCP do projeto: aplicável para validação visual e funcional da UI no navegador durante a implementação.

### Arquivos relevantes e dependentes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-hero-novo/prd.md)
- [somente-hero.png](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-hero-novo/somente-hero.png)
- [hero-novo.png](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-hero-novo/hero-novo.png)
- [apac-hero.png](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-hero-novo/apac-hero.png)
- [image-hero.png](/Users/caiobarutti/Documents/www/apac-web/public/assets/image-hero.png)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
- [HomeSections.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/home/HomeSections.tsx)
- [home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts)
- [page.test.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.test.tsx)
- [HomeSections.test.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/home/HomeSections.test.tsx)
- [globals.css](/Users/caiobarutti/Documents/www/apac-web/src/app/globals.css)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
- [playwright-mcp.md](/Users/caiobarutti/Documents/www/apac-web/.agents/project/playwright-mcp.md)
