import React from "react";
import type { NextComponentType } from "next";
import Image from "next/image";
import { Container, Content, Title, Button, ImageWrapper } from "./styles";

const Hero: NextComponentType = () => {
  return (
    <Container>
      <Content>
        <Title>
          Gerencie seu estacionamento de forma prática, rápida e segura
        </Title>
        <Button>Veja nossos estacionamentos</Button>
      </Content>
      <ImageWrapper></ImageWrapper>
    </Container>
  );
};
export default Hero;
