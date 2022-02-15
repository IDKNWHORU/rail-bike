import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Profile from "./Profile";

const MenuBar = () => {
  return (
    <>
      <Logo text="Logo"></Logo>
      <nav>
        <ul>
          <MenuList title="Items"></MenuList>
          <MenuList title="Calculator"></MenuList>
          <MenuList title="Editor"></MenuList>
          <MenuList title="Printer"></MenuList>
        </ul>
      </nav>
      <Profile source="avatar.png"></Profile>
    </>
  );
};

export default MenuBar;
