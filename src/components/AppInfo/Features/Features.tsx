import Image from "next/image";
import React from "react";

import { Container, Text } from "./styles";

interface IFeaturesProps {
  title: string;
}

const Features = ({ title }: IFeaturesProps) => {
  return (
    <Container>
      <Image
        src="/check.png"
        width="22"
        height="22"
        alt={"Checked image on green color"}
      />
      <Text>{title}</Text>
    </Container>
  );
};
export default Features;
