import React from "react";

import { AiOutlineCamera } from "react-icons/ai";

import {
  Container,
  Painel,
  UserImageWrapper,
  UserImage,
  ReSendConfirmation,
  UserLastLoginTitle,
  UserLastLoginDate,
  UserInfo,
  Box,
  BoxHeader,
  BoxTitle,
  Header,
} from "../../../styles/pages/me/styles";
import { FiEdit2 } from "react-icons/fi";

import { BackButton, ModalEdit } from "../../../components";
import { useMeContext } from "../../../contexts/Me/";
import { useLoginContext } from "../../../contexts/Login";
const Me = () => {
  const {
    isEditing,
    handleToogleEditMode,
    handleSendEmailConfirmation,
    lastLoginDate,
    createdAtDate,
  } = useMeContext();

  const { user } = useLoginContext();

  return (
    <>
      <Header>
        <BackButton />
      </Header>
      <Container>
        {!!user && (
          <Painel>
            <UserImageWrapper>
              <UserImage
                src={user?.user?.photoURL || "/user-placeholder.png"}
              />
            </UserImageWrapper>
            <Box>
              <BoxHeader>
                <FiEdit2 size={24} onClick={handleToogleEditMode} />
              </BoxHeader>
              <BoxTitle>Meus dados</BoxTitle>
              <UserInfo>Nome: {user?.user.displayName}</UserInfo>
              <UserInfo>E-mail: {user?.user.email}</UserInfo>

              {!user?.user.emailVerified && (
                <ReSendConfirmation onClick={handleSendEmailConfirmation}>
                  Reenviar email para confirmação
                </ReSendConfirmation>
              )}
            </Box>

            <UserLastLoginTitle>Ultimo Acesso</UserLastLoginTitle>
            <UserLastLoginDate>{lastLoginDate}</UserLastLoginDate>
            <UserLastLoginTitle>Conta criada</UserLastLoginTitle>
            <UserLastLoginDate>{createdAtDate}</UserLastLoginDate>
            {isEditing && <ModalEdit />}
          </Painel>
        )}
      </Container>
    </>
  );
};
export default Me;
