import React from "react";

const Logo = ({ text, setActivate }) => {
  return (
    <button onClick={() => setActivate("index")}>
      <span>{text}</span>
    </button>
  );
};

export default Logo;
