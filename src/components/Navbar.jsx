import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import nptLogo    from "../assets/images2/npt.png";
import { useLang } from "../i18n/LangContext";
import { useTheme } from "../i18n/ThemeContext";

/* ── Banderas SVG inline ─────────────────────────────────── */
const FlagSE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" width="22" height="16" style={{borderRadius:"2px",display:"block"}}>
    <rect width="20" height="15" fill="#006AA7"/>
    <rect x="5" width="3" height="15" fill="#FECC02"/>
    <rect y="6" width="20" height="3" fill="#FECC02"/>
  </svg>
);
const FlagGB = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="16" style={{borderRadius:"2px",display:"block"}}>
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);
const FlagES = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="22" height="16" style={{borderRadius:"2px",display:"block"}}>
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
  const { theme, toggleTheme }  = useTheme();

  const isDark = theme === "dark";
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

  /* 
    Hay 3 variantes de navbar:
    - "hero"    → Home hero, transparente con texto blanco
    - "dark"    → páginas internas en dark mode, sticky fondo oscuro
    - "light"   → páginas internas en light mode, sticky fondo crema
  */
  const variant = isHome ? "hero" : isDark ? "dark" : "light";

  /* Filtro del logo según variante */
  const logoFilter = variant === "light"
    ? "brightness(0)"               /* negro sobre crema */
    : "brightness(0) invert(1)";    /* blanco sobre oscuro */

  return (
    <nav className={`navbar navbar--${variant}`}>

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img
          className="navbar-logo-img"
          src={nptLogo}
          alt="Nelson Peña logo"
          style={{ filter: logoFilter }}
        />
      </Link>

      {/* Links desktop */}
      <div className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
        {[
          { to: "/ommig",    label: t("nav", "about")  },
          { to: "/kontakta", label: t("nav", "contact") },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link nav-link--${variant} ${isActive ? "active-link" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Selector idioma mobile */}
        <div
          className={`lang-switcher lang-switcher--mobile lang-switcher--${variant}`}
          onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
        >
          <span className="lang-current">
            <CurrentFlag />
            <span className="lang-arrow">{langOpen ? "▲" : "▼"}</span>
          </span>
          {langOpen && (
            <ul className="lang-dropdown">
              {LANGS.map(l => {
                const LFlag = l.Flag;
                return (
                  <li key={l.code}
                    className={`lang-option ${l.code === lang ? "lang-option--active" : ""}`}
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

      {/* Toggle dark/light */}
      <button
        className={`theme-toggle theme-toggle--${variant}`}
        onClick={toggleTheme}
        aria-label={isDark ? "Aktivera ljust läge" : "Aktivera mörkt läge"}
        title={isDark ? "Light mode" : "Dark mode"}
      >
        {isDark ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* Selector idioma desktop */}
      <div
        className={`lang-switcher lang-switcher--desktop lang-switcher--${variant}`}
        onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
      >
        <span className="lang-current">
          <CurrentFlag />
          <span className="lang-arrow">{langOpen ? "▲" : "▼"}</span>
        </span>
        {langOpen && (
          <ul className="lang-dropdown">
            {LANGS.map(l => {
              const LFlag = l.Flag;
              return (
                <li key={l.code}
                  className={`lang-option ${l.code === lang ? "lang-option--active" : ""}`}
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
        className={`navbar-burger ${menuOpen ? "navbar-burger--open" : ""} navbar-burger--${variant}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;
