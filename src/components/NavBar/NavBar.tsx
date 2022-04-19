import React from "react";

import { Container, NavItem } from "./styles";
import { FiAirplay, FiBattery, FiBluetooth } from "react-icons/fi";
const NavBar = () => {
  return (
    <Container>
      <NavItem>
        <FiAirplay size={24} />
      </NavItem>
      <NavItem>
        <FiBattery size={24} />
      </NavItem>
      <NavItem>
        <FiBluetooth size={24} />
      </NavItem>
    </Container>
  );
};
export default NavBar;
