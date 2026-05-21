# Template de Documento de Requisitos de Produto (PRD)

## Visão Geral

Esta iniciativa define a nova direção visual da landing page institucional da APAC Boituva e estabelece a base reutilizável do design system que sustentará a evolução do site. O problema atual é que a interface existente comunica pouco acolhimento, pouco calor humano e pouca força institucional, além de parecer ampla demais, genérica e pouco memorável para uma organização que depende de confiança, clareza e mobilização comunitária.

A nova homepage deve apresentar a APAC como uma rede de cuidado confiável, humana e acessível para três públicos prioritários: pessoas que precisam de apoio, pessoas que querem doar e pessoas que querem se voluntariar ou apoiar como parceiras. A experiência deve manter navegação simples, forte legibilidade, hierarquia clara de CTAs e coerência com a referência visual aprovada, sem parecer comercial, hospitalar em excesso ou genérica.

O valor para a ONG está em melhorar a percepção institucional, orientar melhor os caminhos de ação e criar uma base visual consistente para futuras páginas e componentes.

## Objetivos

- Aprovar uma nova homepage institucional que represente com mais qualidade visual, confiança e acolhimento a proposta da APAC Boituva.
- Tornar explícitos e fáceis de acessar os principais caminhos de conversão institucional: pedir apoio, falar no WhatsApp, doar, doar cabelo, ser voluntário, apoiar como empresa e conhecer campanhas.
- Reforçar a compreensão da atuação da APAC, sua credibilidade e seus canais de contato sem exigir esforço excessivo de navegação.
- Estabelecer uma base de design system reaproveitável para o restante do site, respeitando `DESIGN.md` e a linguagem institucional do projeto.
- Sucesso nesta fase será medido principalmente por aprovação qualitativa do solicitante sobre direção visual, clareza institucional, aderência à referência aprovada e coerência da experiência em desktop e mobile.

## Histórias de Usuário

- Como pessoa em tratamento contra o câncer ou familiar, eu quero entender rapidamente como a APAC pode me apoiar e falar com a equipe por um canal direto para que eu não me sinta sozinho(a) nem perdido(a).
- Como potencial doador, eu quero visualizar formas claras de ajudar para que eu possa contribuir de maneira simples e confiável.
- Como voluntário(a) ou parceiro(a) institucional, eu quero compreender onde posso apoiar e qual impacto isso gera para que eu consiga agir com segurança.
- Como visitante em primeira visita, eu quero perceber que a APAC é séria, acolhedora e organizada para confiar na instituição antes de tomar qualquer ação.
- Como usuário mobile, eu quero CTAs grandes, conteúdo escaneável e navegação simples para concluir minha ação com pouco atrito.

Personas primárias incluem beneficiários e familiares; secundárias incluem doadores, voluntários, empresas parceiras e apoiadores da comunidade. Os fluxos principais devem priorizar baixa fricção, contato direto e rápida compreensão da proposta institucional. Objeções esperadas incluem dúvida sobre credibilidade, dúvida sobre como pedir ajuda e incerteza sobre como contribuir; a homepage deve responder a essas objeções com clareza, prova institucional e caminhos acionáveis.

## Funcionalidades Principais

- Hero institucional com mensagem principal de acolhimento, destaque emocional controlado, resumo curto do valor da APAC e CTAs prioritárias.
  1. A homepage deve apresentar uma proposta de valor clara já na primeira dobra.
  2. A ordem de destaque das ações no hero deve priorizar `Preciso de apoio`, depois `Quero ajudar` e depois `Falar no WhatsApp`.
  3. A experiência deve comunicar acolhimento, esperança e confiança sem excesso de texto.

- Navegação one-page clara para as áreas centrais da jornada.
  4. O header deve oferecer navegação direta para seções institucionais relevantes da própria landing page.
  5. Em mobile, o menu deve permanecer simples, acessível e orientado a ação.

- Bloco de apoio imediato para quem precisa de atendimento ou orientação.
  6. A homepage deve destacar canais diretos de contato, incluindo WhatsApp, telefone e endereço.
  7. O conteúdo deve deixar claro que o site é informativo e que atendimentos devem ser confirmados diretamente com a APAC.
  8. A experiência não deve coletar dados sensíveis de saúde.

- Bloco de contribuição institucional com múltiplas formas de ajuda.
  9. A homepage deve apresentar caminhos distintos para doação financeira, doação de cabelo, voluntariado e apoio empresarial.
  10. Cada caminho deve explicar rapidamente sua finalidade e oferecer CTA explícita.

- Área editorial de campanhas e eventos.
  11. A homepage deve permitir divulgar campanhas e eventos em destaque quando houver conteúdo disponível.
  12. A ausência de campanhas não deve quebrar a narrativa nem criar espaços vazios sem função.

- Área de transparência e confiança.
  13. A homepage deve explicar de forma simples por que a APAC é confiável, incluindo prestação de contas, rede parceira e governança.
  14. A comunicação de confiança deve ser institucional, objetiva e escaneável.

- Área de reconhecimento de apoiadores.
  15. A homepage deve reservar espaço para apresentar apoiadores e parceiros quando esse conteúdo existir.
  16. O reconhecimento de apoiadores deve reforçar credibilidade sem competir com as CTAs principais.

- Base visual reutilizável para o restante do site.
  17. O PRD deve contemplar a criação ou ajuste de padrões visuais reutilizáveis para componentes e seções recorrentes.
  18. A nova direção visual deve respeitar o sistema de design existente e evoluí-lo quando necessário, em vez de criar uma interface isolada.

## Experiência do Usuário

A experiência deve ser mobile-first, editorial e acolhedora, com largura controlada, seções independentes e sensação de cuidado humano. A imagem de referência aprovada indica uma homepage com forte hierarquia visual, uso criterioso do rosa institucional, apoio do verde para contato, blocos bem respirados e uma composição que evita “boxes dentro de boxes”.

A jornada ideal começa com entendimento imediato da proposta da APAC, passa por um ponto de contato acessível para quem precisa de ajuda, apresenta formas concretas de colaboração e encerra com sinais de confiança e convite final à ação. O conteúdo deve ser escaneável, com títulos claros, textos curtos e CTAs grandes o suficiente para toque em mobile.

Requisitos de UX:

- A navegação deve ser simples e previsível em desktop e mobile.
- A homepage deve manter linguagem institucional humana, inclusiva e clara.
- O WhatsApp deve aparecer como CTA funcional de alta prioridade.
- O layout deve evitar aparência de dashboard, SaaS genérico ou coleção repetitiva de cards.
- A experiência deve atender meta de acessibilidade WCAG AA, com contraste adequado, foco visível, semântica correta e navegação por teclado.
- A homepage deve funcionar bem em telas pequenas sem sacrificar legibilidade, toque e ordem narrativa.

## Restrições Técnicas de Alto Nível

- A solução deve preservar a estrutura existente em Next.js com App Router e a arquitetura geral do projeto.
- O trabalho deve considerar `DESIGN.md` como fonte de verdade do design e pode evoluir o design system quando necessário para sustentar a nova direção visual.
- A homepage deve usar componentes e padrões reutilizáveis, evitando decisões isoladas difíceis de manter.
- A experiência deve continuar responsiva, performática e preparada para SEO institucional básico.
- Os CTAs devem apontar para canais e recursos já existentes no projeto ou já definidos pela APAC, sem depender de novas integrações nesta fase.
- O site não deve solicitar nem armazenar dados sensíveis de saúde dentro deste escopo.
- A comunicação institucional deve manter clareza sobre caráter informativo e confirmação de atendimento pelos canais diretos da APAC.

Detalhes de implementação, tokens, composição de componentes e decisões técnicas específicas serão definidos na Especificação Técnica.

## Fora de Escopo

- Criação de blog, calendário completo ou área editorial expandida.
- Desenvolvimento de área administrativa, CMS novo ou fluxos internos de gestão.
- Implementação de integrações inéditas de pagamento, CRM, automação ou atendimento.
- Criação de formulários complexos ou coleta detalhada de dados pessoais e de saúde.
- Redesenho completo de todas as páginas internas do site fora da landing institucional.
- Refatoração ampla da aplicação que não seja necessária para sustentar a nova homepage e a base reutilizável do design system.
