import React from "react";
import { Link } from "react-router-dom";
import productDetail from "../data/productDetail";
import "../pagesCSS/grafiskProduktion.css";

const GrafiskProduktion = () => {
  const product = productDetail.find((p) => p.id === 2);

  return (
    <div className="description-container">
      <h1 className="titel-big">{product.name}</h1>

      {product.experiences ? (
        <ul className="ul-container">
          {product.experiences.map((exp, index) => (
            <li key={index}>
              <h2 className="sub-titel">{exp.school}</h2>
              <h3 className="sub-titel-period">{exp.year}</h3>
              <p className="sub-titel-description">{exp.description}</p> {/* ✅ Mostrar descripción */}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className="titel">
            <h2 className="sub-titel">{product.school}</h2>
            <h3 className="sub-titel-period">{product.year}</h3>
            <p className="sub-titel-description">{product.description}</p> {/* ✅ Mostrar descripción */}
          </div>
        </>
      )}

      {product.images && (
        <div className="image-gallery">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={`${product.name} ${index + 1}`} />
          ))}
        </div>
      )}

      <div>
        <Link to="/products">
          <button className="back-button">👈 Tillbaka</button>
        </Link>
      </div>
    </div>
  );
};

export default GrafiskProduktion;

