<task>
    Implementação da nova direção visual e design system da landing page institucional da APAC Boituva
</task>

<role>
    Você é um desenvolvedor frontend senior especializado em React, Next.js, Tailwind CSS, design systems acessíveis e interfaces institucionais de alta qualidade.

    Você está implementando a <task> com base na proposta visual fornecida via imagem PNG `tasks/new-design-v3.png` e na estrutura já existente do projeto.
</role>

<context>
    A APAC Boituva é uma entidade sem fins lucrativos que oferece acolhimento, apoio emocional, suporte social e ações comunitárias para pessoas em tratamento contra o câncer e suas famílias.

    O site já possui uma estrutura inicial, mas o design atual está muito simples, frio, largo e com aparência excessivamente clean/template. A nova proposta deve manter a essência da estrutura existente, mas elevar a qualidade visual, emocional e institucional da interface.

    O objetivo é criar uma landing page moderna, acolhedora, confiável e comunitária, que direcione claramente três públicos principais:

    - pessoas que precisam de apoio;
    - pessoas que querem ajudar com doações;
    - pessoas que querem se voluntariar ou apoiar como parceiras.

    A interface deve parecer feita com cuidado humano, não gerada por IA. Evite aparência de dashboard, SaaS genérico ou coleção de boxes.
</context>

<visual_direction>
    A direção visual desejada é:

    - moderna;
    - acolhedora;
    - humana;
    - institucional;
    - comunitária;
    - emocional sem exagero;
    - simples de navegar;
    - sem aparência hospitalar demais;
    - sem aparência comercial;
    - sem excesso de cards brancos com borda e sombra.

    Use a proposta visual em PNG como principal referência estética.

    O layout desktop deve ter largura mais controlada e editorial. Evite espalhar demais os elementos na tela. Use largura máxima consistente para o conteúdo principal.

    As seções principais devem aparecer como faixas ou blocos editoriais independentes, uma abaixo da outra, sem um grande box externo envolvendo cada seção.
</visual_direction>

<requirements>
    ### Business

    - Criar componentes de UI reutilizáveis.
    - Usar composition pattern quando fizer sentido.
    - Criar um tema claro, consistente e estruturado para ser usado em todos os componentes e telas.
    - Implementar todos os componentes necessários para a visão completa da página final.
    - Manter a landing page orientada para conversão institucional:
        - pedir apoio;
        - falar no WhatsApp;
        - doar;
        - doar cabelo;
        - ser voluntário;
        - apoiar como empresa;
        - conhecer campanhas;
        - entender transparência e confiança;
        - visualizar apoiadores.

    ### Technical

    - Implementar componentes na pasta ./components.
    - Atualizar ou criar o tema do Tailwind para ser usado em toda a UI do site.
    - Nunca usar valores hexadecimais diretamente nos componentes.
    - Nunca usar valores fixos arbitrários para estilização quando houver token de tema possível.
    - Sempre preferir tokens de tema do Tailwind.
    - Criar tokens semânticos para cores, espaçamentos, radius, shadows, typography e motion.
    - Manter os componentes desacoplados, reutilizáveis e fáceis de compor.
    - Preservar a estrutura de Next.js já existente.
    - Não refatorar a aplicação inteira sem necessidade.
    - Melhorar a UI mantendo a arquitetura simples e sustentável.

    ### UI/UX

    - Design responsivo mobile-first.
    - Interface acessível.
    - Botões grandes e fáceis de tocar.
    - Navegação clara por âncoras.
    - WhatsApp como CTA principal.
    - Alto contraste entre texto e fundo.
    - Estados de hover, focus-visible, active e disabled.
    - Animações sutis, performáticas e com propósito.
    - Evitar excesso de animação.
    - Evitar textos longos.
    - Priorizar clareza, acolhimento e confiança.
    - Não coletar dados sensíveis de saúde.
    - Deixar claro que o site é informativo e que atendimentos devem ser confirmados diretamente com a APAC.
</requirements>

<design_system>
    Crie ou ajuste o design system com tokens semânticos baseados na identidade da APAC.

    ### Cores

    Configure as cores no tema do Tailwind usando nomes semânticos. Não use hexadecimais diretamente nos componentes.

    Tokens sugeridos:

    - brand.primary
    - brand.primaryDark
    - brand.soft
    - brand.subtle
    - background.page
    - background.surface
    - background.softPink
    - text.primary
    - text.secondary
    - text.muted
    - border.subtle
    - success.primary
    - success.soft
    - trust.primary
    - warning.soft
    - warning.primary

    A paleta deve refletir:

    - rosa principal da APAC;
    - rosa escuro para contraste;
    - rosa muito claro para fundos acolhedores;
    - verde para esperança e WhatsApp;
    - azul para confiança;
    - amarelo suave para avisos;
    - preto suave para texto principal;
    - cinza para textos secundários e bordas discretas.

    ### Tipografia

    Usar fonte moderna, acessível e acolhedora, preferencialmente Inter, Nunito Sans ou Lato.

    Criar escala tipográfica clara para:

    - display;
    - h1;
    - h2;
    - h3;
    - body;
    - small;
    - label;
    - button.

    Os títulos devem ter mais presença visual, mas sem parecer agressivos.

    A palavra “esperança” no hero deve receber destaque visual especial com rosa, sublinhado orgânico ou estilo mais emocional, sem prejudicar a leitura.

    ### Espaçamento

    Definir espaçamentos consistentes no tema.

    A página deve ter mais respiro vertical entre as seções e menos dependência de boxes com padding interno.

    ### Bordas e radius

    Usar cantos arredondados com moderação.

    Evitar que todos os elementos tenham o mesmo radius grande.

    Criar tokens para:

    - radius.sm
    - radius.md
    - radius.lg
    - radius.xl
    - radius.pill

    ### Sombras

    Usar sombras sutis e contextuais.

    Evitar sombra padrão em todos os elementos.

    Criar tokens para:

    - shadow.soft
    - shadow.lifted
    - shadow.focus
    - shadow.none

    ### Motion

    Criar transições suaves para:

    - botões;
    - links;
    - cards pequenos;
    - menu mobile;
    - botão flutuante de WhatsApp.

    Usar duração e easing via tokens de tema.
</design_system>

<layout_requirements>
    ### Layout geral

    O desktop atual está muito largo. Ajuste a composição para uma largura mais controlada.

    - Usar container centralizado.
    - Definir largura máxima aproximada via token de tema.
    - Evitar que os elementos fiquem espalhados em telas grandes.
    - Usar seções horizontais independentes, uma abaixo da outra.
    - Evitar grids excessivamente largos.
    - Reduzir aparência de dashboard.

    ### Header

    Criar header limpo, acessível e responsivo.

    Desktop:
    - Logo APAC à esquerda.
    - Links no centro ou à direita:
        - Quem somos
        - Como ajudamos
        - Doações
        - Voluntariado
        - Eventos
        - Contato
    - Botão “Falar no WhatsApp” em destaque.

    Mobile:
    - Logo.
    - Botão WhatsApp.
    - Botão de menu.
    - Menu acessível, com aria-expanded e navegação por teclado.

    ### Hero

    Criar um hero mais forte, humano e acolhedor.

    Deve conter:
    - título principal;
    - destaque visual na palavra “esperança”;
    - subtítulo curto;
    - CTAs:
        - Preciso de apoio;
        - Quero ajudar;
        - Falar no WhatsApp;
    - área visual com imagem/ilustração acolhedora;
    - card ou bloco lateral de contato institucional.

    O hero deve usar:
    - fundo em gradiente suave;
    - formas orgânicas discretas;
    - elementos visuais relacionados ao laço rosa, coração, cuidado ou acolhimento;
    - composição editorial, não aparência de dashboard.

    ### Faixa de serviços rápidos

    Abaixo do hero, criar uma faixa horizontal com os principais pilares:
    - Acolhimento;
    - Assistência social;
    - Conscientização;
    - Rede comunitária.

    Essa faixa pode ter ícones e divisórias sutis, mas não deve parecer um grande card genérico.

    ### Seção “Preciso de apoio”

    Esta seção deve ocupar sua própria linha no desktop.

    Não envolver tudo em um box grande.

    Criar uma faixa editorial com:
    - ícone grande ou ilustração discreta;
    - título;
    - microcopy acolhedora;
    - WhatsApp em destaque;
    - telefone;
    - endereço;
    - aviso médico discreto.

    Texto sugerido:
    “Você não precisa passar por isso sozinho(a). Fale com a equipe da APAC.”

    Aviso:
    “Em caso de emergência médica, procure atendimento de saúde imediatamente.”

    ### Seção “Como ajudar”

    Esta seção deve ocupar sua própria linha no desktop.

    Evitar quatro cards pesados iguais.

    Criar uma composição com introdução à esquerda e opções à direita, usando:
    - ícones;
    - divisórias leves;
    - listas visuais;
    - CTAs textuais.

    Opções:
    - Fazer doação;
    - Doar cabelo;
    - Ser voluntário;
    - Apoio de empresas e parceiros.

    Cada item deve ter CTA claro.

    ### Seção “Campanhas e eventos”

    Esta seção deve ocupar sua própria linha no desktop.

    Pode usar cards menores com imagem ou thumbnail.

    Não colocar todos os cards dentro de um box maior.

    Campanhas sugeridas:
    - Outubro Rosa;
    - Bazares solidários;
    - Chás beneficentes;
    - Caminhadas solidárias;
    - Ações de arrecadação.

    Cada item deve ter:
    - imagem ou placeholder visual;
    - título;
    - descrição curta;
    - CTA.

    ### Seção “Transparência e confiança”

    Esta seção deve ocupar sua própria linha no desktop.

    Criar visual de confiança institucional.

    Usar formato de pilares, linha editorial ou timeline simples.

    Pilares:
    - Prestação de contas;
    - Rede parceira;
    - Governança clara;
    - Comunicação aberta.

    Não inventar números.

    Usar texto qualitativo e placeholders como:
    “Em breve: registros de campanhas e ações realizadas.”

    ### Seção “Nossos apoiadores”

    Esta seção deve ocupar sua própria linha no desktop.

    Usar uma faixa discreta com:
    - texto curto;
    - logos placeholders pequenos;
    - CTA “Seja um parceiro”.

    Evitar cards grandes para apoiadores fictícios.

    ### CTA final

    Criar CTA final emocional e forte.

    Usar fundo com rosa principal ou gradiente rosa/verde, mantendo contraste adequado.

    Texto sugerido:
    “Sua contribuição amplia o cuidado.”

    Subtexto:
    “Com doação, voluntariado ou divulgação, você fortalece uma rede que acolhe quem mais precisa.”

    Botões:
    - Quero ajudar;
    - Preciso de apoio;
    - Falar no WhatsApp.

    ### Footer

    Criar footer completo e institucional.

    Deve conter:
    - logo;
    - descrição curta;
    - links institucionais;
    - links de ajuda;
    - contato;
    - endereço;
    - redes sociais;
    - texto de crédito voluntário.

    Usar visual polido, com fundo suave e boa legibilidade.
</layout_requirements>

<components>
    Implemente componentes reutilizáveis em ./components.

    Componentes sugeridos:

    - Button
    - IconButton
    - WhatsAppButton
    - Section
    - SectionHeader
    - Container
    - Header
    - MobileMenu
    - Hero
    - ContactPanel
    - QuickSupportStrip
    - SupportSection
    - HelpWaysSection
    - HelpWayItem
    - CampaignsSection
    - CampaignCard
    - TransparencySection
    - TrustPillar
    - SupportersSection
    - SupporterLogoPlaceholder
    - FinalCTA
    - Footer
    - Badge
    - Alert
    - LinkWithArrow
    - FloatingWhatsAppButton

    Use composition pattern quando fizer sentido.

    Exemplos esperados:
    - Section com Section.Header e Section.Content quando fizer sentido.
    - Button com variantes semânticas.
    - CampaignCard composto por imagem, conteúdo e ação.
    - ContactPanel composto por itens de contato.
    - Alert com variantes success, warning, info e error.
</components>

<component_variants>
    ### Button

    Criar variantes:

    - primary
    - secondary
    - whatsapp
    - ghost
    - link

    Criar tamanhos:

    - sm
    - md
    - lg

    Estados:

    - default
    - hover
    - active
    - focus-visible
    - disabled
    - loading, se fizer sentido

    ### Badge

    Variantes:

    - brand
    - success
    - trust
    - warning
    - neutral

    ### Alert

    Variantes:

    - info
    - success
    - warning
    - error

    ### Cards pequenos

    Usar cards apenas onde fizer sentido, principalmente:
    - campanhas;
    - eventos;
    - itens pontuais.

    Evitar criar cards grandes genéricos em volta de seções inteiras.
</component_variants>

<responsive_behavior>
    ### Mobile-first

    O mobile deve ser tratado como prioridade.

    Mobile:
    - header compacto;
    - logo visível;
    - botão de WhatsApp no topo;
    - menu acessível;
    - CTAs grandes logo no hero;
    - seções empilhadas;
    - botão flutuante de WhatsApp;
    - boa leitura e espaçamento vertical;
    - evitar grids apertados;
    - evitar rolagem horizontal.

    Tablet:
    - ajustar grids para duas colunas quando fizer sentido;
    - preservar legibilidade.

    Desktop:
    - usar container controlado;
    - seções principais em linhas independentes;
    - evitar largura excessiva;
    - evitar excesso de cards lado a lado;
    - usar composição editorial com imagem, ícones, texto e CTAs.
</responsive_behavior>

<accessibility>
    - Usar HTML semântico.
    - Usar aria-label em botões apenas com ícone.
    - Usar aria-expanded e aria-controls no menu mobile.
    - Garantir navegação por teclado.
    - Garantir estados focus-visible.
    - Garantir contraste adequado.
    - Usar alt text nas imagens.
    - Não depender apenas de cor para comunicar status.
    - Respeitar prefers-reduced-motion.
    - Não coletar dados sensíveis de saúde.
</accessibility>

<animations>
    As animações devem ser sutis e melhorar a percepção de qualidade.

    Implementar:
    - transições suaves em botões e links;
    - leve elevação em cards pequenos;
    - entrada suave das seções se já houver padrão no projeto;
    - abertura/fechamento fluida do menu mobile;
    - feedback visual no botão flutuante de WhatsApp.

    Evitar:
    - animações exageradas;
    - movimentos que atrapalhem leitura;
    - efeitos muito “landing page comercial”.
</animations>

<tests>
    ### Validação de componentes

    Todos os componentes e tema devem ter testes unitários usando Jest + React Testing Library.

    Criar testes para:

    - renderização básica dos componentes;
    - variantes principais;
    - estados de botão;
    - links e CTAs com href correto;
    - acessibilidade básica do menu mobile;
    - renderização das seções principais;
    - comportamento de composição quando aplicável.

    Testes mínimos esperados:

    - Button.test.tsx
    - Header.test.tsx
    - MobileMenu.test.tsx
    - Hero.test.tsx
    - ContactPanel.test.tsx
    - SupportSection.test.tsx
    - HelpWaysSection.test.tsx
    - CampaignCard.test.tsx
    - TransparencySection.test.tsx
    - FinalCTA.test.tsx
    - Footer.test.tsx
</tests>

<critical>
    ### Skills obrigatórias

    - web-design-guidelines — interfaces de alta qualidade, design distintivo, acessibilidade e boas práticas de UX.
    - tailwindcss — estilização via tokens de tema.
    - ui-craft — responsividade, cores dinâmicas, animações e refinamento visual.
    - vercel-react-best-practices — padrões de performance e componentes React.
    - vercel-composition-patterns — padrões de composição em componentes React.

    ### Fora do escopo

    - NÃO implementar tema claro/escuro.
    - NÃO criar comentários no código.
    - NÃO usar valores hexadecimais diretamente nos componentes.
    - NÃO usar px fixo ou valores arbitrários quando existir alternativa via token.
    - NÃO transformar a interface em dashboard.
    - NÃO criar excesso de boxes/cards.
    - NÃO inventar números de impacto, doações ou campanhas.
    - NÃO coletar dados sensíveis de saúde.
</critical>

<implementation_steps>
    1. Analise a estrutura atual do projeto.
    2. Identifique onde estão:
        - componentes existentes;
        - estilos globais;
        - configuração do Tailwind;
        - página principal;
        - testes existentes.
    3. Crie ou ajuste os tokens do tema no Tailwind.
    4. Crie os componentes reutilizáveis em ./components.
    5. Aplique os componentes na página principal.
    6. Ajuste a responsividade mobile-first.
    7. Adicione estados acessíveis de interação.
    8. Adicione animações sutis.
    9. Crie ou atualize os testes unitários.
    10. Rode lint, testes e build.
    11. Corrija todos os erros antes de finalizar.
</implementation_steps>

<acceptance_criteria>
    A implementação será considerada concluída quando:

    - o design estiver visualmente mais acolhedor, moderno e institucional;
    - o desktop não parecer excessivamente largo;
    - as seções principais estiverem em linhas independentes;
    - houver menos aparência de boxes/cards genéricos;
    - o WhatsApp estiver claramente priorizado;
    - o usuário conseguir entender rapidamente como pedir apoio;
    - o usuário conseguir entender rapidamente como ajudar;
    - o usuário conseguir entender rapidamente como se voluntariar;
    - a UI estiver responsiva;
    - os componentes estiverem reutilizáveis;
    - o tema estiver estruturado no Tailwind;
    - não existirem hexadecimais ou valores fixos espalhados nos componentes;
    - os testes unitários estiverem implementados e passando;
    - o build estiver funcionando.
</acceptance_criteria>
