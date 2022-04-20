import React from "react";
import { IconBaseProps } from "react-icons";

export interface NavBarItemProps {
  icon: React.FC<IconBaseProps>;
  path?: string;
  SubMenu?: SubMenuProps;
}

export interface SubMenuProps {
  title: string;
  items: {
    name: string;
    path: string;
  }[];
}

export const InitialSubMenuValues = [
  {
    name: "Parks",
    isOpen: false,
  },
  {
    name: "Users",
    isOpen: false,
  },
  {
    name: "Analytics",
    isOpen: false,
  },
];
