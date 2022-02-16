import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ title }) => {
  return (
    <li>
      <Link to={title}>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default MenuList;
