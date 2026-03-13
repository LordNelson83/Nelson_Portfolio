import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/Home.css";
import nelsonPhoto from "../assets/images2/me.png";
import nptLogo    from "../assets/images2/npt.png";
import { useLang } from "../i18n/LangContext";

/* ─── Figma assets (válidos 7 días desde la sesión MCP) ─── */
const FIGMA_PHOTO = "https://www.figma.com/api/mcp/asset/3f73d361-82e7-412f-b1c6-b922033f22c7";
const FIGMA_LOGO  = "https://www.figma.com/api/mcp/asset/4d3adb75-f1dc-40dd-875b-81b4780b4a2e";

/* ─── Work tiles — Figma List (2:304) ─── */
const TILES = [
  { num:"01", label:"Cross Media",  sub:"Print · Editorial · Branding",                              path:"/crossmedia/1",        accent:"#ffffff" },
  { num:"02", label:"3D Print",     sub:"Shapr3D · Modelling · Production",                         path:"/threedprint/1",       accent:"#ffa205" },
  { num:"03", label:"UX/UI Design", sub:"Research · Prototyping · System",                          path:"/uxuidesign/1",        accent:"#ffffff" },
  { num:"04", label:"Projekter",    sub:"Tidningsmagasin · Gymplanerare · E-handelsprojekt",         path:"/grafiskproduktion/1", accent:"#ffa205" },
];

export default function Home() {
  const { t } = useLang();
  const heroRef  = useRef(null);
  const tilesRef = useRef([]);

  /* parallax foto — Figma: Nelson Peña_bild (2:233) */
  useEffect(() => {
    const photo = heroRef.current?.querySelector(".hero-photo");
    if (!photo) return;
    const fn = () => { photo.style.transform = `translateY(${window.scrollY * 0.25}px)`; };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* IntersectionObserver tiles — Figma: List (2:304) threshold 0.15 */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("tile--visible")),
      { threshold: 0.15 }
    );
    tilesRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
          SECTION HERO — Figma: Section (2:232)
          1440 × 900px · bg #1E1E1E
          items-center · justify-end
      ══════════════════════════════════════════ */}
      <section className="home-hero" ref={heroRef}>

        {/* Figma: Nelson Peña_bild (2:233)
            aspect 578/945 · left 0 · top 20% · bottom -25%
            max-width 835.2px */}
        <img className="hero-photo" src={nelsonPhoto} alt="Nelson Peña" />

        {/* Figma: Gradient (2:235)
            linear-gradient(99.99deg,
              rgba(30,30,30,0) 30%,
              rgba(30,30,30,0.55) 59.615%,
              rgba(30,30,30,0.92) 84.615%,
              rgb(30,30,30) 100%) */}
        <div className="hero-overlay" />

        {/* Figma: Image (2:239) — grain SVG fractalNoise · opacity 3.5% */}
        <div className="hero-grain" />

        {/* Figma: text (2:244) — © 2026
            Montserrat Medium 11px · rgba(255,255,255,0.35) · tracking 1.98px
            top 116.25px · left 72px (translateY -50%) */}
        <span className="hero-index">© 2026</span>

        {/* Figma: Junior product Ux (2:249·2:250)
            "Senior Product & UX/UI Designer"
            Montserrat SemiBold 11px · rgba(255,255,255,0.40) · tracking 1.98px
            top 108px · right 72.89px */}
        <p className="hero-role">Product & UX/UI Designer</p>

        {/* Figma: Nelson Peña (2:403·2:258)
            Playfair Display Bold 144px · lh 126.72px · tracking -0.8px
            "Nelson " white + "Peña" #FFA205 — en UNA línea */}
        <div className="hero-content">
          <h1 className="hero-name">
            <span className="hero-name__first">Nelson&nbsp;</span>
            <span className="hero-name__last">Peña</span>
          </h1>
        </div>

        {/* Figma: Hej_text (2:265)
            bottom 55.48px · right 72px · width 360px
            flex-col · items-end · gap 12px */}
        <div className="hero-bio">
          {/* Figma: "Hej!" (2:267) — Montserrat Bold 11px · #FFA205 · tracking 2.2px */}
          <span className="hero-bio__tag">Hej!</span>

          {/* Figma: Description (2:271)
              Montserrat Regular 13px · lh 23.33px · rgba(255,255,255,0.72)
              text-right · pb 12.81px */}
          <p>
            Jag omvandlar komplexa idéer till intuitiva upplevelser
            {" "}— med djup i research, precision i system och hjärta i
            {" "}varje pixel.
          </p>

          {/* Figma: Component 2 (2:276)
              border-bottom rgba(255,162,5,0.5) 0.8px · pb 3.4px
              Montserrat SemiBold 12px · white · tracking 1.44px */}
          <Link to="/ommig" className="hero-bio__cta">
            Om mig <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Figma: Container (2:281)
            left 50% · bottom 28.11px · flex-col · items-center · gap 7.4px */}
        <div className="hero-scroll-hint" aria-hidden="true">
          {/* Figma: Vertical Divider (2:283) — 1px × 36px · gradient #FFA205 → transparent */}
          <span />
          {/* Figma: "Scroll" (2:286) — Montserrat Regular 9px · rgba(255,255,255,0.30) · tracking 1.98px */}
          <p>Scroll</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION WORK — Figma: Section (2:292)
          bg #1E1E1E · pt 100 pb 80 px 72 · gap 60px
      ══════════════════════════════════════════ */}
      <section className="home-work">

        {/* Figma: Container (2:294) — gap 16px */}
        <div className="home-work__header">
          {/* Figma: "— Utvalda projekt" (2:297)
              Montserrat SemiBold 11px · #FFA205 · tracking 2.2px */}
          <p className="home-work__eyebrow">{t("home", "eyebrow")}</p>

          {/* Figma: Heading 2 (2:300)
              Playfair Display Bold 86.4px · lh 86.4px · tracking -1.728px */}
          <h2 className="home-work__title">360° Design</h2>
        </div>

        {/* Figma: List (2:304)
            bg rgba(255,255,255,0.06) · border 1px rgba(255,255,255,0.06)
            grid 2×2 · cada tile 646.7 × 194.9px */}
        <ul className="home-work__grid" role="list">

          {/* 01 · 02 · 03 — tiles normales */}
          {TILES.map((t, i) => (
            <li
              key={t.label}
              className="tile"
              ref={el => tilesRef.current[i] = el}
              style={{ "--tile-accent": t.accent, "--delay": `${i * 0.1}s` }}
            >
              <Link to={t.path} className="tile__link">
                <span className="tile__number">{t.num}</span>
                <span className="tile__label">{t.label}</span>
                <span className="tile__sub">{t.sub}</span>
                <span className="tile__arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}



        </ul>
      </section>

      {/* ══════════════════════════════════════════
          SECTION CONTACT — Figma: Section (2:356)
          bg #111 · border-top rgba(255,255,255,0.06) 0.8px
          pt 79.9 pb 80 pl 72 pr 71.99
          flex row · space-between · items-center
      ══════════════════════════════════════════ */}
      <section className="home-contact">
        {/* Figma: text (2:361)
            Playfair Display Bold 50.4px · lh 60.48px · tracking -1.008px
            "extraordinary" → Bold Italic #FFA205 */}
        <p className="home-contact__text">
          {t("home", "contact")}&nbsp;<em>{t("home", "contactEm")}</em>?
        </p>

        <Link to="/kontakta" className="home-contact__btn">{t("home", "contactBtn")}</Link>
      </section>
    </>
  );
}
