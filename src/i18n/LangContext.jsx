import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "sv"
  );

  const switchLang = (code) => {
    setLang(code);
    localStorage.setItem("lang", code);
  };

  // t("section")         → devuelve el objeto completo de la sección
  // t("section", "key")  → devuelve un valor individual
  const t = (section, key) => {
    if (key === undefined) {
      // Devuelve el objeto completo de la sección, con fallback a sv
      return translations[lang]?.[section]
        ?? translations["sv"]?.[section]
        ?? {};
    }
    return translations[lang]?.[section]?.[key]
      ?? translations["sv"]?.[section]?.[key]
      ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, switchLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
