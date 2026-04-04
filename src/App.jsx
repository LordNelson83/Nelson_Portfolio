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
  { path: "/",                        element: <Home /> },
  { path: "/ommig",                   element: <OmMig /> },
  { path: "/profil",                  element: <Profil /> },
  { path: "/kontakta",                element: <Kontakta /> },
  { path: "/crossmedia/:id",          element: <CrossMedia /> },
  { path: "/grafiskproduktion/1",      element: <Projekter /> },
  { path: "/grafiskproduktion/:id",   element: <GrafiskProduktion /> },
  { path: "/threedprint/:id",         element: <ThreeDPrint /> },
  { path: "/uxuidesign/:id",          element: <UxUiDesign /> },
  { path: "/ahr-motor",               element: <AhrMotorCase /> },
];

/* ─── App ────────────────────────────────────────────────── */
const App = () => {
  const { pathname } = useLocation();
  const routes = useRoutes(ROUTES);

  /* Dark shell: Home + todas las páginas con bg #1E1E1E */
  const DARK_ROUTES = ["/", "/ommig", "/profil", "/kontakta"];
  const isHome = DARK_ROUTES.includes(pathname)
    || pathname.startsWith("/uxuidesign")
    || pathname.startsWith("/threedprint")
    || pathname.startsWith("/crossmedia")
    || pathname === "/grafiskproduktion/1"
    || pathname === "/ahr-motor";

  return (
    <div className={`app-shell ${isHome ? "app-shell--dark" : "app-shell--light"}`}>
      <ScrollToTop />
      <Navbar isHome={isHome} />
      <main className="app-main">{routes}</main>
    </div>
  );
};

export default App;
