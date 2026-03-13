import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import nptLogo from "../assets/images2/npt.png";
import { useLang } from "../i18n/LangContext";

/* Banderas como emoji + código */
const LANGS = [
  { code: "sv", flag: "🇸🇪", label: "Svenska" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
];

const Navbar = ({ isHome = false }) => {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const location                  = useLocation();
  const { lang, switchLang, t }   = useLang();

  const currentLang = LANGS.find(l => l.code === lang) || LANGS[0];

  /* Cierra menús al cambiar de ruta */
  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [location]);

  /* Bloquea scroll cuando el menú hamburguesa está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Cierra el dropdown de idioma al hacer clic fuera */
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <nav className={`navbar ${isHome ? "navbar--dark" : "navbar--light"}`}>

      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img
          className="navbar-logo-img"
          src={nptLogo}
          alt="Nelson Peña logo"
          style={{ filter: isHome ? "brightness(0) invert(1)" : "none" }}
        />
      </Link>

      {/* Links desktop */}
      <div className={`navbar-links ${menuOpen ? "navbar-links--open" : ""}`}>
        {[
          { to: "/ommig",    label: t("nav", "about")   },
          { to: "/kontakta", label: t("nav", "contact")  },
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `nav-link ${isHome ? "nav-link--dark" : "nav-link--light"} ${isActive ? "active-link" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Selector de idioma — visible también dentro del menú mobile */}
        <div
          className={`lang-switcher lang-switcher--mobile ${isHome ? "lang-switcher--dark" : "lang-switcher--light"}`}
          onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
        >
          <span className="lang-current">
            <span className="lang-flag">{currentLang.flag}</span>
            <span className="lang-code">{currentLang.code.toUpperCase()}</span>
            <span className="lang-arrow">{langOpen ? "▲" : "▼"}</span>
          </span>

          {langOpen && (
            <ul className="lang-dropdown">
              {LANGS.map(l => (
                <li
                  key={l.code}
                  className={`lang-option ${l.code === lang ? "lang-option--active" : ""}`}
                  onClick={() => { switchLang(l.code); setLangOpen(false); }}
                >
                  <span className="lang-flag">{l.flag}</span>
                  <span className="lang-name">{l.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Selector de idioma desktop — fuera del menú mobile */}
      <div
        className={`lang-switcher lang-switcher--desktop ${isHome ? "lang-switcher--dark" : "lang-switcher--light"}`}
        onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
      >
        <span className="lang-current">
          <span className="lang-flag">{currentLang.flag}</span>
          <span className="lang-code">{currentLang.code.toUpperCase()}</span>
          <span className="lang-arrow">{langOpen ? "▲" : "▼"}</span>
        </span>

        {langOpen && (
          <ul className="lang-dropdown">
            {LANGS.map(l => (
              <li
                key={l.code}
                className={`lang-option ${l.code === lang ? "lang-option--active" : ""}`}
                onClick={() => { switchLang(l.code); setLangOpen(false); }}
              >
                <span className="lang-flag">{l.flag}</span>
                <span className="lang-name">{l.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botón hamburguesa — solo mobile */}
      <button
        className={`navbar-burger ${menuOpen ? "navbar-burger--open" : ""} ${isHome ? "navbar-burger--dark" : "navbar-burger--light"}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay oscuro detrás del menú */}
      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
