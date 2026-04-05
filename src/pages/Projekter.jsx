import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/Projekter.css";
import { useLang } from "../i18n/LangContext";

import oakImg     from "../assets/images/oak.png";
import oakUiImg   from "../assets/images/oak-ui.png";
import magasinImg from "../assets/images/magasin.png";
import soleniaImg from "../assets/images/solenia.png";

import ahr1Img from "../assets/images/ahr_1.png";
import ahr2Img from "../assets/images/ahr_2.png";
import ahr3Img from "../assets/images/ahr_3.png";

import oak1Img from "../assets/images/oak_1.png";
import oak2Img from "../assets/images/oak_2.png";
import oak3Img from "../assets/images/oak_3.png";
import oak4Img from "../assets/images/oak_4.png";
import oak5Img from "../assets/images/oak_5.png";

const AHR_SCREENS = [
  { src: ahr1Img, alt: "AHR — Användarsegment · Fortnox",        label: "Användarsegment · Fortnox-ekosystem" },
  { src: ahr2Img, alt: "AHR — Product Outcome & OST-karta",       label: "Product Outcome · OST-karta" },
  { src: ahr3Img, alt: "AHR — Opportunity Solution Tree",         label: "Opportunity Solution Tree · Teresa Torres" },
];

const OAK_SCREENS = [
  { src: oak1Img, alt: "OAK Equipment — isometrisk gym-visualisering",   label: "Isometrisk gym-visualisering" },
  { src: oak2Img, alt: "OAK — mätverktyg för rumsdimensioner",            label: "Mätverktyg för rumsdimensioner" },
  { src: oak3Img, alt: "OAK — produktkatalog och träningsredskap",        label: "Produktkatalog & träningsredskap" },
  { src: oak4Img, alt: "OAK — 3D-navigering, zooma och rotera i rummet",  label: "3D-navigering · Zooma & rotera" },
  { src: oak5Img, alt: "OAK — Lo-Fi wireframe version 1",                 label: "Lo-Fi wireframe · v1" },
];

const PROJECT_IMAGES = [oakImg, soleniaImg, magasinImg];
const PROJECT_COLORS = ["#90a590", "#ffa205", "#ffa205"];
const PROJECT_IDS    = ["oak", "ehandel", "magasin"];

const PROJECT_LINKS = [
  [{ url: "/OAK-UX.pdf", external: false }, { url: "/OAK-UI.pdf", external: false }],
  [{ url: "https://solenia.netlify.app/", external: true }, { url: "https://github.com/LordNelson83/Nelson_Portfolio", external: true }],
  [{ url: "/Magasin.pdf", external: false }],
];

const AHR_ACCENT = "#00a6b4";

const AHR_CONTENT = {
  utmaning: "Byråchefer förlorade pengar utan att veta varför — Fortnox Tid, Lön och Fakturering kommunicerade inte med varandra.",
  metod:    "6 användarintervjuer → Opportunity Solution Tree (Teresa Torres) → 3 hypoteser → teknisk feasibility med Fortnox-teamen Avengers & Raiders.",
  resultat: "Konceptet validerades som genomförbart. Målgrupp: byråer med upp till 20 konsulter. Nästa steg: interaktivt Hi-Fi-prototyp.",
};

const OAK_CONTENT = {
  utmaning: "Kunder kunde inte föreställa sig hur gymmet skulle se ut innan köpet — OAK tappade affärer i offertfasen.",
  metod:    "9 undersökningar (3 enkäter + 6 telefonintervjuer) → 2 beteendetyper → idéworkshop → Lo-Fi i Figma → observationstest + gerillatest på SATS Globen med 10 respondenter.",
  resultat: "9/10 upplevde flödet som enkelt. Tre iterationer baserade på testinsikter: progressbar, nästa-knapp och översiktssida. Slutlig Hi-Fi levererad till beställaren.",
};

export default function Projekter() {
  const { t } = useLang();
  const pk = t("projekter");

  const heroRef  = useRef(null);
  const statsRef = useRef([]);
  const projRefs = useRef([]);
  const ahrRef   = useRef(null);

  const [activeScreen,    setActiveScreen]    = useState(0);
  const [activeAhrScreen, setActiveAhrScreen] = useState(0);
  const [isPaused,        setIsPaused]        = useState(false);
  const [isAhrPaused,     setIsAhrPaused]     = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => en.isIntersecting && en.target.classList.add("is-visible")),
      { threshold: 0.06 }
    );
    [heroRef.current, ahrRef.current, ...statsRef.current, ...projRefs.current]
      .filter(Boolean)
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setActiveScreen(i => (i + 1) % OAK_SCREENS.length), 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (isAhrPaused) return;
    const timer = setInterval(() => setActiveAhrScreen(i => (i + 1) % AHR_SCREENS.length), 4200);
    return () => clearInterval(timer);
  }, [isAhrPaused]);

  return (
    <main id="main-content" className="pk-page" aria-label="Projekt">

      <div className="pk-grain"   aria-hidden="true" />
      <div className="pk-bg-word" aria-hidden="true">Projekt</div>

      <header className="pk-hero" ref={heroRef}>
        <p className="pk-hero__eyebrow" aria-hidden="true">{pk.eyebrow}</p>
        <h1 className="pk-hero__h1"><span>{pk.h1}</span></h1>
        <p className="pk-hero__sub">{pk.sub}</p>
        <div className="pk-hero__line" aria-hidden="true" />
      </header>

      <div className="pk-stats" role="list" aria-label="Projektstatistik">
        {pk.stats.map((s, i) => (
          <div key={s.value} className="pk-stat" role="listitem"
            ref={el => statsRef.current[i] = el}
            style={{ "--delay": `${i * 0.1}s` }}>
            <span className="pk-stat__value" aria-hidden="true">{s.value}</span>
            <span className="pk-stat__label">{s.label}: {s.value}</span>
          </div>
        ))}
      </div>

      <div className="pk-projects">

        {/* 01 AHR-Motor */}
        <section className="pk-project pk-project--ahr" ref={ahrRef}
          style={{ "--accent": AHR_ACCENT }}
          aria-label="Projekt 01 — AHR-Motor, Fortnox och Chas Academy">

          <div className="pk-project__header">
            <span className="pk-project__num" aria-hidden="true">01</span>
            <div className="pk-project__meta">
              <p className="pk-project__school">Fortnox · Chas Academy</p>
              <h2 className="pk-project__title">AHR-Motor</h2>
              <div className="pk-project__row">
                <span className="pk-project__period">2025–2026</span>
                <span className="pk-project__tag pk-project__tag--wip">
                  <span aria-hidden="true">⚙</span> En utveckling · Examensarbete
                </span>
              </div>
            </div>
            <div className="pk-project__divider" aria-hidden="true" />
          </div>

          <p className="pk-project__lead">
            Att koppla samman Fortnox Tid, Lön och Fakturering — och visa byråns lönsamhet i realtid.
          </p>

          <div className="pk-project__body pk-project__body--ahr">

            <div className="pk-gallery" aria-label="Bildgalleri — AHR-Motor"
              onMouseEnter={() => setIsAhrPaused(true)}
              onMouseLeave={() => setIsAhrPaused(false)}>
              <div className="pk-gallery__main" aria-live="polite" aria-atomic="true">
                {AHR_SCREENS.map((sc, i) => (
                  <div key={i}
                    className={`pk-gallery__slide${i === activeAhrScreen ? " pk-gallery__slide--active" : ""}`}
                    aria-hidden={i !== activeAhrScreen}>
                    <img src={sc.src} alt={sc.alt} className="pk-gallery__img" />
                    <div className="pk-gallery__caption" aria-hidden="true">{sc.label}</div>
                  </div>
                ))}
                <span className="pk-gallery__counter" aria-hidden="true">
                  {String(activeAhrScreen + 1).padStart(2, "0")} / {String(AHR_SCREENS.length).padStart(2, "0")}
                </span>
                <button className="pk-gallery__nav pk-gallery__nav--prev"
                  onClick={() => setActiveAhrScreen(i => (i - 1 + AHR_SCREENS.length) % AHR_SCREENS.length)}
                  aria-label="Föregående bild"><span aria-hidden="true">‹</span></button>
                <button className="pk-gallery__nav pk-gallery__nav--next"
                  onClick={() => setActiveAhrScreen(i => (i + 1) % AHR_SCREENS.length)}
                  aria-label="Nästa bild"><span aria-hidden="true">›</span></button>
              </div>
              <div className="pk-gallery__dots" role="tablist" aria-label="Välj bild">
                {AHR_SCREENS.map((sc, i) => (
                  <button key={i} role="tab"
                    className={`pk-gallery__dot${i === activeAhrScreen ? " pk-gallery__dot--active" : ""}`}
                    onClick={() => setActiveAhrScreen(i)}
                    aria-label={`Bild ${i + 1}: ${sc.alt}`}
                    aria-selected={i === activeAhrScreen} />
                ))}
              </div>
            </div>

            <div className="pk-project__content">
              <div className="pk-ahr-block">
                <p className="pk-ahr-block__label">— Utmaning</p>
                <p className="pk-ahr-block__text">{AHR_CONTENT.utmaning}</p>
              </div>
              <div className="pk-ahr-block">
                <p className="pk-ahr-block__label">— Metod</p>
                <p className="pk-ahr-block__text">{AHR_CONTENT.metod}</p>
              </div>
              <div className="pk-ahr-block">
                <p className="pk-ahr-block__label">— Objective</p>
                <p className="pk-ahr-block__text">
                  Öka redovisningsbyråns genomsnittliga nettomarginal med 10–15 % jämfört med innevarande termin, inom de närmaste 6 månaderna.
                </p>
              </div>
              <div className="pk-ahr-block">
                <p className="pk-ahr-block__label">— Bakgrund</p>
                <p className="pk-ahr-block__text">
                  Många redovisningsbyråer använder Fortnox produkter — Tid, Fakturering och Lön — men eftersom de är separata produkter kommunicerar de inte med varandra. Det tvingar byråchefer att arbeta i mörkret. När de upptäcker en förlust är det redan för sent att reagera.
                </p>
              </div>
              <div className="pk-ahr-block">
                <p className="pk-ahr-block__label">— Förslag</p>
                <p className="pk-ahr-block__text">
                  AHR-motorn kopplar automatiskt samman dessa tre produkter för att visa byråns lönsamhet i realtid — utan Excel, utan att behöva vänta på revisorn. Systemet varnar automatiskt när ett projekt eller en kund går in i förlust, och ger chefen trygghet att byrån har tillräckligt med personal för att växa.
                </p>
              </div>
              <div className="pk-ahr-block">
                <p className="pk-ahr-block__label">— Resultat</p>
                <p className="pk-ahr-block__text">{AHR_CONTENT.resultat}</p>
              </div>

              <div className="pk-skills" role="list" aria-label="Verktyg och metoder">
                {["UX Research", "POM", "OST", "Figma", "Teresa Torres", "Marty Cagan", "Fortnox"].map(sk => (
                  <span key={sk} className="pk-skill" role="listitem">{sk}</span>
                ))}
              </div>

              <div className="pk-links">
                <a href="https://www.fortnox.se" target="_blank" rel="noopener noreferrer"
                  className="pk-link" aria-label="Fortnox webbplats (öppnas i ny flik)">
                  <span className="pk-link__label">Fortnox</span>
                  <span className="pk-link__icon" aria-hidden="true">↗</span>
                  <div className="pk-link__bar" aria-hidden="true" />
                </a>
                <Link to="/projekter/ahr-motor" className="pk-link">
                  <span className="pk-link__label">Läs case study — AHR-Motor</span>
                  <span className="pk-link__icon" aria-hidden="true">→</span>
                  <div className="pk-link__bar" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02-04 OAK, Solenia, Magasin */}
        {pk.projects.map((proj, pi) => {
          const id    = PROJECT_IDS[pi];
          const color = PROJECT_COLORS[pi];
          const image = PROJECT_IMAGES[pi];
          const links = PROJECT_LINKS[pi];
          const num   = String(pi + 2).padStart(2, "0");

          return (
            <section key={id} className="pk-project"
              ref={el => projRefs.current[pi] = el}
              style={{ "--accent": color }}
              aria-label={`Projekt ${num} — ${proj.title}`}>

              <div className="pk-project__header">
                <span className="pk-project__num" aria-hidden="true">{num}</span>
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

              <div className={`pk-project__body${id === "oak" ? " pk-project__body--oak" : ""}`}>

                {id === "oak" ? (
                  <div className="pk-gallery" aria-label="Bildgalleri — OAK Equipment"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <div className="pk-gallery__main" aria-live="polite" aria-atomic="true">
                      {OAK_SCREENS.map((sc, i) => (
                        <div key={i}
                          className={`pk-gallery__slide${i === activeScreen ? " pk-gallery__slide--active" : ""}`}
                          aria-hidden={i !== activeScreen}>
                          <img src={sc.src} alt={sc.alt} className="pk-gallery__img" />
                          <div className="pk-gallery__caption" aria-hidden="true">{sc.label}</div>
                        </div>
                      ))}
                      <span className="pk-gallery__counter" aria-hidden="true">
                        {String(activeScreen + 1).padStart(2, "0")} / {String(OAK_SCREENS.length).padStart(2, "0")}
                      </span>
                      <button className="pk-gallery__nav pk-gallery__nav--prev"
                        onClick={() => setActiveScreen(i => (i - 1 + OAK_SCREENS.length) % OAK_SCREENS.length)}
                        aria-label="Föregående bild"><span aria-hidden="true">‹</span></button>
                      <button className="pk-gallery__nav pk-gallery__nav--next"
                        onClick={() => setActiveScreen(i => (i + 1) % OAK_SCREENS.length)}
                        aria-label="Nästa bild"><span aria-hidden="true">›</span></button>
                    </div>
                    <div className="pk-gallery__dots" role="tablist" aria-label="Välj bild">
                      {OAK_SCREENS.map((sc, i) => (
                        <button key={i} role="tab"
                          className={`pk-gallery__dot${i === activeScreen ? " pk-gallery__dot--active" : ""}`}
                          onClick={() => setActiveScreen(i)}
                          aria-label={`Bild ${i + 1}: ${sc.alt}`}
                          aria-selected={i === activeScreen} />
                      ))}
                    </div>
                  </div>
                ) : image ? (
                  <div className="pk-visual">
                    <div className="pk-visual__img-wrap">
                      <img src={image} alt={proj.title} className="pk-visual__img" />
                      <div className="pk-visual__overlay" aria-hidden="true">
                        <span className="pk-visual__overlay-tag">{proj.tag}</span>
                        <span className="pk-visual__overlay-year">{proj.year}</span>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="pk-project__content">
                  <p className="pk-project__desc">{proj.description}</p>

                  {id === "oak" && (
                    <>
                      <div className="pk-ahr-block">
                        <p className="pk-ahr-block__label">— Utmaning</p>
                        <p className="pk-ahr-block__text">{OAK_CONTENT.utmaning}</p>
                      </div>
                      <div className="pk-ahr-block">
                        <p className="pk-ahr-block__label">— Metod</p>
                        <p className="pk-ahr-block__text">{OAK_CONTENT.metod}</p>
                      </div>
                    </>
                  )}

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

                  {proj.results && (
                    <div className="pk-results">
                      <p className="pk-results__title">{proj.resultsTitle}</p>
                      <div className="pk-results__grid" role="list">
                        {proj.results.map(r => (
                          <div key={r.score} className="pk-result" role="listitem">
                            <span className="pk-result__score" aria-hidden="true">{r.score}</span>
                            <span className="pk-result__text">{r.score} — {r.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {id === "oak" && (
                    <div className="pk-ahr-block">
                      <p className="pk-ahr-block__label">— Resultat</p>
                      <p className="pk-ahr-block__text">{OAK_CONTENT.resultat}</p>
                    </div>
                  )}

                  <div className="pk-skills" role="list" aria-label="Verktyg och metoder">
                    {[
                      ["Figma", "UX Research", "Lo-Fi", "HiFi", "Maze", "Personas"],
                      ["React", "JavaScript", "HTML", "CSS", "GitHub", "API", "Figma"],
                      ["Photoshop", "Illustrator", "InDesign", "Typografi", "Layout"],
                    ][pi].map(sk => (
                      <span key={sk} className="pk-skill" role="listitem">{sk}</span>
                    ))}
                  </div>

                  {proj.links && (
                    <div className="pk-links">
                      {proj.links.map((lnk, li) => (
                        <a key={li} href={links[li]?.url || "#"}
                          target={links[li]?.external ? "_blank" : undefined}
                          rel={links[li]?.external ? "noopener noreferrer" : undefined}
                          className="pk-link"
                          aria-label={links[li]?.external ? `${lnk.label} (öppnas i ny flik)` : lnk.label}>
                          <span className="pk-link__label">{lnk.label}</span>
                          <span className="pk-link__icon" aria-hidden="true">{lnk.icon}</span>
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

      <footer className="pk-cta" aria-label="Kontakt">
        <div className="pk-cta__left">
          <p className="pk-cta__eyebrow" aria-hidden="true">{pk.ctaEyebrow}</p>
          <h2 className="pk-cta__title">{pk.ctaTitle} <em>{pk.ctaEm}</em></h2>
        </div>
        <Link to="/kontakta" className="pk-cta__btn">{pk.ctaBtn}</Link>
      </footer>

    </main>
  );
}
