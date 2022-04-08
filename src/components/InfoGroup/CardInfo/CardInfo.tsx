import React from "react";
import Icon from "../../Icon/Icon";

import {
  Container,
  ContentWrapper,
  InfoContainer,
  Quantity,
  Type,
} from "./styles";
import { ICardInfoProps } from "./types";

const CardInfo = ({ quantity, icon, type, isLast }: ICardInfoProps) => {
  return (
    <Container isLast={isLast}>
      <ContentWrapper>
        <Icon icon={icon} />

        <InfoContainer>
          <Quantity>{quantity}</Quantity>
          <Type>{type}</Type>
        </InfoContainer>
      </ContentWrapper>
    </Container>
  );
};
export default CardInfo;
