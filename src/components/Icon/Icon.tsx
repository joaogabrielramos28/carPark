import React from "react";

import { Container } from "./styles";
import { IIconProps } from "./types";

const Icon = ({ icon: Icon, size = 28 }: IIconProps) => {
  return (
    <Container>{Icon && <Icon size={size} color={"#F7373A"} />}</Container>
  );
};
export default Icon;
