# Review da Task 1.0

## Status final

`APPROVED WITH OBSERVATIONS`

## Resumo

A fundação visual global foi evoluída de forma coerente com o PRD e o Tech Spec: os novos tokens, o ritmo vertical, as superfícies, as sombras e o motion em `src/app/globals.css` sustentam bem a nova direção editorial da landing. A atualização de `DESIGN.md` também consolida parte importante dessas decisões como referência reutilizável para as próximas tasks.

## Achados

- `MINOR` `DESIGN.md:31-35` continua apontando para `tasks/design-system-reference.png`, enquanto o Tech Spec desta iniciativa define `tasks/new-design-v3.png` como referência principal do ciclo. Isso pode gerar ambiguidade para as próximas implementações e revisões. Sugestão: alinhar explicitamente o board de referência no documento ou explicar a relação entre os dois arquivos.
- `MINOR` `src/app/globals.css:11-27` e `src/app/globals.css:30-43` declaram `--surface-elevated`, `--surface-tint` e `--line-soft`, mas esses tokens semânticos não foram expostos como cores no `@theme inline`. Se a intenção é reaproveitá-los via utilities do Tailwind nas próximas etapas, vale promover também `--color-surface-elevated`, `--color-surface-tint` e `--color-line-soft` para evitar uso ad hoc de `var()`.

## Validação

- `npm run lint` passou.
- `npm run build` passou, incluindo TypeScript e geração estática.

## Conclusão

A task está adequada para seguir adiante, sem bloqueios funcionais ou regressões aparentes. As observações acima são de consistência e manutenção do sistema de design, não impedem o avanço da implementação.
