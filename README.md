# ATLÂNTICO STUDIO — Estrutura inspirada na página de Marketing Digital da RED

Pacote estático pronto para GitHub Pages com HTML, CSS e JavaScript puros.

## O que foi ajustado

- Estrutura da página reorganizada no padrão de agência: header com serviços, hero, apresentação, áreas de atuação, projetos selecionados, feedback, blog, formulário e rodapé.
- Linguagem comercial adaptada para ATLÂNTICO STUDIO.
- Hero com vídeo local de mar em movimento.
- Logo usada no loading, header, favicon e rodapé.
- Layout responsivo para desktop, tablet e mobile.
- Formulário gera uma mensagem pronta e abre o Instagram da ATLÂNTICO STUDIO.

## Estrutura

```txt
index.html
style.css
script.js
README.md
assets/
  favicon/
  images/
  logo/
  icons/
  video/
```

## Como publicar no GitHub Pages

1. Suba todos os arquivos para a raiz do repositório.
2. Vá em **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch **main** e a pasta **/root**.
5. Salve e aguarde o link do GitHub Pages.

## Como alterar o destino do formulário

Abra `script.js` e edite:

```js
const WHATSAPP_NUMBER = '';
```

Exemplo:

```js
const WHATSAPP_NUMBER = '351999999999';
```

Se o campo ficar vazio, o formulário abre o Instagram `@atlanticostudioo`.
