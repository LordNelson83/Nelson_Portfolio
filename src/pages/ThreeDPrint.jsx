import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/ThreeDPrint.css";

/* ── Imágenes reales desde assets/images ── */
import img1 from "../assets/images/3dprint1.png";
import img2 from "../assets/images/3dprint2.png";
import img3 from "../assets/images/3dprint3.png";
import img4 from "../assets/images/3dprint4.png";
import img5 from "../assets/images/3dprint5.png";
import bgPrint from "../assets/images/3dprinting.png";

/* ══════════════════════════════════════════════════════════
   3D PRINT & DESIGN — Figma: 11:65
   bg #1E1E1E · mismo sistema que Home (2:228)
   Xenter · 3D-teknik & Grafisk produktion · 2018–2019
   ══════════════════════════════════════════════════════════ */

/* ── Galería — 5 imágenes reales con captions que generan curiosidad ── */
const GALLERY = [
  {
    id: 1, src: img1,
    alt: "3D-modell skapad i CAD",
    caption: "Från digital modell...",
    curiosity: "Hur tar en idé form?",
  },
  {
    id: 2, src: img2,
    alt: "3D-utskrift i process",
    caption: "...till fysisk verklighet",
    curiosity: "Lager för lager. Millimeter för millimeter.",
  },
  {
    id: 3, src: img3,
    alt: "Detalj av 3D-utskrivet objekt",
    caption: "Precision & detalj",
    curiosity: "Former som traditionell tillverkning aldrig kan skapa.",
  },
  {
    id: 4, src: img4,
    alt: "Ekologiska material för 3D-print",
    caption: "Hållbara material",
    curiosity: "Design med ansvar för miljön.",
  },
  {
    id: 5, src: img5,
    alt: "Färdigt 3D-printat projekt",
    caption: "Idé → Produkt",
    curiosity: "Från skärm till hand. På några timmar.",
  },
];

/* ── Stats — datos del curso ── */
const STATS = [
  { value: "2018",  label: "Xenter · Tumba"         },
  { value: "3D",    label: "Additiv tillverkning"    },
  { value: "CAD",   label: "Digitala 3D-modeller"   },
  { value: "ECO",   label: "Hållbara material"       },
];

/* ── Párrafos — texto exacto del Figma (12:54) ── */
const PARAGRAPHS = [
  {
    lead: true,
    text: "Design har alltid handlat om att förverkliga idéer. På Xenter fick jag verktygen att göra det bokstavligt – från skärm till fysisk produkt, på några timmar.",
  },
  {
    text: "Genom avancerade 3D-program lärde jag mig att bygga digitala modeller och skriva ut dem i material som både håller och värnar om miljön. Additiv tillverkning öppnade en ny värld: komplexa former som traditionell tillverkning aldrig skulle kunna skapa, nu möjliga med precision och snabbhet.",
  },
  {
    text: "Det som fascinerade mig mest var inte tekniken i sig – det var kopplingen mellan idé och verklighet. Att se ett koncept bli ett föremål man kan hålla i handen är något som aldrig slutar kännas betydelsefullt.",
  },
  {
    text: "Arbetet inom 3D-teknik lärde mig också att hålla blicken framåt. I en bransch där processer, material och möjligheter förändras snabbt gäller det att vara nyfiken och anpassningsbar. Den nyfikenheten har följt med mig sedan dess – och blivit en del av hur jag förhåller mig till allt nytt, oavsett om det handlar om design, kod eller AI.",
  },
  {
    text: "Att ligga i framkant av teknologin är inte bara ett professionellt intresse. Det är något som verkligen driver mig. Varje ny teknologi är en ny fråga att utforska, ett nytt sätt att lösa problem och ett nytt sätt att skapa värde för andra.",
  },
];

export default function ThreeDPrint() {
  const statsRef   = useRef([]);
  const sectionRef = useRef(null);
  const galleryRef = useRef([]);
  const [activeImg, setActiveImg]     = useState(0);
  const [isPaused, setIsPaused]       = useState(false);

  /* IntersectionObserver — mismo patrón que Home */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    [...statsRef.current, ...galleryRef.current, sectionRef.current]
      .filter(Boolean)
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Auto-avance de galería — pausa al hover */
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => setActiveImg(i => (i + 1) % GALLERY.length), 4000);
    return () => clearInterval(t);
  }, [isPaused]);

  return (
    <div className="td-page">

      {/* ── Grain — idéntico al hero de Home ── */}
      <div className="td-grain" aria-hidden="true" />

      {/* ── Imagen de fondo baja opacidad — 3dprinting.png ── */}
      <div
        className="td-bg-image"
        style={{ backgroundImage: `url(${bgPrint})` }}
        aria-hidden="true"
      />

      {/* ── Palabra de fondo muy baja opacidad ── */}
      <div className="td-bg-word" aria-hidden="true">3D</div>

      {/* ════════════════════════════════════════════
          HERO — Figma: 11:82 · 11:83
          Playfair Display Bold 150px · lh 225px
          "3D print & Design"
      ════════════════════════════════════════════ */}
      <header className="td-hero">
        <p className="td-hero__eyebrow">Xenter · 3D-teknik &amp; Grafisk produktion</p>

        <h1 className="td-hero__h1">
          <span>3D print</span>
          <span>&amp; <em>Design</em></span>
        </h1>

        <p className="td-hero__sub">
          Additiv tillverkning · CAD · Hållbara material · 2018–2019
        </p>

        <div className="td-hero__line" aria-hidden="true" />
      </header>

      {/* ════════════════════════════════════════════
          STATS
      ════════════════════════════════════════════ */}
      <div className="td-stats" role="list">
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className="td-stat"
            role="listitem"
            ref={el => statsRef.current[i] = el}
            style={{ "--delay": `${i * 0.1}s` }}
          >
            <span className="td-stat__value">{s.value}</span>
            <span className="td-stat__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ════════════════════════════════════════════
          BODY — galería izquierda · texto derecho
      ════════════════════════════════════════════ */}
      <div className="td-body">

        {/* ── Galería interactiva ── */}
        <div
          className="td-gallery"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Imagen principal con crossfade */}
          <div className="td-gallery__main">
            {GALLERY.map((img, i) => (
              <div
                key={img.id}
                className={`td-gallery__slide ${i === activeImg ? "td-gallery__slide--active" : ""}`}
              >
                <img src={img.src} alt={img.alt} className="td-gallery__img" />

                {/* Caption + frase de curiosidad */}
                <div className="td-gallery__caption">
                  <span className="td-gallery__caption-tag">{img.caption}</span>
                  <span className="td-gallery__caption-curiosity">{img.curiosity}</span>
                </div>
              </div>
            ))}

            {/* Contador de slides */}
            <div className="td-gallery__counter" aria-hidden="true">
              {String(activeImg + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
            </div>

            {/* Navegación anterior/siguiente */}
            <button
              className="td-gallery__nav td-gallery__nav--prev"
              onClick={() => setActiveImg(i => (i - 1 + GALLERY.length) % GALLERY.length)}
              aria-label="Föregående bild"
            >‹</button>
            <button
              className="td-gallery__nav td-gallery__nav--next"
              onClick={() => setActiveImg(i => (i + 1) % GALLERY.length)}
              aria-label="Nästa bild"
            >›</button>

            {/* Dots de progreso */}
            <div className="td-gallery__dots" role="tablist">
              {GALLERY.map((_, i) => (
                <button
                  key={i}
                  className={`td-gallery__dot ${i === activeImg ? "td-gallery__dot--active" : ""}`}
                  onClick={() => setActiveImg(i)}
                  role="tab"
                  aria-selected={i === activeImg}
                  aria-label={`Bild ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="td-gallery__thumbs" role="tablist" aria-label="Galeribilder">
            {GALLERY.map((img, i) => (
              <button
                key={img.id}
                className={`td-gallery__thumb ${i === activeImg ? "td-gallery__thumb--active" : ""}`}
                onClick={() => setActiveImg(i)}
                role="tab"
                aria-selected={i === activeImg}
                aria-label={img.caption}
                ref={el => galleryRef.current[i] = el}
                style={{ "--delay": `${0.2 + i * 0.08}s` }}
              >
                <img src={img.src} alt={img.alt} />
              </button>
            ))}
          </div>

          {/* ── CTA — enlace a Xenter/trabajos realizados ── */}
          <a
            href="https://es.pinterest.com/NP3Design/3d-design-3dprint/"
            target="_blank"
            rel="noopener noreferrer"
            className="td-gallery__cta"
            aria-label="Se alla 3D-arbeten på Xenter"
          >
            <div className="td-gallery__cta-text">
              <span className="td-gallery__cta-label">Se alla mina 3D-arbeten</span>
              <span className="td-gallery__cta-sub">3D-teknik · Grafisk produktion · 2018–2019</span>
            </div>
            <span className="td-gallery__cta-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* ── Texto — Figma: Main (12:52) ── */}
        <article className="td-article" ref={sectionRef}>

          <div className="td-article__header">
            <p className="td-article__eyebrow">Utbildning</p>
            <div className="td-article__title-row">
              <div>
                <p className="td-article__school">Xenter</p>
                <h2 className="td-article__title">
                  3D-teknik &amp; Grafisk produktion
                </h2>
              </div>
              <span className="td-article__period">2018–2019</span>
            </div>
            <div className="td-article__divider" aria-hidden="true" />
          </div>

          <div className="td-article__body">
            {PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className={`td-article__para${p.lead ? " td-article__para--lead" : ""}`}
              >
                {p.text}
              </p>
            ))}
          </div>

          {/* Bloque de curiosidad al final */}
          <div className="td-article__highlight">
            <p className="td-article__highlight-text">
              "Att se ett koncept bli ett föremål man kan hålla i handen är något som aldrig slutar kännas betydelsefullt."
            </p>
          </div>

          <span className="td-article__tag">3D Print &amp; CAD</span>
        </article>
      </div>

      {/* ════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════ */}
      <section className="td-cta">
        <div className="td-cta__left">
          <p className="td-cta__eyebrow">Redo att samarbeta?</p>
          <h2 className="td-cta__title">
            Låt oss bygga något <em>extraordinary</em>
          </h2>
        </div>
        <Link to="/kontakta" className="td-cta__btn">
          Kontakta mig
        </Link>
      </section>

    </div>
  );
}
