import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/AhrMotorCase.css";
import { useLang } from "../i18n/LangContext";

import ahr1Img from "../assets/images/ahr_1.png";
import ahr2Img from "../assets/images/ahr_2.png";
import ahr3Img from "../assets/images/ahr_3.png";

export default function AhrMotorCase() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("cs-visible")),
      { threshold: 0.08 }
    );
    sectionsRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const ref = (i) => (el) => { sectionsRef.current[i] = el; };

  return (
    <div className="cs-page">
      <div className="cs-grain" aria-hidden="true" />

      {/* NAV */}
      <nav className="cs-nav">
        <Link to="/grafiskproduktion/1" className="cs-back">
          <span className="cs-back__arrow">←</span>
          Tillbaka till projekt
        </Link>
        <span className="cs-nav__tag">⚙ En utveckling · 2025–2026</span>
      </nav>

      {/* HERO */}
      <header className="cs-hero" ref={ref(0)}>
        <div className="cs-hero__eyebrow">
          <span>Fortnox AB</span>
          <span className="cs-hero__dot" />
          <span>Chas Academy · Examensarbete</span>
          <span className="cs-hero__dot" />
          <span>UX Product Design</span>
        </div>
        <h1 className="cs-hero__title">AHR-Motor</h1>
        <p className="cs-hero__lead">
          Att koppla samman Fortnox Tid, Fakturering och Lön — och ge redovisningsbyråer
          realtidsinsikt i sin lönsamhet, utan Excel, utan att vänta på revisorn.
        </p>
        <div className="cs-meta">
          <div className="cs-meta__item">
            <span className="cs-meta__value">6</span>
            <span className="cs-meta__label">Användarintervjuer</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__value">3</span>
            <span className="cs-meta__label">OST-grenar</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__value">2</span>
            <span className="cs-meta__label">Dev-team validerade</span>
          </div>
          <div className="cs-meta__item">
            <span className="cs-meta__value">2026</span>
            <span className="cs-meta__label">Examenspresentation</span>
          </div>
        </div>
        <div className="cs-hero__line" />
      </header>

      {/* OBJECTIVE */}
      <section className="cs-section" ref={ref(1)}>
        <p className="cs-section__label">— Objective</p>
        <h2 className="cs-section__title">
          Öka byråns nettomarginal med 10–15 %<br />inom 6 månader
        </h2>
        <div className="cs-section__body--2col">
          <div>
            <p className="cs-text--intro">
              Många redovisningsbyråer arbetar med Fortnox produkter dagligen — men de tre
              modulerna Tid, Fakturering och Lön kommunicerar inte med varandra.
            </p>
            <p className="cs-text">
              Det tvingar byråchefer att sammanställa data manuellt i Excel, ofta för sent
              för att kunna agera. När de upptäcker en förlust är det redan för sent.
            </p>
            <p className="cs-text">
              AHR-motorn automatiserar den kopplingen och visar lönsamheten i realtid —
              per kund, per projekt, per konsult.
            </p>
          </div>
          <div className="cs-problem-box">
            <p className="cs-problem-box__label">Problemet i ett citat</p>
            <p className="cs-problem-box__text">
              "Jag vet inte om vi tjänar pengar på den kunden förrän månaden är slut.
              Då är det för sent att göra något åt det."
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="cs-section" ref={ref(2)}>
        <p className="cs-section__label">— Process</p>
        <h2 className="cs-section__title">Continuous Discovery · Teresa Torres</h2>
        <p className="cs-text--intro">
          Metodiken baseras på Continuous Discovery Habits och Product Operating Model (Marty Cagan).
          Varje beslut är förankrat i användarbehov, inte antaganden.
        </p>
        <div className="cs-process">
          {[
            { num: "01", label: "Intervjuer",   detail: "6 byråägare\n& byråledare" },
            { num: "02", label: "OST",          detail: "Opportunity\nSolution Tree" },
            { num: "03", label: "Hypoteser",    detail: "3 grenar\nvaliderade" },
            { num: "04", label: "Feasibility",  detail: "Dev-team\nAvengers & Raiders" },
            { num: "05", label: "Wireframes",   detail: "Happy flow\nFigJam" },
            { num: "06", label: "Hi-Fi",        detail: "Prototyp\npågår" },
          ].map((s, i) => (
            <div key={i} className="cs-process__step" style={{ "--i": i }}>
              <span className="cs-process__num">{s.num}</span>
              <span className="cs-process__label">{s.label}</span>
              <span className="cs-process__detail" style={{ whiteSpace: "pre-line" }}>{s.detail}</span>
              {i < 5 && <span className="cs-process__arrow">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section className="cs-section" ref={ref(3)}>
        <p className="cs-section__label">— Användarforskning</p>
        <h2 className="cs-section__title">6 intervjuer · 2 målgruppssegment</h2>
        <p className="cs-text--intro">
          Intervjuerna genomfördes med byråägare och byråledare på byråer med 1–20 konsulter.
          Fokus låg på hur de idag följer upp lönsamhet och vilka smärtpunkter som uppstår.
        </p>
        <div className="cs-quotes">
          {[
            {
              text: "Jag lägger 2–3 timmar varje månadsslut på att sammanställa data från tre olika ställen.",
              note: "Manuell sammanställning = förlorad fakturerbar tid",
              name: "Byråägare A", company: "Generalistbyrå · 8 konsulter", i: 0
            },
            {
              text: "Vi vet sällan om ett projekt är lönsamt förrän det är klart. Då är det för sent att styra.",
              note: "Retroaktiv uppföljning = ingen möjlighet att agera",
              name: "Byråledare B", company: "Specialistbyrå · 15 konsulter", i: 1
            },
            {
              text: "Det som saknas är en vy som visar beläggning och lönsamhet tillsammans, i realtid.",
              note: "Behov av integrerad vy = kärnan av AHR-motorn",
              name: "Byråägare C", company: "Digital byrå · 12 konsulter", i: 2
            },
          ].map((q) => (
            <blockquote key={q.i} className="cs-quote" style={{ "--i": q.i }}>
              <p className="cs-quote__text">"{q.text}"</p>
              <p className="cs-quote__note">💡 {q.note}</p>
              <footer className="cs-quote__footer">
                <span className="cs-quote__name">{q.name}</span>
                <span className="cs-quote__company">{q.company}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="cs-insight-callout" ref={ref(4)}>
          <p className="cs-insight-callout__label">Nyckelinsikt</p>
          <p className="cs-insight-callout__text">
            Problemet är inte brist på data — det är att datan finns i tre separata system
            som aldrig pratar med varandra. Byråchefen saknar en sammanhållen vy som visar
            lönsamhet, beläggning och AHR i realtid.
          </p>
        </div>
      </section>

      {/* OST */}
      <section className="cs-section" ref={ref(5)}>
        <p className="cs-section__label">— Opportunity Solution Tree</p>
        <h2 className="cs-section__title">3 grenar · validerade med användare</h2>
        <p className="cs-text--intro">
          OST-metoden av Teresa Torres användes för att strukturera möjligheter och lösningar
          utifrån det övergripande produktmålet.
        </p>
        <div className="cs-ost">
          <div className="cs-ost__root">
            <p className="cs-ost__root-label">Product Outcome</p>
            <p className="cs-ost__root-text">
              Öka byråns genomsnittliga nettomarginal med 10–15 % inom 6 månader
            </p>
          </div>
          <div className="cs-ost__connector" />
          <div className="cs-ost__branches">
            {[
              { num: "01", title: "Resursplanering", desc: "Visa beläggning per konsult i realtid så chefen kan fördela arbete optimalt." },
              { num: "02", title: "Lönsamhet per kund", desc: "Koppla tid och fakturering per kund för att synliggöra vilka kunder som är lönsamma." },
              { num: "03", title: "AHR-uppföljning", desc: "Beräkna genomsnittlig timpenning automatiskt och varna vid avvikelser." },
            ].map(b => (
              <div key={b.num} className="cs-ost__branch">
                <span className="cs-ost__branch-num">{b.num}</span>
                <h3 className="cs-ost__branch-title">{b.title}</h3>
                <p className="cs-ost__branch-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGES */}
      <section className="cs-section" ref={ref(6)}>
        <p className="cs-section__label">— Designprocess · In progress</p>
        <h2 className="cs-section__title">Från insikt till koncept</h2>
        <p className="cs-text--intro">
          Arbetet pågår. Nedan visas tre artefakter från den pågående processen.
        </p>
        <div className="cs-images">
          {[
            { src: ahr1Img, caption: "Användarsegment · Fortnox-ekosystem" },
            { src: ahr2Img, caption: "Product Outcome · OST-karta" },
            { src: ahr3Img, caption: "Opportunity Solution Tree · Teresa Torres" },
          ].map((img, i) => (
            <div key={i} className="cs-image-wrap">
              <img src={img.src} alt={img.caption} className="cs-image" />
              <p className="cs-image__caption">{img.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEASIBILITY */}
      <section className="cs-section" ref={ref(7)}>
        <p className="cs-section__label">— Teknisk Feasibility</p>
        <h2 className="cs-section__title">Validerat med 2 Fortnox dev-team</h2>
        <div className="cs-section__body--2col">
          <div>
            <p className="cs-text--intro">
              Konceptet validerades som tekniskt genomförbart av två interna dev-team på Fortnox.
            </p>
            <p className="cs-text">
              Integrationen kräver tillgång till API:er för Tid, Fakturering och Lön —
              alla tillgängliga inom Fortnox plattform. Steg 1 fokuserar på byråer med
              upp till 20 konsulter.
            </p>
          </div>
          <div className="cs-teams">
            {[
              { name: "Team Avengers", role: "Validerade Tid & Fakturering-integration" },
              { name: "Team Raiders",  role: "Validerade Lön-koppling & datamodell" },
            ].map(t => (
              <div key={t.name} className="cs-team">
                <span className="cs-team__name">{t.name}</span>
                <span className="cs-team__role">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIP */}
      <section className="cs-section cs-section--wip" ref={ref(8)}>
        <p className="cs-section__label">— Status · En utveckling</p>
        <h2 className="cs-section__title">Nästa steg</h2>
        <div className="cs-wip-steps">
          {[
            { label: "Användarintervjuer (6/6)",         status: "done"   },
            { label: "Opportunity Solution Tree",         status: "done"   },
            { label: "Teknisk feasibility-validering",    status: "done"   },
            { label: "Happy flow · FigJam wireframes",    status: "done"   },
            { label: "Hi-Fi prototyp · Figma",            status: "active" },
            { label: "Användartestning av prototyp",      status: "pending"},
            { label: "Examenspresentation · Juni 2026",   status: "pending"},
          ].map((s, i) => (
            <div key={i} className={`cs-wip-step cs-wip-step--${s.status}`}>
              <span className="cs-wip-step__dot" />
              {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="cs-section" ref={ref(9)}>
        <p className="cs-section__label">— Kompetenser</p>
        <div className="cs-skills">
          {["UX Research", "Continuous Discovery", "OST · Teresa Torres", "POM · Marty Cagan",
            "Figma", "FigJam", "User Interviews", "Opportunity Mapping", "Fortnox API",
            "Feasibility Analysis", "WCAG", "Product Strategy"].map(s => (
            <span key={s} className="cs-skill">{s}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cs-cta" ref={ref(10)}>
        <p className="cs-cta__text">Vill du veta mer om projektet?</p>
        <Link to="/kontakta" className="cs-cta__btn">
          Kontakta mig →
        </Link>
      </div>
    </div>
  );
}
