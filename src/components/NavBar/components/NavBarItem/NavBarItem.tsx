import Link from "next/link";
import React, { useState } from "react";
import { useDashboardContext } from "../../../../contexts/Dashboard";
import Item from "../Item/Item";
import { NavItem, Container, ItemsWrapper, Title, Overlay } from "./styles";
import { NavBarItemProps, SubMenuProps } from "./types";
import { HiOutlineChevronRight } from "react-icons/hi";
const NavBarItem = ({
  icon: Icon,
  path,
  SubMenu = {} as SubMenuProps,
}: NavBarItemProps) => {
  const { menuSelected, handleToggleModal } = useDashboardContext();

  const [openSubMenu, setOpenSubMenu] = useState(false);

  const totalPath = `/auth/app/${path}`;

  const handleToggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };
  if (!path) {
    return (
      <NavItem onClick={handleToggleModal}>
        <Icon size={24} />
      </NavItem>
    );
  } else if (!SubMenu?.title) {
    return (
      <Link href={totalPath} passHref>
        <Container>
          <NavItem active={menuSelected === totalPath}>
            <Icon size={24} />
          </NavItem>
        </Container>
      </Link>
    );
  }

  return (
    <Container onClick={handleToggleSubMenu}>
      <NavItem active={menuSelected.startsWith(totalPath)}>
        <Icon size={24} />
        <HiOutlineChevronRight
          size={18}
          style={{ position: "absolute", transform: "translateX(22px)" }}
        />
      </NavItem>
      {SubMenu?.title && openSubMenu && (
        <>
          <ItemsWrapper>
            <Title>{SubMenu?.title}:</Title>
            {SubMenu?.items?.map((item) => (
              <Item key={item.path} path={item.path} title={item.name} />
            ))}
          </ItemsWrapper>
          <Overlay onClick={handleToggleSubMenu} />
        </>
      )}
    </Container>
  );
};
export default NavBarItem;
