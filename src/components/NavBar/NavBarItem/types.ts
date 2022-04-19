import React from "react";
import { IconBaseProps } from "react-icons";

export interface NavBarItemprops {
  icon: React.FC<IconBaseProps>;
  path: string;
}
