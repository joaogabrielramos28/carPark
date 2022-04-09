import React from "react";

import {
  Container,
  DownloadContainer,
  CTA,
  Title,
  Description,
  ActionsWrapper,
  IOSButton,
  CircleIOS,
  AndroidButton,
  CircleAndroid,
  ImageContainer,
} from "./styles";

import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

const AppMobile = () => {
  return (
    <Container data-aos="fade-right">
      <DownloadContainer>
        <CTA>Baixe nosso APP</CTA>
        <Title>The choice is yours, we`ve got you covered </Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tristique, nisl ut viverra porttitor, dolor sem lacinia orci, et
          pretium quam mi a eros sed molestie est.{" "}
        </Description>
        <ActionsWrapper>
          <IOSButton>
            <CircleIOS>
              <BsApple size={20} color={"#FFFF"} />
            </CircleIOS>
            App Store
          </IOSButton>
          <AndroidButton>
            <CircleAndroid>
              <FaGooglePlay size={18} color={"#383838"} />
            </CircleAndroid>
            Play Store
          </AndroidButton>
        </ActionsWrapper>
      </DownloadContainer>

      <ImageContainer
        src="https://cdn.dribbble.com/users/9516339/screenshots/16971584/media/224455b212ffdaca52831f935c8b2a78.png?compress=1&resize=1000x750&vertical=top"
        alt=""
      />
    </Container>
  );
};
export default AppMobile;
