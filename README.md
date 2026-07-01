# ATLÂNTICO STUDIO — Site estilo RED refinado

Site estático, responsivo e pronto para publicação no GitHub Pages.

## Estrutura

```text
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── favicon/
    ├── icons/
    ├── images/
    ├── logo/
    └── video/
```

## Como subir no GitHub Pages

1. Extraia o ZIP.
2. Envie `index.html`, `style.css`, `script.js`, `README.md` e a pasta `assets` para a raiz do repositório.
3. No GitHub, acesse **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Branch: `main`. Folder: `/root`.
6. Clique em **Save** e aguarde o link.

## Personalização rápida

- Textos e seções: `index.html`
- Cores, responsividade e desenhos: `style.css`
- Loading, menu e formulário: `script.js`
- Vídeo do Hero: `assets/video/ocean-cinematic.mp4`
- Logo: `assets/logo/logo-atlantico-studio.svg`
- Favicon: `assets/favicon/`

## WhatsApp

No arquivo `script.js`, preencha:

```js
const WHATSAPP_NUMBER = '5511999999999';
```

Use apenas números, com DDI e DDD.

## Refinamentos incluídos

- Estrutura de página inspirada na referência: hero, serviços alternados, projetos, feedback, blog, formulário e footer.
- Paleta ATLÂNTICO em navy e dourado.
- Vídeo oceânico no Hero.
- Loading com marca.
- Header fixo com dropdown de serviços e seletor de idioma.
- Desenhos/ilustrações feitos em CSS para cada serviço.
- Responsividade mobile-first e controle de overflow.
