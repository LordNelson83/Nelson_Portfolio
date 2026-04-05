import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import nptLogo    from "../assets/images2/npt.png";
import { useLang } from "../i18n/LangContext";

/*
 * WCAG Fix — Error 3 (imagen 3):
 * Los SVG de banderas son decorativos — el texto del idioma
 * ("Svenska", "English", "Español") ya describe la opción.
 * Añadimos aria-hidden="true" y focusable="false" a cada SVG
 * para que los lectores de pantalla los ignoren.
 */
const FlagSE = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 15"
    width="22"
    height="16"
    style={{ borderRadius: "2px", display: "block" }}
    aria-hidden="true"
    focusable="false"
  >
    <rect width="20" height="15" fill="#006AA7"/>
    <rect x="5" width="3" height="15" fill="#FECC02"/>
    <rect y="6" width="20" height="3" fill="#FECC02"/>
  </svg>
);

const FlagGB = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 30"
    width="22"
    height="16"
    style={{ borderRadius: "2px", display: "block" }}
    aria-hidden="true"
    focusable="false"
  >
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

const FlagES = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 3 2"
    width="22"
    height="16"
    style={{ borderRadius: "2px", display: "block" }}
    aria-hidden="true"
    focusable="false"
  >
    <rect width="3" height="2" fill="#c60b1e"/>
    <rect y="0.5" width="3" height="1" fill="#ffc400"/>
  </svg>
);

const LANGS = [
  { code: "sv", Flag: FlagSE, label: "Svenska" },
  { code: "en", Flag: FlagGB, label: "English" },
  { code: "es", Flag: FlagES, label: "Español" },
];

const Navbar = ({ isHome = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location                = useLocation();
  const { lang, switchLang, t } = useLang();

  const currentLang = LANGS.find(l => l.code === lang) || LANGS[0];
  const CurrentFlag = currentLang.Flag;

  useEffect(() => { setMenuOpen(false); setLangOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  return (
    /*
     * WCAG Fix — <nav> con aria-label para distinguirla
     * de otras posibles regiones de navegación en la página.
     */
    <nav
      className={`navbar ${isHome ? "navbar--dark" : "navbar--light"}`}
      aria-label="Huvudnavigation"
    >

      {/* Logo */}
      <Link to="/" className="navbar-logo" aria-label="Hem — Nelson Peña">
        <img
          className="navbar-logo-img"
          src={nptLogo}
          alt="Nelson Peña logotyp"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </Link>

      {/* Links desktop */}
      <div
        id="navbar-links"
        className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}
        aria-hidden={!menuOpen && undefined}
      >
        {[
          { to: "/ommig",    label: t("nav", "about")  },
          { to: "/kontakta", label: t("nav", "contact") },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link nav-link--dark ${isActive ? "active-link" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Selector idioma mobile */}
        <div
          className="lang-switcher lang-switcher--mobile lang-switcher--dark"
          onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
          /*
           * WCAG Fix — el selector de idioma debe ser accesible
           * como un widget de menú desplegable.
           */
          role="button"
          tabIndex={0}
          aria-label={`Välj språk, nuvarande: ${currentLang.label}`}
          aria-expanded={langOpen}
          aria-haspopup="listbox"
          onKeyDown={e => e.key === "Enter" && setLangOpen(o => !o)}
        >
          <span className="lang-current" aria-hidden="true">
            <CurrentFlag />
            <span className="lang-arrow">{langOpen ? "▲" : "▼"}</span>
          </span>
          {langOpen && (
            <ul className="lang-dropdown" role="listbox" aria-label="Välj språk">
              {LANGS.map(l => {
                const LFlag = l.Flag;
                return (
                  <li
                    key={l.code}
                    className={`lang-option ${l.code === lang ? "lang-option--active" : ""}`}
                    role="option"
                    aria-selected={l.code === lang}
                    onClick={() => { switchLang(l.code); setLangOpen(false); }}
                  >
                    <LFlag />
                    <span className="lang-name">{l.label}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Selector idioma desktop */}
      <div
        className="lang-switcher lang-switcher--desktop lang-switcher--dark"
        onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
        role="button"
        tabIndex={0}
        aria-label={`Välj språk, nuvarande: ${currentLang.label}`}
        aria-expanded={langOpen}
        aria-haspopup="listbox"
        onKeyDown={e => e.key === "Enter" && setLangOpen(o => !o)}
      >
        <span className="lang-current" aria-hidden="true">
          <CurrentFlag />
          <span className="lang-arrow">{langOpen ? "▲" : "▼"}</span>
        </span>
        {langOpen && (
          <ul className="lang-dropdown" role="listbox" aria-label="Välj språk">
            {LANGS.map(l => {
              const LFlag = l.Flag;
              return (
                <li
                  key={l.code}
                  className={`lang-option ${l.code === lang ? "lang-option--active" : ""}`}
                  role="option"
                  aria-selected={l.code === lang}
                  onClick={() => { switchLang(l.code); setLangOpen(false); }}
                >
                  <LFlag />
                  <span className="lang-name">{l.label}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Hamburguesa mobile */}
      <button
        className={`navbar-burger ${menuOpen ? "navbar-burger--open" : ""} navbar-burger--dark`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        {/* Líneas decorativas — ocultas para lectores de pantalla */}
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      {menuOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Navbar;
