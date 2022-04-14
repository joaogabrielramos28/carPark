import Image from "next/image";
import React from "react";
import { Container } from "./styles";
import ClipLoader from "react-spinners/ClipLoader";
import { ILoadingProps } from "./types";
const Loading = ({ color, size }: ILoadingProps) => {
  return (
    <Container>
      <ClipLoader color={color} size={size} />
    </Container>
  );
};

export default Loading;
