import { useEffect, useRef } from "react";
import "../pagesCSS/Kontakta.css";

/* ══════════════════════════════════════════════════════════
   KONTAKTA — Figma: 14:86
   bg #1E1E1E · mismo sistema que Home (2:228)
   "Tack!" · forma romboidal naranja · links + email
   Sin imágenes · máxima jerarquía editorial
   ══════════════════════════════════════════════════════════ */

const LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    sub: "Professionellt nätverk",
    href: "https://www.linkedin.com/in/nelson-pe%C3%B1a-21881412a/",
    external: true,
    icon: "↗",
  },
  {
    id: "github",
    label: "GitHub",
    sub: "Kod & projekt",
    href: "https://github.com/LordNelson83",
    external: true,
    icon: "↗",
  },
  {
    id: "cv",
    label: "Ladda ner CV",
    sub: "PDF · Nelson Peña",
    href: "/CV_Nelson_Pena.pdf",
    external: false,
    download: "CV_Nelson_Pena.pdf",
    icon: "↓",
  },
];

export default function Kontakta() {
  const heroRef   = useRef(null);
  const shapeRef  = useRef(null);
  const linksRef  = useRef([]);
  const statsRef  = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => en.isIntersecting && en.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    [heroRef.current, shapeRef.current, ...linksRef.current, ...statsRef.current]
      .filter(Boolean)
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="kt-page">

      {/* Grain — idéntico al hero de Home */}
      <div className="kt-grain" aria-hidden="true" />

      {/* Palabra de fondo muy baja opacidad */}
      <div className="kt-bg-word" aria-hidden="true">Tack</div>

      {/* ════════════════════════════════════════════
          HERO — Figma: 14:105 · Playfair Bold 64px
          "Tack!" + subtítulo Montserrat Bold 20px
      ════════════════════════════════════════════ */}
      <header className="kt-hero" ref={heroRef}>
        <p className="kt-hero__eyebrow">Kontakt &amp; Samarbete</p>

        {/* Figma: Heading 1 — Playfair Bold 64px · lh 96px */}
        <h1 className="kt-hero__h1">Tack!</h1>

        {/* Figma: Heading 2 — Montserrat Bold 20px · lh 32px */}
        <p className="kt-hero__sub">
          Om du har några frågor, förslag eller om du bara vill hälsa,
          tveka inte att kontakta mig.
        </p>

        <div className="kt-hero__line" aria-hidden="true" />
      </header>

      {/* ════════════════════════════════════════════
          STATS — datos de contacto en grid
      ════════════════════════════════════════════ */}
      <div className="kt-stats" role="list">
        {[
          { value: "Open",  label: "Tillgänglig för uppdrag" },
          { value: "UX",    label: "Product & UI/UX Designer" },
          { value: "Sthlm", label: "Stockholm · Sverige" },
          { value: "2026",  label: "Chas Academy · Examen" },
        ].map((s, i) => (
          <div
            key={s.value}
            className="kt-stat"
            role="listitem"
            ref={el => statsRef.current[i] = el}
            style={{ "--delay": `${i * 0.1}s` }}
          >
            <span className="kt-stat__value">{s.value}</span>
            <span className="kt-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ════════════════════════════════════════════
          BODY — forma central + columna lateral
      ════════════════════════════════════════════ */}
      <div className="kt-body">

        {/* ── Columna izquierda — texto + links de lista ── */}
        <div className="kt-sidebar" ref={heroRef}>
          <p className="kt-sidebar__intro">
            Jag är alltid intresserad av nya möjligheter, spännande projekt
            och meningsfulla samarbeten. Hör av dig!
          </p>

          {/* Links en formato lista editorial */}
          <nav className="kt-links" aria-label="Kontaktlänkar">
            {LINKS.map((lnk, i) => (
              <a
                key={lnk.id}
                href={lnk.href}
                target={lnk.external ? "_blank" : undefined}
                rel={lnk.external ? "noopener noreferrer" : undefined}
                download={lnk.download}
                className="kt-link"
                ref={el => linksRef.current[i] = el}
                style={{ "--delay": `${0.1 + i * 0.12}s` }}
              >
                <div className="kt-link__left">
                  <span className="kt-link__num">0{i + 1}</span>
                  <div className="kt-link__texts">
                    <span className="kt-link__label">{lnk.label}</span>
                    <span className="kt-link__sub">{lnk.sub}</span>
                  </div>
                </div>
                <span className="kt-link__icon" aria-hidden="true">{lnk.icon}</span>
                {/* Barra animada en hover */}
                <div className="kt-link__bar" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Email destacado */}
          <a
            href="mailto:nelsonpenna83@gmail.com"
            className="kt-email"
            aria-label="Skicka e-post till Nelson"
          >
            <span className="kt-email__icon" aria-hidden="true">✉</span>
            <span className="kt-email__address">nelsonpenna83@gmail.com</span>
            <span className="kt-email__arrow" aria-hidden="true">→</span>
          </a>
        </div>

        {/* ── Forma romboidal naranja — Figma: 14:118 ──
            Background+Shadow · gradiente naranja-dorado
            border-radius: 269.5px 0 269.5px 0
            box-shadow: 15px 8px 11px rgba(0,0,0,0.35)
        ── */}
        <div className="kt-shape-wrap" ref={shapeRef}>
          <div className="kt-shape" aria-hidden="true">

            {/* Contenido dentro de la forma */}
            <div className="kt-shape__content">
              <p className="kt-shape__greeting">Hej!</p>
              <p className="kt-shape__tagline">
                Låt oss skapa något<br /><em>extraordinärt</em> tillsammans.
              </p>
              <div className="kt-shape__divider" />
              <p className="kt-shape__note">
                Svarar inom 24 timmar
              </p>
            </div>

            {/* Decoración de número grande */}
            <span className="kt-shape__deco" aria-hidden="true">N</span>
          </div>

          {/* Sombra del reflejo */}
          <div className="kt-shape__shadow" aria-hidden="true" />
        </div>

      </div>

      {/* ════════════════════════════════════════════
          CTA FINAL — email grande + firma
      ════════════════════════════════════════════ */}
      <section className="kt-cta">
        <div className="kt-cta__inner">
          <p className="kt-cta__eyebrow">Redo att börja?</p>
          <a href="mailto:nelsonpenna83@gmail.com" className="kt-cta__email">
            nelsonpenna83@gmail.com
          </a>
          <p className="kt-cta__copy">
            © 2025 Nelson Peña · UX/UI Designer &amp; Frontend Developer
          </p>
        </div>
      </section>

    </div>
  );
}
