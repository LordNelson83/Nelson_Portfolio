import { Link } from "react-router-dom";
import "./Navbar.css";
import nptLogo from '../assets/images2/npt.png';

const Navbar = () => (
    <nav className="navbar">
        <Link to="/">
            <img className="good-small" src={nptLogo} alt="logo" />
        </Link>
        <Link to="/OmMig">Om</Link>
        <Link to="/Profil">360° Design</Link>
        <Link to="/Kontakta">Kontakt</Link>
    </nav>
);
export default Navbar;