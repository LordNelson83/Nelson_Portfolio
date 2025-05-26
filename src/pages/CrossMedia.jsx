import { useParams, Link } from "react-router-dom";
import productDetail from "../data/productDetail";
import "../pagesCSS/crossMedia.css";

const CrossMedia = () => {
  const { id } = useParams();
  const product = productDetail.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="allihop">
        <h2>❌ Produkt hittades inte.</h2>
        <Link to="/Profil">
          <button className="Hola">👈 Tillbaka</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="allihop">
        <h1 className="titel-big">{product.name}</h1>

        {product.experiences?.length > 0 && (
          <ul className="ul">
            {product.experiences.map((exp, index) => (
              <li key={index}>
                <div className="titel-stack">
                  <h2 className="sub-titel">{exp.school}</h2>
                  <h3 className="sub-titel-period">{exp.year}</h3>
                </div>
                <p className="experience-description">{exp.description}</p>

                {/* Experience links */}
                {exp.links?.length > 0 && (
                  <ul className="ul">
                    {exp.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience-link"
                        >
                           👉{link.label}👈
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {exp.images?.length > 0 && (
                  <div className="image-gallery experience-images">
                    {exp.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${exp.school} ${i + 1}`}
                        className="product-image"
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      {product.links?.length > 0 && (
        <div className="link-section">
          <h3 className="sub-titel"></h3>
          <ul className="ul">
            {product.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link"
                >
                  👉 {link.label}👈
                </a>
                {link.image && (
                  <img
                    src={link.image}
                    alt={link.label}
                    className="link-image"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {product.images?.length > 0 && (
        <div className="image-gallery general-gallery">
          <h3 className="sub-titel"></h3>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} ${index + 1}`}
              className="product-image"
            />
          ))}
        </div>
      )}

      <div>
        <Link to="/Profil">
          <button className="Hola">👈 Tillbaka</button>
        </Link>
      </div>
    </>
  );
};

export default CrossMedia;
