import React, { ReactNode, useRef } from "react";

import { Container, Header } from "./styles";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { useMeContext } from "../../contexts/Me";
import { useLoginContext } from "../../contexts/Login";
const ModalEdit = ({ children }: { children: React.ReactNode }) => {
  const { handleToogleEditMode, changeImage, handleChangeImage, update } =
    useMeContext();

  return (
    <Container>
      <Header>
        <AiOutlineClose size={32} onClick={handleToogleEditMode} />
      </Header>
      {children}
    </Container>
  );
};
export default ModalEdit;
