# Convenções de Frontend

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`

## Skills Recomendadas

- `brainstorming`: use antes de criar ou alterar comportamento relevante
- `grill-with-docs`: use ao definir fluxos de negócio, nomenclatura de produto, estados complexos ou decisões arquiteturais que mereçam documentação viva
- `next-best-practices`: convenções do Next, App Router e boundaries
- `vercel-react-best-practices`: padrões modernos de React
- `vercel-composition-patterns`: composição de componentes e APIs escaláveis
- `ui-craft`: trabalho visual e refinamento de interface
- `tailwindcss`: styling e design system utilitário
- `web-design-guidelines`: revisão de UX, acessibilidade e qualidade visual

## Regras de Componentes

- Use componentes funcionais; não use class components nem `React.FC`
- Tipa as props diretamente na assinatura da função
- Prefira composição a excesso de props booleanas
- Evite mover lógica interativa para Client Components sem necessidade
- Se um componente crescer demais, quebre por responsabilidade e interface, não por conveniência

## Regras de Next.js

- Server Components primeiro; Client Components apenas quando fizer sentido
- Use APIs nativas do Next.js antes de recorrer a soluções genéricas de React puro
- Mantenha rotas, layouts e estados de carregamento dentro das convenções do `app/`
- Ao tocar SEO, fontes, imagens ou metadata, siga as otimizações nativas do framework

## Quando Usar `grill-with-docs`

- Quando a feature introduzir termos de domínio que podem ficar ambíguos
- Quando houver fluxos com vários estados e regras de transição
- Quando uma decisão de arquitetura ou produto for difícil de reverter depois
- Quando valer a pena criar ou atualizar `CONTEXT.md` e ADRs em vez de deixar a decisão só na conversa

## Estilo e UI

- Consulte `DESIGN.md` antes de criar ou alterar padrões visuais relevantes
- Trate `DESIGN.md` como fonte de verdade de design do projeto
- Se uma mudança de UI introduzir ou ajustar um padrão reutilizável, atualize `DESIGN.md` na mesma tarefa
- Preserve a linguagem visual existente do projeto
- Evite interfaces genéricas ou “AI slop”; procure decisões visuais intencionais
- Use Tailwind de forma consistente, sem espalhar estilos difíceis de manter
- Garanta comportamento adequado em desktop e mobile

## Quando Escalar

- Se a mudança alterar arquitetura de rotas, estratégia de renderização ou estrutura base do app, alinhe com o usuário antes de seguir
