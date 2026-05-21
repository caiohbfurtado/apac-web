# Template de Especificação Técnica

## Resumo Executivo

O refinamento da home será implementado na rota raiz existente (`src/app/page.tsx`) como uma landing one-page com navegação por âncoras, preservando a abordagem mobile-first e o uso predominante de Server Components. A solução vai evoluir a estrutura atual da página para uma composição mais editorial, com hero mais aberto visualmente, blocos institucionais mais distintos, placeholders visuais bem definidos e CTAs priorizados para apoio, colaboração e contato via WhatsApp.

O conteúdo continuará local ao repositório, mas deixará de viver inteiramente em um objeto monolítico: campanhas e patrocinadores passarão a ser alimentados por estruturas serializáveis locais, preferencialmente em JSON ou módulo de dados equivalente, com renderização condicional. Se os arrays vierem vazios, as seções não serão exibidas. Isso reduz atrito editorial sem introduzir CMS, automação ou integrações novas nesta fase.

## Arquitetura do Sistema

### Visão Geral dos Componentes

- `src/app/page.tsx`: continuará como entrypoint da home e será reorganizado para compor a nova narrativa one-page, separando o hero em uma faixa mais ampla do restante do conteúdo.
- `src/lib/home-content.ts`: será refinado para guardar conteúdo institucional estático da home e CTAs principais.
- `src/lib/home-sections-data.json` ou módulo equivalente: novo arquivo serializável para campanhas e patrocinadores, com arrays independentes e opcionais.
- `HeaderNav` e `HeaderNavMobileMenu`: serão ajustados para refletir a nova IA da home, mantendo navegação por âncoras e CTA principal no topo.
- `Footer`: poderá ser atualizado para refletir os mesmos caminhos institucionais e reforçar confiança.
- Novas seções compostas da home:
  - `HeroSection`
  - `HighlightsSection`
  - `SupportSection`
  - `CampaignsSection`
  - `SponsorsSection`
  - `TrustSection`
  - `ClosingSection`
- Componentes base que serão reutilizados ou ajustados:
  - `Container`
  - `Section`
  - `Stack`
  - `Badge`
  - `Card`
  - `Heading`
  - `Text`
  - `PrimaryButton`, `SecondaryButton`, `WhatsAppButton`

O fluxo será simples: a página carrega conteúdo local, decide em tempo de render quais blocos opcionais existem, e monta a interface com primitives já existentes e pequenas composições específicas da home.

## Design de Implementação

### Estrutura de Rotas e Seções

- A solução vive apenas em `src/app/page.tsx`.
- Não haverá criação de novas rotas para doações, voluntariado, eventos ou contato nesta fase.
- A navegação do topo continuará rolando para IDs da própria página.
- A home será organizada em seções com responsabilidades claras:
  - hero com mensagem principal, CTAs e card de contato resumido
  - composição visual livre no hero para apoiar a narrativa sem moldura externa pesada
  - bloco “como a APAC ajuda”
  - bloco “preciso de apoio”
  - campanhas em destaque, se houver conteúdo
  - patrocinadores/parceiros, se houver conteúdo
  - transparência e confiança institucional
  - fechamento com CTA final

Server Components seguem como padrão. Apenas o menu mobile permanece como boundary client-side já justificada por estado de interface.

### Interfaces Principais

- `homeContent`: mantém contrato para hero, CTAs globais, textos institucionais e seções sempre presentes.
- `campaigns`: array de itens com campos como `slug`, `title`, `description`, `badge`, `href` e possíveis metadados visuais.
- `sponsors`: array de itens com campos como `name`, `href`, `description`, `image/logo` curta e placeholder de marca/imagem.
- Seções opcionais devem consumir helpers simples como:
  - `hasCampaigns = campaigns.length > 0`
  - `hasSponsors = sponsors.length > 0`

Se o projeto optar por JSON puro, a leitura deve permanecer síncrona e local, sem fetch. Se houver necessidade de tipagem mais forte, um módulo TypeScript pode encapsular o parse do JSON e expor tipos inferidos sem mudar a estratégia editorial.

### Estratégia de Conteúdo e UX

A hierarquia da página deve espelhar o mock `tasks/design-v2.png`: acolhimento imediato no hero, prova de utilidade logo em seguida, caminhos práticos de ação no meio da página e reforço institucional no fechamento. O objetivo não é copiar a arte literalmente, mas reproduzir sua lógica de ritmo visual, densidade e calor humano dentro do design system existente. O hero não deve ser encerrado por uma grande moldura: ele precisa respirar na mesma largura visual do header, com a narrativa principal à esquerda e a composição de apoio à direita.

Os CTAs principais serão:

- `Preciso de apoio` como ação primária orientada a beneficiários e familiares
- `Quero ajudar` como ação secundária institucional
- `Falar no WhatsApp` como atalho funcional de contato

O bloco de contato do hero e a seção de apoio usarão links simples e placeholders para endereço, telefone e “como chegar”, sem formulário funcional nem integração externa. Acessibilidade continua mandatória: landmarks claros, ordem correta de headings, foco visível, contraste adequado e imagens/placeholders com texto alternativo coerente quando aplicável. Para evitar ruído visual, o hero deve priorizar uma composição limpa, com menos blocos e sem caixas aninhadas desnecessárias.

## Pontos de Integração

Não há integrações externas obrigatórias. Os únicos pontos externos continuam sendo links simples como `https://wa.me/...`, `tel:` e eventual link de mapa/endereço. O tratamento de erro é mínimo porque não há consumo de API; o principal cuidado técnico será lidar com ausência de conteúdo opcional sem gerar espaços vazios ou headings órfãos.

## Abordagem de Testes

### Testes Unidade

- Atualizar testes da home para cobrir a nova estrutura e os CTAs principais.
- Cobrir renderização condicional de `CampaignsSection` e `SponsorsSection`.
- Cobrir fallback quando arrays opcionais estiverem vazios.
- Validar que links principais do hero e do bloco de apoio continuam acessíveis.
- Testar eventuais novos componentes compostos específicos da home quando tiverem comportamento próprio relevante.

### Testes de Composição

- Garantir que `HeaderNav` aponta para âncoras existentes na página.
- Validar que a home renderiza a sequência principal de landmarks e headings sem saltos problemáticos.
- Verificar composição entre hero, destaques e bloco de apoio em cenários com e sem campanhas/patrocinadores.

### Testes de E2E

Não é necessário introduzir E2E nesta fase. A prioridade é manter cobertura com `Jest` + `React Testing Library` na página e nos componentes alterados.

## Sequenciamento de Desenvolvimento

### Ordem de Construção

1. Revisar e modelar a camada de conteúdo local da home, separando dados fixos de listas editoriais opcionais.
2. Reorganizar `src/app/page.tsx` em seções compostas menores, preservando a rota única.
3. Ajustar componentes de navegação e rodapé para a nova arquitetura de seções.
4. Implementar placeholders visuais e blocos editoriais condicionais.
5. Atualizar testes da home e das seções modificadas.
6. Validar com `npm run lint` e `npm run build`.

### Dependências Técnicas

- Nenhuma nova dependência é obrigatória.
- A solução reutiliza `Next.js 16`, `React 19`, `Tailwind CSS v4` e a infraestrutura atual de testes.
- Assets finais de imagem, ícones e logos continuam fora do escopo; a implementação deve reservar espaço para eles sem bloquear entrega.

## SEO, Performance e Qualidade

A home deve continuar semanticamente forte para futuras evoluções de SEO, mesmo sem aprofundamento nesta tarefa. Como a página permanece estática e local, o impacto em performance tende a ser baixo. O cuidado maior será evitar excesso de markup ou ornamento visual que prejudique LCP e leitura em mobile. Placeholders visuais devem ter dimensões estáveis para evitar layout shift perceptível.

Em qualidade visual, a implementação precisa seguir `DESIGN.md` e as referências do mock v2: superfícies claras, uso controlado do magenta institucional, verde restrito a contato/WhatsApp, sombras discretas, cantos suaves e animações leves. A página deve parecer institucional e humana, não promocional ou genérica.

## Considerações Técnicas

### Decisões Principais

- Manter a home como página única com âncoras porque isso preserva a jornada simples definida no PRD.
- Separar campanhas e patrocinadores em conteúdo serializável local porque isso facilita inclusão, remoção e edição sem exigir CMS.
- Renderizar seções opcionais apenas quando houver itens porque isso evita blocos artificiais ou vazios.
- Usar placeholders e links simples para contato/endereço nesta fase porque integrações e fluxos completos ficaram explicitamente fora do escopo.

### Riscos Conhecidos

- O mock v2 é mais rico que a estrutura atual, então há risco de a home crescer demais sem boa modularização.
  Mitigação: quebrar a página em composições pequenas por seção, sem inflar APIs de componentes base, e manter o hero com hierarquia visual aberta.
- JSON puro pode perder ergonomia de tipagem se crescer sem disciplina.
  Mitigação: adicionar tipos locais ou wrapper TypeScript caso a estrutura comece a expandir.
- Seções opcionais podem criar desalinhamento visual quando ausentes.
  Mitigação: pensar a ordem da página para que campanhas e patrocinadores possam desaparecer sem quebrar ritmo ou divisórias.

### Conformidade com Skills Padrões

- `cria-techspec`: estrutura e critérios desta especificação.
- `brainstorming`: aplicável como base para desenho da solução antes da implementação da UI.
- `ui-craft`: direção de refinamento visual, ritmo de seções e placeholders narrativos.
- `tailwindcss`: manutenção da estratégia baseada em tokens e utilitários mobile-first.
- `vercel-react-best-practices`: Server Components por padrão e boundaries client mínimos.
- `vercel-composition-patterns`: composição por seções e primitives, evitando APIs infladas.
- `web-design-guidelines`: acessibilidade, clareza de CTA e qualidade de navegação como critérios de revisão.
- `next-best-practices`: preservação das convenções do App Router e metadata existente.

### Arquivos relevantes e dependentes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/prd.md)
- [prompt-design-v2.md](/Users/caiobarutti/Documents/www/apac-web/docs/design_v2/prompt-design-v2.md)
- [design-v2.png](/Users/caiobarutti/Documents/www/apac-web/tasks/design-v2.png)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
- [home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts)
- [HeaderNav.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNav.tsx)
- [HeaderNavMobileMenu.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNavMobileMenu.tsx)
- [Footer.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/Footer.tsx)
- [globals.css](/Users/caiobarutti/Documents/www/apac-web/src/app/globals.css)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
