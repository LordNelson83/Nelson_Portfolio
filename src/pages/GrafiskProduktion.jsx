import React from "react";
import { Link } from "react-router-dom";
import "../pagesCSS/crossMedia.css";
import { useLang } from "../i18n/LangContext";
import magasin from "../assets/images/magasin.png";
import oak from "../assets/images/oak.png";
import oakui from "../assets/images/oak-ui.png";

const IMAGES_BY_INDEX = [
  [magasin],
  [oak, oakui],
  [],
];

const GrafiskProduktion = () => {
  const { t } = useLang();
  const title       = t("grafiskProduktion", "title");
  const back        = t("grafiskProduktion", "back");
  const experiences = t("grafiskProduktion", "experiences");

  return (
    <div className="description-container">
      <h1 className="titel-big">{title}</h1>

      <ul className="ul-container">
        {experiences.map((exp, index) => (
          <li key={index}>
            <h2 className="sub-titel">{exp.school}</h2>
            <h3 className="sub-titel-period">{exp.year}</h3>
            <p className="sub-titel-description">{exp.description}</p>

            {IMAGES_BY_INDEX[index]?.length > 0 && (
              <div className="image-gallery">
                {IMAGES_BY_INDEX[index].map((img, i) => (
                  <img key={i} src={img} alt={`${exp.school} ${i + 1}`} />
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div>
        <Link to="/Profil">
          <button className="back-button">{back}</button>
        </Link>
      </div>
    </div>
  );
};

export default GrafiskProduktion;
