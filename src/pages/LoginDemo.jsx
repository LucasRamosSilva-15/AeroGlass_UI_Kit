import AeroButton from "../components/AeroButton.jsx";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroInput from "../components/AeroInput.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";
import AeroWindowHeader from "../components/AeroWindowHeader.jsx";

export default function LoginDemo() {
  return (
    <div className="aero-page flex min-h-screen flex-col">
      <AeroNavbar />

      <main className="aero-login-main flex flex-1 items-center justify-center p-4">
        <AeroCard className="aero-window aero-glass-active w-full max-w-md shadow-2xl">
          <AeroWindowHeader title="Autenticação de Usuário" meta="segurança" />
          
          <div className="flex flex-col gap-4 p-6 text-center">
            <header className="mb-2">
              <h1 className="aero-title font-headline-lg mb-1 text-white">
                Bem-vindo de volta
              </h1>
              <p className="aero-text-shadow font-body-sm text-white/90">
                Entre com suas credenciais para continuar
              </p>
            </header>

            <form className="flex flex-col gap-3 text-left">
              <AeroInput
                id="email"
                icon="mail"
                label="Email ou Usuário"
                placeholder="seu@email.com"
                type="email"
              />
              <AeroInput
                id="password"
                icon="lock"
                label="Senha"
                placeholder="••••••••"
                type="password"
              />

              <div className="flex justify-end">
                <a className="aero-link text-xs" href="#">
                  Esqueceu a senha?
                </a>
              </div>

              <AeroButton type="submit" className="w-full is-default mt-2">
                <span>Entrar no Sistema</span>
                <LoginIcon />
              </AeroButton>
            </form>

            <div className="my-1 flex items-center gap-4 opacity-80">
              <div className="aero-divider" />
              <span className="aero-text-shadow text-xs font-semibold text-white">OU</span>
              <div className="aero-divider" />
            </div>

            <AeroButton variant="secondary" type="button" className="w-full">
              <GoogleMark />
              <span>Entrar com Conta Google</span>
            </AeroButton>

            <div className="mt-3">
              <a className="aero-link text-xs" href="#">
                Novo por aqui? Criar conta de acesso
              </a>
            </div>
          </div>
        </AeroCard>
      </main>

      <AeroFooter />
    </div>
  );
}

function LoginIcon() {
  return (
    <svg
      aria-hidden="true"
      className="relative z-10 size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m10 17 5-5-5-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3" />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" className="relative z-10 size-4 drop-shadow-sm" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}
