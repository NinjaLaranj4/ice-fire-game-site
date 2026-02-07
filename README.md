# Ice Fire AI Console

Interface web em português para conversar com modelos da OpenAI usando sua própria API key.

## Como acessar o site (passo a passo)

### Windows (CMD/PowerShell)

**Opção A (mais fácil):**

1. Abra a pasta do projeto.
2. Dê duplo clique em `start_server.bat`.
3. Abra no navegador:
   - http://127.0.0.1:4173/

> Esse `.bat` sempre inicia o servidor na pasta correta do projeto, evitando erro 404 por diretório errado.

**Opção B (manual):**

1. Entre na pasta correta do projeto:
   ```bat
   cd C:\caminho\para\ice-fire-game-site
   ```
2. Confirme que está na pasta certa:
   ```bat
   dir
   ```
   Você deve ver `index.html`, `styles.css` e `scripts.js`.
3. Inicie o servidor:
   ```bat
   python -m http.server 4173
   ```
4. Abra no navegador:
   - http://127.0.0.1:4173/

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
4. Abra no navegador:
   - http://127.0.0.1:4173/

## Se aparecer erro 404 em `/index.html`

Isso indica que o servidor foi iniciado em pasta errada.

- Pare o servidor (`Ctrl + C`)
- Entre na pasta do projeto com `cd`
- Confira se existe `index.html` com `dir` (Windows) ou `ls` (Linux/macOS)
- Rode o servidor de novo

## Como usar a IA

1. Cole sua API key no campo **API Key**.
2. Escolha modelo, temperatura e prompt de sistema.
3. Envie mensagens e acompanhe o histórico salvo no navegador.

## Aviso de segurança

- Nunca comite sua API key em repositório.
- Se uma chave for exposta, revogue no painel da OpenAI e gere outra.
