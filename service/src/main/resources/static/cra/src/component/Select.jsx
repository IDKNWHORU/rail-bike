import React from "react";

const Select = () => {
  return (
    <div>
      <div>
        <span>거래처</span>
      </div>
      <div>
        <select required>
          <option value="" disabled selected>
            거래처를 선택해주세요
          </option>
        </select>
      </div>
    </div>
  );
};

export default Select;
