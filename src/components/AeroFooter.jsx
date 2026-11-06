export default function AeroFooter() {
  return (
    <footer className="aero-footer relative z-50 w-full py-2">
      <div className="aero-content mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="w7-start-orb flex size-9 items-center justify-center" title="Menu Iniciar">
            <svg className="size-5" viewBox="0 0 24 24">
              <path fill="#f25022" d="M2 3h9v9H2z" />
              <path fill="#7fba00" d="M13 3h9v9h-9z" />
              <path fill="#00a4ef" d="M2 14h9v9H2z" />
              <path fill="#ffb900" d="M13 14h9v9h-9z" />
            </svg>
          </div>
          <span className="aero-text-shadow font-label-md text-white/90">
            © 2026 — AeroGlass UI Kit (Windows 7 Aero Glass & DWM Pipeline)
          </span>
        </div>

        <nav className="flex items-center gap-5">
          <a className="aero-footer-link text-xs" href="#privacy">
            Privacidade
          </a>
          <a className="aero-footer-link text-xs" href="#terms">
            Termos
          </a>
          <a className="aero-footer-link text-xs" href="#support">
            Suporte
          </a>
          <div className="w7-show-desktop h-6 w-3.5" title="Mostrar Área de Trabalho" />
        </nav>
      </div>
    </footer>
  );
}
