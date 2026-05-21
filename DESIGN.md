# DESIGN.md

Fonte de verdade de design do projeto.

Este documento registra os padrões visuais, princípios de interface e regras de evolução do sistema de design do site APAC. Quando houver conflito entre implementações visuais dispersas e este documento, trate este arquivo como a referência principal de design e alinhe o código a ele.

## Objetivo

- Dar ao time uma base única para decisões de UI.
- Reduzir variações ad hoc entre páginas, seções e componentes.
- Ajudar humanos e agentes de IA a reutilizar padrões sem reinventar a interface.
- Manter consistência institucional, mobile-first e acessibilidade como defaults.

## Como usar

- Consulte este arquivo antes de criar ou alterar UI relevante.
- Atualize este arquivo quando uma decisão de design mudar ou quando um novo padrão reutilizável for introduzido.
- Não trate implementações isoladas como padrão só porque já existem no código.
- Se um novo componente exigir uma exceção, documente a exceção aqui junto com a justificativa.

## Princípios

- Institucional antes de promocional: a interface deve transmitir confiança, acolhimento e clareza.
- Mobile-first por padrão: a experiência começa em telas pequenas e cresce para desktop.
- Um sistema, não telas soltas: cores, tipografia, espaçamento e superfícies devem nascer dos tokens.
- Clareza sobre ornamento: elementos visuais só entram quando reforçam hierarquia, contexto ou ação.
- Acessibilidade estrutural: contraste, foco visível, semântica e navegação por teclado não são opcionais.
- Motion discreto: animações devem apoiar compreensão e percepção de qualidade, nunca competir com o conteúdo.

## Referência visual oficial

- A referência visual deste ciclo está em [tasks/design-system-reference.png](/Users/caiobarutti/Documents/www/apac-web/tasks/design-system-reference.png).
- Este board é a fonte principal para cor, tipografia, espaçamento, cantos, sombras e composição do sistema.
- O padrão visual deve parecer um sistema institucional refinado, não uma landing genérica nem um dashboard pesado.

### Paleta canônica

- Rosa principal: `#E6007E`
- Rosa escuro: `#B80063`
- Rosa claro: `#FCE7F3`
- Rosa muito claro: `#FFF1F7`
- Preto suave: `#1F1F1F`
- Cinza texto: `#5F5F66`
- Cinza borda: `#E7E7EA`
- Fundo principal: `#FFFCFD`
- Verde esperança: `#2E7D5B`
- Verde claro: `#E8F5EF`
- Azul confiança: `#2563A8`
- Amarelo suave: `#FFF4CC`

Regras:

- O rosa/magenta é o acento principal do sistema.
- O verde é reservado para CTAs e estados de apoio/acolhimento.
- Azul e amarelo entram como cores de suporte sem competir com o acento principal.
- Neutros devem permanecer muito claros e limpos para sustentar a leitura.

### Tipografia e escala

- Fonte de interface: Inter.
- H1: 36px / Bold.
- H2: 28px / Bold.
- H3: 22px / Semi Bold.
- H4: 18px / Semi Bold.
- H5: 16px / Bold.
- Body: 16px / Regular.
- Small: 14px / Regular.

Regras:

- Títulos devem ter presença, mas sem exagero de tracking ou peso visual.
- O corpo deve permanecer legível e compacto, com bom contraste em superfícies claras.
- Labels curtos e badges podem usar caixa alta quando isso ajudar a leitura estrutural, mas o conteúdo editorial principal não deve depender desse estilo.

### Espaçamento, raio e sombra

- Escala de espaçamento: 4, 8, 12, 16, 24, 32, 40, 46, 96.
- Raio de canto: 4, 8, 12, 16, 24, 32 e pílulas de 100px.
- Sombras: leve, média, forte e foco, sempre discretas.

Regras:

- Cards e superfícies devem usar bordas suaves e elevação mínima.
- Pílulas e botões arredondados devem ficar restritos a CTAs e badges, não a toda a interface.
- O foco precisa ser visível sem virar glow chamativo.

## Fundação visual atual

### Tipografia

- Fonte base de interface: `--font-body`
- Fonte de destaque e headings: `--font-display`
- Fonte monoespaçada: `--font-geist-mono` via token `--font-mono`
- As fontes são carregadas via `next/font/local` no layout raiz.
- Headings devem carregar mais presença visual do que texto corrido, sem depender de hacks locais por página.

### Cor

- Fundo principal: `--background`
- Texto principal: `--foreground`
- Superfície padrão: `--surface`
- Superfície suave: `--surface-muted`
- Linha e contorno: `--line`
- Cor de destaque institucional: `--accent`
- Estado de destaque forte: `--accent-strong`
- Variação suave de destaque: `--accent-soft`
- Cor auxiliar positiva: `--success`

Regras:

- O acento cromático principal deve permanecer controlado e reconhecível.
- Não introduzir novas cores de marca por conveniência local.
- Estados não podem depender só de cor para comunicar significado.

### Espaçamento, raio e sombra

- Escala base de spacing: `--spacing`
- Raios padrão: `--radius-xs`, `--radius-sm`, `--radius-md`, `--radius-lg`
- Sombras padrão: `--shadow-soft`, `--shadow-card`

Regras:

- Prefira a escala existente antes de adicionar valores arbitrários.
- Se um novo valor for recorrente, promova-o a token antes de espalhá-lo em componentes.

### Motion

- Curva principal: `--ease-standard`
- Animação inicial disponível: `--animate-fade-in-up`
- `prefers-reduced-motion` deve sempre ser respeitado

Regras:

- Motion deve ser curta, suave e funcional.
- Evite animações chamativas, contínuas ou decorativas sem propósito claro.

## Regras de interface

### Layout e responsividade

- Começar por pilhas verticais e largura fluida em mobile.
- Expandir para múltiplas colunas só quando o conteúdo realmente pedir.
- CTA principal pode ocupar largura total em mobile.
- Containers e seções futuras devem preservar leitura confortável e respiro consistente.

#### Primitives de layout

- `Container` (`components/layout/Container.tsx`): padroniza largura máxima e gutters responsivos.
  - Use `size="content"` como default (leitura confortável) e `gutter="md"` para padding responsivo.
  - Use `as="main"` / `as="section"` quando a semântica pedir.
- `Stack` (`components/layout/Stack.tsx`): pilha flex com espaçamento previsível via `gap`.
  - Use `direction="vertical"` como default e aplique responsividade via `className` (`sm:flex-row`, etc.).
- `Section` (`components/layout/Section.tsx`): wrapper semântico para blocos da landing e páginas.
  - Use `surface` (`default`/`muted`) para variação de superfície e `spacing` (`tight`/`normal`/`loose`) para densidade.
  - Prefira usar `heading`, `description` e `actions` como slots em vez de replicar estrutura manualmente.

### Componentes

- Preferir composição a APIs infladas por booleans.
- Variantes importantes devem ser explícitas e previsíveis.
- Componentes base devem consumir tokens, não valores arbitrários espalhados.
- Estados interativos precisam ter hover, focus e disabled coerentes quando aplicável.

### Conteúdo e hierarquia

- A interface deve privilegiar escaneabilidade.
- Headings devem formar uma hierarquia clara e sem saltos semânticos.
- CTAs devem competir o mínimo possível entre si.
- O texto precisa soar institucional, claro e humano.

### Acessibilidade

- Meta de WCAG AA.
- Foco visível sempre presente.
- Labels, hints e mensagens de erro devem ser associados semanticamente.
- Estrutura de headings deve refletir a hierarquia real da página.
- Navegação por teclado deve continuar funcional em todos os fluxos interativos.

## Regras de implementação

- Tokens globais vivem em `app/globals.css`.
- A base institucional do sistema vive em `app/layout.tsx`.
- Componentes futuros devem ser construídos para reutilização dentro do repositório atual, sem dependência de biblioteca externa de UI.
- O scan do Tailwind deve continuar cobrindo `app/`, `components/` e `lib/`.
- Sempre que um padrão deixar de ser local e virar recorrente, ele deve ser refletido neste arquivo.

## Processo de mudança

Antes de alterar ou adicionar qualquer padrão visual relevante:

1. Confirmar se o padrão já existe neste arquivo.
2. Se existir, seguir o padrão documentado.
3. Se não existir, implementar de forma mínima e atualizar este arquivo na mesma tarefa.
4. Se a mudança for difícil de reverter ou abrir nova direção visual, alinhar antes com o usuário.

## Fora de escopo atual

- Dark mode
- Múltiplos temas de marca
- Biblioteca externa de UI
- Separação do design system em pacote independente

## Arquivos relacionados

- [app/globals.css](/Users/caiobarutti/Documents/www/apac-web/app/globals.css:1)
- [app/layout.tsx](/Users/caiobarutti/Documents/www/apac-web/app/layout.tsx:1)
- [tasks/prd-design-system/prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/prd.md:1)
- [tasks/prd-design-system/techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-design-system/techspec.md:1)
