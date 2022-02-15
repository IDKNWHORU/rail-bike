import React from "react";

const MenuList = ({ title, setActivate }) => {
  const activeMenu = (btn) => {
    setActivate(title);
  };
  return (
    <li>
      <button onClick={activeMenu}>
        <span>{title}</span>
      </button>
    </li>
  );
};

export default MenuList;
