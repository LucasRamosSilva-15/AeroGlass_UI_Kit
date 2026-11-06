import { useState } from "react";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";
import AeroWindowHeader from "../components/AeroWindowHeader.jsx";

export default function GlassTransparencyTest() {
  const [opacity, setOpacity] = useState(0.28);
  const [backdropEnabled, setBackdropEnabled] = useState(true);
  const [blurEnabled, setBlurEnabled] = useState(true);
  const [checkerEnabled, setCheckerEnabled] = useState(true);

  const testStyle = {
    "--glass-test-opacity": opacity,
    "--glass-test-backdrop": backdropEnabled
      ? blurEnabled
        ? "blur(10px) saturate(130%) brightness(105%)"
        : "saturate(130%) brightness(105%)"
      : "none",
    "--glass-test-webkit-backdrop": backdropEnabled
      ? blurEnabled
        ? "blur(10px) saturate(130%) brightness(105%)"
        : "saturate(130%) brightness(105%)"
      : "none",
  };

  return (
    <div className="aero-page flex min-h-screen flex-col">
      <AeroNavbar />

      <main className="aero-glass-test-main flex-1 p-4 md:p-8" style={testStyle}>
        <div className={`glass-test-stage ${checkerEnabled ? "glass-test-stage-checker" : ""}`}>
          <div className="glass-test-backdrop-text">FUNDO ÓPTICO DWM</div>
          <div className="glass-test-orb glass-test-orb-cyan" />
          <div className="glass-test-orb glass-test-orb-green" />
          <div className="glass-test-orb glass-test-orb-pink" />

          <div className="glass-test-wrap mx-auto max-w-5xl flex flex-col gap-6">
            <AeroCard className="glass-test-hero aero-window aero-glass-active">
              <AeroWindowHeader title="Diagnóstico Óptico do Vidro" meta="DWM 5-Layer Stack" />
              
              <div className="p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="max-w-xl">
                  <h1 className="aero-title font-headline-lg text-white mb-2">Glass Transparency Lab</h1>
                  <p className="aero-text-shadow font-body-sm text-white/90 leading-relaxed">
                    Utilize o fundo xadrez, orbs coloridas e texto em alto contraste para validar a
                    refração óptica em tempo real. No Aero Glass equilibrado, o desfoque suaviza o fundo
                    enquanto a saturação (+30%) previne a perda de vivacidade cromática.
                  </p>
                </div>

                <div className="p-4 rounded border border-white/20 bg-black/25 flex flex-col gap-3 min-w-64 text-xs text-white">
                  <label className="flex flex-col gap-1.5">
                    <span className="font-medium">Opacidade do Vidro: {opacity.toFixed(2)}</span>
                    <input
                      max="0.55"
                      min="0.08"
                      step="0.01"
                      type="range"
                      value={opacity}
                      onChange={(event) => setOpacity(Number(event.target.value))}
                    />
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      checked={backdropEnabled}
                      type="checkbox"
                      onChange={(event) => setBackdropEnabled(event.target.checked)}
                    />
                    <span>Ativar backdrop-filter</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      checked={blurEnabled}
                      type="checkbox"
                      onChange={(event) => setBlurEnabled(event.target.checked)}
                    />
                    <span>Ativar desfoque (10px)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      checked={checkerEnabled}
                      type="checkbox"
                      onChange={(event) => setCheckerEnabled(event.target.checked)}
                    />
                    <span>Mostrar padrão xadrez</span>
                  </label>
                </div>
              </div>
            </AeroCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AeroCard className="aero-window aero-glass-active p-4">
                <GlassCardContent
                  title="Card A"
                  subtitle="Aero Glass Oficial"
                  background="rgba(116, 184, 252, alpha)"
                  backdrop={backdropEnabled ? (blurEnabled ? "blur(10px) saturate(130%)" : "saturate(130%)") : "none"}
                  opacity={`Alpha ${opacity.toFixed(2)}`}
                  note="O fundo deve transparecer com desfoque e saturação acentuada, mantendo o contraste de leitura."
                />
              </AeroCard>

              <section className="glass-test-card glass-test-card-solid p-4 rounded border border-black/40 bg-[#0e4778]">
                <GlassCardContent
                  title="Card B"
                  subtitle="Opaco Comparativo"
                  background="#0e4778 sem transparência"
                  backdrop="none"
                  opacity="1.00 (Totalmente opaco)"
                  note="Oclui todo o fundo. Serve como controle para evitar transparência nula ou excessiva."
                />
              </section>

              <section className="glass-test-card glass-test-card-transparent p-4 rounded border border-white/20 bg-white/5">
                <GlassCardContent
                  title="Card C"
                  subtitle="Hiper-Translúcido"
                  background="rgba(100, 190, 255, 0.08)"
                  backdrop={backdropEnabled ? "blur(8px) saturate(120%)" : "none"}
                  opacity="Alpha 0.08"
                  note="Transparência excessiva que compromete a legibilidade. Evitada na regra de ouro do DWM."
                />
              </section>
            </div>

            <div className="flex items-center gap-3 p-4 rounded border border-white/20 bg-black/25">
              <span className="aero-badge aero-badge-info shrink-0">Critério DWM</span>
              <p className="aero-text-shadow font-body-sm text-white/85 text-xs m-0">
                O equilíbrio ideal do Windows 7 Aero Glass reside entre <strong>0.28 e 0.38</strong> de opacidade alfa.
                Com menos de 0.20 o vidro parece água; com mais de 0.55 perde a sensação de profundidade e translucidez.
              </p>
            </div>
          </div>
        </div>
      </main>

      <AeroFooter />
    </div>
  );
}

function GlassCardContent({ title, subtitle, background, backdrop, opacity, note }) {
  return (
    <div className="flex flex-col gap-2.5 text-xs text-white">
      <div className="border-b border-white/20 pb-1.5 flex justify-between items-center">
        <strong className="font-semibold text-sm">{title}</strong>
        <span className="text-[11px] text-white/70">[{subtitle}]</span>
      </div>
      <dl className="flex flex-col gap-1 text-[11px]">
        <div className="flex justify-between">
          <dt className="text-white/60">Fundo:</dt>
          <dd className="font-mono text-cyan-200">{background}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-white/60">Filtro:</dt>
          <dd className="font-mono text-cyan-200">{backdrop}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-white/60">Opacidade:</dt>
          <dd className="font-mono text-cyan-200">{opacity}</dd>
        </div>
      </dl>
      <p className="text-[11px] text-white/80 leading-relaxed mt-1 border-t border-white/10 pt-1.5">{note}</p>
    </div>
  );
}
