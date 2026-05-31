import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";

export default function NotFound() {
  return (
    <div className="aero-page">
      <AeroNavbar />

      <main className="aero-login-main">
        <AeroCard className="aero-not-found-card aero-window aero-glass-dark">
          <div className="aero-window-titlebar">
            <span>Navegacao</span>
            <small>nao encontrada</small>
          </div>
          <div className="aero-not-found-body">
            <strong className="aero-title text-white">404</strong>
            <span className="aero-text-shadow font-title-md text-white">Pagina nao encontrada</span>
            <AeroButton asLink href="/" variant="secondary">
              Voltar
            </AeroButton>
          </div>
        </AeroCard>
      </main>

      <AeroFooter />
    </div>
  );
}
