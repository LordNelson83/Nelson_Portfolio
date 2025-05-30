
import mustang2 from '../assets/images2/mustang2.png';
import mustang1 from '../assets/images2/mustang1.png';
import "../pagesCSS/Kontakta.css";

const Kontakta = () => {
  return ( 
    <>
   
       <h1 className="kontakt">Tack!</h1>
       <h2 className="kontakt-text">Om du har några frågor, förslag eller om du bara vill hälsa, tveka inte att kontakta mig .</h2>
       <div className='background1'>
       <img className="mustang1" src={mustang1} alt="car" />
       
    
    <div className="contact-section-container">
<div className="circle">

       <a
      href="https://www.linkedin.com/in/nelson-pe%C3%B1a-21881412a/"
      target="_blank"
      rel="noopener noreferrer"> ✔ Linkedin</a>
       <a
      href="https://github.com/LordNelson83"
      target="_blank"
      rel="noopener noreferrer"> ✔ Github</a>

    <a href="/CV_Nelson_Pena.pdf" download="CV_Nelson_Pena.pdf" type="application/pdf">
  ✔ Ladda ner CV
</a>


    <p className="texten"> ✉ nelsonpenna83@gmail.com</p>
</div>
    </div>
    <img className="mustang2" src={mustang2} alt="car" />
   </div>
   
   </>
  );
};

export default Kontakta;
