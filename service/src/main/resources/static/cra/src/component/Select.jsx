import React from "react";

const Select = ({ label, placeholder }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <select required>
          <option value="" disabled selected>
            {placeholder}
          </option>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
