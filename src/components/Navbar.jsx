import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar=()=>(
<nav className="navbar">
    <Link to="/">Start</Link>
    <Link to="/OmMig">Om mig</Link>
    <Link to="/Profil">Portfölj</Link>
    <Link to="Kontakta">Kontakt</Link>
</nav>
);
export default Navbar;