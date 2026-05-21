# Tarefa 8.0: Atualizar testes e executar validação final

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Consolidar a entrega do refinamento da home atualizando a cobertura de testes da página e executando a validação final de lint, build e cenários principais de composição.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `frontend-design`
- `next-best-practices`
- `vercel-react-best-practices`
- `web-design-guidelines`
</skills>

<requirements>
- Atualizar testes da home para refletir a nova estrutura, CTAs principais e landmarks.
- Cobrir renderização condicional de campanhas e patrocinadores, incluindo cenários com listas vazias.
- Validar links principais do hero e do bloco de apoio.
- Verificar coerência entre navegação por âncoras e seções existentes na página.
- Encerrar com `npm run lint` e `npm run build`, registrando eventuais limitações do ambiente se surgirem.
</requirements>

## Subtarefas

- [x] 8.1 Atualizar ou criar testes da home e dos componentes alterados com foco em composição e acessibilidade básica.
- [x] 8.2 Cobrir cenários com e sem campanhas e patrocinadores.
- [x] 8.3 Validar CTAs principais, landmarks, headings e links internos mais importantes.
- [x] 8.4 Executar `npm run lint` e `npm run build` como fechamento da entrega.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Abordagem de Testes`
- `Sequenciamento de Desenvolvimento`
- `SEO, Performance e Qualidade`

## Critérios de Sucesso

- A entrega termina com cobertura de testes alinhada à nova arquitetura da home.
- A renderização condicional das seções opcionais fica protegida contra regressões.
- O refinamento da home chega ao fim com validação técnica compatível com as regras do repositório.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/techspec.md)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
- [HeaderNav.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNav.tsx)
- [HeaderNavMobileMenu.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/HeaderNavMobileMenu.tsx)
- [Footer.tsx](/Users/caiobarutti/Documents/www/apac-web/src/components/layout/Footer.tsx)
