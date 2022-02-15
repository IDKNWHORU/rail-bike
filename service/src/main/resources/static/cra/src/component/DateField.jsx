import React from "react";

const DateField = ({ label }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input type="date" required></input>
      </div>
    </div>
  );
};

export default DateField;
