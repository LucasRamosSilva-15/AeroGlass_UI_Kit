import { useState } from "react";
import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroCommandLink from "../components/AeroCommandLink.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroInput from "../components/AeroInput.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";
import AeroWindowHeader from "../components/AeroWindowHeader.jsx";

const badges = [
  ["online", "Online"],
  ["offline", "Offline"],
  ["admin", "Admin"],
  ["moderator", "Moderator"],
  ["warning", "Aviso"],
  ["success", "Sucesso"],
  ["error", "Erro"],
  ["info", "Info"],
];

const rooms = [
  { name: "Aero Lobby", status: "Aberta", users: 42 },
  { name: "Classic Chat", status: "Moderada", users: 18 },
  { name: "Night Build", status: "Privada", users: 7 },
];

const users = ["Lucas", "Marina", "Rafael", "Bianca"];

export default function ComponentsShowcase() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="aero-page flex min-h-screen flex-col">
      <AeroNavbar />

      <main className="aero-showcase-main flex-1 px-4 py-8 md:px-8">
        <div className="aero-showcase-wrap mx-auto flex max-w-[1200px] flex-col gap-10">
          
          {/* Hero Banner DWM */}
          <AeroCard className="aero-window aero-glass-active p-6">
            <div className="flex flex-col gap-3">
              <span className="aero-badge aero-badge-info">Bancada DWM Aero 7.0</span>
              <h1 className="aero-title font-headline-lg text-white">AeroGlass UI Kit</h1>
              <p className="aero-text-shadow font-title-md text-white/95">
                Vitrine de componentes sob a pipeline óptica do Windows 7 Desktop Window Manager
              </p>
              <p className="aero-text-shadow font-body-lg max-w-3xl text-white/85">
                Laboratório visual fiel à física da refração e vidro lapidado: bordas duplas chanfradas de 1px,
                horizon-split gradients em 49%/50%, pulso eletroluminescente e halos de legibilidade Segoe UI.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/20 text-xs text-white/90">
                <span className="px-2.5 py-1 rounded border border-white/30 bg-black/15">DWM Blur 10px / Sat 130%</span>
                <span className="px-2.5 py-1 rounded border border-white/30 bg-black/15">Dual 1px Bevel Borders</span>
                <span className="px-2.5 py-1 rounded border border-white/30 bg-black/15">Horizon Split Gradients</span>
                <span className="px-2.5 py-1 rounded border border-white/30 bg-black/15">Cyan Pulse Engine</span>
              </div>
            </div>
          </AeroCard>

          {/* Seção 1: Comandos e Botões Push */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Comandos & Botões Push" note="Gradientes com corte no horizonte a 49%/50% e reflexo especular de gel." />
            <AeroCard className="aero-window aero-glass-dark">
              <AeroWindowHeader title="Barra de Ações Primárias" meta="controles" />
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <AeroButton className="is-default">Ação Primária (Pulse)</AeroButton>
                  <AeroButton variant="secondary">Cancelar</AeroButton>
                  <AeroButton variant="danger">Excluir Arquivo</AeroButton>
                  <AeroButton variant="ghost">Vidro Translúcido</AeroButton>
                  <AeroButton className="aero-btn-sm">Compacto</AeroButton>
                  <AeroButton>Atualizar</AeroButton>
                  <AeroButton className="aero-btn-lg">Iniciar Conexão</AeroButton>
                </div>
              </div>
            </AeroCard>
          </section>

          {/* Seção 2: Task Dialogs & Command Links (Assinatura do Vista & 7) */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Task Dialogs & Command Links" note="Componentes explicativos nativos com ícone chevron em relevo e descrição secundária." />
            <AeroCard className="aero-window aero-glass-light">
              <AeroWindowHeader title="Assistente de Tarefas do Sistema" meta="diálogo" />
              <div className="p-5 flex flex-col gap-3">
                <p className="aero-text-shadow font-body-sm text-white/90">
                  Selecione como deseja prosseguir com a configuração do ambiente:
                </p>
                <div className="flex flex-col gap-2">
                  <AeroCommandLink
                    heading="Instalar configurações recomendadas automaticamente"
                    description="Aplica os drivers DWM, desfoque gaussiano de 10px e saturação em 130%."
                  />
                  <AeroCommandLink
                    heading="Configurar parâmetros avançados de renderização"
                    description="Escolha manualmente a intensidade do afterglow, chanfros especulares e sombras de oclusão."
                  />
                  <AeroCommandLink
                    heading="Restaurar modo básico sem aceleração de GPU"
                    description="Reverte a interface para o tema clássico sólido de alta compatibilidade."
                  />
                </div>
              </div>
            </AeroCard>
          </section>

          {/* Seção 3: Sheet of Glass & Breadcrumbs do Windows Explorer */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Sheet of Glass & Explorer Breadcrumbs" note="API DwmExtendFrameIntoClientArea: o vidro se estende sob a navegação com divisores etheados." />
            <AeroCard className="aero-window aero-glass-active">
              <AeroWindowHeader title="Windows Explorer - Navegador de Diretórios" meta="C:\AeroGlass\Projetos" />
              
              {/* Barra de Ferramentas / Breadcrumb estendida no vidro */}
              <div className="aero-glass-toolbar flex items-center gap-3 p-3">
                <div className="flex gap-1.5">
                  <button type="button" className="aero-btn-secondary px-2.5 py-1 text-xs" title="Voltar">◄</button>
                  <button type="button" className="aero-btn-secondary px-2.5 py-1 text-xs" title="Avançar">►</button>
                </div>

                <div className="aero-address-bar flex-1 flex items-center px-2 py-1 text-xs">
                  <span className="aero-breadcrumb-crumb">Computador</span>
                  <span className="aero-breadcrumb-arrow">▶</span>
                  <span className="aero-breadcrumb-crumb">Disco Local (C:)</span>
                  <span className="aero-breadcrumb-arrow">▶</span>
                  <span className="aero-breadcrumb-crumb font-medium">AeroGlass_UI_Kit</span>
                  <span className="aero-breadcrumb-arrow">▶</span>
                  <span className="aero-breadcrumb-crumb font-medium">src</span>
                </div>

                <input type="search" placeholder="Buscar no sistema..." className="aero-input w-44 px-3 py-1 text-xs" />
              </div>

              {/* Divisor Etheado de 1px */}
              <div className="aero-etched-divider" />

              {/* Área de Cliente Opaca */}
              <div className="aero-client p-4 mx-2 mb-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 border border-black/15 rounded bg-white/70 shadow-xs flex items-center gap-2.5">
                    <span className="text-xl">📁</span>
                    <div>
                      <strong className="block text-xs text-neutral-800">components</strong>
                      <span className="text-[11px] text-neutral-500">Pasta de arquivos</span>
                    </div>
                  </div>
                  <div className="p-3 border border-black/15 rounded bg-white/70 shadow-xs flex items-center gap-2.5">
                    <span className="text-xl">🎨</span>
                    <div>
                      <strong className="block text-xs text-neutral-800">styles</strong>
                      <span className="text-[11px] text-neutral-500">Módulos CSS Aero</span>
                    </div>
                  </div>
                  <div className="p-3 border border-black/15 rounded bg-white/70 shadow-xs flex items-center gap-2.5">
                    <span className="text-xl">📄</span>
                    <div>
                      <strong className="block text-xs text-neutral-800">design.md</strong>
                      <span className="text-[11px] text-neutral-500">Documento técnico</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rodapé Estendido em Vidro */}
              <div className="aero-glass-footer flex items-center justify-between px-4 py-2 text-xs text-white/90">
                <span>3 itens selecionados | Estado: Sincronizado</span>
                <div className="flex gap-2">
                  <AeroButton className="aero-btn-sm is-default">Abrir</AeroButton>
                  <AeroButton className="aero-btn-sm" variant="secondary">Propriedades</AeroButton>
                </div>
              </div>
            </AeroCard>
          </section>

          {/* Seção 4: Entrada de Dados e Formulários */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Entrada de Dados" note="Bordas zenitais de 4 tons com foco ciano suave e checkboxes 3D." />
            <AeroCard className="aero-window aero-glass-light">
              <AeroWindowHeader title="Formulário de Conexão da Sala" meta="controles" />
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AeroInput id="showcase-text" label="Nome da sala" placeholder="Aero Lobby" type="text" />
                  <AeroInput id="showcase-email" label="Convite por email" placeholder="ana@email.com" type="email" />
                  <AeroInput id="showcase-password" label="Senha da sala" placeholder="••••••••" type="password" />
                  <AeroInput id="showcase-icon" icon="mail" label="Contato rápido" placeholder="suporte@email.com" type="email" />
                  <AeroInput id="showcase-disabled" label="Canal bloqueado" placeholder="Reservado ao host" type="text" disabled />
                  
                  <div className="flex flex-col gap-1">
                    <label className="aero-text-shadow font-label-md px-1 text-white" htmlFor="showcase-select">
                      Tipo de sala
                    </label>
                    <select id="showcase-select" className="aero-input font-body-sm rounded px-3 py-2 text-[#081d2c]" defaultValue="classic">
                      <option value="classic">Sala clássica Aero</option>
                      <option value="public">Sala pública</option>
                      <option value="private">Sala privada</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-6 pt-3 border-t border-white/20">
                  <label className="flex items-center gap-2 cursor-pointer text-white text-sm aero-text-shadow">
                    <input type="checkbox" defaultChecked />
                    <span>Salvar sessão no disco</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-white text-sm aero-text-shadow">
                    <input name="radio-demo" type="radio" defaultChecked />
                    <span>Entrada pública</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-white text-sm aero-text-shadow">
                    <input name="radio-demo" type="radio" />
                    <span>Somente convidados</span>
                  </label>
                  <label className="aero-toggle flex items-center gap-2 text-white text-sm aero-text-shadow">
                    <input type="checkbox" defaultChecked className="sr-only" />
                    <span />
                    <strong>Aceleração de GPU</strong>
                  </label>
                </div>
              </div>
            </AeroCard>
          </section>

          {/* Seção 5: Painéis de Sistema e Superfícies */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Painéis de Sistema" note="Diferentes densidades de vidro para janelas, resumos e áreas de trabalho." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AeroCard className="aero-window aero-glass-quiet">
                <AeroWindowHeader title="Resumo Leve" meta="quiet" />
                <div className="p-4 flex flex-col gap-2">
                  <p className="aero-text-shadow font-body-sm text-white/90">
                    O vidro tranquilo (quiet) preserva o papel de parede com sutileza e sem ofuscar elementos adjacentes.
                  </p>
                </div>
              </AeroCard>

              <AeroCard className="aero-window aero-glass-light">
                <AeroWindowHeader title="Destaque Claro" meta="light" />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="aero-card-title text-white font-semibold text-sm">Alta Luminosidade</h3>
                  <p className="aero-text-shadow font-body-sm text-white/85">
                    Ideal para caixas de texto com dados analíticos ou cartões de estatísticas rápidas.
                  </p>
                </div>
              </AeroCard>

              <AeroCard className="aero-window aero-glass-active">
                <AeroWindowHeader title="Janela em Foco" meta="active" />
                <div className="p-4 flex flex-col gap-3">
                  <p className="aero-text-shadow font-body-sm text-white/90">
                    Contorno ciano com pulso suave e destaque especular total.
                  </p>
                  <div className="flex gap-2">
                    <AeroButton className="aero-btn-sm is-default">Selecionar</AeroButton>
                    <AeroButton className="aero-btn-sm" variant="secondary">Fixar</AeroButton>
                  </div>
                </div>
              </AeroCard>
            </div>
          </section>

          {/* Seção 6: Superbar & Hot-Track Hover */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Windows 7 Superbar & Hot-Track Hover" note="Barra de tarefas de 40px com botão Start Orb tridimensional e iluminação dinâmica por aplicativo." />
            <div className="w7-taskbar h-11 px-3 flex items-center justify-between rounded-md">
              <div className="flex items-center gap-3">
                <div className="w7-start-orb size-9 flex items-center justify-center" title="Menu Iniciar">
                  <svg className="size-5" viewBox="0 0 24 24">
                    <path fill="#f25022" d="M2 3h9v9H2z" />
                    <path fill="#7fba00" d="M13 3h9v9h-9z" />
                    <path fill="#00a4ef" d="M2 14h9v9H2z" />
                    <path fill="#ffb900" d="M13 14h9v9h-9z" />
                  </svg>
                </div>

                <div className="flex items-center gap-1">
                  <div
                    className="w7-taskbar-item active h-8 w-11 flex items-center justify-center text-lg"
                    style={{ "--app-glow-color": "rgba(255, 180, 50, 0.75)" }}
                    title="Explorador de Arquivos (Amarelo)"
                  >
                    📁
                  </div>
                  <div
                    className="w7-taskbar-item h-8 w-11 flex items-center justify-center text-lg"
                    style={{ "--app-glow-color": "rgba(50, 150, 255, 0.85)" }}
                    title="Navegador Web (Azul)"
                  >
                    🌐
                  </div>
                  <div
                    className="w7-taskbar-item h-8 w-11 flex items-center justify-center text-lg"
                    style={{ "--app-glow-color": "rgba(40, 220, 100, 0.8)" }}
                    title="Reprodutor de Mídia (Verde)"
                  >
                    🎵
                  </div>
                  <div
                    className="w7-taskbar-item h-8 w-11 flex items-center justify-center text-lg"
                    style={{ "--app-glow-color": "rgba(255, 80, 80, 0.8)" }}
                    title="Configurações de Segurança (Vermelho)"
                  >
                    🛡️
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right text-xs text-white/90 leading-tight">
                  <span className="block font-medium">16:55</span>
                  <span className="text-[10px] text-white/70">06/11/2026</span>
                </div>
                <div className="w7-show-desktop h-7 w-3 rounded-xs" title="Aero Peek - Mostrar Área de Trabalho" />
              </div>
            </div>
          </section>

          {/* Seção 7: Estados, Alertas e Progresso */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Avisos do Sistema & Progresso" note="Badges, mensagens com desfoque e barra de progresso com listras animadas (sheen)." />
            
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-md bg-black/20 border border-white/15">
              <span className="text-xs font-semibold text-white/80 mr-2">Badges de Sistema:</span>
              {badges.map(([tone, label]) => (
                <span className={`aero-badge aero-badge-${tone}`} key={tone}>{label}</span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
              <Alert tone="success" title="Sincronização OK" text="O pipeline DWM está acelerado via hardware." />
              <Alert tone="error" title="Falha de Conexão" text="Aguardando resposta do servidor local." />
              <Alert tone="warning" title="Uso de Memória" text="Desfoque gaussiano em 12 janelas simultâneas." />
              <Alert tone="info" title="Aero Ativado" text="Composição em tela cheia configurada." />
            </div>

            <AeroCard className="aero-window aero-glass-dark p-4 mt-2">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs text-white/90">
                  <span>Carregando buffers ópticos do vidro...</span>
                  <span className="font-semibold">72%</span>
                </div>
                <div className="aero-progress">
                  <span style={{ width: "72%" }} />
                </div>
              </div>
            </AeroCard>
          </section>

          {/* Seção 8: Modal Dialog Launcher */}
          <section className="flex flex-col gap-3">
            <SectionTitle title="Caixa de Diálogo Modal" note="Janela com fundo escurecido translúcido e área de cliente isolada." />
            <AeroCard className="aero-window aero-glass-quiet p-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="aero-card-title text-white font-semibold">Demonstração de Janela Modal</h3>
                <p className="aero-text-shadow font-body-sm text-white/80">
                  Abra uma caixa de diálogo clássica com Sheet of Glass e controles nativos.
                </p>
              </div>
              <AeroButton className="is-default shrink-0" onClick={() => setModalOpen(true)}>
                Abrir Janela Modal
              </AeroButton>
            </AeroCard>
          </section>

        </div>
      </main>

      <AeroFooter />

      {/* Modal Dialog */}
      {modalOpen ? (
        <div className="aero-modal-backdrop flex items-center justify-center p-4" role="presentation" onMouseDown={() => setModalOpen(false)}>
          <AeroCard className="aero-modal aero-window w-full max-w-lg shadow-2xl" onMouseDown={(event) => event.stopPropagation()}>
            <AeroWindowHeader title="Confirmação de Segurança do Sistema" meta="Aero Dialog" />
            
            <div className="aero-modal-body p-6 flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🛡️</span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-neutral-900 text-base">Deseja autorizar as alterações visuais?</h2>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Você está prestes a aplicar os tokens definitivos de vidro DWM, horizon-split e reflexos cáusticos
                    em todas as superfícies da aplicação.
                  </p>
                </div>
              </div>
            </div>

            <div className="aero-modal-footer flex items-center justify-end gap-3 px-5 py-3">
              <AeroButton variant="secondary" className="aero-btn-sm" onClick={() => setModalOpen(false)}>
                Cancelar
              </AeroButton>
              <AeroButton className="aero-btn-sm is-default" onClick={() => setModalOpen(false)}>
                Autorizar Alteração
              </AeroButton>
            </div>
          </AeroCard>
        </div>
      ) : null}
    </div>
  );
}

function SectionTitle({ title, note }) {
  return (
    <header className="flex flex-col gap-1 border-b border-white/15 pb-2">
      <h2 className="aero-title text-white font-semibold text-lg">{title}</h2>
      <p className="aero-text-shadow text-white/75 text-xs">{note}</p>
    </header>
  );
}

function Alert({ tone, title, text }) {
  return (
    <div className={`aero-alert aero-alert-${tone} p-3.5 flex flex-col gap-1`}>
      <strong className="text-xs font-semibold">{title}</strong>
      <span className="text-xs text-white/85 leading-snug">{text}</span>
    </div>
  );
}
