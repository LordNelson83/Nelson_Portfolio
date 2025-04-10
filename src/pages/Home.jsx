import "../pagesCSS/Home.css";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home-container">
    
    <img className="good" src="../assets/images2/npt.png" alt="logo" />  
    <Link to="/ommig" className="Namn">Nelson Peña Triana</Link>
  </div>
);

export default Home;
