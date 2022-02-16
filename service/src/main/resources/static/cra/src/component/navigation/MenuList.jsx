import React from "react";

const MenuList = ({ title }) => {
  const activeMenu = (btn) => {};
  return (
    <li>
      <button onClick={activeMenu}>
        <span>{title}</span>
      </button>
    </li>
  );
};

export default MenuList;
