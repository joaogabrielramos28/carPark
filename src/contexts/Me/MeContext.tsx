import {
  getAuth,
  reload,
  sendEmailVerification,
  updateProfile,
  updatePassword,
  updateEmail,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { parseCookies, setCookie } from "nookies";
import React, { createContext, useState } from "react";
import { useLoginContext } from "../Login";
import { IMeContextProps } from "./types";
import Router from "next/router";

const MeContext = createContext({} as IMeContextProps);

const MeProvider = ({ children }: { children: React.ReactNode }) => {
  const [changeImage, setChangeImage] = useState("");
  const [loadingNewImage, setLoadingNewImage] = useState(false);
  const storage = getStorage();
  const [isEditing, setIsEditing] = useState(false);
  const [loadingSendEmaiLConfirmation, setLoadingSendEmailConfirmation] =
    useState(false);
  const [loadingUpdateUser, setLoadingUpdateUser] = useState(false);
  const { user } = useLoginContext();
  const auth = getAuth();

  const handleToogleEditMode = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files) {
      setLoadingNewImage(true);
      const image = e.target.files[0];
      const storageRef = ref(storage, `users/${image.name}`);

      await uploadBytes(storageRef, image);

      await getDownloadURL(storageRef).then((url) => {
        setChangeImage(url);
      });

      setLoadingNewImage(false);
    }
  };

  const update = async (
    newName?: string,
    password?: string,
    confirmPassword?: string
  ) => {
    setLoadingUpdateUser(true);
    const newPhotoUrl = changeImage === "" ? user?.user?.photoURL : changeImage;
    await updateProfile(auth.currentUser!, {
      displayName: newName,
      photoURL: newPhotoUrl,
    });

    if (password && confirmPassword) {
      if (password === confirmPassword) {
        await updatePassword(auth.currentUser!, password);
      }
    }

    reload(auth.currentUser!);
    setLoadingUpdateUser(false);
    Router.reload();
  };

  const handleSendEmailConfirmation = async () => {
    setLoadingSendEmailConfirmation(true);
    await sendEmailVerification(auth.currentUser!);

    setLoadingSendEmailConfirmation(false);

    reload(auth.currentUser!);
  };

  const lastLoginTimeStamp =
    Number(user?.user?.lastLoginAt) || user?.user?.metadata.lastSignInTime;
  const createdAtTimeStamp =
    Number(user?.user?.createdAt) || user?.user?.metadata.creationTime;

  const lastLoginDate = new Date(lastLoginTimeStamp!).toLocaleString("pt-BR");
  const createdAtDate = new Date(createdAtTimeStamp!).toLocaleString("pt-BR");

  return (
    <MeContext.Provider
      value={{
        isEditing,
        handleToogleEditMode,
        changeImage,
        handleChangeImage,
        handleSendEmailConfirmation,
        createdAtDate,
        lastLoginDate,
        update,
        loadingNewImage,
        loadingSendEmaiLConfirmation,
        loadingUpdateUser,
      }}
    >
      {children}
    </MeContext.Provider>
  );
};

const useMeContext = () => {
  const context = React.useContext(MeContext);

  if (!context) {
    throw new Error("useMeContext must be used within a MeProvider");
  }

  return context;
};

export { MeContext, MeProvider, useMeContext };
