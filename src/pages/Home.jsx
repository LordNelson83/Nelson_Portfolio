import "../pagesCSS/Home.css";
import { Link } from "react-router-dom";
import nptLogo from '../assets/images2/npt.png';


const Home = () => (
  <div className="home-container">
    
    <img className="good" src={nptLogo} alt="logo" />

    <Link to="/ommig" className="Namn">Nelson Peña Triana</Link>
  </div>
);

export default Home;
