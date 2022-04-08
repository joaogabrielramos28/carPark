import React from "react";
import CardInfo from "./CardInfo/CardInfo";
import { FaCar, FaParking, FaUser } from "react-icons/fa";

import { Container, Wrapper } from "./styles";

const InfoGroup = () => {
  return (
    <Container data-aos="fade-right">
      <Wrapper>
        <CardInfo icon={FaUser} quantity="90+" type="Users" />
        <CardInfo icon={FaParking} quantity="90+" type="Parks" />
        <CardInfo icon={FaCar} quantity="90+" type="Cars" isLast />
      </Wrapper>
    </Container>
  );
};
export default InfoGroup;
