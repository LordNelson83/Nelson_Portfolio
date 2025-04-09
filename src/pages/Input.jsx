import React from "react";
import "../pagesCSS/Kontakta.css";
const Input = ({name, type,onChange, placeholder, label,required,message}) => {
 return (
    <div className="inputfield">
      <label className="labelText">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        message={message}
      />
    </div>
  );
};

export default Input;