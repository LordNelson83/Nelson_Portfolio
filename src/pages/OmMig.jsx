import React from 'react';
import "../pagesCSS/OmMig.css";
import me from "../assets/images2/me.png";
import Acrobat from "../assets/images2/Acrobat.png";
import CSS from "../assets/images2/CSS.png";
import Figma from "../assets/images2/Figma.png";
import Github from "../assets/images2/Github.png";
import HTLM from "../assets/images2/HTLM.png";
import Illustrator from "../assets/images2/Illustrator.png";
import Indesign from "../assets/images2/Indesign.png";
import Javascript from "../assets/images2/Javascript.png";
import Mailchimp from "../assets/images2/Mailchimp.png";
import microsoft_netlify from "../assets/images2/microsoft_netlify.png";
import Photoshop from "../assets/images2/Photoshop.png";
import Shapr3d from "../assets/images2/Shapr3d.png";
import react from "../assets/images2/React.png";

const OmMig = () => {
  return (
    <>
<div className="background">
  <div className='left-section'>
    <h1 className='titel'>Hej!<br/>Jag är Nelson</h1>
    <h2 className='subtitel'>Multikompetent designer: Cross Media,3D print, UX/UI & webbutvekling</h2>
    <p className="information">
Det är en inblick i vem jag är, vad som driver mig och hur jag arbetar. Genom åren har jag haft flera roller som format mig till en flexibel, nyfiken och lösnings orienterad person. Jag älskar att lära mig nytt och ser varje utmaning som en chans att växa Både som yrkesperson och människa.
Mitt engagemang märks inte bara i arbetet. På fritiden håller jag mig aktiv, bland annat genom simning, vilket hjälper mig att behålla fokus och energi. Mina kollegor beskriver mig som social, hjälpsam och engagerad, egenskaper jag värnar om i alla sammanhang.
Familjen är min största inspirationskälla och en ständig påminnelse om vad som är viktigt i livet. Nu ser jag fram emot att skapa nya samarbeten, anta nya utmaningar och göra skillnad.
</p>
</div>
<div className='rigth-section'>
  <div className='background-black'>
    <div className='Cirle-orange'>
      <img className='me' src={me} alt="Me"/> 
    </div>
  </div>
  <div className="skills-container">
  <div className="skills">
    <img src={Acrobat} alt="Acrobat"/>
     <img src={Indesign} alt="Indesign"/>
    <img src={Photoshop} alt="Photoshop"/>
    <img src={Illustrator} alt="Illustrator"/>
    <img src={Figma} alt="Figma"/>
    <img src={CSS} alt="CSS"/>
     <img src={Javascript} alt="JavaScript"/>
    <img src={HTLM} alt="HTML"/>
    <img src={react} alt="React"/>
    <img src={Github} alt="Github"/>
    <img src={Mailchimp} alt="Mailchimp"/>
    <img src={microsoft_netlify} alt="Microsoft/Netlify"/>
    <img src={Shapr3d} alt="Shapr3d"/>
    
  </div>
</div>
</div>
</div>
</>
    );
};
export default OmMig;