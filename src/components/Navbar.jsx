import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import nptLogo from '../assets/images2/npt.png';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">
            <img className="good-small" src={nptLogo} alt="logo" />
        </Link>
        <NavLink to="/OmMig" className={({ isActive }) => isActive ? "active-link" : ""}>Om</NavLink>
<NavLink to="/Profil" className={({ isActive }) => isActive ? "active-link" : ""}>360° Design</NavLink>
<NavLink to="/Kontakta" className={({ isActive }) => isActive ? "active-link" : ""}>Kontakt</NavLink>

    </nav>
);
export default Navbar;