import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/OakCase.css";
import { useLang } from "../i18n/LangContext";

import oak1Img from "../assets/images/oak_1.webp";
import oak2Img from "../assets/images/oak_2.webp";
import oak3Img from "../assets/images/oak_3.webp";
import oak4Img from "../assets/images/oak_4.webp";
import oak5Img from "../assets/images/oak_5.webp";

const IMGS = [oak1Img, oak2Img, oak3Img, oak4Img, oak5Img];

export default function OakCase() {
  const { t } = useLang();
  const heroRef  = useRef(null);
  const sectRefs = useRef([]);
  const [activeScreen, setActiveScreen] = useState(0);
  const [isPaused, setIsPaused]         = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("oc-visible")),
      { threshold: 0.07 }
    );
    [heroRef.current, ...sectRefs.current].filter(Boolean).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setActiveScreen(i => (i + 1) % IMGS.length), 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const addRef = (el, i) => { sectRefs.current[i] = el; };

  const meta         = t("oakCase", "meta");
  const screens      = t("oakCase", "screens");
  const briefItems   = t("oakCase", "briefItems");
  const processSteps = t("oakCase", "processSteps");
  const needs        = t("oakCase", "needs");
  const quotes       = t("oakCase", "quotes");
  const personas     = t("oakCase", "personas");
  const designSystem = t("oakCase", "designSystem");
  const iterations   = t("oakCase", "iterations");
  const resultStats  = t("oakCase", "resultStats");
  const a11yPoints   = t("oakCase", "a11yPoints");
  const skills       = t("oakCase", "skills");

  return (
    <div className="oc-page">
      <div className="oc-grain" aria-hidden="true" />

      {/* ── NAV ── */}
      <nav className="oc-nav" aria-label="Sidnavigation">
        <Link to="/grafiskproduktion/1" className="oc-back">
          <span className="oc-back__arrow" aria-hidden="true">←</span>
          <span>{t("oakCase", "back")}</span>
        </Link>
        <span className="oc-nav__tag">{t("oakCase", "navTag")}</span>
      </nav>

      {/* ── HERO ── */}
      <header className="oc-hero" ref={heroRef}>
        <div className="oc-hero__eyebrow">
          <span>OAK Equipments</span>
          <span className="oc-hero__dot" aria-hidden="true" />
          <span>Chas Academy</span>
        </div>
        <h1 className="oc-hero__title">{t("oakCase", "heroTitle")}</h1>
        <p className="oc-hero__lead">{t("oakCase", "heroLead")}</p>

        <div className="oc-meta" role="list">
          {meta.map(m => (
            <div key={m.label} className="oc-meta__item" role="listitem">
              <span className="oc-meta__value">{m.value}</span>
              <span className="oc-meta__label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="oc-hero__line" aria-hidden="true" />
      </header>

      {/* ── UTMANING ── */}
      <section className="oc-section" ref={el => addRef(el, 0)} aria-label={t("oakCase", "challengeLabel")}>
        <div className="oc-section__label">{t("oakCase", "challengeLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "challengeTitle")}</h2>
        <div className="oc-section__body oc-section__body--2col">
          <div>
            <p className="oc-text">{t("oakCase", "challengeP1")}</p>
            <p className="oc-text">{t("oakCase", "challengeP2")}</p>
          </div>
          <div className="oc-brief-box">
            <p className="oc-brief-box__label">{t("oakCase", "briefLabel")}</p>
            <div className="oc-brief-box__items">
              {briefItems.map((item, i) => (
                <div key={i} className="oc-brief-item">
                  <span className="oc-brief-item__icon" aria-hidden="true">○</span>
                  <span><strong>{item.strong}</strong>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="oc-section" ref={el => addRef(el, 1)} aria-label={t("oakCase", "processLabel")}>
        <div className="oc-section__label">{t("oakCase", "processLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "processTitle")}</h2>
        <div className="oc-process" role="list">
          {processSteps.map((s, i) => (
            <div key={s.num} className="oc-process__step" role="listitem" style={{ "--i": i }}>
              <span className="oc-process__num" aria-hidden="true">{s.num}</span>
              <span className="oc-process__label">{s.label}</span>
              <span className="oc-process__detail">{s.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSIKTER ── */}
      <section className="oc-section" ref={el => addRef(el, 2)} aria-label={t("oakCase", "insightsLabel")}>
        <div className="oc-section__label">{t("oakCase", "insightsLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "insightsTitle")}</h2>
        <p className="oc-text oc-text--intro">{t("oakCase", "insightsIntro")}</p>

        <div className="oc-needs" role="list">
          {needs.map(n => (
            <div key={n.label} className="oc-need" role="listitem">
              <span className="oc-need__score">{n.score}</span>
              <p className="oc-need__label">{n.label}</p>
              <p className="oc-need__desc">{n.desc}</p>
            </div>
          ))}
        </div>

        <div className="oc-quotes" role="list">
          {quotes.map((q, i) => (
            <blockquote key={i} className="oc-quote" style={{ "--i": i }} role="listitem">
              <p className="oc-quote__type">{q.type}</p>
              <p className="oc-quote__text">"{q.quote}"</p>
              <footer className="oc-quote__footer">
                <span className="oc-quote__persona">— {q.persona}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="oc-insight-callout">
          <p className="oc-insight-callout__label">{t("oakCase", "calloutLabel")}</p>
          <p className="oc-insight-callout__text">{t("oakCase", "calloutText")}</p>
        </div>
      </section>

      {/* ── BETEENDETYPER ── */}
      <section className="oc-section" ref={el => addRef(el, 3)} aria-label={t("oakCase", "personasLabel")}>
        <div className="oc-section__label">{t("oakCase", "personasLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "personasTitle")}</h2>
        <div className="oc-personas">
          {personas.map(p => (
            <div key={p.name} className="oc-persona">
              <p className="oc-persona__name">{p.name}</p>
              <p className="oc-persona__tagline">{p.tagline}</p>
              <p className="oc-persona__desc">{p.desc}</p>
              <div className="oc-persona__need">{p.need}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESIGN ── */}
      <section className="oc-section" ref={el => addRef(el, 4)} aria-label={t("oakCase", "designLabel")}>
        <div className="oc-section__label">{t("oakCase", "designLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "designTitle")}</h2>

        <div className="oc-ds">
          <div className="oc-ds__colors" role="list" aria-label={t("oakCase", "designLabel")}>
            {designSystem.map(c => (
              <div key={c.hex} className="oc-ds__color" role="listitem">
                <div
                  className="oc-ds__swatch"
                  style={{ background: c.hex }}
                  aria-label={`${c.label} ${c.name}, hex ${c.hex}`}
                />
                <span className="oc-ds__hex">{c.hex}</span>
                <span className="oc-ds__name">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="oc-ds__typo">
            <p className="oc-ds__typo-label">Typografi</p>
            <p className="oc-ds__typo-name">{t("oakCase", "typoName")}</p>
            <p className="oc-ds__typo-note">{t("oakCase", "typoNote")}</p>
          </div>
        </div>

        <div
          className="oc-gallery"
          aria-label={t("oakCase", "galleryLabel")}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="oc-gallery__main" aria-live="polite" aria-atomic="true">
            {IMGS.map((img, i) => (
              <div
                key={i}
                className={`oc-gallery__slide${i === activeScreen ? " oc-gallery__slide--active" : ""}`}
                aria-hidden={i !== activeScreen}
              >
                <img src={img} alt={screens[i]?.alt ?? ""} className="oc-gallery__img" loading="lazy" />
                <p className="oc-gallery__caption" aria-hidden="true">{screens[i]?.label ?? ""}</p>
              </div>
            ))}
            <span className="oc-gallery__counter" aria-hidden="true">
              {String(activeScreen + 1).padStart(2, "0")} / {String(IMGS.length).padStart(2, "0")}
            </span>
            <button
              className="oc-gallery__nav oc-gallery__nav--prev"
              onClick={() => setActiveScreen(i => (i - 1 + IMGS.length) % IMGS.length)}
              aria-label={t("oakCase", "prevLabel")}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              className="oc-gallery__nav oc-gallery__nav--next"
              onClick={() => setActiveScreen(i => (i + 1) % IMGS.length)}
              aria-label={t("oakCase", "nextLabel")}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
          <div className="oc-gallery__dots" role="tablist" aria-label={t("oakCase", "dotsLabel")}>
            {IMGS.map((_, i) => (
              <button
                key={i}
                role="tab"
                className={`oc-gallery__dot${i === activeScreen ? " oc-gallery__dot--active" : ""}`}
                onClick={() => setActiveScreen(i)}
                aria-label={`${i + 1}: ${screens[i]?.label ?? ""}`}
                aria-selected={i === activeScreen}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEST & ITERATIONER ── */}
      <section className="oc-section" ref={el => addRef(el, 5)} aria-label={t("oakCase", "testLabel")}>
        <div className="oc-section__label">{t("oakCase", "testLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "testTitle")}</h2>
        <p className="oc-text">
          {t("oakCase", "testP")} <strong>{t("oakCase", "testStrong")}</strong> {t("oakCase", "testP2")}
        </p>

        <div className="oc-iterations" role="list">
          {iterations.map((it, i) => (
            <div key={i} className="oc-iteration" role="listitem" style={{ "--oak-accent": "#90a590" }}>
              <div className="oc-iteration__header">
                <span className="oc-iteration__score">{it.num}</span>
                <p className="oc-iteration__problem">{it.problem}</p>
              </div>
              <div className="oc-iteration__solution">
                <span className="oc-iteration__solution-label" aria-hidden="true">{t("oakCase", "actionLabel")}</span>
                <p>{it.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESULTAT ── */}
      <section className="oc-section oc-section--result" ref={el => addRef(el, 6)} aria-label={t("oakCase", "resultLabel")}>
        <div className="oc-section__label">{t("oakCase", "resultLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "resultTitle")}</h2>
        <p className="oc-text">{t("oakCase", "resultP")}</p>
        <div className="oc-result-stats" role="list">
          {resultStats.map(r => (
            <div key={r.label} className="oc-result-stat" role="listitem">
              <span className="oc-result-stat__value">{r.value}</span>
              <span className="oc-result-stat__label">{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACCESSIBILITY ── */}
      <section className="oc-section" ref={el => addRef(el, 7)} aria-label={t("oakCase", "a11yTitle")}>
        <div className="oc-section__label">{t("oakCase", "a11yLabel")}</div>
        <h2 className="oc-section__title">{t("oakCase", "a11yTitle")}</h2>
        <ul className="oc-a11y-list" aria-label={t("oakCase", "a11yTitle")}>
          {a11yPoints.map((point, i) => (
            <li key={i} className="oc-a11y-item">{point}</li>
          ))}
        </ul>
      </section>

      {/* ── SKILLS ── */}
      <section className="oc-section" ref={el => addRef(el, 8)} aria-label="Skills">
        <div className="oc-skills" role="list">
          {skills.map(sk => (
            <span key={sk} className="oc-skill" role="listitem">{sk}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <footer className="oc-cta" aria-label="Kontakt">
        <p className="oc-cta__text">{t("oakCase", "ctaText")}</p>
        <Link to="/kontakta" className="oc-cta__btn">{t("oakCase", "ctaBtn")}</Link>
      </footer>

    </div>
  );
}
