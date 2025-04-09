import React from "react";
import { useParams, Link } from "react-router-dom";
import productDetail from "../data/productDetail";
import "../pagesCSS/ThreeDPrint.css";

const ThreeDPrint = () => {
  const { id } = useParams();
  const product = productDetail.find((p) => p.id === Number(id));

  return (
    <div className="description-container">
      <h1 className="titel-big">{product.name}</h1>
      <div className="titel">
        <h2 className="sub-titel">{product.school}</h2>
        <h3 className="sub-titel-period">{product.year}</h3>
      </div>
      {product.images && (
    <>
      <img src={product.images} alt={product.name} />
    </>
)}
      <Link to="/products">
        <button className="Hola">👈 Tillbaka</button>
      </Link>
    </div>
  );
};

export default ThreeDPrint;