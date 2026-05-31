# AeroGlass UI Kit

AeroGlass UI Kit é um laboratório visual em React inspirado na estética Aero Glass azul do Windows Vista/Windows 7, explorando janelas translúcidas, botões glossy, painéis com profundidade, inputs embutidos e componentes reutilizáveis.

## Preview

![Preview do AeroGlass UI Kit](./docs/preview.png)

> Screenshot em breve.

## Objetivo

O objetivo do projeto é estudar e testar, em uma base React real:

- UI/UX;
- componentização React;
- Tailwind CSS v4;
- CSS customizado;
- estética Aero Glass;
- skeuomorfismo leve;
- interfaces desktop clássicas.

Este projeto funciona como um laboratório visual: as telas servem para validar linguagem visual, densidade, transparência, sombras, titlebars, botões e estados de interface.

## Identidade visual

O visual do AeroGlass UI Kit é mais próximo de:

- Windows Vista Aero azul;
- Windows 7 Aero Glass;
- software desktop clássico dos anos 2000;
- painéis translúcidos com titlebars;
- botões com relevo físico;
- campos embutidos;
- console/statusbar.

A linguagem visual usa vidro azul translúcido, blur, saturação, bordas luminosas, sombras difusas, reflexos superiores discretos e controles com aparência física.

Este projeto não tenta ser um tema SaaS moderno, Material Design, shadcn, flat design ou glassmorphism genérico. Ele também não é um clone oficial de qualquer sistema operacional.

## Tecnologias

- React
- Vite
- Tailwind CSS v4
- CSS customizado
- React Router

## Páginas principais

- **Home** — tela inicial de boas-vindas e atalhos.
- **LoginDemo** — tela de login usada como referência visual.
- **ComponentsShowcase** — página principal para testar componentes UI/UX.
- **About** — página sobre o projeto e sua identidade visual.
- **GlassTransparencyTest** — página para testar transparência e `backdrop-filter`.
- **NotFound** — estado simples de rota não encontrada com visual Aero.

## Componentes

Componentes React existentes em `src/components`:

- `AeroNavbar`
- `AeroFooter`
- `AeroCard`
- `AeroButton`
- `AeroInput`

Além desses componentes, o projeto possui padrões visuais reutilizáveis definidos em CSS, como badges, alertas, modal, avatar, loading, painel de usuários, chat preview, cards 404, barras de progresso e skeletons. Esses padrões aparecem principalmente em `ComponentsShowcase.jsx` e em `src/styles/aero.css`.

## Estrutura do projeto

```text
src/
  components/
    AeroButton.jsx
    AeroCard.jsx
    AeroFooter.jsx
    AeroInput.jsx
    AeroNavbar.jsx
  pages/
    About.jsx
    ComponentsShowcase.jsx
    GlassTransparencyTest.jsx
    Home.jsx
    LoginDemo.jsx
    NotFound.jsx
  styles/
    aero.css
  App.jsx
  main.jsx
design.md
```

- `components`: componentes reutilizáveis Aero.
- `pages`: páginas de demonstração e validação visual.
- `styles`: CSS do sistema visual Aero Glass.
- `design.md`: documentação oficial do design system.
- `App.jsx`: configuração de rotas.
- `main.jsx`: entrada da aplicação e `BrowserRouter`.

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto roda localmente no endereço mostrado pelo Vite, normalmente algo como:

```text
http://localhost:5173/
```

## Rotas

Rotas reais configuradas no projeto:

- `/` — Home
- `/login` — LoginDemo
- `/login-demo` — redireciona para `/login`
- `/showcase` — ComponentsShowcase
- `/components` — redireciona para `/showcase`
- `/about` — About
- `/sobre` — redireciona para `/about`
- `/glass-test` — GlassTransparencyTest
- `*` — NotFound

## Design system

O arquivo `design.md` funciona como fonte oficial do visual do projeto.

Futuras alterações devem seguir esse documento para evitar:

- visual genérico;
- cards SaaS;
- flat design;
- perda da estética Aero;
- modais sem hierarquia;
- loading desalinhado;
- titlebars removidas;
- cards sem transparência;
- bugs visuais em cards, modal, loading e titlebars.

A regra principal do design system é que cada tela deve parecer uma aplicação desktop clássica, composta por janelas, titlebars, painéis internos, barras de status, botões glossy e campos embutidos.

## Status

Projeto experimental em desenvolvimento.

- [x] LoginDemo
- [x] ComponentsShowcase
- [x] design.md
- [x] Home
- [x] About
- [x] GlassTransparencyTest
- [x] React Router
- [ ] Mais componentes
- [ ] Melhor documentação visual
- [ ] Screenshots no README

## Observação legal

Este projeto é apenas um estudo visual/educacional inspirado em interfaces clássicas. Windows, Windows Vista e Windows 7 são marcas da Microsoft. Este projeto não é afiliado, patrocinado ou endossado pela Microsoft.

## Autor

Criado por Lucas Ramos Silva.
