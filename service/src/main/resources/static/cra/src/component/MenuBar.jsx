import React from "react";
import Logo from "./navigation/Logo";
import MenuList from "./navigation/MenuList";
import Profile from "./Profile";

const MenuBar = () => {
  return (
    <>
      <Logo text="Logo"></Logo>
      <nav>
        <ul>
          <MenuList title="Item"></MenuList>
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
