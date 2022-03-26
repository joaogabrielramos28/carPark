import React from "react";
import CardInfo from "./CardInfo";

import { Container, Wrapper } from "./styles";

const InfoGroup = () => {
  return (
    <Container>
      <Wrapper>
        <CardInfo image="/user.png" quantity="90+" type="Users" />
        <CardInfo image="/car-park.png" quantity="90+" type="Parks" />
        <CardInfo image="/car.png" quantity="90+" type="Cars" isLast />
      </Wrapper>
    </Container>
  );
};
export default InfoGroup;
