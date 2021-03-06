import React from "react";

import { Container, ItemsWrapper, Settings } from "./styles";

import { FaParking, FaUserAlt } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import NavBarItem from "./components/NavBarItem/NavBarItem";

const NavBar = () => {
  const parkingSubMenu = {
    title: "Parks",
    items: [
      {
        name: "Criar Park",
        path: "parks/create-parks",
      },
      {
        name: "Listar Parks",
        path: "parks/list-parks",
      },
    ],
  };

  return (
    <Container>
      <ItemsWrapper>
        <NavBarItem path="parks" icon={FaParking} SubMenu={parkingSubMenu} />
        <NavBarItem path="users" icon={FaUserAlt} />
        <NavBarItem path="analytics" icon={IoAnalyticsSharp} />
      </ItemsWrapper>
      <Settings>
        <NavBarItem icon={IoIosSettings} />
      </Settings>
    </Container>
  );
};
export default NavBar;
