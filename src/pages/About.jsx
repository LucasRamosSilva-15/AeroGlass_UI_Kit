import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";
import AeroWindowHeader from "../components/AeroWindowHeader.jsx";

const principles = [
  {
    title: "Iluminação Zenital a 90°",
    text: "Brilho superior translúcido com destaque especular de 1px e sombra de oclusão inferior.",
  },
  {
    title: "Profundidade Z & Descontinuidade",
    text: "Chanfros de horizonte em 49%/50% que criam a refração cilíndrica tátil de teclas em gel.",
  },
  {
    title: "Vidro DWM com Saturação",
    text: "Desfoque gaussiano de 10px com saturação em 130% para preservar as cores do papel de parede.",
  },
  {
    title: "Halos de Leitura Segoe UI",
    text: "Tipografia protegida por sombras radiais multicamada garantindo contraste absoluto.",
  },
];

const technologies = [
  "React 18",
  "Tailwind CSS v4 (Layout)",
  "CSS Puro (Visual DWM)",
  "Vite",
  "Skeuomorphic Optics",
];

export default function About() {
  return (
    <div className="aero-page flex min-h-screen flex-col">
      <AeroNavbar />

      <main className="aero-about-main flex-1 px-4 py-8 md:px-8">
        <div className="aero-about-wrap mx-auto flex max-w-[1200px] flex-col gap-8">
          
          {/* Hero Banner */}
          <AeroCard className="aero-window aero-glass-active">
            <AeroWindowHeader title="Especificação de Arquitetura & Identidade" meta="AeroGlass UI Kit" />
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h1 className="aero-title font-headline-lg text-white">Sobre o AeroGlass UI Kit</h1>
                <p className="aero-text-shadow font-title-md text-white/95">
                  Laboratório de engenharia visual skeuomórfica inspirado no Windows 7 Aero Glass.
                </p>
                <p className="aero-text-shadow font-body-sm text-white/85 leading-relaxed">
                  Construído com divisão arquitetural estrita: <strong>CSS puro</strong> para a física
                  óptica (vidro translúcido, reflexos angulares de 135° e cáusticas de 54°, pulso
                  eletroluminescente e chanfros duplos de 1px) e <strong>Tailwind CSS</strong> para layout responsivo,
                  grids, flexbox e espaçamentos.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <AeroButton asLink href="/showcase" className="is-default">
                    Ver Componentes
                  </AeroButton>
                  <AeroButton asLink href="/login" variant="secondary">
                    Ver LoginDemo
                  </AeroButton>
                  <AeroButton asLink href="/" variant="ghost">
                    Voltar ao Início
                  </AeroButton>
                </div>
              </div>

              {/* Status Panel */}
              <div className="aero-window aero-glass-dark w-full md:w-72 shrink-0">
                <div className="px-3 py-1.5 border-b border-white/20 flex justify-between items-center text-xs text-white/90 font-medium">
                  <span>Status do Build</span>
                  <span className="text-emerald-300">● 100% Estável</span>
                </div>
                <div className="p-4 flex flex-col gap-2 text-xs text-white/85">
                  <StatusRow label="Versão" value="7.0 DWM" />
                  <StatusRow label="Ambiente" value="Produção" />
                  <StatusRow label="Pipeline" value="Vite / Tailwind v4" />
                  <StatusRow label="Aero Glass" value="Ativado" />
                </div>
              </div>
            </div>
          </AeroCard>

          {/* Colunas: Identidade Visual e Tecnologias */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AeroCard className="aero-window aero-glass-light">
              <AeroWindowHeader title="Identidade Visual & Filosofia Óptica" meta="camadas" />
              <div className="p-5 flex flex-col gap-3">
                <p className="aero-text-shadow font-body-sm text-white/85">
                  Estética fundamentada no polimento de placas de vidro acrílico lapidado:
                </p>
                <ul className="flex flex-col gap-2 text-xs text-white/90 list-disc pl-5">
                  <li><strong>Vidro Translúcido Azul DWM:</strong> ColorizationColor e Afterglow balanceados.</li>
                  <li><strong>Iluminação Zenital:</strong> Destaque luminoso superior de 1px com sombra de contato.</li>
                  <li><strong>Botões Glossy:</strong> Descontinuidade aos 49%/50% e pulso eletroluminescente.</li>
                  <li><strong>Halos de Legibilidade:</strong> Texto nítido em qualquer plano de fundo.</li>
                </ul>
              </div>
            </AeroCard>

            <AeroCard className="aero-window aero-glass-dark">
              <AeroWindowHeader title="Tecnologias & Arquitetura Modular" meta="stack" />
              <div className="p-5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((item) => (
                    <span className="aero-badge aero-badge-info" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="aero-text-shadow font-body-sm text-white/80 leading-relaxed text-xs">
                  A divisão de responsabilidades garante manutenibilidade: o CSS puro encapsula
                  as superfícies e estados visuais, enquanto o Tailwind CSS entrega total flexibilidade
                  de grade, alinhamento e design responsivo.
                </p>
              </div>
            </AeroCard>
          </div>

          {/* Princípios de Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((principle) => (
              <AeroCard className="aero-window aero-glass-quiet p-4 flex flex-col gap-2" key={principle.title}>
                <span className="aero-text-shadow font-semibold text-white text-sm">{principle.title}</span>
                <p className="aero-text-shadow text-xs text-white/80 leading-relaxed">{principle.text}</p>
              </AeroCard>
            ))}
          </div>

          {/* Logs e Diretrizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AeroCard className="aero-window aero-glass-dark">
              <AeroWindowHeader title="Logs do Sistema" meta="console" />
              <div className="p-4 flex flex-col gap-1.5 font-mono text-xs text-cyan-200">
                <span>[ativo] ComponentsShowcase validada com sucesso.</span>
                <span>[ativo] DWM 5-Layer Stack em execução.</span>
                <span>[ativo] Separador etheado e Sheet of Glass ativos.</span>
                <span>[docs] aero-glass-theming skill atualizada e sincronizada.</span>
              </div>
            </AeroCard>

            <AeroCard className="aero-window aero-glass-quiet">
              <AeroWindowHeader title="Restrições Visuais do Kit" meta="regras" />
              <div className="p-4 flex flex-col gap-2 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Não é flat design nem minimalista corporativo monótono.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Não utiliza cards brancos chapados modernos de SaaS.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Não remove a margem periférica de 7px das molduras de janela.</span>
                </div>
              </div>
            </AeroCard>
          </div>

          {/* Autoria */}
          <AeroCard className="aero-window aero-glass-light p-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="aero-text-shadow font-label-md text-white/80">Laboratório Experimental</span>
              <strong className="aero-title text-white font-semibold text-base">AeroGlass UI Kit Edition</strong>
              <p className="aero-text-shadow text-xs text-white/80">
                Padrão estético para interfaces ricas, nostálgicas e tecnologicamente sólidas.
              </p>
            </div>
            <span className="aero-badge aero-badge-success self-start md:self-auto">Aero Glass 100% Ativo</span>
          </AeroCard>

        </div>
      </main>

      <AeroFooter />
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-1">
      <span className="text-white/70">{label}:</span>
      <strong className="text-white font-medium">{value}</strong>
    </div>
  );
}
