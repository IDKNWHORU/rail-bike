import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Profile from "./Profile";

const MenuBar = ({ setActivate }) => {
  return (
    <>
      <Logo text="Logo"></Logo>
      <nav>
        <ul>
          <MenuList title="Items" setActivate={setActivate}></MenuList>
          <MenuList title="Calculator" setActivate={setActivate}></MenuList>
          <MenuList title="Editor" setActivate={setActivate}></MenuList>
          <MenuList title="Printer" setActivate={setActivate}></MenuList>
        </ul>
      </nav>
      <Profile source="avatar.png"></Profile>
    </>
  );
};

export default MenuBar;
