# Ice Fire AI Console

Interface web em português para conversar com modelos da OpenAI usando sua própria API key.

## Como acessar o site (passo a passo)

### Windows (CMD/PowerShell)

1. Entre na pasta correta do projeto (ajuste para o local onde você salvou o repo):
   ```bat
   cd C:\caminho\para\ice-fire-game-site
   ```
2. Inicie o servidor:
   ```bat
   python -m http.server 4173
   ```
3. Abra no navegador:
   - http://127.0.0.1:4173/index.html

### Linux / macOS

1. Entre na pasta do projeto:
   ```bash
   cd /workspace/ice-fire-game-site
   ```
2. Inicie o servidor:
   ```bash
   python3 -m http.server 4173
   ```
3. Abra no navegador:
   - http://127.0.0.1:4173/index.html

## Se aparecer “Directory listing for /”

Você iniciou o servidor em uma pasta sem o `index.html` do projeto.

- Pare o servidor (`Ctrl + C`)
- Faça `cd` para a pasta do projeto
- Rode novamente `python -m http.server 4173`

## Como usar a IA

1. Cole sua API key no campo **API Key**.
2. Escolha modelo, temperatura e prompt de sistema.
3. Envie mensagens e acompanhe o histórico salvo no navegador.

## Aviso de segurança

- Nunca comite sua API key em repositório.
- Se uma chave for exposta, revogue no painel da OpenAI e gere outra.
