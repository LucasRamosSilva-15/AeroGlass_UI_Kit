import { Link } from "react-router-dom";
import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";

const shortcuts = [
  { number: "01", title: "Componentes", text: "Botões, painéis, campos e padrões de interface.", href: "/showcase", icon: "✳" },
  { number: "02", title: "Tela de acesso", text: "Uma experiência de entrada com acabamento Aero.", href: "/login", icon: "◉" },
  { number: "03", title: "O projeto", text: "Conheça a linguagem visual e os princípios do kit.", href: "/about", icon: "⌘" },
  { number: "04", title: "Laboratório de vidro", text: "Compare transparência, blur e profundidade.", href: "/glass-test", icon: "◌" },
];

const principles = [
  { title: "Vidro em camadas", text: "Transparência, luz e blur preservam profundidade sem perder leitura." },
  { title: "Controles táteis", text: "Brilho sutil, relevo e estados claros dão vida aos componentes." },
  { title: "Janelas expressivas", text: "Bordas luminosas e titlebars mantêm a assinatura clássica do Aero." },
  { title: "Interface adaptável", text: "Ritmo e espaçamento se ajustam com naturalidade a cada tela." },
];

export default function Home() {
  return (
    <div className="aero-page aero-home-page">
      <AeroNavbar />

      <main className="aero-home-main">
        <div className="aero-home-wrap">
          <AeroCard className="aero-home-hero aero-window aero-glass-active aero-reflection">
            <div className="aero-home-windowbar">
              <div className="aero-home-window-controls" aria-hidden="true"><i /><i /><i /></div>
              <span>Área de trabalho</span>
              <small><span className="aero-home-live-dot" /> STUDIO · 01</small>
            </div>

            <div className="aero-home-hero-body">
              <div className="aero-home-hero-copy">
                <div className="aero-home-eyebrow"><span className="aero-home-eyebrow-line" />Interface design system · React</div>
                <h1 className="aero-title font-headline-lg text-white">AeroGlass,<br /><span>em uma nova luz.</span></h1>
                <p className="aero-home-lede">A nostalgia do vidro, redesenhada para uma interface mais leve, nítida e atual. Explore componentes e experimente cada camada.</p>
                <div className="aero-home-actions">
                  <AeroButton asLink className="aero-home-primary-action" href="/showcase">Explorar componentes <span aria-hidden="true">↗</span></AeroButton>
                  <AeroButton asLink href="/glass-test" variant="ghost">Experimentar o vidro</AeroButton>
                </div>
                <div className="aero-home-proof"><span className="aero-home-proof-mark" aria-hidden="true">✳</span><span>Um kit experimental para interfaces com personalidade.</span></div>
              </div>

              <div className="aero-home-visual" role="img" aria-label="Prévia de uma interface Aero Glass moderna">
                <div className="aero-home-orbit aero-home-orbit-one" />
                <div className="aero-home-orbit aero-home-orbit-two" />
                <div className="aero-home-glow" />
                <div className="aero-home-float-card aero-home-float-card-back"><span className="aero-home-float-label">MATERIAL</span><span className="aero-home-float-value">Glass <i>02</i></span></div>

                <div className="aero-home-demo-window">
                  <div className="aero-home-demo-titlebar">
                    <span className="aero-home-demo-appmark">A</span><span>Aero Studio</span><span className="aero-home-demo-menu" aria-hidden="true">•••</span>
                  </div>
                  <div className="aero-home-demo-content">
                    <div className="aero-home-demo-kicker">VISUAL SYSTEM <span>LIVE</span></div>
                    <strong>Clareza<br />em cada camada.</strong>
                    <div className="aero-home-demo-preview"><div className="aero-home-demo-orb" /><div className="aero-home-demo-bars"><i /><i /><i /><i /><i /><i /><i /></div><span>REFRACTION / 01</span></div>
                    <div className="aero-home-demo-footer"><span><i /> Luz ambiente</span><span>08:42 <b>↗</b></span></div>
                  </div>
                </div>

                <div className="aero-home-float-card aero-home-float-card-front"><span className="aero-home-float-swatch" /><span><small>ACENTOS</small><strong>Ice blue</strong></span><span className="aero-home-swatch-hex">#A7E8FF</span></div>
              </div>
            </div>

            <div className="aero-home-hero-footer"><span><i /> SISTEMA EM DESENVOLVIMENTO</span><span>React <b>·</b> Vite <b>·</b> Tailwind CSS v4</span><span>01 — 04</span></div>
          </AeroCard>

          <AeroCard className="aero-home-shortcuts aero-window aero-glass-dark aero-reflection">
            <WindowHeader title="Explore o estúdio" meta="NAVEGAÇÃO" />
            <div className="aero-home-shortcut-grid">
              {shortcuts.map((item) => (
                <Link className="aero-home-shortcut-card" key={item.title} to={item.href}>
                  <div className="aero-home-shortcut-top"><span>{item.number}</span><span className="aero-home-shortcut-icon" aria-hidden="true">{item.icon}</span></div>
                  <div className="aero-home-shortcut-bottom"><div><h2 className="aero-card-title">{item.title}</h2><p>{item.text}</p></div><span className="aero-home-shortcut-arrow" aria-hidden="true">↗</span></div>
                </Link>
              ))}
            </div>
          </AeroCard>

          <section className="aero-home-grid">
            <AeroCard className="aero-window aero-glass-light aero-reflection">
              <WindowHeader title="Detalhes que fazem a diferença" meta="PRINCÍPIOS" />
              <div className="aero-home-test-grid">
                {principles.map((item) => <div className="aero-home-test-card" key={item.title}><span className="aero-text-shadow font-label-md text-white/72">{item.title}</span><p className="aero-text-shadow font-body-sm text-white/82">{item.text}</p></div>)}
              </div>
            </AeroCard>

            <div className="aero-home-side-stack">
              <AeroCard className="aero-window aero-glass-dark">
                <WindowHeader title="Em construção" meta="STUDIO LOG" />
                <div className="aero-home-console">
                  <span><i /> Sistema visual inicializado</span>
                  <span><i /> Biblioteca de componentes disponível</span>
                  <span><i /> Superfícies de vidro calibradas</span>
                  <span className="aero-home-console-pending"><i /> Novas experiências em criação</span>
                </div>
              </AeroCard>

              <AeroCard className="aero-window aero-glass-quiet">
                <WindowHeader title="Direção de design" meta="MANIFESTO" />
                <div className="aero-home-rules">
                  <span>Tradicional no detalhe, atual no conjunto</span>
                  <span>Transparência com contraste e propósito</span>
                  <span>Movimento sutil, interação precisa</span>
                </div>
              </AeroCard>
            </div>
          </section>

          <div className="aero-home-statusbar"><span>AEROGLASS UI KIT <i>·</i> DESIGN LAB</span><span>Feito para explorar novas superfícies digitais</span><span>© 2026</span></div>
        </div>
      </main>

      <AeroFooter />
    </div>
  );
}

function WindowHeader({ title, meta }) {
  return <div className="aero-window-titlebar"><span>{title}</span><small>{meta}</small></div>;
}
