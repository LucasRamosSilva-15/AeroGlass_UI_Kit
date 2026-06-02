import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";

const shortcuts = [
  {
    title: "ComponentsShowcase",
    text: "Teste visual de botoes, cards, inputs, chat e estados.",
    href: "/showcase",
  },
  {
    title: "LoginDemo",
    text: "Tela de login usada como referencia visual final.",
    href: "/login",
  },
  {
    title: "About",
    text: "Pagina sobre o projeto e a identidade visual.",
    href: "/about",
  },
  {
    title: "Glass Test",
    text: "Diagnostico de transparencia e backdrop-filter.",
    href: "/glass-test",
  },
];

const tests = [
  {
    title: "Vidro translucido",
    text: "Fundos visiveis atraves dos paineis com blur e saturacao.",
  },
  {
    title: "Controles fisicos",
    text: "Botoes com brilho superior, relevo e estado pressionado.",
  },
  {
    title: "Janelas Aero",
    text: "Titlebars, paineis internos e bordas luminosas.",
  },
  {
    title: "Consistencia visual",
    text: "Componentes seguindo a mesma paleta e densidade.",
  },
];

export default function Home() {
  return (
    <div className="aero-page">
      <AeroNavbar />

      <main className="aero-home-main">
        <div className="aero-home-wrap">
          <AeroCard className="aero-home-hero aero-window aero-glass-active aero-reflection">
            <WindowHeader title="Bem-vindo" meta="AeroGlass UI Kit" />
            <div className="aero-home-hero-body">
              <div className="aero-home-hero-copy">
                <h1 className="aero-title font-headline-lg text-white">AeroGlass UI Kit</h1>
                <p className="aero-text-shadow font-title-md text-white/90">
                  Interface experimental inspirada no Windows 7 Aero Glass.
                </p>
                <p className="aero-text-shadow font-body-sm text-white/82">
                  Explore componentes React com vidro translucido, botoes em relevo, paineis com
                  profundidade, inputs embutidos e uma linguagem visual classica de software desktop.
                </p>
                <div className="aero-home-actions">
                  <AeroButton asLink href="/showcase">
                    Ver componentes
                  </AeroButton>
                  <AeroButton asLink href="/login" variant="secondary">
                    Ver LoginDemo
                  </AeroButton>
                  <AeroButton asLink href="/about" variant="ghost">
                    Sobre o projeto
                  </AeroButton>
                </div>
              </div>

              <div className="aero-home-status">
                <div className="aero-home-status-titlebar">
                  <span>Status do kit</span>
                  <small>ativo</small>
                </div>
                <div className="aero-home-status-body">
                  <StatusRow label="Versao" value="1.0 experimental" />
                  <StatusRow label="Base visual" value="Aero Glass" />
                  <StatusRow label="Frontend" value="React + Tailwind CSS v4" />
                  <StatusRow label="Estado" value="em desenvolvimento" />
                </div>
              </div>
            </div>
          </AeroCard>

          <AeroCard className="aero-home-shortcuts aero-window aero-glass-dark aero-reflection">
            <WindowHeader title="Atalhos rapidos" meta="navegacao" />
            <div className="aero-home-shortcut-grid">
              {shortcuts.map((item) => (
                <div className="aero-home-shortcut-card" key={item.title}>
                  <div>
                    <h2 className="aero-card-title">{item.title}</h2>
                    <p className="aero-text-shadow font-body-sm text-white/76">{item.text}</p>
                  </div>
                  <AeroButton asLink className="aero-btn-sm" href={item.href}>
                    Abrir
                  </AeroButton>
                </div>
              ))}
            </div>
          </AeroCard>

          <section className="aero-home-grid">
            <AeroCard className="aero-window aero-glass-light aero-reflection">
              <WindowHeader title="O que este kit testa" meta="componentes" />
              <div className="aero-home-test-grid">
                {tests.map((item) => (
                  <div className="aero-home-test-card" key={item.title}>
                    <span className="aero-text-shadow font-label-md text-white/72">{item.title}</span>
                    <p className="aero-text-shadow font-body-sm text-white/82">{item.text}</p>
                  </div>
                ))}
              </div>
            </AeroCard>

            <div className="aero-home-side-stack">
              <AeroCard className="aero-window aero-glass-dark">
                <WindowHeader title="Console de sessao" meta="boot" />
                <div className="aero-home-console">
                  <span>[ok] design.md carregado</span>
                  <span>[ok] tema AeroGlass ativo</span>
                  <span>[ok] componentes principais disponiveis</span>
                  <span>[dev] novas telas em validacao</span>
                </div>
              </AeroCard>

              <AeroCard className="aero-window aero-glass-quiet">
                <WindowHeader title="Regras visuais" meta="ambiente" />
                <div className="aero-home-rules">
                  <span>Nao usar visual SaaS moderno</span>
                  <span>Nao remover titlebars</span>
                  <span>Nao transformar vidro em bloco solido</span>
                  <span>Nao usar botoes flat</span>
                </div>
              </AeroCard>
            </div>
          </section>

          <div className="aero-home-statusbar">
            <span>Tema: AeroGlass UI Kit Edition</span>
            <span>Modo: laboratorio visual</span>
            <span>Render: React/Vite</span>
          </div>
        </div>
      </main>

      <AeroFooter />
    </div>
  );
}

function WindowHeader({ title, meta }) {
  return (
    <div className="aero-window-titlebar">
      <span>{title}</span>
      <small>{meta}</small>
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="aero-home-status-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
