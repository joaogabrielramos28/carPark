import React from "react";

import { Container } from "./styles";
import { BsChevronRight } from "react-icons/bs";
import { FaParking, FaUserAlt } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import NavBarItem from "./NavBarItem/NavBarItem";
const NavBar = () => {
  return (
    <Container>
      <NavBarItem path="parking" icon={FaParking} />
      <NavBarItem path="parking" icon={FaUserAlt} />
      <NavBarItem path="parking" icon={IoAnalyticsSharp} />
    </Container>
  );
};
export default NavBar;
