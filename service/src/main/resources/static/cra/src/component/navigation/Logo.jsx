import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ text }) => {
  return (
    <Link to="/">
      <button>
        <span>{text}</span>
      </button>
    </Link>
  );
};

export default Logo;
