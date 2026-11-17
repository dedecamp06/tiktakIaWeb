# TikitakIA · site

Site público do TikitakIA, o técnico de IA para jogos de futebol no PC. Tem a página de apresentação e a tela de entrada do Vestiário (painel dos convidados do beta).

Produção: https://tikitakia.com.br

## Rodar

```bash
npm install
npm run start:dev   # servidor de desenvolvimento, aceita links do ngrok
npm run build       # checa os tipos e gera dist/
npm run preview     # serve o dist/ gerado
```

Não precisa de variáveis de ambiente.

## Páginas

| Rota | Arquivo | O que tem |
|---|---|---|
| `/` | `src/Inicio.tsx` | Abertura com foto e áudio de exemplo, como funciona, campo tático, recursos, treinos e mentorias, dúvidas e rodapé |
| `/entrar` | `src/Entrar.tsx` | Login do Vestiário. Por enquanto toda tentativa mostra "Apenas convidados têm acesso ao Vestiário" e nada é enviado |

A rota é escolhida em `src/App.tsx` pelo caminho da URL, sem biblioteca de rotas. O `vercel.json` manda toda URL para o `index.html`.

## Estrutura

```
src/
  main.tsx        ponto de entrada
  App.tsx         escolhe a página pela URL
  Topo.tsx        logo e menu
  Inicio.tsx      página inicial; textos em PASSOS, RECURSOS, TREINOS, DUVIDAS e FALA_EXEMPLO
  Prancheta.tsx   campo tático em SVG (rival 4-3-3 contra você no 4-2-2-2)
  Entrar.tsx      login do Vestiário
  estilos.css     todo o visual; cores em variáveis no :root, com tema escuro automático
public/           imagens, áudio e ícones servidos como estão
```

## Como mudar

- **Textos:** ficam nas listas no topo de `src/Inicio.tsx`. Um recurso com `emBreve: true` ganha o selo "Em breve".
- **Áudio do exemplo:** substitua `public/fala-exemplo.mp3` e atualize `FALA_EXEMPLO` para o texto bater com a fala.
- **Cores:** variáveis em `:root` no `estilos.css` (`--destaque`, `--marca`, `--campo-1` e outras).
- **E-mail de contato:** `suporte@tikitakia.com.br`, no rodapé, nas dúvidas e na tela de entrada.

## Arquivos em `public/`

| Arquivo | Uso | Origem |
|---|---|---|
| `tecnico.webp` | Ilustração da abertura | Imagem própria, sem marcas de terceiros |
| `logo.png`, `favicon.png` | Logo e ícone da aba | Recorte da ilustração |
| `estadio.jpg`, `estadio-vertical.jpg` | Foto de fundo da abertura | Eduard Delputte, Unsplash (crédito no rodapé) |
| `fala-exemplo.mp3` | Botão "Ouvir o TikitakIA" | Voz sintética; trocar por gravação licenciada antes do lançamento |
| `compartilhar.jpg` | Prévia ao compartilhar o link (WhatsApp, redes) | Gerada a partir da ilustração |

O site não menciona nenhum jogo ou desenvolvedora por nome, de propósito.

## Deploy

Vercel, projeto com raiz nesta pasta e preset **Vite**. O domínio `tikitakia.com.br` usa o DNS da Cloudflare, com os registros que a Vercel pedir e a nuvem cinza (DNS only).

A prévia de compartilhamento aponta para `https://tikitakia.com.br/compartilhar.jpg`, então só aparece depois que o domínio estiver ligado.
