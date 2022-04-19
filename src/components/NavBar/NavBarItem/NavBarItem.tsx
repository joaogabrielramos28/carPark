import Link from "next/link";
import React from "react";
import { NavItem } from "./styles";
import { NavBarItemprops } from "./types";

const NavBarItem = ({ icon: Icon, path }: NavBarItemprops) => {
  return (
    <Link href={`/auth/app/${path}`} passHref>
      <NavItem>
        <Icon size={24} />
      </NavItem>
    </Link>
  );
};
export default NavBarItem;
