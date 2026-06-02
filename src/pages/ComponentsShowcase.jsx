import { useState } from "react";
import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroInput from "../components/AeroInput.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";

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
    <div className="aero-page">
      <AeroNavbar />

      <main className="aero-showcase-main">
        <div className="aero-showcase-wrap">
          <AeroCard className="aero-showcase-hero aero-reflection-bubbles">
            <div className="aero-showcase-hero-content">
              <span className="aero-badge aero-badge-info">Bancada Aero</span>
              <h1 className="aero-title font-headline-lg text-white">AeroGlass UI Kit</h1>
              <p className="aero-text-shadow font-title-md text-white/90">
                Vitrine de componentes inspirada no Windows 7 Aero Glass
              </p>
              <p className="aero-text-shadow font-body-lg max-w-3xl text-white/85">
                Uma bancada visual para conferir janelas, controles, salas, mensagens e estados do kit
                no mesmo clima frio e translúcido do login original.
              </p>
              <div className="aero-hero-statusbar">
                <span>Compilação visual 7.0</span>
                <span>Vidro ativado</span>
                <span>Tema: WebChat Aero</span>
              </div>
            </div>
          </AeroCard>

          <section className="aero-section">
            <SectionTitle title="Comandos" note="Botões com relevo, brilho superior e resposta de clique." />
            <AeroCard className="aero-window aero-glass-dark aero-reflection-bubbles">
              <WindowHeader title="Barra de ações" meta="controles" />
              <div className="aero-grid aero-grid-buttons aero-window-body">
                <AeroButton>Entrar</AeroButton>
                <AeroButton variant="secondary">Cancelar</AeroButton>
                <AeroButton variant="danger">Remover</AeroButton>
                <AeroButton variant="ghost">Detalhes</AeroButton>
                <AeroButton className="aero-btn-sm">Ping</AeroButton>
                <AeroButton>Atualizar</AeroButton>
                <AeroButton className="aero-btn-lg">Conectar</AeroButton>
              </div>
            </AeroCard>
          </section>

          <section className="aero-section">
            <SectionTitle title="Entrada de dados" note="Campos claros, embutidos e com foco ciano." />
            <AeroCard className="aero-window aero-glass-light aero-reflection-bubbles">
              <WindowHeader title="Conexão da sala" meta="controles" />
              <div className="aero-grid aero-grid-forms aero-window-body">
                <AeroInput id="showcase-text" label="Nome da sala" placeholder="Aero Lobby" type="text" />
                <AeroInput id="showcase-email" label="Convite por email" placeholder="ana@email.com" type="email" />
                <AeroInput id="showcase-password" label="Senha da sala" placeholder="••••••••" type="password" />
                <AeroInput id="showcase-icon" icon="mail" label="Contato rápido" placeholder="suporte@email.com" type="email" />
                <AeroInput id="showcase-disabled" label="Canal bloqueado" placeholder="Reservado ao host" type="text" disabled />
                <label className="flex flex-col gap-1">
                  <span className="aero-text-shadow font-label-md px-1 text-white">Mensagem fixa</span>
                  <textarea className="aero-input font-body-sm min-h-24 rounded px-4 py-2 text-[#081d2c]" placeholder="Aviso exibido ao entrar na sala" />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="aero-text-shadow font-label-md px-1 text-white">Tipo de sala</span>
                  <select className="aero-input font-body-sm rounded px-4 py-2 text-[#081d2c]" defaultValue="classic">
                    <option value="classic">Sala clássica</option>
                    <option value="public">Sala pública</option>
                    <option value="private">Sala privada</option>
                  </select>
                </label>
                <div className="aero-control-stack">
                  <label className="aero-check-row">
                    <input type="checkbox" defaultChecked />
                    <span>Salvar sessão</span>
                  </label>
                  <label className="aero-check-row">
                    <input name="radio-demo" type="radio" defaultChecked />
                    <span>Entrada pública</span>
                  </label>
                  <label className="aero-check-row">
                    <input name="radio-demo" type="radio" />
                    <span>Somente convite</span>
                  </label>
                  <label className="aero-toggle">
                    <input type="checkbox" defaultChecked />
                    <span />
                    <strong>Status online</strong>
                  </label>
                </div>
              </div>
            </AeroCard>
          </section>

          <section className="aero-section">
            <SectionTitle title="Painéis de sistema" note="Variações de vidro para janelas, resumos e áreas ativas." />
              <div className="aero-grid aero-grid-cards">
              <AeroCard className="aero-panel-card aero-window aero-glass-quiet aero-reflection-bubbles">
                <WindowHeader title="Nota da sessão" meta="texto" />
                <div className="aero-panel-body">
                  <p className="aero-text-shadow font-body-sm text-white/82">A sala mantém o fundo visível e não vira bloco sólido.</p>
                </div>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-glass-light">
                <h3 className="aero-card-title">Resumo claro</h3>
                <p className="aero-text-shadow font-body-sm text-white/80">Boa leitura para dados curtos sem perder o brilho frio.</p>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-glass-active">
                <h3 className="aero-card-title">Sala selecionada</h3>
                <p className="aero-text-shadow font-body-sm mb-4 text-white/80">Ações principais ficam mais próximas do conteúdo.</p>
                <div className="flex flex-wrap gap-2">
                  <AeroButton className="aero-btn-sm">Entrar</AeroButton>
                  <AeroButton className="aero-btn-sm" variant="secondary">Fixar</AeroButton>
                </div>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-panel-large aero-window aero-glass-dark">
                <WindowHeader title="Console de atividade" meta="painel principal" />
                <div className="aero-console-lines">
                  <span>[17:42] sessão iniciada</span>
                  <span>[17:43] sala carregada</span>
                  <span>[17:44] presença sincronizada</span>
                </div>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-panel-compact aero-glass-quiet">
                <span className="aero-text-shadow font-label-md text-white/75">Mensagens hoje</span>
                <strong className="aero-text-shadow text-2xl text-white">128</strong>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-glass-light">
                <span className="aero-icon-disc">★</span>
                <h3 className="aero-card-title">Favorito</h3>
                <p className="aero-text-shadow font-body-sm text-white/80">Ícones pequenos funcionam melhor que ilustrações grandes.</p>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-window aero-glass-quiet">
                <WindowHeader title="Moldura de prévia" meta="imagem" />
                <div className="aero-image-placeholder">
                  <span />
                  <strong>Sala em destaque</strong>
                </div>
                <div className="aero-preview-caption">
                  <span>Lobby noturno</span>
                  <small>prévia local</small>
                </div>
              </AeroCard>
            </div>
          </section>

          <section className="aero-section">
            <SectionTitle title="Estados" note="Marcadores pequenos para listas e barras de janela." />
            <div className="aero-badge-row">
              <span className="aero-status-label">Estado da sessão</span>
              {badges.map(([tone, label]) => (
                <span className={`aero-badge aero-badge-${tone}`} key={tone}>{label}</span>
              ))}
              <span className="aero-status-clock">17:44</span>
            </div>
          </section>

          <section className="aero-section">
            <SectionTitle title="Avisos do sistema" note="Alertas com identidade própria, ainda dentro do vidro." />
            <div className="aero-grid aero-grid-alerts">
              <Alert tone="success" title="Sala publicada" text="Os convidados já podem encontrar o lobby." />
              <Alert tone="error" title="Conexão perdida" text="A tentativa será repetida em alguns segundos." />
              <Alert tone="warning" title="Microfone aberto" text="Confira o canal antes de entrar ao vivo." />
              <Alert tone="info" title="Tema carregado" text="A sessão está usando WebChat Aero Edition." />
            </div>
          </section>

          <section className="aero-section">
            <SectionTitle title="Diálogo" note="Janela modal com fundo escurecido translúcido." />
            <AeroCard className="aero-dialog-launcher aero-glass-quiet">
              <div>
                <h3 className="aero-card-title">Confirmação rápida</h3>
                <p className="aero-text-shadow font-body-sm text-white/75">Teste visual de uma janela modal compacta.</p>
              </div>
              <AeroButton onClick={() => setModalOpen(true)}>Abrir modal</AeroButton>
            </AeroCard>
          </section>

          <section className="aero-section">
            <SectionTitle title="Pessoas" note="Avatares pequenos para listas de presença." />
            <div className="aero-grid aero-grid-users">
              <div className="aero-avatar-row aero-subpanel">
                <div className="aero-mini-panel-title">
                  <strong>Presença</strong>
                  <span>avatares e badges</span>
                </div>
                <div className="aero-avatar-strip">
                  <Avatar initials="AR" />
                  <Avatar initials="ON" online />
                  <Avatar initials="AD" badge="A" online />
                </div>
              </div>
              <AeroCard className="aero-profile-card aero-glass-light">
                <Avatar initials="LR" online />
                <div>
                  <h3 className="aero-card-title">Lucas Ramos</h3>
                  <p className="aero-text-shadow font-body-sm text-white/75">Host da sessão</p>
                  <span className="aero-badge aero-badge-admin">Admin</span>
                </div>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-window aero-glass-dark aero-users-panel">
                <WindowHeader title="Online agora" meta="4 usuários" />
                <div className="aero-users-body">
                  <h3 className="aero-card-title">Usuários online</h3>
                  <div className="aero-user-list">
                    {users.map((user) => (
                      <div className="aero-user-list-item" key={user}>
                        <Avatar initials={user.slice(0, 2).toUpperCase()} online />
                        <span>{user}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AeroCard>
            </div>
          </section>

          <section className="aero-section">
            <SectionTitle title="Prévia do chat" note="Módulo realista de conversa, apenas visual." />
            <AeroCard className="aero-chat-preview aero-window aero-glass-active">
              <WindowHeader title="Aero Lobby - conversa" meta="prévia" />
              <div className="aero-chat-header">
                <div className="flex items-center gap-3">
                  <Avatar initials="AL" online />
                  <div>
                    <h3 className="aero-card-title">Aero Lobby</h3>
                    <p className="aero-text-shadow font-label-md text-white/75">42 usuários online</p>
                  </div>
                </div>
                <span className="aero-badge aero-badge-online">Online</span>
              </div>
              <div className="aero-message-list">
                <div className="aero-message aero-message-received">Marina entrou na sala.</div>
                <div className="aero-message aero-message-received">O painel de presença já atualizou.</div>
                <div className="aero-message aero-message-sent">Perfeito, vou abrir o lobby para testes.</div>
              </div>
              <div className="aero-chat-compose">
                <input className="aero-input font-body-sm flex-1 rounded px-4 py-2 text-[#081d2c]" placeholder="Digite uma mensagem" />
                <AeroButton className="aero-send-button">Enviar</AeroButton>
              </div>
            </AeroCard>
          </section>

          <section className="aero-section">
            <SectionTitle title="Salas" note="Lista compacta com leitura de aplicativo desktop." />
            <AeroCard className="aero-table-panel aero-window aero-glass-dark">
              <WindowHeader title="Navegador de salas" meta="3 ativas" />
              <div className="aero-room-list">
                {rooms.map((room) => (
                  <div className="aero-room-row" key={room.name}>
                    <div>
                      <strong>{room.name}</strong>
                      <span>{room.status}</span>
                    </div>
                    <span>{room.users} usuários</span>
                    <AeroButton className="aero-btn-sm">Entrar</AeroButton>
                  </div>
                ))}
              </div>
            </AeroCard>
          </section>

          <section className="aero-section">
            <SectionTitle title="Carregamento" note="Estados transitórios sem perder o relevo Aero." />
            <div className="aero-grid aero-grid-loading">
              <AeroCard className="aero-panel-card aero-loading-card aero-glass-quiet">
                <div className="aero-loading-content">
                  <span className="aero-spinner" />
                  <div className="aero-loading-copy">
                    <strong>Abrindo sala...</strong>
                    <span>Preparando presença e histórico.</span>
                  </div>
                </div>
              </AeroCard>
              <AeroCard className="aero-panel-card aero-glass-dark">
                <div className="aero-skeleton aero-skeleton-title" />
                <div className="aero-skeleton" />
                <div className="aero-skeleton aero-skeleton-short" />
              </AeroCard>
              <AeroCard className="aero-panel-card aero-glass-light">
                <p className="aero-text-shadow font-body-sm mb-3 text-white/80">Sincronizando contatos</p>
                <div className="aero-progress">
                  <span style={{ width: "68%" }} />
                </div>
              </AeroCard>
            </div>
          </section>

          <section className="aero-section">
            <SectionTitle title="Erro de rota" note="Estado compacto para telas auxiliares." />
            <AeroCard className="aero-not-found-card aero-window aero-glass-dark">
              <WindowHeader title="Navegação" meta="não encontrada" />
              <div className="aero-not-found-body">
                <strong className="aero-title text-white">404</strong>
                <span className="aero-text-shadow font-title-md text-white">Página não encontrada</span>
                <AeroButton variant="secondary">Voltar</AeroButton>
              </div>
            </AeroCard>
          </section>
        </div>
      </main>

      <AeroFooter />

      {modalOpen ? (
        <div className="aero-modal-backdrop" role="presentation" onMouseDown={() => setModalOpen(false)}>
          <AeroCard className="aero-modal aero-window" onMouseDown={(event) => event.stopPropagation()}>
            <WindowHeader title="Confirmar entrada" meta="diálogo" />
            <div className="aero-modal-body">
              <h2 className="aero-title font-headline-lg text-white">Entrar na sala?</h2>
              <p className="aero-text-shadow font-body-lg text-white/85">
                Você está prestes a abrir o Aero Lobby com o status online visível para os outros usuários.
              </p>
            </div>
            <div className="aero-modal-footer">
              <AeroButton variant="secondary" onClick={() => setModalOpen(false)}>Cancelar</AeroButton>
              <AeroButton onClick={() => setModalOpen(false)}>Confirmar</AeroButton>
            </div>
          </AeroCard>
        </div>
      ) : null}
    </div>
  );
}

function SectionTitle({ title, note }) {
  return (
    <header className="aero-section-heading">
      <h2 className="aero-section-title">{title}</h2>
      <p className="aero-text-shadow font-body-sm text-white/75">{note}</p>
    </header>
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

function Alert({ tone, title, text }) {
  return (
    <div className={`aero-alert aero-alert-${tone}`}>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function Avatar({ initials, online = false, badge }) {
  return (
    <span className="aero-avatar">
      {initials}
      {online ? <i className="aero-avatar-online" /> : null}
      {badge ? <b>{badge}</b> : null}
    </span>
  );
}
