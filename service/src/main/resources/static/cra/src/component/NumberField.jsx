import React from "react";

const NumberField = ({ label, placeholder, min }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input type="number" placeholder={placeholder} min={min} required />
      </div>
    </div>
  );
};

export default NumberField;
