import Link from "next/link";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "./styles";
import { IBackButtonProps } from "./types";

const BackButton = ({ path = "/" }: IBackButtonProps) => {
  return (
    <Container>
      <Link href={path} passHref>
        <AiOutlineArrowLeft size={32} color={"#000"} />
      </Link>
    </Container>
  );
};
export default BackButton;
