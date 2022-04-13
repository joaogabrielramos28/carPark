import React from "react";

import { Container, Header } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

import { IModalProps } from "./types";
const Modal = ({ children, onClose }: IModalProps) => {
  return (
    <Container>
      <Header>
        <AiOutlineClose size={32} onClick={onClose} />
      </Header>
      {children}
    </Container>
  );
};
export default Modal;
