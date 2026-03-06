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

  const t = (section, key) => {
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
