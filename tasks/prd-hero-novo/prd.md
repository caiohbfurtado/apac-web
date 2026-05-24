# Template de Documento de Requisitos de Produto (PRD)

## Visão Geral

Esta iniciativa define os requisitos de produto para o novo hero da landing page institucional da APAC Boituva. O bloco atual de abertura transmite uma percepção visual genérica, desalinhada e com aparência artificial, o que enfraquece a sensação de acolhimento, confiança e cuidado humano logo no primeiro contato com o site.

O novo hero deve reposicionar essa primeira impressão. A experiência precisa comunicar, com clareza e sensibilidade, que a APAC Boituva oferece apoio a pessoas em tratamento contra o câncer e suas famílias, ao mesmo tempo em que abre caminhos claros para quem deseja ajudar a causa. O foco é criar um hero mais humano, institucional e acolhedor, alinhado à referência estrutural e visual aprovada em `somente-hero.png`, usando `public/assets/image-hero.png` como imagem principal do hero, sem expandir o escopo para o restante da home.

## Objetivos

- Substituir a percepção de visual genérico ou “parece IA” por uma abertura institucional, acolhedora e coerente com a proposta visual aprovada.
- Melhorar a clareza inicial sobre os três caminhos principais da home: pedir apoio, falar com a APAC e seguir para doação.
- Garantir equilíbrio de representação entre os públicos de apoio, doação e engajamento com a causa, sem competir excessivamente por atenção.
- Introduzir uma composição visual mais humana e acolhedora, orientada pela referência aprovada e adequada ao contexto sensível da ONG.
- Reforçar confiança local e relevância regional por meio de copy e sinais institucionais ligados a APAC Boituva.

Como é o sucesso:

- O hero recebe aprovação visual do time responsável.
- O resultado final é percebido como mais humano, alinhado, acolhedor e institucional.
- As CTAs principais ficam imediatamente compreensíveis.
- A estrutura, a hierarquia e a atmosfera visual aprovadas em `somente-hero.png` são refletidas no resultado final.
- A imagem principal `public/assets/image-hero.png` é integrada ao hero de forma coerente com a referência aprovada.

Métricas principais para acompanhar:

- Cliques em `Falar no WhatsApp`.
- Cliques em `Pedir apoio`.
- Cliques em ações de continuidade para doação.
- Feedback qualitativo interno sobre confiança, clareza e aderência visual.

Objetivos de negócio a alcançar:

- Aumentar a confiança na APAC Boituva logo no primeiro bloco da página.
- Reduzir a fricção para quem precisa iniciar um contato de apoio.
- Melhorar a orientação inicial para visitantes que desejam contribuir com a causa.

## Histórias de Usuário

- Como pessoa em busca de apoio oncológico em Boituva, eu quero entender rapidamente que a APAC pode me acolher para que eu saiba como iniciar contato sem medo ou confusão.
- Como familiar de alguém em tratamento contra o câncer, eu quero encontrar um caminho claro para falar com a instituição para que eu possa pedir orientação com rapidez.
- Como pessoa interessada em ajudar, eu quero reconhecer no hero que a APAC Boituva é séria e humana para que eu me sinta segura em seguir para doação.
- Como visitante que chegou ao site pela primeira vez, eu quero identificar logo no topo as principais ações disponíveis para que eu não precise explorar a página inteira antes de agir.
- Como pessoa acessando pelo celular, eu quero ver uma mensagem clara, CTAs fáceis de tocar e leitura confortável para que eu consiga agir com rapidez.

Personas primárias e secundárias:

- Pessoas em tratamento contra o câncer que precisam de acolhimento e orientação.
- Familiares e cuidadores buscando apoio e contato inicial.
- Doadores em potencial que querem contribuir com confiança.
- Pessoas interessadas em se aproximar da causa e conhecer a atuação da instituição.

Fluxos principais e objeções:

- Iniciar conversa pelo WhatsApp com o mínimo de fricção.
- Entender que existe apoio disponível e onde começar.
- Seguir para a jornada de doação sem ambiguidade.
- Superar a impressão de site genérico ou pouco confiável.
- Evitar insegurança causada por excesso de informação, layout frio ou estética artificial.

## Funcionalidades Principais

- Hero institucional com mensagem principal clara
  - O hero deve comunicar com clareza que a APAC Boituva acolhe e apoia pessoas em tratamento contra o câncer e suas famílias.
  - Isso é importante porque o primeiro bloco precisa estabelecer confiança imediata e reduzir a incerteza de quem chega ao site.
  - Em alto nível, o hero deve combinar mensagem institucional, acolhimento visual e orientação objetiva para ação.

Requisitos funcionais:

1. O hero deve apresentar proposta de valor clara, humana e institucional ligada à APAC Boituva.
2. O hero deve equilibrar a comunicação para três públicos: quem precisa de apoio, quem quer doar e quem deseja se aproximar da causa.
3. O hero deve priorizar visualmente as ações `Falar no WhatsApp` e `Pedir apoio`.
4. O hero deve manter um caminho perceptível para continuidade da jornada de doação, mesmo sem competir com a CTA principal de apoio.
5. O hero deve usar copy com palavras-chave locais e contextuais relacionadas a `APAC Boituva`, apoio e tratamento contra o câncer.
6. O hero deve perseguir a mesma anatomia visual da referência `somente-hero.png`, com bloco editorial à esquerda, imagem humana em destaque e card institucional de contato visível no mesmo enquadramento em desktop.

- Hierarquia de ações simples e escaneável
  - A experiência deve reduzir ambiguidade logo no topo da página.
  - Isso é importante porque o usuário precisa identificar rapidamente o que fazer sem interpretar blocos excessivos ou competir com muitas chamadas simultâneas.
  - Em alto nível, o hero deve deixar explícito o caminho de contato e o caminho de apoio institucional.

Requisitos funcionais:

7. O hero deve permitir leitura rápida das ações principais em desktop e mobile.
8. O hero não deve depender de textos longos para explicar o próximo passo do usuário.
9. O hero deve evitar excesso de elementos visuais que façam a abertura parecer um dashboard, grade promocional ou conjunto de cards genéricos.
10. Os CTAs `Preciso de apoio`, `Quero ajudar` e `Falar no WhatsApp` devem aparecer como faixa de ações claramente integrada ao hero, com hierarquia próxima à da referência aprovada.
11. O card institucional de contato deve permanecer visível como parte do hero em desktop e continuar perceptível em mobile por adaptação responsiva, sem perder relevância.

- Direção visual com imagens acolhedoras
  - O hero deve incorporar imagens capazes de transmitir humanidade, cuidado e confiança.
  - Isso é importante porque parte central do problema é a falta de calor humano na abertura atual.
  - Em alto nível, o conteúdo visual deve ser guiado pela referência aprovada e por critérios editoriais compatíveis com uma ONG de apoio oncológico.

Requisitos funcionais:

12. O hero deve usar `public/assets/image-hero.png` como imagem principal aprovada da composição.
13. A composição visual do hero deve seguir direção alinhada ao arquivo de referência `somente-hero.png`, especialmente na relação entre texto, imagem principal, card lateral e highlights inferiores.
14. A imagem principal deve transmitir acolhimento, cuidado, proximidade humana e credibilidade institucional, sem dramatização excessiva.
15. A imagem principal não deve parecer artificial, comercial demais, hospitalar em excesso ou emocionalmente apelativa.
16. O conteúdo visual deve apoiar a mensagem principal do hero, e não competir com ela.
17. Os highlights institucionais devem aparecer integrados à base do hero, reforçando acolhimento, assistência social, conscientização e rede comunitária.

- Suporte visual complementar com ícones consistentes
  - O hero pode usar ícones para reforçar escaneabilidade e confiança.
  - Isso é importante porque os ícones ajudam a sintetizar caminhos e pontos institucionais sem alongar a copy.
  - Em alto nível, os ícones devem ter linguagem visual consistente com a interface e com o tom institucional do site.

Requisitos funcionais:

18. O hero deve prever uso de ícones consistentes e legíveis para apoiar a hierarquia das informações.
19. Os ícones devem reforçar compreensão e não servir apenas como ornamentação.

## Experiência do Usuário

O hero deve oferecer uma experiência editorial, mobile-first, acolhedora e clara. A interface precisa parecer construída com cuidado humano, com leitura confortável, conteúdo escaneável e foco em confiança. A mensagem deve ser institucional sem soar fria, e emocional sem exagero.

Personas e necessidades:

- Quem precisa de apoio precisa de segurança, clareza e uma forma direta de iniciar contato.
- Quem deseja doar precisa perceber seriedade, organização e legitimidade local.
- Quem está conhecendo a causa precisa entender rapidamente o papel da APAC Boituva e identificar como agir.

Fluxos e interações principais:

- Ver a mensagem principal e compreender imediatamente o contexto de apoio.
- Identificar e acionar `Falar no WhatsApp`.
- Identificar e acionar `Pedir apoio`.
- Reconhecer um caminho de continuidade para doação.

Considerações e requisitos de UI/UX:

- A experiência deve manter contraste forte entre texto e fundo.
- O hero deve funcionar muito bem em mobile, com CTAs fáceis de tocar e leitura sem esforço.
- O tom de voz deve ser claro, humano, respeitoso e inclusivo.
- A hierarquia visual deve evitar desalinhamento, sensação de template e aparência artificial.
- Motion, se existir, deve ser leve, discreto e acolhedor, nunca chamativo.
- O bloco deve refletir a composição, o ritmo e a intenção visual indicados em `somente-hero.png`, com liberdade apenas para adaptações leves de implementação e responsividade.
- O hero deve se comportar como uma peça visual única, evitando a sensação de seções independentes ou cards soltos.

Hierarquia de conteúdo e CTAs:

- A mensagem principal deve deixar claro quem a APAC Boituva ajuda e como iniciar contato.
- `Falar no WhatsApp` e `Pedir apoio` devem ser as ações mais evidentes.
- A continuidade para doação deve existir como próximo passo visível, mas sem roubar protagonismo das ações de acolhimento.
- O bloco de contato institucional deve ser percebido já no topo da página, como parte da composição principal do hero.

Requisitos de acessibilidade:

- O hero deve atender a uma meta de contraste compatível com WCAG AA.
- A navegação por teclado deve funcionar nas ações interativas do bloco.
- A estrutura de headings deve contribuir para clareza semântica da página.
- O conteúdo principal do hero deve permanecer compreensível sem depender exclusivamente das imagens.

## Restrições Técnicas de Alto Nível

- O escopo desta iniciativa cobre apenas o hero da página inicial, sem incluir redesign completo da home.
- A solução deve respeitar responsividade mobile-first e manter boa experiência em desktop.
- A iniciativa deve considerar requisitos básicos de SEO local, especialmente menções claras a `APAC Boituva` e termos relacionados a apoio a pessoas em tratamento contra o câncer.
- A experiência não deve coletar dados sensíveis de saúde dentro do hero.
- A implementação deve usar `public/assets/image-hero.png` como asset visual principal já aprovado para a hero.
- A solução deve seguir a estrutura aprovada em `somente-hero.png`, admitindo apenas adaptações leves necessárias por responsividade, conteúdo real e limitações pontuais da implementação.
- O hero precisa continuar transmitindo confiança institucional e clareza mesmo que futuros ajustes visuais ocorram em outras seções da página.

Detalhes de implementação serão abordados na Especificação Técnica.

## Fora de Escopo

- Redesenhar o restante da home nesta etapa.
- Criar ou alterar fluxos completos fora do hero.
- Introduzir animações fortes, chamativas ou decorativas.
- Adicionar formulário diretamente no hero.
- Criar tema claro/escuro.
- Inventar números, impactos, campanhas ou dados não comprovados.
- Incluir elementos visuais que façam a experiência parecer comercial, hospitalar em excesso ou semelhante a dashboard.
- Definir detalhes de implementação, arquitetura de componentes ou decisões técnicas de Tailwind e React nesta etapa.
- Substituir a estrutura-base aprovada em `somente-hero.png` por uma composição significativamente diferente sem necessidade real de implementação.
