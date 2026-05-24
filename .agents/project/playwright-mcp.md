# Playwright MCP no APAC Web

Configuração enxuta para usar o Playwright MCP com este projeto local em `http://localhost:3000`.

## Pré-requisitos

- Node.js moderno instalado
- Um cliente MCP compatível
- App local rodando com `npm run dev`

Neste repositório, os pré-requisitos locais já estão ok:

- `node -v`: `v24.15.0`
- `npm -v`: `11.12.1`

## Arquivo de configuração do projeto

Este repositório inclui um arquivo base em [playwright.mcp.config.json](/Users/caiobarutti/Documents/www/apac-web/playwright.mcp.config.json).

Ele habilita:

- `testing`: assertions e geração de locators
- `storage`: cookies e estado autenticado
- `network`: inspeção e mocking de requests
- `devtools`: tracing e vídeo

Também define um viewport inicial de `1440x900`, que costuma ser um bom padrão para inspeção do site em desktop.

## Configuração MCP padrão

Use este bloco no seu cliente MCP:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--config",
        "/Users/caiobarutti/Documents/www/apac-web/playwright.mcp.config.json"
      ]
    }
  }
}
```

## Exemplos por cliente

### VS Code

A documentação oficial mostra este formato de instalação:

```bash
code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest","--config","/Users/caiobarutti/Documents/www/apac-web/playwright.mcp.config.json"]}'
```

### Cursor

Vá em `Cursor Settings` -> `MCP` -> `Add new MCP Server` e preencha com:

- Command: `npx`
- Args: `@playwright/mcp@latest --config /Users/caiobarutti/Documents/www/apac-web/playwright.mcp.config.json`

### Outros clientes MCP

Segundo a doc oficial, a configuração padrão também funciona com clientes como Codex, Windsurf e outros; o que muda é só o lugar onde esse JSON fica salvo.

## Fluxo recomendado para este site

1. Suba o projeto com `npm run dev`
2. Conecte o servidor MCP do Playwright no seu cliente
3. Peça para o agente abrir `http://localhost:3000`
4. Faça ações guiadas no site

Prompts úteis:

```text
Open http://localhost:3000 and describe the homepage structure.
```

```text
Open http://localhost:3000 and verify whether the main CTA is visible above the fold.
```

```text
Open http://localhost:3000, list the network requests, and point out any failing assets.
```

```text
Open http://localhost:3000 and generate stable Playwright locators for the main hero section.
```

## Quando mudar o modo de conexão

### Use o modo padrão

É o melhor caminho para desenvolvimento local simples.

### Use `--extension`

Prefira quando você precisar reaproveitar:

- login já feito
- sessão com SSO / 2FA
- extensões instaladas no navegador
- abas já abertas

Exemplo:

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest",
        "--extension"
      ]
    }
  }
}
```

### Use servidor HTTP com `--port 8931`

Prefira quando o cliente MCP tiver dificuldade para abrir o browser diretamente.

Servidor:

```bash
npx @playwright/mcp@latest --config /Users/caiobarutti/Documents/www/apac-web/playwright.mcp.config.json --port 8931
```

Cliente:

```json
{
  "mcpServers": {
    "playwright": {
      "url": "http://localhost:8931/mcp"
    }
  }
}
```

## Observações úteis

- O site deste projeto roda em `http://localhost:3000`
- O Playwright MCP usa browser headed por padrão
- O estado do navegador persiste por padrão entre sessões
- Se você quiser sessão limpa a cada uso, adicione `--isolated`
