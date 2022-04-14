import Image from "next/image";
import React from "react";
import { Container } from "./styles";

const Loading = () => {
  return (
    <Container>
      <Image src="/spinner.gif" alt="Spinner girando" width={40} height={40} />
    </Container>
  );
};

export default Loading;
