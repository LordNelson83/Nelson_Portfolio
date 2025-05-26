import "../pagesCSS/Home.css";
import mustang1 from '../assets/images2/mustang1.png';

const Home = () => (
  <div className="home-container">
    <div className="container">
      <h2 className="Name">Nelson Peña</h2>
      <h1 className="Portfolj_namn">Portfölj</h1>
      <h3 className="intro">
        Jag kombinerar cross media design, 3D-utskrift, UX/UI-design och frontendprogrammering för visuella helhetslösningar.
      </h3>
    </div>
    <div className="ihop">
      <img className="mustang1" src={mustang1} alt="car" />
    </div>
  </div>
);

export default Home;
