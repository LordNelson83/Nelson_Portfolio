import { Link } from "react-router-dom";
import "../pagesCSS/Products.css";
import { productsId } from "../data/productsId";
import { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsId); 
    }, []);

    return (
        <div className="erfarenhet-container">
            <h1 className="erfarenhet-title">Utbildning & Erfarenhet </h1>
            <ul className="erfarenhet-title-box">
                {products.map(product => (
                    <li className="erfarenhet-title-description" key={product.id}>
                        <Link to={`/CrossMedia/${product.id}`}>{product.name}<img 
                src={product.image} 
                alt={product.name} 
                className="productImage"
              /></Link>
                       <p style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3)), url(${product.image})` 
    }} 
>
    {product.description}
</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
