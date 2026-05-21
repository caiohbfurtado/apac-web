# APAC Web

Frontend institucional em `Next.js` para o site APAC.

## Referências internas

- Fonte de verdade de design: [DESIGN.md](DESIGN.md)
- Regras operacionais para agentes: [AGENTS.md](AGENTS.md)

## Getting Started

Primeiro, rode o ambiente local:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: desenvolvimento local
- `npm run lint`: lint do projeto
- `npm test`: testes com `Jest` e `React Testing Library`
- `npm run build`: build de produção com proteção contra travas no fluxo agentic
- `npm run build:direct`: build direto do Next.js para troubleshooting local

Observação:

- Em ambientes agentic/sandbox, se `npm run build` abortar por falta de saída, rerode o mesmo comando com permissão ampliada. No terminal local do usuário, `npm run build` e `npm run build:direct` tendem a funcionar normalmente.

## Design System

- A base visual do projeto começa em `app/globals.css` e `app/layout.tsx`
- Padrões de design e decisões reutilizáveis devem ser documentados em `DESIGN.md`
- Mudanças de UI que alterem padrões do sistema devem atualizar `DESIGN.md`

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
