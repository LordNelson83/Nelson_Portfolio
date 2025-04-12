import "../pagesCSS/Footer.css";

const Footer = () => (
  <footer className="footer-container">
    <a
      href="/assets/images2/Magasin.pdf"
      download="Magasin.pdf"
      type="application/pdf"
    >
      Tidning
    </a>

    <a
      href="https://www.linkedin.com/in/nelson-pe%C3%B1a-21881412a/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Linkedin
    </a>

    <a
      href="/assets/images2/CV_Nelson_Pena.pdf"
      download="CV_Nelson_Pena.pdf"
      type="application/pdf"
    >
      Ladda ner CV
    </a>
  </footer>
);

export default Footer;
