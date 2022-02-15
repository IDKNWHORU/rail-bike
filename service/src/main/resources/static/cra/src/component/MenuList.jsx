import React from "react";

const MenuList = ({ title }) => {
  return (
    <li>
      <button>
        <span>{title}</span>
      </button>
    </li>
  );
};

export default MenuList;
