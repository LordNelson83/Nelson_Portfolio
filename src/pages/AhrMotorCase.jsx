import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/AhrMotorCase.css";
import { useLang } from "../i18n/LangContext";

import ahr1Img from "../assets/images/ahr_1.png";
import ahr2Img from "../assets/images/ahr_2.png";
import ahr3Img from "../assets/images/ahr_3.png";

const IMGS = [ahr1Img, ahr2Img, ahr3Img];

export default function AhrMotorCase() {
  const { t } = useLang();
  const heroRef  = useRef(null);
  const sectRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("cs-visible")),
      { threshold: 0.07 }
    );
    [heroRef.current, ...sectRefs.current].filter(Boolean).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRef = (el, i) => { sectRefs.current[i] = el; };

  const meta         = t("ahrMotor", "meta");
  const processSteps = t("ahrMotor", "processSteps");
  const quotes       = t("ahrMotor", "quotes");
  const ostBranches  = t("ahrMotor", "ostBranches");
  const imgAlts      = t("ahrMotor", "imgAlts");
  const imgCaptions  = t("ahrMotor", "imgCaptions");
  const teams        = t("ahrMotor", "teams");
  const statusSteps  = t("ahrMotor", "statusSteps");
  const a11yPoints   = t("ahrMotor", "a11yPoints");
  const skills       = t("ahrMotor", "skills");

  return (
    <div className="cs-page">
      <div className="cs-grain" aria-hidden="true" />

      {/* ── BACK ── */}
      <nav className="cs-nav">
        <Link to="/grafiskproduktion/1" className="cs-back">
          <span className="cs-back__arrow">←</span>
          <span>{t("ahrMotor", "back")}</span>
        </Link>
        <span className="cs-nav__tag">{t("ahrMotor", "navTag")}</span>
      </nav>

      {/* ── HERO ── */}
      <header className="cs-hero" ref={heroRef}>
        <div className="cs-hero__eyebrow">
          <span>Fortnox</span>
          <span className="cs-hero__dot" aria-hidden="true" />
          <span>Chas Academy</span>
        </div>
        <h1 className="cs-hero__title">Byråanalys</h1>
        <p className="cs-hero__subtitle">tidigare AHR-Motor</p>
        <p className="cs-hero__lead">{t("ahrMotor", "heroLead")}</p>

        <div className="cs-meta" role="list">
          {meta.map(m => (
            <div key={m.label} className="cs-meta__item" role="listitem">
              <span className="cs-meta__value">{m.value}</span>
              <span className="cs-meta__label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="cs-hero__line" aria-hidden="true" />
      </header>

      {/* ── PROBLEM ── */}
      <section className="cs-section" ref={el => addRef(el, 0)}>
        <div className="cs-section__label">{t("ahrMotor", "problemLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "problemTitle")}</h2>
        <div className="cs-section__body cs-section__body--2col">
          <div>
            <p className="cs-text">{t("ahrMotor", "problemP1")}</p>
            <p className="cs-text">{t("ahrMotor", "problemP2")}</p>
          </div>
          <div className="cs-problem-box">
            <p className="cs-problem-box__label">{t("ahrMotor", "problemBoxLabel")}</p>
            <p className="cs-problem-box__text">{t("ahrMotor", "problemBoxText")}</p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="cs-section" ref={el => addRef(el, 1)}>
        <div className="cs-section__label">{t("ahrMotor", "processLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "processTitle")}</h2>
        <div className="cs-process">
          {processSteps.map((s, i) => (
            <div key={s.num} className="cs-process__step" style={{ "--i": i }}>
              <span className="cs-process__num">{s.num}</span>
              <span className="cs-process__label">{s.label}</span>
              <span className="cs-process__detail">{s.detail}</span>
              {i < processSteps.length - 1 && (
                <span className="cs-process__arrow" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section className="cs-section" ref={el => addRef(el, 2)}>
        <div className="cs-section__label">{t("ahrMotor", "insightsLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "insightsTitle")}</h2>
        <p className="cs-text cs-text--intro">{t("ahrMotor", "insightsIntro")}</p>

        <div className="cs-quotes">
          {quotes.map((q, i) => (
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

        <div className="cs-insight-callout" ref={el => addRef(el, 3)}>
          <p className="cs-insight-callout__label">{t("ahrMotor", "calloutLabel")}</p>
          <p className="cs-insight-callout__text">{t("ahrMotor", "calloutText")}</p>
        </div>
      </section>

      {/* ── OST ── */}
      <section className="cs-section" ref={el => addRef(el, 4)}>
        <div className="cs-section__label">{t("ahrMotor", "ostLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "ostTitle")}</h2>
        <p className="cs-text">{t("ahrMotor", "ostText")}</p>

        <div className="cs-ost">
          <div className="cs-ost__root">
            <p className="cs-ost__root-label">{t("ahrMotor", "ostRootLabel")}</p>
            <p className="cs-ost__root-text">{t("ahrMotor", "ostRootText")}</p>
          </div>
          <div className="cs-ost__connector" aria-hidden="true" />
          <div className="cs-ost__branches">
            {ostBranches.map(b => (
              <div key={b.num} className="cs-ost__branch">
                <span className="cs-ost__branch-num">{b.num}</span>
                <p className="cs-ost__branch-title">{b.title}</p>
                <p className="cs-ost__branch-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-images">
          {IMGS.map((src, i) => (
            <div key={i} className="cs-image-wrap">
              <img
                src={src}
                alt={imgAlts[i]}
                className="cs-image"
                loading="lazy"
              />
              <p className="cs-image__caption">{imgCaptions[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNICAL FEASIBILITY ── */}
      <section className="cs-section" ref={el => addRef(el, 5)}>
        <div className="cs-section__label">{t("ahrMotor", "techLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "techTitle")}</h2>
        <div className="cs-section__body cs-section__body--2col">
          <div>
            <p className="cs-text">{t("ahrMotor", "techP1")}</p>
            <p className="cs-text">{t("ahrMotor", "techP2")}</p>
          </div>
          <div className="cs-teams">
            {teams.map(team => (
              <div key={team.name} className="cs-team">
                <span className="cs-team__name">{team.name}</span>
                <span className="cs-team__role">{team.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATUS ── */}
      <section className="cs-section cs-section--wip" ref={el => addRef(el, 6)}>
        <div className="cs-section__label">{t("ahrMotor", "statusLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "statusTitle")}</h2>
        <div className="cs-wip-steps">
          {statusSteps.map((s, i) => (
            <div key={i} className={`cs-wip-step${s.done ? " cs-wip-step--done" : ""}${s.active ? " cs-wip-step--active" : ""}`}>
              <span className="cs-wip-step__dot" aria-hidden="true" />
              <span className="cs-wip-step__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACCESSIBILITY ── */}
      <section className="cs-section" ref={el => addRef(el, 7)}>
        <div className="cs-section__label">{t("ahrMotor", "a11yLabel")}</div>
        <h2 className="cs-section__title">{t("ahrMotor", "a11yTitle")}</h2>
        <ul className="cs-a11y-list" aria-label={t("ahrMotor", "a11yTitle")}>
          {a11yPoints.map((point, i) => (
            <li key={i} className="cs-a11y-item">{point}</li>
          ))}
        </ul>
      </section>

      {/* ── SKILLS ── */}
      <section className="cs-section" ref={el => addRef(el, 8)}>
        <div className="cs-skills">
          {skills.map(sk => (
            <span key={sk} className="cs-skill">{sk}</span>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cs-cta">
        <p className="cs-cta__text">{t("ahrMotor", "ctaText")}</p>
        <Link to="/kontakta" className="cs-cta__btn">{t("ahrMotor", "ctaBtn")}</Link>
      </section>

    </div>
  );
}
