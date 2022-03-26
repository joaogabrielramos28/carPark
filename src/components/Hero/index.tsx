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
      <ImageWrapper>
        <Image
          src="/parking.png"
          width={650}
          height={650}
          alt={
            "Car parking with 2 cars, one purple and one white. Trees, sun and clouds in the sky"
          }
        />
      </ImageWrapper>
    </Container>
  );
};
export default Hero;
