import React from 'react';
import "../pagesCSS/OmMig.css";
import me from "../assets/images2/me.png"

const OmMig = () => {
  return (
<div className="background">
    <h1 className="Namnet">Mitt namn är <strong className='strong'> Nelson</strong> ...</h1>
    <img className="me" src={me} alt="Me" />
    <p className="informationen">
    Jag vill börja med att säga hur roligt det är att du tittar in här. Den här portföljen är en inbjudan att lära känna mig – både som person och som yrkesverksam. Här får du ta del av min resa genom arbetslivet, mina projekt och mitt kreativa driv. Kanske blir du nyfiken på vad som döljer sig bakom varje roll och varje uppgift jag tagit mig?.
Jag beskriver mig själv som en entusiastisk, nyfiken och empatisk person med en positiv grundinställning. Jag är ständigt lärhungrig och motiveras av att utvecklas – både professionellt och personligt. Genom åren har jag haft flera olika roller, vilket har gjort mig flexibel och anpassningsbar i nya situationer. Jag ser utmaningar som möjligheter att växa, och möter dem med energi och lösningsfokus.
På fritiden tycker jag om att simma och hålla mig i form – en aktiv livsstil hjälper mig att må bra, hålla fokus och behålla motivationen. Mina kollegor beskriver mig ofta som social, hjälpsam och engagerad. Jag värdesätter goda relationer, både i arbetslivet och privat.
Min familj är min största inspirationskälla – de ger mig kraft, glädje och modet att våga ta nästa steg. Nu ser jag fram emot nya möjligheter, nya människor och nya erfarenheter. Kanske är detta början på något spännande?
    </p>
        
    </div>
    );
};
export default OmMig;