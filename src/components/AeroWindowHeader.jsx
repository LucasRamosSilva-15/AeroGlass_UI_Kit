export default function AeroWindowHeader({ title, meta, controls = true, className = "" }) {
  return (
    <div className={`aero-window-titlebar flex items-center justify-between px-2.5 py-1 ${className}`}>
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="aero-title-text font-medium truncate">{title}</span>
        {meta ? <small className="text-white/70 text-xs truncate">[{meta}]</small> : null}
      </div>
      {controls ? (
        <div className="aero-caption-controls shrink-0">
          <button type="button" className="aero-caption-btn is-minimize" aria-label="Minimizar">🗕</button>
          <button type="button" className="aero-caption-btn is-maximize" aria-label="Maximizar">🗖</button>
          <button type="button" className="aero-caption-btn close is-close" aria-label="Fechar">✕</button>
        </div>
      ) : null}
    </div>
  );
}

