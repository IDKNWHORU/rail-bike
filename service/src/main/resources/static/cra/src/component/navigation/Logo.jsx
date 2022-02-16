import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ text }) => {
  return (
    <Link to="/">
      <span>{text}</span>
    </Link>
  );
};

export default Logo;
