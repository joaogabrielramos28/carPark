import React, { FormEvent, useState } from "react";
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
  UserName,
  UserEmail,
  ReSendConfirmation,
  UserLastLoginTitle,
  UserLastLoginDate,
} from "../../../styles/pages/me/styles";
import { setCookie, parseCookies } from "nookies";
const Me = () => {
  const [newUserImage, setNewUserImage] = useState<any | null>({});
  const storage = getStorage();
  const auth = getAuth();

  const { user } = useLoginContext();

  const update = async () => {
    const storageRef = ref(storage, `users/${newUserImage?.name}`);

    await uploadBytes(storageRef, newUserImage);

    const url = await getDownloadURL(storageRef).then((url) => {
      return url;
    });

    await updateProfile(auth.currentUser!, {
      displayName: "João Gabriel",
      photoURL: url,
    });
    const { "carPark.user": userCookies } = parseCookies();

    const cookiesUser = JSON.parse(userCookies);

    const newUser = {
      ...cookiesUser,
      photoURL: url,
    };
    setCookie(undefined, "carPark.user", JSON.stringify(newUser), {
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    reload(auth.currentUser!);
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      setNewUserImage(e.target?.files[0]);
    }
  };

  const handleSendEmailConfirmation = async () => {
    await sendEmailVerification(auth.currentUser!);

    reload(auth.currentUser!);
  };

  const lastLoginTimeStamp =
    Number(user?.user?.lastLoginAt) || user?.user.metadata.lastSignInTime;
  const createdAtTimeStamp =
    Number(user?.user?.createdAt) || user?.user.metadata.creationTime;

  const lastLoginDate = new Date(lastLoginTimeStamp!).toLocaleString("pt-BR");
  const createdAtDate = new Date(createdAtTimeStamp!).toLocaleString("pt-BR");

  return (
    <Container>
      {!!user && (
        <Painel>
          <UserImageWrapper>
            <UserImage src={user?.user?.photoURL || "/user-placeholder.png"} />
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
          <UserName>{user?.user.displayName}</UserName>
          <UserEmail>{user?.user.email}</UserEmail>

          {!user?.user.emailVerified && (
            <ReSendConfirmation onClick={handleSendEmailConfirmation}>
              Reenviar email para confirmação
            </ReSendConfirmation>
          )}
          <UserLastLoginTitle>Ultimo Acesso</UserLastLoginTitle>
          <UserLastLoginDate>{lastLoginDate}</UserLastLoginDate>
          <UserLastLoginTitle>Conta criada</UserLastLoginTitle>
          <UserLastLoginDate>{createdAtDate}</UserLastLoginDate>
          <button onClick={update}>UP</button>
        </Painel>
      )}
    </Container>
  );
};
export default Me;
