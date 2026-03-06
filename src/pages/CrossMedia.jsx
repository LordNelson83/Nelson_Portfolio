import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/crossMedia.css";

import imgMagasin from "../assets/images/magasin.png";

/* ══════════════════════════════════════════════════════════
   CROSS MEDIA DESIGN — Figma: 13:67
   bg #1E1E1E · layout editorial · una imagen, máximo impacto
   ══════════════════════════════════════════════════════════ */

const STATS = [
  { value: "2007",  label: "Fridhems Folkhögskola"            },
  { value: "2 år",  label: "Grafisk form & Kommunikation"     },
  { value: "Adobe", label: "Photoshop · Illustrator · InDesign" },
  { value: "Cross", label: "Tvärkonstnärligt samarbete"        },
];

const PARAGRAPHS = [
  {
    text: "Det var på Fridhems folkhögskola som jag för första gången förstod vad design verkligen är – inte bara estetik, utan ett sätt att kommunicera, beröra och förändra hur människor upplever världen.",
  },
  {
    text: "Under två år fördjupade jag mig i grafiskt hantverk från grunden: klassisk teckning, typografi, layout, illustration och visuell berättarteknik. Parallellt byggde jag tekniska kunskaper i Adobe Photoshop, Illustrator och InDesign – verktyg som blev en naturlig förlängning av mitt kreativa tänkande.",
  },
  {
    text: "Det som formade mig mest var inte programmen. Det var läran om att se – att analysera, ifrågasätta och kommunicera med bild och form på ett medvetet sätt. Samarbetet med andra kulturlinjer vidgade perspektivet och lärde mig att god design alltid föds i mötet mellan olika röster.",
  },
];

const SKILLS = ["Typografi", "Layout", "Illustration", "Photoshop", "Illustrator", "InDesign"];

export default function CrossMedia() {
  const statsRef   = useRef([]);
  const contentRef = useRef(null);
  const imageRef   = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach(en => en.isIntersecting && en.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    [...statsRef.current, contentRef.current, imageRef.current]
      .filter(Boolean)
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cm-page">

      {/* Grain — idéntico al hero de Home */}
      <div className="cm-grain" aria-hidden="true" />

      {/* Palabra de fondo muy baja opacidad */}
      <div className="cm-bg-word" aria-hidden="true">Cross</div>

      {/* ════════════════════════════════════════════
          HERO — Playfair 150px · lh 225px (Figma 13:87)
      ════════════════════════════════════════════ */}
      <header className="cm-hero">
        <p className="cm-hero__eyebrow">
          Fridhems Folkhögskola · Grafisk form &amp; Kommunikation
        </p>
        <h1 className="cm-hero__h1">
          <span>Cross Media</span>
          <span><em>Design</em></span>
        </h1>
        {/* Figma Heading 2 (13:92) 46px + Heading 3 (13:97) 26px */}
        <div className="cm-hero__meta">
          <p className="cm-hero__school">Fridhems Folkhögskolan</p>
          <span className="cm-hero__sep" aria-hidden="true">·</span>
          <p className="cm-hero__period">2007–2009</p>
        </div>
        <div className="cm-hero__line" aria-hidden="true" />
      </header>

      {/* ════════════════════════════════════════════
          STATS — grid 4 cols
      ════════════════════════════════════════════ */}
      <div className="cm-stats" role="list">
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className="cm-stat"
            role="listitem"
            ref={el => statsRef.current[i] = el}
            style={{ "--delay": `${i * 0.1}s` }}
          >
            <span className="cm-stat__value">{s.value}</span>
            <span className="cm-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ════════════════════════════════════════════
          CITA APERTURA — "Här började allt."
          máxima jerarquía editorial, full-width
      ════════════════════════════════════════════ */}
      <div className="cm-opening">
        <p className="cm-opening__text">Här började allt.</p>
        <div className="cm-opening__rule" aria-hidden="true" />
      </div>

      {/* ════════════════════════════════════════════
          BODY — 2 columnas asimétricas:
          izq = texto (55%) · der = imagen + enlace (45%)
      ════════════════════════════════════════════ */}
      <div className="cm-body">

        {/* ── Columna texto ── */}
        <article className="cm-article" ref={contentRef}>

          <div className="cm-article__header">
            <p className="cm-article__eyebrow">Utbildning · 2007–2009</p>
            <h2 className="cm-article__title">
              Grafisk form &amp; Kommunikation
            </h2>
            <div className="cm-article__divider" aria-hidden="true" />
          </div>

          <div className="cm-article__body">
            {PARAGRAPHS.map((p, i) => (
              <p key={i} className="cm-article__para">{p.text}</p>
            ))}
          </div>

          {/* Cita destacada */}
          <blockquote className="cm-article__blockquote">
            <p>"Det var läran om att se – att analysera, ifrågasätta och kommunicera med bild och form på ett medvetet sätt."</p>
          </blockquote>

          {/* Párrafo de cierre */}
          <p className="cm-article__closing">
            Det var här min resa inom design började. Och den resan pågår fortfarande.
          </p>

          {/* Skills pills */}
          <div className="cm-article__skills">
            {SKILLS.map(skill => (
              <span key={skill} className="cm-article__skill">{skill}</span>
            ))}
          </div>

          <span className="cm-article__tag">Cross Media &amp; Grafisk Form</span>
        </article>

        {/* ── Columna imagen + enlace ── */}
        <div className="cm-visual" ref={imageRef}>

          {/* Imagen del magasin — protagonista */}
          <figure className="cm-visual__figure">
            <div className="cm-visual__img-wrap">
              <img
                src={imgMagasin}
                alt="Tidningsmagasin — Fridhems Folkhögskola 2007–2009"
                className="cm-visual__img"
              />
              {/* Overlay con etiqueta */}
              <div className="cm-visual__overlay">
                <span className="cm-visual__overlay-tag">Tidningsmagasin</span>
                <span className="cm-visual__overlay-year">2007–2009</span>
              </div>
            </div>
            <figcaption className="cm-visual__caption">
              Grafisk produktion · Fridhems Folkhögskola
            </figcaption>
          </figure>

          {/* Enlace al trabajo — CTA destacado debajo de la imagen */}
          <a
            href="/Magasin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cm-visual__link"
            aria-label="Se tidningsmagasinet — öppnar PDF"
          >
            <div className="cm-visual__link-content">
              <div className="cm-visual__link-texts">
                <span className="cm-visual__link-label">Se tidningsmagasinet</span>
                <span className="cm-visual__link-sub">
                  Öppnar PDF · Grafisk produktion · Fridhems Folkhögskola
                </span>
              </div>
              <span className="cm-visual__link-arrow" aria-hidden="true">↗</span>
            </div>
            {/* Barra de progreso animada en hover */}
            <div className="cm-visual__link-bar" aria-hidden="true" />
          </a>

          {/* Contexto numérico debajo del enlace */}
          <div className="cm-visual__context">
            <div className="cm-visual__context-item">
              <span className="cm-visual__context-num">2 år</span>
              <span className="cm-visual__context-desc">Heltidsstudier i grafisk form</span>
            </div>
            <div className="cm-visual__context-divider" aria-hidden="true" />
            <div className="cm-visual__context-item">
              <span className="cm-visual__context-num">3</span>
              <span className="cm-visual__context-desc">Adobe-verktyg behärskade</span>
            </div>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════ */}
      <section className="cm-cta">
        <div className="cm-cta__left">
          <p className="cm-cta__eyebrow">Redo att samarbeta?</p>
          <h2 className="cm-cta__title">
            Låt oss bygga något <em>extraordinary</em>
          </h2>
        </div>
        <Link to="/kontakta" className="cm-cta__btn">Kontakta mig</Link>
      </section>

    </div>
  );
}
