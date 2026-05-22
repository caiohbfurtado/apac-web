type HomeContent = {
  hero: {
    id: string;
    badge: string;
    title: string;
    description: string;
    highlights: ReadonlyArray<{
      title: string;
      description: string;
    }>;
    contact: {
      title: string;
      description: string;
      notice: string;
      items: ReadonlyArray<{
        label: string;
        value: string;
        note: string;
        href?: string;
      }>;
    };
    ctas: {
      support: {
        href: string;
        label: string;
      };
      help: {
        href: string;
        label: string;
      };
      whatsapp: {
        href: string;
        label: string;
      };
    };
  };
  institution: {
    id: string;
    heading: string;
    description: string;
    highlights: ReadonlyArray<{
      title: string;
      description: string;
    }>;
    cards: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
  support: {
    id: string;
    heading: string;
    description: string;
    notice: string;
    channels: ReadonlyArray<{
      label: string;
      description: string;
      href?: string;
      note: string;
    }>;
    steps: ReadonlyArray<{
      title: string;
      description: string;
    }>;
    ctas: {
      whatsapp: {
        href: string;
        label: string;
      };
      phone: {
        href: string;
        label: string;
      };
    };
  };
  trust: {
    id: string;
    heading: string;
    description: string;
    cards: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
  closing: {
    id: string;
    heading: string;
    description: string;
    trails: ReadonlyArray<{
      title: string;
      description: string;
      href: string;
    }>;
  };
};

export const homeContent = {
  hero: {
    id: "fundacao",
    badge: "Acolhimento e orientacao",
    title: "Acolhimento, apoio e esperança para pessoas em tratamento contra o câncer.",
    description:
      "A APAC oferece suporte social, emocional e comunitário com orientação clara desde o primeiro contato.",
    highlights: [
      {
        title: "Acolhimento",
        description: "Uma primeira conversa humana para reduzir a incerteza e organizar o próximo passo.",
      },
      {
        title: "Assistência social",
        description: "Orientação prática para encaminhar demandas com menos atrito e mais clareza.",
      },
      {
        title: "Conscientização",
        description: "Comunicação clara para fortalecer a rede de apoio ao redor de cada pessoa atendida.",
      },
      {
        title: "Rede comunitária",
        description: "Parcerias e voluntariado que ampliam o cuidado sem perder a proximidade.",
      },
    ],
    contact: {
      title: "Contato institucional",
      description: "Sem formulário, sem espera longa e sem ruído desnecessário.",
      notice:
        "Este bloco é informativo e os atendimentos devem ser confirmados diretamente com a APAC.",
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
      "Escolha o canal mais simples e fale com uma pessoa da equipe.",
    notice:
      "Este site é informativo e não coleta dados sensíveis de saúde.",
    channels: [
      {
        label: "WhatsApp",
        description: "Canal mais rápido para primeiro contato e orientação inicial.",
        href: "https://wa.me/5511999999999",
        note: "Resposta rápida para quem precisa falar agora.",
      },
      {
        label: "Telefone",
        description: "Atendimento direto para quem prefere uma conversa por voz.",
        href: "tel:+551134560000",
        note: "Ligação em horário comercial.",
      },
      {
        label: "Endereço",
        description: "Atendimento presencial mediante confirmação prévia com a equipe.",
        note: "Use quando já houver orientação sobre a visita.",
      },
    ],
    steps: [
      {
        title: "Escolha o canal",
        description: "Use WhatsApp, telefone ou a visita agendada conforme o que estiver mais fácil agora.",
      },
      {
        title: "Conte o contexto",
        description: "Escreva ou fale apenas o que conseguir. A equipe completa o restante com você.",
      },
    ],
    ctas: {
      whatsapp: {
        href: "https://wa.me/5511999999999",
        label: "Falar no WhatsApp",
      },
      phone: {
        href: "tel:+551134560000",
        label: "Ligar agora",
      },
    },
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
    trails: [
      {
        title: "Doação financeira",
        description: "Contribua para manter o cuidado contínuo e ampliar a rede de apoio.",
        href: "mailto:contato@apac.org.br?subject=Quero%20fazer%20uma%20doa%C3%A7%C3%A3o%20financeira",
      },
      {
        title: "Doar cabelo",
        description: "Ajude a divulgar uma corrente solidária com destino prático e humano.",
        href: "mailto:contato@apac.org.br?subject=Quero%20doar%20cabelo",
      },
      {
        title: "Voluntariado",
        description: "Participe de ações de acolhimento, apoio e mobilização comunitária.",
        href: "mailto:contato@apac.org.br?subject=Quero%20ser%20volunt%C3%A1rio%28a%29",
      },
      {
        title: "Apoio empresarial",
        description: "Parcerias institucionais fortalecem a continuidade do serviço e da missão.",
        href: "mailto:contato@apac.org.br?subject=Quero%20apoiar%20a%20APAC%20como%20empresa",
      },
    ],
  },
} as const satisfies HomeContent;
