# Tarefa 3.0: Implementar o hero e a hierarquia principal de CTAs

<critical>Ler os arquivos de prd.md e techspec.md desta pasta, se você não ler esses arquivos sua tarefa será invalidada</critical>

## Visão Geral

Construir o hero da nova home com acolhimento imediato, maior credibilidade visual e uma hierarquia clara para os CTAs prioritários de apoio, colaboração e contato.

<skills>
### Conformidade com Skills Padrões

- `brainstorming`
- `ui-craft`
- `tailwindcss`
- `web-design-guidelines`
</skills>

<requirements>
- Implementar o hero com mensagem principal forte, suporte visual narrativo e escaneabilidade alta em mobile.
- Destacar `Preciso de apoio`, `Quero ajudar` e `Falar no WhatsApp` com hierarquia visual clara e baixa competição entre ações.
- Incluir card ou bloco resumido de contato institucional no hero, sem depender de formulário ou integração.
- Reservar espaço estável para imagem, ilustração ou placeholder equivalente, evitando layout shift perceptível.
- Seguir a direção visual do mock v2 e do `DESIGN.md` sem copiar literalmente a arte de referência.
</requirements>

## Subtarefas

- [ ] 3.1 Implementar a composição principal do hero com headline, supporting copy e CTAs.
- [ ] 3.2 Criar ou ajustar o bloco resumido de contato com links simples como `wa.me`, `tel:` ou endereço.
- [ ] 3.3 Definir placeholders visuais e estados responsivos estáveis para o bloco de destaque.
- [ ] 3.4 Revisar contraste, foco visível e clareza da hierarquia de ações.

## Detalhes de Implementação

Referenciar no `techspec.md` as seções:
- `Estratégia de Conteúdo e UX`
- `SEO, Performance e Qualidade`
- `Considerações Técnicas`

## Critérios de Sucesso

- O hero comunica acolhimento, confiança e propósito logo no primeiro scroll.
- Os CTAs prioritários ficam fáceis de localizar e com papéis distintos para públicos diferentes.
- O topo da página passa a refletir o refinamento visual esperado sem sacrificar acessibilidade.

## Testes da Tarefa

- [ ] Validação com `npm run lint`
- [ ] Validação com `npm run build`
- [ ] Testes de componente ou composição, se aplicável
- [ ] Testes E2E (se aplicável)

<critical>SEMPRE CRIE E EXECUTE OS TESTES DA TAREFA ANTES DE CONSIDERÁ-LA FINALIZADA</critical>

## Arquivos relevantes

- [prd.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/prd.md)
- [techspec.md](/Users/caiobarutti/Documents/www/apac-web/tasks/prd-refinamento-da-home/techspec.md)
- [page.tsx](/Users/caiobarutti/Documents/www/apac-web/src/app/page.tsx)
- [home-content.ts](/Users/caiobarutti/Documents/www/apac-web/src/lib/home-content.ts)
- [DESIGN.md](/Users/caiobarutti/Documents/www/apac-web/DESIGN.md)
