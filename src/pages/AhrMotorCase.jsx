import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/AhrMotorCase.css";

import ahr1Img from "../assets/images/ahr_1.png";
import ahr2Img from "../assets/images/ahr_2.png";
import ahr3Img from "../assets/images/ahr_3.png";

// ── Data ──────────────────────────────────────────────────────────────────

const QUOTES = [
  {
    name: "Olle Åberg",
    company: "Ekonomi Nord",
    quote: "Vi jobbar lite all over the place. Det som är problemet för oss som ledare är att man inte kan få allt på ett ställe.",
  },
  {
    name: "Amando Morino",
    company: "Vikta Partner",
    quote: "Vi vill ha ett och samma system. Det sparar tid, pengar, huvudvärk.",
  },
  {
    name: "Pernilla Jansson",
    company: "Byråledare",
    quote: "Hundra procent, ja absolut. Bara skicka inloggning.",
    note: "Svar på frågan om hon skulle byta ut Excel om systemet levererade samma information i realtid.",
  },
];

const OST_BRANCHES = [
  {
    num: "01",
    title: "Synlighetsgren",
    desc: "Byråledaren saknar realtidsöverblick över nettomarginalen per kund.",
    color: "#00a6b4",
  },
  {
    num: "02",
    title: "Lönsamhetsblindhet",
    desc: "Det går inte att skilja lönsamt arbete från olönsamt arbete i realtid.",
    color: "#00a6b4",
  },
  {
    num: "03",
    title: "Nödavdelning",
    desc: "Bristen på kopplingar mellan Fortnox Tid, Fakturering och Lön tvingar byråer att arbeta manuellt i mörkret.",
    color: "#00a6b4",
  },
];

const PROCESS_STEPS = [
  { num: "01", label: "Desk research", detail: "Fortnox ekosystem & marknad" },
  { num: "02", label: "6 intervjuer", detail: "Byråägare & byråledare" },
  { num: "03", label: "Syntes", detail: "Insikter & beteendemönster" },
  { num: "04", label: "OST", detail: "Opportunity Solution Tree" },
  { num: "05", label: "Feasibility", detail: "Avengers & Raiders teams" },
  { num: "06", label: "Happy flow", detail: "Prototyp under arbete" },
];

const META = [
  { value: "6", label: "Användarintervjuer" },
  { value: "3", label: "OST-grenar" },
  { value: "2", label: "Fortnox-team" },
  { value: "10–15%", label: "Nettomarginal mål" },
];

export default function AhrMotorCase() {
  const heroRef    = useRef(null);
  const sectRefs   = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("cs-visible")),
      { threshold: 0.07 }
    );
    [heroRef.current, ...sectRefs.current].filter(Boolean).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRef = (el, i) => { sectRefs.current[i] = el; };

  return (
    <div className="cs-page">
      <div className="cs-grain" aria-hidden="true" />

      {/* ── BACK ── */}
      <nav className="cs-nav">
        <Link to="/projekter" className="cs-back">
          <span className="cs-back__arrow">←</span>
          <span>Tillbaka till projekt</span>
        </Link>
        <span className="cs-nav__tag">⚙ Under arbete · Examensarbete 2025–2026</span>
      </nav>

      {/* ── HERO ── */}
      <header className="cs-hero" ref={heroRef}>
        <div className="cs-hero__eyebrow">
          <span>Fortnox</span>
          <span className="cs-hero__dot" aria-hidden="true" />
          <span>Chas Academy</span>
        </div>
        <h1 className="cs-hero__title">AHR-Motor</h1>
        <p className="cs-hero__lead">
          Att ge redovisningsbyråer realtidsöverblick över lönsamhet — 
          genom att koppla samman Fortnox Tid, Lön och Fakturering.
        </p>

        {/* Meta stats */}
        <div className="cs-meta" role="list">
          {META.map(m => (
            <div key={m.label} className="cs-meta__item" role="listitem">
              <span className="cs-meta__value">{m.value}</span>
              <span className="cs-meta__label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="cs-hero__line" aria-hidden="true" />
      </header>

      {/* ── PROBLEMET ── */}
      <section className="cs-section" ref={el => addRef(el, 0)}>
        <div className="cs-section__label">— Problemet</div>
        <h2 className="cs-section__title">Byråledare arbetade i mörkret</h2>
        <div className="cs-section__body cs-section__body--2col">
          <div>
            <p className="cs-text">
              Många redovisningsbyråer i Sverige använder Fortnox produkter dagligen — 
              Tid för tidrapportering, Fakturering för klientfakturor och Lön för 
              personalkostnader. Men dessa tre produkter kommunicerar inte med varandra.
            </p>
            <p className="cs-text">
              Konsekvensen: byråledare vet inte om de tjänar eller förlorar pengar på 
              en kund förrän månader efter. Tre månaders icke-fakturerat arbete kan gå 
              förlorat innan avvikelsen syns.
            </p>
          </div>
          <div className="cs-problem-box">
            <p className="cs-problem-box__label">Universellt mönster</p>
            <p className="cs-problem-box__text">
              Samtliga fem byråer vi intervjuade delar samma grundproblem: data om 
              arbetad tid, personalkostnader och fakturerade intäkter lever i separata 
              system — konsekvensen är ett universellt Excel-beroende.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="cs-section" ref={el => addRef(el, 1)}>
        <div className="cs-section__label">— Metod</div>
        <h2 className="cs-section__title">Från research till lösningshypotes</h2>
        <div className="cs-process">
          {PROCESS_STEPS.map((s, i) => (
            <div key={s.num} className="cs-process__step" style={{ "--i": i }}>
              <span className="cs-process__num">{s.num}</span>
              <span className="cs-process__label">{s.label}</span>
              <span className="cs-process__detail">{s.detail}</span>
              {i < PROCESS_STEPS.length - 1 && (
                <span className="cs-process__arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── INSIKTER ── */}
      <section className="cs-section" ref={el => addRef(el, 2)}>
        <div className="cs-section__label">— Insikter från forskning</div>
        <h2 className="cs-section__title">Vad byråledarna berättade</h2>
        <p className="cs-text cs-text--intro">
          Vi genomförde 6 djupintervjuer med byråägare och byråledare på 
          redovisningsbyråer med upp till 20 konsulter. Det som överraskade 
          mest var inte att de saknade rätt verktyg — det var att de hade 
          vant sig vid att arbeta utan dem.
        </p>

        <div className="cs-quotes">
          {QUOTES.map((q, i) => (
            <blockquote key={i} className="cs-quote" style={{ "--i": i }}>
              <p className="cs-quote__text">"{q.quote}"</p>
              {q.note && <p className="cs-quote__note">{q.note}</p>}
              <footer className="cs-quote__footer">
                <span className="cs-quote__name">{q.name}</span>
                <span className="cs-quote__company">{q.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Normaliserad smärta */}
        <div className="cs-insight-callout" ref={el => addRef(el, 3)}>
          <p className="cs-insight-callout__label">Nyckelinsikt — normaliserad smärta</p>
          <p className="cs-insight-callout__text">
            Olle hade byggt sitt eget system i Excel. Ernst bar hela kunskapen i huvudet. 
            Marianna fördelade kunder på känsla. Ingen av dem upplevde det som en kris — 
            för det var så det alltid hade fungerat. Det är den typen av normaliserad smärta 
            som är svårast att designa för, och mest värd att lösa.
          </p>
        </div>
      </section>

      {/* ── OST ── */}
      <section className="cs-section" ref={el => addRef(el, 4)}>
        <div className="cs-section__label">— Opportunity Solution Tree</div>
        <h2 className="cs-section__title">Tre grenar, ett rotproblem</h2>
        <p className="cs-text">
          Baserat på intervjuinsikterna byggde vi ett Opportunity Solution Tree 
          enligt Teresa Torres metodik. Tre huvudgrenar identifierades.
        </p>

        <div className="cs-ost">
          {/* Rot */}
          <div className="cs-ost__root">
            <p className="cs-ost__root-label">Product Outcome</p>
            <p className="cs-ost__root-text">
              Öka redovisningsbyråns genomsnittliga nettomarginal med 10–15 % 
              inom 6 månader
            </p>
          </div>
          <div className="cs-ost__connector" aria-hidden="true" />
          {/* Grenar */}
          <div className="cs-ost__branches">
            {OST_BRANCHES.map((b) => (
              <div key={b.num} className="cs-ost__branch">
                <span className="cs-ost__branch-num">{b.num}</span>
                <p className="cs-ost__branch-title">{b.title}</p>
                <p className="cs-ost__branch-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imágenes del proceso */}
        <div className="cs-images">
          {[ahr1Img, ahr2Img, ahr3Img].map((src, i) => (
            <div key={i} className="cs-image-wrap">
              <img
                src={src}
                alt={["Opportunity Solution Tree", "Product Outcome & OST-karta", "Användarsegment · Fortnox-ekosystem"][i]}
                className="cs-image"
                loading="lazy"
              />
              <p className="cs-image__caption">
                {["Opportunity Solution Tree · Teresa Torres", "Product Outcome · OST-karta", "Användarsegment · Fortnox-ekosystem"][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEKNISK VALIDERING ── */}
      <section className="cs-section" ref={el => addRef(el, 5)}>
        <div className="cs-section__label">— Teknisk feasibility</div>
        <h2 className="cs-section__title">Validerat med Fortnox-teamen</h2>
        <div className="cs-section__body cs-section__body--2col">
          <div>
            <p className="cs-text">
              Konceptet validerades i dialog med två interna Fortnox-team — 
              Avengers och Raiders — för att säkerställa teknisk genomförbarhet 
              innan vi investerade i Hi-Fi design.
            </p>
            <p className="cs-text">
              Resultatet: konceptet bedömdes som genomförbart inom Fortnox 
              befintliga arkitektur. Nästa steg är ett interaktivt Hi-Fi-prototyp 
              baserat på det happy flow som nu dokumenteras.
            </p>
          </div>
          <div className="cs-teams">
            <div className="cs-team">
              <span className="cs-team__name">Team Avengers</span>
              <span className="cs-team__role">Fortnox Tid & Fakturering</span>
            </div>
            <div className="cs-team">
              <span className="cs-team__name">Team Raiders</span>
              <span className="cs-team__role">Fortnox Lön & Integrationer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATUS ── */}
      <section className="cs-section cs-section--wip" ref={el => addRef(el, 6)}>
        <div className="cs-section__label">— Status</div>
        <h2 className="cs-section__title">Under arbete — examensarbete juni 2026</h2>
        <div className="cs-wip-steps">
          {[
            { label: "Användarforskning", done: true },
            { label: "Opportunity Solution Tree", done: true },
            { label: "Teknisk feasibility", done: true },
            { label: "Happy flow & dokumentation", done: false, active: true },
            { label: "Hi-Fi prototyp i Figma", done: false },
            { label: "Användningstest & iteration", done: false },
          ].map((s, i) => (
            <div key={i} className={`cs-wip-step${s.done ? " cs-wip-step--done" : ""}${s.active ? " cs-wip-step--active" : ""}`}>
              <span className="cs-wip-step__dot" aria-hidden="true" />
              <span className="cs-wip-step__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="cs-section" ref={el => addRef(el, 7)}>
        <div className="cs-skills">
          {["UX Research", "Djupintervjuer", "OST", "POM", "Teresa Torres", "Marty Cagan", "Figma", "Fortnox"].map(sk => (
            <span key={sk} className="cs-skill">{sk}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cs-cta">
        <p className="cs-cta__text">Nyfiken på projektet eller processen?</p>
        <Link to="/kontakta" className="cs-cta__btn">Kontakta mig</Link>
      </section>

    </div>
  );
}
