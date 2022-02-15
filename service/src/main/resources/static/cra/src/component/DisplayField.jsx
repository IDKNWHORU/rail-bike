import React from "react";

const DisplayField = ({ label, placeholder }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input type="text" placeholder={placeholder} readOnly />
      </div>
    </div>
  );
};

export default DisplayField;
