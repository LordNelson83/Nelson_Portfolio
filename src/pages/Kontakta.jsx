import React from 'react';
import Input from './Input';
import "../pagesCSS/Kontakta.css";

const Kontakta = () => {
  return (
    <form
      action="https://formsubmit.co/nelsonpenna83@hotmail.com"
      method="POST"
      className="kontakt-form"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://tusitio.netlify.app/tack" />

      <h1 className="kontakt">Kontakta mig</h1>
      <h3 className="kontakt-text">
        Om du har några frågor, förslag eller om du bara vill hälsa, tveka inte att kontakta mig.
      </h3>
      <p className="texten">
        Ni är varmt välkomna att lämna era kommentarer på min portfölj. 
        Era synpunkter är ovärderliga och hjälper mig att utvecklas vidare. Tack!
      </p>

      <Input
        name="name"
        type="text"
        label="Namn"
        placeholder="Ditt namn"
        required
      />

      <Input
        name="email"
        type="email"
        label="E-post"
        placeholder="Din e-post"
        required
      />

      <div className="inputfield">
        <label className="labelText"></label>
        <textarea
          name="message"
          placeholder="Skriv ditt meddelande här..."
          required
        />
      </div>

      <button className="skicka" type="submit">Skicka</button>
    </form>
  );
};

export default Kontakta;
