import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bilderId } from "../data/bilderId";
import { productsId } from "../data/productsId";
import "../pagesCSS/products.css"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [bilder, setBilder] = useState([]);

  useEffect(() => {
    setProducts(productsId);
    setBilder(bilderId);
  }, []);

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Portfölj</h1>
      <p className="portfolio-info">
        Jag har alltid tyck om för färg, typsnitt, bild och konst. Efter att ha studerat grafisk design på Folkhögskolan i Svalöv och vidare i Stockholm med inriktning på grafisk produktion, arbetade jag tio år med digitaltryck och efterbehandling.
        När jag sökte nya utmaningar upptäckte jag 3D-printing och design,en väg där kodning blev en naturlig del för att förverkliga kreativa idéer. År 2024 valde jag att utvecklas vidare inom kodning, design och färg, med fokus på UX/UI-design och frontendutveckling.
        Jag ser detta som en spännande möjlighet att kombinera mina intressen och skapa innovativa designlösningar.
      </p>

      <ul className="portfolio-products">
        {products.map(product => (
          <li className="product-item" key={product.id}>
            <Link to={`/CrossMedia/${product.id}`}>
              {product.name}
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>
            {product.description && (
              <p
                className="product-description"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url(${product.image})`
                }}
              >
                {product.description}
              </p>
            )}
          </li>
        ))}
      </ul>

      <h3 className="portfolio-subtitle">Mina Färdigheter</h3>
      <div className="bilder-section">
        {bilder.map(bild => (
          <div key={bild.id} className="bilder-item">
            <img src={bild.image} alt={bild.name} className="product-image-utbildning" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
