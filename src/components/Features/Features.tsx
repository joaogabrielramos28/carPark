import React from "react";
import Icon from "../Icon/Icon";

import { Container, Title, Description } from "./styles";
import { IFeaturesProps } from "./types";

const Features = ({ icon, title, description }: IFeaturesProps) => {
  return (
    <Container>
      <Icon icon={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
export default Features;
