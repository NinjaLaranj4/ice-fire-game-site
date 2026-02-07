# Ice Fire AI Console

Interface web em português para conversar com modelos da OpenAI usando sua própria API key.

## Site no ar automaticamente (GitHub Pages)

Este repositório está configurado para publicar automaticamente no **GitHub Pages** a cada push em `main`/`master`.

### Link do site publicado

Se o repositório for `NinjaLaranjaJ/ice-fire-game-site`, o link é:

- https://ninjalaranjaj.github.io/ice-fire-game-site/

> Regra geral: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`

### Como ativar no GitHub (1 vez)

1. Abra o repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, selecione **Source: GitHub Actions**.
4. Faça um push para `main` (ou rode o workflow manualmente em **Actions**).
5. Após o workflow "Deploy static content to Pages" concluir, o site fica online no link acima.

## Como usar a IA no site

1. Cole sua API key no campo **API Key**.
2. Escolha modelo, temperatura e prompt de sistema.
3. Envie mensagens e acompanhe o histórico salvo no navegador.

## Rodar localmente (opcional)

### Windows (CMD/PowerShell)

**Opção A (mais fácil):**

1. Abra a pasta do projeto.
2. Dê duplo clique em `start_server.bat`.
3. Abra no navegador: `http://127.0.0.1:4173/`

**Opção B (manual):**

1. Entre na pasta correta do projeto:
   ```bat
   cd C:\caminho\para\ice-fire-game-site
   ```
2. Confirme que está na pasta certa:
   ```bat
   dir
   ```
3. Inicie o servidor:
   ```bat
   python -m http.server 4173
   ```
4. Abra no navegador: `http://127.0.0.1:4173/`

### Linux / macOS

1. Entre na pasta do projeto:
   ```bash
   cd /workspace/ice-fire-game-site
   ```
2. Confirme os arquivos:
   ```bash
   ls
   ```
3. Inicie o servidor:
   ```bash
   python3 -m http.server 4173
   ```
4. Abra no navegador: `http://127.0.0.1:4173/`

## Se aparecer erro 404 em `/index.html`

Isso indica que o servidor foi iniciado em pasta errada.

- Pare o servidor (`Ctrl + C`)
- Entre na pasta do projeto com `cd`
- Confira se existe `index.html` com `dir` (Windows) ou `ls` (Linux/macOS)
- Rode o servidor de novo

## Aviso de segurança

- Nunca comite sua API key em repositório.
- Se uma chave for exposta, revogue no painel da OpenAI e gere outra.
