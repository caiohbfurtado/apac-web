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

- [ ] 6.1 Atualizar testes unitários e de composição relacionados à home, header, footer e seções institucionais.
- [ ] 6.2 Executar verificações de acessibilidade e semântica previstas no escopo da landing.
- [ ] 6.3 Rodar as validações finais do projeto e registrar eventuais ajustes necessários antes de considerar a feature pronta.

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

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Execução dos testes relevantes da homepage e componentes relacionados
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- `tasks/prd-nova-direcao-visual-landing-page/prd.md`
- `tasks/prd-nova-direcao-visual-landing-page/techspec.md`
- `src/app/page.test.tsx`
- `src/components/home/HomeSections.tsx`
- `src/components/layout/HeaderNav.tsx`
- `src/components/layout/Footer.tsx`
