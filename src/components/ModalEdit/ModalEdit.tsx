import React, { useRef } from "react";

import {
  CircleCamera,
  Container,
  Header,
  UserImage,
  UserImageWrapper,
  Content,
  InfoWrapper,
  Info,
  InputEdit,
  ChangePasswordWrapper,
  UpdateUser,
} from "./styles";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { useMeContext } from "../../contexts/Me";
import { useLoginContext } from "../../contexts/Login";
const ModalEdit = () => {
  const { handleToogleEditMode, changeImage, handleChangeImage, update } =
    useMeContext();

  const newPassword = useRef<HTMLInputElement>(null);
  const confirmNewPassword = useRef<HTMLInputElement>(null);
  const newName = useRef<HTMLInputElement>(null);

  const handleUpdateUser = () => {
    const password = newPassword.current?.value;
    const confirmPassword = confirmNewPassword.current?.value;
    const name = newName.current?.value;
    update(name, password, confirmPassword);
  };

  const { user } = useLoginContext();
  return (
    <Container>
      <Header>
        <AiOutlineClose size={32} onClick={handleToogleEditMode} />
      </Header>
      <Content>
        <UserImageWrapper>
          <UserImage
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
              defaultValue={user?.user.displayName!}
              inputRef={newName}
            />
          </Info>
          <Info>
            <InputEdit defaultValue={user?.user.email!} />
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

          <UpdateUser onClick={handleUpdateUser}>Atualizar perfil</UpdateUser>
        </InfoWrapper>
      </Content>
    </Container>
  );
};
export default ModalEdit;
