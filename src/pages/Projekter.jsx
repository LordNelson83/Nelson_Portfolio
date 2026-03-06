import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/Projekter.css";
import { useLang } from "../i18n/LangContext";

import oakImg      from "../assets/images/oak.png";
import oakUiImg    from "../assets/images/oak-ui.png";
import magasinImg  from "../assets/images/magasin.png";

const OAK_SCREENS = [
  { src: "https://www.figma.com/api/mcp/asset/dcb14d52-1bb8-4aa5-bcb3-f9ac3f1e07b9", alt: "OAK Equipment — isometric gym",        label: "Isometrisk gym-visualisering" },
  { src: "https://www.figma.com/api/mcp/asset/47d48a99-89a7-4cee-aeea-d8347d8a5e26", alt: "OAK — mätverktyg för rum",              label: "Mätverktyg för rumsdimensioner" },
  { src: "https://www.figma.com/api/mcp/asset/186baae4-b792-44d6-b4da-0a107eda1d42", alt: "OAK — träningsredskap katalog",         label: "Produktkatalog & träningsredskap" },
  { src: "https://www.figma.com/api/mcp/asset/c555957a-4a06-4025-a54f-afcaef4595de", alt: "OAK — fri rörelse i rummet",            label: "3D-navigering · Zooma & rotera" },
  { src: "https://www.figma.com/api/mcp/asset/063dc115-4d04-4bca-bbeb-9622583ee307", alt: "OAK — Lo-Fi wireframe 1",               label: "Lo-Fi wireframe · v1" },
  { src: "https://www.figma.com/api/mcp/asset/23b1252d-9785-4b0d-9ee8-3564625e10fe", alt: "OAK — Lo-Fi wireframe 2",               label: "Lo-Fi wireframe · v2" },
];

const PROJECT_IMAGES = [magasinImg, oakImg, null];
const PROJECT_COLORS = ["#ffa205", "#90a590", "#ffa205"];
const PROJECT_IDS    = ["magasin", "oak", "ehandel"];

const PROJECT_LINKS = [
  [{ url: "/Magasin.pdf",                                     external: false }],
  [{ url: "/OAK-UX.pdf", external: false }, { url: "/OAK-UI.pdf", external: false }],
  [{ url: "https://solenia.netlify.app/", external: true },   { url: "https://github.com/LordNelson83/Nelson_Portfolio", external: true }],
];

export default function Projekter() {
  const { t } = useLang();
  const pk = t("projekter");

  const heroRef  = useRef(null);
  const statsRef = useRef([]);
  const projRefs = useRef([]);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => en.isIntersecting && en.target.classList.add("is-visible")),
      { threshold: 0.06 }
    );
    [heroRef.current, ...statsRef.current, ...projRefs.current]
      .filter(Boolean)
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setActiveScreen(i => (i + 1) % OAK_SCREENS.length), 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="pk-page">
      <div className="pk-grain" aria-hidden="true" />
      <div className="pk-bg-word" aria-hidden="true">Projekt</div>

      {/* HERO */}
      <header className="pk-hero" ref={heroRef}>
        <p className="pk-hero__eyebrow">{pk.eyebrow}</p>
        <h1 className="pk-hero__h1"><span>{pk.h1}</span></h1>
        <p className="pk-hero__sub">{pk.sub}</p>
        <div className="pk-hero__line" aria-hidden="true" />
      </header>

      {/* STATS */}
      <div className="pk-stats" role="list">
        {pk.stats.map((s, i) => (
          <div
            key={s.value}
            className="pk-stat"
            role="listitem"
            ref={el => statsRef.current[i] = el}
            style={{ "--delay": `${i * 0.1}s` }}
          >
            <span className="pk-stat__value">{s.value}</span>
            <span className="pk-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* PROYECTOS */}
      <div className="pk-projects">
        {pk.projects.map((proj, pi) => {
          const id    = PROJECT_IDS[pi];
          const color = PROJECT_COLORS[pi];
          const image = PROJECT_IMAGES[pi];
          const links = PROJECT_LINKS[pi];
          const num   = String(pi + 1).padStart(2, "0");

          return (
            <section
              key={id}
              className="pk-project"
              ref={el => projRefs.current[pi] = el}
              style={{ "--accent": color }}
            >
              {/* Header */}
              <div className="pk-project__header">
                <span className="pk-project__num">{num}</span>
                <div className="pk-project__meta">
                  <p className="pk-project__school">{proj.school}</p>
                  <h2 className="pk-project__title">{proj.title}</h2>
                  <div className="pk-project__row">
                    <span className="pk-project__period">{proj.year}</span>
                    <span className="pk-project__tag">{proj.tag}</span>
                  </div>
                </div>
                <div className="pk-project__divider" aria-hidden="true" />
              </div>

              <p className="pk-project__lead">{proj.lead}</p>

              {/* Body */}
              <div className={`pk-project__body${id === "oak" ? " pk-project__body--oak" : ""}`}>

                {/* Visual */}
                {id === "oak" ? (
                  <div
                    className="pk-gallery"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="pk-gallery__main">
                      {OAK_SCREENS.map((sc, i) => (
                        <div key={i} className={`pk-gallery__slide${i === activeScreen ? " pk-gallery__slide--active" : ""}`}>
                          <img src={sc.src} alt={sc.alt} className="pk-gallery__img" />
                          <div className="pk-gallery__caption">{sc.label}</div>
                        </div>
                      ))}
                      <span className="pk-gallery__counter">
                        {String(activeScreen + 1).padStart(2, "0")} / {String(OAK_SCREENS.length).padStart(2, "0")}
                      </span>
                      <button className="pk-gallery__nav pk-gallery__nav--prev"
                        onClick={() => setActiveScreen(i => (i - 1 + OAK_SCREENS.length) % OAK_SCREENS.length)}
                        aria-label="Föregående">‹</button>
                      <button className="pk-gallery__nav pk-gallery__nav--next"
                        onClick={() => setActiveScreen(i => (i + 1) % OAK_SCREENS.length)}
                        aria-label="Nästa">›</button>
                    </div>
                    <div className="pk-gallery__dots">
                      {OAK_SCREENS.map((_, i) => (
                        <button key={i}
                          className={`pk-gallery__dot${i === activeScreen ? " pk-gallery__dot--active" : ""}`}
                          onClick={() => setActiveScreen(i)}
                          aria-label={`Bild ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                ) : image ? (
                  <div className="pk-visual">
                    <div className="pk-visual__img-wrap">
                      <img src={image} alt={proj.title} className="pk-visual__img" />
                      <div className="pk-visual__overlay">
                        <span className="pk-visual__overlay-tag">{proj.tag}</span>
                        <span className="pk-visual__overlay-year">{proj.year}</span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Contenido */}
                <div className="pk-project__content">
                  <p className="pk-project__desc">{proj.description}</p>

                  {/* Roles OAK */}
                  {proj.uxRole && (
                    <div className="pk-roles">
                      <div className="pk-role">
                        <p className="pk-role__title">{proj.uxRoleTitle}</p>
                        <ul className="pk-role__list">
                          {proj.uxRole.map(r => <li key={r}>{r}</li>)}
                        </ul>
                      </div>
                      <div className="pk-role">
                        <p className="pk-role__title">{proj.uiRoleTitle}</p>
                        <ul className="pk-role__list">
                          {proj.uiRole.map(r => <li key={r}>{r}</li>)}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Resultados OAK */}
                  {proj.results && (
                    <div className="pk-results">
                      <p className="pk-results__title">{proj.resultsTitle}</p>
                      <div className="pk-results__grid">
                        {proj.results.map(r => (
                          <div key={r.score} className="pk-result">
                            <span className="pk-result__score">{r.score}</span>
                            <span className="pk-result__text">{r.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  <div className="pk-skills">
                    {[
                      ["Photoshop", "Illustrator", "InDesign", "Typografi", "Layout"],
                      ["Figma", "UX Research", "Lo-Fi", "HiFi", "Maze", "Personas"],
                      ["React", "JavaScript", "HTML", "CSS", "GitHub", "API", "Figma"],
                    ][pi].map(sk => (
                      <span key={sk} className="pk-skill">{sk}</span>
                    ))}
                  </div>

                  {/* Links */}
                  {proj.links && (
                    <div className="pk-links">
                      {proj.links.map((lnk, li) => (
                        <a
                          key={li}
                          href={links[li]?.url || "#"}
                          target={links[li]?.external ? "_blank" : undefined}
                          rel={links[li]?.external ? "noopener noreferrer" : undefined}
                          className="pk-link"
                        >
                          <span className="pk-link__label">{lnk.label}</span>
                          <span className="pk-link__icon">{lnk.icon}</span>
                          <div className="pk-link__bar" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="pk-cta">
        <div className="pk-cta__left">
          <p className="pk-cta__eyebrow">{pk.ctaEyebrow}</p>
          <h2 className="pk-cta__title">
            {pk.ctaTitle} <em>{pk.ctaEm}</em>
          </h2>
        </div>
        <Link to="/kontakta" className="pk-cta__btn">{pk.ctaBtn}</Link>
      </section>
    </div>
  );
}
