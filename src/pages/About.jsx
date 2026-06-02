import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";

const principles = [
  {
    title: "Iluminação superior",
    text: "Brilho vindo de cima, com bordas claras e reflexos discretos.",
  },
  {
    title: "Profundidade Z",
    text: "Sombras internas e externas separam janelas, campos e painéis.",
  },
  {
    title: "Vidro realista",
    text: "Translucidez controlada para revelar o fundo sem virar bloco sólido.",
  },
  {
    title: "Densidade",
    text: "Módulos compactos, funcionais e com pouco espaço desperdiçado.",
  },
];

const technologies = ["React 18", "Tailwind CSS v4", "Vite", "Aero CSS", "Componentes reutilizáveis"];

export default function About() {
  return (
    <div className="aero-page">
      <AeroNavbar />

      <main className="aero-about-main">
        <div className="aero-about-wrap">
          <AeroCard className="aero-about-hero aero-window aero-glass-active aero-reflection">
            <WindowHeader title="Sobre o projeto" meta="AeroGlass UI Kit" />
            <div className="aero-about-hero-body">
              <div className="aero-about-hero-copy">
                <h1 className="aero-title font-headline-lg text-white">AeroGlass UI Kit</h1>
                <p className="aero-text-shadow font-title-md text-white/90">
                  Laboratório visual inspirado no Windows 7 Aero Glass.
                </p>
                <p className="aero-text-shadow font-body-sm text-white/82">
                  Um kit experimental construído com React e Tailwind CSS v4 para estudar interfaces
                  clássicas, skeuomorfismo leve, janelas translúcidas e controles com aparência física.
                </p>
                <div className="aero-about-actions">
                  <AeroButton asLink href="/showcase">
                    Ver componentes
                  </AeroButton>
                  <AeroButton asLink href="/login" variant="secondary">
                    Ver LoginDemo
                  </AeroButton>
                  <AeroButton asLink href="/" variant="ghost">
                    Voltar ao inicio
                  </AeroButton>
                </div>
              </div>

              <div className="aero-about-status-panel">
                <div className="aero-about-status-head">
                  <span>Status do projeto</span>
                  <i />
                </div>
                <StatusRow label="Versão" value="1.0.4-estável" />
                <StatusRow label="Ambiente" value="Produção" />
                <StatusRow label="Build" value="Passou" />
              </div>
            </div>
          </AeroCard>

          <div className="aero-about-two-column">
            <AeroCard className="aero-window aero-glass-light aero-reflection">
              <WindowHeader title="Identidade visual" meta="camadas" />
              <div className="aero-window-body">
                <p className="aero-text-shadow font-body-sm text-white/74">
                  Estética fundamentada em camadas translúcidas, refração e controles de desktop.
                </p>
                <ul className="aero-about-list">
                  <li>Vidro translúcido azul</li>
                  <li>Iluminação superior polida</li>
                  <li>Botões glossy com toque tátil</li>
                  <li>Gradientes frios em múltiplas camadas</li>
                </ul>
              </div>
            </AeroCard>

            <AeroCard className="aero-window aero-glass-dark aero-reflection">
              <WindowHeader title="Tecnologias" meta="stack" />
              <div className="aero-window-body">
                <div className="aero-about-tech-list">
                  {technologies.map((item) => (
                    <span className="aero-badge aero-badge-info" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="aero-text-shadow font-body-sm text-white/72">
                  Build otimizada com poucas dependências de interface para preservar performance do blur,
                  das sombras e dos gradientes.
                </p>
              </div>
            </AeroCard>
          </div>

          <div className="aero-about-principles">
            {principles.map((principle) => (
              <AeroCard className="aero-about-principle aero-glass-quiet" key={principle.title}>
                <span className="aero-text-shadow font-label-md text-white/72">{principle.title}</span>
                <p className="aero-text-shadow font-body-sm text-white/84">{principle.text}</p>
              </AeroCard>
            ))}
          </div>

          <div className="aero-about-bottom-grid">
            <AeroCard className="aero-window aero-glass-dark">
              <WindowHeader title="Logs do sistema" meta="console" />
              <div className="aero-about-console">
                <span>[ativo] ComponentsShowcase validada com sucesso.</span>
                <span>[ativo] LoginDemo carregada como referência global.</span>
                <span>[dev] About.jsx em teste de composição.</span>
                <span>[docs] design.md carregado para contexto do build.</span>
              </div>
            </AeroCard>

            <AeroCard className="aero-window aero-glass-quiet">
              <WindowHeader title="Restrições" meta="regras" />
              <div className="aero-about-restrictions">
                <strong>O que este kit não é:</strong>
                <span>Não é flat design.</span>
                <span>Não é minimalista SaaS.</span>
                <span>Não usa cards brancos modernos.</span>
              </div>
            </AeroCard>
          </div>

          <AeroCard className="aero-about-author aero-glass-light aero-reflection">
            <div>
              <span className="aero-text-shadow font-label-md text-white/70">Autoria</span>
              <strong className="aero-card-title">Laboratório visual separado</strong>
            </div>
            <p className="aero-text-shadow font-body-sm text-white/78">
              Esta página segue a bancada Aero do kit e deve servir como modelo para telas informativas.
            </p>
            <span className="aero-badge aero-badge-success">Aero ativo</span>
          </AeroCard>
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
    <div className="aero-about-status-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
