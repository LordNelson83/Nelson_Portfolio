import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import nptLogo from "../assets/images2/npt.png";

/* isHome → flota sobre el hero oscuro (absolute, transparent)
   !isHome → pegado en la parte superior de la página clara (sticky, fondo claro) */
const Navbar = ({ isHome = false }) => (
  <nav className={`navbar ${isHome ? "navbar--dark" : "navbar--light"}`}>
    <Link to="/" className="navbar-logo">
      <img
        className="navbar-logo-img"
        src={nptLogo}
        alt="Nelson Peña logo"
        style={{ filter: isHome ? "brightness(0) invert(1)" : "none" }}
      />
    </Link>

    <div className="navbar-links">
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
  </nav>
);

export default Navbar;
