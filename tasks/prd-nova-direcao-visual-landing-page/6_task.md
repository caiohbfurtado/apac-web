# Tarefa 6.0: Validar comportamento, acessibilidade e qualidade

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Consolidar a validação técnica e funcional da nova landing com atualização de testes, checagens de composição, semântica, acessibilidade e execução dos comandos de qualidade obrigatórios do projeto.

<skills>
### Conformidade com Skills Padrões

- `next-best-practices`
- `vercel-react-best-practices`
- `web-design-guidelines`
</skills>

<requirements>
- Validar ordem narrativa, landmarks e headings da homepage.
- Cobrir cenários com e sem campanhas e com e sem apoiadores.
- Verificar hierarquia dos CTAs principais e presença do aviso informativo no bloco de apoio.
- Encerrar com `npm run lint` e `npm run build` aprovados.
</requirements>

## Subtarefas

- [x] 6.1 Atualizar testes unitários e de composição relacionados à home, header, footer e seções institucionais.
- [x] 6.2 Executar verificações de acessibilidade e semântica previstas no escopo da landing.
- [x] 6.3 Rodar as validações finais do projeto e registrar eventuais ajustes necessários antes de considerar a feature pronta.

## Detalhes de Implementação

Referenciar `techspec.md`, especialmente:
- `Abordagem de Testes > Testes Unidade`
- `Abordagem de Testes > Testes de Composição`
- `SEO, Performance e Qualidade`
- `Considerações Técnicas > Riscos Conhecidos`

## Critérios de Sucesso

- A cobertura reflete a nova home e protege os fluxos principais.
- A landing atende os requisitos de semântica, acessibilidade e consistência narrativa.
- O projeto finaliza com validações obrigatórias aprovadas.

## Testes da Tarefa

- [x] Validação com `npm run lint`
- [x] Validação com `npm run build`
- [x] Execução dos testes relevantes da homepage e componentes relacionados
- [x] Testes E2E (não aplicável nesta fase; o tech spec mantém a cobertura em `Jest` + `React Testing Library`)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `src/app/page.test.tsx`
- `src/components/home/HomeSections.tsx`
- `src/components/layout/HeaderNav.tsx`
- `src/components/layout/Footer.tsx`

## Registro de Execução

- Cobertura reforçada em `src/app/page.test.tsx` e `src/app/layout.test.tsx` para landmarks, ordem narrativa, hierarquia de headings, hierarquia de CTAs e cenários sem campanhas e sem apoiadores.
- Acessibilidade ajustada com skip link para `#main-content`, `header` e `footer` fora de `main` e compensação de `scroll-margin-top` no alvo principal e nas âncoras internas.
- Validações executadas:
  - `npm test -- --runTestsByPath src/app/layout.test.tsx src/app/page.test.tsx src/components/layout/HeaderNav.test.tsx src/components/layout/Footer.test.tsx src/components/home/HomeSections.test.tsx`
  - `npm run lint`
  - `npm run build`
- Review concluída com status `APROVADO` em `tasks/prd-nova-direcao-visual-landing-page/6_task_review.md`.
