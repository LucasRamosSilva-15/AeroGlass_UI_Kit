import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";
import AeroWindowHeader from "../components/AeroWindowHeader.jsx";

export default function NotFound() {
  return (
    <div className="aero-page flex min-h-screen flex-col">
      <AeroNavbar />

      <main className="aero-login-main flex flex-1 items-center justify-center p-4">
        <AeroCard className="aero-window aero-glass-dark w-full max-w-sm shadow-2xl">
          <AeroWindowHeader title="Navegação do Sistema" meta="404 Erro" />
          <div className="p-6 flex flex-col items-center text-center gap-3">
            <strong className="aero-title text-white text-5xl font-bold">404</strong>
            <span className="aero-text-shadow font-title-md text-white font-medium">
              Página não encontrada
            </span>
            <p className="aero-text-shadow text-xs text-white/80 max-w-xs">
              O recurso solicitado não pôde ser localizado ou foi movido para outro diretório.
            </p>
            <AeroButton asLink href="/" variant="secondary" className="mt-2">
              Voltar ao Início
            </AeroButton>
          </div>
        </AeroCard>
      </main>

      <AeroFooter />
    </div>
  );
}
