import { useRoutes, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Kontakta from "./pages/Kontakta";
import OmMig from "./pages/OmMig";
import CrossMedia from "./pages/CrossMedia";
import GrafiskProduktion from "./pages/GrafiskProduktion";
import Projekter from "./pages/Projekter";
import ThreeDPrint from "./pages/ThreeDPrint";
import UxUiDesign from "./pages/UxUiDesign";
import AhrMotorCase from "./pages/AhrMotorCase";

/* ─── Scroll to top on route change ─────────────────────── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* ─── Route map ──────────────────────────────────────────── */
const ROUTES = [
  { path: "/",                       element: <Home /> },
  { path: "/ommig",                  element: <OmMig /> },
  { path: "/profil",                 element: <Profil /> },
  { path: "/kontakta",               element: <Kontakta /> },
  { path: "/crossmedia/:id",         element: <CrossMedia /> },
  { path: "/grafiskproduktion/1",    element: <Projekter /> },
  { path: "/grafiskproduktion/:id",  element: <GrafiskProduktion /> },
  { path: "/threedprint/:id",        element: <ThreeDPrint /> },
  { path: "/uxuidesign/:id",         element: <UxUiDesign /> },
  { path: "/projekter/ahr-motor",    element: <AhrMotorCase /> },
];

/* ─── App ────────────────────────────────────────────────── */
const App = () => {
  const { pathname } = useLocation();
  const routes = useRoutes(ROUTES);

  const DARK_ROUTES = ["/", "/ommig", "/profil", "/kontakta"];
  const isHome =
    DARK_ROUTES.includes(pathname) ||
    pathname.startsWith("/uxuidesign") ||
    pathname.startsWith("/threedprint") ||
    pathname.startsWith("/crossmedia") ||
    pathname === "/grafiskproduktion/1";

  return (
    /*
     * WCAG fix — Error 3 & 4:
     * <main> se eliminó de aquí. Cada página es responsable
     * de su propio <main> para que el landmark sea correcto
     * y no incluya la Navbar ni elementos repetidos.
     *
     * app-shell es ahora un <div> neutro.
     */
    <div className={`app-shell ${isHome ? "app-shell--dark" : "app-shell--light"}`}>
      <ScrollToTop />
      {/* skip-link: WCAG 2.4.1 — permite saltar al contenido principal */}
      <a href="#main-content" className="skip-link">
        Hoppa till huvudinnehåll
      </a>
      <Navbar isHome={isHome} />
      {/*
       * El <main> ya NO está aquí.
       * Cada página (Home, OmMig, Projekter, etc.) tiene su propio <main>.
       * Este div solo actúa como contenedor de layout.
       */}
      <div className="app-content">{routes}</div>
    </div>
  );
};

export default App;
