import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ title }) => {
  const activeMenu = (btn) => {};
  return (
    <li>
      <Link to={title}>
        <button onClick={activeMenu}>
          <span>{title}</span>
        </button>
      </Link>
    </li>
  );
};

export default MenuList;
