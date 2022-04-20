import React from "react";
import { IconBaseProps } from "react-icons";

export interface NavBarItemProps {
  icon: React.FC<IconBaseProps>;
  path?: string;
}
