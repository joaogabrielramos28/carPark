import React from "react";
import type { NextComponentType } from "next";
import Image from "next/image";
import { Container, Content, Title, Button, ImageWrapper } from "./styles";
import Link from "next/link";

const Hero: NextComponentType = () => {
  return (
    <Container>
      <Content>
        <Title>
          Gerencie seu estacionamento de forma prática, rápida e segura
        </Title>
        <Link href="/parks" passHref>
          <Button>Veja nossos estacionamentos</Button>
        </Link>
      </Content>
      <ImageWrapper></ImageWrapper>
    </Container>
  );
};
export default Hero;
