import { useState } from "react";
import AeroCard from "../components/AeroCard.jsx";
import AeroFooter from "../components/AeroFooter.jsx";
import AeroNavbar from "../components/AeroNavbar.jsx";

export default function GlassTransparencyTest() {
  const [opacity, setOpacity] = useState(0.22);
  const [backdropEnabled, setBackdropEnabled] = useState(true);
  const [blurEnabled, setBlurEnabled] = useState(true);
  const [checkerEnabled, setCheckerEnabled] = useState(true);

  const testStyle = {
    "--glass-test-opacity": opacity,
    "--glass-test-backdrop": backdropEnabled
      ? blurEnabled
        ? "blur(24px) saturate(160%)"
        : "saturate(160%)"
      : "none",
    "--glass-test-webkit-backdrop": backdropEnabled
      ? blurEnabled
        ? "blur(24px) saturate(160%)"
        : "saturate(160%)"
      : "none",
  };

  return (
    <div className="aero-page">
      <AeroNavbar />

      <main className="aero-glass-test-main" style={testStyle}>
        <div className={`glass-test-stage ${checkerEnabled ? "glass-test-stage-checker" : ""}`}>
          <div className="glass-test-backdrop-text">FUNDO ATRAS DO VIDRO</div>
          <div className="glass-test-orb glass-test-orb-cyan" />
          <div className="glass-test-orb glass-test-orb-green" />
          <div className="glass-test-orb glass-test-orb-pink" />

          <div className="glass-test-wrap">
            <AeroCard className="glass-test-hero aero-window aero-glass-active aero-reflection">
              <div className="aero-window-titlebar">
                <span>Teste de transparencia</span>
                <small>backdrop-filter</small>
              </div>
              <div className="glass-test-hero-body">
                <div>
                  <h1 className="aero-title font-headline-lg text-white">Glass Transparency Test</h1>
                  <p className="aero-text-shadow font-body-lg text-white/86">
                    Use o xadrez, as listras, os circulos e o texto do fundo para verificar se o vidro
                    deixa o ambiente aparecer e se o blur esta ativo.
                  </p>
                </div>

                <div className="glass-test-controls">
                  <label>
                    <span>Opacidade do vidro: {opacity.toFixed(2)}</span>
                    <input
                      max="0.55"
                      min="0.06"
                      step="0.01"
                      type="range"
                      value={opacity}
                      onChange={(event) => setOpacity(Number(event.target.value))}
                    />
                  </label>
                  <label className="aero-check-row">
                    <input
                      checked={backdropEnabled}
                      type="checkbox"
                      onChange={(event) => setBackdropEnabled(event.target.checked)}
                    />
                    <span>Ligar backdrop-filter</span>
                  </label>
                  <label className="aero-check-row">
                    <input
                      checked={blurEnabled}
                      type="checkbox"
                      onChange={(event) => setBlurEnabled(event.target.checked)}
                    />
                    <span>Ligar blur</span>
                  </label>
                  <label className="aero-check-row">
                    <input
                      checked={checkerEnabled}
                      type="checkbox"
                      onChange={(event) => setCheckerEnabled(event.target.checked)}
                    />
                    <span>Mostrar fundo xadrez</span>
                  </label>
                </div>
              </div>
            </AeroCard>

            <div className="glass-test-card-grid">
              <AeroCard className="glass-test-card glass-test-card-current">
                <GlassCardContent
                  title="Card A"
                  subtitle="Vidro Aero real"
                  background="rgba + gradientes Aero atuais"
                  backdrop={backdropEnabled ? (blurEnabled ? "blur(24px) saturate(160%)" : "saturate(160%)") : "none"}
                  opacity={`rgba com alpha ${opacity.toFixed(2)}`}
                  note="O fundo deve aparecer de forma leve e borrada atraves do painel."
                />
              </AeroCard>

              <section className="glass-test-card glass-test-card-solid">
                <GlassCardContent
                  title="Card B"
                  subtitle="Comparacao solida"
                  background="#0e4778 sem transparencia"
                  backdrop="none"
                  opacity="opaco"
                  note="Este card deve esconder quase tudo. Serve como contraste para detectar excesso de opacidade."
                />
              </section>

              <section className="glass-test-card glass-test-card-transparent">
                <GlassCardContent
                  title="Card C"
                  subtitle="Transparencia exagerada"
                  background="rgba(100, 190, 255, 0.10)"
                  backdrop={backdropEnabled ? "blur(12px) saturate(150%)" : "none"}
                  opacity="alpha 0.10"
                  note="Aqui o fundo aparece mais forte para comparar com o equilibrio do Aero oficial."
                />
              </section>
            </div>

            <div className="glass-test-criteria">
              <span className="aero-badge aero-badge-info">Criterio visual</span>
              <p className="aero-text-shadow font-body-sm text-white/82">
                Se o xadrez, as listras e o texto do fundo aparecem discretamente atraves do Card A,
                ha transparencia. Se eles ficam suavemente borrados, o backdrop-filter esta funcionando.
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
    <div className="glass-test-card-content">
      <div className="glass-test-card-head">
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <dl>
        <div>
          <dt>background</dt>
          <dd>{background}</dd>
        </div>
        <div>
          <dt>backdrop-filter</dt>
          <dd>{backdrop}</dd>
        </div>
        <div>
          <dt>opacity/rgba</dt>
          <dd>{opacity}</dd>
        </div>
      </dl>
      <p>{note}</p>
    </div>
  );
}
