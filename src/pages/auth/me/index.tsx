import React, { useState } from "react";
import {
  getAuth,
  sendEmailVerification,
  updateProfile,
  reload,
  updatePhoneNumber,
} from "firebase/auth";
import { AiOutlineCamera } from "react-icons/ai";
import { useLoginContext } from "../../../contexts/Login";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Container,
  Painel,
  UserImageWrapper,
  UserImage,
  CircleCamera,
  ReSendConfirmation,
  UserLastLoginTitle,
  UserLastLoginDate,
  InputEdit,
  UserInfo,
  Box,
  BoxHeader,
  BoxTitle,
} from "../../../styles/pages/me/styles";
import { setCookie, parseCookies } from "nookies";
import { Header } from "../../../components";
import Router from "next/router";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Me = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [changeImage, setChangeImage] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const storage = getStorage();
  const auth = getAuth();

  const { user } = useLoginContext();

  const update = async () => {
    await updateProfile(auth.currentUser!, {
      displayName: "João Gabriel",
      photoURL: changeImage,
    });
    const { "carPark.user": userCookies } = parseCookies();

    const cookiesUser = JSON.parse(userCookies);

    const newUser = {
      ...cookiesUser,
      photoURL: changeImage,
    };
    setCookie(undefined, "carPark.user", JSON.stringify(newUser), {
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    reload(auth.currentUser!);
    Router.reload();
  };

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      const image = e.target.files[0];
      const storageRef = ref(storage, `users/${image.name}`);

      await uploadBytes(storageRef, image);

      await getDownloadURL(storageRef).then((url) => {
        setChangeImage(url);
      });
    }
  };

  const handleSendEmailConfirmation = async () => {
    await sendEmailVerification(auth.currentUser!);

    reload(auth.currentUser!);
  };

  const handleToogleEditMode = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const lastLoginTimeStamp =
    Number(user?.user?.lastLoginAt) || user?.user.metadata.lastSignInTime;
  const createdAtTimeStamp =
    Number(user?.user?.createdAt) || user?.user.metadata.creationTime;

  const lastLoginDate = new Date(lastLoginTimeStamp!).toLocaleString("pt-BR");
  const createdAtDate = new Date(createdAtTimeStamp!).toLocaleString("pt-BR");
  console.log(changeImage);

  return (
    <>
      <Header />
      <Container>
        {!!user && (
          <Painel>
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
            <Box>
              <BoxHeader>
                {!isEditing ? (
                  <FiEdit2 size={24} onClick={handleToogleEditMode} />
                ) : (
                  <AiOutlineClose size={24} onClick={handleToogleEditMode} />
                )}
              </BoxHeader>
              <BoxTitle>Meus dados</BoxTitle>
              <UserInfo>
                Nome:{" "}
                {isEditing ? (
                  <InputEdit defaultValue={user?.user.displayName!} />
                ) : (
                  user?.user.displayName
                )}
              </UserInfo>
              <UserInfo>
                E-mail:{" "}
                {isEditing ? (
                  <InputEdit defaultValue={user?.user.email!} />
                ) : (
                  user?.user.email
                )}
              </UserInfo>
            </Box>

            {!user?.user.emailVerified && (
              <ReSendConfirmation onClick={handleSendEmailConfirmation}>
                Reenviar email para confirmação
              </ReSendConfirmation>
            )}
            <UserLastLoginTitle>Ultimo Acesso</UserLastLoginTitle>
            <UserLastLoginDate>{lastLoginDate}</UserLastLoginDate>
            <UserLastLoginTitle>Conta criada</UserLastLoginTitle>
            <UserLastLoginDate>{createdAtDate}</UserLastLoginDate>
            <button type={"submit"} onClick={update}>
              UP
            </button>
          </Painel>
        )}
      </Container>
    </>
  );
};
export default Me;
