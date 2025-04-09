import React, { useState } from 'react';
import Input from './Input';
import "../pagesCSS/Kontakta.css";

const Kontakta = () => {
  const [kontaktData, setKontaktData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    setKontaktData({
      ...kontaktData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!kontaktData.name || !kontaktData.email || !kontaktData.message) {
      alert("Alla fält måste fyllas i!"); // Mensaje en sueco: "Todos los campos deben llenarse"
      return;
    }

    alert(`Submitted:\n\nName: ${kontaktData.name}\nEmail: ${kontaktData.email}\nMessage: ${kontaktData.message}`); 

    // Limpiar los campos después del envío
    setKontaktData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="kontakt-form">
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
        value={kontaktData.name}
        onChange={handleChange}
      />

      <Input
        name="email"
        type="email"
        label="E-post"
        placeholder="Din e-post"
        value={kontaktData.email}
        onChange={handleChange}
      />

      <div className="inputfield">
        <label className="labelText"></label>
        <textarea
          name="message"
          placeholder="Skriv ditt meddelande här..."
          value={kontaktData.message}
          onChange={handleChange}
        />
      </div>

      <button className="skicka" type="submit">Skicka</button>
    </form>
  );
};

export default Kontakta;
