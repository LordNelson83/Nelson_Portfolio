import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profil from "./pages/Profil";
import Kontakta from "./pages/Kontakta";
import OmMig from "./pages/OmMig";
import Footer from "./pages/Footer";
import CrossMedia from "./pages/CrossMedia";
import GrafiskProduktion from "./pages/GrafiskProduktion";
import ThreeDPrint from "./pages/ThreeDPrint";
import UxUiDesign from "./pages/UxUiDesign";
import Bilder from "./pages/Bilder";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/crossmedia/:id", element: <CrossMedia /> },
    { path: "/grafiskproduktion/:id", element: <GrafiskProduktion /> },
    { path: "/threedprint/:id", element: <ThreeDPrint /> },
    { path: "/uxuidesign/:id", element: <UxUiDesign /> },
    { path: "/profil", element: <Profil /> },
    { path: "/kontakta", element: <Kontakta /> },
    { path: "/ommig", element: <OmMig /> },
    { path: "/Bilder", element: <Bilder/> },
  ]);

  return (
    <div>
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
};

export default App;
