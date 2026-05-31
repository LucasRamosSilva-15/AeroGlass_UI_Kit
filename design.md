# AeroGlass UI Kit — Design System

## 1. Regra visual principal

**O AeroGlass UI Kit não é uma landing page, não é dashboard SaaS, não é glassmorphism moderno. Ele deve parecer uma aplicação desktop clássica dos anos 2000/Windows 7, composta por janelas, titlebars, painéis internos, barras de status, botões glossy e campos embutidos.**

Toda nova tela deve parecer parte da `ComponentsShowcase` atual e da `LoginDemo`, preservando o visual original de `teste.html`: vidro azul translúcido, reflexos suaves, bordas luminosas, sombras difusas, botões físicos e inputs claros.

Não reinterpretar o tema. Não modernizar. Não transformar em template Tailwind genérico.

## 2. Identidade Visual

O AeroGlass UI Kit é uma bancada visual Aero para interfaces desktop clássicas. A estética atual mistura Windows 7 Aero Glass com uma UI skeuomórfica leve: janelas translúcidas, barras internas, painéis funcionais, statusbars, console, módulos de chat, lista de salas, usuários online e controles de formulário.

Características obrigatórias:

- Vidro azul translúcido.
- Blur e saturação no vidro.
- Bordas superiores luminosas.
- Sombras inferiores difusas.
- Reflexos discretos, nunca reflexo branco gigante.
- Botões glossy com relevo.
- Inputs claros embutidos.
- Cards/painéis com titlebars pequenas.
- Módulos que parecem parte de um software desktop.
- Densidade visual funcional, sem hero gigante nem cards vazios.

## 3. Anatomia Obrigatória de uma Página Aero

Toda página nova deve seguir esta composição:

- `.aero-page` como fundo global azul Aero.
- `AeroNavbar` no topo.
- `main` com `flex: 1`.
- Wrapper central com `max-width` entre `980px` e `1100px`.
- Conteúdo dividido em janelas/painéis, não seções soltas.
- `AeroFooter` no final.

Estrutura recomendada:

```jsx
<div className="aero-page">
  <AeroNavbar />
  <main className="aero-[page]-main">
    <div className="aero-[page]-wrap">
      <section className="aero-window">...</section>
      <section className="aero-window">...</section>
    </div>
  </main>
  <AeroFooter />
</div>
```

Regras:

- O footer deve ficar no final do fluxo, nunca com `position: absolute`.
- O conteúdo deve ser centralizado, mas com cara de aplicativo, não de landing page.
- Cada seção importante deve parecer janela, painel de sistema ou módulo funcional.
- Evitar blocos decorativos sem função.

## 4. Como Uma Página NÃO Deve Parecer

Não deve parecer:

- Landing page de startup.
- SaaS moderno.
- Página com hero gigante e cards limpos demais.
- Site institucional genérico.
- Material Design.
- shadcn.
- Tailwind template moderno.
- Cards brancos flat.
- Glassmorphism roxo/rosa.
- Dashboard minimalista.
- Página de marketing com call-to-action gigante.
- Coleção de cards sem titlebar e sem contexto de software.

Se a tela parece “produto SaaS 2026”, está errada.

## 5. Como Uma Página DEVE Parecer

Deve parecer:

- Uma tela de programa desktop.
- Uma janela de painel de controle.
- Um app antigo refinado.
- Uma interface com módulos funcionais.
- Uma tela com titlebars, statusbars, console, botões e campos.
- Uma mistura de Windows 7 Aero com UI skeuomórfica leve.
- Uma bancada manual de componentes Aero Glass.

Referência principal: a `ComponentsShowcase` atual.

## 6. Densidade Visual

Regras:

- Evitar hero alto demais.
- Evitar cards grandes e vazios.
- Evitar muito espaço branco/azul sem conteúdo.
- Preferir painéis compactos e funcionais.
- Cada card deve ter propósito visual.
- Se um card tiver pouco conteúdo, usar formato compacto.
- Painéis grandes só quando tiverem conteúdo real: console, lista, chat, formulário ou status.
- Não criar seções gigantes com uma frase curta.
- Não deixar a lateral direita vazia em telas largas; usar wrapper adequado e glow sutil do fundo.
- Usar statusbars, badges, console ou listas compactas para dar densidade de app.

## 7. Paleta de Cores

Valores principais usados em `teste.html` e `src/styles/aero.css`:

- Fundo azul escuro: `#041426`
- Azul profundo: `#0d3d6b`
- Azul médio: `#1d6fa5`
- Azul primário: `#003d7c`
- Azul container: `#0054a6`
- Ciano/foco: `#2fbcff`
- Highlights: `#7cd1ff`, `#83cfff`, `#a9c7ff`
- Botão azul glossy: `#7cd1ff`, `#1e9bff`, `#0060ba`, `#002d5c`
- Botão secundário/prateado: `#ffffff`, `#eef3f7`, `#d1dee6`, `#b8c8d1`
- Vidro escuro translúcido: `rgba(16, 42, 70, 0.3)`
- Branco translúcido: `rgba(255, 255, 255, 0.1)`, `rgba(255, 255, 255, 0.2)`, `rgba(255, 255, 255, 0.55)`
- Borda/input: `#727783`
- Borda superior de input: `#424751`
- Placeholder: `#c2c6d3`
- Texto principal escuro: `#081d2c`
- Texto claro: `#ffffff`, `rgba(255, 255, 255, 0.8)`, `rgba(255, 255, 255, 0.9)`

Gradientes essenciais:

```css
linear-gradient(135deg, #1d6fa5 0%, #0d3d6b 50%, #041426 100%)
linear-gradient(to bottom, #7cd1ff 0%, #1e9bff 45%, #0060ba 50%, #002d5c 100%)
linear-gradient(to bottom, #fff 0%, #eef3f7 45%, #d1dee6 50%, #b8c8d1 100%)
```

Não usar roxo/rosa como base. Não trocar para tema claro SaaS.

## 8. Fundo Aero

O fundo é aplicado por `.aero-page`: ocupa `100dvh`, usa layout em coluna e combina gradientes radiais com um gradiente linear azul. A camada `::before` adiciona brilho atmosférico e a camada `::after` atual adiciona um glow lateral sutil em telas largas.

Regras:

- Manter `min-height: 100dvh`.
- Manter `display: flex` e `flex-direction: column`.
- Preservar os gradientes azuis.
- Não substituir por cor sólida.
- Não usar fundo branco.
- Não usar blobs modernos, orbs decorativos ou gradientes roxo/rosa.

## 9. Proporções e Medidas

Medidas recomendadas:

- Max-width da página: `1040px` ou `1100px`.
- Padding externo desktop: `32px`.
- Padding externo mobile: `16px`.
- Gap entre seções: `18px` a `24px`.
- Padding de janela/body: `16px` a `20px`.
- Altura de titlebar: `34px` a `40px`.
- Border-radius de janelas: `8px`.
- Border-radius de botões: `6px`.
- Border-radius de badges/pills: `999px`.
- Cards compactos: `min-height` entre `120px` e `180px`.
- Hero: evitar passar de `280px` a `340px` sem necessidade.
- Na showcase atual, hero é compacto e não ocupa meia página.

Nunca criar hero de 500px com texto centralizado estilo startup.

## 10. Titlebars

Titlebar é elemento obrigatório em painéis importantes.

Regras:

- Todo painel principal deve ter `.aero-window-titlebar`.
- Titlebar deve ter label à esquerda.
- Metadata/status à direita.
- Titlebar não pode se misturar com o body.
- Body deve começar depois da titlebar com padding próprio.
- Titlebar deve parecer barra de janela, não apenas texto pequeno.
- Metadata precisa ter contraste suficiente.

Exemplo certo:

```text
[Sobre o projeto]                         [AeroGlass UI Kit]
[body: texto, status, botões]
```

Exemplo errado:

```text
Sobre o projeto AeroGlass UI Kit misturado no corpo do card.
```

Classes atuais:

- `.aero-window`
- `.aero-window-titlebar`
- `.aero-window-body`
- `.aero-panel-body`
- `.aero-users-body`
- `.aero-modal-body`
- `.aero-modal-footer`

## 11. Hero Correto

O hero deve parecer uma janela principal, não landing page.

Hero correto:

- Parece uma janela/painel principal.
- Pode usar titlebar ou statusbar interna.
- Tem altura moderada.
- Tem título, subtítulo e ações.
- Pode ter painel lateral ou barra de status.
- Não ocupa metade da página.
- Não usa texto promocional exagerado.

Hero errado:

- Banner enorme.
- Fundo limpo demais.
- Texto centralizado estilo startup.
- Botão gigante.
- Aparência de marketing.
- Ilustração genérica.

Na `ComponentsShowcase`, o hero é uma “Bancada Aero”, com statusbar compacta e altura reduzida.

## 12. Hierarquia Visual Obrigatória

### Nível 1 — Janela principal

- Vidro azul médio.
- Titlebar clara.
- Maior sombra.
- Usada para hero, módulos principais e blocos de destaque.

### Nível 2 — Painel interno

- Azul escuro translúcido.
- Usado para listas, console, chat e áreas densas.
- Exemplos: `.aero-glass-dark`, `.aero-message-list`, `.aero-room-row`, `.aero-console-lines`.

### Nível 3 — Card compacto

- Vidro quiet/discreto.
- Usado para resumos, badges e pequenos módulos.
- Exemplos: `.aero-glass-quiet`, `.aero-panel-compact`, `.aero-badge-row`.

### Nível 4 — Campo/controle

- Claro/prateado.
- Usado para inputs, selects, textarea e botões secundários.
- Exemplos: `.aero-input`, `.aero-btn-secondary`.

## 13. Cards com Cabeçalho Interno

Cards com aparência de janela usam `.aero-window` e `.aero-window-titlebar`.

Regras:

- Cabeçalho separado do corpo.
- Metadata à direita com contraste suficiente.
- Corpo com padding próprio.
- Usar `flex-direction: column` quando o conteúdo for empilhado.
- Usar gap vertical consistente.
- Evitar título e corpo grudados.
- Evitar conteúdo espremido.
- Evitar que titlebar receba conteúdo do body.
- Não remover cabeçalhos internos de painéis que já usam padrão de janela.

## 14. Layout Oficial Para About.jsx

A About deve parecer painel “Sobre” de software desktop, não landing page institucional.

### 1. Janela principal “Sobre o projeto”

Deve conter:

- Titlebar.
- Título “AeroGlass UI Kit”.
- Subtítulo curto.
- Texto explicativo.
- Botões “Ver componentes” e “Ver LoginDemo”.
- Painel lateral pequeno com status do projeto.

### 2. Grid de 2 colunas

- Identidade visual.
- Tecnologias.

Ambos devem ser painéis/janelas, não cards SaaS brancos.

### 3. Grid de princípios

- 4 cards compactos.
- Não usar cards grandes.
- Cada card com título curto e uma frase.

### 4. Console/status

- Painel interno escuro.
- Logs compactos.

Exemplo:

```text
[ativo] ComponentsShowcase validada
[ativo] LoginDemo como referência
[dev] About.jsx em teste
[docs] design.md carregado
```

### 5. Painel “O que este kit não é”

- Deve parecer alerta Aero.
- Não deve parecer card SaaS.

### 6. Autoria

- Card compacto.
- Não criar seção gigante.

Regras da About:

- Não deve ser landing page.
- Deve usar módulos com titlebar.
- Deve usar console/status para dar cara de app.
- Não usar ilustrações genéricas.
- Não usar cards brancos modernos.
- Não usar hero gigante.

## 15. Layouts Para Futuras Páginas

### Página de documentação

- Sidebar ou lista compacta.
- Janela principal com conteúdo.
- Painel de status lateral.
- Blocos com titlebar.
- Conteúdo em português.

### Página de componentes

- Módulos em grid.
- Cada módulo com titlebar.
- Exemplos compactos.
- Evitar catálogo genérico.

### Página de perfil

- Card de usuário.
- Painel de dados.
- Painel de preferências.
- Statusbar.
- Lista compacta de atividades.

### Página de salas

- Lista em painel escuro.
- Filtros em barra compacta.
- Botões glossy.
- Badges de status.
- Contagem de usuários com espaçamento claro.

## 16. Exemplos Textuais de Composição

Exemplo de janela:

```text
[titlebar: Identidade visual | estável]
[body: texto curto + lista compacta]
```

Exemplo de console:

```text
[ativo] ComponentsShowcase validada
[ativo] LoginDemo como referência
[dev] About.jsx em teste
[docs] design.md carregado
```

Exemplo de card compacto:

```text
Título pequeno
Valor ou descrição curta
Badge/status no canto
```

Exemplo de painel de status:

```text
Estado da sessão | Online | Admin | Sucesso | 17:44
```

## 17. ComponentsShowcase

A `ComponentsShowcase` é a página oficial de validação visual do AeroGlass UI Kit. Ela não é landing page. Ela deve parecer uma bancada manual de software desktop clássico.

Ela testa:

- Comandos/botões.
- Entrada de dados.
- Painéis de sistema.
- Estados.
- Avisos do sistema.
- Modal.
- Pessoas/usuários online.
- Prévia de chat.
- Salas.
- Carregamento.
- Erro de rota/404.

Regras:

- Usar `.aero-page`, `AeroNavbar`, `.aero-showcase-main` e `AeroFooter`.
- Usar `.aero-showcase-wrap`.
- Usar grid responsivo.
- Preferir módulos com aparência de janela.
- Evitar cartões soltos sem função.
- Não transformar a showcase em página de marketing.

## 18. LoginDemo

A `LoginDemo` continua sendo a referência de tela final simples baseada no `teste.html`.

Ela valida:

- Fundo Aero.
- Navbar.
- Card central translúcido.
- Inputs claros.
- Botões glossy.
- Footer no rodapé.

Não alterar `LoginDemo` sem pedido explícito.

## 19. Inputs

Inputs usam `.aero-input`.

Regras:

- Fundo claro: `#f8fbff`.
- Borda `#727783`.
- Topo `#424751`.
- Sombra interna para aparência embutida.
- Foco com borda `#2fbcff` e glow ciano.
- Ícones à esquerda centralizados verticalmente.
- Textarea e select seguem a mesma aparência.
- Disabled deve parecer bloqueado, mas legível.

## 20. Botões

### Primário

`.aero-btn-primary`: botão azul glossy com relevo, brilho superior e active pressionado.

### Secundário

`.aero-btn-secondary`: botão claro/prateado, usado para ações secundárias, Google e botões de retorno.

### Danger

`.aero-btn-danger`: variação vermelha glossy para ações destrutivas.

### Ghost

`.aero-btn-ghost`: botão translúcido para ações menos fortes.

Regras:

- Não usar botões flat.
- Não remover brilho superior.
- Manter active com sensação pressionada.
- Botões em modal devem ficar no footer do modal, com gap.

## 21. Modal

O modal atual usa `.aero-modal-backdrop`, `.aero-modal`, `.aero-modal-body` e `.aero-modal-footer`.

Regras:

- Backdrop fixo cobrindo toda a tela.
- Fundo escurecido translúcido.
- Blur suave.
- Modal centralizado.
- Largura controlada: atual `min(480px, calc(100% - 32px))`.
- `max-height` controlado.
- Header com `WindowHeader`.
- Body com título e texto.
- Footer com botões.
- Gap entre botões.
- Primário glossy e secundário prateado.
- Sem texto colado.
- Sem modal esticado demais.
- Em mobile, respeitar margens laterais.

## 22. Loading

O card “Abrindo sala...” usa `.aero-loading-card`, `.aero-loading-content`, `.aero-spinner` e `.aero-loading-copy`.

Regras:

- Conteúdo centralizado.
- Spinner circular centralizado.
- Título abaixo do spinner.
- Subtítulo abaixo do título.
- `flex-direction: column`.
- `align-items: center`.
- `justify-content: center`.
- Gap consistente.
- Nenhuma barrinha solta.
- Nenhum pseudo-elemento deslocado.
- `.aero-loading-card::before` e `.aero-loading-card::after` ficam desativados para evitar reflexo/linha atravessando o card.

## 23. Painel de Usuários Online

O painel usa `.aero-users-panel`, `WindowHeader`, `.aero-users-body`, `.aero-user-list` e `.aero-user-list-item`.

Regras:

- Header com “Online agora” e quantidade de usuários separados.
- Body com título “Usuários online”.
- Lista com `flex-direction: column`.
- Gap entre usuários.
- Cada usuário com padding vertical.
- Avatar e nome com espaçamento adequado.
- Nomes nunca podem colar no avatar.
- Painel com respiro interno e aparência de janela Aero.

## 24. Card de Erro 404

O card 404 usa `.aero-not-found-card`, `WindowHeader` e `.aero-not-found-body`.

Regras:

- Cabeçalho “Navegação” e status “não encontrada”.
- Número `404` em bloco próprio.
- Texto “Página não encontrada” em linha própria.
- Botão “Voltar” com margem adequada.
- Layout compacto, mas sem conteúdo espremido.
- Nunca renderizar `404Página não encontrada` colado.

## 25. Chat Preview

O chat preview usa `.aero-chat-preview`, `.aero-chat-header`, `.aero-message-list`, `.aero-message`, `.aero-chat-compose` e `.aero-send-button`.

Regras:

- Header com avatar, nome da sala, presença e badge online.
- Área de mensagens em painel interno escuro.
- Mensagens recebidas e enviadas com variações sutis de vidro.
- Campo de digitação claro.
- Botão “Enviar” com largura estável e glossy.
- Não implementar Socket.io nessa página.

## 26. Estados e Badges

A seção “Estados” usa `.aero-badge-row` como barra de status desktop, não container de debug.

Regras:

- Deve parecer statusbar de aplicativo.
- Deve incluir label, badges e relógio/status à direita.
- Badges devem ser compactos.
- Evitar excesso de padding vertical.
- Não deixar a área parecer vazia.

## 27. Idioma e Microtextos

- Seções internas da showcase devem preferir português.
- Termos técnicos curtos podem permanecer em inglês quando parecem labels de sistema: “Aero”, “Admin”, “Info”, nomes de salas ou marca.
- Evitar mistura sem propósito entre português e inglês.
- Microtextos devem parecer de interface real, não documentação automática.

## 28. Espaçamento e Composição

Regras práticas:

- Usar gap consistente.
- Usar padding interno padronizado.
- Evitar margin manual aleatória.
- Não colar textos em bordas.
- Não colar título e corpo.
- Não deixar cards com excesso de vazio.
- Não deixar cards parecerem placeholders inacabados.
- Manter alinhamento entre cards no grid.
- Usar wrappers internos quando houver header/body/footer.
- Em conteúdo empilhado, preferir flex column.
- Em listas, usar gap e padding por item.

## 29. Bugs Visuais Proibidos

Não permitir:

- `404Página não encontrada` colado.
- Título e corpo de card grudados.
- Spinner/loading desalinhado.
- Barrinha solta no card de carregamento.
- Nomes colados em avatar no painel de usuários online.
- Modal esticado ou sem hierarquia.
- Linha branca horizontal dura atravessando cards.
- Reflexo branco gigante no vidro.
- Botão de modal ocupando largura inteira sem necessidade.
- Cards vazios parecendo placeholders inacabados.
- Chat preview com botão “Enviar” desproporcional ao input.
- Footer no meio da página.
- Footer preso por `position: absolute`.

## 30. Instruções Para Ferramentas de IA

Quando gerar uma nova página:

- Copiar a linguagem visual da `ComponentsShowcase`.
- Usar janelas com titlebars.
- Evitar reinterpretar o tema.
- Não trocar a paleta.
- Não criar hero de startup.
- Não usar cards SaaS.
- Usar módulos de software.
- Usar statusbars, console, badges e painéis internos.
- Manter português nos textos visíveis.
- Preservar a estética Aero Glass.
- Consultar este arquivo antes de criar layout.
- Se estiver em dúvida, escolher a solução mais parecida com um painel desktop clássico.

## 31. Checklist de Aprovação

Uma tela nova só está aprovada se:

- Parece parte da `ComponentsShowcase`.
- Usa fundo Aero.
- Usa titlebars.
- Tem botões glossy.
- Tem painéis internos escuros.
- Não parece landing page.
- Não parece SaaS.
- Não tem cards flat.
- Não tem texto colado.
- Não tem footer no meio.
- Não tem reflexo branco gigante.
- Não tem linha branca dura atravessando cards.
- Não tem excesso de vazio.
- Mantém navbar e footer corretos.

## 32. Checklist Específico da About.jsx

A About está aprovada se:

- Parece janela “Sobre” de software desktop.
- Tem janela principal com titlebar.
- Tem status do kit.
- Tem tecnologias em badges Aero.
- Tem console/status.
- Tem seção “O que este kit não é”.
- Tem autoria compacta.
- Não parece landing page institucional.
- Não usa hero gigante.
- Não usa cards modernos genéricos.
- Não usa ilustração genérica.

## 33. Classes CSS Principais

- `.aero-page`: wrapper com fundo Aero e layout vertical.
- `.aero-login-main`: main centralizado da `LoginDemo`.
- `.aero-showcase-main`: main da showcase.
- `.aero-showcase-wrap`: largura e empilhamento da showcase.
- `.aero-navbar`: barra superior.
- `.aero-footer`: barra inferior.
- `.aero-glass`: vidro base usado por `AeroCard`.
- `.aero-glass-light`: variação clara.
- `.aero-glass-dark`: variação escura.
- `.aero-glass-quiet`: variação compacta/discreta.
- `.aero-glass-active`: variação ativa.
- `.aero-window`: painel com cabeçalho interno.
- `.aero-window-titlebar`: cabeçalho interno.
- `.aero-window-body`: corpo de janela.
- `.aero-panel-body`: corpo de painel simples.
- `.aero-input`: input/select/textarea Aero.
- `.aero-btn-primary`: botão primário.
- `.aero-btn-secondary`: botão secundário.
- `.aero-btn-danger`: botão danger.
- `.aero-btn-ghost`: botão translúcido.
- `.aero-badge`: badge.
- `.aero-badge-row`: barra de status de badges.
- `.aero-alert`: alerta Aero.
- `.aero-modal-*`: estrutura do modal.
- `.aero-users-*`: painel de usuários.
- `.aero-chat-*`: preview de chat.
- `.aero-loading-*`: loading.
- `.aero-not-found-*`: card 404.
- `.aero-spinner`: spinner circular.
- `.aero-progress`: barra de progresso.
- `.aero-skeleton`: skeleton.

Observação: não existe classe `.aero-card` no código atual. O componente `AeroCard` usa `.aero-glass`.

## 34. Regras de Não Fazer

Não fazer:

- Não trocar a paleta azul Aero.
- Não remover blur do vidro.
- Não transformar o card em azul sólido.
- Não transformar a showcase em landing page.
- Não transformar painéis em cards SaaS.
- Não usar Material Design.
- Não usar shadcn.
- Não usar botões flat.
- Não remover cabeçalhos internos.
- Não remover relevo dos botões.
- Não remover bordas luminosas.
- Não remover sombra interna dos inputs.
- Não usar sombras duras demais.
- Não usar reflexo branco gigante.
- Não simplificar para flat design.
- Não alterar `LoginDemo` sem pedido explícito.
- Não misturar este UI Kit com o WebChat principal.

## 35. Diretrizes Para Novos Componentes

Ao criar novos componentes:

- Reutilizar classes existentes antes de criar novas.
- Usar borda luminosa em superfícies de vidro.
- Usar gradiente sutil.
- Manter luz vinda de cima.
- Usar sombra interna quando houver aparência física.
- Usar sombra externa difusa para profundidade.
- Manter cores frias.
- Manter contraste e legibilidade com text-shadow.
- Preferir border-radius entre `6px` e `8px`.
- Criar header/body/footer quando o componente parecer janela.
- Usar painel interno escuro para listas, logs, chats e conteúdo denso.
- Usar campo claro para input e ações secundárias.
- Marcar qualquer padrão novo como diretriz se ainda não existir no código.

## 36. Status do Projeto

O AeroGlass UI Kit é um laboratório visual separado feito em React + Tailwind CSS v4.

- `ComponentsShowcase` é a página oficial de validação visual e consistência do kit.
- `LoginDemo` continua sendo a referência de tela final baseada no `teste.html`.
- `design.md` deve ser consultado antes de qualquer nova alteração visual.
- O kit deve permanecer separado do WebChat principal.
