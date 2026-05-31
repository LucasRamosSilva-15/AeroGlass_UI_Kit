import { useRef } from "react";

export default function AeroCard({ children, className = "", ...props }) {
  const cardRef = useRef(null);

  function handlePointerMove(event) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  }

  return (
    <section ref={cardRef} className={`aero-glass ${className}`} onPointerMove={handlePointerMove} {...props}>
      <div className="aero-spotlight" />
      <div className="aero-content">{children}</div>
    </section>
  );
}
