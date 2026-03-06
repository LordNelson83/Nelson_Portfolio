import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import nptLogo from "../assets/images2/npt.png";

const Navbar = ({ isHome = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* Cierra el menú al cambiar de ruta */
  useEffect(() => { setMenuOpen(false); }, [location]);

  /* Bloquea el scroll del body cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${isHome ? "navbar--dark" : "navbar--light"}`}>
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
          { to: "/ommig",    label: "Om mig" },
          { to: "/kontakta", label: "Kontakt" },
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
