import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/Projekter.css";

/* ── Imágenes del proyecto OAK desde Figma (válidas 7 días) ── */
import oakImg      from "../assets/images/oak.png";
import oakUiImg    from "../assets/images/oak-ui.png";
import magasinImg  from "../assets/images/magasin.png";

/* Imágenes Figma — OAK Equipment wireframes + HiFi */
const OAK_SCREENS = [
  {
    src: "https://www.figma.com/api/mcp/asset/dcb14d52-1bb8-4aa5-bcb3-f9ac3f1e07b9",
    alt: "OAK Equipment — isometric gym",
    label: "Isometrisk gym-visualisering",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/47d48a99-89a7-4cee-aeea-d8347d8a5e26",
    alt: "OAK — mätverktyg för rum",
    label: "Mätverktyg för rumsdimensioner",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/186baae4-b792-44d6-b4da-0a107eda1d42",
    alt: "OAK — träningsredskap katalog",
    label: "Produktkatalog & träningsredskap",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/c555957a-4a06-4025-a54f-afcaef4595de",
    alt: "OAK — fri rörelse i rummet",
    label: "3D-navigering · Zooma & rotera",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/063dc115-4d04-4bca-bbeb-9622583ee307",
    alt: "OAK — Lo-Fi wireframe 1",
    label: "Lo-Fi wireframe · v1",
  },
  {
    src: "https://www.figma.com/api/mcp/asset/23b1252d-9785-4b0d-9ee8-3564625e10fe",
    alt: "OAK — Lo-Fi wireframe 2",
    label: "Lo-Fi wireframe · v2",
  },
];

/* ── Datos de los proyectos ── */
const PROJECTS = [
  {
    id: "magasin",
    num: "01",
    school: "Fridhems Folkhögskola",
    title: "Tidningsmagasin",
    year: "2007–2009",
    tag: "Grafisk Produktion",
    color: "#ffa205",
    lead: "Design som berättar — layout, typografi och visuell kommunikation i praktiken.",
    description:
      "Tidningsmagasin, jag fördjupade mina kunskaper i grafisk form och visuell kommunikation genom både praktiskt och teoretiskt arbete. Mina uppgifter med affischer, broschyrer och illustrationer i Adobe Photoshop, Illustrator och InDesign, samt lärde mig grunderna i teckning, layout, typografi och digital design. Utbildningen stärkte min kreativitet, tekniska färdigheter och förmåga att arbeta både självständigt och i grupp. Det tvärkonstnärliga samarbetet gav nya perspektiv och breddade min förståelse för visuell kommunikation.",
    links: [{ label: "Se tidningsmagasinet", url: "/Magasin.pdf", icon: "↗" }],
    image: magasinImg,
    skills: ["Photoshop", "Illustrator", "InDesign", "Typografi", "Layout"],
  },
  {
    id: "oak",
    num: "02",
    school: "Chas Academy",
    title: "Gymplanerare · OAK Equipment",
    year: "2024–2025",
    tag: "UX/UI Design",
    color: "#90a590",
    lead: "Från problemformulering till HiFi-prototyp — ett UX/UI-projekt för ett riktigt företag.",
    description:
      "Som UX-designer hade jag möjligheten att genomföra ett projekt tillsammans med mina skolkamrater, där målet var att hitta ett sätt att skapa empati med användaren. Vi fokuserade på att förstå användarens behov — Oak behövde ett 3D-verktyg i desktop där kunden kan planera och se sitt gym i en tredimensionell miljö innan eventuell investering. Vi genomförde intervjuer, datainsamling, workshops och skapade personas innan vi gick vidare till Lo-Fi och HiFi i Figma baserat på OAKs designsystem.",
    links: [
      { label: "Se UX-dokumentation", url: "/OAK-UX.pdf", icon: "↗" },
      { label: "Se UI-dokumentation", url: "/OAK-UI.pdf", icon: "↗" },
    ],
    image: oakImg,
    imageAlt: oakUiImg,
    screens: OAK_SCREENS,
    skills: ["Figma", "UX Research", "Lo-Fi", "HiFi", "Maze", "Personas"],
    uxRole: ["Intervju olika åldersgrupp", "Datainsamling", "Undersökning", "Beteendetyper & personas", "Workshop & syfte", "Idé affischer - Main meny"],
    uiRole: ["Workshop design", "Testa olika versioner av design", "Samarbeta att skapa komponenter", "Gerilla test", "Test av flöden"],
    results: [
      { score: "9/10", text: "Enkelt flöde" },
      { score: "6/10", text: "Ville hoppa direkt till produktsidan" },
      { score: "5/10", text: "Önskar tydligare progressbar" },
    ],
  },
  {
    id: "ehandel",
    num: "03",
    school: "Chas Academy",
    title: "E-handelsprojekt · Solenia",
    year: "2024–2025",
    tag: "Frontend · React",
    color: "#ffa205",
    lead: "Från Figma till React — ett e-handelsprojekt med fokus på responsivitet och samarbete.",
    description:
      "Som frontendutvecklare har jag arbetat med projektet både självständigt och i grupp. Min erfarenhet av HTML, CSS och JavaScript väckte min nyfikenhet för kodspråk. Kunskap i JavaScript och React är avgörande för att UI, UX och frontend ska kunna samverka. I grupprojektet, baserat på API och databaser, följde vi steg från Figma-design till React-komponenter, med fokus på responsivitet och användarvänlighet. GitHub var avgörande för samarbete, justering och kontinuerlig förbättring.",
    links: [
      { label: "Se live — Solenia", url: "https://solenia.netlify.app/", icon: "↗", external: true },
      { label: "GitHub", url: "https://github.com/LordNelson83/Nelson_Portfolio", icon: "↗", external: true },
    ],
    skills: ["React", "JavaScript", "HTML", "CSS", "GitHub", "API", "Figma"],
  },
];

export default function Projekter() {
  const heroRef    = useRef(null);
  const statsRef   = useRef([]);
  const projRefs   = useRef([]);
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

  /* Auto-avance de screenshots OAK */
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setActiveScreen(i => (i + 1) % OAK_SCREENS.length), 3800);
    return () => clearInterval(t);
  }, [isPaused]);

  return (
    <div className="pk-page">

      {/* Grain — idéntico al hero de Home */}
      <div className="pk-grain" aria-hidden="true" />

      {/* Palabra de fondo */}
      <div className="pk-bg-word" aria-hidden="true">Projekt</div>

      {/* ════════════ HERO ════════════ */}
      <header className="pk-hero" ref={heroRef}>
        <p className="pk-hero__eyebrow">Portfolio · Projekt &amp; Erfarenheter</p>
        <h1 className="pk-hero__h1">
          <span>Projekter</span>
        </h1>
        <p className="pk-hero__sub">
          Tre projekt — grafik, UX/UI och frontend. Varje ett steg framåt.
        </p>
        <div className="pk-hero__line" aria-hidden="true" />
      </header>

      {/* ════════════ STATS ════════════ */}
      <div className="pk-stats" role="list">
        {[
          { value: "3",      label: "Projekt · Urval" },
          { value: "UX",     label: "Research · Design" },
          { value: "React",  label: "Frontend · Kod" },
          { value: "Adobe",  label: "Grafisk Produktion" },
        ].map((s, i) => (
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

      {/* ════════════ PROYECTOS ════════════ */}
      <div className="pk-projects">
        {PROJECTS.map((proj, pi) => (
          <section
            key={proj.id}
            className="pk-project"
            ref={el => projRefs.current[pi] = el}
            style={{ "--accent": proj.color }}
          >
            {/* ── Header del proyecto ── */}
            <div className="pk-project__header">
              <span className="pk-project__num">{proj.num}</span>
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

            {/* ── Lead ── */}
            <p className="pk-project__lead">{proj.lead}</p>

            {/* ── Body: imagen/screens izq · texto der ── */}
            <div className={`pk-project__body${proj.id === "oak" ? " pk-project__body--oak" : ""}`}>

              {/* Columna visual */}
              {proj.id === "oak" ? (
                <div
                  className="pk-gallery"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className="pk-gallery__main">
                    {OAK_SCREENS.map((sc, i) => (
                      <div
                        key={i}
                        className={`pk-gallery__slide${i === activeScreen ? " pk-gallery__slide--active" : ""}`}
                      >
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
                  {/* Dots */}
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
              ) : proj.image ? (
                <div className="pk-visual">
                  <div className="pk-visual__img-wrap">
                    <img src={proj.image} alt={proj.title} className="pk-visual__img" />
                    <div className="pk-visual__overlay">
                      <span className="pk-visual__overlay-tag">{proj.tag}</span>
                      <span className="pk-visual__overlay-year">{proj.year}</span>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Columna texto */}
              <div className="pk-project__content">
                <p className="pk-project__desc">{proj.description}</p>

                {/* Rol UX+UI para OAK */}
                {proj.uxRole && (
                  <div className="pk-roles">
                    <div className="pk-role">
                      <p className="pk-role__title">Min roll · UX</p>
                      <ul className="pk-role__list">
                        {proj.uxRole.map(r => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                    <div className="pk-role">
                      <p className="pk-role__title">Min roll · UI</p>
                      <ul className="pk-role__list">
                        {proj.uiRole.map(r => <li key={r}>{r}</li>)}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Resultados OAK */}
                {proj.results && (
                  <div className="pk-results">
                    <p className="pk-results__title">Testresultat</p>
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
                  {proj.skills.map(sk => (
                    <span key={sk} className="pk-skill">{sk}</span>
                  ))}
                </div>

                {/* Links */}
                {proj.links && (
                  <div className="pk-links">
                    {proj.links.map(lnk => (
                      <a
                        key={lnk.label}
                        href={lnk.url}
                        target={lnk.external ? "_blank" : undefined}
                        rel={lnk.external ? "noopener noreferrer" : undefined}
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
        ))}
      </div>

      {/* ════════════ CTA FINAL ════════════ */}
      <section className="pk-cta">
        <div className="pk-cta__left">
          <p className="pk-cta__eyebrow">Vad händer härnäst?</p>
          <h2 className="pk-cta__title">
            Låt oss bygga något <em>extraordinary</em>
          </h2>
        </div>
        <Link to="/kontakta" className="pk-cta__btn">Kontakta mig</Link>
      </section>

    </div>
  );
}
