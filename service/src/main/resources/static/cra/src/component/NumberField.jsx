import React from "react";

const NumberField = () => {
  return (
    <div>
      <div>
        <span>차대번호</span>
      </div>
      <div>
        <input type="number" placeholder="차대번호를 입력해주세요" required />
      </div>
    </div>
  );
};

export default NumberField;
