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
    heading: "Como atuamos",
    description:
      "Transformamos necessidades urgentes em planos de apoio concretos, com acompanhamento continuo e orientacao acessivel.",
    cards: [
      {
        title: "Escuta e triagem",
        description:
          "Recebemos cada familia com acolhimento e priorizacao rapida do contexto clinico e social.",
      },
      {
        title: "Rede de apoio",
        description:
          "Conectamos pessoas a beneficios, servicos locais e iniciativas parceiras em um fluxo unico.",
      },
      {
        title: "Acompanhamento",
        description:
          "Mantemos contato ativo para orientar decisoes, reduzir insegurancas e fortalecer adesao ao cuidado.",
      },
    ],
  },
  support: {
    id: "preciso-de-apoio",
    heading: "Precisa de apoio agora?",
    description:
      "Fale com a equipe pelos canais abaixo. Se a demanda for urgente, priorizamos o primeiro contato e direcionamos o melhor caminho.",
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
    heading: "Confianca e transparencia",
    cards: [
      {
        title: "Prestacao de contas",
        description: "Publicamos resultados e alocacao de recursos em ciclos regulares.",
      },
      {
        title: "Rede parceira",
        description: "Atuamos com hospitais, equipes tecnicas e voluntariado qualificado.",
      },
    ],
  },
  closing: {
    id: "como-ajudar",
    heading: "Sua contribuicao amplia o cuidado.",
    description:
      "Com doacao recorrente, voluntariado ou divulgacao, voce fortalece uma rede que acolhe quem mais precisa.",
  },
} as const;
