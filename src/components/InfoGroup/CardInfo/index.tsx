import { NextComponentType } from "next";
import Image from "next/image";
import React from "react";

import {
  Container,
  ContentWrapper,
  ImageContainer,
  InfoContainer,
  Quantity,
  Type,
} from "./styles";

interface ICardInfoProps {
  quantity: string;
  image: string;
  type: string;
  isLast?: boolean;
}

const CardInfo = ({ quantity, image, type, isLast }: ICardInfoProps) => {
  return (
    <Container isLast={isLast}>
      <ContentWrapper>
        <ImageContainer>
          <Image src={image} width={25} height={25} alt={`Icone de ${type}`} />
        </ImageContainer>

        <InfoContainer>
          <Quantity>{quantity}</Quantity>
          <Type>{type}</Type>
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
};
export default CardInfo;
