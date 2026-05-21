# Arquitetura do Projeto

## Visão Geral

Este projeto é um app `Next.js` orientado a frontend usando `App Router`.

## Estrutura Atual

- `app/`: rotas, layouts e páginas
- `app/layout.tsx`: layout raiz da aplicação
- `app/page.tsx`: página inicial
- `app/globals.css`: estilos globais
- `public/`: assets estáticos
- `next.config.ts`: configuração do Next.js
- `eslint.config.mjs`: lint do projeto
- `tsconfig.json`: configuração TypeScript

## Regras de Arquitetura

- Siga os padrões do `App Router` antes de inventar estrutura paralela
- Trate componentes em `app/` como Server Components por padrão
- Adicione `use client` apenas quando houver necessidade real de interatividade, estado local, efeitos ou APIs do browser
- Mantenha boundaries entre server e client explícitas e pequenas
- Prefira colocar código perto da rota ou feature que o utiliza, em vez de criar abstrações prematuras
- Preserve convenções nativas do Next.js para layouts, metadata, loading e error boundaries quando essas necessidades surgirem

## Skills Mais Relevantes

- `next-best-practices`
- `vercel-react-best-practices`
- `vercel-composition-patterns`
