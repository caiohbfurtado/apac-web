export const homeContent = {
  hero: {
    id: "fundacao",
    badge: "Acolhimento e orientacao",
    title: "Acolhimento, apoio e esperança para pessoas em tratamento contra o câncer.",
    description:
      "A APAC oferece suporte social, emocional e comunitário com orientação clara desde o primeiro contato.",
    contact: {
      title: "Contato institucional",
      description: "Sem formulário, sem espera longa e sem ruído desnecessário.",
      items: [
        {
          label: "Telefone",
          value: "(11) 3456-0000",
          note: "Segunda a sexta, das 8h às 18h.",
          href: "tel:+551134560000",
        },
        {
          label: "Endereço",
          value: "Rua Exemplo, 123 - Sao Paulo/SP",
          note: "Atendimento presencial mediante agendamento.",
        },
        {
          label: "Primeiro contato",
          value: "Canal humano para orientar a demanda",
          note: "Use o WhatsApp se precisar de resposta rápida.",
        },
      ],
    },
    ctas: {
      support: {
        href: "#preciso-de-apoio",
        label: "Preciso de apoio",
      },
      help: {
        href: "#como-ajudar",
        label: "Quero ajudar",
      },
      whatsapp: {
        href: "https://wa.me/5511999999999",
        label: "Falar no WhatsApp",
      },
    },
  },
  institution: {
    id: "atuacao",
    heading: "Como a APAC ajuda",
    description:
      "Cada família encontra escuta, orientação e um caminho prático para seguir com mais segurança.",
    highlights: [
      {
        title: "Acolhimento inicial",
        description:
          "A primeira conversa organiza urgência, contexto e a sensação de chegar sem ser avaliado.",
      },
      {
        title: "Orientação prática",
        description:
          "A equipe aponta benefícios, serviços e próximos passos possíveis sem criar atrito.",
      },
      {
        title: "Acompanhamento contínuo",
        description:
          "Seguimos próximos depois do primeiro contato para reduzir insegurança e reforçar o cuidado.",
      },
    ],
    cards: [
      {
        title: "Para pessoas em tratamento",
        description: "Acolhemos a urgência e ajudamos a transformar demanda em próximo passo.",
      },
      {
        title: "Para famílias e cuidadores",
        description: "Explicamos caminhos com linguagem simples e apoio contínuo.",
      },
      {
        title: "Para quem apoia a rede",
        description: "Mostramos impacto, continuidade e formas concretas de contribuir.",
      },
    ],
  },
  support: {
    id: "preciso-de-apoio",
    heading: "Preciso de apoio",
    description:
      "Sem formulários longos ou etapas desnecessárias: escolha o canal mais simples e fale com uma pessoa da equipe.",
    steps: [
      {
        title: "Escolha o canal",
        description: "Use WhatsApp, telefone ou a visita agendada conforme o que estiver mais fácil agora.",
      },
      {
        title: "Conte o contexto",
        description: "Escreva ou fale apenas o que conseguir. A equipe completa o restante com você.",
      },
      {
        title: "Receba orientação",
        description: "Depois do primeiro contato, indicamos o melhor próximo passo sem criar ruído desnecessário.",
      },
    ],
    channels: [
      {
        label: "WhatsApp",
        value: "Falar com a equipe",
        note: "Resposta inicial e orientacao direta.",
        href: "https://wa.me/5511999999999",
      },
      {
        label: "Telefone",
        value: "(11) 3456-0000",
        note: "Segunda a sexta, das 8h as 18h.",
        href: "tel:+551134560000",
      },
      {
        label: "Endereco",
        value: "Rua Exemplo, 123 - Sao Paulo/SP",
        note: "Atendimento presencial mediante agendamento.",
      },
    ],
  },
  trust: {
    id: "transparencia",
    heading: "Transparência e confiança",
    description:
      "A credibilidade da APAC vem de prestação de contas, parcerias consistentes e comunicação objetiva.",
    cards: [
      {
        title: "Prestacao de contas",
        description: "Publicamos resultados e alocação de recursos em ciclos regulares.",
      },
      {
        title: "Rede parceira",
        description: "Atuamos com hospitais, equipes técnicas e voluntariado qualificado.",
      },
      {
        title: "Governança clara",
        description:
          "Fluxos objetivos ajudam a equipe a responder com responsabilidade e previsibilidade.",
      },
    ],
  },
  closing: {
    id: "como-ajudar",
    heading: "Sua contribuição amplia o cuidado.",
    description:
      "Com doação recorrente, voluntariado ou divulgação, você fortalece uma rede que acolhe quem mais precisa.",
  },
} as const;
