import { useEffect, useRef, useState, forwardRef } from "react";
import "../pagesCSS/OmMig.css";
import { useLang } from "../i18n/LangContext";

/* ── Imágenes locales ── */
import Acrobat      from "../assets/images2/Acrobat.png";
import Indesign     from "../assets/images2/Indesign.png";
import Photoshop    from "../assets/images2/Photoshop.png";
import Illustrator  from "../assets/images2/Illustrator.png";
import FigmaIcon    from "../assets/images2/Figma.png";
import CSS          from "../assets/images2/CSS.png";
import Javascript   from "../assets/images2/Javascript.png";
import HTML         from "../assets/images2/HTLM.png";
import ReactIcon    from "../assets/images2/React.png";
import Github       from "../assets/images2/Github.png";
import Mailchimp    from "../assets/images2/Mailchimp.png";
import MsNetlify    from "../assets/images2/microsoft_netlify.png";
import Shapr3d      from "../assets/images2/Shapr3d.png";
import ClaudeIcon   from "../assets/images2/Claude.png";
import GeminiIcon   from "../assets/images2/Gemini.png";

const DIPLOM_PDF = "/diplom-ixnfb-jnquj-295287-6380-xpc2.pdf";

/* ── Componente de estrellas ── */
const StarRating = ({ score }) => (
  <div className="om-stars" aria-label={`${score} av 5`}>
    {[1, 2, 3, 4, 5].map(n => (
      <svg
        key={n}
        className={`om-star ${n <= score ? "om-star--on" : "om-star--off"}`}
        viewBox="0 0 14 14"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.436.59 3.44L7 8.885l-3.09 1.626.59-3.44L2 4.635l3.455-.505z" />
      </svg>
    ))}
  </div>
);

const SKILLS = [
  /* Adobe */
  { src: Acrobat,     alt: "Acrobat",      bg: "#FF0000", score: 3 },
  { src: Indesign,    alt: "InDesign",     bg: "#FF3366", score: 3 },
  { src: Photoshop,   alt: "Photoshop",    bg: "#31A8FF", score: 3 },
  { src: Illustrator, alt: "Illustrator",  bg: "#FF9A00", score: 2 },
  /* Design / Dev */
  { src: FigmaIcon,   alt: "Figma",        bg: "#1E1E1E", score: 4 },
  { src: CSS,         alt: "CSS3",         bg: "#1572B6", score: 3 },
  { src: Javascript,  alt: "JavaScript",   bg: "#F0C000", score: 2 },
  { src: HTML,        alt: "HTML5",        bg: "#E34F26", score: 3 },
  { src: ReactIcon,   alt: "React",        bg: "#20232A", score: 2 },
  { src: Github,      alt: "GitHub",       bg: "#1b1f23", score: 2 },
  { src: Mailchimp,   alt: "Mailchimp",    bg: "#FFE01B", score: 2 },
  { src: MsNetlify,   alt: "MS / Netlify", bg: "#0078D4", score: 2 },
  { src: Shapr3d,     alt: "Shapr3D",      bg: "#0099FF", score: 4 },
  /* IA */
  { src: ClaudeIcon,  alt: "Claude AI",    bg: "#CC785C", score: 3 },
  { src: GeminiIcon,  alt: "Gemini",       bg: "#4285F4", score: 3 },
];

/* ── Modal del diplom ── */
function DiplomModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="om-diplom-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Diplom — Digital tillgänglighet & inkluderande design"
    >
      <div
        className="om-diplom-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="om-diplom-close"
          onClick={onClose}
          aria-label="Stäng diplom"
        >
          ×
        </button>

        {/* iframe + capa de bloqueo de descarga */}
        <div className="om-diplom-viewer">
          <iframe
            src={`${DIPLOM_PDF}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title="Diplom — Digital tillgänglighet & inkluderande design"
            className="om-diplom-frame"
          />
          {/* capa transparente: bloquea clic derecho y arrastre sin ocultar el contenido */}
          <div
            className="om-diplom-shield"
            onContextMenu={(e) => e.preventDefault()}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default function OmMig() {
  const { t } = useLang();
  const skillsRef = useRef([]);
  const [showDiplom, setShowDiplom] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("skill--visible")),
      { threshold: 0.08 }
    );
    skillsRef.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="om-main">

      {/* ════════════ LEFT — texto ════════════ */}
      <div className="om-left">
        <div className="om-text-block">

          <h1 className="om-h1">
            {t("about", "greeting") || "Hej!"}<br />
            <span className="om-h1-accent">{t("about", "h1a")} Nelson</span>
          </h1>

          <h2 className="om-h2">
            {t("about", "sub")}
          </h2>

          <p className="om-paragraph">{t("about", "p1")}</p>
          <p className="om-paragraph">{t("about", "p2")}</p>
          <p className="om-paragraph">{t("about", "p3")}</p>

          {/* Certificering — clic abre el diplom */}
          <button
            className="om-cert"
            onClick={() => setShowDiplom(true)}
            aria-label={`${t("about", "certLabel")} — visa diplom`}
          >
            <span className="om-cert__icon" aria-hidden="true">✓</span>
            <div className="om-cert__body">
              <p className="om-cert__title">{t("about", "certTitle")}</p>
              <p className="om-cert__label">{t("about", "certLabel")}</p>
              <p className="om-cert__date">{t("about", "certDate")}</p>
            </div>
            <span className="om-cert__cta" aria-hidden="true">Visa diplom →</span>
          </button>

          {/* Leyenda de estrellas */}
          <div className="om-legend">
            <p className="om-legend__title">{t("about", "legendTitle")}</p>
            <div className="om-legend__rows">
              {(t("about", "legend") || []).map((label, i) => (
                <div key={i} className="om-legend__row">
                  <StarRating score={i + 1} />
                  <span className="om-legend__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════ RIGHT — skills ════════════ */}
      <div className="om-right">

        {/* ── Design & Dev ── */}
        <p className="om-skills-eyebrow">{t("about", "skillsTitle")}</p>
        <div className="om-skills-grid">
          {SKILLS.slice(0, 13).map((skill, i) => (
            <SkillCard
              key={skill.alt}
              skill={skill}
              delay={i * 0.045}
              ref={el => skillsRef.current[i] = el}
            />
          ))}
        </div>

        {/* ── Inteligencia Artificial ── */}
        <p className="om-skills-eyebrow om-skills-eyebrow--ai">{t("about", "aiTitle")}</p>
        <div className="om-skills-grid om-skills-grid--ai">
          {SKILLS.slice(13).map((skill, i) => (
            <SkillCard
              key={skill.alt}
              skill={skill}
              delay={(13 + i) * 0.045}
              ref={el => skillsRef.current[13 + i] = el}
            />
          ))}
        </div>
      </div>

      {/* ════════════ Modal diplom ════════════ */}
      {showDiplom && <DiplomModal onClose={() => setShowDiplom(false)} />}

    </main>
  );
}

/* ── SkillCard — badge + nombre + estrellas ── */
const SkillCard = forwardRef(({ skill, delay }, ref) => (
  <div
    className="om-skill-cell"
    ref={ref}
    style={{ "--delay": `${delay}s`, "--skill-bg": skill.bg }}
  >
    <div className="om-skill-badge">
      <img className="om-skill-icon" src={skill.src} alt={skill.alt} />
    </div>
    <span className="om-skill-name">{skill.alt}</span>
    <StarRating score={skill.score} />
  </div>
));
SkillCard.displayName = "SkillCard";
