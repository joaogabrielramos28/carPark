import Image from "next/image";
import React from "react";

import {
  Container,
  ImageWrapper,
  Content,
  Title,
  Subtitle,
  FeaturesContainer,
} from "./styles";
import Tasks from "./Features/Features";

const AppInfo = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/visual-data.png"
          width={530}
          height={530}
          alt={"Two people seeing graphs and table about their company"}
        />
      </ImageWrapper>

      <Content>
        <Title>Tudo o que você precisa em um só lugar</Title>
        <Subtitle>Aqui no aplicativo você consegue:</Subtitle>
        <FeaturesContainer>
          <Tasks title="Gerenciar seus carros estacionados" />
          <Tasks title="Escolher a melhor vaga" />
          <Tasks title="Agendar vagas" />
          <Tasks title="Pesquisar pelos melhores preços" />
        </FeaturesContainer>
      </Content>
    </Container>
  );
};
export default AppInfo;
