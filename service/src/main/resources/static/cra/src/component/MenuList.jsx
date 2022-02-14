import React from "react";

const MenuList = ({ title }) => {
  return (
    <li>
      <a href="#">
        <span>{title}</span>
      </a>
    </li>
  );
};

export default MenuList;
