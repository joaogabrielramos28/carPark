import Link from "next/link";
import React, { useState } from "react";
import { useDashboardContext } from "../../../contexts/Dashboard";
import { NavItem } from "./styles";
import { NavBarItemProps } from "./types";

const NavBarItem = ({ icon: Icon, path }: NavBarItemProps) => {
  const { menuSelected, handleToggleModal } = useDashboardContext();
  const totalPath = `/auth/app/${path}`;
  if (!path) {
    return (
      <NavItem onClick={handleToggleModal}>
        <Icon size={24} />
      </NavItem>
    );
  }
  return (
    <Link href={totalPath} passHref>
      <NavItem active={menuSelected === totalPath}>
        <Icon size={24} />
      </NavItem>
    </Link>
  );
};
export default NavBarItem;
