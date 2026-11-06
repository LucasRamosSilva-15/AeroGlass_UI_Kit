import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";
import AeroWindowHeader from "../components/AeroWindowHeader.jsx";

const shortcuts = [
  {
    title: "ComponentsShowcase",
    text: "Bancada completa: botões gel, command links, breadcrumbs e vitrine de controles.",
    href: "/showcase",
  },
  {
    title: "LoginDemo",
    text: "Tela de login aero com cartão centralizado e reflexo de iluminação.",
    href: "/login",
  },
  {
    title: "About",
    text: "Especificação da identidade visual e fundamentação teórica do kit.",
    href: "/about",
  },
  {
    title: "Glass Test",
    text: "Laboratório de diagnóstico óptico de transparência, saturação e blur.",
    href: "/glass-test",
  },
];

const tests = [
  {
    title: "Vidro Translúcido DWM",
    text: "Substrato visível sob as janelas com 10px de desfoque gaussiano e 130% de saturação.",
  },
  {
    title: "Controles com Relevo",
    text: "Horizon-split a 49%/50% em botões e resposta tátil de clique.",
  },
  {
    title: "Janelas e Chanfros Duplos",
    text: "Borda externa de oclusão de 1px com traço interno especular luminoso.",
  },
  {
    title: "Halos de Leitura Segoe UI",
    text: "Tipografia protegida por sombra radial multicamada para leitura sobre qualquer imagem.",
  },
];

export default function Home() {
  return (
    <div className="aero-page flex min-h-screen flex-col">
      <AeroNavbar />

      <main className="aero-home-main flex-1 px-4 py-8 md:px-8">
        <div className="aero-home-wrap mx-auto flex max-w-[1200px] flex-col gap-8">
          
          {/* Hero Card */}
          <AeroCard className="aero-window aero-glass-active">
            <AeroWindowHeader title="Painel Central do Sistema" meta="AeroGlass UI Kit 7.0" />
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h1 className="aero-title font-headline-lg text-white">AeroGlass UI Kit</h1>
                <p className="aero-text-shadow font-title-md text-white/95">
                  Engenharia visual e skeuomorfismo inspirados no Windows 7 Aero Glass.
                </p>
                <p className="aero-text-shadow font-body-sm text-white/85 leading-relaxed">
                  Explore componentes com vidro translúcido, botões em relevo com corte no horizonte,
                  janelas com chanfros especulares duplos de 1px e controles embutidos modelados conforme
                  a física de renderização do Desktop Window Manager.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <AeroButton asLink href="/showcase" className="is-default">
                    Ver Componentes
                  </AeroButton>
                  <AeroButton asLink href="/login" variant="secondary">
                    Ver LoginDemo
                  </AeroButton>
                  <AeroButton asLink href="/about" variant="ghost">
                    Sobre o Projeto
                  </AeroButton>
                </div>
              </div>

              {/* Status Box */}
              <div className="aero-window aero-glass-dark w-full md:w-80 shrink-0">
                <div className="px-3 py-1.5 border-b border-white/20 flex justify-between items-center text-xs text-white/90 font-medium">
                  <span>Status do Kit</span>
                  <span className="text-emerald-300">● Ativo</span>
                </div>
                <div className="p-4 flex flex-col gap-2.5 text-xs text-white/85">
                  <StatusRow label="Versão" value="7.0 DWM Edition" />
                  <StatusRow label="Base Visual" value="Aero Glass / Frutiger Aero" />
                  <StatusRow label="Pipeline CSS" value="CSS Puro (Visual) + Tailwind (Layout)" />
                  <StatusRow label="Estado" value="Produção e Demonstração" />
                </div>
              </div>
            </div>
          </AeroCard>

          {/* Atalhos Rápidos */}
          <AeroCard className="aero-window aero-glass-dark">
            <AeroWindowHeader title="Atalhos Rápidos de Navegação" meta="explorar" />
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {shortcuts.map((item) => (
                <div
                  className="p-4 rounded border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex flex-col justify-between gap-3"
                  key={item.title}
                >
                  <div>
                    <h2 className="aero-card-title text-white font-semibold text-sm mb-1">{item.title}</h2>
                    <p className="aero-text-shadow font-body-sm text-white/75 text-xs">{item.text}</p>
                  </div>
                  <AeroButton asLink className="aero-btn-sm self-start" href={item.href}>
                    Abrir Página
                  </AeroButton>
                </div>
              ))}
            </div>
          </AeroCard>

          {/* O que o kit testa + Regras */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AeroCard className="aero-window aero-glass-light lg:col-span-2">
              <AeroWindowHeader title="Fundamentos Ópticos Validados" meta="regras" />
              <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {tests.map((item) => (
                  <div className="p-3.5 rounded border border-white/20 bg-white/10 flex flex-col gap-1.5" key={item.title}>
                    <span className="aero-text-shadow font-semibold text-sm text-white">{item.title}</span>
                    <p className="aero-text-shadow text-xs text-white/80 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </AeroCard>

            <div className="flex flex-col gap-6">
              <AeroCard className="aero-window aero-glass-dark">
                <AeroWindowHeader title="Console de Sessão" meta="boot" />
                <div className="p-4 flex flex-col gap-1.5 text-xs font-mono text-cyan-200">
                  <span>[ok] design.md carregado</span>
                  <span>[ok] pipeline DWM inicializado</span>
                  <span>[ok] horizon-split 49%/50% ativo</span>
                  <span>[ok] command links registrados</span>
                </div>
              </AeroCard>

              <AeroCard className="aero-window aero-glass-quiet">
                <AeroWindowHeader title="Diretrizes de UI/UX" meta="normas" />
                <div className="p-4 flex flex-col gap-2 text-xs text-white/85">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>CSS Puro governa vidro, reflexos e física</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>Tailwind CSS governa grid, flex e espaçamentos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>Titlebars com botões de legenda preservados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✔</span>
                    <span>Halos multicamada mantêm textos legíveis</span>
                  </div>
                </div>
              </AeroCard>
            </div>
          </section>

          {/* Rodapé Interno da Página */}
          <div className="flex flex-wrap items-center justify-between text-xs text-white/75 px-2 pt-2 border-t border-white/15">
            <span>Tema: AeroGlass UI Kit Windows 7 Edition</span>
            <span>Composição: DWM 5-Layer Stack</span>
            <span>Engine: React + Tailwind CSS v4</span>
          </div>
        </div>
      </main>

      <AeroFooter />
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
      <span className="text-white/70">{label}:</span>
      <strong className="text-white font-medium">{value}</strong>
    </div>
  );
}
