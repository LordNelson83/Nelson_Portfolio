import { useParams, Link } from "react-router-dom";
import productDetail from "../data/productDetail";
import "../pagesCSS/crossMedia.css";

const CrossMedia = () => {
  const { id } = useParams();
  const product = productDetail.find((p) => p.id === Number(id));

  return (
    <>
      <div className="description-container">
        <h1 className="titel-big">{product.name}</h1>

        {/* Si el producto tiene experiencias */}
        {product.experiences ? (
          <ul className="ul">
            {product.experiences.map((exp, index) => (
              <li key={index}>
                <h2 className="sub-titel">{exp.school}</h2>
                <h3 className="sub-titel-period">{exp.year}</h3>
                <p className="experience-description">{exp.description}</p>
              </li>
            ))}
          </ul>
        ) : null}

        {/* Mostrar links si existen */}
        {product.links && product.links.length > 0 && (
          <div className="link-section">
            <h3 className="sub-titel">🌐 Länkar</h3>
            <ul className="ul">
              {product.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-link"
                  >
                    🔗 {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mostrar imágenes */}
        {product.images && (
          <div className="image-gallery">
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`${product.name} ${index + 1}`} />
            ))}
          </div>
        )}
      </div>

      <div>
        <Link to="/products">
          <button className="Hola">👈 Tillbaka</button>
        </Link>
      </div>
    </>
  );
};

export default CrossMedia;
