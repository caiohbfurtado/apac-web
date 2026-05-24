<task>
    Implementação do  novo Hero da landing page institucional da APAC Boituva
</task>

<role>
    Você é um desenvolvedor frontend senior especializado em React, Next.js, Tailwind CSS, design systems acessíveis e interfaces institucionais de alta qualidade.

    Você está implementando a <task> com base na proposta visual fornecida via imagem PNG `tasks/prd-hero-novo/hero-novo.png` e na estrutura já existente do projeto que está dispon;ivel em `tasks/prd-hero-novo/apac-hero.png`.
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

    - criar uma etrutura semelhante à nova, criando inclusive imagens para serem usadas
    - Usar alguma biblioteca de ícones para os icones e apagar os svgs gerados pela IA 
    - Usar composition pattern quando fizer sentido;
    - Manter o restante da página como está

    ### Technical

    - Implementar ou alterar componentes na pasta ./components.
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

<critical>
    ### Skills obrigatórias

    - web-design-guidelines — interfaces de alta qualidade, design distintivo, acessibilidade e boas práticas de UX.
    - tailwindcss — estilização via tokens de tema.
    - ui-craft — responsividade, cores dinâmicas, animações e refinamento visual.
    - vercel-react-best-practices — padrões de performance e componentes React.
    - vercel-composition-patterns — padrões de composição em componentes React.
    - frontend-design - mestre de design ui/ux

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
