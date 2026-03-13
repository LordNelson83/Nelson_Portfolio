import { Navigate } from "react-router-dom";

/* /profil → redirige a /uxuidesign/1 donde vive el contenido */
export default function Profil() {
  return <Navigate to="/uxuidesign/1" replace />;
}
