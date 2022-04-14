import React, { useRef, useState } from "react";

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
  Content,
  CircleCamera,
  InfoWrapper,
  Info,
  InputEdit,
  ChangePasswordWrapper,
  UpdateUser,
  UserImageModal,
} from "../../../styles/pages/me/styles";
import { FiEdit2 } from "react-icons/fi";

import { BackButton, Loading, Modal } from "../../../components";
import { useMeContext } from "../../../contexts/Me";
import { useLoginContext } from "../../../contexts/Login";
import Image from "next/image";
import theme from "../../../styles/theme";
const Me = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const {
    isEditing,
    handleToogleEditMode,
    handleSendEmailConfirmation,
    lastLoginDate,
    createdAtDate,
    update,
    changeImage,
    handleChangeImage,
    loadingNewImage,
    loadingSendEmaiLConfirmation,
    loadingUpdateUser,
  } = useMeContext();

  const { user } = useLoginContext();

  const newPassword = useRef<HTMLInputElement>(null);
  const confirmNewPassword = useRef<HTMLInputElement>(null);
  const newName = useRef<HTMLInputElement>(null);

  const handleUpdateUser = () => {
    const password = newPassword.current?.value;
    const confirmPassword = confirmNewPassword.current?.value;
    const name = newName.current?.value;
    update(name, password, confirmPassword);
  };

  return (
    <>
      <Header>
        <BackButton />
      </Header>
      <Container>
        {!!user && (
          <Painel>
            <UserImageWrapper>
              {imageLoading && (
                <Loading size={50} color={theme.colors.secondary} />
              )}

              <UserImage
                src={user?.user?.photoURL || "/user-placeholder.png"}
                onLoad={() => setImageLoading(false)}
              />
            </UserImageWrapper>
            <Box>
              <BoxHeader>
                <FiEdit2 size={24} onClick={handleToogleEditMode} />
              </BoxHeader>
              <BoxTitle>Meus dados</BoxTitle>
              <UserInfo>Nome: {user?.user?.displayName}</UserInfo>
              <UserInfo>E-mail: {user?.user?.email}</UserInfo>

              {!user?.user?.emailVerified && (
                <ReSendConfirmation onClick={handleSendEmailConfirmation}>
                  {loadingSendEmaiLConfirmation ? (
                    <Loading color={theme.colors.shape} size={40} />
                  ) : (
                    "Reenviar email para confirmação"
                  )}
                </ReSendConfirmation>
              )}
            </Box>

            <UserLastLoginTitle>Ultimo Acesso</UserLastLoginTitle>
            <UserLastLoginDate>{lastLoginDate}</UserLastLoginDate>
            <UserLastLoginTitle>Conta criada</UserLastLoginTitle>
            <UserLastLoginDate>{createdAtDate}</UserLastLoginDate>
            {isEditing && (
              <Modal onClose={handleToogleEditMode}>
                {loadingNewImage && (
                  <Loading size={50} color={theme.colors.secondary} />
                )}
                <Content>
                  <UserImageWrapper>
                    <UserImageModal
                      src={
                        changeImage
                          ? changeImage
                          : user?.user?.photoURL || "/user-placeholder.png"
                      }
                    />

                    <CircleCamera>
                      <label htmlFor="file">
                        <AiOutlineCamera color={"#FFFF"} size={20} />
                      </label>

                      <input
                        type="file"
                        id="file"
                        onChange={(e) => handleChangeImage(e)}
                      />
                    </CircleCamera>
                  </UserImageWrapper>
                  <InfoWrapper>
                    <Info>
                      <InputEdit
                        defaultValue={user?.user?.displayName!}
                        inputRef={newName}
                      />
                    </Info>
                    <Info>
                      <InputEdit defaultValue={user?.user?.email!} />
                    </Info>
                    <ChangePasswordWrapper>
                      <InputEdit
                        placeholder="Digite sua nova senha"
                        type="password"
                        inputRef={newPassword}
                      />
                      <InputEdit
                        placeholder="Confirme sua senha"
                        type="password"
                        inputRef={confirmNewPassword}
                      />
                    </ChangePasswordWrapper>

                    <UpdateUser onClick={handleUpdateUser}>
                      {loadingUpdateUser ? (
                        <Loading color={theme.colors.shape} size={40} />
                      ) : (
                        "Atualizar perfil"
                      )}
                    </UpdateUser>
                  </InfoWrapper>
                </Content>
              </Modal>
            )}
          </Painel>
        )}
      </Container>
    </>
  );
};
export default Me;
