export default function AeroFooter() {
  return (
    <footer className="aero-footer relative z-50 w-full py-3">
      <div className="aero-content flex items-center justify-center gap-8 px-8">
        <span className="aero-text-shadow font-label-md text-white/80">
          © 2026 — AeroGlass UI Kit.
        </span>
        <nav className="flex gap-6">
          <a className="aero-footer-link" href="#">
            Privacy
          </a>
          <a className="aero-footer-link" href="#">
            Terms
          </a>
          <a className="aero-footer-link" href="#">
            Support
          </a>
        </nav>
      </div>
    </footer>
  );
}
