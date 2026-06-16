import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/Home.css";
import nelsonPhoto from "../assets/images2/me.webp";
import { useLang } from "../i18n/LangContext";

/* ─── Work tiles ─────────────────────────────────────────── */
const TILES = [
  { num:"01", label:"Cross Media",  sub:"Print · Editorial · Branding",                      path:"/crossmedia/1",        accent:"#ffffff" },
  { num:"02", label:"3D Print",     sub:"Shapr3D · Modelling · Production",                  path:"/threedprint/1",       accent:"#ffa205" },
  { num:"03", label:"UX/UI Design", sub:"Research · Prototyping · System",                   path:"/uxuidesign/1",        accent:"#ffffff" },
  { num:"04", label:"Projekter",    sub:"Tidningsmagasin · Gymplanerare · E-handelsprojekt",  path:"/grafiskproduktion/1", accent:"#ffa205" },
];

export default function Home() {
  const { t } = useLang();
  const heroRef  = useRef(null);
  const tilesRef = useRef([]);

  /* parallax foto */
  useEffect(() => {
    const photo = heroRef.current?.querySelector(".hero-photo");
    if (!photo) return;
    const fn = () => { photo.style.transform = `translateY(${window.scrollY * 0.25}px)`; };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* IntersectionObserver tiles */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("tile--visible")),
      { threshold: 0.15 }
    );
    tilesRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    /*
     * WCAG Fix — Error 3 & 4 (imagen 3 y 4):
     * <main> con id="main-content" es el destino del skip-link en App.jsx.
     * Antes, el <main> estaba en App.jsx envolviendo también la Navbar,
     * lo que hacía que el landmark fuera incorrecto.
     * Ahora cada página es responsable de su propio <main>.
     */
    <>
    <main id="main-content" className="home-page">

      {/* ══════════════════════════════════════════
          SECTION HERO
      ══════════════════════════════════════════ */}
      <section className="home-hero" ref={heroRef} aria-label="Hero — Nelson Peña">

        <img
          className="hero-photo"
          src={nelsonPhoto}
          alt="Nelson Peña, Product & UX/UI Designer"
        />

        {/* Decorativos — ocultos para lectores de pantalla */}
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-grain"   aria-hidden="true" />

        {/* WCAG Fix — Error 1 (imagen 1):
            Estos spans son decorativos / complementarios.
            aria-hidden="true" los oculta del árbol de accesibilidad. */}
        <span className="hero-index" aria-hidden="true">© 2026</span>
        <p    className="hero-role"  aria-hidden="true">Product & UX/UI Designer</p>

        {/* Nombre — contenido visible e importante, NO oculto */}
        <div className="hero-content">
          <h1 className="hero-name">
            <span className="hero-name__first">Nelson&nbsp;</span>
            <span className="hero-name__last">Peña</span>
          </h1>
        </div>

        <div className="hero-bio">
          <span className="hero-bio__tag">{t("home", "heroTag")}</span>
          <p>{t("home", "heroDesc")}</p>
          <Link to="/ommig" className="hero-bio__cta">
            {t("home", "heroCtaLabel")} <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Scroll hint — decorativo */}
        <div className="hero-scroll-hint" aria-hidden="true">
          <span />
          <p>Scroll</p>
        </div>

      </section>

      {/* ══════════════════════════════════════════
          SECTION WORK
      ══════════════════════════════════════════ */}
      <section className="home-work" aria-label="Utvalda projekt">

        <div className="home-work__header">
          {/* aria-hidden porque es decorativo — el h2 es el heading real */}
          <p className="home-work__eyebrow" aria-hidden="true">
            {t("home", "eyebrow")}
          </p>
          <h2 className="home-work__title">360° Design</h2>
        </div>

        <ul className="home-work__grid" role="list">
          {TILES.map((tile, i) => (
            <li
              key={tile.label}
              className="tile"
              ref={el => tilesRef.current[i] = el}
              style={{ "--tile-accent": tile.accent, "--delay": `${i * 0.1}s` }}
            >
              <Link to={tile.path} className="tile__link">
                <span className="tile__number" aria-hidden="true">{tile.num}</span>
                <span className="tile__label">{tile.label}</span>
                <span className="tile__sub">{tile.sub}</span>
                <span className="tile__arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

      </section>

      {/* ══════════════════════════════════════════
          FOOTER CONTACT
          WCAG Fix — Error 2 (imagen 2):
          Era <section class="home-contact">.
          El auditor pedía un <footer> con role="contentinfo"
          para información global al final de la página.
          Cambiado a <footer> — semánticamente correcto.
      ══════════════════════════════════════════ */}
    </main>

    <footer className="home-contact" aria-label="Kontakt">
      <p className="home-contact__text">
        {t("home", "contact")}&nbsp;<em>{t("home", "contactEm")}</em>?
      </p>
      <Link to="/kontakta" className="home-contact__btn">
        {t("home", "contactBtn")}
      </Link>
    </footer>

    </>
  );
}
