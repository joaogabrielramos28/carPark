import React from "react";

import { Container, ItemsWrapper, Settings } from "./styles";
import { BsChevronRight } from "react-icons/bs";
import { FaParking, FaUserAlt } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import NavBarItem from "./NavBarItem/NavBarItem";
const NavBar = () => {
  return (
    <Container>
      <ItemsWrapper>
        <NavBarItem path="parking" icon={FaParking} />
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
