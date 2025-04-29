import React from "react";
import "../pagesCSS/profil.css";
import Products from "./Products"; 
import programas from "../assets/images2/programas.png";

const Profil = () => {
  return (
    <div>
      <h1 className="Namn">Portfölj</h1>
      <p className="information">
Jag har alltid haft en passion för färg, typsnitt, bild och konst. Efter att ha studerat grafisk design på Folkhögskolan i Svalöv och vidare i Stockholm med inriktning på grafisk produktion, arbetade jag tio år med digitaltryck och efterbehandling.
När jag sökte nya utmaningar upptäckte jag 3D-printing och design,en väg där kodning blev en naturlig del för att förverkliga kreativa idéer. År 2024 valde jag att utvecklas vidare inom kodning, design och färg, med fokus på UX/UI-design och frontendutveckling.
Jag ser detta som en spännande möjlighet att kombinera mina intressen och skapa innovativa designlösningar.
</p>
      <Products /> 
      <h1>Mina Färdigheter</h1>
      <img className="programas" src={programas} alt="program"/>
    </div>

  );
};

export default Profil;
