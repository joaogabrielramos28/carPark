import React from "react";

import { Container, Header, Overlay } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

import { IModalProps } from "./types";
const Modal = ({ children, onClose, overlay = false }: IModalProps) => {
  return (
    <>
      <Container>
        <Header>
          <AiOutlineClose size={32} onClick={onClose} />
        </Header>
        {children}
      </Container>
      {overlay && <Overlay onClick={onClose} />}
    </>
  );
};
export default Modal;
