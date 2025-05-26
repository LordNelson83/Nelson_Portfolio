import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsId } from "../data/productsId";
import "../pagesCSS/profil.css";

const Profil = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsId);
  
  }, []);

  return (
    <div className="portfolio-container">
    
      <div className="portfolio-title-vertical">360° Design</div>     
      <div className="portfolio-content">
      
        <ul className="portfolio-products">
          {products.map((product) => (
            <li className="product-item" key={product.id}>
              <p className="product-name">{product.name}</p>
             <Link to={`/CrossMedia/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profil;
