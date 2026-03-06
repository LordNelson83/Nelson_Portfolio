import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/UxUiDesign.css";

/* ══════════════════════════════════════════════════════════
   UX/UI DESIGN — Figma: 8:57
   Movido de /profil → /uxuidesign/:id
   bg #1E1E1E · mismo sistema que Home (2:228)
   ══════════════════════════════════════════════════════════ */

const STATS = [
  { value: "2+",   label: "År UX & Design"                   },
  { value: "POM",  label: "Marty Cagan · Product Model"      },
  { value: "OST",  label: "Teresa Torres · Opportunity Tree" },
  { value: "WCAG", label: "EU-direktiv · Tillgänglighet"     },
];

const SECTIONS = [
  {
    id: "uxui",
    num: "01",
    eyebrow: "Utbildning · 2024–2026",
    institution: "Chas Academy",
    title: "UX & Frontendutveckling",
    tag: "UX Design",
    paragraphs: [
      "På Chas Academy har jag byggt en bred grund inom UX-design och frontendutveckling. Utbildningen kombinerar designtänkande, kodning och agila arbetsmetoder – vilket ger mig förmågan att förstå hela produktresan, från användarens behov till teknisk implementation.",
      "Genom utbildningen har jag arbetat aktivt med tillgänglighet enligt EU:s direktiv och WCAG-riktlinjer, för att säkerställa att digitala tjänster fungerar för alla – inklusive personer med funktionsnedsättning. Det är inte bara ett krav, det är en del av hur jag tänker kring design.",
      "Under min praktik fick jag möta en ny dimension av produktutveckling: Product Operating Model (POM) av Marty Cagan och Opportunity Solution Tree (OST) av Teresa Torres. Dessa metoder förändrade hur jag ser på produktarbete – inte som en leveranslista, utan som ett kontinuerligt samtal med användaren. Nära, nyfiket och evidensbaserat.",
      "Mitt mål är tydligt: att arbeta som UX Product Designer – med kodkunskap som ett extra lager av förståelse, inte som huvudroll.",
    ],
  },
  {
    id: "frontend",
    num: "02",
    eyebrow: "Kompetens · 2024–2026",
    institution: "Frontend",
    title: "Kod som kommunikation",
    tag: "Frontend Dev",
    paragraphs: [
      "Kodning öppnade en ny del av mig. Genom HTML, CSS och JavaScript lärde jag mig inte bara hur produkter byggs – jag lärde mig att tänka som en utvecklare, vilket gör mig till en bättre designer.",
      "Idag har jag grundläggande kunskaper inom responsiv webbutveckling, client-server-arkitektur, API:er och CMS-system. Men det viktigaste jag tog med mig är förståelsen för hur design och kod möts – och hur den gränsen påverkar användarupplevelsen.",
      "I mitt designarbete använder jag Figma och Maze som centrala verktyg. Med Maze kan jag snabbt validera prototyper med riktiga användare, till låg kostnad och hög hastighet. Det accelererar beslutsfattandet och gör att produkten formas av faktiskt beteende – inte antaganden.",
      "Programmering gav mig två språk. Men mitt hem är i designen.",
    ],
  },
];

export default function UxUiDesign() {
  const statsRef    = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    [...statsRef.current, ...sectionsRef.current].forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="profil-page">

      <div className="profil-grain"   aria-hidden="true" />
      <div className="profil-bg-word" aria-hidden="true">UX</div>

      {/* HERO */}
      <header className="profil-hero">
        <p className="profil-hero__eyebrow">Kompetens &amp; Utbildning</p>
        <h1 className="profil-hero__h1">
          <span>UX/UI Design &amp;</span>
          <span><em>Frontend</em></span>
        </h1>
        <p className="profil-hero__sub">
          Junior Product &amp; UX/UI Designer · Chas Academy 2024–2026
        </p>
        <div className="profil-hero__accent-line" aria-hidden="true" />
      </header>

      {/* STATS */}
      <div className="profil-stats" role="list">
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className="profil-stat"
            role="listitem"
            ref={el => statsRef.current[i] = el}
            style={{ "--delay": `${i * 0.1}s` }}
          >
            <span className="profil-stat__value">{s.value}</span>
            <span className="profil-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* SECCIONES */}
      <div className="profil-sections">
        {SECTIONS.map((sec, i) => (
          <article
            key={sec.id}
            className="profil-section"
            ref={el => sectionsRef.current[i] = el}
            style={{ "--delay": `${i * 0.15}s` }}
          >
            <div className="profil-section__left">
              <span className="profil-section__num">{sec.num}</span>
              <div className="profil-section__header">
                <p className="profil-section__eyebrow">{sec.eyebrow}</p>
                <div className="profil-section__title-group">
                  <p className="profil-section__institution">{sec.institution}</p>
                  <h2 className="profil-section__title">{sec.title}</h2>
                </div>
                <div className="profil-section__divider" aria-hidden="true" />
              </div>
            </div>
            <div className="profil-section__right">
              {sec.paragraphs.map((p, j) => (
                <p key={j} className={`profil-section__para${j === 0 ? " profil-section__para--lead" : ""}`}>
                  {p}
                </p>
              ))}
              <span className="profil-section__tag">{sec.tag}</span>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="profil-cta">
        <div className="profil-cta__left">
          <p className="profil-cta__eyebrow">Redo att samarbeta?</p>
          <h2 className="profil-cta__title">
            Låt oss bygga något <em>extraordinary</em>
          </h2>
        </div>
        <Link to="/kontakta" className="profil-cta__btn">
          Kontakta mig
        </Link>
      </section>

    </div>
  );
}
