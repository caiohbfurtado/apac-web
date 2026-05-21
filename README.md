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
- `npm run build`: build de produção

Observação:

- Em ambientes agentic/sandbox, o build padrão do Next.js 16 pode precisar de permissão ampliada para concluir por causa de uma limitação operacional do Turbopack. No terminal local do usuário, o comando tende a funcionar normalmente.

## Design System

- A base visual do projeto começa em `app/globals.css` e `app/layout.tsx`
- Padrões de design e decisões reutilizáveis devem ser documentados em `DESIGN.md`
- Mudanças de UI que alterem padrões do sistema devem atualizar `DESIGN.md`

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
